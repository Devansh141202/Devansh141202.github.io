import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { EXPERIENCE } from "../data";
import { FiMapPin, FiCalendar } from "react-icons/fi";
import "./Experience.css";

export default function Experience() {
  const [hRef, hVis] = useScrollAnimation();

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div ref={hRef} className={`section-header reveal ${hVis ? "visible" : ""}`}>
          <p className="section-label">Career</p>
          <h2 className="section-title">Work <span>Experience</span></h2>
        </div>

        <div className="timeline">
          <div className="timeline-line" />
          {EXPERIENCE.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} index={i} isLeft={i % 2 === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ exp, index, isLeft }) {
  const [ref, vis] = useScrollAnimation();

  const card = (
    <div className={`timeline-card card ${isLeft ? "reveal-left" : "reveal-right"} ${vis ? "visible" : ""}`}>
      <div className="exp-header">
        <div className="exp-main">
          <h3 className="exp-company">{exp.company}</h3>
          <p className="exp-role">{exp.role}</p>
        </div>
        <div className="exp-meta">
          <span className="exp-meta-item"><FiCalendar size={13} /> {exp.period}</span>
          <span className="exp-meta-item"><FiMapPin size={13} /> {exp.location}</span>
          {exp.current && <span className="current-badge">Current</span>}
        </div>
      </div>
      <ul className="exp-points">
        {exp.points.map((p, j) => (
          <li key={j} className="exp-point">
            <span className="point-dot" />
            {p}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div
      ref={ref}
      className={`timeline-item ${isLeft ? "item-left" : "item-right"}`}
      style={{ "--delay": `${index * 0.12}s` }}
    >
      {isLeft ? (
        <>
          <div className="timeline-side">{card}</div>
          <div className="timeline-center">
            <div className="timeline-dot">
              {exp.current && <span className="dot-pulse" />}
            </div>
          </div>
          <div className="timeline-side" />
        </>
      ) : (
        <>
          <div className="timeline-side" />
          <div className="timeline-center">
            <div className="timeline-dot">
              {exp.current && <span className="dot-pulse" />}
            </div>
          </div>
          <div className="timeline-side">{card}</div>
        </>
      )}
    </div>
  );
}
