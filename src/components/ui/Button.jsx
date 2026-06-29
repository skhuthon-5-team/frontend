const variants = {
    primary:
      "bg-surface-inverse text-text-on-inverse hover:opacity-90",
    secondary:
      "bg-surface-base text-text-strong border border-border-default hover:bg-surface-subtle",
    ghost:
      "bg-transparent text-text-default hover:bg-surface-subtle",
  };
  
  export default function Button({
    variant = "primary",
    children,
    onClick,
    type = "button",
    disabled = false,
    className = "",
  }) {
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold transition disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${className}`}
      >
        {children}
      </button>
    );
  }
  