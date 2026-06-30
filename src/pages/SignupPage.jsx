import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import FormField from "../components/ui/FormField";
import PasswordField from "../components/ui/PasswordField";
import Button from "../components/ui/Button";

const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export default function SignupPage() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const rules = [
    { label: "8자 이상 입력", met: password.length >= 8 },
    { label: "비밀번호 일치", met: confirm.length > 0 && password === confirm },
  ];

  const canSubmit =
    isValidEmail(email) &&
    nickname.trim().length > 0 &&
    rules.every((rule) => rule.met);

  const handleSubmit = () => {
    if (!canSubmit) return;
    login({ email, nickname });
    navigate("/signup/complete");
  };

  const handleGoogleSignup = () => {};

  return (
    <div className="mx-auto max-w-md px-4 py-20">
      <div className="rounded-2xl border border-border-default bg-surface-base p-8">
        <h1 className="text-center text-2xl font-bold text-text-strong">
          새로운 시작
        </h1>
        <p className="mt-4 text-center text-sm leading-relaxed text-text-muted">
          실패를 자산으로 만드는 커뮤니티에 합류하세요.
          <br />
          당신의 도전과 회고를 응원합니다.
        </p>

        <div className="mt-8 flex flex-col gap-5">
          <FormField
            label="이메일 주소"
            type="email"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormField
            label="닉네임"
            placeholder="활동할 이름을 입력해주세요"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <PasswordField
            label="비밀번호"
            placeholder="8자 이상 입력해주세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <PasswordField
            label="비밀번호 재입력"
            placeholder="비밀번호를 다시 한번 입력해주세요"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />

          <div className="rounded-lg bg-surface-subtle px-4 py-3">
            <ul className="flex flex-col gap-1.5">
              {rules.map((rule) => (
                <li
                  key={rule.label}
                  className={`flex items-center gap-2 text-xs ${
                    rule.met ? "text-text-strong" : "text-text-muted"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      rule.met ? "bg-text-strong" : "bg-text-muted"
                    }`}
                  />
                  {rule.label}
                </li>
              ))}
            </ul>
          </div>

          <Button
            variant="primary"
            className="w-full"
            onClick={handleSubmit}
            disabled={!canSubmit}
          >
            회원가입 완료 ✓
          </Button>
        </div>

        <div className="my-6 flex items-center gap-4">
          <span className="h-px flex-1 bg-border-default" />
          <span className="text-xs text-text-muted">OR</span>
          <span className="h-px flex-1 bg-border-default" />
        </div>

        <Button
          variant="secondary"
          className="w-full"
          onClick={handleGoogleSignup}
        >
          G 구글 계정으로 시작하기
        </Button>

        <p className="mt-8 text-center text-sm text-text-muted">
          이미 계정이 있으신가요?{" "}
          <Link to="/login" className="font-bold text-text-strong">
            로그인하기
          </Link>
        </p>
      </div>
    </div>
  );
}
