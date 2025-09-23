// components/Quiz.jsx
import React, { useState } from 'react'

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [profilesScore, setProfilesScore] = useState({
    consciente: 0,
    scrollador: 0,
    influencer: 0
  })
  const [showResult, setShowResult] = useState(false)
  const [mainProfile, setMainProfile] = useState(null)

  const quizQuestions = [
    {
      question: "Quantas vezes você pega o celular na primeira hora depois de acordar?",
      answers: [
        { text: "Nenhuma, aproveito para fazer outras coisas.", profile: { consciente: 2 } },
        { text: "Uma ou duas vezes, para ver se há algo importante.", profile: { consciente: 1, scrollador: 1 } },
        { text: "Várias vezes, já rolando feeds e respondendo mensagens.", profile: { scrollador: 2, influencer: 1 } },
        { text: "Nem sei, já está na minha mão antes de eu levantar.", profile: { scrollador: 3, influencer: 2 } }
      ]
    },
    // Adicione as outras perguntas aqui
  ]

  const handleAnswerSelect = (profilePoints) => {
    const newScores = { ...profilesScore }
    Object.keys(profilePoints).forEach(profile => {
      newScores[profile] += profilePoints[profile]
    })

    setProfilesScore(newScores)
    
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      calculateResult(newScores)
      setShowResult(true)
    }
  }

  const calculateResult = (scores) => {
    let profile = 'consciente'
    if (scores.scrollador > scores.consciente && scores.scrollador >= scores.influencer) {
      profile = 'scrollador'
    } else if (scores.influencer > scores.consciente && scores.influencer > scores.scrollador) {
      profile = 'influencer'
    }
    setMainProfile(profile)
  }

  const restartQuiz = () => {
    setCurrentQuestionIndex(0)
    setProfilesScore({ consciente: 0, scrollador: 0, influencer: 0 })
    setShowResult(false)
    setMainProfile(null)
  }

  return (
    <section id="quiz" className="bg-white p-8 rounded-xl shadow-md mb-8 text-center">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Qual é o seu tipo digital?</h2>
      <p className="mb-6">Descubra seu perfil com nosso quiz interativo!</p>
      
      {!showResult ? (
        <>
          <div className="text-sm text-gray-600 mb-4">
            Pergunta {currentQuestionIndex + 1} de {quizQuestions.length}
          </div>
          <div className="text-lg font-medium mb-6">
            {quizQuestions[currentQuestionIndex].question}
          </div>
          <div className="grid grid-cols-1 gap-4 mt-8">
            {quizQuestions[currentQuestionIndex].answers.map((answer, index) => (
              <button
                key={index}
                className="w-full p-4 rounded-lg bg-gray-100 text-gray-900 text-left transition-colors hover:bg-gray-200"
                onClick={() => handleAnswerSelect(answer.profile)}
              >
                {answer.text}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div>
          <h3 className="text-xl font-bold mb-4">Seu tipo digital é...</h3>
          <h4 className="text-2xl font-bold text-[#5A7E7B] mb-4">
            {mainProfile === 'consciente' && "O Conectado Consciente"}
            {mainProfile === 'scrollador' && "O Explorador Digital (com tendência ao Scroll)"}
            {mainProfile === 'influencer' && "O Criador de Conteúdo (com potencial para equilíbrio)"}
          </h4>
          <p className="mb-6">
            {mainProfile === 'consciente' && "Você tem um ótimo equilíbrio com o mundo digital, usando a tecnologia de forma intencional. Continue cultivando essa consciência!"}
            {mainProfile === 'scrollador' && "Você gosta de estar por dentro de tudo, mas talvez gaste tempo demais navegando sem um objetivo claro. Que tal definir algumas pausas digitais?"}
            {mainProfile === 'influencer' && "Você gosta de se expressar e interagir online, o que é ótimo! Mas lembre-se da importância de se desconectar para recarregar as energias e viver o 'ao vivo'."}
          </p>
          <button
            className="bg-[#5A7E7B] text-white px-6 py-3 rounded-full font-bold transition-transform hover:translate-y-[-2px] active:translate-y-0"
            onClick={restartQuiz}
          >
            Refazer o Quiz
          </button>
        </div>
      )}
    </section>
  )
}

export default Quiz