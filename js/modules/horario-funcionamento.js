export default function initHorarioFuncionamento() {
  const horarioFuncionamento = document.querySelector("[data-semana]");
  const diasSemana = horarioFuncionamento.dataset.semana.split(",").map(Number);
  const horarioSemana = horarioFuncionamento.dataset.horario
    .split(",")
    .map(Number);

  const dataAtual = new Date();
  const diaAtual = dataAtual.getDay();
  const horarioAtual = dataAtual.getHours();

  const semanaAberto = diasSemana.indexOf(diaAtual) !== -1;
  const horarioAberto =
    horarioAtual >= horarioSemana[0] && horarioAtual < horarioSemana[1];

  if (semanaAberto && horarioAberto) {
    horarioFuncionamento.classList.add("aberto");
  }
}
