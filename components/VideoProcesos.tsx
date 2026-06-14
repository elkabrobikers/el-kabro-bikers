'use client';

export default function VideoProcesos() {
  // Lista fija de tus 3 videos
  const videos = [
    { id: 'cGv1s_tVj6M', titulo: 'Proceso de Reconstrucción 1' },
    { id: 'z9TtYR6dn84', titulo: 'Proceso de Reconstrucción 2' },
    { id: 'Ne_QaUliS3U', titulo: 'Proceso de Reconstrucción 3' }
  ];

  return (
    <section className="py-20 bg-[#111] text-white px-6">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-purple-600 font-bold tracking-widest uppercase mb-4">Canal Youtube</h3>
        <h2 className="text-5xl font-extrabold mb-6">MIRA EL PROCESO</h2>
        <p className="text-gray-400 mb-12 max-w-lg">
          Documentamos cada proyecto para que puedas ver la calidad y detalle de nuestro trabajo en El Kabro Bikers.
        </p>

        {/* Grid de 3 videos */}
        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((v, i) => (
            <div key={i} className="bg-black border border-gray-800 rounded-lg overflow-hidden">
              <div className="relative aspect-video">
                <iframe 
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.titulo}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-lg">{v.titulo}</h4>
              </div>
            </div>
          ))}
        </div>
        
        {/* Botón que redirige a tu canal */}
        <div className="mt-12 text-center">
          <a 
            href="https://www.youtube.com/@ElkabroBikers" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block border border-purple-600 px-8 py-3 font-bold hover:bg-purple-600 transition"
          >
            VER CANAL COMPLETO
          </a>
        </div>
      </div>
    </section>
  );
}