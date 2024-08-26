import clickOutside from "./click-outside.js";

export default class MenuHamburguer {
  constructor(menuButton, menuLists, eventos) {
    this.menuButton = document.querySelector(menuButton);
    this.menuLists = document.querySelector(menuLists);

    // define os eventos de clique e toque como eventos padrao
    if (eventos === undefined) this.eventos = ["touchstart", "click"];
    else this.eventos = eventos;

    this.class = "ativo";
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    event.preventDefault();
    this.menuLists.classList.toggle(this.class);
    this.menuButton.classList.toggle(this.class);
    clickOutside(this.menuLists, this.eventos, () => {
      this.menuLists.classList.remove(this.class);
      this.menuButton.classList.remove(this.class);
    });
  }

  addMenuHamburguerEvents() {
    this.eventos.forEach((evento) =>
      this.menuButton.addEventListener(evento, this.openMenu)
    );
  }

  init() {
    if (this.menuButton && this.menuLists) {
      this.addMenuHamburguerEvents();
    }
    return this;
  }
}
