import ScrollSuave from "./modules/scrol-suave.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tab-nav.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import fetchAnimais from "./modules/fetch-animais.js";
import fetchBitcoin from "./modules/fetch-bitcoin.js";
import ScrolAnime from "./modules/scroll-anima.js";
import DropdownMenu from "./modules/dropdown-menu.js";
import MenuHamburguer from "./modules/menu-hamburguer.js";
import HorarioFuncionamento from "./modules/horario-funcionamento.js";

const scrollSuave = new ScrollSuave('[data-menu="smooth"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
);
tabNav.init();

const modal = new Modal(
  '[data-modal="abrir"',
  '[data-modal="fechar"',
  '[data-modal="container"'
);
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

fetchAnimais("./animaisapi.json", ".numeros-grid");
fetchBitcoin("https://blockchain.info/ticker", ".btc-preco");

const scrolAnime = new ScrolAnime('[data-anime="scrol"]');
scrolAnime.init();

const dropdownMenu = new DropdownMenu(
  "[data-dropdown]",
  "[data-dropdown] > a",
  ["touchstart", "click"]
);
dropdownMenu.init();

const menuHamburguer = new MenuHamburguer(
  '[data-menu="button"]',
  '[data-menu="list"]',
  ["touchstart", "click"]
);
menuHamburguer.init();

const horarioFuncionamento = new HorarioFuncionamento(
  "[data-semana]",
  "aberto"
);
horarioFuncionamento.init();
