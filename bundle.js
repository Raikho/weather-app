/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! assets/edit.svg */ "./src/assets/edit.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! assets/search.svg */ "./src/assets/search.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! assets/cancel.svg */ "./src/assets/cancel.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! assets/loading.svg */ "./src/assets/loading.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --bg: #164e63;\n    --bgLighter: #155e75;\n    --fg: #f0f9ff;\n\n    --icon: #bfdbfe;\n    --iconHover: #e0f2fe;\n    --iconActive: #028fc7;\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    margin: 0;\n\n    background-color: var(--bg);\n    color: var(--fg);\n    font-family: helvetica, sans-serif;\n    font-size: 18px;\n\n    display: grid;\n    grid-template-rows: 1fr 5fr;\n}\n\n/* ============================ HEADER ============================= */\n#header {\n    /* border: 1px dotted lightgray; */\n    background-color: var(--bgLighter);\n    box-shadow: 0px 5px 10px #0003;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.city-container {\n    display: flex;\n    padding: 10px;\n    gap: 20px;\n\n    align-items: center;\n}\n/* .city-container, .city-container>*{border: 1px dotted white;} */\n\n.input-container {\n    display: flex;\n    flex-direction: column;\n}\n\n.error {\n    align-self: start;\n\n    position: absolute;\n    padding-left: 10px;\n    padding-top: 2px;\n    font-size: 14px;\n    color: #ef4444aa;\n}\ninput {\n    height: 30px;\n    border-radius: 5px;\n    padding: 10px 10px 10px 10px;\n    font-size: 18px;\n    background-color: var(--iconHover);\n}\ninput:invalid {border-color: red;}\ninput:focus:invalid {outline-color: red;}\n/* input:invalid {border-: red;} */\n\n\n.city {\n    font-size: 24px;\n    padding: 5px;\n}\n\n.icon {\n    width: 30px;\n    height: 30px;\n    -webkit-mask-size: contain;\n    mask-size: contain;\n    background-color: var(--icon);\n}\n.icon.edit {\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n.icon.search {\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n.icon.cancel {\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n.icon.loading {\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n\n    animation: spin 2s linear 0s infinite normal;\n}\n@keyframes spin {\n    0% {transform: rotate(0deg);}\n    100% {transform: rotate(360deg);}\n}\n\n.icon:hover {background-color: var(--iconHover);}\n.icon:active {background-color: var(--iconActive);}\n\n/* ============================= MAIN ============================== */\n\n#main {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.middle-container {\n    /* border: 1px dotted lightgray; */\n    padding: 20px;\n\n    display: flex;\n    flex-direction: column;\n}\n.text {\n    display: flex;\n    justify-content: center;\n}\n\n.temp {\n    font-size: 64px;\n}\n\nimg {\n    margin-bottom: 40px;\n    /* border-color: 1px dotted white; */\n    width: clamp(100px, 30vmin, 1000px);\n    height: clamp(100px, 30vmin, 1000px);\n}\nimg.empty {\n    background-color: var(--icon);\n    -webkit-mask-size: contain;\n    mask-size: contain;\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,oBAAoB;IACpB,aAAa;;IAEb,eAAe;IACf,oBAAoB;IACpB,qBAAqB;AACzB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,SAAS;;IAET,2BAA2B;IAC3B,gBAAgB;IAChB,kCAAkC;IAClC,eAAe;;IAEf,aAAa;IACb,2BAA2B;AAC/B;;AAEA,sEAAsE;AACtE;IACI,kCAAkC;IAClC,kCAAkC;IAClC,8BAA8B;;IAE9B,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,SAAS;;IAET,mBAAmB;AACvB;AACA,kEAAkE;;AAElE;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;;IAEjB,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,YAAY;IACZ,kBAAkB;IAClB,4BAA4B;IAC5B,eAAe;IACf,kCAAkC;AACtC;AACA,eAAe,iBAAiB,CAAC;AACjC,qBAAqB,kBAAkB,CAAC;AACxC,kCAAkC;;;AAGlC;IACI,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,0BAA0B;IAC1B,kBAAkB;IAClB,6BAA6B;AACjC;AACA;IACI,2DAA0C;IAC1C,mDAAkC;AACtC;AACA;IACI,2DAA4C;IAC5C,mDAAoC;AACxC;AACA;IACI,2DAA4C;IAC5C,mDAAoC;AACxC;AACA;IACI,2DAA6C;IAC7C,mDAAqC;;IAErC,4CAA4C;AAChD;AACA;IACI,IAAI,uBAAuB,CAAC;IAC5B,MAAM,yBAAyB,CAAC;AACpC;;AAEA,aAAa,kCAAkC,CAAC;AAChD,cAAc,mCAAmC,CAAC;;AAElD,sEAAsE;;AAEtE;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,kCAAkC;IAClC,aAAa;;IAEb,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,mBAAmB;IACnB,oCAAoC;IACpC,mCAAmC;IACnC,oCAAoC;AACxC;AACA;IACI,6BAA6B;IAC7B,0BAA0B;IAC1B,kBAAkB;IAClB,2DAA6C;IAC7C,mDAAqC;AACzC","sourcesContent":[":root {\n    --bg: #164e63;\n    --bgLighter: #155e75;\n    --fg: #f0f9ff;\n\n    --icon: #bfdbfe;\n    --iconHover: #e0f2fe;\n    --iconActive: #028fc7;\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    margin: 0;\n\n    background-color: var(--bg);\n    color: var(--fg);\n    font-family: helvetica, sans-serif;\n    font-size: 18px;\n\n    display: grid;\n    grid-template-rows: 1fr 5fr;\n}\n\n/* ============================ HEADER ============================= */\n#header {\n    /* border: 1px dotted lightgray; */\n    background-color: var(--bgLighter);\n    box-shadow: 0px 5px 10px #0003;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.city-container {\n    display: flex;\n    padding: 10px;\n    gap: 20px;\n\n    align-items: center;\n}\n/* .city-container, .city-container>*{border: 1px dotted white;} */\n\n.input-container {\n    display: flex;\n    flex-direction: column;\n}\n\n.error {\n    align-self: start;\n\n    position: absolute;\n    padding-left: 10px;\n    padding-top: 2px;\n    font-size: 14px;\n    color: #ef4444aa;\n}\ninput {\n    height: 30px;\n    border-radius: 5px;\n    padding: 10px 10px 10px 10px;\n    font-size: 18px;\n    background-color: var(--iconHover);\n}\ninput:invalid {border-color: red;}\ninput:focus:invalid {outline-color: red;}\n/* input:invalid {border-: red;} */\n\n\n.city {\n    font-size: 24px;\n    padding: 5px;\n}\n\n.icon {\n    width: 30px;\n    height: 30px;\n    -webkit-mask-size: contain;\n    mask-size: contain;\n    background-color: var(--icon);\n}\n.icon.edit {\n    -webkit-mask-image: url('assets/edit.svg');\n    mask-image: url('assets/edit.svg');\n}\n.icon.search {\n    -webkit-mask-image: url('assets/search.svg');\n    mask-image: url('assets/search.svg');\n}\n.icon.cancel {\n    -webkit-mask-image: url('assets/cancel.svg');\n    mask-image: url('assets/cancel.svg');\n}\n.icon.loading {\n    -webkit-mask-image: url('assets/loading.svg');\n    mask-image: url('assets/loading.svg');\n\n    animation: spin 2s linear 0s infinite normal;\n}\n@keyframes spin {\n    0% {transform: rotate(0deg);}\n    100% {transform: rotate(360deg);}\n}\n\n.icon:hover {background-color: var(--iconHover);}\n.icon:active {background-color: var(--iconActive);}\n\n/* ============================= MAIN ============================== */\n\n#main {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.middle-container {\n    /* border: 1px dotted lightgray; */\n    padding: 20px;\n\n    display: flex;\n    flex-direction: column;\n}\n.text {\n    display: flex;\n    justify-content: center;\n}\n\n.temp {\n    font-size: 64px;\n}\n\nimg {\n    margin-bottom: 40px;\n    /* border-color: 1px dotted white; */\n    width: clamp(100px, 30vmin, 1000px);\n    height: clamp(100px, 30vmin, 1000px);\n}\nimg.empty {\n    background-color: var(--icon);\n    -webkit-mask-size: contain;\n    mask-size: contain;\n    -webkit-mask-image: url('assets/loading.svg');\n    mask-image: url('assets/loading.svg');\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const DOM = {};

DOM.clearNode = function(node) {
    while(node.hasChildNodes()) {
        node.removeChild(node.firstChild);
    }
}

DOM.createNode = function(parentNode, tag, classList, textContent) {
    let node = document.createElement(tag);
    if (classList)
        for (let cls of classList)
            node.classList.add(cls);
    node.textContent = textContent;
    parentNode.appendChild(node);
    return node;
}

DOM.createDiv = function(parentNode, classList, textContent) {
   return this.createNode(parentNode, 'div', classList, textContent)
}

DOM.createTextInput = function(parentNode, id, placeholder) {
    let inputNode = this.createNode(parentNode, 'input');
    inputNode.type = 'text';
    inputNode.id = id;
    inputNode.setAttribute('placeholder', placeholder);
    return inputNode;
}

DOM.createImage = function(parentNode, classList, src, alt) {
    let imageNode = this.createNode(parentNode, 'img', classList);
    if (src)
        imageNode.src = src;
    imageNode.alt = alt;
    return imageNode;
}

DOM.createIcon = function(parentNode, classList, src) {
    let iconNode = this.createNode(parentNode, 'object', classList);
    iconNode.setAttribute('type', 'image/svg+xml');
    iconNode.setAttribute('data', src)
    return iconNode;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOM);

/***/ }),

/***/ "./src/search.js":
/*!***********************!*\
  !*** ./src/search.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SearchManager)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _urlGen_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./urlGen.js */ "./src/urlGen.js");
/* harmony import */ var _weatherState_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weatherState.js */ "./src/weatherState.js");



const weatherKey = 'bba6f56f2dcd34db5581285bb884ee36';
const weatherDataBaseUrl = 'https://api.openweathermap.org/data/2.5/weather';
const weatherGeoBaseUrl = 'http://api.openweathermap.org/geo/1.0/direct';

let weatherDataUrl = new _urlGen_js__WEBPACK_IMPORTED_MODULE_1__["default"](weatherDataBaseUrl);
weatherDataUrl.addKey('appid', weatherKey);
weatherDataUrl.addKey('units', 'imperial');

let weatherGeoUrl = new _urlGen_js__WEBPACK_IMPORTED_MODULE_1__["default"](weatherGeoBaseUrl);
weatherGeoUrl.addKey('appid', weatherKey);




class SearchManager {
    constructor(node, weatherState) {
        this.node = node;
        this.state = 'state'; // found, search, retry, loading
        this.weatherState = new _weatherState_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.weatherState.write();

        _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].clearNode(this.node);
        this.updateFoundState();
    }

    updateSearchState() {
        this.state = 'search';
        _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].clearNode(this.node);

        const containerNode = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(this.node, ['city-container']);

        const errorNode = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(containerNode, ['error']);

        const inputNode = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createTextInput(containerNode, ['city-input'], 'Enter city:');
        inputNode.setAttribute('pattern', "[a-zA-Z ']+$");
        const iconNode = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(containerNode, ['icon', 'search']);
        const cancelNode = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(containerNode, ['icon', 'cancel']);
        cancelNode.addEventListener('click', this.updateFoundState.bind(this), {once: true});

        iconNode.addEventListener('click', async () => {
            let cityName = inputNode.value;
            if (!cityName) return;
            iconNode.classList.replace('search', 'loading');

            let queryPromise = queryCity(cityName, iconNode);
            let timeoutPromise = new Promise((_, reject) => {
                setTimeout(() => reject('timeout'), 1200);
            });
            let cancelPromise = new Promise((_, reject) => {
                cancelNode.addEventListener('click', () => reject('cancel'), {once: true});
            });

            try {
                const data = await Promise.race([queryPromise, timeoutPromise, cancelPromise]);
                console.log('race resolved, data result: ', data); // DEBUG

                if (this.state !='search') return;

                this.weatherState.update(data.weather, data.geo);
                console.log('new weather state: ', this.weatherState); // DEBUG
                this.updateFoundState();
            } catch(err) {
                console.log('race error: ', err);

                if (err === 'timeout')
                    errorNode.textContent = 'No response, try again later';
                else if (err === 'Not Found')
                    errorNode.textContent = 'City not found';

                iconNode.classList.replace('loading', 'search');
            }
        });


    }

    updateFoundState() {
        this.state = 'found';
        _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].clearNode(this.node);

        const containerNode = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(this.node, ['city-container']);
        const cityNode = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(containerNode, ['city'], this.weatherState.city);
        const editNode = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(containerNode, ['icon', 'edit']); // DEBUG, change back to edit

        this.weatherState.write();

        editNode.addEventListener('click', () => {
            this.updateSearchState();
        });
    }
}

async function queryCity(cityName) {
    return new Promise(async (resolve, reject) => {
        weatherGeoUrl.addKey('q', cityName);

        let geoResponse = await fetch(weatherGeoUrl.url, {mode: 'cors'});
        if (!geoResponse.ok)
            return reject('geocoding error 1: ' + geoResponse.statusText);

        let geoData = await geoResponse.json();
        if (!geoData[0])
            return reject('Not Found');
        console.log(`Geo data received, lat: ${geoData[0].lat}, lon: ${geoData[0].lon}, array: `, geoData); // DEBUG

        weatherDataUrl.addKey('lat', geoData[0].lat);
        weatherDataUrl.addKey('lon', geoData[0].lon);

        let response = await fetch(weatherDataUrl.url, {mode: 'cors'});
        if (!response.ok)
            return reject(response.statusText);

        let weatherData = await response.json();
        if (weatherData.cod != '200')
            return reject(weatherData.cod);

        resolve({geo: geoData[0], weather: weatherData});
    });
}

/***/ }),

/***/ "./src/urlGen.js":
/*!***********************!*\
  !*** ./src/urlGen.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UrlGen)
/* harmony export */ });
class UrlGen {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
        this.keyPairs = [];
    }
    addKey(key, value) {
        for (let pair of this.keyPairs) {
            if (pair.key === key) {
                pair.value = value;
                return;
            }
        }
        this.keyPairs.push({key, value});
    }
    get url() {
        let out = this.baseUrl;
        for (let i = 0; i < this.keyPairs.length; i++) {
            let key = this.keyPairs[i].key;
            let value = this.keyPairs[i].value;
            out += (i == 0) ? '?' : '&';
            out = out + key + '=' + value;
        }
        return out;
    }
}


/***/ }),

/***/ "./src/weatherState.js":
/*!*****************************!*\
  !*** ./src/weatherState.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WeatherState)
/* harmony export */ });
/* harmony import */ var _assets_cloudy_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/cloudy.png */ "./src/assets/cloudy.png");
/* harmony import */ var _assets_rain_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/rain.png */ "./src/assets/rain.png");
/* harmony import */ var _assets_shower_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/shower.png */ "./src/assets/shower.png");
/* harmony import */ var _assets_snow_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/snow.png */ "./src/assets/snow.png");
/* harmony import */ var _assets_sunny_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/sunny.png */ "./src/assets/sunny.png");
/* harmony import */ var _assets_thunderstorm_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/thunderstorm.png */ "./src/assets/thunderstorm.png");
/* harmony import */ var _assets_night_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/night.png */ "./src/assets/night.png");
/* harmony import */ var _assets_partyCloudy_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/partyCloudy.png */ "./src/assets/partyCloudy.png");
/* harmony import */ var _assets_loading_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/loading.svg */ "./src/assets/loading.svg");










class WeatherState {
    constructor() {
        this.temp = {
            value: null,
            node: document.querySelector('.temp'),
            update: function(data) {this.value = Math.round(Number(data.main.temp))},
            write: function() {
                if (!this.value) return;
                this.node.textContent = this.value.toString() + '°F';
            },
        };
        this.feelsLike = {
            value: null,
            node: document.querySelector('.feels-like'),
            update: function(data) {this.value = Math.round(Number(data.main.feels_like))},
            write: function() {
                if (!this.value) return;
                this.node.textContent = 'feels like ' + this.value.toString() + '°F';
            },
        };
        // this.windSpeed = {
        //     value: 'hey',
        //     node: document.querySelector('.wind'),
        //     update: function(data) {this.value = data.wind.speed},
        //     write: function() {
        //         if (!this.value) return;
        //         this.node.textContent = 'wind: ' + this.value + ' mph';
        //     },
        // };
        this.desc = {
            value: null,
            node: document.querySelector('.desc'),
            update: function(data) {this.value = data.weather[0].description},
            write: function() {
                if (!this.value){
                    this.node.textContent = 'No location set...';
                    return;
                }
                this.node.textContent = this.value;
            },
        };
        this.city = {
            value: 'Enter a city:',
            node: document.querySelector('.city'),
            update: function(_, geoData) {
                console.log('geodata: ', geoData); // DEBUG
                let state = geoData.state;
                let country = geoData.country;
                let city = geoData.name;

                if (country === 'US' && state)
                    this.value = `${city}, ${state}`;
                else if (country != 'US')
                    this.value = `${city}, ${country}`;
            },
            write: function() {
                this.node = document.querySelector('.city');
                this.node.textContent = this.value;
            },
        };
        this.icon = {
            value: '',
            node: document.querySelector('img'),
            update: function(data) {this.value = data.weather[0].icon},
            write: function() {
                if (this.value) {
                    this.node.classList.remove('empty');
                    this.node.src = getWeatherIcon(this.value)
                } else {
                    this.node.classList.add('empty');
                }
            },
        };
    }
    update(weatherData, geoData) {
        for (let prop in this)
            this[prop].update(weatherData, geoData);
    }
    write() {
        for (let prop in this)
            this[prop].write();
    }
}

function getWeatherIcon(iconCode) {
    switch (iconCode) {
        case '01d': return _assets_sunny_png__WEBPACK_IMPORTED_MODULE_4__; break;
        case '01n': return _assets_night_png__WEBPACK_IMPORTED_MODULE_6__; break;
        case '02d':
        case '03d':
        case '02n':
        case '03n': return _assets_partyCloudy_png__WEBPACK_IMPORTED_MODULE_7__; break;
        case '04d':
        case '04n':
        case '50d':
        case '50n': return _assets_cloudy_png__WEBPACK_IMPORTED_MODULE_0__; break;
        case '09d':
        case '09n': return _assets_shower_png__WEBPACK_IMPORTED_MODULE_2__; break;
        case '10d':
        case '10n': return _assets_rain_png__WEBPACK_IMPORTED_MODULE_1__; break;
        case '11d':
        case '11n': return _assets_thunderstorm_png__WEBPACK_IMPORTED_MODULE_5__; break;
        case '13d':
        case '13n': return _assets_snow_png__WEBPACK_IMPORTED_MODULE_3__; break;
        // default: return loadingIcon; break;
    }
}

/***/ }),

/***/ "./src/assets/cancel.svg":
/*!*******************************!*\
  !*** ./src/assets/cancel.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cancel.svg";

/***/ }),

/***/ "./src/assets/cloudy.png":
/*!*******************************!*\
  !*** ./src/assets/cloudy.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cloudy.png";

/***/ }),

/***/ "./src/assets/edit.svg":
/*!*****************************!*\
  !*** ./src/assets/edit.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "edit.svg";

/***/ }),

/***/ "./src/assets/loading.svg":
/*!********************************!*\
  !*** ./src/assets/loading.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "loading.svg";

/***/ }),

/***/ "./src/assets/night.png":
/*!******************************!*\
  !*** ./src/assets/night.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "night.png";

/***/ }),

/***/ "./src/assets/partyCloudy.png":
/*!************************************!*\
  !*** ./src/assets/partyCloudy.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "partyCloudy.png";

/***/ }),

/***/ "./src/assets/rain.png":
/*!*****************************!*\
  !*** ./src/assets/rain.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "rain.png";

/***/ }),

/***/ "./src/assets/search.svg":
/*!*******************************!*\
  !*** ./src/assets/search.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "search.svg";

/***/ }),

/***/ "./src/assets/shower.png":
/*!*******************************!*\
  !*** ./src/assets/shower.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "shower.png";

/***/ }),

/***/ "./src/assets/snow.png":
/*!*****************************!*\
  !*** ./src/assets/snow.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "snow.png";

/***/ }),

/***/ "./src/assets/sunny.png":
/*!******************************!*\
  !*** ./src/assets/sunny.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "sunny.png";

/***/ }),

/***/ "./src/assets/thunderstorm.png":
/*!*************************************!*\
  !*** ./src/assets/thunderstorm.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "thunderstorm.png";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _urlGen_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./urlGen.js */ "./src/urlGen.js");
/* harmony import */ var _search_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.js */ "./src/search.js");
/* harmony import */ var _assets_cloudy_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/cloudy.png */ "./src/assets/cloudy.png");
/* harmony import */ var _assets_rain_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/rain.png */ "./src/assets/rain.png");
/* harmony import */ var _assets_shower_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/shower.png */ "./src/assets/shower.png");
/* harmony import */ var _assets_snow_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/snow.png */ "./src/assets/snow.png");
/* harmony import */ var _assets_sunny_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/sunny.png */ "./src/assets/sunny.png");
/* harmony import */ var _assets_thunderstorm_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/thunderstorm.png */ "./src/assets/thunderstorm.png");
/* harmony import */ var _assets_night_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/night.png */ "./src/assets/night.png");
/* harmony import */ var _assets_partyCloudy_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/partyCloudy.png */ "./src/assets/partyCloudy.png");














// ======================= WEBSITE DATA ===============================
const weatherKey = 'bba6f56f2dcd34db5581285bb884ee36';
const weatherBaseUrl = 'https://api.openweathermap.org/data/2.5/weather';

let weatherUrl = new _urlGen_js__WEBPACK_IMPORTED_MODULE_1__["default"](weatherBaseUrl);
weatherUrl.addKey('appid', weatherKey);
weatherUrl.addKey('units', 'imperial');

// ========================== SETUP ===================================

let state = {
    city: 'New York City',
    temp: null, // kelvin
    feelsLike: null,
    windSpeed: null, // meter/sec
    clouds: null, // % coverage
    desc: 'empty',
    icon: '01d', // weather icon (01-04,09-11,13,50), (d|n)
    // 1: clear sky, 2: few cloud, 3: scattered clouds, 4: broken clouds,
    // 9: shower rain, 10: rain, 11: thunderstorm, 13: snow, 50: mist;

    printTemp() {return this.temp.toString() + '°F';},
    printFeelsLike() {return 'feels like ' + this.feelsLike.toString() + '°F';},
    printClouds() {return 'cloud coverage: ' + this.clouds + '%'},
    printWind() {return 'wind: ' + this.windSpeed + ' mph';},

    update(data) {
        this.temp = Math.round(Number(data.main.temp));
        this.feelsLike = Math.round(Number(data.main.feels_like));
        this.windSpeed = Math.round(data.wind.speed);
        this.desc = data.weather[0].description;
        this.city = data.name;
        this.icon = data.weather[0].icon;
        console.log('current state updated: ', this);

        this.write();
    },

    write() {

        const tempNode = document.querySelector('.temp');
        const feelsLikeNode = document.querySelector('.feels-like');
        const windNode = document.querySelector('.wind');
        const descNode = document.querySelector('.desc');
        // TODO: re integrate city node
        // const cityNode = document.querySelector('.city');
        const imgNode = document.querySelector('img');

        imgNode.src = getWeatherIcon(this.icon);

        if (!this.temp) {
            return;
        }

        tempNode.textContent = this.printTemp();
        feelsLikeNode.textContent = this.printFeelsLike();
        windNode.textContent = this.printWind();
        descNode.textContent = this.desc;
        // cityNode.textContent = this.city;
    },
};

let searchManager = new _search_js__WEBPACK_IMPORTED_MODULE_2__["default"](document.getElementById('header'), state);


// ======================== functions =================================
async function queryCity(cityName) {
    weatherUrl.addKey('q', cityName);
    try {
        await new Promise(resolve => setTimeout(resolve, 300)); // DEBUG
        let response = await fetch(weatherUrl.url, {mode: 'cors'});
        if (!response.ok)
            throw new Error(response.statusText);
        let json = await response.json();
        if (json.cod != '200')
            throw new Error(json.cod);
        updateWeatherState(json);
        console.log('weather json: ', json); // DEBUG
    } catch(err) {
        console.log('An error occured while fetching: ', err);
    }
}

function updateWeatherState(data) {
    state.temp = Math.round(Number(data.main.temp));
    state.feelsLike = Math.round(Number(data.main.feels_like));
    state.windSpeed = Math.round(data.wind.speed);
    state.desc = data.weather[0].description;
    state.city = data.name;
    state.icon = data.weather[0].icon;
    writeWeatherState();
}

function writeWeatherState() {
    const tempNode = document.querySelector('.temp');
    const feelsLikeNode = document.querySelector('.feels-like');
    const windNode = document.querySelector('.wind');
    const descNode = document.querySelector('.desc');
    const cityNode = document.querySelector('.city');
    const imgNode = document.querySelector('img');

    tempNode.textContent = state.printTemp();
    feelsLikeNode.textContent = state.printFeelsLike();
    windNode.textContent = state.printWind();
    descNode.textContent = state.desc;
    cityNode.textContent = state.city;

    imgNode.src = getWeatherIcon(state.icon);
}

// =========================== INIT ===================================
// queryCity('New York City');




// ========================== DEBUG ===================================
console.log(weatherUrl.url, weatherUrl);

// ========================== CREDITS ==================================
// Sunny
// <a href="https://www.flaticon.com/free-icons/sunny" title="sunny icons">Sunny icons created by justicon - Flaticon</a>
// Thudnerstorm
// <a href="https://www.flaticon.com/free-icons/thunderstorm" title="thunderstorm icons">Thunderstorm icons created by justicon - Flaticon</a>
// Shower
// <a href="https://www.flaticon.com/free-icons/rain" title="rain icons">Rain icons created by justicon - Flaticon</a>
// Rain
// <a href="https://www.flaticon.com/free-icons/rain" title="rain icons">Rain icons created by justicon - Flaticon</a>
// Cloudy
// <a href="https://www.flaticon.com/free-icons/cloud" title="cloud icons">Cloud icons created by justicon - Flaticon</a>
// Snow
// <a href="https://www.flaticon.com/free-icons/snowfall" title="snowfall icons">Snowfall icons created by justicon - Flaticon</a>
// Night
// <a href="https://www.flaticon.com/free-icons/clear" title="clear icons">Clear icons created by justicon - Flaticon</a>
// Party Cloudy
// <a href="https://www.flaticon.com/free-icons/cloudy" title="cloudy icons">Cloudy icons created by justicon - Flaticon</a>
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eURBQXlEO0FBQy9FLG1CQUFtQiw4Q0FBOEM7QUFDakUsaUJBQWlCLDJDQUEyQzs7QUFFNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsd0JBQXdCLGtEQUFhOzs7QUFHckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0U7QUFDaEUsb0RBQW9ELGFBQWE7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7OztBQUtBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0SCIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc2VhcmNoLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3VybEdlbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy93ZWF0aGVyU3RhdGUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiYXNzZXRzL2VkaXQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiYXNzZXRzL3NlYXJjaC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCJhc3NldHMvY2FuY2VsLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcImFzc2V0cy9sb2FkaW5nLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1iZzogIzE2NGU2MztcXG4gICAgLS1iZ0xpZ2h0ZXI6ICMxNTVlNzU7XFxuICAgIC0tZmc6ICNmMGY5ZmY7XFxuXFxuICAgIC0taWNvbjogI2JmZGJmZTtcXG4gICAgLS1pY29uSG92ZXI6ICNlMGYyZmU7XFxuICAgIC0taWNvbkFjdGl2ZTogIzAyOGZjNztcXG59XFxuXFxuYm9keSB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZyk7XFxuICAgIGNvbG9yOiB2YXIoLS1mZyk7XFxuICAgIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNWZyO1xcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09IEhFQURFUiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiNoZWFkZXIge1xcbiAgICAvKiBib3JkZXI6IDFweCBkb3R0ZWQgbGlnaHRncmF5OyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0xpZ2h0ZXIpO1xcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDEwcHggIzAwMDM7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2l0eS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBnYXA6IDIwcHg7XFxuXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi8qIC5jaXR5LWNvbnRhaW5lciwgLmNpdHktY29udGFpbmVyPip7Ym9yZGVyOiAxcHggZG90dGVkIHdoaXRlO30gKi9cXG5cXG4uaW5wdXQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmVycm9yIHtcXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGNvbG9yOiAjZWY0NDQ0YWE7XFxufVxcbmlucHV0IHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taWNvbkhvdmVyKTtcXG59XFxuaW5wdXQ6aW52YWxpZCB7Ym9yZGVyLWNvbG9yOiByZWQ7fVxcbmlucHV0OmZvY3VzOmludmFsaWQge291dGxpbmUtY29sb3I6IHJlZDt9XFxuLyogaW5wdXQ6aW52YWxpZCB7Ym9yZGVyLTogcmVkO30gKi9cXG5cXG5cXG4uY2l0eSB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uaWNvbiB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIC13ZWJraXQtbWFzay1zaXplOiBjb250YWluO1xcbiAgICBtYXNrLXNpemU6IGNvbnRhaW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWljb24pO1xcbn1cXG4uaWNvbi5lZGl0IHtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBtYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG4uaWNvbi5zZWFyY2gge1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIG1hc2staW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcbi5pY29uLmNhbmNlbCB7XFxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gICAgbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG59XFxuLmljb24ubG9hZGluZyB7XFxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG4gICAgbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG5cXG4gICAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciAwcyBpbmZpbml0ZSBub3JtYWw7XFxufVxcbkBrZXlmcmFtZXMgc3BpbiB7XFxuICAgIDAlIHt0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTt9XFxuICAgIDEwMCUge3RyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7fVxcbn1cXG5cXG4uaWNvbjpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogdmFyKC0taWNvbkhvdmVyKTt9XFxuLmljb246YWN0aXZlIHtiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pY29uQWN0aXZlKTt9XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gTUFJTiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4jbWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWlkZGxlLWNvbnRhaW5lciB7XFxuICAgIC8qIGJvcmRlcjogMXB4IGRvdHRlZCBsaWdodGdyYXk7ICovXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi50ZXh0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50ZW1wIHtcXG4gICAgZm9udC1zaXplOiA2NHB4O1xcbn1cXG5cXG5pbWcge1xcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbiAgICAvKiBib3JkZXItY29sb3I6IDFweCBkb3R0ZWQgd2hpdGU7ICovXFxuICAgIHdpZHRoOiBjbGFtcCgxMDBweCwgMzB2bWluLCAxMDAwcHgpO1xcbiAgICBoZWlnaHQ6IGNsYW1wKDEwMHB4LCAzMHZtaW4sIDEwMDBweCk7XFxufVxcbmltZy5lbXB0eSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWljb24pO1xcbiAgICAtd2Via2l0LW1hc2stc2l6ZTogY29udGFpbjtcXG4gICAgbWFzay1zaXplOiBjb250YWluO1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxuICAgIG1hc2staW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGFBQWE7O0lBRWIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLFNBQVM7O0lBRVQsMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQixrQ0FBa0M7SUFDbEMsZUFBZTs7SUFFZixhQUFhO0lBQ2IsMkJBQTJCO0FBQy9COztBQUVBLHNFQUFzRTtBQUN0RTtJQUNJLGtDQUFrQztJQUNsQyxrQ0FBa0M7SUFDbEMsOEJBQThCOztJQUU5QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLFNBQVM7O0lBRVQsbUJBQW1CO0FBQ3ZCO0FBQ0Esa0VBQWtFOztBQUVsRTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQkFBaUI7O0lBRWpCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLGVBQWU7SUFDZixrQ0FBa0M7QUFDdEM7QUFDQSxlQUFlLGlCQUFpQixDQUFDO0FBQ2pDLHFCQUFxQixrQkFBa0IsQ0FBQztBQUN4QyxrQ0FBa0M7OztBQUdsQztJQUNJLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksMkRBQTBDO0lBQzFDLG1EQUFrQztBQUN0QztBQUNBO0lBQ0ksMkRBQTRDO0lBQzVDLG1EQUFvQztBQUN4QztBQUNBO0lBQ0ksMkRBQTRDO0lBQzVDLG1EQUFvQztBQUN4QztBQUNBO0lBQ0ksMkRBQTZDO0lBQzdDLG1EQUFxQzs7SUFFckMsNENBQTRDO0FBQ2hEO0FBQ0E7SUFDSSxJQUFJLHVCQUF1QixDQUFDO0lBQzVCLE1BQU0seUJBQXlCLENBQUM7QUFDcEM7O0FBRUEsYUFBYSxrQ0FBa0MsQ0FBQztBQUNoRCxjQUFjLG1DQUFtQyxDQUFDOztBQUVsRCxzRUFBc0U7O0FBRXRFO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsYUFBYTs7SUFFYixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixvQ0FBb0M7SUFDcEMsbUNBQW1DO0lBQ25DLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsMkRBQTZDO0lBQzdDLG1EQUFxQztBQUN6Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tYmc6ICMxNjRlNjM7XFxuICAgIC0tYmdMaWdodGVyOiAjMTU1ZTc1O1xcbiAgICAtLWZnOiAjZjBmOWZmO1xcblxcbiAgICAtLWljb246ICNiZmRiZmU7XFxuICAgIC0taWNvbkhvdmVyOiAjZTBmMmZlO1xcbiAgICAtLWljb25BY3RpdmU6ICMwMjhmYzc7XFxufVxcblxcbmJvZHkge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG1hcmdpbjogMDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmcpO1xcbiAgICBjb2xvcjogdmFyKC0tZmcpO1xcbiAgICBmb250LWZhbWlseTogaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDVmcjtcXG59XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PSBIRUFERVIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4jaGVhZGVyIHtcXG4gICAgLyogYm9yZGVyOiAxcHggZG90dGVkIGxpZ2h0Z3JheTsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdMaWdodGVyKTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCAxMHB4ICMwMDAzO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNpdHktY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZ2FwOiAyMHB4O1xcblxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4vKiAuY2l0eS1jb250YWluZXIsIC5jaXR5LWNvbnRhaW5lcj4qe2JvcmRlcjogMXB4IGRvdHRlZCB3aGl0ZTt9ICovXFxuXFxuLmlucHV0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5lcnJvciB7XFxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcblxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgcGFkZGluZy10b3A6IDJweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBjb2xvcjogI2VmNDQ0NGFhO1xcbn1cXG5pbnB1dCB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWljb25Ib3Zlcik7XFxufVxcbmlucHV0OmludmFsaWQge2JvcmRlci1jb2xvcjogcmVkO31cXG5pbnB1dDpmb2N1czppbnZhbGlkIHtvdXRsaW5lLWNvbG9yOiByZWQ7fVxcbi8qIGlucHV0OmludmFsaWQge2JvcmRlci06IHJlZDt9ICovXFxuXFxuXFxuLmNpdHkge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLmljb24ge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAtd2Via2l0LW1hc2stc2l6ZTogY29udGFpbjtcXG4gICAgbWFzay1zaXplOiBjb250YWluO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pY29uKTtcXG59XFxuLmljb24uZWRpdCB7XFxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKCdhc3NldHMvZWRpdC5zdmcnKTtcXG4gICAgbWFzay1pbWFnZTogdXJsKCdhc3NldHMvZWRpdC5zdmcnKTtcXG59XFxuLmljb24uc2VhcmNoIHtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoJ2Fzc2V0cy9zZWFyY2guc3ZnJyk7XFxuICAgIG1hc2staW1hZ2U6IHVybCgnYXNzZXRzL3NlYXJjaC5zdmcnKTtcXG59XFxuLmljb24uY2FuY2VsIHtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoJ2Fzc2V0cy9jYW5jZWwuc3ZnJyk7XFxuICAgIG1hc2staW1hZ2U6IHVybCgnYXNzZXRzL2NhbmNlbC5zdmcnKTtcXG59XFxuLmljb24ubG9hZGluZyB7XFxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKCdhc3NldHMvbG9hZGluZy5zdmcnKTtcXG4gICAgbWFzay1pbWFnZTogdXJsKCdhc3NldHMvbG9hZGluZy5zdmcnKTtcXG5cXG4gICAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciAwcyBpbmZpbml0ZSBub3JtYWw7XFxufVxcbkBrZXlmcmFtZXMgc3BpbiB7XFxuICAgIDAlIHt0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTt9XFxuICAgIDEwMCUge3RyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7fVxcbn1cXG5cXG4uaWNvbjpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogdmFyKC0taWNvbkhvdmVyKTt9XFxuLmljb246YWN0aXZlIHtiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pY29uQWN0aXZlKTt9XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gTUFJTiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4jbWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWlkZGxlLWNvbnRhaW5lciB7XFxuICAgIC8qIGJvcmRlcjogMXB4IGRvdHRlZCBsaWdodGdyYXk7ICovXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi50ZXh0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50ZW1wIHtcXG4gICAgZm9udC1zaXplOiA2NHB4O1xcbn1cXG5cXG5pbWcge1xcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbiAgICAvKiBib3JkZXItY29sb3I6IDFweCBkb3R0ZWQgd2hpdGU7ICovXFxuICAgIHdpZHRoOiBjbGFtcCgxMDBweCwgMzB2bWluLCAxMDAwcHgpO1xcbiAgICBoZWlnaHQ6IGNsYW1wKDEwMHB4LCAzMHZtaW4sIDEwMDBweCk7XFxufVxcbmltZy5lbXB0eSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWljb24pO1xcbiAgICAtd2Via2l0LW1hc2stc2l6ZTogY29udGFpbjtcXG4gICAgbWFzay1zaXplOiBjb250YWluO1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybCgnYXNzZXRzL2xvYWRpbmcuc3ZnJyk7XFxuICAgIG1hc2staW1hZ2U6IHVybCgnYXNzZXRzL2xvYWRpbmcuc3ZnJyk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBET00gPSB7fTtcblxuRE9NLmNsZWFyTm9kZSA9IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICB3aGlsZShub2RlLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICBub2RlLnJlbW92ZUNoaWxkKG5vZGUuZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuXG5ET00uY3JlYXRlTm9kZSA9IGZ1bmN0aW9uKHBhcmVudE5vZGUsIHRhZywgY2xhc3NMaXN0LCB0ZXh0Q29udGVudCkge1xuICAgIGxldCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIGlmIChjbGFzc0xpc3QpXG4gICAgICAgIGZvciAobGV0IGNscyBvZiBjbGFzc0xpc3QpXG4gICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoY2xzKTtcbiAgICBub2RlLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChub2RlKTtcbiAgICByZXR1cm4gbm9kZTtcbn1cblxuRE9NLmNyZWF0ZURpdiA9IGZ1bmN0aW9uKHBhcmVudE5vZGUsIGNsYXNzTGlzdCwgdGV4dENvbnRlbnQpIHtcbiAgIHJldHVybiB0aGlzLmNyZWF0ZU5vZGUocGFyZW50Tm9kZSwgJ2RpdicsIGNsYXNzTGlzdCwgdGV4dENvbnRlbnQpXG59XG5cbkRPTS5jcmVhdGVUZXh0SW5wdXQgPSBmdW5jdGlvbihwYXJlbnROb2RlLCBpZCwgcGxhY2Vob2xkZXIpIHtcbiAgICBsZXQgaW5wdXROb2RlID0gdGhpcy5jcmVhdGVOb2RlKHBhcmVudE5vZGUsICdpbnB1dCcpO1xuICAgIGlucHV0Tm9kZS50eXBlID0gJ3RleHQnO1xuICAgIGlucHV0Tm9kZS5pZCA9IGlkO1xuICAgIGlucHV0Tm9kZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgcGxhY2Vob2xkZXIpO1xuICAgIHJldHVybiBpbnB1dE5vZGU7XG59XG5cbkRPTS5jcmVhdGVJbWFnZSA9IGZ1bmN0aW9uKHBhcmVudE5vZGUsIGNsYXNzTGlzdCwgc3JjLCBhbHQpIHtcbiAgICBsZXQgaW1hZ2VOb2RlID0gdGhpcy5jcmVhdGVOb2RlKHBhcmVudE5vZGUsICdpbWcnLCBjbGFzc0xpc3QpO1xuICAgIGlmIChzcmMpXG4gICAgICAgIGltYWdlTm9kZS5zcmMgPSBzcmM7XG4gICAgaW1hZ2VOb2RlLmFsdCA9IGFsdDtcbiAgICByZXR1cm4gaW1hZ2VOb2RlO1xufVxuXG5ET00uY3JlYXRlSWNvbiA9IGZ1bmN0aW9uKHBhcmVudE5vZGUsIGNsYXNzTGlzdCwgc3JjKSB7XG4gICAgbGV0IGljb25Ob2RlID0gdGhpcy5jcmVhdGVOb2RlKHBhcmVudE5vZGUsICdvYmplY3QnLCBjbGFzc0xpc3QpO1xuICAgIGljb25Ob2RlLnNldEF0dHJpYnV0ZSgndHlwZScsICdpbWFnZS9zdmcreG1sJyk7XG4gICAgaWNvbk5vZGUuc2V0QXR0cmlidXRlKCdkYXRhJywgc3JjKVxuICAgIHJldHVybiBpY29uTm9kZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRE9NOyIsImltcG9ydCBET00gZnJvbSAnLi9kb20uanMnXG5cbmltcG9ydCBVcmxHZW4gZnJvbSAnLi91cmxHZW4uanMnO1xuY29uc3Qgd2VhdGhlcktleSA9ICdiYmE2ZjU2ZjJkY2QzNGRiNTU4MTI4NWJiODg0ZWUzNic7XG5jb25zdCB3ZWF0aGVyRGF0YUJhc2VVcmwgPSAnaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXInO1xuY29uc3Qgd2VhdGhlckdlb0Jhc2VVcmwgPSAnaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3QnO1xuXG5sZXQgd2VhdGhlckRhdGFVcmwgPSBuZXcgVXJsR2VuKHdlYXRoZXJEYXRhQmFzZVVybCk7XG53ZWF0aGVyRGF0YVVybC5hZGRLZXkoJ2FwcGlkJywgd2VhdGhlcktleSk7XG53ZWF0aGVyRGF0YVVybC5hZGRLZXkoJ3VuaXRzJywgJ2ltcGVyaWFsJyk7XG5cbmxldCB3ZWF0aGVyR2VvVXJsID0gbmV3IFVybEdlbih3ZWF0aGVyR2VvQmFzZVVybCk7XG53ZWF0aGVyR2VvVXJsLmFkZEtleSgnYXBwaWQnLCB3ZWF0aGVyS2V5KTtcblxuXG5pbXBvcnQgV2VhdGhlclN0YXRlIGZyb20gJy4vd2VhdGhlclN0YXRlLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3Iobm9kZSwgd2VhdGhlclN0YXRlKSB7XG4gICAgICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgICAgIHRoaXMuc3RhdGUgPSAnc3RhdGUnOyAvLyBmb3VuZCwgc2VhcmNoLCByZXRyeSwgbG9hZGluZ1xuICAgICAgICB0aGlzLndlYXRoZXJTdGF0ZSA9IG5ldyBXZWF0aGVyU3RhdGUoKTtcbiAgICAgICAgdGhpcy53ZWF0aGVyU3RhdGUud3JpdGUoKTtcblxuICAgICAgICBET00uY2xlYXJOb2RlKHRoaXMubm9kZSk7XG4gICAgICAgIHRoaXMudXBkYXRlRm91bmRTdGF0ZSgpO1xuICAgIH1cblxuICAgIHVwZGF0ZVNlYXJjaFN0YXRlKCkge1xuICAgICAgICB0aGlzLnN0YXRlID0gJ3NlYXJjaCc7XG4gICAgICAgIERPTS5jbGVhck5vZGUodGhpcy5ub2RlKTtcblxuICAgICAgICBjb25zdCBjb250YWluZXJOb2RlID0gRE9NLmNyZWF0ZURpdih0aGlzLm5vZGUsIFsnY2l0eS1jb250YWluZXInXSk7XG5cbiAgICAgICAgY29uc3QgZXJyb3JOb2RlID0gRE9NLmNyZWF0ZURpdihjb250YWluZXJOb2RlLCBbJ2Vycm9yJ10pO1xuXG4gICAgICAgIGNvbnN0IGlucHV0Tm9kZSA9IERPTS5jcmVhdGVUZXh0SW5wdXQoY29udGFpbmVyTm9kZSwgWydjaXR5LWlucHV0J10sICdFbnRlciBjaXR5OicpO1xuICAgICAgICBpbnB1dE5vZGUuc2V0QXR0cmlidXRlKCdwYXR0ZXJuJywgXCJbYS16QS1aICddKyRcIik7XG4gICAgICAgIGNvbnN0IGljb25Ob2RlID0gRE9NLmNyZWF0ZURpdihjb250YWluZXJOb2RlLCBbJ2ljb24nLCAnc2VhcmNoJ10pO1xuICAgICAgICBjb25zdCBjYW5jZWxOb2RlID0gRE9NLmNyZWF0ZURpdihjb250YWluZXJOb2RlLCBbJ2ljb24nLCAnY2FuY2VsJ10pO1xuICAgICAgICBjYW5jZWxOb2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy51cGRhdGVGb3VuZFN0YXRlLmJpbmQodGhpcyksIHtvbmNlOiB0cnVlfSk7XG5cbiAgICAgICAgaWNvbk5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgY2l0eU5hbWUgPSBpbnB1dE5vZGUudmFsdWU7XG4gICAgICAgICAgICBpZiAoIWNpdHlOYW1lKSByZXR1cm47XG4gICAgICAgICAgICBpY29uTm9kZS5jbGFzc0xpc3QucmVwbGFjZSgnc2VhcmNoJywgJ2xvYWRpbmcnKTtcblxuICAgICAgICAgICAgbGV0IHF1ZXJ5UHJvbWlzZSA9IHF1ZXJ5Q2l0eShjaXR5TmFtZSwgaWNvbk5vZGUpO1xuICAgICAgICAgICAgbGV0IHRpbWVvdXRQcm9taXNlID0gbmV3IFByb21pc2UoKF8sIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gcmVqZWN0KCd0aW1lb3V0JyksIDEyMDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBsZXQgY2FuY2VsUHJvbWlzZSA9IG5ldyBQcm9taXNlKChfLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBjYW5jZWxOb2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcmVqZWN0KCdjYW5jZWwnKSwge29uY2U6IHRydWV9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBQcm9taXNlLnJhY2UoW3F1ZXJ5UHJvbWlzZSwgdGltZW91dFByb21pc2UsIGNhbmNlbFByb21pc2VdKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmFjZSByZXNvbHZlZCwgZGF0YSByZXN1bHQ6ICcsIGRhdGEpOyAvLyBERUJVR1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT0nc2VhcmNoJykgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgdGhpcy53ZWF0aGVyU3RhdGUudXBkYXRlKGRhdGEud2VhdGhlciwgZGF0YS5nZW8pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCduZXcgd2VhdGhlciBzdGF0ZTogJywgdGhpcy53ZWF0aGVyU3RhdGUpOyAvLyBERUJVR1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRm91bmRTdGF0ZSgpO1xuICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmFjZSBlcnJvcjogJywgZXJyKTtcblxuICAgICAgICAgICAgICAgIGlmIChlcnIgPT09ICd0aW1lb3V0JylcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JOb2RlLnRleHRDb250ZW50ID0gJ05vIHJlc3BvbnNlLCB0cnkgYWdhaW4gbGF0ZXInO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGVyciA9PT0gJ05vdCBGb3VuZCcpXG4gICAgICAgICAgICAgICAgICAgIGVycm9yTm9kZS50ZXh0Q29udGVudCA9ICdDaXR5IG5vdCBmb3VuZCc7XG5cbiAgICAgICAgICAgICAgICBpY29uTm9kZS5jbGFzc0xpc3QucmVwbGFjZSgnbG9hZGluZycsICdzZWFyY2gnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cblxuICAgIH1cblxuICAgIHVwZGF0ZUZvdW5kU3RhdGUoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSAnZm91bmQnO1xuICAgICAgICBET00uY2xlYXJOb2RlKHRoaXMubm9kZSk7XG5cbiAgICAgICAgY29uc3QgY29udGFpbmVyTm9kZSA9IERPTS5jcmVhdGVEaXYodGhpcy5ub2RlLCBbJ2NpdHktY29udGFpbmVyJ10pO1xuICAgICAgICBjb25zdCBjaXR5Tm9kZSA9IERPTS5jcmVhdGVEaXYoY29udGFpbmVyTm9kZSwgWydjaXR5J10sIHRoaXMud2VhdGhlclN0YXRlLmNpdHkpO1xuICAgICAgICBjb25zdCBlZGl0Tm9kZSA9IERPTS5jcmVhdGVEaXYoY29udGFpbmVyTm9kZSwgWydpY29uJywgJ2VkaXQnXSk7IC8vIERFQlVHLCBjaGFuZ2UgYmFjayB0byBlZGl0XG5cbiAgICAgICAgdGhpcy53ZWF0aGVyU3RhdGUud3JpdGUoKTtcblxuICAgICAgICBlZGl0Tm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2VhcmNoU3RhdGUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBxdWVyeUNpdHkoY2l0eU5hbWUpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZWF0aGVyR2VvVXJsLmFkZEtleSgncScsIGNpdHlOYW1lKTtcblxuICAgICAgICBsZXQgZ2VvUmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh3ZWF0aGVyR2VvVXJsLnVybCwge21vZGU6ICdjb3JzJ30pO1xuICAgICAgICBpZiAoIWdlb1Jlc3BvbnNlLm9rKVxuICAgICAgICAgICAgcmV0dXJuIHJlamVjdCgnZ2VvY29kaW5nIGVycm9yIDE6ICcgKyBnZW9SZXNwb25zZS5zdGF0dXNUZXh0KTtcblxuICAgICAgICBsZXQgZ2VvRGF0YSA9IGF3YWl0IGdlb1Jlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgaWYgKCFnZW9EYXRhWzBdKVxuICAgICAgICAgICAgcmV0dXJuIHJlamVjdCgnTm90IEZvdW5kJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBHZW8gZGF0YSByZWNlaXZlZCwgbGF0OiAke2dlb0RhdGFbMF0ubGF0fSwgbG9uOiAke2dlb0RhdGFbMF0ubG9ufSwgYXJyYXk6IGAsIGdlb0RhdGEpOyAvLyBERUJVR1xuXG4gICAgICAgIHdlYXRoZXJEYXRhVXJsLmFkZEtleSgnbGF0JywgZ2VvRGF0YVswXS5sYXQpO1xuICAgICAgICB3ZWF0aGVyRGF0YVVybC5hZGRLZXkoJ2xvbicsIGdlb0RhdGFbMF0ubG9uKTtcblxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh3ZWF0aGVyRGF0YVVybC51cmwsIHttb2RlOiAnY29ycyd9KTtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaylcbiAgICAgICAgICAgIHJldHVybiByZWplY3QocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG5cbiAgICAgICAgbGV0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBpZiAod2VhdGhlckRhdGEuY29kICE9ICcyMDAnKVxuICAgICAgICAgICAgcmV0dXJuIHJlamVjdCh3ZWF0aGVyRGF0YS5jb2QpO1xuXG4gICAgICAgIHJlc29sdmUoe2dlbzogZ2VvRGF0YVswXSwgd2VhdGhlcjogd2VhdGhlckRhdGF9KTtcbiAgICB9KTtcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBVcmxHZW4ge1xuICAgIGNvbnN0cnVjdG9yKGJhc2VVcmwpIHtcbiAgICAgICAgdGhpcy5iYXNlVXJsID0gYmFzZVVybDtcbiAgICAgICAgdGhpcy5rZXlQYWlycyA9IFtdO1xuICAgIH1cbiAgICBhZGRLZXkoa2V5LCB2YWx1ZSkge1xuICAgICAgICBmb3IgKGxldCBwYWlyIG9mIHRoaXMua2V5UGFpcnMpIHtcbiAgICAgICAgICAgIGlmIChwYWlyLmtleSA9PT0ga2V5KSB7XG4gICAgICAgICAgICAgICAgcGFpci52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmtleVBhaXJzLnB1c2goe2tleSwgdmFsdWV9KTtcbiAgICB9XG4gICAgZ2V0IHVybCgpIHtcbiAgICAgICAgbGV0IG91dCA9IHRoaXMuYmFzZVVybDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmtleVBhaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQga2V5ID0gdGhpcy5rZXlQYWlyc1tpXS5rZXk7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLmtleVBhaXJzW2ldLnZhbHVlO1xuICAgICAgICAgICAgb3V0ICs9IChpID09IDApID8gJz8nIDogJyYnO1xuICAgICAgICAgICAgb3V0ID0gb3V0ICsga2V5ICsgJz0nICsgdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG59XG4iLCJpbXBvcnQgY2xvdWR5SWNvbiBmcm9tICcuL2Fzc2V0cy9jbG91ZHkucG5nJ1xuaW1wb3J0IHJhaW5JY29uIGZyb20gJy4vYXNzZXRzL3JhaW4ucG5nJ1xuaW1wb3J0IHNob3dlckljb24gZnJvbSAnLi9hc3NldHMvc2hvd2VyLnBuZydcbmltcG9ydCBzbm93SWNvbiBmcm9tICcuL2Fzc2V0cy9zbm93LnBuZydcbmltcG9ydCBzdW5ueUljb24gZnJvbSAnLi9hc3NldHMvc3VubnkucG5nJ1xuaW1wb3J0IHRodW5kZXJzdG9ybUljb24gZnJvbSAnLi9hc3NldHMvdGh1bmRlcnN0b3JtLnBuZydcbmltcG9ydCBuaWdodEljb24gZnJvbSAnLi9hc3NldHMvbmlnaHQucG5nJ1xuaW1wb3J0IHBhcnR5Q2xvdWR5SWNvbiBmcm9tICcuL2Fzc2V0cy9wYXJ0eUNsb3VkeS5wbmcnXG5pbXBvcnQgbG9hZGluZ0ljb24gZnJvbSAnLi9hc3NldHMvbG9hZGluZy5zdmcnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlYXRoZXJTdGF0ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudGVtcCA9IHtcbiAgICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgICAgbm9kZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXAnKSxcbiAgICAgICAgICAgIHVwZGF0ZTogZnVuY3Rpb24oZGF0YSkge3RoaXMudmFsdWUgPSBNYXRoLnJvdW5kKE51bWJlcihkYXRhLm1haW4udGVtcCkpfSxcbiAgICAgICAgICAgIHdyaXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudmFsdWUpIHJldHVybjtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUudGV4dENvbnRlbnQgPSB0aGlzLnZhbHVlLnRvU3RyaW5nKCkgKyAnwrBGJztcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZmVlbHNMaWtlID0ge1xuICAgICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgICBub2RlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVlbHMtbGlrZScpLFxuICAgICAgICAgICAgdXBkYXRlOiBmdW5jdGlvbihkYXRhKSB7dGhpcy52YWx1ZSA9IE1hdGgucm91bmQoTnVtYmVyKGRhdGEubWFpbi5mZWVsc19saWtlKSl9LFxuICAgICAgICAgICAgd3JpdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy52YWx1ZSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS50ZXh0Q29udGVudCA9ICdmZWVscyBsaWtlICcgKyB0aGlzLnZhbHVlLnRvU3RyaW5nKCkgKyAnwrBGJztcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIC8vIHRoaXMud2luZFNwZWVkID0ge1xuICAgICAgICAvLyAgICAgdmFsdWU6ICdoZXknLFxuICAgICAgICAvLyAgICAgbm9kZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbmQnKSxcbiAgICAgICAgLy8gICAgIHVwZGF0ZTogZnVuY3Rpb24oZGF0YSkge3RoaXMudmFsdWUgPSBkYXRhLndpbmQuc3BlZWR9LFxuICAgICAgICAvLyAgICAgd3JpdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyAgICAgICAgIGlmICghdGhpcy52YWx1ZSkgcmV0dXJuO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMubm9kZS50ZXh0Q29udGVudCA9ICd3aW5kOiAnICsgdGhpcy52YWx1ZSArICcgbXBoJztcbiAgICAgICAgLy8gICAgIH0sXG4gICAgICAgIC8vIH07XG4gICAgICAgIHRoaXMuZGVzYyA9IHtcbiAgICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgICAgbm9kZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2MnKSxcbiAgICAgICAgICAgIHVwZGF0ZTogZnVuY3Rpb24oZGF0YSkge3RoaXMudmFsdWUgPSBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb259LFxuICAgICAgICAgICAgd3JpdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy52YWx1ZSl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS50ZXh0Q29udGVudCA9ICdObyBsb2NhdGlvbiBzZXQuLi4nO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS50ZXh0Q29udGVudCA9IHRoaXMudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNpdHkgPSB7XG4gICAgICAgICAgICB2YWx1ZTogJ0VudGVyIGEgY2l0eTonLFxuICAgICAgICAgICAgbm9kZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHknKSxcbiAgICAgICAgICAgIHVwZGF0ZTogZnVuY3Rpb24oXywgZ2VvRGF0YSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnZW9kYXRhOiAnLCBnZW9EYXRhKTsgLy8gREVCVUdcbiAgICAgICAgICAgICAgICBsZXQgc3RhdGUgPSBnZW9EYXRhLnN0YXRlO1xuICAgICAgICAgICAgICAgIGxldCBjb3VudHJ5ID0gZ2VvRGF0YS5jb3VudHJ5O1xuICAgICAgICAgICAgICAgIGxldCBjaXR5ID0gZ2VvRGF0YS5uYW1lO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNvdW50cnkgPT09ICdVUycgJiYgc3RhdGUpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSBgJHtjaXR5fSwgJHtzdGF0ZX1gO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNvdW50cnkgIT0gJ1VTJylcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IGAke2NpdHl9LCAke2NvdW50cnl9YDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB3cml0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHknKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUudGV4dENvbnRlbnQgPSB0aGlzLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pY29uID0ge1xuICAgICAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICAgICAgbm9kZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW1nJyksXG4gICAgICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uKGRhdGEpIHt0aGlzLnZhbHVlID0gZGF0YS53ZWF0aGVyWzBdLmljb259LFxuICAgICAgICAgICAgd3JpdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdlbXB0eScpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc3JjID0gZ2V0V2VhdGhlckljb24odGhpcy52YWx1ZSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LmFkZCgnZW1wdHknKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cbiAgICB1cGRhdGUod2VhdGhlckRhdGEsIGdlb0RhdGEpIHtcbiAgICAgICAgZm9yIChsZXQgcHJvcCBpbiB0aGlzKVxuICAgICAgICAgICAgdGhpc1twcm9wXS51cGRhdGUod2VhdGhlckRhdGEsIGdlb0RhdGEpO1xuICAgIH1cbiAgICB3cml0ZSgpIHtcbiAgICAgICAgZm9yIChsZXQgcHJvcCBpbiB0aGlzKVxuICAgICAgICAgICAgdGhpc1twcm9wXS53cml0ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0V2VhdGhlckljb24oaWNvbkNvZGUpIHtcbiAgICBzd2l0Y2ggKGljb25Db2RlKSB7XG4gICAgICAgIGNhc2UgJzAxZCc6IHJldHVybiBzdW5ueUljb247IGJyZWFrO1xuICAgICAgICBjYXNlICcwMW4nOiByZXR1cm4gbmlnaHRJY29uOyBicmVhaztcbiAgICAgICAgY2FzZSAnMDJkJzpcbiAgICAgICAgY2FzZSAnMDNkJzpcbiAgICAgICAgY2FzZSAnMDJuJzpcbiAgICAgICAgY2FzZSAnMDNuJzogcmV0dXJuIHBhcnR5Q2xvdWR5SWNvbjsgYnJlYWs7XG4gICAgICAgIGNhc2UgJzA0ZCc6XG4gICAgICAgIGNhc2UgJzA0bic6XG4gICAgICAgIGNhc2UgJzUwZCc6XG4gICAgICAgIGNhc2UgJzUwbic6IHJldHVybiBjbG91ZHlJY29uOyBicmVhaztcbiAgICAgICAgY2FzZSAnMDlkJzpcbiAgICAgICAgY2FzZSAnMDluJzogcmV0dXJuIHNob3dlckljb247IGJyZWFrO1xuICAgICAgICBjYXNlICcxMGQnOlxuICAgICAgICBjYXNlICcxMG4nOiByZXR1cm4gcmFpbkljb247IGJyZWFrO1xuICAgICAgICBjYXNlICcxMWQnOlxuICAgICAgICBjYXNlICcxMW4nOiByZXR1cm4gdGh1bmRlcnN0b3JtSWNvbjsgYnJlYWs7XG4gICAgICAgIGNhc2UgJzEzZCc6XG4gICAgICAgIGNhc2UgJzEzbic6IHJldHVybiBzbm93SWNvbjsgYnJlYWs7XG4gICAgICAgIC8vIGRlZmF1bHQ6IHJldHVybiBsb2FkaW5nSWNvbjsgYnJlYWs7XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiYnVuZGxlXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgVXJsR2VuIGZyb20gJy4vdXJsR2VuLmpzJ1xuaW1wb3J0IFNlYXJjaE1hbmFnZXIgZnJvbSAnLi9zZWFyY2guanMnXG5cbmltcG9ydCBjbG91ZHlJY29uIGZyb20gJy4vYXNzZXRzL2Nsb3VkeS5wbmcnXG5pbXBvcnQgcmFpbkljb24gZnJvbSAnLi9hc3NldHMvcmFpbi5wbmcnXG5pbXBvcnQgc2hvd2VySWNvbiBmcm9tICcuL2Fzc2V0cy9zaG93ZXIucG5nJ1xuaW1wb3J0IHNub3dJY29uIGZyb20gJy4vYXNzZXRzL3Nub3cucG5nJ1xuaW1wb3J0IHN1bm55SWNvbiBmcm9tICcuL2Fzc2V0cy9zdW5ueS5wbmcnXG5pbXBvcnQgdGh1bmRlcnN0b3JtSWNvbiBmcm9tICcuL2Fzc2V0cy90aHVuZGVyc3Rvcm0ucG5nJ1xuaW1wb3J0IG5pZ2h0SWNvbiBmcm9tICcuL2Fzc2V0cy9uaWdodC5wbmcnXG5pbXBvcnQgcGFydHlDbG91ZHlJY29uIGZyb20gJy4vYXNzZXRzL3BhcnR5Q2xvdWR5LnBuZydcblxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PSBXRUJTSVRFIERBVEEgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuY29uc3Qgd2VhdGhlcktleSA9ICdiYmE2ZjU2ZjJkY2QzNGRiNTU4MTI4NWJiODg0ZWUzNic7XG5jb25zdCB3ZWF0aGVyQmFzZVVybCA9ICdodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcic7XG5cbmxldCB3ZWF0aGVyVXJsID0gbmV3IFVybEdlbih3ZWF0aGVyQmFzZVVybCk7XG53ZWF0aGVyVXJsLmFkZEtleSgnYXBwaWQnLCB3ZWF0aGVyS2V5KTtcbndlYXRoZXJVcmwuYWRkS2V5KCd1bml0cycsICdpbXBlcmlhbCcpO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PSBTRVRVUCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5sZXQgc3RhdGUgPSB7XG4gICAgY2l0eTogJ05ldyBZb3JrIENpdHknLFxuICAgIHRlbXA6IG51bGwsIC8vIGtlbHZpblxuICAgIGZlZWxzTGlrZTogbnVsbCxcbiAgICB3aW5kU3BlZWQ6IG51bGwsIC8vIG1ldGVyL3NlY1xuICAgIGNsb3VkczogbnVsbCwgLy8gJSBjb3ZlcmFnZVxuICAgIGRlc2M6ICdlbXB0eScsXG4gICAgaWNvbjogJzAxZCcsIC8vIHdlYXRoZXIgaWNvbiAoMDEtMDQsMDktMTEsMTMsNTApLCAoZHxuKVxuICAgIC8vIDE6IGNsZWFyIHNreSwgMjogZmV3IGNsb3VkLCAzOiBzY2F0dGVyZWQgY2xvdWRzLCA0OiBicm9rZW4gY2xvdWRzLFxuICAgIC8vIDk6IHNob3dlciByYWluLCAxMDogcmFpbiwgMTE6IHRodW5kZXJzdG9ybSwgMTM6IHNub3csIDUwOiBtaXN0O1xuXG4gICAgcHJpbnRUZW1wKCkge3JldHVybiB0aGlzLnRlbXAudG9TdHJpbmcoKSArICfCsEYnO30sXG4gICAgcHJpbnRGZWVsc0xpa2UoKSB7cmV0dXJuICdmZWVscyBsaWtlICcgKyB0aGlzLmZlZWxzTGlrZS50b1N0cmluZygpICsgJ8KwRic7fSxcbiAgICBwcmludENsb3VkcygpIHtyZXR1cm4gJ2Nsb3VkIGNvdmVyYWdlOiAnICsgdGhpcy5jbG91ZHMgKyAnJSd9LFxuICAgIHByaW50V2luZCgpIHtyZXR1cm4gJ3dpbmQ6ICcgKyB0aGlzLndpbmRTcGVlZCArICcgbXBoJzt9LFxuXG4gICAgdXBkYXRlKGRhdGEpIHtcbiAgICAgICAgdGhpcy50ZW1wID0gTWF0aC5yb3VuZChOdW1iZXIoZGF0YS5tYWluLnRlbXApKTtcbiAgICAgICAgdGhpcy5mZWVsc0xpa2UgPSBNYXRoLnJvdW5kKE51bWJlcihkYXRhLm1haW4uZmVlbHNfbGlrZSkpO1xuICAgICAgICB0aGlzLndpbmRTcGVlZCA9IE1hdGgucm91bmQoZGF0YS53aW5kLnNwZWVkKTtcbiAgICAgICAgdGhpcy5kZXNjID0gZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmNpdHkgPSBkYXRhLm5hbWU7XG4gICAgICAgIHRoaXMuaWNvbiA9IGRhdGEud2VhdGhlclswXS5pY29uO1xuICAgICAgICBjb25zb2xlLmxvZygnY3VycmVudCBzdGF0ZSB1cGRhdGVkOiAnLCB0aGlzKTtcblxuICAgICAgICB0aGlzLndyaXRlKCk7XG4gICAgfSxcblxuICAgIHdyaXRlKCkge1xuXG4gICAgICAgIGNvbnN0IHRlbXBOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXAnKTtcbiAgICAgICAgY29uc3QgZmVlbHNMaWtlTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVscy1saWtlJyk7XG4gICAgICAgIGNvbnN0IHdpbmROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbmQnKTtcbiAgICAgICAgY29uc3QgZGVzY05vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzYycpO1xuICAgICAgICAvLyBUT0RPOiByZSBpbnRlZ3JhdGUgY2l0eSBub2RlXG4gICAgICAgIC8vIGNvbnN0IGNpdHlOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHknKTtcbiAgICAgICAgY29uc3QgaW1nTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xuXG4gICAgICAgIGltZ05vZGUuc3JjID0gZ2V0V2VhdGhlckljb24odGhpcy5pY29uKTtcblxuICAgICAgICBpZiAoIXRoaXMudGVtcCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGVtcE5vZGUudGV4dENvbnRlbnQgPSB0aGlzLnByaW50VGVtcCgpO1xuICAgICAgICBmZWVsc0xpa2VOb2RlLnRleHRDb250ZW50ID0gdGhpcy5wcmludEZlZWxzTGlrZSgpO1xuICAgICAgICB3aW5kTm9kZS50ZXh0Q29udGVudCA9IHRoaXMucHJpbnRXaW5kKCk7XG4gICAgICAgIGRlc2NOb2RlLnRleHRDb250ZW50ID0gdGhpcy5kZXNjO1xuICAgICAgICAvLyBjaXR5Tm9kZS50ZXh0Q29udGVudCA9IHRoaXMuY2l0eTtcbiAgICB9LFxufTtcblxubGV0IHNlYXJjaE1hbmFnZXIgPSBuZXcgU2VhcmNoTWFuYWdlcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJyksIHN0YXRlKTtcblxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT0gZnVuY3Rpb25zID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuYXN5bmMgZnVuY3Rpb24gcXVlcnlDaXR5KGNpdHlOYW1lKSB7XG4gICAgd2VhdGhlclVybC5hZGRLZXkoJ3EnLCBjaXR5TmFtZSk7XG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDMwMCkpOyAvLyBERUJVR1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh3ZWF0aGVyVXJsLnVybCwge21vZGU6ICdjb3JzJ30pO1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgICAgICBsZXQganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgaWYgKGpzb24uY29kICE9ICcyMDAnKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGpzb24uY29kKTtcbiAgICAgICAgdXBkYXRlV2VhdGhlclN0YXRlKGpzb24pO1xuICAgICAgICBjb25zb2xlLmxvZygnd2VhdGhlciBqc29uOiAnLCBqc29uKTsgLy8gREVCVUdcbiAgICB9IGNhdGNoKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZygnQW4gZXJyb3Igb2NjdXJlZCB3aGlsZSBmZXRjaGluZzogJywgZXJyKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVdlYXRoZXJTdGF0ZShkYXRhKSB7XG4gICAgc3RhdGUudGVtcCA9IE1hdGgucm91bmQoTnVtYmVyKGRhdGEubWFpbi50ZW1wKSk7XG4gICAgc3RhdGUuZmVlbHNMaWtlID0gTWF0aC5yb3VuZChOdW1iZXIoZGF0YS5tYWluLmZlZWxzX2xpa2UpKTtcbiAgICBzdGF0ZS53aW5kU3BlZWQgPSBNYXRoLnJvdW5kKGRhdGEud2luZC5zcGVlZCk7XG4gICAgc3RhdGUuZGVzYyA9IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgICBzdGF0ZS5jaXR5ID0gZGF0YS5uYW1lO1xuICAgIHN0YXRlLmljb24gPSBkYXRhLndlYXRoZXJbMF0uaWNvbjtcbiAgICB3cml0ZVdlYXRoZXJTdGF0ZSgpO1xufVxuXG5mdW5jdGlvbiB3cml0ZVdlYXRoZXJTdGF0ZSgpIHtcbiAgICBjb25zdCB0ZW1wTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wJyk7XG4gICAgY29uc3QgZmVlbHNMaWtlTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVscy1saWtlJyk7XG4gICAgY29uc3Qgd2luZE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZCcpO1xuICAgIGNvbnN0IGRlc2NOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2MnKTtcbiAgICBjb25zdCBjaXR5Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5Jyk7XG4gICAgY29uc3QgaW1nTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xuXG4gICAgdGVtcE5vZGUudGV4dENvbnRlbnQgPSBzdGF0ZS5wcmludFRlbXAoKTtcbiAgICBmZWVsc0xpa2VOb2RlLnRleHRDb250ZW50ID0gc3RhdGUucHJpbnRGZWVsc0xpa2UoKTtcbiAgICB3aW5kTm9kZS50ZXh0Q29udGVudCA9IHN0YXRlLnByaW50V2luZCgpO1xuICAgIGRlc2NOb2RlLnRleHRDb250ZW50ID0gc3RhdGUuZGVzYztcbiAgICBjaXR5Tm9kZS50ZXh0Q29udGVudCA9IHN0YXRlLmNpdHk7XG5cbiAgICBpbWdOb2RlLnNyYyA9IGdldFdlYXRoZXJJY29uKHN0YXRlLmljb24pO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT0gSU5JVCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gcXVlcnlDaXR5KCdOZXcgWW9yayBDaXR5Jyk7XG5cblxuXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09IERFQlVHID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5jb25zb2xlLmxvZyh3ZWF0aGVyVXJsLnVybCwgd2VhdGhlclVybCk7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09IENSRURJVFMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU3Vubnlcbi8vIDxhIGhyZWY9XCJodHRwczovL3d3dy5mbGF0aWNvbi5jb20vZnJlZS1pY29ucy9zdW5ueVwiIHRpdGxlPVwic3VubnkgaWNvbnNcIj5TdW5ueSBpY29ucyBjcmVhdGVkIGJ5IGp1c3RpY29uIC0gRmxhdGljb248L2E+XG4vLyBUaHVkbmVyc3Rvcm1cbi8vIDxhIGhyZWY9XCJodHRwczovL3d3dy5mbGF0aWNvbi5jb20vZnJlZS1pY29ucy90aHVuZGVyc3Rvcm1cIiB0aXRsZT1cInRodW5kZXJzdG9ybSBpY29uc1wiPlRodW5kZXJzdG9ybSBpY29ucyBjcmVhdGVkIGJ5IGp1c3RpY29uIC0gRmxhdGljb248L2E+XG4vLyBTaG93ZXJcbi8vIDxhIGhyZWY9XCJodHRwczovL3d3dy5mbGF0aWNvbi5jb20vZnJlZS1pY29ucy9yYWluXCIgdGl0bGU9XCJyYWluIGljb25zXCI+UmFpbiBpY29ucyBjcmVhdGVkIGJ5IGp1c3RpY29uIC0gRmxhdGljb248L2E+XG4vLyBSYWluXG4vLyA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2ZyZWUtaWNvbnMvcmFpblwiIHRpdGxlPVwicmFpbiBpY29uc1wiPlJhaW4gaWNvbnMgY3JlYXRlZCBieSBqdXN0aWNvbiAtIEZsYXRpY29uPC9hPlxuLy8gQ2xvdWR5XG4vLyA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2ZyZWUtaWNvbnMvY2xvdWRcIiB0aXRsZT1cImNsb3VkIGljb25zXCI+Q2xvdWQgaWNvbnMgY3JlYXRlZCBieSBqdXN0aWNvbiAtIEZsYXRpY29uPC9hPlxuLy8gU25vd1xuLy8gPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9mcmVlLWljb25zL3Nub3dmYWxsXCIgdGl0bGU9XCJzbm93ZmFsbCBpY29uc1wiPlNub3dmYWxsIGljb25zIGNyZWF0ZWQgYnkganVzdGljb24gLSBGbGF0aWNvbjwvYT5cbi8vIE5pZ2h0XG4vLyA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2ZyZWUtaWNvbnMvY2xlYXJcIiB0aXRsZT1cImNsZWFyIGljb25zXCI+Q2xlYXIgaWNvbnMgY3JlYXRlZCBieSBqdXN0aWNvbiAtIEZsYXRpY29uPC9hPlxuLy8gUGFydHkgQ2xvdWR5XG4vLyA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2ZyZWUtaWNvbnMvY2xvdWR5XCIgdGl0bGU9XCJjbG91ZHkgaWNvbnNcIj5DbG91ZHkgaWNvbnMgY3JlYXRlZCBieSBqdXN0aWNvbiAtIEZsYXRpY29uPC9hPiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==