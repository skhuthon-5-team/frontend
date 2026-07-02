import { useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { CheckCircle2, XCircle, Loader2 } from "lucide-react";
import { getFeeds } from "../mocks/feeds";
import { inputOnSubtle, textareaOnSubtle } from "../styles/fieldStyles";
import Button from "../components/ui/Button";

const resultOptions = [
  { value: "success", label: "성공 / 재도전 성공", Icon: CheckCircle2 },
  { value: "fail", label: "다시 실패", Icon: XCircle },
  { value: "ongoing", label: "진행 중", Icon: Loader2 },
];

const questions = [
  {
    key: "cause",
    title: "그때의 실패 원인을 지금 다시 보면 어떤가요?",
    description:
      "기록 당시의 생각과 지금의 생각이 달라졌을 수 있습니다. 더 깊은 통찰을 적어주세요.",
    placeholder:
      "예: 단순히 답변 기술의 문제가 아니라, 내가 지향하는 가치관이 해당 기업의 방향성과 근본적으로 달랐음을 깨달았습니다.",
  },
  {
    key: "action",
    title: "그 이후 실제로 무엇을 바꿨나요?",
    description:
      "계획했던 행동을 실행에 옮겼는지, 혹은 다른 대안을 찾았는지 기록하세요.",
    placeholder:
      "예: 모든 협업 경험을 5가지 핵심 가치별로 리스트업했습니다. 또한, 모의 면접을 통해 답변의 논리적 구조를 반복 연습했습니다.",
  },
];

const pageCopy = {
  new: {
    title: "회고 이어쓰기",
    description:
      "상황이 달라졌다면 새로운 회고를 덧붙여 재도전의 과정을 이어가세요.",
  },
  edit: {
    title: "회고록 수정하기",
    description: "이미 작성한 회고의 내용을 다듬습니다.",
  },
  create: {
    title: "회고록 작성하기",
    description: "기록된 실패를 객관적으로 바라보고 성장의 발판으로 만듭니다.",
  },
};

export default function RetrospectivePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const mode = searchParams.get("mode") || "create";
  const copy = pageCopy[mode] || pageCopy.create;

  const feeds = getFeeds();
  const record = feeds.find((feed) => String(feed.id) === id) || feeds[0];

  const [cause, setCause] = useState("");
  const [action, setAction] = useState("");
  const [result, setResult] = useState("");
  const [resultSummary, setResultSummary] = useState("");
  const [advice, setAdvice] = useState("");

  const answers = { cause, action };
  const setters = { cause: setCause, action: setAction };

  const canSubmit = cause.trim() && action.trim() && result && advice.trim();

  const handleSubmit = () => {
    if (!canSubmit) {
      alert("필수 항목을 모두 입력해주세요.");
      return;
    }

    const retrospective = {
      recordId: record.id,
      cause,
      action,
      result,
      resultSummary,
      advice,
    };

    console.log("회고록:", retrospective);
    alert("회고록이 작성되었습니다.");
    navigate(`/feed/${record.id}`);
  };

  return (
    <div>
      <section className="border-b border-border-default bg-surface-subtle">
        <div className="mx-auto max-w-5xl px-4 py-20">
          <h1 className="text-4xl font-bold text-text-strong">{copy.title}</h1>
          <p className="mt-4 text-base text-text-muted">{copy.description}</p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,320px)_1fr]">
          <aside className="flex flex-col gap-6">
            <div>
              <p className="mb-4 text-xs font-bold text-text-muted">
                참조 중인 실패 기록
              </p>

              <div className="rounded-2xl border border-border-default bg-surface-subtle px-6 py-6">
                <p className="text-xs font-medium text-text-muted">
                  {record.date} 작성
                </p>
                <h2 className="mt-2 text-lg font-bold text-text-strong">
                  {record.title}
                </h2>

                <div className="mt-5">
                  <p className="text-xs font-bold text-text-muted">
                    당시 기록한 원인
                  </p>
                  <p className="mt-1 text-sm leading-6 text-text-default">
                    {record.cause}
                  </p>
                </div>

                <div className="mt-5">
                  <p className="text-xs font-bold text-text-muted">
                    당시 세운 계획
                  </p>
                  <p className="mt-1 text-sm leading-6 text-text-default">
                    {record.nextAction}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-surface-inverse px-6 py-6 text-text-on-inverse">
              <p className="text-sm font-bold">💡 회고 팁</p>
              <p className="mt-2 text-xs leading-5 text-text-muted">
                감정보다는 '사실'과 '변화'에 집중하세요. 계획했던 일이 실제로
                어떻게 실행되었는지가 가장 중요합니다.
              </p>
            </div>
          </aside>

          <div className="flex flex-col gap-12">
            {questions.map((question, index) => (
              <div key={question.key} className="flex gap-4">
                <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-surface-subtle text-xs font-bold text-text-default">
                  {index + 1}
                </span>

                <div className="flex-1">
                  <h3 className="text-lg font-bold text-text-strong">
                    {question.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-muted">
                    {question.description}
                  </p>
                  <textarea
                    rows={4}
                    value={answers[question.key]}
                    onChange={(e) => setters[question.key](e.target.value)}
                    placeholder={question.placeholder}
                    className={`mt-4 ${textareaOnSubtle}`}
                  />
                </div>
              </div>
            ))}

            <div className="flex gap-4">
              <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-surface-subtle text-xs font-bold text-text-default">
                3
              </span>

              <div className="flex-1">
                <h3 className="text-lg font-bold text-text-strong">
                  변화의 결과는 어떻게 되었나요?
                </h3>

                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {resultOptions.map(({ value, label, Icon }) => {
                    const active = result === value;
                    return (
                      <button
                        key={value}
                        type="button"
                        onClick={() => setResult(value)}
                        className={`flex flex-col items-center gap-2 rounded-xl border px-4 py-5 text-sm font-bold transition-colors ${
                          active
                            ? "border-text-strong bg-surface-base text-text-strong"
                            : "border-border-default bg-surface-subtle text-text-muted hover:text-text-default"
                        }`}
                      >
                        <Icon size={20} />
                        {label}
                      </button>
                    );
                  })}
                </div>

                <input
                  value={resultSummary}
                  onChange={(e) => setResultSummary(e.target.value)}
                  placeholder="구체적인 성과 한 줄 (예: B사 최종 합격 및 입사)"
                  className={`mt-3 ${inputOnSubtle}`}
                />
              </div>
            </div>

            <div className="flex gap-4">
              <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-surface-subtle text-xs font-bold text-text-default">
                4
              </span>

              <div className="flex-1">
                <h3 className="text-lg font-bold text-text-strong">
                  비슷한 실패를 겪는 사람에게 한마디
                </h3>
                <p className="mt-2 text-sm text-text-muted">
                  당신의 경험은 누군가에게 가장 현실적인 조언이 됩니다.
                </p>
                <textarea
                  rows={4}
                  value={advice}
                  onChange={(e) => setAdvice(e.target.value)}
                  placeholder="예: 면접 탈락이 당신의 실력 부족을 의미하진 않습니다. 단지 그 회사와 결이 맞지 않았을 뿐이니, 자신을 깎아내리지 마세요."
                  className={`mt-4 ${textareaOnSubtle}`}
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 border-t border-border-default pt-8">
              <Button
                variant="secondary"
                className="rounded-xl px-8 py-3.5"
                onClick={() => alert("임시 저장되었습니다.")}
              >
                임시 저장
              </Button>

              <Button
                variant="primary"
                className="rounded-xl px-8 py-3.5"
                disabled={!canSubmit}
                onClick={handleSubmit}
              >
                작성 완료
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
