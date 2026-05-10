import { createFileRoute, Link } from "@tanstack/react-router";
import * as Icons from "lucide-react";
import { ArrowRight, Star, MapPin, Phone, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { DishCard } from "@/components/DishCard";
import { SERVICES, DISHES, TESTIMONIALS, FEATURED_BRANCH } from "@/lib/site-data";
import aboutImg from "@/assets/about-restaurant.jpg";
import experienceImg from "@/assets/experience-bg.jpg";
import ctaImg from "@/assets/cta-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Foodex Group — Luxury UAE Hospitality Since 2003" },
      { name: "description", content: "Bringing people together with flavors that inspire. 25+ branches, signature dishes, premium catering across the UAE." },
      { property: "og:title", content: "Foodex Group — Luxury UAE Hospitality" },
      { property: "og:description", content: "Premium restaurants, catering and hospitality across the Emirates since 2003." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <AboutTeaser />
      <ServicesPreview />
      <SignaturePreview />
      <ExperienceSection />
      <Testimonials />
      <BranchFeature />
      <InstagramSection />
      <CtaBanner />
    </>
  );
}

function AboutTeaser() {
  return (
    <section className="relative py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <img
              src={aboutImg}
              alt="Foodex luxury restaurant interior"
              loading="lazy"
              width={1600}
              height={1200}
              className="rounded-sm shadow-elegant"
            />
            <div className="absolute -bottom-8 -right-8 hidden rounded-sm border border-gold/30 bg-card p-6 shadow-glow-gold md:block">
              <div className="font-serif text-5xl text-gold">20+</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                Years of Excellence
              </div>
            </div>
            <div className="pointer-events-none absolute -inset-8 -z-10" style={{ background: "var(--gradient-radial-red)" }} />
          </div>
        </Reveal>
        <div>
          <SectionHeading
            eyebrow="Welcome to Foodex"
            title="A Pinch of Love in Every Meal"
            align="left"
          />
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Adding a pinch of love to every meal we serve, every moment we create,
              and every connection we make across the UAE. Foodex Group has been
              crafting culinary experiences worth remembering for over two decades.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { v: "25+", l: "Branches" },
                { v: "100%", l: "Customer Focused" },
                { v: "GCC", l: "Expansion Vision" },
              ].map((c) => (
                <div key={c.l} className="glass rounded-sm p-5 text-center">
                  <div className="font-serif text-2xl text-gold">{c.v}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                    {c.l}
                  </div>
                </div>
              ))}
            </div>
            <Link
              to="/about"
              className="group mt-10 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-gold"
            >
              Discover Our Story
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ServicesPreview() {
  return (
    <section className="relative bg-card/40 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Our Services"
          title="Crafted Experiences"
          subtitle="From signature restaurants to bespoke catering, every offering carries the Foodex promise of warmth, quality, and unforgettable taste."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = (Icons as any)[s.icon] || Icons.Sparkles;
            return (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="group relative h-full overflow-hidden rounded-sm border border-border bg-card p-8 transition-all hover:border-gold/40 hover:shadow-glow-red">
                  <div className="mb-6 grid h-14 w-14 place-items-center rounded-sm border border-gold/30 bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-background">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-2xl">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
                  <Link
                    to="/services"
                    className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold"
                  >
                    Explore <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <div className="pointer-events-none absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-primary opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SignaturePreview() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Signature Menu"
          title="Dishes Worth Returning For"
          subtitle="From slow-charred classics to coastal favorites, our menu celebrates the rich tapestry of flavors that define hospitality across the UAE."
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DISHES.slice(0, 6).map((d, i) => (
            <Reveal key={d.name} delay={i * 0.06}>
              <DishCard {...d} />
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 rounded-sm border border-gold/40 bg-gold/10 px-8 py-4 text-xs font-semibold uppercase tracking-widest text-gold transition-all hover:bg-gold hover:text-background"
          >
            View Full Menu <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute inset-0">
        <img
          src={experienceImg}
          alt="Family dining experience at Foodex"
          loading="lazy"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.5em] text-gold">
            The Foodex Experience
          </p>
          <h2 className="font-serif text-4xl font-light leading-tight md:text-6xl lg:text-7xl">
            More Than a Meal —
            <br />
            <span className="italic text-gradient-gold">A Memory Made.</span>
          </h2>
          <p className="mx-auto mt-10 max-w-2xl text-lg leading-relaxed text-foreground/85">
            It's about nurturing bonds, celebrating togetherness, and creating
            memories that last a lifetime. At Foodex, we believe every meal is an
            opportunity to share love, spark joy, and build connections that truly matter.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Testimonials() {
  const row = [...TESTIMONIALS, ...TESTIMONIALS];
  return (
    <section className="overflow-hidden py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Guests Say" title="Voices of Our Diners" />
      </div>
      <div className="mt-16 [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
        <div className="flex w-max gap-6 animate-marquee">
          {row.map((t, i) => (
            <div
              key={i}
              className="w-[340px] shrink-0 rounded-sm border border-border bg-card p-7 sm:w-[420px]"
            >
              <div className="mb-3 flex gap-1 text-gold">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="font-serif text-xl italic leading-relaxed text-foreground/90">
                "{t.text}"
              </p>
              <p className="mt-5 text-xs uppercase tracking-widest text-muted-foreground">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BranchFeature() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Find Us"
          title="Our Featured Branch"
          subtitle="Step into one of our flagship locations and discover the warmth of true Arabic-Asian hospitality."
        />
        <Reveal>
          <div className="mt-16 grid overflow-hidden rounded-sm border border-gold/20 lg:grid-cols-2">
            <div className="relative bg-gradient-to-br from-primary/30 via-card to-background p-10 md:p-14">
              <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-radial-red)" }} />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">
                  Flagship Location
                </p>
                <h3 className="mt-4 font-serif text-4xl md:text-5xl">{FEATURED_BRANCH.name}</h3>
                <p className="mt-3 text-lg text-foreground/85">{FEATURED_BRANCH.area}</p>
                <ul className="mt-8 space-y-4 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    {FEATURED_BRANCH.address}
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    <a href={`tel:${FEATURED_BRANCH.phone}`}>{FEATURED_BRANCH.phone}</a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    {FEATURED_BRANCH.hours}
                  </li>
                </ul>
                <div className="mt-10 flex flex-wrap gap-3">
                  <a
                    href={`tel:${FEATURED_BRANCH.phone}`}
                    className="rounded-sm bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-widest text-primary-foreground shadow-glow-red hover:bg-primary-glow"
                  >
                    Call Now
                  </a>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${FEATURED_BRANCH.mapsQuery}`}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-sm border border-gold/40 bg-gold/10 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-gold hover:bg-gold hover:text-background"
                  >
                    Directions
                  </a>
                  <Link
                    to="/contact"
                    className="rounded-sm border border-border px-6 py-3 text-xs font-semibold uppercase tracking-widest text-foreground hover:border-gold hover:text-gold"
                  >
                    Reserve
                  </Link>
                </div>
              </div>
            </div>
            <div className="min-h-[400px] bg-card">
              <iframe
                title="Foodex Real Taste location"
                src={`https://www.google.com/maps?q=${FEATURED_BRANCH.mapsQuery}&output=embed`}
                className="h-full w-full grayscale-[40%] contrast-110"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function InstagramSection() {
  const tiles = DISHES.slice(0, 8);
  return (
    <section className="bg-card/40 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="@foodexrestaurants"
          title="Follow Our Journey"
          subtitle="Glimpses from our kitchens, dining rooms, and the moments our guests share with us every day."
        />
        <Reveal>
          <div className="mt-16 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {tiles.map((t, i) => (
              <a
                key={i}
                href="https://instagram.com/foodexrestaurants"
                target="_blank"
                rel="noreferrer"
                className="group relative aspect-square overflow-hidden rounded-sm"
              >
                <img
                  src={t.img}
                  alt={t.name}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/40" />
                <div className="absolute inset-0 grid place-items-center opacity-0 transition-opacity group-hover:opacity-100">
                  <Icons.Instagram className="h-8 w-8 text-gold" />
                </div>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={ctaImg}
          alt="Chef plating in luxury kitchen"
          loading="lazy"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
      </div>
      <div className="relative mx-auto max-w-5xl px-6 py-32 text-center">
        <Reveal>
          <h2 className="font-serif text-5xl font-light leading-tight md:text-7xl">
            Ready to Experience
            <br />
            <span className="italic text-gradient-gold">Royal Hospitality?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-foreground/85">
            Reserve your table or visit your nearest branch — every guest is treated like family.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              to="/contact"
              className="rounded-sm bg-primary px-8 py-4 text-xs font-semibold uppercase tracking-widest text-primary-foreground shadow-glow-red hover:bg-primary-glow"
            >
              Get In Touch
            </Link>
            <Link
              to="/branches"
              className="rounded-sm border border-gold/40 bg-gold/10 px-8 py-4 text-xs font-semibold uppercase tracking-widest text-gold hover:bg-gold hover:text-background"
            >
              Find a Branch
            </Link>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
