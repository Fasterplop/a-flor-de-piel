import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Usaremos framer-motion para animaciones suaves si lo instalamos, o CSS simple.

// Datos de las ubicaciones basados en el libro
const locations = [
  {
    id: 1,
    name: "El Bosque del Portal",
    x: 20, // Posición horizontal %
    y: 70, // Posición vertical %
    desc: "Donde Nina apareció tras cruzar los dos árboles con luz azulosa. Un lugar húmedo y confuso.",
    quote: "«Un tirón en el estómago me hizo cerrar los ojos... fui escupida en otro territorio.»"
  },
  {
    id: 2,
    name: "Castillo Hayashi",
    x: 50,
    y: 40,
    desc: "La base militar disfrazada de castillo. Hogar de los 'hayashers' y centro de entrenamiento.",
    quote: "«El dueño de este lugar debía ser millonario por herencia o traficante...»"
  },
  {
    id: 3,
    name: "El Comedor",
    x: 80,
    y: 60,
    desc: "El lugar del primer enfrentamiento con Megan y su látigo. Lujo mezclado con violencia.",
    quote: "«Los bordes de las tazas relucían oro... Segundos después un látigo atravesó el polvo.»"
  }
];

export default function InteractiveMap() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    <div className="relative w-full aspect-video bg-gray-900 rounded-xl overflow-hidden border border-white/10 shadow-2xl group">
      
      {/* 1. EL FONDO (MAPA ILUSTRADO) */}
      {/* Aquí iría tu imagen real: <img src="/mapa.jpg" className="absolute inset-0 w-full h-full object-cover opacity-50" /> */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-30 grayscale hover:grayscale-0 transition duration-700"></div>
      
      {/* Título flotante */}
      <div className="absolute top-4 left-6 pointer-events-none">
        <h3 className="font-gothic text-gold text-xl tracking-widest">MAPA DE ZONA</h3>
        <p className="text-xs text-gray-400">Selecciona una ubicación</p>
      </div>

      {/* 2. LOS PUNTOS INTERACTIVOS (PINS) */}
      {locations.map((loc) => (
        <button
          key={loc.id}
          onClick={() => setSelectedLocation(loc)}
          className="absolute w-8 h-8 -ml-4 -mt-4 flex items-center justify-center group/pin z-10 focus:outline-none"
          style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
        >
          {/* Círculo pulsante */}
          <span className="absolute w-full h-full bg-blood rounded-full opacity-75 animate-ping"></span>
          {/* Círculo central */}
          <span className="relative w-4 h-4 bg-red-600 rounded-full border-2 border-white shadow-[0_0_15px_rgba(168,0,0,1)] group-hover/pin:scale-150 transition duration-300"></span>
          
          {/* Tooltip al pasar el mouse (Nombre) */}
          <span className="absolute top-8 whitespace-nowrap bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/pin:opacity-100 transition duration-300 pointer-events-none border border-white/10">
            {loc.name}
          </span>
        </button>
      ))}

      {/* 3. EL MODAL DE INFORMACIÓN (Aparece al hacer clic) */}
      {selectedLocation && (
        <div className="absolute inset-0 z-20 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="bg-midnight border border-gold p-8 max-w-lg relative shadow-[0_0_50px_rgba(197,160,89,0.1)]">
            <button 
              onClick={() => setSelectedLocation(null)}
              className="absolute top-2 right-4 text-gray-500 hover:text-white text-2xl"
            >
              &times;
            </button>
            
            <h2 className="font-gothic text-3xl text-gold mb-2">{selectedLocation.name}</h2>
            <div className="h-0.5 w-16 bg-blood mb-4"></div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              {selectedLocation.desc}
            </p>
            
            <blockquote className="border-l-2 border-gray-600 pl-4 italic text-gray-500 text-sm">
              {selectedLocation.quote}
            </blockquote>
            
            <button className="mt-6 w-full py-2 border border-white/20 hover:bg-white hover:text-black transition text-sm tracking-widest uppercase">
              Ver escena del libro
            </button>
          </div>
        </div>
      )}
    </div>
  );
}