const tones = {
  default: "bg-surface-subtle text-text-default",
  inverse: "bg-surface-inverse text-text-on-inverse",
};

export default function TagChip({ label, tone = "default" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${tones[tone]}`}
    >
      {label}
    </span>
  );
}
