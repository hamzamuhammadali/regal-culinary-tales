import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-cinematic.jpg";
import { STATS, SITE } from "@/lib/site-data";
import { StatCounter } from "./StatCounter";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Luxury Arabic restaurant interior with charcoal grilled chicken"
          width={1920}
          height={1080}
          className="h-full w-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-32 pb-20 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 text-xs font-semibold uppercase tracking-[0.5em] text-gold"
        >
          Est. {SITE.established} · United Arab Emirates
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="font-serif text-5xl font-light leading-[1.05] md:text-7xl lg:text-[5.5rem]"
        >
          Bringing People Together
          <br />
          With <span className="italic text-shimmer">Flavors That Inspire</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mx-auto mt-8 max-w-2xl text-base text-foreground/80 md:text-lg"
        >
          At Foodex Group, every meal tells a story. Serving exceptional culinary
          experiences across the UAE since 2003.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            to="/about"
            className="group inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-8 py-4 text-xs font-semibold uppercase tracking-widest text-primary-foreground shadow-glow-red transition-all hover:bg-primary-glow"
          >
            Explore Our Story
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/branches"
            className="inline-flex items-center justify-center gap-2 rounded-sm border border-gold/50 bg-gold/5 px-8 py-4 text-xs font-semibold uppercase tracking-widest text-gold backdrop-blur-sm transition-all hover:bg-gold hover:text-background"
          >
            Find a Branch
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mx-auto mt-20 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {STATS.map((s) => (
            <StatCounter key={s.label} value={s.value} label={s.label} />
          ))}
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
