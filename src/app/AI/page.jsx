'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AI() {
  const router = useRouter();
  const [mostrarMensaje, setMostrarMensaje] = useState(false);
  const [mensaje, setMensaje] = useState('');

  const handleGenerarReporteTodo = () => {
    setMensaje('Reporte generado para todo el inventariado.');
    setMostrarMensaje(true);
  };

  const handleSubmit = (e, tipo) => {
    e.preventDefault();
    if (tipo === 'id') {
      setMensaje('Reporte generado para el producto por ID.');
    } else if (tipo === 'categoria') {
      setMensaje('Reporte generado para la categoría de productos.');
    }
    setMostrarMensaje(true);
  };

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
      <h1 className="text-center text-4xl font-bold mb-5 text-blue-950">
        AI (Agente InventoRio)
      </h1>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-fit mb-4 self-center"
        onClick={handleGenerarReporteTodo}
      >
        Generar Reporte de Demanda de Todo el Inventariado
      </button>
      {mostrarMensaje && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-xl font-bold">{mensaje}</p>
            <button
              onClick={() => setMostrarMensaje(false)}
              className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700"
            >Cerrar</button>
          </div>
        </div>
      )}
      <h2 className="text-2xl font-semibold mb-4">Generar Reportes por ID</h2>
      <form onSubmit={(e) => handleSubmit(e, 'id')}>
        <div className="mb-6">
          <label htmlFor="idProducto" className="block text-lg mb-2">
            ID Producto
          </label>
          <input
            type="text"
            id="idProducto"
            name="idProducto"
            placeholder="Ingrese ID Del Producto"
            required
            className="w-full px-4 py-2 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-700"
          />
        </div>      
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-fit mb-4"> 
          Generar Reporte Demanda
        </button> 
      </form>
      <h2 className="text-2xl font-semibold mb-4">Generar Reportes por Categoria</h2>
      <form onSubmit={(e) => handleSubmit(e, 'categoria')}>
        <div className="mb-6">
          <label htmlFor="categoriaProducto" className="block text-lg mb-2">
            Categoria de Producto
          </label>
          <input
            type="text"
            id="categoriaProducto"
            name="categoriaProducto"
            placeholder="Ingrese Categoria De Producto"
            required
            className="w-full px-4 py-2 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-700"
          />
        </div>   
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-fit mb-4"> 
          Generar Reporte Demanda   
        </button> 
      </form>
    </div>
  );
}
