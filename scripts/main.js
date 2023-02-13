"use strict";

const toggleButton = document.querySelector(".menu-button");
const nav = document.getElementById("nav");

// Navigation toggle button
toggleButton.addEventListener("click", function () {
  nav.classList.toggle("active");

  if (toggleNav.innerText === "Menu") {
    toggleNav.innerText = "Close Menu";
  } else toggleNav.innerText = "Menu";
});

// Navigation closing on pressing the escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !nav.classList.contains("hidden")) {
    nav.classList.toggle("hidden");
    toggleNav.innerText = "Menu";
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
const hiddenImagesAbout = document.querySelectorAll(".hidden-about");
const hiddenImagesProjects = document.querySelectorAll(".hidden-projects");
const hiddenImagesOutcomes = document.querySelectorAll(".hidden-outcomes");

nav.addEventListener("mouseover", function (event) {
  if (event.target.matches(".about-link")) {
    hiddenImagesAbout.forEach((el, index) => {
      setTimeout(() => {
        el.classList.remove("hidden-about");
      }, 150 * index);
    });
  }
});

nav.addEventListener("mouseout", function (event) {
  if (event.target.matches(".about-link")) {
    hiddenImagesAbout.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("hidden-about");
      }, 150 * index);
    });
  }
});

nav.addEventListener("mouseover", function (event) {
  if (event.target.matches(".projects-link")) {
    hiddenImagesProjects.forEach((el, index) => {
      setTimeout(() => {
        el.classList.remove("hidden-projects");
      }, 150 * index);
    });
  }
});

nav.addEventListener("mouseout", function (event) {
  if (event.target.matches(".projects-link")) {
    hiddenImagesProjects.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("hidden-projects");
      }, 150 * index);
    });
  }
});

nav.addEventListener("mouseover", function (event) {
  if (event.target.matches(".outcomes-link")) {
    hiddenImagesOutcomes.forEach((el, index) => {
      setTimeout(() => {
        el.classList.remove("hidden-outcomes");
      }, 150 * index);
    });
  }
});

nav.addEventListener("mouseout", function (event) {
  if (event.target.matches(".outcomes-link")) {
    hiddenImagesOutcomes.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("hidden-outcomes");
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
