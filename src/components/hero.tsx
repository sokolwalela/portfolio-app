"use client";

import { useEffect, useState } from "react";

const CATCHPHRASE = "안녕하세요.\n제가 만드는 경험을\n소개합니다.";

export function Hero() {
  const [visible, setVisible] = useState(false);
  const [greetingLine, ...restLines] = CATCHPHRASE.split("\n");
  const restText = restLines.length ? `\n${restLines.join("\n")}` : "";

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="flex min-h-[100dvh] items-center justify-center px-4 pt-[calc(3.5rem+var(--safe-top))] pb-[var(--safe-bottom)] sm:px-6"
    >
      <div className="mx-auto w-full max-w-5xl">
        <p
          className="whitespace-pre-line font-medium leading-[1.35] text-[var(--foreground)] transition-all duration-700 ease-out"
          style={{
            fontSize: "var(--type-scale-1)",
            letterSpacing: "-0.02em",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(0.5rem)",
          }}
        >
          <span className="text-green-600">{greetingLine}</span>
          {restText}
        </p>
        <p
          className="mt-6 leading-relaxed text-[var(--muted)] transition-all duration-700 delay-300 ease-out"
          style={{
            fontSize: "var(--type-scale-4)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(0.5rem)",
          }}
        >
          스크롤하여 더 알아보기
        </p>
      </div>
    </section>
  );
}
