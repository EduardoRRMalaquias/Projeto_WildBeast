import clickOutside from "./click-outside.js";
export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");
  const dropdownLinks = document.querySelectorAll("[data-dropdown] > a");
  if (dropdownMenus && dropdownLinks) {
    const eventos = ["touchstart", "click"];

    dropdownMenus.forEach((menu) => {
      eventos.forEach((useEvent) => {
        menu.addEventListener(useEvent, handleClick);
      });
    });

    dropdownLinks.forEach((link) => {
      eventos.forEach((useEvent) => {
        link.addEventListener(useEvent, (event) => {
          event.preventDefault();
        });
      });
    });

    function handleClick() {
      this.classList.toggle("ativo");
      clickOutside(this, eventos, () => {
        this.classList.remove("ativo");
      });
    }
  }
}
