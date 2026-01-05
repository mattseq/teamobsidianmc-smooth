"use client";

import gsap from 'gsap'
import { ScrollTrigger, SplitText, DrawSVGPlugin, MorphSVGPlugin, ScrambleTextPlugin, Observer } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Observer);

export default function Animate() {

    // Logo Animation
    gsap.fromTo("#logo", 
        { scale: 0.5 },
        {
            scale: 1,
            ease: "back.out",
            scrollTrigger: {
                trigger: "#logo",
                start: "top 90%",
                end: "top 50%",
                scrub: true,
            }
        }
    );
    
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
                gsap.to(container, 
                    { 
                        backgroundColor: "var(--color-obsidian-glass)",
                        border: "2px solid var(--color-obsidian-glass-outline)",
                        duration: 0.3, 
                        ease: "power2.out" 
                    }
                );
                container.classList.add("backdrop-blur-sm");
                gsap.to(avatar, { scale: 1.05, duration: 0.3, ease: "power2.out" });
            },
            onHoverEnd: () => {
                gsap.to(hide, { opacity: 0, duration: 0.3, ease: "power2.inOut" });
                gsap.to(container, 
                    {
                        backgroundColor: "rgba(0,0,0,0)",
                        border: "rgba(0,0,0,0)",
                        duration: 0.3, 
                        ease: "power2.out" 
                    }
                );
                container.classList.remove("backdrop-blur-sm");
                gsap.to(avatar, { scale: 1, duration: 0.3, ease: "power2.out" });
            }
        });
    });

    // Mods Section Curved Cover Animation
    gsap.to("#curved-cover", {
        borderRadius: "0%",
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: "#curved-cover",
            start: "top 50%",
            end: "top top",
            scrub: true,
        }
    });

    gsap.fromTo("#inhabitants-img",
        { scale: 0 },
        {
            scale: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: "#inhabitants-img",
                start: "top 80%",
                end: "top 50%",
                scrub: true,
            }
        }
    )
}