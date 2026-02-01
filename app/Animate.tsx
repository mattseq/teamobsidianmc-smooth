"use client";

import gsap from 'gsap'
import { ScrollTrigger, SplitText, DrawSVGPlugin, MorphSVGPlugin, ScrambleTextPlugin, Observer } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Observer);

export default function Animate() {
    // Main Fade In
    gsap.fromTo("#main",
        { autoAlpha: 0 },
        {
            autoAlpha: 1,
            duration: 1,
            ease: "power1.inOut",
        }
    )

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


    // Inhabitants Carousel Animation (Pins Inhabitants Section)
    const carousel = document.getElementById("inhabitants-carousel");
    if (carousel) {
        const cards = Array.from(carousel.getElementsByClassName("mob-card"));

        const card_width = cards[0].getBoundingClientRect().width

        gsap.fromTo(cards, 
            { xPercent: card_width / 2 },
            {
                xPercent: -100 * (cards.length - 1 ) - (card_width / 2),
                ease: "none",
                scrollTrigger: {
                    trigger: "#inhabitants-section",
                    start: "top 3%",
                    end: "bottom -350%",
                    scrub: 1.5,
                    pin: true,
                    anticipatePin: 1,
                }
            }
        );
    }
    
    // Inhabitants Description Text Animation
    SplitText.create("#inhabitants-description", {
        type: "lines",
        autoSplit: true,
        onSplit(self) {
            return gsap.from(self.lines,
                {
                    autoAlpha: 0,
                    y: 50,
                    stagger: 0.25,
                    scrollTrigger: {
                        trigger: "#inhabitants-description",
                        start: 'top 80%',
                        end: 'top 0%',
                        scrub: true,
                    },
                }
            );
        }
    });

    // Inhabitants Header Text Animation
    SplitText.create("#inhabitants-header", {
        type: "words, words",
        mask: "lines",
        autoSplit: true,
        onSplit(self) {
            return gsap.from(self.words, {
                scrollTrigger: {
                    trigger: "#inhabitants-header",
                    start: 'top 80%',
                    end: 'top 40%',
                    scrub: true,
                },
                y: 100, 
                autoAlpha: 0, 
                stagger: 0.25
            });
        }
    });

    // Gallery Section
    gsap.fromTo("#gallery-header",
        { y: 100, autoAlpha: 0 },
        {
            y: 0, autoAlpha: 1,
            ease: "power2.out",
            duration: 1,
            scrollTrigger: {
                trigger: "#gallery-header",
                start: "top 100%",
                once: true
            }
        }
    )

    document.querySelectorAll(".gallery-img").forEach((img, i) => {
        gsap.fromTo(img,
            { y: 100, autoAlpha: 0 },
            {
                y: 0, autoAlpha: 1,
                ease: "power2.out",
                duration: 1,
                scrollTrigger: {
                    trigger: img,
                    start: "top 100%",
                    end: "top 70%",
                    scrub: 0.5,
                }
            }
        );
        Observer.create({
            target: img,
            onHover: (e) => {
                gsap.to(e.target, { scale: 1.05, duration: 0.3, ease: "power2.out" });
            },
            onHoverEnd: (e) => {
                gsap.to(e.target, { scale: 1, duration: 0.3, ease: "power2.out" });
            }
        });
    });

    // Footer
    document.querySelectorAll(".icon").forEach((icon) => {
        Observer.create({
            target: icon,
            onHover: (e) => {
                gsap.to(e.target, { scale: 1.2, duration: 0.3, ease: "power2.out" });
            },
            onHoverEnd: (e) => {
                gsap.to(e.target, { scale: 1, duration: 0.3, ease: "power2.out" });
            }
        });
    });

    gsap.fromTo("#footer", 
        { autoAlpha: 0 },
        {
            autoAlpha: 1,
            ease: "power2.out",
            duration: 1,
            scrollTrigger: {
                trigger: "#footer",
                start: "top bottom",
                once: true,
            }
        }
    )
}