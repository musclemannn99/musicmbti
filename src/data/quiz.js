export const AXES = [
  { id: 'nation', left: 'K', right: 'G', leftLabel: '국내파', rightLabel: '해외파', emoji: '🌏' },
  { id: 'core', left: 'L', right: 'M', leftLabel: '가사파', rightLabel: '멜로디파', emoji: '📝' },
  { id: 'depth', left: 'D', right: 'E', leftLabel: '몰입파', rightLabel: '이지파', emoji: '🎤' },
  { id: 'trend', left: 'I', right: 'B', leftLabel: '대세파', rightLabel: '마이웨이파', emoji: '✨' },
]

export const QUESTIONS = [
  { id: 'q1', a: { text: '나는 한국 음악을 주로 듣는다', letter: 'K' }, b: { text: '나는 해외 음악을 주로 듣는다', letter: 'G' } },
  { id: 'q2', a: { text: '빌보드 핫100보다 우리 오빠(언니) 첫주 음반 판매량이 더 궁금하다', letter: 'K' }, b: { text: '우리 오빠들 앨범보다 빌보드 1위가 더 궁금하다', letter: 'G' } },
  { id: 'q3', a: { text: '팝송 가사는 그냥 분위기로 대충 떼운다', letter: 'K' }, b: { text: '팝송 3절까지 영어 발음 완벽 떼창 가능(뇌피셜)', letter: 'G' } },
  { id: 'q4', a: { text: '내 플레이리스트는 한국어 가사가 8할', letter: 'K' }, b: { text: '내 플레이리스트는 영어(외국어) 가사가 8할', letter: 'G' } },
  { id: 'q5', a: { text: '노래방 18번은 발라드 또는 트로트', letter: 'K' }, b: { text: '노래방 가면 팝송 원곡 키로 승부 본다', letter: 'G' } },

  { id: 'q6', a: { text: '나는 노래를 들을 때 멜로디보다 가사를 중시한다', letter: 'L' }, b: { text: '나는 노래를 들을 때 멜로디가 좋으면 가사가 구려도 상관없다', letter: 'M' } },
  { id: 'q7', a: { text: '나는 한국 발라드에 가슴이 뛴다 (ex. 소주한잔)', letter: 'L' }, b: { text: '나는 UK개러지, 하우스, 드럼앤베이스 등의 리듬에 반응한다', letter: 'M' } },
  { id: 'q8', a: { text: '노래 듣다가 필사 노트에 가사 적어본 적 있다', letter: 'L' }, b: { text: '가사는 몰라도 훅만 알면 떼창 가능', letter: 'M' } },
  { id: 'q9', a: { text: '이별 노래는 가사가 꼭 내 얘기 같아서 운다', letter: 'L' }, b: { text: '이별 노래도 비트만 좋으면 클럽 앤썸으로 듣는다', letter: 'M' } },
  { id: 'q10', a: { text: '노래방 갈 때 감정선이 중요해서 부르다 만다', letter: 'L' }, b: { text: '노래방은 부르기 쉬운 후렴구 위주로 승부', letter: 'M' } },

  { id: 'q11', a: { text: '무대, 라이브를 잘하는 가수가 좋다', letter: 'D' }, b: { text: '편하게 들을 수 있는 이지리스닝 음원이 좋다', letter: 'E' } },
  { id: 'q12', a: { text: '상황에 맞춰 노래를 선곡하는 것을 좋아한다', letter: 'D' }, b: { text: '그냥 재생목록에 있는 노래 랜덤 재생', letter: 'E' } },
  { id: 'q13', a: { text: '앨범 단위의 음악 감상을 선호한다', letter: 'D' }, b: { text: '앨범 통째로 다 듣는건 부담스러…', letter: 'E' } },
  { id: 'q14', a: { text: '나는 락페스티벌 가는 걸 좋아한다', letter: 'D' }, b: { text: '락페에서 떼창하다 입냄새 공격당함… 집에서 쾌적하게 듣지뭐', letter: 'E' } },
  { id: 'q15', a: { text: '최애의 콘서트를 갈 때 나는, 가사를 다 외워 떼창한다', letter: 'D' }, b: { text: '제발 조용히해 라이브 좀 듣자', letter: 'E' } },
  { id: 'q16', a: { text: '콘서트 가는 돈은 안아깝다', letter: 'D' }, b: { text: '그 돈으로 갖고 싶은 걸 산다', letter: 'E' } },

  { id: 'q17', a: { text: '한국 음악 중에서는 아이돌 음악을 많이 듣는다', letter: 'I' }, b: { text: '한국 음악 중에서는 밴드 음악을 많이 듣는다', letter: 'B' } },
  { id: 'q18', a: { text: '나는 5세대 아이돌의 이름을 3개 이상 말할 수 있다', letter: 'I' }, b: { text: '가장 마지막에 좋아한 아이돌은 소녀시대', letter: 'B' } },
  { id: 'q19', a: { text: '나는 한로로를 좋아한다', letter: 'B' }, b: { text: '나는 한로로를 좋아했다…', letter: 'I' } },
  { id: 'q20', a: { text: '요새 유행하는 노래가 뭔지 알고 있다', letter: 'I' }, b: { text: '나는 나만의 길을 간다', letter: 'B' } },
  { id: 'q21', a: { text: '남들이 모를만한 외국 밴드 몇개는 알고 있다', letter: 'B' }, b: { text: '내 취향은 대중적인 편이다', letter: 'I' } },
  { id: 'q22', a: { text: '난 역시 비주류야 킥킥', letter: 'B' }, b: { text: '나는 유명한 노래 위주로 듣는다', letter: 'I' } },
  { id: 'q23', a: { text: 'AI 노래도 좋으면 괜찮지', letter: 'I' }, b: { text: 'AI로 만든 노래는 절대 안 들을거야', letter: 'B' } },
  { id: 'q24', a: { text: '모르는 음악을 디깅하는 것을 즐긴다', letter: 'B' }, b: { text: '누군가 만들어놓은 플레이리스트가 있는데 왜 찾지? 에센셜 들어', letter: 'I' } },
  { id: 'q25', a: { text: '누군가 나에게 티켓을 준다면, 나는 아이유 콘서트에 간다', letter: 'I' }, b: { text: '누군가 나에게 티켓을 준다면, 나는 바밍 타이거 콘서트에 간다', letter: 'B' } },
  { id: 'q26', a: { text: '내 최애 아티스트를 남들이 모르면, 뿌듯하다', letter: 'B' }, b: { text: '내 최애 아티스트를 남들이 모르면, 아쉽다…', letter: 'I' } },
]

// 결과 유형에는 반영되지 않는 재미용 보너스 문항 (배지로만 결과 화면에 표시)
export const BONUS_QUESTIONS = [
  { id: 'bonus1', a: { text: '코노에서 신곡 위주로 부른다', badge: '디깅형 코노러' }, b: { text: '코노에 가면 인기차트를 훑는다', badge: '차트형 코노러' } },
  { id: 'bonus2', a: { text: '나는 좋아하는 특정 장르가 명확하다', badge: '확고한 취향러' }, b: { text: '나는 아직 무슨 음악 취향을 가지고 있는지 잘 모르겠다', badge: '탐색 중인 귀' } },
  // TODO: 두번째 선택지는 사용자가 추후 전달 예정 — 받는 대로 텍스트만 교체
  { id: 'bonus3', a: { text: '한국인이라면 역시, 티아라 - 왜이러니', badge: '왜이러니 국룰 인정' }, b: { text: '(추가 예정)', badge: '(추가 예정)' } },
  { id: 'bonus4', a: { text: '나는 SM', badge: 'SM파' }, b: { text: '나는 JYP', badge: 'JYP파' } },
]

export const RESULTS = {
  KLDI: { title: '국룰 감성 대세러', emoji: '🎤💌', tagline: '가사 한 줄에 오열하다가도 실시간 차트는 놓치지 않는 타입', description: '발라드 한 소절에 눈물 뚝, 근데 그 노래가 마침 멜론 1위. 감성과 대세 둘 다 잡는 만능형. 최애 콘서트 가면 떼창 각이고, 남들이 다 아는 노래를 나도 절절하게 느낀다는 게 포인트.', recommend: '아이유 - 잔소리 / 임영웅 콘서트 직관' },
  KLDB: { title: '밴드 직관 눈물바다', emoji: '🎸🥲', tagline: '가사 다 외워서 우는데, 정작 그 밴드는 아무도 모름', description: '홍대 라이브클럽 스탠딩 단골. 가사 한 줄 한 줄이 내 다이어리인데 밴드 이름 말하면 다들 "그게 누구야" 함. 상관없음, 나만 알아도 충분.', recommend: '한로로 / 실리카겔 소극장 공연' },
  KLEI: { title: '눈물은 진심, 직관은 유튜브', emoji: '😭📱', tagline: '감성은 최대치, 직관 체력은 0', description: '노래방에서 발라드 부르다 목소리 갈라지는 타입. 콘서트는 집에서 하이라이트 클립으로 충분. 대세곡 가사에 진심으로 몰입하지만 굳이 몸까지 갈아넣진 않는다.', recommend: '박효신 / 성시경 플레이리스트' },
  KLEB: { title: '혼자 우는 인디 감성러', emoji: '🎧🌧️', tagline: '아무도 모르는 노래 가사에 조용히 무너지는 타입', description: '잘 알려지지 않은 국내 싱어송라이터 가사 한 줄에 인생 얘기 다 하고 있음. 굳이 알리지도, 콘서트 가서 소리치지도 않음. 이어폰 하나로 완결되는 감성.', recommend: '박주원 / 정우 앨범 정주행' },
  KMDI: { title: 'K팝 무대 찐팬', emoji: '🔥🕺', tagline: '가사는 몰라도 칼군무는 못 참지', description: '가사보다 비트, 멜로디, 무대 완성도가 먼저인 타입. 아이돌 컴백 무대 직캠은 필수 시청. 대세 그룹 콘서트라면 티켓값 안 아깝고 응원봉 흔들 준비 완료.', recommend: '에스파 / 세븐틴 콘서트 직관' },
  KMDB: { title: '국내밴드 페스 최전방', emoji: '🤘🎪', tagline: '가사는 대충, 사운드는 진심', description: '국내 인디/밴드 신에서 사운드 좋은 팀 찾아 페스티벌 도장깨기 하는 타입. 가사보다 라이브 합주 텐션이 중요, 남들 모르는 밴드 라인업 보고 티켓팅부터 함.', recommend: '실리카겔 / 자우림 페스티벌 무대' },
  KMEI: { title: '후렴구는 못 참지', emoji: '🎶😌', tagline: '가사 몰라도 후렴은 완벽, 근데 콘서트까진 안 감', description: '인기 K팝/가요 후렴구는 자동재생 되는 타입. 멜로디가 좋으면 가사 몰라도 상관없고, 직관보다는 플레이리스트로 편하게 듣는 걸 선호.', recommend: '뉴진스 / 지코 플레이리스트' },
  KMEB: { title: '국내 인디 멜로디 장인 발굴러', emoji: '🕵️🎼', tagline: '아무도 모르는 노래인데 멜로디는 국보급', description: '국내 인디 신에서 멜로디 좋은 곡 찾아 듣는 게 취미. 가사는 대충 흘려듣지만 사운드 좋으면 무한반복. 콘서트 직관보다는 이어폰으로 조용히 듣는 걸 선호.', recommend: '새소년 / 이랑 앨범 감상' },
  GLDI: { title: '팝송 가사 해석러', emoji: '🌍📝', tagline: '팝송 가사 번역까지 다 챙겨보는 글로벌 감성러', description: '해외 팝/힙합 가사를 진심으로 곱씹는 타입. 지금 제일 핫한 글로벌 아티스트 내한이면 무조건 직관, 가사 의미까지 파고들어야 직성이 풀림.', recommend: '테일러 스위프트 / 위켄드 내한 공연' },
  GLDB: { title: '해외 인디밴드 번역기 돌리는 사람', emoji: '🎻🗺️', tagline: '아무도 모르는 해외 밴드 가사를 혼자 해석 중', description: '듣도보도 못한 해외 인디/포크 밴드 가사를 정성껏 찾아 해석하는 타입. 내한 소극장 공연은 무조건 최전방, 근데 친구한테 얘기해도 아무도 모름.', recommend: 'Big Thief / Phoebe Bridgers 소극장 공연' },
  GLEI: { title: '팝송 명언 짤 제조기', emoji: '💬🌎', tagline: '가사는 인생 명언, 근데 콘서트는 못 감', description: '해외 히트곡 가사를 인생 명언처럼 SNS 상태메시지로 씀. 대세 팝송 가사에 깊이 공감하지만 직관보다는 스트리밍으로 편하게 듣는 편.', recommend: 'Sabrina Carpenter / Billie Eilish 플레이리스트' },
  GLEB: { title: '혼자 시집 읽듯 듣는 사람', emoji: '📖🎧', tagline: '아무도 모르는 해외곡 가사를 다이어리에 필사', description: '잘 알려지지 않은 해외 싱어송라이터 가사를 조용히 곱씹는 타입. 굳이 알리지도, 직관 가지도 않지만 혼자만의 세계에서 완결됨.', recommend: 'Clairo / Boy Pablo 앨범 정주행' },
  GMDI: { title: '글로벌 안무 챌린지 1등', emoji: '💃🌐', tagline: '비트만 좋으면 가사는 구글번역기가 해주니까', description: '글로벌 히트곡 사운드와 무대에 진심인 타입. 대세 팝스타 내한이면 무조건 직관, 떼창은 못해도 멜로디는 완벽하게 흥얼거림.', recommend: '두아 리파 / 아리아나 그란데 내한 공연' },
  GMDB: { title: 'UKG 세트리스트 디깅러', emoji: '🎛️🕶️', tagline: '가사는 몰라도 이 비트는 알아야 함', description: 'UKG, 하우스, 드럼앤베이스 라인업 찾아 페스티벌 다니는 타입. 남들이 모르는 해외 DJ/밴드 세트를 미리 찾아 듣고 직관하는 게 낙.', recommend: '해외 UKG/하우스 페스티벌 세트리스트' },
  GMEI: { title: '출퇴근길 글로벌 흥얼이', emoji: '🚗🌟', tagline: '가사 몰라도 후렴은 세계 공통어', description: '빌보드/스포티파이 글로벌 차트 후렴구는 다 흥얼거리는 타입. 멜로디 좋으면 가사 몰라도 상관없고, 직관보다는 편하게 스트리밍으로 즐기는 편.', recommend: 'Spotify Global Top 50 플레이리스트' },
  GMEB: { title: '알고리즘 밖 사운드 수집가', emoji: '🛰️🎚️', tagline: '나만 아는 사운드클라우드 링크가 취미', description: '사운드클라우드, 밴드캠프 깊은 곳에서 멜로디 좋은 해외 트랙을 캐내는 타입. 가사는 몰라도 상관없고, 콘서트보다는 혼자 헤드폰으로 듣는 게 최고.', recommend: '사운드클라우드 알고리즘 밖 트랙들' },
}
