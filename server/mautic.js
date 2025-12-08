const axios = require('axios');

// Configuraciones desde el archivo .env
const MAUTIC_URL = process.env.MAUTIC_URL; // ej: https://marketing.paulinalopezescritora.com
const MAUTIC_USER = process.env.MAUTIC_USER;
const MAUTIC_PW = process.env.MAUTIC_PW;

/**
 * Añade un contacto a Mautic y lo suscribe a un segmento
 * @param {string} email
 * @param {string} name
 * @param {number} segmentId - ID del segmento (1 para Lead Magnet, 2 para Newsletter)
 */
async function addContactToMautic(email, name, segmentId = 1) {
    try {
        if (!MAUTIC_URL || !MAUTIC_USER || !MAUTIC_PW) {
            throw new Error('Faltan variables de entorno para Mautic (MAUTIC_URL, MAUTIC_USER, MAUTIC_PW)');
        }

        // 1. Crear credenciales de acceso (Basic Auth)
        const auth = Buffer.from(`${MAUTIC_USER}:${MAUTIC_PW}`).toString('base64');
        const headers = {
            'Authorization': `Basic ${auth}`,
            'Content-Type': 'application/json'
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

        // Mautic devuelve la info del contacto en data.contact
        const contactId = createRes.data.contact.id;
        
        console.log(`✅ Contacto creado/actualizado. ID: ${contactId}`);

        // 4. Añadir al Segmento (Esto dispara el correo automático si está configurado en Mautic)
        // Usamos el segmentId pasado como argumento
        await axios.post(`${MAUTIC_URL}/api/segments/${segmentId}/contact/add/${contactId}`, {}, { headers });
        
        console.log(`✅ Añadido al Segmento ${segmentId}`);
        return true;

    } catch (error) {
        console.error('❌ Error en Mautic:', error.response?.data || error.message);
        throw error; // Re-lanzamos el error para que index.js lo capture
    }
}

module.exports = { addContactToMautic };
