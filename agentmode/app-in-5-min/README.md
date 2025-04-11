# 🚀 Build an iOS Personal Trainer App in 5 Minutes with Copilot Agent Mode

This demo showcases the power of **GitHub Copilot Agent Mode** to create a complete, working **iOS app in Swift** — in just minutes. Using natural language, Copilot will generate a personal trainer app that adjusts workouts based on body focus and duration input.

---

## 🎯 Objective

Use GitHub Copilot Chat with **Agent Mode** to generate an iOS app that:
- Asks the user what **body part** they want to work out (Upper body / Lower body / Core strength)
- Accepts a **duration input** and updates the workout accordingly
- Runs inside **Xcode Simulator**

---

## 🗂️ Project Overview

This is a single-file SwiftUI demo to accelerate Copilot’s performance:
```
personal-trainer-demo/
└── ContentView.swift
```

Placing this file ahead of time provides Copilot with essential context and avoids it generating only setup steps instead of code.

---

## ⚙️ How to Run This Demo

### Prerequisites
- [Xcode](https://developer.apple.com/xcode/) with iOS Simulator
- GitHub Copilot with **Agent Mode enabled**
- `ContentView.swift` file created and opened in your project

### Steps
1. Open `ContentView.swift` in **Xcode**.
2. Open the **Copilot Chat** panel in your IDE.
3. Ensure **Agent Mode** is selected from the dropdown at the bottom.
4. Paste this command into Copilot Chat:
```plaintext
Create an iOS app that is a personal trainer. It will ask me what part of the body I want to work out (Upper body / Lower body / core strength) and based on that generate a workout. Include a label for me to enter how long I would like to work out for and change the workout based on that response. I am using XCode so that I can see the app in a simulator. Compile the app.
```
5. Follow any Copilot setup steps for Xcode if prompted.
6. Click the **Play button** in Xcode to compile and run.
7. If you get an error, paste it into **Copilot Chat** and ask for a fix.

💡 Tip: You can also add high-level comments at the top of `ContentView.swift` to further guide Copilot.

---

## 💡 What This Demonstrates

- **Natural language to working code** in Swift
- Copilot’s understanding of **context through file presence**
- Fast iteration by **looping through the process** 2–3 times to gain confidence

---

## ✅ Success Criteria

By the end of this demo, you should:
- See a functional iOS app in the simulator
- Customize workout output based on selected **body area** and **duration**
- Resolve any Swift compilation errors using Copilot Chat — in context

---

## 🧠 Why This Matters

This showcases how **Agent Mode accelerates end-to-end app creation**, reducing setup friction and enabling developers to prototype real apps with just one prompt. It also highlights how essential file context and iterative use can boost Copilot’s accuracy and usefulness.
