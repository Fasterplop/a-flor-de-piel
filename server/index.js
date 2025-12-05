require('dotenv').config(); // Para leer tus contraseñas secretas
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Permite que tu web hable con este servidor
app.use(cors());
app.use(bodyParser.json());

// Configuración de Gmail (Lee las variables del entorno)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER, 
        pass: process.env.GMAIL_PASS
    }
});

app.post('/subscribe', async (req, res) => {
    const { name, email } = req.body;
    console.log(`📝 Nuevo suscriptor: ${name} (${email})`);

    try {
        // 1. Correo de aviso para TI
        await transporter.sendMail({
            from: `"Web Libros" <${process.env.GMAIL_USER}>`,
            to: process.env.GMAIL_USER,
            subject: '🔔 ¡Nuevo Lead Conseguido!',
            text: `¡Felicidades! ${name} (${email}) ha descargado el capítulo 1.`
        });

        // 2. Correo para el LECTOR (con el regalo)
        await transporter.sendMail({
            from: `"Paulina López" <${process.env.GMAIL_USER}>`,
            to: email,
            subject: '📖 Tu regalo: A Flor de Piel (Cap. 1)',
            html: `
                <h2>¡Hola ${name}!</h2>
                <p>Gracias por tu interés en la saga. Aquí tienes el primer capítulo como prometí.</p>
                <p>Espero que disfrutes la lectura.</p>
                <p><em>- Paulina</em></p>
                <hr>
                <br/>
                <a href="https://paulinalopezescritora.com/downloads/primer-capitulo-afp" style="background-color: #A80000; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Descargar PDF Ahora</a>
            `
        });

        res.status(200).json({ message: 'Correos enviados' });

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Error enviando el correo' });
    }
});

app.get('/', (req, res) => res.send('Servidor de correo activo 🚀'));

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});