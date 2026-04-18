import type { InvitationContent } from "../types/invitation";

export const invitationData: InvitationContent = {
  nav: [
    { label: "Home", href: "#home" },
    { label: "Invite", href: "#invitation" },
    { label: "Gallery", href: "#gallery" },
    { label: "Location", href: "#location" },
    { label: "Timeline", href: "#timeline" },
  ],
  hero: {
    eyebrow: "A celebration of togetherness",
    title: "You're Invited",
    subtitle:
      "Join us for an unforgettable evening of joy, music, blessings, and beautiful memories at Shiv Leela.",
    ctaLabel: "View Invitation",
    secondaryLabel: "Explore Gallery",
    backgroundImage:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80",
    teaserVideo:
      "https://videos.pexels.com/video-files/2792370/2792370-hd_1920_1080_25fps.mp4",
  },
  coupleNames: "Shiv Leela Celebration",
  invitationMessage:
    "With hearts full of gratitude and joy, we warmly invite you to celebrate this special day with us. Your presence will make the occasion even more meaningful.",
  eventDetails: [
    { label: "Occasion", value: "Grand Family Celebration" },
    { label: "Date", value: "Sunday, 28 July 2026" },
    { label: "Time", value: "6:30 PM onwards" },
    { label: "Venue", value: "Shiv Leela, your special destination" },
  ],
  mapEmbedUrl:
    "https://www.google.com/maps?q=Shiv%20Leela&output=embed",
  mapExternalUrl: "https://maps.app.goo.gl/jhFS8vXsF3FDs6vW9",
  venueTitle: "Shiv Leela",
  venueDescription:
    "A beautifully chosen venue for an intimate yet elegant celebration. Tap below to open the exact location in Google Maps.",
  gallery: [
    {
      id: 1,
      title: "Golden Hour Blessings",
      type: "image",
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
      thumbnail:
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Floral Details",
      type: "image",
      src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80",
      thumbnail:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Ceremony Lights",
      type: "image",
      src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1000&q=80",
      thumbnail:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 4,
      title: "Celebration Film",
      type: "video",
      src: "https://videos.pexels.com/video-files/3195650/3195650-hd_1920_1080_25fps.mp4",
      thumbnail:
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 5,
      title: "Venue Ambience",
      type: "image",
      src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1200&q=80",
      thumbnail:
        "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      title: "Warm Welcome",
      type: "image",
      src: "https://images.unsplash.com/photo-1513278974582-3e1b4a4fa21d?auto=format&fit=crop&w=1200&q=80",
      thumbnail:
        "https://images.unsplash.com/photo-1513278974582-3e1b4a4fa21d?auto=format&fit=crop&w=800&q=80",
    },
  ],
  timeline: [
    {
      time: "6:30 PM",
      title: "Guests Arrive",
      description:
        "A warm welcome with refreshments, soft music, and a graceful venue reveal.",
      icon: "sparkles",
    },
    {
      time: "7:15 PM",
      title: "Ceremony Begins",
      description:
        "Family blessings and the main celebration unfold in a serene, elegant setting.",
      icon: "heart",
    },
    {
      time: "8:15 PM",
      title: "Dinner & Conversations",
      description:
        "A lovingly prepared dinner is served while everyone enjoys the evening together.",
      icon: "music",
    },
    {
      time: "9:00 PM",
      title: "Memories & Photos",
      description:
        "Capture the joy with photos, videos, and shared moments before the farewell.",
      icon: "camera",
    },
  ],
  contacts: [
    { label: "Call Family", href: "tel:+919999999999" },
    { label: "Send WhatsApp", href: "https://wa.me/919999999999" },
    { label: "Email", href: "mailto:celebration@example.com" },
  ],
  socialLinks: [
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "YouTube", href: "https://www.youtube.com/" },
    { label: "Facebook", href: "https://www.facebook.com/" },
  ],
};
