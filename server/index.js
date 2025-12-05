require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// Importamos nuestra nueva función
const { syncContact } = require('./mautic'); 

const app = express();
const PORT = 3000;

app.use(cors()); // Configura tus dominios permitidos como vimos antes
app.use(bodyParser.json());

// NOTA: Ya no necesitamos 'nodemailer' ni 'transporter' aquí, porque Mautic envía el correo.

app.post('/api/subscribe', async (req, res) => {
    const { name, email } = req.body;
    
    if (!email) {
        return res.status(400).json({ message: 'Email requerido' });
    }

    try {
        // En lugar de enviar el mail nosotros, le decimos a Mautic que se encargue
        await syncContact(name, email);

        // Respondemos al frontend que todo salió bien
        res.status(200).json({ message: 'Suscripción exitosa' });

    } catch (error) {
        console.error('Error procesando suscripción:', error);
        // Aunque falle Mautic, quizás no quieras asustar al usuario, 
        // pero por ahora devolvemos error 500 para que lo sepas.
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor backend corriendo en puerto ${PORT}`);
});