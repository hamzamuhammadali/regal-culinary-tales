import { createFileRoute } from "@tanstack/react-router";
import { Reveal, SectionHeading } from "@/components/Reveal";
import experienceImg from "@/assets/experience-bg.jpg";
import ctaImg from "@/assets/cta-bg.jpg";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "The Foodex Experience — Hospitality That Inspires" },
      { name: "description", content: "More than a meal — a memory made. Discover the heart of Foodex hospitality." },
      { property: "og:title", content: "The Foodex Experience" },
      { property: "og:description", content: "Nurturing bonds, celebrating togetherness, creating memories." },
    ],
  }),
  component: Experience,
});

function Experience() {
  return (
    <>
      <section className="relative flex min-h-[80vh] items-center overflow-hidden pt-32">
        <div className="absolute inset-0">
          <img src={experienceImg} alt="" loading="lazy" width={1920} height={1080} className="h-full w-full object-cover animate-slow-zoom" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.5em] text-gold">
              The Foodex Experience
            </p>
            <h1 className="font-serif text-5xl font-light leading-tight md:text-7xl">
              More Than a Meal —<br /><span className="italic text-gradient-gold">A Memory Made.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <p className="font-serif text-2xl leading-relaxed text-foreground/90 md:text-3xl">
              "It's about nurturing bonds, celebrating togetherness, and creating
              memories that last a lifetime."
            </p>
            <div className="gold-divider mx-auto my-10 w-24" />
            <p className="text-lg text-muted-foreground">
              At Foodex, we believe every meal is an opportunity to share love,
              spark joy, and build connections that truly matter. From the first
              sip to the last bite, every detail is shaped around one promise —
              that you'll leave with a story to tell.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={ctaImg} alt="" loading="lazy" width={1920} height={1080} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 py-28 text-center">
          <Reveal>
            <h2 className="font-serif text-4xl md:text-5xl">A table is always set for you.</h2>
            <p className="mt-6 text-muted-foreground">Come share a meal. Stay for the moments in between.</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
