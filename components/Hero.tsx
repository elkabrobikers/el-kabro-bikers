// src/components/Hero.tsx
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-black text-white px-4 py-16 overflow-hidden">
      <div className="text-center z-10 w-full max-w-2xl mx-auto">
        {/* Título más pequeño: 3xl en móvil, 6xl en escritorio */}
        <h1 className="text-3xl md:text-6xl font-black uppercase mb-6 leading-[1.1] break-words px-2">
          Reconstruimos <br />
          <span className="text-purple-600">carenados</span> como <br />
          nadie más
        </h1>
        
        <p className="text-gray-400 mb-8 mx-auto text-sm md:text-lg px-4 leading-relaxed">
          Especialistas en reconstrucción, pintura y restauración de carenados de motocicleta. Devolvemos la vida a tu moto con acabados de competición.
        </p>
        
        <div className="flex flex-col gap-4 justify-center items-center px-4">
          {/* Enlace a Contacto (asegúrate de que la ruta sea correcta) */}
          <Link 
            href="/contacto" 
            className="bg-purple-600 hover:bg-purple-700 w-full md:w-auto px-8 py-4 rounded font-bold uppercase transition-all text-center"
          >
            Solicitar Cotización
          </Link>
          
          {/* Enlace a Galería de Proyectos */}
          <Link 
            href="/proyectos" 
            className="border border-white hover:bg-white hover:text-black w-full md:w-auto px-8 py-4 rounded font-bold uppercase transition-all text-center"
          >
            Ver Proyectos
          </Link>
        </div>
      </div>
    </section>
  );
}