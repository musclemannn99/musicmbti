export default function ResultScreen({ code, resultData, axisBreakdown, onRestart }) {
  return (
    <div className="screen result-screen">
      <p className="eyebrow">당신의 뮤직 MBTI는</p>
      <h1 className="result-code">{code}</h1>
      <h2 className="result-title">
        {resultData.emoji} {resultData.title}
      </h2>
      <p className="result-tagline">{resultData.tagline}</p>
      <p className="result-description">{resultData.description}</p>
      <p className="result-recommend">🎵 추천: {resultData.recommend}</p>

      <div className="axis-bars">
        {axisBreakdown.map((axis) => (
          <div className="axis-bar-row" key={axis.id}>
            <div className="axis-bar-labels">
              <span className={axis.winner === axis.left ? 'winner' : ''}>
                {axis.left} {axis.leftLabel} {axis.leftPercent}%
              </span>
              <span className={axis.winner === axis.right ? 'winner' : ''}>
                {axis.rightLabel} {axis.right} {axis.rightPercent}%
              </span>
            </div>
            <div className="axis-bar-track">
              <div className="axis-bar-fill" style={{ width: `${axis.leftPercent}%` }} />
            </div>
          </div>
        ))}
      </div>

      <button className="btn primary" onClick={onRestart}>
        다시하기 🔁
      </button>
    </div>
  )
}
