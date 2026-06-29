import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";

const navItems = [
  { to: "/feed", label: "실패 피드" },
  { to: "/hall-of-fame", label: "명예의 전당" },
  { to: "/community", label: "커뮤니티" },
];

export default function Header() {
  const isLoggedIn = useAuthStore((s) => s.isLoggedIn);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-border-default bg-surface-base">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="text-xl font-bold text-text-strong">
          실패로그
        </Link>

        <nav className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive ? "text-text-strong" : "text-text-muted"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          {isLoggedIn ? (
            <div className="h-8 w-8 rounded-full bg-surface-subtle" />
          ) : (
            <Link
              to="/login"
              className="rounded-full border border-border-default px-4 py-1.5 text-text-strong"
            >
              로그인
            </Link>
          )}
        </div>

        <button
          type="button"
          className="text-text-strong md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
        >
          메뉴
        </button>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-3 border-t border-border-default px-4 py-4 md:hidden">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="text-text-muted"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          {!isLoggedIn && (
            <Link to="/login" className="text-text-strong" onClick={() => setMenuOpen(false)}>
              로그인
            </Link>
          )}
        </nav>
      )}
    </header>
  );
}
