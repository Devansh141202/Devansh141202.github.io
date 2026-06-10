import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { EDUCATION } from "../data";
import { FiMapPin, FiCalendar, FiAward } from "react-icons/fi";
import "./Education.css";

export default function Education() {
  const [hRef, hVis] = useScrollAnimation();

  return (
    <section id="education" className="education-section">
      <div className="container">
        <div ref={hRef} className={`section-header reveal ${hVis ? "visible" : ""}`}>
          <p className="section-label">Learning Journey</p>
          <h2 className="section-title">Academic <span>Background</span></h2>
        </div>

        {EDUCATION.map((edu, i) => (
          <EduCard key={i} edu={edu} index={i} />
        ))}
      </div>
    </section>
  );
}

function EduCard({ edu }) {
  const [ref, vis] = useScrollAnimation();

  return (
    <div ref={ref} className={`edu-card card reveal ${vis ? "visible" : ""}`}>
      <div className="edu-left">
        <div className="edu-icon-wrap">
          <span className="edu-icon">🎓</span>
        </div>
        <div className="edu-timeline-line" />
      </div>

      <div className="edu-content">
        <div className="edu-header">
          <div>
            <h3 className="edu-degree">{edu.degree}</h3>
            <p className="edu-institution">{edu.institution}</p>
            <p className="edu-short">{edu.shortName}</p>
          </div>
          <div className="edu-meta">
            <span className="edu-meta-item"><FiCalendar size={13} /> {edu.period}</span>
            <span className="edu-meta-item"><FiMapPin size={13} /> {edu.location}</span>
            <div className="edu-gpa">
              <FiAward size={14} />
              <span>GPA: <strong>{edu.gpa}</strong></span>
            </div>
          </div>
        </div>

        <div className="edu-body">
          <div className="edu-block">
            <h5 className="edu-block-title">Relevant Coursework</h5>
            <div className="edu-tags">
              {edu.coursework.map((c) => (
                <span key={c} className="tag">{c}</span>
              ))}
            </div>
          </div>

          <div className="edu-block">
            <h5 className="edu-block-title">Positions of Responsibility</h5>
            <ul className="edu-activities">
              {edu.activities.map((a, i) => (
                <li key={i} className="edu-activity">
                  <span className="point-dot" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
