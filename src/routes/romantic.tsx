import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import honeymoon from "@/assets/honeymoon-setup.png";
import romantic from "@/assets/romantic-dinner.jpg";

export const Route = createFileRoute("/romantic")({
  head: () => ({
    meta: [
      { title: "Romantic Experience · Kurraya Hills" },
      { name: "description", content: "Honeymoon Setup IDR 250K nett — room set up, slice cake, exclusive room price for anniversary, honeymoon, wedding." },
      { property: "og:title", content: "Romantic Experience · Kurraya Hills" },
      { property: "og:description", content: "Honeymoon Setup IDR 250K — for anniversary, honeymoon, wedding nights." },
      { property: "og:image", content: honeymoon },
    ],
  }),
  component: Romantic,
});

function Romantic() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Romantic Experience" title="Rose petals, candlelight, and a view that does the rest." image={honeymoon} />

      <section className="py-28 mx-auto max-w-[1400px] px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <img src={honeymoon} alt="Honeymoon room setup" className="aspect-[4/3] w-full object-cover" loading="lazy" />
        </div>
        <div className="lg:col-span-5">
          <div className="text-xs tracking-[0.4em] uppercase text-gold mb-4">Signature Setup</div>
          <h2 className="font-display text-5xl text-emerald-deep">Honeymoon Setup</h2>
          <div className="mt-6 flex items-baseline gap-3">
            <span className="font-display text-6xl gold-text">IDR 250K</span>
            <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground">/ nett</span>
          </div>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Inclusive room set up for anniversary, honeymoon, or wedding night.
          </p>
          <ul className="mt-8 space-y-3 text-sm">
            {["Inclusive room setup (anniversary / honeymoon / wedding)", "A signature slice cake", "Exclusive room price"].map((i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="mt-1 h-1.5 w-1.5 bg-gold shrink-0" /> {i}
              </li>
            ))}
          </ul>
          <a
            href="https://wa.me/6281234567890?text=Hi%20Kurraya%20Hills%2C%20I%27d%20like%20to%20book%20the%20Honeymoon%20Setup"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-3 px-8 py-4 bg-emerald-deep text-cream text-xs uppercase tracking-[0.3em] hover:bg-foreground transition-colors"
          >
            Reserve now
          </a>
        </div>
      </section>

      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <img src={romantic} alt="" className="absolute inset-0 h-full w-full object-cover animate-ken-burns" loading="lazy" />
        <div className="absolute inset-0 bg-emerald-deep/50" />
        <div className="relative h-full flex items-center justify-center px-6 text-center">
          <div>
            <div className="text-xs tracking-[0.4em] uppercase text-gold mb-4">For Two</div>
            <p className="font-display text-4xl md:text-6xl text-cream max-w-3xl text-balance">
              "We light the candles. You write the memory."
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
