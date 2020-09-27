import {gsap} from "gsap";

var redSpeed = 10;
var blueSpeed = 10;

// what do you want to animate? / how long should the animation be? / what is it you want to animate?
gsap.to(".red-box",{duration: redSpeed, x: 300, borderRadius: "50px"});
gsap.to(".red-box",{duration: redSpeed, x: 800, borderRadius: "200px", delay: redSpeed});


gsap.from(".blue-box",{duration: blueSpeed, x: 300, borderRadius: "100px"});
gsap.to(".blue-box",{duration: blueSpeed, x: 800, borderRadius: "100px", delay: blueSpeed});