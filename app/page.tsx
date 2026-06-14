'use client';
import GaleriaProyectos from '@/components/GaleriaProyectos';
import VideoProcesos from '@/components/VideoProcesos';
import TikTok from '@/components/TikTok';
import Contacto from '@/components/Contacto';

export default function Home() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main>
      <div className="relative min-h-screen bg-black text-white p-6 md:p-12">
        <div className="absolute inset-0 bg-[url('/tu-moto-fondo.jpg')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto pt-20">
          {/* CAMBIO AQUÍ: Usamos grid-cols-12 para tener control total */}
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Lado Izquierdo (Texto): Le damos 7 de 12 columnas (más espacio) */}
            <div className="lg:col-span-7">
              <p className="text-purple-500 font-bold tracking-widest mb-4 uppercase">Taller Especializado · Desde 2015</p>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-black leading-tight mb-6">
                RECONSTRUIMOS <br />
                <span className="text-purple-600">CARENADOS</span> <br />
                COMO <span className="text-purple-600">NADIE</span> <br />
                MÁS
              </h1>
              <p className="text-gray-400 mb-8 max-w-md">Especialistas en reconstrucción, pintura y restauración de carenados de motocicleta. Devolvemos la vida a tu moto con acabados de competición.</p>
              
              <div className="flex gap-4">
                <button onClick={() => handleScroll('contacto')} className="bg-purple-600 px-8 py-3 font-bold hover:bg-purple-700 cursor-pointer">SOLICITAR COTIZACIÓN</button>
                <button onClick={() => handleScroll('proyectos')} className="border border-white px-8 py-3 font-bold hover:bg-white hover:text-black cursor-pointer">VER PROYECTOS</button>
              </div>
            </div>

            {/* Lado Derecho (Servicios): Le damos 5 de 12 columnas (menos espacio) */}
            <div className="lg:col-span-5 space-y-4">
              {[
                { titulo: "RECONSTRUCCIÓN TOTAL", desc: "Desde grietas hasta rotura completa..." },
                { titulo: "PINTURA PROFESIONAL", desc: "Acabados en colores de fábrica..." },
                { titulo: "ENTREGA RÁPIDA", desc: "Tiempos de entrega competitivos..." }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 p-6 border-l-4 border-purple-600 hover:bg-white/10 transition">
                  <h3 className="font-bold text-lg">{item.titulo}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-20 flex gap-12 text-purple-500">
            <div><h2 className="text-4xl font-bold text-white">+500</h2><p>CARENADOS RESTAURADOS</p></div>
            <div><h2 className="text-4xl font-bold text-white">9 años</h2><p>DE EXPERIENCIA</p></div>
            <div><h2 className="text-4xl font-bold text-white">100%</h2><p>GARANTÍA</p></div>
          </div>
        </div>
      </div>
      
      <div id="proyectos"><GaleriaProyectos /></div>
      <VideoProcesos />
      <TikTok />
      <div id="contacto"><Contacto /></div>
    </main>
  );
}