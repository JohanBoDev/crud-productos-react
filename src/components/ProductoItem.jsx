import React from 'react';
import { useProductStore } from '@/store/useProductStore';
import { motion } from 'framer-motion';

const ProductoItem = ({ producto }) => {
  const eliminarProducto = useProductStore((state) => state.eliminarProducto);

  const handleEliminar = () => {
    if (confirm(`¿Estás seguro de eliminar el producto "${producto.nombre}"?`)) {
      eliminarProducto(producto.codigo);
    }
  };

  return (
<motion.li
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, scale: 0.95 }}
  transition={{ duration: 0.5, ease: 'easeOut' }}
  className="relative flex flex-col justify-between rounded-3xl p-6 bg-gradient-to-br from-[#2a2a2a] via-[#1f1f1f] to-[#181818] shadow-xl hover:shadow-gray-950/90 transition-shadow duration-500 ring-1 ring-gray-700/60"
>
  {/* Icono decorativo flotante */}
  <div className="absolute right-4 top-4 text-sky-500 opacity-20 text-7xl select-none pointer-events-none">
    📦
  </div>

  {/* Contenido principal */}
  <div className="space-y-3">
    <h3 className="text-2xl font-bold text-white break-words">{producto.nombre}</h3>
    <p className="text-gray-400 text-sm">
      Código: <span className="text-white">{producto.codigo}</span>
    </p>
    <p className="text-gray-400 text-sm">
      Cantidad: <span className="text-white">{producto.cantidad}</span>
    </p>
    {producto.descripcion && (
      <p className="text-gray-400 text-xs mt-2 italic">{producto.descripcion}</p>
    )}
  </div>

  {/* Fecha de creación */}
  <div className="mt-6 text-xs text-gray-500">
    Creado el: <span className="text-gray-400">{new Date(producto.creacion).toLocaleDateString()}</span>
  </div>

  {/* Botón de eliminar */}
  <button
    onClick={handleEliminar}
    className="relative inline-flex h-12 mt-6 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-black w-full group"
    aria-label={`Eliminar producto ${producto.nombre}`}
  >
    {/* Spinner mágico */}
    <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#F87171_0%,#B91C1C_50%,#F87171_100%)] opacity-20 group-hover:opacity-100 transition-opacity duration-500" />

    {/* Contenido del botón */}
    <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-red-900/40 px-6 text-sm font-bold text-white backdrop-blur-2xl tracking-wide">
      Eliminar
    </span>
  </button>
</motion.li>

  );
};

export default ProductoItem;
