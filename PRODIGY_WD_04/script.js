// Scroll to top button
const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = () => {
  scrollBtn.style.display = window.scrollY > 400 ? "flex" : "none";
};

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
// Typing effect
const textArray = ["Full-Stack Developer", "UI/UX Designer", "JavaScript Enthusiast", "Tech Learner"];
let textIndex = 0;
let charIndex = 0;
let typingSpeed = 100;
let deletingSpeed = 60;
let delayBetweenWords = 2000;

function typeEffect() {
  const typedText = document.getElementById("typed-text");

  if (charIndex < textArray[textIndex].length) {
    typedText.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, typingSpeed);
  } else {
    setTimeout(() => eraseEffect(), delayBetweenWords);
  }
}

function eraseEffect() {
  const typedText = document.getElementById("typed-text");

  if (charIndex > 0) {
    typedText.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, deletingSpeed);
  } else {
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(typeEffect, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("typed-text")) {
    typeEffect();
  }
});


