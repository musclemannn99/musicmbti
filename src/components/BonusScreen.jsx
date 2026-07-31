import { useState } from 'react'

export default function BonusScreen({ questions, onComplete }) {
  const [index, setIndex] = useState(0)
  const [badges, setBadges] = useState([])

  const question = questions[index]
  const progress = Math.round((index / questions.length) * 100)

  function handleSelect(choice) {
    const next = [...badges, question[choice].badge]
    setBadges(next)
    if (index + 1 < questions.length) {
      setIndex(index + 1)
    } else {
      onComplete(next)
    }
  }

  return (
    <div className="screen quiz-screen bonus">
      <div className="progress-track">
        <div className="progress-fill bonus-fill" style={{ width: `${progress}%` }} />
      </div>
      <p className="eyebrow">✨ 보너스 문항 {index + 1} / {questions.length} (결과에 영향 없음)</p>
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
