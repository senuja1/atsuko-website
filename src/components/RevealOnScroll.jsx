import { useEffect, useRef, useState } from "react";

// Lightweight IntersectionObserver-based reveal — no Framer Motion dependency.
// Respects prefers-reduced-motion for accessibility & low-end CPU relief.
// willChange is applied ONLY during animation then removed to free GPU memory.
export const RevealOnScroll = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [done, setDone] = useState(false);

  // Detect reduced motion preference once
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (prefersReduced) {
      // Instantly show without animation for accessibility / low-power mode
      setVisible(true);
      setDone(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el); // fire once, then stop observing
        }
      },
      { rootMargin: "-40px", threshold: 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [prefersReduced]);

  // Remove willChange after animation completes to free GPU compositor memory
  const handleTransitionEnd = () => setDone(true);

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      ref={ref}
      className={className}
      onTransitionEnd={handleTransitionEnd}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: done
          ? "none"
          : `opacity 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
        // willChange only during the animation, cleared after done
        willChange: done ? "auto" : "transform, opacity",
      }}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
