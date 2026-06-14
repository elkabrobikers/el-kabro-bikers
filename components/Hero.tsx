// src/components/Hero.tsx
export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center bg-black text-white px-6">
      <div className="text-center z-10">
        <h1 className="text-5xl md:text-7xl font-black uppercase mb-6 leading-tight">
          Reconstruimos <br />
          <span className="text-purple-600">carenados</span> como <br />
          nadie más
        </h1>
        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
          Especialistas en reconstrucción, pintura y restauración de carenados de motocicleta. Devolvemos la vida a tu moto con acabados de competición.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded font-bold uppercase transition-all">
            Solicitar Cotización
          </button>
          <button className="border border-white hover:bg-white hover:text-black px-8 py-4 rounded font-bold uppercase transition-all">
            Ver Proyectos
          </button>
        </div>
      </div>
    </section>
  );
}