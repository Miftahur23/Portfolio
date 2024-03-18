document.addEventListener("DOMContentLoaded", function() {
    var tl = gsap.timeline();
    tl.from("nav img, nav #content, nav #login",{
        y: -100,
        delay: 1,
        duration: 0.5,
        opacity: 0,
        stagger: 0.5
    });
    tl.from("#main h1",{
        y: 300,
        duration: 0.4,
        opacity: 0,
        stagger: 0.2
    });
    tl.from("#main #left-img",{
        rotate: 360,
        opacity: 0,
        duration: 1,
        scale: 0,
    });
    tl.from("#main #right-img",{
        rotate: -360,
        opacity: 0,
        duration: 1,
        scale: 0,
    });
    tl.to("#main span",{
        scale: 1.1,
        duration: 1,
        repeat: -1,
        yoyo: true,
    });
    
});