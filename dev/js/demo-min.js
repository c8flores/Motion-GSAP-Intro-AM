import{gsap}from"gsap";var starSpeed=1,textSpeed=.75,demoTimeline=gsap.timeline();demoTimeline.from("#star",{duration:starSpeed,rotation:180}).from("#star-2",{duration:starSpeed,y:-50,rotation:180}).from("#star-3",{duration:starSpeed,x:50,rotation:-180}).from("#star-4",{duration:starSpeed,rotation:-360}).from("#text-container",{duration:textSpeed,x:300,y:-100});