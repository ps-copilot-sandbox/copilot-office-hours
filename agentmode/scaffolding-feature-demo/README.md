# 🏗️ GitHub Copilot Agent Mode – Feature Scaffolding Demo

This demo showcases how **GitHub Copilot Agent Mode** can be used to quickly scaffold a new feature across multiple files. Rather than building everything from scratch, developers can describe their intent and let Copilot generate the core structure and logic — saving time and reducing boilerplate.

---

## 🎯 Objective

Demonstrate how Copilot Agent Mode can:
- Interpret a high-level prompt
- Create new service and route files
- Wire everything into an existing application structure
- Follow project conventions automatically

---

## 📚 Use Case: Adding a New “Product” Feature

In this demo, you will ask Copilot to scaffold a new “Product” feature in an Express.js app. It will:
- Create a `productService.js` with basic functions like `createProduct()` and `getProductById()`
- Scaffold a new `productRoutes.js` file to expose those functions via REST
- Update `index.js` to mount the routes under `/api/products`

---

## 🗂️ Starting Project Structure

```
scaffold-feature-demo/
├── services/
│   └── (empty)
├── routes/
│   └── (empty)
└── index.js               # Entry point
```

---

## ⚙️ Requirements

- [Visual Studio Code – Insiders Edition](https://code.visualstudio.com/insiders/)
- GitHub Copilot with **Agent Mode enabled**
- Node.js (optional, for running the app)

---

## 🧪 How to Run the Demo

1. Open the `scaffold-feature-demo/` folder in **VS Code Insiders**.
2. Open the **Copilot Chat panel**.
3. Switch the dropdown to **Agent** mode.
4. Use the following prompt inside `index.js` or in any open file:```Scaffold a new product service and routes. I need createProduct and getProductById functions, and the routes should be mounted under /api/products.:```
5. Review the suggested files and changes, then approve to apply.

---

## ✅ Expected Outcome

Copilot Agent Mode should:
- Create a `productService.js` file in `services/`
- Create a `productRoutes.js` file in `routes/`
- Modify `index.js` to import and use the new route
- Ensure everything follows Express.js best practices

---

## 💡 What This Demonstrates

- Copilot can generate **production-ready scaffolding** from natural language prompts
- It understands **file structure, naming conventions, and logical connections**
- Developers can skip repetitive boilerplate and move straight to feature logic

---

## 📌 Why It Matters

Scaffolding new features is one of the most common and time-consuming tasks for developers. Copilot Agent Mode accelerates this process, helping teams stay focused on what matters: building value.
