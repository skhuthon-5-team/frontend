import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Bold,
  Code,
  Eye,
  Image as ImageIcon,
  Info,
  Italic,
  Link as LinkIcon,
  List,
  ListOrdered,
  Quote,
  Save,
  X,
} from "lucide-react";
import Button from "../components/ui/Button";
import { writeCategories, writeGuidelines } from "../mocks/community";

const toolbarGroups = [
  [
    { key: "bold", icon: Bold, label: "굵게" },
    { key: "italic", icon: Italic, label: "기울임" },
    { key: "link", icon: LinkIcon, label: "링크" },
  ],
  [
    { key: "list", icon: List, label: "목록" },
    { key: "ordered", icon: ListOrdered, label: "번호 목록" },
    { key: "quote", icon: Quote, label: "인용" },
    { key: "code", icon: Code, label: "코드" },
  ],
];

export default function CommunityWritePage() {
  const navigate = useNavigate();

  const [category, setCategory] = useState("free");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState(["성장기록", "주니어개발자"]);
  const [tagInput, setTagInput] = useState("");

  const addTag = (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    const value = tagInput.trim().replace(/^#/, "");
    if (value && tags.length < 5 && !tags.includes(value)) {
      setTags((prev) => [...prev, value]);
    }
    setTagInput("");
  };

  const removeTag = (target) => {
    setTags((prev) => prev.filter((tag) => tag !== target));
  };

  const handleSubmit = () => {
    if (!title.trim() || content.trim().length < 10) {
      alert("제목과 내용(최소 10자)을 입력해주세요.");
      return;
    }
    console.log("커뮤니티 글:", { category, title, content, tags });
    alert("글이 작성되었습니다.");
    navigate("/community");
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-text-muted">
        <Link to="/community" className="hover:text-text-strong">
          커뮤니티
        </Link>
        <span>›</span>
        <span className="font-bold text-text-strong">새 글 작성</span>
      </div>

      <h1 className="mt-6 text-3xl font-bold text-text-strong">
        새로운 실패와 배움 기록하기
      </h1>
      <p className="mt-3 text-base text-text-default">
        당신의 실패는 누군가에게는 이정표가 됩니다. 솔직한 경험을 나누어주세요.
      </p>

      {/* Editor card */}
      <div className="mt-10 rounded-2xl border border-border-default bg-surface-base p-6 sm:p-8">
        {/* Category chips */}
        <div className="flex flex-wrap gap-2">
          {writeCategories.map((item) => {
            const isActive = item.key === category;
            return (
              <button
                key={item.key}
                type="button"
                onClick={() => setCategory(item.key)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-surface-inverse text-text-on-inverse"
                    : "border border-border-default text-text-default hover:bg-surface-subtle"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Title */}
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="제목을 입력하세요"
          className="mt-8 w-full border-b border-border-default bg-transparent pb-4 text-2xl font-bold text-text-strong outline-none placeholder:text-text-muted focus:border-text-strong"
        />

        {/* Toolbar */}
        <div className="mt-6 flex flex-wrap items-center gap-1 rounded-lg bg-surface-subtle p-1.5">
          {toolbarGroups.map((group, index) => (
            <div key={index} className="flex items-center gap-1">
              {index > 0 && (
                <span className="mx-1 h-5 w-px bg-border-default" />
              )}
              {group.map(({ key, icon: Icon, label }) => (
                <button
                  key={key}
                  type="button"
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-md text-text-default transition hover:bg-surface-base"
                >
                  <Icon size={16} />
                </button>
              ))}
            </div>
          ))}
        </div>

        {/* Content */}
        <textarea
          value={content}
          onChange={(event) => setContent(event.target.value)}
          rows={12}
          placeholder="내용을 입력하세요. (최소 10자 이상)"
          className="mt-4 w-full resize-none bg-transparent text-sm leading-7 text-text-default outline-none placeholder:text-text-muted"
        />

        {/* Image dropzone */}
        <div className="mt-4 flex flex-col items-center justify-center rounded-xl border border-dashed border-border-default py-12 text-center transition hover:bg-surface-subtle">
          <ImageIcon size={28} className="text-text-muted" />
          <p className="mt-3 text-sm font-medium text-text-default">
            이미지 첨부 (최대 5장)
          </p>
          <p className="mt-1 text-xs text-text-muted">
            드래그하거나 클릭하여 업로드하세요
          </p>
        </div>

        {/* Tags */}
        <div className="mt-6">
          <div className="flex items-center gap-2 text-sm text-text-muted">
            <span className="text-text-default">#</span>
            <input
              value={tagInput}
              onChange={(event) => setTagInput(event.target.value)}
              onKeyDown={addTag}
              placeholder="태그를 입력하고 엔터를 누르세요 (최대 5개)"
              className="flex-1 bg-transparent outline-none placeholder:text-text-muted"
            />
          </div>
          {tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 rounded-full bg-surface-subtle px-3 py-1.5 text-xs font-medium text-text-default"
                >
                  #{tag}
                  <button
                    type="button"
                    onClick={() => removeTag(tag)}
                    aria-label={`${tag} 삭제`}
                    className="text-text-muted transition hover:text-text-strong"
                  >
                    <X size={12} />
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="mt-8 flex flex-col gap-4 border-t border-border-default pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-5 text-sm text-text-muted">
            <button
              type="button"
              className="flex items-center gap-1.5 transition hover:text-text-strong"
            >
              <Eye size={16} />
              미리보기
            </button>
            <button
              type="button"
              className="flex items-center gap-1.5 transition hover:text-text-strong"
            >
              <Save size={16} />
              임시저장 (2)
            </button>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="secondary"
              className="rounded-lg px-6"
              onClick={() => navigate("/community")}
            >
              취소
            </Button>
            <Button
              variant="primary"
              className="rounded-lg px-6"
              onClick={handleSubmit}
            >
              작성 완료하기
            </Button>
          </div>
        </div>
      </div>

      {/* Guidelines */}
      <div className="mt-8 rounded-2xl bg-surface-subtle p-6 sm:p-8">
        <div className="flex items-center gap-2">
          <Info size={18} className="text-text-strong" />
          <p className="text-sm font-bold text-text-strong">작성 가이드라인</p>
        </div>
        <ul className="mt-5 flex flex-col gap-3">
          {writeGuidelines.map((item) => (
            <li key={item.step} className="flex gap-3 text-sm text-text-default">
              <span className="font-bold text-text-strong">{item.step}</span>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
