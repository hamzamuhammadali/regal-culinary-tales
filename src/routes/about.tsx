import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal, SectionHeading } from "@/components/Reveal";
import aboutImg from "@/assets/about-restaurant.jpg";
import experienceImg from "@/assets/experience-bg.jpg";
import { Sparkles, HeartHandshake, Globe2 } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Foodex Group | UAE Hospitality Since 2003" },
      { name: "description", content: "Two decades of crafting culinary memories across the UAE. Discover the Foodex Group story, values, and vision." },
      { property: "og:title", content: "About Foodex Group" },
      { property: "og:description", content: "A pinch of love in every meal — discover the journey that began in 2003." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="relative pt-40 pb-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <SectionHeading
            eyebrow="Our Story"
            title="Welcome to Foodex Group"
            subtitle="A pinch of love to every meal we serve, every moment we create, and every connection we make across the UAE."
          />
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
          <Reveal>
            <img src={aboutImg} alt="Foodex restaurant interior" loading="lazy" width={1600} height={1200} className="rounded-sm shadow-elegant" />
          </Reveal>
          <Reveal delay={0.2}>
            <h3 className="font-serif text-4xl">Two decades of warmth and flavor</h3>
            <p className="mt-6 text-muted-foreground">
              Founded in 2003, Foodex Group has grown from a single restaurant into a
              celebrated UAE hospitality family. Twenty-five branches, a beloved
              catering arm, grocery outlets, and a vision to bring our flavors to the
              wider GCC — every step has been guided by one belief: that a great meal
              brings people together.
            </p>
            <p className="mt-4 text-muted-foreground">
              We serve charcoal grills, Arabic classics, South Indian comfort food,
              and signature mocktails — all crafted with the same heart that started
              this journey two decades ago.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { Icon: Sparkles, title: "25+ Branches", desc: "A growing family of restaurants serving every corner of the UAE." },
              { Icon: HeartHandshake, title: "Customer Focused", desc: "Every dish, every detail, every guest — treated with care." },
              { Icon: Globe2, title: "GCC Expansion Vision", desc: "Carrying our flavors and hospitality across the wider region." },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 0.1}>
                <div className="glass h-full rounded-sm p-8">
                  <c.Icon className="h-8 w-8 text-gold" />
                  <h4 className="mt-6 font-serif text-2xl">{c.title}</h4>
                  <p className="mt-3 text-sm text-muted-foreground">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0">
          <img src={experienceImg} alt="" loading="lazy" width={1920} height={1080} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <h3 className="font-serif text-4xl md:text-5xl">Built on togetherness</h3>
            <p className="mt-6 text-lg text-foreground/85">
              From neighborhood favorites to luxury catering, every Foodex experience
              is rooted in the joy of sharing — a value that has carried us through
              two decades and counting.
            </p>
            <Link to="/contact" className="mt-10 inline-block rounded-sm bg-primary px-8 py-4 text-xs font-semibold uppercase tracking-widest text-primary-foreground shadow-glow-red hover:bg-primary-glow">
              Visit Us Today
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
