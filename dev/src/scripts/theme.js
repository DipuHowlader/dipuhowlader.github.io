import { gsap } from "gsap";


const currentTheme = localStorage.getItem("theme");

if (currentTheme=="dark"){
  document.body.classList.add("dark-theme");
  document.querySelector(".day-mode").classList.remove("hidden");
  gsap.set(".night-mode", {yPercent: 60,  opacity:0 });
}else{
  document.body.classList.remove("dark-theme");
  document.querySelector(".night-mode").classList.remove("hidden");
  gsap.set(".day-mode", {yPercent: 60,  opacity:0 });
}



document.querySelector(".night-mode").addEventListener("click", () => {
  gsap.to(".day-mode", {
    duration: 0.6,
    yPercent: 0,
    rotate: 45,
    opacity: 1,
    ease: "power.in",
  });
  gsap.to(".night-mode", {
    duration: 0.6,
    yPercent: 60,
    rotate: -111,
    opacity: 0,
    ease: "power.in",
  });
  document.body.classList.add("dark-theme");
  document.querySelector(".night-mode").style.pointerEvent = "None";
  document.querySelector(".night-mode").classList.add("hidden");
  document.querySelector(".day-mode").classList.remove("hidden");
  localStorage.setItem("theme", currentTheme);
});

document.querySelector(".day-mode").addEventListener("click", () => {
  gsap.to(".night-mode", {
    duration: 0.6,
    yPercent: 0,
    rotate: 111,
    opacity: 1,
    ease: "power.in",
  });
  gsap.to(".day-mode", {
    duration: 0.6,
    yPercent: 60,
    rotate: -145,
    opacity: 0,
    ease: "power.in",
  });
  document.body.classList.remove("dark-theme");
  document.querySelector(".day-mode").style.pointerEvent = "None";
  document.querySelector(".day-mode").classList.add("hidden");
  document.querySelector(".night-mode").classList.remove("hidden");
  
  localStorage.setItem("theme", currentTheme);
});

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme:dark)");

let theme = "dark";
if (prefersDarkScheme.matches) {
  document.body.classList.add("dark-theme");
} else {
  document.body.classList.remove("dark-theme");
  theme = "light";
}
localStorage.setItem("theme", theme);
