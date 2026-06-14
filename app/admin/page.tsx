'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminPage() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getSession();
      if (!data.session) router.push('/admin/login');
      else setUser(data.session.user);
    };
    checkUser();
  }, []);

  if (!user) return null;

  return (
    <main className="p-10 bg-black text-white min-h-screen">
      {/* Botón de Inicio en la parte superior absoluta */}
      <div className="mb-10">
        <Link href="/" className="text-purple-500 font-black text-sm uppercase tracking-widest hover:underline">
          ← Volver a Inicio
        </Link>
      </div>

      <div className="mb-10">
  <Link 
    href="/" 
    style={{ color: '#9333ea' }} // Forzamos el morado con estilo en línea
    className="font-black text-sm uppercase tracking-widest hover:underline"
  >
    ← VOLVER A INICIO
  </Link>
</div>
      

      <h1 className="text-3xl font-bold mb-8">Panel de Gestión - {user.email}</h1>
      
      <div className="flex gap-4">
        <a href="/admin/subir" className="bg-purple-600 px-6 py-3 rounded font-bold hover:bg-purple-700">Subir Proyecto Nuevo</a>
        <a href="/admin/lista" className="bg-gray-700 px-6 py-3 rounded font-bold hover:bg-gray-600">Ver y Eliminar Proyectos</a>
      </div>
      
      <button 
        onClick={() => { supabase.auth.signOut(); router.push('/'); }} 
        className="mt-10 text-gray-500 hover:text-white transition"
      >
        Cerrar Sesión
      </button>
    </main>
  );
}