import TagChip from "./TagChip";
import Avatar from "./Avatar";

export default function FeedCard({ post, onClick }) {
  const { category, date, title, excerpt, author, views, comments } = post;

  return (
    <button
      onClick={onClick}
      className="flex h-full w-full flex-col rounded-xl border border-border-default bg-surface-base p-5 text-left transition hover:shadow-md"
    >
      <div className="flex items-center justify-between">
        <TagChip label={category} />
        <span className="text-xs text-text-muted">{date}</span>
      </div>

      <h3 className="mt-4 text-base font-bold text-text-strong">{title}</h3>
      <p className="mt-2 line-clamp-3 text-sm text-text-default">{excerpt}</p>

      <div className="mt-auto flex items-center justify-between pt-6">
        <div className="flex items-center gap-2">
          <Avatar alt={author} size="sm" />
          <span className="text-sm text-text-default">{author}</span>
        </div>
        <div className="flex items-center gap-3 text-xs text-text-muted">
          <span>조회 {views}</span>
          <span>댓글 {comments}</span>
        </div>
      </div>
    </button>
  );
}
