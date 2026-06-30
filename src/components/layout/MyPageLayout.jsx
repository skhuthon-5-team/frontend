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
    <div className="mx-auto flex max-w-6xl gap-10 px-4 py-10">
      <aside className="w-56 shrink-0">
        <nav className="flex flex-col gap-1">
          {MENU.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `rounded-lg px-4 py-3 text-sm transition-colors ${
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
