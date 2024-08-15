export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.class = "ativo";
  }

  //abrir e fechar acordion
  toggleAccordion(item) {
    item.classList.toggle(this.class);
    item.nextElementSibling.classList.toggle(this.class);
  }

  //adicionar eventos aos itens do accordion
  addAccordioEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener("click", () => this.toggleAccordion(item));
    });
  }

  // iniciar accordion
  init() {
    if (this.accordionList.length) {
      //ativar primeiro item
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordioEvent();
    }
    return this;
  }
}
