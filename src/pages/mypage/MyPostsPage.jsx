import { Link } from "react-router-dom";
import { Tag } from "lucide-react";
import { getMyPosts } from "../../mocks/posts";
import Button from "../../components/ui/Button";

function UnwrittenCard({ post }) {
  return (
    <div className="flex flex-col items-start gap-4 rounded-2xl bg-surface-subtle p-4 sm:flex-row sm:justify-between sm:gap-6 sm:p-6">
      <div className="min-w-0">
        <p className="text-xs text-text-muted">{post.date} 기록됨</p>
        <h3 className="mt-1 text-lg font-bold text-text-strong">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-text-default">{post.summary}</p>
        <p className="mt-3 flex items-center gap-1 text-xs text-text-muted">
          <Tag size={12} />
          {post.tag}
        </p>
      </div>
      <Link to={`/retrospective/${post.id}`} className="shrink-0">
        <Button variant="secondary" className="px-5 py-3">
          회고록 작성하기
        </Button>
      </Link>
    </div>
  );
}

function WrittenCard({ post }) {
  return (
    <div className="grid grid-cols-1 gap-6 rounded-2xl border border-border-default p-6 md:grid-cols-2">
      <div className="min-w-0 border-border-default md:border-r md:pr-6">
        <p className="text-xs text-text-muted">{post.date} 기록됨</p>
        <h3 className="mt-1 text-lg font-bold text-text-strong">
          {post.title}
        </h3>
        <div className="mt-3 rounded-lg bg-surface-subtle p-4">
          <p className="text-xs text-text-muted">핵심 실패 원인</p>
          <p className="mt-1 text-sm font-medium text-text-default">
            {post.cause}
          </p>
        </div>
      </div>

      <div className="min-w-0">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold tracking-wide text-text-muted">
            RETROSPECTIVE
          </span>
          <span className="rounded-full bg-surface-subtle px-2.5 py-1 text-xs text-text-default">
            {post.status}
          </span>
        </div>
        <h4 className="mt-2 font-bold text-text-strong">
          "{post.retrospectiveTitle}"
        </h4>
        <p className="mt-2 text-xs text-text-muted">실행한 변화</p>
        <p className="mt-1 text-sm text-text-default">{post.change}</p>
        <div className="mt-4 flex items-end justify-between gap-4">
          <div className="min-w-0">
            <p className="text-xs text-text-muted">현재 상태</p>
            <p className="mt-1 text-sm font-bold text-text-strong">
              {post.currentStatus}
            </p>
          </div>
          <Link to={`/retrospective/${post.id}/detail`} className="shrink-0">
            <Button variant="secondary" className="px-4 py-2 text-xs">
              상세보기
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function MyPostsPage() {
  const posts = getMyPosts();

  return (
    <div>
      <h1 className="text-2xl font-bold text-text-strong">작성한 게시글</h1>

      <div className="mt-8 flex flex-col gap-5">
        {posts.map((post) =>
          post.hasRetrospective ? (
            <WrittenCard key={post.id} post={post} />
          ) : (
            <UnwrittenCard key={post.id} post={post} />
          )
        )}
      </div>
    </div>
  );
}
