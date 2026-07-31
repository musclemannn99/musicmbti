import { useState } from 'react'

export default function QuizScreen({ questions, onComplete, sectionLabel }) {
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState({})

  const question = questions[index]
  const progress = Math.round((index / questions.length) * 100)

  function handleSelect(choice) {
    const next = { ...answers, [question.id]: choice }
    setAnswers(next)
    if (index + 1 < questions.length) {
      setIndex(index + 1)
    } else {
      onComplete(next)
    }
  }

  return (
    <div className="screen quiz-screen">
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>
      <p className="eyebrow">
        {sectionLabel} {index + 1} / {questions.length}
      </p>
      <div className="options">
        <button className="btn option" onClick={() => handleSelect('a')}>
          {question.a.text}
        </button>
        <div className="vs">or</div>
        <button className="btn option" onClick={() => handleSelect('b')}>
          {question.b.text}
        </button>
      </div>
    </div>
  )
}
