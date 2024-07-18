export default function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"');
  const botaoFechar = document.querySelector('[data-modal="fechar"');
  const containerModal = document.querySelector('[data-modal="container"');

  if (botaoAbrir && botaoFechar && containerModal) {
    function abrirFecharModal(event) {
      event.preventDefault();
      containerModal.classList.toggle("ativo");
    }

    function fecharClickForaModal(event) {
      if (event.target === this) {
        abrirFecharModal(event);
      }
    }

    botaoAbrir.addEventListener("click", abrirFecharModal);
    botaoFechar.addEventListener("click", abrirFecharModal);
    containerModal.addEventListener("click", fecharClickForaModal);
  }
}
