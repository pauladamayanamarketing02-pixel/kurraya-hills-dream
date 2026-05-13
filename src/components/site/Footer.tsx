import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-emerald-deep text-cream">
      <div className="mx-auto max-w-[1400px] px-6 py-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" width={56} height={56} className="h-14 w-14 object-contain brightness-200" />
            <div>
              <div className="font-display text-3xl">Kurraya Hills</div>
              <div className="text-[11px] tracking-[0.3em] uppercase text-cream/60">Singkawang Resort</div>
            </div>
          </div>
          <p className="mt-6 text-cream/70 max-w-md leading-relaxed">
            A hilltop sanctuary where mountain views, infinity pools and cinematic dining meet uncompromising West Kalimantan hospitality.
          </p>
          <div className="mt-8 flex gap-3">
            {[
              { Icon: Instagram, href: "https://instagram.com/kurrayahills" },
              { Icon: Facebook, href: "https://facebook.com/kurrayahills" },
              { Icon: Youtube, href: "https://youtube.com/@kurrayahills" },
              { Icon: MapPin, href: "https://maps.google.com/?q=Kurraya+Hills+Singkawang" },
            ].map(({ Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="h-11 w-11 inline-flex items-center justify-center border border-cream/20 hover:border-gold hover:text-gold transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] text-gold mb-5">Explore</h4>
          <ul className="space-y-3 text-sm text-cream/80">
            <li><Link to="/rooms" className="hover:text-gold">Rooms</Link></li>
            <li><Link to="/romantic" className="hover:text-gold">Romantic Experience</Link></li>
            <li><Link to="/wedding-meeting" className="hover:text-gold">Wedding & Meeting</Link></li>
            <li><Link to="/restaurant-pool" className="hover:text-gold">Restaurant & Pool</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] text-gold mb-5">Contact</h4>
          <ul className="space-y-3 text-sm text-cream/80">
            <li className="flex gap-2"><MapPin size={16} className="mt-0.5 shrink-0 text-gold" /> Kurraya Hills, Singkawang, Kalimantan Barat</li>
            <li className="flex gap-2"><Phone size={16} className="mt-0.5 shrink-0 text-gold" /> +62 812-3456-7890</li>
            <li className="flex gap-2"><Mail size={16} className="mt-0.5 shrink-0 text-gold" /> hello@kurrayahills.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-[1400px] px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-cream/50">
          <span>© 2026 Kurraya Hills · All rights reserved</span>
          <span className="tracking-[0.3em] uppercase">Crafted with intention</span>
        </div>
      </div>
    </footer>
  );
}
