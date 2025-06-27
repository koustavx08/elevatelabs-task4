// Mobile menu toggle functionality
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
  const nav = document.querySelector(".nav")

  mobileMenuToggle.addEventListener("click", function () {
    nav.classList.toggle("active")

    // Animate hamburger menu
    this.classList.toggle("active")

    // Add animation to hamburger lines
    const spans = this.querySelectorAll("span")
    if (this.classList.contains("active")) {
      spans[0].style.transform = "rotate(45deg) translate(5px, 5px)"
      spans[1].style.opacity = "0"
      spans[2].style.transform = "rotate(-45deg) translate(7px, -6px)"
    } else {
      spans[0].style.transform = "none"
      spans[1].style.opacity = "1"
      spans[2].style.transform = "none"
    }
  })

  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll(".nav-list a")
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("active")
      mobileMenuToggle.classList.remove("active")

      // Reset hamburger animation
      const spans = mobileMenuToggle.querySelectorAll("span")
      spans[0].style.transform = "none"
      spans[1].style.opacity = "1"
      spans[2].style.transform = "none"
    })
  })

  // Close mobile menu when clicking outside
  document.addEventListener("click", (event) => {
    if (!nav.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
      nav.classList.remove("active")
      mobileMenuToggle.classList.remove("active")

      // Reset hamburger animation
      const spans = mobileMenuToggle.querySelectorAll("span")
      spans[0].style.transform = "none"
      spans[1].style.opacity = "1"
      spans[2].style.transform = "none"
    }
  })
})
