export default function clickOutside(element, events, callback) {
  const html = document.documentElement;
  const outside = "data-outside";

  // adiciona os eventos passados ao html e adiciona o atributo no element caso ele não tenha
  if (!element.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));
    });
    element.setAttribute(outside, "");
  }

  // remove o evento do html e exedcuta a funcao passada caso o usuario clique fora
  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOutsideClick);
      });
      callback();
    }
  }
}
