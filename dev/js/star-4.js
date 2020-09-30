import {gsap} from "gsap";

var starSpeed = 1;


export function star4Animation(){
    var tl = gsap.timeline();
    tl.from("#star-4",{duration:starSpeed, rotation: 180});
    return tl;
}