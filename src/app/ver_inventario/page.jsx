'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function VerInv() {
  const router = useRouter();
  const [inventario, setInventario] = useState([]);
  const [productosBusqueda, setProductosBusqueda] = useState([]);
  const [idBusqueda, setIdBusqueda] = useState("");
  const [categoriaBusqueda, setCategoriaBusqueda] = useState("")

  useEffect(() => {
    const sesion = localStorage.getItem('logeado');
    if (sesion !== 'true') {
      router.push('/login');
    } else {
      const inventarioGuardado = JSON.parse(localStorage.getItem('inventario')) || [];
      const inventarioActual= inventarioGuardado.map(item => ({
        ...item,
        stock: Number(item.stock),
      }));
      setInventario(inventarioActual);  
      setProductosBusqueda(inventarioActual); 
    }
  }, [router]);
  
  
  const aplicarFiltros = (data) => {
    if (idBusqueda !== "") {
      return data.filter(item => item.id === parseInt(idBusqueda));
    }
    if (categoriaBusqueda !== "") {
      return data.filter(item => item.categoria === categoriaBusqueda);
    }
    return data;
  };
  
  const aumentarStock = (id) => {
  const inventarioActualizado = inventario.map(item => {
    if (item.id === id) {
      return { ...item, stock: item.stock + 1 };
    }
    return item;
  });

  const productosFiltrados = aplicarFiltros(inventarioActualizado);
  setProductosBusqueda(productosFiltrados);
  setInventario(inventarioActualizado);
  localStorage.setItem('inventario', JSON.stringify(inventarioActualizado));
};

  const disminuirStock = (id) => {
    const inventarioActualizado = inventario.map(item => {
      if (item.id === id && item.stock > 0) {
        return { ...item, stock: item.stock - 1 };
      }
      return item;
    });

  const productosFiltrados = aplicarFiltros(inventarioActualizado);
  setProductosBusqueda(productosFiltrados);
  setInventario(inventarioActualizado);
  localStorage.setItem('inventario', JSON.stringify(inventarioActualizado));
};


  const busquedaInventario = (e) => {
    const idBusqueda = e.target.value.trim();
    setIdBusqueda(idBusqueda);
    if (idBusqueda == ""){
      setProductosBusqueda(inventario);
    } else {
      const productosFiltrados = inventario.filter(item => item.id === parseInt(idBusqueda));
      setProductosBusqueda(productosFiltrados);
    }
  }

  const busquedaInventarioCategoria = (e) => {
    const catBusqueda = e.target.value.trim();
    setCategoriaBusqueda(catBusqueda);
    if (catBusqueda == ""){
      setProductosBusqueda(inventario);
    } else {
      const productosFiltrados = inventario.filter(item => item.categoria === catBusqueda);
      setProductosBusqueda(productosFiltrados);
    }
  }
  return (
    <div className="flex flex-col min-h-screen text-black px-6 py-8">
      <h1 className="text-center text-4xl font-bold mb-12 text-blue-950">
        Lista de Inventariado   
      </h1>
      <div className="mb-6">
          <label htmlFor="idProducto" className="block text-lg mb-2">
            Buscar Producto por ID
          </label>
          <input
            type="number"
            id="idProducto"
            name="idProducto"
            placeholder="Ingrese ID Producto"
            className="w-full px-4 py-2 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-700"
            onChange={busquedaInventario}
            disabled={categoriaBusqueda !== ""}
          />
        </div>
      <div>
      <div className="mb-6">
          <label htmlFor="idProducto" className="block text-lg mb-2">
            Buscar Por Categoria
          </label>
          <input
            type="text"
            id="categoriaProducto"
            name="categoriaProducto"
            placeholder="Ingrese Categoria"
            className="w-full px-4 py-2 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-700"
            onChange={busquedaInventarioCategoria}
            disabled={idBusqueda !== ""}
          />
        </div>
        
        <table className="min-w-full bg-gray-400">
          <thead>
            <tr className="bg-gray-600 text-white">
              <th className="border px-3 py-2">ID</th>
              <th className="border px-3 py-2">Nombre</th>
              <th className="border px-3 py-2">Precio</th>
              <th className="border px-3 py-2">Stock</th>
              <th className="border px-3 py-2">Categoria</th>
              <th className="border px-3 py-2">Actualizar Stock</th>
            </tr>
          </thead>
          <tbody>
            {productosBusqueda.map((item) => (
              <tr key={item.id} className="text-white">
                <td className="border px-3 py-2">{item.id}</td>
                <td className="border px-3 py-2">{item.nombre}</td>
                <td className="border px-3 py-2">{item.precio}$</td>
                <td className="border px-3 py-2">{item.stock}</td>
                <td className="border px-3 py-2">{item.categoria}</td>
                <td className="border px-3 py-2">
                  <button className="bg-green-400 px-2 rounded mr-1 hover:bg-green-700" onClick={() => aumentarStock(item.id)}>+</button>
                  <button className="bg-yellow-600 px-2 rounded ml-1 hover:bg-red-700" onClick={() => disminuirStock(item.id)} >−</button>
                </td>
              </tr>
            ))}           
          </tbody>
        </table>
      </div>
    </div>
  );
}
