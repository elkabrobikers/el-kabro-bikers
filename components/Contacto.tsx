'use client';
import { useState } from 'react';

export default function Contacto() {
  const [formData, setFormData] = useState({ nombre: '', modelo: '', dano: '' });

  const enviarWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    // Mensaje formateado para tu WhatsApp de prueba
    const mensaje = `Hola, mi nombre es ${formData.nombre}. Tengo una ${formData.modelo} y necesito ayuda con: ${formData.dano}`;
    const url = `https://wa.me/59179775415?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-20 bg-black text-white px-6">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <h2 className="text-4xl md:text-6xl font-black mb-12 uppercase">
          ¿TIENES UNA <span className="text-purple-600">MOTO</span><br />
          QUE RESTAURAR?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Lado Izquierdo: Info, Horario y Mapa */}
          <div className="space-y-6">
            <div className="bg-[#111] p-6 border-l-4 border-purple-600">
              <p className="text-gray-500 text-[10px] tracking-widest uppercase">Ubicación</p>
              <p className="font-bold">Cochabamba, Bolivia</p>
            </div>
            <div className="bg-[#111] p-6 border-l-4 border-purple-600">
              <p className="text-gray-500 text-[10px] tracking-widest uppercase">Teléfono / Whatsapp</p>
              <p className="font-bold">+591 79775415</p>
            </div>
            <div className="bg-[#111] p-6 border-l-4 border-purple-600">
              <p className="text-gray-500 text-[10px] tracking-widest uppercase">Horario</p>
              <p className="font-bold">Lun-Vie 8:00-18:00 · Sáb 9:00-14:00</p>
            </div>
            
            {/* Mapa */}
            <div className="relative w-full h-64 overflow-hidden rounded-md border border-gray-800">
              <iframe 
                className="w-full h-full grayscale hover:grayscale-0 transition duration-500"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.123456789!2d-66.3484!3d-17.3748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e37550bf2870d5%3A0x8fa63fa7de242ddb!2sEl%20kabro%20bikers!5e0!3m2!1ses!2sbo!4v1718335000000!5m2!1ses!2sbo" 
                allowFullScreen
              ></iframe>
              <a 
                href="https://maps.app.goo.gl/TWJNiNVcB1YTAq6Q6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute top-2 left-2 bg-black/80 px-3 py-1 text-xs border border-white hover:bg-white hover:text-black transition"
              >
                Abrir en Maps ↗
              </a>
            </div>
          </div>

          {/* Lado Derecho: Formulario */}
          <form onSubmit={enviarWhatsApp} className="bg-[#111] p-8 border border-gray-800 h-fit">
            <h3 className="text-2xl font-bold mb-2">SOLICITAR COTIZACIÓN</h3>
            <p className="text-gray-400 text-sm mb-6">Cuéntanos sobre tu moto y el daño. Te respondemos en menos de 24 horas.</p>
            
            <input 
              required 
              placeholder="Nombre completo" 
              className="w-full bg-black p-4 mb-4 border border-gray-700 focus:border-purple-600 outline-none" 
              onChange={e => setFormData({...formData, nombre: e.target.value})} 
            />
            <input 
              required 
              placeholder="Modelo de moto" 
              className="w-full bg-black p-4 mb-4 border border-gray-700 focus:border-purple-600 outline-none" 
              onChange={e => setFormData({...formData, modelo: e.target.value})} 
            />
            <textarea 
              required 
              placeholder="Describe el daño" 
              className="w-full bg-black p-4 mb-4 border border-gray-700 h-32 focus:border-purple-600 outline-none" 
              onChange={e => setFormData({...formData, dano: e.target.value})} 
            />
            
            <button 
              type="submit" 
              className="w-full bg-purple-600 py-4 font-bold hover:bg-purple-700 transition flex justify-center items-center gap-2 uppercase tracking-widest"
            >
              Enviar solicitud ✈
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}