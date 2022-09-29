import "./styles/bootstrap.min.css";
import "./styles/style.scss";
import "./scripts/scroll";
import Cursor from "./scripts/mouse";
import "./scripts/animation";
import "./scripts/theme"

document.addEventListener("DOMContentLoaded", () => {
  const cursor = new Cursor(document.querySelector(".cursor"));
  [...document.querySelectorAll("a")].forEach((el) => {
    el.addEventListener("mouseenter", () => cursor.emit("enter"));
    el.addEventListener("mouseleave", () => cursor.emit("leave"));
  });
  
  // mouse effects on all links
  [...document.querySelectorAll("a")].forEach((link) => {
    link.addEventListener("mouseenter", () => cursor.enter());
    link.addEventListener("mouseleave", () => cursor.leave());
  });

  setTimeout(() => {
    document.querySelector(".loader").classList.remove("loading");
  }, 3000);

});

