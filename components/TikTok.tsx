'use client';

export default function TikTok() {
  return (
    <section className="py-20 bg-black text-white px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 p-8 border border-gray-800 rounded-3xl bg-[#111]">
        
        {/* Celular: Ajustado para mostrar tu captura de pantalla completa */}
        <div className="relative w-72 h-[550px] border-[12px] border-gray-900 rounded-[2.5rem] overflow-hidden shadow-2xl bg-black">
          <img 
            src="/tu-foto-tiktok.jpg" 
            alt="Perfil TikTok" 
            className="w-full h-full object-fill" 
          />
        </div>

        {/* Lado Derecho */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-purple-600 font-bold tracking-widest uppercase mb-4">TikTok</h3>
          <h2 className="text-5xl font-extrabold mb-6">MIRA MIS VIDEOS</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto md:mx-0">
            Sigue todo el proceso de fibra de vidrio y restauraciones de plásticos de El Kabro Bikers directamente en nuestro perfil.
          </p>
          
          <a 
            href="https://www.tiktok.com/@marco.alanes" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block border border-purple-600 px-8 py-3 font-bold hover:bg-purple-600 transition"
          >
            IR A TIKTOK
          </a>
        </div>
      </div>
    </section>
  );
}