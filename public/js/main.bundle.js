/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/kreativemente/Websites/tests/quartz/node_modules/webpack/buildin/global.js'\n    at Error (native)");

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: \n@import \"~normalize.css\";\n^\n      File to import not found or unreadable: /Users/kreativemente/Websites/tests/quartz/node_modules/normalize.css/normalize.\nParent style sheet: stdin\n      in /Users/kreativemente/Websites/tests/quartz/src/scss/styles.scss (line 1, column 1)\n    at runLoaders (/Users/kreativemente/Websites/tests/quartz/node_modules/webpack/lib/NormalModule.js:195:19)\n    at /Users/kreativemente/Websites/tests/quartz/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /Users/kreativemente/Websites/tests/quartz/node_modules/loader-runner/lib/LoaderRunner.js:230:18\n    at context.callback (/Users/kreativemente/Websites/tests/quartz/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.asyncSassJobQueue.push [as callback] (/Users/kreativemente/Websites/tests/quartz/node_modules/sass-loader/lib/loader.js:55:13)\n    at Object.<anonymous> (/Users/kreativemente/Websites/tests/quartz/node_modules/async/dist/async.js:2244:31)\n    at Object.callback (/Users/kreativemente/Websites/tests/quartz/node_modules/async/dist/async.js:906:16)\n    at options.error (/Users/kreativemente/Websites/tests/quartz/node_modules/node-sass/lib/index.js:294:32)");

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var $ = __webpack_require__(4);
global.jQuery = $;

var rSlides = __webpack_require__(5);
var videoJS = __webpack_require__(6);
var styles = __webpack_require__(20);

$(document).ready(function () {

  // Setup Slider
  $('.carousel__slider').responsiveSlides();
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/kreativemente/Websites/tests/quartz/node_modules/jquery/dist/jquery.js'\n    at Error (native)");

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/kreativemente/Websites/tests/quartz/node_modules/responsive-slides/responsiveslides.js'\n    at Error (native)");

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/kreativemente/Websites/tests/quartz/node_modules/video.js/dist/video.cjs.js'\n    at Error (native)");

/***/ })

/******/ });