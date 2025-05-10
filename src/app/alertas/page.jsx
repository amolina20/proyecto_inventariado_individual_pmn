'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Alertas() {
  const router = useRouter();
  const ALERTA_STOCK_BAJO = 5;

  const [inventario, setInventario] = useState([]);
  const [productosBajoStock, setProductosBajoStock] = useState([]);

  useEffect(() => {
    const sesion = localStorage.getItem('logeado');
    if (sesion !== 'true') {
      router.push('/login');
    } else {
      const inventarioGuardado = JSON.parse(localStorage.getItem('inventario')) || [];
      const inventarioActual = inventarioGuardado.map(item => ({
        ...item,
        stock: Number(item.stock),
      }));
      setInventario(inventarioActual);

      const bajos = inventarioActual.filter(item => item.stock < ALERTA_STOCK_BAJO);
      setProductosBajoStock(bajos);
    }
  }, [router]);

  return (
    <div className="flex flex-col min-h-screen text-black px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">Alertas de Inventario</h1>

      {inventario.length === 0 ? (
      <div className="bg-gray-50 text-blue-500 p-4 rounded mb-4">
        No hay productos en el inventario
      </div>
      ) : productosBajoStock.length > 0 ? (
        <div className="bg-gray-50 text-blue-500 p-4 rounded mb-4">
          ¡Hay productos con bajo stock (MENOR A {ALERTA_STOCK_BAJO})!
          <ul className="list-disc ml-6 mt-2">
            {productosBajoStock.map(producto => (
              <li key={producto.id}>
                <h2>{producto.nombre} (ID: {producto.id}) — Stock: {producto.stock}</h2>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="bg-green-100 text-green-700 p-4 rounded mb-4">
          Todos los productos tienen stock suficiente (MAYOR A {ALERTA_STOCK_BAJO})
        </div>
      )}
  </div>

)};
