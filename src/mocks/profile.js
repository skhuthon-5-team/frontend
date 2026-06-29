const profile = {
    nickname: "실패하는성장가",
    level: 12,
    job: "주니어 서비스 기획자",
    bio: "실패를 기록하며 매일 성장합니다. 오늘의 실수가 내일의 밑거름이 되길 바랍니다.",
    stats: { followers: 128, following: 84, records: 42 },
    interests: ["창업", "자기계발", "이직", "인간관계", "공부"],
    selectedInterests: ["창업", "인간관계"],
  };
  
  export function getProfile() {
    return profile;
  }
  
  export function getInterestOptions() {
    return ["창업", "자기계발", "이직", "인간관계", "공부"];
  }
