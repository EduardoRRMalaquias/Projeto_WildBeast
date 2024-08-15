export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);

    // alterar this da funcao addModalEvents
    this.eventAbrirFecharModal = this.eventAbrirFecharModal.bind(this);
    this.fecharClickForaModal = this.fecharClickForaModal.bind(this);
  }

  //abre ou Fecha o Modal(
  abrirFecharModal() {
    this.containerModal.classList.toggle("ativo");
  }

  eventAbrirFecharModal(event) {
    event.preventDefault();
    this.abrirFecharModal(event);
  }

  // fecha o modal a clicar do lado de fora
  fecharClickForaModal(event) {
    if (event.target === this.containerModal) {
      this.abrirFecharModal(event);
    }
  }

  // adiciona eventos nos componentes do modal
  addModalEvents() {
    this.botaoAbrir.addEventListener("click", this.eventAbrirFecharModal);
    this.botaoFechar.addEventListener("click", this.eventAbrirFecharModal);
    this.containerModal.addEventListener("click", this.fecharClickForaModal);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEvents();
    }
    return this;
  }
}
