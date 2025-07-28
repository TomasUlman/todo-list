# 📝 ToDo List

A simple and personal to-do list application built with React. This project serves as hands-on practice with React, component architecture, and local state management.

## 🚀 Live demo
[https://tomasulman-todolist.netlify.app/](https://tomasulman-todolist.netlify.app/)

## 🧩 Features
- Add, edit, and delete tasks
- Each task includes:
  - Title
  - Optional note
  - Optional due date
- Checkbox for marking completion
- Overdue tasks are highlighted in red
- Tasks are persisted using `localStorage`
- Interactive UI with toggleable form and task list
- Responsive layout and clean custom styling

## 🛠 Technologies used
- React (Create React App)
- Vanilla CSS
- `useState`, `useEffect`
- `localStorage`
- Component-based design

## 📦 Run locally

```bash
git clone https://github.com/your-username/todo-list.git
cd todo-list
npm install
npm start
```

## 📄 Notes
- All data is stored in the browser using `localStorage`
- No API keys or backend needed
- Tasks are uniquely identified via `crypto.randomUUID()`

---

© 2025 Tomáš Ulman. Personal project.
