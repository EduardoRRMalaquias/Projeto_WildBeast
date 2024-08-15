export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);

    // bind da classe soa callbacks
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMouve = this.onMouseMouve.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  // move a tooltip com base no movimento do mouse
  onMouseMouve(event) {
    this.tooltipBox.style.top = `${event.pageY + 20}px`;
    if (event.pageX + 190 > window.innerWidth) {
      this.tooltipBox.style.left = `${event.pageX - 190}px`;
    } else {
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    }
  }

  //remove a tooltip e os eventos
  onMouseLeave(event) {
    this.tooltipBox.remove();
    event.currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
    event.currentTarget.removeEventListener("mousemove", this.onMouseMouve);
  }

  // cria a tolltip e a retorna
  criarTooltipBox(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  //pega a tolltip e adiciona os eventos nela
  onMouseOver({ currentTarget }) {
    //crias a tooltipbox e coloca em uma propriedade da classe
    this.criarTooltipBox(currentTarget);
    currentTarget.addEventListener("mousemove", this.onMouseMouve);
    currentTarget.addEventListener("mouseleave", this.onMouseLeave);
  }

  // adiciona os eventos de mouse over nas tooltips
  addTolltipEvents() {
    this.tooltips.forEach((item) => {
      item.addEventListener("mouseover", this.onMouseOver);
    });
  }

  init() {
    if (this.tooltips.length) {
      this.addTolltipEvents();
    }
    return this;
  }
}
