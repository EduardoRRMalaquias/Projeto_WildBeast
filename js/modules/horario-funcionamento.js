export default class HorarioFuncionamento {
  constructor(horarioFuncionamento, classe) {
    this.horarioFuncionamento = document.querySelector(horarioFuncionamento);
    this.class = classe;
  }

  dadosHorarioFuncionamento() {
    this.diasSemana = this.horarioFuncionamento.dataset.semana
      .split(",")
      .map(Number);
    this.horarioSemana = this.horarioFuncionamento.dataset.horario
      .split(",")
      .map(Number);
  }

  dadosAgora() {
    this.dataAtual = new Date();
    this.diaAtual = this.dataAtual.getDay();
    this.horarioAtual = this.dataAtual.getUTCHours() - 3;
  }

  verificarFuncionamento() {
    this.semanaAberto = this.diasSemana.indexOf(this.diaAtual) !== -1;
    this.horarioAberto =
      this.horarioAtual >= this.horarioSemana[0] &&
      this.horarioAtual < this.horarioSemana[1];
    return this.semanaAberto && this.horarioAberto;
  }

  ativarCasoAberto() {
    if (this.verificarFuncionamento()) {
      horarioFuncionamento.classList.add(this.class);
    }
  }

  init() {
    if (this.horarioFuncionamento) {
      this.dadosHorarioFuncionamento();
      this.dadosAgora();
      this.ativarCasoAberto();
    }
    return this;
  }
}
