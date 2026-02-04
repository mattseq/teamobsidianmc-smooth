"use client";

import assert from 'assert';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useEffect, useRef, useState } from 'react'

gsap.registerPlugin(ScrollTrigger);

const frameCount = 31;

const images = Array.from({ length: frameCount }, (_, i) => 
    `/portal_animation/${(i + 1).toString().padStart(4, '0')}.png`
);

export default function PortalIntro( { className }: { className?: string } ) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        let playhead = { frame: 0 };
        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');
        if (!canvas || !context) return;

        let currentFrame = -1;
        let imgs: HTMLImageElement[] = [];

        // function to render the current frame based on playhead.frame
        function render() {
            const frame = Math.round(playhead.frame);
            if (frame !== currentFrame && imgs[frame]?.complete) {
                assert(canvas && context);
                context.clearRect(0, 0, canvas.width, canvas.height);
                context.drawImage(imgs[frame], 0, 0);
                currentFrame = frame;
            }
        }

        // preload images
        imgs = images.map((src, i) => {
            const img = new Image();
            img.src = src;
            i || (img.onload = render);
            console.log(`Preloading image: ${i}`);
            return img;
        });
        
        // animate playhead.frame through frames on scroll
        gsap.to(playhead, {
            frame: frameCount - 1,
            ease: "none",
            scrollTrigger: {
                trigger: "#intro",
                start: "top top",
                end: "top -200%",
                scrub: true,
                pin: true,
                pinnedContainer: "#intro",
                onUpdate: render,
                markers: true,
            },
        })
    }, []);
    return (
        <canvas 
            className={className}
            id="portal-canvas"
            ref={canvasRef}
            width={1920}
            height={950}
        />
    );
}