'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default  function Alertas() {
  const router = useRouter()

  useEffect(() => {
    const sesion = localStorage.getItem('logeado')
    if (sesion !== 'true') {
      router.push('/login')
    }
  }, [router])
    

  return (
    <div className="flex flex-col min-h-screen text-black px-6 py-8">
      <h1 className="text-center text-4xl font-bold mb-12 text-blue-950">
        ¡¡Alertas!!
      </h1>
      <h2 className="bg-green-500 text-white px-4 py-2 rounded mb-4">¡El Producto de ID 1 esta con bajo stock!</h2>
      <h2 className="bg-green-500 text-white px-4 py-2 rounded mb-4">¡El Producto de ID 2 esta con bajo stock!</h2>
      <h2 className="bg-green-500 text-white px-4 py-2 rounded mb-4">¡El Producto de ID 5 esta con bajo stock!</h2>
      <h2 className="bg-green-500 text-white px-4 py-2 rounded mb-4">¡El Producto de ID 9 esta con bajo stock!</h2>
      <h2 className="bg-green-500 text-white px-4 py-2 rounded mb-4">¡El Producto de ID 3 esta con bajo stock!</h2>
    </div>
      
  );
}
