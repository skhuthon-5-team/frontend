import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Heart, Sparkles } from "lucide-react";
import { getFeeds, getFeedAiAnalysis, getFeedComments } from "../mocks/feeds";
import Avatar from "../components/ui/Avatar";
import Button from "../components/ui/Button";

export default function FeedDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const feeds = getFeeds();
  const post = feeds.find((feed) => String(feed.id) === id) || feeds[0];

  const aiAnalysis = getFeedAiAnalysis();
  const comments = getFeedComments();

  const relatedFeeds = feeds.filter((feed) => feed.id !== post.id).slice(0, 3);

  return (
    <div className="mx-auto max-w-4xl px-4 py-14">
      <div className="mb-8 flex items-center gap-3 text-sm">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 font-bold text-text-muted hover:text-text-strong"
        >
          <ArrowLeft size={16} />
          피드로 돌아가기
        </button>
        <span className="text-border-default">|</span>
        <span className="text-text-muted">{post.category}</span>
      </div>

      <article>
        <span className="text-xs text-text-muted">{post.date}</span>

        <h1 className="mt-3 max-w-3xl text-3xl font-bold leading-tight text-text-strong">
          {post.title}
        </h1>

        <div className="mt-8 flex items-center justify-between border-b border-border-default pb-8">
          <div className="flex items-center gap-3">
            <Avatar alt={post.author} size="md" />
            <div>
              <p className="text-sm font-bold text-text-strong">
                {post.author}
              </p>
              <p className="text-xs text-text-muted">
                실패 기록 {post.authorRecordCount}회 · 응원 {post.authorCheers}
              </p>
            </div>
          </div>

          <Button variant="secondary" shape="pill" className="px-5 py-2.5">
            <Heart size={16} />
            응원하기 {post.cheers}
          </Button>
        </div>

        <ContentSection label="01. 실패 상황" content={post.situation} />
        <ContentSection label="02. 당시 나의 선택" content={post.choice} />
        <ContentSection
          label="03. 내가 생각하는 실패 원인"
          content={post.cause}
        />
        <ContentSection
          label="04. 다음엔 무엇을 바꿀까"
          content={post.nextAction}
        />

        <section className="mt-10 rounded-2xl bg-surface-subtle p-6">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-inverse text-text-on-inverse">
              <Sparkles size={16} />
            </span>
            <h2 className="text-lg font-bold text-text-strong">AI 실패 분석</h2>
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

        <section className="mt-12">
          <h2 className="text-lg font-bold text-text-strong">
            응원의 한마디
            <span className="ml-2 text-sm font-normal text-text-muted">
              {post.comments}
            </span>
          </h2>

          <div className="mt-5 rounded-2xl border border-border-default bg-surface-base p-4 transition-colors focus-within:border-text-strong focus-within:bg-surface-subtle focus-within:shadow-sm">
            <input
              placeholder="실패를 딛고 일어서는 이에게 따뜻한 응원을 보내주세요."
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
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-bold text-text-strong">
                      {comment.author}
                    </p>
                    <span className="text-xs text-text-muted">
                      {comment.date}
                    </span>
                  </div>
                  <p className="mt-1 text-sm leading-6 text-text-default">
                    {comment.content}
                  </p>
                  <div className="mt-2 flex items-center gap-4 text-xs text-text-muted">
                    <button type="button" className="hover:text-text-strong">
                      좋아요 {comment.likes}
                    </button>
                    <button type="button" className="hover:text-text-strong">
                      답글 쓰기
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="mt-6 w-full rounded-xl border border-border-default py-3 text-sm font-bold text-text-muted hover:bg-surface-subtle hover:text-text-strong"
          >
            댓글 더보기 (1/3)
          </button>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-bold text-text-strong">
            비슷한 실패를 극복한 이야기
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {relatedFeeds.map((feed) => (
              <Link
                key={feed.id}
                to={`/feed/${feed.id}`}
                className="rounded-2xl border border-border-default bg-surface-base p-5 transition hover:bg-surface-subtle"
              >
                <p className="text-xs font-bold uppercase tracking-wider text-text-muted">
                  {feed.category}
                </p>
                <h3 className="mt-3 line-clamp-2 text-sm font-bold leading-6 text-text-strong">
                  {feed.title}
                </h3>
                <div className="mt-4 flex items-center gap-2">
                  <Avatar alt={feed.author} size="sm" />
                  <span className="text-xs text-text-muted">{feed.author}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <p className="text-xs font-bold tracking-wider text-text-muted">
      {children}
    </p>
  );
}

function ContentSection({ label, content }) {
  return (
    <section className="border-b border-border-default py-10">
      <SectionLabel>{label}</SectionLabel>
      <p className="mt-4 text-base leading-8 text-text-default">{content}</p>
    </section>
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
