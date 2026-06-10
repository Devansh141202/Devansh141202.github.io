import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const posRef = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafRef = useRef(null);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
    };

    const onEnter = () => setHidden(false);
    const onLeave = () => setHidden(true);
    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    const onHoverIn = (e) => {
      const el = e.target.closest("a, button, [data-hover]");
      if (el) setHovering(true);
    };
    const onHoverOut = (e) => {
      const el = e.target.closest("a, button, [data-hover]");
      if (el) setHovering(false);
    };

    const animate = () => {
      const ease = 0.14;
      ringPos.current.x += (posRef.current.x - ringPos.current.x) * ease;
      ringPos.current.y += (posRef.current.y - ringPos.current.y) * ease;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    document.addEventListener("mouseover", onHoverIn);
    document.addEventListener("mouseout", onHoverOut);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onHoverIn);
      document.removeEventListener("mouseout", onHoverOut);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const dotStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: clicking ? "6px" : "8px",
    height: clicking ? "6px" : "8px",
    background: "var(--accent)",
    borderRadius: "50%",
    pointerEvents: "none",
    zIndex: 99999,
    opacity: hidden ? 0 : 1,
    transition: "width 0.15s ease, height 0.15s ease, opacity 0.2s ease",
    willChange: "transform",
  };

  const ringStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: hovering ? "48px" : clicking ? "28px" : "36px",
    height: hovering ? "48px" : clicking ? "28px" : "36px",
    border: "1.5px solid var(--accent)",
    borderRadius: "50%",
    pointerEvents: "none",
    zIndex: 99998,
    opacity: hidden ? 0 : hovering ? 0.6 : 0.35,
    transition: "width 0.25s ease, height 0.25s ease, opacity 0.2s ease",
    willChange: "transform",
    background: hovering ? "var(--accent-glow)" : "transparent",
  };

  return (
    <>
      <div ref={dotRef} style={dotStyle} />
      <div ref={ringRef} style={ringStyle} />
    </>
  );
}
