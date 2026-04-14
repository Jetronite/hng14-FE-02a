const card = document.querySelector("[data-testid='test-todo-card']");
const title = document.querySelector("[data-testid='test-todo-title']");
const desc = document.querySelector("[data-testid='test-todo-description']");
const priority = document.querySelector("[data-testid='test-todo-priority']");
const todoStatus = document.querySelector("[data-testid='test-todo-status']");
const checkbox = document.querySelector("[data-testid='test-todo-complete-toggle']");
const statusControl = document.querySelector("[data-testid='test-todo-status-control']");
const timeEl = document.getElementById("time-remaining");
const editBtn = document.querySelector("[data-testid='test-todo-edit-button']");
const form = document.querySelector("[data-testid='test-todo-edit-form']");
const titleInput = document.querySelector("[data-testid='test-todo-edit-title-input']");
const descInput = document.querySelector("[data-testid='test-todo-edit-description-input']");
const cancelBtn = document.querySelector("[data-testid='test-todo-cancel-button']");
const expandBtn = document.querySelector("[data-testid='test-todo-expand-toggle']");
const collapsible = document.querySelector("[data-testid='test-todo-collapsible-section']");
const priorityInput = document.querySelector("[data-testid='test-todo-edit-priority-select']");
const dateInput = document.querySelector("[data-testid='test-todo-edit-due-date-input']");
const saveBtn = document.querySelector("[data-testid='test-todo-save-button']");

let todo = {
  title: "Build Portfolio Website",
  description: "Create a modern portfolio using Nuxt and deploy it.",
  priority: "High",
  todoStatus: "In Progress",
  dueDate: new Date("2026-04-16T18:00:00"),
  completed: false
};

function render() {
  // Update text content
  title.textContent = todo.title;
  desc.textContent = todo.description;
  priority.textContent = todo.priority;
  todoStatus.textContent = todo.todoStatus;

  // Update due date display
  const dateDisplay = document.querySelector("[data-testid='test-todo-due-date']");
  if (dateDisplay) {
    dateDisplay.textContent = todo.dueDate.toLocaleDateString();
  }

  // Sync form controls
  statusControl.value = todo.todoStatus;
  checkbox.checked = todo.completed;

  // UI state classes
  card.classList.toggle("completed", todo.completed);

  // Use classList instead of overwriting .className entirely
  priority.className = `badge ${todo.priority.toLowerCase()}`;
  todoStatus.className = `badge status ${todo.todoStatus.toLowerCase().replace(/\s+/g, "-")}`;
}

function updateTime() {
  if (!timeEl) return;

  if (todo.todoStatus === "Done" || todo.completed) {
    timeEl.textContent = "Completed";
    return;
  }

  const now = new Date();
  const diff = todo.dueDate - now;

  if (diff <= 0) {
    const mins = Math.floor(Math.abs(diff) / (1000 * 60));
    const hours = Math.floor(mins / 60);
    timeEl.textContent = hours > 0 ? `Overdue by ${hours}h` : `Overdue by ${mins}m`;
    timeEl.setAttribute("data-testid", "test-todo-overdue-indicator");
  } else {
    const mins = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(mins / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) timeEl.textContent = `Due in ${days}d`;
    else if (hours > 0) timeEl.textContent = `Due in ${hours}h`;
    else timeEl.textContent = `Due in ${mins}m`;
  }
}

// EVENT LISTENERS

checkbox.addEventListener("change", () => {
  todo.completed = checkbox.checked;
  todo.todoStatus = todo.completed ? "Done" : "Pending";
  render();
  updateTime(); // Update immediately on toggle
});

statusControl.addEventListener("change", (e) => {
  todo.todoStatus = e.target.value;
  todo.completed = (todo.todoStatus === "Done");
  render();
  updateTime();
});

editBtn.addEventListener("click", () => {
  form.classList.remove("hidden");
  titleInput.value = todo.title;
  descInput.value = todo.description;
  priorityInput.value = todo.priority;

  // Local ISO string hack for datetime-local input
  const tzOffset = (new Date()).getTimezoneOffset() * 60000;
  const localISOTime = (new Date(todo.dueDate - tzOffset)).toISOString().slice(0, 16);
  dateInput.value = localISOTime;
});

saveBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent form submission if it's in a <form>
  todo.title = titleInput.value;
  todo.description = descInput.value;
  todo.priority = priorityInput.value;
  todo.dueDate = new Date(dateInput.value);

  form.classList.add("hidden");
  render();
  updateTime();
});

let expanded = false;

expandBtn.addEventListener("click", () => {
  expanded = !expanded;

  collapsible.style.maxHeight = expanded ? "none" : "100px";
  expandBtn.textContent = expanded ? "Show less" : "Show more";
  expandBtn.setAttribute("aria-expanded", expanded);
});

cancelBtn.addEventListener("click", () => {
  form.classList.add("hidden");
});

// Initialization
setInterval(updateTime, 30000);
render();
updateTime();