import { motion } from "framer-motion";
import { Camera, Heart, Music2, Sparkles } from "lucide-react";
import { Card } from "./ui/Card";
import { Section } from "./ui/Section";
import type { TimelineItem } from "../types/invitation";

type TimelineSectionProps = {
  items: TimelineItem[];
};

const iconMap = {
  sparkles: Sparkles,
  heart: Heart,
  music: Music2,
  camera: Camera,
};

export function TimelineSection({ items }: TimelineSectionProps) {
  return (
    <Section
      id="timeline"
      label="Event Flow"
      title="A graceful evening, one moment at a time"
      description="Every part of the celebration is arranged to feel warm, effortless, and memorable."
    >
      <div className="space-y-4">
        {items.map((item, index) => {
          const Icon = iconMap[item.icon];

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08 }}
              className="relative pl-8"
            >
              <span className="absolute left-[13px] top-12 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-gold/70 to-transparent" />
              <span className="absolute left-0 top-5 rounded-full border border-gold/30 bg-gold/12 p-2 text-gold">
                <Icon size={16} />
              </span>
              <Card>
                <p className="text-xs uppercase tracking-[0.3em] text-gold">
                  {item.time}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-cream">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-white/72">{item.description}</p>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
