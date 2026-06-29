export default function CategoryFilterTabs({ categories, active, onChange }) {
    return (
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((category) => {
          const isActive = category === active;
          return (
            <button
              key={category}
              onClick={() => onChange(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                isActive
                  ? "bg-surface-inverse text-text-on-inverse"
                  : "bg-surface-base text-text-default border border-border-default hover:bg-surface-subtle"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    );
  }
  