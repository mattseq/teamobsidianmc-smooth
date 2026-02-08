'use client';

import gsap from 'gsap';
import { ScrollTrigger, SplitText, DrawSVGPlugin, MorphSVGPlugin, ScrambleTextPlugin, Observer, Flip } from 'gsap/all';
import animateFooter from './components/Footer/Footer.anim';
import animateGallery from './components/Gallery/Gallery.anim';
import animateTeam from './components/Team/Team.anim';
import animateInhabitantsSection from './components/InhabitantsSection/InhabitantsSection.anim';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Observer);

export default function Animate() {
  // Main Fade In
  gsap.fromTo(
    '#main',
    { autoAlpha: 0 },
    {
      autoAlpha: 1,
      duration: 1,
      ease: 'power1.inOut',
    },
  );

  animateTeam();

  animateInhabitantsSection();

  animateGallery();

  animateFooter();
}
