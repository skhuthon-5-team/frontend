import { useState } from "react";
import { Info } from "lucide-react";
import { getProfile } from "../../mocks/profile";
import PasswordField from "../../components/ui/PasswordField";
import Button from "../../components/ui/Button";

const rules = [
  "영문, 숫자, 특수문자 포함 8자 이상",
  "현재 비밀번호와 다르게 설정",
];

export default function AccountPage() {
  const { email } = getProfile();
  const [current, setCurrent] = useState("");
  const [next, setNext] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSubmit = () => {
    console.log({ current, next, confirm });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-text-strong">계정 및 보안</h1>

      <div className="mt-8">
        <span className="text-sm font-bold text-text-strong">가입 이메일</span>
        <div className="mt-2 flex items-center justify-between gap-3 rounded-lg bg-surface-subtle px-4 py-3">
          <span className="min-w-0 truncate text-sm text-text-default">
            {email}
          </span>
          <span className="shrink-0 rounded-md bg-surface-base px-2 py-1 text-xs text-text-muted">
            기본 계정
          </span>
        </div>
        <p className="mt-2 flex items-center gap-1 text-xs text-text-muted">
          <Info size={13} />
          이메일 주소는 변경할 수 없습니다.
        </p>
      </div>

      <hr className="my-8 border-border-default" />

      <h2 className="text-lg font-bold text-text-strong">비밀번호 변경</h2>

      <div className="mt-5 flex flex-col gap-5">
        <PasswordField
          label="현재 비밀번호"
          placeholder="현재 비밀번호를 입력하세요"
          value={current}
          onChange={(e) => setCurrent(e.target.value)}
        />
        <PasswordField
          label="새 비밀번호"
          placeholder="새 비밀번호를 입력하세요"
          value={next}
          onChange={(e) => setNext(e.target.value)}
        />
        <PasswordField
          label="새 비밀번호 확인"
          placeholder="비밀번호 재입력"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />

        <div className="rounded-lg bg-surface-subtle px-4 py-3">
          <ul className="flex flex-col gap-1.5">
            {rules.map((rule) => (
              <li
                key={rule}
                className="flex items-center gap-2 text-xs text-text-muted"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-text-muted" />
                {rule}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Button
        variant="primary"
        onClick={handleSubmit}
        className="mt-8 w-full py-4"
      >
        비밀번호 변경하기
      </Button>
    </div>
  );
}
