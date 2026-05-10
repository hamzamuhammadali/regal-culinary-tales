import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Clock, Search } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { FEATURED_BRANCH } from "@/lib/site-data";

const BRANCHES = [
  { name: "Foodex Real Taste", city: "Sharjah", area: "Al Nahda", phone: "056 415 5313", featured: true },
  { name: "Foodex Royal", city: "Dubai", area: "Deira", phone: "04 285 5567" },
  { name: "Foodex Grand", city: "Dubai", area: "Al Karama", phone: "04 396 1122" },
  { name: "Foodex Heritage", city: "Abu Dhabi", area: "Al Wahda", phone: "02 633 7788" },
  { name: "Foodex Express", city: "Sharjah", area: "Rolla", phone: "06 568 4521" },
  { name: "Foodex Marina", city: "Dubai", area: "Marina Walk", phone: "04 432 9090" },
  { name: "Foodex Family", city: "Ajman", area: "Al Nuaimiya", phone: "06 745 1199" },
  { name: "Foodex Gold", city: "Dubai", area: "Bur Dubai", phone: "04 359 7766" },
];

export const Route = createFileRoute("/branches")({
  head: () => ({
    meta: [
      { title: "Branches — Foodex Group | 25+ Locations Across UAE" },
      { name: "description", content: "Find your nearest Foodex restaurant. 25+ branches across Dubai, Sharjah, Abu Dhabi and Ajman." },
      { property: "og:title", content: "Foodex Branches Across the UAE" },
      { property: "og:description", content: "Locate, call, and visit your nearest Foodex restaurant." },
    ],
  }),
  component: Branches,
});

function Branches() {
  const [q, setQ] = useState("");
  const filtered = BRANCHES.filter((b) =>
    [b.name, b.city, b.area].join(" ").toLowerCase().includes(q.toLowerCase())
  );

  return (
    <>
      <section className="pt-40 pb-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <SectionHeading
            eyebrow="Find Us"
            title="Branches Across the UAE"
            subtitle="Twenty-five and growing. Wherever you are in the Emirates, a warm welcome is never far away."
          />
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="grid overflow-hidden rounded-sm border border-gold/20 lg:grid-cols-2">
              <div className="relative bg-gradient-to-br from-primary/30 via-card to-background p-10 md:p-14">
                <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-radial-red)" }} />
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">Flagship</p>
                  <h3 className="mt-4 font-serif text-4xl md:text-5xl">{FEATURED_BRANCH.name}</h3>
                  <p className="mt-3 text-lg text-foreground/85">{FEATURED_BRANCH.area}</p>
                  <ul className="mt-8 space-y-4 text-sm text-muted-foreground">
                    <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />{FEATURED_BRANCH.address}</li>
                    <li className="flex items-start gap-3"><Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold" /><a href={`tel:${FEATURED_BRANCH.phone}`}>{FEATURED_BRANCH.phone}</a></li>
                    <li className="flex items-start gap-3"><Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold" />{FEATURED_BRANCH.hours}</li>
                  </ul>
                  <div className="mt-10 flex flex-wrap gap-3">
                    <a href={`tel:${FEATURED_BRANCH.phone}`} className="rounded-sm bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-widest text-primary-foreground shadow-glow-red hover:bg-primary-glow">Call</a>
                    <a href={`https://www.google.com/maps/search/?api=1&query=${FEATURED_BRANCH.mapsQuery}`} target="_blank" rel="noreferrer" className="rounded-sm border border-gold/40 bg-gold/10 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-gold hover:bg-gold hover:text-background">Directions</a>
                    <Link to="/contact" className="rounded-sm border border-border px-6 py-3 text-xs font-semibold uppercase tracking-widest hover:border-gold hover:text-gold">Reserve</Link>
                  </div>
                </div>
              </div>
              <div className="min-h-[400px] bg-card">
                <iframe title="Map" src={`https://www.google.com/maps?q=${FEATURED_BRANCH.mapsQuery}&output=embed`} className="h-full w-full grayscale-[40%]" loading="lazy" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <h3 className="font-serif text-3xl">All Branches</h3>
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search by city or area"
                className="w-full rounded-sm border border-border bg-card py-3 pl-10 pr-4 text-sm placeholder:text-muted-foreground focus:border-gold focus:outline-none"
              />
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((b, i) => (
              <Reveal key={b.name} delay={i * 0.04}>
                <div className="group rounded-sm border border-border bg-card p-6 transition-all hover:border-gold/40 hover:shadow-glow-red">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">{b.city}</p>
                  <h4 className="mt-2 font-serif text-2xl">{b.name}</h4>
                  <p className="mt-2 text-sm text-muted-foreground">{b.area}</p>
                  <div className="mt-5 flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-gold" />
                    <a href={`tel:${b.phone}`} className="hover:text-gold">{b.phone}</a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
