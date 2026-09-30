/* =========================================
   BEAU SALON WEBSITE
   JAVASCRIPT
========================================= */


/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", function () {

    nav.classList.toggle("active");

});


/* Close menu after clicking navigation */

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        nav.classList.remove("active");

    });

});



/* =========================================
   BACK TO TOP BUTTON
========================================= */

const backTop = document.getElementById("backTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});


backTop.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});



/* =========================================
   FOOTER YEAR
========================================= */

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}



/* =========================================
   IMAGE FALLBACK
========================================= */

const images = document.querySelectorAll("img");

images.forEach(function (image) {

    image.addEventListener("error", function () {

        /*
         * If client image is not available,
         * use a neutral placeholder.
         */

        this.style.background = "#ddd5c9";

    });

});



/* =========================================
   SMOOTH NAVIGATION
========================================= */

document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {

    anchor.addEventListener("click", function (event) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    });

});



/* =========================================
   VIDEO AUTOPLAY FALLBACK
========================================= */

const heroVideo =
    document.querySelector(".hero-background video");

if (heroVideo) {

    heroVideo.play().catch(function () {

        console.log(
            "Hero video autoplay requires muted video."
        );

    });

}



/* =========================================
   SIMPLE REVEAL ANIMATION
========================================= */

const revealElements =
    document.querySelectorAll(
        ".service-card, .gallery-item, .feature-box, .experience-content, .contact-left, .address-card"
    );


const revealObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(function (element) {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity .7s ease, transform .7s ease";

    revealObserver.observe(element);

});