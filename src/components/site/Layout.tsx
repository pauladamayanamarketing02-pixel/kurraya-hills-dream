import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
}) {
  return (
    <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-deep/30 via-emerald-deep/40 to-emerald-deep/80" />
      <div className="absolute inset-0 flex items-end pb-20">
        <div className="mx-auto max-w-[1400px] w-full px-6">
          <div className="text-xs tracking-[0.4em] uppercase text-gold mb-4">{eyebrow}</div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-cream max-w-4xl text-balance">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-cream/80 max-w-xl text-lg">{subtitle}</p>
          )}
        </div>
      </div>
    </section>
  );
}
