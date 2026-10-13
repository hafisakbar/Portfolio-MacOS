import { ChevronLeft } from "lucide-react";
import { socials } from "#constants";
import "./MobileContact.css";

const MobileContact = ({ onBack }) => (
  <section className="mobile-contact" aria-label="Contact">
    <header className="mobile-contact-header">
      <button
        type="button"
        className="mobile-contact-back"
        onClick={onBack}
        aria-label="Go back"
      >
        <ChevronLeft aria-hidden="true" />
        <span>Go Back</span>
      </button>
      <h1>Contact</h1>
      <span aria-hidden="true" />
    </header>

    <main className="mobile-contact-content">
      <img
        className="mobile-contact-avatar"
        src="/images/hafis.jpeg"
        alt="Hafis"
      />
      <h2>Let's Connect</h2>
      <p className="mobile-contact-intro">
        Got an idea? A bug to squash? Or just wanna talk tech? I'm in.
      </p>
      <a className="mobile-contact-email" href="mailto:hafis.akbar1459@gmail.com">
        hafis.akbar1459@gmail.com
      </a>

      <nav className="mobile-contact-links" aria-label="Social links">
        {socials.map(({ id, bg, link, icon, text }) => (
          <a
            key={id}
            className="mobile-contact-link"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: bg }}
          >
            <img src={icon} alt="" aria-hidden="true" />
            <span>{text}</span>
          </a>
        ))}
      </nav>
    </main>
  </section>
);

export default MobileContact;
