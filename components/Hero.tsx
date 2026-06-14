// src/components/Hero.tsx
export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center bg-black text-white px-6 overflow-hidden">
      <div className="text-center z-10 w-full">
        {/* Ajustado: text-4xl para móvil, text-7xl para pantallas grandes */}
        <h1 className="text-4xl md:text-7xl font-black uppercase mb-6 leading-tight">
          Reconstruimos <br />
          <span className="text-purple-600">carenados</span> como <br />
          nadie más
        </h1>
        
        {/* Ajustado: texto un poco más pequeño en móvil para evitar que se vea muy pesado */}
        <p className="text-gray-400 mb-8 max-w-lg mx-auto text-sm md:text-base">
          Especialistas en reconstrucción, pintura y restauración de carenados de motocicleta. Devolvemos la vida a tu moto con acabados de competición.
        </p>

        {/* Ajustado: botones en columna en pantallas muy pequeñas, fila en el resto */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded font-bold uppercase transition-all w-full sm:w-auto">
            Solicitar Cotización
          </button>
          <button className="border border-white hover:bg-white hover:text-black px-8 py-3 rounded font-bold uppercase transition-all w-full sm:w-auto">
            Ver Proyectos
          </button>
        </div>
      </div>
    </section>
  );
}