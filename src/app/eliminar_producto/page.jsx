'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function EliminarProd() {
  const router = useRouter();
  const [idEliminar, setIdEliminar] = useState('');
  
  useEffect(() => {
    const sesion = localStorage.getItem('logeado');
    const rol = localStorage.getItem('rol')
    if (sesion !== 'true') {
      router.push('/login');
    }

    if (rol === 'usuario') {
      router.push('/ver_inventario');
    }
  }, [router]);

  const EliminarProducto = (e) => {
    e.preventDefault();

    const inventarioGuardado = JSON.parse(localStorage.getItem('inventario')) || [];
    const nuevoInventario = inventarioGuardado.filter(producto => 
      producto.id.toString() !== idEliminar.trim()
    );

    localStorage.setItem('inventario', JSON.stringify(nuevoInventario));
    setIdEliminar('');
  };

  return (
    <div className="flex flex-col min-h-screen text-black px-6 py-8">
      <h1 className="text-center text-4xl font-bold mb-12 text-blue-950">
        Administrar Inventario 
      </h1>
      <Link 
        className="self-center hover:text-amber-50 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
        href="/administrar_inv"
      >
        Cambiar Vista Agregar Producto
      </Link>

      <h2 className="text-2xl font-semibold mb-4">Eliminar Producto</h2>
      <form className="flex flex-col" onSubmit={EliminarProducto}>
        <div className="mb-6">
          <label htmlFor="idProducto" className="block text-lg mb-2">
            ID del Producto a Borrar
          </label>
          <input
            type="text"
            id="idProducto"
            name="idProducto"
            placeholder="Ingrese ID del Producto"
            value={idEliminar}
            onChange={(e) => setIdEliminar(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-700"
          />
        </div>
        <button 
          type="submit" 
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 w-fit mb-4"
        >
          Borrar Producto
        </button>
      </form>
    </div>
  );
}
