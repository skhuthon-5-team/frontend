import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Share2,
  CheckCircle2,
  XCircle,
  Loader2,
  Link2,
  List,
  PlusCircle,
} from "lucide-react";
import { getRetrospectiveRecord } from "../mocks/retrospective";
import Button from "../components/ui/Button";

const answerCardClass =
  "rounded-2xl border border-border-default bg-surface-subtle px-6 py-6 text-sm leading-7 text-text-default";

const resultMeta = {
  "재도전 성공": { Icon: CheckCircle2, summaryLabel: "최종 성과" },
  성공: { Icon: CheckCircle2, summaryLabel: "최종 성과" },
  "다시 실패": { Icon: XCircle, summaryLabel: "이번 회차 결과" },
  "진행 중": { Icon: Loader2, summaryLabel: "현재 상태" },
};

const isSuccess = (result) => result === "재도전 성공" || result === "성공";

export default function RetrospectiveDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const record = getRetrospectiveRecord(id);
  const { linkedRecord, retrospectives } = record;

  // 기본으로 가장 최근 회차를 선택. id가 바뀌면 최신 회차로 초기화
  const [selectedIndex, setSelectedIndex] = useState(retrospectives.length - 1);
  const [prevId, setPrevId] = useState(id);
  if (id !== prevId) {
    setPrevId(id);
    setSelectedIndex(retrospectives.length - 1);
  }

  const entry = retrospectives[selectedIndex];
  const latest = retrospectives[retrospectives.length - 1];
  const meta = resultMeta[entry.result] || resultMeta["진행 중"];
  const ResultIcon = meta.Icon;

  // 아직 성공하지 않은 여정에서만 이어쓰기 가능
  const canContinue = !isSuccess(latest.result);

  return (
    <div>
      <section className="border-b border-border-default bg-surface-subtle">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <nav className="text-xs font-bold text-text-muted">
            <Link to="/mypage" className="hover:text-text-default">
              마이페이지
            </Link>
            <span className="mx-2">/</span>
            <Link to="/mypage/posts" className="hover:text-text-default">
              나의 회고록
            </Link>
            <span className="mx-2">/</span>
            <span className="text-text-default">상세 보기</span>
          </nav>

          <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5 rounded-full bg-surface-inverse px-3 py-1 text-xs font-bold text-text-on-inverse">
                  <ResultIcon size={13} />
                  {latest.result}
                </span>
                <span className="text-xs font-medium text-text-muted">
                  총 {retrospectives.length}회 회고 · 최근{" "}
                  {latest.publishedDate} 발행
                </span>
              </div>

              <h1 className="mt-4 text-4xl font-bold text-text-strong">
                {record.title}
              </h1>
              <p className="mt-3 text-base text-text-muted">
                {record.subtitle}
              </p>
            </div>

            <div className="flex flex-none flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => alert("링크가 복사되었습니다.")}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-border-default bg-surface-base text-text-default transition-colors hover:bg-surface-subtle"
                aria-label="공유하기"
              >
                <Share2 size={18} />
              </button>

              <Button
                variant="secondary"
                className="rounded-xl px-6 py-3"
                onClick={() =>
                  navigate(
                    `/retrospective/${record.recordId}?mode=edit&round=${entry.round}`
                  )
                }
              >
                수정하기
              </Button>

              {canContinue && (
                <Button
                  variant="primary"
                  className="rounded-xl px-6 py-3"
                  onClick={() =>
                    navigate(`/retrospective/${record.recordId}?mode=new`)
                  }
                >
                  <PlusCircle size={18} />
                  회고 이어쓰기
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,320px)_1fr]">
          <aside className="flex flex-col gap-8">
            <div>
              <p className="mb-4 text-xs font-bold text-text-muted">
                연결된 실패 기록
              </p>

              <div className="rounded-2xl border border-border-default bg-surface-base px-6 py-6 shadow-sm">
                <div className="flex items-start justify-between">
                  <p className="text-xs font-medium text-text-muted">
                    {linkedRecord.date} 작성
                  </p>
                  <Link2 className="h-4 w-4 text-text-muted" />
                </div>

                <h2 className="mt-2 text-lg font-bold text-text-strong">
                  {linkedRecord.title}
                </h2>

                <div className="mt-5 rounded-xl bg-surface-subtle px-4 py-4">
                  <p className="text-xs font-bold text-text-muted">
                    {linkedRecord.causeLabel}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-text-default">
                    {linkedRecord.cause}
                  </p>
                </div>

                <Button
                  variant="secondary"
                  className="mt-4 w-full rounded-xl py-3"
                  onClick={() => navigate(`/feed/${linkedRecord.recordId}`)}
                >
                  원본 기록 보기
                </Button>
              </div>
            </div>

            <div>
              <p className="mb-4 text-xs font-bold text-text-muted">
                회고 히스토리
              </p>

              <ol className="flex flex-col gap-2">
                {retrospectives.map((item, index) => {
                  const active = index === selectedIndex;
                  const ItemIcon = (
                    resultMeta[item.result] || resultMeta["진행 중"]
                  ).Icon;
                  return (
                    <li key={item.round}>
                      <button
                        type="button"
                        onClick={() => setSelectedIndex(index)}
                        className={`w-full rounded-xl border px-4 py-3 text-left transition-colors ${
                          active
                            ? "border-text-strong bg-surface-base"
                            : "border-border-default bg-surface-subtle hover:bg-surface-base"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span
                            className={`text-sm font-bold ${
                              active ? "text-text-strong" : "text-text-default"
                            }`}
                          >
                            {item.round}차 회고
                          </span>
                          <span className="flex items-center gap-1 text-xs font-medium text-text-muted">
                            <ItemIcon size={12} />
                            {item.result}
                          </span>
                        </div>
                        <p className="mt-1 text-xs text-text-muted">
                          {item.publishedDate}
                        </p>
                      </button>
                    </li>
                  );
                })}
              </ol>
            </div>
          </aside>

          <div className="flex flex-col gap-12">
            <div className="flex items-center justify-between border-b border-border-default pb-4">
              <p className="text-sm font-bold text-text-strong">
                {entry.round}차 회고
              </p>
              <p className="text-xs text-text-muted">
                {entry.publishedDate} 발행
              </p>
            </div>

            <section>
              <p className="text-xs font-bold tracking-wide text-text-muted">
                QUESTION 01
              </p>
              <h3 className="mt-2 text-xl font-bold text-text-strong">
                그때의 실패 원인을 지금 다시 보면 어떤가요?
              </h3>
              <div className={`mt-4 ${answerCardClass}`}>{entry.cause}</div>
            </section>

            <section>
              <p className="text-xs font-bold tracking-wide text-text-muted">
                QUESTION 02
              </p>
              <h3 className="mt-2 text-xl font-bold text-text-strong">
                그 이후 실제로 무엇을 바꿨나요?
              </h3>
              <div className={`mt-4 ${answerCardClass}`}>{entry.action}</div>
            </section>

            <section>
              <p className="text-xs font-bold tracking-wide text-text-muted">
                QUESTION 03
              </p>
              <h3 className="mt-2 text-xl font-bold text-text-strong">
                변화의 결과는 어떻게 되었나요?
              </h3>

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div
                  className={`flex flex-col items-center justify-center gap-2 rounded-2xl border px-6 py-8 text-sm font-bold ${
                    isSuccess(entry.result)
                      ? "border-text-strong bg-surface-base text-text-strong"
                      : "border-border-default bg-surface-subtle text-text-default"
                  }`}
                >
                  <ResultIcon size={20} />
                  {entry.result}
                </div>

                <div className="flex flex-col justify-center rounded-2xl bg-surface-inverse px-6 py-8 text-text-on-inverse">
                  <p className="text-xs text-text-muted">{meta.summaryLabel}</p>
                  <p className="mt-1 text-lg font-bold">
                    {entry.resultSummary}
                  </p>
                </div>
              </div>
            </section>

            <section>
              <p className="text-xs font-bold tracking-wide text-text-muted">
                ADVICE
              </p>
              <h3 className="mt-2 text-xl font-bold text-text-strong">
                비슷한 실패를 겪는 사람에게 한마디
              </h3>
              <div className={`mt-4 ${answerCardClass}`}>{entry.advice}</div>
            </section>

            <div className="flex flex-col gap-4 border-t border-border-default pt-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-text-muted">
                <span className="font-bold text-text-strong">
                  {record.cheeredCount}명
                </span>
                의 유저가 이 회고에서 용기를 얻었습니다.
              </p>

              <Button
                variant="primary"
                className="rounded-xl px-6 py-3.5"
                onClick={() => navigate("/mypage/posts")}
              >
                <List size={18} />
                목록으로 돌아가기
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
