import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, MessageCircle } from "lucide-react";
import aerial from "@/assets/aerial-resort.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact · Kurraya Hills" },
      { name: "description", content: "Reserve, plan or visit. Find Kurraya Hills in Singkawang, Kalimantan Barat." },
      { property: "og:title", content: "Contact · Kurraya Hills" },
      { property: "og:description", content: "Reservations, weddings, and visits — get in touch." },
      { property: "og:image", content: aerial },
    ],
  }),
  component: Contact,
});

const SOCIAL = [
  { Icon: Instagram, label: "Instagram", href: "https://instagram.com/kurrayahills" },
  { Icon: Facebook, label: "Facebook", href: "https://facebook.com/kurrayahills" },
  { Icon: Youtube, label: "YouTube", href: "https://youtube.com/@kurrayahills" },
  { Icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/6281234567890" },
];

function Contact() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Contact" title="Reserve. Plan. Visit." image={aerial} />

      <section className="py-28 mx-auto max-w-[1400px] px-6 grid lg:grid-cols-2 gap-16">
        <div>
          <div className="text-xs tracking-[0.4em] uppercase text-gold mb-4">Get in touch</div>
          <h2 className="font-display text-5xl text-emerald-deep">We answer fast — usually within the hour.</h2>

          <div className="mt-10 space-y-6">
            <a href="tel:+6281234567890" className="flex gap-4 items-start group">
              <Phone className="text-gold mt-1" size={20} />
              <div>
                <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Phone</div>
                <div className="font-display text-2xl text-emerald-deep group-hover:text-gold">+62 812-3456-7890</div>
              </div>
            </a>
            <a href="mailto:hello@kurrayahills.com" className="flex gap-4 items-start group">
              <Mail className="text-gold mt-1" size={20} />
              <div>
                <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Email</div>
                <div className="font-display text-2xl text-emerald-deep group-hover:text-gold">hello@kurrayahills.com</div>
              </div>
            </a>
            <div className="flex gap-4 items-start">
              <MapPin className="text-gold mt-1" size={20} />
              <div>
                <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Address</div>
                <div className="font-display text-2xl text-emerald-deep">Kurraya Hills, Singkawang</div>
                <div className="text-sm text-muted-foreground">Kalimantan Barat, Indonesia</div>
              </div>
            </div>
          </div>

          <div className="luxe-divider my-10" />

          <div className="text-xs tracking-[0.4em] uppercase text-gold mb-5">Social</div>
          <div className="flex gap-3">
            {SOCIAL.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="h-12 w-12 inline-flex items-center justify-center border border-border hover:border-gold hover:text-gold transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget as HTMLFormElement;
            const data = new FormData(form);
            const msg = `Hi Kurraya Hills,%0A%0AName: ${data.get("name")}%0AEmail: ${data.get("email")}%0A%0A${data.get("message")}`;
            window.open(`https://wa.me/6281234567890?text=${msg}`, "_blank");
          }}
          className="bg-cream p-10 space-y-5"
        >
          <div className="text-xs tracking-[0.4em] uppercase text-gold">Send a note</div>
          <input name="name" required placeholder="Your name" className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-gold transition-colors" />
          <input name="email" type="email" required placeholder="Your email" className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-gold transition-colors" />
          <input name="subject" placeholder="Subject" className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-gold transition-colors" />
          <textarea name="message" required rows={5} placeholder="Your message" className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-gold transition-colors resize-none" />
          <button className="mt-6 inline-flex items-center gap-3 px-8 py-4 bg-emerald-deep text-cream text-xs uppercase tracking-[0.3em] hover:bg-foreground transition-colors">
            Send via WhatsApp
          </button>
        </form>
      </section>

      <section className="aspect-[16/7] w-full">
        <iframe
          title="Kurraya Hills location"
          src="https://www.google.com/maps?q=Singkawang%2C+Kalimantan+Barat&output=embed"
          className="w-full h-full border-0 grayscale"
          loading="lazy"
        />
      </section>
    </SiteLayout>
  );
}
