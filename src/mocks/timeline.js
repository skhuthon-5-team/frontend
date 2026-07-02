const stats = [
  { label: "누적 실패", value: "15", unit: "건" },
  { label: "최종 성공", value: "1", unit: "건" },
  { label: "성장 지수", value: "88", unit: "점" },
];

const statusCard = {
  label: "상태",
  value: "회복 탄력성 상위 5%",
  desc: "꾸준한 기록이 결실을 맺었습니다.",
};

const items = [
  {
    id: 1,
    date: "2026.09",
    type: "success",
    badge: "성공 노트",
    updatedAt: "2026.09.15",
    title: "글로벌 테크 기업 'A사' 인턴십 합격",
    summary:
      "지난 1년간의 실패 기록들이 면접관에게 가장 큰 강점으로 어필되었습니다. 단순한 성공이 아닌, 실패를 통해 다져진 문제 해결 능력이 결실을 맺은 순간입니다.",
    report: {
      before: {
        label: "2025.12 공모전 낙선 당시",
        points: [
          "아이디어의 현실성 부족 및 검증 단계 누락",
          "팀원 간 R&R 불분명으로 인한 리소스 낭비",
        ],
      },
      after: {
        label: "2026.09 인턴 합격 현재",
        points: [
          "데이터 기반의 문제 정의 및 가설 검증 프로세스 정립",
          "실패 이력을 통한 리스크 관리 역량 45% 향상",
        ],
      },
      quote:
        "'김failed 넘은 지난 10개월간 '문서화'와 '피드백 수용' 키워드에서 가장 큰 성장을 보였습니다. 특히 공모전 낙선 후 기록한 회고록이 이번 합격의 핵심 포트폴리오가 되었습니다.'",
    },
  },
  {
    id: 2,
    date: "2026.05",
    type: "record",
    badge: "취업/커리어",
    updatedAt: "2026.05.20",
    title: "국내 유망 스타트업 'B사' 인턴 면접 탈락",
    summary:
      "최종 면접까지 올라갔으나, 기술 스택에 대한 깊이 있는 답변 부족으로 탈락했습니다. 당시에는 좌절했으나, 이를 계기로 CS 기초를 다시 다지는 3개월의 집중 학습 기간을 가졌습니다.",
  },
  {
    id: 3,
    date: "2025.12",
    type: "record",
    badge: "공모전/프로젝트",
    updatedAt: "2025.12.10",
    title: "전국 대학생 IT 창업 공모전 예선 탈락",
    summary:
      "첫 번째 팀 도전이었으나 처참한 결과를 얻었습니다. 시장 조사 부족과 팀원 간의 소통 부재가 원인이었습니다. 이 실패가 '실패로그'를 시작하게 된 결정적인 계기가 되었습니다.",
  },
];

export function getTimelineStats() {
  return { stats, statusCard };
}

export function getTimelineItems() {
  return items;
}
