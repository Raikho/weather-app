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
                const result = await Promise.race([queryPromise, timeoutPromise, cancelPromise]);
                console.log('race resolved, result: ', result); // DEBUG

                if (this.state !='search') return;

                this.weatherState.update(result);
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
        if (!geoResponse.ok) {
            reject('geocoding error 1: ' + geoResponse.statusText);
            return;
        }

        let geoData = await geoResponse.json();
        if (!geoData[0]) {
            reject('Not Found');
            return;
        }

        let lat = geoData[0].lat;
        let lon = geoData[0].lon;
        console.log(`Geo data received, lat: ${lat}, lon: ${lon}, array: `, geoData); // DEBUG

        weatherDataUrl.addKey('lat', lat);
        weatherDataUrl.addKey('lon', lon);
        let response = await fetch(weatherDataUrl.url, {mode: 'cors'});
        if (!response.ok)
            reject(response.statusText);

        let weatherData = await response.json();
        if (weatherData.cod != '200')
            reject(weatherData.cod);
        resolve(weatherData);
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
            update: function(data) {this.value = data.name},
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
    update(data) {
        for (let prop in this)
            this[prop].update(data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSx3QkFBd0Isa0RBQWE7OztBQUdyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRTtBQUNoRSxvREFBb0QsYUFBYTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0MsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7O0FBS0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zZWFyY2guanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvdXJsR2VuLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3dlYXRoZXJTdGF0ZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJhc3NldHMvZWRpdC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCJhc3NldHMvc2VhcmNoLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcImFzc2V0cy9jYW5jZWwuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiYXNzZXRzL2xvYWRpbmcuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWJnOiAjMTY0ZTYzO1xcbiAgICAtLWJnTGlnaHRlcjogIzE1NWU3NTtcXG4gICAgLS1mZzogI2YwZjlmZjtcXG5cXG4gICAgLS1pY29uOiAjYmZkYmZlO1xcbiAgICAtLWljb25Ib3ZlcjogI2UwZjJmZTtcXG4gICAgLS1pY29uQWN0aXZlOiAjMDI4ZmM3O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDA7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnKTtcXG4gICAgY29sb3I6IHZhcigtLWZnKTtcXG4gICAgZm9udC1mYW1pbHk6IGhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA1ZnI7XFxufVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gSEVBREVSID09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuI2hlYWRlciB7XFxuICAgIC8qIGJvcmRlcjogMXB4IGRvdHRlZCBsaWdodGdyYXk7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnTGlnaHRlcik7XFxuICAgIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCAjMDAwMztcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jaXR5LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGdhcDogMjBweDtcXG5cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLyogLmNpdHktY29udGFpbmVyLCAuY2l0eS1jb250YWluZXI+Kntib3JkZXI6IDFweCBkb3R0ZWQgd2hpdGU7fSAqL1xcblxcbi5pbnB1dC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZXJyb3Ige1xcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAycHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgY29sb3I6ICNlZjQ0NDRhYTtcXG59XFxuaW5wdXQge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTBweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pY29uSG92ZXIpO1xcbn1cXG5pbnB1dDppbnZhbGlkIHtib3JkZXItY29sb3I6IHJlZDt9XFxuaW5wdXQ6Zm9jdXM6aW52YWxpZCB7b3V0bGluZS1jb2xvcjogcmVkO31cXG4vKiBpbnB1dDppbnZhbGlkIHtib3JkZXItOiByZWQ7fSAqL1xcblxcblxcbi5jaXR5IHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5pY29uIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgLXdlYmtpdC1tYXNrLXNpemU6IGNvbnRhaW47XFxuICAgIG1hc2stc2l6ZTogY29udGFpbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taWNvbik7XFxufVxcbi5pY29uLmVkaXQge1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIG1hc2staW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcbi5pY29uLnNlYXJjaCB7XFxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuLmljb24uY2FuY2VsIHtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgICBtYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbn1cXG4uaWNvbi5sb2FkaW5nIHtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgICBtYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcblxcbiAgICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIDBzIGluZmluaXRlIG5vcm1hbDtcXG59XFxuQGtleWZyYW1lcyBzcGluIHtcXG4gICAgMCUge3RyYW5zZm9ybTogcm90YXRlKDBkZWcpO31cXG4gICAgMTAwJSB7dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTt9XFxufVxcblxcbi5pY29uOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pY29uSG92ZXIpO31cXG4uaWNvbjphY3RpdmUge2JhY2tncm91bmQtY29sb3I6IHZhcigtLWljb25BY3RpdmUpO31cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBNQUlOID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiNtYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5taWRkbGUtY29udGFpbmVyIHtcXG4gICAgLyogYm9yZGVyOiAxcHggZG90dGVkIGxpZ2h0Z3JheTsgKi9cXG4gICAgcGFkZGluZzogMjBweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLnRleHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRlbXAge1xcbiAgICBmb250LXNpemU6IDY0cHg7XFxufVxcblxcbmltZyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxuICAgIC8qIGJvcmRlci1jb2xvcjogMXB4IGRvdHRlZCB3aGl0ZTsgKi9cXG4gICAgd2lkdGg6IGNsYW1wKDEwMHB4LCAzMHZtaW4sIDEwMDBweCk7XFxuICAgIGhlaWdodDogY2xhbXAoMTAwcHgsIDMwdm1pbiwgMTAwMHB4KTtcXG59XFxuaW1nLmVtcHR5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taWNvbik7XFxuICAgIC13ZWJraXQtbWFzay1zaXplOiBjb250YWluO1xcbiAgICBtYXNrLXNpemU6IGNvbnRhaW47XFxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG4gICAgbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsYUFBYTs7SUFFYixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsU0FBUzs7SUFFVCwyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLGtDQUFrQztJQUNsQyxlQUFlOztJQUVmLGFBQWE7SUFDYiwyQkFBMkI7QUFDL0I7O0FBRUEsc0VBQXNFO0FBQ3RFO0lBQ0ksa0NBQWtDO0lBQ2xDLGtDQUFrQztJQUNsQyw4QkFBOEI7O0lBRTlCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsU0FBUzs7SUFFVCxtQkFBbUI7QUFDdkI7QUFDQSxrRUFBa0U7O0FBRWxFO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGlCQUFpQjs7SUFFakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmLGtDQUFrQztBQUN0QztBQUNBLGVBQWUsaUJBQWlCLENBQUM7QUFDakMscUJBQXFCLGtCQUFrQixDQUFDO0FBQ3hDLGtDQUFrQzs7O0FBR2xDO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSwyREFBMEM7SUFDMUMsbURBQWtDO0FBQ3RDO0FBQ0E7SUFDSSwyREFBNEM7SUFDNUMsbURBQW9DO0FBQ3hDO0FBQ0E7SUFDSSwyREFBNEM7SUFDNUMsbURBQW9DO0FBQ3hDO0FBQ0E7SUFDSSwyREFBNkM7SUFDN0MsbURBQXFDOztJQUVyQyw0Q0FBNEM7QUFDaEQ7QUFDQTtJQUNJLElBQUksdUJBQXVCLENBQUM7SUFDNUIsTUFBTSx5QkFBeUIsQ0FBQztBQUNwQzs7QUFFQSxhQUFhLGtDQUFrQyxDQUFDO0FBQ2hELGNBQWMsbUNBQW1DLENBQUM7O0FBRWxELHNFQUFzRTs7QUFFdEU7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxhQUFhOztJQUViLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyxtQ0FBbUM7SUFDbkMsb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQiwyREFBNkM7SUFDN0MsbURBQXFDO0FBQ3pDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1iZzogIzE2NGU2MztcXG4gICAgLS1iZ0xpZ2h0ZXI6ICMxNTVlNzU7XFxuICAgIC0tZmc6ICNmMGY5ZmY7XFxuXFxuICAgIC0taWNvbjogI2JmZGJmZTtcXG4gICAgLS1pY29uSG92ZXI6ICNlMGYyZmU7XFxuICAgIC0taWNvbkFjdGl2ZTogIzAyOGZjNztcXG59XFxuXFxuYm9keSB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZyk7XFxuICAgIGNvbG9yOiB2YXIoLS1mZyk7XFxuICAgIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNWZyO1xcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09IEhFQURFUiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiNoZWFkZXIge1xcbiAgICAvKiBib3JkZXI6IDFweCBkb3R0ZWQgbGlnaHRncmF5OyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0xpZ2h0ZXIpO1xcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDEwcHggIzAwMDM7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2l0eS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBnYXA6IDIwcHg7XFxuXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi8qIC5jaXR5LWNvbnRhaW5lciwgLmNpdHktY29udGFpbmVyPip7Ym9yZGVyOiAxcHggZG90dGVkIHdoaXRlO30gKi9cXG5cXG4uaW5wdXQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmVycm9yIHtcXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGNvbG9yOiAjZWY0NDQ0YWE7XFxufVxcbmlucHV0IHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taWNvbkhvdmVyKTtcXG59XFxuaW5wdXQ6aW52YWxpZCB7Ym9yZGVyLWNvbG9yOiByZWQ7fVxcbmlucHV0OmZvY3VzOmludmFsaWQge291dGxpbmUtY29sb3I6IHJlZDt9XFxuLyogaW5wdXQ6aW52YWxpZCB7Ym9yZGVyLTogcmVkO30gKi9cXG5cXG5cXG4uY2l0eSB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uaWNvbiB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIC13ZWJraXQtbWFzay1zaXplOiBjb250YWluO1xcbiAgICBtYXNrLXNpemU6IGNvbnRhaW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWljb24pO1xcbn1cXG4uaWNvbi5lZGl0IHtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoJ2Fzc2V0cy9lZGl0LnN2ZycpO1xcbiAgICBtYXNrLWltYWdlOiB1cmwoJ2Fzc2V0cy9lZGl0LnN2ZycpO1xcbn1cXG4uaWNvbi5zZWFyY2gge1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybCgnYXNzZXRzL3NlYXJjaC5zdmcnKTtcXG4gICAgbWFzay1pbWFnZTogdXJsKCdhc3NldHMvc2VhcmNoLnN2ZycpO1xcbn1cXG4uaWNvbi5jYW5jZWwge1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybCgnYXNzZXRzL2NhbmNlbC5zdmcnKTtcXG4gICAgbWFzay1pbWFnZTogdXJsKCdhc3NldHMvY2FuY2VsLnN2ZycpO1xcbn1cXG4uaWNvbi5sb2FkaW5nIHtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoJ2Fzc2V0cy9sb2FkaW5nLnN2ZycpO1xcbiAgICBtYXNrLWltYWdlOiB1cmwoJ2Fzc2V0cy9sb2FkaW5nLnN2ZycpO1xcblxcbiAgICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIDBzIGluZmluaXRlIG5vcm1hbDtcXG59XFxuQGtleWZyYW1lcyBzcGluIHtcXG4gICAgMCUge3RyYW5zZm9ybTogcm90YXRlKDBkZWcpO31cXG4gICAgMTAwJSB7dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTt9XFxufVxcblxcbi5pY29uOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pY29uSG92ZXIpO31cXG4uaWNvbjphY3RpdmUge2JhY2tncm91bmQtY29sb3I6IHZhcigtLWljb25BY3RpdmUpO31cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBNQUlOID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiNtYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5taWRkbGUtY29udGFpbmVyIHtcXG4gICAgLyogYm9yZGVyOiAxcHggZG90dGVkIGxpZ2h0Z3JheTsgKi9cXG4gICAgcGFkZGluZzogMjBweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLnRleHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRlbXAge1xcbiAgICBmb250LXNpemU6IDY0cHg7XFxufVxcblxcbmltZyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxuICAgIC8qIGJvcmRlci1jb2xvcjogMXB4IGRvdHRlZCB3aGl0ZTsgKi9cXG4gICAgd2lkdGg6IGNsYW1wKDEwMHB4LCAzMHZtaW4sIDEwMDBweCk7XFxuICAgIGhlaWdodDogY2xhbXAoMTAwcHgsIDMwdm1pbiwgMTAwMHB4KTtcXG59XFxuaW1nLmVtcHR5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taWNvbik7XFxuICAgIC13ZWJraXQtbWFzay1zaXplOiBjb250YWluO1xcbiAgICBtYXNrLXNpemU6IGNvbnRhaW47XFxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKCdhc3NldHMvbG9hZGluZy5zdmcnKTtcXG4gICAgbWFzay1pbWFnZTogdXJsKCdhc3NldHMvbG9hZGluZy5zdmcnKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IERPTSA9IHt9O1xuXG5ET00uY2xlYXJOb2RlID0gZnVuY3Rpb24obm9kZSkge1xuICAgIHdoaWxlKG5vZGUuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgIG5vZGUucmVtb3ZlQ2hpbGQobm9kZS5maXJzdENoaWxkKTtcbiAgICB9XG59XG5cbkRPTS5jcmVhdGVOb2RlID0gZnVuY3Rpb24ocGFyZW50Tm9kZSwgdGFnLCBjbGFzc0xpc3QsIHRleHRDb250ZW50KSB7XG4gICAgbGV0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgaWYgKGNsYXNzTGlzdClcbiAgICAgICAgZm9yIChsZXQgY2xzIG9mIGNsYXNzTGlzdClcbiAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChjbHMpO1xuICAgIG5vZGUudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcbiAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIHJldHVybiBub2RlO1xufVxuXG5ET00uY3JlYXRlRGl2ID0gZnVuY3Rpb24ocGFyZW50Tm9kZSwgY2xhc3NMaXN0LCB0ZXh0Q29udGVudCkge1xuICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZShwYXJlbnROb2RlLCAnZGl2JywgY2xhc3NMaXN0LCB0ZXh0Q29udGVudClcbn1cblxuRE9NLmNyZWF0ZVRleHRJbnB1dCA9IGZ1bmN0aW9uKHBhcmVudE5vZGUsIGlkLCBwbGFjZWhvbGRlcikge1xuICAgIGxldCBpbnB1dE5vZGUgPSB0aGlzLmNyZWF0ZU5vZGUocGFyZW50Tm9kZSwgJ2lucHV0Jyk7XG4gICAgaW5wdXROb2RlLnR5cGUgPSAndGV4dCc7XG4gICAgaW5wdXROb2RlLmlkID0gaWQ7XG4gICAgaW5wdXROb2RlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCBwbGFjZWhvbGRlcik7XG4gICAgcmV0dXJuIGlucHV0Tm9kZTtcbn1cblxuRE9NLmNyZWF0ZUltYWdlID0gZnVuY3Rpb24ocGFyZW50Tm9kZSwgY2xhc3NMaXN0LCBzcmMsIGFsdCkge1xuICAgIGxldCBpbWFnZU5vZGUgPSB0aGlzLmNyZWF0ZU5vZGUocGFyZW50Tm9kZSwgJ2ltZycsIGNsYXNzTGlzdCk7XG4gICAgaWYgKHNyYylcbiAgICAgICAgaW1hZ2VOb2RlLnNyYyA9IHNyYztcbiAgICBpbWFnZU5vZGUuYWx0ID0gYWx0O1xuICAgIHJldHVybiBpbWFnZU5vZGU7XG59XG5cbkRPTS5jcmVhdGVJY29uID0gZnVuY3Rpb24ocGFyZW50Tm9kZSwgY2xhc3NMaXN0LCBzcmMpIHtcbiAgICBsZXQgaWNvbk5vZGUgPSB0aGlzLmNyZWF0ZU5vZGUocGFyZW50Tm9kZSwgJ29iamVjdCcsIGNsYXNzTGlzdCk7XG4gICAgaWNvbk5vZGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2ltYWdlL3N2Zyt4bWwnKTtcbiAgICBpY29uTm9kZS5zZXRBdHRyaWJ1dGUoJ2RhdGEnLCBzcmMpXG4gICAgcmV0dXJuIGljb25Ob2RlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBET007IiwiaW1wb3J0IERPTSBmcm9tICcuL2RvbS5qcydcblxuaW1wb3J0IFVybEdlbiBmcm9tICcuL3VybEdlbi5qcyc7XG5jb25zdCB3ZWF0aGVyS2V5ID0gJ2JiYTZmNTZmMmRjZDM0ZGI1NTgxMjg1YmI4ODRlZTM2JztcbmNvbnN0IHdlYXRoZXJEYXRhQmFzZVVybCA9ICdodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcic7XG5jb25zdCB3ZWF0aGVyR2VvQmFzZVVybCA9ICdodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdCc7XG5cbmxldCB3ZWF0aGVyRGF0YVVybCA9IG5ldyBVcmxHZW4od2VhdGhlckRhdGFCYXNlVXJsKTtcbndlYXRoZXJEYXRhVXJsLmFkZEtleSgnYXBwaWQnLCB3ZWF0aGVyS2V5KTtcbndlYXRoZXJEYXRhVXJsLmFkZEtleSgndW5pdHMnLCAnaW1wZXJpYWwnKTtcblxubGV0IHdlYXRoZXJHZW9VcmwgPSBuZXcgVXJsR2VuKHdlYXRoZXJHZW9CYXNlVXJsKTtcbndlYXRoZXJHZW9VcmwuYWRkS2V5KCdhcHBpZCcsIHdlYXRoZXJLZXkpO1xuXG5cbmltcG9ydCBXZWF0aGVyU3RhdGUgZnJvbSAnLi93ZWF0aGVyU3RhdGUuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3Rvcihub2RlLCB3ZWF0aGVyU3RhdGUpIHtcbiAgICAgICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICdzdGF0ZSc7IC8vIGZvdW5kLCBzZWFyY2gsIHJldHJ5LCBsb2FkaW5nXG4gICAgICAgIHRoaXMud2VhdGhlclN0YXRlID0gbmV3IFdlYXRoZXJTdGF0ZSgpO1xuICAgICAgICB0aGlzLndlYXRoZXJTdGF0ZS53cml0ZSgpO1xuXG4gICAgICAgIERPTS5jbGVhck5vZGUodGhpcy5ub2RlKTtcbiAgICAgICAgdGhpcy51cGRhdGVGb3VuZFN0YXRlKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlU2VhcmNoU3RhdGUoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSAnc2VhcmNoJztcbiAgICAgICAgRE9NLmNsZWFyTm9kZSh0aGlzLm5vZGUpO1xuXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lck5vZGUgPSBET00uY3JlYXRlRGl2KHRoaXMubm9kZSwgWydjaXR5LWNvbnRhaW5lciddKTtcblxuICAgICAgICBjb25zdCBlcnJvck5vZGUgPSBET00uY3JlYXRlRGl2KGNvbnRhaW5lck5vZGUsIFsnZXJyb3InXSk7XG5cbiAgICAgICAgY29uc3QgaW5wdXROb2RlID0gRE9NLmNyZWF0ZVRleHRJbnB1dChjb250YWluZXJOb2RlLCBbJ2NpdHktaW5wdXQnXSwgJ0VudGVyIGNpdHk6Jyk7XG4gICAgICAgIGlucHV0Tm9kZS5zZXRBdHRyaWJ1dGUoJ3BhdHRlcm4nLCBcIlthLXpBLVogJ10rJFwiKTtcbiAgICAgICAgY29uc3QgaWNvbk5vZGUgPSBET00uY3JlYXRlRGl2KGNvbnRhaW5lck5vZGUsIFsnaWNvbicsICdzZWFyY2gnXSk7XG4gICAgICAgIGNvbnN0IGNhbmNlbE5vZGUgPSBET00uY3JlYXRlRGl2KGNvbnRhaW5lck5vZGUsIFsnaWNvbicsICdjYW5jZWwnXSk7XG4gICAgICAgIGNhbmNlbE5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnVwZGF0ZUZvdW5kU3RhdGUuYmluZCh0aGlzKSwge29uY2U6IHRydWV9KTtcblxuICAgICAgICBpY29uTm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGxldCBjaXR5TmFtZSA9IGlucHV0Tm9kZS52YWx1ZTtcbiAgICAgICAgICAgIGlmICghY2l0eU5hbWUpIHJldHVybjtcbiAgICAgICAgICAgIGljb25Ob2RlLmNsYXNzTGlzdC5yZXBsYWNlKCdzZWFyY2gnLCAnbG9hZGluZycpO1xuXG4gICAgICAgICAgICBsZXQgcXVlcnlQcm9taXNlID0gcXVlcnlDaXR5KGNpdHlOYW1lLCBpY29uTm9kZSk7XG4gICAgICAgICAgICBsZXQgdGltZW91dFByb21pc2UgPSBuZXcgUHJvbWlzZSgoXywgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiByZWplY3QoJ3RpbWVvdXQnKSwgMTIwMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxldCBjYW5jZWxQcm9taXNlID0gbmV3IFByb21pc2UoKF8sIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNhbmNlbE5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiByZWplY3QoJ2NhbmNlbCcpLCB7b25jZTogdHJ1ZX0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgUHJvbWlzZS5yYWNlKFtxdWVyeVByb21pc2UsIHRpbWVvdXRQcm9taXNlLCBjYW5jZWxQcm9taXNlXSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JhY2UgcmVzb2x2ZWQsIHJlc3VsdDogJywgcmVzdWx0KTsgLy8gREVCVUdcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlICE9J3NlYXJjaCcpIHJldHVybjtcblxuICAgICAgICAgICAgICAgIHRoaXMud2VhdGhlclN0YXRlLnVwZGF0ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCduZXcgd2VhdGhlciBzdGF0ZTogJywgdGhpcy53ZWF0aGVyU3RhdGUpOyAvLyBERUJVR1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRm91bmRTdGF0ZSgpO1xuICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmFjZSBlcnJvcjogJywgZXJyKTtcblxuICAgICAgICAgICAgICAgIGlmIChlcnIgPT09ICd0aW1lb3V0JylcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JOb2RlLnRleHRDb250ZW50ID0gJ05vIHJlc3BvbnNlLCB0cnkgYWdhaW4gbGF0ZXInO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGVyciA9PT0gJ05vdCBGb3VuZCcpXG4gICAgICAgICAgICAgICAgICAgIGVycm9yTm9kZS50ZXh0Q29udGVudCA9ICdDaXR5IG5vdCBmb3VuZCc7XG5cbiAgICAgICAgICAgICAgICBpY29uTm9kZS5jbGFzc0xpc3QucmVwbGFjZSgnbG9hZGluZycsICdzZWFyY2gnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cblxuICAgIH1cblxuICAgIHVwZGF0ZUZvdW5kU3RhdGUoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSAnZm91bmQnO1xuICAgICAgICBET00uY2xlYXJOb2RlKHRoaXMubm9kZSk7XG5cbiAgICAgICAgY29uc3QgY29udGFpbmVyTm9kZSA9IERPTS5jcmVhdGVEaXYodGhpcy5ub2RlLCBbJ2NpdHktY29udGFpbmVyJ10pO1xuICAgICAgICBjb25zdCBjaXR5Tm9kZSA9IERPTS5jcmVhdGVEaXYoY29udGFpbmVyTm9kZSwgWydjaXR5J10sIHRoaXMud2VhdGhlclN0YXRlLmNpdHkpO1xuICAgICAgICBjb25zdCBlZGl0Tm9kZSA9IERPTS5jcmVhdGVEaXYoY29udGFpbmVyTm9kZSwgWydpY29uJywgJ2VkaXQnXSk7IC8vIERFQlVHLCBjaGFuZ2UgYmFjayB0byBlZGl0XG5cbiAgICAgICAgdGhpcy53ZWF0aGVyU3RhdGUud3JpdGUoKTtcblxuICAgICAgICBlZGl0Tm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2VhcmNoU3RhdGUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBxdWVyeUNpdHkoY2l0eU5hbWUpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZWF0aGVyR2VvVXJsLmFkZEtleSgncScsIGNpdHlOYW1lKTtcblxuICAgICAgICBsZXQgZ2VvUmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh3ZWF0aGVyR2VvVXJsLnVybCwge21vZGU6ICdjb3JzJ30pO1xuICAgICAgICBpZiAoIWdlb1Jlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICByZWplY3QoJ2dlb2NvZGluZyBlcnJvciAxOiAnICsgZ2VvUmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZ2VvRGF0YSA9IGF3YWl0IGdlb1Jlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgaWYgKCFnZW9EYXRhWzBdKSB7XG4gICAgICAgICAgICByZWplY3QoJ05vdCBGb3VuZCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGxhdCA9IGdlb0RhdGFbMF0ubGF0O1xuICAgICAgICBsZXQgbG9uID0gZ2VvRGF0YVswXS5sb247XG4gICAgICAgIGNvbnNvbGUubG9nKGBHZW8gZGF0YSByZWNlaXZlZCwgbGF0OiAke2xhdH0sIGxvbjogJHtsb259LCBhcnJheTogYCwgZ2VvRGF0YSk7IC8vIERFQlVHXG5cbiAgICAgICAgd2VhdGhlckRhdGFVcmwuYWRkS2V5KCdsYXQnLCBsYXQpO1xuICAgICAgICB3ZWF0aGVyRGF0YVVybC5hZGRLZXkoJ2xvbicsIGxvbik7XG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHdlYXRoZXJEYXRhVXJsLnVybCwge21vZGU6ICdjb3JzJ30pO1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKVxuICAgICAgICAgICAgcmVqZWN0KHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuXG4gICAgICAgIGxldCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgaWYgKHdlYXRoZXJEYXRhLmNvZCAhPSAnMjAwJylcbiAgICAgICAgICAgIHJlamVjdCh3ZWF0aGVyRGF0YS5jb2QpO1xuICAgICAgICByZXNvbHZlKHdlYXRoZXJEYXRhKTtcbiAgICB9KTtcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBVcmxHZW4ge1xuICAgIGNvbnN0cnVjdG9yKGJhc2VVcmwpIHtcbiAgICAgICAgdGhpcy5iYXNlVXJsID0gYmFzZVVybDtcbiAgICAgICAgdGhpcy5rZXlQYWlycyA9IFtdO1xuICAgIH1cbiAgICBhZGRLZXkoa2V5LCB2YWx1ZSkge1xuICAgICAgICBmb3IgKGxldCBwYWlyIG9mIHRoaXMua2V5UGFpcnMpIHtcbiAgICAgICAgICAgIGlmIChwYWlyLmtleSA9PT0ga2V5KSB7XG4gICAgICAgICAgICAgICAgcGFpci52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmtleVBhaXJzLnB1c2goe2tleSwgdmFsdWV9KTtcbiAgICB9XG4gICAgZ2V0IHVybCgpIHtcbiAgICAgICAgbGV0IG91dCA9IHRoaXMuYmFzZVVybDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmtleVBhaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQga2V5ID0gdGhpcy5rZXlQYWlyc1tpXS5rZXk7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLmtleVBhaXJzW2ldLnZhbHVlO1xuICAgICAgICAgICAgb3V0ICs9IChpID09IDApID8gJz8nIDogJyYnO1xuICAgICAgICAgICAgb3V0ID0gb3V0ICsga2V5ICsgJz0nICsgdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG59XG4iLCJpbXBvcnQgY2xvdWR5SWNvbiBmcm9tICcuL2Fzc2V0cy9jbG91ZHkucG5nJ1xuaW1wb3J0IHJhaW5JY29uIGZyb20gJy4vYXNzZXRzL3JhaW4ucG5nJ1xuaW1wb3J0IHNob3dlckljb24gZnJvbSAnLi9hc3NldHMvc2hvd2VyLnBuZydcbmltcG9ydCBzbm93SWNvbiBmcm9tICcuL2Fzc2V0cy9zbm93LnBuZydcbmltcG9ydCBzdW5ueUljb24gZnJvbSAnLi9hc3NldHMvc3VubnkucG5nJ1xuaW1wb3J0IHRodW5kZXJzdG9ybUljb24gZnJvbSAnLi9hc3NldHMvdGh1bmRlcnN0b3JtLnBuZydcbmltcG9ydCBuaWdodEljb24gZnJvbSAnLi9hc3NldHMvbmlnaHQucG5nJ1xuaW1wb3J0IHBhcnR5Q2xvdWR5SWNvbiBmcm9tICcuL2Fzc2V0cy9wYXJ0eUNsb3VkeS5wbmcnXG5pbXBvcnQgbG9hZGluZ0ljb24gZnJvbSAnLi9hc3NldHMvbG9hZGluZy5zdmcnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlYXRoZXJTdGF0ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudGVtcCA9IHtcbiAgICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgICAgbm9kZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXAnKSxcbiAgICAgICAgICAgIHVwZGF0ZTogZnVuY3Rpb24oZGF0YSkge3RoaXMudmFsdWUgPSBNYXRoLnJvdW5kKE51bWJlcihkYXRhLm1haW4udGVtcCkpfSxcbiAgICAgICAgICAgIHdyaXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudmFsdWUpIHJldHVybjtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUudGV4dENvbnRlbnQgPSB0aGlzLnZhbHVlLnRvU3RyaW5nKCkgKyAnwrBGJztcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZmVlbHNMaWtlID0ge1xuICAgICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgICBub2RlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVlbHMtbGlrZScpLFxuICAgICAgICAgICAgdXBkYXRlOiBmdW5jdGlvbihkYXRhKSB7dGhpcy52YWx1ZSA9IE1hdGgucm91bmQoTnVtYmVyKGRhdGEubWFpbi5mZWVsc19saWtlKSl9LFxuICAgICAgICAgICAgd3JpdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy52YWx1ZSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS50ZXh0Q29udGVudCA9ICdmZWVscyBsaWtlICcgKyB0aGlzLnZhbHVlLnRvU3RyaW5nKCkgKyAnwrBGJztcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIC8vIHRoaXMud2luZFNwZWVkID0ge1xuICAgICAgICAvLyAgICAgdmFsdWU6ICdoZXknLFxuICAgICAgICAvLyAgICAgbm9kZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbmQnKSxcbiAgICAgICAgLy8gICAgIHVwZGF0ZTogZnVuY3Rpb24oZGF0YSkge3RoaXMudmFsdWUgPSBkYXRhLndpbmQuc3BlZWR9LFxuICAgICAgICAvLyAgICAgd3JpdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyAgICAgICAgIGlmICghdGhpcy52YWx1ZSkgcmV0dXJuO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMubm9kZS50ZXh0Q29udGVudCA9ICd3aW5kOiAnICsgdGhpcy52YWx1ZSArICcgbXBoJztcbiAgICAgICAgLy8gICAgIH0sXG4gICAgICAgIC8vIH07XG4gICAgICAgIHRoaXMuZGVzYyA9IHtcbiAgICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgICAgbm9kZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2MnKSxcbiAgICAgICAgICAgIHVwZGF0ZTogZnVuY3Rpb24oZGF0YSkge3RoaXMudmFsdWUgPSBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb259LFxuICAgICAgICAgICAgd3JpdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy52YWx1ZSl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS50ZXh0Q29udGVudCA9ICdObyBsb2NhdGlvbiBzZXQuLi4nO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS50ZXh0Q29udGVudCA9IHRoaXMudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNpdHkgPSB7XG4gICAgICAgICAgICB2YWx1ZTogJ0VudGVyIGEgY2l0eTonLFxuICAgICAgICAgICAgbm9kZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHknKSxcbiAgICAgICAgICAgIHVwZGF0ZTogZnVuY3Rpb24oZGF0YSkge3RoaXMudmFsdWUgPSBkYXRhLm5hbWV9LFxuICAgICAgICAgICAgd3JpdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5Jyk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnRleHRDb250ZW50ID0gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaWNvbiA9IHtcbiAgICAgICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgICAgIG5vZGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLFxuICAgICAgICAgICAgdXBkYXRlOiBmdW5jdGlvbihkYXRhKSB7dGhpcy52YWx1ZSA9IGRhdGEud2VhdGhlclswXS5pY29ufSxcbiAgICAgICAgICAgIHdyaXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnZW1wdHknKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNyYyA9IGdldFdlYXRoZXJJY29uKHRoaXMudmFsdWUpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmNsYXNzTGlzdC5hZGQoJ2VtcHR5Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdXBkYXRlKGRhdGEpIHtcbiAgICAgICAgZm9yIChsZXQgcHJvcCBpbiB0aGlzKVxuICAgICAgICAgICAgdGhpc1twcm9wXS51cGRhdGUoZGF0YSk7XG4gICAgfVxuICAgIHdyaXRlKCkge1xuICAgICAgICBmb3IgKGxldCBwcm9wIGluIHRoaXMpXG4gICAgICAgICAgICB0aGlzW3Byb3BdLndyaXRlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRXZWF0aGVySWNvbihpY29uQ29kZSkge1xuICAgIHN3aXRjaCAoaWNvbkNvZGUpIHtcbiAgICAgICAgY2FzZSAnMDFkJzogcmV0dXJuIHN1bm55SWNvbjsgYnJlYWs7XG4gICAgICAgIGNhc2UgJzAxbic6IHJldHVybiBuaWdodEljb247IGJyZWFrO1xuICAgICAgICBjYXNlICcwMmQnOlxuICAgICAgICBjYXNlICcwM2QnOlxuICAgICAgICBjYXNlICcwMm4nOlxuICAgICAgICBjYXNlICcwM24nOiByZXR1cm4gcGFydHlDbG91ZHlJY29uOyBicmVhaztcbiAgICAgICAgY2FzZSAnMDRkJzpcbiAgICAgICAgY2FzZSAnMDRuJzpcbiAgICAgICAgY2FzZSAnNTBkJzpcbiAgICAgICAgY2FzZSAnNTBuJzogcmV0dXJuIGNsb3VkeUljb247IGJyZWFrO1xuICAgICAgICBjYXNlICcwOWQnOlxuICAgICAgICBjYXNlICcwOW4nOiByZXR1cm4gc2hvd2VySWNvbjsgYnJlYWs7XG4gICAgICAgIGNhc2UgJzEwZCc6XG4gICAgICAgIGNhc2UgJzEwbic6IHJldHVybiByYWluSWNvbjsgYnJlYWs7XG4gICAgICAgIGNhc2UgJzExZCc6XG4gICAgICAgIGNhc2UgJzExbic6IHJldHVybiB0aHVuZGVyc3Rvcm1JY29uOyBicmVhaztcbiAgICAgICAgY2FzZSAnMTNkJzpcbiAgICAgICAgY2FzZSAnMTNuJzogcmV0dXJuIHNub3dJY29uOyBicmVhaztcbiAgICAgICAgLy8gZGVmYXVsdDogcmV0dXJuIGxvYWRpbmdJY29uOyBicmVhaztcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJidW5kbGVcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCBVcmxHZW4gZnJvbSAnLi91cmxHZW4uanMnXG5pbXBvcnQgU2VhcmNoTWFuYWdlciBmcm9tICcuL3NlYXJjaC5qcydcblxuaW1wb3J0IGNsb3VkeUljb24gZnJvbSAnLi9hc3NldHMvY2xvdWR5LnBuZydcbmltcG9ydCByYWluSWNvbiBmcm9tICcuL2Fzc2V0cy9yYWluLnBuZydcbmltcG9ydCBzaG93ZXJJY29uIGZyb20gJy4vYXNzZXRzL3Nob3dlci5wbmcnXG5pbXBvcnQgc25vd0ljb24gZnJvbSAnLi9hc3NldHMvc25vdy5wbmcnXG5pbXBvcnQgc3VubnlJY29uIGZyb20gJy4vYXNzZXRzL3N1bm55LnBuZydcbmltcG9ydCB0aHVuZGVyc3Rvcm1JY29uIGZyb20gJy4vYXNzZXRzL3RodW5kZXJzdG9ybS5wbmcnXG5pbXBvcnQgbmlnaHRJY29uIGZyb20gJy4vYXNzZXRzL25pZ2h0LnBuZydcbmltcG9ydCBwYXJ0eUNsb3VkeUljb24gZnJvbSAnLi9hc3NldHMvcGFydHlDbG91ZHkucG5nJ1xuXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09IFdFQlNJVEUgREFUQSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5jb25zdCB3ZWF0aGVyS2V5ID0gJ2JiYTZmNTZmMmRjZDM0ZGI1NTgxMjg1YmI4ODRlZTM2JztcbmNvbnN0IHdlYXRoZXJCYXNlVXJsID0gJ2h0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyJztcblxubGV0IHdlYXRoZXJVcmwgPSBuZXcgVXJsR2VuKHdlYXRoZXJCYXNlVXJsKTtcbndlYXRoZXJVcmwuYWRkS2V5KCdhcHBpZCcsIHdlYXRoZXJLZXkpO1xud2VhdGhlclVybC5hZGRLZXkoJ3VuaXRzJywgJ2ltcGVyaWFsJyk7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09IFNFVFVQID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmxldCBzdGF0ZSA9IHtcbiAgICBjaXR5OiAnTmV3IFlvcmsgQ2l0eScsXG4gICAgdGVtcDogbnVsbCwgLy8ga2VsdmluXG4gICAgZmVlbHNMaWtlOiBudWxsLFxuICAgIHdpbmRTcGVlZDogbnVsbCwgLy8gbWV0ZXIvc2VjXG4gICAgY2xvdWRzOiBudWxsLCAvLyAlIGNvdmVyYWdlXG4gICAgZGVzYzogJ2VtcHR5JyxcbiAgICBpY29uOiAnMDFkJywgLy8gd2VhdGhlciBpY29uICgwMS0wNCwwOS0xMSwxMyw1MCksIChkfG4pXG4gICAgLy8gMTogY2xlYXIgc2t5LCAyOiBmZXcgY2xvdWQsIDM6IHNjYXR0ZXJlZCBjbG91ZHMsIDQ6IGJyb2tlbiBjbG91ZHMsXG4gICAgLy8gOTogc2hvd2VyIHJhaW4sIDEwOiByYWluLCAxMTogdGh1bmRlcnN0b3JtLCAxMzogc25vdywgNTA6IG1pc3Q7XG5cbiAgICBwcmludFRlbXAoKSB7cmV0dXJuIHRoaXMudGVtcC50b1N0cmluZygpICsgJ8KwRic7fSxcbiAgICBwcmludEZlZWxzTGlrZSgpIHtyZXR1cm4gJ2ZlZWxzIGxpa2UgJyArIHRoaXMuZmVlbHNMaWtlLnRvU3RyaW5nKCkgKyAnwrBGJzt9LFxuICAgIHByaW50Q2xvdWRzKCkge3JldHVybiAnY2xvdWQgY292ZXJhZ2U6ICcgKyB0aGlzLmNsb3VkcyArICclJ30sXG4gICAgcHJpbnRXaW5kKCkge3JldHVybiAnd2luZDogJyArIHRoaXMud2luZFNwZWVkICsgJyBtcGgnO30sXG5cbiAgICB1cGRhdGUoZGF0YSkge1xuICAgICAgICB0aGlzLnRlbXAgPSBNYXRoLnJvdW5kKE51bWJlcihkYXRhLm1haW4udGVtcCkpO1xuICAgICAgICB0aGlzLmZlZWxzTGlrZSA9IE1hdGgucm91bmQoTnVtYmVyKGRhdGEubWFpbi5mZWVsc19saWtlKSk7XG4gICAgICAgIHRoaXMud2luZFNwZWVkID0gTWF0aC5yb3VuZChkYXRhLndpbmQuc3BlZWQpO1xuICAgICAgICB0aGlzLmRlc2MgPSBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuY2l0eSA9IGRhdGEubmFtZTtcbiAgICAgICAgdGhpcy5pY29uID0gZGF0YS53ZWF0aGVyWzBdLmljb247XG4gICAgICAgIGNvbnNvbGUubG9nKCdjdXJyZW50IHN0YXRlIHVwZGF0ZWQ6ICcsIHRoaXMpO1xuXG4gICAgICAgIHRoaXMud3JpdGUoKTtcbiAgICB9LFxuXG4gICAgd3JpdGUoKSB7XG5cbiAgICAgICAgY29uc3QgdGVtcE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcCcpO1xuICAgICAgICBjb25zdCBmZWVsc0xpa2VOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWxzLWxpa2UnKTtcbiAgICAgICAgY29uc3Qgd2luZE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZCcpO1xuICAgICAgICBjb25zdCBkZXNjTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNjJyk7XG4gICAgICAgIC8vIFRPRE86IHJlIGludGVncmF0ZSBjaXR5IG5vZGVcbiAgICAgICAgLy8gY29uc3QgY2l0eU5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eScpO1xuICAgICAgICBjb25zdCBpbWdOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW1nJyk7XG5cbiAgICAgICAgaW1nTm9kZS5zcmMgPSBnZXRXZWF0aGVySWNvbih0aGlzLmljb24pO1xuXG4gICAgICAgIGlmICghdGhpcy50ZW1wKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0ZW1wTm9kZS50ZXh0Q29udGVudCA9IHRoaXMucHJpbnRUZW1wKCk7XG4gICAgICAgIGZlZWxzTGlrZU5vZGUudGV4dENvbnRlbnQgPSB0aGlzLnByaW50RmVlbHNMaWtlKCk7XG4gICAgICAgIHdpbmROb2RlLnRleHRDb250ZW50ID0gdGhpcy5wcmludFdpbmQoKTtcbiAgICAgICAgZGVzY05vZGUudGV4dENvbnRlbnQgPSB0aGlzLmRlc2M7XG4gICAgICAgIC8vIGNpdHlOb2RlLnRleHRDb250ZW50ID0gdGhpcy5jaXR5O1xuICAgIH0sXG59O1xuXG5sZXQgc2VhcmNoTWFuYWdlciA9IG5ldyBTZWFyY2hNYW5hZ2VyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKSwgc3RhdGUpO1xuXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PSBmdW5jdGlvbnMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5hc3luYyBmdW5jdGlvbiBxdWVyeUNpdHkoY2l0eU5hbWUpIHtcbiAgICB3ZWF0aGVyVXJsLmFkZEtleSgncScsIGNpdHlOYW1lKTtcbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMzAwKSk7IC8vIERFQlVHXG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHdlYXRoZXJVcmwudXJsLCB7bW9kZTogJ2NvcnMnfSk7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gICAgICAgIGxldCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBpZiAoanNvbi5jb2QgIT0gJzIwMCcpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoanNvbi5jb2QpO1xuICAgICAgICB1cGRhdGVXZWF0aGVyU3RhdGUoanNvbik7XG4gICAgICAgIGNvbnNvbGUubG9nKCd3ZWF0aGVyIGpzb246ICcsIGpzb24pOyAvLyBERUJVR1xuICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdBbiBlcnJvciBvY2N1cmVkIHdoaWxlIGZldGNoaW5nOiAnLCBlcnIpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlV2VhdGhlclN0YXRlKGRhdGEpIHtcbiAgICBzdGF0ZS50ZW1wID0gTWF0aC5yb3VuZChOdW1iZXIoZGF0YS5tYWluLnRlbXApKTtcbiAgICBzdGF0ZS5mZWVsc0xpa2UgPSBNYXRoLnJvdW5kKE51bWJlcihkYXRhLm1haW4uZmVlbHNfbGlrZSkpO1xuICAgIHN0YXRlLndpbmRTcGVlZCA9IE1hdGgucm91bmQoZGF0YS53aW5kLnNwZWVkKTtcbiAgICBzdGF0ZS5kZXNjID0gZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICAgIHN0YXRlLmNpdHkgPSBkYXRhLm5hbWU7XG4gICAgc3RhdGUuaWNvbiA9IGRhdGEud2VhdGhlclswXS5pY29uO1xuICAgIHdyaXRlV2VhdGhlclN0YXRlKCk7XG59XG5cbmZ1bmN0aW9uIHdyaXRlV2VhdGhlclN0YXRlKCkge1xuICAgIGNvbnN0IHRlbXBOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXAnKTtcbiAgICBjb25zdCBmZWVsc0xpa2VOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWxzLWxpa2UnKTtcbiAgICBjb25zdCB3aW5kTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kJyk7XG4gICAgY29uc3QgZGVzY05vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzYycpO1xuICAgIGNvbnN0IGNpdHlOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHknKTtcbiAgICBjb25zdCBpbWdOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW1nJyk7XG5cbiAgICB0ZW1wTm9kZS50ZXh0Q29udGVudCA9IHN0YXRlLnByaW50VGVtcCgpO1xuICAgIGZlZWxzTGlrZU5vZGUudGV4dENvbnRlbnQgPSBzdGF0ZS5wcmludEZlZWxzTGlrZSgpO1xuICAgIHdpbmROb2RlLnRleHRDb250ZW50ID0gc3RhdGUucHJpbnRXaW5kKCk7XG4gICAgZGVzY05vZGUudGV4dENvbnRlbnQgPSBzdGF0ZS5kZXNjO1xuICAgIGNpdHlOb2RlLnRleHRDb250ZW50ID0gc3RhdGUuY2l0eTtcblxuICAgIGltZ05vZGUuc3JjID0gZ2V0V2VhdGhlckljb24oc3RhdGUuaWNvbik7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PSBJTklUID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBxdWVyeUNpdHkoJ05ldyBZb3JrIENpdHknKTtcblxuXG5cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT0gREVCVUcgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmNvbnNvbGUubG9nKHdlYXRoZXJVcmwudXJsLCB3ZWF0aGVyVXJsKTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT0gQ1JFRElUUyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTdW5ueVxuLy8gPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9mcmVlLWljb25zL3N1bm55XCIgdGl0bGU9XCJzdW5ueSBpY29uc1wiPlN1bm55IGljb25zIGNyZWF0ZWQgYnkganVzdGljb24gLSBGbGF0aWNvbjwvYT5cbi8vIFRodWRuZXJzdG9ybVxuLy8gPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9mcmVlLWljb25zL3RodW5kZXJzdG9ybVwiIHRpdGxlPVwidGh1bmRlcnN0b3JtIGljb25zXCI+VGh1bmRlcnN0b3JtIGljb25zIGNyZWF0ZWQgYnkganVzdGljb24gLSBGbGF0aWNvbjwvYT5cbi8vIFNob3dlclxuLy8gPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9mcmVlLWljb25zL3JhaW5cIiB0aXRsZT1cInJhaW4gaWNvbnNcIj5SYWluIGljb25zIGNyZWF0ZWQgYnkganVzdGljb24gLSBGbGF0aWNvbjwvYT5cbi8vIFJhaW5cbi8vIDxhIGhyZWY9XCJodHRwczovL3d3dy5mbGF0aWNvbi5jb20vZnJlZS1pY29ucy9yYWluXCIgdGl0bGU9XCJyYWluIGljb25zXCI+UmFpbiBpY29ucyBjcmVhdGVkIGJ5IGp1c3RpY29uIC0gRmxhdGljb248L2E+XG4vLyBDbG91ZHlcbi8vIDxhIGhyZWY9XCJodHRwczovL3d3dy5mbGF0aWNvbi5jb20vZnJlZS1pY29ucy9jbG91ZFwiIHRpdGxlPVwiY2xvdWQgaWNvbnNcIj5DbG91ZCBpY29ucyBjcmVhdGVkIGJ5IGp1c3RpY29uIC0gRmxhdGljb248L2E+XG4vLyBTbm93XG4vLyA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2ZyZWUtaWNvbnMvc25vd2ZhbGxcIiB0aXRsZT1cInNub3dmYWxsIGljb25zXCI+U25vd2ZhbGwgaWNvbnMgY3JlYXRlZCBieSBqdXN0aWNvbiAtIEZsYXRpY29uPC9hPlxuLy8gTmlnaHRcbi8vIDxhIGhyZWY9XCJodHRwczovL3d3dy5mbGF0aWNvbi5jb20vZnJlZS1pY29ucy9jbGVhclwiIHRpdGxlPVwiY2xlYXIgaWNvbnNcIj5DbGVhciBpY29ucyBjcmVhdGVkIGJ5IGp1c3RpY29uIC0gRmxhdGljb248L2E+XG4vLyBQYXJ0eSBDbG91ZHlcbi8vIDxhIGhyZWY9XCJodHRwczovL3d3dy5mbGF0aWNvbi5jb20vZnJlZS1pY29ucy9jbG91ZHlcIiB0aXRsZT1cImNsb3VkeSBpY29uc1wiPkNsb3VkeSBpY29ucyBjcmVhdGVkIGJ5IGp1c3RpY29uIC0gRmxhdGljb248L2E+Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9