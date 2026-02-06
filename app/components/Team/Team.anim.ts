import gsap from 'gsap'
import { ScrollTrigger, Observer } from 'gsap/all'
import animateTeamCards from './TeamCards/TeamCards.anim';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Observer);

export default function animateTeam() {
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

    animateTeamCards();
}