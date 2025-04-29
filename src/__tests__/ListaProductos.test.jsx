import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ListaProductos from '@/components/ListaProductos';
import { vi } from 'vitest';
import { useProductStore } from '@/store/useProductStore';

vi.mock('@/store/useProductStore', () => ({
  useProductStore: vi.fn((selector) =>
    selector({
      productos: [],
      filtro: '',
    })
  ),
}));

describe('ListaProductos', () => {
  it('debería mostrar el título "Lista de Productos"', () => {
    render(<ListaProductos />);
    const titulo = screen.getByText(/Lista de Productos/i);
    expect(titulo).toBeInTheDocument(); // ✅ ahora será reconocido
  });
});


it('debería mostrar un producto si está presente en el store', () => {
    const productoFalso = {
      codigo: 12345,
      nombre: 'Laptop Gamer',
      descripcion: 'Poderosa y rápida',
      cantidad: 5,
      creacion: new Date().toISOString(),
    };
  
    useProductStore.mockImplementation((selector) =>
      selector({
        productos: [productoFalso],
        filtro: '',
      })
    );
  
    render(<ListaProductos />);
  
    expect(screen.getByText(/Laptop Gamer/i)).toBeInTheDocument();
  
    expect(screen.getByText((content, element) =>
      element.textContent === 'Cantidad: 5'
    )).toBeInTheDocument();
  });

  it('no debería mostrar productos que no coincidan con el filtro', () => {
    const productoFalso = {
      codigo: 9876,
      nombre: 'Laptop Gamer',
      descripcion: '16GB RAM',
      cantidad: 3,
      creacion: new Date().toISOString(),
    };
  
    useProductStore.mockImplementation((selector) =>
      selector({
        productos: [productoFalso],
        filtro: 'monitor', // no coincide con el nombre
      })
    );
  
    render(<ListaProductos />);
  
    // Verifica que el producto NO esté en pantalla
    const nombre = screen.queryByText(/Laptop Gamer/i);
    expect(nombre).not.toBeInTheDocument();
  });