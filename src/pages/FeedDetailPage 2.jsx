import { useParams } from "react-router-dom";

export default function FeedDetailPage() {
  const { id } = useParams();
  return <div className="p-8 text-text-strong">실패 상세 (FeedDetailPage) - id: {id}</div>;
}
