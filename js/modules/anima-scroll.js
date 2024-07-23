export default function initAnimaScrol() {
  const sections = document.querySelectorAll('[data-anime="scrol"]');
  if (sections.length) {
    const mediaScroll = window.innerWidth * 0.6;

    function animaScrol() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionVisivel = sectionTop - mediaScroll < 0;
        if (sectionVisivel) {
          section.classList.add("ativo");
        } else if (section.classList.contains("ativo")) {
          section.classList.remove("ativo");
        }
      });
    }

    window.addEventListener("scroll", animaScrol);
  }
}
