import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom'; // 1. Importamos el "Teletransportador"

export default function LeadMagnet({ pdfUrl }) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [mounted, setMounted] = useState(false); // 2. Estado para saber si la web cargó

  // 3. Activamos el portal solo cuando la web ya cargó en el cliente
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
        // Asegúrate que esta URL coincida con la de tu servidor (con o sin /api)
        const response = await fetch('https://api.paulinalopezescritora.com/api/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
                source: 'Landing Page A Flor de Piel'
            }),
        });

        if (!response.ok) throw new Error('Error al suscribir');

        setSubmitStatus('success');
        
        // CERRAR EL MODAL DESPUÉS DE 10 SEGUNDOS
        setTimeout(() => {
            setIsOpen(false);
            setSubmitStatus(null);
            setName('');
            setEmail('');
        }, 10000);

    } catch (error) {
        console.error(error);
        setSubmitStatus('error');
    } finally {
        setIsSubmitting(false);
    }
  };

  // 4. Guardamos todo el diseño del Modal en una variable
  const modalContent = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 font-sans">
      <div 
        className="absolute inset-0 bg-midnight/90 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      ></div>

      <div className="relative bg-black border border-gold rounded-xl p-8 max-w-md w-full shadow-[0_0_50px_rgba(197,160,89,0.2)] animate-in fade-in zoom-in duration-300">
        
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-white"
        >✕</button>

        <div className="text-center mb-6">
          <span className="text-blood text-xs font-bold tracking-widest uppercase">ACCESO EXCLUSIVO</span>
          <h3 className="font-gothic text-2xl md:text-3xl text-white leading-loose tracking-widest">
            DESBLOQUEA EL <br /> PRIMER CAPÍTULO
          </h3>
          <p className="text-gray-400 text-sm mt-2">
            Ingresa tu correo para recibir el PDF y unirte a la lista de reclutas.
          </p>
        </div>

        {submitStatus === 'success' ? (
            <div className="text-center py-8 text-green-400 animate-pulse">
                <p className="text-xl mb-2 font-bold font-gothic">¡Enviado con Éxito!</p>
                <p className="text-sm text-gray-300 leading-relaxed">
                    Tu invitación al castillo ha sido enviada tu bandeja de entrada. 🐦‍⬛<br/>
                    <span className="text-xs text-gray-500">(Revisa Spam si no llega en 1 minuto)</span>
                </p>
            </div>
        ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <input 
                type="text" 
                placeholder="Tu Nombre" 
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
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
            
            {submitStatus === 'error' && (
                <p className="text-red-500 text-xs text-center">Hubo un error. Inténtalo de nuevo.</p>
            )}

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
                "RECIBIR EN MI CORREO"
                )}
            </button>
            </form>
        )}

        <p className="text-center text-xs text-gray-600 mt-4">
          Tu correo está protegido por el sello del castillo.
        </p>
      </div>
    </div>
  );

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="w-full md:w-auto text-center px-8 py-4 border border-gold/50 text-gold font-bold tracking-widest rounded-full hover:bg-gold/10 hover:border-gold transition-all duration-300 uppercase"
      >
        Leer Capítulo 1
      </button>

      {/* 5. Aquí ocurre la magia: Si está abierto, lo teletransportamos al body */}
      {isOpen && mounted && createPortal(modalContent, document.body)}
    </>
  );
}