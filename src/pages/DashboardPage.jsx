import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFeeds, getCategories } from "../mocks/feeds";
import { getMyRecentRecord } from "../mocks/dashboard";
import Button from "../components/ui/Button";
import CategoryFilterTabs from "../components/ui/CategoryFilterTabs";
import FeedCard from "../components/ui/FeedCard";
import AddRecordCard from "../components/ui/AddRecordCard";
import Pagination from "../components/ui/Pagination";

const PAGE_SIZE = 6;
const filterTabs = ["전체", ...getCategories()];

const sortOptions = [
  { key: "latest", label: "최신순" },
  { key: "popular", label: "인기순" },
];

function parseViews(views) {
  if (typeof views === "number") return views;
  const value = parseFloat(views);
  return views.includes("k") ? value * 1000 : value;
}

function MyRecentRecordCard({ record, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex flex-col rounded-2xl bg-surface-inverse p-6 text-left text-text-on-inverse"
    >
      <div className="mb-4 flex items-center justify-between text-xs text-text-muted">
        <span>{record.label}</span>
        <span>{record.date}</span>
      </div>
      <h3 className="mb-2 line-clamp-2 text-lg font-bold leading-snug">
        {record.title}
      </h3>
      <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-text-muted">
        {record.summary}
      </p>
      <div className="mt-auto flex items-center justify-between border-t border-white/20 pt-4 text-xs">
        <span className="text-text-muted">{record.analysisStatus}</span>
        <span className="inline-flex items-center gap-1 rounded-full bg-surface-base px-3 py-1 font-medium text-text-strong">
          {record.retrospectiveStatus}
        </span>
      </div>
    </button>
  );
}

export default function DashboardPage() {
  const navigate = useNavigate();
  const allFeeds = getFeeds();
  const myRecentRecord = getMyRecentRecord();

  const [activeCategory, setActiveCategory] = useState("전체");
  const [sort, setSort] = useState("latest");
  const [page, setPage] = useState(1);

  const filtered = allFeeds.filter(
    (feed) => activeCategory === "전체" || feed.category === activeCategory
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sort === "popular") return parseViews(b.views) - parseViews(a.views);
    return b.date.localeCompare(a.date);
  });

  const totalPages = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE));
  const start = (page - 1) * PAGE_SIZE;

  const isFirstDefaultPage = page === 1 && activeCategory === "전체";
  const visibleFeeds = isFirstDefaultPage
    ? sorted.slice(0, 4)
    : sorted.slice(start, start + PAGE_SIZE);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setPage(1);
  };

  const handleSortChange = (key) => {
    setSort(key);
    setPage(1);
  };

  return (
    <div>
      <section className="border-b border-border-default bg-surface-subtle">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <span className="inline-flex items-center gap-2 text-sm">
            <span className="text-text-muted">오늘은 어떤 배움을 기록할까요?</span>
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight text-text-strong sm:text-5xl">
            실패는 더 큰 성공을 위한
            <br />
            <span className="text-text-muted">가장 정직한 데이터입니다.</span>
          </h1>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="primary" onClick={() => navigate("/record")}>
              새로운 실패 기록하기
            </Button>
            <Button
              variant="secondary"
              onClick={() => navigate("/mypage/timeline")}
            >
              내 성장 타임라인 보기
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <CategoryFilterTabs
            categories={filterTabs}
            active={activeCategory}
            onChange={handleCategoryChange}
          />
          <div className="flex items-center gap-2 text-sm">
            {sortOptions.map((option, index) => (
              <span key={option.key} className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleSortChange(option.key)}
                  className={`transition ${
                    sort === option.key
                      ? "font-bold text-text-strong"
                      : "text-text-muted hover:text-text-default"
                  }`}
                >
                  {option.label}
                </button>
                {index < sortOptions.length - 1 && (
                  <span className="text-border-default">|</span>
                )}
              </span>
            ))}
            <span className="text-border-default">|</span>
            <button
              type="button"
              className="flex items-center gap-1 text-text-default"
            >
              상세 필터
            </button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleFeeds.map((feed) => (
            <FeedCard
              key={feed.id}
              post={feed}
              onClick={() => navigate(`/feed/${feed.id}`)}
            />
          ))}
          {isFirstDefaultPage && (
            <>
              <MyRecentRecordCard
                record={myRecentRecord}
                onClick={() => navigate(`/feed/${myRecentRecord.id}`)}
              />
              <AddRecordCard
                title="새로운 실패를 기록하고"
                subtitle="성장의 기회로 만드세요."
                onClick={() => navigate("/record")}
              />
            </>
          )}
        </div>

        {totalPages > 1 && (
          <div className="mt-12">
            <Pagination current={page} total={totalPages} onChange={setPage} />
          </div>
        )}
      </section>
    </div>
  );
}
