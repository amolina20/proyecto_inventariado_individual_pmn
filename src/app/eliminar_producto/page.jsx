'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function BorrarProd() {
  const router = useRouter();

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


  return (
    <div className="flex flex-col min-h-screen text-black px-6 py-8">
      <h1 className="text-center text-4xl font-bold mb-12 text-blue-950">
        Administrar Inventario 
      </h1>
      <Link className= "self-center hover:text-amber-50 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700" href="/administrar_inv" >Cambiar Vista Agregar Producto</Link>
      <h2 className="text-2xl font-semibold mb-4">Producto</h2>
      <form className="flex flex-col">
        <div className="mb-6">
          <label htmlFor="idProducto" className="block text-lg mb-2">
            ID del Producto
          </label>
          <input
            type="text"
            id="idProducto"
            name="idProducto"
            placeholder="Ingrese ID Producto"
            required
            className="w-full px-4 py-2 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-700"
          />
        </div>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-fit mb-4">
          Borrar Producto
        </button>
      </form>
    </div>
  );
}
