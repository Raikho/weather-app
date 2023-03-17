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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --bg: #164e63;\n    --bgLighter: #155e75;\n    --fg: #f0f9ff;\n\n    --icon: #bfdbfe;\n    --iconHover: #e0f2fe;\n    --iconActive: #028fc7;\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    margin: 0;\n\n    background-color: var(--bg);\n    color: var(--fg);\n    font-family: helvetica, sans-serif;\n    font-size: 18px;\n\n    display: grid;\n    grid-template-rows: 1fr 5fr;\n}\n\n/* ============================ HEADER ============================= */\n#header {\n    /* border: 1px dotted lightgray; */\n    background-color: var(--bgLighter);\n    box-shadow: 0px 5px 10px #0003;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.city-container {\n    display: flex;\n    padding: 10px;\n    gap: 20px;\n\n    align-items: center;\n}\n/* .city-container, .city-container>*{border: 1px dotted white;} */\n\n.input-container {\n    display: flex;\n    flex-direction: column;\n}\n\n.error {\n    align-self: start;\n\n    position: absolute;\n    padding-left: 10px;\n    padding-top: 2px;\n    font-size: 14px;\n    color: #ef4444aa;\n}\ninput {\n    height: 30px;\n    border-radius: 5px;\n    padding: 10px 10px 10px 10px;\n    font-size: 18px;\n    background-color: var(--iconHover);\n}\ninput:invalid {border-color: red;}\ninput:focus:invalid {outline-color: red;}\n/* input:invalid {border-: red;} */\n\n\n.city {\n    font-size: 24px;\n    padding: 5px;\n}\n\n.icon {\n    width: 30px;\n    height: 30px;\n    -webkit-mask-size: contain;\n    mask-size: contain;\n    background-color: var(--icon);\n}\n.icon.edit {\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n.icon.search {\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n.icon.cancel {\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n.icon.loading {\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n\n    animation: spin 2s linear 0s infinite normal;\n}\n@keyframes spin {\n    0% {transform: rotate(0deg);}\n    100% {transform: rotate(360deg);}\n}\n\n.icon:hover {background-color: var(--iconHover);}\n.icon:active {background-color: var(--iconActive);}\n\n/* ============================= MAIN ============================== */\n\n#main {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.middle-container {\n    /* border: 1px dotted lightgray; */\n    padding: 20px;\n\n    display: flex;\n    flex-direction: column;\n}\n.text {\n    display: flex;\n    justify-content: center;\n}\n\n.temp {\n    font-size: 64px;\n}\n\nimg {\n    margin-bottom: 40px;\n    border-color: 1px dotted white;\n    width: clamp(100px, 30vmin, 1000px);\n    height: clamp(100px, 30vmin, 1000px);\n}\nimg.empty {\n    background-color: var(--icon);\n    -webkit-mask-size: contain;\n    mask-size: contain;\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,oBAAoB;IACpB,aAAa;;IAEb,eAAe;IACf,oBAAoB;IACpB,qBAAqB;AACzB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,SAAS;;IAET,2BAA2B;IAC3B,gBAAgB;IAChB,kCAAkC;IAClC,eAAe;;IAEf,aAAa;IACb,2BAA2B;AAC/B;;AAEA,sEAAsE;AACtE;IACI,kCAAkC;IAClC,kCAAkC;IAClC,8BAA8B;;IAE9B,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,SAAS;;IAET,mBAAmB;AACvB;AACA,kEAAkE;;AAElE;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;;IAEjB,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,YAAY;IACZ,kBAAkB;IAClB,4BAA4B;IAC5B,eAAe;IACf,kCAAkC;AACtC;AACA,eAAe,iBAAiB,CAAC;AACjC,qBAAqB,kBAAkB,CAAC;AACxC,kCAAkC;;;AAGlC;IACI,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,0BAA0B;IAC1B,kBAAkB;IAClB,6BAA6B;AACjC;AACA;IACI,2DAA0C;IAC1C,mDAAkC;AACtC;AACA;IACI,2DAA4C;IAC5C,mDAAoC;AACxC;AACA;IACI,2DAA4C;IAC5C,mDAAoC;AACxC;AACA;IACI,2DAA6C;IAC7C,mDAAqC;;IAErC,4CAA4C;AAChD;AACA;IACI,IAAI,uBAAuB,CAAC;IAC5B,MAAM,yBAAyB,CAAC;AACpC;;AAEA,aAAa,kCAAkC,CAAC;AAChD,cAAc,mCAAmC,CAAC;;AAElD,sEAAsE;;AAEtE;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,kCAAkC;IAClC,aAAa;;IAEb,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,mBAAmB;IACnB,8BAA8B;IAC9B,mCAAmC;IACnC,oCAAoC;AACxC;AACA;IACI,6BAA6B;IAC7B,0BAA0B;IAC1B,kBAAkB;IAClB,2DAA6C;IAC7C,mDAAqC;AACzC","sourcesContent":[":root {\n    --bg: #164e63;\n    --bgLighter: #155e75;\n    --fg: #f0f9ff;\n\n    --icon: #bfdbfe;\n    --iconHover: #e0f2fe;\n    --iconActive: #028fc7;\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    margin: 0;\n\n    background-color: var(--bg);\n    color: var(--fg);\n    font-family: helvetica, sans-serif;\n    font-size: 18px;\n\n    display: grid;\n    grid-template-rows: 1fr 5fr;\n}\n\n/* ============================ HEADER ============================= */\n#header {\n    /* border: 1px dotted lightgray; */\n    background-color: var(--bgLighter);\n    box-shadow: 0px 5px 10px #0003;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.city-container {\n    display: flex;\n    padding: 10px;\n    gap: 20px;\n\n    align-items: center;\n}\n/* .city-container, .city-container>*{border: 1px dotted white;} */\n\n.input-container {\n    display: flex;\n    flex-direction: column;\n}\n\n.error {\n    align-self: start;\n\n    position: absolute;\n    padding-left: 10px;\n    padding-top: 2px;\n    font-size: 14px;\n    color: #ef4444aa;\n}\ninput {\n    height: 30px;\n    border-radius: 5px;\n    padding: 10px 10px 10px 10px;\n    font-size: 18px;\n    background-color: var(--iconHover);\n}\ninput:invalid {border-color: red;}\ninput:focus:invalid {outline-color: red;}\n/* input:invalid {border-: red;} */\n\n\n.city {\n    font-size: 24px;\n    padding: 5px;\n}\n\n.icon {\n    width: 30px;\n    height: 30px;\n    -webkit-mask-size: contain;\n    mask-size: contain;\n    background-color: var(--icon);\n}\n.icon.edit {\n    -webkit-mask-image: url('assets/edit.svg');\n    mask-image: url('assets/edit.svg');\n}\n.icon.search {\n    -webkit-mask-image: url('assets/search.svg');\n    mask-image: url('assets/search.svg');\n}\n.icon.cancel {\n    -webkit-mask-image: url('assets/cancel.svg');\n    mask-image: url('assets/cancel.svg');\n}\n.icon.loading {\n    -webkit-mask-image: url('assets/loading.svg');\n    mask-image: url('assets/loading.svg');\n\n    animation: spin 2s linear 0s infinite normal;\n}\n@keyframes spin {\n    0% {transform: rotate(0deg);}\n    100% {transform: rotate(360deg);}\n}\n\n.icon:hover {background-color: var(--iconHover);}\n.icon:active {background-color: var(--iconActive);}\n\n/* ============================= MAIN ============================== */\n\n#main {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.middle-container {\n    /* border: 1px dotted lightgray; */\n    padding: 20px;\n\n    display: flex;\n    flex-direction: column;\n}\n.text {\n    display: flex;\n    justify-content: center;\n}\n\n.temp {\n    font-size: 64px;\n}\n\nimg {\n    margin-bottom: 40px;\n    border-color: 1px dotted white;\n    width: clamp(100px, 30vmin, 1000px);\n    height: clamp(100px, 30vmin, 1000px);\n}\nimg.empty {\n    background-color: var(--icon);\n    -webkit-mask-size: contain;\n    mask-size: contain;\n    -webkit-mask-image: url('assets/loading.svg');\n    mask-image: url('assets/loading.svg');\n}"],"sourceRoot":""}]);
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
const weatherBaseUrl = 'https://api.openweathermap.org/data/2.5/weather';
let weatherUrl = new _urlGen_js__WEBPACK_IMPORTED_MODULE_1__["default"](weatherBaseUrl);
weatherUrl.addKey('appid', weatherKey);
weatherUrl.addKey('units', 'imperial');



class SearchManager {
    constructor(node, weatherState) {
        this.node = node;
        this.state = 'state'; // found, search, retry, loading
        this.weatherState = new _weatherState_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.weatherState.write();

        _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].clearNode(this.node);
        this.updateFoundState();
        // this.updateSearchState();
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
            let tempJson = null;

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

async function queryCity(cityName, iconNode) {
    return new Promise(async (resolve, reject) => {
        iconNode.classList.replace('search', 'loading');

        await new Promise(resolve => setTimeout(resolve, 500)); // DEBUG
        weatherUrl.addKey('q', cityName);
        let response = await fetch(weatherUrl.url, {mode: 'cors'});
        if (!response.ok)
            reject(response.statusText);

        let json = await response.json();
        if (json.cod != '200')
            reject(json.cod);
        resolve(json);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNMOztBQUVBLHdCQUF3QixrREFBYTs7O0FBR3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFO0FBQ2hFLG9EQUFvRCxhQUFhO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QyxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7QUFLQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy91cmxHZW4uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvd2VhdGhlclN0YXRlLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImFzc2V0cy9lZGl0LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcImFzc2V0cy9zZWFyY2guc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiYXNzZXRzL2NhbmNlbC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCJhc3NldHMvbG9hZGluZy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tYmc6ICMxNjRlNjM7XFxuICAgIC0tYmdMaWdodGVyOiAjMTU1ZTc1O1xcbiAgICAtLWZnOiAjZjBmOWZmO1xcblxcbiAgICAtLWljb246ICNiZmRiZmU7XFxuICAgIC0taWNvbkhvdmVyOiAjZTBmMmZlO1xcbiAgICAtLWljb25BY3RpdmU6ICMwMjhmYzc7XFxufVxcblxcbmJvZHkge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG1hcmdpbjogMDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmcpO1xcbiAgICBjb2xvcjogdmFyKC0tZmcpO1xcbiAgICBmb250LWZhbWlseTogaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDVmcjtcXG59XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PSBIRUFERVIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4jaGVhZGVyIHtcXG4gICAgLyogYm9yZGVyOiAxcHggZG90dGVkIGxpZ2h0Z3JheTsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdMaWdodGVyKTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCAxMHB4ICMwMDAzO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNpdHktY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZ2FwOiAyMHB4O1xcblxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4vKiAuY2l0eS1jb250YWluZXIsIC5jaXR5LWNvbnRhaW5lcj4qe2JvcmRlcjogMXB4IGRvdHRlZCB3aGl0ZTt9ICovXFxuXFxuLmlucHV0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5lcnJvciB7XFxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcblxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgcGFkZGluZy10b3A6IDJweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBjb2xvcjogI2VmNDQ0NGFhO1xcbn1cXG5pbnB1dCB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWljb25Ib3Zlcik7XFxufVxcbmlucHV0OmludmFsaWQge2JvcmRlci1jb2xvcjogcmVkO31cXG5pbnB1dDpmb2N1czppbnZhbGlkIHtvdXRsaW5lLWNvbG9yOiByZWQ7fVxcbi8qIGlucHV0OmludmFsaWQge2JvcmRlci06IHJlZDt9ICovXFxuXFxuXFxuLmNpdHkge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLmljb24ge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAtd2Via2l0LW1hc2stc2l6ZTogY29udGFpbjtcXG4gICAgbWFzay1zaXplOiBjb250YWluO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pY29uKTtcXG59XFxuLmljb24uZWRpdCB7XFxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuLmljb24uc2VhcmNoIHtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgICBtYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG4uaWNvbi5jYW5jZWwge1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICAgIG1hc2staW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxufVxcbi5pY29uLmxvYWRpbmcge1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxuICAgIG1hc2staW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxuXFxuICAgIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsO1xcbn1cXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcbiAgICAwJSB7dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7fVxcbiAgICAxMDAlIHt0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO31cXG59XFxuXFxuLmljb246aG92ZXIge2JhY2tncm91bmQtY29sb3I6IHZhcigtLWljb25Ib3Zlcik7fVxcbi5pY29uOmFjdGl2ZSB7YmFja2dyb3VuZC1jb2xvcjogdmFyKC0taWNvbkFjdGl2ZSk7fVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09IE1BSU4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuI21haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1pZGRsZS1jb250YWluZXIge1xcbiAgICAvKiBib3JkZXI6IDFweCBkb3R0ZWQgbGlnaHRncmF5OyAqL1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4udGV4dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udGVtcCB7XFxuICAgIGZvbnQtc2l6ZTogNjRweDtcXG59XFxuXFxuaW1nIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG4gICAgYm9yZGVyLWNvbG9yOiAxcHggZG90dGVkIHdoaXRlO1xcbiAgICB3aWR0aDogY2xhbXAoMTAwcHgsIDMwdm1pbiwgMTAwMHB4KTtcXG4gICAgaGVpZ2h0OiBjbGFtcCgxMDBweCwgMzB2bWluLCAxMDAwcHgpO1xcbn1cXG5pbWcuZW1wdHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pY29uKTtcXG4gICAgLXdlYmtpdC1tYXNrLXNpemU6IGNvbnRhaW47XFxuICAgIG1hc2stc2l6ZTogY29udGFpbjtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgICBtYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixhQUFhOztJQUViLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixTQUFTOztJQUVULDJCQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIsa0NBQWtDO0lBQ2xDLGVBQWU7O0lBRWYsYUFBYTtJQUNiLDJCQUEyQjtBQUMvQjs7QUFFQSxzRUFBc0U7QUFDdEU7SUFDSSxrQ0FBa0M7SUFDbEMsa0NBQWtDO0lBQ2xDLDhCQUE4Qjs7SUFFOUIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixTQUFTOztJQUVULG1CQUFtQjtBQUN2QjtBQUNBLGtFQUFrRTs7QUFFbEU7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksaUJBQWlCOztJQUVqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2Ysa0NBQWtDO0FBQ3RDO0FBQ0EsZUFBZSxpQkFBaUIsQ0FBQztBQUNqQyxxQkFBcUIsa0JBQWtCLENBQUM7QUFDeEMsa0NBQWtDOzs7QUFHbEM7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQiw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLDJEQUEwQztJQUMxQyxtREFBa0M7QUFDdEM7QUFDQTtJQUNJLDJEQUE0QztJQUM1QyxtREFBb0M7QUFDeEM7QUFDQTtJQUNJLDJEQUE0QztJQUM1QyxtREFBb0M7QUFDeEM7QUFDQTtJQUNJLDJEQUE2QztJQUM3QyxtREFBcUM7O0lBRXJDLDRDQUE0QztBQUNoRDtBQUNBO0lBQ0ksSUFBSSx1QkFBdUIsQ0FBQztJQUM1QixNQUFNLHlCQUF5QixDQUFDO0FBQ3BDOztBQUVBLGFBQWEsa0NBQWtDLENBQUM7QUFDaEQsY0FBYyxtQ0FBbUMsQ0FBQzs7QUFFbEQsc0VBQXNFOztBQUV0RTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLGFBQWE7O0lBRWIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLG1DQUFtQztJQUNuQyxvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLDZCQUE2QjtJQUM3QiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLDJEQUE2QztJQUM3QyxtREFBcUM7QUFDekNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWJnOiAjMTY0ZTYzO1xcbiAgICAtLWJnTGlnaHRlcjogIzE1NWU3NTtcXG4gICAgLS1mZzogI2YwZjlmZjtcXG5cXG4gICAgLS1pY29uOiAjYmZkYmZlO1xcbiAgICAtLWljb25Ib3ZlcjogI2UwZjJmZTtcXG4gICAgLS1pY29uQWN0aXZlOiAjMDI4ZmM3O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDA7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnKTtcXG4gICAgY29sb3I6IHZhcigtLWZnKTtcXG4gICAgZm9udC1mYW1pbHk6IGhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA1ZnI7XFxufVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gSEVBREVSID09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuI2hlYWRlciB7XFxuICAgIC8qIGJvcmRlcjogMXB4IGRvdHRlZCBsaWdodGdyYXk7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnTGlnaHRlcik7XFxuICAgIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCAjMDAwMztcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jaXR5LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGdhcDogMjBweDtcXG5cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLyogLmNpdHktY29udGFpbmVyLCAuY2l0eS1jb250YWluZXI+Kntib3JkZXI6IDFweCBkb3R0ZWQgd2hpdGU7fSAqL1xcblxcbi5pbnB1dC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZXJyb3Ige1xcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAycHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgY29sb3I6ICNlZjQ0NDRhYTtcXG59XFxuaW5wdXQge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTBweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pY29uSG92ZXIpO1xcbn1cXG5pbnB1dDppbnZhbGlkIHtib3JkZXItY29sb3I6IHJlZDt9XFxuaW5wdXQ6Zm9jdXM6aW52YWxpZCB7b3V0bGluZS1jb2xvcjogcmVkO31cXG4vKiBpbnB1dDppbnZhbGlkIHtib3JkZXItOiByZWQ7fSAqL1xcblxcblxcbi5jaXR5IHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5pY29uIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgLXdlYmtpdC1tYXNrLXNpemU6IGNvbnRhaW47XFxuICAgIG1hc2stc2l6ZTogY29udGFpbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taWNvbik7XFxufVxcbi5pY29uLmVkaXQge1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybCgnYXNzZXRzL2VkaXQuc3ZnJyk7XFxuICAgIG1hc2staW1hZ2U6IHVybCgnYXNzZXRzL2VkaXQuc3ZnJyk7XFxufVxcbi5pY29uLnNlYXJjaCB7XFxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKCdhc3NldHMvc2VhcmNoLnN2ZycpO1xcbiAgICBtYXNrLWltYWdlOiB1cmwoJ2Fzc2V0cy9zZWFyY2guc3ZnJyk7XFxufVxcbi5pY29uLmNhbmNlbCB7XFxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKCdhc3NldHMvY2FuY2VsLnN2ZycpO1xcbiAgICBtYXNrLWltYWdlOiB1cmwoJ2Fzc2V0cy9jYW5jZWwuc3ZnJyk7XFxufVxcbi5pY29uLmxvYWRpbmcge1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybCgnYXNzZXRzL2xvYWRpbmcuc3ZnJyk7XFxuICAgIG1hc2staW1hZ2U6IHVybCgnYXNzZXRzL2xvYWRpbmcuc3ZnJyk7XFxuXFxuICAgIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsO1xcbn1cXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcbiAgICAwJSB7dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7fVxcbiAgICAxMDAlIHt0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO31cXG59XFxuXFxuLmljb246aG92ZXIge2JhY2tncm91bmQtY29sb3I6IHZhcigtLWljb25Ib3Zlcik7fVxcbi5pY29uOmFjdGl2ZSB7YmFja2dyb3VuZC1jb2xvcjogdmFyKC0taWNvbkFjdGl2ZSk7fVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09IE1BSU4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuI21haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1pZGRsZS1jb250YWluZXIge1xcbiAgICAvKiBib3JkZXI6IDFweCBkb3R0ZWQgbGlnaHRncmF5OyAqL1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4udGV4dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udGVtcCB7XFxuICAgIGZvbnQtc2l6ZTogNjRweDtcXG59XFxuXFxuaW1nIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG4gICAgYm9yZGVyLWNvbG9yOiAxcHggZG90dGVkIHdoaXRlO1xcbiAgICB3aWR0aDogY2xhbXAoMTAwcHgsIDMwdm1pbiwgMTAwMHB4KTtcXG4gICAgaGVpZ2h0OiBjbGFtcCgxMDBweCwgMzB2bWluLCAxMDAwcHgpO1xcbn1cXG5pbWcuZW1wdHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pY29uKTtcXG4gICAgLXdlYmtpdC1tYXNrLXNpemU6IGNvbnRhaW47XFxuICAgIG1hc2stc2l6ZTogY29udGFpbjtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoJ2Fzc2V0cy9sb2FkaW5nLnN2ZycpO1xcbiAgICBtYXNrLWltYWdlOiB1cmwoJ2Fzc2V0cy9sb2FkaW5nLnN2ZycpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgRE9NID0ge307XG5cbkRPTS5jbGVhck5vZGUgPSBmdW5jdGlvbihub2RlKSB7XG4gICAgd2hpbGUobm9kZS5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgbm9kZS5yZW1vdmVDaGlsZChub2RlLmZpcnN0Q2hpbGQpO1xuICAgIH1cbn1cblxuRE9NLmNyZWF0ZU5vZGUgPSBmdW5jdGlvbihwYXJlbnROb2RlLCB0YWcsIGNsYXNzTGlzdCwgdGV4dENvbnRlbnQpIHtcbiAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICBpZiAoY2xhc3NMaXN0KVxuICAgICAgICBmb3IgKGxldCBjbHMgb2YgY2xhc3NMaXN0KVxuICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKGNscyk7XG4gICAgbm9kZS50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgcmV0dXJuIG5vZGU7XG59XG5cbkRPTS5jcmVhdGVEaXYgPSBmdW5jdGlvbihwYXJlbnROb2RlLCBjbGFzc0xpc3QsIHRleHRDb250ZW50KSB7XG4gICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHBhcmVudE5vZGUsICdkaXYnLCBjbGFzc0xpc3QsIHRleHRDb250ZW50KVxufVxuXG5ET00uY3JlYXRlVGV4dElucHV0ID0gZnVuY3Rpb24ocGFyZW50Tm9kZSwgaWQsIHBsYWNlaG9sZGVyKSB7XG4gICAgbGV0IGlucHV0Tm9kZSA9IHRoaXMuY3JlYXRlTm9kZShwYXJlbnROb2RlLCAnaW5wdXQnKTtcbiAgICBpbnB1dE5vZGUudHlwZSA9ICd0ZXh0JztcbiAgICBpbnB1dE5vZGUuaWQgPSBpZDtcbiAgICBpbnB1dE5vZGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIHBsYWNlaG9sZGVyKTtcbiAgICByZXR1cm4gaW5wdXROb2RlO1xufVxuXG5ET00uY3JlYXRlSW1hZ2UgPSBmdW5jdGlvbihwYXJlbnROb2RlLCBjbGFzc0xpc3QsIHNyYywgYWx0KSB7XG4gICAgbGV0IGltYWdlTm9kZSA9IHRoaXMuY3JlYXRlTm9kZShwYXJlbnROb2RlLCAnaW1nJywgY2xhc3NMaXN0KTtcbiAgICBpZiAoc3JjKVxuICAgICAgICBpbWFnZU5vZGUuc3JjID0gc3JjO1xuICAgIGltYWdlTm9kZS5hbHQgPSBhbHQ7XG4gICAgcmV0dXJuIGltYWdlTm9kZTtcbn1cblxuRE9NLmNyZWF0ZUljb24gPSBmdW5jdGlvbihwYXJlbnROb2RlLCBjbGFzc0xpc3QsIHNyYykge1xuICAgIGxldCBpY29uTm9kZSA9IHRoaXMuY3JlYXRlTm9kZShwYXJlbnROb2RlLCAnb2JqZWN0JywgY2xhc3NMaXN0KTtcbiAgICBpY29uTm9kZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnaW1hZ2Uvc3ZnK3htbCcpO1xuICAgIGljb25Ob2RlLnNldEF0dHJpYnV0ZSgnZGF0YScsIHNyYylcbiAgICByZXR1cm4gaWNvbk5vZGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IERPTTsiLCJpbXBvcnQgRE9NIGZyb20gJy4vZG9tLmpzJ1xuXG5pbXBvcnQgVXJsR2VuIGZyb20gJy4vdXJsR2VuLmpzJztcbmNvbnN0IHdlYXRoZXJLZXkgPSAnYmJhNmY1NmYyZGNkMzRkYjU1ODEyODViYjg4NGVlMzYnO1xuY29uc3Qgd2VhdGhlckJhc2VVcmwgPSAnaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXInO1xubGV0IHdlYXRoZXJVcmwgPSBuZXcgVXJsR2VuKHdlYXRoZXJCYXNlVXJsKTtcbndlYXRoZXJVcmwuYWRkS2V5KCdhcHBpZCcsIHdlYXRoZXJLZXkpO1xud2VhdGhlclVybC5hZGRLZXkoJ3VuaXRzJywgJ2ltcGVyaWFsJyk7XG5cbmltcG9ydCBXZWF0aGVyU3RhdGUgZnJvbSAnLi93ZWF0aGVyU3RhdGUuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3Rvcihub2RlLCB3ZWF0aGVyU3RhdGUpIHtcbiAgICAgICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICdzdGF0ZSc7IC8vIGZvdW5kLCBzZWFyY2gsIHJldHJ5LCBsb2FkaW5nXG4gICAgICAgIHRoaXMud2VhdGhlclN0YXRlID0gbmV3IFdlYXRoZXJTdGF0ZSgpO1xuICAgICAgICB0aGlzLndlYXRoZXJTdGF0ZS53cml0ZSgpO1xuXG4gICAgICAgIERPTS5jbGVhck5vZGUodGhpcy5ub2RlKTtcbiAgICAgICAgdGhpcy51cGRhdGVGb3VuZFN0YXRlKCk7XG4gICAgICAgIC8vIHRoaXMudXBkYXRlU2VhcmNoU3RhdGUoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVTZWFyY2hTdGF0ZSgpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICdzZWFyY2gnO1xuICAgICAgICBET00uY2xlYXJOb2RlKHRoaXMubm9kZSk7XG5cbiAgICAgICAgY29uc3QgY29udGFpbmVyTm9kZSA9IERPTS5jcmVhdGVEaXYodGhpcy5ub2RlLCBbJ2NpdHktY29udGFpbmVyJ10pO1xuXG4gICAgICAgIGNvbnN0IGVycm9yTm9kZSA9IERPTS5jcmVhdGVEaXYoY29udGFpbmVyTm9kZSwgWydlcnJvciddKTtcblxuICAgICAgICBjb25zdCBpbnB1dE5vZGUgPSBET00uY3JlYXRlVGV4dElucHV0KGNvbnRhaW5lck5vZGUsIFsnY2l0eS1pbnB1dCddLCAnRW50ZXIgY2l0eTonKTtcbiAgICAgICAgaW5wdXROb2RlLnNldEF0dHJpYnV0ZSgncGF0dGVybicsIFwiW2EtekEtWiAnXSskXCIpO1xuICAgICAgICBjb25zdCBpY29uTm9kZSA9IERPTS5jcmVhdGVEaXYoY29udGFpbmVyTm9kZSwgWydpY29uJywgJ3NlYXJjaCddKTtcbiAgICAgICAgY29uc3QgY2FuY2VsTm9kZSA9IERPTS5jcmVhdGVEaXYoY29udGFpbmVyTm9kZSwgWydpY29uJywgJ2NhbmNlbCddKTtcbiAgICAgICAgY2FuY2VsTm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudXBkYXRlRm91bmRTdGF0ZS5iaW5kKHRoaXMpLCB7b25jZTogdHJ1ZX0pO1xuXG4gICAgICAgIGljb25Ob2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGNpdHlOYW1lID0gaW5wdXROb2RlLnZhbHVlO1xuICAgICAgICAgICAgaWYgKCFjaXR5TmFtZSkgcmV0dXJuO1xuICAgICAgICAgICAgbGV0IHRlbXBKc29uID0gbnVsbDtcblxuICAgICAgICAgICAgbGV0IHF1ZXJ5UHJvbWlzZSA9IHF1ZXJ5Q2l0eShjaXR5TmFtZSwgaWNvbk5vZGUpO1xuICAgICAgICAgICAgbGV0IHRpbWVvdXRQcm9taXNlID0gbmV3IFByb21pc2UoKF8sIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gcmVqZWN0KCd0aW1lb3V0JyksIDEyMDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBsZXQgY2FuY2VsUHJvbWlzZSA9IG5ldyBQcm9taXNlKChfLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBjYW5jZWxOb2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcmVqZWN0KCdjYW5jZWwnKSwge29uY2U6IHRydWV9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IFByb21pc2UucmFjZShbcXVlcnlQcm9taXNlLCB0aW1lb3V0UHJvbWlzZSwgY2FuY2VsUHJvbWlzZV0pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyYWNlIHJlc29sdmVkLCByZXN1bHQ6ICcsIHJlc3VsdCk7IC8vIERFQlVHXG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZSAhPSdzZWFyY2gnKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICB0aGlzLndlYXRoZXJTdGF0ZS51cGRhdGUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbmV3IHdlYXRoZXIgc3RhdGU6ICcsIHRoaXMud2VhdGhlclN0YXRlKTsgLy8gREVCVUdcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUZvdW5kU3RhdGUoKTtcbiAgICAgICAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JhY2UgZXJyb3I6ICcsIGVycik7XG5cbiAgICAgICAgICAgICAgICBpZiAoZXJyID09PSAndGltZW91dCcpXG4gICAgICAgICAgICAgICAgICAgIGVycm9yTm9kZS50ZXh0Q29udGVudCA9ICdObyByZXNwb25zZSwgdHJ5IGFnYWluIGxhdGVyJztcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChlcnIgPT09ICdOb3QgRm91bmQnKVxuICAgICAgICAgICAgICAgICAgICBlcnJvck5vZGUudGV4dENvbnRlbnQgPSAnQ2l0eSBub3QgZm91bmQnO1xuXG4gICAgICAgICAgICAgICAgaWNvbk5vZGUuY2xhc3NMaXN0LnJlcGxhY2UoJ2xvYWRpbmcnLCAnc2VhcmNoJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG5cbiAgICB9XG5cbiAgICB1cGRhdGVGb3VuZFN0YXRlKCkge1xuICAgICAgICB0aGlzLnN0YXRlID0gJ2ZvdW5kJztcbiAgICAgICAgRE9NLmNsZWFyTm9kZSh0aGlzLm5vZGUpO1xuXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lck5vZGUgPSBET00uY3JlYXRlRGl2KHRoaXMubm9kZSwgWydjaXR5LWNvbnRhaW5lciddKTtcbiAgICAgICAgY29uc3QgY2l0eU5vZGUgPSBET00uY3JlYXRlRGl2KGNvbnRhaW5lck5vZGUsIFsnY2l0eSddLCB0aGlzLndlYXRoZXJTdGF0ZS5jaXR5KTtcbiAgICAgICAgY29uc3QgZWRpdE5vZGUgPSBET00uY3JlYXRlRGl2KGNvbnRhaW5lck5vZGUsIFsnaWNvbicsICdlZGl0J10pOyAvLyBERUJVRywgY2hhbmdlIGJhY2sgdG8gZWRpdFxuXG4gICAgICAgIHRoaXMud2VhdGhlclN0YXRlLndyaXRlKCk7XG5cbiAgICAgICAgZWRpdE5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNlYXJjaFN0YXRlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gcXVlcnlDaXR5KGNpdHlOYW1lLCBpY29uTm9kZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGljb25Ob2RlLmNsYXNzTGlzdC5yZXBsYWNlKCdzZWFyY2gnLCAnbG9hZGluZycpO1xuXG4gICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCA1MDApKTsgLy8gREVCVUdcbiAgICAgICAgd2VhdGhlclVybC5hZGRLZXkoJ3EnLCBjaXR5TmFtZSk7XG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHdlYXRoZXJVcmwudXJsLCB7bW9kZTogJ2NvcnMnfSk7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spXG4gICAgICAgICAgICByZWplY3QocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG5cbiAgICAgICAgbGV0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGlmIChqc29uLmNvZCAhPSAnMjAwJylcbiAgICAgICAgICAgIHJlamVjdChqc29uLmNvZCk7XG4gICAgICAgIHJlc29sdmUoanNvbik7XG4gICAgfSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXJsR2VuIHtcbiAgICBjb25zdHJ1Y3RvcihiYXNlVXJsKSB7XG4gICAgICAgIHRoaXMuYmFzZVVybCA9IGJhc2VVcmw7XG4gICAgICAgIHRoaXMua2V5UGFpcnMgPSBbXTtcbiAgICB9XG4gICAgYWRkS2V5KGtleSwgdmFsdWUpIHtcbiAgICAgICAgZm9yIChsZXQgcGFpciBvZiB0aGlzLmtleVBhaXJzKSB7XG4gICAgICAgICAgICBpZiAocGFpci5rZXkgPT09IGtleSkge1xuICAgICAgICAgICAgICAgIHBhaXIudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5rZXlQYWlycy5wdXNoKHtrZXksIHZhbHVlfSk7XG4gICAgfVxuICAgIGdldCB1cmwoKSB7XG4gICAgICAgIGxldCBvdXQgPSB0aGlzLmJhc2VVcmw7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5rZXlQYWlycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGtleSA9IHRoaXMua2V5UGFpcnNbaV0ua2V5O1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5rZXlQYWlyc1tpXS52YWx1ZTtcbiAgICAgICAgICAgIG91dCArPSAoaSA9PSAwKSA/ICc/JyA6ICcmJztcbiAgICAgICAgICAgIG91dCA9IG91dCArIGtleSArICc9JyArIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxufVxuIiwiaW1wb3J0IGNsb3VkeUljb24gZnJvbSAnLi9hc3NldHMvY2xvdWR5LnBuZydcbmltcG9ydCByYWluSWNvbiBmcm9tICcuL2Fzc2V0cy9yYWluLnBuZydcbmltcG9ydCBzaG93ZXJJY29uIGZyb20gJy4vYXNzZXRzL3Nob3dlci5wbmcnXG5pbXBvcnQgc25vd0ljb24gZnJvbSAnLi9hc3NldHMvc25vdy5wbmcnXG5pbXBvcnQgc3VubnlJY29uIGZyb20gJy4vYXNzZXRzL3N1bm55LnBuZydcbmltcG9ydCB0aHVuZGVyc3Rvcm1JY29uIGZyb20gJy4vYXNzZXRzL3RodW5kZXJzdG9ybS5wbmcnXG5pbXBvcnQgbmlnaHRJY29uIGZyb20gJy4vYXNzZXRzL25pZ2h0LnBuZydcbmltcG9ydCBwYXJ0eUNsb3VkeUljb24gZnJvbSAnLi9hc3NldHMvcGFydHlDbG91ZHkucG5nJ1xuaW1wb3J0IGxvYWRpbmdJY29uIGZyb20gJy4vYXNzZXRzL2xvYWRpbmcuc3ZnJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXZWF0aGVyU3RhdGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnRlbXAgPSB7XG4gICAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICAgIG5vZGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wJyksXG4gICAgICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uKGRhdGEpIHt0aGlzLnZhbHVlID0gTWF0aC5yb3VuZChOdW1iZXIoZGF0YS5tYWluLnRlbXApKX0sXG4gICAgICAgICAgICB3cml0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnZhbHVlKSByZXR1cm47XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnRleHRDb250ZW50ID0gdGhpcy52YWx1ZS50b1N0cmluZygpICsgJ8KwRic7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmZlZWxzTGlrZSA9IHtcbiAgICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgICAgbm9kZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWxzLWxpa2UnKSxcbiAgICAgICAgICAgIHVwZGF0ZTogZnVuY3Rpb24oZGF0YSkge3RoaXMudmFsdWUgPSBNYXRoLnJvdW5kKE51bWJlcihkYXRhLm1haW4uZmVlbHNfbGlrZSkpfSxcbiAgICAgICAgICAgIHdyaXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudmFsdWUpIHJldHVybjtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUudGV4dENvbnRlbnQgPSAnZmVlbHMgbGlrZSAnICsgdGhpcy52YWx1ZS50b1N0cmluZygpICsgJ8KwRic7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICAvLyB0aGlzLndpbmRTcGVlZCA9IHtcbiAgICAgICAgLy8gICAgIHZhbHVlOiAnaGV5JyxcbiAgICAgICAgLy8gICAgIG5vZGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kJyksXG4gICAgICAgIC8vICAgICB1cGRhdGU6IGZ1bmN0aW9uKGRhdGEpIHt0aGlzLnZhbHVlID0gZGF0YS53aW5kLnNwZWVkfSxcbiAgICAgICAgLy8gICAgIHdyaXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gICAgICAgICBpZiAoIXRoaXMudmFsdWUpIHJldHVybjtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLm5vZGUudGV4dENvbnRlbnQgPSAnd2luZDogJyArIHRoaXMudmFsdWUgKyAnIG1waCc7XG4gICAgICAgIC8vICAgICB9LFxuICAgICAgICAvLyB9O1xuICAgICAgICB0aGlzLmRlc2MgPSB7XG4gICAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICAgIG5vZGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNjJyksXG4gICAgICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uKGRhdGEpIHt0aGlzLnZhbHVlID0gZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9ufSxcbiAgICAgICAgICAgIHdyaXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudmFsdWUpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUudGV4dENvbnRlbnQgPSAnTm8gbG9jYXRpb24gc2V0Li4uJztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUudGV4dENvbnRlbnQgPSB0aGlzLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jaXR5ID0ge1xuICAgICAgICAgICAgdmFsdWU6ICdFbnRlciBhIGNpdHk6JyxcbiAgICAgICAgICAgIG5vZGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5JyksXG4gICAgICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uKGRhdGEpIHt0aGlzLnZhbHVlID0gZGF0YS5uYW1lfSxcbiAgICAgICAgICAgIHdyaXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eScpO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS50ZXh0Q29udGVudCA9IHRoaXMudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmljb24gPSB7XG4gICAgICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgICAgICBub2RlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbWcnKSxcbiAgICAgICAgICAgIHVwZGF0ZTogZnVuY3Rpb24oZGF0YSkge3RoaXMudmFsdWUgPSBkYXRhLndlYXRoZXJbMF0uaWNvbn0sXG4gICAgICAgICAgICB3cml0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2VtcHR5Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zcmMgPSBnZXRXZWF0aGVySWNvbih0aGlzLnZhbHVlKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5jbGFzc0xpc3QuYWRkKCdlbXB0eScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxuICAgIHVwZGF0ZShkYXRhKSB7XG4gICAgICAgIGZvciAobGV0IHByb3AgaW4gdGhpcylcbiAgICAgICAgICAgIHRoaXNbcHJvcF0udXBkYXRlKGRhdGEpO1xuICAgIH1cbiAgICB3cml0ZSgpIHtcbiAgICAgICAgZm9yIChsZXQgcHJvcCBpbiB0aGlzKVxuICAgICAgICAgICAgdGhpc1twcm9wXS53cml0ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0V2VhdGhlckljb24oaWNvbkNvZGUpIHtcbiAgICBzd2l0Y2ggKGljb25Db2RlKSB7XG4gICAgICAgIGNhc2UgJzAxZCc6IHJldHVybiBzdW5ueUljb247IGJyZWFrO1xuICAgICAgICBjYXNlICcwMW4nOiByZXR1cm4gbmlnaHRJY29uOyBicmVhaztcbiAgICAgICAgY2FzZSAnMDJkJzpcbiAgICAgICAgY2FzZSAnMDNkJzpcbiAgICAgICAgY2FzZSAnMDJuJzpcbiAgICAgICAgY2FzZSAnMDNuJzogcmV0dXJuIHBhcnR5Q2xvdWR5SWNvbjsgYnJlYWs7XG4gICAgICAgIGNhc2UgJzA0ZCc6XG4gICAgICAgIGNhc2UgJzA0bic6XG4gICAgICAgIGNhc2UgJzUwZCc6XG4gICAgICAgIGNhc2UgJzUwbic6IHJldHVybiBjbG91ZHlJY29uOyBicmVhaztcbiAgICAgICAgY2FzZSAnMDlkJzpcbiAgICAgICAgY2FzZSAnMDluJzogcmV0dXJuIHNob3dlckljb247IGJyZWFrO1xuICAgICAgICBjYXNlICcxMGQnOlxuICAgICAgICBjYXNlICcxMG4nOiByZXR1cm4gcmFpbkljb247IGJyZWFrO1xuICAgICAgICBjYXNlICcxMWQnOlxuICAgICAgICBjYXNlICcxMW4nOiByZXR1cm4gdGh1bmRlcnN0b3JtSWNvbjsgYnJlYWs7XG4gICAgICAgIGNhc2UgJzEzZCc6XG4gICAgICAgIGNhc2UgJzEzbic6IHJldHVybiBzbm93SWNvbjsgYnJlYWs7XG4gICAgICAgIC8vIGRlZmF1bHQ6IHJldHVybiBsb2FkaW5nSWNvbjsgYnJlYWs7XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiYnVuZGxlXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgVXJsR2VuIGZyb20gJy4vdXJsR2VuLmpzJ1xuaW1wb3J0IFNlYXJjaE1hbmFnZXIgZnJvbSAnLi9zZWFyY2guanMnXG5cbmltcG9ydCBjbG91ZHlJY29uIGZyb20gJy4vYXNzZXRzL2Nsb3VkeS5wbmcnXG5pbXBvcnQgcmFpbkljb24gZnJvbSAnLi9hc3NldHMvcmFpbi5wbmcnXG5pbXBvcnQgc2hvd2VySWNvbiBmcm9tICcuL2Fzc2V0cy9zaG93ZXIucG5nJ1xuaW1wb3J0IHNub3dJY29uIGZyb20gJy4vYXNzZXRzL3Nub3cucG5nJ1xuaW1wb3J0IHN1bm55SWNvbiBmcm9tICcuL2Fzc2V0cy9zdW5ueS5wbmcnXG5pbXBvcnQgdGh1bmRlcnN0b3JtSWNvbiBmcm9tICcuL2Fzc2V0cy90aHVuZGVyc3Rvcm0ucG5nJ1xuaW1wb3J0IG5pZ2h0SWNvbiBmcm9tICcuL2Fzc2V0cy9uaWdodC5wbmcnXG5pbXBvcnQgcGFydHlDbG91ZHlJY29uIGZyb20gJy4vYXNzZXRzL3BhcnR5Q2xvdWR5LnBuZydcblxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PSBXRUJTSVRFIERBVEEgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuY29uc3Qgd2VhdGhlcktleSA9ICdiYmE2ZjU2ZjJkY2QzNGRiNTU4MTI4NWJiODg0ZWUzNic7XG5jb25zdCB3ZWF0aGVyQmFzZVVybCA9ICdodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcic7XG5cbmxldCB3ZWF0aGVyVXJsID0gbmV3IFVybEdlbih3ZWF0aGVyQmFzZVVybCk7XG53ZWF0aGVyVXJsLmFkZEtleSgnYXBwaWQnLCB3ZWF0aGVyS2V5KTtcbndlYXRoZXJVcmwuYWRkS2V5KCd1bml0cycsICdpbXBlcmlhbCcpO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PSBTRVRVUCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5sZXQgc3RhdGUgPSB7XG4gICAgY2l0eTogJ05ldyBZb3JrIENpdHknLFxuICAgIHRlbXA6IG51bGwsIC8vIGtlbHZpblxuICAgIGZlZWxzTGlrZTogbnVsbCxcbiAgICB3aW5kU3BlZWQ6IG51bGwsIC8vIG1ldGVyL3NlY1xuICAgIGNsb3VkczogbnVsbCwgLy8gJSBjb3ZlcmFnZVxuICAgIGRlc2M6ICdlbXB0eScsXG4gICAgaWNvbjogJzAxZCcsIC8vIHdlYXRoZXIgaWNvbiAoMDEtMDQsMDktMTEsMTMsNTApLCAoZHxuKVxuICAgIC8vIDE6IGNsZWFyIHNreSwgMjogZmV3IGNsb3VkLCAzOiBzY2F0dGVyZWQgY2xvdWRzLCA0OiBicm9rZW4gY2xvdWRzLFxuICAgIC8vIDk6IHNob3dlciByYWluLCAxMDogcmFpbiwgMTE6IHRodW5kZXJzdG9ybSwgMTM6IHNub3csIDUwOiBtaXN0O1xuXG4gICAgcHJpbnRUZW1wKCkge3JldHVybiB0aGlzLnRlbXAudG9TdHJpbmcoKSArICfCsEYnO30sXG4gICAgcHJpbnRGZWVsc0xpa2UoKSB7cmV0dXJuICdmZWVscyBsaWtlICcgKyB0aGlzLmZlZWxzTGlrZS50b1N0cmluZygpICsgJ8KwRic7fSxcbiAgICBwcmludENsb3VkcygpIHtyZXR1cm4gJ2Nsb3VkIGNvdmVyYWdlOiAnICsgdGhpcy5jbG91ZHMgKyAnJSd9LFxuICAgIHByaW50V2luZCgpIHtyZXR1cm4gJ3dpbmQ6ICcgKyB0aGlzLndpbmRTcGVlZCArICcgbXBoJzt9LFxuXG4gICAgdXBkYXRlKGRhdGEpIHtcbiAgICAgICAgdGhpcy50ZW1wID0gTWF0aC5yb3VuZChOdW1iZXIoZGF0YS5tYWluLnRlbXApKTtcbiAgICAgICAgdGhpcy5mZWVsc0xpa2UgPSBNYXRoLnJvdW5kKE51bWJlcihkYXRhLm1haW4uZmVlbHNfbGlrZSkpO1xuICAgICAgICB0aGlzLndpbmRTcGVlZCA9IE1hdGgucm91bmQoZGF0YS53aW5kLnNwZWVkKTtcbiAgICAgICAgdGhpcy5kZXNjID0gZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmNpdHkgPSBkYXRhLm5hbWU7XG4gICAgICAgIHRoaXMuaWNvbiA9IGRhdGEud2VhdGhlclswXS5pY29uO1xuICAgICAgICBjb25zb2xlLmxvZygnY3VycmVudCBzdGF0ZSB1cGRhdGVkOiAnLCB0aGlzKTtcblxuICAgICAgICB0aGlzLndyaXRlKCk7XG4gICAgfSxcblxuICAgIHdyaXRlKCkge1xuXG4gICAgICAgIGNvbnN0IHRlbXBOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXAnKTtcbiAgICAgICAgY29uc3QgZmVlbHNMaWtlTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVscy1saWtlJyk7XG4gICAgICAgIGNvbnN0IHdpbmROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbmQnKTtcbiAgICAgICAgY29uc3QgZGVzY05vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzYycpO1xuICAgICAgICAvLyBUT0RPOiByZSBpbnRlZ3JhdGUgY2l0eSBub2RlXG4gICAgICAgIC8vIGNvbnN0IGNpdHlOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHknKTtcbiAgICAgICAgY29uc3QgaW1nTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xuXG4gICAgICAgIGltZ05vZGUuc3JjID0gZ2V0V2VhdGhlckljb24odGhpcy5pY29uKTtcblxuICAgICAgICBpZiAoIXRoaXMudGVtcCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGVtcE5vZGUudGV4dENvbnRlbnQgPSB0aGlzLnByaW50VGVtcCgpO1xuICAgICAgICBmZWVsc0xpa2VOb2RlLnRleHRDb250ZW50ID0gdGhpcy5wcmludEZlZWxzTGlrZSgpO1xuICAgICAgICB3aW5kTm9kZS50ZXh0Q29udGVudCA9IHRoaXMucHJpbnRXaW5kKCk7XG4gICAgICAgIGRlc2NOb2RlLnRleHRDb250ZW50ID0gdGhpcy5kZXNjO1xuICAgICAgICAvLyBjaXR5Tm9kZS50ZXh0Q29udGVudCA9IHRoaXMuY2l0eTtcbiAgICB9LFxufTtcblxubGV0IHNlYXJjaE1hbmFnZXIgPSBuZXcgU2VhcmNoTWFuYWdlcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJyksIHN0YXRlKTtcblxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT0gZnVuY3Rpb25zID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuYXN5bmMgZnVuY3Rpb24gcXVlcnlDaXR5KGNpdHlOYW1lKSB7XG4gICAgd2VhdGhlclVybC5hZGRLZXkoJ3EnLCBjaXR5TmFtZSk7XG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDMwMCkpOyAvLyBERUJVR1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh3ZWF0aGVyVXJsLnVybCwge21vZGU6ICdjb3JzJ30pO1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgICAgICBsZXQganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgaWYgKGpzb24uY29kICE9ICcyMDAnKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGpzb24uY29kKTtcbiAgICAgICAgdXBkYXRlV2VhdGhlclN0YXRlKGpzb24pO1xuICAgICAgICBjb25zb2xlLmxvZygnd2VhdGhlciBqc29uOiAnLCBqc29uKTsgLy8gREVCVUdcbiAgICB9IGNhdGNoKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZygnQW4gZXJyb3Igb2NjdXJlZCB3aGlsZSBmZXRjaGluZzogJywgZXJyKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVdlYXRoZXJTdGF0ZShkYXRhKSB7XG4gICAgc3RhdGUudGVtcCA9IE1hdGgucm91bmQoTnVtYmVyKGRhdGEubWFpbi50ZW1wKSk7XG4gICAgc3RhdGUuZmVlbHNMaWtlID0gTWF0aC5yb3VuZChOdW1iZXIoZGF0YS5tYWluLmZlZWxzX2xpa2UpKTtcbiAgICBzdGF0ZS53aW5kU3BlZWQgPSBNYXRoLnJvdW5kKGRhdGEud2luZC5zcGVlZCk7XG4gICAgc3RhdGUuZGVzYyA9IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgICBzdGF0ZS5jaXR5ID0gZGF0YS5uYW1lO1xuICAgIHN0YXRlLmljb24gPSBkYXRhLndlYXRoZXJbMF0uaWNvbjtcbiAgICB3cml0ZVdlYXRoZXJTdGF0ZSgpO1xufVxuXG5mdW5jdGlvbiB3cml0ZVdlYXRoZXJTdGF0ZSgpIHtcbiAgICBjb25zdCB0ZW1wTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wJyk7XG4gICAgY29uc3QgZmVlbHNMaWtlTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVscy1saWtlJyk7XG4gICAgY29uc3Qgd2luZE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZCcpO1xuICAgIGNvbnN0IGRlc2NOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2MnKTtcbiAgICBjb25zdCBjaXR5Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5Jyk7XG4gICAgY29uc3QgaW1nTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xuXG4gICAgdGVtcE5vZGUudGV4dENvbnRlbnQgPSBzdGF0ZS5wcmludFRlbXAoKTtcbiAgICBmZWVsc0xpa2VOb2RlLnRleHRDb250ZW50ID0gc3RhdGUucHJpbnRGZWVsc0xpa2UoKTtcbiAgICB3aW5kTm9kZS50ZXh0Q29udGVudCA9IHN0YXRlLnByaW50V2luZCgpO1xuICAgIGRlc2NOb2RlLnRleHRDb250ZW50ID0gc3RhdGUuZGVzYztcbiAgICBjaXR5Tm9kZS50ZXh0Q29udGVudCA9IHN0YXRlLmNpdHk7XG5cbiAgICBpbWdOb2RlLnNyYyA9IGdldFdlYXRoZXJJY29uKHN0YXRlLmljb24pO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT0gSU5JVCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gcXVlcnlDaXR5KCdOZXcgWW9yayBDaXR5Jyk7XG5cblxuXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09IERFQlVHID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5jb25zb2xlLmxvZyh3ZWF0aGVyVXJsLnVybCwgd2VhdGhlclVybCk7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09IENSRURJVFMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU3Vubnlcbi8vIDxhIGhyZWY9XCJodHRwczovL3d3dy5mbGF0aWNvbi5jb20vZnJlZS1pY29ucy9zdW5ueVwiIHRpdGxlPVwic3VubnkgaWNvbnNcIj5TdW5ueSBpY29ucyBjcmVhdGVkIGJ5IGp1c3RpY29uIC0gRmxhdGljb248L2E+XG4vLyBUaHVkbmVyc3Rvcm1cbi8vIDxhIGhyZWY9XCJodHRwczovL3d3dy5mbGF0aWNvbi5jb20vZnJlZS1pY29ucy90aHVuZGVyc3Rvcm1cIiB0aXRsZT1cInRodW5kZXJzdG9ybSBpY29uc1wiPlRodW5kZXJzdG9ybSBpY29ucyBjcmVhdGVkIGJ5IGp1c3RpY29uIC0gRmxhdGljb248L2E+XG4vLyBTaG93ZXJcbi8vIDxhIGhyZWY9XCJodHRwczovL3d3dy5mbGF0aWNvbi5jb20vZnJlZS1pY29ucy9yYWluXCIgdGl0bGU9XCJyYWluIGljb25zXCI+UmFpbiBpY29ucyBjcmVhdGVkIGJ5IGp1c3RpY29uIC0gRmxhdGljb248L2E+XG4vLyBSYWluXG4vLyA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2ZyZWUtaWNvbnMvcmFpblwiIHRpdGxlPVwicmFpbiBpY29uc1wiPlJhaW4gaWNvbnMgY3JlYXRlZCBieSBqdXN0aWNvbiAtIEZsYXRpY29uPC9hPlxuLy8gQ2xvdWR5XG4vLyA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2ZyZWUtaWNvbnMvY2xvdWRcIiB0aXRsZT1cImNsb3VkIGljb25zXCI+Q2xvdWQgaWNvbnMgY3JlYXRlZCBieSBqdXN0aWNvbiAtIEZsYXRpY29uPC9hPlxuLy8gU25vd1xuLy8gPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9mcmVlLWljb25zL3Nub3dmYWxsXCIgdGl0bGU9XCJzbm93ZmFsbCBpY29uc1wiPlNub3dmYWxsIGljb25zIGNyZWF0ZWQgYnkganVzdGljb24gLSBGbGF0aWNvbjwvYT5cbi8vIE5pZ2h0XG4vLyA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2ZyZWUtaWNvbnMvY2xlYXJcIiB0aXRsZT1cImNsZWFyIGljb25zXCI+Q2xlYXIgaWNvbnMgY3JlYXRlZCBieSBqdXN0aWNvbiAtIEZsYXRpY29uPC9hPlxuLy8gUGFydHkgQ2xvdWR5XG4vLyA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2ZyZWUtaWNvbnMvY2xvdWR5XCIgdGl0bGU9XCJjbG91ZHkgaWNvbnNcIj5DbG91ZHkgaWNvbnMgY3JlYXRlZCBieSBqdXN0aWNvbiAtIEZsYXRpY29uPC9hPiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==