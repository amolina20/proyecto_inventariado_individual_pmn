'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Login() {

  const [nombreUsuario, setUsuario] = useState('')
  const [contraseña, setContraseña] = useState('')  
  
  const router = useRouter()

  const handleLogin = (e) => {
    e.preventDefault()

    if (nombreUsuario === 'admin' && contraseña === '1234') {
      localStorage.setItem('logeado', 'true') 
      localStorage.setItem('rol', 'admin')
      router.push('/')
    } else if (nombreUsuario === 'usuario' && contraseña === '4321') {
      localStorage.setItem('logeado', 'true') 
      localStorage.setItem('rol', 'usuario')
      router.push('/')      
    }
    else {
      alert('Usuario o Contraeña Incorrectos')
    }
  }

  useEffect(() => {
      const sesion = localStorage.getItem('logeado')
      if (sesion == 'true') {
        router.push('/')
      }
    }, [router])

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-center text-4xl font-bold mb-12 text-blue-950">
        Iniciar Sesión
      </h1>
      <div className="text-center p-8 bg-gray-400 rounded-lg space-y-4 w-full max-w-sm">
        <input  
          placeholder="Usuario (admin/usuario)"
          className="w-full p-2 border border-black rounded-lg"
          value = {nombreUsuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <input
          placeholder="Contraseña (1234/4321)"
          className="w-full p-2 border border-black rounded-lg"
          value = {contraseña}
          onChange={(e) => setContraseña(e.target.value)}
        />
        <button type ="submit" className="w-full py-2 bg-cyan-800 text-white rounded-lg hover:bg-gray-700" onClick={handleLogin}>
          Iniciar Sesión
        </button>
      </div>
    </div>
  );
}
