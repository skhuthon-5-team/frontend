const myRecentRecord = {
    id: 101,
    label: "나의 최근 기록",
    date: "2026.03.15",
    title: "사이드 프로젝트 기획 단계에서 무너진 이유",
    summary:
      "팀원들과의 커뮤니케이션 부재로 인해 초기 방향성이 완전히 틀어졌습니다. AI 분석을 통해 도출된 3가지 교훈을 다시 확인해보세요.",
    analysisStatus: "분석 완료",
    retrospectiveStatus: "회고 미작성",
  };
  
  export function getMyRecentRecord() {
    return myRecentRecord;
  }
