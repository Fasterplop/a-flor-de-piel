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

    // Usamos el ID que llega o el 1 por defecto
    const targetSegmentId = data.segmentId || 1;
    const targetTag = data.tag || 'landing-page-web';
    let contactId = null;

    try {
        // 1. BUSCAR
        console.log(`Buscando contacto existente: ${data.email}`);
        const searchResponse = await axios.get(
            `${mauticUrl}/api/contacts?search=email:${data.email}`,
            { headers }
        );

        const contacts = searchResponse.data.contacts;
        
        if (searchResponse.data.total > 0 && contacts) {
            contactId = Object.keys(contacts)[0];
            console.log(`Contacto encontrado. ID existente: ${contactId}`);
        } else {
            // 2. CREAR
            console.log('Contacto no encontrado. Creando uno nuevo...');
            const createResponse = await axios.post(
                `${mauticUrl}/api/contacts/new`,
                {
                    firstname: data.name,
                    email: data.email,
                    tags: [targetTag]
                },
                { headers }
            );
            contactId = createResponse.data.contact.id;
            console.log(`Nuevo contacto creado. ID: ${contactId}`);
        }

        // --- 👇 AQUÍ ESTÁ LA CORRECCIÓN IMPORTANTÍSIMA 👇 ---

        // 3. SEGMENTAR (Con protección anti-errores)
        if (contactId) {
            try {
                console.log(`Intentando agregar al segmento ${targetSegmentId}...`);
                await axios.post(
                    `${mauticUrl}/api/segments/${targetSegmentId}/contact/${contactId}/add`,
                    {},
                    { headers }
                );
                console.log('✅ Contacto segmentado exitosamente.');
                
            } catch (segmentError) {
                // Si falla (ej: el segmento no existe), NO detenemos todo.
                console.error(`⚠️ ALERTA: El contacto se creó, pero falló la segmentación al ID ${targetSegmentId}.`);
                
                // OPCIONAL: INTENTO DE RESCATE -> Mandarlo al segmento 1 (General)
                if (targetSegmentId !== 1) {
                    try {
                        console.log('🔄 Intentando guardar en segmento por defecto (1)...');
                        await axios.post(
                            `${mauticUrl}/api/segments/1/contact/${contactId}/add`,
                            {},
                            { headers }
                        );
                        console.log('✅ Guardado en segmento por defecto.');
                    } catch (e) {
                        console.error('❌ Falló también el segmento de respaldo.');
                    }
                }
            }
        }
        
        // Devolvemos SUCCESS siempre, porque el contacto YA existe en la base de datos
        return { success: true, id: contactId };
        // ------------------------------------------------

    } catch (error) {
        console.error('Error CRÍTICO en Mautic API:');
        if (error.response) {
            console.error('Status:', error.response.status);
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