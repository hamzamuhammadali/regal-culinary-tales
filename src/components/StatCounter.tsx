import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

export function StatCounter({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const num = parseInt(value.replace(/\D/g, ""), 10) || 0;
  const suffix = value.replace(/[0-9]/g, "");
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.floor(v).toString());

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, num, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, mv, num]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="glass rounded-sm p-6 text-center"
    >
      <div className="font-serif text-4xl text-gold md:text-5xl">
        <motion.span>{rounded}</motion.span>
        <span>{suffix}</span>
      </div>
      <div className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
        {label}
      </div>
    </motion.div>
  );
}
