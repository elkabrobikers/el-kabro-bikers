'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) alert('Error: ' + error.message);
    else router.push('/admin');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black text-white">
      <form onSubmit={handleLogin} className="p-8 bg-gray-900 rounded-xl w-80 space-y-4">
        <h1 className="text-xl font-bold">Login Administrador</h1>
        <input type="email" placeholder="Email" className="w-full p-2 bg-black border border-gray-700 rounded" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Contraseña" className="w-full p-2 bg-black border border-gray-700 rounded" onChange={(e) => setPassword(e.target.value)} />
        <button className="w-full bg-purple-600 py-2 rounded font-bold">Ingresar</button>
      </form>
    </div>
  );
}