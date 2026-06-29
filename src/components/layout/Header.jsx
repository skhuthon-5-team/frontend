import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import Button from "../ui/Button";
import Avatar from "../ui/Avatar";

const navItems = [
  { label: "실패 피드", to: "/feed" },
  { label: "명예의 전당", to: "/hall-of-fame" },
  { label: "커뮤니티", to: "/community" },
];

export default function Header() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const user = useAuthStore((state) => state.user);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border-default bg-surface-base">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-xl font-bold text-text-strong" onClick={closeMenu}>
            실패로그
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm transition hover:text-text-strong ${
                    isActive ? "font-bold text-text-strong" : "text-text-default"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          {isLoggedIn ? (
            <Link to="/mypage">
              <Avatar src={user?.avatarUrl} alt={user?.nickname} size="md" />
            </Link>
          ) : (
            <Link to="/login" className="hidden md:block">
              <Button variant="secondary" shape="pill" className="px-4 py-2">
                로그인
              </Button>
            </Link>
          )}

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-text-default hover:bg-surface-subtle md:hidden"
            aria-label="메뉴 열기"
          >
            {isMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="border-t border-border-default bg-surface-base px-4 py-3 md:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-sm transition hover:bg-surface-subtle ${
                    isActive ? "font-bold text-text-strong" : "text-text-default"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            {!isLoggedIn && (
              <Link to="/login" onClick={closeMenu} className="mt-1">
                <Button variant="secondary" className="w-full rounded-full">
                  로그인
                </Button>
              </Link>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}
