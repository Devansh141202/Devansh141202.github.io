import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { PROJECTS } from "../data";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import "./Projects.css";

export default function Projects() {
  const [hRef, hVis] = useScrollAnimation();

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div ref={hRef} className={`section-header reveal ${hVis ? "visible" : ""}`}>
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">Featured <span>Projects</span></h2>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const [ref, vis] = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`project-card card reveal ${vis ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      <div className="project-top">
        <div className="project-icon-wrap">
          <span className="project-icon">
            {index === 0 ? "🏥" : index === 1 ? "🤖" : "⚙️"}
          </span>
        </div>
        <div className="project-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="proj-link" aria-label="GitHub">
              <FiGithub size={18} />
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className="proj-link" aria-label="Live">
              <FiExternalLink size={18} />
            </a>
          )}
          {!project.github && !project.live && (
            <span className="proj-private">Private</span>
          )}
        </div>
      </div>

      <div className="project-body">
        <p className="project-subtitle">{project.subtitle}</p>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
      </div>

      <div className="project-footer">
        <div className="project-tech">
          {project.tech.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
