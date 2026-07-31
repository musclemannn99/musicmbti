import { useState } from 'react'
import StartScreen from './components/StartScreen'
import QuizScreen from './components/QuizScreen'
import BonusScreen from './components/BonusScreen'
import ResultScreen from './components/ResultScreen'
import { QUESTIONS, BONUS_QUESTIONS, RESULTS } from './data/quiz'
import { computeResult } from './utils/scoring'
import './App.css'

function App() {
  const [stage, setStage] = useState('start')
  const [result, setResult] = useState(null)
  const [badges, setBadges] = useState([])

  function handleQuizComplete(answers) {
    setResult(computeResult(answers))
    setStage('bonus')
  }

  function handleBonusComplete(collectedBadges) {
    setBadges(collectedBadges)
    setStage('result')
  }

  function handleRestart() {
    setResult(null)
    setBadges([])
    setStage('start')
  }

  return (
    <div id="root">
      {stage === 'start' && <StartScreen onStart={() => setStage('quiz')} />}
      {stage === 'quiz' && (
        <QuizScreen questions={QUESTIONS} sectionLabel="문항" onComplete={handleQuizComplete} />
      )}
      {stage === 'bonus' && (
        <BonusScreen questions={BONUS_QUESTIONS} onComplete={handleBonusComplete} />
      )}
      {stage === 'result' && result && (
        <ResultScreen
          code={result.code}
          resultData={RESULTS[result.code]}
          axisBreakdown={result.axisBreakdown}
          badges={badges}
          onRestart={handleRestart}
        />
      )}
    </div>
  )
}

export default App
