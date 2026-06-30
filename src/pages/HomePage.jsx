import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFeeds, getCategories } from "../mocks/feeds";
import Button from "../components/ui/Button";
import CategoryFilterTabs from "../components/ui/CategoryFilterTabs";
import FeedCard from "../components/ui/FeedCard";
import AddRecordCard from "../components/ui/AddRecordCard";
import Pagination from "../components/ui/Pagination";

const PAGE_SIZE = 3;
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

export default function HomePage() {
  const navigate = useNavigate();
  const allFeeds = getFeeds();

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
  const visibleFeeds = sorted.slice(start, start + PAGE_SIZE);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setPage(1);
  };

  const handleSortChange = (key) => {
    setSort(key);
    setPage(1);
  };

  const goToLogin = () => navigate("/login");

  return (
    <div>
      <section className="border-b border-border-default bg-surface-subtle">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h1 className="mt-6 text-4xl font-bold leading-tight text-text-strong sm:text-5xl">
            왜 우리는 성공은 공유하면서
            <br />
            <span className="text-text-muted">실패는 숨길까?</span>
          </h1>
          <p className="mt-6 text-base text-text-default">
            실패는 부끄러운 과거가 아니라, 당신의 가장 강력한 학습 자산입니다.
            <br />
            실패를 기록하고 AI와 함께 성장 전략을 세워보세요.
          </p>
          <div className="mt-8">
            <Button variant="primary" onClick={goToLogin}>
              지금 나의 실패 기록하기
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
          {page === 1 && activeCategory === "전체" && (
            <AddRecordCard
              title="당신의 실패도 기록해보세요."
              subtitle="AI가 성공의 실마리를 찾아줍니다."
              onClick={goToLogin}
            />
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
