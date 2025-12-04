import { useState } from 'react';

export default function LeadMagnet({ pdfUrl }) {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // AQUÍ CONECTARÍAS CON TU SERVICIO DE EMAIL (MailerLite, ConvertKit, etc.)
    // Por ahora, simulamos una espera de 1.5 segundos y luego damos el PDF
    setTimeout(() => {
      setIsSubmitting(false);
      setIsOpen(false);
      // Abrir el PDF en nueva pestaña
      window.open(pdfUrl, '_blank');
    }, 1500);
  };

  return (
    <>
      {/* 1. EL BOTÓN (Lo que se ve en la página) */}
      <button 
        onClick={() => setIsOpen(true)}
        className="w-full md:w-auto text-center px-8 py-4 border border-gold/50 text-gold font-bold tracking-widest rounded-full hover:bg-gold/10 hover:border-gold transition-all duration-300 uppercase"
      >
        Leer Capítulo 1
      </button>

      {/* 2. EL MODAL (Oculto por defecto) */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Fondo oscuro borroso */}
          <div 
            className="absolute inset-0 bg-midnight/90 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Caja del Modal */}
          <div className="relative bg-black border border-gold rounded-xl p-8 max-w-md w-full shadow-[0_0_50px_rgba(197,160,89,0.2)] animate-in fade-in zoom-in duration-300">
            
            {/* Botón Cerrar */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-white"
            >
              ✕
            </button>

            <div className="text-center mb-6">
              <span className="text-blood text-xs font-bold tracking-widest uppercase">ACCESO EXCLUSIVO</span>
              <h3 className="font-gothic text-2xl md:text-3xl text-white leading-loose ">
                DESBLOQUEA EL <br /> PRIMER CAPÍTULO
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                Ingresa tu correo para recibir el PDF y unirte a la lista de reclutas del Castillo Hayashi.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Tu Nombre" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded p-3 text-white placeholder-gray-500 focus:border-gold focus:outline-none transition"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Tu Correo Electrónico" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded p-3 text-white placeholder-gray-500 focus:border-gold focus:outline-none transition"
                />
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blood to-red-900 text-white font-bold py-3 rounded hover:brightness-110 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    ENVIANDO...
                  </>
                ) : (
                  "OBTENER CAPÍTULO GRATIS"
                )}
              </button>
            </form>

            <p className="text-center text-xs text-gray-600 mt-4">
              Odiamos el spam tanto como a los demonios del bosque. Tu correo está seguro.
            </p>
          </div>
        </div>
      )}
    </>
  );
}