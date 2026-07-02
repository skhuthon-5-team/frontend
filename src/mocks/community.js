// 게시판 카테고리 (좌측 사이드바)
export const communityCategories = [
  { key: "all", label: "전체보기", count: "2.4k" },
  { key: "free", label: "자유로운 소통" },
  { key: "qna", label: "질문 & 답변" },
  { key: "team", label: "함께할 팀원 찾기" },
  { key: "insight", label: "인사이트 공유" },
];

// 실시간 인기 태그
export const popularTags = [
  "스타트업",
  "이직고민",
  "코딩테스트",
  "번아웃",
  "사이드프로젝트",
];

// 정렬 옵션
export const sortOptions = [
  { key: "latest", label: "최신순" },
  { key: "popular", label: "인기순" },
  { key: "comments", label: "댓글 많은순" },
];

// 커뮤니티 글 목록
export const communityPosts = [
  {
    id: 1,
    category: "인사이트",
    date: "2026.03.24",
    title: '"3년 차 주니어 개발자가 번아웃을 극복하며 깨달은 것들"',
    excerpt:
      "열정만으로는 부족했습니다. 무조건 열심히 하는 것보다 중요한 것은 지속 가능한 속도를 찾는 것이었습니다. 제가 겪은 시행착오와 회복 과정을 공유합니다.",
    author: "성장형개발자",
    likes: 42,
    comments: 18,
    views: "1.2k",
  },
  {
    id: 2,
    category: "질문 & 답변",
    date: "2026.03.24",
    title: '"사이드 프로젝트 동업자와의 갈등, 어떻게 풀어야 할까요?"',
    excerpt:
      "친한 친구와 시작한 프로젝트인데, 기획 단계에서 의견 차이가 너무 큽니다. 관계를 망치지 않으면서 프로젝트를 이어갈 수 있는 방법이 있을까요?",
    author: "고민많은기획자",
    likes: 12,
    comments: 34,
    views: "856",
  },
  {
    id: 3,
    category: "팀원 모집",
    date: "2026.03.23",
    title: '"실패를 기록하는 습관을 만드는 챌린지 팀원을 찾습니다"',
    excerpt:
      "매일 저녁 10분, 작은 실패와 배움을 공유할 5분을 찾습니다. 거창한 것이 아니어도 좋습니다. 서로의 성장을 지켜봐 줄 분들 환영합니다.",
    author: "챌린지마스터",
    likes: 89,
    comments: 56,
    views: "2.1k",
  },
  {
    id: 4,
    category: "자유",
    date: "2026.03.22",
    title: '"퇴사 6개월 차, 백수의 삶도 나쁘지 않네요"',
    excerpt:
      "번아웃으로 무작정 퇴사했습니다. 처음엔 불안했지만 지금은 나를 돌아보는 값진 시간을 보내고 있습니다. 비슷한 고민하는 분들과 이야기 나누고 싶어요.",
    author: "자유인",
    likes: 67,
    comments: 41,
    views: "1.5k",
  },
  {
    id: 5,
    category: "질문 & 답변",
    date: "2026.03.21",
    title: '"코딩테스트 10번 낙방, 무엇이 문제일까요?"',
    excerpt:
      "기본 문법은 아는데 실전 문제만 나오면 손이 멈춥니다. 알고리즘 공부를 어떻게 해야 실력이 늘까요? 선배님들의 조언이 절실합니다.",
    author: "취준생A",
    likes: 23,
    comments: 27,
    views: "980",
  },
];

// 주간 핫 토픽 (우측 사이드바)
export const weeklyHotTopics = [
  {
    rank: 1,
    title: "퇴사 고민, 지금이 적기일까요?",
    views: "4.2k",
    comments: 128,
  },
  {
    rank: 2,
    title: "AI 시대, 개발자의 생존 전략",
    views: "3.8k",
    comments: 94,
  },
  {
    rank: 3,
    title: "투자 유치 실패 후 멘탈 관리법",
    views: "3.1k",
    comments: 76,
  },
];

// 글 작성 - 카테고리 선택
export const writeCategories = [
  { key: "free", label: "자유로운 소통" },
  { key: "qna", label: "질문 & 답변" },
  { key: "team", label: "함께할 팀원 찾기" },
  { key: "insight", label: "인사이트 공유" },
];

// 글 작성 - 가이드라인
export const writeGuidelines = [
  {
    step: "01",
    text: "비난보다는 응원을, 지적보다는 대안을 제시하는 따뜻한 커뮤니티를 지향합니다.",
  },
  {
    step: "02",
    text: "개인정보나 민감한 기업 기밀이 포함되지 않도록 주의해주세요.",
  },
  {
    step: "03",
    text: "실패를 통해 얻은 '배움'을 함께 기록하면 다른 분들에게 더 큰 도움이 됩니다.",
  },
];

// 상세 페이지 데이터
export const communityPostDetails = {
  1: {
    id: 1,
    category: "인사이트",
    date: "2026.03.24",
    title: '"3년 차 주니어 개발자가 번아웃을 극복하며 깨달은 것들"',
    author: {
      name: "성장형개발자",
      role: "Front-end Developer @ Startup",
      bio: "실패를 배움으로 바꾸는 중",
      followers: "1.2k",
      posts: 48,
    },
    stats: { views: "1,248", likes: 42, comments: 18 },
    intro: [
      "안녕하세요, 성장형개발자입니다. 벌써 개발자로 일한 지 3년이 되었네요. 최근 몇 달간 심각한 번아웃을 겪었습니다. 아침에 눈을 뜨는 것이 고통스러웠고, 코드를 한 줄도 쓰기 싫은 날들이 이어졌죠.",
      "열정만으로는 부족했습니다. 무조건 열심히 하는 것보다 중요한 것은 지속 가능한 속도를 찾는 것이었습니다. 제가 겪은 시행착오와 회복 과정을 공유합니다.",
    ],
    strategyTitle: "제가 깨달은 세 가지 리프레시 전략",
    strategies: [
      {
        step: "01",
        title: "완벽주의 내려놓기",
        description:
          "모든 코드가 예술일 필요는 없습니다. 일단 작동하게 만들고 나중에 개선하세요.",
      },
      {
        step: "02",
        title: "오프라인 취미 갖기",
        description:
          "모니터 밖의 세상에서 성취감을 느껴보세요. 저는 목공을 시작했습니다.",
      },
      {
        step: "03",
        title: "작은 실패 기록하기",
        description:
          "실패를 감추지 않고 기록하면서 오히려 해답을 찾을 수 있었습니다.",
      },
    ],
    outro:
      "번아웃은 성장이 멈췄을 때 오는 것이 아니라, 너무 과하게 달렸을 때 엔진이 과부하되는 현상이라고 생각합니다. 혹시 지금 힘든 시간을 보내고 계신 분들이 있다면, 잠시 멈춰 서서 스스로에게 질문을 던져보셨으면 좋겠습니다.",
    tags: ["번아웃", "커리어고민", "주니어개발자", "회고"],
    likes: 42,
    authorOtherPosts: [
      {
        title: "신입 시절, 배포 사고로 서버를 날려먹었던 기억",
        date: "2026.02.15",
        likes: 156,
      },
      {
        title: "코딩 테스트 10번 낙방 후 깨달은 효율적인 공부법",
        date: "2026.01.20",
        likes: 89,
      },
      {
        title: "사이드 프로젝트가 왜 자꾸 중간에 엎어질까?",
        date: "2025.12.05",
        likes: 214,
      },
    ],
    comments: [
      {
        id: 1,
        author: "공감요정",
        date: "3시간 전",
        content:
          "정말 공감되는 글입니다. 저도 2년 차 때 비슷한 경험을 했는데, 그때 이 글을 읽었더라면 큰 위로가 되었을 것 같아요. 특히 완벽주의 내려놓기 부분에서 무릎을 탁 치고 갑니다!",
        likes: 12,
        replies: [
          {
            id: 11,
            author: "성장형개발자",
            date: "2시간 전",
            isAuthor: true,
            content:
              "공감해주셔서 감사합니다! 완벽주의가 오히려 독이 될 때가 많더라고요. 같이 힘내봐요! :)",
          },
        ],
      },
      {
        id: 2,
        author: "데이터사이언티스트",
        date: "5시간 전",
        content:
          "목공이라는 취미가 정말 좋아 보이네요. 개발과 다르게 눈에 보이는 실체가 바로바로 만들어지는 과정이 리프레시에 큰 도움이 될 것 같습니다. 추천하시는 목공 공방이 있나요?",
        likes: 5,
        replies: [],
      },
    ],
  },
};

export function getCommunityPosts() {
  return communityPosts;
}

export function getCommunityCategories() {
  return communityCategories;
}

export function getPopularTags() {
  return popularTags;
}

export function getWeeklyHotTopics() {
  return weeklyHotTopics;
}

export function getCommunityPost(id) {
  return communityPostDetails[id] || communityPostDetails[1];
}
