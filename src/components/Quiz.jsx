import { useState } from 'react';

// Ahora recibe "questions" como propiedad (Props)
export default function Quiz({ questions = [] }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState({ telepath: 0, fighter: 0, survivor: 0 });

  // Si no hay preguntas configuradas, mostramos un mensaje de error elegante
  if (!questions || questions.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500 font-gothic tracking-widest">PRUEBA DE APTITUD EN MANTENIMIENTO</p>
      </div>
    );
  }

  const handleAnswer = (type) => {
    setScore({ ...score, [type]: score[type] + 1 });
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const getResult = () => {
    if (score.telepath >= score.fighter && score.telepath >= score.survivor) {
      return {
        title: "ERES UN TELÉPATA",
        desc: "Como Eric Hudson, tu poder reside en la mente. Eres calculador, estratégico y peligroso. El Castillo Hayashi te necesita para liderar.",
        color: "text-blue-400"
      };
    } else if (score.fighter > score.telepath && score.fighter > score.survivor) {
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
  };

  return (
    <div className="bg-black/80 border border-white/10 p-8 rounded-lg max-w-2xl mx-auto shadow-2xl backdrop-blur-md">
      {!showResult ? (
        <>
          <div className="mb-6">
            <span className="text-gold text-sm tracking-widest">PRUEBA DE ADMISIÓN</span>
            <h3 className="font-gothic text-2xl text-white mt-2">Pregunta {currentQuestion + 1}/{questions.length}</h3>
          </div>
          
          <p className="text-xl text-gray-300 mb-8 min-h-[60px]">{questions[currentQuestion].text}</p>
          
          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.type)}
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
          
         

          <button 
            onClick={() => window.open('https://www.amazon.com/-/es/FLOR-PIEL-Spanish-Paulina-Lopez/dp/B0FNNJKR36/', '_blank')}
            className="bg-blood text-white px-8 py-3 font-bold hover:bg-red-700 transition duration-300"
          >
            DESCUBRIR LA HISTORIA COMPLETA
          </button>
        </div>
      )}
    </div>
  );
}
