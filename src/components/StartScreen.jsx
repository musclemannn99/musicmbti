export default function StartScreen({ onStart }) {
  return (
    <div className="screen start-screen">
      <p className="eyebrow">TEST</p>
      <h1>뮤직 MBTI</h1>
      <p className="subtitle">
        네가 노래방에서 왜 그 노래를 부르는지, 왜 그 콘서트만 가는지
        <br />
        26문항으로 낱낱이 파헤쳐 드림
      </p>
      <button className="btn primary" onClick={onStart}>
        테스트 시작하기 🎧
      </button>
      <p className="hint">약 2분 소요 · 결과는 16가지 유형 중 하나</p>
    </div>
  )
}
