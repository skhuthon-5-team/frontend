const retrospectives = {
  3: {
    id: 3,
    status: "ONGOING",
    publishedDate: "2026.03.05",
    title: "공모전 최종 심사 낙선에 대한 사후 회고",
    subtitle: "기획보다 중요한 것은 'How'의 증명이라는 것을 배우기까지의 기록",
    linkedRecord: {
      recordId: 3,
      date: "2025.12.02",
      title: "공모전 최종 심사 낙선",
      causeLabel: "당시 원인 진단",
      cause: "아이디어 구체성 및 실행 로드맵 부재",
    },
    cause:
      "당시에는 아이디어 자체가 부족했다고 자책했지만, 지금 돌아보면 진짜 문제는 그 아이디어를 '증명'할 방법을 준비하지 못한 것이었습니다. 심사위원이 원한 것은 화려한 기획서가 아니라 실제로 작동하는 증거였습니다.",
    action:
      "기획 단계에서 반드시 프로토타입을 제작하여 실제 작동 여부를 먼저 검증하기 시작했습니다. 현재 사이드 프로젝트에 이 프로세스를 적용 중입니다.",
    result: "진행 중",
    resultSummary: "사이드 프로젝트 MVP 개발 60% 완료",
    advice:
      "번뜩이는 아이디어보다 작동하는 작은 프로토타입 하나가 훨씬 강력합니다. 완벽한 기획을 붙잡고 있기보다, 지금 만들 수 있는 가장 작은 버전을 먼저 세상에 내보이세요.",
    cheeredCount: 8,
  },
  4: {
    id: 4,
    status: "SUCCESS",
    publishedDate: "2026.06.12",
    title: "3년 준비한 공무원 시험 낙방에 대한 사후 회고",
    subtitle: "불안함을 데이터로 치환하는 법을 배우기까지의 기록",
    linkedRecord: {
      recordId: 4,
      date: "2026.01.15",
      title: "3년 준비한 공무원 시험 낙방",
      causeLabel: "당시 원인 진단",
      cause: "메타인지 부족 및 양치기 학습",
    },
    cause:
      "막연히 공부량이 부족했다고 생각했지만, 복기해보니 문제는 '얼마나'가 아니라 '어떻게'였습니다. 내가 무엇을 모르는지조차 모른 채 익숙한 문제만 반복해서 푼 것이 3년을 허비한 진짜 원인이었습니다.",
    action:
      "단순 노력이 아닌 '측정 가능한 지표'를 설정했습니다. 매일의 학습 성취도를 데이터화하여 부족한 부분을 정밀 타격하는 방식으로 전환했습니다.",
    result: "재도전 성공",
    resultSummary: "IT 기업 인턴 합격 및 실무 적용 중",
    advice:
      "불안은 노력의 양으로 지워지지 않습니다. 막연한 불안을 매일 측정 가능한 숫자로 바꾸는 순간, 무엇을 해야 할지가 선명해집니다. 감정이 아니라 데이터를 믿으세요.",
    cheeredCount: 15,
  },
};

export function getRetrospective(id) {
  return retrospectives[id] || retrospectives[4];
}
