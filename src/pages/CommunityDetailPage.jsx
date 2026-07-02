import { Link, useParams } from "react-router-dom";
import { Bookmark, Heart, Lightbulb, Share2 } from "lucide-react";
import Avatar from "../components/ui/Avatar";
import Button from "../components/ui/Button";
import TagChip from "../components/ui/TagChip";
import Stat from "../components/ui/Stat";
import { getCommunityPost } from "../mocks/community";

export default function CommunityDetailPage() {
  const { id } = useParams();
  const post = getCommunityPost(id);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-text-muted">
        <Link to="/community" className="hover:text-text-strong">
          커뮤니티
        </Link>
        <span>›</span>
        <span>인사이트 공유</span>
        <span>›</span>
        <span className="font-bold text-text-strong">상세 보기</span>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_20rem]">
        {/* Main article */}
        <article>
          <div className="flex items-center gap-3">
            <TagChip label={post.category} tone="inverse" />
            <span className="text-sm text-text-muted">{post.date}</span>
          </div>

          <h1 className="mt-5 text-3xl font-bold leading-tight text-text-strong">
            {post.title}
          </h1>

          {/* Author + stats */}
          <div className="mt-8 flex items-center justify-between border-b border-border-default pb-8">
            <Link
              to={`/users/${encodeURIComponent(post.author.name)}`}
              className="flex items-center gap-3"
            >
              <Avatar alt={post.author.name} size="md" />
              <div>
                <p className="text-sm font-bold text-text-strong hover:underline">
                  {post.author.name}
                </p>
                <p className="text-xs text-text-muted">{post.author.role}</p>
              </div>
            </Link>

            <div className="flex items-center gap-6 text-center">
              <Stat label="VIEWS" value={post.stats.views} />
              <Stat label="LIKES" value={post.stats.likes} />
              <Stat label="COMMENTS" value={post.stats.comments} />
            </div>
          </div>

          {/* Body */}
          <div className="mt-8 flex flex-col gap-6 text-base leading-8 text-text-default">
            {post.intro.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Strategy highlight box */}
          <div className="mt-8 rounded-2xl bg-surface-subtle p-6 sm:p-8">
            <div className="flex items-center gap-2">
              <Lightbulb size={20} className="text-text-strong" />
              <h2 className="text-lg font-bold text-text-strong">
                {post.strategyTitle}
              </h2>
            </div>
            <ul className="mt-6 flex flex-col gap-5">
              {post.strategies.map((item) => (
                <li key={item.step} className="flex gap-4">
                  <span className="text-sm font-bold text-text-strong">
                    {item.step}.
                  </span>
                  <p className="text-sm leading-relaxed text-text-default">
                    <span className="font-bold text-text-strong">
                      {item.title}:
                    </span>{" "}
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-8 text-base leading-8 text-text-default">
            {post.outro}
          </p>

          {/* Tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="text-sm text-text-muted">
                #{tag}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="mt-8 flex items-center justify-center gap-3 border-y border-border-default py-6">
            <ActionButton icon={Heart}>좋아요 {post.likes}</ActionButton>
            <ActionButton icon={Bookmark}>스크랩</ActionButton>
            <ActionButton icon={Share2}>공유하기</ActionButton>
          </div>

          {/* Comments */}
          <section className="mt-12">
            <h2 className="text-lg font-bold text-text-strong">
              댓글
              <span className="ml-2 text-sm font-normal text-text-muted">
                {post.stats.comments}
              </span>
            </h2>

            <div className="mt-5 rounded-2xl bg-surface-subtle p-5">
              <textarea
                rows={3}
                placeholder="따뜻한 응원의 댓글이나 궁금한 점을 남겨주세요."
                className="w-full resize-none bg-transparent text-sm text-text-default outline-none placeholder:text-text-muted"
              />
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs text-text-muted">
                  글자수 제한 1,000자
                </span>
                <Button variant="primary" className="rounded-lg px-5 py-2.5">
                  댓글 등록
                </Button>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-8">
              {post.comments.map((comment) => (
                <Comment key={comment.id} comment={comment} />
              ))}
            </div>

            <button
              type="button"
              className="mt-8 w-full rounded-xl border border-border-default py-3.5 text-sm font-medium text-text-default transition hover:bg-surface-subtle"
            >
              댓글 더보기 (15개)
            </button>
          </section>
        </article>

        {/* Right sidebar */}
        <aside className="flex flex-col gap-6">
          {/* Author card */}
          <div className="rounded-2xl border border-border-default p-6">
            <p className="text-xs font-medium text-text-muted">작성자 정보</p>
            <div className="mt-4 flex flex-col items-center text-center">
              <Avatar alt={post.author.name} size="lg" />
              <p className="mt-4 text-lg font-bold text-text-strong">
                {post.author.name}
              </p>
              <p className="mt-1 text-sm text-text-muted">{post.author.bio}</p>
            </div>

            <div className="mt-6 grid grid-cols-2 divide-x divide-border-default border-y border-border-default py-4 text-center">
              <div>
                <p className="text-xs text-text-muted">FOLLOWERS</p>
                <p className="mt-1 text-base font-bold text-text-strong">
                  {post.author.followers}
                </p>
              </div>
              <div>
                <p className="text-xs text-text-muted">POSTS</p>
                <p className="mt-1 text-base font-bold text-text-strong">
                  {post.author.posts}
                </p>
              </div>
            </div>

            <Button variant="primary" className="mt-5 w-full rounded-lg">
              팔로우
            </Button>
            <Link to={`/users/${encodeURIComponent(post.author.name)}`}>
              <Button variant="secondary" className="mt-2 w-full rounded-lg">
                프로필 보기
              </Button>
            </Link>
          </div>

          {/* Author other posts */}
          <div className="rounded-2xl border border-border-default p-6">
            <p className="text-sm font-bold text-text-strong">
              작성자의 다른 글
            </p>
            <ul className="mt-4 flex flex-col divide-y divide-border-default">
              {post.authorOtherPosts.map((item) => (
                <li key={item.title} className="py-4 first:pt-0 last:pb-0">
                  <p className="text-sm font-medium leading-snug text-text-strong">
                    {item.title}
                  </p>
                  <p className="mt-1.5 text-xs text-text-muted">
                    {item.date} · 좋아요 {item.likes}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

function ActionButton({ icon: Icon, children }) {
  return (
    <button
      type="button"
      className="flex items-center gap-2 rounded-full border border-border-default px-6 py-3 text-sm font-medium text-text-default transition hover:bg-surface-subtle hover:text-text-strong"
    >
      <Icon size={16} />
      {children}
    </button>
  );
}

function Comment({ comment }) {
  return (
    <div>
      <div className="flex gap-3">
        <Avatar alt={comment.author} size="sm" />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <p className="text-sm font-bold text-text-strong">
              {comment.author}
            </p>
            <span className="text-xs text-text-muted">{comment.date}</span>
          </div>
          <p className="mt-1.5 text-sm leading-6 text-text-default">
            {comment.content}
          </p>
          <div className="mt-2 flex items-center gap-4 text-xs text-text-muted">
            <button type="button" className="hover:text-text-strong">
              좋아요 {comment.likes}
            </button>
            <button type="button" className="hover:text-text-strong">
              답글 달기
            </button>
          </div>
        </div>
      </div>

      {comment.replies?.length > 0 && (
        <div className="mt-5 flex flex-col gap-5 pl-11">
          {comment.replies.map((reply) => (
            <div key={reply.id} className="rounded-xl bg-surface-subtle p-4">
              <div className="flex gap-3">
                <Avatar alt={reply.author} size="sm" />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-bold text-text-strong">
                      {reply.author}
                    </p>
                    {reply.isAuthor && (
                      <span className="rounded bg-surface-inverse px-1.5 py-0.5 text-[10px] font-bold text-text-on-inverse">
                        작성자
                      </span>
                    )}
                    <span className="text-xs text-text-muted">
                      {reply.date}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm leading-6 text-text-default">
                    {reply.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
