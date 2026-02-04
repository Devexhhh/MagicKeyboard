# Magic Keyboard UI (Next.js + Tailwind)

A **pixel-polished, data-driven Magic Keyboard UI** built with **Next.js App Router**, **TypeScript**, and **Tailwind CSS**.  
This project focuses on **realistic hardware-inspired interactions**, **clean component architecture**, and **type-safe layout modeling**.

> Designed to feel like a real keyboard — not just look like one.

---

## ✨ Features

- 🎹 **Data-driven keyboard layout**
- 🧩 **Clean component architecture**
- 🧠 **Advanced TypeScript modeling**
- ⬆️ **Accurate arrow-key cluster placement**
- 💡 **Soft white backlight glow**
- 🔵 **Bluish press lighting effect**
- 🚀 **Hover lift & depth animation**
- 🧊 **Subtle vignette focus effect**
- 🧱 **Grid-based background canvas**
- ⚡ **Zero JS for animations (CSS only)**

---

## 🛠 Tech Stack

- **Next.js (App Router)**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Lucide Icons**
- **CSS Grid & Flexbox**

---

## 📁 Project Structure

```

src/
├── app/
│   └── page.tsx
│
├── components/
│   └── keyboard/
│       ├── Keyboard.tsx
│       ├── KeyboardRow.tsx
│       ├── Key.tsx
│       ├── ArrowCluster.tsx
│       ├── keyboard.layout.ts
│       └── keyVariants.ts
│
├── lib/
│   ├── fnIcons.tsx
│   └── arrowIcons.tsx
│
└── types/
└── keyboard.ts

````

---

## 🧠 Architecture Highlights

### 🔹 Data-Driven Layout
The keyboard is rendered entirely from a layout configuration:

```ts
KeyConfig[][]
````

This allows:

* Easy layout changes
* Scalable variants (60%, TKL, Mac/Windows)
* Clean separation of data and UI

---

### 🔹 Type-Safe Special Keys

Arrow keys are modeled using **discriminated unions**, not hacks:

```ts
type KeyConfig = NormalKey | { type: "arrowCluster" };
```

This keeps the layout:

* Type-safe
* Explicit
* Maintainable

---

### 🔹 Realistic Interaction Design

Keys simulate physical behavior:

* Soft white backlight (idle)
* Strong hover glow + lift
* Bluish press feedback
* Depth illusion via transform & shadow

---

## 🎨 Visual Design

* **Grey grid canvas** background
* **Soft vignette** to focus attention
* **Outward light bloom** instead of flat colors
* Hardware-inspired spacing and alignment

---

## 🚀 Getting Started

### 1️⃣ Clone the repo

```bash
git clone https://github.com/your-username/magic-keyboard-ui.git
cd magic-keyboard-ui
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the dev server

```bash
npm run dev
```

Open `http://localhost:3000` to view the keyboard.

---

## 🧪 Possible Extensions

* 🎹 Real keyboard input syncing
* 🌈 Per-key RGB lighting
* 🌗 Dark / light themes
* 🧩 60% / TKL layout switcher
* 🍎 Touch ID key
* 📦 Publish as a reusable component library

---

## 📚 What This Project Demonstrates

* Advanced React component composition
* Real-world TypeScript usage
* Deep Tailwind CSS knowledge
* UI systems thinking
* Production-quality polish

---

## 👤 Author

Built with care and attention to detail by **Devex**.

---

## 📄 License

MIT License — feel free to use, modify, and learn from it.

