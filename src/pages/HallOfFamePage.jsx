import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Crown,
  Heart,
  Bookmark,
  ChevronLeft,
  ChevronRight,
  Medal,
  Share2,
  Trophy,
} from "lucide-react";
import Avatar from "../components/ui/Avatar";
import Button from "../components/ui/Button";
import TagChip from "../components/ui/TagChip";
import {
  getHallOfFameMeta,
  getWeeklyPodium,
  getNotableRecords,
  getSelectionCriteria,
  getMonthlyBest,
  getAllTimeRecords,
} from "../mocks/hallOfFame";

const tabs = [
  { key: "weekly", label: "이번 주 명예의 전당" },
  { key: "monthly", label: "월간 베스트" },
  { key: "allTime", label: "역대 명예의 기록" },
];

export default function HallOfFamePage() {
  const navigate = useNavigate();
  const meta = getHallOfFameMeta();
  const podium = getWeeklyPodium();
  const notable = getNotableRecords();
  const criteria = getSelectionCriteria();
  const monthlyBest = getMonthlyBest();
  const allTimeRecords = getAllTimeRecords();

  const [activeTab, setActiveTab] = useState("weekly");

  const goToStart = () => navigate("/login");

  return (
    <div>
      {/* Hero */}
      <section className="bg-surface-inverse text-text-on-inverse">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center rounded-full bg-surface-base px-3 py-1 text-xs font-bold text-text-strong">
              HALL OF FAME
            </span>
            <span className="text-sm text-text-muted">
              가장 위대한 배움을 얻은 이들의 기록
            </span>
          </div>

          <h1 className="mt-8 text-4xl font-bold leading-tight sm:text-5xl">
            실패를 통해 증명한
            <br />
            <span className="text-text-muted">거대한 성장의 순간들</span>
          </h1>

          <p className="mt-6 text-base leading-relaxed text-text-muted">
            단순한 실수를 넘어, 치열한 고민과 회고를 통해 공동체에 영감을 준 '실패
            로그'들을 선정합니다.
            <br />
            명예의 전당에 오른 기록들은 매주 월요일 업데이트됩니다.
          </p>

          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-3">
              {["김", "이", "박"].map((name) => (
                <span
                  key={name}
                  className="rounded-full ring-2 ring-surface-inverse"
                >
                  <Avatar alt={name} size="md" />
                </span>
              ))}
            </div>
            <div>
              <p className="text-sm font-bold">
                {meta.memberCount}명의 명예 회원
              </p>
              <p className="text-xs text-text-muted">누적 배지 획득 기준</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="border-b border-border-default">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <nav className="flex items-center gap-6">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`text-sm transition hover:text-text-strong ${
                  activeTab === tab.key
                    ? "font-bold text-text-strong underline underline-offset-8"
                    : "text-text-muted"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <span className="text-xs text-text-muted">
              업데이트 일시: {meta.updatedAt}
            </span>
            <button
              type="button"
              className="flex items-center gap-1.5 text-xs font-medium text-text-default transition hover:text-text-strong"
            >
              <Share2 size={14} />
              공유하기
            </button>
          </div>
        </div>
      </section>

      {activeTab === "weekly" && (
        <WeeklyTab
          podium={podium}
          notable={notable}
          criteria={criteria}
          onStart={goToStart}
        />
      )}
      {activeTab === "monthly" && <MonthlyTab items={monthlyBest} />}
      {activeTab === "allTime" && <AllTimeTab items={allTimeRecords} />}
    </div>
  );
}

/* ---------------- 이번 주 명예의 전당 ---------------- */

function WeeklyTab({ podium, notable, criteria, onStart }) {
  // 화면 배치: 2위(좌) - 1위 MVP(중앙) - 3위(우)
  const byRank = (r) => podium.find((p) => p.rank === r);
  const podiumOrder = [byRank(2), byRank(1), byRank(3)].filter(Boolean);

  return (
    <>
      <section className="bg-surface-subtle">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid grid-cols-1 items-end gap-6 md:grid-cols-3">
            {podiumOrder.map((entry) => (
              <PodiumCard key={entry.rank} entry={entry} />
            ))}
          </div>
        </div>
      </section>

      {/* 주목할 만한 실패 기록들 */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <NotableCarousel notable={notable} />
      </section>

      {/* 선정 기준 */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="rounded-2xl bg-surface-subtle p-8 sm:p-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-text-strong">
                명예의 전당 선정 기준
              </h2>
              <ul className="mt-8 space-y-6">
                {criteria.map((item) => (
                  <li key={item.step} className="flex gap-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-surface-inverse text-xs font-bold text-text-on-inverse">
                      {item.step}
                    </span>
                    <div>
                      <p className="font-bold text-text-strong">{item.title}</p>
                      <p className="mt-1 text-sm text-text-default">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-center justify-center rounded-xl border border-border-default bg-surface-base p-8 text-center">
              <Medal size={40} className="text-text-muted" />
              <p className="mt-4 text-lg font-bold text-text-strong">
                당신도 주인공이 될 수 있습니다
              </p>
              <p className="mt-2 text-sm text-text-default">
                회고를 작성하고 AI 분석을 통해
                <br />
                성장 배지를 획득하세요.
              </p>
              <Button variant="primary" className="mt-6" onClick={onStart}>
                지금 기록 시작하기
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function PodiumCard({ entry }) {
  const {
    rank,
    name,
    subtitle,
    quote,
    description,
    badge,
    score,
    likes,
    bookmarks,
    isMvp,
  } = entry;

  if (isMvp) {
    return (
      <div className="relative md:-mt-8">
        <span className="absolute left-1/2 top-0 z-10 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-surface-inverse text-text-on-inverse ring-4 ring-surface-subtle">
          <Crown size={20} />
        </span>
        <div className="flex h-full flex-col rounded-2xl bg-surface-inverse p-8 pt-10 text-text-on-inverse shadow-lg">
          <div className="flex flex-col items-center text-center">
            <span className="rounded-full ring-2 ring-surface-base">
              <Avatar alt={name} size="lg" />
            </span>
            <p className="mt-4 text-xl font-bold">{name}</p>
            <p className="mt-1 text-xs text-text-muted">{subtitle}</p>
          </div>

          <p className="mt-6 text-center text-lg font-bold leading-snug">
            {quote}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-text-muted">
            {description}
          </p>

          <div className="mt-8 border-t border-white/15 pt-4">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-xs text-text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                {badge}
              </span>
              <div className="flex items-center gap-3 text-xs text-text-muted">
                <span className="flex items-center gap-1">
                  <Heart size={13} />
                  {likes}
                </span>
                <span className="flex items-center gap-1">
                  <Bookmark size={13} />
                  {bookmarks}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <span className="absolute left-1/2 top-0 z-10 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-surface-base text-sm font-bold text-text-strong ring-1 ring-border-default">
        {rank}
      </span>
      <div className="flex h-full flex-col rounded-2xl border border-border-default bg-surface-base p-7 pt-9">
        <div className="flex flex-col items-center text-center">
          <Avatar alt={name} size="lg" />
          <p className="mt-4 text-lg font-bold text-text-strong">{name}</p>
          <p className="mt-1 text-xs text-text-muted">{subtitle}</p>
        </div>

        <p className="mt-6 text-center text-base font-bold leading-snug text-text-strong">
          {quote}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-text-default">
          {description}
        </p>

        <div className="mt-8 border-t border-border-default pt-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-text-default">
              분석 점수 {score}
            </span>
            <div className="flex items-center gap-3 text-xs text-text-muted">
              <span className="flex items-center gap-1">
                <Heart size={13} />
                {likes}
              </span>
              <span className="flex items-center gap-1">
                <Bookmark size={13} />
                {bookmarks}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NotableCarousel({ notable }) {
  const scrollRef = useRef(null);

  const scrollBy = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * 320, behavior: "smooth" });
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-text-strong">
          주목할 만한 실패 기록들
        </h2>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label="이전"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border-default text-text-default transition hover:bg-surface-subtle"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label="다음"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border-default text-text-default transition hover:bg-surface-subtle"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="mt-8 flex snap-x gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {notable.map((record) => (
          <article
            key={record.id}
            className="flex w-72 shrink-0 snap-start flex-col rounded-xl border border-border-default bg-surface-base p-5"
          >
            <div className="flex items-center gap-2">
              <TagChip label={record.category} />
              <span className="text-xs text-text-muted">{record.date}</span>
            </div>
            <h3 className="mt-4 line-clamp-2 text-base font-bold leading-snug text-text-strong">
              {record.title}
            </h3>
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar alt={record.author} size="sm" />
                <span className="text-sm text-text-default">
                  {record.author}
                </span>
              </div>
              <span className="flex items-center gap-1 text-xs text-text-muted">
                <Heart size={13} />
                {record.likes}
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

/* ---------------- 월간 베스트 (와이어프레임) ---------------- */

function MonthlyTab({ items }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold text-text-strong">월간 베스트</h2>
          <p className="mt-2 text-sm text-text-default">
            이번 달 가장 많은 공감을 받은 실패 로그 순위입니다.
          </p>
        </div>
        <span className="hidden text-xs text-text-muted sm:block">
          2026년 3월 기준
        </span>
      </div>

      <div className="mt-8 overflow-hidden rounded-xl border border-border-default">
        <div className="hidden grid-cols-[3rem_1fr_8rem_6rem_5rem] items-center gap-4 border-b border-border-default bg-surface-subtle px-6 py-3 text-xs font-medium text-text-muted sm:grid">
          <span>순위</span>
          <span>기록</span>
          <span>카테고리</span>
          <span className="text-right">분석 점수</span>
          <span className="text-right">공감</span>
        </div>

        {items.map((item, index) => (
          <div
            key={item.rank}
            className={`grid grid-cols-1 items-center gap-3 px-6 py-4 sm:grid-cols-[3rem_1fr_8rem_6rem_5rem] sm:gap-4 ${
              index < items.length - 1
                ? "border-b border-border-default"
                : ""
            } transition hover:bg-surface-subtle`}
          >
            <span
              className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
                item.rank <= 3
                  ? "bg-surface-inverse text-text-on-inverse"
                  : "bg-surface-subtle text-text-default"
              }`}
            >
              {item.rank}
            </span>

            <div className="flex items-center gap-3">
              <Avatar alt={item.name} size="sm" />
              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-text-strong">
                  {item.title}
                </p>
                <p className="text-xs text-text-muted">{item.name}</p>
              </div>
            </div>

            <span className="sm:block">
              <TagChip label={item.category} />
            </span>

            <span className="text-sm font-medium text-text-default sm:text-right">
              {item.score}점
            </span>

            <span className="flex items-center gap-1 text-xs text-text-muted sm:justify-end">
              <Heart size={13} />
              {item.likes}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- 역대 명예의 기록 (와이어프레임) ---------------- */

function AllTimeTab({ items }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="flex items-center gap-3">
        <Trophy size={22} className="text-text-strong" />
        <h2 className="text-2xl font-bold text-text-strong">
          역대 명예의 기록
        </h2>
      </div>
      <p className="mt-2 text-sm text-text-default">
        분기마다 헌액된, 시간이 지나도 회자되는 전설적인 실패 로그입니다.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((record) => (
          <article
            key={record.id}
            className="flex flex-col rounded-xl border border-border-default bg-surface-base p-6"
          >
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-xs font-medium text-text-muted">
                <Medal size={15} />
                명예의 전당 헌액
              </span>
              <span className="text-sm font-bold text-text-strong">
                {record.score}점
              </span>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <Avatar alt={record.name} size="md" />
              <div>
                <p className="text-sm font-bold text-text-strong">
                  {record.name}
                </p>
                <span className="mt-1 inline-block">
                  <TagChip label={record.category} />
                </span>
              </div>
            </div>

            <p className="mt-5 text-base font-bold leading-snug text-text-strong">
              {record.quote}
            </p>

            <p className="mt-auto pt-6 text-xs text-text-muted">
              {record.period}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
