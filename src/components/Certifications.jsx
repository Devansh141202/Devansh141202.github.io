import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { CERTIFICATIONS } from "../data";
import "./Certifications.css";

export default function Certifications() {
  const [hRef, hVis] = useScrollAnimation();

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <div ref={hRef} className={`section-header reveal ${hVis ? "visible" : ""}`}>
          <p className="section-label">Credentials</p>
          <h2 className="section-title">Certifi<span>cations</span></h2>
        </div>

        <div className="cert-grid">
          {CERTIFICATIONS.map((cert, i) => (
            <CertCard key={i} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CertCard({ cert, index }) {
  const [ref, vis] = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`cert-card card reveal ${vis ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      <div className="cert-badge" style={{ background: `${cert.color}18`, borderColor: `${cert.color}44` }}>
        <span className="cert-abbr" style={{ color: cert.color }}>{cert.abbr}</span>
      </div>
      <div className="cert-info">
        <h4 className="cert-name">{cert.name}</h4>
        <p className="cert-issuer">{cert.issuer}</p>
        <span className="cert-code tag">{cert.code}</span>
      </div>
      <div className="cert-check">✓</div>
    </div>
  );
}
