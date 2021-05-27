const menu = document.querySelector(".work");
const navOpen = document.querySelector(".work");
const navClose = document.querySelector(".close");

const navLeft = work.getBoundingClientRect().left;
navOpen.addEventListener("click", () => {
    if (navLeft < 0) {
        work.classList.add("show");
    }
});

navClose.addEventListener("click", () => {
    if (navLeft < 0) {
        work.classList.remove("show");
    }
});

// Fixed Nav
const nav = document.querySelector(".nav");
const navHeight = nav.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > navHeight) {
        nav.classList.add("fix-nav");
    } else {
        nav.classList.remove("fix-nav");
    }
});

// Scroll To
const links = [...document.querySelectorAll(".scroll-link")];
links.map(link => {
    link.addEventListener("click", e => {
        e.preventDefault();

        const id = e.target.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        const fixNav = nav.classList.contains("fix-nav");
        let position = element.offsetTop - navHeight;

        if (!fixNav) {
            position = position;
        }

        window.scrollTo({
            top: position,
            left: 0,
        });

        work.classList.remove("show");
    });
});

AOS.init();