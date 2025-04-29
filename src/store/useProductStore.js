import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Definimos la tienda Zustand con persistencia automática en localStorage
export const useProductStore = create(
    persist(
        (set, get) => ({
            productos: [],

            // Crear producto
            agregarProducto: (productoNuevo) => {
                set((state) => ({
                    productos: [...state.productos, productoNuevo],
                }));
            },

            // Eliminar producto
            eliminarProducto: (codigoProducto) => {
                set((state) => ({
                    productos: state.productos.filter((producto) => producto.codigo !== codigoProducto),
                }));
            },

            // Filtrar productos por nombre (se puede usar directamente en el componente también)
            filtrarProductos: (nombre) => {
                return get().productos.filter((producto) =>
                    producto.nombre.toLowerCase().includes(nombre.toLowerCase())
                );
            },
            filtro: '',
            setFiltro: (texto) => set({ filtro: texto }),

            // Ordenar productos
            ordenarProductos: (criterio) => {
                const productosOrdenados = [...get().productos].sort((a, b) => {
                    if (criterio === 'nombre') {
                        return a.nombre.localeCompare(b.nombre);
                    } else if (criterio === 'codigo') {
                        return a.codigo - b.codigo;
                    } else if (criterio === 'cantidad') {
                        return a.cantidad - b.cantidad;
                    } else if (criterio === 'creacion') {
                        return new Date(a.creacion) - new Date(b.creacion);
                    }
                    return 0;
                });

                set({ productos: productosOrdenados });
            },
        }),
        {
            name: 'productos-storage', // Nombre de la clave en localStorage
        }
    )
);
