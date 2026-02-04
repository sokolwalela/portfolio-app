"use client";

import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { techStack, techCategories, type TechItem } from "@/data/tech-stack";

const categoryOrder: TechItem["category"][] = ["frontend", "backend", "tools", "etc"];

export function TechStack() {
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.1 });

  const byCategory = categoryOrder.map((cat) => ({
    label: techCategories[cat],
    items: techStack.filter((t) => t.category === cat),
  })).filter((g) => g.items.length > 0);

  return (
    <section
      id="tech"
      ref={ref}
      className={`section-reveal px-4 py-16 sm:px-6 sm:py-24 ${isVisible ? "is-visible" : ""}`}
    >
      <div className="mx-auto max-w-5xl">
        <h2
          className="mb-8 font-medium tracking-tight text-[var(--foreground)] sm:mb-12"
          style={{ fontSize: "var(--type-scale-2)", lineHeight: "var(--leading-tight)" }}
        >
          Tech Stack
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10">
          {byCategory.map((group) => (
            <div
              key={group.label}
              className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 sm:p-6"
            >
              <h3
                className="mb-3 font-medium uppercase tracking-wider text-[var(--muted)] sm:mb-4"
                style={{ fontSize: "var(--type-scale-5)" }}
              >
                {group.label}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="rounded-md border border-[var(--border)] px-3 py-1.5 text-[var(--foreground)]"
                    style={{ fontSize: "var(--type-scale-5)" }}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
