/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/accordion.js":
/*!*********************************!*\
  !*** ./js/modules/accordion.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAccordion)\n/* harmony export */ });\nfunction initAccordion() {\r\n  const accordionList = document.querySelectorAll(\r\n    '[data-anime=\"accordion\"] dt'\r\n  );\r\n  const activeClass = \"ativo\";\r\n\r\n  if (accordionList.length) {\r\n    accordionList[0].classList.add(activeClass);\r\n    accordionList[0].nextElementSibling.classList.add(activeClass);\r\n\r\n    function activeAccordion() {\r\n      this.classList.toggle(activeClass);\r\n      this.nextElementSibling.classList.toggle(activeClass);\r\n    }\r\n\r\n    accordionList.forEach((item) => {\r\n      item.addEventListener(\"click\", activeAccordion);\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://projeto_wildbeast/./js/modules/accordion.js?");

/***/ }),

/***/ "./js/modules/anima-numeros.js":
/*!*************************************!*\
  !*** ./js/modules/anima-numeros.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaNumeros)\n/* harmony export */ });\nfunction initAnimaNumeros() {\r\n  function animaNumeros() {\r\n    const numeros = document.querySelectorAll(\"[data-numero]\");\r\n\r\n    numeros.forEach((numero) => {\r\n      const valor = +numero.innerText;\r\n      const incremento = Math.floor(valor / 100);\r\n\r\n      let start = 0;\r\n      const timer = setInterval(() => {\r\n        start += incremento;\r\n        numero.innerText = start;\r\n        if (start > valor) {\r\n          numero.innerText = valor;\r\n          clearInterval(timer);\r\n        }\r\n      }, 25 * Math.random());\r\n    });\r\n  }\r\n\r\n  function handleMutation(mutation) {\r\n    if (mutation[0].target.classList.contains(\"ativo\")) {\r\n      observer.disconnect();\r\n      animaNumeros();\r\n    }\r\n  }\r\n\r\n  const observeTarget = document.querySelector(\".numeros\");\r\n  const observer = new MutationObserver(handleMutation);\r\n\r\n  observer.observe(observeTarget, { attributes: true });\r\n}\r\n\n\n//# sourceURL=webpack://projeto_wildbeast/./js/modules/anima-numeros.js?");

/***/ }),

/***/ "./js/modules/anima-scroll.js":
/*!************************************!*\
  !*** ./js/modules/anima-scroll.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaScrol)\n/* harmony export */ });\nfunction initAnimaScrol() {\r\n  const sections = document.querySelectorAll('[data-anime=\"scrol\"]');\r\n  if (sections.length) {\r\n    const mediaScroll = window.innerWidth * 0.6;\r\n\r\n    function animaScrol() {\r\n      sections.forEach((section) => {\r\n        const sectionTop = section.getBoundingClientRect().top;\r\n        const sectionVisivel = sectionTop - mediaScroll < 0;\r\n        if (sectionVisivel) {\r\n          section.classList.add(\"ativo\");\r\n        } else if (section.classList.contains(\"ativo\")) {\r\n          section.classList.remove(\"ativo\");\r\n        }\r\n      });\r\n    }\r\n\r\n    window.addEventListener(\"scroll\", animaScrol);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://projeto_wildbeast/./js/modules/anima-scroll.js?");

/***/ }),

/***/ "./js/modules/click-outside.js":
/*!*************************************!*\
  !*** ./js/modules/click-outside.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clickOutside)\n/* harmony export */ });\nfunction clickOutside(element, events, callback) {\r\n  const html = document.documentElement;\r\n  const outside = \"data-outside\";\r\n\r\n  if (!element.hasAttribute(outside)) {\r\n    events.forEach((userEvent) => {\r\n      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));\r\n    });\r\n    element.setAttribute(outside, \"\");\r\n  }\r\n\r\n  function handleOutsideClick(event) {\r\n    if (!element.contains(event.target)) {\r\n      events.forEach((userEvent) => {\r\n        html.removeEventListener(userEvent, handleOutsideClick);\r\n      });\r\n      callback();\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://projeto_wildbeast/./js/modules/click-outside.js?");

/***/ }),

/***/ "./js/modules/dropdown-menu.js":
/*!*************************************!*\
  !*** ./js/modules/dropdown-menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropdownMenu)\n/* harmony export */ });\n/* harmony import */ var _click_outside_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./click-outside.js */ \"./js/modules/click-outside.js\");\n\r\nfunction initDropdownMenu() {\r\n  const dropdownMenus = document.querySelectorAll(\"[data-dropdown]\");\r\n  const dropdownLinks = document.querySelectorAll(\"[data-dropdown] > a\");\r\n  if (dropdownMenus && dropdownLinks) {\r\n    const eventos = [\"touchstart\", \"click\"];\r\n\r\n    dropdownMenus.forEach((menu) => {\r\n      eventos.forEach((useEvent) => {\r\n        menu.addEventListener(useEvent, handleClick);\r\n      });\r\n    });\r\n\r\n    dropdownLinks.forEach((link) => {\r\n      eventos.forEach((useEvent) => {\r\n        link.addEventListener(useEvent, (event) => {\r\n          event.preventDefault();\r\n        });\r\n      });\r\n    });\r\n\r\n    function handleClick() {\r\n      this.classList.toggle(\"ativo\");\r\n      (0,_click_outside_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, eventos, () => {\r\n        this.classList.remove(\"ativo\");\r\n      });\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://projeto_wildbeast/./js/modules/dropdown-menu.js?");

/***/ }),

/***/ "./js/modules/fetch-animais.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-animais.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numeros.js */ \"./js/modules/anima-numeros.js\");\n\r\n\r\nfunction initFetchAnimais() {\r\n  async function fetchAnimais(url) {\r\n    try {\r\n      const animaisResponse = await fetch(url);\r\n      const animaisJSON = await animaisResponse.json();\r\n      const numerosGrid = document.querySelector(\".numeros-grid\");\r\n\r\n      animaisJSON.forEach((animal) => {\r\n        const divAnimal = createAnimais(animal);\r\n        numerosGrid.appendChild(divAnimal);\r\n      });\r\n      (0,_anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    } catch (error) {\r\n      console.log(error);\r\n    }\r\n  }\r\n\r\n  function createAnimais(animal) {\r\n    const div = document.createElement(\"div\");\r\n    div.classList.add(\"numeros-animal\");\r\n\r\n    div.innerHTML = `<h3>${animal.especie}<h3/><span data-numero>${animal.total}</span>`;\r\n\r\n    return div;\r\n  }\r\n\r\n  fetchAnimais(\"./animaisapi.json\");\r\n}\r\n\n\n//# sourceURL=webpack://projeto_wildbeast/./js/modules/fetch-animais.js?");

/***/ }),

/***/ "./js/modules/fetch-bitcoin.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-bitcoin.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchBitcoin)\n/* harmony export */ });\nfunction initFetchBitcoin() {}\r\n\r\nfetch(\"https://blockchain.info/ticker\")\r\n  .then((response) => response.json())\r\n  .then((bitcoin) => {\r\n    const btcPreco = document.querySelector(\".btc-preco\");\r\n    btcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);\r\n  })\r\n  .catch((erro) => {\r\n    console.log(Error(erro));\r\n  });\r\n\n\n//# sourceURL=webpack://projeto_wildbeast/./js/modules/fetch-bitcoin.js?");

/***/ }),

/***/ "./js/modules/horario-funcionamento.js":
/*!*********************************************!*\
  !*** ./js/modules/horario-funcionamento.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initHorarioFuncionamento)\n/* harmony export */ });\nfunction initHorarioFuncionamento() {\r\n  const horarioFuncionamento = document.querySelector(\"[data-semana]\");\r\n  const diasSemana = horarioFuncionamento.dataset.semana.split(\",\").map(Number);\r\n  const horarioSemana = horarioFuncionamento.dataset.horario\r\n    .split(\",\")\r\n    .map(Number);\r\n\r\n  const dataAtual = new Date();\r\n  const diaAtual = dataAtual.getDay();\r\n  const horarioAtual = dataAtual.getHours();\r\n\r\n  const semanaAberto = diasSemana.indexOf(diaAtual) !== -1;\r\n  const horarioAberto =\r\n    horarioAtual >= horarioSemana[0] && horarioAtual < horarioSemana[1];\r\n\r\n  if (semanaAberto && horarioAberto) {\r\n    horarioFuncionamento.classList.add(\"aberto\");\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://projeto_wildbeast/./js/modules/horario-funcionamento.js?");

/***/ }),

/***/ "./js/modules/menu-hamburguer.js":
/*!***************************************!*\
  !*** ./js/modules/menu-hamburguer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuHamburguer)\n/* harmony export */ });\n/* harmony import */ var _click_outside_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./click-outside.js */ \"./js/modules/click-outside.js\");\n\r\n\r\nfunction initMenuHamburguer() {\r\n  const menuButton = document.querySelector('[data-menu=\"button\"]');\r\n  const menuLists = document.querySelector('[data-menu=\"list\"]');\r\n\r\n  if (menuButton) {\r\n    const eventos = [\"touchstart\", \"click\"];\r\n\r\n    function openMenu(event) {\r\n      menuLists.classList.toggle(\"ativo\");\r\n      menuButton.classList.toggle(\"ativo\");\r\n      (0,_click_outside_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuLists, eventos, () => {\r\n        console.log(\"teste\");\r\n        menuLists.classList.remove(\"ativo\");\r\n        menuButton.classList.remove(\"ativo\");\r\n      });\r\n    }\r\n\r\n    eventos.forEach((evento) => menuButton.addEventListener(evento, openMenu));\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://projeto_wildbeast/./js/modules/menu-hamburguer.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\nfunction initModal() {\r\n  const botaoAbrir = document.querySelector('[data-modal=\"abrir\"');\r\n  const botaoFechar = document.querySelector('[data-modal=\"fechar\"');\r\n  const containerModal = document.querySelector('[data-modal=\"container\"');\r\n\r\n  if (botaoAbrir && botaoFechar && containerModal) {\r\n    function abrirFecharModal(event) {\r\n      event.preventDefault();\r\n      containerModal.classList.toggle(\"ativo\");\r\n    }\r\n\r\n    function fecharClickForaModal(event) {\r\n      if (event.target === this) {\r\n        abrirFecharModal(event);\r\n      }\r\n    }\r\n\r\n    botaoAbrir.addEventListener(\"click\", abrirFecharModal);\r\n    botaoFechar.addEventListener(\"click\", abrirFecharModal);\r\n    containerModal.addEventListener(\"click\", fecharClickForaModal);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://projeto_wildbeast/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/scrol-suave.js":
/*!***********************************!*\
  !*** ./js/modules/scrol-suave.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initScrollSuave)\n/* harmony export */ });\nfunction initScrollSuave() {\r\n  const linksInternos = document.querySelectorAll(\r\n    '[data-menu=\"smooth\"] a[href^=\"#\"]'\r\n  );\r\n\r\n  if (linksInternos.length) {\r\n    function scrollToSection(event) {\r\n      event.preventDefault();\r\n      const href = this.getAttribute(\"href\");\r\n      const section = document.querySelector(href);\r\n\r\n      section.scrollIntoView({\r\n        behavior: \"smooth\",\r\n        block: \"start\",\r\n      });\r\n    }\r\n\r\n    linksInternos.forEach((link) => {\r\n      link.addEventListener(\"click\", scrollToSection);\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://projeto_wildbeast/./js/modules/scrol-suave.js?");

/***/ }),

/***/ "./js/modules/tab-nav.js":
/*!*******************************!*\
  !*** ./js/modules/tab-nav.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTabNav)\n/* harmony export */ });\nfunction initTabNav() {\r\n  const tabMenu = document.querySelectorAll('[data-tab=\"menu\"] li');\r\n  const tabContent = document.querySelectorAll('[data-tab=\"content\"] section');\r\n\r\n  if (tabMenu.length && tabContent.length) {\r\n    tabContent[0].classList.add(\"ativo\");\r\n\r\n    function activeTab(index) {\r\n      tabContent.forEach((section) => {\r\n        section.classList.remove(\"ativo\");\r\n      });\r\n      const direcao = tabContent[index].dataset.anime;\r\n      tabContent[index].classList.add(\"ativo\", direcao);\r\n    }\r\n\r\n    tabMenu.forEach((itemTab, index) => {\r\n      itemTab.addEventListener(\"click\", () => activeTab(index));\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://projeto_wildbeast/./js/modules/tab-nav.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTooltip)\n/* harmony export */ });\nfunction initTooltip() {\r\n  const tooltips = document.querySelectorAll(\"[data-tooltip]\");\r\n\r\n  if (tooltips) {\r\n    tooltips.forEach((item) => {\r\n      item.addEventListener(\"mouseover\", onMouseOver);\r\n    });\r\n\r\n    function onMouseOver(event) {\r\n      const tooltipBox = criarTooltipBox(this);\r\n      tooltipBox.style.top = event.pageY + \"px\";\r\n      tooltipBox.style.left = event.pageX + \"px\";\r\n\r\n      onMouseMouve.tooltipBox = tooltipBox;\r\n      this.addEventListener(\"mousemove\", onMouseMouve);\r\n\r\n      onMouseLeave.tooltipBox = tooltipBox;\r\n      onMouseLeave.element = this;\r\n      this.addEventListener(\"mouseleave\", onMouseLeave);\r\n    }\r\n\r\n    const onMouseMouve = {\r\n      handleEvent(event) {\r\n        this.tooltipBox.style.top = event.pageY + 20 + \"px\";\r\n        this.tooltipBox.style.left = event.pageX + 20 + \"px\";\r\n      },\r\n    };\r\n\r\n    const onMouseLeave = {\r\n      handleEvent() {\r\n        this.tooltipBox.remove();\r\n        this.element.removeEventListener(\"mouseleave\", onMouseLeave);\r\n        this.element.removeEventListener(\"mousemove\", onMouseMouve);\r\n      },\r\n    };\r\n\r\n    function criarTooltipBox(element) {\r\n      const tooltipBox = document.createElement(\"div\");\r\n      const text = element.getAttribute(\"aria-label\");\r\n      tooltipBox.classList.add(\"tooltip\");\r\n      tooltipBox.innerText = text;\r\n      document.body.appendChild(tooltipBox);\r\n      return tooltipBox;\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://projeto_wildbeast/./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scrol_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scrol-suave.js */ \"./js/modules/scrol-suave.js\");\n/* harmony import */ var _modules_anima_scroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/anima-scroll.js */ \"./js/modules/anima-scroll.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/accordion.js */ \"./js/modules/accordion.js\");\n/* harmony import */ var _modules_tab_nav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tab-nav.js */ \"./js/modules/tab-nav.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_menu_hamburguer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menu-hamburguer.js */ \"./js/modules/menu-hamburguer.js\");\n/* harmony import */ var _modules_horario_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/horario-funcionamento.js */ \"./js/modules/horario-funcionamento.js\");\n/* harmony import */ var _modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fetch-animais.js */ \"./js/modules/fetch-animais.js\");\n/* harmony import */ var _modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/fetch-bitcoin.js */ \"./js/modules/fetch-bitcoin.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_scrol_suave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_anima_scroll_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_tab_nav_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n(0,_modules_menu_hamburguer_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n(0,_modules_horario_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\r\n(0,_modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\r\n(0,_modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\r\n\n\n//# sourceURL=webpack://projeto_wildbeast/./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;