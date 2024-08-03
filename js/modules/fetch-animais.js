import initAnimaNumeros from "./anima-numeros.js";

export default function initFetchAnimais() {
  async function fetchAnimais(url) {
    const animaisResponse = await fetch(url);
    const animaisJSON = await animaisResponse.json();
    const numerosGrid = document.querySelector(".numeros-grid");

    animaisJSON.forEach((animal) => {
      const divAnimal = createAnimais(animal);
      numerosGrid.appendChild(divAnimal);
    });
    initAnimaNumeros();
  }

  function createAnimais(animal) {
    const div = document.createElement("div");
    div.classList.add("numeros-animal");

    div.innerHTML = `<h3>${animal.especie}<h3/><span data-numero>${animal.total}</span>`;

    return div;
  }

  fetchAnimais("./animaisapi.json");
}
