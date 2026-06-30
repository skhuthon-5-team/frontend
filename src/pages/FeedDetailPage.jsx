import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Eye, MessageCircle, Sparkles } from "lucide-react";
import { getFeeds } from "../mocks/feeds";
import Avatar from "../components/ui/Avatar";
import Button from "../components/ui/Button";
import TagChip from "../components/ui/TagChip";

const aiAnalysis = {
  cause:
    "이번 실패의 핵심 원인은 역량 부족이라기보다, 준비 과정에서 우선순위와 판단 기준이 충분히 정리되지 않았던 점으로 보입니다.",
  lesson:
    "중요한 선택을 할 때는 감정이나 압박감에 휩쓸리기보다, 목표와 기준을 먼저 세우는 과정이 필요합니다.",
  strategy:
    "다음 도전에서는 바로 실행하기보다 작은 단위로 먼저 검증하고, 중간 점검 기준을 세워 진행하는 방식이 좋습니다.",
};

const comments = [
  {
    id: 1,
    author: "꾸준한기록러",
    content:
      "저도 비슷한 경험이 있었어요. 이렇게 정리해두면 다음 선택이 훨씬 명확해질 것 같아용!",
  },
  {
    id: 2,
    author: "성장메이트",
    content:
      "실패를 숨기지 않고 기록했다는 점이 멋져요. 다음 도전은 더 단단해질 거예요!!!",
  },
];

export default function FeedDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const feeds = getFeeds();
  const post = feeds.find((feed) => String(feed.id) === id) || feeds[0];

  const relatedFeeds = feeds
    .filter((feed) => feed.id !== post.id)
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-4xl px-4 py-14">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="mb-8 flex items-center gap-2 text-sm font-bold text-text-muted hover:text-text-strong"
      >
        <ArrowLeft size={16} />
        목록으로 돌아가기
      </button>

      <article>
        <div className="flex items-center gap-2">
          <TagChip label={post.category} tone="inverse" />
          <span className="text-xs text-text-muted">{post.date}</span>
        </div>

        <h1 className="mt-5 max-w-3xl text-3xl font-bold leading-tight text-text-strong">
          {post.title}
        </h1>

        <div className="mt-6 flex items-center justify-between border-b border-border-default pb-8">
          <div className="flex items-center gap-3">
            <Avatar alt={post.author} size="md" />
            <div>
              <p className="text-sm font-bold text-text-strong">
                {post.author}
              </p>
              <p className="text-xs text-text-muted">실패를 기록한 사람</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs text-text-muted">
            <span className="flex items-center gap-1">
              <Eye size={14} />
              {post.views}
            </span>
            <span className="flex items-center gap-1">
              <MessageCircle size={14} />
              {post.comments}
            </span>
          </div>
        </div>

        <section className="py-10">
          <p className="text-base leading-8 text-text-default">
            {post.excerpt}
          </p>

          <p className="mt-6 text-base leading-8 text-text-default">
            당시에는 결과가 좋지 않았다는 사실에만 집중했지만, 시간이 지나고
            돌아보니 실패의 원인은 단순히 운이 나빴기 때문만은 아니었습니다.
            준비 과정에서 놓친 부분이 있었고, 선택의 기준도 충분히 명확하지
            않았습니다.
          </p>

          <p className="mt-6 text-base leading-8 text-text-default">
            이 기록은 같은 실수를 반복하지 않기 위해 남기는 정리입니다. 실패를
            감정으로만 남기지 않고, 다음 도전을 위한 기준으로 바꾸고자 합니다.
          </p>
        </section>

        <section className="rounded-2xl bg-surface-subtle p-6">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-inverse text-text-on-inverse">
              <Sparkles size={16} />
            </span>
            <h2 className="text-lg font-bold text-text-strong">
              AI 실패 분석
            </h2>
          </div>

          <div className="mt-5 flex flex-col gap-4">
            <AnalysisCard
              title="AI가 분석한 실패 원인"
              content={aiAnalysis.cause}
            />
            <AnalysisCard
              title="이번 실패에서 얻은 교훈"
              content={aiAnalysis.lesson}
            />
            <AnalysisCard
              title="다음 도전 전략"
              content={aiAnalysis.strategy}
            />
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-bold text-text-strong">
            응원의 한마디
            <span className="ml-2 text-sm font-normal text-text-muted">
              {comments.length}개
            </span>
          </h2>

          <div className="mt-5 rounded-2xl border border-border-default bg-surface-base p-4 transition-colors focus-within:border-text-strong focus-within:bg-surface-subtle focus-within:shadow-sm">
            <input
              placeholder="응원이나 조언을 남겨보세요."
              className="w-full bg-transparent text-sm text-text-default outline-none placeholder:text-text-muted"
            />

            <div className="mt-3 flex justify-end">
              <button
                type="button"
                className="rounded-lg bg-surface-inverse px-4 py-2 text-xs font-bold text-text-on-inverse"
              >
                등록하기
              </button>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-5">
            {comments.map((comment) => (
              <div key={comment.id} className="flex gap-3">
                <Avatar alt={comment.author} size="sm" />
                <div>
                  <p className="text-sm font-bold text-text-strong">
                    {comment.author}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-text-default">
                    {comment.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-bold text-text-strong">
            비슷한 실패를 겪은 사람들
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {relatedFeeds.map((feed) => (
              <Link
                key={feed.id}
                to={`/feed/${feed.id}`}
                className="rounded-2xl border border-border-default bg-surface-base p-5 transition hover:bg-surface-subtle"
              >
                <TagChip label={feed.category} />
                <h3 className="mt-4 text-sm font-bold leading-6 text-text-strong">
                  {feed.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-xs leading-5 text-text-muted">
                  {feed.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <div className="mt-12 flex justify-center">
          <Button
            variant="primary"
            className="px-8 py-4"
            onClick={() => navigate(`/retrospective/${post.id}`)}
          >
            회고 작성하러 가기
          </Button>
        </div>
      </article>
    </div>
  );
}

function AnalysisCard({ title, content }) {
  return (
    <div className="rounded-xl bg-surface-base p-5">
      <p className="text-sm font-bold text-text-strong">{title}</p>
      <p className="mt-2 text-sm leading-6 text-text-default">{content}</p>
    </div>
  );
}