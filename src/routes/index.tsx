import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Check,
  Code2,
  Film,
  Gauge,
  Globe2,
  HelpCircle,
  Layers,
  MessageCircle,
  Send,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Timer,
  Trophy,
  Users,
  Wand2,
  Zap,
} from "lucide-react";
import heroBg from "@/assets/vidu-og.jpg";
import viduHeroVideo from "@/assets/vidu-hero.mp4.asset.json";
import movieflowLogo from "@/assets/movieflow-logo.png.asset.json";
import viduIcon from "@/assets/vidu-icon.png.asset.json";

export const Route = createFileRoute("/")({
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
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroBg },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: ViduLanding,
});

const PLATFORM_URL = "https://platform.vidu.com/?utm_source=osm";
const DOCS_URL = "https://wavespeed.ai/docs/docs-api/vidu/vidu-q3-text-to-video";
const PLAYGROUND_URL = "https://wavespeed.ai/models/vidu/q3/text-to-video";

const SECTION_CHIPS = [
  { id: "overview", label: "OVERVIEW" },
  { id: "capabilities", label: "ENDPOINTS" },
  { id: "examples", label: "EXAMPLES" },
  { id: "tiers", label: "PRICING" },
  { id: "integration", label: "API" },
  { id: "results", label: "RESULTS" },
  { id: "faq", label: "PARTNERSHIP" },
];

function ViduLanding() {
  return (
    <div className="vidu-dark min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <SectionChips />
      <Hero />
      <About />
      <PainSolution />
      <Capabilities />
      <Tiers />
      <CreatorChallenge />
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
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-8">
        <BrandLockup />
        <nav className="hidden items-center gap-9 text-sm text-muted-foreground md:flex">
          <a href="#capabilities" className="transition-colors hover:text-foreground">Capabilities</a>
          <a href="#tiers" className="transition-colors hover:text-foreground">Pricing</a>
          <a href="#integration" className="transition-colors hover:text-foreground">API</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href={PLAYGROUND_URL} target="_blank" rel="sponsored noreferrer" className="hidden sm:block">
            <Button variant="ghost" size="sm" className="text-foreground hover:bg-secondary">Toolkit</Button>
          </a>
          <a href={PLATFORM_URL} target="_blank" rel="sponsored noreferrer">
            <Button size="sm" className="rounded-full bg-foreground px-4 text-background hover:bg-foreground/90">
              Sign In
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}

function BrandLockup() {
  return (
    <div className="flex items-center gap-3 text-base">
      <div className="flex items-center gap-2 font-semibold tracking-tight">
        <img src={movieflowLogo.url} alt="MovieFlow" className="h-8 w-auto" />
      </div>
      <span className="text-muted-foreground/60">×</span>
      <div className="flex items-center gap-2 font-semibold tracking-tight">
        <img src={viduIcon.url} alt="Vidu" className="h-6 w-6 rounded" />
        Vidu
      </div>
    </div>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section id="overview" className="relative overflow-hidden border-b border-border">
      {/* breadcrumb */}
      <div className="mx-auto max-w-[1400px] px-8 pt-10">
        <div className="font-mono text-xs text-muted-foreground">
          <a href="/" className="hover:text-foreground">Home</a>
          <span className="mx-2">/</span>
          <a href="#" className="hover:text-foreground">AI Models</a>
          <span className="mx-2">/</span>
          <span className="text-foreground">Vidu Q3 × MovieFlow</span>
        </div>
      </div>

      <div className="relative mx-auto grid max-w-[1400px] gap-14 px-8 py-16 lg:grid-cols-[1.15fr_1fr] lg:py-20">
        <div>
          <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
            <span>Shengshu</span>
            <span className="text-muted-foreground/40">·</span>
            <span>VIDEO</span>
            <span className="text-muted-foreground/40">·</span>
            <span>From $0.25/run</span>
          </div>
          <h1 className="mt-6 text-[64px] font-bold leading-[1.02] tracking-tight md:text-[88px]">
            Vidu Q3
            <br />
            <span className="text-primary">× MovieFlow</span>
          </h1>
          <p className="mt-8 max-w-xl text-[17px] leading-relaxed text-muted-foreground">
            Shengshu Vidu Q3 — text-to-video, image-to-video, reference-to-video
            (1–4 reference images for multi-entity consistency), and start-end-to-video.
            Three tiers: <span className="text-foreground">Standard, Pro, Turbo.</span> Up to 16-second outputs.
            Now shipping inside MovieFlow with a unified API, 99.9% SLA, and up to 40% lower cost.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href={PLAYGROUND_URL} target="_blank" rel="sponsored noreferrer">
              <Button size="lg" className="h-12 rounded-md bg-foreground px-6 text-background hover:bg-foreground/90">
                Open Toolkit <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </a>
            <Link to="/">
              <Button size="lg" variant="outline" className="h-12 rounded-md border-border bg-secondary px-6 text-foreground hover:bg-secondary/70">
                Try Vidu Q3
              </Button>
            </Link>
          </div>
        </div>

        {/* video */}
        <div className="relative">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-card">
            <video
              src={viduHeroVideo.url}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Section chips ---------- */
function SectionChips() {
  const [active, setActive] = useState("overview");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    SECTION_CHIPS.forEach((c) => {
      const el = document.getElementById(c.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="sticky top-16 z-40 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-[1400px] overflow-x-auto px-8 py-5">
        <div className="flex items-center gap-2">
          {SECTION_CHIPS.map((c) => {
            const isActive = active === c.id;
            return (
              <a
                key={c.id}
                href={`#${c.id}`}
                className={`relative rounded-full border px-4 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors ${
                  isActive
                    ? "border-primary/60 bg-primary/10 text-primary"
                    : "border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {c.label}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- About ---------- */
function About() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-[1400px] px-8 py-24">
        <h2 className="text-[44px] font-bold tracking-tight md:text-[56px]">About the Vidu Q3 × MovieFlow API</h2>
        <p className="mt-4 max-w-3xl text-muted-foreground">
          What Vidu Q3 does, how it fits in the Shengshu model lineup, and why teams reach for it on MovieFlow.
        </p>

        <div className="mt-12 grid gap-12 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-6 text-[15px] leading-relaxed text-muted-foreground">
            <p>
              Vidu Q3 is a video generation model from Shengshu, available through the MovieFlow REST API.
              Shengshu Vidu Q3 — text-to-video, image-to-video, reference-to-video (1–4 reference images for
              multi-entity consistency), and start-end-to-video. Three tiers: Standard, Pro, Turbo. Up to
              16-second outputs on some variants.
            </p>
            <p>
              Standard, Pro (1–16s outputs), and Turbo (faster) tiers. Reference-to-video accepts 1–4 reference
              images for multi-entity consistent videos at 360p–1080p, up to 16 seconds. Start-end-to-video
              bridges two keyframes (1–16s on Pro). Image-to-video-pro variant supports 720p/1080p/2K/4K.
            </p>
            <p>
              The Vidu Q3 family on MovieFlow ships 11 REST endpoints covering image-to-video, text-to-video,
              and reference-to-video workflows. Each variant carries its own pricing, parameter knobs, and
              example outputs — pick the one that matches your input modality and production constraints, or
              call several from the same API key to compose multi-step pipelines.
            </p>
          </div>

          <div className="space-y-3">
            {[
              { k: "Modality", v: "Text · Image · Reference · Keyframes" },
              { k: "Resolution", v: "360p → 4K" },
              { k: "Duration", v: "Up to 16s" },
              { k: "Latency", v: "<8s avg / 30s 1080p" },
              { k: "Uptime SLA", v: "99.9%" },
              { k: "Pricing", v: "From $0.25 / run" },
            ].map((row) => (
              <div key={row.k} className="flex items-center justify-between border-b border-border py-3 font-mono text-xs">
                <span className="uppercase tracking-wider text-muted-foreground">{row.k}</span>
                <span className="text-foreground">{row.v}</span>
              </div>
            ))}
          </div>
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
      solution: "Single-pass long-form generation with temporal attention. Characters, lighting, and style lock across full runtime.",
      impact: "−90% post-production, ship campaigns in days.",
    },
    {
      icon: Gauge,
      pain: "Peak latency spikes past 30s, fragile uptime, hard RPM caps that strangle growth.",
      title: "Enterprise-grade reliability",
      solution: "<8s avg latency for 30s 1080p, 99.9% uptime SLA, uncapped concurrency for high-volume partners.",
      impact: "Zero churn from slow loads. Scale without bottlenecks.",
    },
    {
      icon: Zap,
      pain: "Opaque pricing, hidden overages, long lock-in at $0.40/s+ for 1080p.",
      title: "Transparent pricing",
      solution: "Usage-based, no hidden fees, no lock-in. Up to 40% lower per-second inference cost vs. competitors.",
      impact: "Predictable cost forecasting, healthier margins.",
    },
    {
      icon: Layers,
      pain: "3+ APIs stitched for lip-sync, I2V, editing, dubbing — bloating codebase and time-to-market.",
      title: "Unified multimodal architecture",
      solution: "One API for T2V, reference-locked I2V, V2V editing, multi-language lip-sync, batch + cross-aspect output.",
      impact: "−60% dev time, eliminate fragmented-integration tech debt.",
    },
  ];

  return (
    <section id="examples" className="border-b border-border">
      <div className="mx-auto max-w-[1400px] px-8 py-24">
        <SectionLabel>The 4 Bottlenecks · Solved</SectionLabel>
        <h2 className="mt-6 text-[44px] font-bold tracking-tight md:text-[56px] whitespace-nowrap">
          Every Q3 feature maps to a production outcome.
        </h2>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-2">
          {rows.map((r) => {
            const Icon = r.icon;
            return (
              <div key={r.title} className="group bg-background p-8 transition hover:bg-card">
                <div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-semibold tracking-tight">{r.title}</h3>
                <div className="mt-5 space-y-4 text-sm">
                  <p className="text-muted-foreground">
                    <span className="mr-2 font-mono text-[10px] uppercase tracking-wider text-destructive/80">// pain</span>
                    <br />
                    {r.pain}
                  </p>
                  <p className="text-foreground/90">
                    <span className="mr-2 font-mono text-[10px] uppercase tracking-wider text-primary">// q3</span>
                    <br />
                    {r.solution}
                  </p>
                  <p className="flex items-start gap-2 border-t border-border pt-4 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{r.impact}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Capabilities ---------- */
function Capabilities() {
  const caps = [
    { tag: "text-to-video", t: "Text-to-Video", d: "Industry-leading prompt adherence, multi-style cinematic output.", icon: Wand2 },
    { tag: "image-to-video-pro", t: "Image-to-Video Pro", d: "720p / 1080p / 2K / 4K, motion-rich and reference-locked.", icon: Sparkles },
    { tag: "reference-to-video", t: "Reference-to-Video", d: "1–4 reference images for multi-entity consistency, up to 16s.", icon: Layers },
    { tag: "start-end-to-video", t: "Start-End Keyframes", d: "Bridge two keyframes with smooth in-between on Pro tier.", icon: Timer },
    { tag: "lip-sync", t: "Multi-language Lip-Sync", d: "Phoneme-level lip-sync across major global languages.", icon: Globe2 },
    { tag: "batch", t: "Batch & Aspect", d: "Cross-platform aspect ratios + batch generation in one call.", icon: Code2 },
  ];
  return (
    <section id="capabilities" className="border-b border-border bg-background">
      <div className="mx-auto max-w-[1400px] px-8 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <SectionLabel>Endpoints</SectionLabel>
            <h2 className="mt-6 text-[44px] font-bold tracking-tight md:text-[56px]">
              One API. <span className="text-primary">8+ modalities.</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Fine-tuned on 100M+ hours of commercial video across 8 high-growth industries. Production-ready out of the box.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {caps.map((c) => {
            const Icon = c.icon;
            return (
              <a
                key={c.t}
                href={PLAYGROUND_URL}
                target="_blank"
                rel="sponsored noreferrer"
                className="group relative flex flex-col bg-background p-8 transition hover:bg-card"
              >
                <div className="flex items-center justify-between">
                  <Icon className="h-6 w-6 text-primary" />
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:text-foreground" />
                </div>
                <div className="mt-6 inline-block self-start rounded-full border border-border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  vidu/q3/{c.tag}
                </div>
                <h3 className="mt-3 text-xl font-semibold tracking-tight">{c.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
              </a>
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
      tag: "Get started",
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
      cta: "Try Pro",
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
    <section id="tiers" className="border-b border-border">
      <div className="mx-auto max-w-[1400px] px-8 py-24">
        <SectionLabel>Pricing</SectionLabel>
        <h2 className="mt-6 max-w-3xl text-[44px] font-bold tracking-tight md:text-[56px]">
          Three tiers. From $0.25 / run.
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Transparent, usage-based pricing. No hidden overages, no mandatory contracts. Custom enterprise tiers available.
        </p>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className="group relative overflow-hidden rounded-2xl border border-border/30 bg-background p-8 transition hover:z-10 hover:border-primary/40 hover:bg-card hover:shadow-[var(--shadow-glow)]"
            >
              {t.featured && (
                <div className="absolute right-6 top-6 rounded-full border border-primary/20 bg-primary/5 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary/40 transition group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:text-primary">
                  Featured
                </div>
              )}
              <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground/30 transition group-hover:text-muted-foreground">{t.tag}</div>
              <h3 className="mt-2 text-3xl font-bold tracking-tight text-foreground/40 transition group-hover:text-foreground">{t.name}</h3>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-5xl font-bold tracking-tight text-foreground/40 transition group-hover:text-foreground">{t.price}</span>
                <span className="text-sm text-muted-foreground/40 transition group-hover:text-muted-foreground">{t.unit}</span>
              </div>
              <ul className="mt-8 space-y-3 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary/20 transition group-hover:text-primary" />
                    <span className="text-muted-foreground/40 transition group-hover:text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <a href={PLATFORM_URL} target="_blank" rel="sponsored noreferrer" className="mt-10 block">
                <Button
                  className="h-11 w-full rounded-md border border-border/30 bg-transparent text-muted-foreground/40 transition group-hover:border-primary group-hover:bg-primary group-hover:text-background"
                >
                  {t.cta} <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Creator Challenge ---------- */
function CreatorChallenge() {
  const steps = [
    {
      icon: MessageCircle,
      title: "Join",
      desc: "Join the #vidu-shortsrush-showcase channel and DM to register",
    },
    {
      icon: Wand2,
      title: "Create",
      desc: "Create a cinematic AI short using Vidu workflow on MovieFlow",
    },
    {
      icon: Smartphone,
      title: "Post",
      desc: "Post it on TikTok, YouTube Shorts, Instagram Reels, or X. Tag @MovieFlow and @ViduAI. Use hashtags: #MovieFlowAI #ViduAI #AIShorts #AIMonetization",
    },
    {
      icon: Send,
      title: "Submit",
      desc: "Submit your link in the showcase channel or via the event form",
    },
  ];

  const prizes = [
    { title: "Grand Prize", value: "$500", count: "× 1" },
    { title: "Runner-Up", value: "$300", count: "× 2" },
    { title: "Best Hook", value: "$200", count: "× 3" },
    { title: "Best Vidu Execution", value: "$150", count: "× 5" },
    { title: "Community Resonance Award", value: "$100", count: "× 10" },
    { title: "Participation Credits", value: "2000 credits", count: "× 20" },
  ];

  const faqs = [
    {
      q: "Does this challenge guarantee that I can make money?",
      a: "No. This challenge does not guarantee income, views, followers, or monetization. It helps creators test AI short-form content workflows faster.",
    },
    {
      q: "Can I use real celebrities or popular film / TV characters?",
      a: "No. Do not use real celebrities, public figures, copyrighted characters, or unauthorized IP.",
    },
    {
      q: "Do I have to use Vidu?",
      a: "Yes. This is a MovieFlow × Vidu challenge. Valid entries must be created using Vidu on MovieFlow.",
    },
    {
      q: "Does the work have to be new?",
      a: "Yes. Only new works created during the event period are eligible.",
    },
    {
      q: "Can I submit multiple works?",
      a: "Yes. Each creator can submit up to 5 works, but can only win one major prize.",
    },
    {
      q: "Can MovieFlow use my work?",
      a: "By submitting, you agree that MovieFlow and Vidu may showcase your work in official social posts, campaign pages, community posts, recap videos, and promotional materials, with creator credit.",
    },
  ];

  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-[1400px] px-8 py-24">
        <SectionLabel>Creator Challenge</SectionLabel>
        <h2 className="mt-6 text-[44px] font-bold tracking-tight md:text-[56px]">
          Shorts to Spotlight
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          One-Dollar Movie Sprint — official creator challenge by MovieFlow × Vidu.
        </p>

        {/* Challenge Intro */}
        <div className="mt-14 rounded-2xl border border-border bg-card p-8 md:p-12">
          <div className="space-y-6 text-[15px] leading-relaxed text-muted-foreground">
            <p>
              This isn&apos;t just another AI art contest. We want to see cinematic AI shorts that creators can actually post, test, and build sustainable content workflows around.
            </p>
            <p>
              Use Vidu on MovieFlow to create a cinematic AI short (any duration). Post it. Submit it. Build your AI content workflow.
            </p>
          </div>
        </div>

        {/* How to Join */}
        <div className="mt-24">
          <h3 className="text-2xl font-semibold tracking-tight">How to Join</h3>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="rounded-2xl border border-border bg-card p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="mt-4 text-lg font-semibold tracking-tight">{step.title}</h4>
                  <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Reward Pool */}
        <div className="mt-24">
          <SectionLabel>Reward Pool</SectionLabel>
          <h3 className="mt-6 text-[44px] font-bold tracking-tight md:text-[56px]">
            $5,000 Creator Reward Pool
          </h3>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Create an AI video that is not only beautiful, but postable, repeatable, and built for short-form content workflows.
          </p>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {prizes.map((prize) => (
              <div key={prize.title} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-primary">
                  <Trophy className="h-5 w-5" />
                </div>
                <h4 className="mt-4 text-lg font-semibold tracking-tight">{prize.title}</h4>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-3xl font-bold tracking-tight text-primary">{prize.value}</span>
                  <span className="text-sm text-muted-foreground">{prize.count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Judging */}
        <div className="mt-24 rounded-2xl border border-border bg-card p-8 md:p-12">
          <h3 className="text-2xl font-semibold tracking-tight">Judging</h3>
          <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-muted-foreground">
            We are judging based on monetization potential, hook strength, repeatable workflow, Vidu execution, workflow clarity, and community engagement.
          </p>
          <p className="mt-4 text-lg font-semibold tracking-tight text-primary">
            Create. Post. Test. Repeat.
          </p>
        </div>

        {/* FAQ */}
        <div className="mt-24">
          <SectionLabel>FAQ</SectionLabel>
          <h3 className="mt-6 text-[44px] font-bold tracking-tight md:text-[56px]">
            Rules &amp; Questions
          </h3>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-primary">
                  <HelpCircle className="h-5 w-5" />
                </div>
                <h4 className="mt-4 text-sm font-semibold tracking-tight">{faq.q}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Results ---------- */
function Results() {
  const stats = [
    { k: "−75%", v: "video production time", who: "E-commerce" },
    { k: "+32%", v: "product-page conversion", who: "Retail" },
    { k: "+45%", v: "user retention", who: "SaaS" },
    { k: "−80%", v: "VFX previz timeline", who: "Film" },
  ];
  return (
    <section id="results" className="border-b border-border">
      <div className="mx-auto max-w-[1400px] px-8 py-24">
        <SectionLabel>Results · Closed Beta</SectionLabel>
        <h2 className="mt-6 max-w-3xl text-[44px] font-bold tracking-tight md:text-[56px]">
          2,000+ developers. 300+ enterprise partners.
        </h2>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.v} className="bg-background p-8">
              <div className="text-5xl font-bold tracking-tight text-primary">{s.k}</div>
              <div className="mt-4 text-sm text-foreground">{s.v}</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{s.who}</div>
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
const res = await fetch(
  "https://api.movieflow.ai/v1/vidu/q3/text-to-video",
  {
    method: "POST",
    headers: {
      "Authorization": \`Bearer \${process.env.MOVIEFLOW_API_KEY}\`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      tier: "pro",
      prompt: "Cinematic dolly through a neon Tokyo alley, rain reflections",
      duration: 16,
      resolution: "1080p",
      aspect_ratio: "16:9",
    }),
  }
);

const { video_url } = await res.json();`;

  return (
    <section id="integration" className="border-b border-border bg-background">
      <div className="mx-auto max-w-[1400px] px-8 py-24">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionLabel>API · Integration</SectionLabel>
            <h2 className="mt-6 text-[44px] font-bold tracking-tight md:text-[56px]">
              Ship in 2 hours,<br />not 2 sprints.
            </h2>
            <p className="mt-6 max-w-xl text-muted-foreground">
              Official SDKs for Python, Node.js, Java and Go. Production-ready docs, 24/7 developer support,
              and dedicated TAMs for enterprise accounts.
            </p>
            <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card">
              <div className="flex items-center justify-between border-b border-border bg-background px-4 py-3 font-mono text-xs text-muted-foreground">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                  <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                  <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                </div>
                <span>vidu-q3.ts</span>
                <span className="text-primary">POST</span>
              </div>
              <pre className="overflow-x-auto p-6 text-xs leading-relaxed text-foreground/90"><code>{snippet}</code></pre>
            </div>
          </div>

          <div className="space-y-3">
            {[
              { icon: Code2, t: "Official SDKs", d: "Python · Node.js · Java · Go" },
              { icon: ShieldCheck, t: "Global compliance", d: "GDPR · CCPA · PIPL · regional data residency. We never train base models on your input." },
              { icon: Timer, t: "Production-ready docs", d: "Copy-paste examples for every endpoint, with batch & streaming patterns." },
              { icon: Globe2, t: "24/7 developer support", d: "Dedicated technical account managers for enterprise partners." },
            ].map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.t} className="flex gap-4 rounded-xl border border-border bg-card p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold tracking-tight">{b.t}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{b.d}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Final CTA ---------- */
function FinalCTA() {
  return (
    <section id="faq" className="border-b border-border">
      <div className="mx-auto max-w-[1400px] px-8 py-24">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-12 md:p-20">
          <div className="pointer-events-none absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-primary/10 blur-3xl" />
          <div className="relative">
            <SectionLabel>Launch offer</SectionLabel>
            <h2 className="mt-6 max-w-3xl text-[44px] font-bold tracking-tight md:text-[64px]">
              Claim <span className="text-primary">1,000 free Vidu credits</span>
            </h2>
            <p className="mt-6 max-w-2xl text-muted-foreground">
              Usable across every Q3 API endpoint. No expiration. No hidden restrictions.
              Full access to every enterprise-grade feature.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a href={PLATFORM_URL} target="_blank" rel="sponsored noreferrer">
                <Button size="lg" className="h-12 rounded-md bg-primary px-6 text-background hover:bg-primary/90">
                  Register & claim credits <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </a>
              <a href={DOCS_URL} target="_blank" rel="sponsored noreferrer">
                <Button size="lg" variant="outline" className="h-12 rounded-md border-border bg-background px-6 text-foreground hover:bg-secondary">
                  Read the docs
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function SiteFooter() {
  return (
    <footer className="bg-background">
      <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-6 px-8 py-12 md:flex-row md:items-center">
        <div className="space-y-2">
          <BrandLockup />
          <p className="font-mono text-xs text-muted-foreground">© {new Date().getFullYear()} MovieFlow × Vidu. All rights reserved.</p>
        </div>
        <div className="flex flex-wrap gap-8 text-sm text-muted-foreground">
          <a href={DOCS_URL} target="_blank" rel="sponsored noreferrer" className="hover:text-foreground">Docs</a>
          <a href={PLAYGROUND_URL} target="_blank" rel="sponsored noreferrer" className="hover:text-foreground">Playground</a>
          <a href={PLATFORM_URL} target="_blank" rel="sponsored noreferrer" className="hover:text-foreground">Get credits</a>
          <a href="mailto:partners@movieflow.ai" className="hover:text-foreground">partners@movieflow.ai</a>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Shared ---------- */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-border bg-background px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
      {children}
    </span>
  );
}
