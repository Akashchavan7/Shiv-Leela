import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";
import { ImageCarousel } from "./ui/ImageCarousel";
import { Modal } from "./ui/Modal";
import { Section } from "./ui/Section";
import { useState } from "react";
import type { GalleryItem } from "../types/invitation";

type GallerySectionProps = {
  items: GalleryItem[];
};

export function GallerySection({ items }: GallerySectionProps) {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <Section
      id="gallery"
      label="Photo & Video"
      title="A gallery crafted for mobile memories"
      description="Swipe through highlights, tap any frame to enlarge it, and open the full media view for a deeper look."
    >
      <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <Card className="overflow-hidden">
          <ImageCarousel items={items.slice(0, 4)} onItemClick={setSelectedItem} />
        </Card>

        <div className="grid grid-cols-2 gap-3">
          {items.slice(0, 4).map((item, index) => (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => setSelectedItem(item)}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.06 }}
              className="group relative overflow-hidden rounded-[24px] border border-white/10"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/5 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <p className="max-w-[85%] text-sm font-semibold text-cream">
                  {item.title}
                </p>
                {item.type === "video" ? (
                  <span className="rounded-full bg-white/14 p-2 text-white">
                    <Play size={14} />
                  </span>
                ) : null}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <Link to="/gallery">
          <Button variant="secondary">Open full gallery</Button>
        </Link>
      </div>

      <Modal
        isOpen={selectedItem !== null}
        title={selectedItem?.title ?? "Preview"}
        onClose={() => setSelectedItem(null)}
      >
        {selectedItem?.type === "video" ? (
          <video
            src={selectedItem.src}
            controls
            autoPlay
            className="max-h-[70vh] w-full rounded-2xl bg-black"
          />
        ) : (
          <img
            src={selectedItem?.src}
            alt={selectedItem?.title}
            className="max-h-[70vh] w-full rounded-2xl object-cover"
          />
        )}
      </Modal>
    </Section>
  );
}
