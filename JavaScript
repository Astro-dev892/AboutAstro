// =========================
// BUTTON GLOW EFFECT
// =========================

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

  button.addEventListener("mouseenter", () => {

    button.style.boxShadow =
      "0 0 20px rgba(88,166,255,0.5)";

  });

  button.addEventListener("mouseleave", () => {

    button.style.boxShadow = "none";

  });

});

// =========================
// CARD HOVER EFFECT
// =========================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

  card.addEventListener("mouseenter", () => {

    card.style.transform = "translateY(-4px)";

    card.style.transition = "0.2s";

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform = "translateY(0px)";

  });

});

// =========================
// SMOOTH SCROLL NAVIGATION
// =========================

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

  anchor.addEventListener("click", function(e) {

    e.preventDefault();

    document.querySelector(
      this.getAttribute("href")
    ).scrollIntoView({

      behavior: "smooth"

    });

  });

});

// =========================
// PAGE FADE IN
// =========================

document.body.style.opacity = 0;

window.addEventListener("load", () => {

  document.body.style.transition =
    "opacity 0.6s";

  document.body.style.opacity = 1;

});