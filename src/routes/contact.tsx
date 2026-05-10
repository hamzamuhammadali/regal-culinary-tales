import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { SITE, FEATURED_BRANCH } from "@/lib/site-data";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Reservations — Foodex Group" },
      { name: "description", content: "Reserve a table, plan an event, or get in touch with the Foodex Group hospitality team." },
      { property: "og:title", content: "Contact Foodex Group" },
      { property: "og:description", content: "Let's create your next memorable meal together." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Reservation request received. We'll be in touch shortly.");
      (e.target as HTMLFormElement).reset();
      setSubmitting(false);
    }, 800);
  };

  return (
    <>
      <section className="pt-40 pb-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <SectionHeading
            eyebrow="Get In Touch"
            title="Reserve Your Experience"
            subtitle="Whether it's a private dinner, a celebration, or a catering inquiry — we're ready to host you."
          />
        </div>
      </section>

      <section className="pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5 rounded-sm border border-border bg-card p-8 md:p-10">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full Name" name="name" required />
                <Field label="Phone" name="phone" type="tel" required />
              </div>
              <Field label="Email" name="email" type="email" required />
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Date" name="date" type="date" />
                <Field label="Guests" name="guests" type="number" placeholder="2" />
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">Message</label>
                <textarea name="message" rows={5} className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none" placeholder="Tell us about your occasion..." />
              </div>
              <button
                disabled={submitting}
                type="submit"
                className="w-full rounded-sm bg-primary px-8 py-4 text-xs font-semibold uppercase tracking-widest text-primary-foreground shadow-glow-red transition-all hover:bg-primary-glow disabled:opacity-60"
              >
                {submitting ? "Sending..." : "Send Reservation"}
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.2} className="lg:col-span-2">
            <div className="space-y-8 rounded-sm border border-gold/20 bg-card p-8">
              <div>
                <h4 className="font-serif text-2xl text-gold">Reach Us</h4>
                <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 text-gold" />{SITE.address}</li>
                  <li className="flex items-start gap-3"><Phone className="mt-0.5 h-5 w-5 text-gold" /><a href={`tel:${SITE.phone}`} className="hover:text-gold">{SITE.phone}</a></li>
                  <li className="flex items-start gap-3"><Mail className="mt-0.5 h-5 w-5 text-gold" /><a href={`mailto:${SITE.email}`} className="hover:text-gold">{SITE.email}</a></li>
                </ul>
              </div>

              <div className="gold-divider w-full" />

              <div>
                <h4 className="font-serif text-2xl text-gold">Flagship Branch</h4>
                <p className="mt-3 font-serif text-xl">{FEATURED_BRANCH.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{FEATURED_BRANCH.address}</p>
                <p className="mt-1 text-sm text-muted-foreground">{FEATURED_BRANCH.hours}</p>
              </div>

              <div className="gold-divider w-full" />

              <div>
                <h4 className="font-serif text-2xl text-gold">Follow</h4>
                <div className="mt-4 flex gap-3">
                  {[
                    { Icon: Instagram, href: SITE.social.instagram },
                    { Icon: Facebook, href: SITE.social.facebook },
                    { Icon: Twitter, href: SITE.social.twitter },
                  ].map(({ Icon, href }, i) => (
                    <a key={i} href={href} target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-sm border border-border text-muted-foreground hover:border-gold hover:text-gold">
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none"
      />
    </div>
  );
}
