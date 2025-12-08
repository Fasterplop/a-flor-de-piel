const axios = require('axios');

// Configuraciones desde el archivo .env
const MAUTIC_URL = process.env.MAUTIC_URL; // ej: https://marketing.paulinalopezescritora.com
const MAUTIC_USER = process.env.MAUTIC_USER;
const MAUTIC_PW = process.env.MAUTIC_PW;

// 👇👇👇 AQUÍ VA EL ID QUE ANOTASTE 👇👇👇
const SEGMENT_ID = 1; // Cambia este "1" por el número real de tu segmento
// 👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆

async function addContactToMautic(email, name) {
    try {
        // 1. Crear credenciales de acceso (Basic Auth)
        const auth = Buffer.from(`${MAUTIC_USER}:${MAUTIC_PW}`).toString('base64');
        const headers = {
            'Authorization': `Basic ${auth}`,
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0'
        };

        // 2. Datos del contacto
        const contactData = {
            email: email,
            firstname: name,
            tags: ['lead-magnet-cap1'], // Etiqueta para identificarlo
            overwriteWithBlank: false
        };

        console.log(`📡 Enviando a Mautic: ${email}...`);

        // 3. Crear o Actualizar contacto en Mautic
        const createRes = await axios.post(`${MAUTIC_URL}/api/contacts`, contactData, { headers });
        const contactId = createRes.data.contact.id;
        
        console.log(`✅ Contacto creado/actualizado. ID: ${contactId}`);

        // 4. Añadir al Segmento (Esto dispara el correo automático)
        await axios.post(`${MAUTIC_URL}/api/segments/${SEGMENT_ID}/contact/add/${contactId}`, {}, { headers });
        
        console.log(`✅ Añadido al Segmento ${SEGMENT_ID}`);
        return true;

    } catch (error) {
        console.error('❌ Error en Mautic:', error.response?.data || error.message);
        throw error;
    }
}

module.exports = { addContactToMautic };