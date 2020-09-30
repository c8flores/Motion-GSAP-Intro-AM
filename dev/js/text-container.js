import {gsap} from "gsap";

var starSpeed = 1;


export function textAnimation(){
    var tl = gsap.timeline();
    tl.from("#text-container",{duration:starSpeed, rotation: 180});
    return tl;
}