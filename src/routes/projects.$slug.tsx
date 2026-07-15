import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Github,
  Target,
  Wrench,
} from "lucide-react";

export type CaseStudy = {
  slug: string;
  name: string;
  tagline: string;
  tag: string;
  timeframe: string;
  role: string;
  tech: string[];
  goals: string[];
  approach: { title: string; body: string }[];
  results: { metric: string; label: string }[];
  highlights: string[];
  links: { label: string; href: string; icon?: "github" | "external" }[];
};

export const CASE_STUDIES: Record<string, CaseStudy> = {
  "banking-microservices": {
    slug: "banking-microservices",
    name: "Banking Microservices",
    tagline:
      "A distributed core-banking backend split into independently deployable services for accounts, customers, and transactions.",
    tag: "distributed-systems",
    timeframe: "Personal project · 2024",
    role: "Sole backend engineer — architecture, implementation, ops",
    tech: [
      "Java 17",
      "Spring Boot",
      "Spring Cloud",
      "Eureka",
      "API Gateway",
      "PostgreSQL",
      "Docker",
      "OpenFeign",
    ],
    goals: [
      "Model a realistic core-banking domain as independent bounded contexts (accounts, customers, transactions).",
      "Practice production-grade service discovery, gateway routing, and inter-service communication patterns.",
      "Keep each service independently deployable, testable, and observable.",
    ],
    approach: [
      {
        title: "Domain decomposition",
        body: "Split the monolith concept into three bounded contexts — accounts, customers, transactions — each with its own PostgreSQL schema. Contracts between services are versioned REST APIs, not shared DB tables.",
      },
      {
        title: "Discovery & routing",
        body: "Eureka handles service registration; a Spring Cloud Gateway fronts every request, doing path-based routing, request logging, and central rate hooks. Clients never talk to services directly.",
      },
      {
        title: "Inter-service comms",
        body: "OpenFeign clients with typed interfaces call sibling services. Transaction service composes account balance updates atomically at the API level, with compensating actions on failure paths.",
      },
      {
        title: "Reliability",
        body: "Structured error responses, request correlation IDs threaded through logs, and containerized services orchestrated with Docker Compose for reproducible local runs.",
      },
    ],
    results: [
      { metric: "3", label: "Independently deployable services" },
      { metric: "100%", label: "Requests routed through gateway" },
      { metric: "<50ms", label: "Median inter-service call latency (local)" },
    ],
    highlights: [
      "Clear separation of concerns — each service owns its schema and lifecycle.",
      "Gateway-first design keeps auth, logging, and rate control in one place.",
      "Ready to slot in Kafka for async workflows (e.g. transaction events → notifications).",
    ],
    links: [
      {
        label: "View on GitHub",
        href: "https://github.com/syam1310",
        icon: "github",
      },
    ],
  },

  "easy-school": {
    slug: "easy-school",
    name: "Easy-School Management System",
    tagline:
      "A role-based school platform with distinct Admin and Student experiences — enrollment, courses, dashboards, and messaging in one API.",
    tag: "platform",
    timeframe: "Personal project · 2023",
    role: "Backend + auth design",
    tech: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA/REST",
      "Thymeleaf",
      "MySQL",
    ],
    goals: [
      "Build a single platform that serves two distinct user types (Admin, Student) without leaking permissions.",
      "Design a data model that scales from a handful of students to thousands without schema rewrites.",
      "Give admins operational visibility — dashboards, enrollment views, communication logs.",
    ],
    approach: [
      {
        title: "Role-based access control",
        body: "Spring Security with role-scoped endpoints and method-level annotations. Every write is authorized against the authenticated principal's role before the service layer runs.",
      },
      {
        title: "Domain model",
        body: "Normalized entities for Student, Class, Course, Enrollment, and Message with JPA relationships. Spring Data JPA/REST exposes safe, filtered projections for the Student role.",
      },
      {
        title: "Communication module",
        body: "Lightweight messaging table with sender/recipient role checks — admins can broadcast, students can only reply to threads they participate in.",
      },
      {
        title: "Dashboards",
        body: "Aggregation endpoints return pre-shaped view models so the UI never runs N+1 queries. Common lookups are indexed on (student_id, course_id).",
      },
    ],
    results: [
      { metric: "2", label: "Distinct role-driven experiences" },
      { metric: "5+", label: "Core entities with clean relationships" },
      { metric: "0", label: "Authorization checks in view layer (all in security)" },
    ],
    highlights: [
      "Auth is centralized — the UI never re-implements permission logic.",
      "Projections keep student responses safe from over-fetching admin fields.",
      "Codebase reads like a template for any role-based CRUD product.",
    ],
    links: [
      {
        label: "View on GitHub",
        href: "https://github.com/syam1310",
        icon: "github",
      },
    ],
  },

  "shop-application": {
    slug: "shop-application",
    name: "Shop Application",
    tagline:
      "A product and inventory backend with public browse endpoints and secure admin management — validated CRUD done right.",
    tag: "rest-api",
    timeframe: "Personal project · 2023",
    role: "Backend engineer",
    tech: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "Bean Validation",
      "MySQL",
    ],
    goals: [
      "Separate public read-only browsing from privileged admin write flows.",
      "Enforce input validation at the API boundary — never trust the client.",
      "Keep the domain layer simple enough to be a reference for future services.",
    ],
    approach: [
      {
        title: "Public vs admin surface",
        body: "Two controller layers under one Spring Security config — /api/products is anonymous read-only, /api/admin/** requires the ADMIN role. Same domain services, different exposure.",
      },
      {
        title: "Validation at the boundary",
        body: "Jakarta Bean Validation on request DTOs (@NotBlank, @Positive, @Size) with a global exception handler that shapes clean, field-level error responses.",
      },
      {
        title: "Domain over anemic models",
        body: "Product and Inventory entities own their invariants (stock never negative, price never null). Services orchestrate; entities enforce.",
      },
      {
        title: "Repository discipline",
        body: "Spring Data JPA repositories with derived queries where possible, custom JPQL only where needed. No native SQL leaking into the service layer.",
      },
    ],
    results: [
      { metric: "2 tiers", label: "Public / admin API separation" },
      { metric: "100%", label: "Endpoints with validated request DTOs" },
      { metric: "1", label: "Global error handler — consistent responses" },
    ],
    highlights: [
      "A textbook Spring Boot REST layout — easy to onboard onto.",
      "Errors are predictable and useful for API consumers.",
      "Scales cleanly to product variants, categories, and cart flows.",
    ],
    links: [
      {
        label: "View on GitHub",
        href: "https://github.com/syam1310",
        icon: "github",
      },
    ],
  },
};

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const study = CASE_STUDIES[params.slug];
    if (!study) throw notFound();
    return study;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.name} — Shyam Prakash Patel` },
          { name: "description", content: loaderData.tagline },
          { property: "og:title", content: `${loaderData.name} — Case study` },
          { property: "og:description", content: loaderData.tagline },
        ]
      : [],
  }),
  component: CaseStudyPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-6 py-32 text-center">
      <h1 className="font-display text-4xl">Case study not found</h1>
      <Link to="/" className="mt-6 inline-block text-primary hover:underline">
        ← back home
      </Link>
    </div>
  ),
});

function CaseStudyPage() {
  const study = Route.useLoaderData() as CaseStudy;

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-4xl px-6 pt-12 pb-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" /> back
        </Link>

        {/* Header */}
        <div className="mt-10">
          <div className="font-mono text-xs text-primary">
            case-study / {study.tag}
          </div>
          <h1 className="font-display mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            {study.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            {study.tagline}
          </p>

          <div className="mt-8 grid gap-4 rounded-xl border border-border bg-card/50 p-6 sm:grid-cols-2">
            <Meta label="Timeframe" value={study.timeframe} />
            <Meta label="Role" value={study.role} />
          </div>

          <div className="mt-6 flex flex-wrap gap-1.5">
            {study.tech.map((t) => (
              <span
                key={t}
                className="rounded border border-border/70 bg-background/40 px-2.5 py-1 font-mono text-xs text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Goals */}
        <Section icon={<Target className="h-5 w-5" />} title="Goals">
          <ul className="space-y-3">
            {study.goals.map((g) => (
              <li key={g} className="flex gap-3 text-muted-foreground">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span className="leading-relaxed">{g}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Approach */}
        <Section icon={<Wrench className="h-5 w-5" />} title="Approach">
          <div className="space-y-6">
            {study.approach.map((a, i) => (
              <div
                key={a.title}
                className="rounded-lg border border-border bg-card/50 p-6"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-lg font-semibold">
                    {a.title}
                  </h3>
                </div>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {a.body}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Results */}
        <Section icon={<CheckCircle2 className="h-5 w-5" />} title="Results">
          <div className="grid gap-4 sm:grid-cols-3">
            {study.results.map((r) => (
              <div
                key={r.label}
                className="rounded-lg border border-primary/30 bg-primary/5 p-5"
              >
                <div className="font-display text-3xl font-bold text-primary">
                  {r.metric}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {r.label}
                </div>
              </div>
            ))}
          </div>
          <ul className="mt-8 space-y-3">
            {study.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-muted-foreground">
                <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                <span className="leading-relaxed">{h}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Links */}
        <div className="mt-16 flex flex-wrap gap-3">
          {study.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-5 py-3 font-medium text-primary transition-all hover:bg-primary/20 hover:shadow-[var(--shadow-glow)]"
            >
              {l.icon === "github" ? (
                <Github className="h-4 w-4" />
              ) : (
                <ArrowUpRight className="h-4 w-4" />
              )}
              {l.label}
            </a>
          ))}
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card/60 px-5 py-3 font-medium transition-colors hover:border-primary/40"
          >
            <ArrowLeft className="h-4 w-4" /> all projects
          </Link>
        </div>
      </div>
    </div>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-mono text-xs uppercase tracking-widest text-primary">
        {label}
      </div>
      <div className="mt-1 text-foreground">{value}</div>
    </div>
  );
}

function Section({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-16">
      <div className="mb-6 flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/15 text-primary">
          {icon}
        </span>
        <h2 className="font-display text-2xl font-semibold tracking-tight">
          {title}
        </h2>
        <div className="h-px flex-1 bg-border" />
      </div>
      {children}
    </section>
  );
}
