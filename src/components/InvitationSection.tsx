import { motion } from "framer-motion";
import { CalendarDays, Clock3, MapPin, Sparkles } from "lucide-react";
import { Card } from "./ui/Card";
import { Section } from "./ui/Section";
import type { EventDetail } from "../types/invitation";

type InvitationSectionProps = {
  names: string;
  message: string;
  eventDetails: EventDetail[];
};

const icons = [Sparkles, CalendarDays, Clock3, MapPin];

export function InvitationSection({
  names,
  message,
  eventDetails,
}: InvitationSectionProps) {
  return (
    <Section
      id="invitation"
      label="The Invitation"
      title={names}
      description={message}
    >
      <div className="grid gap-4">
        {eventDetails.map((detail, index) => {
          const Icon = icons[index] ?? Sparkles;

          return (
            <motion.div
              key={detail.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
            >
              <Card className="flex items-center gap-4">
                <div className="rounded-2xl bg-gold/14 p-3 text-gold">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-white/45">
                    {detail.label}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-cream">
                    {detail.value}
                  </h3>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
