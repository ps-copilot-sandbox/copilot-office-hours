# 🔁 Multi-File Refactoring with GitHub Copilot Agent Mode

This demo showcases how **GitHub Copilot Agent Mode** can assist with **multi-file refactoring** — one of the most powerful and time-saving features of Agent Mode. The scenario simulates a common developer task: **renaming a function that is used across multiple files** in a project.

---

## 🎯 Objective

Refactor the function `getUserData()` to `fetchUserProfile()` and ensure that:
- All **function definitions**, **imports**, and **usages** are updated across the codebase
- The refactor is **safe**, **consistent**, and **automated**
- Agent Mode handles the changes without needing to open every file manually

---

## 🗂️ Project Overview

This mini project simulates a real Node.js codebase with multiple layers:
```
multi-file-refactoring/ 
├── services/
│   ├── authService.js
│   └── userService.js
├── routes/
│   └── userRoutes.js
├── utils/
│   └── helpers.js
└── index.js
```

The `getUserData()` function is used in various files — including services, routes, and utility logic.

---

## ⚙️ How to Run This Demo

### Prerequisites
- [VS Code – Insiders Edition](https://code.visualstudio.com/insiders/)
- GitHub Copilot with **Agent Mode enabled**
- Node.js (optional, for running the code)

### Steps
1. Open the `multi-file-refactoring/` folder in **VS Code Insiders**.
2. Open the **Copilot Chat panel** and switch the dropdown to **Agent**.
3. In any file (e.g., `userService.js`), enter this prompt: 
```Refactor the getUserData function to be named fetchUserProfile, and update all references across the project.```
4. Agent Mode will search for all usages and offer to make the change. Review the diffs and approve the refactor.

---

## 💡 What This Demonstrates

- **Context awareness**: Agent Mode understands where the function is used across files.
- **Multi-file changes**: It updates the implementation, imports, and usages automatically.
- **Developer efficiency**: Refactoring that could take 15-30 minutes manually is done in seconds — with confidence.

---

## ✅ Success Criteria

By the end of the demo, you should see:
- All `getUserData` references renamed to `fetchUserProfile`
- Clean and consistent code updates
- Zero manual searching or file-by-file editing

---

## 🧠 Why This Matters

Multi-file refactoring is one of the most common and risky dev tasks — it’s easy to miss something. Copilot Agent Mode takes on that cognitive load, ensuring safer, faster updates at scale.





