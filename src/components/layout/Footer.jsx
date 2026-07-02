const linkColumns = [
  {
    title: "PLATFORM",
    links: ["소개", "이용약관", "개인정보처리방침"],
  },
  {
    title: "SUPPORT",
    links: ["공지사항", "문의하기", "FAQ"],
  },
];

const socialIcons = [
  {
    label: "Instagram",
    path: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </>
    ),
  },
  {
    label: "GitHub",
    path: (
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border-default bg-surface-base">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <p className="text-lg font-bold text-text-strong">실패로그</p>
            <p className="mt-3 text-sm text-text-muted">
              우리는 실패를 숨기지 않습니다. 실패는 성공으로 가는 가장 빠른
              지름길임을 믿습니다.
            </p>
          </div>

          <div className="flex gap-16">
            {linkColumns.map((column) => (
              <div key={column.title}>
                <p className="text-xs font-bold tracking-wider text-text-strong">
                  {column.title}
                </p>
                <ul className="mt-4 flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-text-muted transition hover:text-text-strong"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border-default pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-text-muted">
            © 2026 Failure Log. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialIcons.map((icon) => (
              <a
                key={icon.label}
                href="#"
                aria-label={icon.label}
                className="text-text-muted transition hover:text-text-strong"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {icon.path}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
