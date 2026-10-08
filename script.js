/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("show");

    const icon = menuBtn.querySelector("i");

    if (navMenu.classList.contains("show")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


/* Close menu after clicking */

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* ================= TYPING ANIMATION ================= */

const typingText = document.getElementById("typing");

const words = [
    "Web Developer",
    "UI Designer",
    "Frontend Developer",
    "Creative Coder"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 60 : 100
    );

}

typeEffect();


/* ================= 3D IMAGE MOUSE EFFECT ================= */

const image3D = document.querySelector(".image-3d");

document.addEventListener("mousemove", (event) => {

    const x =
        (window.innerWidth / 2 - event.clientX) / 30;

    const y =
        (window.innerHeight / 2 - event.clientY) / 30;

    image3D.style.transform = `
        translateY(-10px)
        rotateY(${x}deg)
        rotateX(${y}deg)
    `;

});


/* Reset image */

document.addEventListener("mouseleave", () => {

    image3D.style.transform =
        "translateY(0) rotateY(0) rotateX(0)";

});


/* ================= SKILL ANIMATION ================= */

const skills =
    document.querySelectorAll(".skill-progress");


const skillObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const width =
                        entry.target.dataset.width;

                    entry.target.style.width = width;

                }

            });

        },
        {
            threshold: .5
        }
    );


skills.forEach(skill => {

    skillObserver.observe(skill);

});


/* ================= SCROLL REVEAL ================= */

const cards =
    document.querySelectorAll(
        ".project-card, .about-container, .contact-container"
    );


cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(50px)";

    card.style.transition =
        "opacity .8s ease, transform .8s ease";

});


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: .15
        }
    );


cards.forEach(card => {

    revealObserver.observe(card);

});


/* ================= CONTACT FORM ================= */

const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    alert(
        "✨ Thank you! Your message has been received."
    );

    contactForm.reset();

});


/* ================= TOP BUTTON ================= */

const topBtn =
    document.getElementById("topBtn");

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ================= NAV ACTIVE LINK ================= */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".navbar nav a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});