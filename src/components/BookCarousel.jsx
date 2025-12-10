import { useRef } from 'react';

/**
 * Componente Carrusel de Libros
 * @param {object} props
 * @param {any[]} props.books - Lista de libros a mostrar
 */
export default function BookCarousel({ books = [] }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = 300;
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Si no hay libros, no mostramos nada
  if (!books || books.length === 0) return null;

  // Lógica de Alineación: Si es solo 1 libro, centramos. Si son más, inicio normal (izquierda).
  const alignmentClass = books.length === 1 ? 'justify-center' : 'justify-start';

  return (
    <div className="relative max-w-6xl mx-auto px-6 group">
      
      {/* Botón Izquierda (Solo visible si hay varios libros) */}
      {books.length > 1 && (
        <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 border border-gold/30 text-gold p-3 rounded-full backdrop-blur-sm hover:bg-gold hover:text-black transition hidden md:block opacity-0 group-hover:opacity-100"
        >
            ←
        </button>
      )}

      {/* Contenedor Scroll */}
      <div 
        ref={scrollRef}
        // CAMBIO AQUÍ: pb-12 cambiado a pb-4 para reducir el espacio inferior
        className={`flex gap-8 overflow-x-auto pb-4 pt-4 snap-x snap-mandatory scrollbar-hide ${alignmentClass}`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {books.map((book) => (
          <div key={book.id} className="snap-center shrink-0 w-[280px] md:w-[320px] relative group/card">
            
            {/* Tarjeta del Libro */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 h-full flex flex-col items-center text-center transition duration-500 hover:border-gold/50 hover:bg-white/10 hover:-translate-y-2">
              
              {/* Portada */}
              <a href={`/libros/${book.slug}`} className="relative w-40 h-60 mb-6 shadow-2xl rounded block">
                <img 
                  src={book.cover} 
                  alt={book.title} 
                  className={`w-full h-full object-cover rounded ${book.status !== 'DISPONIBLE' ? 'grayscale opacity-60 group-hover/card:grayscale-0 group-hover/card:opacity-100' : ''} transition duration-500`} 
                />
                
                <div className="absolute -top-3 -right-3 bg-black border border-gold/50 text-gold text-[10px] font-bold px-3 py-1 rounded-full tracking-widest uppercase shadow-lg">
                  {book.status}
                </div>
              </a>

              <h3 className="font-gothic text-xl text-white mb-4">{book.title}</h3>
              
              <a 
                href={`/libros/${book.slug}`} 
                className={`mt-auto w-full py-2 text-sm font-bold tracking-widest border rounded transition duration-300 
                  ${book.status === 'DISPONIBLE' 
                    ? 'bg-blood border-transparent text-white hover:bg-red-700' 
                    : 'border-white/20 text-gray-500 hover:border-white/40 hover:text-white'}`}
              >
                {book.status === 'DISPONIBLE' ? 'VER DETALLES' : 'VER FICHA'}
              </a>

            </div>
          </div>
        ))}
      </div>

      {/* Botón Derecha (Solo visible si hay varios libros) */}
      {books.length > 1 && (
        <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 border border-gold/30 text-gold p-3 rounded-full backdrop-blur-sm hover:bg-gold hover:text-black transition hidden md:block opacity-0 group-hover:opacity-100"
        >
            →
        </button>
      )}
    </div>
  );
}