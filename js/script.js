import ScrollSuave from "./modules/scrol-suave.js";
import initAccordion from "./modules/accordion.js";
import initTabNav from "./modules/tab-nav.js";
import initMocdal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuHamburguer from "./modules/menu-hamburguer.js";
import initHorarioFuncionamento from "./modules/horario-funcionamento.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";
import initAnimaScrol from "./modules/anima-scroll.js";


const scrollSuave = new ScrollSuave('[data-menu="smooth"] a[href^="#"]')
scrollSuave.init()


initAccordion();
initTabNav();
initMocdal();
initTooltip();
initDropdownMenu();
initMenuHamburguer();
initHorarioFuncionamento();
initFetchAnimais();
initFetchBitcoin();
initAnimaScrol();
