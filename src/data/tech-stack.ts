export interface TechItem {
  name: string;
  category: "frontend" | "backend" | "tools" | "etc";
}

export const techStack: TechItem[] = [
  { name: "React", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "Git", category: "tools" },
  { name: "Figma", category: "tools" },
  { name: "Docker", category: "tools" },
];

export const techCategories: Record<TechItem["category"], string> = {
  frontend: "Frontend",
  backend: "Backend",
  tools: "Tools",
  etc: "기타",
};
