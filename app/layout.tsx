import './globals.css';
import Navbar from '@/components/Navbar';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-black text-white w-full overflow-x-hidden">
        <Navbar />
        {children}
      </body>
    </html>
  );
}