// =========================
// MOBILE HAMBURGER MENU
// =========================

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Close mobile menu when a link is clicked

const menuLinks = document.querySelectorAll(".nav-links a");

menuLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


// =========================
// NAVBAR SCROLL EFFECT
// =========================

const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(7, 11, 22, 0.95)";

    } else {

        navbar.style.background = "rgba(7, 11, 22, 0.75)";

    }

});


// =========================
// FADE IN ANIMATION SETUP
// =========================

const sections = document.querySelectorAll(".section, .hero");


const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});


sections.forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});
