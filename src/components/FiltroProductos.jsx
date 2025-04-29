import { useProductStore } from '@/store/useProductStore';


const FiltroProductos = () => {
    const filtro = useProductStore((state) => state.filtro);
    const setFiltro = useProductStore((state) => state.setFiltro);
  
    const handleChange = (e) => {
      setFiltro(e.target.value);
    };
  
    return (
      <section className="w-full max-w-md mx-auto">
        <input
          type="text"
          value={filtro}
          onChange={handleChange}
          placeholder="Buscar producto por nombre..."
          className="w-full p-3 rounded-xl border border-gray-700 bg-[#1b1b1b] text-white placeholder-gray-500 shadow-sm focus:outline-none focus:ring focus:ring-sky-500"
        />
      </section>
    );
  };

  export default FiltroProductos;