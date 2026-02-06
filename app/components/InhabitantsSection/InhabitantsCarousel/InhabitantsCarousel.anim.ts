import gsap from 'gsap'
import { ScrollTrigger, Observer } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Observer);

export default function animateInhabitantsCarousel() {
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
                    start: "top 0%",
                    end: "bottom -350%",
                    scrub: 1.5,
                    pin: true,
                }
            }
        );
    }
}