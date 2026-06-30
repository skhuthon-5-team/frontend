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

export default function BadgePage() {
  const earnedCount = badges.filter((badge) => badge.earned).length;
  const totalCount = 12;

  return (
    <div className="pt-8">
      <h1 className="text-2xl font-bold text-text-strong">나의 활동 뱃지</h1>

      <section className="mt-20">
        <div className="mb-5 flex items-end gap-2">
          <h2 className="text-base font-bold text-text-strong">뱃지 컬렉션</h2>
          <span className="text-sm text-text-muted">
            획득 {earnedCount} / {totalCount}
          </span>
        </div>

        <div className="grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
          {badges.map((badge) => (
            <BadgeCard key={badge.id} badge={badge} />
          ))}
        </div>
      </section>
    </div>
  );
}

function BadgeCard({ badge }) {
  return (
    <div
      className={`flex h-36 flex-col items-center justify-center rounded-2xl border text-center transition ${
        badge.earned
          ? "border-border-default bg-surface-base text-text-strong shadow-sm"
          : "border-border-default bg-surface-base text-text-muted opacity-35"
      }`}
    >
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-xl text-2xl ${
          badge.earned
            ? "bg-surface-inverse"
            : "bg-surface-subtle grayscale"
        }`}
      >
        <span>{badge.emoji}</span>
      </div>

      <p className="mt-4 text-sm font-bold">{badge.name}</p>
      <p className="mt-1 text-xs">{badge.description}</p>
    </div>
  );
}