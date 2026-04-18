import { motion } from "framer-motion";
import { ChevronDown, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/Button";
import type { HeroContent } from "../types/invitation";

type HeroSectionProps = {
  hero: HeroContent;
};

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-4 pb-10 pt-4 sm:px-6"
    >
      <img
        src={hero.backgroundImage}
        alt="Invitation backdrop"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,11,16,0.35)_0%,rgba(15,11,16,0.62)_45%,rgba(15,11,16,0.95)_100%)]" />
      <div className="absolute inset-0 bg-hero-glow opacity-90" />

      <div className="relative mx-auto flex min-h-[calc(100vh-2rem)] max-w-6xl flex-col justify-between">
        <div className="pt-12">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl rounded-[32px] border border-white/12 bg-black/18 p-6 shadow-soft backdrop-blur-md"
          >
            <span className="section-label">{hero.eyebrow}</span>
            <h1 className="max-w-sm text-5xl font-semibold leading-none text-cream">
              {hero.title}
            </h1>
            <p className="mt-4 max-w-md text-base text-white/78">
              {hero.subtitle}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="#invitation">{hero.ctaLabel}</Button>
              <Button href="/gallery" variant="secondary">
                {hero.secondaryLabel}
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="space-y-4 pb-6"
        >
          <Link
            to="/gallery"
            className="glass-panel flex items-center gap-4 rounded-[28px] p-4"
          >
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl">
              <video
                src={hero.teaserVideo}
                className="h-full w-full object-cover"
                muted
                autoPlay
                loop
                playsInline
              />
              <span className="absolute inset-0 flex items-center justify-center bg-midnight/15 text-white">
                <PlayCircle size={26} />
              </span>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold">
                Preview Story
              </p>
              <h2 className="mt-1 text-xl font-semibold text-cream">
                A quick glimpse into the celebration
              </h2>
            </div>
          </Link>

          <a
            href="#invitation"
            className="mx-auto flex w-fit items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur"
          >
            Scroll to explore
            <ChevronDown size={16} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
