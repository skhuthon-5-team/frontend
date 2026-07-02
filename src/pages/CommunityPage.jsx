import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ChevronRight,
  Eye,
  Flame,
  Heart,
  MessageCircle,
  PenLine,
  Search,
} from "lucide-react";
import Avatar from "../components/ui/Avatar";
import Button from "../components/ui/Button";
import TagChip from "../components/ui/TagChip";
import Pagination from "../components/ui/Pagination";
import {
  getCommunityCategories,
  getCommunityPosts,
  getPopularTags,
  getWeeklyHotTopics,
  sortOptions,
} from "../mocks/community";

export default function CommunityPage() {
  const navigate = useNavigate();

  const categories = getCommunityCategories();
  const posts = getCommunityPosts();
  const popularTags = getPopularTags();
  const hotTopics = getWeeklyHotTopics();

  const [activeCategory, setActiveCategory] = useState("all");
  const [activeSort, setActiveSort] = useState("latest");
  const [page, setPage] = useState(1);

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      {/* Header */}
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-4xl font-bold text-text-strong">커뮤니티</h1>
          <p className="mt-4 text-base leading-relaxed text-text-default">
            서로의 실패를 응원하고, 함께 해결책을 찾아가는 공간입니다.
            <br />
            혼자 고민하지 말고, 우리의 경험을 공유해보세요.
          </p>
        </div>

        <Button
          variant="primary"
          className="shrink-0 rounded-xl px-6 py-4"
          onClick={() => navigate("/community/write")}
        >
          <PenLine size={18} />
          새 글 작성하기
        </Button>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[16rem_1fr_18rem]">
        {/* Left sidebar */}
        <aside className="flex flex-col gap-6">
          <div>
            <p className="mb-3 text-sm font-bold text-text-strong">
              게시판 카테고리
            </p>
            <ul className="flex flex-col gap-1">
              {categories.map((category) => {
                const isActive = category.key === activeCategory;
                return (
                  <li key={category.key}>
                    <button
                      type="button"
                      onClick={() => setActiveCategory(category.key)}
                      className={`flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm transition ${
                        isActive
                          ? "bg-surface-subtle font-bold text-text-strong"
                          : "text-text-default hover:bg-surface-subtle"
                      }`}
                    >
                      <span>{category.label}</span>
                      {category.count ? (
                        <span className="text-xs text-text-muted">
                          {category.count}
                        </span>
                      ) : (
                        <ChevronRight size={16} className="text-text-muted" />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="rounded-2xl border border-border-default p-5">
            <p className="mb-4 text-sm font-bold text-text-strong">
              실시간 인기 태그
            </p>
            <div className="flex flex-wrap gap-2">
              {popularTags.map((tag) => (
                <span
                  key={tag}
                  className="cursor-pointer rounded-full bg-surface-subtle px-3 py-1.5 text-xs font-medium text-text-default transition hover:bg-surface-inverse hover:text-text-on-inverse"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </aside>

        {/* Main list */}
        <div>
          <div className="flex flex-col gap-4 border-b border-border-default pb-5 sm:flex-row sm:items-center sm:justify-between">
            <nav className="flex items-center gap-5">
              {sortOptions.map((option) => (
                <button
                  key={option.key}
                  type="button"
                  onClick={() => setActiveSort(option.key)}
                  className={`text-sm transition hover:text-text-strong ${
                    activeSort === option.key
                      ? "font-bold text-text-strong underline underline-offset-8"
                      : "text-text-muted"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </nav>

            <div className="relative w-full sm:w-72">
              <Search
                size={16}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
              />
              <input
                placeholder="관심 있는 키워드를 검색해보세요"
                className="w-full rounded-full border border-border-default bg-surface-base py-2.5 pl-10 pr-4 text-sm text-text-default outline-none transition placeholder:text-text-muted focus:border-text-strong"
              />
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-5">
            {posts.map((post) => (
              <PostRow key={post.id} post={post} />
            ))}
          </div>

          <div className="mt-12">
            <Pagination current={page} total={5} onChange={setPage} />
          </div>
        </div>

        {/* Right sidebar */}
        <aside className="flex flex-col gap-6">
          <div className="rounded-2xl border border-border-default p-5">
            <div className="mb-4 flex items-center gap-2">
              <Flame size={16} className="text-text-strong" />
              <p className="text-sm font-bold text-text-strong">주간 핫 토픽</p>
            </div>
            <ul className="flex flex-col gap-4">
              {hotTopics.map((topic) => (
                <li key={topic.rank} className="flex gap-3">
                  <span className="text-sm font-bold text-text-strong">
                    {String(topic.rank).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-sm font-medium leading-snug text-text-strong">
                      {topic.title}
                    </p>
                    <p className="mt-1 text-xs text-text-muted">
                      조회수 {topic.views} · 댓글 {topic.comments}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

function PostRow({ post }) {
  return (
    <Link
      to={`/community/${post.id}`}
      className="block rounded-2xl border border-border-default bg-surface-base p-6 transition hover:shadow-md"
    >
      <div className="flex items-center gap-3">
        <TagChip label={post.category} tone="inverse" />
        <span className="text-xs text-text-muted">{post.date}</span>
      </div>

      <h3 className="mt-4 text-lg font-bold text-text-strong">{post.title}</h3>
      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-text-default">
        {post.excerpt}
      </p>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar alt={post.author} size="sm" />
          <span className="text-sm text-text-default">{post.author}</span>
        </div>
        <div className="flex items-center gap-4 text-xs text-text-muted">
          <span className="flex items-center gap-1">
            <Heart size={14} />
            {post.likes}
          </span>
          <span className="flex items-center gap-1">
            <MessageCircle size={14} />
            {post.comments}
          </span>
          <span className="flex items-center gap-1">
            <Eye size={14} />
            {post.views}
          </span>
        </div>
      </div>
    </Link>
  );
}
