// server/mautic.js
const axios = require('axios');

const getAuthHeader = () => {
    const token = Buffer.from(`${process.env.MAUTIC_USER}:${process.env.MAUTIC_PW}`).toString('base64');
    return `Basic ${token}`;
};

async function addContact(data) {
    const mauticUrl = process.env.MAUTIC_URL;
    const headers = {
        'Authorization': getAuthHeader(),
        'Content-Type': 'application/json'
    };

    let contactId = null;

    try {
        // 1. BUSCAR: Verificamos si el contacto ya existe por su email
        console.log(`Buscando contacto existente: ${data.email}`);
        const searchResponse = await axios.get(
            `${mauticUrl}/api/contacts?search=email:${data.email}`,
            { headers }
        );

        const contacts = searchResponse.data.contacts;
        
        // Mautic devuelve un objeto con IDs como claves, o un array vacío si no hay resultados
        if (searchResponse.data.total > 0 && contacts) {
            // Obtenemos el primer ID encontrado
            contactId = Object.keys(contacts)[0];
            console.log(`Contacto encontrado. ID existente: ${contactId}`);
            
            // Opcional: Podríamos actualizar el nombre aquí si quisiéramos con PATCH
        } else {
            // 2. CREAR: Si no existe, lo creamos
            console.log('Contacto no encontrado. Creando uno nuevo...');
            const createResponse = await axios.post(
                `${mauticUrl}/api/contacts/new`,
                {
                    firstname: data.name,
                    email: data.email,
                    tags: ['landing-page-a-flor-de-piel'] // Enviamos tags como array por seguridad
                },
                { headers }
            );
            contactId = createResponse.data.contact.id;
            console.log(`Nuevo contacto creado. ID: ${contactId}`);
        }

        // 3. SEGMENTAR: Agregar al Segmento 1
        if (contactId) {
            console.log(`Agregando contacto ${contactId} al segmento 1...`);
            await axios.post(
                `${mauticUrl}/api/segments/1/contact/${contactId}/add`,
                {},
                { headers }
            );
            console.log('Contacto agregado al segmento exitosamente.');
        }

        return { success: true, id: contactId };

    } catch (error) {
        console.error('Error en Mautic API:');
        if (error.response) {
            console.error('Status:', error.response.status);
            // Imprimimos el error completo para debug
            console.error('Data:', JSON.stringify(error.response.data, null, 2));
        } else {
            console.error('Mensaje:', error.message);
        }
        throw error;
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