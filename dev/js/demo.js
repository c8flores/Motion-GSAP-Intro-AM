import {gsap} from "gsap";

var starSpeed = 1;
var textSpeed = .75;

// animation for star
gsap.from("#star",{duration:starSpeed, rotation: 180});
gsap.from("#star-2",{duration:starSpeed, y:-50, rotation: 180});
gsap.from("#star-3",{duration:starSpeed, x:50, rotation: -180});
gsap.from("#star-4",{duration:starSpeed, rotation: -360});

//animation for text
gsap.from("#text-container",{duration:textSpeed, x: 300, y: -100});
