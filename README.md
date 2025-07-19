<h1 align="center">🗓️ date-react-formatter</h1>

<p align="center">
  A flexible and lightweight date/time formatter utility for React and JavaScrip/TypeScript.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/date-react-formatter">
    <img src="https://img.shields.io/npm/v/date-react-formatter?color=blue" />
  </a>
  <a href="https://github.com/adwaithjayan/date-react">
    <img src="https://img.shields.io/github/stars/adwaithjayan/date-react?style=social" />
  </a>
  <a href="./LICENSE">
    <img src="https://img.shields.io/npm/l/date-react-formatter" />
  </a>
</p>
---

## ✨ Features

- 📅 Format dates in any locale
- ⏰ 12h or 24h time support
- 🔧 Fully customizable format string (`dd/mm/yyyy`, etc.)
- 📦 Structured return format (`{ day, month, year, ... }`)
- 🌐 Lightweight, tree-shakable & TypeScript ready

---

## 📦 Installation

```bash
npm install date-react-formatter
```

## 🚀 Usage

```ts
// Import the formatter
import { formatDate } from "date-react-formatter";

// Basic usage
formatDate(new Date());
// Output: "Jul 19, 2025" (default options)

// Custom format
formatDate(new Date(), { customFormat: "dd/mm/yyyy HH:MM" });
// Output: "19/07/2025 21:45"
```
