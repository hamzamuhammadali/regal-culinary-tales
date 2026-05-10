import { createFileRoute } from "@tanstack/react-router";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { DishCard } from "@/components/DishCard";
import { DISHES } from "@/lib/site-data";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Signature Menu — Foodex Group" },
      { name: "description", content: "Charcoal chicken, shawarma, porotta, fish thawa, grill platters and more — explore the Foodex signature menu." },
      { property: "og:title", content: "Foodex Signature Menu" },
      { property: "og:description", content: "Dishes worth returning for, again and again." },
    ],
  }),
  component: Menu,
});

function Menu() {
  return (
    <>
      <section className="pt-40 pb-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <SectionHeading
            eyebrow="Signature Menu"
            title="Dishes Worth Returning For"
            subtitle="Each plate tells a story — slow-grilled, hand-rolled, and seasoned with two decades of practice."
          />
        </div>
      </section>
      <section className="pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DISHES.map((d, i) => (
              <Reveal key={d.name} delay={i * 0.05}>
                <DishCard {...d} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
