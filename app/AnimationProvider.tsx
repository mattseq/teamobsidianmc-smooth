"use client";

import gsap from 'gsap'
import { ScrollTrigger, SplitText, DrawSVGPlugin, MorphSVGPlugin, Observer } from 'gsap/all'
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ReactLenis, useLenis } from 'lenis/react'
import Animate from './Animate';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);
gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(MorphSVGPlugin);
gsap.registerPlugin(Observer);

export default function AnimationProvider({ className }: { className: string }) {
    const lenisRef = useRef(null as any);
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        setHydrated(true);
    }, []);

    useEffect(() => {
        // hydration check
        if (!hydrated) return;

        console.log(hydrated)
        function update() {
            lenisRef.current?.lenis?.raf(performance.now());
        }

        gsap.ticker.add(update)

        // Animate();

        Animate();

        return () => {
            ScrollTrigger.killAll();
            gsap.ticker.remove(update)
            Observer.getAll().forEach(observer => observer.kill());
        }
    }, [hydrated])

    // hydration check to prevent SSR issues and gsap from running before dom is ready
    if (!hydrated) {
        return null;
    }

    return (
        <ReactLenis ref={lenisRef} options={{ smoothWheel: true }} className={className} />
    )
}