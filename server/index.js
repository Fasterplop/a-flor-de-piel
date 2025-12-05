require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Permite que tu web (y solo tu web) hable con este servidor
app.use(cors());
app.use(bodyParser.json());

// CONFIGURACIÓN DE GMAIL (¡Cámbialo!)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        // En lugar del texto, usamos process.env
        user: process.env.GMAIL_USER, 
        pass: process.env.GMAIL_PASS
    }
});

app.post('/subscribe', async (req, res) => {
    const { name, email } = req.body;
    console.log(`📝 Nuevo suscriptor: ${name} (${email})`);

    try {
        // 1. Correo para ti (Aviso)
        await transporter.sendMail({
            from: 'Tu Web de Libros <tucorreo@gmail.com>',
            to: 'tucorreo@gmail.com', // Te llega a ti misma
            subject: '🔔 ¡Nuevo Lead Conseguido!',
            text: `¡Felicidades! ${name} (${email}) se acaba de descargar el primer capítulo.`
        });

        // 2. (Opcional) Correo para el lector con el PDF adjunto o saludo
        await transporter.sendMail({
            from: 'Paulina López <tucorreo@gmail.com>',
            to: email,
            subject: '📖 Aquí tienes tu regalo: A Flor de Piel (Cap. 1)',
            text: `Hola ${name},\n\nGracias por unirte al Castillo Hayashi. Adjunto encontrarás el primer capítulo.\n\nDisfruta la lectura,\nPaulina.`
            // Si quieres adjuntar el PDF directamente en el email, avísame para darte el código extra.
        });

        res.status(200).json({ message: 'Correo enviado con éxito' });

    } catch (error) {
        console.error('Error enviando correo:', error);
        res.status(500).json({ message: 'Falló el envío del correo' });
    }
});

app.get('/', (req, res) => {
    res.send('El servidor de correo está funcionando 🚀');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});