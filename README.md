# Weather-App

A sleek and responsive Weather Application built with **React + Vite**, deployed on GitHub Pages. Get real-time weather updates and forecasts for any city.

---

## 🌐 Live Demo

👉 [Weather App](https://annpurna04.github.io/Weather-App/)

---

## ✨ Features

- 🌍 Search by city name for current weather
- 🌡️ View temperature, humidity, wind speed, and more
- 📱 Mobile-friendly and responsive design
- ⚡ Fast loading with Vite build system

---

## 🛠️ Built With

- [React](https://reactjs.org/) — UI library  
- [Vite](https://vitejs.dev/) — Next generation frontend tooling  
- [gh-pages](https://www.npmjs.com/package/gh-pages) — Easy GitHub Pages deployment  

---

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js** and **npm** installed.  
Download from: [https://nodejs.org](https://nodejs.org)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/annpurna04/Weather-App.git
cd Weather-App
npm install
```

### 🧑‍💻 Run locally
```bash
npm run dev
```

---
## 📦 Build & Deploy

Your **package.json** should include:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
 ```
### Deploy:

```bash
npm run deploy
```

## 📁 Project Structure

```
Weather-App/
├── public/
│   └── index.html
├── src/
│   ├── main.jsx
│   └── components/
├── dist/                # Generated after build
├── vite.config.js
├── package.json
└── README.md
```
## 🔑 API Setup

This app uses a weather API that requires an API key.

1. Create a file named **`.env`** in the root folder.  
2. Add your API key like this:

```env
VITE_API_KEY=your_api_key_here
```
3. Restart your development server:
```bash
npm run dev
``` 
## 🤝 Contributing

Contributions are welcome!

1. Fork the repository  
2. Create a new branch:  

```bash
git checkout -b feature/my-feature
```
3. Commit your changes:

``` bash
git commit -m 'Add my feature'
```
4. Push to your branch:

``` bash
git push origin feature/my-feature
```
5. Open a Pull Request

---

## 📜 License

Licensed under the [MIT License](LICENSE).

---
## 🙋‍♀️ Author

**Annpurna Gupta**  
🌐 [GitHub Profile](https://github.com/annpurna04)
