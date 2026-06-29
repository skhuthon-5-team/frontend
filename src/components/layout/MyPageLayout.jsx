import { NavLink, Outlet } from "react-router-dom";

const menu = [
  { to: "/mypage", label: "프로필 정보", end: true },
  { to: "/mypage/badges", label: "나의 활동 뱃지" },
  { to: "/mypage/posts", label: "작성한 게시글" },
  { to: "/mypage/timeline", label: "나의 성장 타임라인" },
  { to: "/mypage/account", label: "계정 및 보안" },
];

export default function MyPageLayout() {
  return (
    <div className="mx-auto flex max-w-6xl gap-8 px-4 py-8">
      <aside className="w-48 shrink-0">
        <nav className="flex flex-col gap-1">
          {menu.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `rounded-md px-3 py-2 ${
                  isActive
                    ? "bg-surface-subtle text-text-strong"
                    : "text-text-muted"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>
      <section className="flex-1">
        <Outlet />
      </section>
    </div>
  );
}
