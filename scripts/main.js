"use strict";

const toggleButton = document.querySelector(".menu-button");
const nav = document.getElementById("nav");

// Navigation toggle button
toggleButton.addEventListener("click", function () {
  nav.classList.toggle("active");
  this.innerText = this.innerText === "Menu" ? "Close Menu" : "Menu";
});

// Navigation closing on pressing the escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && nav.classList.contains("active")) {
    nav.classList.toggle("active");
    toggleButton.innerText = "Menu";
  }
});

// Navigation list hover effect
const handleHover = function (e) {
  if (e.target.classList.contains("nav-link")) {
    const link = e.target;
    link.style.transition = "0.6s";
    const siblings = link.closest("#nav").querySelectorAll(".nav-link");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
  }
};

// Passing "argument" into handler
nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

// Images appearing on hovering each of the navigation list options
const hiddenImages = {
  "about-link": document.querySelectorAll(".hidden-about-link"),
  "projects-link": document.querySelectorAll(".hidden-projects-link"),
  "outcomes-link": document.querySelectorAll(".hidden-outcomes-link"),
};

nav.addEventListener("mouseover", function (event) {
  const target = event.target;
  const targetClass = target.classList[1];
  const images = hiddenImages[targetClass];
  console.log(targetClass);

  if (images) {
    images.forEach((el, index) => {
      setTimeout(() => {
        el.classList.remove(`hidden-${targetClass}`);
      }, 150 * index);
    });
  }
});

nav.addEventListener("mouseout", function (event) {
  const target = event.target;
  const targetClass = target.classList[1];
  const images = hiddenImages[targetClass];

  if (images) {
    images.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add(`hidden-${targetClass}`);
      }, 150 * index);
    });
  }
});

// Click anywhere on the current section to go to next section and smooth scrolling
const sections = document.querySelectorAll(".content-section");
let currentSectionIndex = 0;

sections.forEach((section, index) => {
  section.addEventListener("click", function () {
    currentSectionIndex = index;
    scrollToNextSection();
  });
});

function scrollToNextSection() {
  if (currentSectionIndex >= sections.length - 1) return;
  currentSectionIndex++;
  sections[currentSectionIndex].scrollIntoView({ behavior: "smooth" });
}
