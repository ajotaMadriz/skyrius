var t1 = new TimelineMax({paused: true});

t1.to(".one",0.8,{
    y: 6,
    rotation: 45,
    ease: Expo.easeInOut
});

t1.to(".two", 0.8,{
    y: -6,
    rotation: -45,
    ease: Expo.easeInOut,
    delay: -0.8
});

t1.to(".menu", 1, {
    top: "0%",
    ease: Expo.easeInOut,
    delay: -1
});

t1.staggerFrom(".menu ul li", 1, {x: -200, opacity: 0, ease:Expo.easeOut}, 0.1);

t1.reverse();
$(document).on("click", ".toggle-btn", function(){
    t1.reversed(!t1.reversed());
});
t1.reverse();
$(document).on("click", ".a-menu", function(){
    t1.reversed(!t1.reversed());
});