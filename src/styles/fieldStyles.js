// 폼 입력 공통 스타일. 페이지 배경에 따라 base(흰 배경 위) / subtle(회색 입력창) 변형을 사용한다.
const base =
  "w-full rounded-xl border border-border-default px-4 py-4 text-sm text-text-default placeholder:text-text-muted outline-none transition-colors focus:border-text-strong";

export const inputOnBase = `${base} bg-surface-base`;
export const textareaOnBase = `${inputOnBase} resize-none leading-6`;

export const inputOnSubtle = `${base} bg-surface-subtle focus:bg-surface-base`;
export const textareaOnSubtle = `${inputOnSubtle} resize-none leading-6`;
