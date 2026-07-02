export default function SelectableTagChip({ label, selected, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
        selected
          ? "bg-surface-inverse text-text-on-inverse"
          : "bg-surface-subtle text-text-muted hover:text-text-default"
      }`}
    >
      #{label}
    </button>
  );
}
