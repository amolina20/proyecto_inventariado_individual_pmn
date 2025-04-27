'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

import Image from 'next/image';

export default  function HomePage() {
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
        Bienvenido a InventoRio
      </h1>
      <div className="flex justify-center mb-8">
        <Image 
          src="/images/inventorio.jpg"
          alt="Foto"
          width={300}   
          height={500} 
        />  
      </div>
      <p className= "text-black mb-4">Bienvenido a InventoRio, tu herramienta de gestión de inventario.
      Desde aquí puedes registrar productos, monitorear el stock y llevar un seguimiento del inventariado.
      Comienza eligiendo una de las opciones en el menu a la izquierda.</p>
      <button
        onClick={() => {
          localStorage.removeItem('logeado')
          router.push('/login')
        }}
          className="w-full py-2 bg-cyan-800 text-white rounded-lg hover:bg-gray-700 ">
        Cerrar sesión
      </button>
    </div>
  
  );
}
