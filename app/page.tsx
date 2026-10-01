import { BuildVisual } from "@/components/BuildVisual";

const capabilities = [
  {
    code: "01",
    title: "Product engineering",
    body: "End-to-end ownership from discovery through production — architecture, implementation, and the details that keep systems honest.",
  },
  {
    code: "02",
    title: "Platform & API builds",
    body: "Reliable services, clear contracts, and operational footing so your product can grow without rewriting the foundation every quarter.",
  },
  {
    code: "03",
    title: "Design systems",
    body: "Interfaces with intentional type, motion, and component craft — shipped as systems your team can extend, not one-off mockups.",
  },
  {
    code: "04",
    title: "Launch & iteration",
    body: "Instrumentation, release discipline, and fast feedback loops so shipping is a habit, not a ceremony.",
  },
];

const work = [
  {
    name: "Atlas Ledger",
    sector: "Fintech · B2B",
    outcome: "Rebuilt core transaction flows and cut reconciliation time from days to hours for a Series B finance platform.",
  },
  {
    name: "Northline Ops",
    sector: "Logistics · Internal tools",
    outcome: "Designed and shipped an operations console that unified dispatch, inventory, and partner SLAs into one workspace.",
  },
  {
    name: "Signal Clinic",
    sector: "Healthtech · Patient app",
    outcome: "Took a clinical MVP from prototype to App Store launch with HIPAA-aware architecture and a calm patient experience.",
  },
];

const steps = [
  { label: "Discover", detail: "Map constraints, users, and the real shipping target." },
  { label: "Shape", detail: "Define architecture, UX spine, and a build plan you can trust." },
  { label: "Build", detail: "Ship in vertical slices with review, tests, and clear ownership." },
  { label: "Launch", detail: "Harden, measure, and keep iterating with the product team." },
];

export default function Home() {
  return (
    <div className="blueprint-field relative flex min-h-full flex-1 flex-col">
      <div className="grain pointer-events-none absolute inset-0" />

      <header className="relative z-20 mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5 md:px-8 md:py-6">
        <a href="#top" className="font-display text-lg font-bold tracking-tight text-ink md:text-xl">
          Bytes<span className="text-teal">Build</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-ink-soft md:flex">
          <a href="#studio" className="transition-colors hover:text-ink">
            Studio
          </a>
          <a href="#capabilities" className="transition-colors hover:text-ink">
            Capabilities
          </a>
          <a href="#work" className="transition-colors hover:text-ink">
            Work
          </a>
          <a
            href="#contact"
            className="rounded-md bg-ink px-3.5 py-2 text-paper transition-colors hover:bg-teal-deep"
          >
            Start a build
          </a>
        </nav>
        <a
          href="#contact"
          className="rounded-md bg-ink px-3 py-2 text-sm font-medium text-paper md:hidden"
        >
          Contact
        </a>
      </header>

      <main id="top" className="relative z-10 flex-1">
        {/* HERO — one composition: brand, headline, support, CTAs, full-bleed visual */}
        <section className="relative min-h-[min(92vh,920px)] overflow-hidden">
          <BuildVisual />

          <div className="relative mx-auto flex min-h-[min(92vh,920px)] w-full max-w-6xl flex-col justify-center px-5 pb-24 pt-10 md:px-8 md:pb-28 md:pt-6">
            <p className="animate-rise font-mono text-xs uppercase tracking-[0.22em] text-teal-deep md:text-[13px]">
              BytesBuild
            </p>
            <h1 className="animate-rise delay-1 font-display mt-4 max-w-[14ch] text-[clamp(2.6rem,7vw,5.4rem)] font-extrabold leading-[0.95] tracking-[-0.03em] text-ink">
              Software, built with intention.
            </h1>
            <p className="animate-rise delay-2 mt-6 max-w-md text-base leading-relaxed text-ink-soft md:text-lg">
              A boutique product engineering studio for founders who need clarity, craft, and ships that hold up.
            </p>
            <div className="animate-rise delay-3 mt-9 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-amber px-5 py-3 text-sm font-semibold text-amber-ink shadow-[0_10px_30px_rgba(232,163,23,0.28)] transition hover:brightness-105"
              >
                Start a build
              </a>
              <a
                href="#work"
                className="inline-flex items-center justify-center rounded-md border border-ink/15 bg-paper/80 px-5 py-3 text-sm font-semibold text-ink backdrop-blur-sm transition hover:border-teal/40 hover:text-teal-deep"
              >
                See the work
              </a>
            </div>
          </div>
        </section>

        {/* STUDIO */}
        <section id="studio" className="relative border-t border-line bg-paper/55">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-[1.1fr_0.9fr] md:gap-16 md:px-8 md:py-28">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-deep">Studio</p>
              <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
                Senior builders. Short feedback loops. Durable systems.
              </h2>
              <div className="animate-draw mt-5 h-px w-24 origin-left bg-teal" />
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
                BytesBuild LLC partners with product teams as an embedded engineering studio — not a ticket factory.
                We shape the problem, write the critical path, and leave you with code and process you can keep
                shipping on.
              </p>
            </div>
            <ul className="flex flex-col justify-center gap-5 border-l border-line pl-6 md:pl-8">
              {[
                "Product-minded engineers who design as they build",
                "Clear scopes, visible progress, no black-box sprints",
                "Stack-agnostic delivery — we meet you where you are",
              ].map((item) => (
                <li key={item} className="text-base text-ink-soft md:text-lg">
                  <span className="mr-3 inline-block h-1.5 w-1.5 rounded-full bg-teal align-middle" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section id="capabilities" className="relative border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
            <div className="max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-deep">Capabilities</p>
              <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
                What we take ownership of
              </h2>
              <p className="mt-4 text-base text-ink-soft md:text-lg">
                Focused engagements across the product lifecycle — from first commit to scale.
              </p>
            </div>

            <div className="mt-12 divide-y divide-line border-y border-line">
              {capabilities.map((cap) => (
                <article
                  key={cap.code}
                  className="group grid gap-3 py-8 transition-colors md:grid-cols-[88px_1fr_1.2fr] md:items-baseline md:gap-8"
                >
                  <span className="font-mono text-sm text-ink-muted transition-colors group-hover:text-teal">
                    {cap.code}
                  </span>
                  <h3 className="font-display text-xl font-bold text-ink md:text-2xl">{cap.title}</h3>
                  <p className="text-base leading-relaxed text-ink-soft">{cap.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="relative border-t border-line bg-[linear-gradient(180deg,rgba(244,247,250,0.7),rgba(232,237,242,0.9))]">
          <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-deep">Selected work</p>
                <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
                  Outcomes over theater
                </h2>
              </div>
              <p className="max-w-sm text-sm text-ink-muted md:text-right">
                Representative engagements. Client names stylized where confidentiality applies.
              </p>
            </div>

            <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-3">
              {work.map((item) => (
                <article key={item.name} className="bg-paper p-7 md:p-8">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-teal-deep">
                    {item.sector}
                  </p>
                  <h3 className="font-display mt-3 text-2xl font-bold text-ink">{item.name}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-ink-soft md:text-base">{item.outcome}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="relative border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-deep">Process</p>
            <h2 className="font-display mt-3 max-w-xl text-3xl font-bold tracking-tight text-ink md:text-4xl">
              A path from ambiguity to shipped
            </h2>

            <ol className="mt-12 grid gap-8 md:grid-cols-4 md:gap-6">
              {steps.map((step, i) => (
                <li key={step.label} className="relative">
                  <span className="font-mono text-sm text-ink-muted">0{i + 1}</span>
                  <h3 className="font-display mt-2 text-xl font-bold text-ink">{step.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.detail}</p>
                  {i < steps.length - 1 && (
                    <span
                      aria-hidden
                      className="absolute right-0 top-3 hidden h-px w-8 bg-teal/50 md:block lg:w-12"
                      style={{ right: "-1.25rem" }}
                    />
                  )}
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="relative border-t border-line bg-ink text-paper">
          <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-20 md:flex-row md:items-end md:justify-between md:px-8 md:py-28">
            <div className="max-w-xl">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal">Next build</p>
              <h2 className="font-display mt-3 text-3xl font-bold tracking-tight md:text-5xl">
                Tell us what you&apos;re shipping.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-paper/70 md:text-lg">
                Share the product, the constraint, and the timeline. We&apos;ll reply with a clear take on fit and
                next steps.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="mailto:hello@bytesbuild.app"
                className="inline-flex items-center justify-center rounded-md bg-amber px-6 py-3.5 text-sm font-semibold text-amber-ink transition hover:brightness-105"
              >
                hello@bytesbuild.app
              </a>
              <a
                href="https://bytesbuild.app"
                className="inline-flex items-center justify-center rounded-md border border-paper/20 px-6 py-3.5 text-sm font-medium text-paper/80 transition hover:border-teal hover:text-teal"
              >
                bytesbuild.app
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-paper/10 bg-ink px-5 py-8 text-sm text-paper/50 md:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>
            <span className="font-display font-bold text-paper">BytesBuild</span> LLC · Product engineering studio
          </p>
          <p className="font-mono text-xs tracking-wide">© {new Date().getFullYear()} · Crafted for the build</p>
        </div>
      </footer>
    </div>
  );
}
