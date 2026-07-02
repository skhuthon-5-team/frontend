import { useNavigate } from "react-router-dom";
import { getFeeds, getCategories } from "../mocks/feeds";
import { useFeedList, sortOptions } from "../hooks/useFeedList";
import Button from "../components/ui/Button";
import CategoryFilterTabs from "../components/ui/CategoryFilterTabs";
import FeedCard from "../components/ui/FeedCard";
import AddRecordCard from "../components/ui/AddRecordCard";
import Pagination from "../components/ui/Pagination";
import SortTabs from "../components/ui/SortTabs";

const PAGE_SIZE = 3;
const filterTabs = ["전체", ...getCategories()];

export default function HomePage() {
  const navigate = useNavigate();

  const {
    activeCategory,
    sort,
    page,
    setPage,
    pagedFeeds,
    totalPages,
    isFirstDefaultPage,
    handleCategoryChange,
    handleSortChange,
  } = useFeedList(getFeeds(), PAGE_SIZE);

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
          <SortTabs
            options={sortOptions}
            active={sort}
            onChange={handleSortChange}
          />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pagedFeeds.map((feed) => (
            <FeedCard
              key={feed.id}
              post={feed}
              onClick={() => navigate(`/feed/${feed.id}`)}
            />
          ))}
          {isFirstDefaultPage && (
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
