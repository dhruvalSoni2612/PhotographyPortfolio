// nav-bar toggle
function closeNavbar() {
  var navbarCollapse = document.querySelector(".navbar-collapse");
  if (navbarCollapse.classList.contains("show")) {
    navbarCollapse.classList.remove("show");
  } else {
    navbarCollapse.classList.add("show");
  }
}

// navbar background color while scroll
let prevScrollPos = window.scrollY;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const currentScrollPos = window.scrollY;
  if (prevScrollPos > currentScrollPos) {
    navbar.style.backgroundColor = "#ffffff";
  } else {
    navbar.style.backgroundColor = "#ffffff85";
  }
  prevScrollPos = currentScrollPos;
});

// for full slider
const slides = document.querySelectorAll(".slideimg");
const prevButton = document.querySelector(".prevBtn");
const nextButton = document.querySelector(".nextBtn");

let slideIndex = 0;

prevButton.addEventListener("click", () => {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  updateSlider();
});

nextButton.addEventListener("click", () => {
  slideIndex = (slideIndex + 1) % slides.length;
  updateSlider();
});

function updateSlider() {
  const slideWidth = slides[0].clientWidth;
  const offset = -slideIndex * slideWidth;
  slides.forEach((slide) => {
    slide.style.transition = "transform 0.5s ease";
    slide.style.transform = `translateX(${offset}px)`;
  });
}

// for scroll style
const scrollRevealOption = {
  distance: "150px",
  origin: "bottom",
  duration: 1000,
};
const scrollRevealOption2 = {
  distance: "150px",
  origin: "left",
  duration: 1000,
};
const scrollRevealOption3 = {
  distance: "150px",
  origin: "right",
  duration: 1000,
};
ScrollReveal().reveal(".carousel-text h1", {
  ...scrollRevealOption,
  delay: 100,
});

ScrollReveal().reveal(".carousel-text a", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".testimonial-content", {
  ...scrollRevealOption2,
  delay: 200,
});

ScrollReveal().reveal(".testimonial-images", {
  ...scrollRevealOption3,
  delay: 200,
});

ScrollReveal().reveal(".section-header", {
  ...scrollRevealOption,
  delay: 100,
});
ScrollReveal().reveal(".section-description", {
  ...scrollRevealOption,
  delay: 200,
});
ScrollReveal().reveal(".story-section a", {
  ...scrollRevealOption,
  delay: 300,
});
ScrollReveal().reveal(".service-header", {
  ...scrollRevealOption,
  delay: 100,
});
ScrollReveal().reveal(".service-description", {
  ...scrollRevealOption,
  delay: 300,
});
ScrollReveal().reveal(".service-flex", {
  ...scrollRevealOption,
  delay: 500,
});
