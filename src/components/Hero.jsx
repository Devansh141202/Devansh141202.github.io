import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiInstagram } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { PERSONAL } from "../data";
import "./Hero.css";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
});

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const role = PERSONAL.roles[roleIdx];
    let timeout;

    if (typing) {
      if (displayed.length < role.length) {
        timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 65);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setRoleIdx((i) => (i + 1) % PERSONAL.roles.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIdx]);

  return (
    <section className="hero" id="hero">
      <div className="hero-grid-bg" />
      <div className="hero-glow" />

      <div className="container hero-inner">
        <div className="hero-content">
          <motion.p className="hero-greeting" {...fadeUp(0.1)}>
            Hello, I'm
          </motion.p>

          <motion.h1 className="hero-name" {...fadeUp(0.2)}>
            {PERSONAL.name}
          </motion.h1>

          <motion.div className="hero-role" {...fadeUp(0.35)}>
            <span className="role-text">{displayed}</span>
            <span className="cursor-blink" />
          </motion.div>

          <motion.p className="hero-bio" {...fadeUp(0.45)}>
            {PERSONAL.bio}
          </motion.p>

          <motion.div className="hero-cta" {...fadeUp(0.55)}>
            <a className="btn-primary" href="#contact">
              <FiMail size={16} /> Get In Touch
            </a>
            <a className="btn-outline" href="#projects">
              View My Work
            </a>
          </motion.div>

          <motion.div className="hero-socials" {...fadeUp(0.65)}>
            <a href={PERSONAL.github} target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
              <FiGithub size={20} />
            </a>
            <a href={PERSONAL.linkedin} target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
              <FiLinkedin size={20} />
            </a>
            <a href={PERSONAL.instagram} target="_blank" rel="noreferrer" className="social-link" aria-label="Instagram">
              <FiInstagram size={20} />
            </a>
            <a href={PERSONAL.leetcode} target="_blank" rel="noreferrer" className="social-link" aria-label="LeetCode">
              <SiLeetcode size={18} />
            </a>
            <span className="social-divider" />
            <a href={`mailto:${PERSONAL.email}`} className="social-email">
              {PERSONAL.email}
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-photo-wrap"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          <div className="photo-ring-outer" />
          <div className="photo-ring-inner" />
          <div className="photo-placeholder">
            <img src="/profile.jpeg" alt="Devansh Nirmal" className="photo-img" />
          </div>
          <div className="photo-badge photo-badge--1">
            <span>JavaScript</span>
          </div>
          <div className="photo-badge photo-badge--2">
            <span>React</span>
          </div>
          <div className="photo-badge photo-badge--3">
            <span>Cloud</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        data-hover
      >
        <span>Scroll down</span>
        <FiArrowDown size={18} className="arrow-bounce" />
      </motion.div>
    </section>
  );
}
