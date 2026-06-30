const posts = [
    {
      id: 1,
      date: "2026.02.10",
      title: "A사 최종 면접 탈락",
      summary:
        "직무 역량은 충분했으나, 조직 문화 적합성 질문에 대한 답변이 미흡했음. 협업 경험을 구체적으로 정리하지 못한 것이 패인.",
      tag: "커리어",
      hasRetrospective: false,
    },
    {
      id: 2,
      date: "2026.02.01",
      title: "유튜브 채널 운영 중단",
      summary:
        "6개월간 꾸준히 업로드했으나 구독자 성장 정체. 콘텐츠 차별화 실패 및 번아웃으로 인한 의지 상실.",
      tag: "사이드프로젝트",
      hasRetrospective: false,
    },
    {
      id: 3,
      date: "2025.12.02",
      title: "공모전 최종 심사 낙선",
      cause: "아이디어 구체성 및 실행 로드맵 부재",
      hasRetrospective: true,
      status: "진행 중",
      retrospectiveTitle: "기획보다 중요한 것은 'How'의 증명",
      change:
        "기획 단계에서 반드시 프로토타입을 제작하여 실제 작동 여부를 먼저 검증하기 시작했습니다. 현재 사이드 프로젝트에 이 프로세스를 적용 중입니다.",
      currentStatus: "사이드 프로젝트 MVP 개발 60% 완료",
    },
    {
      id: 4,
      date: "2026.01.15",
      title: "3년 준비한 공무원 시험 낙방",
      cause: "메타인지 부족 및 양치기 학습",
      hasRetrospective: true,
      status: "성장 완료",
      retrospectiveTitle: "불안함을 데이터로 치환하는 법을 배웠습니다",
      change:
        "단순 노력이 아닌 '측정 가능한 지표'를 설정했습니다. 매일의 학습 성취도를 데이터화하여 부족한 부분을 정밀 타격하는 방식으로 전환했습니다.",
      currentStatus: "IT 기업 인턴 합격 및 실무 적용 중",
    },
  ];
  
  export function getMyPosts() {
    return posts;
  }
