import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteLayout } from "@/components/site/Layout";
import heroAerial from "@/assets/hero-aerial.jpg";
import heroSign from "@/assets/hero-sign.jpg";
import aerial from "@/assets/aerial-resort.jpg";
import pool from "@/assets/pool-main.png";
import restaurant from "@/assets/restaurant-outdoor.png";
import wedding from "@/assets/wedding-altar.png";
import roomSingle from "@/assets/room-single.jpg";
import roomTwin from "@/assets/room-twin.jpg";
import romantic from "@/assets/romantic-dinner.jpg";
import honeymoon from "@/assets/honeymoon-setup.png";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kurraya Hills · Singkawang Hilltop Resort" },
      { name: "description", content: "An ultra-premium hilltop resort in Singkawang — mountain-view suites, infinity pools, romantic dining, and weddings under the stars." },
      { property: "og:title", content: "Kurraya Hills · Singkawang Hilltop Resort" },
      { property: "og:description", content: "Mountain views. Infinity pools. Cinematic dining. The 2026 escape." },
      { property: "og:image", content: heroAerial },
    ],
  }),
  component: Home,
});

const MARQUEE = [
  "Mountain View Suites", "·", "Romantic Dining", "·", "Infinity Pool", "·", "Hilltop Weddings",
  "·", "Private Cabanas", "·", "Wellness Spa", "·", "Cinematic Sunsets", "·",
];

const STRIP = [pool, restaurant, wedding, romantic, honeymoon, aerial, roomSingle, roomTwin];

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
        <img src={heroAerial} alt="Kurraya Hills aerial view" className="absolute inset-0 h-full w-full object-cover animate-ken-burns" />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-deep/30 via-transparent to-emerald-deep/90" />

        {/* floating gold ring */}
        <div className="absolute top-1/2 right-[-10%] w-[600px] h-[600px] -translate-y-1/2 pointer-events-none opacity-30 animate-spin-slow">
          <div className="w-full h-full rounded-full border border-gold/40" />
          <div className="absolute inset-12 rounded-full border border-gold/20" />
        </div>

        <div className="relative z-10 h-full mx-auto max-w-[1400px] px-6 flex flex-col justify-end pb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="text-xs tracking-[0.5em] uppercase text-gold mb-6">Singkawang · Est. 2026</div>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-cream leading-[0.95] max-w-5xl text-balance">
              Where the hills <em className="not-italic gold-text">whisper</em> luxury.
            </h1>
            <p className="mt-8 max-w-xl text-cream/80 text-lg leading-relaxed">
              A hilltop sanctuary above Singkawang — mountain-view suites, candlelit dinners, and a sky that turns gold at sunset.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/rooms"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gold text-emerald-deep text-xs uppercase tracking-[0.3em] hover:bg-cream transition-colors"
              >
                Discover Rooms <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 border border-cream/40 text-cream text-xs uppercase tracking-[0.3em] hover:bg-cream/10 transition-colors"
              >
                Reserve a Stay
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom marquee */}
        <div className="absolute bottom-0 inset-x-0 border-t border-cream/15 bg-emerald-deep/40 backdrop-blur-md py-5 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...MARQUEE, ...MARQUEE].map((w, i) => (
              <span key={i} className="font-display text-2xl md:text-3xl text-cream/90 mx-6">{w}</span>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-32 mx-auto max-w-[1400px] px-6 grid lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5"
        >
          <div className="text-xs tracking-[0.4em] uppercase text-gold mb-6">The Sanctuary</div>
          <h2 className="font-display text-5xl md:text-6xl leading-[1.05] text-emerald-deep text-balance">
            A resort designed like a long, slow exhale.
          </h2>
          <p className="mt-8 text-muted-foreground leading-relaxed text-lg">
            Kurraya Hills sits on Singkawang's gentlest ridge — a private hilltop where infinity pools spill toward the mountains and every villa opens to a view worth slowing down for.
          </p>
          <Link to="/about" className="mt-10 inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-emerald-deep group">
            Our Story <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform" />
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="lg:col-span-7 grid grid-cols-2 gap-4"
        >
          <img src={heroSign} alt="Kurraya Hills sign" className="aspect-[3/4] w-full object-cover" loading="lazy" />
          <div className="space-y-4 pt-12">
            <img src={pool} alt="Infinity pool" className="aspect-square w-full object-cover" loading="lazy" />
            <img src={restaurant} alt="Garden restaurant" className="aspect-[4/3] w-full object-cover" loading="lazy" />
          </div>
        </motion.div>
      </section>

      {/* CONTINUOUS IMAGE STRIP */}
      <section className="py-12 bg-emerald-deep overflow-hidden">
        <div className="text-center mb-10">
          <div className="text-xs tracking-[0.4em] uppercase text-gold">Moments at Kurraya</div>
        </div>
        <div className="flex animate-marquee-slow gap-6 w-max">
          {[...STRIP, ...STRIP].map((src, i) => (
            <div key={i} className="w-[420px] h-[280px] shrink-0 overflow-hidden">
              <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCES GRID */}
      <section className="py-32 mx-auto max-w-[1400px] px-6">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <div className="text-xs tracking-[0.4em] uppercase text-gold mb-4">Experiences</div>
            <h2 className="font-display text-5xl md:text-6xl text-emerald-deep max-w-2xl text-balance">Crafted for those who notice details.</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { to: "/rooms", title: "Mountain-View Rooms", img: roomSingle, kicker: "From IDR 600K" },
            { to: "/romantic", title: "Romantic Experience", img: romantic, kicker: "From IDR 250K" },
            { to: "/wedding-meeting", title: "Weddings & Meetings", img: wedding, kicker: "Bespoke" },
            { to: "/restaurant-pool", title: "Restaurant & Pool", img: restaurant, kicker: "Open daily" },
            { to: "/about", title: "The Hills Story", img: aerial, kicker: "About us" },
            { to: "/contact", title: "Plan Your Visit", img: pool, kicker: "Reservations" },
          ].map((c) => (
            <Link key={c.to} to={c.to} className="group relative block aspect-[4/5] overflow-hidden">
              <img src={c.img} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep via-emerald-deep/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <div className="text-[10px] tracking-[0.4em] uppercase text-gold mb-2">{c.kicker}</div>
                <div className="font-display text-3xl text-cream flex items-center justify-between">
                  {c.title}
                  <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* QUOTE BAND */}
      <section className="py-32 bg-cream relative overflow-hidden">
        <div className="absolute inset-0 animate-shimmer pointer-events-none" />
        <div className="mx-auto max-w-4xl px-6 text-center relative">
          <div className="text-xs tracking-[0.4em] uppercase text-gold mb-6">Visit</div>
          <p className="font-display text-3xl md:text-5xl text-emerald-deep leading-[1.2] text-balance">
            "The kind of place where time forgets to keep up — and you don't ask it to."
          </p>
          <div className="luxe-divider my-10 mx-auto w-32" />
          <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-deep text-cream text-xs uppercase tracking-[0.3em] hover:bg-foreground transition-colors">
            Plan Your Stay <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
