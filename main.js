/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/accordian.js":
/*!*********************************!*\
  !*** ./js/modules/accordian.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAccordion)\n/* harmony export */ });\nfunction initAccordion() {\n  var accordionList = document.querySelectorAll('[data-anime=\"accordion\"] dt');\n  var activeClass = 'ativo';\n  function activeAccordion() {\n    this.classList.toggle(activeClass);\n    this.nextElementSibling.classList.toggle(activeClass);\n  }\n  if (accordionList.length) {\n    accordionList[0].classList.add(activeClass);\n    accordionList[0].nextElementSibling.classList.add(activeClass);\n    accordionList.forEach(function (item) {\n      item.addEventListener('click', activeAccordion);\n    });\n  }\n}\nconsole.log('dev moide');\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/accordian.js?");

/***/ }),

/***/ "./js/modules/anima-numeros.js":
/*!*************************************!*\
  !*** ./js/modules/anima-numeros.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaNumeros)\n/* harmony export */ });\nfunction initAnimaNumeros() {\n  function animaNumeros() {\n    var numeros = document.querySelectorAll('[data-numero]');\n    numeros.forEach(function (numero) {\n      var total = +numero.innerText;\n      var incremento = Math.floor(total / 100);\n      var start = 0;\n      var timer = setInterval(function () {\n        start += incremento;\n        numero.innerText = start;\n        if (start > total) {\n          numero.innerText = total;\n          clearInterval(timer);\n        }\n      }, 25 * Math.random());\n    });\n  }\n  function handleMutation(mutation) {\n    if (mutation[0].target.classList.contains('ativo')) {\n      observer.disconnect();\n      animaNumeros();\n    }\n  }\n  var observerTarget = document.querySelector('.numeros');\n  var observer = new MutationObserver(handleMutation);\n  observer.observe(observerTarget, {\n    attributes: true\n  });\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/anima-numeros.js?");

/***/ }),

/***/ "./js/modules/dropdown-menu.js":
/*!*************************************!*\
  !*** ./js/modules/dropdown-menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropdownMenu)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\nfunction initDropdownMenu() {\n  var dropdownMenus = document.querySelectorAll('[data-dropdown]');\n  dropdownMenus.forEach(function (menu) {\n    ['touchstart', 'click'].forEach(function (userEvent) {\n      menu.addEventListener(userEvent, handleClick);\n    });\n  });\n  function handleClick(event) {\n    var _this = this;\n    event.preventDefault();\n    this.classList.add('active');\n    (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ['touchstart', 'click'], function () {\n      _this.classList.remove('active');\n    });\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/dropdown-menu.js?");

/***/ }),

/***/ "./js/modules/fetch-animais.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-animais.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./anima-numeros.js */ \"./js/modules/anima-numeros.js\");\n\n\n\nfunction initFetchAnimais() {\n  function fetchAnimais(_x) {\n    return _fetchAnimais.apply(this, arguments);\n  }\n  function _fetchAnimais() {\n    _fetchAnimais = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(url) {\n      var animmaisResponse, animaisJson, numeroGrid;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return fetch(url);\n          case 3:\n            animmaisResponse = _context.sent;\n            _context.next = 6;\n            return animmaisResponse.json();\n          case 6:\n            animaisJson = _context.sent;\n            numeroGrid = document.querySelector('.numeros-grid');\n            animaisJson.forEach(function (animal) {\n              var divAnimal = createAnimal(animal);\n              numeroGrid.appendChild(divAnimal);\n            });\n            (0,_anima_numeros_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n            _context.next = 15;\n            break;\n          case 12:\n            _context.prev = 12;\n            _context.t0 = _context[\"catch\"](0);\n            console.log(_context.t0);\n          case 15:\n          case \"end\":\n            return _context.stop();\n        }\n      }, _callee, null, [[0, 12]]);\n    }));\n    return _fetchAnimais.apply(this, arguments);\n  }\n  function createAnimal(animal) {\n    var div = document.createElement('div');\n    div.classList.add('numero-animal');\n    div.innerHTML = \"<h3>\".concat(animal.specie, \"</h3><span data-numero>\").concat(animal.total);\n    return div;\n  }\n  fetchAnimais('./animaisapi.json');\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/fetch-animais.js?");

/***/ }),

/***/ "./js/modules/fetch-bitcoin.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-bitcoin.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchBitcoin)\n/* harmony export */ });\nfunction initFetchBitcoin() {\n  fetch('https:blockchain.info/ticker').then(function (response) {\n    return response.json();\n  }).then(function (bitcon) {\n    var btcPreco = document.querySelector('.btc-preco');\n    btcPreco.innerText = (100 / bitcon.BRL.sell).toFixed(4);\n  })[\"catch\"](function (erro) {\n    console.log(Error(erro));\n  });\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/fetch-bitcoin.js?");

/***/ }),

/***/ "./js/modules/funcionamento.js":
/*!*************************************!*\
  !*** ./js/modules/funcionamento.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFuncionamento)\n/* harmony export */ });\nfunction initFuncionamento() {}\nvar funcionamento = document.querySelector('[data-semana]');\nvar diasSemana = funcionamento.dataset.semana.split(',').map(Number);\nvar horarioSemana = funcionamento.dataset.horario.split(',').map(Number);\nvar dataAgora = new Date();\nvar diaAgora = dataAgora.getDay();\nvar horarioAgora = dataAgora.getHours();\nvar semanaAberto = diasSemana.indexOf(diaAgora) !== -1;\nvar horarioAberto = horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];\nif (semanaAberto && horarioAberto) {\n  console.log('ta aberto');\n  funcionamento.classList.add('aberto');\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/funcionamento.js?");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\nfunction initMenuMobile() {\n  var menuButton = document.querySelector('[data-menu=\"button\"]');\n  var menuList = document.querySelector('[data-menu=\"list\"]');\n  var eventos = ['click', 'touchstart'];\n  function openMenu(event) {\n    menuList.classList.add('active');\n    menuButton.classList.add('active');\n    (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuList, eventos, function () {\n      menuList.classList.remove('active');\n      menuButton.classList.remove('active');\n    });\n  }\n  if (menuButton) {\n    eventos.forEach(function (evento) {\n      menuButton.addEventListener(evento, openMenu);\n    });\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\nfunction initModal() {\n  var botaoAbrir = document.querySelector('[data-modal=\"abrir\"]');\n  var botaoFechar = document.querySelector('[data-modal=\"fechar\"]');\n  var containerModal = document.querySelector('[data-modal=\"container\"]');\n  function abrirModal(event) {\n    event.preventDefault();\n    containerModal.classList.add('ativo');\n  }\n  function fecharModal(event) {\n    event.preventDefault();\n    containerModal.classList.remove('ativo');\n  }\n  function clickForaDoModal(event) {\n    if (event.target === this) {\n      fecharModal(event);\n    }\n  }\n  if (botaoAbrir && botaoFechar && containerModal) {\n    botaoAbrir.addEventListener('click', abrirModal);\n    botaoFechar.addEventListener('click', fecharModal);\n    containerModal.addEventListener('click', clickForaDoModal);\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/outsideclick.js":
/*!************************************!*\
  !*** ./js/modules/outsideclick.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\n  var html = document.documentElement;\n  var outside = 'data-outside';\n  function handleOutsideClick(event) {\n    if (!element.contains(event.target)) {\n      element.removeAttribute(outside);\n      events.forEach(function (userEvent) {\n        html.removeEventListener(userEvent, handleOutsideClick);\n      });\n      callback();\n    }\n  }\n  if (!element.hasAttribute(outside)) {\n    events.forEach(function (userEvent) {\n      setTimeout(function () {\n        html.addEventListener(userEvent, handleOutsideClick);\n      });\n    });\n    element.setAttribute(outside, '');\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/outsideclick.js?");

/***/ }),

/***/ "./js/modules/scroll-animacao.js":
/*!***************************************!*\
  !*** ./js/modules/scroll-animacao.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimacaoScroll)\n/* harmony export */ });\nfunction initAnimacaoScroll() {\n  var sections = document.querySelectorAll('[data-anime=\"scroll\"]');\n  var windowMetade = window.innerHeight * 0.6;\n  function animaScroll() {\n    sections.forEach(function (section) {\n      var sectionTop = section.getBoundingClientRect().top;\n      var isSectionVisible = sectionTop - windowMetade < 0;\n      if (isSectionVisible) section.classList.add('ativo');else if (section.classList.contains('ativo')) {\n        section.classList.remove('ativo');\n      }\n    });\n  }\n  if (sections.length) {\n    animaScroll();\n    window.addEventListener('scroll', animaScroll);\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/scroll-animacao.js?");

/***/ }),

/***/ "./js/modules/scroll-suave.js":
/*!************************************!*\
  !*** ./js/modules/scroll-suave.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initScrollSuave)\n/* harmony export */ });\nfunction initScrollSuave() {\n  var linksInternos = document.querySelectorAll('[data-menu=\"suave\"] a[href^=\"#\"]');\n  function scrollToSection(event) {\n    event.preventDefault();\n    var href = event.currentTarget.getAttribute('href');\n    var section = document.querySelector(href);\n    section.scrollIntoView({\n      behavior: 'smooth',\n      block: 'start'\n    });\n\n    // forma alternativa\n    // const topo = section.offsetTop;\n    // window.scrollTo({\n    //   top: topo,\n    //   behavior: 'smooth',\n    // });\n  }\n  linksInternos.forEach(function (link) {\n    link.addEventListener('click', scrollToSection);\n  });\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/scroll-suave.js?");

/***/ }),

/***/ "./js/modules/tabNav.js":
/*!******************************!*\
  !*** ./js/modules/tabNav.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTabNav)\n/* harmony export */ });\nfunction initTabNav() {\n  var tabMenu = document.querySelectorAll('[data-tab=\"menu\"] li');\n  var tabContent = document.querySelectorAll('[data-tab=\"content\"] section');\n  function activeTab(index) {\n    tabContent.forEach(function (section) {\n      section.classList.remove('ativo');\n    });\n    var direcao = tabContent[index].dataset.anime;\n    tabContent[index].classList.add('ativo', direcao);\n  }\n  if (tabMenu.length && tabContent.length) {\n    tabContent[0].classList.add('ativo');\n    tabMenu.forEach(function (itemMenu, index) {\n      itemMenu.addEventListener('click', function () {\n        activeTab(index);\n      });\n    });\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/tabNav.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTooltip)\n/* harmony export */ });\nfunction initTooltip() {}\nvar tooltips = document.querySelectorAll('[data-tooltip]');\ntooltips.forEach(function (item) {\n  item.addEventListener('mouseover', onMouseOver);\n});\nfunction onMouseOver(event) {\n  var tooltipBox = criarTooltipBox(this);\n  onMouseMove.tooltipBox = tooltipBox;\n  this.addEventListener('mousemove', onMouseMove);\n  onMouseLeave.tooltipBox = tooltipBox;\n  onMouseLeave.element = this;\n  this.addEventListener('mouseleave', onMouseLeave);\n}\nvar onMouseLeave = {\n  handleEvent: function handleEvent() {\n    this.tooltipBox.remove();\n    this.element.removeEventListener('mouseleave', onMouseLeave);\n    this.element.removeEventListener('mousemove', onMouseMove);\n  }\n};\nvar onMouseMove = {\n  handleEvent: function handleEvent(event) {\n    this.tooltipBox.style.top = event.pageY + 20 + 'px';\n    this.tooltipBox.style.left = event.pageX + 20 + 'px';\n  }\n};\nfunction criarTooltipBox(element) {\n  var tooltipBox = document.createElement('div');\n  var text = element.getAttribute('aria-label');\n  tooltipBox.classList.add('tooltip');\n  tooltipBox.innerText = text;\n  document.body.appendChild(tooltipBox);\n  return tooltipBox;\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_accordian_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/accordian.js */ \"./js/modules/accordian.js\");\n/* harmony import */ var _modules_tabNav_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/tabNav.js */ \"./js/modules/tabNav.js\");\n/* harmony import */ var _modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scroll-animacao.js */ \"./js/modules/scroll-animacao.js\");\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./js/modules/funcionamento.js\");\n/* harmony import */ var _modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fetch-animais.js */ \"./js/modules/fetch-animais.js\");\n/* harmony import */ var _modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/fetch-bitcoin.js */ \"./js/modules/fetch-bitcoin.js\");\n\n\n\n\n\n\n\n\n\n\n\n(0,_modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_accordian_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_modules_tabNav_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n(0,_modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n(0,_modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n(0,_modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n\n//# sourceURL=webpack://animais-fantasticos/./js/script.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var _typeof = (__webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/typeof.js\")[\"default\"]);\r\nfunction _regeneratorRuntime() {\r\n  \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */\r\n  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {\r\n    return e;\r\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\r\n  var t,\r\n    e = {},\r\n    r = Object.prototype,\r\n    n = r.hasOwnProperty,\r\n    o = Object.defineProperty || function (t, e, r) {\r\n      t[e] = r.value;\r\n    },\r\n    i = \"function\" == typeof Symbol ? Symbol : {},\r\n    a = i.iterator || \"@@iterator\",\r\n    c = i.asyncIterator || \"@@asyncIterator\",\r\n    u = i.toStringTag || \"@@toStringTag\";\r\n  function define(t, e, r) {\r\n    return Object.defineProperty(t, e, {\r\n      value: r,\r\n      enumerable: !0,\r\n      configurable: !0,\r\n      writable: !0\r\n    }), t[e];\r\n  }\r\n  try {\r\n    define({}, \"\");\r\n  } catch (t) {\r\n    define = function define(t, e, r) {\r\n      return t[e] = r;\r\n    };\r\n  }\r\n  function wrap(t, e, r, n) {\r\n    var i = e && e.prototype instanceof Generator ? e : Generator,\r\n      a = Object.create(i.prototype),\r\n      c = new Context(n || []);\r\n    return o(a, \"_invoke\", {\r\n      value: makeInvokeMethod(t, r, c)\r\n    }), a;\r\n  }\r\n  function tryCatch(t, e, r) {\r\n    try {\r\n      return {\r\n        type: \"normal\",\r\n        arg: t.call(e, r)\r\n      };\r\n    } catch (t) {\r\n      return {\r\n        type: \"throw\",\r\n        arg: t\r\n      };\r\n    }\r\n  }\r\n  e.wrap = wrap;\r\n  var h = \"suspendedStart\",\r\n    l = \"suspendedYield\",\r\n    f = \"executing\",\r\n    s = \"completed\",\r\n    y = {};\r\n  function Generator() {}\r\n  function GeneratorFunction() {}\r\n  function GeneratorFunctionPrototype() {}\r\n  var p = {};\r\n  define(p, a, function () {\r\n    return this;\r\n  });\r\n  var d = Object.getPrototypeOf,\r\n    v = d && d(d(values([])));\r\n  v && v !== r && n.call(v, a) && (p = v);\r\n  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);\r\n  function defineIteratorMethods(t) {\r\n    [\"next\", \"throw\", \"return\"].forEach(function (e) {\r\n      define(t, e, function (t) {\r\n        return this._invoke(e, t);\r\n      });\r\n    });\r\n  }\r\n  function AsyncIterator(t, e) {\r\n    function invoke(r, o, i, a) {\r\n      var c = tryCatch(t[r], t, o);\r\n      if (\"throw\" !== c.type) {\r\n        var u = c.arg,\r\n          h = u.value;\r\n        return h && \"object\" == _typeof(h) && n.call(h, \"__await\") ? e.resolve(h.__await).then(function (t) {\r\n          invoke(\"next\", t, i, a);\r\n        }, function (t) {\r\n          invoke(\"throw\", t, i, a);\r\n        }) : e.resolve(h).then(function (t) {\r\n          u.value = t, i(u);\r\n        }, function (t) {\r\n          return invoke(\"throw\", t, i, a);\r\n        });\r\n      }\r\n      a(c.arg);\r\n    }\r\n    var r;\r\n    o(this, \"_invoke\", {\r\n      value: function value(t, n) {\r\n        function callInvokeWithMethodAndArg() {\r\n          return new e(function (e, r) {\r\n            invoke(t, n, e, r);\r\n          });\r\n        }\r\n        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();\r\n      }\r\n    });\r\n  }\r\n  function makeInvokeMethod(e, r, n) {\r\n    var o = h;\r\n    return function (i, a) {\r\n      if (o === f) throw Error(\"Generator is already running\");\r\n      if (o === s) {\r\n        if (\"throw\" === i) throw a;\r\n        return {\r\n          value: t,\r\n          done: !0\r\n        };\r\n      }\r\n      for (n.method = i, n.arg = a;;) {\r\n        var c = n.delegate;\r\n        if (c) {\r\n          var u = maybeInvokeDelegate(c, n);\r\n          if (u) {\r\n            if (u === y) continue;\r\n            return u;\r\n          }\r\n        }\r\n        if (\"next\" === n.method) n.sent = n._sent = n.arg;else if (\"throw\" === n.method) {\r\n          if (o === h) throw o = s, n.arg;\r\n          n.dispatchException(n.arg);\r\n        } else \"return\" === n.method && n.abrupt(\"return\", n.arg);\r\n        o = f;\r\n        var p = tryCatch(e, r, n);\r\n        if (\"normal\" === p.type) {\r\n          if (o = n.done ? s : l, p.arg === y) continue;\r\n          return {\r\n            value: p.arg,\r\n            done: n.done\r\n          };\r\n        }\r\n        \"throw\" === p.type && (o = s, n.method = \"throw\", n.arg = p.arg);\r\n      }\r\n    };\r\n  }\r\n  function maybeInvokeDelegate(e, r) {\r\n    var n = r.method,\r\n      o = e.iterator[n];\r\n    if (o === t) return r.delegate = null, \"throw\" === n && e.iterator[\"return\"] && (r.method = \"return\", r.arg = t, maybeInvokeDelegate(e, r), \"throw\" === r.method) || \"return\" !== n && (r.method = \"throw\", r.arg = new TypeError(\"The iterator does not provide a '\" + n + \"' method\")), y;\r\n    var i = tryCatch(o, e.iterator, r.arg);\r\n    if (\"throw\" === i.type) return r.method = \"throw\", r.arg = i.arg, r.delegate = null, y;\r\n    var a = i.arg;\r\n    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, \"return\" !== r.method && (r.method = \"next\", r.arg = t), r.delegate = null, y) : a : (r.method = \"throw\", r.arg = new TypeError(\"iterator result is not an object\"), r.delegate = null, y);\r\n  }\r\n  function pushTryEntry(t) {\r\n    var e = {\r\n      tryLoc: t[0]\r\n    };\r\n    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);\r\n  }\r\n  function resetTryEntry(t) {\r\n    var e = t.completion || {};\r\n    e.type = \"normal\", delete e.arg, t.completion = e;\r\n  }\r\n  function Context(t) {\r\n    this.tryEntries = [{\r\n      tryLoc: \"root\"\r\n    }], t.forEach(pushTryEntry, this), this.reset(!0);\r\n  }\r\n  function values(e) {\r\n    if (e || \"\" === e) {\r\n      var r = e[a];\r\n      if (r) return r.call(e);\r\n      if (\"function\" == typeof e.next) return e;\r\n      if (!isNaN(e.length)) {\r\n        var o = -1,\r\n          i = function next() {\r\n            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;\r\n            return next.value = t, next.done = !0, next;\r\n          };\r\n        return i.next = i;\r\n      }\r\n    }\r\n    throw new TypeError(_typeof(e) + \" is not iterable\");\r\n  }\r\n  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, \"constructor\", {\r\n    value: GeneratorFunctionPrototype,\r\n    configurable: !0\r\n  }), o(GeneratorFunctionPrototype, \"constructor\", {\r\n    value: GeneratorFunction,\r\n    configurable: !0\r\n  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, \"GeneratorFunction\"), e.isGeneratorFunction = function (t) {\r\n    var e = \"function\" == typeof t && t.constructor;\r\n    return !!e && (e === GeneratorFunction || \"GeneratorFunction\" === (e.displayName || e.name));\r\n  }, e.mark = function (t) {\r\n    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, \"GeneratorFunction\")), t.prototype = Object.create(g), t;\r\n  }, e.awrap = function (t) {\r\n    return {\r\n      __await: t\r\n    };\r\n  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {\r\n    return this;\r\n  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {\r\n    void 0 === i && (i = Promise);\r\n    var a = new AsyncIterator(wrap(t, r, n, o), i);\r\n    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {\r\n      return t.done ? t.value : a.next();\r\n    });\r\n  }, defineIteratorMethods(g), define(g, u, \"Generator\"), define(g, a, function () {\r\n    return this;\r\n  }), define(g, \"toString\", function () {\r\n    return \"[object Generator]\";\r\n  }), e.keys = function (t) {\r\n    var e = Object(t),\r\n      r = [];\r\n    for (var n in e) r.push(n);\r\n    return r.reverse(), function next() {\r\n      for (; r.length;) {\r\n        var t = r.pop();\r\n        if (t in e) return next.value = t, next.done = !1, next;\r\n      }\r\n      return next.done = !0, next;\r\n    };\r\n  }, e.values = values, Context.prototype = {\r\n    constructor: Context,\r\n    reset: function reset(e) {\r\n      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) \"t\" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);\r\n    },\r\n    stop: function stop() {\r\n      this.done = !0;\r\n      var t = this.tryEntries[0].completion;\r\n      if (\"throw\" === t.type) throw t.arg;\r\n      return this.rval;\r\n    },\r\n    dispatchException: function dispatchException(e) {\r\n      if (this.done) throw e;\r\n      var r = this;\r\n      function handle(n, o) {\r\n        return a.type = \"throw\", a.arg = e, r.next = n, o && (r.method = \"next\", r.arg = t), !!o;\r\n      }\r\n      for (var o = this.tryEntries.length - 1; o >= 0; --o) {\r\n        var i = this.tryEntries[o],\r\n          a = i.completion;\r\n        if (\"root\" === i.tryLoc) return handle(\"end\");\r\n        if (i.tryLoc <= this.prev) {\r\n          var c = n.call(i, \"catchLoc\"),\r\n            u = n.call(i, \"finallyLoc\");\r\n          if (c && u) {\r\n            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);\r\n            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);\r\n          } else if (c) {\r\n            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);\r\n          } else {\r\n            if (!u) throw Error(\"try statement without catch or finally\");\r\n            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);\r\n          }\r\n        }\r\n      }\r\n    },\r\n    abrupt: function abrupt(t, e) {\r\n      for (var r = this.tryEntries.length - 1; r >= 0; --r) {\r\n        var o = this.tryEntries[r];\r\n        if (o.tryLoc <= this.prev && n.call(o, \"finallyLoc\") && this.prev < o.finallyLoc) {\r\n          var i = o;\r\n          break;\r\n        }\r\n      }\r\n      i && (\"break\" === t || \"continue\" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);\r\n      var a = i ? i.completion : {};\r\n      return a.type = t, a.arg = e, i ? (this.method = \"next\", this.next = i.finallyLoc, y) : this.complete(a);\r\n    },\r\n    complete: function complete(t, e) {\r\n      if (\"throw\" === t.type) throw t.arg;\r\n      return \"break\" === t.type || \"continue\" === t.type ? this.next = t.arg : \"return\" === t.type ? (this.rval = this.arg = t.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === t.type && e && (this.next = e), y;\r\n    },\r\n    finish: function finish(t) {\r\n      for (var e = this.tryEntries.length - 1; e >= 0; --e) {\r\n        var r = this.tryEntries[e];\r\n        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;\r\n      }\r\n    },\r\n    \"catch\": function _catch(t) {\r\n      for (var e = this.tryEntries.length - 1; e >= 0; --e) {\r\n        var r = this.tryEntries[e];\r\n        if (r.tryLoc === t) {\r\n          var n = r.completion;\r\n          if (\"throw\" === n.type) {\r\n            var o = n.arg;\r\n            resetTryEntry(r);\r\n          }\r\n          return o;\r\n        }\r\n      }\r\n      throw Error(\"illegal catch attempt\");\r\n    },\r\n    delegateYield: function delegateYield(e, r, n) {\r\n      return this.delegate = {\r\n        iterator: values(e),\r\n        resultName: r,\r\n        nextLoc: n\r\n      }, \"next\" === this.method && (this.arg = t), y;\r\n    }\r\n  }, e;\r\n}\r\nmodule.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://animais-fantasticos/./node_modules/@babel/runtime/helpers/regeneratorRuntime.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {

eval("function _typeof(o) {\r\n  \"@babel/helpers - typeof\";\r\n\r\n  return module.exports = _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) {\r\n    return typeof o;\r\n  } : function (o) {\r\n    return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o;\r\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports, _typeof(o);\r\n}\r\nmodule.exports = _typeof, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://animais-fantasticos/./node_modules/@babel/runtime/helpers/typeof.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// TODO(Babel 8): Remove this file.\r\n\r\nvar runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ \"./node_modules/@babel/runtime/helpers/regeneratorRuntime.js\")();\r\nmodule.exports = runtime;\r\n\r\n// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=\r\ntry {\r\n  regeneratorRuntime = runtime;\r\n} catch (accidentalStrictMode) {\r\n  if (typeof globalThis === \"object\") {\r\n    globalThis.regeneratorRuntime = runtime;\r\n  } else {\r\n    Function(\"r\", \"regeneratorRuntime = r\")(runtime);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./node_modules/@babel/runtime/regenerator/index.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _asyncToGenerator)\n/* harmony export */ });\nfunction asyncGeneratorStep(n, t, e, r, o, a, c) {\r\n  try {\r\n    var i = n[a](c),\r\n      u = i.value;\r\n  } catch (n) {\r\n    return void e(n);\r\n  }\r\n  i.done ? t(u) : Promise.resolve(u).then(r, o);\r\n}\r\nfunction _asyncToGenerator(n) {\r\n  return function () {\r\n    var t = this,\r\n      e = arguments;\r\n    return new Promise(function (r, o) {\r\n      var a = n.apply(t, e);\r\n      function _next(n) {\r\n        asyncGeneratorStep(a, r, o, _next, _throw, \"next\", n);\r\n      }\r\n      function _throw(n) {\r\n        asyncGeneratorStep(a, r, o, _next, _throw, \"throw\", n);\r\n      }\r\n      _next(void 0);\r\n    });\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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