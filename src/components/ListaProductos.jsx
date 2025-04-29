import React from 'react';

import { useProductStore } from '@/store/useProductStore';
import ProductoItem from './ProductoItem';
import { useState } from 'react';

const ListaProductos = () => {
  const productos = useProductStore((state) => state.productos);
  const filtro = useProductStore((state) => state.filtro);
  const [paginaActual, setPaginaActual] = useState(1);
  const [modoVista, setModoVista] = useState('card'); // 'card' o 'tabla'

  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(filtro.toLowerCase())
  );

  const productosPorPagina = modoVista === 'tabla' ? 10 : 4;
  const totalPaginas = Math.ceil(productosFiltrados.length / productosPorPagina);
  const indiceInicio = (paginaActual - 1) * productosPorPagina;
  const productosVisibles = productosFiltrados.slice(indiceInicio, indiceInicio + productosPorPagina);

  const irPaginaAnterior = () => {
    if (paginaActual > 1) setPaginaActual(paginaActual - 1);
  };

  const irPaginaSiguiente = () => {
    if (paginaActual < totalPaginas) setPaginaActual(paginaActual + 1);
  };

  const alternarVista = () => {
    setModoVista(modoVista === 'card' ? 'tabla' : 'card');
  };

  return (
    <section className="w-full flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Lista de Productos</h2>
        <button
  onClick={alternarVista}
  className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#0f0f0f,45%,#1e2631,55%,#0f0f0f)] bg-[length:200%_100%] px-6 font-semibold text-slate-300 transition-all focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-black text-sm"
>
  {modoVista === 'card' ? 'Cambiar a Tabla' : 'Cambiar a Card'}
</button>
      </div>

      {productos.length === 0 ? (
        <p className="text-center text-gray-400">No hay productos aún.</p>
      ) : modoVista === 'card' ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {productosVisibles.map((producto) => (
            <ProductoItem key={producto.codigo} producto={producto} />
          ))}
        </ul>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-[#1b1b1b] text-white">
                <th className="px-4 py-2 border-b border-gray-700">Código</th>
                <th className="px-4 py-2 border-b border-gray-700">Nombre</th>
                <th className="px-4 py-2 border-b border-gray-700">Cantidad</th>
                <th className="px-4 py-2 border-b border-gray-700">Descripción</th>
                <th className="px-4 py-2 border-b border-gray-700">Creado</th>
              </tr>
            </thead>
            <tbody>
              {productosVisibles.map((p) => (
                <tr key={p.codigo} className="text-gray-300 hover:bg-gray-950 transition">
                  <td className="px-4 py-2 border-b border-gray-700">{p.codigo}</td>
                  <td className="px-4 py-2 border-b border-gray-700">{p.nombre}</td>
                  <td className="px-4 py-2 border-b border-gray-700">{p.cantidad}</td>
                  <td className="px-4 py-2 border-b border-gray-700 italic">{p.descripcion}</td>
                  <td className="px-4 py-2 border-b border-gray-700 text-sm">
                    {new Date(p.creacion).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Paginación */}
      <div className="flex justify-center items-center gap-6 mt-8">
  <button
    onClick={irPaginaAnterior}
    disabled={paginaActual === 1}
    className="px-5 py-2 rounded-full bg-[#292929] hover:bg-[#404040] text-white disabled:bg-[#1b1b1b] disabled:text-gray-500 transition-all font-semibold text-sm"
  >
    Anterior
  </button>

  <span className="text-gray-400 font-medium text-sm">
    Página {paginaActual} de {totalPaginas}
  </span>

  <button
    onClick={irPaginaSiguiente}
    disabled={paginaActual === totalPaginas}
    className="px-5 py-2 rounded-full bg-[#292929] hover:bg-[#404040] text-white disabled:bg-[#1b1b1b] disabled:text-gray-500 transition-all font-semibold text-sm"
  >
    Siguiente
  </button>
</div>

    </section>
  );
};

export default ListaProductos;
