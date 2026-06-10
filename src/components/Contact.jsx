import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { PERSONAL } from "../data";
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiInstagram } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import "./Contact.css";

const socials = [
  { icon: <FiGithub size={22} />, label: "GitHub", value: "github.com/Devansh141202", href: PERSONAL.github },
  { icon: <FiLinkedin size={22} />, label: "LinkedIn", value: "linkedin.com/in/devansh1412", href: PERSONAL.linkedin },
  { icon: <FiInstagram size={22} />, label: "Instagram", value: "@devansh_nirmal_3", href: PERSONAL.instagram },
  { icon: <SiLeetcode size={20} />, label: "LeetCode", value: "devansh_14", href: PERSONAL.leetcode },
];

export default function Contact() {
  const [hRef, hVis] = useScrollAnimation();
  const [cRef, cVis] = useScrollAnimation();

  return (
    <section id="contact" className="contact-section">
      <div className="contact-glow" />
      <div className="container">
        <div ref={hRef} className={`contact-header reveal ${hVis ? "visible" : ""}`}>
          <p className="section-label">Let's Connect</p>
          <h2 className="section-title">Get In <span>Touch</span></h2>
          <p className="contact-tagline">
            I'm always open to new opportunities, collaborations, or just a good tech conversation.
            Feel free to reach out — I'll get back to you!
          </p>
        </div>

        <div ref={cRef} className={`contact-grid reveal ${cVis ? "visible" : ""}`}>
          <div className="contact-main card">
            <div className="contact-email-wrap">
              <span className="contact-section-label">Email Me</span>
              <a href={`mailto:${PERSONAL.email}`} className="contact-email">
                {PERSONAL.email}
              </a>
              <a href={`mailto:${PERSONAL.email}`} className="btn-primary">
                <FiMail size={16} /> Send Email
              </a>
            </div>

            <div className="contact-divider" />

            <div className="contact-location">
              <FiMapPin size={16} />
              <div>
                <p className="contact-loc-label">Based In</p>
                <p className="contact-loc-value">{PERSONAL.location}</p>
              </div>
            </div>
          </div>

          <div className="contact-socials">
            <span className="contact-section-label">Find Me Online</span>
            <div className="social-cards">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="social-card card"
                >
                  <div className="sc-icon">{s.icon}</div>
                  <div className="sc-info">
                    <span className="sc-label">{s.label}</span>
                    <span className="sc-value">{s.value}</span>
                  </div>
                  <div className="sc-arrow">→</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
