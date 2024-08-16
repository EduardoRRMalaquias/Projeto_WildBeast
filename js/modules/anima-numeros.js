export default class initAnimaNumeros {
  constructor(numeros, observeTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerClass = observerClass;
    this.observeTarget = document.querySelector(observeTarget);

    //definir o this padrão com bind ao callback da mutação
    this.handleMutation = this.handleMutation.bind(this);
  }

  //recebe um elemento do dom com um texto numerico e incrementa a partir de 0 até o numero final
  static incrementarNumero(numero) {
    const valor = +numero.innerText;
    const incremento = Math.floor(valor / 100);

    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start > valor) {
        numero.innerText = valor;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  //ativa a funcao de incrementar numero para cada numero selecionado do dom
  animaNumeros() {
    this.numeros.forEach((numero) =>
      this.constructor.incrementarNumero(numero)
    );
  }

  // funçao que ocorre quando a mutação ocorrer
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  // Adiciona o Mutation Observer para verificar quando a classe ativo é adicionada no elemento target
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observeTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observeTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
