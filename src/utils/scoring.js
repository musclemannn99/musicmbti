import { AXES, QUESTIONS } from '../data/quiz'

export function computeResult(answers) {
  const counts = {}
  AXES.forEach(({ left, right }) => {
    counts[left] = 0
    counts[right] = 0
  })

  QUESTIONS.forEach((q) => {
    const picked = answers[q.id]
    if (!picked) return
    const letter = q[picked].letter
    if (letter in counts) counts[letter] += 1
  })

  let code = ''
  const axisBreakdown = AXES.map((axis) => {
    const leftCount = counts[axis.left]
    const rightCount = counts[axis.right]
    const total = leftCount + rightCount || 1
    const winner = leftCount === rightCount
      ? (Math.random() < 0.5 ? axis.left : axis.right)
      : (leftCount > rightCount ? axis.left : axis.right)
    code += winner
    return {
      ...axis,
      leftCount,
      rightCount,
      leftPercent: Math.round((leftCount / total) * 100),
      rightPercent: Math.round((rightCount / total) * 100),
      winner,
    }
  })

  return { code, axisBreakdown }
}
