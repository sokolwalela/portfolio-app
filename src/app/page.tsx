import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { TechStack } from "@/components/tech-stack";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Contact />
      </main>
      <footer
        className="border-t border-[var(--border)] px-4 py-6 sm:px-6 sm:py-8"
        style={{ paddingBottom: "calc(1.5rem + var(--safe-bottom))" }}
      >
        <div
          className="mx-auto max-w-5xl text-center text-[var(--muted)]"
          style={{ fontSize: "var(--type-scale-5)" }}
        >
          © {new Date().getFullYear()} Portfolio. All rights reserved.
        </div>
      </footer>
    </>
  );
}
