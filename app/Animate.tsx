"use client";

import gsap from 'gsap'
import { ScrollTrigger, SplitText, DrawSVGPlugin, MorphSVGPlugin, ScrambleTextPlugin, Observer } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Observer);

export default function Animate() {
    // Team Member Hover Animations
    document.querySelectorAll(".member-container").forEach((container) => {
        const name = container.getAttribute("data-member");
        const hide = container.querySelector(`[data-member-hide="${name}"]`);
        const avatar = container.querySelector('[data-member-avatar]');
        if (!hide) return;

        gsap.fromTo(
            avatar,
            { scale: 0, rotate: -100 },
            {
                scale: 1,
                rotate: 0,
                scrollTrigger: {
                    trigger: avatar,
                    start: "top 95%",
                    end: "top 70%",
                    scrub: true,
                },
                ease: "power2.out",
            }
        )

        Observer.create({
            target: container,
            onHover: () => {
                gsap.to(hide, { opacity: 1, duration: 0.3, ease: "power2.out" });
                gsap.to(container, { backgroundColor: "var(--color-obsidian-purple)", duration: 0.3, ease: "power2.out" });
                gsap.to(avatar, { scale: 1.05, duration: 0.3, ease: "power2.out" });
            },
            onHoverEnd: () => {
                gsap.to(hide, { opacity: 0, duration: 0.3, ease: "power2.inOut" });
                gsap.to(container, { backgroundColor: "transparent", duration: 0.3, ease: "power2.out" });
                gsap.to(avatar, { scale: 1, duration: 0.3, ease: "power2.out" });
            }
        });
    });

    
}