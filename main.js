import { gsap } from "gsap";

ScrollTrigger.create({
  trigger: ".banner-section",
  start: "top center",
  onEnter: () => gsap.to(".banner-section", { opacity: 1, x: -4, duration: 6 }),
});

gsap.from(".banner-h1", { duration: 2, fadein: true, y: 1250, scrollTrigger:".banner-h1"});

gsap.registerPlugin(ScrollTrigger);