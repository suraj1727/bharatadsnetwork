/* ================================
   MOBILE MENU TOGGLE
================================ */

const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");

menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    sideMenu.classList.toggle("active");
    menuBtn.textContent = sideMenu.classList.contains("active") ? "✖" : "☰";
});

/* Close menu when clicking outside */
document.addEventListener("click", (e) => {
    if (!sideMenu.contains(e.target) && !menuBtn.contains(e.target)) {
        sideMenu.classList.remove("active");
        menuBtn.textContent = "☰";
    }
});

/* Close menu when clicking menu links */
document.querySelectorAll("#sideMenu a").forEach(link => {
    link.addEventListener("click", () => {
        sideMenu.classList.remove("active");
        menuBtn.textContent = "☰";
    });
});


/* ================================
   NAVBAR SHADOW ON SCROLL
================================ */

const navbar = document.querySelector(".navbar-header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
    } else {
        navbar.style.boxShadow = "none";
    }
});


/* ================================
   SMOOTH SCROLL FOR LINKS
================================ */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


/* ================================
   FADE-IN ANIMATION ON SCROLL
================================ */

const fadeElements = document.querySelectorAll(".fade-in");

const revealOnScroll = () => {
    fadeElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight * 0.85;

        if (elementTop < triggerPoint) {
            el.classList.add("active");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


/* ================================
   WHATSAPP FORM SUBMIT
================================ */

function sendToWhatsApp() {
    const name = document.getElementById("nameInput").value.trim();
    const email = document.getElementById("emailInput").value.trim();
    const phone = document.getElementById("phoneInput").value.trim();
    const message = document.getElementById("messageInput").value.trim();

    /* Basic Validation */
    if (!name || !phone || !message) {
        alert("Please fill all required fields.");
        return;
    }

    /* Phone validation (10 digits minimum) */
    const phonePattern = /^[0-9]{10,}$/;
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid phone number.");
        return;
    }

    const whatsappMessage =
        `Hello Bharat Ads Network,%0A%0A` +
        `Name: ${name}%0A` +
        `Email: ${email}%0A` +
        `Phone: ${phone}%0A` +
        `Message: ${message}`;

    const whatsappURL = `https://wa.me/917979824170?text=${whatsappMessage}`;

    window.open(whatsappURL, "_blank");
}
