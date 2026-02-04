"use client";

import { useState, useCallback } from "react";
import { projects as projectsData, type Project } from "@/data/projects";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { ProjectModal } from "./project-modal";

export function Projects() {
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.1 });
  const [selected, setSelected] = useState<Project | null>(null);

  const openModal = useCallback((project: Project) => setSelected(project), []);
  const closeModal = useCallback(() => setSelected(null), []);

  return (
    <>
      <section
        id="projects"
        ref={ref}
        className={`section-reveal px-4 py-16 sm:px-6 sm:py-24 ${isVisible ? "is-visible" : ""}`}
      >
        <div className="mx-auto max-w-5xl">
          <h2
            className="mb-8 font-medium tracking-tight text-[var(--foreground)] sm:mb-12"
            style={{ fontSize: "var(--type-scale-2)", lineHeight: "var(--leading-tight)" }}
          >
            Projects
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            {projectsData.map((project) => (
              <li key={project.id}>
                <button
                  type="button"
                  onClick={() => openModal(project)}
                  className="group w-full rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 text-left transition-transform hover:scale-[1.02] active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--background)] sm:p-6 min-h-[var(--touch-min)] sm:min-h-0"
                >
                  <p
                    className="font-medium text-[var(--foreground)]"
                    style={{ fontSize: "var(--type-scale-3)", lineHeight: "var(--leading-tight)" }}
                  >
                    {project.title}
                  </p>
                  <p
                    className="mt-1 text-[var(--muted)]"
                    style={{ fontSize: "var(--type-scale-5)" }}
                  >
                    {project.period}
                  </p>
                  <p
                    className="mt-3 line-clamp-2 text-[var(--muted)]"
                    style={{ fontSize: "var(--type-scale-5)", lineHeight: "var(--leading-relaxed)" }}
                  >
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded bg-[var(--muted-bg)] px-2 py-0.5 text-[var(--muted)]"
                        style={{ fontSize: "var(--type-scale-5)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {selected && <ProjectModal project={selected} onClose={closeModal} />}
    </>
  );
}
