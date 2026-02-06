import gsap from 'gsap'
import { ScrollTrigger, Observer } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Observer);

export default function animateFooter() {
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