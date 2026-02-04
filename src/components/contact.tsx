"use client";

import { useState, useCallback } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export function Contact() {
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.1 });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ from_name: "", from_email: "", message: "" });

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        setStatus("error");
        return;
      }

      setStatus("sending");
      try {
        const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            service_id: serviceId,
            template_id: templateId,
            user_id: publicKey,
            template_params: {
              from_name: formData.from_name,
              from_email: formData.from_email,
              message: formData.message,
            },
          }),
        });
        if (!res.ok) throw new Error("Send failed");
        setStatus("success");
        setFormData({ from_name: "", from_email: "", message: "" });
      } catch {
        setStatus("error");
      }
    },
    [formData]
  );

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const inputBase =
    "w-full rounded-lg border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none min-h-[var(--touch-min)] text-base";

  return (
    <section
      id="contact"
      ref={ref}
      className={`section-reveal px-4 py-16 sm:px-6 sm:py-24 ${isVisible ? "is-visible" : ""}`}
    >
      <div className="mx-auto max-w-5xl">
        <h2
          className="mb-8 font-medium tracking-tight text-[var(--foreground)] sm:mb-12"
          style={{ fontSize: "var(--type-scale-2)", lineHeight: "var(--leading-tight)" }}
        >
          Contact
        </h2>
        <form onSubmit={handleSubmit} className="max-w-md space-y-4">
          <div>
            <label
              htmlFor="from_name"
              className="mb-1 block text-[var(--muted)]"
              style={{ fontSize: "var(--type-scale-5)" }}
            >
              이름
            </label>
            <input
              id="from_name"
              name="from_name"
              type="text"
              required
              value={formData.from_name}
              onChange={handleChange}
              className={inputBase}
              placeholder="이름"
              autoComplete="name"
            />
          </div>
          <div>
            <label
              htmlFor="from_email"
              className="mb-1 block text-[var(--muted)]"
              style={{ fontSize: "var(--type-scale-5)" }}
            >
              이메일
            </label>
            <input
              id="from_email"
              name="from_email"
              type="email"
              required
              value={formData.from_email}
              onChange={handleChange}
              className={inputBase}
              placeholder="you@example.com"
              autoComplete="email"
              inputMode="email"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="mb-1 block text-[var(--muted)]"
              style={{ fontSize: "var(--type-scale-5)" }}
            >
              메시지
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className={`${inputBase} min-h-[8rem] resize-y py-3`}
              placeholder="문의 내용을 입력해 주세요."
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="min-h-[var(--touch-min)] rounded-lg border border-[var(--border)] bg-[var(--foreground)] px-6 py-3 font-medium text-[var(--background)] transition-transform hover:scale-105 active:scale-[0.98] disabled:opacity-50"
            style={{ fontSize: "var(--type-scale-4)" }}
          >
            {status === "sending" ? "전송 중…" : "보내기"}
          </button>
          {status === "success" && (
            <p className="text-emerald-400" style={{ fontSize: "var(--type-scale-5)" }}>
              메시지가 전송되었습니다.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400" style={{ fontSize: "var(--type-scale-5)" }}>
              전송에 실패했습니다. EmailJS 설정을 확인해 주세요.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
