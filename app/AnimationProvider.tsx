'use client';

import gsap from 'gsap';
import { ScrollTrigger, SplitText, DrawSVGPlugin, MorphSVGPlugin, Observer } from 'gsap/all';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ReactLenis, useLenis } from 'lenis/react';
import Animate from './Animate';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);
gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(MorphSVGPlugin);
gsap.registerPlugin(Observer);

export default function AnimationProvider({ className, children }: { className: string; children?: React.ReactNode }) {
  const lenisRef = useRef<any>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    // hydration check
    if (!hydrated) return;

    function update() {
      lenisRef.current?.lenis?.raf(performance.now());
    }

    gsap.ticker.add(update);

    Animate();

    return () => {
      ScrollTrigger.killAll();
      gsap.ticker.remove(update);
      Observer.getAll().forEach((observer) => observer.kill());
    };
  }, [hydrated]);

  return (
    <>
      <ReactLenis ref={lenisRef} options={{ smoothWheel: true, anchors: true }} className={className} />
      {children}
    </>
  );
}
