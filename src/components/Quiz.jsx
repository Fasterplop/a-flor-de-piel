import { useState } from 'react';

/**
 * @typedef {Object} QuizOption
 * @property {string} text
 * @property {string} [type]
 * @property {number} [points]
 */

/**
 * @typedef {Object} QuizQuestion
 * @property {string} text
 * @property {QuizOption[]} options
 */

/**
 * @param {Object} props
 * @param {QuizQuestion[]} [props.questions]
 * @param {string} [props.ctaLink]
 * @param {string} [props.ctaText]
 */
export default function Quiz({ 
  questions = [], 
  ctaLink = "#", 
  ctaText = "VER RESULTADOS" 
}) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  
  // ESTADO PARA SAGA (Categorías)
  const [categoryScore, setCategoryScore] = useState({ telepath: 0, fighter: 0, survivor: 0 });
  // ESTADO PARA INDEPENDIENTE (Puntos)
  const [pointsScore, setPointsScore] = useState(0);

  // DETECTAR TIPO DE QUIZ: Si la primera opción tiene 'points', es un quiz de puntos.
  const isPointsQuiz = questions.length > 0 && questions[0]?.options[0]?.points !== undefined;

  // Si no hay preguntas, mostramos mensaje seguro
  if (!questions || questions.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500 font-gothic tracking-widest">PRUEBA NO DISPONIBLE</p>
      </div>
    );
  }

  const handleAnswer = (option) => {
    if (isPointsQuiz) {
      // Sumar puntos
      setPointsScore(prev => prev + (option.points || 0));
    } else {
      // Sumar categoría
      if (option.type) {
        setCategoryScore(prev => ({ ...prev, [option.type]: prev[option.type] + 1 }));
      }
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const getResult = () => {
    if (isPointsQuiz) {
      // --- LÓGICA DE PUNTOS (Libro 101) ---
      if (pointsScore <= 8) {
        return {
          title: "NIVEL: SEMILLA EN CRECIMIENTO",
          desc: "Estás comenzando a despertar tu valor. Aún buscas mucha validación externa, pero el hecho de estar aquí demuestra que estás lista para el cambio.",
          color: "text-gray-400"
        };
      } else if (pointsScore <= 14) {
        return {
          title: "NIVEL: MUJER EN DESARROLLO",
          desc: "Tienes bases sólidas y momentos de gran claridad. Sabes lo que vales, aunque a veces el miedo o la costumbre te hacen dudar.",
          color: "text-blue-400"
        };
      } else {
        return {
          title: "NIVEL: MUJER MAGNÉTICA",
          desc: "¡Excelente! Operas desde un nivel de consciencia y amor propio envidiable. Eres dueña de tus decisiones, tu tiempo y tu energía.",
          color: "text-gold"
        };
      }
    } else {
      // --- LÓGICA DE CATEGORÍAS (Libro 1) ---
      if (categoryScore.telepath >= categoryScore.fighter && categoryScore.telepath >= categoryScore.survivor) {
        return {
          title: "ERES UN TELÉPATA",
          desc: "Como Eric Hudson, tu poder reside en la mente. Eres calculador, estratégico y peligroso. El Castillo Hayashi te necesita para liderar.",
          color: "text-blue-400"
        };
      } else if (categoryScore.fighter > categoryScore.telepath && categoryScore.fighter > categoryScore.survivor) {
        return {
          title: "ERES UN COMBATIENTE",
          desc: "Como Megan, tu fuerza es imparable. No temes al dolor y prefieres la acción directa. Eres la espada del Castillo.",
          color: "text-blood"
        };
      } else {
        return {
          title: "ERES UN SUPERVIVIENTE",
          desc: "Como Nina Cole, tienes un instinto único. Tu capacidad para adaptarte y resistir es tu mayor arma. Tienes un potencial oculto.",
          color: "text-gold"
        };
      }
    }
  };

  return (
    <div className="bg-black/80 border border-white/10 p-8 rounded-lg max-w-2xl mx-auto shadow-2xl backdrop-blur-md">
      {!showResult ? (
        <>
          <div className="mb-6">
            <span className="text-gold text-sm tracking-widest">
              {isPointsQuiz ? "TEST DE MAGNETISMO" : "PRUEBA DE ADMISIÓN"}
            </span>
            <h3 className="font-gothic text-2xl text-white mt-2">Pregunta {currentQuestion + 1}/{questions.length}</h3>
          </div>
          
          <p className="text-xl text-gray-300 mb-8 min-h-[60px]">{questions[currentQuestion].text}</p>
          
          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="w-full text-left p-4 border border-white/20 rounded hover:bg-blood hover:border-blood hover:text-white transition duration-300 text-gray-400 group"
              >
                <span className="inline-block w-6 h-6 border border-white/30 rounded-full mr-4 text-center text-xs leading-5 group-hover:bg-white group-hover:text-blood transition">
                  {String.fromCharCode(65 + index)}
                </span>
                {option.text}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="text-center animate-pulse">
          <span className="text-gray-400 text-sm tracking-widest uppercase">Resultado del Análisis</span>
          <h2 className={`font-gothic text-4xl mt-4 mb-4 ${getResult().color}`}>{getResult().title}</h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">{getResult().desc}</p>
          
          {/* BOTÓN DINÁMICO CONECTADO A LAS PROPS */}
          <button 
            onClick={() => window.open(ctaLink, '_blank')}
            className="bg-blood text-white px-8 py-3 font-bold hover:bg-red-700 transition duration-300 uppercase shadow-lg hover:shadow-blood/50"
          >
            {ctaText}
          </button>
        </div>
      )}
    </div>
  );
}