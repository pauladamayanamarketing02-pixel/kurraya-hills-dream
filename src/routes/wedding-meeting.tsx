import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import wedding from "@/assets/wedding-altar.png";
import meeting from "@/assets/meeting-room.png";

export const Route = createFileRoute("/wedding-meeting")({
  head: () => ({
    meta: [
      { title: "Wedding & Meeting · Kurraya Hills" },
      { name: "description", content: "Dream Wedding Packages and Meeting Packages from IDR 120K/pax at Kurraya Hills Singkawang." },
      { property: "og:title", content: "Wedding & Meeting · Kurraya Hills" },
      { property: "og:description", content: "Hilltop weddings & elegant meeting packages." },
      { property: "og:image", content: wedding },
    ],
  }),
  component: WeddingMeeting,
});

const MEETING = [
  { price: "120K", per: "/ pax", items: ["Coffee break × 1", "Lunch × 1", "Meeting Room"] },
  { price: "150K", per: "/ pax", items: ["Coffee break × 2", "Lunch × 1", "Meeting Room"] },
];

function WeddingMeeting() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Wedding & Meeting" title="From vows under the lights to plans around the table." image={wedding} />

      {/* WEDDING */}
      <section className="py-28 mx-auto max-w-[1400px] px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <div className="text-xs tracking-[0.4em] uppercase text-gold mb-4">Dream Wedding Package</div>
          <h2 className="font-display text-5xl md:text-6xl text-emerald-deep text-balance">An altar built from flowers, light and hills.</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Ceremony, reception and styling — designed end-to-end by our in-house team. From intimate elopements to 120-guest celebrations, every Kurraya wedding is bespoke.
          </p>
          <div className="mt-10 inline-flex flex-col gap-2">
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Investment</span>
            <span className="font-display text-4xl gold-text">Contact for price</span>
          </div>
          <div className="mt-8">
            <a
              href="https://wa.me/6281234567890?text=Hi%20Kurraya%20Hills%2C%20I%27d%20like%20wedding%20package%20info"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-deep text-cream text-xs uppercase tracking-[0.3em] hover:bg-foreground transition-colors"
            >
              Talk to our planners
            </a>
          </div>
        </div>
        <div className="lg:col-span-6">
          <img src={wedding} alt="Wedding altar" className="aspect-[4/5] w-full object-cover" loading="lazy" />
        </div>
      </section>

      {/* MEETING */}
      <section className="bg-cream py-28">
        <div className="mx-auto max-w-[1400px] px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <img src={meeting} alt="Meeting room" className="aspect-[4/3] w-full object-cover" loading="lazy" />
          </div>
          <div className="lg:col-span-6">
            <div className="text-xs tracking-[0.4em] uppercase text-gold mb-4">Meeting Packages</div>
            <h2 className="font-display text-5xl text-emerald-deep">Work better, somewhere beautiful.</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">Hilltop meeting rooms with natural light, attentive service, and breaks worth taking.</p>
            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              {MEETING.map((m) => (
                <div key={m.price} className="bg-background border border-border p-7">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-4xl text-emerald-deep">IDR {m.price}</span>
                    <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{m.per}</span>
                  </div>
                  <ul className="mt-5 space-y-2 text-sm">
                    {m.items.map((i) => (
                      <li key={i} className="flex gap-2 items-start"><span className="mt-1.5 h-1 w-1 bg-gold shrink-0" /> {i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
