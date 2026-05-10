import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function DishCard({
  name,
  desc,
  img,
  rating,
}: {
  name: string;
  desc: string;
  img: string;
  rating: number;
}) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-sm border border-border bg-card transition-all hover:border-gold/50 hover:shadow-glow-red"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={img}
          alt={name}
          loading="lazy"
          width={1024}
          height={768}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-80" />
      </div>
      <div className="p-6">
        <div className="mb-2 flex items-center gap-1 text-gold">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-current" />
          ))}
        </div>
        <h3 className="font-serif text-2xl font-medium">{name}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
    </motion.article>
  );
}
