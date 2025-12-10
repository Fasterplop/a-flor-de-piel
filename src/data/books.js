import portada1 from '../assets/images/portada.jpg';
import portada2 from '../assets/images/portada2.png';
import portada3 from '../assets/images/portada3.png';
import portada4 from '../assets/images/portada4.png';
import mapaBosque from '../assets/images/mapa-bosque.jpg';

export const books = [
  // --- LIBRO 1: A FLOR DE PIEL (SAGA) ---
  {
    id: 1,
    slug: "a-flor-de-piel",
    title: "A Flor de Piel",
    subtitle: "Libro 1 - El Inicio de Todo",
    cover: portada1,
    description: "Nina Cole buscaba libertad, pero encontró un portal entre árboles y una luz azulosa que la escupió en una guerra que no comprende. Bienvenido al Castillo Hayashi. ¿Listo para usar tu kunai?",
    amazonLink: "https://www.amazon.com/-/es/FLOR-PIEL-Spanish-Paulina-Lopez/dp/B0FNNJKR36/",
    status: "DISPONIBLE",
    category: "saga", // Categoría importante
    leadMagnet: "/downloads/primer-capitulo-afp.pdf",
    themeColor: "blood",
    isSagaMain: true,
    mauticSegmentId: 1,
    mauticTag: "origen-a-flor-de-piel",
    leadMagnetText: "Leer Capítulo 1 AFP",
    quizTitle: "Prueba de Aptitud",
    quizDescription: "¿Tienes lo necesario para sobrevivir en este mundo? Descubre tu rol en el Castillo Hayashi.",
    quizCtaText: "DESCUBRIR LA HISTORIA COMPLETA", 

    // ACTIVADORES DE SECCIONES
    hasMap: true,
    hasQuiz: true,
    hasTimeline: true,

    // --- DATOS DEL MAPA ---
    mapImage: mapaBosque,
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
      { title: "La División del reformatorio", desc: "Dando inicio a un nuevo establecimiento llamado Maria Johnson", time: "2 meses después" }
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
    subtitle: "Libro 2 - Comienzan los DAMA´S",
    cover: portada3, 
    description: "Las consecuencias del primer libro se sienten. La calma antes de la tormenta se rompe. ¿Tienes lo que se necesita para sobrevivir en el bosque Sin Fin?.",
    amazonLink: "#",
    status: "PRÓXIMAMENTE",
    category: "saga",
    hasMap: false,
    hasQuiz: false,
    hasTimeline: false,
    leadMagnet: null,
    themeColor: "green-600",
    mauticSegmentId: 998,
    mauticTag: "origen-a-pulso-lento",
    leadMagnetText: "Leer Capítulo 1 APL",
    quizTitle: "",
    quizDescription: "",
    quizCtaText: "",
    quizQuestions: [ /* ... tus preguntas ... */ ],
  },

  // --- LIBRO 3 (SAGA) ---
  {
    id: 3,
    slug: "a-corazon-abierto",
    title: "A Corazón Abierto",
    subtitle: "Libro 3 - Nuevos personajes. Mismo infierno.",
    cover: portada4,
    description: "Nina, Dario, Akami y Eric tomarán caminos diferentes, explorando la torre, el reformatorio y algo más al norte.",
    amazonLink: "#",
    status: "PLANIFICADO",
    category: "saga",
    hasMap: false,
    hasQuiz: false,
    hasTimeline: false,
    leadMagnet: null,
    themeColor: "orange-600",
    mauticSegmentId: 999,
    mauticTag: "origen-a-corazon-abierto",
    leadMagnetText: "Leer Capítulo 1 ACB",
    quizTitle: "",
    quizDescription: "",
    quizCtaText: "",
    quizQuestions: [ /* ... tus preguntas ... */ ],
  },

  // --- LIBRO INDEPENDIENTE (Ejemplo) ---
  {
    id: 101,
    slug: "primero-yo-segundo-yo-tercero-yo",
    title: "Primero Yo, Segundo Yo, Tercero Yo",
    subtitle: "Desarrollo personal",
    cover: portada2,
    description: "Construye la Mujer de Alto Valor de tus sueños.",
    amazonLink: "#", // Recuerda poner el link real si lo tienes
    status: "DISPONIBLE",
    category: "independiente",
    
    // CAMBIOS AQUÍ: Activamos el quiz
    hasMap: false,
    hasQuiz: true, 
    hasTimeline: false,
    
    leadMagnet: "/downloads/primer-capitulo-afp.pdf",
    themeColor: "blue-500",
    mauticSegmentId: 3,
    mauticTag: "origen-primero-yo-segundo-yo-tercero-yo",
    leadMagnetText: "Obtén un regalo",
    quizTitle: "NIVEL DE MAGNETISMO DE ALTO VALOR",
    quizDescription: "¿Estás lista para cambiar tu vida?",
    quizCtaText: "Adquirir en Amazon",

    // NUEVO: Preguntas del Test de Magnetismo
    quizQuestions: [
      {
        text: "Pregunta 1: Comunicación y Asertividad. Cuando alguien te hace sentir incómoda, tú...",
        options: [
          { text: "Te quedas callada para evitar el conflicto y luego te lamentas.", points: 1 },
          { text: "Expresas tu molestia de forma pasiva-agresiva, esperando que la otra persona adivine.", points: 2 },
          { text: "Esperas a calmarte, y luego comunicas tu límite de forma clara y respetuosa.", points: 3 },
          { text: "Detienes inmediatamente la interacción con una frase directa y firme.", points: 4 },
        ],
      },
      {
        text: "Pregunta 2: Inversión en Ti Misma. Respecto a invertir dinero y tiempo en tu desarrollo personal...",
        options: [
          { text: "Rara vez lo haces, priorizando siempre las necesidades de los demás.", points: 1 },
          { text: "Lo haces solo cuando te lo regalan o es muy económico.", points: 2 },
          { text: "Inviertes de forma estratégica en áreas clave que te impulsan profesional o personalmente.", points: 3 },
          { text: "Tienes un presupuesto fijo para tu crecimiento y lo consideras una prioridad no negociable.", points: 4 },
        ],
      },
      {
        text: "Pregunta 3: Validación Externa. Para tomar una decisión importante, tú...",
        options: [
          { text: "Preguntas a todos tus amigos y familiares, basando tu decisión en lo que te aconsejan.", points: 1 },
          { text: "Buscas la aprobación de una persona clave (pareja, jefe, etc.) antes de actuar.", points: 2 },
          { text: "Consultas a otros para obtener perspectiva, pero la decisión final es siempre tuya.", points: 3 },
          { text: "Confías plenamente en tu intuición y criterio interno, actuando con convicción.", points: 4 },
        ],
      },
      {
        text: "Pregunta 4: Manejo del Error. Cuando cometes un error grande, tu reacción inmediata es...",
        options: [
          { text: "Castigarte mentalmente, cayendo en la culpa y la vergüenza por días.", points: 1 },
          { text: "Culpar a factores externos o a otras personas para proteger tu ego.", points: 2 },
          { text: "Reconocerlo, disculparte si es necesario, y analizar qué lección aprendiste.", points: 3 },
          { text: "Celebrar el error como una valiosa pieza de información que te acerca al éxito.", points: 4 },
        ],
      },
      {
        text: "Pregunta 5: Tiempo a Solas. ¿Con qué frecuencia proteges y utilizas tu tiempo a solas?",
        options: [
          { text: "Casi nunca. Me siento incómoda sola y prefiero estar siempre acompañada.", points: 1 },
          { text: "Ocasionalmente, pero solo si no tengo planes con otras personas.", points: 2 },
          { text: "Regularmente, lo uso para recargar energía, leer o hacer cosas que disfruto.", points: 3 },
          { text: "Es una cita obligatoria en mi agenda. Es mi momento sagrado de planeación y descanso.", points: 4 },
        ],
      },
    ]
  }
];