"use client";

import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { profile } from "@/data/profile";

export function About() {
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.15 });

  return (
    <section
      id="about"
      ref={ref}
      className={`section-reveal min-h-screen px-4 py-16 sm:px-6 sm:py-24 ${isVisible ? "is-visible" : ""}`}
    >
      <div className="mx-auto max-w-5xl">
        <h2
          className="mb-8 font-medium tracking-tight text-[var(--foreground)] sm:mb-12"
          style={{ fontSize: "var(--type-scale-2)", lineHeight: "var(--leading-tight)" }}
        >
          About Me
        </h2>
        <div className="flex flex-col gap-8 md:flex-row md:gap-16">
          {profile.image ? (
            <div className="shrink-0">
              <img
                src={profile.image}
                alt={profile.name}
                width={200}
                height={200}
                className="max-w-[180px] rounded-lg object-cover sm:max-w-none"
                loading="lazy"
              />
            </div>
          ) : null}
          <div className="min-w-0 flex-1 space-y-5 sm:space-y-6">
            <div>
              <p
                className="font-medium text-[var(--foreground)]"
                style={{ fontSize: "var(--type-scale-3)", lineHeight: "var(--leading-tight)" }}
              >
                {profile.name}
              </p>
              <p
                className="mt-1 text-[var(--muted)]"
                style={{ fontSize: "var(--type-scale-4)", lineHeight: "var(--leading-normal)" }}
              >
                {profile.role}
              </p>
            </div>
            <p
              className="text-[var(--muted)]"
              style={{
                fontSize: "var(--type-scale-4)",
                lineHeight: "var(--leading-relaxed)",
              }}
            >
              {profile.bio}
            </p>
            <div>
              <h3
                className="mb-2 font-medium text-[var(--foreground)]"
                style={{ fontSize: "var(--type-scale-5)" }}
              >
                경력
              </h3>
              <ul
                className="space-y-1 text-[var(--muted)]"
                style={{ fontSize: "var(--type-scale-5)", lineHeight: "var(--leading-relaxed)" }}
              >
                {profile.experience.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3
                className="mb-2 font-medium text-[var(--foreground)]"
                style={{ fontSize: "var(--type-scale-5)" }}
              >
                학력
              </h3>
              <ul
                className="space-y-1 text-[var(--muted)]"
                style={{ fontSize: "var(--type-scale-5)", lineHeight: "var(--leading-relaxed)" }}
              >
                {profile.education.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
