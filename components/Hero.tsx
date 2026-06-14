'use client';

export default function Hero() {
  
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Obtenemos la posición del elemento respecto al documento
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      
      // Ajuste por si tienes un menú fijo (ej. 80px), si no, pon 0
      const offset = 80; 
      
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    } else {
      console.log("¡ERROR! No se encontró el elemento con id:", id);
    }
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-black text-white px-4 py-10 overflow-hidden">
      <div className="text-center z-10 w-full max-w-[90vw] mx-auto">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-black uppercase mb-6 leading-[1] break-words hyphens-auto">
          Reconstruimos <br />
          <span className="text-purple-600">carenados</span> <br />
          como nadie más
        </h1>
        
        <div className="flex flex-col gap-3 justify-center items-center w-full max-w-sm mx-auto">
          <button 
            type="button"
            onClick={() => handleScroll('contacto')}
            className="bg-purple-600 hover:bg-purple-700 w-full py-4 rounded font-bold uppercase transition-all text-center text-sm cursor-pointer z-50 relative"
          >
            Solicitar Cotización
          </button>
          <button 
            type="button"
            onClick={() => handleScroll('proyectos')}
            className="border border-white hover:bg-white hover:text-black w-full py-4 rounded font-bold uppercase transition-all text-center text-sm cursor-pointer z-50 relative"
          >
            Ver Proyectos
          </button>
        </div>
      </div>
    </section>
  );
}