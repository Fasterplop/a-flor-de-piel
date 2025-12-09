// server/index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { addContact } = require('./mautic');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración CORS vital para que acepte peticiones de tu frontend
const allowedOrigins = [
  'https://www.paulinalopezescritora.com',
  'https://paulinalopezescritora.com',
  'http://localhost:4321' // Para tus pruebas locales
];

app.use(cors({
    origin: function (origin, callback) {
        // Permitir peticiones sin origen (como curl o postman) o si está en la lista
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            console.log('Bloqueado por CORS:', origin);
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
}));

app.use(express.json());

// Ruta de prueba para ver si el servidor está vivo
app.get('/', (req, res) => {
    res.send('API Server is running 🚀');
});

// Ruta principal de suscripción
app.post('/api/subscribe', async (req, res) => {
    try {
        const { name, email } = req.body;

        // Validación básica
        if (!email) {
            return res.status(400).json({ error: 'El email es requerido' });
        }

        console.log(`Recibida petición de suscripción para: ${email}`);

        // Llamada a la lógica de Mautic
        const result = await addContact({ name, email });

        res.status(200).json({ message: 'Suscripción exitosa', mauticId: result.id });

    } catch (error) {
        console.error('Error en el endpoint /subscribe:', error.message);
        res.status(500).json({ error: 'Error interno del servidor al procesar la suscripción' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// // Importamos tu nuevo conector
// const { addContactToMautic } = require('./mautic');

// const app = express();
// const PORT = 3000;

// app.use(cors({
//     origin: ['https://paulinalopezescritora.com', 'https://www.paulinalopezescritora.com'],
//     methods: ['POST', 'GET'],
//     allowedHeaders: ['Content-Type']
// }));

// app.use(bodyParser.json());

// // Ruta principal (La misma que usa tu botón)
// app.post('/api/subscribe', async (req, res) => {
//     const { name, email } = req.body;
//     console.log(`📝 Solicitud recibida: ${name} (${email})`);

//     try {
//         // En lugar de enviar email, lo mandamos a Mautic
//         // Mautic se encargará de enviar el correo gracias al Segmento
//         await addContactToMautic(email, name);

//         res.status(200).json({ message: 'Suscripción exitosa' });

//     } catch (error) {
//         console.error('Error al procesar:', error);
//         res.status(500).json({ message: 'Error interno del servidor' });
//     }
// });

// app.get('/', (req, res) => res.send('API Mautic Connector Activo 🚀'));

// app.listen(PORT, () => {
//     console.log(`Servidor corriendo en el puerto ${PORT}`);
// });