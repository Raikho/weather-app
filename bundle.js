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
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! assets/sunny.png */ "./src/assets/sunny.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --bg: #164e63;\n    --fg: #f0f9ff;\n\n    --icon: #bfdbfe;\n    --iconHover: #e0f2fe;\n    --iconActive: #028fc7;\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    margin: 0;\n\n    background-color: var(--bg);\n    color: var(--fg);\n    font-family: helvetica, sans-serif;\n    font-size: 18px;\n\n    display: grid;\n    grid-template-rows: 1fr 9fr;\n}\n\ninput {\n    border-radius: 2px;\n    padding: 5px;\n    font-size: 18px;\n}\n\n/* ============================ HEADER ============================= */\n#header {\n    border: 1px dotted lightgray;\n\n    display: flex;\n    justify-content: center;\n}\n\n.city-container {\n    border: 1px dotted lightgray;\n\n    display: flex;\n    align-items: center;\n    padding: 10px;\n    gap: 10px;\n}\n.city-container>* {border: 1px dotted white;}\n\n.input-container {\n    display: flex;\n    align-items: center;\n    padding: 10px;\n    gap: 10px;\n}\n\n.city {\n    font-size: 18px;\n    padding: 5px;\n}\n\n.icon {\n    width: 30px;\n    height: 30px;\n    -webkit-mask-size: contain;\n    mask-size: contain;\n    background-color: var(--icon);\n}\n.icon.edit {\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n.icon.search {\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n.icon.cancel {\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n.icon.loading {\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n.icon:hover {background-color: var(--iconHover);}\n.icon:active {background-color: var(--iconActive);}\n\n/* ============================= MAIN ============================== */\n\n#main {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.middle-container {\n    border: 1px dotted lightgray;\n    padding: 20px;\n\n    display: flex;\n    flex-direction: column;\n}\n.text {\n    display: flex;\n    justify-content: center;\n}\n\n.temp {\n    font-size: 64px;\n}\n\n#main>img {\n    border-color: 1px dotted white;\n    width: clamp(100px, 30vmin, 1000px);\n    height: clamp(100px, 30vmin, 1000px);\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,aAAa;;IAEb,eAAe;IACf,oBAAoB;IACpB,qBAAqB;AACzB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,SAAS;;IAET,2BAA2B;IAC3B,gBAAgB;IAChB,kCAAkC;IAClC,eAAe;;IAEf,aAAa;IACb,2BAA2B;AAC/B;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,eAAe;AACnB;;AAEA,sEAAsE;AACtE;IACI,4BAA4B;;IAE5B,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,4BAA4B;;IAE5B,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,SAAS;AACb;AACA,mBAAmB,wBAAwB,CAAC;;AAE5C;IACI,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,SAAS;AACb;;AAEA;IACI,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,0BAA0B;IAC1B,kBAAkB;IAClB,6BAA6B;AACjC;AACA;IACI,2DAA0C;IAC1C,mDAAkC;AACtC;AACA;IACI,2DAA4C;IAC5C,mDAAoC;AACxC;AACA;IACI,2DAA4C;IAC5C,mDAAoC;AACxC;AACA;IACI,2DAA6C;IAC7C,mDAAqC;AACzC;AACA,aAAa,kCAAkC,CAAC;AAChD,cAAc,mCAAmC,CAAC;;AAElD,sEAAsE;;AAEtE;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,4BAA4B;IAC5B,aAAa;;IAEb,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,8BAA8B;IAC9B,mCAAmC;IACnC,oCAAoC;IACpC,4CAA4B;AAChC","sourcesContent":[":root {\n    --bg: #164e63;\n    --fg: #f0f9ff;\n\n    --icon: #bfdbfe;\n    --iconHover: #e0f2fe;\n    --iconActive: #028fc7;\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    margin: 0;\n\n    background-color: var(--bg);\n    color: var(--fg);\n    font-family: helvetica, sans-serif;\n    font-size: 18px;\n\n    display: grid;\n    grid-template-rows: 1fr 9fr;\n}\n\ninput {\n    border-radius: 2px;\n    padding: 5px;\n    font-size: 18px;\n}\n\n/* ============================ HEADER ============================= */\n#header {\n    border: 1px dotted lightgray;\n\n    display: flex;\n    justify-content: center;\n}\n\n.city-container {\n    border: 1px dotted lightgray;\n\n    display: flex;\n    align-items: center;\n    padding: 10px;\n    gap: 10px;\n}\n.city-container>* {border: 1px dotted white;}\n\n.input-container {\n    display: flex;\n    align-items: center;\n    padding: 10px;\n    gap: 10px;\n}\n\n.city {\n    font-size: 18px;\n    padding: 5px;\n}\n\n.icon {\n    width: 30px;\n    height: 30px;\n    -webkit-mask-size: contain;\n    mask-size: contain;\n    background-color: var(--icon);\n}\n.icon.edit {\n    -webkit-mask-image: url('assets/edit.svg');\n    mask-image: url('assets/edit.svg');\n}\n.icon.search {\n    -webkit-mask-image: url('assets/search.svg');\n    mask-image: url('assets/search.svg');\n}\n.icon.cancel {\n    -webkit-mask-image: url('assets/cancel.svg');\n    mask-image: url('assets/cancel.svg');\n}\n.icon.loading {\n    -webkit-mask-image: url('assets/loading.svg');\n    mask-image: url('assets/loading.svg');\n}\n.icon:hover {background-color: var(--iconHover);}\n.icon:active {background-color: var(--iconActive);}\n\n/* ============================= MAIN ============================== */\n\n#main {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.middle-container {\n    border: 1px dotted lightgray;\n    padding: 20px;\n\n    display: flex;\n    flex-direction: column;\n}\n.text {\n    display: flex;\n    justify-content: center;\n}\n\n.temp {\n    font-size: 64px;\n}\n\n#main>img {\n    border-color: 1px dotted white;\n    width: clamp(100px, 30vmin, 1000px);\n    height: clamp(100px, 30vmin, 1000px);\n    src: url('assets/sunny.png');\n}"],"sourceRoot":""}]);
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



const weatherKey = 'bba6f56f2dcd34db5581285bb884ee36';
const weatherBaseUrl = 'https://api.openweathermap.org/data/2.5/weather';
let weatherUrl = new _urlGen_js__WEBPACK_IMPORTED_MODULE_1__["default"](weatherBaseUrl);
weatherUrl.addKey('appid', weatherKey);
weatherUrl.addKey('units', 'imperial');

class SearchManager {
    constructor(node, weatherState) {
        this.node = node;
        this.state = 'state'; // found, search, retry, loading
        this.weatherState = weatherState;

        _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].clearNode(this.node);
        this.updateSearchState();
        this.updateFoundState();
    }

    updateSearchState() {
        this.state = 'search';
        const containerNode = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(this.node, ['city-container']);
        const cityNode = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createTextInput(containerNode, 'city-input', 'Enter city:');
        const searchNode = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(containerNode, ['edit'], 'search');
        searchNode.id = 'search-button';

        searchNode.addEventListener('click', async () => {
            let cityName = cityNode.value;
            if (!cityName) return;

            let tempJson = null;

            queryCity(cityName)
                .then(res => {
                    tempJson = res;
                    console.log('promise furfilled');
                    this.weatherState.update(res);

                    this.updateFoundState();
                })
                .catch(err => {
                    console.log('promise rejected: ', err);
                    console.log('weatherState: ', this.weatherState);
                    console.log('json: ', tempJson);
                });
        });
    }

    updateFoundState() {
        this.state = 'found';
        _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].clearNode(this.node);
        const containerNode = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(this.node, ['city-container']);
        const cityNode = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(containerNode, ['city'], this.weatherState.city);
        const editNode = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(containerNode, ['edit'], 'edit');
        const iconNde = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(containerNode, ['icon', 'edit']);
    }
}

async function queryCity(cityName) {
    return new Promise(async (resolve, reject) => {
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
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _assets_cloudy_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/cloudy.png */ "./src/assets/cloudy.png");
/* harmony import */ var _assets_rain_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/rain.png */ "./src/assets/rain.png");
/* harmony import */ var _assets_shower_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/shower.png */ "./src/assets/shower.png");
/* harmony import */ var _assets_snow_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/snow.png */ "./src/assets/snow.png");
/* harmony import */ var _assets_sunny_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/sunny.png */ "./src/assets/sunny.png");
/* harmony import */ var _assets_thunderstorm_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/thunderstorm.png */ "./src/assets/thunderstorm.png");
/* harmony import */ var _assets_night_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/night.png */ "./src/assets/night.png");
/* harmony import */ var _assets_partyCloudy_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/partyCloudy.png */ "./src/assets/partyCloudy.png");















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
    icon: null, // weather icon (01-04,09-11,13,50), (d|n)
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

        tempNode.textContent = this.printTemp();
        feelsLikeNode.textContent = this.printFeelsLike();
        windNode.textContent = this.printWind();
        descNode.textContent = this.desc;
        // cityNode.textContent = this.city;

        imgNode.src = getWeatherIcon(this.icon);
    },
};

let searchManager = new _search_js__WEBPACK_IMPORTED_MODULE_2__["default"](document.getElementById('header'), state);


// ======================== functions =================================
// document.getElementById('search-button').addEventListener('click', async () => {
//     let cityName = document.getElementById('city-input').value;
//     console.log(`searching for "${cityName}"...`); // DEBUG
//     if (cityName) {
//         await queryCity(cityName);
//     }
// });

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

function getWeatherIcon(iconCode) {
    switch (iconCode) {
        case '01d': return _assets_sunny_png__WEBPACK_IMPORTED_MODULE_8__; break;
        case '01n': return _assets_night_png__WEBPACK_IMPORTED_MODULE_10__; break;
        case '02d':
        case '03d':
        case '02n':
        case '03n': return _assets_partyCloudy_png__WEBPACK_IMPORTED_MODULE_11__; break;
        case '04d':
        case '04n':
        case '50d':
        case '50n': return _assets_cloudy_png__WEBPACK_IMPORTED_MODULE_4__; break;
        case '09d':
        case '09n': return _assets_shower_png__WEBPACK_IMPORTED_MODULE_6__; break;
        case '10d':
        case '10n': return _assets_rain_png__WEBPACK_IMPORTED_MODULE_5__; break;
        case '11d':
        case '11n': return _assets_thunderstorm_png__WEBPACK_IMPORTED_MODULE_9__; break;
        case '13d':
        case '13n': return _assets_snow_png__WEBPACK_IMPORTED_MODULE_7__; break;
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsNkdBQWtDO0FBQzlFLDRDQUE0QyxpSEFBb0M7QUFDaEYsNENBQTRDLGlIQUFvQztBQUNoRiw0Q0FBNEMsbUhBQXFDO0FBQ2pGLDRDQUE0QywrR0FBbUM7QUFDL0UsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQSxpREFBaUQsb0JBQW9CLG9CQUFvQix3QkFBd0IsMkJBQTJCLDRCQUE0QixHQUFHLFVBQVUsbUJBQW1CLG9CQUFvQixnQkFBZ0Isb0NBQW9DLHVCQUF1Qix5Q0FBeUMsc0JBQXNCLHNCQUFzQixrQ0FBa0MsR0FBRyxXQUFXLHlCQUF5QixtQkFBbUIsc0JBQXNCLEdBQUcsc0ZBQXNGLG1DQUFtQyxzQkFBc0IsOEJBQThCLEdBQUcscUJBQXFCLG1DQUFtQyxzQkFBc0IsMEJBQTBCLG9CQUFvQixnQkFBZ0IsR0FBRyxxQkFBcUIsMEJBQTBCLHNCQUFzQixvQkFBb0IsMEJBQTBCLG9CQUFvQixnQkFBZ0IsR0FBRyxXQUFXLHNCQUFzQixtQkFBbUIsR0FBRyxXQUFXLGtCQUFrQixtQkFBbUIsaUNBQWlDLHlCQUF5QixvQ0FBb0MsR0FBRyxjQUFjLDBFQUEwRSxrRUFBa0UsR0FBRyxnQkFBZ0IsMEVBQTBFLGtFQUFrRSxHQUFHLGdCQUFnQiwwRUFBMEUsa0VBQWtFLEdBQUcsaUJBQWlCLDBFQUEwRSxrRUFBa0UsR0FBRyxlQUFlLG9DQUFvQyxnQkFBZ0IscUNBQXFDLHNGQUFzRixvQkFBb0IsOEJBQThCLDBCQUEwQixHQUFHLHVCQUF1QixtQ0FBbUMsb0JBQW9CLHNCQUFzQiw2QkFBNkIsR0FBRyxTQUFTLG9CQUFvQiw4QkFBOEIsR0FBRyxXQUFXLHNCQUFzQixHQUFHLGVBQWUscUNBQXFDLDBDQUEwQywyQ0FBMkMsMkRBQTJELEdBQUcsT0FBTyxnRkFBZ0YsVUFBVSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsV0FBVyxZQUFZLGFBQWEsYUFBYSxZQUFZLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxZQUFZLE1BQU0sYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxLQUFLLHlCQUF5QixNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxzQkFBc0Isd0JBQXdCLGNBQWMsTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxZQUFZLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGlDQUFpQyxvQkFBb0Isb0JBQW9CLHdCQUF3QiwyQkFBMkIsNEJBQTRCLEdBQUcsVUFBVSxtQkFBbUIsb0JBQW9CLGdCQUFnQixvQ0FBb0MsdUJBQXVCLHlDQUF5QyxzQkFBc0Isc0JBQXNCLGtDQUFrQyxHQUFHLFdBQVcseUJBQXlCLG1CQUFtQixzQkFBc0IsR0FBRyxzRkFBc0YsbUNBQW1DLHNCQUFzQiw4QkFBOEIsR0FBRyxxQkFBcUIsbUNBQW1DLHNCQUFzQiwwQkFBMEIsb0JBQW9CLGdCQUFnQixHQUFHLHFCQUFxQiwwQkFBMEIsc0JBQXNCLG9CQUFvQiwwQkFBMEIsb0JBQW9CLGdCQUFnQixHQUFHLFdBQVcsc0JBQXNCLG1CQUFtQixHQUFHLFdBQVcsa0JBQWtCLG1CQUFtQixpQ0FBaUMseUJBQXlCLG9DQUFvQyxHQUFHLGNBQWMsaURBQWlELHlDQUF5QyxHQUFHLGdCQUFnQixtREFBbUQsMkNBQTJDLEdBQUcsZ0JBQWdCLG1EQUFtRCwyQ0FBMkMsR0FBRyxpQkFBaUIsb0RBQW9ELDRDQUE0QyxHQUFHLGVBQWUsb0NBQW9DLGdCQUFnQixxQ0FBcUMsc0ZBQXNGLG9CQUFvQiw4QkFBOEIsMEJBQTBCLEdBQUcsdUJBQXVCLG1DQUFtQyxvQkFBb0Isc0JBQXNCLDZCQUE2QixHQUFHLFNBQVMsb0JBQW9CLDhCQUE4QixHQUFHLFdBQVcsc0JBQXNCLEdBQUcsZUFBZSxxQ0FBcUMsMENBQTBDLDJDQUEyQyxtQ0FBbUMsR0FBRyxtQkFBbUI7QUFDL3NMO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDbEIxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6QmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNmQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q1E7O0FBRU87QUFDakM7QUFDQTtBQUNBLHFCQUFxQixrREFBTTtBQUMzQjtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBLDhCQUE4QjtBQUM5Qjs7QUFFQSxRQUFRLHlEQUFhO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEJBQThCLHlEQUFhO0FBQzNDLHlCQUF5QiwrREFBbUI7QUFDNUMsMkJBQTJCLHlEQUFhO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsUUFBUSx5REFBYTtBQUNyQiw4QkFBOEIseURBQWE7QUFDM0MseUJBQXlCLHlEQUFhO0FBQ3RDLHlCQUF5Qix5REFBYTtBQUN0Qyx3QkFBd0IseURBQWE7QUFDckM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsYUFBYTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7O0FDdEVnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFdBQVc7QUFDdkM7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDBCQUEwQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBb0I7QUFDWTtBQUNPO0FBQ2I7O0FBRWtCO0FBQ0o7QUFDSTtBQUNKO0FBQ0U7QUFDYztBQUNkO0FBQ1k7OztBQUd0RDtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLGtEQUFNO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsb0NBQW9DO0FBQ3JELHNCQUFzQix5REFBeUQ7QUFDL0UsbUJBQW1CLDhDQUE4QztBQUNqRSxpQkFBaUIsMkNBQTJDOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsd0JBQXdCLGtEQUFhOzs7QUFHckM7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLFNBQVMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRTtBQUNoRSxvREFBb0QsYUFBYTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0MsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkIsOENBQVMsRUFBRTtBQUN0QywyQkFBMkIsK0NBQVMsRUFBRTtBQUN0QztBQUNBO0FBQ0E7QUFDQSwyQkFBMkIscURBQWUsRUFBRTtBQUM1QztBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsK0NBQVUsRUFBRTtBQUN2QztBQUNBLDJCQUEyQiwrQ0FBVSxFQUFFO0FBQ3ZDO0FBQ0EsMkJBQTJCLDZDQUFRLEVBQUU7QUFDckM7QUFDQSwyQkFBMkIscURBQWdCLEVBQUU7QUFDN0M7QUFDQSwyQkFBMkIsNkNBQVEsRUFBRTtBQUNyQztBQUNBOztBQUVBO0FBQ0E7Ozs7O0FBS0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zZWFyY2guanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvdXJsR2VuLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImFzc2V0cy9lZGl0LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcImFzc2V0cy9zZWFyY2guc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiYXNzZXRzL2NhbmNlbC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCJhc3NldHMvbG9hZGluZy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCJhc3NldHMvc3VubnkucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1iZzogIzE2NGU2MztcXG4gICAgLS1mZzogI2YwZjlmZjtcXG5cXG4gICAgLS1pY29uOiAjYmZkYmZlO1xcbiAgICAtLWljb25Ib3ZlcjogI2UwZjJmZTtcXG4gICAgLS1pY29uQWN0aXZlOiAjMDI4ZmM3O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDA7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnKTtcXG4gICAgY29sb3I6IHZhcigtLWZnKTtcXG4gICAgZm9udC1mYW1pbHk6IGhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA5ZnI7XFxufVxcblxcbmlucHV0IHtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PSBIRUFERVIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4jaGVhZGVyIHtcXG4gICAgYm9yZGVyOiAxcHggZG90dGVkIGxpZ2h0Z3JheTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jaXR5LWNvbnRhaW5lciB7XFxuICAgIGJvcmRlcjogMXB4IGRvdHRlZCBsaWdodGdyYXk7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuLmNpdHktY29udGFpbmVyPioge2JvcmRlcjogMXB4IGRvdHRlZCB3aGl0ZTt9XFxuXFxuLmlucHV0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmNpdHkge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLmljb24ge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAtd2Via2l0LW1hc2stc2l6ZTogY29udGFpbjtcXG4gICAgbWFzay1zaXplOiBjb250YWluO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pY29uKTtcXG59XFxuLmljb24uZWRpdCB7XFxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuLmljb24uc2VhcmNoIHtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgICBtYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG4uaWNvbi5jYW5jZWwge1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICAgIG1hc2staW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxufVxcbi5pY29uLmxvYWRpbmcge1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxuICAgIG1hc2staW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxufVxcbi5pY29uOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pY29uSG92ZXIpO31cXG4uaWNvbjphY3RpdmUge2JhY2tncm91bmQtY29sb3I6IHZhcigtLWljb25BY3RpdmUpO31cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBNQUlOID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiNtYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5taWRkbGUtY29udGFpbmVyIHtcXG4gICAgYm9yZGVyOiAxcHggZG90dGVkIGxpZ2h0Z3JheTtcXG4gICAgcGFkZGluZzogMjBweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLnRleHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRlbXAge1xcbiAgICBmb250LXNpemU6IDY0cHg7XFxufVxcblxcbiNtYWluPmltZyB7XFxuICAgIGJvcmRlci1jb2xvcjogMXB4IGRvdHRlZCB3aGl0ZTtcXG4gICAgd2lkdGg6IGNsYW1wKDEwMHB4LCAzMHZtaW4sIDEwMDBweCk7XFxuICAgIGhlaWdodDogY2xhbXAoMTAwcHgsIDMwdm1pbiwgMTAwMHB4KTtcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7O0lBRWIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLFNBQVM7O0lBRVQsMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQixrQ0FBa0M7SUFDbEMsZUFBZTs7SUFFZixhQUFhO0lBQ2IsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBLHNFQUFzRTtBQUN0RTtJQUNJLDRCQUE0Qjs7SUFFNUIsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLDRCQUE0Qjs7SUFFNUIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsU0FBUztBQUNiO0FBQ0EsbUJBQW1CLHdCQUF3QixDQUFDOztBQUU1QztJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksMkRBQTBDO0lBQzFDLG1EQUFrQztBQUN0QztBQUNBO0lBQ0ksMkRBQTRDO0lBQzVDLG1EQUFvQztBQUN4QztBQUNBO0lBQ0ksMkRBQTRDO0lBQzVDLG1EQUFvQztBQUN4QztBQUNBO0lBQ0ksMkRBQTZDO0lBQzdDLG1EQUFxQztBQUN6QztBQUNBLGFBQWEsa0NBQWtDLENBQUM7QUFDaEQsY0FBYyxtQ0FBbUMsQ0FBQzs7QUFFbEQsc0VBQXNFOztBQUV0RTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLGFBQWE7O0lBRWIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsbUNBQW1DO0lBQ25DLG9DQUFvQztJQUNwQyw0Q0FBNEI7QUFDaENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWJnOiAjMTY0ZTYzO1xcbiAgICAtLWZnOiAjZjBmOWZmO1xcblxcbiAgICAtLWljb246ICNiZmRiZmU7XFxuICAgIC0taWNvbkhvdmVyOiAjZTBmMmZlO1xcbiAgICAtLWljb25BY3RpdmU6ICMwMjhmYzc7XFxufVxcblxcbmJvZHkge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG1hcmdpbjogMDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmcpO1xcbiAgICBjb2xvcjogdmFyKC0tZmcpO1xcbiAgICBmb250LWZhbWlseTogaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDlmcjtcXG59XFxuXFxuaW5wdXQge1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09IEhFQURFUiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiNoZWFkZXIge1xcbiAgICBib3JkZXI6IDFweCBkb3R0ZWQgbGlnaHRncmF5O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNpdHktY29udGFpbmVyIHtcXG4gICAgYm9yZGVyOiAxcHggZG90dGVkIGxpZ2h0Z3JheTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG4uY2l0eS1jb250YWluZXI+KiB7Ym9yZGVyOiAxcHggZG90dGVkIHdoaXRlO31cXG5cXG4uaW5wdXQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uY2l0eSB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uaWNvbiB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIC13ZWJraXQtbWFzay1zaXplOiBjb250YWluO1xcbiAgICBtYXNrLXNpemU6IGNvbnRhaW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWljb24pO1xcbn1cXG4uaWNvbi5lZGl0IHtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoJ2Fzc2V0cy9lZGl0LnN2ZycpO1xcbiAgICBtYXNrLWltYWdlOiB1cmwoJ2Fzc2V0cy9lZGl0LnN2ZycpO1xcbn1cXG4uaWNvbi5zZWFyY2gge1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybCgnYXNzZXRzL3NlYXJjaC5zdmcnKTtcXG4gICAgbWFzay1pbWFnZTogdXJsKCdhc3NldHMvc2VhcmNoLnN2ZycpO1xcbn1cXG4uaWNvbi5jYW5jZWwge1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybCgnYXNzZXRzL2NhbmNlbC5zdmcnKTtcXG4gICAgbWFzay1pbWFnZTogdXJsKCdhc3NldHMvY2FuY2VsLnN2ZycpO1xcbn1cXG4uaWNvbi5sb2FkaW5nIHtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoJ2Fzc2V0cy9sb2FkaW5nLnN2ZycpO1xcbiAgICBtYXNrLWltYWdlOiB1cmwoJ2Fzc2V0cy9sb2FkaW5nLnN2ZycpO1xcbn1cXG4uaWNvbjpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogdmFyKC0taWNvbkhvdmVyKTt9XFxuLmljb246YWN0aXZlIHtiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pY29uQWN0aXZlKTt9XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gTUFJTiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4jbWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWlkZGxlLWNvbnRhaW5lciB7XFxuICAgIGJvcmRlcjogMXB4IGRvdHRlZCBsaWdodGdyYXk7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi50ZXh0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50ZW1wIHtcXG4gICAgZm9udC1zaXplOiA2NHB4O1xcbn1cXG5cXG4jbWFpbj5pbWcge1xcbiAgICBib3JkZXItY29sb3I6IDFweCBkb3R0ZWQgd2hpdGU7XFxuICAgIHdpZHRoOiBjbGFtcCgxMDBweCwgMzB2bWluLCAxMDAwcHgpO1xcbiAgICBoZWlnaHQ6IGNsYW1wKDEwMHB4LCAzMHZtaW4sIDEwMDBweCk7XFxuICAgIHNyYzogdXJsKCdhc3NldHMvc3VubnkucG5nJyk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBET00gPSB7fTtcblxuRE9NLmNsZWFyTm9kZSA9IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICB3aGlsZShub2RlLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICBub2RlLnJlbW92ZUNoaWxkKG5vZGUuZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuXG5ET00uY3JlYXRlTm9kZSA9IGZ1bmN0aW9uKHBhcmVudE5vZGUsIHRhZywgY2xhc3NMaXN0LCB0ZXh0Q29udGVudCkge1xuICAgIGxldCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIGlmIChjbGFzc0xpc3QpXG4gICAgICAgIGZvciAobGV0IGNscyBvZiBjbGFzc0xpc3QpXG4gICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoY2xzKTtcbiAgICBub2RlLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChub2RlKTtcbiAgICByZXR1cm4gbm9kZTtcbn1cblxuRE9NLmNyZWF0ZURpdiA9IGZ1bmN0aW9uKHBhcmVudE5vZGUsIGNsYXNzTGlzdCwgdGV4dENvbnRlbnQpIHtcbiAgIHJldHVybiB0aGlzLmNyZWF0ZU5vZGUocGFyZW50Tm9kZSwgJ2RpdicsIGNsYXNzTGlzdCwgdGV4dENvbnRlbnQpXG59XG5cbkRPTS5jcmVhdGVUZXh0SW5wdXQgPSBmdW5jdGlvbihwYXJlbnROb2RlLCBpZCwgcGxhY2Vob2xkZXIpIHtcbiAgICBsZXQgaW5wdXROb2RlID0gdGhpcy5jcmVhdGVOb2RlKHBhcmVudE5vZGUsICdpbnB1dCcpO1xuICAgIGlucHV0Tm9kZS50eXBlID0gJ3RleHQnO1xuICAgIGlucHV0Tm9kZS5pZCA9IGlkO1xuICAgIGlucHV0Tm9kZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgcGxhY2Vob2xkZXIpO1xuICAgIHJldHVybiBpbnB1dE5vZGU7XG59XG5cbkRPTS5jcmVhdGVJbWFnZSA9IGZ1bmN0aW9uKHBhcmVudE5vZGUsIGNsYXNzTGlzdCwgc3JjLCBhbHQpIHtcbiAgICBsZXQgaW1hZ2VOb2RlID0gdGhpcy5jcmVhdGVOb2RlKHBhcmVudE5vZGUsICdpbWcnLCBjbGFzc0xpc3QpO1xuICAgIGlmIChzcmMpXG4gICAgICAgIGltYWdlTm9kZS5zcmMgPSBzcmM7XG4gICAgaW1hZ2VOb2RlLmFsdCA9IGFsdDtcbiAgICByZXR1cm4gaW1hZ2VOb2RlO1xufVxuXG5ET00uY3JlYXRlSWNvbiA9IGZ1bmN0aW9uKHBhcmVudE5vZGUsIGNsYXNzTGlzdCwgc3JjKSB7XG4gICAgbGV0IGljb25Ob2RlID0gdGhpcy5jcmVhdGVOb2RlKHBhcmVudE5vZGUsICdvYmplY3QnLCBjbGFzc0xpc3QpO1xuICAgIGljb25Ob2RlLnNldEF0dHJpYnV0ZSgndHlwZScsICdpbWFnZS9zdmcreG1sJyk7XG4gICAgaWNvbk5vZGUuc2V0QXR0cmlidXRlKCdkYXRhJywgc3JjKVxuICAgIHJldHVybiBpY29uTm9kZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRE9NOyIsImltcG9ydCBET00gZnJvbSAnLi9kb20uanMnXG5cbmltcG9ydCBVcmxHZW4gZnJvbSAnLi91cmxHZW4uanMnO1xuY29uc3Qgd2VhdGhlcktleSA9ICdiYmE2ZjU2ZjJkY2QzNGRiNTU4MTI4NWJiODg0ZWUzNic7XG5jb25zdCB3ZWF0aGVyQmFzZVVybCA9ICdodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcic7XG5sZXQgd2VhdGhlclVybCA9IG5ldyBVcmxHZW4od2VhdGhlckJhc2VVcmwpO1xud2VhdGhlclVybC5hZGRLZXkoJ2FwcGlkJywgd2VhdGhlcktleSk7XG53ZWF0aGVyVXJsLmFkZEtleSgndW5pdHMnLCAnaW1wZXJpYWwnKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3Iobm9kZSwgd2VhdGhlclN0YXRlKSB7XG4gICAgICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgICAgIHRoaXMuc3RhdGUgPSAnc3RhdGUnOyAvLyBmb3VuZCwgc2VhcmNoLCByZXRyeSwgbG9hZGluZ1xuICAgICAgICB0aGlzLndlYXRoZXJTdGF0ZSA9IHdlYXRoZXJTdGF0ZTtcblxuICAgICAgICBET00uY2xlYXJOb2RlKHRoaXMubm9kZSk7XG4gICAgICAgIHRoaXMudXBkYXRlU2VhcmNoU3RhdGUoKTtcbiAgICAgICAgdGhpcy51cGRhdGVGb3VuZFN0YXRlKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlU2VhcmNoU3RhdGUoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSAnc2VhcmNoJztcbiAgICAgICAgY29uc3QgY29udGFpbmVyTm9kZSA9IERPTS5jcmVhdGVEaXYodGhpcy5ub2RlLCBbJ2NpdHktY29udGFpbmVyJ10pO1xuICAgICAgICBjb25zdCBjaXR5Tm9kZSA9IERPTS5jcmVhdGVUZXh0SW5wdXQoY29udGFpbmVyTm9kZSwgJ2NpdHktaW5wdXQnLCAnRW50ZXIgY2l0eTonKTtcbiAgICAgICAgY29uc3Qgc2VhcmNoTm9kZSA9IERPTS5jcmVhdGVEaXYoY29udGFpbmVyTm9kZSwgWydlZGl0J10sICdzZWFyY2gnKTtcbiAgICAgICAgc2VhcmNoTm9kZS5pZCA9ICdzZWFyY2gtYnV0dG9uJztcblxuICAgICAgICBzZWFyY2hOb2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGNpdHlOYW1lID0gY2l0eU5vZGUudmFsdWU7XG4gICAgICAgICAgICBpZiAoIWNpdHlOYW1lKSByZXR1cm47XG5cbiAgICAgICAgICAgIGxldCB0ZW1wSnNvbiA9IG51bGw7XG5cbiAgICAgICAgICAgIHF1ZXJ5Q2l0eShjaXR5TmFtZSlcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0ZW1wSnNvbiA9IHJlcztcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Byb21pc2UgZnVyZmlsbGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2VhdGhlclN0YXRlLnVwZGF0ZShyZXMpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRm91bmRTdGF0ZSgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwcm9taXNlIHJlamVjdGVkOiAnLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnd2VhdGhlclN0YXRlOiAnLCB0aGlzLndlYXRoZXJTdGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdqc29uOiAnLCB0ZW1wSnNvbik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVwZGF0ZUZvdW5kU3RhdGUoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSAnZm91bmQnO1xuICAgICAgICBET00uY2xlYXJOb2RlKHRoaXMubm9kZSk7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lck5vZGUgPSBET00uY3JlYXRlRGl2KHRoaXMubm9kZSwgWydjaXR5LWNvbnRhaW5lciddKTtcbiAgICAgICAgY29uc3QgY2l0eU5vZGUgPSBET00uY3JlYXRlRGl2KGNvbnRhaW5lck5vZGUsIFsnY2l0eSddLCB0aGlzLndlYXRoZXJTdGF0ZS5jaXR5KTtcbiAgICAgICAgY29uc3QgZWRpdE5vZGUgPSBET00uY3JlYXRlRGl2KGNvbnRhaW5lck5vZGUsIFsnZWRpdCddLCAnZWRpdCcpO1xuICAgICAgICBjb25zdCBpY29uTmRlID0gRE9NLmNyZWF0ZURpdihjb250YWluZXJOb2RlLCBbJ2ljb24nLCAnZWRpdCddKTtcbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHF1ZXJ5Q2l0eShjaXR5TmFtZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdlYXRoZXJVcmwuYWRkS2V5KCdxJywgY2l0eU5hbWUpO1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh3ZWF0aGVyVXJsLnVybCwge21vZGU6ICdjb3JzJ30pO1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKVxuICAgICAgICAgICAgcmVqZWN0KHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgICAgICBsZXQganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgaWYgKGpzb24uY29kICE9ICcyMDAnKVxuICAgICAgICAgICAgcmVqZWN0KGpzb24uY29kKTtcbiAgICAgICAgcmVzb2x2ZShqc29uKTtcbiAgICB9KTtcbn0iLCJleHBvcnQgZGVmYXVsdCAgY2xhc3MgVXJsR2VuIHtcbiAgICBjb25zdHJ1Y3RvcihiYXNlVXJsKSB7XG4gICAgICAgIHRoaXMuYmFzZVVybCA9IGJhc2VVcmw7XG4gICAgICAgIHRoaXMua2V5UGFpcnMgPSBbXTtcbiAgICB9XG4gICAgYWRkS2V5KGtleSwgdmFsdWUpIHtcbiAgICAgICAgZm9yIChsZXQgcGFpciBvZiB0aGlzLmtleVBhaXJzKSB7XG4gICAgICAgICAgICBpZiAocGFpci5rZXkgPT09IGtleSkge1xuICAgICAgICAgICAgICAgIHBhaXIudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5rZXlQYWlycy5wdXNoKHtrZXksIHZhbHVlfSk7XG4gICAgfVxuICAgIGdldCB1cmwoKSB7XG4gICAgICAgIGxldCBvdXQgPSB0aGlzLmJhc2VVcmw7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5rZXlQYWlycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGtleSA9IHRoaXMua2V5UGFpcnNbaV0ua2V5O1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5rZXlQYWlyc1tpXS52YWx1ZTtcbiAgICAgICAgICAgIG91dCArPSAoaSA9PSAwKSA/ICc/JyA6ICcmJztcbiAgICAgICAgICAgIG91dCA9IG91dCArIGtleSArICc9JyArIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJidW5kbGVcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCBVcmxHZW4gZnJvbSAnLi91cmxHZW4uanMnXG5pbXBvcnQgU2VhcmNoTWFuYWdlciBmcm9tICcuL3NlYXJjaC5qcydcbmltcG9ydCBET00gZnJvbSAnLi9kb20uanMnXG5cbmltcG9ydCBjbG91ZHlJY29uIGZyb20gJy4vYXNzZXRzL2Nsb3VkeS5wbmcnXG5pbXBvcnQgcmFpbkljb24gZnJvbSAnLi9hc3NldHMvcmFpbi5wbmcnXG5pbXBvcnQgc2hvd2VySWNvbiBmcm9tICcuL2Fzc2V0cy9zaG93ZXIucG5nJ1xuaW1wb3J0IHNub3dJY29uIGZyb20gJy4vYXNzZXRzL3Nub3cucG5nJ1xuaW1wb3J0IHN1bm55SWNvbiBmcm9tICcuL2Fzc2V0cy9zdW5ueS5wbmcnXG5pbXBvcnQgdGh1bmRlcnN0b3JtSWNvbiBmcm9tICcuL2Fzc2V0cy90aHVuZGVyc3Rvcm0ucG5nJ1xuaW1wb3J0IG5pZ2h0SWNvbiBmcm9tICcuL2Fzc2V0cy9uaWdodC5wbmcnXG5pbXBvcnQgcGFydHlDbG91ZHlJY29uIGZyb20gJy4vYXNzZXRzL3BhcnR5Q2xvdWR5LnBuZydcblxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PSBXRUJTSVRFIERBVEEgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuY29uc3Qgd2VhdGhlcktleSA9ICdiYmE2ZjU2ZjJkY2QzNGRiNTU4MTI4NWJiODg0ZWUzNic7XG5jb25zdCB3ZWF0aGVyQmFzZVVybCA9ICdodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcic7XG5cbmxldCB3ZWF0aGVyVXJsID0gbmV3IFVybEdlbih3ZWF0aGVyQmFzZVVybCk7XG53ZWF0aGVyVXJsLmFkZEtleSgnYXBwaWQnLCB3ZWF0aGVyS2V5KTtcbndlYXRoZXJVcmwuYWRkS2V5KCd1bml0cycsICdpbXBlcmlhbCcpO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PSBTRVRVUCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxubGV0IHN0YXRlID0ge1xuICAgIGNpdHk6ICdOZXcgWW9yayBDaXR5JyxcbiAgICB0ZW1wOiBudWxsLCAvLyBrZWx2aW5cbiAgICBmZWVsc0xpa2U6IG51bGwsXG4gICAgd2luZFNwZWVkOiBudWxsLCAvLyBtZXRlci9zZWNcbiAgICBjbG91ZHM6IG51bGwsIC8vICUgY292ZXJhZ2VcbiAgICBkZXNjOiAnZW1wdHknLFxuICAgIGljb246IG51bGwsIC8vIHdlYXRoZXIgaWNvbiAoMDEtMDQsMDktMTEsMTMsNTApLCAoZHxuKVxuICAgIC8vIDE6IGNsZWFyIHNreSwgMjogZmV3IGNsb3VkLCAzOiBzY2F0dGVyZWQgY2xvdWRzLCA0OiBicm9rZW4gY2xvdWRzLFxuICAgIC8vIDk6IHNob3dlciByYWluLCAxMDogcmFpbiwgMTE6IHRodW5kZXJzdG9ybSwgMTM6IHNub3csIDUwOiBtaXN0O1xuXG4gICAgcHJpbnRUZW1wKCkge3JldHVybiB0aGlzLnRlbXAudG9TdHJpbmcoKSArICfCsEYnO30sXG4gICAgcHJpbnRGZWVsc0xpa2UoKSB7cmV0dXJuICdmZWVscyBsaWtlICcgKyB0aGlzLmZlZWxzTGlrZS50b1N0cmluZygpICsgJ8KwRic7fSxcbiAgICBwcmludENsb3VkcygpIHtyZXR1cm4gJ2Nsb3VkIGNvdmVyYWdlOiAnICsgdGhpcy5jbG91ZHMgKyAnJSd9LFxuICAgIHByaW50V2luZCgpIHtyZXR1cm4gJ3dpbmQ6ICcgKyB0aGlzLndpbmRTcGVlZCArICcgbXBoJzt9LFxuXG4gICAgdXBkYXRlKGRhdGEpIHtcbiAgICAgICAgdGhpcy50ZW1wID0gTWF0aC5yb3VuZChOdW1iZXIoZGF0YS5tYWluLnRlbXApKTtcbiAgICAgICAgdGhpcy5mZWVsc0xpa2UgPSBNYXRoLnJvdW5kKE51bWJlcihkYXRhLm1haW4uZmVlbHNfbGlrZSkpO1xuICAgICAgICB0aGlzLndpbmRTcGVlZCA9IE1hdGgucm91bmQoZGF0YS53aW5kLnNwZWVkKTtcbiAgICAgICAgdGhpcy5kZXNjID0gZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmNpdHkgPSBkYXRhLm5hbWU7XG4gICAgICAgIHRoaXMuaWNvbiA9IGRhdGEud2VhdGhlclswXS5pY29uO1xuICAgICAgICBjb25zb2xlLmxvZygnY3VycmVudCBzdGF0ZSB1cGRhdGVkOiAnLCB0aGlzKTtcblxuICAgICAgICB0aGlzLndyaXRlKCk7XG4gICAgfSxcblxuICAgIHdyaXRlKCkge1xuICAgICAgICBjb25zdCB0ZW1wTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wJyk7XG4gICAgICAgIGNvbnN0IGZlZWxzTGlrZU5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVlbHMtbGlrZScpO1xuICAgICAgICBjb25zdCB3aW5kTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kJyk7XG4gICAgICAgIGNvbnN0IGRlc2NOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2MnKTtcbiAgICAgICAgLy8gVE9ETzogcmUgaW50ZWdyYXRlIGNpdHkgbm9kZVxuICAgICAgICAvLyBjb25zdCBjaXR5Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5Jyk7XG4gICAgICAgIGNvbnN0IGltZ05vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcblxuICAgICAgICB0ZW1wTm9kZS50ZXh0Q29udGVudCA9IHRoaXMucHJpbnRUZW1wKCk7XG4gICAgICAgIGZlZWxzTGlrZU5vZGUudGV4dENvbnRlbnQgPSB0aGlzLnByaW50RmVlbHNMaWtlKCk7XG4gICAgICAgIHdpbmROb2RlLnRleHRDb250ZW50ID0gdGhpcy5wcmludFdpbmQoKTtcbiAgICAgICAgZGVzY05vZGUudGV4dENvbnRlbnQgPSB0aGlzLmRlc2M7XG4gICAgICAgIC8vIGNpdHlOb2RlLnRleHRDb250ZW50ID0gdGhpcy5jaXR5O1xuXG4gICAgICAgIGltZ05vZGUuc3JjID0gZ2V0V2VhdGhlckljb24odGhpcy5pY29uKTtcbiAgICB9LFxufTtcblxubGV0IHNlYXJjaE1hbmFnZXIgPSBuZXcgU2VhcmNoTWFuYWdlcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJyksIHN0YXRlKTtcblxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT0gZnVuY3Rpb25zID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbi8vICAgICBsZXQgY2l0eU5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eS1pbnB1dCcpLnZhbHVlO1xuLy8gICAgIGNvbnNvbGUubG9nKGBzZWFyY2hpbmcgZm9yIFwiJHtjaXR5TmFtZX1cIi4uLmApOyAvLyBERUJVR1xuLy8gICAgIGlmIChjaXR5TmFtZSkge1xuLy8gICAgICAgICBhd2FpdCBxdWVyeUNpdHkoY2l0eU5hbWUpO1xuLy8gICAgIH1cbi8vIH0pO1xuXG5hc3luYyBmdW5jdGlvbiBxdWVyeUNpdHkoY2l0eU5hbWUpIHtcbiAgICB3ZWF0aGVyVXJsLmFkZEtleSgncScsIGNpdHlOYW1lKTtcbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMzAwKSk7IC8vIERFQlVHXG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHdlYXRoZXJVcmwudXJsLCB7bW9kZTogJ2NvcnMnfSk7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gICAgICAgIGxldCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBpZiAoanNvbi5jb2QgIT0gJzIwMCcpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoanNvbi5jb2QpO1xuICAgICAgICB1cGRhdGVXZWF0aGVyU3RhdGUoanNvbik7XG4gICAgICAgIGNvbnNvbGUubG9nKCd3ZWF0aGVyIGpzb246ICcsIGpzb24pOyAvLyBERUJVR1xuICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdBbiBlcnJvciBvY2N1cmVkIHdoaWxlIGZldGNoaW5nOiAnLCBlcnIpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlV2VhdGhlclN0YXRlKGRhdGEpIHtcbiAgICBzdGF0ZS50ZW1wID0gTWF0aC5yb3VuZChOdW1iZXIoZGF0YS5tYWluLnRlbXApKTtcbiAgICBzdGF0ZS5mZWVsc0xpa2UgPSBNYXRoLnJvdW5kKE51bWJlcihkYXRhLm1haW4uZmVlbHNfbGlrZSkpO1xuICAgIHN0YXRlLndpbmRTcGVlZCA9IE1hdGgucm91bmQoZGF0YS53aW5kLnNwZWVkKTtcbiAgICBzdGF0ZS5kZXNjID0gZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICAgIHN0YXRlLmNpdHkgPSBkYXRhLm5hbWU7XG4gICAgc3RhdGUuaWNvbiA9IGRhdGEud2VhdGhlclswXS5pY29uO1xuICAgIHdyaXRlV2VhdGhlclN0YXRlKCk7XG59XG5cbmZ1bmN0aW9uIHdyaXRlV2VhdGhlclN0YXRlKCkge1xuICAgIGNvbnN0IHRlbXBOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXAnKTtcbiAgICBjb25zdCBmZWVsc0xpa2VOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWxzLWxpa2UnKTtcbiAgICBjb25zdCB3aW5kTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kJyk7XG4gICAgY29uc3QgZGVzY05vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzYycpO1xuICAgIGNvbnN0IGNpdHlOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHknKTtcbiAgICBjb25zdCBpbWdOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW1nJyk7XG5cbiAgICB0ZW1wTm9kZS50ZXh0Q29udGVudCA9IHN0YXRlLnByaW50VGVtcCgpO1xuICAgIGZlZWxzTGlrZU5vZGUudGV4dENvbnRlbnQgPSBzdGF0ZS5wcmludEZlZWxzTGlrZSgpO1xuICAgIHdpbmROb2RlLnRleHRDb250ZW50ID0gc3RhdGUucHJpbnRXaW5kKCk7XG4gICAgZGVzY05vZGUudGV4dENvbnRlbnQgPSBzdGF0ZS5kZXNjO1xuICAgIGNpdHlOb2RlLnRleHRDb250ZW50ID0gc3RhdGUuY2l0eTtcblxuICAgIGltZ05vZGUuc3JjID0gZ2V0V2VhdGhlckljb24oc3RhdGUuaWNvbik7XG59XG5cbmZ1bmN0aW9uIGdldFdlYXRoZXJJY29uKGljb25Db2RlKSB7XG4gICAgc3dpdGNoIChpY29uQ29kZSkge1xuICAgICAgICBjYXNlICcwMWQnOiByZXR1cm4gc3VubnlJY29uOyBicmVhaztcbiAgICAgICAgY2FzZSAnMDFuJzogcmV0dXJuIG5pZ2h0SWNvbjsgYnJlYWs7XG4gICAgICAgIGNhc2UgJzAyZCc6XG4gICAgICAgIGNhc2UgJzAzZCc6XG4gICAgICAgIGNhc2UgJzAybic6XG4gICAgICAgIGNhc2UgJzAzbic6IHJldHVybiBwYXJ0eUNsb3VkeUljb247IGJyZWFrO1xuICAgICAgICBjYXNlICcwNGQnOlxuICAgICAgICBjYXNlICcwNG4nOlxuICAgICAgICBjYXNlICc1MGQnOlxuICAgICAgICBjYXNlICc1MG4nOiByZXR1cm4gY2xvdWR5SWNvbjsgYnJlYWs7XG4gICAgICAgIGNhc2UgJzA5ZCc6XG4gICAgICAgIGNhc2UgJzA5bic6IHJldHVybiBzaG93ZXJJY29uOyBicmVhaztcbiAgICAgICAgY2FzZSAnMTBkJzpcbiAgICAgICAgY2FzZSAnMTBuJzogcmV0dXJuIHJhaW5JY29uOyBicmVhaztcbiAgICAgICAgY2FzZSAnMTFkJzpcbiAgICAgICAgY2FzZSAnMTFuJzogcmV0dXJuIHRodW5kZXJzdG9ybUljb247IGJyZWFrO1xuICAgICAgICBjYXNlICcxM2QnOlxuICAgICAgICBjYXNlICcxM24nOiByZXR1cm4gc25vd0ljb247IGJyZWFrO1xuICAgIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09IElOSVQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIHF1ZXJ5Q2l0eSgnTmV3IFlvcmsgQ2l0eScpO1xuXG5cblxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PSBERUJVRyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuY29uc29sZS5sb2cod2VhdGhlclVybC51cmwsIHdlYXRoZXJVcmwpO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PSBDUkVESVRTID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFN1bm55XG4vLyA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2ZyZWUtaWNvbnMvc3VubnlcIiB0aXRsZT1cInN1bm55IGljb25zXCI+U3VubnkgaWNvbnMgY3JlYXRlZCBieSBqdXN0aWNvbiAtIEZsYXRpY29uPC9hPlxuLy8gVGh1ZG5lcnN0b3JtXG4vLyA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2ZyZWUtaWNvbnMvdGh1bmRlcnN0b3JtXCIgdGl0bGU9XCJ0aHVuZGVyc3Rvcm0gaWNvbnNcIj5UaHVuZGVyc3Rvcm0gaWNvbnMgY3JlYXRlZCBieSBqdXN0aWNvbiAtIEZsYXRpY29uPC9hPlxuLy8gU2hvd2VyXG4vLyA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2ZyZWUtaWNvbnMvcmFpblwiIHRpdGxlPVwicmFpbiBpY29uc1wiPlJhaW4gaWNvbnMgY3JlYXRlZCBieSBqdXN0aWNvbiAtIEZsYXRpY29uPC9hPlxuLy8gUmFpblxuLy8gPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9mcmVlLWljb25zL3JhaW5cIiB0aXRsZT1cInJhaW4gaWNvbnNcIj5SYWluIGljb25zIGNyZWF0ZWQgYnkganVzdGljb24gLSBGbGF0aWNvbjwvYT5cbi8vIENsb3VkeVxuLy8gPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9mcmVlLWljb25zL2Nsb3VkXCIgdGl0bGU9XCJjbG91ZCBpY29uc1wiPkNsb3VkIGljb25zIGNyZWF0ZWQgYnkganVzdGljb24gLSBGbGF0aWNvbjwvYT5cbi8vIFNub3dcbi8vIDxhIGhyZWY9XCJodHRwczovL3d3dy5mbGF0aWNvbi5jb20vZnJlZS1pY29ucy9zbm93ZmFsbFwiIHRpdGxlPVwic25vd2ZhbGwgaWNvbnNcIj5Tbm93ZmFsbCBpY29ucyBjcmVhdGVkIGJ5IGp1c3RpY29uIC0gRmxhdGljb248L2E+XG4vLyBOaWdodFxuLy8gPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9mcmVlLWljb25zL2NsZWFyXCIgdGl0bGU9XCJjbGVhciBpY29uc1wiPkNsZWFyIGljb25zIGNyZWF0ZWQgYnkganVzdGljb24gLSBGbGF0aWNvbjwvYT5cbi8vIFBhcnR5IENsb3VkeVxuLy8gPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9mcmVlLWljb25zL2Nsb3VkeVwiIHRpdGxlPVwiY2xvdWR5IGljb25zXCI+Q2xvdWR5IGljb25zIGNyZWF0ZWQgYnkganVzdGljb24gLSBGbGF0aWNvbjwvYT4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=