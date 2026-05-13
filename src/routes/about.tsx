import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import aerial from "@/assets/aerial-resort.jpg";
import sign from "@/assets/hero-sign.jpg";
import pool from "@/assets/pool-main.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About · Kurraya Hills" },
      { name: "description", content: "The story of Kurraya Hills — Singkawang's hilltop sanctuary blending West Kalimantan warmth with ultra-premium design." },
      { property: "og:title", content: "About · Kurraya Hills" },
      { property: "og:description", content: "A hilltop resort built on quiet, light, and view." },
      { property: "og:image", content: aerial },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <PageHero eyebrow="About" title="A hilltop, a long view, a place to slow down." image={aerial} />

      <section className="py-28 mx-auto max-w-5xl px-6">
        <div className="text-xs tracking-[0.4em] uppercase text-gold mb-6">Our Story</div>
        <p className="font-display text-3xl md:text-4xl text-emerald-deep leading-snug text-balance">
          Kurraya Hills was imagined as the antidote to noise — a hilltop estate above Singkawang where mountains, mist and golden hour do most of the talking.
        </p>
        <div className="grid md:grid-cols-2 gap-10 mt-14 text-muted-foreground leading-relaxed">
          <p>Set on the city's gentlest ridge, every villa, pool and pavilion is angled toward the same horizon. We built rooms with views you can sleep into, restaurants that follow the sun, and gardens designed for evenings that last.</p>
          <p>Our hospitality is rooted in West Kalimantan — quiet, attentive, never performative. Whether you're here for a weekend retreat, a wedding, or simply a long lunch, Kurraya Hills is built around the moments you'll remember.</p>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-1">
        <img src={sign} alt="" className="aspect-[4/3] w-full object-cover" loading="lazy" />
        <img src={pool} alt="" className="aspect-[4/3] w-full object-cover" loading="lazy" />
      </section>

      <section className="py-28 mx-auto max-w-[1200px] px-6 grid md:grid-cols-3 gap-10 text-center">
        {[
          { n: "42", l: "Mountain-view rooms" },
          { n: "3", l: "Pools & water features" },
          { n: "120", l: "Wedding capacity" },
        ].map((s) => (
          <div key={s.l} className="border-t border-border pt-8">
            <div className="font-display text-7xl gold-text">{s.n}</div>
            <div className="mt-3 text-xs tracking-[0.3em] uppercase text-muted-foreground">{s.l}</div>
          </div>
        ))}
      </section>
    </SiteLayout>
  );
}
