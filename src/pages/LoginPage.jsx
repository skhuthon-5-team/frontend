import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import FormField from "../components/ui/FormField";
import Button from "../components/ui/Button";

const inputClass =
  "w-full rounded-lg bg-surface-subtle px-4 py-3 text-sm text-text-default placeholder:text-text-muted focus:outline-none";

export default function LoginPage() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    login({ email });
    navigate("/");
  };

  const handleGoogleLogin = () => {};

  return (
    <div className="mx-auto max-w-md px-4 py-20">
      <div className="rounded-2xl border border-border-default bg-surface-base p-8">
        <h1 className="text-center text-2xl font-bold text-text-strong">
          반갑습니다!
        </h1>
        <p className="mt-4 text-center text-sm leading-relaxed text-text-muted">
          실패를 기록하고 AI와 함께 성장 전략을 세워보세요.
          <br />
          계정에 로그인하여 여정을 이어가세요.
        </p>

        <div className="mt-8 flex flex-col gap-5">
          <FormField
            label="이메일 주소"
            type="email"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="flex flex-col gap-2">
            <span className="flex items-center justify-between">
              <span className="text-sm font-bold text-text-strong">비밀번호</span>
              <Link to="/login" className="text-xs text-text-muted underline">
                비밀번호를 잊으셨나요?
              </Link>
            </span>
            <input
              type="password"
              placeholder="비밀번호를 입력하세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={inputClass}
            />
          </label>

          <Button variant="primary" className="w-full" onClick={handleLogin}>
            로그인하기 →
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
          onClick={handleGoogleLogin}
        >
          구글 계정으로 로그인
        </Button>

        <p className="mt-8 text-center text-sm text-text-muted">
          아직 계정이 없으신가요?{" "}
          <Link to="/signup" className="font-bold text-text-strong">
            무료 회원가입
          </Link>
        </p>
      </div>
    </div>
  );
}
