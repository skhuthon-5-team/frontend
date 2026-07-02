import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function PasswordField({ label, action, ...props }) {
  const [visible, setVisible] = useState(false);

  return (
    <label className="flex flex-col gap-2">
      <span className="flex items-center justify-between">
        <span className="text-sm font-bold text-text-strong">{label}</span>
        {action}
      </span>
      <div className="relative">
        <input
          type={visible ? "text" : "password"}
          className="w-full rounded-lg bg-surface-subtle px-4 py-3 pr-11 text-sm text-text-default placeholder:text-text-muted focus:outline-none"
          {...props}
        />
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-default"
          aria-label={visible ? "비밀번호 숨기기" : "비밀번호 표시"}
        >
          {visible ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
    </label>
  );
}
