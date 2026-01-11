// Typing Effect
const text = [
    "Young Developer",
    "Just 12 Years Old",
    "Learning JavaScript",
    "Future Software Engineer"
];

let index = 0, charIndex = 0;
const typing = document.querySelector(".typing");

function type() {
    if (charIndex < text[index].length) {
        typing.textContent += text[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (charIndex > 0) {
        typing.textContent = text[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        index = (index + 1) % text.length;
        setTimeout(type, 500);
    }
}
type();

// Scroll Animation
const hiddenElements = document.querySelectorAll(".hidden");
window.addEventListener("scroll", () => {
    hiddenElements.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
});

// Mobile Menu
document.querySelector(".menu").addEventListener("click", () => {
    document.querySelector(".nav-links").classList.toggle("show");
});

function scrollToSection() {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
}
