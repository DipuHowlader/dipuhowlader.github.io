$(document).ready(function(){window.onload=(o=>{$("body").css({overflow:"auto"}),$("header").css({"z-index":999}),$(".loader-wraffer").css({"clip-path":"circle(0)",opacity:0,visibility:"hidden"})}),$(".owl-carousel").owlCarousel({items:1,loop:!0,navigation:!1,mouseDrag:!1,dots:!1,autoplay:!0,smartSpeed:90,animateOut:"fadeOut"}),$(".testimonial").owlCarousel({items:1,loop:!0,autoplay:!0,mousedrag:!1,dots:!0});const o=()=>{$(window).scrollTop()>80?$("header").addClass("custom"):$("header").removeClass("custom")};o(),$(window).scroll(()=>{o()}),AOS.init({duration:1500,once:!1}),$(".filtr-container").filterizr(),$(".filter-btn").map((o,e)=>{e.addEventListener("click",()=>{$(".filter-btn").map((o,e)=>{e.classList.remove("clicked")}),e.classList.add("clicked")})})});