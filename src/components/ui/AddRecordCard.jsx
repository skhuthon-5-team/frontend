import { Plus } from "lucide-react";

export default function AddRecordCard({ title, subtitle, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex h-full w-full flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-border-default bg-surface-base p-5 text-center transition hover:bg-surface-subtle"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-subtle text-lg text-text-muted">
        <Plus size={18} />
      </span>
      <div className="text-sm text-text-muted">
        <p>{title}</p>
        {subtitle && <p className="mt-1">{subtitle}</p>}
      </div>
    </button>
  );
}
