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

// Removed for a while!!!
// Clicking on the top half of the screen leading to previous section and clicking on the bottom half of the screen leading to next section with different cursors
// const sections = document.querySelectorAll(".content-section");
// let currentSectionIndex = 0;

// sections.forEach((section, index) => {
//   section.addEventListener("click", function (event) {
//     if (event.clientY <= window.innerHeight / 2) {
//       // Clicked on top half of the screen
//       scrollToPreviousSection();
//     } else {
//       // Clicked on bottom half of the screen
//       scrollToNextSection();
//     }
//   });

//   section.addEventListener("mousemove", function (event) {
//     if (event.clientY <= window.innerHeight / 2) {
//       // Cursor for top half of the screen
//       section.style.cursor = "n-resize";
//     } else {
//       // Cursor for bottom half of the screen
//       section.style.cursor = "s-resize";
//     }
//   });
// });

// function scrollToNextSection() {
//   if (currentSectionIndex >= sections.length - 1) return;
//   currentSectionIndex++;
//   sections[currentSectionIndex].scrollIntoView({ behavior: "smooth" });
// }

// function scrollToPreviousSection() {
//   if (currentSectionIndex <= 0) return;
//   currentSectionIndex--;
//   sections[currentSectionIndex].scrollIntoView({ behavior: "smooth" });
// }

// Intro animation
let intro = document.querySelector(".intro");
let logo = document.querySelector(".logo-header");
let logoSpan = document.querySelectorAll(".logo");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    logoSpan.forEach((span, index) => {
      setTimeout(() => {
        span.classList.add("active");
      }, (index + 1) * 400);
    });

    setTimeout(() => {
      logoSpan.forEach((span, index) => {
        setTimeout(() => {
          span.classList.remove("active");
          span.classList.add("fade");
        }, (index + 1) * 50);
      });
    }, 2000);

    setTimeout(() => {
      intro.style.top = "-100vh";
    }, 2300);
  });
});
