'use client';

export default function VideoProcesos() {
  const videos = [
    { id: 'cGv1s_tVj6M', titulo: 'Proceso de Reconstrucción 1' },
    { id: 'z9TtYR6dn84', titulo: 'Proceso de Reconstrucción 2' },
    { id: 'Ne_QaUliS3U', titulo: 'Proceso de Reconstrucción 3' }
  ];

  return (
    <section className="py-20 bg-black text-white px-6 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-purple-600 font-bold tracking-widest uppercase mb-4">Canal Youtube</h3>
        <h2 className="text-5xl font-extrabold mb-6">MIRA EL PROCESO</h2>
        <p className="text-gray-400 mb-12 max-w-lg">
          Documentamos cada proyecto para que puedas ver la calidad y detalle de nuestro trabajo en El Kabro Bikers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((v, i) => (
            <div key={i} className="bg-black border border-gray-800 rounded-lg overflow-hidden">
              <div className="relative aspect-video w-full">
                <iframe 
                  className="absolute inset-0 w-full h-full"
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