export const hallOfFameMeta = {
  memberCount: "1,248",
  updatedAt: "2026.03.23",
};

// 이번 주 명예의 전당 (podium) — rank 1은 MVP
export const weeklyPodium = [
  {
    rank: 1,
    name: "시리얼창업가",
    subtitle: "MVP 검증 실패",
    quote: '"고객이 원하지 않는 완벽한 제품을 만드는 데 1년을 썼습니다."',
    description:
      "상상 속의 페르소나를 위해 수만 줄의 코드를 짰습니다. 런칭 당일 가입자 3명. 그 처참한 기록과 함께 바닥부터 다시 시작한 피벗 과정을 낱낱이 공개합니다.",
    badge: "명예의 전당 헌액팀",
    score: null,
    likes: "2.4k",
    bookmarks: 890,
    isMvp: true,
  },
  {
    rank: 2,
    name: "마케팅천재",
    subtitle: "데이터 분석의 실패",
    quote: '"ROAS 0.1%를 기록하며 배운 유료 광고의 함정"',
    description:
      "화려한 대시보드 뒤에 숨겨진 허수 데이터를 간과했습니다. 5천만 원의 예산을 태우고 나서야 깨달은 진정한 고객 가치 측정법을 공유합니다.",
    score: "94점",
    likes: 842,
    bookmarks: 156,
    isMvp: false,
  },
  {
    rank: 3,
    name: "인턴생존기",
    subtitle: "커뮤니케이션의 부재",
    quote: '"질문하지 않는 용기가 불러온 전사적 시스템 장애"',
    description:
      "모른다는 말을 하기 두려워 확인 버튼을 눌렀습니다. 4시간의 서비스 다운타임 동안 제가 배운 것은 기술이 아니라 '정직한 소통'이었습니다.",
    score: "91점",
    likes: 654,
    bookmarks: 98,
    isMvp: false,
  },
];

// 주목할 만한 실패 기록들 (carousel)
export const notableRecords = [
  {
    id: 1,
    category: "자기계발",
    date: "2026.03",
    title: '"100일 챌린지, 3일 만에 포기하고 얻은 뜻밖의 통찰"',
    author: "루틴왕",
    likes: 128,
  },
  {
    id: 2,
    category: "커리어",
    date: "2026.03",
    title: '"최종 면접 탈락 12번, 내 답변의 치명적 결함을 발견하다"',
    author: "꾸준기록",
    likes: 342,
  },
  {
    id: 3,
    category: "인간관계",
    date: "2026.02",
    title: '"모두에게 좋은 사람이 되려다 팀을 망친 리더의 고백"',
    author: "팀장님",
    likes: 215,
  },
  {
    id: 4,
    category: "창업",
    date: "2026.02",
    title: '"동업자와의 갈등으로 공중분해된 첫 번째 사무실"',
    author: "솔로프리너",
    likes: 189,
  },
  {
    id: 5,
    category: "자기계발",
    date: "2026.01",
    title: '"미라클 모닝 100일, 오히려 번아웃이 찾아왔습니다"',
    author: "새벽형인간",
    likes: 167,
  },
  {
    id: 6,
    category: "커리어",
    date: "2026.01",
    title: '"연봉만 보고 이직한 대가, 3개월 만의 퇴사"',
    author: "이직러",
    likes: 203,
  },
];

// 명예의 전당 선정 기준
export const selectionCriteria = [
  {
    step: 1,
    title: "진정성 있는 회고",
    description: "사실 나열을 넘어 자신의 내면을 솔직하게 들여다본 기록",
  },
  {
    step: 2,
    title: "구체적인 배움 도출",
    description: "실패로부터 얻은 구체적이고 실행 가능한 교훈이 포함된 기록",
  },
  {
    step: 3,
    title: "공동체 기여도",
    description: "다른 이용자들에게 긍정적인 자극과 위로를 전달한 기록",
  },
];

// 월간 베스트 (leaderboard, 와이어프레임)
export const monthlyBest = [
  {
    rank: 1,
    name: "피벗의달인",
    category: "창업·사업",
    title: "세 번의 폐업 끝에 찾은 나만의 사업 원칙",
    score: 98,
    likes: "3.1k",
  },
  {
    rank: 2,
    name: "회고중독자",
    category: "자기계발",
    title: "매일 실패를 기록하니 비로소 보이는 것들",
    score: 96,
    likes: "2.7k",
  },
  {
    rank: 3,
    name: "면접낙방기",
    category: "취업·커리어",
    title: "탈락 30번, 데이터로 분석한 나의 약점",
    score: 95,
    likes: "2.2k",
  },
  {
    rank: 4,
    name: "번아웃탈출",
    category: "자기계발",
    title: "완벽주의를 버리고 60%로 시작하는 법",
    score: 92,
    likes: "1.9k",
  },
  {
    rank: 5,
    name: "동업의교훈",
    category: "창업·사업",
    title: "계약서 없이 시작한 동업이 남긴 것",
    score: 90,
    likes: "1.6k",
  },
  {
    rank: 6,
    name: "관계회복러",
    category: "인간관계",
    title: "작은 거짓말이 무너뜨린 10년의 우정",
    score: 89,
    likes: "1.4k",
  },
];

// 역대 명예의 기록 (archive grid, 와이어프레임)
export const allTimeRecords = [
  {
    id: 1,
    name: "전설의창업가",
    category: "창업·사업",
    quote: '"10억을 태우고 배운 현금 흐름의 진실"',
    period: "2025 · 4분기 헌액",
    score: 99,
  },
  {
    id: 2,
    name: "무한도전러",
    category: "자기계발",
    quote: '"365번의 작은 실패로 완성한 습관의 과학"',
    period: "2025 · 3분기 헌액",
    score: 98,
  },
  {
    id: 3,
    name: "커리어리셋",
    category: "취업·커리어",
    quote: '"마흔에 시작한 세 번째 커리어의 기록"',
    period: "2025 · 2분기 헌액",
    score: 97,
  },
  {
    id: 4,
    name: "진심전달자",
    category: "인간관계",
    quote: '"침묵으로 잃은 관계, 대화로 되찾은 시간"',
    period: "2025 · 1분기 헌액",
    score: 96,
  },
  {
    id: 5,
    name: "실패수집가",
    category: "자기계발",
    quote: '"실패 노트 100권이 만든 단단한 멘탈"',
    period: "2024 · 4분기 헌액",
    score: 95,
  },
  {
    id: 6,
    name: "재기의아이콘",
    category: "창업·사업",
    quote: '"파산 이후 다시 세운 다섯 번째 브랜드"',
    period: "2024 · 3분기 헌액",
    score: 94,
  },
];

export function getHallOfFameMeta() {
  return hallOfFameMeta;
}

export function getWeeklyPodium() {
  return weeklyPodium;
}

export function getNotableRecords() {
  return notableRecords;
}

export function getSelectionCriteria() {
  return selectionCriteria;
}

export function getMonthlyBest() {
  return monthlyBest;
}

export function getAllTimeRecords() {
  return allTimeRecords;
}
