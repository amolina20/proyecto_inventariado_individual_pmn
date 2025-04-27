'use client'
import { ReactNode } from 'react';
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import './globals.css'
import Link from 'next/link';

type LayoutPropiedades = {
  children: ReactNode;
};

export default function RootLayout({ children }: LayoutPropiedades) {
  const [rol, setRol] = useState<string | null>(null);
  const router = useRouter()

  const actualizar = () => {
    window.location.reload(); 
  };

  useEffect(() => {
    const sesion = localStorage.getItem('logeado')
    const userRol = localStorage.getItem('rol')

    if (sesion !== 'true') {
      router.push('/login')
    } else {
      setRol(userRol)
    }
  }, [router])
  
  return (
    <html lang="es">
      <body className="flex min-h-screen">
        <aside className="w-70 bg-gray-400 text-black p-2">
          <nav className="flex flex-col space-y-4">
            <button  className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700" onClick={actualizar}>Actualizar Pagina</button>
            {(rol == 'usuario' || rol === 'admin') && (<Link href="/" className="hover:text-amber-50">Inicio</Link>)}
            {(rol == 'usuario' || rol === 'admin') && (<Link href="/ver_inventario" className="hover:text-amber-50">Inventario</Link>)}
            {rol === 'admin' && (<Link href="/administrar_inv" className="hover:text-amber-50">Administrar Inv.</Link>)}
            {(rol === 'admin') && (<Link href="/AI" className="hover:text-amber-50">AI</Link>)}
            {(rol == 'usuario' || rol === 'admin') && (<Link href="/alertas" className="hover:text-amber-50">Alertas</Link>)}
          </nav>
        </aside>
        <main className="flex-1 p-8 bg-gray-300 ">{children}</main>
      </body>
    </html>
  );
}
