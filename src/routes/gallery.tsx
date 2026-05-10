import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { DISHES } from "@/lib/site-data";
import aboutImg from "@/assets/about-restaurant.jpg";
import experienceImg from "@/assets/experience-bg.jpg";
import ctaImg from "@/assets/cta-bg.jpg";
import heroImg from "@/assets/hero-cinematic.jpg";
import { X } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Foodex Group" },
      { name: "description", content: "A glimpse into the Foodex Group world — dishes, dining rooms and moments." },
      { property: "og:title", content: "Foodex Gallery" },
      { property: "og:description", content: "Cinematic visuals from our kitchens and dining rooms." },
    ],
  }),
  component: Gallery,
});

const IMAGES = [
  ...DISHES.map((d) => ({ src: d.img, alt: d.name })),
  { src: aboutImg, alt: "Restaurant interior" },
  { src: experienceImg, alt: "Dining experience" },
  { src: ctaImg, alt: "Chef plating" },
  { src: heroImg, alt: "Charcoal grill ambience" },
];

function Gallery() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <>
      <section className="pt-40 pb-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <SectionHeading eyebrow="Visual Story" title="Inside Foodex" subtitle="A look at the dishes, rooms and moments that define the Foodex experience." />
        </div>
      </section>
      <section className="pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {IMAGES.map((img, i) => (
              <Reveal key={i} delay={(i % 4) * 0.05}>
                <button
                  onClick={() => setOpen(img.src)}
                  className="group relative aspect-square w-full overflow-hidden rounded-sm"
                >
                  <img src={img.src} alt={img.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-background/0 transition-colors group-hover:bg-background/30" />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {open && (
        <div className="fixed inset-0 z-[60] grid place-items-center bg-background/95 backdrop-blur-xl p-6" onClick={() => setOpen(null)}>
          <button aria-label="Close" className="absolute right-6 top-6 grid h-10 w-10 place-items-center rounded-sm border border-gold/40 text-gold">
            <X className="h-5 w-5" />
          </button>
          <img src={open} alt="" className="max-h-[85vh] max-w-[90vw] rounded-sm shadow-elegant" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  );
}
