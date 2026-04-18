import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { useState } from "react";
import type { GalleryItem } from "../../types/invitation";

type ImageCarouselProps = {
  items: GalleryItem[];
  onItemClick: (item: GalleryItem) => void;
};

export function ImageCarousel({ items, onItemClick }: ImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex];

  const showPrevious = () => {
    setActiveIndex((current) => (current === 0 ? items.length - 1 : current - 1));
  };

  const showNext = () => {
    setActiveIndex((current) => (current === items.length - 1 ? 0 : current + 1));
  };

  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-[28px]">
        <AnimatePresence mode="wait">
          <motion.button
            key={activeItem.id}
            type="button"
            onClick={() => onItemClick(activeItem)}
            className="relative block h-[300px] w-full overflow-hidden rounded-[28px] text-left"
            initial={{ opacity: 0.35, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.2, scale: 0.98 }}
            transition={{ duration: 0.35 }}
          >
            <img
              src={activeItem.thumbnail}
              alt={activeItem.title}
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-5">
              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
                  Featured memory
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-cream">
                  {activeItem.title}
                </h3>
              </div>
              {activeItem.type === "video" ? (
                <span className="rounded-full bg-white/14 p-3 text-white">
                  <Play size={18} />
                </span>
              ) : null}
            </div>
          </motion.button>
        </AnimatePresence>

        <button
          type="button"
          onClick={showPrevious}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-midnight/55 p-3 text-white"
          aria-label="Previous media"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          onClick={showNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-midnight/55 p-3 text-white"
          aria-label="Next media"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-1">
        {items.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`relative h-20 min-w-[84px] overflow-hidden rounded-2xl border ${
              index === activeIndex ? "border-gold" : "border-white/10"
            }`}
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="h-full w-full object-cover"
              loading="lazy"
            />
            {item.type === "video" ? (
              <span className="absolute inset-0 flex items-center justify-center bg-midnight/20 text-white">
                <Play size={16} />
              </span>
            ) : null}
          </button>
        ))}
      </div>
    </div>
  );
}
