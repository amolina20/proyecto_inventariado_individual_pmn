export default async function Login() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-center text-4xl font-bold mb-12 text-blue-950">
        Iniciar Sesión
      </h1>
      <div className="text-center p-8 bg-gray-400 rounded-lg space-y-4 w-full max-w-sm">
        <input  
          placeholder="Usuario"
          className="w-full p-2 border border-black rounded-lg"
        />
        <input
          placeholder="Contraseña"
          className="w-full p-2 border border-black rounded-lg"
        />
        <button className="w-full py-2 bg-cyan-800 text-white rounded-lg hover:bg-gray-700">
          Iniciar Sesión
        </button>
      </div>
    </div>
  );
}
