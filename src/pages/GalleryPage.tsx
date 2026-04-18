import { ArrowLeft, Play } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "../components/ui/Modal";
import { invitationData } from "../data/invitationData";
import type { GalleryItem } from "../types/invitation";

export function GalleryPage() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <main className="px-4 pb-24 pt-6 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <span className="section-label">Media Lounge</span>
            <h1 className="text-4xl font-semibold text-cream">Gallery & Videos</h1>
            <p className="mt-3 max-w-2xl text-sm text-white/72">
              A dedicated media wall designed for mobile viewing, with large
              tap targets and clean previews.
            </p>
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-3 text-sm font-semibold text-white/80"
          >
            <ArrowLeft size={16} />
            Back
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {invitationData.gallery.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedItem(item)}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/6"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/5 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-gold">
                      {item.type === "video" ? "Video" : "Photo"}
                    </p>
                    <h2 className="mt-2 text-xl font-semibold text-cream">
                      {item.title}
                    </h2>
                  </div>
                  {item.type === "video" ? (
                    <span className="rounded-full bg-white/14 p-3 text-white">
                      <Play size={16} />
                    </span>
                  ) : null}
                </div>
              </div>
            </button>
          ))}
        </div>
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
            className="max-h-[72vh] w-full rounded-2xl bg-black"
          />
        ) : (
          <img
            src={selectedItem?.src}
            alt={selectedItem?.title}
            className="max-h-[72vh] w-full rounded-2xl object-cover"
          />
        )}
      </Modal>
    </main>
  );
}
