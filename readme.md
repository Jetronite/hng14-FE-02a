# 🚀 Frontend Wizards — Stage 1a

## Advanced Todo Card (Interactive & Stateful)

## 📌 Overview

In **Stage 1a**, the Todo Card evolves from a static UI into a more interactive, stateful component. This stage focuses on enhancing usability, accessibility, and responsiveness while still maintaining a single-card architecture (not a full app).

---

## ✨ What Changed from Stage 0

Compared to Stage 0, the Todo Card now includes:

* Editable content (title, description, priority, due date)
* Status transitions (Pending, In Progress, Done)
* Expand/collapse functionality for long descriptions
* Real-time time tracking (with overdue detection)
* Visual indicators for priority and status
* Improved accessibility (ARIA attributes, keyboard navigation)
* Better responsive behavior across screen sizes

---

## 🆕 Features Implemented

### 📝 1. Edit Mode

Users can modify todo details through an edit form.

**Includes:**

* Title input
* Description textarea
* Priority dropdown
* Due date input
* Save & Cancel buttons

**Behavior:**

* Clicking **Edit** opens the form
* **Save** updates the card
* **Cancel** restores previous values
* Focus returns to Edit button after closing
* (Bonus) Focus is trapped within the form while editing

---

### 🔄 2. Status Controls

Status is now interactive instead of static.

**Available statuses:**

* Pending
* In Progress
* Done

**Behavior rules:**

* Checkbox toggle → sets status to **Done**
* Setting status to **Done** → checkbox becomes checked
* Unchecking after Done → resets to **Pending**
* UI stays synchronized across:

  * Checkbox
  * Status display
  * Status control

---

### 🎯 3. Priority Indicator

Visual cues reflect task priority:

* **Low** → subtle styling
* **Medium** → moderate emphasis
* **High** → strong visual highlight (e.g., bold color/accent)

This may include:

* Colored dots
* Border accents
* Background styling

---

### 📖 4. Expand / Collapse Description

Handles long descriptions cleanly.

**Behavior:**

* Collapses by default if content exceeds a threshold
* Expand button reveals full content
* Toggle is keyboard accessible

---

### ⏱️ 5. Time Management Enhancements

Dynamic and real-time time tracking.

**Features:**

* Displays:

  * "Due in 2 days"
  * "Due in 3 hours"
  * "Due in 45 minutes"
  * "Overdue by 1 hour"
* Updates every **30–60 seconds**
* When marked **Done**:

  * Stops updating
  * Displays: `"Completed"`

---

### ⚠️ 6. Overdue Indicator

Clearly signals overdue tasks.

* Visual alert (e.g., red text or badge)
* Explicit "Overdue" label
* Triggered when due date passes and task is not completed

---

## 🎨 Visual State Changes

| State         | Behavior                            |
| ------------- | ----------------------------------- |
| Done          | Strike-through title, muted styling |
| High Priority | Strong highlight/accent             |
| Overdue       | Red indicator                       |
| In Progress   | Distinct styling                    |

---

## ♿ Accessibility Notes

* All form fields use proper `<label for="">`
* Status control has an accessible name
* Expand toggle uses:

  * `aria-expanded`
  * `aria-controls`
* Collapsible section has a matching `id`
* Live time updates use:

  * `aria-live="polite"`

### ⌨️ Keyboard Navigation Order

1. Checkbox
2. Status control
3. Expand toggle
4. Edit
5. Delete
6. Save/Cancel (in edit mode)

---

## 📱 Responsiveness

### Supported Breakpoints:

* **Mobile (320px)**
* **Tablet (768px)**
* **Desktop (1024px+)**

### Behavior:

* Edit form stacks vertically on mobile
* Priority & status align horizontally on desktop
* Handles:

  * Long titles
  * Wrapped tags
  * Extremely long descriptions
* No layout breaking or overflow issues

---

## 🧪 Acceptance Criteria Checklist

* ✅ All Stage 0 test IDs still exist
* ✅ All new test IDs implemented
* ✅ Fully functional edit mode
* ✅ Status transitions synchronized
* ✅ Expand/collapse accessible
* ✅ Overdue logic accurate
* ✅ No visual overflow across screen sizes
* ✅ Full keyboard usability
* ✅ Time updates dynamically
* ✅ Clean and maintainable state management

---

## 🛠️ Design Decisions

* Chose controlled state for all editable fields for predictability
* Centralized status logic to avoid inconsistencies
* Used interval-based updates for time tracking
* Prioritized accessibility early to avoid retrofitting
* Designed UI to scale without introducing layout shifts

---

## ⚠️ Known Limitations

* Time updates rely on client-side intervals (may drift slightly)
* No persistent storage (state resets on refresh)
* Focus trapping in edit mode may not cover all edge cases
* Animations (if any) are minimal

---

## 📦 Submission Details

* 🔗 Live URL: *[Add your deployed link]*
* 📁 GitHub Repo: *[Add repository link]*
* 🗂️ Airtable Link: *[Add link]*
* 📄 Submission Form:
  https://docs.google.com/forms/d/e/1FAIpQLSfyENWbGf9qRkmDj77BIEAPkO0WwIqDpeR6_dte026HA-KuWQ/viewform

---

## ⏰ Deadline

**17/04/2026 — 11:59 PM**

---

## 🙌 Summary

Stage 1a transforms the Todo Card into a more realistic, interactive component by introducing state synchronization, accessibility improvements, and real-time behavior—laying the groundwork for a full application in future stages.
