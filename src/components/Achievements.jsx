import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { ACHIEVEMENTS } from "../data";
import "./Achievements.css";

export default function Achievements() {
  const [hRef, hVis] = useScrollAnimation();

  return (
    <section id="achievements" className="achievements-section">
      <div className="container">
        <div ref={hRef} className={`section-header reveal ${hVis ? "visible" : ""}`}>
          <p className="section-label">Recognition</p>
          <h2 className="section-title">Achieve<span>ments</span></h2>
        </div>

        <div className="achievements-grid">
          {ACHIEVEMENTS.map((item, i) => (
            <AchievementCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AchievementCard({ item, index }) {
  const [ref, vis] = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`achievement-card card reveal ${vis ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      <div className="achievement-icon-wrap">
        <span className="achievement-icon">{item.icon}</span>
      </div>
      <div className="achievement-content">
        <div className="achievement-header">
          <h3 className="achievement-title">{item.title}</h3>
          <span className="achievement-badge tag">{item.badge}</span>
        </div>
        <p className="achievement-org">{item.org}</p>
        <p className="achievement-desc">{item.description}</p>
      </div>
    </div>
  );
}
