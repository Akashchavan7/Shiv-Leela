import { Footer } from "../components/Footer";
import { GallerySection } from "../components/GallerySection";
import { HeroSection } from "../components/HeroSection";
import { InvitationSection } from "../components/InvitationSection";
import { LocationSection } from "../components/LocationSection";
import { TimelineSection } from "../components/TimelineSection";
import { invitationData } from "../data/invitationData";

export function HomePage() {
  return (
    <main>
      <HeroSection hero={invitationData.hero} />
      <InvitationSection
        names={invitationData.coupleNames}
        message={invitationData.invitationMessage}
        eventDetails={invitationData.eventDetails}
      />
      <GallerySection items={invitationData.gallery} />
      <LocationSection
        mapEmbedUrl={invitationData.mapEmbedUrl}
        mapExternalUrl={invitationData.mapExternalUrl}
        title={invitationData.venueTitle}
        description={invitationData.venueDescription}
      />
      <TimelineSection items={invitationData.timeline} />
      <Footer
        contacts={invitationData.contacts}
        socialLinks={invitationData.socialLinks}
      />
    </main>
  );
}
