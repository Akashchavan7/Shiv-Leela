import { MapPinned, Navigation } from "lucide-react";
import { Button } from "./ui/Button";
import { Card } from "./ui/Card";
import { Section } from "./ui/Section";

type LocationSectionProps = {
  mapEmbedUrl: string;
  mapExternalUrl: string;
  title: string;
  description: string;
};

export function LocationSection({
  mapEmbedUrl,
  mapExternalUrl,
  title,
  description,
}: LocationSectionProps) {
  return (
    <Section
      id="location"
      label="Venue Location"
      title={title}
      description={description}
    >
      <Card className="overflow-hidden p-3">
        <div className="mb-4 flex items-start gap-3 px-2 pt-2">
          <div className="rounded-2xl bg-gold/14 p-3 text-gold">
            <MapPinned size={22} />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-cream">Find your way</h3>
            <p className="mt-2 text-sm text-white/70">
              Use the embedded map for a quick preview or open the exact route in
              Google Maps.
            </p>
          </div>
        </div>
        <div className="overflow-hidden rounded-[24px] border border-white/10">
          <iframe
            title="Venue map"
            src={mapEmbedUrl}
            className="h-[320px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="px-2 pb-2 pt-4">
          <Button href={mapExternalUrl} target="_blank" rel="noreferrer">
            <Navigation size={16} className="mr-2" />
            Open in Maps
          </Button>
        </div>
      </Card>
    </Section>
  );
}
