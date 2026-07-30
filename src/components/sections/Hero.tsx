import { useEffect, useRef, useState } from 'react';
import { FadeIn } from '../ui/FadeIn';

export function Hero() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);
  const targetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const update = () => {
      rafRef.current = null;
      setOffset({ x: targetRef.current.x, y: targetRef.current.y });
    };

    const onMove = (e: PointerEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      targetRef.current = {
        x: x * 18,
        y: y * 18,
      };

      if (rafRef.current !== null) return;
      rafRef.current = window.requestAnimationFrame(update);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      if (rafRef.current !== null) window.cancelAnimationFrame(rafRef.current);
      window.removeEventListener('pointermove', onMove);
    };
  }, []);

  return (
    <section className="relative min-h-[80vh] md:h-screen w-full flex flex-col justify-end pb-32 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("/galeria/IMG-20260729-WA0008.jpg")',
          transform: `translate3d(${offset.x}px, ${offset.y}px, 0) scale(1.08)`,
          willChange: 'transform',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container relative z-10 flex flex-col items-center justify-center w-full mt-24">
        <FadeIn delay={0.2} className="text-center w-full">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-hane text-white font-medium uppercase tracking-[0.18em] leading-tight">
            Cicha Przystań
          </h1>
          <p className="mt-4 text-white/90 font-ui font-medium uppercase tracking-[0.22em] text-sm md:text-base">
            Luksusowe Domki z Widokiem na Tatry
          </p>
          <div className="mt-8">
             <div className="w-16 h-px bg-accent-gold mx-auto" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
