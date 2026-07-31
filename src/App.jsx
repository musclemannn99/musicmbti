import { useState } from 'react'
import StartScreen from './components/StartScreen'
import QuizScreen from './components/QuizScreen'
import ResultScreen from './components/ResultScreen'
import { QUESTIONS, RESULTS } from './data/quiz'
import { computeResult } from './utils/scoring'
import './App.css'

function App() {
  const [stage, setStage] = useState('start')
  const [result, setResult] = useState(null)

  function handleQuizComplete(answers) {
    setResult(computeResult(answers))
    setStage('result')
  }

  function handleRestart() {
    setResult(null)
    setStage('start')
  }

  return (
    <div id="root">
      {stage === 'start' && <StartScreen onStart={() => setStage('quiz')} />}
      {stage === 'quiz' && (
        <QuizScreen questions={QUESTIONS} sectionLabel="문항" onComplete={handleQuizComplete} />
      )}
      {stage === 'result' && result && (
        <ResultScreen
          code={result.code}
          resultData={RESULTS[result.code]}
          axisBreakdown={result.axisBreakdown}
          onRestart={handleRestart}
        />
      )}
    </div>
  )
}

export default App
