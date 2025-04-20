export default async function AdminInv() {
  return (
    <div className="flex flex-col min-h-screen text-black px-6 py-8">
      <h1 className="text-center text-4xl font-bold mb-12 text-blue-950">
        Administrar Inventario (Solo Admins Agregan Productos)
      </h1>

      <h2 className="text-2xl font-semibold mb-4">Agregar Producto</h2>

      <div className="mb-6">
        <label htmlFor="nombreProducto" className="block text-lg mb-2">
          Nombre del Producto
        </label>
        <input
          type="text"
          id="nombreProducto"
          name="nombreProducto"
          placeholder="Ingrese Producto"
          className="w-full px-4 py-2 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-700"
        />
      </div>    
      <div className="mb-6">
        <label htmlFor="precio" className="block text-lg mb-2">
          Precio del Producto
        </label>
        <input
          type="number"
          id="precioProducto"
          name="precioProducto"
          placeholder="Ingrese Precio"
          className="w-full px-4 py-2 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-700"
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="precio" className="block text-lg mb-2">
          Stock Inicial 
        </label>
        <input
          type="number"
          id="stockProducto"
          name="stockProducto"
          placeholder="Ingrese Stock Inicial"
          className="w-full px-4 py-2 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-700"
        />
      </div>    
      <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-fit mb-4"> 
        Agregar Producto  
      </button> 
    </div>
  );
}
