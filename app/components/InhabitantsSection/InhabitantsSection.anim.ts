import gsap from 'gsap'
import { ScrollTrigger, Observer, SplitText } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Observer);
gsap.registerPlugin(SplitText);

import animateInhabitantsCarousel from './InhabitantsCarousel/InhabitantsCarousel.anim';

export default function animateInhabitantsSection() {
    gsap.fromTo("#inhabitants-section", 
        { borderTopLeftRadius: "25%", borderTopRightRadius: "25%" },
        {
            borderTopLeftRadius: "0%", borderTopRightRadius: "0%",
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: "#inhabitants-section",
                start: "top 50%",
                end: "top top",
                scrub: true,
            }
        }
    );

    gsap.fromTo("#inhabitants-section", 
        { borderBottomLeftRadius: "0%", borderBottomRightRadius: "0%" },
        {
            borderBottomLeftRadius: "10%", borderBottomRightRadius: "10%",
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: "#inhabitants-section",
                start: "top -450%",
                end: "top -500%",
                scrub: true,
            }
        }
    );

    // Inhabitants Header Text Animation
    SplitText.create("#inhabitants-header", {
        type: "words, words",
        mask: "lines",
        autoSplit: true,
        onSplit(self) {
            return gsap.from(self.words, {
                scrollTrigger: {
                    trigger: "#inhabitants-header",
                    start: 'top 0%',
                    end: 'top -40%',
                    scrub: true,
                },
                y: 100, 
                autoAlpha: 0, 
                stagger: 0.25
            });
        }
    });

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
                        start: 'top -20%',
                        end: 'top -60%',
                        scrub: true,
                    },
                }
            );
        }
    });

    animateInhabitantsCarousel();
}