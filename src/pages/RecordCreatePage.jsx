import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import { ChevronDown } from "lucide-react";

const categories = ["창업", "자기계발", "이직", "인간관계", "공부"];

const inputClass =
  "w-full rounded-xl border border-border-default bg-surface-base px-4 py-4 text-sm text-text-default placeholder:text-text-muted outline-none transition-colors focus:border-text-strong";

const textareaClass =
  "w-full resize-none rounded-xl border border-border-default bg-surface-base px-4 py-4 text-sm leading-6 text-text-default placeholder:text-text-muted outline-none transition-colors focus:border-text-strong";

export default function RecordCreatePage() {
  const navigate = useNavigate();

  const [category, setCategory] = useState("");
  const [situation, setSituation] = useState("");
  const [choice, setChoice] = useState("");
  const [cause, setCause] = useState("");
  const [nextAction, setNextAction] = useState("");
  const [isPublic, setIsPublic] = useState(false);

  const canSubmit =
    category &&
    situation.trim() &&
    choice.trim() &&
    cause.trim() &&
    nextAction.trim();

  const handleSubmit = () => {
    if (!canSubmit) {
      alert("필수 항목을 모두 입력해주세요.");
      return;
    }

    const record = {
      category,
      situation,
      choice,
      cause,
      nextAction,
      isPublic,
    };

    console.log("실패 기록:", record);
    alert("실패 기록이 저장되었습니다.");

    navigate("/feed/1");
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-24">
      <section>
        <h1 className="text-3xl font-bold text-text-strong">실패 기록하기</h1>
        <p className="mt-4 text-base text-text-muted">
          자유로운 서술보다 구조화된 기록이 성장에 더 큰 도움이 됩니다.
        </p>
      </section>

      <section className="mt-12 flex flex-col gap-10">
        <label className="block">
          <span className="mb-2 block text-sm font-bold text-text-strong">
            분야 선택
          </span>

          <div className="relative">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className={`${inputClass} appearance-none ${
                category ? "text-text-default" : "text-text-muted"
              }`}
            >
              <option value="">분야를 선택해주세요</option>
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            <ChevronDown className="pointer-events-none absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2  text-text-muted" />
          </div>
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-bold text-text-strong">
            실패 상황
          </span>
          <input
            value={situation}
            onChange={(e) => setSituation(e.target.value)}
            placeholder="어떤 상황이었나요? (예: OO기업 최종 면접 탈락)"
            className={inputClass}
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-bold text-text-strong">
            당시 나의 선택
          </span>
          <textarea
            rows={4}
            value={choice}
            onChange={(e) => setChoice(e.target.value)}
            placeholder="그 상황에서 어떤 결정을 내렸나요?"
            className={textareaClass}
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-bold text-text-strong">
            내가 생각하는 실패 원인
          </span>
          <textarea
            rows={4}
            value={cause}
            onChange={(e) => setCause(e.target.value)}
            placeholder="왜 그런 결과가 나왔다고 생각하시나요?"
            className={textareaClass}
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-bold text-text-strong">
            다음엔 무엇을 바꿀까
          </span>
          <textarea
            rows={4}
            value={nextAction}
            onChange={(e) => setNextAction(e.target.value)}
            placeholder="다시 그 상황이 온다면 어떻게 행동하시겠습니까?"
            className={textareaClass}
          />
        </label>

        <div className="border-t border-border-default pt-8">
          <div className="rounded-2xl border border-border-default bg-surface-subtle px-5 py-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-bold text-text-strong">공개 여부</p>
                <p className="mt-1 text-xs text-text-muted">
                  공개하면 실패 피드에 노출되고, 다른 사용자가 응원할 수 있습니다.
                </p>
              </div>

              <div className="grid w-56 grid-cols-2 gap-2 rounded-xl bg-surface-base p-1.5">
                <button
                  type="button"
                  onClick={() => setIsPublic(false)}
                  className={`h-11 rounded-lg text-sm font-bold transition-colors ${
                    !isPublic
                      ? "bg-surface-inverse text-text-on-inverse"
                      : "text-text-muted hover:bg-surface-subtle hover:text-text-default"
                  }`}
                >
                  비공개
                </button>

                <button
                  type="button"
                  onClick={() => setIsPublic(true)}
                  className={`h-11 rounded-lg text-sm font-bold transition-colors ${
                    isPublic
                      ? "bg-surface-inverse text-text-on-inverse"
                      : "text-text-muted hover:bg-surface-subtle hover:text-text-default"
                  }`}
                >
                  공개
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-end gap-3">
            <Button
              variant="secondary"
              className="rounded-xl px-8 py-4"
              onClick={() => navigate(-1)}
            >
              취소
            </Button>

            <Button
              variant="primary"
              className="rounded-xl px-10 py-4"
              disabled={!canSubmit}
              onClick={handleSubmit}
            >
              분석 및 제출하기
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
