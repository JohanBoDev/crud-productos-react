
# 🛍️ CRUD de Productos - Prueba Técnica Frontend Junior

Aplicación construida con **React** para la prueba técnica de desarrollador frontend junior. Permite realizar operaciones CRUD sobre una lista de productos, incluyendo persistencia en localStorage, búsqueda, ordenamiento y tests unitarios.

---

## 🚀 Demo en Vercel

> [ https://crud-productos.vercel.app/](https://crud-productos-react.vercel.app/)

---

## ✨ Funcionalidades

- ✅ Crear productos con los campos requeridos.
- ✅ Visualizar lista de productos.
- ✅ Eliminar productos.
- ✅ Ordenar por **cantidad**, **creación**, **código** y **nombre**.
- ✅ Filtrar productos por **nombre** con un input de búsqueda.
- ✅ Persistencia local mediante **localStorage**.
- ✅ Vista tipo **tabla** o **tarjeta** con botón para alternar.
- ✅ Paginación (4 productos en vista card, 10 en vista tabla).
- ✅ Interfaz totalmente **responsiva** (móvil y desktop).
- ✅ **Accesibilidad básica** con `aria-label` y `focus`.
- ✅ Animaciones y estilo moderno con **TailwindCSS**.
- ✅ **Tests unitarios** con `Vitest` + `Testing Library`.

---

## 🧠 Decisiones Técnicas

### 🪄 ¿Por qué Zustand?
Elegí [Zustand](https://github.com/pmndrs/zustand) para el manejo de estado por su:
- API simple y directa.
- Menor boilerplate comparado con Context API o Redux.
- Excelente rendimiento para apps pequeñas y escalables.

### 🎨 ¿Por qué TailwindCSS?
Usé [TailwindCSS](https://tailwindcss.com/) porque:
- Permite una construcción rápida y flexible de la UI.
- Facilita crear una interfaz profesional con clases utilitarias.
- Compatible con diseño responsivo y animaciones CSS avanzadas.

### 💾 ¿Por qué localStorage?
- Se especifica en la prueba que no debe haber backend.
- Es la forma más rápida y limpia de garantizar persistencia sin servidor.

### 🧪 ¿Por qué Vitest + Testing Library?
- `Vitest` es ligero, rápido y compatible con proyectos Vite.
- `@testing-library/react` permite simular el uso real de componentes.
- Se añadieron **3 tests** que cubren renderizado, filtro y visibilidad de productos.

---

## 📂 Estructura del Proyecto

```
src/
├── assets/             # Archivos estáticos
├── components/         # Componentes reutilizables (ej. ListaProductos, ProductoItem)
├── store/              # Estado global usando Zustand
├── utils/              # Funciones auxiliares (ordenamiento, fechas, etc.)
├── __tests__/          # Tests unitarios
├── App.jsx             # Componente principal
├── main.jsx            # Entrada principal
```

---

## ⚙️ Instalación local

1. Clona el proyecto:
   ```bash
   git clone https://github.com/JohanBoDev/crud-productos.git
   cd crud-productos
   ```

2. Instala dependencias:
   ```bash
   npm install
   ```

3. Corre el proyecto en desarrollo:
   ```bash
   npm run dev
   ```

---

## 🧪 Ejecutar tests

Este proyecto incluye **3 pruebas unitarias** con Zustand mockeado:

```bash
npm run test
```

> Tests ubicados en: `src/__tests__/ListaProductos.test.jsx`

---

## 📝 Autor

**Johan Bohorquez**  
📫 [bohorquezjohan958@gmail.com](mailto:bohorquezjohan958@gmail.com)  
🔗 [LinkedIn](https://www.linkedin.com/in/johanbodev/)  
💻 [Portafolio Web](https://www.johanbodev.online/)  
🐙 [GitHub](https://github.com/JohanBoDev)

---

## 📌 Notas Finales

- Aplicación construida sin backend, como lo exige la prueba.
- Código limpio, modular y listo para ser escalado.
- La estructura permite añadir nuevas funcionalidades sin fricción.
- El proyecto ha sido probado y validado para cumplir con todos los requisitos obligatorios y varios extras deseables de la prueba técnica.

---

### ✔️ Checklist de requisitos cumplidos

- [x] Crear producto
- [x] Ver lista de productos
- [x] Eliminar producto
- [x] Filtrar por nombre
- [x] Ordenar por cantidad, creación, código y nombre
- [x] Persistencia con localStorage
- [x] Estado global con Zustand
- [x] Componentes reutilizables
- [x] TailwindCSS
- [x] App responsiva
- [x] Accesibilidad básica
- [x] Tests unitarios
- [x] Buen manejo de carpetas
- [x] Animaciones y mejoras visuales

---

¡Gracias por revisar este proyecto! 🚀
