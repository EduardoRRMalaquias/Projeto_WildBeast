export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll(
    '[data-menu="smooth"] a[href^="#"]'
  );

  if (linksInternos.length) {
    function scrollToSection(event) {
      event.preventDefault();
      const href = this.getAttribute("href");
      const section = document.querySelector(href);

      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    linksInternos.forEach((link) => {
      link.addEventListener("click", scrollToSection);
    });
  }
}
