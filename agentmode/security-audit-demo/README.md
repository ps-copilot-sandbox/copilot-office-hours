# 🛡️ GitHub Copilot Agent Mode – Security Audit & Fixes Demo

This demo showcases how **GitHub Copilot Agent Mode** can assist in identifying and remediating **common security vulnerabilities** in application code. In this example, we focus on a classic issue — **SQL injection via unsanitized user input** — and let Agent Mode take the lead on securing it.

---

## 🎯 Objective

Demonstrate how Copilot Agent Mode can:
- Analyze and understand potentially insecure code
- Propose safer alternatives based on modern security practices
- Automatically apply code changes across files when needed

---

## 📚 Use Case: Insecure Login Handler

The project includes a simplified backend with a login route that:
- Takes `username` and `password` from the request body
- Constructs a SQL query by directly embedding user input (⚠️ vulnerable)
- Returns a login response based on query results

We'll use Copilot Agent Mode to **analyze and fix** the insecure logic.

---

## 🗂️ Project Overview
```
security-audit-demo/ 
├── db/
│   └── connection.js      # Simulated query engine
├── routes/
│   └── loginRoute.js      # Contains insecure logic
└── index.js               # Entry point
```
---

## ⚙️ Requirements

- [Visual Studio Code – Insiders Edition](https://code.visualstudio.com/insiders/)
- GitHub Copilot with **Agent Mode enabled**
- Node.js (optional, for running the code)

---

## 🧪 How to Run the Demo

1. Open the `security-audit-demo/` folder in **VS Code Insiders**.
2. Open the **Copilot Chat panel**.
3. Switch the dropdown to **Agent**.
4. Open `loginRoute.js` and enter this prompt:```This login function is insecure. Review and fix any security vulnerabilities, including SQL injection.```
5. Review the proposed changes, approve them, and optionally test the updated logic.

---

## 💡 What This Demonstrates

- Copilot Agent Mode can **identify real-world security flaws**
- It understands context across files, not just the line you’re looking at
- It provides **production-ready fixes**, not just suggestions

---

## ✅ Expected Outcome

- A refactored login route using **parameterized queries** or safer practices
- Better handling of input sanitization and validation
- Clean, readable, and secure code without manual patching

---

## 📌 Why It Matters

Security issues like SQL injection, insecure deserialization, and weak input validation are still among the most common and costly bugs. Copilot Agent Mode helps catch and fix them early — with minimal effort from the developer.


