// Mobile Navigation JavaScript
document.addEventListener("DOMContentLoaded", function () {
  // Add mobile menu toggle button to all pages
  const nav = document.querySelector("nav");
  const navList = document.querySelector("nav ul");

  // Create mobile menu toggle button
  const mobileToggle = document.createElement("button");
  mobileToggle.className = "mobile-menu-toggle";
  mobileToggle.innerHTML = "☰";
  mobileToggle.setAttribute("aria-label", "Toggle navigation menu");

  // Insert toggle button before nav list
  nav.insertBefore(mobileToggle, navList);

  // Toggle mobile menu
  mobileToggle.addEventListener("click", function () {
    navList.classList.toggle("active");

    // Change icon based on menu state
    if (navList.classList.contains("active")) {
      mobileToggle.innerHTML = "✕";
    } else {
      mobileToggle.innerHTML = "☰";
    }
  });

  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navList.classList.remove("active");
      mobileToggle.innerHTML = "☰";
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", function (event) {
    if (!nav.contains(event.target)) {
      navList.classList.remove("active");
      mobileToggle.innerHTML = "☰";
    }
  });

  // Handle window resize
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      navList.classList.remove("active");
      mobileToggle.innerHTML = "☰";
    }
  });
});

// Smooth scrolling for anchor links
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});

// Add loading states to forms
document.addEventListener("DOMContentLoaded", function () {
  const forms = document.querySelectorAll("form");

  forms.forEach((form) => {
    form.addEventListener("submit", function () {
      const submitBtn = this.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = "Submitting...";

        // Re-enable after 3 seconds (fallback)
        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = "Submit Registration";
        }, 3000);
      }
    });
  });
});

// Add touch support for mobile devices
document.addEventListener("DOMContentLoaded", function () {
  // Add touch feedback to buttons
  const buttons = document.querySelectorAll('button, .btn, a[role="button"]');

  buttons.forEach((button) => {
    button.addEventListener("touchstart", function () {
      this.style.transform = "scale(0.95)";
    });

    button.addEventListener("touchend", function () {
      this.style.transform = "scale(1)";
    });
  });

  // Prevent zoom on double tap for iOS
  let lastTouchEnd = 0;
  document.addEventListener(
    "touchend",
    function (event) {
      const now = new Date().getTime();
      if (now - lastTouchEnd <= 300) {
        event.preventDefault();
      }
      lastTouchEnd = now;
    },
    false
  );
});
