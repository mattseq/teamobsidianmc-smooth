'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect, useRef, useState, useMemo } from 'react';

gsap.registerPlugin(ScrollTrigger);

const PARTICLE_COUNT = 70;

export default function ParticleField({ className }: { className?: string }) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  const particles = useMemo(
    () =>
      hydrated
        ? Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
            style: {
              position: 'absolute' as const,
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
              width: `${0.7 * Math.random()}%`,
              zIndex: 0,
            },
            id: `particle-${i}`,
          }))
        : [],
    [hydrated],
  );

  useEffect(() => {
    if (!hydrated) return;

    particles.forEach((particle, i) => {
      gsap.to(`#particle-${i}`, {
        y: Math.random() * 600 - 300,
        ease: 'sine.inOut',
        scrollTrigger: {
          trigger: '#team',
          start: 'top 100%',
          end: 'top -250%',
          scrub: 1.5,
        },
      });
    });

    return () => {
      ScrollTrigger.killAll();
    };
  }, [hydrated]);

  return (
    <div className={`${className}`}>
      {particles.map((particle, i) => (
        <div
          key={i}
          id={particle.id}
          className='particle aspect-square rounded-full bg-obsidian-purple'
          style={{
            ...particle.style,
            background: 'var(--obsidian-purple)',
            boxShadow: '0 0 24px 8px var(--accent-glow)',
          }}
        ></div>
      ))}
    </div>
  );
}
