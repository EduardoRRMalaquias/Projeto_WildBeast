import clickOutside from "./click-outside.js";

export default function initMenuHamburguer() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuLists = document.querySelector('[data-menu="list"]');

  if (menuButton) {
    const eventos = ["touchstart", "click"];

    function openMenu(event) {
      menuLists.classList.toggle("ativo");
      menuButton.classList.toggle("ativo");
      clickOutside(menuLists, eventos, () => {
        console.log("teste");
        menuLists.classList.remove("ativo");
        menuButton.classList.remove("ativo");
      });
    }

    eventos.forEach((evento) => menuButton.addEventListener(evento, openMenu));
  }
}
