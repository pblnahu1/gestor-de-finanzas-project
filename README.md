# Proyecto FullStack - Gestor de Finanzas
# Stack Front: React JS, TailwindCSS/DaisyUI | Stack Backend: Node JS, Express, CORS | Stack DB: Postgres con Docker | Axios para comunicarme con el Backend

## Proceso de desarrollo (Puede tener cambios a futuro)

### LÓGICA (puede cambiar):
1.- Crear una función para calcular gastos mensuales
2.- Pedir al usuario el número de días del mes
3.- Validar que el usuario ingrese un número válido
4.- Inicializar una lista vacía para almacenar los gastos diarios
5.- Solicitar al usuario que ingrese los gastos diarios
6.- Validar que el usuario ingrese un número válido
7.- Calcular la suma de los gastos mensuales
8.- Mostrar el resultado al usuario
9.- Llamar a la función para calcular los gastos mensuales

### DISEÑO DE LA APLICACIÓN
FIGMA: Crear el diseño de la interfaz de usuario. Incluye:
- Pantalla de inicio de sesión y registro.
- Pantalla principal con una lista de gastos.
- Formulario para agregar nuevos gastos.
- Gráficos o estadísticas mensuales.
- Ajustes y configuración de la cuenta.

### ARQUITECTURA Y PLANIFICACIÓN
- Diagramas de Base de Datos: Aunque al principio voy a usar LocalStorage, está 
bueno que pueda diseñar los diagramas para una futura implementación de SQL y NoSQL.
- Diagrama Entidad Relación (der) para SQL
- Estructura de documentos para MongoDB

### DESARROLLO DE LA API JSON
Mock API: Definir los endpoints necesarios para la app. Ejemplos:
- `GET /expenses` -> Obtener todos los gastos
- `POST /expenses` -> Agregar un nuevo gasto
- `PUT /expenses/:id` -> Actualizar un gasto existente
- `DELETE /expenses/:id` -> Eliminar un gasto

### IMPLEMENTACIÓN DE LOCALSTORAGE
- Funciones de CRUD: Implementar funciones en JS para interactuar con LocalStorage
- Guardar y recuperar datos
- Agregar, editar y eliminar registros
- Manejar la persistencia de datos entre sesiones

### DESARROLLO DE LA INTERFAZ
- Tailwind CSS: Usar Tailwind para estilizar la app
- Plantillas y componentes reconstruidos para acelerar el desarrollo
- https://tailwindui.com/
- https://daisyui.com/

### INTEGRACIÓN DE FUNCIONALIDADES
- Conexión de la API con la UI: Conectar las funciones de CRUD con la UI
- Manejo de formularios y validaciones !!!!! fundamental
- Actualización dinámica de la UI cuando se agregar, editan o eliminan gastos

### PRUEBAS Y DEBUGGING
- Pruebas unitarias: Escribir pruebas unitarias para mis funciones de CRUD
- Depurar: Importante para que no haya erroes y que la app funcione en distintos navegadores

### DOCUMENTACIÓN (README.md) y PREPARACIÓN PARA FUTURAS IMPLEMENTACIONES
- Documentar el código en GitHub y las decisiones de diseño
- Preparación para SQL y NoSQL: Mantener los diagramas y planear cómo migrar los datos y funcionalidades a una 
BD SQL y después a una NoSQL en el futuro.

### RECURSOS ADICIONALES:
- TAILWIND CSS DOCUMENTATION: https://tailwindcss.com/docs
- FIGMA COMMUNITY: Buscar plantillas y ejemplos en la comunidad de Figma
- LocalStorage Guide: https://developer.mozilla.org/es/docs/Web/API/Window/localStorage

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
- Base de Datos: Postgres
- Backend: Node y Express para construir API REST que interactúe con la BD. CORS para permitir que otros origenes consuman el servidor
- Frontend: React, Tailwind y Axios para manejar las solicitudes HTTP (client-server)

1. Postgres con Docker - Instalaciones

```bash
# Contenedor docker:
docker run --name render-postgres -e POSTGRES_PASSWORD=mysecretpassword -d -p 5444:5432 postgres

# Para conectarme desde el backend a postgres:
npm i pg
```