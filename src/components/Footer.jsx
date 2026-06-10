import { PERSONAL } from "../data";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a className="footer-logo" href="#" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          DN<span>.</span>
        </a>
        <p className="footer-text">
          Designed &amp; built by <strong>Devansh Nirmal</strong>
        </p>
        <a href={`mailto:${PERSONAL.email}`} className="footer-email">
          {PERSONAL.email}
        </a>
      </div>
    </footer>
  );
}
