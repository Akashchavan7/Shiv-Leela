import type { ContactLink } from "../types/invitation";

type FooterProps = {
  contacts: ContactLink[];
  socialLinks: ContactLink[];
};

export function Footer({ contacts, socialLinks }: FooterProps) {
  return (
    <footer className="px-4 pb-24 pt-10 sm:px-6">
      <div className="mx-auto max-w-6xl rounded-[32px] border border-white/10 bg-white/6 px-5 py-8 shadow-soft backdrop-blur-xl">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">
          Stay Connected
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-cream">
          We’d love to celebrate with you
        </h2>
        <p className="mt-3 max-w-xl text-sm text-white/70">
          Reach out anytime for RSVP details, directions, or any questions about
          the event.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
              className="rounded-2xl border border-white/10 bg-midnight/40 px-4 py-4 text-sm font-medium text-white/82 hover:border-gold/40 hover:text-white"
            >
              {contact.label}
            </a>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-4 border-t border-white/10 pt-5 text-sm text-white/65">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
