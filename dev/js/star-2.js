import {gsap} from "gsap";

var starSpeed = 1;


export function star2Animation(){
    var tl = gsap.timeline();
    tl.from("#star-2",{duration:starSpeed, rotation: 180});
    return tl;
}