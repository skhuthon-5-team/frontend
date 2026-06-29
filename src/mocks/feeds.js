export const categories = ["창업·사업", "취업·커리어", "인간관계", "자기계발"];

export const feeds = [
  {
    id: 1,
    category: "취업·커리어",
    date: "2026.03",
    title: "3년 준비한 전문직 시험, 0.5점 차이로 낙방했습니다.",
    excerpt:
      "모든 것을 쏟아부었다고 생각했는데 결과는 냉혹했습니다. 제가 간과했던 단 하나의 선택이 무엇이었는지, 그리고 지금 다시 일어서려는 과정을 기록합니다.",
    author: "열정맨24",
    views: "1.2k",
    comments: 24,
  },
  {
    id: 2,
    category: "창업·사업",
    date: "2026.02",
    title: "첫 번째 커머스 창업, 재고 관리 실패로 폐업했습니다.",
    excerpt:
      "마케팅에만 집중하느라 정작 중요한 물류와 재고 흐름을 놓쳤습니다. 8천만 원의 손실을 통해 배운 '진짜 장사'의 원칙을 공유합니다.",
    author: "비즈니스리더",
    views: "856",
    comments: 12,
  },
  {
    id: 3,
    category: "자기계발",
    date: "2026.01",
    title: "완벽주의 때문에 결국 아무것도 완성하지 못한 1년",
    excerpt:
      "매일 계획만 세우다 끝났습니다. 완벽한 시작을 기다리느라 아무것도 하지 못한 실패의 기록입니다. 'Done is better than perfect'를 뼈저리게 느꼈습니다.",
    author: "성장형인간",
    views: "2.4k",
    comments: 56,
  },
  {
    id: 4,
    category: "인간관계",
    date: "2026.01",
    title: "신뢰를 잃는 것은 한순간이었습니다.",
    excerpt:
      "작은 거짓말이 눈덩이처럼 불어나 소중한 친구를 잃었습니다. 정직함의 가치를 다시 배우게 된 아픈 경험입니다.",
    author: "솔직담백",
    views: "512",
    comments: 8,
  },
  {
    id: 5,
    category: "창업·사업",
    date: "2025.12",
    title: "공동창업자와 갈라선 뒤에야 알게 된 것들",
    excerpt:
      "지분과 역할을 명확히 하지 않은 채 의기투합만으로 시작한 대가를 치렀습니다. 동업 계약서가 왜 필요한지 몸으로 배웠습니다.",
    author: "혼자가편해",
    views: "743",
    comments: 19,
  },
  {
    id: 6,
    category: "취업·커리어",
    date: "2025.11",
    title: "이직 세 번 만에 깨달은 회사 고르는 법",
    excerpt:
      "연봉만 보고 옮겼다가 번아웃으로 퇴사하기를 반복했습니다. 나에게 맞는 환경이 무엇인지 정의하지 못한 게 진짜 실패 원인이었습니다.",
    author: "정착희망",
    views: "1.1k",
    comments: 31,
  },
];

export function getFeeds() {
    return feeds;
  }
  
  export function getCategories() {
    return categories;
  }
