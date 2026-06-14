'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function GaleriaProyectos() {
  const [proyectos, setProyectos] = useState<any[]>([]);
  const [filtrados, setFiltrados] = useState<any[]>([]);
  const [marcaActiva, setMarcaActiva] = useState('TODOS');
  const [pSel, setPSel] = useState<any | null>(null); // Proyecto seleccionado para el modal
  const [imgGrande, setImgGrande] = useState<string | null>(null); // Imagen para pantalla completa

  const marcas = ['TODOS', 'KAWASAKI', 'SUZUKI', 'YAMAHA', 'HONDA', 'OTRA MARCA'];

  useEffect(() => {
    const fetchProyectos = async () => {
      const { data } = await supabase.from('proyectos').select('*');
      if (data) {
        setProyectos(data);
        setFiltrados(data);
      }
    };
    fetchProyectos();
  }, []);

  const filtrar = (marca: string) => {
    setMarcaActiva(marca);
    setFiltrados(marca === 'TODOS' ? proyectos : proyectos.filter(p => p.marca === marca));
  };

  return (
    <section className="py-20 bg-black text-white px-6">
      <h2 className="text-4xl font-bold mb-8 text-center uppercase tracking-widest text-purple-600">Proyectos</h2>
      
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {marcas.map(m => (
          <button key={m} onClick={() => filtrar(m)} className={`px-6 py-2 rounded-full border transition font-bold ${marcaActiva === m ? 'bg-purple-600' : 'border-gray-700'}`}>
            {m}
          </button>
        ))}
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filtrados.map((p) => {
          const antes = JSON.parse(p.url_antes || '[]');
          return (
            <div key={p.id} className="cursor-pointer group" onClick={() => setPSel(p)}>
              <img src={antes[0]} className="w-full h-80 object-cover rounded-xl border border-gray-800 group-hover:scale-105 transition" />
              <h3 className="mt-4 text-xl font-bold uppercase">{p.titulo}</h3>
            </div>
          );
        })}
      </div>

      {/* Modal de Detalles */}
      {pSel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm" onClick={() => setPSel(null)}>
          <div className="bg-[#111] w-full max-w-4xl rounded-2xl border border-gray-800 p-8 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-purple-500 uppercase">{pSel.titulo}</h2>
              <button onClick={() => setPSel(null)} className="text-2xl font-bold hover:text-red-500">✕</button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {['ANTES', 'DESPUÉS'].map((tipo) => (
                <div key={tipo}>
                  <h4 className="text-gray-400 mb-2 font-bold">{tipo}</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {JSON.parse(tipo === 'ANTES' ? pSel.url_antes : pSel.url_despues).map((url: string, i: number) => (
                      <img key={i} src={url} onClick={() => setImgGrande(url)} className="w-full h-32 object-cover rounded cursor-pointer hover:opacity-70 transition" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Pantalla Completa para fotos */}
      {imgGrande && (
        <div className="fixed inset-0 z-[60] bg-black/98 flex items-center justify-center p-4" onClick={() => setImgGrande(null)}>
          <img src={imgGrande} className="max-w-full max-h-full object-contain rounded-lg shadow-2xl" />
        </div>
      )}
    </section>
  );
}