"use client";

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useEffect, useRef, useState, useMemo } from 'react'

gsap.registerPlugin(ScrollTrigger);

const images = [
    '/galactic_alphabet/A.webp',
    '/galactic_alphabet/B.webp',
    '/galactic_alphabet/C.webp',
    '/galactic_alphabet/D.webp',
    '/galactic_alphabet/E.webp',
    '/galactic_alphabet/F.webp',
    '/galactic_alphabet/G.webp',
    '/galactic_alphabet/H.webp',
    '/galactic_alphabet/I.webp',
];

const PARTICLE_COUNT = 100;

export default function ParticleField( { className }: { className?: string } ) {
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        setHydrated(true);
    }, []);

    const particles = useMemo(() => 
        hydrated ? (
            Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
                src: images[Math.floor(Math.random() * images.length)],
                // style: `top-[${Math.random() * 100}%] left-[${Math.random() * 100}%] w-${20 + Math.random() * 30}px opacity-${0.5 + Math.random() * 0.5} z-1`
                style: {
                    position: 'absolute' as const,
                    top: `${Math.random() * 80 + 10}%`,
                    left: `${Math.random() * 80 + 10}%`,
                    width: `${1*Math.random() + 1}%`,
                    zIndex: 1,
                },
                id: `particle-${i}`
            }))
        ) : [], [hydrated]
    );

    useEffect(() => {
        if (!hydrated) return;

        particles.forEach((particle, i) => {
            gsap.to(
                `#particle-${i}`,
                {
                    y: Math.random() * 200,
                    rotate: Math.random() * 360,
                    scrollTrigger: {
                        trigger: "#team",
                        start: "top 100%",
                        end: "top -200%",
                        scrub: true,
                    }
                }
            );
        });

        return () => {
            ScrollTrigger.killAll();
        }
    }, [hydrated]);

    return (
        <div className={`${className}`}>
            {particles.map((particle, i) => (
                <img
                    key={i}
                    src={particle.src}
                    alt="Galactic Alphabet Particle"
                    style={particle.style}
                    className='particle'
                    id={particle.id}
                />
            ))}
        </div>
    );
}