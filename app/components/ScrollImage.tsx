"use client";

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useEffect, useRef, useState } from 'react'

gsap.registerPlugin(ScrollTrigger);

const images = Array.from({ length: 31 }, (_, i) => 
    `/animation/${(i + 1).toString().padStart(4, '0')}.png`
);

export default function ScrollImage( { className }: { className?: string } ) {
    const imgRef = useRef<HTMLImageElement>(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const image = imgRef.current;
        if (!image) return;


        const tween = gsap.to(image, {
            scrollTrigger: {
                trigger: image,
                start: "top top",
                end: "top -200%",
                scrub: true,
                onUpdate: (self) => {
                    setProgress(self.progress);
                },
            },
        });

        return () => {
            tween.scrollTrigger?.kill();
            tween.kill();
        }
    }, []);

    if (progress >= 1) {
        return null;
    }

    const index = Math.floor(progress * (images.length - 1));
    const src = images[index];

    return (
        <img
            ref={imgRef}
            src={src}
            alt="Scroll Animation"
            className={className}
        />
    );
}