# 🧑‍💼 Employee Management System using React

This is a front-end focused **Employee Management System** built with **React**. It enables users to perform essential operations such as adding, editing, and viewing employee records. Instead of using a backend server or database, this project uses the browser's **LocalStorage** to persist data across sessions.

---

## 🚀 Features

- ➕ Add new employee details (name, role, department, etc.)
- 📄 Giving Tasks To employee
- ADMINDASHBOARD and EMPLOYEEDASHBOARD
- 🖊️ Edit existing employee information
- 📄 View all employees in a structured, responsive table
- 💾 Data persistence using **LocalStorage**
- ⚡ Instant updates with **React state and hooks**

---

## 🛠️ Tech Stack

- **React** (functional components)
- **React Router DOM** (for page navigation)
- **CSS / Tailwind / Bootstrap** (choose based on your styling method)
- **LocalStorage API** (for saving data without a backend)

## DAY1 Work

- Added new employee details and stored them in LocalStorage

- Edited and updated existing employee info

- Displayed all employees in a table format

- Used React state and props to manage data

- Used LocalStorage to keep data saved even after refresh

- Worked with React Router for page navigation

- Handled form inputs and validations

- For each  EMPLOYEE asigned count of newtask,failedtask,accepttask and completed task

## DAY-1 Insight

#### I thoroughly enjoyed building this project as it strengthened my understanding of React fundamentals, state management, and data persistence using LocalStorage—all while applying them in a real-world use case.

## Next TASKS
- Creating and giving new task to employees
- Setting this task in localStorage

## DAY-2 Overview
This feature enables managers or admins to **assign new tasks to employees** and track them efficiently.  
It streamlines task management by allowing quick creation, assignment, and progress monitoring of work items.

## Features
- **Assign New Tasks** – Create and assign tasks to specific employees.
- **Automatic Tracking** – Track all newly assigned tasks in the system.
- **Real-Time Updates** – Task lists update instantly after assignment.
- **Employee Task View** – Employees can view newly assigned tasks in their dashboard.
- **Status Management** – Tasks can be marked as *Completed*, *Failed*, or *NewTask*.

## How It Works
1. **Navigate to Task Assignment** – Go to the **Task Management** section.
2. **Create New Task** – Enter task details (title, description, deadline, priority).
3. **Assign Employee** – Select the employee from the list.
4. **Save Task** – Once saved, the task is immediately added to the employee’s task list.
5. **Track Progress** – Use the dashboard to monitor task updates and completions.

## Example Flow
1. Manager creates a **"Prepare Monthly Report"** task.
2. Assigns it to **Arjun** with a deadline of **Aug 15, 2025**.
3. John sees the new task instantly in his dashboard.
4. John updates the status as work progresses.
5. Manager reviews the completion status in the system.

## Benefits
- Improves productivity and accountability.
- Reduces communication gaps.
- Centralizes all tasks for better tracking.
- Helps in performance evaluation.
"""

## Tomorrow AGENDA
- Enhance the task management system by:
- Automatically updating task status based on completion time(deadline date).
  (1. Automatic Task Status Update

    If a task is not completed before the deadline → Mark as Failed.

    If a task is completed on or before the deadline → Mark as Completed.

    Ensure status updates run automatically without manual input.)
  
- Expanding functionality in the Manager Dashboard.
    (2. Manager Dashboard Enhancements

    Add new insights for managers, such as:

    List of Failed Tasks by employee.
  
    Summary of Completed vs. Failed tasks.
  
    Include quick-action buttons for:
  
    Reassign task.
    Extend deadline.)

