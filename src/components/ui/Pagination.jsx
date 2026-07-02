export default function Pagination({ current, total, onChange }) {
  const pages = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-2">
      {pages.map((page) => {
        const isActive = page === current;
        return (
          <button
            key={page}
            onClick={() => onChange(page)}
            className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm font-medium transition ${
              isActive
                ? "bg-surface-inverse text-text-on-inverse"
                : "text-text-default hover:bg-surface-subtle"
            }`}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}
