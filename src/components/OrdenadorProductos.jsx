import { useProductStore } from '@/store/useProductStore';
import { useState } from 'react';

const OrdenadorProductos = () => {
  // Traemos la función de ordenar productos del store
  const ordenarProductos = useProductStore((state) => state.ordenarProductos);

  // Estado local para guardar el criterio seleccionado (solo para UI)
  const [criterio, setCriterio] = useState('');

  // Función que se ejecuta cuando el usuario cambia la opción del select
  const handleOrdenar = (e) => {
    const nuevoCriterio = e.target.value;
    setCriterio(nuevoCriterio);
    ordenarProductos(nuevoCriterio);
  };

  return (
<section className="w-full bg-[#1b1b1b] bg-opacity-90 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-gray-700">
  {/* Label para el select */}
  <label htmlFor="ordenar" className="block mb-4 font-semibold text-gray-300 text-sm">
    Ordenar productos por:
  </label>

  {/* Select de criterios */}
  <select
    id="ordenar"
    value={criterio}
    onChange={handleOrdenar}
    className="w-full p-3 rounded-xl border border-gray-700 bg-black text-white placeholder-gray-500 shadow-inner focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
  >
    <option value="">-- Selecciona un criterio --</option>
    <option value="nombre">Nombre (A-Z)</option>
    <option value="codigo">Código</option>
    <option value="cantidad">Cantidad</option>
    <option value="creacion">Fecha de creación</option>
  </select>
</section>

  );
};

export default OrdenadorProductos;
