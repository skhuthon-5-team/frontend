import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  BadgeCheck,
  Handshake,
  Heart,
  Mail,
  MessageCircle,
  MoreHorizontal,
  PenLine,
  Plus,
  Trophy,
  Eye,
} from "lucide-react";
import Avatar from "../components/ui/Avatar";
import Button from "../components/ui/Button";
import { getUserProfile, profileTabs } from "../mocks/userProfile";

const badgeIcons = {
  "top-failer": Trophy,
  writer: PenLine,
  helper: Handshake,
};

const typeLabels = {
  insight: "INSIGHT",
  failure: "FAILURE LOG",
};

export default function UserProfilePage() {
  const { username } = useParams();
  const profile = getUserProfile(username);

  const [activeTab, setActiveTab] = useState("all");
  const [isFollowing, setIsFollowing] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  const [followedUsers, setFollowedUsers] = useState([]);

  const filteredActivities = useMemo(() => {
    if (activeTab === "failure") {
      return profile.activities.filter((item) => item.type === "failure");
    }
    if (activeTab === "insight") {
      return profile.activities.filter((item) => item.type === "insight");
    }
    return profile.activities;
  }, [activeTab, profile.activities]);

  const toggleFollowUser = (name) => {
    setFollowedUsers((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="flex flex-col gap-8 border-b border-border-default pb-12 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <div className="relative shrink-0">
            <span className="flex h-28 w-28 items-center justify-center rounded-full border border-border-default bg-surface-base">
              <Avatar alt={profile.username} size="lg" />
            </span>
            <span className="absolute bottom-1 right-1 flex h-7 w-7 items-center justify-center rounded-full bg-surface-inverse text-text-on-inverse">
              <BadgeCheck size={16} />
            </span>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold text-text-strong">
                {profile.username}
              </h1>
              {profile.tag && (
                <span className="rounded bg-surface-inverse px-2 py-1 text-[10px] font-bold tracking-wider text-text-on-inverse">
                  {profile.tag}
                </span>
              )}
            </div>
            <p className="mt-2 text-sm text-text-default">{profile.bio}</p>

            <div className="mt-6 flex flex-wrap items-center gap-8">
              <Stat label="POSTS" value={profile.stats.posts} />
              <Stat label="FOLLOWERS" value={profile.stats.followers} />
              <Stat label="FOLLOWING" value={profile.stats.following} />
              <div>
                <p className="text-xs font-medium tracking-wider text-text-muted">
                  BADGES
                </p>
                <div className="mt-1.5 flex -space-x-1.5">
                  {profile.badges.map((badge) => {
                    const Icon = badgeIcons[badge.key] || Trophy;
                    return (
                      <span
                        key={badge.key}
                        title={badge.label}
                        className="flex h-6 w-6 items-center justify-center rounded-full bg-surface-inverse text-text-on-inverse ring-2 ring-surface-base"
                      >
                        <Icon size={12} />
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant={isFollowing ? "secondary" : "primary"}
            className="rounded-lg px-6"
            onClick={() => setIsFollowing((prev) => !prev)}
          >
            {isFollowing ? (
              "팔로잉"
            ) : (
              <>
                <Plus size={16} />
                팔로우
              </>
            )}
          </Button>
          <Button variant="secondary" className="rounded-lg px-5">
            <Mail size={16} />
            메시지
          </Button>
          <button
            type="button"
            aria-label="더보기"
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-border-default text-text-default transition hover:bg-surface-subtle"
          >
            <MoreHorizontal size={18} />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <nav className="mt-8 flex items-center gap-8 border-b border-border-default">
        {profileTabs.map((tab) => {
          const isActive = tab.key === activeTab;
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => {
                setActiveTab(tab.key);
                setVisibleCount(3);
              }}
              className={`relative -mb-px pb-4 text-sm transition ${
                isActive
                  ? "font-bold text-text-strong"
                  : "text-text-muted hover:text-text-default"
              }`}
            >
              {tab.label}
              {isActive && (
                <span className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-surface-inverse" />
              )}
            </button>
          );
        })}
      </nav>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_20rem]">
        {/* Main content */}
        <div>
          {(activeTab === "all" ||
            activeTab === "failure" ||
            activeTab === "insight") && (
            <ActivityList
              items={filteredActivities}
              visibleCount={visibleCount}
              onLoadMore={() => setVisibleCount((prev) => prev + 3)}
            />
          )}

          {activeTab === "scrap" && <ScrapList items={profile.scraps} />}

          {activeTab === "comment" && (
            <CommentList items={profile.userComments} />
          )}
        </div>

        {/* Right sidebar */}
        <aside className="flex flex-col gap-6">
          {/* Badges */}
          <div className="rounded-2xl border border-border-default p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold text-text-strong">획득 뱃지</p>
              <button
                type="button"
                className="text-xs text-text-muted transition hover:text-text-strong"
              >
                전체보기
              </button>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3">
              {profile.badges.map((badge) => {
                const Icon = badgeIcons[badge.key] || Trophy;
                return (
                  <div
                    key={badge.key}
                    className="flex flex-col items-center gap-2 rounded-xl border border-border-default p-3 text-center"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-subtle text-text-strong">
                      <Icon size={18} />
                    </span>
                    <span className="text-xs font-medium text-text-default">
                      {badge.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Interest keywords */}
          <div className="rounded-2xl border border-border-default p-5">
            <p className="text-sm font-bold text-text-strong">관심 키워드</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {profile.interests.map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-lg bg-surface-subtle px-3 py-1.5 text-xs font-medium text-text-default"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          {/* Suggested users */}
          <div className="rounded-2xl border border-border-default p-5">
            <p className="text-sm font-bold text-text-strong">
              함께 성장하는 유저
            </p>
            <ul className="mt-4 flex flex-col gap-4">
              {profile.suggestedUsers.map((name) => {
                const following = followedUsers.includes(name);
                return (
                  <li key={name} className="flex items-center justify-between">
                    <Link
                      to={`/users/${encodeURIComponent(name)}`}
                      className="flex items-center gap-3"
                    >
                      <Avatar alt={name} size="sm" />
                      <span className="text-sm font-medium text-text-strong">
                        {name}
                      </span>
                    </Link>
                    <button
                      type="button"
                      onClick={() => toggleFollowUser(name)}
                      className={`text-xs font-medium transition ${
                        following
                          ? "text-text-muted hover:text-text-strong"
                          : "text-text-strong hover:opacity-70"
                      }`}
                    >
                      {following ? "팔로잉" : "팔로우"}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div>
      <p className="text-xs font-medium tracking-wider text-text-muted">
        {label}
      </p>
      <p className="mt-1 text-xl font-bold text-text-strong">{value}</p>
    </div>
  );
}

function ActivityList({ items, visibleCount, onLoadMore }) {
  if (items.length === 0) {
    return <EmptyState message="아직 활동 내역이 없습니다." />;
  }

  const visibleItems = items.slice(0, visibleCount);
  const hasMore = visibleCount < items.length;

  return (
    <div className="flex flex-col gap-6">
      {visibleItems.map((item) => (
        <ActivityCard key={item.id} item={item} />
      ))}

      {hasMore && (
        <button
          type="button"
          onClick={onLoadMore}
          className="w-full rounded-2xl border border-dashed border-border-default py-4 text-sm font-medium text-text-muted transition hover:bg-surface-subtle hover:text-text-strong"
        >
          활동 내역 더보기
        </button>
      )}
    </div>
  );
}

function ActivityCard({ item }) {
  const card = (
    <div className="rounded-2xl border border-border-default bg-surface-base p-6 transition hover:shadow-md">
      <div className="flex items-center gap-3">
        <span className="rounded bg-surface-inverse px-2 py-1 text-[10px] font-bold tracking-wider text-text-on-inverse">
          {typeLabels[item.type]}
        </span>
        <span className="text-xs text-text-muted">{item.date}</span>
      </div>

      <h3 className="mt-4 text-lg font-bold text-text-strong">{item.title}</h3>
      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-text-default">
        {item.excerpt}
      </p>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-4 text-xs text-text-muted">
          <span className="flex items-center gap-1">
            <Heart size={14} />
            {item.likes}
          </span>
          <span className="flex items-center gap-1">
            <MessageCircle size={14} />
            {item.comments}
          </span>
          <span className="flex items-center gap-1">
            <Eye size={14} />
            {item.views}
          </span>
        </div>
        <div className="flex gap-2">
          {item.tags.map((tag) => (
            <span key={tag} className="text-xs text-text-muted">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  if (item.postId) {
    return (
      <Link to={`/community/${item.postId}`} className="block">
        {card}
      </Link>
    );
  }
  return card;
}

function ScrapList({ items }) {
  if (!items || items.length === 0) {
    return <EmptyState message="스크랩한 글이 없습니다." />;
  }
  return (
    <div className="flex flex-col gap-6">
      {items.map((item) => (
        <div
          key={item.id}
          className="rounded-2xl border border-border-default bg-surface-base p-6"
        >
          <div className="flex items-center gap-3">
            <span className="rounded bg-surface-inverse px-2 py-1 text-[10px] font-bold tracking-wider text-text-on-inverse">
              {typeLabels[item.type]}
            </span>
            <span className="text-xs text-text-muted">{item.date}</span>
            {item.author && (
              <span className="text-xs text-text-muted">· {item.author}</span>
            )}
          </div>
          <h3 className="mt-4 text-lg font-bold text-text-strong">
            {item.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-text-default">
            {item.excerpt}
          </p>
        </div>
      ))}
    </div>
  );
}

function CommentList({ items }) {
  if (!items || items.length === 0) {
    return <EmptyState message="작성한 댓글이 없습니다." />;
  }
  return (
    <div className="flex flex-col gap-4">
      {items.map((comment) => (
        <div
          key={comment.id}
          className="rounded-2xl border border-border-default bg-surface-base p-5"
        >
          <p className="text-xs text-text-muted">
            {comment.date} · <span>{comment.postTitle}</span> 에 남긴 댓글
          </p>
          <p className="mt-2 text-sm leading-6 text-text-default">
            {comment.content}
          </p>
          <div className="mt-3 flex items-center gap-1 text-xs text-text-muted">
            <Heart size={13} />
            {comment.likes}
          </div>
        </div>
      ))}
    </div>
  );
}

function EmptyState({ message }) {
  return (
    <div className="rounded-2xl border border-dashed border-border-default py-20 text-center text-sm text-text-muted">
      {message}
    </div>
  );
}
