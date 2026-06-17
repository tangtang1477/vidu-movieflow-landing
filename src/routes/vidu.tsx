import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Check,
  Code2,
  Film,
  Gauge,
  Globe2,
  Layers,
  Play,
  ShieldCheck,
  Sparkles,
  Timer,
  Wand2,
  Zap,
} from "lucide-react";
import heroBg from "@/assets/vidu-og.jpg";

export const Route = createFileRoute("/vidu")({
  head: () => ({
    meta: [
      { title: "MovieFlow × Vidu Q3 API — Enterprise AI Video Without Bottlenecks" },
      {
        name: "description",
        content:
          "MovieFlow partners with Vidu Q3: 60s+ 4K consistency, unified multimodal API, 99.9% SLA, and up to 40% lower inference costs for global developers and B2B teams.",
      },
      { property: "og:title", content: "MovieFlow × Vidu Q3 API" },
      {
        property: "og:description",
        content:
          "Enterprise-grade AI video generation. 60s+ 4K, one unified API, 99.9% SLA, transparent pricing.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/vidu" },
      { property: "og:image", content: heroBg },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/vidu" }],
  }),
  component: ViduLanding,
});

const PLATFORM_URL = "https://platform.vidu.com/?utm_source=osm";
const DOCS_URL = "https://wavespeed.ai/docs/docs-api/vidu/vidu-q3-text-to-video";
const PLAYGROUND_URL = "https://wavespeed.ai/models/vidu/q3/text-to-video";

function ViduLanding() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <Hero />
      <LogoStrip />
      <PainSolution />
      <Capabilities />
      <Tiers />
      <Results />
      <Integration />
      <FinalCTA />
      <SiteFooter />
    </div>
  );
}

/* ---------- Nav ---------- */
function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <BrandLockup />
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#capabilities" className="hover:text-foreground transition-colors">Capabilities</a>
          <a href="#tiers" className="hover:text-foreground transition-colors">Pricing</a>
          <a href="#integration" className="hover:text-foreground transition-colors">Integration</a>
          <a href={DOCS_URL} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">Docs</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href={PLAYGROUND_URL} target="_blank" rel="noreferrer" className="hidden sm:block">
            <Button variant="ghost" size="sm">Playground</Button>
          </a>
          <a href={PLATFORM_URL} target="_blank" rel="noreferrer">
            <Button size="sm" className="bg-[image:var(--gradient-brand)] text-background hover:opacity-90">
              Get 1000 Free Credits
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}

function BrandLockup() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2 font-semibold tracking-tight">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-[image:var(--gradient-brand)] text-background">
          <Film className="h-4 w-4" />
        </span>
        MovieFlow
      </div>
      <span className="text-muted-foreground">×</span>
      <div className="flex items-center gap-2 font-semibold tracking-tight">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-border text-foreground">
          <Sparkles className="h-4 w-4" />
        </span>
        Vidu Q3
      </div>
    </div>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundImage: "var(--gradient-hero)" }}
    >
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }} aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1.1fr_1fr] lg:py-32">
        <div>
          <Badge variant="outline" className="border-border/60 bg-background/40 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Partnership · MovieFlow × Vidu Q3
          </Badge>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
            Enterprise AI Video,
            <br />
            <span className="bg-[image:var(--gradient-brand)] bg-clip-text text-transparent">
              without the bottlenecks.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            MovieFlow now ships the <strong className="text-foreground">Vidu Q3</strong> foundation model — 60s+ 4K single-pass generation,
            a unified multimodal API, 99.9% uptime SLA, and up to <strong className="text-foreground">40% lower inference cost</strong>. Built for global developers and B2B teams.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={PLATFORM_URL} target="_blank" rel="noreferrer">
              <Button size="lg" className="bg-[image:var(--gradient-brand)] text-background shadow-[var(--shadow-glow)] hover:opacity-90">
                Claim 1000 Free Credits <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </a>
            <a href={DOCS_URL} target="_blank" rel="noreferrer">
              <Button size="lg" variant="outline" className="border-border/60 bg-background/30 backdrop-blur">
                Read API Docs
              </Button>
            </a>
          </div>
          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-6">
            {[
              { k: "60s+", v: "4K single-pass" },
              { k: "<8s", v: "avg latency / 30s 1080p" },
              { k: "99.9%", v: "uptime SLA" },
            ].map((s) => (
              <div key={s.k}>
                <dt className="text-2xl font-semibold tracking-tight text-foreground">{s.k}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* video poster */}
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border/40 bg-surface shadow-[var(--shadow-elegant)]">
            <img src={heroBg} alt="Vidu Q3 generated cinematic preview" className="absolute inset-0 h-full w-full object-cover opacity-70" width={1216} height={640} />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
            <button
              type="button"
              className="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full bg-background/80 backdrop-blur transition hover:scale-105"
              aria-label="Play demo"
            >
              <Play className="h-6 w-6 translate-x-0.5 text-foreground" />
            </button>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-muted-foreground">
              <span className="rounded-full bg-background/70 px-3 py-1">Q3 Pro · 1080p · 16s</span>
              <span className="rounded-full bg-background/70 px-3 py-1">Reference-to-Video</span>
            </div>
          </div>
          <div className="pointer-events-none absolute -inset-6 -z-10 rounded-3xl bg-[image:var(--gradient-brand)] opacity-20 blur-3xl" />
        </div>
      </div>
    </section>
  );
}

/* ---------- Logo strip ---------- */
function LogoStrip() {
  const items = ["E-commerce", "SaaS", "Film & VFX", "Edtech", "Marketing", "Gaming"];
  return (
    <section className="border-y border-border/40 bg-surface/40">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 py-8">
        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Trusted across industries</span>
        <div className="flex flex-wrap items-center gap-x-10 gap-y-3 text-sm font-medium text-muted-foreground">
          {items.map((i) => (
            <span key={i}>{i}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Pain × Solution ---------- */
function PainSolution() {
  const rows = [
    {
      icon: Film,
      pain: "Models collapse after 8–10s — character drift, scene decay, 10+ hours of manual frame edits.",
      title: "Unbreakable long-sequence consistency",
      solution:
        "60s+ 4K single-pass with proprietary temporal attention. Pixel-perfect characters, lighting, and style across full runtime. 6 sequential cuts in one inference.",
      impact: "−90% post-production, ship campaigns in days.",
    },
    {
      icon: Gauge,
      pain: "Peak latency spikes past 30s, fragile uptime, hard RPM caps that strangle growth.",
      title: "Enterprise-grade reliability",
      solution: "<8s avg latency for 30s 1080p, 99.9% uptime SLA, uncapped concurrent requests for high-volume partners.",
      impact: "Zero churn from slow loads. Scale without bottlenecks.",
    },
    {
      icon: Zap,
      pain: "Opaque pricing, hidden overages, long lock-in contracts at $0.40/s+ for 1080p.",
      title: "Transparent, margin-friendly pricing",
      solution: "Usage-based, no hidden fees, no mandatory lock-in. Up to 40% lower per-second inference cost vs. leading competitors.",
      impact: "Predictable cost forecasting, healthier margins.",
    },
    {
      icon: Layers,
      pain: "3+ APIs stitched together for lip-sync, image-to-video, editing, dubbing — bloating codebase and time-to-market.",
      title: "Unified multimodal architecture",
      solution: "One API for text-to-video, reference-locked I2V, V2V editing, phoneme-level multi-language lip-sync, batch generation and cross-aspect output.",
      impact: "−60% dev time, eliminate fragmented-integration tech debt.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <header className="mb-14 max-w-2xl">
        <Badge variant="outline" className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
          The 4 Bottlenecks · Solved
        </Badge>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
          Every Q3 feature is engineered to unblock production.
        </h2>
        <p className="mt-4 text-muted-foreground">
          No fluff. Each capability maps to a measurable enterprise outcome — built for partners who ship.
        </p>
      </header>

      <div className="grid gap-5 lg:grid-cols-2">
        {rows.map((r) => {
          const Icon = r.icon;
          return (
            <Card key={r.title} className="border-border/40 bg-surface/60 p-8 backdrop-blur transition hover:border-border">
              <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[image:var(--gradient-brand)] text-background">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold tracking-tight">{r.title}</h3>
              <div className="mt-5 space-y-4 text-sm">
                <p className="text-muted-foreground">
                  <span className="mr-2 rounded bg-destructive/15 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-destructive">Pain</span>
                  {r.pain}
                </p>
                <p className="text-foreground/90">
                  <span className="mr-2 rounded bg-[image:var(--gradient-brand)] px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-background">Q3</span>
                  {r.solution}
                </p>
                <p className="flex items-start gap-2 border-t border-border/40 pt-4 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-2" />
                  <span>{r.impact}</span>
                </p>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

/* ---------- Capabilities ---------- */
function Capabilities() {
  const caps = [
    { icon: Wand2, t: "Text-to-Video", d: "Industry-leading prompt adherence, multi-style cinematic output." },
    { icon: Sparkles, t: "Image-to-Video Pro", d: "720p / 1080p / 2K / 4K, motion-rich and reference-locked." },
    { icon: Layers, t: "Reference-to-Video", d: "1–4 reference images for multi-entity consistency, up to 16s." },
    { icon: Timer, t: "Start-End Keyframes", d: "Bridge two keyframes with smooth in-between on Pro tier." },
    { icon: Globe2, t: "Multi-language Lip-Sync", d: "Phoneme-level lip-sync across major global languages." },
    { icon: Code2, t: "Batch & Aspect Optimization", d: "Cross-platform aspect ratios + batch generation in one call." },
  ];
  return (
    <section id="capabilities" className="border-t border-border/40 bg-surface/30">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <header className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Badge variant="outline" className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Capabilities</Badge>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">One API. 8+ production-ready modalities.</h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Fine-tuned on 100M+ hours of commercial video across 8 high-growth industries. Production-ready out of the box.
          </p>
        </header>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border/40 bg-border/40 sm:grid-cols-2 lg:grid-cols-3">
          {caps.map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.t} className="group bg-background p-8 transition hover:bg-surface">
                <Icon className="h-6 w-6 text-brand-2 transition group-hover:text-brand" />
                <h3 className="mt-6 text-lg font-semibold tracking-tight">{c.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Tiers ---------- */
function Tiers() {
  const tiers = [
    {
      name: "Standard",
      price: "$0.25",
      unit: "/ run",
      tag: "Get started fast",
      features: ["Text-to-Video", "Image-to-Video", "Up to 8s outputs", "360p–720p"],
      cta: "Try Standard",
      featured: false,
    },
    {
      name: "Pro",
      price: "$0.60",
      unit: "/ run",
      tag: "Most popular",
      features: ["1–16s outputs", "Reference-to-Video (1–4 imgs)", "Start-End keyframes", "720p / 1080p / 2K / 4K"],
      cta: "Talk to MovieFlow",
      featured: true,
    },
    {
      name: "Turbo",
      price: "$0.35",
      unit: "/ run",
      tag: "Lowest latency",
      features: ["Optimized for speed", "<8s avg / 30s 1080p", "Best for real-time UX", "Batch generation"],
      cta: "Try Turbo",
      featured: false,
    },
  ];
  return (
    <section id="tiers" className="mx-auto max-w-7xl px-6 py-24">
      <header className="mb-14 max-w-2xl">
        <Badge variant="outline" className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Pricing</Badge>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Three tiers. From $0.25/run.</h2>
        <p className="mt-4 text-muted-foreground">
          Transparent, usage-based pricing. No hidden overages, no mandatory long-term contracts. Custom enterprise tiers available.
        </p>
      </header>
      <div className="grid gap-5 lg:grid-cols-3">
        {tiers.map((t) => (
          <Card
            key={t.name}
            className={`relative overflow-hidden p-8 ${
              t.featured
                ? "border-transparent bg-surface shadow-[var(--shadow-glow)]"
                : "border-border/40 bg-surface/40"
            }`}
          >
            {t.featured && (
              <div className="absolute inset-x-0 top-0 h-px bg-[image:var(--gradient-brand)]" />
            )}
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold tracking-tight">{t.name}</h3>
              <span className="text-xs uppercase tracking-wider text-muted-foreground">{t.tag}</span>
            </div>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-4xl font-semibold tracking-tight">{t.price}</span>
              <span className="text-sm text-muted-foreground">{t.unit}</span>
            </div>
            <ul className="mt-6 space-y-3 text-sm">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-2" />
                  <span className="text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>
            <a href={PLATFORM_URL} target="_blank" rel="noreferrer" className="mt-8 block">
              <Button
                className={`w-full ${
                  t.featured
                    ? "bg-[image:var(--gradient-brand)] text-background hover:opacity-90"
                    : ""
                }`}
                variant={t.featured ? "default" : "outline"}
              >
                {t.cta}
              </Button>
            </a>
          </Card>
        ))}
      </div>
    </section>
  );
}

/* ---------- Results ---------- */
function Results() {
  const stats = [
    { k: "−75%", v: "video production time", who: "E-commerce teams" },
    { k: "+32%", v: "product-page conversion", who: "Retail partners" },
    { k: "+45%", v: "user retention", who: "SaaS integrators" },
    { k: "−80%", v: "VFX previz timeline", who: "Film & entertainment" },
  ];
  return (
    <section className="border-y border-border/40 bg-surface/30">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <header className="mb-12 max-w-2xl">
          <Badge variant="outline" className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Proven in closed beta</Badge>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            2,000+ developers. 300+ enterprise partners. Tangible outcomes.
          </h2>
        </header>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border/40 bg-border/40 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.v} className="bg-background p-8">
              <div className="text-4xl font-semibold tracking-tight bg-[image:var(--gradient-brand)] bg-clip-text text-transparent">
                {s.k}
              </div>
              <div className="mt-3 text-sm text-foreground">{s.v}</div>
              <div className="mt-1 text-xs text-muted-foreground">{s.who}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Integration ---------- */
function Integration() {
  const snippet = `// Generate a 16s 1080p clip with Vidu Q3 Pro
const res = await fetch("https://api.movieflow.ai/v1/vidu/q3/text-to-video", {
  method: "POST",
  headers: {
    "Authorization": \`Bearer \${process.env.MOVIEFLOW_API_KEY}\`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    tier: "pro",
    prompt: "Cinematic dolly shot through a neon Tokyo alley at night, rain reflections",
    duration: 16,
    resolution: "1080p",
    aspect_ratio: "16:9",
  }),
});

const { video_url } = await res.json();`;

  return (
    <section id="integration" className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <Badge variant="outline" className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Integration</Badge>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Ship in 2 hours, not 2 sprints.
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Official SDKs for Python, Node.js, Java and Go. Production-ready docs, 24/7 developer support, and dedicated TAMs for enterprise accounts.
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border/40 bg-surface shadow-[var(--shadow-elegant)]">
            <div className="flex items-center justify-between border-b border-border/40 bg-surface-2 px-4 py-3 text-xs text-muted-foreground">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-chart-4/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-brand-2/70" />
              </div>
              <span>node · vidu-q3.ts</span>
            </div>
            <pre className="overflow-x-auto p-5 text-xs leading-relaxed text-foreground/90"><code>{snippet}</code></pre>
          </div>
        </div>
        <div className="space-y-4">
          {[
            { icon: Code2, t: "Official SDKs", d: "Python · Node.js · Java · Go" },
            { icon: ShieldCheck, t: "Global compliance", d: "GDPR · CCPA · PIPL · regional data residency. We never train base models on your input." },
            { icon: Timer, t: "Production-ready docs", d: "Copy-paste examples for every endpoint, with batch & streaming patterns." },
            { icon: Globe2, t: "24/7 developer support", d: "Dedicated technical account managers for enterprise partners." },
          ].map((b) => {
            const Icon = b.icon;
            return (
              <Card key={b.t} className="flex gap-4 border-border/40 bg-surface/40 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-background">
                  <Icon className="h-5 w-5 text-brand-2" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold tracking-tight">{b.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{b.d}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Final CTA ---------- */
function FinalCTA() {
  return (
    <section className="px-6 py-24">
      <div
        className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-border/40 px-10 py-20 text-center shadow-[var(--shadow-glow)]"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      >
        <div className="pointer-events-none absolute inset-0 opacity-30" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="relative">
          <Badge variant="outline" className="border-border/60 bg-background/40 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Launch offer
          </Badge>
          <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
            Claim <span className="bg-[image:var(--gradient-brand)] bg-clip-text text-transparent">1,000 free Vidu credits</span> today.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Usable across every Q3 API endpoint. No expiration. No hidden restrictions. Full access to every enterprise-grade feature.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href={PLATFORM_URL} target="_blank" rel="noreferrer">
              <Button size="lg" className="bg-[image:var(--gradient-brand)] text-background hover:opacity-90">
                Register & claim credits <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </a>
            <a href={DOCS_URL} target="_blank" rel="noreferrer">
              <Button size="lg" variant="outline" className="border-border/60 bg-background/40 backdrop-blur">
                Read the docs
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-12 md:flex-row md:items-center">
        <div className="space-y-2">
          <BrandLockup />
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} MovieFlow × Vidu. All rights reserved.</p>
        </div>
        <div className="flex flex-wrap gap-8 text-sm text-muted-foreground">
          <a href={DOCS_URL} target="_blank" rel="noreferrer" className="hover:text-foreground">Docs</a>
          <a href={PLAYGROUND_URL} target="_blank" rel="noreferrer" className="hover:text-foreground">Playground</a>
          <a href={PLATFORM_URL} target="_blank" rel="noreferrer" className="hover:text-foreground">Get credits</a>
          <a href="mailto:partners@movieflow.ai" className="hover:text-foreground">partners@movieflow.ai</a>
        </div>
      </div>
    </footer>
  );
}
