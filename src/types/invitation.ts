export type NavItem = {
  label: string;
  href: string;
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  secondaryLabel: string;
  backgroundImage: string;
  teaserVideo: string;
};

export type EventDetail = {
  label: string;
  value: string;
};

export type TimelineItem = {
  time: string;
  title: string;
  description: string;
  icon: "sparkles" | "heart" | "music" | "camera";
};

export type GalleryItem = {
  id: number;
  title: string;
  type: "image" | "video";
  src: string;
  thumbnail: string;
};

export type ContactLink = {
  label: string;
  href: string;
};

export type InvitationContent = {
  nav: NavItem[];
  hero: HeroContent;
  coupleNames: string;
  invitationMessage: string;
  eventDetails: EventDetail[];
  mapEmbedUrl: string;
  mapExternalUrl: string;
  venueTitle: string;
  venueDescription: string;
  gallery: GalleryItem[];
  timeline: TimelineItem[];
  contacts: ContactLink[];
  socialLinks: ContactLink[];
};
