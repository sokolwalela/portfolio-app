export interface ProjectLink {
  github?: string;
  demo?: string;
}

export interface Project {
  id: number;
  title: string;
  period: string;
  tags: string[];
  description: string;
  link: ProjectLink;
  detail?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "포트폴리오 웹사이트",
    period: "2025.01 - 2025.02",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    description: "미니멀 다크 테마의 싱글 페이지 포트폴리오. 반응형, 스크롤 애니메이션, Contact 폼 연동.",
    link: { github: "https://github.com", demo: "https://example.com" },
    detail: "Next.js App Router와 React Server Components를 활용한 정적·동적 혼합 구조. Intersection Observer로 섹션별 페이드인, EmailJS로 문의 폼 전송. 이미지 최소화로 LCP 최적화.",
  },
  {
    id: 2,
    title: "실시간 대시보드",
    period: "2024.09 - 2024.12",
    tags: ["React", "TypeScript", "WebSocket", "Node.js"],
    description: "실시간 데이터 시각화 대시보드. WebSocket 기반 알림 및 차트 업데이트.",
    link: { github: "https://github.com" },
    detail: "WebSocket으로 서버 푸시 이벤트 수신, Recharts로 시계열 차트 렌더링. JWT 인증과 역할 기반 접근 제어 적용.",
  },
  {
    id: 3,
    title: "API 서비스 백엔드",
    period: "2024.06 - 2024.08",
    tags: ["Node.js", "PostgreSQL", "Docker"],
    description: "RESTful API 서버. 사용자 인증, 리소스 CRUD, 페이징·필터링 지원.",
    link: { github: "https://github.com" },
    detail: "Express 기반 API, PostgreSQL + Prisma ORM. Docker Compose로 로컬/스테이징 환경 구성. Rate limiting, CORS, Helmet 적용.",
  },
];
