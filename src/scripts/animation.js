import { gsap, Bounce, Elastic } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Texttimeline = gsap.timeline({});
const menutimeline = gsap.timeline({})

gsap.from("h5.section-title", {
  opacity: 0,
  duration: 2,
});


Texttimeline.from(".name", {
  yPercent: 200,
  ease: "power3.inOut",
  duration: 1,
});


Texttimeline.from(document.querySelectorAll(".pra span"), {
  y: 10,
  ease: "power3.inOut",
  opacity: 0,
  duration: 1,
  stagger:0.4
});

gsap.set(document.querySelectorAll(".social-icons a"), { x: 500, opacity: 0 });
Texttimeline.to(document.querySelectorAll(".social-icons a"), {
  x: -50,
  ease: "power3.inOut",
  duration: 0.2,
  stagger: 0.2,
  opacity: 1,
  ease: Elastic,
});

gsap
  .timeline({
    scrollTrigger: {
      trigger: document.querySelector("body"),
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  })
  .to(
    document.querySelector("#about"),
    {
      ease: "none",
      yPercent: -120,
    },
    "start"
  );

gsap.set(".menupage", {yPercent: -200 });
document.querySelector(".menu").addEventListener("click", () => {
  gsap.set(".menupage ul li a", {opacity:0, yPercent: 0 });
  gsap.set(".menupage .info .box", {opacity:0, yPercent: 0 });
  gsap.to(".menupage", { duration: 0.2, yPercent: 0, ease: Bounce });
  menutimeline.to('.menupage ul li a', { duration: 0.5, opacity:1, yPercent: -20, delay:0.7, stagger: 0.3})
  menutimeline.to('.menupage .info .box', { duration: 0.5, opacity:1, yPercent: -20, stagger: 0.3})
});

document.querySelector(".cross").addEventListener("click", () => {
  gsap.to(".menupage", { duration: 0.2, yPercent: -200, ease: Bounce });
});


