import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Award,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Terminal,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    title: "Shyam Prakash Patel | Backend Engineer Portfolio",
    meta: [
      {
        name: "description",
        content:
          "Portfolio of Shyam Prakash Patel, a backend engineer focused on Java, Spring Boot, microservices, REST APIs, and scalable enterprise systems.",
      },
      {
        name: "keywords",
        content:
          "Shyam Patel portfolio, Shyam Prakash Patel, Java backend engineer, Spring Boot portfolio, backend engineer India, microservices portfolio",
      },
      {
        name: "robots",
        content: "index,follow,max-snippet:-1,max-image-preview:large",
      },
      {
        property: "og:title",
        content: "Shyam Prakash Patel | Backend Engineer Portfolio",
      },
      {
        property: "og:description",
        content:
          "Explore the portfolio of Shyam Prakash Patel, a backend engineer building high-throughput Java and Spring Boot systems.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:title",
        content: "Shyam Prakash Patel | Backend Engineer Portfolio",
      },
      {
        name: "twitter:description",
        content:
          "Backend engineer portfolio covering Java, Spring Boot, microservices, and enterprise APIs.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Portfolio,
});

const SKILLS: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["Java", "SQL", "JavaScript", "HTML", "CSS"],
  },
  {
    group: "Frameworks",
    items: [
      "Spring Boot",
      "Spring MVC",
      "Spring Security",
      "Hibernate",
      "Spring Data JPA/REST",
    ],
  },
  {
    group: "Distributed Systems",
    items: [
      "Microservices",
      "Eureka",
      "API Gateway",
      "REST APIs",
      "Inter-service Comms",
    ],
  },
  {
    group: "Databases",
    items: ["PostgreSQL", "MySQL", "Schema Design", "Query Optimization"],
  },
  {
    group: "Infra & Tools",
    items: ["Apache Kafka", "Docker", "Git / GitHub", "Maven", "Postman"],
  },
  {
    group: "Testing & CS",
    items: ["JUnit", "Integration Testing", "DSA", "System Design", "SOLID"],
  },
];

const PROJECTS = [
  {
    slug: "banking-microservices",
    name: "Banking Microservices",
    tag: "distributed-systems",
    desc: "Distributed microservices for account, transaction, and customer management with REST-based inter-service communication.",
    tech: ["Java", "Spring Boot", "Microservices", "PostgreSQL"],
  },
  {
    slug: "easy-school",
    name: "Easy-School Management",
    tag: "platform",
    desc: "Role-based school platform supporting Admin & Student workflows — course management, enrollment, dashboards, and messaging.",
    tech: ["Spring Boot", "Spring Security", "JPA/REST", "MySQL"],
  },
  {
    slug: "shop-application",
    name: "Shop Application",
    tag: "rest-api",
    desc: "Backend for public product browsing and secure admin inventory. Validated CRUD, RBAC, and clean, maintainable domain layers.",
    tech: ["Java", "Spring Boot", "JPA", "MySQL"],
  },
] as const;

const METRICS = [
  { value: "10K+", label: "Daily API transactions" },
  { value: "99.9%", label: "Uptime on mission-critical systems" },
  { value: "60%", label: "Reduction in execution time" },
  { value: "600+", label: "Algorithms solved (LC / GfG)" },
];

function Portfolio() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm">
          <Terminal className="h-4 w-4 text-primary" />
          <span className="text-muted-foreground">~/</span>
          <span className="font-semibold">shyam.patel</span>
          <span className="animate-pulse text-primary">_</span>
        </a>
        <nav className="hidden items-center gap-8 font-mono text-sm text-muted-foreground md:flex">
          {[
            ["about", "#about"],
            ["experience", "#experience"],
            ["projects", "#projects"],
            ["contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="transition-colors hover:text-primary"
            >
              <span className="text-primary">#</span>
              {label}
            </a>
          ))}
        </nav>
        <a
          href="mailto:psyam0175@gmail.com"
          className="inline-flex items-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-4 py-2 font-mono text-xs text-primary transition-all hover:bg-primary/20 hover:shadow-[var(--shadow-glow)]"
        >
          get in touch
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="grid-bg absolute inset-0 opacity-40" />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-32 md:pt-32 md:pb-40">
        <div className="flex items-center gap-2 font-mono text-xs text-primary">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-primary shadow-[0_0_12px] shadow-primary" />
          available for opportunities
        </div>
        <h1 className="font-display mt-6 text-5xl leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
          Shyam Prakash
          <br />
          <span className="text-gradient">Patel.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          Portfolio of <span className="text-foreground">Shyam Prakash Patel</span>, a backend engineer building{" "}
          <span className="text-foreground">Spring Boot microservices</span> and{" "}
          <span className="text-foreground">high-throughput REST APIs</span>{" "}
          that power enterprise ALM platforms for Fortune 500 customers.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3 font-mono text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-3 py-1.5">
            <MapPin className="h-3 w-3" /> India
          </span>
          <span className="rounded-full border border-border bg-card/60 px-3 py-1.5">
            3+ yrs @ OpenText
          </span>
          <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1.5 text-primary">
            Java · Spring · Microservices
          </span>
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)]"
          >
            View projects
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="https://github.com/syam1310"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card/60 px-6 py-3 font-medium transition-colors hover:border-primary/50"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href="https://leetcode.com/u/Syam131025/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card/60 px-6 py-3 font-medium transition-colors hover:border-primary/50"
          >
            <ExternalLink className="h-4 w-4" /> LeetCode
          </a>
          <a
            href="https://www.geeksforgeeks.org/profile/psyam0175?tab=activity"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card/60 px-6 py-3 font-medium transition-colors hover:border-primary/50"
          >
            <ExternalLink className="h-4 w-4" /> GeeksforGeeks
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4">
          {METRICS.map((m) => (
            <div
              key={m.label}
              className="rounded-lg border border-border bg-card/40 p-5 backdrop-blur-sm"
            >
              <div className="font-display text-3xl font-bold text-primary md:text-4xl">
                {m.value}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ n, title }: { n: string; title: string }) {
  return (
    <div className="mb-12 flex items-center gap-4">
      <span className="font-mono text-sm text-primary">{n}</span>
      <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionLabel n="01." title="About" />
      <div className="grid gap-10 md:grid-cols-5">
        <div className="md:col-span-3 space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            I&apos;m a backend software engineer with{" "}
            <span className="text-foreground">3+ years</span> of experience
            designing, scaling, and operating Spring Boot microservices for
            regulated enterprise platforms.
          </p>
          <p>
            At <span className="text-foreground">OpenText</span>, I build ALM
            workflows serving Fortune 500 customers — deep in distributed
            systems, performance optimization, and secure authentication
            (JWT, RBAC, 21 CFR Part 11 audit compliance).
          </p>
          <p>
            I care about clean domain design, code that stays maintainable at
            scale, and shipping features that actually move a metric.
          </p>
        </div>
        <div className="md:col-span-2">
          <div className="rounded-lg border border-border bg-card/60 p-6 font-mono text-sm">
            <div className="flex items-center gap-1.5 border-b border-border pb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
              <span className="ml-2 text-xs text-muted-foreground">
                shyam.sh
              </span>
            </div>
            <pre className="mt-4 whitespace-pre-wrap leading-relaxed text-muted-foreground">
              <span className="text-primary">$</span> whoami
              {"\n"}shyam — backend engineer
              {"\n\n"}
              <span className="text-primary">$</span> cat stack.txt
              {"\n"}java · spring-boot · postgres
              {"\n"}kafka · docker · microservices
              {"\n\n"}
              <span className="text-primary">$</span> uptime
              {"\n"}
              <span className="text-accent">
                99.9% across mission-critical APIs
              </span>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <SectionLabel n="02." title="Experience" />
      <div className="rounded-xl border border-border bg-card/50 p-8 md:p-10">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="font-mono text-xs text-primary">
              Dec 2022 — Present
            </div>
            <h3 className="font-display mt-2 text-2xl font-semibold md:text-3xl">
              Software Development Engineer
            </h3>
            <div className="mt-1 text-muted-foreground">
              OpenText · India
            </div>
          </div>
          <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-xs text-accent">
            🏆 Innovation of the Quarter · 2025
          </span>
        </div>

        <ul className="mt-8 space-y-4">
          {[
            "Designed and scaled Spring Boot microservices powering enterprise ALM workflows for Fortune 500 customers in regulated industries.",
            "Built high-throughput REST APIs handling 10,000+ daily transactions with 99.9% uptime across mission-critical systems.",
            "Implemented auth using Spring Security, JWT, and RBAC; designed audit logging compliant with 21 CFR Part 11.",
            "Optimized DB queries, caching strategies, and batch pipelines — reduced execution time by 60% and grew throughput from 50 → 200 TPS.",
            "Owned features end-to-end, collaborating with product, frontend, QA, and security teams.",
            "Mentored 4 junior engineers, led design discussions, and conducted technical interviews.",
          ].map((line) => (
            <li key={line} className="flex gap-3 text-muted-foreground">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              <span className="leading-relaxed">{line}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <SectionLabel n="03." title="Stack" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((s) => (
          <div
            key={s.group}
            className="group rounded-lg border border-border bg-card/50 p-6 transition-all hover:border-primary/40 hover:bg-card"
          >
            <div className="font-mono text-xs uppercase tracking-widest text-primary">
              {s.group}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {s.items.map((i) => (
                <span
                  key={i}
                  className="rounded-md border border-border bg-background/40 px-2.5 py-1 text-sm text-foreground/90"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function projectMatchesQuery(
  project: (typeof PROJECTS)[number],
  query: string,
) {
  if (!query) return true;
  const normalizedQuery = query.trim().toLowerCase();
  const haystack = [
    project.name,
    project.desc,
    project.tag,
    project.slug,
    ...project.tech,
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(normalizedQuery);
}

function Projects() {
  const [query, setQuery] = useState("");

  const filteredProjects = useMemo(
    () => PROJECTS.filter((project) => projectMatchesQuery(project, query)),
    [query],
  );

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <SectionLabel n="04." title="Selected projects" />

      <div className="mb-8 max-w-3xl">
        <label htmlFor="project-search" className="sr-only">
          Search projects
        </label>
        <input
          id="project-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by project name, tag, tech, or description"
          className="w-full rounded-2xl border border-border bg-background/80 px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>

      {filteredProjects.length === 0 ? (
        <div className="rounded-2xl border border-border bg-card/50 p-10 text-center text-sm text-muted-foreground">
          No projects match “{query}”. Try a different keyword.
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-3">
          {filteredProjects.map((p, i) => (
            <Link
              key={p.name}
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card/50 p-6 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-muted-foreground">
                  0{i + 1} / {p.tag}
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </div>
              <h3 className="font-display mt-6 text-xl font-semibold group-hover:text-primary">
                {p.name}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {p.desc}
              </p>
              <div className="mt-6 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded border border-border/70 bg-background/40 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <span className="mt-6 font-mono text-xs text-primary opacity-0 transition-opacity group-hover:opacity-100">
                read case study →
              </span>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}

function Achievements() {
  const items = [
    {
      title: "Innovation of the Quarter (2025)",
      body: "OpenText — feature adopted by 100+ enterprise customers, saving 1000+ engineering hours monthly.",
    },
    {
      title: "Multiple Spot Awards",
      body: "Recognized for technical excellence and end-to-end ownership across releases.",
    },
    {
      title: "600+ problems solved",
      body: "Deep DSA practice on LeetCode & GeeksforGeeks — pattern-fluent across graphs, DP, and system design.",
    },
    {
      title: "B.Tech, Information Technology",
      body: "Dr. A.P.J. Abdul Kalam Technical University · FGIET, 2022.",
    },
  ];
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <SectionLabel n="05." title="Recognition & education" />
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((it) => (
          <div
            key={it.title}
            className="flex gap-4 rounded-lg border border-border bg-card/50 p-6"
          >
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-primary/15 text-primary">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold">{it.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{it.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card/60 p-10 md:p-16">
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="relative">
          <span className="font-mono text-sm text-primary">05. contact</span>
          <h2 className="font-display mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Let&apos;s build something{" "}
            <span className="text-gradient">reliable.</span>
          </h2>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            I&apos;m open to backend engineering roles and interesting
            distributed-systems work. Drop a note — I reply within a day.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="mailto:psyam0175@gmail.com"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)]"
            >
              <Mail className="h-4 w-4" /> psyam0175@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/syam187"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background/40 px-6 py-3 font-medium transition-colors hover:border-primary/40"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href="https://github.com/syam1310"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background/40 px-6 py-3 font-medium transition-colors hover:border-primary/40"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href="https://leetcode.com/u/Syam131025/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background/40 px-6 py-3 font-medium transition-colors hover:border-primary/40"
            >
              <ExternalLink className="h-4 w-4" /> LeetCode
            </a>
            <a
              href="https://www.geeksforgeeks.org/profile/psyam0175?tab=activity"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background/40 px-6 py-3 font-medium transition-colors hover:border-primary/40"
            >
              <ExternalLink className="h-4 w-4" /> GeeksforGeeks
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-8 font-mono text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} Shyam Prakash Patel</span>
        <span>
          built with <span className="text-primary">care</span> · +91 8115755970
        </span>
      </div>
    </footer>
  );
}
