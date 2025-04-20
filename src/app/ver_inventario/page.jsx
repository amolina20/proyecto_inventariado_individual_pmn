import Datos from "@/datos_inventario"

export default async function VerInv() {
    return (
      <div className="flex flex-col min-h-screen">
        <h1 className="text-center text-4xl font-bold mb-12 text-blue-950">
          Lista de Inventariado (Admins y Empleados Actualizan Productos)
        </h1>
        <div>
      <table className="min-w-full bg-gray-400">
        <thead>
          <tr className="bg-gray-600 text-white">
            <th className="border px-3 py-2">ID</th>
            <th className="border px-3 py-2">Nombre</th>
            <th className="border px-3 py-2">Categoria</th>
            <th className="border px-3 py-2">Precio</th>
            <th className="border px-3 py-2">Stock</th>   
            <th className="border px-3 py-2">Actualizar Stock</th>         
          </tr>
        </thead>
        <tbody>
            {Datos.map((item) => (
              <tr key={item.id} className="text-white">
                <td className="border px-3 py-2">{item.id}</td>
                <td className="border px-3 py-2">{item.nombre}</td>
                <td className="border px-3 py-2">{item.categoria}</td>
                <td className="border px-3 py-2">{item.precio}$</td>
                <td className="border px-3 py-2">{item.stock}</td>
                <td className="border px-3 py-2">
                  <button className="bg-green-400 px-2 rounded mr-1 hover:bg-green-700">+</button>
                  <button className="bg-yellow-600 px-2 rounded ml-1 hover:bg-red-700">−</button>
                </td>
              </tr>
            ))}
          </tbody>
      </table>
    </div>
      </div>
        
    );
  }
  