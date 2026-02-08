import gsap from 'gsap';
import { ScrollTrigger, Observer } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Observer);

export default function animateGallery() {
  // Gallery Section
  gsap.fromTo(
    '#gallery-header',
    { y: 100, autoAlpha: 0 },
    {
      y: 0,
      autoAlpha: 1,
      ease: 'power2.out',
      duration: 1,
      scrollTrigger: {
        trigger: '#gallery-header',
        start: 'top 100%',
        once: true,
      },
    },
  );

  document.querySelectorAll('.gallery-img').forEach((img, i) => {
    gsap.fromTo(
      img,
      { y: 100, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        ease: 'power2.out',
        duration: 1,
        scrollTrigger: {
          trigger: img,
          start: 'top 100%',
          end: 'top 70%',
          scrub: 0.5,
        },
      },
    );
    Observer.create({
      target: img,
      onHover: (e) => {
        gsap.to(e.target, {
          scale: 1.05,
          duration: 0.3,
          ease: 'power2.out',
        });
      },
      onHoverEnd: (e) => {
        gsap.to(e.target, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
        });
      },
    });
  });
}
