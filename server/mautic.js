// server/mautic.js
const axios = require('axios'); // Asegúrate de tener axios instalado: npm install axios

// Función auxiliar para codificar credenciales en Base64
const getAuthHeader = () => {
    const token = Buffer.from(`${process.env.MAUTIC_USER}:${process.env.MAUTIC_PW}`).toString('base64');
    return `Basic ${token}`;
};

async function addContact(data) {
    const mauticUrl = process.env.MAUTIC_URL; // Asegúrate que en Coolify sea: https://tu-mautic.com (sin /api al final)
    
    // 1. Crear o Actualizar Contacto
    try {
        console.log('Intentando crear contacto en Mautic:', data.email);
        
        const contactResponse = await axios.post(
            `${mauticUrl}/api/contacts/new`, // Endpoint para crear/editar
            {
                firstname: data.name,
                email: data.email,
                tags: 'landing-page-a-flor-de-piel' // Opcional: añade una etiqueta para rastreo
            },
            {
                headers: {
                    'Authorization': getAuthHeader(),
                    'Content-Type': 'application/json'
                }
            }
        );

        const contactId = contactResponse.data.contact.id;
        console.log(`Contacto creado/encontrado. ID: ${contactId}`);

        // 2. Agregar al Segmento 1 (Para disparar la campaña)
        // Solo lo hacemos si tenemos un ID válido
        if (contactId) {
            console.log(`Agregando contacto ${contactId} al segmento 1...`);
            await axios.post(
                `${mauticUrl}/api/segments/1/contact/${contactId}/add`,
                {},
                {
                    headers: {
                        'Authorization': getAuthHeader(),
                        'Content-Type': 'application/json'
                    }
                }
            );
            console.log('Contacto agregado al segmento exitosamente.');
        }

        return { success: true, id: contactId };

    } catch (error) {
        // Mejor manejo de errores para ver qué pasa en los logs de Coolify
        console.error('Error en Mautic API:');
        if (error.response) {
            // El servidor respondió con un código de estado fuera del rango 2xx
            console.error('Status:', error.response.status);
            console.error('Data:', JSON.stringify(error.response.data));
        } else {
            console.error('Error Message:', error.message);
        }
        throw error; // Lanzamos el error para que index.js lo capture
    }
}

module.exports = { addContact };


// const axios = require('axios');

// // Configuraciones desde el archivo .env
// const MAUTIC_URL = process.env.MAUTIC_URL; // ej: https://marketing.paulinalopezescritora.com
// const MAUTIC_USER = process.env.MAUTIC_USER;
// const MAUTIC_PW = process.env.MAUTIC_PW;

// // 👇👇👇 AQUÍ VA EL ID QUE ANOTASTE 👇👇👇
// const SEGMENT_ID = 1; // Cambia este "1" por el número real de tu segmento
// // 👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆

// async function addContactToMautic(email, name) {
//     try {
//         // 1. Crear credenciales de acceso (Basic Auth)
//         const auth = Buffer.from(`${MAUTIC_USER}:${MAUTIC_PW}`).toString('base64');
//         const headers = {
//             'Authorization': `Basic ${auth}`,
//             'Content-Type': 'application/json',
//             'User-Agent': 'Mozilla/5.0'
//         };

//         // 2. Datos del contacto
//         const contactData = {
//             email: email,
//             firstname: name,
//             tags: ['lead-magnet-cap1'], // Etiqueta para identificarlo
//             overwriteWithBlank: false
//         };

//         console.log(`📡 Enviando a Mautic: ${email}...`);

//         // 3. Crear o Actualizar contacto en Mautic
//         const createRes = await axios.post(`${MAUTIC_URL}/api/contacts`, contactData, { headers });
//         const contactId = createRes.data.contact.id;
        
//         console.log(`✅ Contacto creado/actualizado. ID: ${contactId}`);

//         // 4. Añadir al Segmento (Esto dispara el correo automático)
//         await axios.post(`${MAUTIC_URL}/api/segments/${SEGMENT_ID}/contact/add/${contactId}`, {}, { headers });
        
//         console.log(`✅ Añadido al Segmento ${SEGMENT_ID}`);
//         return true;

//     } catch (error) {
//         console.error('❌ Error en Mautic:', error.response?.data || error.message);
//         throw error;
//     }
// }

// module.exports = { addContactToMautic };