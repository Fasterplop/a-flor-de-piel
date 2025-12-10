import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom'; 

export default function LeadMagnet({ pdfUrl, segmentId, tag, btnText }) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [mounted, setMounted] = useState(false); 
  const [honey, setHoney] = useState(''); 

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (honey) { setIsOpen(false); return; }
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
        const response = await fetch('https://api.paulinalopezescritora.com/api/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
                source: 'Landing Page A Flor de Piel',
                honey: honey, 
                segmentId: segmentId || 1, 
                tag: tag || 'landing-general' 
            }),
        });

        if (!response.ok) throw new Error('Error al suscribir');

        setSubmitStatus('success');
        
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

  const modalContent = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 font-sans">
      <div 
        className="absolute inset-0 bg-midnight/90 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      ></div>

      <div className="relative bg-black border border-gold rounded-xl p-8 max-w-md w-full shadow-[0_0_50px_rgba(197,160,89,0.2)] animate-in fade-in zoom-in duration-300">
        
        {/* CORRECCIÓN 1: El botón de cerrar debe ser una X, no el texto del libro */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-white font-bold"
        >✕</button>

        <div className="text-center mb-6">
          <span className="text-blood text-xs font-bold tracking-widest uppercase">ACCESO EXCLUSIVO</span>
          <h3 className="font-gothic text-2xl md:text-3xl text-white leading-loose tracking-widest">
            {/* Opcional: Podrías hacer este título dinámico también si quisieras */}
            DESBLOQUEA EL <br /> CONTENIDO
          </h3>
          <p className="text-gray-400 text-sm mt-2">
            Ingresa tu correo para recibir el material y unirte a la lista.
          </p>
        </div>

        {submitStatus === 'success' ? (
            <div className="text-center py-8 text-green-400 animate-pulse">
                <p className="text-xl mb-2 font-bold font-gothic">¡Enviado con Éxito!</p>
                <p className="text-sm text-gray-300 leading-relaxed">
                    Tu invitación ha sido enviada a tu bandeja de entrada. 🐦‍⬛<br/>
                    <span className="text-xs text-gray-500">(Revisa Spam si no llega en 1 minuto)</span>
                </p>
            </div>
        ) : (
            <form onSubmit={handleSubmit} className="space-y-4">

            <div className="absolute opacity-0 -z-10 w-0 h-0 overflow-hidden">
                <input 
                    type="text" 
                    name="website_url_check" 
                    tabIndex="-1" 
                    value={honey} 
                    onChange={(e) => setHoney(e.target.value)} 
                    autoComplete="off"
                />
            </div>

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
        {/* CORRECCIÓN 2: Aquí es donde va el texto dinámico */}
        {btnText || "Leer Fragmento"}
      </button>

      {isOpen && mounted && createPortal(modalContent, document.body)}
    </>
  );
}