//import * as Demo from './demo.js';
import {gsap} from "gsap";
import {starAnimation} from './star.js';
import {star2Animation} from './star-2.js';
import {star3Animation} from './star-3.js';
import {star4Animation} from './star-4.js';
import {textAnimation} from './text-container.js';

console.log(starAnimation);


var mainTL = gsap.timeline();


mainTL.add(starAnimation)
.add(star2Animation)
.add(star3Animation)
.add(star4Animation)
.add(textAnimation);