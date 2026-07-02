import { Link } from "react-router-dom";
import { Download, Sparkles, ArrowRight } from "lucide-react";
import { getTimelineStats, getTimelineItems } from "../../mocks/timeline";
import Button from "../../components/ui/Button";

function AiReport({ report }) {
  return (
    <div className="mt-4 overflow-hidden rounded-xl border border-border-default">
      <div className="flex items-center justify-between bg-surface-inverse px-4 py-3">
        <span className="flex items-center gap-1.5 text-sm font-bold text-text-on-inverse">
          <Sparkles size={15} />
          AI 성장 변화 요약 리포트
        </span>
        <span className="text-xs text-text-muted">
          과거의 실패 vs 현재의 성공
        </span>
      </div>

      <div className="grid grid-cols-1 gap-6 p-5 md:grid-cols-2">
        <div className="min-w-0">
          <p className="text-xs font-bold text-text-muted">
            {report.before.label}
          </p>
          <ul className="mt-2 flex flex-col gap-1.5">
            {report.before.points.map((p) => (
              <li key={p} className="text-sm text-text-muted">
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="min-w-0">
          <p className="text-xs font-bold text-text-strong">
            {report.after.label}
          </p>
          <ul className="mt-2 flex flex-col gap-1.5">
            {report.after.points.map((p) => (
              <li key={p} className="text-sm text-text-default">
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="border-t border-border-default px-5 py-4 text-xs text-text-muted">
        {report.quote}
      </p>
    </div>
  );
}

function TimelineItem({ item, isLast }) {
  return (
    <div className="flex gap-6">
      <div className="flex w-16 shrink-0 flex-col items-end">
        <span className="text-sm font-bold text-text-strong">{item.date}</span>
      </div>

      <div className="relative flex flex-col items-center">
        <span className="z-10 h-3 w-3 rounded-full bg-surface-inverse" />
        {!isLast && <span className="w-px flex-1 bg-border-default" />}
      </div>

      <div className="min-w-0 flex-1 pb-10">
        {item.type === "success" ? (
          <div className="rounded-2xl border border-border-default p-6">
            <div className="flex items-center justify-between">
              <span className="rounded-md bg-surface-inverse px-2.5 py-1 text-xs font-bold text-text-on-inverse">
                {item.badge}
              </span>
              <span className="text-xs text-text-muted">
                최종 업데이트: {item.updatedAt}
              </span>
            </div>
            <h3 className="mt-3 text-lg font-bold text-text-strong">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-text-default">{item.summary}</p>
            <AiReport report={item.report} />
          </div>
        ) : (
          <div className="rounded-2xl bg-surface-subtle p-6">
            <div className="flex items-center justify-between">
              <span className="rounded-md bg-surface-base px-2.5 py-1 text-xs text-text-default">
                {item.badge}
              </span>
              <span className="text-xs text-text-muted">{item.updatedAt}</span>
            </div>
            <h3 className="mt-3 text-lg font-bold text-text-strong">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-text-default">{item.summary}</p>
            <Link
              to={`/retrospective/${item.id}`}
              className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-text-strong"
            >
              회고록 상세 보기
              <ArrowRight size={14} />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default function TimelinePage() {
  const { stats, statusCard } = getTimelineStats();
  const items = getTimelineItems();

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-text-strong">
          나의 성장 타임라인
        </h1>
        <Button
          variant="primary"
          className="flex items-center gap-1.5 px-4 py-2 text-sm"
        >
          <Download size={15} />
          성장 리포트 PDF
        </Button>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl bg-surface-subtle p-5">
            <p className="text-xs text-text-muted">{s.label}</p>
            <p className="mt-2 text-2xl font-bold text-text-strong">
              {s.value}
              <span className="ml-1 text-sm font-medium text-text-muted">
                {s.unit}
              </span>
            </p>
          </div>
        ))}
        <div className="rounded-xl bg-surface-inverse p-5">
          <p className="text-xs text-text-muted">{statusCard.label}</p>
          <p className="mt-2 text-base font-bold text-text-on-inverse">
            {statusCard.value}
          </p>
          <p className="mt-1 text-xs text-text-muted">{statusCard.desc}</p>
        </div>
      </div>

      <div className="mt-10">
        {items.map((item, i) => (
          <TimelineItem
            key={item.id}
            item={item}
            isLast={i === items.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
