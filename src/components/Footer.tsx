import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { SITE } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background pt-20 pb-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-4">
        <div>
          <div className="font-serif text-3xl">
            Foodex<span className="text-gold">.</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            {SITE.tagline}. Crafting culinary memories across the UAE since {SITE.established}.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { Icon: Instagram, href: SITE.social.instagram, label: "Instagram" },
              { Icon: Facebook, href: SITE.social.facebook, label: "Facebook" },
              { Icon: Twitter, href: SITE.social.twitter, label: "Twitter" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-sm border border-border text-muted-foreground transition-all hover:border-gold hover:text-gold"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-5 font-serif text-lg text-gold">Quick Links</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {[
              ["/about", "About"],
              ["/services", "Services"],
              ["/menu", "Signature Menu"],
              ["/branches", "Branches"],
              ["/gallery", "Gallery"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="transition-colors hover:text-gold">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-5 font-serif text-lg text-gold">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              {SITE.address}
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={`tel:${SITE.phone}`} className="hover:text-gold">{SITE.phone}</a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={`mailto:${SITE.email}`} className="hover:text-gold">{SITE.email}</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-5 font-serif text-lg text-gold">Visit</h4>
          <p className="text-sm text-muted-foreground">
            Step into a world of warm hospitality, signature flavors, and timeless ambience.
          </p>
          <Link
            to="/contact"
            className="mt-5 inline-block rounded-sm border border-gold/40 bg-gold/10 px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-gold transition-all hover:bg-gold hover:text-background"
          >
            Reserve a Table
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-border/50 px-6 pt-6 text-xs text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Foodex Group. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gold">Privacy Policy</a>
          <a href="#" className="hover:text-gold">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
