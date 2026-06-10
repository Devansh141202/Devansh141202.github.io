import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { SKILLS, WHAT_I_DO } from "../data";
import "./About.css";

export default function About() {
  const [ref, vis] = useScrollAnimation();

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div ref={ref} className={`about-grid reveal ${vis ? "visible" : ""}`}>
          <div className="about-text">
            <p className="section-label">About Me</p>
            <h2 className="section-title">
              Who I <span>Am</span>
            </h2>
            <p className="about-para">
              I'm a <strong>Software Engineer</strong> based in India with a passion for building
              scalable, high-performance systems. Currently working at{" "}
              <span className="accent-word">Infocusp Innovations</span>, where I develop backend APIs,
              data pipelines, and AI-powered applications.
            </p>
            <p className="about-para">
              I love the intersection of <span className="accent-word">cloud infrastructure</span>,{" "}
              <span className="accent-word">AI integration</span>, and clean software architecture.
              When I'm not coding, I enjoy competitive programming and sharing knowledge with the developer community.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-num">2+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">3+</span>
                <span className="stat-label">Projects Built</span>
              </div>
            </div>
          </div>

          <div className="about-right">
            <p className="section-label">What I Do</p>
            <div className="what-i-do-grid">
              {WHAT_I_DO.map((item, i) => (
                <WhatIDoCard key={i} item={item} delay={i * 0.1} />
              ))}
            </div>
          </div>
        </div>

        <SkillsBlock />
      </div>
    </section>
  );
}

function WhatIDoCard({ item, delay }) {
  const [ref, vis] = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`wid-card card reveal delay-${Math.min(delay * 10 + 1, 6)} ${vis ? "visible" : ""}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <span className="wid-icon">{item.icon}</span>
      <h4 className="wid-title">{item.title}</h4>
      <p className="wid-desc">{item.desc}</p>
    </div>
  );
}

function SkillsBlock() {
  const [ref, vis] = useScrollAnimation(0.1);
  return (
    <div ref={ref} className={`skills-block reveal ${vis ? "visible" : ""}`}>
      <p className="section-label">Tech Stack</p>
      <h2 className="section-title" style={{ marginBottom: "40px" }}>
        Skills &amp; <span>Technologies</span>
      </h2>
      <div className="skills-grid">
        {Object.entries(SKILLS).map(([cat, items], i) => (
          <div key={cat} className="skill-category" style={{ transitionDelay: `${i * 0.08}s` }}>
            <h5 className="skill-cat-label">{cat}</h5>
            <div className="skill-tags">
              {items.map((s) => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
