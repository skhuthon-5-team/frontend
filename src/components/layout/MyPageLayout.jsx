import { NavLink, Outlet } from "react-router-dom";

const MENU = [
  { to: "/mypage", label: "프로필 정보", end: true },
  { to: "/mypage/badges", label: "나의 활동 뱃지" },
  { to: "/mypage/posts", label: "작성한 게시글" },
  { to: "/mypage/timeline", label: "나의 성장 타임라인" },
  { to: "/mypage/account", label: "계정 및 보안" },
];

export default function MyPageLayout() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6 lg:flex-row lg:gap-10 lg:py-10">
      <aside className="lg:w-56 lg:shrink-0">
        <nav className="-mx-4 flex gap-1 overflow-x-auto px-4 pb-1 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0">
          {MENU.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `shrink-0 whitespace-nowrap rounded-lg px-4 py-3 text-sm transition-colors lg:shrink ${
                  isActive
                    ? "bg-surface-subtle font-bold text-text-strong"
                    : "text-text-muted hover:text-text-default"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <section className="min-w-0 flex-1">
        <Outlet />
      </section>
    </div>
  );
}
