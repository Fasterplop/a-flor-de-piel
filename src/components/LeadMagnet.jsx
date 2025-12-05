import { useState } from 'react';

export default function LeadMagnet({ pdfUrl }) {
  const [isOpen, setIsOpen] = useState(false);
  
  // 1. AÑADIMOS EL ESTADO PARA EL NOMBRE
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // 2. AQUÍ ENVIAMOS LOS DATOS A TU SERVICIO DE EMAIL
    // Ejemplo genérico (Debes cambiar la URL por la de tu proveedor)
    
    try {
        // --- CONFIGURACIÓN PARA TU PROVEEDOR ---
        // Si usas MailerLite, ConvertKit, ActiveCampaign, etc., te darán una URL o "Webhook"
        // También puedes usar servicios como Formspree.io si no tienes backend.
        
        const response = await fetch('https://api.paulinalopezescritora.com/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': 'Bearer TU_API_KEY' // Algunos lo requieren
            },
            body: JSON.stringify({
                name: name,
                email: email,
                source: 'Landing Page A Flor de Piel' // Etiqueta útil
            }),
        });

        // NOTA: Como ahora no tienes la URL real, simularemos que funcionó para que descargue el 
        // Cuando tengas la URL, descomenta la validación de abajo:
        
         if (!response.ok) throw new Error('Error al suscribir');

        setSubmitStatus('success');
        
        // 3. DESCARGAR PDF Y CERRAR
        setTimeout(() => {
            setIsOpen(false);
            setSubmitStatus(null);
            setName('');
            setEmail('');
            window.open(pdfUrl, '_blank');
        }, 1500);

    } catch (error) {
        console.error(error);
        setSubmitStatus('error');
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* BOTÓN (Visible) */}
      <button 
        onClick={() => setIsOpen(true)}
        className="w-full md:w-auto text-center px-8 py-4 border border-gold/50 text-gold font-bold tracking-widest rounded-full hover:bg-gold/10 hover:border-gold transition-all duration-300 uppercase"
      >
        Leer Capítulo 1
      </button>

      {/* MODAL (Oculto) */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-midnight/90 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          ></div>

          <div className="relative bg-black border border-gold rounded-xl p-8 max-w-md w-full shadow-[0_0_50px_rgba(197,160,89,0.2)] animate-in fade-in zoom-in duration-300">
            
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-white"
            >
              ✕
            </button>

            <div className="text-center mb-6">
              <span className="text-blood text-xs font-bold tracking-widest uppercase">ACCESO EXCLUSIVO</span>
              <h3 className="font-gothic text-2xl md:text-3xl text-white leading-loose tracking-widest">
                DESBLOQUEA EL <br /> PRIMER CAPÍTULO
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                Ingresa tu correo para recibir el PDF y unirte a la lista de reclutas del Castillo Hayashi.
              </p>
            </div>

            {submitStatus === 'success' ? (
                <div className="text-center py-8 text-green-400">
                    <p className="text-xl mb-2">¡Suscripción Exitosa!</p>
                    <p className="text-sm text-gray-400">Tu descarga comenzará en breve...</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <input 
                    type="text" 
                    placeholder="Tu Nombre" 
                    required
                    value={name} // 4. VINCULAMOS EL VALOR
                    onChange={(e) => setName(e.target.value)} // 5. CAPTURAMOS EL CAMBIO
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
                    "OBTENER CAPÍTULO GRATIS"
                    )}
                </button>
                </form>
            )}

            <p className="text-center text-xs text-gray-600 mt-4">
              Odiamos el spam tanto como a los demonios del bosque. Tu correo está seguro.
            </p>
          </div>
        </div>
      )}
    </>
  );
}