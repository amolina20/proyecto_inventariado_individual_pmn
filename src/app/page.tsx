import Layout from "@/app/layout";

import Image from 'next/image';

export default async function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <h1 className="text-center text-4xl font-bold mb-12 text-blue-950">
        Bienvenido a InventoRio
      </h1>
      <div className="flex justify-center mb-8">
        <Image 
          src="/images/inventorio.jpg"
          alt="Foto"
          width={300}   
          height={200} 
        />  
      </div>
      <p className= "text-black ">Bienvenido a InventoRio, tu herramienta de gestión de inventario.
      Desde aquí puedes registrar productos, monitorear el stock y llevar un seguimiento del inventariado.
      Comienza eligiendo una de las opciones en el menu a la izquierda.</p>
    </div>
  
  );
}
