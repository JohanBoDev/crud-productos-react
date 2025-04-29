import { useState } from 'react';
import { useProductStore } from '@/store/useProductStore';

const FormularioProducto = () => {
  // Estado local para manejar los valores del formulario
  const [codigo, setCodigo] = useState('');
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [cantidad, setCantidad] = useState('');

  // Usamos nuestra store para poder agregar productos
  const agregarProducto = useProductStore((state) => state.agregarProducto);

  // Función que maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto (recargar la página)

    // Validaciones mínimas
    if (!codigo || !nombre || !cantidad) {
      alert('Por favor completa los campos obligatorios.');
      return;
    }

    // Crear el objeto producto
    const nuevoProducto = {
      codigo: Number(codigo),
      nombre,
      descripcion,
      cantidad: Number(cantidad),
      creacion: new Date().toISOString(), // Fecha de creación automática
    };

    // Agregar el producto al estado global
    agregarProducto(nuevoProducto);

    // Limpiar el formulario después de agregar
    setCodigo('');
    setNombre('');
    setDescripcion('');
    setCantidad('');
  };

  return (
<form
  onSubmit={handleSubmit}
  className="bg-[#1b1b1b] bg-opacity-90 backdrop-blur-md  rounded-2xl shadow-lg flex flex-col gap-6 w-full max-w-md mx-auto"
>
  {/* Input para el Código */}
  <div className="flex flex-col">
    <label htmlFor="codigo" className="text-gray-300 font-semibold mb-2">
      Código *
    </label>
    <input
      id="codigo"
      type="number"
      value={codigo}
      onChange={(e) => setCodigo(e.target.value)}
      className="p-3 rounded-lg border border-gray-700 bg-black text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
      placeholder="Ej: 1001"
      required
    />
  </div>

  {/* Input para el Nombre */}
  <div className="flex flex-col">
    <label htmlFor="nombre" className="text-gray-300 font-semibold mb-2">
      Nombre *
    </label>
    <input
      id="nombre"
      type="text"
      value={nombre}
      onChange={(e) => setNombre(e.target.value)}
      className="p-3 rounded-lg border border-gray-700 bg-black text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
      placeholder="Ej: Producto A"
      required
    />
  </div>

  {/* Input para la Descripción */}
  <div className="flex flex-col">
    <label htmlFor="descripcion" className="text-gray-300 font-semibold mb-2">
      Descripción
    </label>
    <textarea
      id="descripcion"
      value={descripcion}
      onChange={(e) => setDescripcion(e.target.value)}
      className="p-3 rounded-lg border border-gray-700 bg-black text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
      placeholder="Descripción opcional..."
      rows="3"
    />
  </div>

  {/* Input para la Cantidad */}
  <div className="flex flex-col">
    <label htmlFor="cantidad" className="text-gray-300 font-semibold mb-2">
      Cantidad *
    </label>
    <input
      id="cantidad"
      type="number"
      value={cantidad}
      onChange={(e) => setCantidad(e.target.value)}
      className="p-3 rounded-lg border border-gray-700 bg-black text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
      placeholder="Ej: 50"
      required
    />
  </div>

  {/* Botón de envío */}
  <button
  type="submit"
  className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block w-full mt-4"
>
  {/* Fondo de iluminación que aparece en hover */}
  <span className="absolute inset-0 overflow-hidden rounded-full">
    <span className="absolute inset-0 rounded-full bg-[radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
  </span>

  {/* Contenido principal del botón */}
  <div className="relative flex items-center justify-center z-10 rounded-full bg-zinc-950 py-2 px-6 ring-1 ring-white/10">
    <span>Agregar Producto</span>
    <svg
      className="ml-2"
      fill="none"
      height="32"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.75 8.75L14.25 12L10.75 15.25"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </div>

  {/* Línea decorativa inferior que aparece en hover */}
  <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-sky-400/0 via-sky-400/90 to-sky-400/0 transition-opacity duration-500 group-hover:opacity-40" />
</button>

</form>

  );
};

export default FormularioProducto;
