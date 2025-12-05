export const books = [
  {
    id: 1,
    slug: "a-flor-de-piel",
    title: "Saga A Flor de Piel",
    subtitle: "Libro 1 - El Inicio de Todo",
    cover: "/images/portada.jpg",
    description: "Nina Cole buscaba libertad, pero encontró un portal entre árboles...",
    amazonLink: "https://www.amazon.com/...",
    status: "DISPONIBLE",
    leadMagnet: "/downloads/primer-capitulo.pdf",
    themeColor: "blood",
    
    // --- CONFIGURACIÓN DE SECCIONES ---
    hasMap: true,
    hasQuiz: true,
    hasTimeline: true,

    // --- DATA ESPECÍFICA DE ESTE LIBRO ---
    mapImage: "/images/mapa-bosque.jpg", // Imagen de fondo del mapa
    mapLocations: [
      {
    id: 1,
    name: "Castillo Hayashi",
    x: 18,  // Izquierda superior (El gran castillo)
    y: 20, 
    desc: "La fortaleza principal y base de operaciones. Aquí entrenan los reclutas bajo la supervisión de Eric Hudson.",
    type: "base"
  },
  {
    id: 2,
    name: "Cementerio",
    x: 6,   // Esquina superior izquierda (Las tumbas)
    y: 10,
    desc: "Un recordatorio silencioso de los que cayeron en los primeros asedios. Pocos se atreven a entrar de noche.",
    type: "danger"
  },
  {
    id: 3,
    name: "Campo de Tiro",
    x: 6,   // Izquierda media (Las dianas de paja)
    y: 40,
    desc: "Zona de prácticas con blancos de paja. El lugar favorito de Megan para descargar su ira.",
    type: "training"
  },
  {
    id: 11, // NUEVO
    name: "La Casa del Árbol",
    x: 48,  // Centro Norte (La estructura de madera en el árbol)
    y: 8,
    desc: "Un puesto de vigilancia elevado oculto en el follaje. Ideal para observar sin ser visto.",
    type: "base"
  },
  {
    id: 4,
    name: "Edificio Desmantelado",
    x: 50,  // Centro exacto (El edificio verde en ruinas)
    y: 38,
    desc: "Las ruinas del antiguo centro administrativo, ahora cubierto de vegetación en la isla central.",
    type: "ruin"
  },
  {
    id: 5,
    name: "Torre Hayashi",
    x: 54,  // Centro Abajo (La torre redonda solitaria)
    y: 85,
    desc: "Una torre medieval solitaria que vigila el acceso sur. Su arquitectura contrasta con la tecnología militar.",
    type: "base"
  },
  {
    id: 6,
    name: "Tronco (El Puente)",
    x: 65,  // Arriba derecha (El tronco gigante caído sobre el río)
    y: 15,
    desc: "Un árbol gigantesco caído que sirve como único cruce natural sobre la parte alta del río.",
    type: "path"
  },
  {
    id: 7,
    name: "División Maria Johnson",
    x: 85,  // Arriba derecha (El edificio grande complejo)
    y: 15,
    desc: "El complejo fortificado del norte. Sede de la facción rival que disputa el control del territorio.",
    type: "enemy"
  },
  {
    id: 8,
    name: "Reformatorio Hayashi",
    x: 90,  // Derecha media (El edificio amurallado cuadrado)
    y: 45,
    desc: "Ubicado al sur de la División. Un lugar de contención con muros altos y seguridad estricta.",
    type: "enemy"
  },
  {
    id: 9,
    name: "Río San Carlos",
    x: 68,  // Cruza por la derecha (Punto en el agua)
    y: 55,
    desc: "La arteria fluvial que divide el territorio. Sus corrientes son traicioneras y el agua es gélida.",
    type: "nature"
  },
  {
    id: 10,
    name: "Campo de Minas",
    x: 90,  // Abajo derecha (Zona boscosa oscura)
    y: 80,
    desc: "¡PELIGRO! Zona boscosa al sureste sembrada de explosivos ocultos. No hay señalización visible.",
    type: "danger"
  },
      // ... (Agrega aquí el resto de puntos del Libro 1)
    ],
    timelineEvents: [
       {
    title: "El Desmantelamiento",
    desc: "Desmantelamiento del edificio Hayashi.",
    time: "Inicio"
  },
  {
    title: "El Surgimiento",
    desc: "Surgimiento de 3 establecimientos.",
    time: "6 meses después"
  },
  {
    title: "La Paz Frágil",
    desc: "Firma y primer convenio de paz.",
    time: "7 meses después"
  },
  {
    title: "Primer Ataque",
    desc: "Primer ataque al castillo.",
    time: "1 año después"
  },
  {
    title: "Segundo Asedio",
    desc: "Segundo ataque al castillo.",
    time: "2 meses después"
  },
  {
    title: "La Solicitud",
    desc: "Solicitud de territorio por parte de Moe.",
    time: "3 meses después"
  },
  {
    title: "Tercer Asalto",
    desc: "Tercer ataque al castillo.",
    time: "5 meses después"
  },
  {
    title: "La División",
    desc: "División del reformatorio.",
    time: "2 meses después"
  }
      
      // ... (Resto de eventos del Libro 1)
    ],
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
      // ... (Resto de preguntas del Libro 1)
    ]
  },
  {
    id: 2,
    slug: "a-pulso-lento",
    title: "A Pulso Lento",
    subtitle: "Libro 2 - La Resistencia",
    cover: "/images/portada3.png", 
    description: "La guerra se intensifica...",
    amazonLink: "#",
    status: "PRÓXIMAMENTE",
    themeColor: "green-600",

    hasMap: true,     // Digamos que este tiene un mapa diferente
    hasQuiz: true,    // Y un quiz nuevo
    hasTimeline: false, 

    // DATA DIFERENTE PARA EL LIBRO 2
    mapImage: "/images/mapa-bosque.jpg", // Podría ser otro mapa
    mapLocations: [
      { id: 1, name: "Nuevo Refugio", x: 50, y: 50, desc: "La base secreta de la resistencia.", type: "base" },
      { id: 2, name: "Zona Quemada", x: 80, y: 80, desc: "Donde ocurrió la batalla final.", type: "danger" }
    ],
    quizQuestions: [
      {
        text: "¿Cuál es tu mayor miedo en la batalla?",
        options: [
          { text: "Perder el control de mi mente", type: "telepath" },
          { text: "Perder a mis compañeros", type: "fighter" },
          { text: "Quedarme sin recursos", type: "survivor" },
        ],
      }
    ],
    timelineEvents: [] // Vacío porque hasTimeline es false
  }
  // ... Libro 3, etc.
];