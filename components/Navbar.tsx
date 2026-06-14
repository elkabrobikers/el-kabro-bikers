import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 flex justify-between items-center p-6 bg-black/50 backdrop-blur-md">
      <h1 className="text-xl font-black italic uppercase">El Kabro Bikes</h1>
      
      {/* Botón de acceso admin */}
      <Link href="/admin/login" className="text-xs text-gray-500 hover:text-purple-500 transition uppercase tracking-widest">
        Acceso Admin
      </Link>
    </nav>
  );
}