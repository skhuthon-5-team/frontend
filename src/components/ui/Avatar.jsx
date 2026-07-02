const sizes = {
  sm: "w-6 h-6 text-xs",
  md: "w-10 h-10 text-sm",
  lg: "w-16 h-16 text-xl",
};

export default function Avatar({ src, alt = "", size = "md" }) {
  const initial = alt ? alt.charAt(0) : "?";

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-surface-subtle text-text-muted font-medium ${sizes[size]}`}
    >
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        initial
      )}
    </span>
  );
}
