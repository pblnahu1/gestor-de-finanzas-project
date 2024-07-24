# React + Vite + TailwindCSS with DaisyUI

You need Node.js and Tailwind CSS installed.

```$ npm install -D tailwindcss postcss autoprefixer```
```$ npx tailwindcss init -p```

Esto crea los archivos `tailwind.config.js` y `postcss.config.js`
En `tailwind.config.js` agregar en 'content' esto:
```
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
```

daisyUI
1. Install daisyUI as a Node package:

```npm i -D daisyui@latest```

2. Add daisyUI to tailwind.config.js:

```import daisyui from "daisyui"
module.exports = {
  //...
  plugins: [
    daisyui,
  ],
}
```

React Router
```npm install react-router-dom```


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
