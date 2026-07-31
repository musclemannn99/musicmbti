import { useState } from 'react'

export default function BonusScreen({ questions, onComplete }) {
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState({})

  const question = questions[index]
  const progress = Math.round((index / questions.length) * 100)
  const picked = answers[question.id]

  function handleSelect(choice) {
    const next = { ...answers, [question.id]: choice }
    setAnswers(next)
    if (index + 1 < questions.length) {
      setIndex(index + 1)
    } else {
      onComplete(questions.map((q) => q[next[q.id]].badge))
    }
  }

  function handleBack() {
    if (index > 0) setIndex(index - 1)
  }

  return (
    <div className="screen quiz-screen bonus">
      <div className="progress-track">
        <div className="progress-fill bonus-fill" style={{ width: `${progress}%` }} />
      </div>
      <div className="quiz-header">
        <button
          type="button"
          className="btn back-arrow"
          onClick={handleBack}
          disabled={index === 0}
          aria-label="이전 문항"
        >
          ‹
        </button>
        <p className="eyebrow">✨ 보너스 문항 {index + 1} / {questions.length} (결과에 영향 없음)</p>
        <span className="back-arrow-spacer" />
      </div>
      <div className="options">
        <button
          className={`btn option${picked === 'a' ? ' selected' : ''}`}
          onClick={() => handleSelect('a')}
        >
          {question.a.text}
        </button>
        <div className="vs">or</div>
        <button
          className={`btn option${picked === 'b' ? ' selected' : ''}`}
          onClick={() => handleSelect('b')}
        >
          {question.b.text}
        </button>
      </div>
    </div>
  )
}
