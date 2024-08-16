import clickOutside from "./click-outside.js";

export default class DropdownMenu {
  constructor(dropdownMenus, dropdownLinks, eventos) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    this.dropdownLinks = document.querySelectorAll(dropdownLinks);

    // define os eventos de clique e toque como eventos padrao
    if (eventos === undefined) this.eventos = ["touchstart", "click"];
    else this.eventos = eventos;

    this.class = "ativo";

    this.activeDropdownsMenu = this.activeDropdownsMenu.bind(this);
  }

  // ativa o DropdownsMenu e adiciona a funcao que observa o clique fora dele
  activeDropdownsMenu(event) {
    const element = event.currentTarget;

    element.classList.toggle(this.class);
    clickOutside(element, this.eventos, () => {
      element.classList.remove(this.class);
    });
  }

  //adiciona eventos no ropdowns Menus
  addDropdownsMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.eventos.forEach((useEvent) => {
        menu.addEventListener(useEvent, this.activeDropdownsMenu);
      });
    });
  }

  // previne o padrão de todos os links do menu
  preventdefaltDropdownslinksEvent() {
    this.dropdownLinks.forEach((link) => {
      this.eventos.forEach((useEvent) => {
        link.addEventListener(useEvent, (event) => {
          event.preventDefault();
        });
      });
    });
  }

  init() {
    if (this.dropdownMenus.length && this.dropdownLinks.length) {
      this.addDropdownsMenusEvent();
      this.preventdefaltDropdownslinksEvent();
    }
    return this;
  }
}
