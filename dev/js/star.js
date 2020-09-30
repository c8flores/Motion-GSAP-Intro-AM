import {gsap} from "gsap";

var starSpeed = 1;


export function starAnimation(){
    var tl = gsap.timeline();
    tl.from("#star",{duration:starSpeed, rotation: 180});
    return tl;
}