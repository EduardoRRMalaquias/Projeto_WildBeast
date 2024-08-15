export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.class = "ativo";
  }

  // artivar tabs de acordo com o index
  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.class);
    });
    const direcao = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.class, direcao);
  }

  // adicionar eventos em cas iten da tab nav
  addTabNavEvent() {
    this.tabMenu.forEach((itemTab, index) => {
      itemTab.addEventListener("click", () => this.activeTab(index));
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      //ativar primeiro item da tabNav
      this.activeTab(0);
      this.addTabNavEvent();
    }
    return this;
  }
}
