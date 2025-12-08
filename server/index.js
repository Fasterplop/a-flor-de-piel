require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// Importamos tu nuevo conector
const { addContactToMautic } = require('./mautic');

const app = express();
const PORT = 3000;

app.use(cors({
    origin: ['https://paulinalopezescritora.com', 'https://www.paulinalopezescritora.com'],
    methods: ['POST', 'GET'],
    allowedHeaders: ['Content-Type']
}));

app.use(bodyParser.json());

// Ruta principal (La misma que usa tu botón)
app.post('/api/subscribe', async (req, res) => {
    const { name, email, source } = req.body;
    console.log(`📝 Solicitud recibida: ${name} (${email}) - Fuente: ${source}`);

    // Determinar el ID del segmento basado en la fuente o usar 1 por defecto
    // Segmento 1: Lead Magnet (Landing Page)
    // Segmento 2: Newsletter
    let segmentId = 1;
    if (source && source.toLowerCase().includes('newsletter')) {
        segmentId = 2;
    }

    try {
        // En lugar de enviar email, lo mandamos a Mautic
        // Mautic se encargará de enviar el correo gracias al Segmento
        await addContactToMautic(email, name, segmentId);

        res.status(200).json({ message: 'Suscripción exitosa' });

    } catch (error) {
        console.error('Error al procesar:', error);

        // Devolvemos un mensaje más detallado si es posible, pero seguro para el cliente
        const errorMessage = error.response?.data?.error?.message || error.message || 'Error interno del servidor';
        res.status(500).json({ message: errorMessage });
    }
});

app.get('/', (req, res) => res.send('API Mautic Connector Activo 🚀'));

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
