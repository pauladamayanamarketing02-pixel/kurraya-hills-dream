import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import single from "@/assets/room-single.jpg";
import twin from "@/assets/room-twin.jpg";
import bath from "@/assets/bathroom.png";

export const Route = createFileRoute("/rooms")({
  head: () => ({
    meta: [
      { title: "Rooms · Kurraya Hills" },
      { name: "description", content: "Deluxe Single & Twin mountain-view rooms at Kurraya Hills Singkawang. From IDR 600K." },
      { property: "og:title", content: "Mountain-View Rooms · Kurraya Hills" },
      { property: "og:description", content: "Deluxe Single & Twin rooms with full mountain views, ensuite bath." },
      { property: "og:image", content: single },
    ],
  }),
  component: Rooms,
});

const ROOMS = [
  {
    name: "Deluxe Single Bed",
    view: "Mountain View",
    img: single,
    desc: "A king-bed retreat opening to floor-to-ceiling glass and the slow drama of the Singkawang hills.",
  },
  {
    name: "Deluxe Twin Bed",
    view: "Mountain View",
    img: twin,
    desc: "Two crisp single beds, a sun-pulled window, and the same cinematic ridge-line view.",
  },
];

const RATES = [
  { label: "Weekday", price: "600K" },
  { label: "Weekend", price: "840K" },
  { label: "High Season", price: "1.200K" },
];

function Rooms() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Rooms" title="Mountain views, made for waking up to." image={single} />

      <section className="py-28 mx-auto max-w-[1400px] px-6 space-y-32">
        {ROOMS.map((r, i) => (
          <article key={r.name} className={`grid lg:grid-cols-12 gap-10 items-center ${i % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}>
            <div className="lg:col-span-7">
              <img src={r.img} alt={r.name} className="aspect-[4/3] w-full object-cover" loading="lazy" />
            </div>
            <div className="lg:col-span-5">
              <div className="text-xs tracking-[0.4em] uppercase text-gold mb-4">{r.view}</div>
              <h2 className="font-display text-5xl text-emerald-deep">{r.name}</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">{r.desc}</p>
              <div className="mt-10 grid grid-cols-3 gap-3">
                {RATES.map((rate) => (
                  <div key={rate.label} className="border border-border p-5">
                    <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{rate.label}</div>
                    <div className="mt-2 font-display text-2xl text-emerald-deep">IDR {rate.price}</div>
                  </div>
                ))}
              </div>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-3 px-7 py-3.5 bg-emerald-deep text-cream text-xs uppercase tracking-[0.3em] hover:bg-foreground transition-colors"
              >
                Book this room
              </a>
            </div>
          </article>
        ))}

        <div className="grid lg:grid-cols-12 gap-10 items-center pt-10 border-t border-border">
          <div className="lg:col-span-5">
            <div className="text-xs tracking-[0.4em] uppercase text-gold mb-4">Ensuite</div>
            <h2 className="font-display text-5xl text-emerald-deep">A bathroom worth lingering in.</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Warm wood, soft tile, plush towels and a sit-down toilet — a quiet, hotel-grade ensuite in every room.
            </p>
          </div>
          <div className="lg:col-span-7">
            <img src={bath} alt="Ensuite bathroom" className="aspect-[4/3] w-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
