import AnimaNumeros from "./anima-numeros.js";

export default function fetchAnimais(url, target) {
  // cria a div contendo informaços com o total de animais
  function createAnimais(animal) {
    const div = document.createElement("div");
    div.classList.add("numeros-animal");

    div.innerHTML = `<h3>${animal.especie}<h3/><span data-numero>${animal.total}</span>`;

    return div;
  }

  //preenche o dom com a informação de cada animal
  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = createAnimais(animal);
    numerosGrid.appendChild(divAnimal);
  }

  //anima os numeros de cada iten de animal
  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros("[data-numero]", ".numeros", "ativo");
    animaNumeros.init();
  }

  // puxa os dados dos animais atraves de um json e atica a funcao createanimais
  async function criarAnimais() {
    try {
      //Fetch espera a resposta e transforma em Json
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();

      // Aposa transformação de json, ativa as funções para preencher e animar os numeros
      animaisJSON.forEach((animal) => preencherAnimais(animal));

      animaAnimaisNumeros();
    } catch (error) {
      console.log(error);
    }
  }

  return criarAnimais();
}
