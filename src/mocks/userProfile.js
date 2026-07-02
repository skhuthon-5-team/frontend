// 다른 사용자 공개 프로필 데이터 (username 기준)
const profiles = {
  성장형개발자: {
    username: "성장형개발자",
    tag: "EXPERT",
    bio: "실패를 배움으로 바꾸는 중. 프론트엔드 개발자입니다.",
    stats: { posts: "48", followers: "1,248", following: "852" },
    badges: [
      { key: "top-failer", label: "Top Failer" },
      { key: "writer", label: "Writer" },
      { key: "helper", label: "Helper" },
    ],
    interests: [
      "TypeScript",
      "React",
      "Next.js",
      "UI/UX Design",
      "Career Development",
      "Wellness",
    ],
    activities: [
      {
        id: 1,
        type: "insight",
        date: "2026.03.24",
        title: '"3년 차 주니어 개발자가 번아웃을 극복하며 깨달은 것들"',
        excerpt:
          "최근 몇 달간 심각한 번아웃을 겪었습니다. 아침에 눈을 뜨는 것이 고통스러웠고, 코드를 한 줄도 쓰기 싫은 날들이 이어졌죠. 열정만으로는 부족했습니다...",
        likes: 42,
        comments: 18,
        views: "1,248",
        tags: ["번아웃", "회고"],
        postId: 1,
      },
      {
        id: 2,
        type: "failure",
        date: "2026.02.15",
        title: "신입 시절, 배포 사고로 서버를 날려먹었던 기억",
        excerpt:
          "지금 생각하면 아찔한 기억입니다. 금요일 오후 5시, 마지막 배포를 누르고 퇴근하려던 찰나에 모든 서비스가 응답하지 않기 시작했습니다...",
        likes: 156,
        comments: 42,
        views: "3,502",
        tags: ["배포사고", "신입시절"],
      },
      {
        id: 3,
        type: "insight",
        date: "2026.01.20",
        title: "코딩 테스트 10번 낙방 후 깨달은 효율적인 공부법",
        excerpt:
          "단순히 문제를 많이 푸는 것이 답이 아니었습니다. 제가 10번의 탈락 끝에 11번째 대기업 코딩 테스트를 통과할 수 있었던 비결을 공유합니다...",
        likes: 89,
        comments: 24,
        views: "2,110",
        tags: ["코테", "취준"],
      },
    ],
    scraps: [
      {
        id: 101,
        type: "insight",
        date: "2026.03.10",
        title: '"사이드 프로젝트가 왜 자꾸 중간에 엎어질까?"',
        excerpt:
          "세 번의 사이드 프로젝트를 모두 중간에 접으며 깨달은 것들. 문제는 아이디어가 아니라 지속 가능한 실행 구조였습니다...",
        likes: 214,
        comments: 37,
        views: "4,020",
        tags: ["사이드프로젝트"],
        author: "실패기록가",
      },
    ],
    userComments: [
      {
        id: 201,
        date: "2026.03.22",
        postTitle: '"퇴사 고민, 지금이 적기일까요?"',
        content:
          "저도 비슷한 고민 끝에 퇴사했는데, 중요한 건 타이밍보다 다음 계획의 구체성이더라고요. 응원합니다!",
        likes: 8,
      },
      {
        id: 202,
        date: "2026.03.18",
        postTitle: '"코딩테스트 10번 낙방, 무엇이 문제일까요?"',
        content:
          "문제 유형별로 오답 노트를 만들어보세요. 저는 이 방법으로 약점을 정밀하게 파악할 수 있었습니다.",
        likes: 15,
      },
    ],
    suggestedUsers: ["공감요정", "데이터사이언티스트", "도전왕"],
  },
};

const fallbackProfile = profiles["성장형개발자"];

export const profileTabs = [
  { key: "all", label: "전체 활동" },
  { key: "failure", label: "실패로그" },
  { key: "insight", label: "인사이트" },
  { key: "scrap", label: "스크랩" },
  { key: "comment", label: "댓글" },
];

export function getUserProfile(username) {
  if (username && profiles[username]) return profiles[username];
  return { ...fallbackProfile, username: username || fallbackProfile.username };
}
