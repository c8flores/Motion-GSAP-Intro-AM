import {gsap} from "gsap";

var starSpeed = 1;


export function star3Animation(){
    var tl = gsap.timeline();
    tl.from("#star-3",{duration:starSpeed, rotation: 180});
    return tl;
}