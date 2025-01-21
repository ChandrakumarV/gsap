gsap.registerPlugin(ScrollTrigger);

// ------ header

// gsap.from('.header-content', {
//     duration: 1,
//     y: 100,
//     stagger: true,
// });

gsap.from('.header-content', {
    opacity: 1,
    duration: 1,
    y: -50,
});

gsap.to(
    '.header-content',

    {
        scrollTrigger: {
            trigger: '.header-content',
            toggleActions: 'reset pause reverse none',
            start: 'top 15%',
            end: 'bottom 10%',
            scrub: 2,
        },
        smoothOrigin: true,
        opacity: 0,
        duration: 1,
    },
);

gsap.from('.box', {
    opacity: 1,
    duration: 1,
    scale: 0.8,
});
