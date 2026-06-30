import { useNavigate } from "react-router-dom";
import { Check, PenLine, Search } from "lucide-react";
import Button from "../components/ui/Button";

export default function SignupCompletePage() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto max-w-xl px-4 py-20 text-center">
      <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-surface-inverse text-text-on-inverse">
        <Check size={28} />
      </span>

      <h1 className="mt-8 text-3xl font-bold leading-snug text-text-strong">
        반가워요!
        <br />
        가입이 완료되었습니다.
      </h1>
      <p className="mt-5 text-sm leading-relaxed text-text-muted">
        이제 실패로그의 모든 기능을 이용하실 수 있습니다.
        <br />
        당신의 소중한 실패 경험을 기록하고, 더 큰 성장을 시작해보세요.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => navigate("/record")}
          className="flex flex-col items-center rounded-xl bg-surface-subtle p-5 text-center"
        >
          <span className="flex size-9 items-center justify-center rounded-lg bg-surface-base text-text-strong">
            <PenLine size={18} />
          </span>
          <p className="mt-4 text-sm font-bold text-text-strong">첫 실패 기록하기</p>
          <p className="mt-1 text-xs text-text-muted">오늘의 작은 실수를 기록으로 남기세요.</p>
        </button>

        <button
          type="button"
          onClick={() => navigate("/")}
          className="flex flex-col items-center rounded-xl bg-surface-subtle p-5 text-center"
        >
          <span className="flex size-9 items-center justify-center rounded-lg bg-surface-base text-text-strong">
            <Search size={18} />
          </span>
          <p className="mt-4 text-sm font-bold text-text-strong">피드 둘러보기</p>
          <p className="mt-1 text-xs text-text-muted">다른 사람들의 회고를 읽어보세요.</p>
        </button>
      </div>

      <div className="mt-8 flex flex-col gap-3">
        <Button variant="primary" className="w-full" onClick={() => navigate("/")}>
          시작하기
        </Button>
        <Button
          variant="secondary"
          className="w-full"
          onClick={() => navigate("/mypage")}
        >
          프로필 설정하러 가기
        </Button>
      </div>
    </div>
  );
}
