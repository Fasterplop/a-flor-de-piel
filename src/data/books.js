export const books = [
  // --- SAGA A FLOR DE PIEL ---
  {
    id: 1,
    slug: "a-flor-de-piel",
    title: "Saga A Flor de Piel",
    subtitle: "Libro 1 - El Inicio",
    cover: "/images/portada.jpg",
    description: "Nina Cole buscaba libertad, pero encontró un portal entre árboles...",
    amazonLink: "https://www.amazon.com/-/es/FLOR-PIEL-Spanish-Paulina-Lopez/dp/B0FNNJKR36/",
    status: "DISPONIBLE",
    category: "saga", // <--- NUEVA ETIQUETA
    hasMap: true,
    hasQuiz: true,
    hasTimeline: true,
    leadMagnet: "/downloads/primer-capitulo.pdf",
    themeColor: "blood",
    isSagaMain: true
  },
  {
    id: 2,
    slug: "a-pulso-lento",
    title: "A Pulso Lento",
    subtitle: "Libro 2 - La Resistencia",
    cover: "/images/portada3.png", 
    description: "Las consecuencias del primer libro se sienten...",
    amazonLink: "#",
    status: "PRÓXIMAMENTE",
    category: "saga", // <--- NUEVA ETIQUETA
    hasMap: true,
    hasQuiz: true,
    hasTimeline: false,
    leadMagnet: null,
    themeColor: "green-600"
  },
  {
    id: 3,
    slug: "a-corazon-abierto",
    title: "A Corazón Abierto",
    subtitle: "Libro 3 - El Desenlace",
    cover: "/images/portada4.png",
    description: "El final épico de la trilogía...",
    amazonLink: "#",
    status: "PLANIFICADO",
    category: "saga", // <--- NUEVA ETIQUETA
    hasMap: false,
    hasQuiz: true,
    hasTimeline: false,
    leadMagnet: null,
    themeColor: "orange-600"
  },

  // --- OTRAS OBRAS (LIBROS INDEPENDIENTES) ---
  {
    id: 101, // Usamos IDs diferentes para no confundir
    slug: "el-secreto-del-relojero", // Ejemplo de libro nuevo
    title: "El Secreto del Relojero",
    subtitle: "Novela de Misterio",
    cover: "/images/portada_relojero.jpg", // Asegúrate de subir esta imagen
    description: "Una historia de misterio en el Londres victoriano que no tiene nada que ver con el Castillo Hayashi.",
    amazonLink: "#",
    status: "DISPONIBLE",
    category: "independiente", // <--- ESTO LO SEPARA
    hasMap: false,
    hasQuiz: false, // Quizás este no tiene quiz
    hasTimeline: false,
    leadMagnet: null,
    themeColor: "blue-500"
  }
];