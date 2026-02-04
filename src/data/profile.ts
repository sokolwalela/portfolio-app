export interface Profile {
  name: string;
  role: string;
  bio: string;
  experience: string[];
  education: string[];
  image?: string;
}

export const profile: Profile = {
  name: "홍길동",
  role: "Frontend Developer",
  bio: "사용자 경험과 성능을 고려한 웹 개발을 지향합니다. React와 TypeScript 기반의 모던 프론트엔드 개발에 집중하고 있습니다.",
  experience: [
    "OOO 회사 · 프론트엔드 개발 · 2022 - 현재",
    "XXX 스타트업 · 웹 개발 인턴 · 2021 - 2022",
  ],
  education: [
    "OO대학교 컴퓨터공학과 졸업 · 2021",
  ],
};
