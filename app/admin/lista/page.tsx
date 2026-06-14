'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function ListaPage() {
  const [proyectos, setProyectos] = useState<any[]>([]);

  const fetchProyectos = async () => {
    const { data } = await supabase.from('proyectos').select('*');
    if (data) setProyectos(data);
  };

  useEffect(() => { fetchProyectos(); }, []);

  const eliminar = async (id: number) => {
    if (!confirm('¿Estás seguro de eliminar este proyecto?')) return;
    await supabase.from('proyectos').delete().eq('id', id);
    fetchProyectos();
  };

  return (
    <main className="p-10 bg-black text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Gestionar Proyectos</h1>
      <div className="grid gap-4 max-w-2xl">
        {proyectos.map((p) => (
          <div key={p.id} className="flex justify-between items-center bg-gray-900 p-4 rounded border border-gray-800">
            <div>
              <span className="font-bold block">{p.titulo}</span>
              <span className="text-xs text-purple-400 uppercase">{p.marca}</span>
            </div>
            <button onClick={() => eliminar(p.id)} className="bg-red-600 px-4 py-2 rounded hover:bg-red-700">Eliminar</button>
          </div>
        ))}
      </div>
    </main>
  );
}