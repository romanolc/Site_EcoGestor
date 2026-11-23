import { useEffect, useRef, useState, type ReactNode } from 'react';

export default function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) { setShown(true); return; }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setShown(true); observer.disconnect(); }
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${shown ? 'is-visible' : ''} ${className}`} style={{ '--reveal-delay': `${delay}ms` } as React.CSSProperties}>{children}</div>;
}
