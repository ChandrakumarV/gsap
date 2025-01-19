gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
    '.box',
    { duration: 1, x: 500, opacity: 0 },
    {
        scrollTrigger: {
            trigger: '.box',
            markers: true,
            toggleActions: 'reset pause reverse none',
            start: 'top 80%',
            end: 'top 40%',
            scrub: 2,
            pin: true,
        },
        smoothOrigin: true,
        opacity: 1,
        duration: 1,
        x: 1000,
    },
);
