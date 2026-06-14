'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function SubirPage() {
  const [titulo, setTitulo] = useState('');
  const [marca, setMarca] = useState('KAWASAKI');
  const [antes, setAntes] = useState<FileList | null>(null);
  const [despues, setDespues] = useState<FileList | null>(null);
  const [cargando, setCargando] = useState(false);

  const subirFotos = async (files: FileList) => {
    const urls = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const fileName = `${Date.now()}-${i}-${file.name}`;
      const { error } = await supabase.storage.from('proyectos-motos').upload(fileName, file);
      if (error) throw error;
      const { data } = supabase.storage.from('proyectos-motos').getPublicUrl(fileName);
      urls.push(data.publicUrl);
    }
    return urls;
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!antes || !despues) return alert('Por favor selecciona los archivos');
    setCargando(true);
    try {
      const urlsAntes = await subirFotos(antes);
      const urlsDespues = await subirFotos(despues);
      
      await supabase.from('proyectos').insert([{
        titulo,
        marca,
        url_antes: JSON.stringify(urlsAntes),
        url_despues: JSON.stringify(urlsDespues),
        descripcion: 'Sin descripción'
      }]);
      
      alert('¡Proyecto subido con éxito!');
      setTitulo('');
    } catch (e: any) { alert(e.message); } finally { setCargando(false); }
  };

  return (
    <main className="p-6 bg-black text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Subir Proyecto</h1>
      <form onSubmit={handleUpload} className="space-y-6 max-w-lg">
        <input className="w-full p-3 bg-gray-900 rounded border border-gray-700" placeholder="Título del proyecto" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
        
        <select 
          className="w-full p-3 bg-gray-900 rounded border border-gray-700 text-white" 
          value={marca}
          onChange={(e) => setMarca(e.target.value)}
        >
          <option value="KAWASAKI">KAWASAKI</option>
          <option value="SUZUKI">SUZUKI</option>
          <option value="YAMAHA">YAMAHA</option>
          <option value="HONDA">HONDA</option>
          <option value="OTRA MARCA">OTRA MARCA</option>
        </select>

        <div className="space-y-2">
          <label className="block text-sm text-gray-400">4 Fotos ANTES:</label>
          <input type="file" multiple accept="image/*" onChange={(e) => setAntes(e.target.files)} className="w-full p-2 bg-gray-800 rounded" />
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm text-gray-400">4 Fotos DESPUÉS:</label>
          <input type="file" multiple accept="image/*" onChange={(e) => setDespues(e.target.files)} className="w-full p-3 bg-gray-800 rounded" />
        </div>

        <button className="bg-purple-600 w-full py-4 rounded-xl font-bold text-lg hover:bg-purple-700 transition" disabled={cargando}>
          {cargando ? 'Subiendo fotos...' : 'Publicar Proyecto'}
        </button>
      </form>
    </main>
  );
}