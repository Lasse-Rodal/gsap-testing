gsap.registerPlugin(ScrollTrigger);

const banner = document.querySelector('.banner');

gsap.to(banner, {
    duration: 1,
    opacity: 1,
    y: -50,
    ease: "power2.out"
});

gsap.from('.section', {
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.section',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    }
});

gsap.from('.section-two', {
    scale: 0.5,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.section-two',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    }
});

gsap.from('.section-three', {
    rotation: 360,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.section-three',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    }
});

gsap.from('.section-four', {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.section-four',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    }
});

const box = document.getElementById('box');
const button = document.getElementById('bounceButton');

button.addEventListener('click', () => {
  gsap.to(box, { duration: 1, y: -100, ease: "bounce.out" });
  gsap.to(box, { duration: 1, y: 0, delay: 1, ease: "bounce.out" });
});
