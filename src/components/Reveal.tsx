import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow && (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-gold">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-4xl font-light leading-tight md:text-6xl">
        {title}
      </h2>
      <div className={`gold-divider mt-6 w-24 ${align === "center" ? "mx-auto" : ""}`} />
      {subtitle && (
        <p className={`mt-6 max-w-2xl text-base text-muted-foreground md:text-lg ${align === "center" ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
