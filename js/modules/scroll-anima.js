export default class ScrolAnime {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.mediaScroll = window.innerWidth * 0.6;

    this.checkDistances = this.checkDistances.bind(this);
  }

  // pega a distancia de cada item em rela~ção ao topo do site
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.mediaScroll),
      };
    });
  }

  // verifica a distanca em cada objeto em relação a cada scroll do site
  checkDistances() {
    this.distance.forEach((section) => {
      if (window.scrollY > section.offset) {
        section.element.classList.add("ativo");
      } else if (section.element.classList.contains("ativo")) {
        section.element.classList.remove("ativo");
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistances();
      window.addEventListener("scroll", this.checkDistances);
    }
    return this;
  }

  // remove os eventos o que faz parar a funcionalidade
  stop() {
    window.removeEventListener("scroll", this.checkDistances);
  }
}
