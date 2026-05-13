import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import restaurant from "@/assets/restaurant-outdoor.png";
import pool from "@/assets/pool-main.png";
import romantic from "@/assets/romantic-dinner.jpg";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";
import dish4 from "@/assets/dish-4.jpg";

export const Route = createFileRoute("/restaurant-pool")({
  head: () => ({
    meta: [
      { title: "Restaurant & Pool · Kurraya Hills" },
      { name: "description", content: "Romantic Dinner Packages from IDR 350K, full menu, and pool access from IDR 20K." },
      { property: "og:title", content: "Restaurant & Pool · Kurraya Hills" },
      { property: "og:description", content: "Cinematic dining, infinity pools, full menu." },
      { property: "og:image", content: restaurant },
    ],
  }),
  component: RestaurantPool,
});

const ROMANTIC = [
  { price: "350K", tier: "Essence", desc: "3-course set menu · welcome mocktail · table styling" },
  { price: "450K", tier: "Reverie", desc: "4-course set menu · sparkling wine · candle setup" },
  { price: "550K", tier: "Crescendo", desc: "5-course tasting · champagne · private terrace" },
];

const MENU = [
  { name: "Singkawang Choubek Tasting", price: "IDR 145K", desc: "Local seafood medley, tamarind broth, herbs from the hill garden", img: dish1 },
  { name: "Kurraya Tomahawk", price: "IDR 425K", desc: "Grilled wagyu chop, garden vegetables, smoked soy", img: dish2 },
  { name: "Mango Sorbet & Petals", price: "IDR 95K", desc: "Tropical fruit, mango sorbet, edible flowers", img: dish3 },
  { name: "Heritage Nasi Goreng", price: "IDR 125K", desc: "House nasi goreng with prawn, fried egg, sambal hijau", img: dish4 },
];

function RestaurantPool() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Restaurant & Pool" title="Plates with a view. Pools with a sky." image={restaurant} />

      {/* ROMANTIC PACKAGES */}
      <section className="py-28 mx-auto max-w-[1400px] px-6">
        <div className="text-xs tracking-[0.4em] uppercase text-gold mb-4">Romantic Dinner</div>
        <h2 className="font-display text-5xl md:text-6xl text-emerald-deep max-w-3xl text-balance">Three ways to spend a candlelit evening.</h2>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {ROMANTIC.map((r, i) => (
            <div key={r.price} className={`relative border border-border p-8 transition-all hover:border-gold ${i === 1 ? "bg-emerald-deep text-cream" : "bg-background"}`}>
              <div className={`text-xs tracking-[0.4em] uppercase mb-4 ${i === 1 ? "text-gold" : "text-gold"}`}>{r.tier}</div>
              <div className="flex items-baseline gap-2">
                <span className={`font-display text-5xl ${i === 1 ? "text-cream" : "gold-text"}`}>IDR {r.price}</span>
              </div>
              <p className={`mt-5 text-sm leading-relaxed ${i === 1 ? "text-cream/80" : "text-muted-foreground"}`}>{r.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <img src={romantic} alt="Romantic dinner setup" className="w-full aspect-[16/7] object-cover" loading="lazy" />
        </div>
      </section>

      {/* MENU */}
      <section className="bg-cream py-28">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="flex justify-between items-end mb-14 flex-wrap gap-6">
            <div>
              <div className="text-xs tracking-[0.4em] uppercase text-gold mb-4">Restaurant Menu</div>
              <h2 className="font-display text-5xl text-emerald-deep">Tasting selections</h2>
            </div>
            <Link to="/contact" className="text-sm uppercase tracking-[0.3em] text-emerald-deep">Reserve a table →</Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {MENU.map((m) => (
              <article key={m.name} className="grid grid-cols-[140px_1fr] gap-5 items-start group">
                <div className="overflow-hidden">
                  <img src={m.img} alt={m.name} className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                </div>
                <div>
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-2xl text-emerald-deep">{m.name}</h3>
                    <span className="text-sm gold-text font-medium shrink-0">{m.price}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* POOL */}
      <section className="py-28 mx-auto max-w-[1400px] px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <img src={pool} alt="Resort pool" className="aspect-[4/3] w-full object-cover" loading="lazy" />
        </div>
        <div className="lg:col-span-5">
          <div className="text-xs tracking-[0.4em] uppercase text-gold mb-4">The Pool</div>
          <h2 className="font-display text-5xl text-emerald-deep">Sky, water, and the long blue afternoon.</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Day passes welcome — children's pool, slide, sun loungers and cabanas. Open from 8 AM to 7 PM daily.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-3 max-w-md">
            <div className="border border-border p-6">
              <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Weekday</div>
              <div className="mt-2 font-display text-3xl text-emerald-deep">IDR 20K</div>
            </div>
            <div className="border border-border p-6">
              <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Weekend</div>
              <div className="mt-2 font-display text-3xl text-emerald-deep">IDR 30K</div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
