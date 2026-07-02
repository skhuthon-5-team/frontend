export default function FormField({
  label,
  as = "input",
  className = "",
  ...props
}) {
  const base =
    "w-full rounded-lg bg-surface-subtle px-4 py-3 text-sm text-text-default placeholder:text-text-muted focus:outline-none";

  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-bold text-text-strong">{label}</span>
      {as === "textarea" ? (
        <textarea className={`${base} resize-none ${className}`} {...props} />
      ) : (
        <input className={`${base} ${className}`} {...props} />
      )}
    </label>
  );
}
