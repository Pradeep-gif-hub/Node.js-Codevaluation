# Node.js
Extracting Documentation of Node JS

# 🌐 Node.js — From the Birth of the Web to a Modern JavaScript Runtime

Node.js is not just a technology — it is the result of **decades of web evolution**, starting from the early days of the internet to today’s scalable backend systems.

This document explains:
- How the web started
- How JavaScript was born
- Why standards like ECMAScript were needed
- What Node.js really is
- Why Node.js is powerful
- Where Node.js is used
- Core concepts every beginner must know

---

## 🕰️ A Short History: How It All Began

### 🔹 1993 — Mosaic Browser
In **1993**, the **Mosaic browser** was released.  
It was the **first popular web browser** that allowed people to view text and images together.

➡️ The web at that time was **static** — only HTML, no interaction.

---

### 🔹 Netscape Navigator & the Need for Interactivity
Mosaic later evolved into **Netscape Navigator**.  
As the web grew, developers wanted **dynamic behavior** like:
- Button clicks
- Form validation
- User interaction without reloading pages

---

### 🔹 1995 — Birth of JavaScript (Netscape)
In **1995**, Netscape introduced a scripting language called **JavaScript**  
(originally named *Mocha*, then *LiveScript*).

✔ JavaScript ran **inside the browser**  
✔ It made websites **interactive**

---

### 🔹 Microsoft Enters the Competition
Microsoft released its own browser (Internet Explorer) and introduced **JScript**.

❌ Problem:
- Different browsers behaved differently
- JavaScript code worked in one browser but failed in another

This created **browser wars** and chaos.

---

### 🔹 ECMAScript — Standardizing JavaScript
To solve compatibility issues, **ECMAScript** was introduced.

✔ ECMAScript is a **standard**
✔ JavaScript is an **implementation** of that standard

Examples:
- ES5 (2009)
- ES6 / ES2015 (major update)
- Modern JS (ES2020+)

This made JavaScript **stable and universal**.

---

## 🚀 Birth of Node.js

### 🔹 JavaScript Beyond the Browser
Originally, JavaScript could only run **inside browsers**.

In **2009**, **Node.js** was created to run JavaScript:
- Outside the browser
- On servers
- On local machines

---

## 🟢 What is Node.js?

> **Node.js is an open-source, cross-platform JavaScript runtime environment that allows JavaScript to run outside the browser.**

### In simple words:
- Node.js lets you write **backend code using JavaScript**
- It runs on the **V8 JavaScript engine** (from Chrome)

---

## ⭐ Key Features of Node.js

### 🔹 1. Asynchronous & Non-Blocking
- Handles multiple requests efficiently
- Does not block execution

### 🔹 2. Single-Threaded but Scalable
- Uses an event loop
- Handles thousands of connections with fewer resources

### 🔹 3. Cross-Platform
- Runs on **Windows, Linux, macOS**

### 🔹 4. Open Source
- Free to use
- Huge community support

### 🔹 5. Fast Performance
- Built on Google’s **V8 Engine**

---

## 📦 NPM — Node Package Manager

Node.js comes with **npm** ( Node Package Manager), the largest package ecosystem in the world.

You can install libraries for:
- Web servers
- Databases
- Authentication
- APIs
- Testing

Example:
```bash
npm install express

```
---

## ⚙️ JavaScript Engines & Execution Environment

JavaScript itself does **not run directly on hardware**.  
It runs inside **JavaScript Engines**, which are responsible for:
- Parsing JavaScript
- Compiling it
- Executing it efficiently

Different platforms use different engines.

---

## 🧩 JavaScript Engines by Platform

| Platform / Browser | JavaScript Engine |
|-------------------|------------------|
| Google Chrome / Node.js | **V8** |
| Mozilla Firefox | **SpiderMonkey** |
| Apple Safari | **JavaScriptCore** |
| Microsoft (Legacy Edge) | **Chakra** |

Each engine:
- Implements the **ECMAScript standard**
- Uses different internal optimizations
- Is written mainly in **C / C++**

---

## 📜 ECMAScript (ES262) — The Specification

### 🔹 What is ES262?
**ECMAScript (ES262)** is the **official language specification** that defines:
- Syntax
- Data types
- Keywords
- Control flow
- Standard objects (Array, Promise, Map, etc.)

✔ JavaScript is **NOT ES262**  
✔ JavaScript is an **implementation** of ES262

---

## 🧠 Important Clarification

> **ES262 does NOT run code.**  
> It only defines **rules**.

### Who runs the code?
➡️ **JavaScript Engines** implement ES262 and execute JavaScript.

---

## 🚀 V8 Engine (Chrome & Node.js)

### 🔹 What is V8?
- Open-source JavaScript engine
- Written in **C++**
- Developed by Google
- Used by **Chrome and Node.js**

### 🔹 What V8 Does
- Parses JavaScript
- Compiles it to machine code
- Manages memory
- Executes code fast

V8 **does NOT include**:
- DOM
- Web APIs
- Timers
- Storage APIs

These are provided by the **environment**, not the engine.

---

## 🧱 V8 + Libuv (Node.js Runtime)

Node.js is **not just V8**.

It consists of:
- **V8 Engine** → Executes JavaScript
- **libuv** → Handles async I/O (filesystem, networking, timers)
- **C++ bindings** → Connect JS to OS-level APIs

➡️ Together, they form the **Node.js runtime environment**.

---

## 🧠 JavaScript Execution Model

### 🔹 Call Stack
- Executes functions **one by one**
- Follows **Last In, First Out (LIFO)**

Example:
```js
function a() {
  b();
}
function b() {
  c();
}
function c() {
  console.log("Hello");
}
a();

```
---

## 🙏 Acknowledgement

Thank you for taking the time to go through this documentation.  
I hope you found the explanations clear, structured, and helpful in understanding the concepts.  
If this repository added value to your learning or projects, please consider giving it a ⭐.  
Your support and feedback help improve the quality of this work and encourage further contributions.  
Feel free to explore, use, and share the content responsibly.  

Happy Learning 🚀
