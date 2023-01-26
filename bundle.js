/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./leixo.ttf */ "./src/leixo.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./carambola.otf */ "./src/carambola.otf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "p {\n  margin: 0;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0%;\n  }\n  to {\n    opacity: 100%;\n  }\n}\n@keyframes fadeOut {\n  from {\n    opacity: 100%;\n  }\n  to {\n    opacity: 0%;\n  }\n}\n.fadeOut {\n  animation: fadeOut 0.5s;\n}\n\n@font-face {\n  font-family: \"leixo\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n@font-face {\n  font-family: \"carambola\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\nbody {\n  margin: 0%;\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 280px 1fr;\n  grid-template-rows: 60px 1fr;\n}\nbody input,\nbody textarea {\n  width: 100%;\n  border: #828f7d 3px solid;\n  border-radius: 2px;\n  box-sizing: border-box;\n}\nbody input:active, body input:hover, body input:focus,\nbody textarea:active,\nbody textarea:hover,\nbody textarea:focus {\n  border: #e4d1d1 3px solid;\n  outline: none;\n}\nbody .delete-button {\n  justify-self: center;\n  color: orangered;\n  font-weight: bolder;\n  font-family: leixo;\n  cursor: pointer;\n}\nbody .delete-button:hover {\n  color: yellowgreen;\n}\n\n#header {\n  grid-column: 1/3;\n  height: 100%;\n  width: 100%;\n  background: linear-gradient(90deg, #446e6e 64%, #77a8a8 100%);\n  color: #d9ecd0;\n  font-family: leixo;\n  font-size: 25px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n#sidebar {\n  grid-column: 1/2;\n  grid-row: 2/3;\n  height: 100%;\n  width: 100%;\n  background: #446e6e;\n  display: inline-block;\n  padding: 50px 20px;\n  box-sizing: border-box;\n  display: grid;\n  grid-template-rows: 50% 50%;\n}\n#sidebar .current .my-projects-title {\n  font-family: leixo;\n  color: #e4d1d1;\n  font-size: 30px;\n  margin: 0% 0% 20px 0%;\n  text-align: center;\n}\n#sidebar .current .project-container {\n  height: calc(100% - 65px);\n  display: grid;\n  grid-template-columns: 100%;\n  grid-template-rows: repeat(auto-fill, 18%);\n  overflow-y: scroll;\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n}\n#sidebar .current .project-container::-webkit-scrollbar {\n  display: none;\n}\n#sidebar .current .project-container .pDiv {\n  font-size: 25px;\n  font-weight: bold;\n  color: white;\n  cursor: pointer;\n  font-family: carambola;\n  display: grid;\n  grid-template-columns: 15% 65% 20%;\n  align-items: center;\n  justify-content: center;\n  animation: fadeIn 0.5s;\n}\n#sidebar .current .project-container .pDiv::before {\n  content: \">  \";\n  font-weight: bolder;\n  font-family: leixo;\n  font-size: 30px;\n}\n#sidebar .current .project-container .pDiv .pText {\n  max-width: 156px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n#sidebar .current .project-container .pDiv .pText:hover {\n  color: #dde02a;\n}\n#sidebar .current .project-container .pDiv .current-project {\n  color: #dde02a;\n}\n#sidebar .new {\n  height: 100%;\n  font-family: leixo;\n  grid-template-rows: 50px 1fr;\n  display: grid;\n}\n#sidebar .new .new-form {\n  height: 100%;\n  grid-template-columns: 100%;\n  color: white;\n  visibility: hidden;\n}\n#sidebar .new .description {\n  height: 80px;\n}\n#sidebar .new .newbtn {\n  box-shadow: inset 0px 1px 0px 0px #bee2f9;\n  font-family: leixo;\n  background: linear-gradient(to bottom, #63b8ee 5%, #468ccf 100%);\n  background-color: #63b8ee;\n  border-radius: 6px;\n  border: 1px solid #3866a3;\n  display: inline-block;\n  cursor: pointer;\n  color: white;\n  font-size: 15px;\n  font-weight: bold;\n  padding: 6px 24px;\n  height: 100%;\n  width: 100%;\n  text-decoration: none;\n  text-shadow: 0px 1px 0px #7cacde;\n}\n#sidebar .new .newbtn:hover {\n  background: linear-gradient(to bottom, #468ccf 5%, #63b8ee 100%);\n  background-color: #468ccf;\n}\n#sidebar .new .newbtn:active {\n  position: relative;\n  top: 1px;\n}\n#sidebar .new .confirm {\n  box-shadow: inset 0px 1px 0px 0px #caefab;\n  background: linear-gradient(to bottom, #77d42a 5%, #5cb811 100%);\n  background-color: #77d42a;\n  border-radius: 6px;\n  border: 1px solid #268a16;\n  display: inline-block;\n  cursor: pointer;\n  color: white;\n  font-family: leixo;\n  font-size: 14px;\n  font-weight: bold;\n  padding: 6px 24px;\n  text-decoration: none;\n  text-shadow: 0px 1px 0px #aade7c;\n}\n#sidebar .new .confirm:hover {\n  background: linear-gradient(to bottom, #5cb811 5%, #77d42a 100%);\n  background-color: #5cb811;\n}\n#sidebar .new .confirm:active {\n  position: relative;\n  top: 1px;\n}\n#sidebar .new .cancel {\n  box-shadow: inset 0px 1px 0px 0px #f7c5c0;\n  background: linear-gradient(to bottom, #fc8d83 5%, #e4685d 100%);\n  background-color: #fc8d83;\n  border-radius: 6px;\n  border: 1px solid #d83526;\n  display: inline-block;\n  cursor: pointer;\n  color: #ffffff;\n  font-family: leixo;\n  font-size: 14px;\n  font-weight: bold;\n  padding: 6px 24px;\n  text-decoration: none;\n  text-shadow: 0px 1px 0px #b23e35;\n}\n#sidebar .new .cancel:hover {\n  background: linear-gradient(to bottom, #e4685d 5%, #fc8d83 100%);\n  background-color: #e4685d;\n}\n#sidebar .new .cancel:active {\n  position: relative;\n  top: 1px;\n}\n\n.main-container {\n  grid-row: 2/3;\n  grid-column: 2/3;\n  background: #446e6e;\n  height: 100%;\n  width: 100%;\n}\n\n#main {\n  height: 100%;\n  width: 100%;\n  border-radius: 75px 0px 0px 0px;\n  background: linear-gradient(90deg, #828f7d 64%, #d9ecd0 100%);\n  display: grid;\n  box-sizing: border-box;\n  padding-left: 100px;\n  padding-top: 25px;\n  padding-right: 25px;\n  grid-template-columns: 100%;\n  grid-template-rows: repeat(auto-fill, 7.5%);\n  row-gap: 10px;\n}\n#main .project-desc {\n  display: grid;\n  grid-template-columns: 40% 60%;\n  height: 100%;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 5px;\n  grid-row: 1/3;\n  align-items: stretch;\n  justify-items: center;\n  font-family: carambola;\n  overflow: hidden;\n}\n#main .project-desc .main-name {\n  display: flex;\n  height: 100%;\n  width: 100%;\n  color: #446e6e;\n  font-size: 35px;\n  font-weight: bolder;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-right: 10px;\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n}\n#main .project-desc .main-description {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  color: white;\n  font-size: 20px;\n  font-weight: bold;\n  word-wrap: break-word;\n  text-align: center;\n  font-family: sans-serif;\n}\n#main .newtask {\n  height: 100%;\n  width: 100%;\n  box-sizing: border-box;\n  border-radius: 20px;\n  border: #77a8a8 2px solid;\n  background-color: #a9ccd2;\n  display: grid;\n  column-gap: 10px;\n  grid-template-columns: 20% 20% 20% 20% 15%;\n  padding: 5px;\n  align-items: center;\n  justify-items: center;\n  animation: fadeIn 0.5s;\n  font-size: 20px;\n  font-family: carambola;\n}\n#main .newtask .TaskButton {\n  background-color: #44c767;\n  border-radius: 28px;\n  border: 1px solid #18ab29;\n  display: inline-block;\n  cursor: pointer;\n  color: #ffffff;\n  font-family: Arial;\n  font-size: 17px;\n  padding: 3px 10px;\n  text-decoration: none;\n  text-shadow: 0px 1px 0px #2f6627;\n}\n#main .newtask .TaskButton:hover {\n  background-color: #5cbf2a;\n}\n#main .newtask .TaskButton:active {\n  position: relative;\n  top: 1px;\n}\n#main .task {\n  display: grid;\n  grid-template-columns: 10% 30% 30% 30%;\n  justify-items: center;\n  align-items: center;\n  font-size: 20px;\n  font-family: sans-serif;\n  font-weight: bold;\n  height: 100%;\n  width: 100%;\n  animation: fadeIn 0.5s;\n}", "",{"version":3,"sources":["webpack://./src/styles.scss"],"names":[],"mappings":"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","sourcesContent":["$primary: #77a8a8;\r\n$primary-dark: #446e6e;\r\n$secondary: #e4d1d1;\r\n$secondary-dark: #b9b0b0;\r\n$tertiary: #d9ecd0;\r\n$tertiary-dark: #828f7d;\r\n\r\np {\r\n  margin: 0;\r\n}\r\n\r\n@keyframes fadeIn {\r\n  from {\r\n    opacity: 0%;\r\n  }\r\n  to {\r\n    opacity: 100%;\r\n  }\r\n}\r\n\r\n@keyframes fadeOut {\r\n  from {\r\n    opacity: 100%;\r\n  }\r\n  to {\r\n    opacity: 0%;\r\n  }\r\n}\r\n\r\n.fadeOut {\r\n  animation: fadeOut 0.5s;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"leixo\";\r\n  src: url(./leixo.ttf);\r\n}\r\n\r\n@font-face {\r\n  font-family: \"carambola\";\r\n  src: url(./carambola.otf);\r\n}\r\n\r\nbody {\r\n  margin: 0%;\r\n  height: 100vh;\r\n  display: grid;\r\n  grid-template-columns: 280px 1fr;\r\n  grid-template-rows: 60px 1fr;\r\n\r\n  input,\r\n  textarea {\r\n    width: 100%;\r\n    border: $tertiary-dark 3px solid;\r\n    border-radius: 2px;\r\n    box-sizing: border-box;\r\n\r\n    &:active,\r\n    &:hover,\r\n    &:focus {\r\n      border: $secondary 3px solid;\r\n      outline: none;\r\n    }\r\n  }\r\n\r\n  .delete-button {\r\n    justify-self: center;\r\n    color: orangered;\r\n    font-weight: bolder;\r\n    font-family: leixo;\r\n    cursor: pointer;\r\n\r\n    &:hover {\r\n      color: yellowgreen;\r\n    }\r\n  }\r\n}\r\n\r\n#header {\r\n  grid-column: 1/3;\r\n  height: 100%;\r\n  width: 100%;\r\n  background: linear-gradient(90deg, $primary-dark 64%, $primary 100%);\r\n  color: $tertiary;\r\n  font-family: leixo;\r\n  font-size: 25px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n#sidebar {\r\n  grid-column: 1/2;\r\n  grid-row: 2/3;\r\n  height: 100%;\r\n  width: 100%;\r\n  background: $primary-dark;\r\n  display: inline-block;\r\n  padding: 50px 20px;\r\n  box-sizing: border-box;\r\n  display: grid;\r\n  grid-template-rows: 50% 50%;\r\n\r\n  .current {\r\n    .my-projects-title {\r\n      font-family: leixo;\r\n      color: $secondary;\r\n      font-size: 30px;\r\n      margin: 0% 0% 20px 0%;\r\n      text-align: center;\r\n    }\r\n\r\n    .project-container {\r\n      height: calc(100% - 65px);\r\n      display: grid;\r\n      grid-template-columns: 100%;\r\n      grid-template-rows: repeat(auto-fill, 18%);\r\n      overflow-y: scroll;\r\n      -ms-overflow-style: none; /* IE and Edge */\r\n      scrollbar-width: none; /* Firefox */\r\n      &::-webkit-scrollbar {\r\n        display: none;\r\n      }\r\n\r\n      .pDiv {\r\n        font-size: 25px;\r\n        font-weight: bold;\r\n        color: white;\r\n        cursor: pointer;\r\n        font-family: carambola;\r\n        display: grid;\r\n        grid-template-columns: 15% 65% 20%;\r\n        align-items: center;\r\n        justify-content: center;\r\n        animation: fadeIn 0.5s;\r\n\r\n        &::before {\r\n          content: \">  \";\r\n          font-weight: bolder;\r\n          font-family: leixo;\r\n          font-size: 30px;\r\n        }\r\n\r\n        .pText {\r\n          max-width: 156px;\r\n          overflow: hidden;\r\n          text-overflow: ellipsis;\r\n          white-space: nowrap;\r\n\r\n          &:hover {\r\n            color: #dde02a;\r\n          }\r\n        }\r\n\r\n        .current-project {\r\n          color: #dde02a;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  .new {\r\n    height: 100%;\r\n    font-family: leixo;\r\n    grid-template-rows: 50px 1fr;\r\n    display: grid;\r\n\r\n    .new-form {\r\n      height: 100%;\r\n      grid-template-columns: 100%;\r\n      color: white;\r\n      visibility: hidden;\r\n    }\r\n\r\n    .description {\r\n      height: 80px;\r\n    }\r\n\r\n    .newbtn {\r\n      box-shadow: inset 0px 1px 0px 0px #bee2f9;\r\n      font-family: leixo;\r\n      background: linear-gradient(to bottom, #63b8ee 5%, #468ccf 100%);\r\n      background-color: #63b8ee;\r\n      border-radius: 6px;\r\n      border: 1px solid #3866a3;\r\n      display: inline-block;\r\n      cursor: pointer;\r\n      color: white;\r\n      font-size: 15px;\r\n      font-weight: bold;\r\n      padding: 6px 24px;\r\n      height: 100%;\r\n      width: 100%;\r\n      text-decoration: none;\r\n      text-shadow: 0px 1px 0px #7cacde;\r\n\r\n      &:hover {\r\n        background: linear-gradient(to bottom, #468ccf 5%, #63b8ee 100%);\r\n        background-color: #468ccf;\r\n      }\r\n\r\n      &:active {\r\n        position: relative;\r\n        top: 1px;\r\n      }\r\n    }\r\n    .confirm {\r\n      box-shadow: inset 0px 1px 0px 0px #caefab;\r\n      background: linear-gradient(to bottom, #77d42a 5%, #5cb811 100%);\r\n      background-color: #77d42a;\r\n      border-radius: 6px;\r\n      border: 1px solid #268a16;\r\n      display: inline-block;\r\n      cursor: pointer;\r\n      color: white;\r\n      font-family: leixo;\r\n      font-size: 14px;\r\n      font-weight: bold;\r\n      padding: 6px 24px;\r\n      text-decoration: none;\r\n      text-shadow: 0px 1px 0px #aade7c;\r\n\r\n      &:hover {\r\n        background: linear-gradient(to bottom, #5cb811 5%, #77d42a 100%);\r\n        background-color: #5cb811;\r\n      }\r\n      &:active {\r\n        position: relative;\r\n        top: 1px;\r\n      }\r\n    }\r\n    .cancel {\r\n      box-shadow: inset 0px 1px 0px 0px #f7c5c0;\r\n      background: linear-gradient(to bottom, #fc8d83 5%, #e4685d 100%);\r\n      background-color: #fc8d83;\r\n      border-radius: 6px;\r\n      border: 1px solid #d83526;\r\n      display: inline-block;\r\n      cursor: pointer;\r\n      color: #ffffff;\r\n      font-family: leixo;\r\n      font-size: 14px;\r\n      font-weight: bold;\r\n      padding: 6px 24px;\r\n      text-decoration: none;\r\n      text-shadow: 0px 1px 0px #b23e35;\r\n\r\n      &:hover {\r\n        background: linear-gradient(to bottom, #e4685d 5%, #fc8d83 100%);\r\n        background-color: #e4685d;\r\n      }\r\n      &:active {\r\n        position: relative;\r\n        top: 1px;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.main-container {\r\n  grid-row: 2/3;\r\n  grid-column: 2/3;\r\n  background: $primary-dark;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n#main {\r\n  height: 100%;\r\n  width: 100%;\r\n  border-radius: 75px 0px 0px 0px;\r\n  background: linear-gradient(90deg, $tertiary-dark 64%, $tertiary 100%);\r\n  display: grid;\r\n  box-sizing: border-box;\r\n  padding-left: 100px;\r\n  padding-top: 25px;\r\n  padding-right: 25px;\r\n  grid-template-columns: 100%;\r\n  grid-template-rows: repeat(auto-fill, 7.5%);\r\n  row-gap: 10px;\r\n\r\n  .project-desc {\r\n    display: grid;\r\n    grid-template-columns: 40% 60%;\r\n    height: 100%;\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n    padding: 5px;\r\n    grid-row: 1/3;\r\n    align-items: stretch;\r\n    justify-items: center;\r\n    font-family: carambola;\r\n    overflow: hidden;\r\n\r\n    .main-name {\r\n      display: flex;\r\n      height: 100%;\r\n      width: 100%;\r\n      color: $primary-dark;\r\n      font-size: 35px;\r\n      font-weight: bolder;\r\n      overflow: hidden;\r\n      text-overflow: ellipsis;\r\n      margin-right: 10px;\r\n      text-align: center;\r\n      align-items: center;\r\n      justify-content: center;\r\n    }\r\n\r\n    .main-description {\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      height: 100%;\r\n      width: 100%;\r\n      color: white;\r\n      font-size: 20px;\r\n      font-weight: bold;\r\n      word-wrap: break-word;\r\n      text-align: center;\r\n      font-family: sans-serif;\r\n    }\r\n  }\r\n\r\n  .newtask {\r\n    height: 100%;\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n    border-radius: 20px;\r\n    border: $primary 2px solid;\r\n    background-color: #a9ccd2;\r\n    display: grid;\r\n    column-gap: 10px;\r\n    grid-template-columns: 20% 20% 20% 20% 15%;\r\n    padding: 5px;\r\n    align-items: center;\r\n    justify-items: center;\r\n    animation: fadeIn 0.5s;\r\n    font-size: 20px;\r\n    font-family: carambola;\r\n\r\n    .TaskButton {\r\n      background-color: #44c767;\r\n      border-radius: 28px;\r\n      border: 1px solid #18ab29;\r\n      display: inline-block;\r\n      cursor: pointer;\r\n      color: #ffffff;\r\n      font-family: Arial;\r\n      font-size: 17px;\r\n      padding: 3px 10px;\r\n      text-decoration: none;\r\n      text-shadow: 0px 1px 0px #2f6627;\r\n\r\n      &:hover {\r\n        background-color: #5cbf2a;\r\n      }\r\n      &:active {\r\n        position: relative;\r\n        top: 1px;\r\n      }\r\n    }\r\n  }\r\n\r\n  .task {\r\n    display: grid;\r\n    grid-template-columns: 10% 30% 30% 30%;\r\n    justify-items: center;\r\n    align-items: center;\r\n    font-size: 20px;\r\n    font-family: sans-serif;\r\n    font-weight: bold;\r\n    height: 100%;\r\n    width: 100%;\r\n    animation: fadeIn 0.5s;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkProject": () => (/* binding */ checkProject),
/* harmony export */   "checkTask": () => (/* binding */ checkTask),
/* harmony export */   "load": () => (/* binding */ load),
/* harmony export */   "prodel": () => (/* binding */ prodel),
/* harmony export */   "projectArr": () => (/* binding */ projectArr),
/* harmony export */   "pushToPrAr": () => (/* binding */ pushToPrAr),
/* harmony export */   "save": () => (/* binding */ save),
/* harmony export */   "savecheck": () => (/* binding */ savecheck)
/* harmony export */ });
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object */ "./src/object.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./src/ui.js");



let projectArr = [];

function load() {
  let projectArrSaved = JSON.parse(localStorage.getItem("projectArr"));
  projectArrSaved.forEach((e) => {
    console.log(e);
    var parsed = (0,_object__WEBPACK_IMPORTED_MODULE_0__.projects)(e.name, e.description);

    e.taskArr.forEach((task) => {
      var parsetask = parsed.tasks(task.check, task.taskDescription, task.date);
      parsed.taskAppend(parsetask);
    });
    projectArr.push(parsed);
  });
  projectArr.forEach((e) => {
    (0,_ui__WEBPACK_IMPORTED_MODULE_1__.renderProject)(e);
  });

  return { projectArr };
}

function save() {
  localStorage.setItem("projectArr", JSON.stringify(projectArr));
}

function checkProject(name, description) {
  let projectArrClone = [...projectArr];
  let projectNames = [];
  projectArrClone.forEach((e) => {
    projectNames.push(e.name);
  });

  if (name == "" || description == "") {
    alert("Input required");
    return false;
  } else if (projectNames.includes(name)) {
    alert("Duplicate project name is not allowed");
    return false;
  } else return true;
}

function checkTask(project, name, date) {
  let taskArrClone = [...project.taskArr];
  console.log(taskArrClone);
  let taskNames = [];
  taskArrClone.forEach((e) => {
    taskNames.push(e.taskDescription);
  });

  if (name == "" || date == "") {
    alert("Empty input field");
    return false;
  } else if (taskNames.includes(name)) {
    alert("Duplicate task names are not allowed");
    return false;
  } else return true;
}

function pushToPrAr(newP) {
  projectArr.push(newP);
  console.log(projectArr); // tester
  save();
}

function prodel(project) {
  for (var i = 0; i < projectArr.length; i++) {
    if (projectArr[i].name === project.name) {
      projectArr.splice(i, 1);
      save();
    }
  }
}

function savecheck(task, check) {
  task.check = check;
  save();
}




/***/ }),

/***/ "./src/object.js":
/*!***********************!*\
  !*** ./src/object.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projects": () => (/* binding */ projects)
/* harmony export */ });
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ "./src/logic.js");


var projects = (name, description) => {
  var tasks = (check, taskDescription, date) => {
    return { check, taskDescription, date };
  };

  let taskArr = [];
  var taskAppend = (newtask) => {
    taskArr.push(newtask);
    (0,_logic__WEBPACK_IMPORTED_MODULE_0__.save)();
    console.log(taskArr);
  };

  var taskRemove = (removedTask) => {
    for (var i = 0; i < taskArr.length; i++) {
      if (taskArr[i].taskDescription === removedTask.taskDescription) {
        taskArr.splice(i, 1);
        (0,_logic__WEBPACK_IMPORTED_MODULE_0__.save)();
      }
    }
  };

  return { name, description, taskArr, tasks, taskAppend, taskRemove };
};




/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderProject": () => (/* binding */ renderProject)
/* harmony export */ });
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./object */ "./src/object.js");
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logic */ "./src/logic.js");




const newbtn = document.querySelector(".newbtn");
const form = document.querySelector(".new-form");
const confirmed = document.querySelector(".confirm");
const cancel = document.querySelector(".cancel");
const projectlist = document.querySelector(".project-container");
const maintask = document.querySelector(".task-container");
const mainname = document.querySelector(".main-name");
const maindescription = document.querySelector(".main-description");

form.onsubmit = (e) => e.preventDefault();

document.body.onload = (0,_logic__WEBPACK_IMPORTED_MODULE_2__.load)();

newbtn.onclick = function () {
  form.style.animation = "fadeIn 0.5s";
  form.style.visibility = "visible";
};

cancel.onclick = function () {
  form.style.animation = "fadeOut 0.5s";

  const cancelDelay = setTimeout(cancelout, 450);
  function cancelout() {
    form.style.visibility = "hidden";
  }
};

//create new project
confirmed.onclick = function () {
  const nameq = document.querySelector("#name");
  const descq = document.querySelector(".description");
  let name = nameq.value;
  let description = descq.value;

  if ((0,_logic__WEBPACK_IMPORTED_MODULE_2__.checkProject)(name, description)) {
    newProjectArr(name, description);
    nameq.value = "";
    descq.value = "";
  }
};

function newProjectArr(name, description) {
  const newP = (0,_object__WEBPACK_IMPORTED_MODULE_1__.projects)(name, description);
  renderProject(newP);
  (0,_logic__WEBPACK_IMPORTED_MODULE_2__.pushToPrAr)(newP);
}

function renderProject(project) {
  const pDiv = document.createElement("div");
  const pText = document.createElement("p");
  const pDel = document.createElement("div");
  pText.innerHTML = project.name;
  pText.onclick = function () {
    if (maintask.getAttribute("current") == project.name) {
      //do nothing
    } else {
      let cur = document.querySelector(".current-project");
      if (cur) cur.classList.remove("current-project");
      maintask.innerHTML = "";
      pText.classList.add("current-project");
      maintask.setAttribute("current", project.name);
      renderProjectHeader(
        project.name.toUpperCase(),
        project.description.toUpperCase()
      );
      renderNewTask(project);
      project.taskArr.forEach((task) => renderTasks(project, task));
    }
  };

  pDel.innerHTML = "X";
  pDel.onclick = () => {
    if (confirm("Are you sure about deleting this project?")) {
      (0,_logic__WEBPACK_IMPORTED_MODULE_2__.prodel)(project);
      pDel.parentNode.remove();
      if (maintask.getAttribute("current") == project.name) {
        mainname.innerHTML = "";
        maindescription.innerHTML = "";
        maintask.innerHTML = "";
      }
    }
  };
  pText.classList.add("pText");
  pDel.classList.add("delete-button");
  pDiv.classList.add("pDiv");
  pDiv.appendChild(pText);
  pDiv.appendChild(pDel);
  projectlist.appendChild(pDiv);
}

function renderProjectHeader(name, description) {
  mainname.innerHTML = name;
  maindescription.innerHTML = description;
}

function renderNewTask(project) {
  const newtask = document.createElement("div");
  newtask.classList.add("newtask");

  const nameLabel = document.createElement("p");
  nameLabel.innerText = "Task Name:";
  const dateLabel = document.createElement("p");
  dateLabel.innerText = "Due Date:";

  const taskNameInput = document.createElement("Input");
  taskNameInput.classList.add("task-name-input");

  const taskDateInput = document.createElement("input");
  taskDateInput.type = "date";
  taskDateInput.classList.add("task-date-input");
  taskDateInput.valueAsDate = new Date();

  const addButton = document.createElement("button");
  addButton.classList.add("TaskButton");
  addButton.type = "button";
  addButton.innerText = "Add";
  addButton.onclick = () => {
    var dateArr = taskDateInput.value.split("");
    var arrangedDate = [
      //date rearrangement
      dateArr[8],
      dateArr[9],
      "-",
      dateArr[5],
      dateArr[6],
      "-",
      dateArr[0],
      dateArr[1],
      dateArr[2],
      dateArr[3],
    ].join("");

    if ((0,_logic__WEBPACK_IMPORTED_MODULE_2__.checkTask)(project, taskNameInput.value, taskDateInput.value)) {
      var newtask = project.tasks(false, taskNameInput.value, arrangedDate);
      project.taskAppend(newtask);
      renderTasks(project, newtask);
      taskNameInput.value = "";
    }
  };

  newtask.appendChild(nameLabel);
  newtask.appendChild(taskNameInput);
  newtask.appendChild(dateLabel);
  newtask.appendChild(taskDateInput);
  newtask.appendChild(addButton);
  maintask.appendChild(newtask);
}

function renderTasks(project, task) {
  const taskInfo = document.createElement("div");
  taskInfo.classList.add("task");

  const taskCheck = document.createElement("input");
  taskCheck.classList.add("checkbox");
  taskCheck.type = "checkbox";
  taskCheck.checked = task.check;
  taskCheck.onchange = () => {
    (0,_logic__WEBPACK_IMPORTED_MODULE_2__.savecheck)(task, taskCheck.checked);
  };

  const taskName = document.createElement("div");
  taskName.classList.add("task-name");
  taskName.innerText = task.taskDescription;

  const taskDate = document.createElement("div");
  taskDate.classList.add("task-date");
  taskDate.innerText = task.date;

  const taskDelete = document.createElement("div");
  taskDelete.classList.add("delete-button");
  taskDelete.innerText = "X";
  taskDelete.onclick = () => {
    taskDelete.parentNode.remove();
    project.taskRemove(task);
  };

  taskInfo.appendChild(taskCheck);
  taskInfo.appendChild(taskName);
  taskInfo.appendChild(taskDate);
  taskInfo.appendChild(taskDelete);
  maintask.appendChild(taskInfo);
}




/***/ }),

/***/ "./src/carambola.otf":
/*!***************************!*\
  !*** ./src/carambola.otf ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b6f685f5fe6a3bbe0dac.otf";

/***/ }),

/***/ "./src/leixo.ttf":
/*!***********************!*\
  !*** ./src/leixo.ttf ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7e5b0ae7e5469b65fb8f.ttf";

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
/******/ 			"main": 0
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/ui.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVcsV0FBVyxZQUFZLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxZQUFZLFdBQVcsV0FBVyxVQUFVLFdBQVcsS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLHNCQUFzQixxQkFBcUIsS0FBSyxNQUFNLFVBQVUsS0FBSyxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyw0Q0FBNEMsMkJBQTJCLHdCQUF3Qiw2QkFBNkIsdUJBQXVCLDRCQUE0QixXQUFXLGdCQUFnQixLQUFLLDJCQUEyQixZQUFZLG9CQUFvQixPQUFPLFVBQVUsc0JBQXNCLE9BQU8sS0FBSyw0QkFBNEIsWUFBWSxzQkFBc0IsT0FBTyxVQUFVLG9CQUFvQixPQUFPLEtBQUssa0JBQWtCLDhCQUE4QixLQUFLLG9CQUFvQiw2QkFBNkIsNEJBQTRCLEtBQUssb0JBQW9CLGlDQUFpQyxnQ0FBZ0MsS0FBSyxjQUFjLGlCQUFpQixvQkFBb0Isb0JBQW9CLHVDQUF1QyxtQ0FBbUMsZ0NBQWdDLG9CQUFvQix5Q0FBeUMsMkJBQTJCLCtCQUErQixzREFBc0QsdUNBQXVDLHdCQUF3QixTQUFTLE9BQU8sMEJBQTBCLDZCQUE2Qix5QkFBeUIsNEJBQTRCLDJCQUEyQix3QkFBd0IscUJBQXFCLDZCQUE2QixTQUFTLE9BQU8sS0FBSyxpQkFBaUIsdUJBQXVCLG1CQUFtQixrQkFBa0IsMkVBQTJFLHVCQUF1Qix5QkFBeUIsc0JBQXNCLG9CQUFvQiwwQkFBMEIsOEJBQThCLEtBQUssa0JBQWtCLHVCQUF1QixvQkFBb0IsbUJBQW1CLGtCQUFrQixnQ0FBZ0MsNEJBQTRCLHlCQUF5Qiw2QkFBNkIsb0JBQW9CLGtDQUFrQyxvQkFBb0IsNEJBQTRCLDZCQUE2Qiw0QkFBNEIsMEJBQTBCLGdDQUFnQyw2QkFBNkIsU0FBUyxnQ0FBZ0Msb0NBQW9DLHdCQUF3QixzQ0FBc0MscURBQXFELDZCQUE2QixvQ0FBb0Msa0RBQWtELDZDQUE2QywwQkFBMEIsV0FBVyxxQkFBcUIsNEJBQTRCLDhCQUE4Qix5QkFBeUIsNEJBQTRCLG1DQUFtQywwQkFBMEIsK0NBQStDLGdDQUFnQyxvQ0FBb0MsbUNBQW1DLDJCQUEyQiwrQkFBK0Isa0NBQWtDLGlDQUFpQyw4QkFBOEIsYUFBYSx3QkFBd0IsK0JBQStCLCtCQUErQixzQ0FBc0Msa0NBQWtDLDJCQUEyQiwrQkFBK0IsZUFBZSxhQUFhLGtDQUFrQyw2QkFBNkIsYUFBYSxXQUFXLFNBQVMsT0FBTyxnQkFBZ0IscUJBQXFCLDJCQUEyQixxQ0FBcUMsc0JBQXNCLHVCQUF1Qix1QkFBdUIsc0NBQXNDLHVCQUF1Qiw2QkFBNkIsU0FBUywwQkFBMEIsdUJBQXVCLFNBQVMscUJBQXFCLG9EQUFvRCw2QkFBNkIsMkVBQTJFLG9DQUFvQyw2QkFBNkIsb0NBQW9DLGdDQUFnQywwQkFBMEIsdUJBQXVCLDBCQUEwQiw0QkFBNEIsNEJBQTRCLHVCQUF1QixzQkFBc0IsZ0NBQWdDLDJDQUEyQyx1QkFBdUIsNkVBQTZFLHNDQUFzQyxXQUFXLHdCQUF3QiwrQkFBK0IscUJBQXFCLFdBQVcsU0FBUyxrQkFBa0Isb0RBQW9ELDJFQUEyRSxvQ0FBb0MsNkJBQTZCLG9DQUFvQyxnQ0FBZ0MsMEJBQTBCLHVCQUF1Qiw2QkFBNkIsMEJBQTBCLDRCQUE0Qiw0QkFBNEIsZ0NBQWdDLDJDQUEyQyx1QkFBdUIsNkVBQTZFLHNDQUFzQyxXQUFXLG9CQUFvQiwrQkFBK0IscUJBQXFCLFdBQVcsU0FBUyxpQkFBaUIsb0RBQW9ELDJFQUEyRSxvQ0FBb0MsNkJBQTZCLG9DQUFvQyxnQ0FBZ0MsMEJBQTBCLHlCQUF5Qiw2QkFBNkIsMEJBQTBCLDRCQUE0Qiw0QkFBNEIsZ0NBQWdDLDJDQUEyQyx1QkFBdUIsNkVBQTZFLHNDQUFzQyxXQUFXLG9CQUFvQiwrQkFBK0IscUJBQXFCLFdBQVcsU0FBUyxPQUFPLEtBQUsseUJBQXlCLG9CQUFvQix1QkFBdUIsZ0NBQWdDLG1CQUFtQixrQkFBa0IsS0FBSyxlQUFlLG1CQUFtQixrQkFBa0Isc0NBQXNDLDZFQUE2RSxvQkFBb0IsNkJBQTZCLDBCQUEwQix3QkFBd0IsMEJBQTBCLGtDQUFrQyxrREFBa0Qsb0JBQW9CLHlCQUF5QixzQkFBc0IsdUNBQXVDLHFCQUFxQixvQkFBb0IsK0JBQStCLHFCQUFxQixzQkFBc0IsNkJBQTZCLDhCQUE4QiwrQkFBK0IseUJBQXlCLHdCQUF3Qix3QkFBd0IsdUJBQXVCLHNCQUFzQiwrQkFBK0IsMEJBQTBCLDhCQUE4QiwyQkFBMkIsa0NBQWtDLDZCQUE2Qiw2QkFBNkIsOEJBQThCLGtDQUFrQyxTQUFTLCtCQUErQix3QkFBd0IsOEJBQThCLGtDQUFrQyx1QkFBdUIsc0JBQXNCLHVCQUF1QiwwQkFBMEIsNEJBQTRCLGdDQUFnQyw2QkFBNkIsa0NBQWtDLFNBQVMsT0FBTyxvQkFBb0IscUJBQXFCLG9CQUFvQiwrQkFBK0IsNEJBQTRCLG1DQUFtQyxrQ0FBa0Msc0JBQXNCLHlCQUF5QixtREFBbUQscUJBQXFCLDRCQUE0Qiw4QkFBOEIsK0JBQStCLHdCQUF3QiwrQkFBK0IseUJBQXlCLG9DQUFvQyw4QkFBOEIsb0NBQW9DLGdDQUFnQywwQkFBMEIseUJBQXlCLDZCQUE2QiwwQkFBMEIsNEJBQTRCLGdDQUFnQywyQ0FBMkMsdUJBQXVCLHNDQUFzQyxXQUFXLG9CQUFvQiwrQkFBK0IscUJBQXFCLFdBQVcsU0FBUyxPQUFPLGlCQUFpQixzQkFBc0IsK0NBQStDLDhCQUE4Qiw0QkFBNEIsd0JBQXdCLGdDQUFnQywwQkFBMEIscUJBQXFCLG9CQUFvQiwrQkFBK0IsT0FBTyxLQUFLLHVCQUF1QjtBQUN4cG1CO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDWjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvREFBb0Q7O0FBRXBEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzVCYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQTZJO0FBQzdJO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsNkhBQU87Ozs7QUFJdUY7QUFDL0csT0FBTyxpRUFBZSw2SEFBTyxJQUFJLG9JQUFjLEdBQUcsb0lBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZvQztBQUNDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGlEQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0EsSUFBSSxrREFBYTtBQUNqQixHQUFHO0FBQ0g7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix1QkFBdUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRjZCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0Q0FBSTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG9CQUFvQjtBQUN4QztBQUNBO0FBQ0EsUUFBUSw0Q0FBSTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDb0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCRztBQUNhO0FBUW5CO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw0Q0FBSTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sb0RBQVk7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlEQUFRO0FBQ3ZCO0FBQ0EsRUFBRSxrREFBVTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDhDQUFNO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlEQUFTO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaURBQVM7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbE16QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMuc2Nzcz9hNjA5Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2xvZ2ljLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3VpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2xlaXhvLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vY2FyYW1ib2xhLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJwIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDAlO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxMDAlO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGZhZGVPdXQge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDEwMCU7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDAlO1xcbiAgfVxcbn1cXG4uZmFkZU91dCB7XFxuICBhbmltYXRpb246IGZhZGVPdXQgMC41cztcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcImxlaXhvXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcImNhcmFtYm9sYVxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcbmJvZHkge1xcbiAgbWFyZ2luOiAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyODBweCAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDYwcHggMWZyO1xcbn1cXG5ib2R5IGlucHV0LFxcbmJvZHkgdGV4dGFyZWEge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6ICM4MjhmN2QgM3B4IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuYm9keSBpbnB1dDphY3RpdmUsIGJvZHkgaW5wdXQ6aG92ZXIsIGJvZHkgaW5wdXQ6Zm9jdXMsXFxuYm9keSB0ZXh0YXJlYTphY3RpdmUsXFxuYm9keSB0ZXh0YXJlYTpob3ZlcixcXG5ib2R5IHRleHRhcmVhOmZvY3VzIHtcXG4gIGJvcmRlcjogI2U0ZDFkMSAzcHggc29saWQ7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5ib2R5IC5kZWxldGUtYnV0dG9uIHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgY29sb3I6IG9yYW5nZXJlZDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBmb250LWZhbWlseTogbGVpeG87XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbmJvZHkgLmRlbGV0ZS1idXR0b246aG92ZXIge1xcbiAgY29sb3I6IHllbGxvd2dyZWVuO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzQ0NmU2ZSA2NCUsICM3N2E4YTggMTAwJSk7XFxuICBjb2xvcjogI2Q5ZWNkMDtcXG4gIGZvbnQtZmFtaWx5OiBsZWl4bztcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNzaWRlYmFyIHtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBncmlkLXJvdzogMi8zO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiAjNDQ2ZTZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogNTBweCAyMHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwJSA1MCU7XFxufVxcbiNzaWRlYmFyIC5jdXJyZW50IC5teS1wcm9qZWN0cy10aXRsZSB7XFxuICBmb250LWZhbWlseTogbGVpeG87XFxuICBjb2xvcjogI2U0ZDFkMTtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIG1hcmdpbjogMCUgMCUgMjBweCAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuI3NpZGViYXIgLmN1cnJlbnQgLnByb2plY3QtY29udGFpbmVyIHtcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gNjVweCk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maWxsLCAxOCUpO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAvKiBJRSBhbmQgRWRnZSAqL1xcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAvKiBGaXJlZm94ICovXFxufVxcbiNzaWRlYmFyIC5jdXJyZW50IC5wcm9qZWN0LWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuI3NpZGViYXIgLmN1cnJlbnQgLnByb2plY3QtY29udGFpbmVyIC5wRGl2IHtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1mYW1pbHk6IGNhcmFtYm9sYTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1JSA2NSUgMjAlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC41cztcXG59XFxuI3NpZGViYXIgLmN1cnJlbnQgLnByb2plY3QtY29udGFpbmVyIC5wRGl2OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIj4gIFxcXCI7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgZm9udC1mYW1pbHk6IGxlaXhvO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG4jc2lkZWJhciAuY3VycmVudCAucHJvamVjdC1jb250YWluZXIgLnBEaXYgLnBUZXh0IHtcXG4gIG1heC13aWR0aDogMTU2cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG4jc2lkZWJhciAuY3VycmVudCAucHJvamVjdC1jb250YWluZXIgLnBEaXYgLnBUZXh0OmhvdmVyIHtcXG4gIGNvbG9yOiAjZGRlMDJhO1xcbn1cXG4jc2lkZWJhciAuY3VycmVudCAucHJvamVjdC1jb250YWluZXIgLnBEaXYgLmN1cnJlbnQtcHJvamVjdCB7XFxuICBjb2xvcjogI2RkZTAyYTtcXG59XFxuI3NpZGViYXIgLm5ldyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmb250LWZhbWlseTogbGVpeG87XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggMWZyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuI3NpZGViYXIgLm5ldyAubmV3LWZvcm0ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG4jc2lkZWJhciAubmV3IC5kZXNjcmlwdGlvbiB7XFxuICBoZWlnaHQ6IDgwcHg7XFxufVxcbiNzaWRlYmFyIC5uZXcgLm5ld2J0biB7XFxuICBib3gtc2hhZG93OiBpbnNldCAwcHggMXB4IDBweCAwcHggI2JlZTJmOTtcXG4gIGZvbnQtZmFtaWx5OiBsZWl4bztcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM2M2I4ZWUgNSUsICM0NjhjY2YgMTAwJSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjNiOGVlO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzM4NjZhMztcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZzogNnB4IDI0cHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHRleHQtc2hhZG93OiAwcHggMXB4IDBweCAjN2NhY2RlO1xcbn1cXG4jc2lkZWJhciAubmV3IC5uZXdidG46aG92ZXIge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzQ2OGNjZiA1JSwgIzYzYjhlZSAxMDAlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NjhjY2Y7XFxufVxcbiNzaWRlYmFyIC5uZXcgLm5ld2J0bjphY3RpdmUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAxcHg7XFxufVxcbiNzaWRlYmFyIC5uZXcgLmNvbmZpcm0ge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDFweCAwcHggMHB4ICNjYWVmYWI7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNzdkNDJhIDUlLCAjNWNiODExIDEwMCUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc3ZDQyYTtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyNjhhMTY7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogbGVpeG87XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmc6IDZweCAyNHB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgdGV4dC1zaGFkb3c6IDBweCAxcHggMHB4ICNhYWRlN2M7XFxufVxcbiNzaWRlYmFyIC5uZXcgLmNvbmZpcm06aG92ZXIge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzVjYjgxMSA1JSwgIzc3ZDQyYSAxMDAlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1Y2I4MTE7XFxufVxcbiNzaWRlYmFyIC5uZXcgLmNvbmZpcm06YWN0aXZlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMXB4O1xcbn1cXG4jc2lkZWJhciAubmV3IC5jYW5jZWwge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDFweCAwcHggMHB4ICNmN2M1YzA7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmM4ZDgzIDUlLCAjZTQ2ODVkIDEwMCUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjOGQ4MztcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkODM1MjY7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGZvbnQtZmFtaWx5OiBsZWl4bztcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZzogNnB4IDI0cHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB0ZXh0LXNoYWRvdzogMHB4IDFweCAwcHggI2IyM2UzNTtcXG59XFxuI3NpZGViYXIgLm5ldyAuY2FuY2VsOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNlNDY4NWQgNSUsICNmYzhkODMgMTAwJSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTQ2ODVkO1xcbn1cXG4jc2lkZWJhciAubmV3IC5jYW5jZWw6YWN0aXZlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMXB4O1xcbn1cXG5cXG4ubWFpbi1jb250YWluZXIge1xcbiAgZ3JpZC1yb3c6IDIvMztcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBiYWNrZ3JvdW5kOiAjNDQ2ZTZlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNtYWluIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogNzVweCAwcHggMHB4IDBweDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzgyOGY3ZCA2NCUsICNkOWVjZDAgMTAwJSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmctbGVmdDogMTAwcHg7XFxuICBwYWRkaW5nLXRvcDogMjVweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpbGwsIDcuNSUpO1xcbiAgcm93LWdhcDogMTBweDtcXG59XFxuI21haW4gLnByb2plY3QtZGVzYyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MCUgNjAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZ3JpZC1yb3c6IDEvMztcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IGNhcmFtYm9sYTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbiNtYWluIC5wcm9qZWN0LWRlc2MgLm1haW4tbmFtZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBjb2xvcjogIzQ0NmU2ZTtcXG4gIGZvbnQtc2l6ZTogMzVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbiNtYWluIC5wcm9qZWN0LWRlc2MgLm1haW4tZGVzY3JpcHRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuI21haW4gLm5ld3Rhc2sge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJvcmRlcjogIzc3YThhOCAycHggc29saWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTljY2QyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGNvbHVtbi1nYXA6IDEwcHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSAyMCUgMjAlIDIwJSAxNSU7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC41cztcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtZmFtaWx5OiBjYXJhbWJvbGE7XFxufVxcbiNtYWluIC5uZXd0YXNrIC5UYXNrQnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NGM3Njc7XFxuICBib3JkZXItcmFkaXVzOiAyOHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzE4YWIyOTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbiAgcGFkZGluZzogM3B4IDEwcHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB0ZXh0LXNoYWRvdzogMHB4IDFweCAwcHggIzJmNjYyNztcXG59XFxuI21haW4gLm5ld3Rhc2sgLlRhc2tCdXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVjYmYyYTtcXG59XFxuI21haW4gLm5ld3Rhc2sgLlRhc2tCdXR0b246YWN0aXZlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMXB4O1xcbn1cXG4jbWFpbiAudGFzayB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMCUgMzAlIDMwJSAzMCU7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC41cztcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQU9BO0VBQ0UsU0FBQTtBQU5GOztBQVNBO0VBQ0U7SUFDRSxXQUFBO0VBTkY7RUFRQTtJQUNFLGFBQUE7RUFORjtBQUNGO0FBU0E7RUFDRTtJQUNFLGFBQUE7RUFQRjtFQVNBO0lBQ0UsV0FBQTtFQVBGO0FBQ0Y7QUFVQTtFQUNFLHVCQUFBO0FBUkY7O0FBV0E7RUFDRSxvQkFBQTtFQUNBLDRDQUFBO0FBUkY7QUFXQTtFQUNFLHdCQUFBO0VBQ0EsNENBQUE7QUFURjtBQVlBO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSw0QkFBQTtBQVZGO0FBWUU7O0VBRUUsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQVZKO0FBWUk7Ozs7RUFHRSx5QkFBQTtFQUNBLGFBQUE7QUFUTjtBQWFFO0VBQ0Usb0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBWEo7QUFhSTtFQUNFLGtCQUFBO0FBWE47O0FBZ0JBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDZEQUFBO0VBQ0EsY0EvRVM7RUFnRlQsa0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFiRjs7QUFnQkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQS9GYTtFQWdHYixxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7QUFiRjtBQWdCSTtFQUNFLGtCQUFBO0VBQ0EsY0F4R007RUF5R04sZUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFkTjtBQWlCSTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsMENB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bUNFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQWpDSjtBQW1DSTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0NBQUE7QUFqQ047QUFtQ007RUFDRSx5QkFBQTtBQWpDUjtBQW1DTTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtBQWpDUjtBQXNDRTtFQUNFLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFwQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJHByaW1hcnk6ICM3N2E4YTg7XFxyXFxuJHByaW1hcnktZGFyazogIzQ0NmU2ZTtcXHJcXG4kc2Vjb25kYXJ5OiAjZTRkMWQxO1xcclxcbiRzZWNvbmRhcnktZGFyazogI2I5YjBiMDtcXHJcXG4kdGVydGlhcnk6ICNkOWVjZDA7XFxyXFxuJHRlcnRpYXJ5LWRhcms6ICM4MjhmN2Q7XFxyXFxuXFxyXFxucCB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICBvcGFjaXR5OiAwJTtcXHJcXG4gIH1cXHJcXG4gIHRvIHtcXHJcXG4gICAgb3BhY2l0eTogMTAwJTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBmYWRlT3V0IHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICBvcGFjaXR5OiAxMDAlO1xcclxcbiAgfVxcclxcbiAgdG8ge1xcclxcbiAgICBvcGFjaXR5OiAwJTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmZhZGVPdXQge1xcclxcbiAgYW5pbWF0aW9uOiBmYWRlT3V0IDAuNXM7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJsZWl4b1xcXCI7XFxyXFxuICBzcmM6IHVybCguL2xlaXhvLnR0Zik7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJjYXJhbWJvbGFcXFwiO1xcclxcbiAgc3JjOiB1cmwoLi9jYXJhbWJvbGEub3RmKTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtYXJnaW46IDAlO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI4MHB4IDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNjBweCAxZnI7XFxyXFxuXFxyXFxuICBpbnB1dCxcXHJcXG4gIHRleHRhcmVhIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJvcmRlcjogJHRlcnRpYXJ5LWRhcmsgM3B4IHNvbGlkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuXFxyXFxuICAgICY6YWN0aXZlLFxcclxcbiAgICAmOmhvdmVyLFxcclxcbiAgICAmOmZvY3VzIHtcXHJcXG4gICAgICBib3JkZXI6ICRzZWNvbmRhcnkgM3B4IHNvbGlkO1xcclxcbiAgICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5kZWxldGUtYnV0dG9uIHtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiBvcmFuZ2VyZWQ7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBsZWl4bztcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcblxcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICBjb2xvcjogeWVsbG93Z3JlZW47XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlciB7XFxyXFxuICBncmlkLWNvbHVtbjogMS8zO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICRwcmltYXJ5LWRhcmsgNjQlLCAkcHJpbWFyeSAxMDAlKTtcXHJcXG4gIGNvbG9yOiAkdGVydGlhcnk7XFxyXFxuICBmb250LWZhbWlseTogbGVpeG87XFxyXFxuICBmb250LXNpemU6IDI1cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhciB7XFxyXFxuICBncmlkLWNvbHVtbjogMS8yO1xcclxcbiAgZ3JpZC1yb3c6IDIvMztcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZDogJHByaW1hcnktZGFyaztcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHBhZGRpbmc6IDUwcHggMjBweDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MCUgNTAlO1xcclxcblxcclxcbiAgLmN1cnJlbnQge1xcclxcbiAgICAubXktcHJvamVjdHMtdGl0bGUge1xcclxcbiAgICAgIGZvbnQtZmFtaWx5OiBsZWl4bztcXHJcXG4gICAgICBjb2xvcjogJHNlY29uZGFyeTtcXHJcXG4gICAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgICAgbWFyZ2luOiAwJSAwJSAyMHB4IDAlO1xcclxcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucHJvamVjdC1jb250YWluZXIge1xcclxcbiAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gNjVweCk7XFxyXFxuICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XFxyXFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maWxsLCAxOCUpO1xcclxcbiAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gICAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IC8qIElFIGFuZCBFZGdlICovXFxyXFxuICAgICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAvKiBGaXJlZm94ICovXFxyXFxuICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLnBEaXYge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogY2FyYW1ib2xhO1xcclxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTUlIDY1JSAyMCU7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBhbmltYXRpb246IGZhZGVJbiAwLjVzO1xcclxcblxcclxcbiAgICAgICAgJjo6YmVmb3JlIHtcXHJcXG4gICAgICAgICAgY29udGVudDogXFxcIj4gIFxcXCI7XFxyXFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBsZWl4bztcXHJcXG4gICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLnBUZXh0IHtcXHJcXG4gICAgICAgICAgbWF4LXdpZHRoOiAxNTZweDtcXHJcXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuXFxyXFxuICAgICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgIGNvbG9yOiAjZGRlMDJhO1xcclxcbiAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuY3VycmVudC1wcm9qZWN0IHtcXHJcXG4gICAgICAgICAgY29sb3I6ICNkZGUwMmE7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmV3IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBmb250LWZhbWlseTogbGVpeG87XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNTBweCAxZnI7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFxyXFxuICAgIC5uZXctZm9ybSB7XFxyXFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcXHJcXG4gICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5kZXNjcmlwdGlvbiB7XFxyXFxuICAgICAgaGVpZ2h0OiA4MHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5uZXdidG4ge1xcclxcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAxcHggMHB4IDBweCAjYmVlMmY5O1xcclxcbiAgICAgIGZvbnQtZmFtaWx5OiBsZWl4bztcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNjNiOGVlIDUlLCAjNDY4Y2NmIDEwMCUpO1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2M2I4ZWU7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzODY2YTM7XFxyXFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICAgIHBhZGRpbmc6IDZweCAyNHB4O1xcclxcbiAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgICAgdGV4dC1zaGFkb3c6IDBweCAxcHggMHB4ICM3Y2FjZGU7XFxyXFxuXFxyXFxuICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNDY4Y2NmIDUlLCAjNjNiOGVlIDEwMCUpO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ2OGNjZjtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgJjphY3RpdmUge1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgdG9wOiAxcHg7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgIC5jb25maXJtIHtcXHJcXG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMXB4IDBweCAwcHggI2NhZWZhYjtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNzdkNDJhIDUlLCAjNWNiODExIDEwMCUpO1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3N2Q0MmE7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMyNjhhMTY7XFxyXFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgZm9udC1mYW1pbHk6IGxlaXhvO1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgICBwYWRkaW5nOiA2cHggMjRweDtcXHJcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgICAgdGV4dC1zaGFkb3c6IDBweCAxcHggMHB4ICNhYWRlN2M7XFxyXFxuXFxyXFxuICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNWNiODExIDUlLCAjNzdkNDJhIDEwMCUpO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVjYjgxMTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgJjphY3RpdmUge1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgdG9wOiAxcHg7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgIC5jYW5jZWwge1xcclxcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAxcHggMHB4IDBweCAjZjdjNWMwO1xcclxcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmYzhkODMgNSUsICNlNDY4NWQgMTAwJSk7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjOGQ4MztcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2Q4MzUyNjtcXHJcXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgICAgIGZvbnQtZmFtaWx5OiBsZWl4bztcXHJcXG4gICAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgICAgcGFkZGluZzogNnB4IDI0cHg7XFxyXFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICAgIHRleHQtc2hhZG93OiAwcHggMXB4IDBweCAjYjIzZTM1O1xcclxcblxcclxcbiAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2U0Njg1ZCA1JSwgI2ZjOGQ4MyAxMDAlKTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNDY4NWQ7XFxyXFxuICAgICAgfVxcclxcbiAgICAgICY6YWN0aXZlIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgIHRvcDogMXB4O1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250YWluZXIge1xcclxcbiAgZ3JpZC1yb3c6IDIvMztcXHJcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxyXFxuICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1kYXJrO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbiNtYWluIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNzVweCAwcHggMHB4IDBweDtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgJHRlcnRpYXJ5LWRhcmsgNjQlLCAkdGVydGlhcnkgMTAwJSk7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTAwcHg7XFxyXFxuICBwYWRkaW5nLXRvcDogMjVweDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpbGwsIDcuNSUpO1xcclxcbiAgcm93LWdhcDogMTBweDtcXHJcXG5cXHJcXG4gIC5wcm9qZWN0LWRlc2Mge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwJSA2MCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgZ3JpZC1yb3c6IDEvMztcXHJcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGNhcmFtYm9sYTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHJcXG4gICAgLm1haW4tbmFtZSB7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgY29sb3I6ICRwcmltYXJ5LWRhcms7XFxyXFxuICAgICAgZm9udC1zaXplOiAzNXB4O1xcclxcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm1haW4tZGVzY3JpcHRpb24ge1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmV3dGFzayB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIGJvcmRlcjogJHByaW1hcnkgMnB4IHNvbGlkO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTljY2QyO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBjb2x1bW4tZ2FwOiAxMHB4O1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSAyMCUgMjAlIDIwJSAxNSU7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbmltYXRpb246IGZhZGVJbiAwLjVzO1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBjYXJhbWJvbGE7XFxyXFxuXFxyXFxuICAgIC5UYXNrQnV0dG9uIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDRjNzY3O1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDI4cHg7XFxyXFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzE4YWIyOTtcXHJcXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcXHJcXG4gICAgICBmb250LXNpemU6IDE3cHg7XFxyXFxuICAgICAgcGFkZGluZzogM3B4IDEwcHg7XFxyXFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICAgIHRleHQtc2hhZG93OiAwcHggMXB4IDBweCAjMmY2NjI3O1xcclxcblxcclxcbiAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVjYmYyYTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgJjphY3RpdmUge1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgdG9wOiAxcHg7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudGFzayB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAlIDMwJSAzMCUgMzAlO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBhbmltYXRpb246IGZhZGVJbiAwLjVzO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9vYmplY3RcIjtcclxuaW1wb3J0IHsgcmVuZGVyUHJvamVjdCB9IGZyb20gXCIuL3VpXCI7XHJcblxyXG5sZXQgcHJvamVjdEFyciA9IFtdO1xyXG5cclxuZnVuY3Rpb24gbG9hZCgpIHtcclxuICBsZXQgcHJvamVjdEFyclNhdmVkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RBcnJcIikpO1xyXG4gIHByb2plY3RBcnJTYXZlZC5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIHZhciBwYXJzZWQgPSBwcm9qZWN0cyhlLm5hbWUsIGUuZGVzY3JpcHRpb24pO1xyXG5cclxuICAgIGUudGFza0Fyci5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICAgIHZhciBwYXJzZXRhc2sgPSBwYXJzZWQudGFza3ModGFzay5jaGVjaywgdGFzay50YXNrRGVzY3JpcHRpb24sIHRhc2suZGF0ZSk7XHJcbiAgICAgIHBhcnNlZC50YXNrQXBwZW5kKHBhcnNldGFzayk7XHJcbiAgICB9KTtcclxuICAgIHByb2plY3RBcnIucHVzaChwYXJzZWQpO1xyXG4gIH0pO1xyXG4gIHByb2plY3RBcnIuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgcmVuZGVyUHJvamVjdChlKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHsgcHJvamVjdEFyciB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBzYXZlKCkge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdEFyclwiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0QXJyKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrUHJvamVjdChuYW1lLCBkZXNjcmlwdGlvbikge1xyXG4gIGxldCBwcm9qZWN0QXJyQ2xvbmUgPSBbLi4ucHJvamVjdEFycl07XHJcbiAgbGV0IHByb2plY3ROYW1lcyA9IFtdO1xyXG4gIHByb2plY3RBcnJDbG9uZS5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICBwcm9qZWN0TmFtZXMucHVzaChlLm5hbWUpO1xyXG4gIH0pO1xyXG5cclxuICBpZiAobmFtZSA9PSBcIlwiIHx8IGRlc2NyaXB0aW9uID09IFwiXCIpIHtcclxuICAgIGFsZXJ0KFwiSW5wdXQgcmVxdWlyZWRcIik7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfSBlbHNlIGlmIChwcm9qZWN0TmFtZXMuaW5jbHVkZXMobmFtZSkpIHtcclxuICAgIGFsZXJ0KFwiRHVwbGljYXRlIHByb2plY3QgbmFtZSBpcyBub3QgYWxsb3dlZFwiKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9IGVsc2UgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrVGFzayhwcm9qZWN0LCBuYW1lLCBkYXRlKSB7XHJcbiAgbGV0IHRhc2tBcnJDbG9uZSA9IFsuLi5wcm9qZWN0LnRhc2tBcnJdO1xyXG4gIGNvbnNvbGUubG9nKHRhc2tBcnJDbG9uZSk7XHJcbiAgbGV0IHRhc2tOYW1lcyA9IFtdO1xyXG4gIHRhc2tBcnJDbG9uZS5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICB0YXNrTmFtZXMucHVzaChlLnRhc2tEZXNjcmlwdGlvbik7XHJcbiAgfSk7XHJcblxyXG4gIGlmIChuYW1lID09IFwiXCIgfHwgZGF0ZSA9PSBcIlwiKSB7XHJcbiAgICBhbGVydChcIkVtcHR5IGlucHV0IGZpZWxkXCIpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0gZWxzZSBpZiAodGFza05hbWVzLmluY2x1ZGVzKG5hbWUpKSB7XHJcbiAgICBhbGVydChcIkR1cGxpY2F0ZSB0YXNrIG5hbWVzIGFyZSBub3QgYWxsb3dlZFwiKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9IGVsc2UgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHB1c2hUb1ByQXIobmV3UCkge1xyXG4gIHByb2plY3RBcnIucHVzaChuZXdQKTtcclxuICBjb25zb2xlLmxvZyhwcm9qZWN0QXJyKTsgLy8gdGVzdGVyXHJcbiAgc2F2ZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9kZWwocHJvamVjdCkge1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvamVjdEFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKHByb2plY3RBcnJbaV0ubmFtZSA9PT0gcHJvamVjdC5uYW1lKSB7XHJcbiAgICAgIHByb2plY3RBcnIuc3BsaWNlKGksIDEpO1xyXG4gICAgICBzYXZlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzYXZlY2hlY2sodGFzaywgY2hlY2spIHtcclxuICB0YXNrLmNoZWNrID0gY2hlY2s7XHJcbiAgc2F2ZSgpO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIHByb2plY3RBcnIsXHJcbiAgbG9hZCxcclxuICBzYXZlLFxyXG4gIGNoZWNrUHJvamVjdCxcclxuICBwdXNoVG9QckFyLFxyXG4gIHByb2RlbCxcclxuICBjaGVja1Rhc2ssXHJcbiAgc2F2ZWNoZWNrLFxyXG59O1xyXG4iLCJpbXBvcnQgeyBzYXZlIH0gZnJvbSBcIi4vbG9naWNcIjtcclxuXHJcbnZhciBwcm9qZWN0cyA9IChuYW1lLCBkZXNjcmlwdGlvbikgPT4ge1xyXG4gIHZhciB0YXNrcyA9IChjaGVjaywgdGFza0Rlc2NyaXB0aW9uLCBkYXRlKSA9PiB7XHJcbiAgICByZXR1cm4geyBjaGVjaywgdGFza0Rlc2NyaXB0aW9uLCBkYXRlIH07XHJcbiAgfTtcclxuXHJcbiAgbGV0IHRhc2tBcnIgPSBbXTtcclxuICB2YXIgdGFza0FwcGVuZCA9IChuZXd0YXNrKSA9PiB7XHJcbiAgICB0YXNrQXJyLnB1c2gobmV3dGFzayk7XHJcbiAgICBzYXZlKCk7XHJcbiAgICBjb25zb2xlLmxvZyh0YXNrQXJyKTtcclxuICB9O1xyXG5cclxuICB2YXIgdGFza1JlbW92ZSA9IChyZW1vdmVkVGFzaykgPT4ge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YXNrQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh0YXNrQXJyW2ldLnRhc2tEZXNjcmlwdGlvbiA9PT0gcmVtb3ZlZFRhc2sudGFza0Rlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgdGFza0Fyci5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgc2F2ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHsgbmFtZSwgZGVzY3JpcHRpb24sIHRhc2tBcnIsIHRhc2tzLCB0YXNrQXBwZW5kLCB0YXNrUmVtb3ZlIH07XHJcbn07XHJcblxyXG5leHBvcnQgeyBwcm9qZWN0cyB9O1xyXG4iLCJpbXBvcnQgXCIuL3N0eWxlcy5zY3NzXCI7XHJcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vb2JqZWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgbG9hZCxcclxuICBjaGVja1Byb2plY3QsXHJcbiAgcHVzaFRvUHJBcixcclxuICBwcm9kZWwsXHJcbiAgY2hlY2tUYXNrLFxyXG4gIHNhdmVjaGVjayxcclxufSBmcm9tIFwiLi9sb2dpY1wiO1xyXG5cclxuY29uc3QgbmV3YnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXdidG5cIik7XHJcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy1mb3JtXCIpO1xyXG5jb25zdCBjb25maXJtZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbmZpcm1cIik7XHJcbmNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsXCIpO1xyXG5jb25zdCBwcm9qZWN0bGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jb250YWluZXJcIik7XHJcbmNvbnN0IG1haW50YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWNvbnRhaW5lclwiKTtcclxuY29uc3QgbWFpbm5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tbmFtZVwiKTtcclxuY29uc3QgbWFpbmRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWRlc2NyaXB0aW9uXCIpO1xyXG5cclxuZm9ybS5vbnN1Ym1pdCA9IChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5kb2N1bWVudC5ib2R5Lm9ubG9hZCA9IGxvYWQoKTtcclxuXHJcbm5ld2J0bi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gIGZvcm0uc3R5bGUuYW5pbWF0aW9uID0gXCJmYWRlSW4gMC41c1wiO1xyXG4gIGZvcm0uc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG59O1xyXG5cclxuY2FuY2VsLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgZm9ybS5zdHlsZS5hbmltYXRpb24gPSBcImZhZGVPdXQgMC41c1wiO1xyXG5cclxuICBjb25zdCBjYW5jZWxEZWxheSA9IHNldFRpbWVvdXQoY2FuY2Vsb3V0LCA0NTApO1xyXG4gIGZ1bmN0aW9uIGNhbmNlbG91dCgpIHtcclxuICAgIGZvcm0uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgfVxyXG59O1xyXG5cclxuLy9jcmVhdGUgbmV3IHByb2plY3RcclxuY29uZmlybWVkLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgbmFtZXEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hbWVcIik7XHJcbiAgY29uc3QgZGVzY3EgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc2NyaXB0aW9uXCIpO1xyXG4gIGxldCBuYW1lID0gbmFtZXEudmFsdWU7XHJcbiAgbGV0IGRlc2NyaXB0aW9uID0gZGVzY3EudmFsdWU7XHJcblxyXG4gIGlmIChjaGVja1Byb2plY3QobmFtZSwgZGVzY3JpcHRpb24pKSB7XHJcbiAgICBuZXdQcm9qZWN0QXJyKG5hbWUsIGRlc2NyaXB0aW9uKTtcclxuICAgIG5hbWVxLnZhbHVlID0gXCJcIjtcclxuICAgIGRlc2NxLnZhbHVlID0gXCJcIjtcclxuICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBuZXdQcm9qZWN0QXJyKG5hbWUsIGRlc2NyaXB0aW9uKSB7XHJcbiAgY29uc3QgbmV3UCA9IHByb2plY3RzKG5hbWUsIGRlc2NyaXB0aW9uKTtcclxuICByZW5kZXJQcm9qZWN0KG5ld1ApO1xyXG4gIHB1c2hUb1ByQXIobmV3UCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclByb2plY3QocHJvamVjdCkge1xyXG4gIGNvbnN0IHBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IHBUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgY29uc3QgcERlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcFRleHQuaW5uZXJIVE1MID0gcHJvamVjdC5uYW1lO1xyXG4gIHBUZXh0Lm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAobWFpbnRhc2suZ2V0QXR0cmlidXRlKFwiY3VycmVudFwiKSA9PSBwcm9qZWN0Lm5hbWUpIHtcclxuICAgICAgLy9kbyBub3RoaW5nXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgY3VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50LXByb2plY3RcIik7XHJcbiAgICAgIGlmIChjdXIpIGN1ci5jbGFzc0xpc3QucmVtb3ZlKFwiY3VycmVudC1wcm9qZWN0XCIpO1xyXG4gICAgICBtYWludGFzay5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICBwVGV4dC5jbGFzc0xpc3QuYWRkKFwiY3VycmVudC1wcm9qZWN0XCIpO1xyXG4gICAgICBtYWludGFzay5zZXRBdHRyaWJ1dGUoXCJjdXJyZW50XCIsIHByb2plY3QubmFtZSk7XHJcbiAgICAgIHJlbmRlclByb2plY3RIZWFkZXIoXHJcbiAgICAgICAgcHJvamVjdC5uYW1lLnRvVXBwZXJDYXNlKCksXHJcbiAgICAgICAgcHJvamVjdC5kZXNjcmlwdGlvbi50b1VwcGVyQ2FzZSgpXHJcbiAgICAgICk7XHJcbiAgICAgIHJlbmRlck5ld1Rhc2socHJvamVjdCk7XHJcbiAgICAgIHByb2plY3QudGFza0Fyci5mb3JFYWNoKCh0YXNrKSA9PiByZW5kZXJUYXNrcyhwcm9qZWN0LCB0YXNrKSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcERlbC5pbm5lckhUTUwgPSBcIlhcIjtcclxuICBwRGVsLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICBpZiAoY29uZmlybShcIkFyZSB5b3Ugc3VyZSBhYm91dCBkZWxldGluZyB0aGlzIHByb2plY3Q/XCIpKSB7XHJcbiAgICAgIHByb2RlbChwcm9qZWN0KTtcclxuICAgICAgcERlbC5wYXJlbnROb2RlLnJlbW92ZSgpO1xyXG4gICAgICBpZiAobWFpbnRhc2suZ2V0QXR0cmlidXRlKFwiY3VycmVudFwiKSA9PSBwcm9qZWN0Lm5hbWUpIHtcclxuICAgICAgICBtYWlubmFtZS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIG1haW5kZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIG1haW50YXNrLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4gIHBUZXh0LmNsYXNzTGlzdC5hZGQoXCJwVGV4dFwiKTtcclxuICBwRGVsLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtYnV0dG9uXCIpO1xyXG4gIHBEaXYuY2xhc3NMaXN0LmFkZChcInBEaXZcIik7XHJcbiAgcERpdi5hcHBlbmRDaGlsZChwVGV4dCk7XHJcbiAgcERpdi5hcHBlbmRDaGlsZChwRGVsKTtcclxuICBwcm9qZWN0bGlzdC5hcHBlbmRDaGlsZChwRGl2KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdEhlYWRlcihuYW1lLCBkZXNjcmlwdGlvbikge1xyXG4gIG1haW5uYW1lLmlubmVySFRNTCA9IG5hbWU7XHJcbiAgbWFpbmRlc2NyaXB0aW9uLmlubmVySFRNTCA9IGRlc2NyaXB0aW9uO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJOZXdUYXNrKHByb2plY3QpIHtcclxuICBjb25zdCBuZXd0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBuZXd0YXNrLmNsYXNzTGlzdC5hZGQoXCJuZXd0YXNrXCIpO1xyXG5cclxuICBjb25zdCBuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBuYW1lTGFiZWwuaW5uZXJUZXh0ID0gXCJUYXNrIE5hbWU6XCI7XHJcbiAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgZGF0ZUxhYmVsLmlubmVyVGV4dCA9IFwiRHVlIERhdGU6XCI7XHJcblxyXG4gIGNvbnN0IHRhc2tOYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiSW5wdXRcIik7XHJcbiAgdGFza05hbWVJbnB1dC5jbGFzc0xpc3QuYWRkKFwidGFzay1uYW1lLWlucHV0XCIpO1xyXG5cclxuICBjb25zdCB0YXNrRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIHRhc2tEYXRlSW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xyXG4gIHRhc2tEYXRlSW5wdXQuY2xhc3NMaXN0LmFkZChcInRhc2stZGF0ZS1pbnB1dFwiKTtcclxuICB0YXNrRGF0ZUlucHV0LnZhbHVlQXNEYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZChcIlRhc2tCdXR0b25cIik7XHJcbiAgYWRkQnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xyXG4gIGFkZEJ1dHRvbi5pbm5lclRleHQgPSBcIkFkZFwiO1xyXG4gIGFkZEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgdmFyIGRhdGVBcnIgPSB0YXNrRGF0ZUlucHV0LnZhbHVlLnNwbGl0KFwiXCIpO1xyXG4gICAgdmFyIGFycmFuZ2VkRGF0ZSA9IFtcclxuICAgICAgLy9kYXRlIHJlYXJyYW5nZW1lbnRcclxuICAgICAgZGF0ZUFycls4XSxcclxuICAgICAgZGF0ZUFycls5XSxcclxuICAgICAgXCItXCIsXHJcbiAgICAgIGRhdGVBcnJbNV0sXHJcbiAgICAgIGRhdGVBcnJbNl0sXHJcbiAgICAgIFwiLVwiLFxyXG4gICAgICBkYXRlQXJyWzBdLFxyXG4gICAgICBkYXRlQXJyWzFdLFxyXG4gICAgICBkYXRlQXJyWzJdLFxyXG4gICAgICBkYXRlQXJyWzNdLFxyXG4gICAgXS5qb2luKFwiXCIpO1xyXG5cclxuICAgIGlmIChjaGVja1Rhc2socHJvamVjdCwgdGFza05hbWVJbnB1dC52YWx1ZSwgdGFza0RhdGVJbnB1dC52YWx1ZSkpIHtcclxuICAgICAgdmFyIG5ld3Rhc2sgPSBwcm9qZWN0LnRhc2tzKGZhbHNlLCB0YXNrTmFtZUlucHV0LnZhbHVlLCBhcnJhbmdlZERhdGUpO1xyXG4gICAgICBwcm9qZWN0LnRhc2tBcHBlbmQobmV3dGFzayk7XHJcbiAgICAgIHJlbmRlclRhc2tzKHByb2plY3QsIG5ld3Rhc2spO1xyXG4gICAgICB0YXNrTmFtZUlucHV0LnZhbHVlID0gXCJcIjtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBuZXd0YXNrLmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XHJcbiAgbmV3dGFzay5hcHBlbmRDaGlsZCh0YXNrTmFtZUlucHV0KTtcclxuICBuZXd0YXNrLmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XHJcbiAgbmV3dGFzay5hcHBlbmRDaGlsZCh0YXNrRGF0ZUlucHV0KTtcclxuICBuZXd0YXNrLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XHJcbiAgbWFpbnRhc2suYXBwZW5kQ2hpbGQobmV3dGFzayk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclRhc2tzKHByb2plY3QsIHRhc2spIHtcclxuICBjb25zdCB0YXNrSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdGFza0luZm8uY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XHJcblxyXG4gIGNvbnN0IHRhc2tDaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICB0YXNrQ2hlY2suY2xhc3NMaXN0LmFkZChcImNoZWNrYm94XCIpO1xyXG4gIHRhc2tDaGVjay50eXBlID0gXCJjaGVja2JveFwiO1xyXG4gIHRhc2tDaGVjay5jaGVja2VkID0gdGFzay5jaGVjaztcclxuICB0YXNrQ2hlY2sub25jaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICBzYXZlY2hlY2sodGFzaywgdGFza0NoZWNrLmNoZWNrZWQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB0YXNrTmFtZS5jbGFzc0xpc3QuYWRkKFwidGFzay1uYW1lXCIpO1xyXG4gIHRhc2tOYW1lLmlubmVyVGV4dCA9IHRhc2sudGFza0Rlc2NyaXB0aW9uO1xyXG5cclxuICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdGFza0RhdGUuY2xhc3NMaXN0LmFkZChcInRhc2stZGF0ZVwiKTtcclxuICB0YXNrRGF0ZS5pbm5lclRleHQgPSB0YXNrLmRhdGU7XHJcblxyXG4gIGNvbnN0IHRhc2tEZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHRhc2tEZWxldGUuY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1idXR0b25cIik7XHJcbiAgdGFza0RlbGV0ZS5pbm5lclRleHQgPSBcIlhcIjtcclxuICB0YXNrRGVsZXRlLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICB0YXNrRGVsZXRlLnBhcmVudE5vZGUucmVtb3ZlKCk7XHJcbiAgICBwcm9qZWN0LnRhc2tSZW1vdmUodGFzayk7XHJcbiAgfTtcclxuXHJcbiAgdGFza0luZm8uYXBwZW5kQ2hpbGQodGFza0NoZWNrKTtcclxuICB0YXNrSW5mby5hcHBlbmRDaGlsZCh0YXNrTmFtZSk7XHJcbiAgdGFza0luZm8uYXBwZW5kQ2hpbGQodGFza0RhdGUpO1xyXG4gIHRhc2tJbmZvLmFwcGVuZENoaWxkKHRhc2tEZWxldGUpO1xyXG4gIG1haW50YXNrLmFwcGVuZENoaWxkKHRhc2tJbmZvKTtcclxufVxyXG5cclxuZXhwb3J0IHsgcmVuZGVyUHJvamVjdCB9O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvdWkuanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=