import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Coordenadas calibradas con precisión sobre tu mapa "image_59ab58.jpg"
const locations = [
  {
    id: 1,
    name: "Castillo Hayashi",
    x: 18,  // Izquierda superior (El gran castillo)
    y: 20, 
    desc: "La fortaleza principal y base de operaciones. Aquí entrenan los reclutas bajo la supervisión de Eric Hudson.",
    type: "base"
  },
  {
    id: 2,
    name: "Cementerio",
    x: 6,   // Esquina superior izquierda (Las tumbas)
    y: 10,
    desc: "Un recordatorio silencioso de los que cayeron en los primeros asedios. Pocos se atreven a entrar de noche.",
    type: "danger"
  },
  {
    id: 3,
    name: "Campo de Tiro",
    x: 6,   // Izquierda media (Las dianas de paja)
    y: 40,
    desc: "Zona de prácticas con blancos de paja. El lugar favorito de Megan para descargar su ira.",
    type: "training"
  },
  {
    id: 11, // NUEVO
    name: "La Casa del Árbol",
    x: 48,  // Centro Norte (La estructura de madera en el árbol)
    y: 8,
    desc: "Un puesto de vigilancia elevado oculto en el follaje. Ideal para observar sin ser visto.",
    type: "base"
  },
  {
    id: 4,
    name: "Edificio Desmantelado",
    x: 50,  // Centro exacto (El edificio verde en ruinas)
    y: 38,
    desc: "Las ruinas del antiguo centro administrativo, ahora cubierto de vegetación en la isla central.",
    type: "ruin"
  },
  {
    id: 5,
    name: "Torre Hayashi",
    x: 54,  // Centro Abajo (La torre redonda solitaria)
    y: 85,
    desc: "Una torre medieval solitaria que vigila el acceso sur. Su arquitectura contrasta con la tecnología militar.",
    type: "base"
  },
  {
    id: 6,
    name: "Tronco (El Puente)",
    x: 65,  // Arriba derecha (El tronco gigante caído sobre el río)
    y: 15,
    desc: "Un árbol gigantesco caído que sirve como único cruce natural sobre la parte alta del río.",
    type: "path"
  },
  {
    id: 7,
    name: "División Maria Johnson",
    x: 85,  // Arriba derecha (El edificio grande complejo)
    y: 15,
    desc: "El complejo fortificado del norte. Sede de la facción rival que disputa el control del territorio.",
    type: "enemy"
  },
  {
    id: 8,
    name: "Reformatorio Hayashi",
    x: 90,  // Derecha media (El edificio amurallado cuadrado)
    y: 45,
    desc: "Ubicado al sur de la División. Un lugar de contención con muros altos y seguridad estricta.",
    type: "enemy"
  },
  {
    id: 9,
    name: "Río San Carlos",
    x: 68,  // Cruza por la derecha (Punto en el agua)
    y: 55,
    desc: "La arteria fluvial que divide el territorio. Sus corrientes son traicioneras y el agua es gélida.",
    type: "nature"
  },
  {
    id: 10,
    name: "Campo de Minas",
    x: 90,  // Abajo derecha (Zona boscosa oscura)
    y: 80,
    desc: "¡PELIGRO! Zona boscosa al sureste sembrada de explosivos ocultos. No hay señalización visible.",
    type: "danger"
  }
];

export default function InteractiveMap() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  // Función para asignar color según el tipo de lugar
  const getPinColor = (type) => {
    switch(type) {
      case 'danger': return 'bg-red-600 shadow-red-500'; // Peligro (Rojo)
      case 'enemy': return 'bg-purple-600 shadow-purple-500'; // Enemigos (Morado)
      case 'base': return 'bg-gold shadow-yellow-500'; // Aliados (Dorado)
      case 'training': return 'bg-orange-500 shadow-orange-400'; // Entrenamiento (Naranja)
      default: return 'bg-blue-500 shadow-blue-400'; // Neutro (Azul)
    }
  };

  return (
    <div className="relative w-full aspect-video bg-midnight rounded-xl overflow-hidden border border-white/10 shadow-2xl group cursor-crosshair">
      
      {/* 1. EL FONDO (MAPA REAL) */}
      <img 
        src="/images/mapa-bosque.jpg" 
        alt="Mapa del Territorio Hayashi" 
        className="absolute inset-0 w-full h-full object-cover opacity-90 hover:opacity-100 transition duration-700" 
      />
      
      {/* Título flotante
      <div className="absolute top-4 left-6 pointer-events-none bg-black/50 p-2 rounded backdrop-blur-sm border border-white/10 z-10">
        <h3 className="font-gothic text-gold text-lg tracking-widest">ZONA DE GUERRA</h3>
        <p className="text-xs text-gray-300">Inteligencia Satelital</p>
      </div> */}

      {/* 2. LOS PUNTOS INTERACTIVOS (PINS) */}
      {locations.map((loc) => (
        <button
          key={loc.id}
          onClick={() => setSelectedLocation(loc)}
          className="absolute w-6 h-6 -ml-3 -mt-3 flex items-center justify-center group/pin z-10 focus:outline-none transition-transform hover:scale-125"
          style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
        >
          {/* Onda expansiva (Ping) */}
          <span className={`absolute w-full h-full rounded-full opacity-75 animate-ping ${getPinColor(loc.type).split(' ')[0]}`}></span>
          
          {/* Punto central sólido */}
          <span className={`relative w-3 h-3 rounded-full border border-white shadow-[0_0_10px] ${getPinColor(loc.type)}`}></span>
          
          {/* Tooltip rápido (Nombre al pasar mouse) */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/90 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover/pin:opacity-100 transition duration-300 border border-white/10 pointer-events-none tracking-widest uppercase z-20">
            {loc.name}
          </div>
        </button>
      ))}

      {/* 3. EL MODAL DE INFORMACIÓN */}
      <AnimatePresence>
        {selectedLocation && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-30 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedLocation(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-midnight border border-gold p-6 md:p-8 max-w-md w-full relative shadow-[0_0_50px_rgba(197,160,89,0.15)]"
              onClick={(e) => e.stopPropagation()} 
            >
              <button 
                onClick={() => setSelectedLocation(null)}
                className="absolute top-3 right-4 text-gray-500 hover:text-white text-xl"
              >
                ✕
              </button>
              
              <span className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-2 block">
                UBICACIÓN CLASIFICADA
              </span>
              
              <h2 className="font-gothic text-3xl text-gold mb-4 leading-none">{selectedLocation.name}</h2>
              <div className="h-0.5 w-12 bg-blood mb-4"></div>
              
              <p className="text-gray-300 leading-relaxed text-sm">
                {selectedLocation.desc}
              </p>
              
              <div className="mt-6 flex justify-end">
                 <span className="text-[10px] text-red-500 animate-pulse font-mono">
                   ● LIVE FEED
                 </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}