const sizes = {
  sm: { label: "text-[10px]", value: "text-base" },
  lg: { label: "text-xs", value: "text-xl" },
};

export default function Stat({ label, value, size = "sm" }) {
  return (
    <div>
      <p
        className={`${sizes[size].label} font-medium uppercase tracking-wider text-text-muted`}
      >
        {label}
      </p>
      <p className={`mt-1 ${sizes[size].value} font-bold text-text-strong`}>
        {value}
      </p>
    </div>
  );
}
