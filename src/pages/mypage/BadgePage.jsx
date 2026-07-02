import { getBadges } from "../../mocks/badges";

export default function BadgePage() {
  const badges = getBadges();
  const earnedCount = badges.filter((badge) => badge.earned).length;
  const totalCount = badges.length;

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
          badge.earned ? "bg-surface-inverse" : "bg-surface-subtle grayscale"
        }`}
      >
        <span>{badge.emoji}</span>
      </div>

      <p className="mt-4 text-sm font-bold">{badge.name}</p>
      <p className="mt-1 text-xs">{badge.description}</p>
    </div>
  );
}
