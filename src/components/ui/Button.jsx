const variants = {
  primary: "bg-surface-inverse text-text-on-inverse hover:opacity-90",
  secondary: "bg-surface-base text-text-strong border border-border-default hover:bg-surface-subtle",
  ghost: "bg-transparent text-text-default hover:bg-surface-subtle",
};

const shapes = {
  default: "rounded-lg",
  pill: "rounded-full",
};

export default function Button({ variant = "primary", shape = "default", children, onClick, type = "button", disabled = false, className = "" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold transition disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${shapes[shape]} ${className}`}
    >
      {children}
    </button>
  );
}
