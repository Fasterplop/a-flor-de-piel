import React from 'react';

// Ahora recibe "events" como propiedad (Props)
export default function Timeline({ events = [] }) {
  
  // Si no hay eventos, mostramos un mensaje discreto o nada
  if (events.length === 0) return <p className="text-center text-gray-500 text-xs tracking-widest">ARCHIVOS CLASIFICADOS - NO DISPONIBLES</p>;

  return (
    <div className="relative max-w-4xl mx-auto px-6">
      {/* LÍNEA CENTRAL (La Vena) */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blood via-red-900 to-transparent opacity-60"></div>

      <div className="space-y-12">
        {events.map((event, index) => (
          <div key={index} className={`relative flex items-center md:justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            
            {/* ESPACIO VACÍO (Para alternar lados en desktop) */}
            <div className="hidden md:block w-5/12"></div>

            {/* EL PUNTO (Nodo) */}
            <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border-4 border-midnight bg-blood shadow-[0_0_15px_rgba(168,0,0,0.8)] z-10 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>

            {/* LA TARJETA DE CONTENIDO */}
            <div className="ml-12 md:ml-0 w-full md:w-5/12 bg-white/5 border border-white/10 p-6 rounded-lg hover:border-gold/50 transition duration-300 backdrop-blur-sm group">
              <span className="text-gold text-xs font-bold tracking-widest uppercase mb-1 block">
                {event.time}
              </span>
              <h3 className="text-white font-gothic text-xl mb-2 group-hover:text-blood transition">
                {event.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {event.desc}
              </p>
            </div>

          </div>
        ))}
      </div>
      
      {/* FINAL DE LÍNEA */}
      <div className="text-center mt-12">
        <p className="text-blood font-gothic tracking-widest text-lg animate-pulse">FIN DEL REGISTRO ACTUAL</p>
      </div>
    </div>
  );
}