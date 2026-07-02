import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="p-8 text-text-strong">
      <p>페이지를 찾을 수 없습니다.</p>
      <Link to="/" className="text-text-muted underline">
        홈으로
      </Link>
    </div>
  );
}
