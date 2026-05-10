import { createFileRoute, Link } from "@tanstack/react-router";
import * as Icons from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { SERVICES } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Foodex Group | Catering, Restaurants & More" },
      { name: "description", content: "Premium catering, restaurants, grocery, general trading and real estate services from Foodex Group across the UAE." },
      { property: "og:title", content: "Foodex Group Services" },
      { property: "og:description", content: "From catering to restaurants — five pillars of UAE hospitality." },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <section className="pt-40 pb-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <SectionHeading
            eyebrow="What We Do"
            title="Crafted Experiences"
            subtitle="Five pillars of hospitality, each carrying the same Foodex commitment to warmth, quality, and excellence."
          />
        </div>
      </section>

      <section className="pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => {
              const Icon = (Icons as any)[s.icon] || Icons.Sparkles;
              return (
                <Reveal key={s.title} delay={i * 0.08}>
                  <div className="group relative h-full overflow-hidden rounded-sm border border-border bg-card p-10 transition-all hover:border-gold/40 hover:shadow-glow-red">
                    <div className="mb-6 grid h-16 w-16 place-items-center rounded-sm border border-gold/30 bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-background">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="font-serif text-3xl">{s.title}</h3>
                    <p className="mt-4 text-muted-foreground">{s.desc}</p>
                    <Link to="/contact" className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold">
                      Inquire <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <div className="pointer-events-none absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-primary opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
