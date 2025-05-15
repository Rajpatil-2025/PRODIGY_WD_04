document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");
  const profilePic = document.querySelector(".profile-pic");
  const closeBtn = document.querySelector(".close-btn");
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  // Image modal
  if (profilePic && modal && modalImg && closeBtn) {
    profilePic.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = profilePic.src;
    });

    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  }

  // Theme toggler
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      body.classList.toggle("dark");
      localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
    });
  }

  // Typing Effect
  const typedText = document.getElementById("typed-text");
  const phrases = ["Hello, I'm a Full-Stack Developer", "Creative. Efficient. Futuristic.","Passionate about coding.","Lifelong Learner."];
  let phraseIndex = 0;
  let letterIndex = 0;

  function typeEffect() {
    if (letterIndex <= phrases[phraseIndex].length) {
      typedText.textContent = phrases[phraseIndex].substring(0, letterIndex++);
      setTimeout(typeEffect, 80);
    } else {
      setTimeout(() => {
        letterIndex = 0;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeEffect();
      }, 2000);
    }
  }
  typeEffect();

  // Scroll Reveal animations
  ScrollReveal().reveal(".hero", {
    origin: "top",
    distance: "50px",
    duration: 1000,
    delay: 100,
    reset: true,
  });

  ScrollReveal().reveal(".project-card", {
    origin: "bottom",
    distance: "20px",
    duration: 800,
    delay: 200,
    interval: 200,
    reset: true,
  });

  ScrollReveal().reveal(".contact", {
    origin: "left",
    distance: "30px",
    duration: 800,
    delay: 300,
    reset: true,
  });
});
