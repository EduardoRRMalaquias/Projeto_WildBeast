export default class ScrolAnime {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.mediaScroll = window.innerWidth * 0.6;

    this.animaScrol = this.animaScrol.bind(this);
  }

  animaScrol() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionVisivel = sectionTop - this.mediaScroll < 0;
      if (sectionVisivel) {
        section.classList.add("ativo");
      } else if (section.classList.contains("ativo")) {
        section.classList.remove("ativo");
      }
    });
  }

  init() {
    this.animaScrol();
    window.addEventListener("scroll", this.animaScrol);
  }
}
