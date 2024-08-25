# Proyecto FullStack - Gestor de Finanzas
# Stack Front: React JS, TailwindCSS/DaisyUI | Stack Backend: Node JS, Express, CORS | Stack DB: MySQL | Axios para comunicarme con el Backend

## Instalaciones / Dependencias

1. Tener instalado Node JS: https://nodejs.org/es/

2. Para instalar Tailwind CSS:
- ```$ npm install -D tailwindcss postcss autoprefixer```
- ```$ npx tailwindcss init -p```

- Esto crea los archivos `tailwind.config.js` y `postcss.config.js`
- En `tailwind.config.js` agregar en 'content' esto:
```
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
```

3. Instalar daisyUI como un paquete npm:

```npm i -D daisyui@latest```

- Agregar daisyUI a tailwind.config.js:

```import daisyui from "daisyui"
module.exports = {
  //...
  plugins: [
    daisyui,
  ],
}
```

4. Tener instalado React Router

```npm install react-router-dom```

## Configuración del Backend y BD
- Base de Datos: MySQL
- Backend: Node y Express para construir API REST que interactúe con la BD


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
