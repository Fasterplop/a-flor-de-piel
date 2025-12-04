import React from 'react';

// Datos extraídos de tu imagen de Línea de Tiempo
const events = [
  {
    title: "El Desmantelamiento",
    desc: "Desmantelamiento del edificio Hayashi.",
    time: "Inicio"
  },
  {
    title: "El Surgimiento",
    desc: "Surgimiento de 3 establecimientos.",
    time: "6 meses después"
  },
  {
    title: "La Paz Frágil",
    desc: "Firma y primer convenio de paz.",
    time: "7 meses después"
  },
  {
    title: "Primer Ataque",
    desc: "Primer ataque al castillo.",
    time: "1 año después"
  },
  {
    title: "Segundo Asedio",
    desc: "Segundo ataque al castillo.",
    time: "2 meses después"
  },
  {
    title: "La Solicitud",
    desc: "Solicitud de territorio por parte de Moe.",
    time: "3 meses después"
  },
  {
    title: "Tercer Asalto",
    desc: "Tercer ataque al castillo.",
    time: "5 meses después"
  },
  {
    title: "La División",
    desc: "División del reformatorio.",
    time: "2 meses después"
  }
];

export default function Timeline() {
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
        <p className="text-blood font-gothic tracking-widest text-lg animate-pulse">LLEGADA DE NINA AL CASTILLO</p>
      </div>
    </div>
  );
}