"use client";

import { useEffect, useCallback } from "react";
import type { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [handleEscape]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-4"
      style={{
        paddingTop: "var(--safe-top)",
        paddingLeft: "var(--safe-left)",
        paddingRight: "var(--safe-right)",
        paddingBottom: "var(--safe-bottom)",
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative max-h-[85dvh] w-full overflow-y-auto rounded-t-2xl border border-[var(--border)] border-b-0 bg-[var(--card)] p-4 shadow-xl sm:max-h-[90dvh] sm:max-w-lg sm:rounded-xl sm:border-b sm:p-6">
        <h3
          id="modal-title"
          className="pr-10 font-medium text-[var(--foreground)] sm:pr-12"
          style={{ fontSize: "var(--type-scale-2)", lineHeight: "var(--leading-tight)" }}
        >
          {project.title}
        </h3>
        <p
          className="mt-1 text-[var(--muted)]"
          style={{ fontSize: "var(--type-scale-5)" }}
        >
          {project.period}
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
        <p
          className="mt-4 text-[var(--muted)]"
          style={{
            fontSize: "var(--type-scale-4)",
            lineHeight: "var(--leading-relaxed)",
          }}
        >
          {project.detail ?? project.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {project.link.github && (
            <a
              href={project.link.github}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[var(--touch-min)] inline-flex items-center rounded-lg border border-[var(--border)] px-4 py-2 text-[var(--foreground)] transition-transform hover:scale-105 active:scale-[0.98]"
              style={{ fontSize: "var(--type-scale-4)" }}
            >
              GitHub
            </a>
          )}
          {project.link.demo && (
            <a
              href={project.link.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[var(--touch-min)] inline-flex items-center rounded-lg border border-[var(--border)] px-4 py-2 text-[var(--foreground)] transition-transform hover:scale-105 active:scale-[0.98]"
              style={{ fontSize: "var(--type-scale-4)" }}
            >
              Demo
            </a>
          )}
        </div>
        <button
          type="button"
          onClick={onClose}
          className="absolute right-2 top-2 flex min-h-[var(--touch-min)] min-w-[var(--touch-min)] items-center justify-center rounded-lg text-[var(--muted)] hover:bg-[var(--muted-bg)] hover:text-[var(--foreground)] sm:right-4 sm:top-4"
          aria-label="닫기"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
