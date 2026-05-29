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
    description: "Las pruebas internas han comenzado. Entre el sudor del ring, escaleras a punto de colapsar y un pacto sellado con vendas, los secretos amenazan con destruir al grupo antes que los propios desafíos. ¿De qué lado estás cuando la lealtad se pone a prueba?",
    amazonLink: "#",
    status: "DISPONIBLE",
    category: "saga",
    
    // ACTIVADORES DE SECCIONES
    hasMap: false,
    hasQuiz: true,
    hasTimeline: false,
    
    leadMagnet: null,
    themeColor: "green-600",
    mauticSegmentId: 998,
    mauticTag: "origen-a-pulso-lento",
    leadMagnetText: "Leer Capítulo 1 APL",
    
    quizTitle: "Test de Supervivencia: Las Pruebas Internas",
    quizDescription: "Ante la presión y los desafíos inminentes, ¿qué rol asumirás para proteger a los tuyos?",
    quizCtaText: "DESCUBRIR TU DESTINO",
    
    // --- DATOS DEL MAPA ---
    mapImage: mapaBosque,
    mapLocations: [
      { id: 1, name: "Ring de Boxeo", x: 30, y: 40, desc: "Lugar oscuro y húmedo. Escenario de secretos y promesas.", type: "training" },
      { id: 2, name: "Comedor Secundario", x: 45, y: 35, desc: "Punto de reunión antes de los desafíos.", type: "base" },
      { id: 3, name: "Escalera Corroída", x: 32, y: 45, desc: "Una trampa mortal disfrazada de atajo hacia la superficie.", type: "danger" }
    ],

    // --- DATOS DE LA LÍNEA DE TIEMPO ---
    timelineEvents: [
      { title: "El Entrenamiendo", desc: "Prácticas exhaustivas en el ring bajo el aire reciclado.", time: "Días previos" },
      { title: "El Descubrimiento", desc: "Eric descubre la verdad sobre las lesiones en el ring.", time: "Horas antes" },
      { title: "El Pacto", desc: "Las vendas se convierten en la promesa de no caer solos.", time: "Momentos antes" },
      { title: "Las Pruebas Internas", desc: "Llamado a los jóvenes de 16 a 18 años. Inicio oficial de los desafíos.", time: "Presente" }
    ],

    // --- DATOS DEL QUIZ ---
    quizQuestions: [
      {
        text: "Tu amigo está herido justo antes de una prueba crucial y alguien amenaza con delatarlos. ¿Qué haces?",
        options: [
          { text: "Ideo un plan urgente para manipular la situación a nuestro favor.", type: "telepath" },
          { text: "Asumo toda la responsabilidad. No dejaré que caiga.", type: "fighter" },
          { text: "Me mantengo en silencio y trato de que el problema no se haga más grande.", type: "survivor" },
        ],
      },
      {
        text: "Te enfrentas a un camino corto pero peligroso (como una escalera a punto de romperse).",
        options: [
          { text: "Calculo el riesgo y me aferro a las zonas seguras al bajar.", type: "telepath" },
          { text: "Lo tomo sin dudarlo, el riesgo vale la pena por ganar tiempo.", type: "fighter" },
          { text: "El riesgo es innecesario. Busco una ruta alternativa más segura.", type: "survivor" },
        ],
      },
      {
        text: "¿Qué significa el compañerismo para ti en un ambiente hostil?",
        options: [
          { text: "Ser el estratega que evita que los demás cometan errores impulsivos.", type: "telepath" },
          { text: "Caer juntos si es necesario. Nadie se queda atrás.", type: "fighter" },
          { text: "Sobrevivir. Si alguien se equivoca gravemente, no puedo hundirme con él.", type: "survivor" },
        ],
      },
    ]
  },

  // --- LIBRO 3 (SAGA) ---
  {
    id: 3,
    slug: "a-corazon-abierto",
    title: "A Corazón Abierto",
    subtitle: "Libro 3 - Nuevos personajes. Mismo infierno.",
    cover: portada4,
    description: "Con Nina atrapada en la Tierra de Nadie y Ellen dispuesta a convertirse en fugitiva para enfrentar lo imposible, los cimientos del castillo se desmoronan. Los Hayashers del oeste son como tulipanes, de vida efímera.",
    amazonLink: "#",
    status: "DISPONIBLE",
    category: "saga",
    
    // ACTIVADORES DE SECCIONES
    hasMap: false,
    hasQuiz: true,
    hasTimeline: false,
    
    leadMagnet: null,
    themeColor: "orange-600",
    mauticSegmentId: 999,
    mauticTag: "origen-a-corazon-abierto",
    leadMagnetText: "Leer Capítulo 1 ACB",
    
    quizTitle: "Test del Limbo: Tierra de Nadie",
    quizDescription: "Entre la vida y la muerte, y alianzas que se rompen, las decisiones más difíciles aguardan. ¿Qué camino elegirás?",
    quizCtaText: "ENFRENTAR LA VERDAD",

    // --- DATOS DEL MAPA ---
    mapImage: mapaBosque,
    mapLocations: [
      { id: 1, name: "Tierra de Nadie", x: 50, y: 50, desc: "El limbo. Territorio neutral sin dueño en medio de dos fuerzas enemigas.", type: "danger" },
      { id: 2, name: "El Castillo (Oeste)", x: 20, y: 30, desc: "Hogar de los Hayashers del oeste. Tierra de tulipanes efímeros.", type: "base" },
      { id: 3, name: "Puerta Lateral", x: 25, y: 35, desc: "Ruta de escape para evitar la mirada de la directora.", type: "path" }
    ],

    // --- DATOS DE LA LÍNEA DE TIEMPO ---
    timelineEvents: [
      { title: "El Despertar", desc: "Nina despierta en la 'Tierra de Nadie', con su centro de energía parpadeante.", time: "Día 0" },
      { title: "El Reencuentro", desc: "Una conversación reveladora con Cherry en el más allá.", time: "Día 0" },
      { title: "La Despedida", desc: "Ellen se despide de Nina, decidida a seguir el camino erróneo.", time: "Día 1" },
      { title: "La Fuga", desc: "Comienza el escape de Ellen por la puerta lateral. El inicio de la cacería.", time: "Día 1" }
    ],

    // --- DATOS DEL QUIZ ---
    quizQuestions: [
      {
        text: "Si te encontraras en un limbo (Tierra de nadie), ¿cuál sería tu primer instinto?",
        options: [
          { text: "Analizar el entorno de inmediato e interrogar a quien esté conmigo.", type: "telepath" },
          { text: "Luchar con todas mis fuerzas por regresar a la vida, sin importar el dolor.", type: "fighter" },
          { text: "Aceptar la calma del momento y buscar respuestas en silencio.", type: "survivor" },
        ],
      },
      {
        text: "Un aliado invencible decide ir a una misión solitaria por venganza, destinada al fracaso. ¿Cómo reaccionas?",
        options: [
          { text: "Uso la lógica para hacer que cancelen su búsqueda y protegerlo desde lejos.", type: "telepath" },
          { text: "Me uno a la pelea, no dejaré que caiga sin ayuda.", type: "fighter" },
          { text: "Dejo que se estrelle. La única forma de que entienda su error es que falle.", type: "survivor" },
        ],
      },
      {
        text: "Si tuvieras que huir y convertirte en fugitivo, ¿cuál sería tu estrategia principal?",
        options: [
          { text: "Manipular la situación desde las sombras para que nadie me encuentre.", type: "telepath" },
          { text: "Prepararme físicamente para derrotar a quien intente detenerme.", type: "fighter" },
          { text: "No despedirme de nadie, usar rutas laterales y desaparecer por completo.", type: "survivor" },
        ],
      },
    ]
  },

  // --- LIBRO INDEPENDIENTE (Ejemplo) ---
  {
    id: 101,
    slug: "primero-yo-segundo-yo-tercero-yo",
    title: "Primero Yo, Segundo Yo, Tercero Yo",
    subtitle: "Desarrollo personal",
    cover: portada2,
    description: "Construye la Mujer de Alto Valor de tus sueños.",
    amazonLink: "https://www.amazon.com/dp/B0GJQMQCX4", // Recuerda poner el link real si lo tienes
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