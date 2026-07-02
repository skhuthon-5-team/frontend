export default function SortTabs({ options, active, onChange }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      {options.map((option, index) => (
        <span key={option.key} className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onChange(option.key)}
            className={`transition ${
              active === option.key
                ? "font-bold text-text-strong"
                : "text-text-muted hover:text-text-default"
            }`}
          >
            {option.label}
          </button>
          {index < options.length - 1 && (
            <span className="text-border-default">|</span>
          )}
        </span>
      ))}
    </div>
  );
}
