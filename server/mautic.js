const axios = require('axios');

// Cargamos configuración
const MAUTIC_URL = process.env.MAUTIC_URL;
const MAUTIC_USER = process.env.MAUTIC_USER;
const MAUTIC_PW = process.env.MAUTIC_PW;

// ID del segmento "Nuevos Registros" (Cámbialo por el tuyo real)
const SEGMENTO_NUEVOS_ID = 1; 

async function syncContact(name, email) {
    try {
        // 1. Crear la "llave" para entrar (Basic Auth)
        // Convierte usuario:contraseña a un formato que Mautic entiende (Base64)
        const auth = Buffer.from(`${MAUTIC_USER}:${MAUTIC_PW}`).toString('base64');
        const headers = {
            'Authorization': `Basic ${auth}`,
            'Content-Type': 'application/json'
        };

        console.log(`📡 Conectando con Mautic para: ${email}...`);

        // 2. Crear o Actualizar el Contacto
        // Mautic es inteligente: si el email ya existe, lo actualiza. Si no, lo crea.
        const contactBody = {
            firstname: name,
            email: email,
            tags: ['origen-web'], // Etiqueta útil para filtrar luego
            overwriteWithBlank: false // No borres datos si ya existen
        };

        const response = await axios.post(`${MAUTIC_URL}/api/contacts/new`, contactBody, { headers });
        
        // Obtenemos el ID que Mautic le asignó a este usuario
        const contactId = response.data.contact.id;
        console.log(`✅ Contacto sincronizado en Mautic. ID: ${contactId}`);

        // 3. Meterlo en el Segmento (Esto dispara la campaña/correo)
        await axios.post(`${MAUTIC_URL}/api/segments/${SEGMENTO_NUEVOS_ID}/contact/add/${contactId}`, {}, { headers });
        console.log(`✅ Contacto añadido al segmento ${SEGMENTO_NUEVOS_ID}`);

        return true;

    } catch (error) {
        console.error('❌ Error en Mautic:', error.response?.data || error.message);
        throw new Error('Fallo la sincronización con Mautic');
    }
}

module.exports = { syncContact };