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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_allBookmarks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/allBookmarks.js */ \"./src/modules/allBookmarks.js\");\n/* harmony import */ var _modules_close_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/close.js */ \"./src/modules/close.js\");\n/* harmony import */ var _modules_form_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/form.js */ \"./src/modules/form.js\");\n/* eslint-disable no-undef */\n\n\n\n\nlet allBookmarksData = [];\n\nconst autocompleteSearch = (query, list) => {\n  (0,_modules_close_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  query.addEventListener('input', () => {\n    (0,_modules_close_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    if (!query.value) return;\n    const suggestions = document.createElement('div');\n    suggestions.setAttribute('id', 'suggestions');\n    query.parentNode.appendChild(suggestions);\n\n    list.forEach((item) => {\n      if (item.url.toUpperCase().includes(query.value.toUpperCase())) {\n        const suggestion = document.createElement('ul');\n        const listItem = document.createElement('li');\n        listItem.innerHTML = item.url;\n        suggestion.appendChild(listItem);\n\n        listItem.addEventListener('click', () => {\n          query.value = listItem.innerHTML;\n          document.querySelector('#go').style.display = 'block';\n          (0,_modules_close_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        });\n        listItem.style.cursor = 'pointer';\n        suggestions.appendChild(suggestion);\n      }\n    });\n  });\n};\n\nchrome.bookmarks.getTree((bookmarks) => {\n  allBookmarksData = (0,_modules_allBookmarks_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(bookmarks);\n  autocompleteSearch(document.getElementById('input'), allBookmarksData);\n});\n\n(0,_modules_form_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n//# sourceURL=webpack://bookmark-manager/./src/index.js?");

/***/ }),

/***/ "./src/modules/allBookmarks.js":
/*!*************************************!*\
  !*** ./src/modules/allBookmarks.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getAllBookmarks = (bookmakrs) => {\n  const allBookmarks = [];\n  bookmakrs.forEach((bookmark) => {\n    if (bookmark.url) {\n      allBookmarks.push({\n        title: bookmark.title,\n        url: bookmark.url,\n      });\n    } else if (bookmark.children) {\n      const childBookmarks = getAllBookmarks(bookmark.children);\n      allBookmarks.push(...childBookmarks);\n    }\n  });\n  return allBookmarks;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAllBookmarks);\n\n//# sourceURL=webpack://bookmark-manager/./src/modules/allBookmarks.js?");

/***/ }),

/***/ "./src/modules/close.js":
/*!******************************!*\
  !*** ./src/modules/close.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst closeList = () => {\n  const suggestions = document.getElementById('suggestions');\n  if (suggestions) {\n    suggestions.parentNode.removeChild(suggestions);\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (closeList);\n\n//# sourceURL=webpack://bookmark-manager/./src/modules/close.js?");

/***/ }),

/***/ "./src/modules/form.js":
/*!*****************************!*\
  !*** ./src/modules/form.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable no-undef */\nconst searchForm = () => {\n  const submitBtn = document.getElementById('my-form');\n  submitBtn.addEventListener('submit', (event) => {\n    event.preventDefault();\n    const url = document.getElementById('input').value;\n    if (url !== '') {\n      chrome.tabs.create({ url });\n    }\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchForm);\n\n//# sourceURL=webpack://bookmark-manager/./src/modules/form.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;