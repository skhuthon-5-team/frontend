const badges = [
  {
    id: 1,
    name: "첫걸음",
    description: "첫 실패 기록 완료",
    emoji: "🌱",
    earned: true,
  },
  {
    id: 2,
    name: "꾸준함의 힘",
    description: "7일 연속 기록",
    emoji: "🔥",
    earned: true,
  },
  {
    id: 3,
    name: "공감 요정",
    description: "공감 5개 달성",
    emoji: "🤝",
    earned: true,
  },
  {
    id: 4,
    name: "통찰의 시작",
    description: "회고 글 1개",
    emoji: "💡",
    earned: true,
  },
  {
    id: 5,
    name: "명예의 전당",
    description: "베스트 기록 선정",
    emoji: "👑",
    earned: false,
  },
  {
    id: 6,
    name: "실패 마스터",
    description: "기록 10개 달성",
    emoji: "🏆",
    earned: false,
  },
  {
    id: 7,
    name: "커뮤니티 리더",
    description: "응원 50개 달성",
    emoji: "👥",
    earned: false,
  },
  {
    id: 8,
    name: "다이아몬드 멘탈",
    description: "성장 리포트 완료",
    emoji: "💎",
    earned: false,
  },
];

export function getBadges() {
  return badges;
}
