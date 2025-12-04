import { useRef } from 'react';

// Datos de ejemplo (Puedes cambiarlos cuando tengas los libros reales)
const books = [
  {
    id: 1,
    title: "A Flor de Piel",
    subtitle: "",
    cover: "/images/portada.jpg", // Usamos la misma portada por ahora
    status: "DISPONIBLE",
    link: "https://www.amazon.com/-/es/FLOR-PIEL-Spanish-Paulina-Lopez/dp/B0FNNJKR36/"
  },
  {
    id: 2,
    title: "En proceso",
    subtitle: "Escribiendo",
    cover: "/images/portada2.avif", // Placeholder (usamos la misma con un filtro CSS)
    status: "EN ESCRITURA",
    link: "#"
  },
  {
    id: 3,
    title: "El Último Hayasher",
    subtitle: "Libro 3 - El Desenlace",
    cover: "/images/portada3.png", // Placeholder
    status: "PRÓXIMAMENTE",
    link: "#"
  },
  {
    id: 4,
    title: "Crónicas de Eric",
    subtitle: "Spin-off",
    cover: "/images/portada4.png", // Placeholder
    status: "PLANIFICADO",
    link: "#"
  }
];

export default function BookCarousel() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = 300; // Cuánto se mueve al hacer clic
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative max-w-6xl mx-auto px-6 group">
      
      {/* Botón Izquierda */}
      <button 
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 border border-gold/30 text-gold p-3 rounded-full backdrop-blur-sm hover:bg-gold hover:text-black transition hidden md:block opacity-0 group-hover:opacity-100"
      >
        ←
      </button>

      {/* Contenedor Scroll */}
      <div 
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto pb-12 pt-4 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {books.map((book) => (
          <div key={book.id} className="snap-center shrink-0 w-[280px] md:w-[320px] relative group/card">
            
            {/* Tarjeta del Libro */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 h-full flex flex-col items-center text-center transition duration-500 hover:border-gold/50 hover:bg-white/10 hover:-translate-y-2">
              
              {/* Portada con Efecto */}
              <div className="relative w-40 h-60 mb-6 shadow-2xl rounded">
                <img 
                  src={book.cover} 
                  alt={book.title} 
                  className={`w-full h-full object-cover rounded ${book.id !== 1 ? 'grayscale opacity-60 group-hover/card:grayscale-0 group-hover/card:opacity-100' : ''} transition duration-500`} 
                />
                
                {/* Badge de Estado */}
                <div className="absolute -top-3 -right-3 bg-black border border-gold/50 text-gold text-[10px] font-bold px-3 py-1 rounded-full tracking-widest uppercase shadow-lg">
                  {book.status}
                </div>
              </div>

              {/* Textos */}
              <h3 className="font-gothic text-xl text-white mb-6">{book.title}</h3>
              {/* <p className="text-sm text-gray-400 mb-6">{book.subtitle}</p> */}

              {/* Botón Acción */}
              <a 
                href={book.link} 
                target={book.link === '#' ? '_self' : '_blank'}
                className={`mt-auto w-full py-2 text-sm font-bold tracking-widest border rounded transition duration-300 
                  ${book.status === 'DISPONIBLE' 
                    ? 'bg-blood border-transparent text-white hover:bg-red-700' 
                    : 'border-white/20 text-gray-500 cursor-not-allowed hover:border-white/40'}`}
              >
                {book.status === 'DISPONIBLE' ? 'COMPRAR' : 'ESPERAR'}
              </a>

            </div>
          </div>
        ))}
      </div>

      {/* Botón Derecha */}
      <button 
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 border border-gold/30 text-gold p-3 rounded-full backdrop-blur-sm hover:bg-gold hover:text-black transition hidden md:block opacity-0 group-hover:opacity-100"
      >
        →
      </button>
    </div>
  );
}