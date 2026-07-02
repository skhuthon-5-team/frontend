import { useNavigate } from "react-router-dom";
import { getFeeds, getCategories } from "../mocks/feeds";
import { getMyRecentRecord } from "../mocks/dashboard";
import { useFeedList, sortOptions } from "../hooks/useFeedList";
import Button from "../components/ui/Button";
import CategoryFilterTabs from "../components/ui/CategoryFilterTabs";
import FeedCard from "../components/ui/FeedCard";
import AddRecordCard from "../components/ui/AddRecordCard";
import Pagination from "../components/ui/Pagination";
import SortTabs from "../components/ui/SortTabs";

const PAGE_SIZE = 6;
const filterTabs = ["전체", ...getCategories()];

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
  const myRecentRecord = getMyRecentRecord();
  // 내 최근 기록은 전용 카드로 노출하므로 일반 피드 목록에서 제외
  const allFeeds = getFeeds().filter((feed) => feed.id !== myRecentRecord.id);

  const {
    activeCategory,
    sort,
    page,
    setPage,
    sorted,
    pagedFeeds,
    totalPages,
    isFirstDefaultPage,
    handleCategoryChange,
    handleSortChange,
  } = useFeedList(allFeeds, PAGE_SIZE);

  // 첫 페이지에는 내 기록 카드 + 새 기록 카드가 함께 들어가므로 피드는 4개만 노출
  const visibleFeeds = isFirstDefaultPage ? sorted.slice(0, 4) : pagedFeeds;

  return (
    <div>
      <section className="border-b border-border-default bg-surface-subtle">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <span className="inline-flex items-center gap-2 text-sm">
            <span className="text-text-muted">
              오늘은 어떤 배움을 기록할까요?
            </span>
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
          <SortTabs
            options={sortOptions}
            active={sort}
            onChange={handleSortChange}
          />
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
