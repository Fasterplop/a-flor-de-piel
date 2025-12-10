export const books = [
  // --- LIBRO 1: A FLOR DE PIEL (SAGA) ---
  {
    id: 1,
    slug: "a-flor-de-piel",
    title: "A FLOR DE PIEL",
    subtitle: "Libro 1 - El Inicio de Todo",
    cover: "/images/portada.jpg",
    description: "Nina Cole buscaba libertad, pero encontró un portal entre árboles y una luz azulosa que la escupió en una guerra que no comprende. Bienvenido al Castillo Hayashi. ¿Listo para usar tu kunai?",
    amazonLink: "https://www.amazon.com/-/es/FLOR-PIEL-Spanish-Paulina-Lopez/dp/B0FNNJKR36/",
    status: "DISPONIBLE",
    category: "saga", // Categoría importante
    leadMagnet: "/downloads/primer-capitulo-afp.pdf",
    themeColor: "blood",
    isSagaMain: true,

    // ACTIVADORES DE SECCIONES
    hasMap: true,
    hasQuiz: true,
    hasTimeline: true,

    // --- DATOS DEL MAPA ---
    mapImage: "/images/mapa-bosque.jpg",
    mapLocations: [
      { id: 1, name: "Castillo Hayashi", x: 18, y: 20, desc: "La fortaleza principal y base de operaciones.", type: "base" },
      { id: 2, name: "Cementerio", x: 6, y: 10, desc: "Recordatorio silencioso de los caídos.", type: "danger" },
      { id: 3, name: "Campo de Tiro", x: 6, y: 40, desc: "Zona de prácticas con blancos de paja.", type: "training" },
      { id: 11, name: "La Casa del Árbol", x: 48, y: 8, desc: "Puesto de vigilancia elevado.", type: "base" },
      { id: 4, name: "Edificio Desmantelado", x: 50, y: 38, desc: "Ruinas del antiguo centro administrativo.", type: "ruin" },
      { id: 5, name: "Torre Hayashi", x: 54, y: 85, desc: "Torre medieval que vigila el acceso sur.", type: "base" },
      { id: 6, name: "Tronco (El Puente)", x: 65, y: 15, desc: "Único cruce natural sobre el río.", type: "path" },
      { id: 7, name: "División Maria Johnson", x: 85, y: 15, desc: "Complejo fortificado del norte.", type: "enemy" },
      { id: 8, name: "Reformatorio Hayashi", x: 90, y: 45, desc: "Lugar de contención con muros altos.", type: "enemy" },
      { id: 9, name: "Río San Carlos", x: 68, y: 55, desc: "Arteria fluvial de corrientes traicioneras.", type: "nature" },
      { id: 10, name: "Campo de Minas", x: 90, y: 80, desc: "¡PELIGRO! Zona sembrada de explosivos.", type: "danger" }
    ],

    // --- DATOS DE LA LÍNEA DE TIEMPO ---
    timelineEvents: [
      { title: "El Desmantelamiento", desc: "Desmantelamiento del edificio Hayashi.", time: "Inicio" },
      { title: "El Surgimiento", desc: "Surgimiento de 3 establecimientos.", time: "6 meses después" },
      { title: "La Paz Frágil", desc: "Firma y primer convenio de paz.", time: "7 meses después" },
      { title: "Primer Ataque", desc: "Primer ataque al castillo.", time: "1 año después" },
      { title: "Segundo Asedio", desc: "Segundo ataque al castillo.", time: "2 meses después" },
      { title: "La Solicitud", desc: "Solicitud de territorio por parte de Moe.", time: "3 meses después" },
      { title: "Tercer Asalto", desc: "Tercer ataque al castillo.", time: "5 meses después" },
      { title: "La División del reformatorio", desc: "dando inicio a un nuevo establecimiento llamado Maria Johnson.", time: "2 meses después" }
    ],

    // --- DATOS DEL QUIZ ---
    quizQuestions: [
      {
        text: "Estás perdido en el bosque y sientes una presencia oscura. ¿Qué haces?",
        options: [
          { text: "Me escondo y analizo sus movimientos mentalmente.", type: "telepath" },
          { text: "Busco un objeto contundente y me preparo para atacar.", type: "fighter" },
          { text: "Corro buscando una salida, confiando en mi instinto.", type: "survivor" },
        ],
      },
      {
        text: "En el Castillo Hayashi, debes elegir un arma. ¿Cuál tomas?",
        options: [
          { text: "Un látigo o espada. Algo que corte.", type: "fighter" },
          { text: "No necesito armas, mi mente es suficiente.", type: "telepath" },
          { text: "Una daga pequeña y fácil de ocultar.", type: "survivor" },
        ],
      },
      {
        text: "Te enfrentas a un enemigo superior. ¿Cuál es tu estrategia?",
        options: [
          { text: "Busco su debilidad psicológica y lo manipulo.", type: "telepath" },
          { text: "Ataco con todo lo que tengo hasta que uno caiga.", type: "fighter" },
          { text: "Uso el entorno para tenderle una trampa y escapar.", type: "survivor" },
        ],
      },
    ]
  },

  // --- LIBRO 2 (SAGA) ---
  {
    id: 2,
    slug: "a-pulso-lento",
    title: "A Pulso Lento",
    subtitle: "Libro 2 - Comienzan los DAMA'S",
    cover: "/images/portada3.png", 
    description: "Las consecuencias del primer libro se sienten. La calma antes de la tormenta se rompe. ¿Tienes lo que se necesita para sobrevivir en el bosque Sin Fin?",
    amazonLink: "#",
    status: "PRÓXIMAMENTE",
    category: "saga",
    hasMap: false,
    hasQuiz: false,
    hasTimeline: false,
    leadMagnet: null,
    themeColor: "green-600"
  },

  // --- LIBRO 3 (SAGA) ---
  {
    id: 3,
    slug: "a-corazon-abierto",
    title: "A Corazón Abierto",
    subtitle: "Libro 3 - El Desenlace",
    cover: "/images/portada4.png",
    description: "El final épico de la trilogía.",
    amazonLink: "#",
    status: "PLANIFICADO",
    category: "saga",
    hasMap: false,
    hasQuiz: false,
    hasTimeline: false,
    leadMagnet: null,
    themeColor: "orange-600"
  },

  // --- LIBRO INDEPENDIENTE (Ejemplo) ---
  {
    id: 101,
    slug: "el-secreto-del-relojero",
    title: "El Secreto del Relojero",
    subtitle: "Novela de Misterio",
    cover: "/images/portada.jpg", // Usa una portada temporal si no tienes
    description: "Una historia independiente llena de misterio.",
    amazonLink: "#",
    status: "DISPONIBLE",
    category: "independiente",
    hasMap: false,
    hasQuiz: false,
    hasTimeline: false,
    leadMagnet: null,
    themeColor: "blue-500"
  }
];