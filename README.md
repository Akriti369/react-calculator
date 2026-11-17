# React Calculator

I am currently learning **React**, and honestly, getting used to the syntax of **props** (and passing functions from parent to child) took me a little time. Right after that came the **`.map()`** method to render lists dynamically—and a with time concepts clicked together, I challenged myself to build this **cute pink calculator** (`akriti`) from scratch!

## 📸 Preview

![Calculator Preview](./Caculator.png)

---

## ✨ Features

* **Core Arithmetic Operations:** Supports addition (`+`), subtraction (`-`), multiplication (`*`), division (`/`), and modulus/percentage (`%`).
* **Smart Controls:** Includes **All Clear (`AC`)** to reset the display and a **Backspace (`DEL`)** button to remove the last entered character.
* **Error Handling:** Gracefully catches invalid expressions (like consecutive operators) and displays `"Error"` without crashing the app.
* **Pastel Aesthetic UI:** Styled with soft gradients, tactile press animations, Google Fonts (`Pacifico`), and FontAwesome icons.

---

## 🧠 What I Learned & Applied

Building this project helped me practice and solidify core React fundamentals:

1. **Component-Based Architecture:** Split the UI into clean, reusable components (`App`, `Display`, and `Buttons`).
2. **State Management (`useState`):** Managed the calculator's live expression and display state dynamically.
3. **Props & Event Handling:** Passed callback functions (`handleButtonClick` → `onButtonClick`) from parent to child components to handle button clicks.
4. **Scoped Styling with CSS Modules:** Used `.module.css` files (`App.module.css`, `display.module.css`, `Button.module.css`) to prevent class name conflicts and build a responsive CSS Grid button layout.
5. **External Assets Integration:** Integrated FontAwesome icons and Google Fonts cleanly into a Vite + React project.

---

## 🛠️ Tech Stack

* **Frontend:** React.js (Vite)
* **Styling:** CSS Modules, CSS Grid & Flexbox
* **Icons & Fonts:** FontAwesome, Google Fonts (`Pacifico`)

---

## 🚀 How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
