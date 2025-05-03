'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminInv() {
  const router = useRouter();

  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [stock, setStock] = useState('');
  const [categoria, setCategoria] = useState('')

  useEffect(() => {
    const sesion = localStorage.getItem('logeado');
    const rol = localStorage.getItem('rol')
    if (sesion !== 'true') {
      router.push('/login');
    }

    if(rol == 'usuario'){
      router.push('/ver_inventario')
    }
  }, [router]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevoProducto = {id: Date.now(), nombre, precio, stock, categoria};
    const inventarioGuardado = JSON.parse(localStorage.getItem('inventario')) || [];
    inventarioGuardado.push(nuevoProducto);
    localStorage.setItem('inventario', JSON.stringify(inventarioGuardado));

    setNombre('');
    setPrecio('');
    setStock('');
    setCategoria('');
  };

  return (
    <div className="flex flex-col min-h-screen text-black px-6 py-8">
      <h1 className="text-center text-4xl font-bold mb-12 text-blue-950">
        Administrar Inventario 
      </h1>

      <h2 className="text-2xl font-semibold mb-4">Agregar Producto</h2>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="nombreProducto" className="block text-lg mb-2">
            Nombre del Producto
          </label>
          <input
            type="text"
            id="nombreProducto"
            name="nombreProducto"
            placeholder="Ingrese Producto"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-700"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="precioProducto" className="block text-lg mb-2">
            Precio del Producto
          </label>
          <input
            type="number"
            id="precioProducto"
            name="precioProducto"
            placeholder="Ingrese Precio"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-700"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="stockProducto" className="block text-lg mb-2">
            Stock Inicial
          </label>
          <input
            type="number"
            id="stockProducto"
            name="stockProducto"
            placeholder="Ingrese Stock Inicial"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-700"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="categoriaProducto" className="block text-lg mb-2">
            Categoria
          </label>
          <input
            type="text"
            id="categoriaProducto"
            name="categoriaProducto"
            placeholder="Ingrese Categoria del Producto"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-700"
          />
        </div>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-fit mb-4">
          Agregar Producto
        </button>
      </form>
    </div>
  );
}
