import { useState } from "react";

export const sortOptions = [
  { key: "latest", label: "최신순" },
  { key: "popular", label: "인기순" },
];

function parseViews(views) {
  if (typeof views === "number") return views;
  const value = parseFloat(views);
  return views.includes("k") ? value * 1000 : value;
}

// 피드 목록의 카테고리 필터 · 정렬 · 페이지네이션 공통 로직
export function useFeedList(feeds, pageSize) {
  const [activeCategory, setActiveCategory] = useState("전체");
  const [sort, setSort] = useState("latest");
  const [page, setPage] = useState(1);

  const filtered = feeds.filter(
    (feed) => activeCategory === "전체" || feed.category === activeCategory
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sort === "popular") return parseViews(b.views) - parseViews(a.views);
    return b.date.localeCompare(a.date);
  });

  const totalPages = Math.max(1, Math.ceil(sorted.length / pageSize));
  const start = (page - 1) * pageSize;
  const pagedFeeds = sorted.slice(start, start + pageSize);
  const isFirstDefaultPage = page === 1 && activeCategory === "전체";

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setPage(1);
  };

  const handleSortChange = (key) => {
    setSort(key);
    setPage(1);
  };

  return {
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
  };
}
