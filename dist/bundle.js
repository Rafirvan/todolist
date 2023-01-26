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
  if (localStorage.getItem("projectArr") == null)
    localStorage.setItem("projectArr", "[]");
  let projectArrSaved = JSON.parse(localStorage.getItem("projectArr"));
  console.log(projectArrSaved);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVcsV0FBVyxZQUFZLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxZQUFZLFdBQVcsV0FBVyxVQUFVLFdBQVcsS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLHNCQUFzQixxQkFBcUIsS0FBSyxNQUFNLFVBQVUsS0FBSyxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sOENBQU07QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaURBQVM7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpREFBUztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3lCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsTXpCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy5zY3NzP2E2MDkiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbG9naWMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL29iamVjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvdWkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vbGVpeG8udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9jYXJhbWJvbGEub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcInAge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMCU7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDEwMCU7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZmFkZU91dCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMTAwJTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMCU7XFxuICB9XFxufVxcbi5mYWRlT3V0IHtcXG4gIGFuaW1hdGlvbjogZmFkZU91dCAwLjVzO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwibGVpeG9cXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiY2FyYW1ib2xhXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuYm9keSB7XFxuICBtYXJnaW46IDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI4MHB4IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNjBweCAxZnI7XFxufVxcbmJvZHkgaW5wdXQsXFxuYm9keSB0ZXh0YXJlYSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogIzgyOGY3ZCAzcHggc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5ib2R5IGlucHV0OmFjdGl2ZSwgYm9keSBpbnB1dDpob3ZlciwgYm9keSBpbnB1dDpmb2N1cyxcXG5ib2R5IHRleHRhcmVhOmFjdGl2ZSxcXG5ib2R5IHRleHRhcmVhOmhvdmVyLFxcbmJvZHkgdGV4dGFyZWE6Zm9jdXMge1xcbiAgYm9yZGVyOiAjZTRkMWQxIDNweCBzb2xpZDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbmJvZHkgLmRlbGV0ZS1idXR0b24ge1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBjb2xvcjogb3JhbmdlcmVkO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIGZvbnQtZmFtaWx5OiBsZWl4bztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuYm9keSAuZGVsZXRlLWJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogeWVsbG93Z3JlZW47XFxufVxcblxcbiNoZWFkZXIge1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNDQ2ZTZlIDY0JSwgIzc3YThhOCAxMDAlKTtcXG4gIGNvbG9yOiAjZDllY2QwO1xcbiAgZm9udC1mYW1pbHk6IGxlaXhvO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGdyaWQtcm93OiAyLzM7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6ICM0NDZlNmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiA1MHB4IDIwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNTAlIDUwJTtcXG59XFxuI3NpZGViYXIgLmN1cnJlbnQgLm15LXByb2plY3RzLXRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiBsZWl4bztcXG4gIGNvbG9yOiAjZTRkMWQxO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgbWFyZ2luOiAwJSAwJSAyMHB4IDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4jc2lkZWJhciAuY3VycmVudCAucHJvamVjdC1jb250YWluZXIge1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2NXB4KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpbGwsIDE4JSk7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IC8qIElFIGFuZCBFZGdlICovXFxuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7IC8qIEZpcmVmb3ggKi9cXG59XFxuI3NpZGViYXIgLmN1cnJlbnQgLnByb2plY3QtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4jc2lkZWJhciAuY3VycmVudCAucHJvamVjdC1jb250YWluZXIgLnBEaXYge1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LWZhbWlseTogY2FyYW1ib2xhO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTUlIDY1JSAyMCU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbmltYXRpb246IGZhZGVJbiAwLjVzO1xcbn1cXG4jc2lkZWJhciAuY3VycmVudCAucHJvamVjdC1jb250YWluZXIgLnBEaXY6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiPiAgXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBmb250LWZhbWlseTogbGVpeG87XFxuICBmb250LXNpemU6IDMwcHg7XFxufVxcbiNzaWRlYmFyIC5jdXJyZW50IC5wcm9qZWN0LWNvbnRhaW5lciAucERpdiAucFRleHQge1xcbiAgbWF4LXdpZHRoOiAxNTZweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbiNzaWRlYmFyIC5jdXJyZW50IC5wcm9qZWN0LWNvbnRhaW5lciAucERpdiAucFRleHQ6aG92ZXIge1xcbiAgY29sb3I6ICNkZGUwMmE7XFxufVxcbiNzaWRlYmFyIC5jdXJyZW50IC5wcm9qZWN0LWNvbnRhaW5lciAucERpdiAuY3VycmVudC1wcm9qZWN0IHtcXG4gIGNvbG9yOiAjZGRlMDJhO1xcbn1cXG4jc2lkZWJhciAubmV3IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiBsZWl4bztcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNTBweCAxZnI7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG4jc2lkZWJhciAubmV3IC5uZXctZm9ybSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XFxuICBjb2xvcjogd2hpdGU7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbiNzaWRlYmFyIC5uZXcgLmRlc2NyaXB0aW9uIHtcXG4gIGhlaWdodDogODBweDtcXG59XFxuI3NpZGViYXIgLm5ldyAubmV3YnRuIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAxcHggMHB4IDBweCAjYmVlMmY5O1xcbiAgZm9udC1mYW1pbHk6IGxlaXhvO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzYzYjhlZSA1JSwgIzQ2OGNjZiAxMDAlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2M2I4ZWU7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMzg2NmEzO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nOiA2cHggMjRweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgdGV4dC1zaGFkb3c6IDBweCAxcHggMHB4ICM3Y2FjZGU7XFxufVxcbiNzaWRlYmFyIC5uZXcgLm5ld2J0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNDY4Y2NmIDUlLCAjNjNiOGVlIDEwMCUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ2OGNjZjtcXG59XFxuI3NpZGViYXIgLm5ldyAubmV3YnRuOmFjdGl2ZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDFweDtcXG59XFxuI3NpZGViYXIgLm5ldyAuY29uZmlybSB7XFxuICBib3gtc2hhZG93OiBpbnNldCAwcHggMXB4IDBweCAwcHggI2NhZWZhYjtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM3N2Q0MmEgNSUsICM1Y2I4MTEgMTAwJSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzdkNDJhO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzI2OGExNjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBsZWl4bztcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZzogNnB4IDI0cHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB0ZXh0LXNoYWRvdzogMHB4IDFweCAwcHggI2FhZGU3YztcXG59XFxuI3NpZGViYXIgLm5ldyAuY29uZmlybTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNWNiODExIDUlLCAjNzdkNDJhIDEwMCUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVjYjgxMTtcXG59XFxuI3NpZGViYXIgLm5ldyAuY29uZmlybTphY3RpdmUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAxcHg7XFxufVxcbiNzaWRlYmFyIC5uZXcgLmNhbmNlbCB7XFxuICBib3gtc2hhZG93OiBpbnNldCAwcHggMXB4IDBweCAwcHggI2Y3YzVjMDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmYzhkODMgNSUsICNlNDY4NWQgMTAwJSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmM4ZDgzO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q4MzUyNjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgZm9udC1mYW1pbHk6IGxlaXhvO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nOiA2cHggMjRweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHRleHQtc2hhZG93OiAwcHggMXB4IDBweCAjYjIzZTM1O1xcbn1cXG4jc2lkZWJhciAubmV3IC5jYW5jZWw6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2U0Njg1ZCA1JSwgI2ZjOGQ4MyAxMDAlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNDY4NWQ7XFxufVxcbiNzaWRlYmFyIC5uZXcgLmNhbmNlbDphY3RpdmUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAxcHg7XFxufVxcblxcbi5tYWluLWNvbnRhaW5lciB7XFxuICBncmlkLXJvdzogMi8zO1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIGJhY2tncm91bmQ6ICM0NDZlNmU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI21haW4ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiA3NXB4IDBweCAwcHggMHB4O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjODI4ZjdkIDY0JSwgI2Q5ZWNkMCAxMDAlKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZy1sZWZ0OiAxMDBweDtcXG4gIHBhZGRpbmctdG9wOiAyNXB4O1xcbiAgcGFkZGluZy1yaWdodDogMjVweDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZmlsbCwgNy41JSk7XFxuICByb3ctZ2FwOiAxMHB4O1xcbn1cXG4jbWFpbiAucHJvamVjdC1kZXNjIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwJSA2MCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBncmlkLXJvdzogMS8zO1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogY2FyYW1ib2xhO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuI21haW4gLnByb2plY3QtZGVzYyAubWFpbi1uYW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGNvbG9yOiAjNDQ2ZTZlO1xcbiAgZm9udC1zaXplOiAzNXB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuI21haW4gLnByb2plY3QtZGVzYyAubWFpbi1kZXNjcmlwdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG4jbWFpbiAubmV3dGFzayB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYm9yZGVyOiAjNzdhOGE4IDJweCBzb2xpZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhOWNjZDI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgY29sdW1uLWdhcDogMTBweDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAlIDIwJSAyMCUgMjAlIDE1JTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbmltYXRpb246IGZhZGVJbiAwLjVzO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC1mYW1pbHk6IGNhcmFtYm9sYTtcXG59XFxuI21haW4gLm5ld3Rhc2sgLlRhc2tCdXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0Yzc2NztcXG4gIGJvcmRlci1yYWRpdXM6IDI4cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMThhYjI5O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBmb250LWZhbWlseTogQXJpYWw7XFxuICBmb250LXNpemU6IDE3cHg7XFxuICBwYWRkaW5nOiAzcHggMTBweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHRleHQtc2hhZG93OiAwcHggMXB4IDBweCAjMmY2NjI3O1xcbn1cXG4jbWFpbiAubmV3dGFzayAuVGFza0J1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNiZjJhO1xcbn1cXG4jbWFpbiAubmV3dGFzayAuVGFza0J1dHRvbjphY3RpdmUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAxcHg7XFxufVxcbiNtYWluIC50YXNrIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwJSAzMCUgMzAlIDMwJTtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhbmltYXRpb246IGZhZGVJbiAwLjVzO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBT0E7RUFDRSxTQUFBO0FBTkY7O0FBU0E7RUFDRTtJQUNFLFdBQUE7RUFORjtFQVFBO0lBQ0UsYUFBQTtFQU5GO0FBQ0Y7QUFTQTtFQUNFO0lBQ0UsYUFBQTtFQVBGO0VBU0E7SUFDRSxXQUFBO0VBUEY7QUFDRjtBQVVBO0VBQ0UsdUJBQUE7QUFSRjs7QUFXQTtFQUNFLG9CQUFBO0VBQ0EsNENBQUE7QUFSRjtBQVdBO0VBQ0Usd0JBQUE7RUFDQSw0Q0FBQTtBQVRGO0FBWUE7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLDRCQUFBO0FBVkY7QUFZRTs7RUFFRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBVko7QUFZSTs7OztFQUdFLHlCQUFBO0VBQ0EsYUFBQTtBQVROO0FBYUU7RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFYSjtBQWFJO0VBQ0Usa0JBQUE7QUFYTjs7QUFnQkE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsNkRBQUE7RUFDQSxjQS9FUztFQWdGVCxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQWJGOztBQWdCQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBL0ZhO0VBZ0diLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtBQWJGO0FBZ0JJO0VBQ0Usa0JBQUE7RUFDQSxjQXhHTTtFQXlHTixlQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQWROO0FBaUJJO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSww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QUFtQ0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsMENBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FBakNKO0FBbUNJO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQ0FBQTtBQWpDTjtBQW1DTTtFQUNFLHlCQUFBO0FBakNSO0FBbUNNO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0FBakNSO0FBc0NFO0VBQ0UsYUFBQTtFQUNBLHNDQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQXBDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkcHJpbWFyeTogIzc3YThhODtcXHJcXG4kcHJpbWFyeS1kYXJrOiAjNDQ2ZTZlO1xcclxcbiRzZWNvbmRhcnk6ICNlNGQxZDE7XFxyXFxuJHNlY29uZGFyeS1kYXJrOiAjYjliMGIwO1xcclxcbiR0ZXJ0aWFyeTogI2Q5ZWNkMDtcXHJcXG4kdGVydGlhcnktZGFyazogIzgyOGY3ZDtcXHJcXG5cXHJcXG5wIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIG9wYWNpdHk6IDAlO1xcclxcbiAgfVxcclxcbiAgdG8ge1xcclxcbiAgICBvcGFjaXR5OiAxMDAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGZhZGVPdXQge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIG9wYWNpdHk6IDEwMCU7XFxyXFxuICB9XFxyXFxuICB0byB7XFxyXFxuICAgIG9wYWNpdHk6IDAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZmFkZU91dCB7XFxyXFxuICBhbmltYXRpb246IGZhZGVPdXQgMC41cztcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcImxlaXhvXFxcIjtcXHJcXG4gIHNyYzogdXJsKC4vbGVpeG8udHRmKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcImNhcmFtYm9sYVxcXCI7XFxyXFxuICBzcmM6IHVybCguL2NhcmFtYm9sYS5vdGYpO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG1hcmdpbjogMCU7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjgwcHggMWZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2MHB4IDFmcjtcXHJcXG5cXHJcXG4gIGlucHV0LFxcclxcbiAgdGV4dGFyZWEge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYm9yZGVyOiAkdGVydGlhcnktZGFyayAzcHggc29saWQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG5cXHJcXG4gICAgJjphY3RpdmUsXFxyXFxuICAgICY6aG92ZXIsXFxyXFxuICAgICY6Zm9jdXMge1xcclxcbiAgICAgIGJvcmRlcjogJHNlY29uZGFyeSAzcHggc29saWQ7XFxyXFxuICAgICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLmRlbGV0ZS1idXR0b24ge1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6IG9yYW5nZXJlZDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGxlaXhvO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgIGNvbG9yOiB5ZWxsb3dncmVlbjtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4jaGVhZGVyIHtcXHJcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgJHByaW1hcnktZGFyayA2NCUsICRwcmltYXJ5IDEwMCUpO1xcclxcbiAgY29sb3I6ICR0ZXJ0aWFyeTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBsZWl4bztcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyIHtcXHJcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxyXFxuICBncmlkLXJvdzogMi8zO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1kYXJrO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgcGFkZGluZzogNTBweCAyMHB4O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwJSA1MCU7XFxyXFxuXFxyXFxuICAuY3VycmVudCB7XFxyXFxuICAgIC5teS1wcm9qZWN0cy10aXRsZSB7XFxyXFxuICAgICAgZm9udC1mYW1pbHk6IGxlaXhvO1xcclxcbiAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5O1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgICBtYXJnaW46IDAlIDAlIDIwcHggMCU7XFxyXFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wcm9qZWN0LWNvbnRhaW5lciB7XFxyXFxuICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2NXB4KTtcXHJcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcXHJcXG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpbGwsIDE4JSk7XFxyXFxuICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgLyogSUUgYW5kIEVkZ2UgKi9cXHJcXG4gICAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7IC8qIEZpcmVmb3ggKi9cXHJcXG4gICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAucERpdiB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDI1cHg7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBjYXJhbWJvbGE7XFxyXFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNSUgNjUlIDIwJTtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIGFuaW1hdGlvbjogZmFkZUluIDAuNXM7XFxyXFxuXFxyXFxuICAgICAgICAmOjpiZWZvcmUge1xcclxcbiAgICAgICAgICBjb250ZW50OiBcXFwiPiAgXFxcIjtcXHJcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gICAgICAgICAgZm9udC1mYW1pbHk6IGxlaXhvO1xcclxcbiAgICAgICAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAucFRleHQge1xcclxcbiAgICAgICAgICBtYXgtd2lkdGg6IDE1NnB4O1xcclxcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG5cXHJcXG4gICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgY29sb3I6ICNkZGUwMmE7XFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5jdXJyZW50LXByb2plY3Qge1xcclxcbiAgICAgICAgICBjb2xvcjogI2RkZTAyYTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uZXcge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBsZWl4bztcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4IDFmcjtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG5cXHJcXG4gICAgLm5ldy1mb3JtIHtcXHJcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xcclxcbiAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmRlc2NyaXB0aW9uIHtcXHJcXG4gICAgICBoZWlnaHQ6IDgwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5ld2J0biB7XFxyXFxuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDFweCAwcHggMHB4ICNiZWUyZjk7XFxyXFxuICAgICAgZm9udC1mYW1pbHk6IGxlaXhvO1xcclxcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM2M2I4ZWUgNSUsICM0NjhjY2YgMTAwJSk7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzYzYjhlZTtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzM4NjZhMztcXHJcXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICBmb250LXNpemU6IDE1cHg7XFxyXFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgICAgcGFkZGluZzogNnB4IDI0cHg7XFxyXFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgICB0ZXh0LXNoYWRvdzogMHB4IDFweCAwcHggIzdjYWNkZTtcXHJcXG5cXHJcXG4gICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM0NjhjY2YgNSUsICM2M2I4ZWUgMTAwJSk7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDY4Y2NmO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAmOmFjdGl2ZSB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICB0b3A6IDFweDtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgLmNvbmZpcm0ge1xcclxcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAxcHggMHB4IDBweCAjY2FlZmFiO1xcclxcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM3N2Q0MmEgNSUsICM1Y2I4MTEgMTAwJSk7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc3ZDQyYTtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzI2OGExNjtcXHJcXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICBmb250LWZhbWlseTogbGVpeG87XFxyXFxuICAgICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICAgIHBhZGRpbmc6IDZweCAyNHB4O1xcclxcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgICB0ZXh0LXNoYWRvdzogMHB4IDFweCAwcHggI2FhZGU3YztcXHJcXG5cXHJcXG4gICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM1Y2I4MTEgNSUsICM3N2Q0MmEgMTAwJSk7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNiODExO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICAmOmFjdGl2ZSB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICB0b3A6IDFweDtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgLmNhbmNlbCB7XFxyXFxuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDFweCAwcHggMHB4ICNmN2M1YzA7XFxyXFxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZjOGQ4MyA1JSwgI2U0Njg1ZCAxMDAlKTtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmM4ZDgzO1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDgzNTI2O1xcclxcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICAgICAgZm9udC1mYW1pbHk6IGxlaXhvO1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgICBwYWRkaW5nOiA2cHggMjRweDtcXHJcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgICAgdGV4dC1zaGFkb3c6IDBweCAxcHggMHB4ICNiMjNlMzU7XFxyXFxuXFxyXFxuICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZTQ2ODVkIDUlLCAjZmM4ZDgzIDEwMCUpO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U0Njg1ZDtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgJjphY3RpdmUge1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgdG9wOiAxcHg7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRhaW5lciB7XFxyXFxuICBncmlkLXJvdzogMi8zO1xcclxcbiAgZ3JpZC1jb2x1bW46IDIvMztcXHJcXG4gIGJhY2tncm91bmQ6ICRwcmltYXJ5LWRhcms7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuI21haW4ge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA3NXB4IDBweCAwcHggMHB4O1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAkdGVydGlhcnktZGFyayA2NCUsICR0ZXJ0aWFyeSAxMDAlKTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxMDBweDtcXHJcXG4gIHBhZGRpbmctdG9wOiAyNXB4O1xcclxcbiAgcGFkZGluZy1yaWdodDogMjVweDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZmlsbCwgNy41JSk7XFxyXFxuICByb3ctZ2FwOiAxMHB4O1xcclxcblxcclxcbiAgLnByb2plY3QtZGVzYyB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDAlIDYwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBncmlkLXJvdzogMS8zO1xcclxcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LWZhbWlseTogY2FyYW1ib2xhO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcclxcbiAgICAubWFpbi1uYW1lIHtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICBjb2xvcjogJHByaW1hcnktZGFyaztcXHJcXG4gICAgICBmb250LXNpemU6IDM1cHg7XFxyXFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubWFpbi1kZXNjcmlwdGlvbiB7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXHJcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uZXd0YXNrIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgYm9yZGVyOiAkcHJpbWFyeSAycHggc29saWQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhOWNjZDI7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGNvbHVtbi1nYXA6IDEwcHg7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAlIDIwJSAyMCUgMjAlIDE1JTtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGFuaW1hdGlvbjogZmFkZUluIDAuNXM7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGNhcmFtYm9sYTtcXHJcXG5cXHJcXG4gICAgLlRhc2tCdXR0b24ge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0NGM3Njc7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogMjhweDtcXHJcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMThhYjI5O1xcclxcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICAgICAgZm9udC1mYW1pbHk6IEFyaWFsO1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gICAgICBwYWRkaW5nOiAzcHggMTBweDtcXHJcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgICAgdGV4dC1zaGFkb3c6IDBweCAxcHggMHB4ICMyZjY2Mjc7XFxyXFxuXFxyXFxuICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNiZjJhO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICAmOmFjdGl2ZSB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICB0b3A6IDFweDtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50YXNrIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMCUgMzAlIDMwJSAzMCU7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGFuaW1hdGlvbjogZmFkZUluIDAuNXM7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL29iamVjdFwiO1xyXG5pbXBvcnQgeyByZW5kZXJQcm9qZWN0IH0gZnJvbSBcIi4vdWlcIjtcclxuXHJcbmxldCBwcm9qZWN0QXJyID0gW107XHJcblxyXG5mdW5jdGlvbiBsb2FkKCkge1xyXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RBcnJcIikgPT0gbnVsbClcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdEFyclwiLCBcIltdXCIpO1xyXG4gIGxldCBwcm9qZWN0QXJyU2F2ZWQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdEFyclwiKSk7XHJcbiAgY29uc29sZS5sb2cocHJvamVjdEFyclNhdmVkKTtcclxuICBwcm9qZWN0QXJyU2F2ZWQuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB2YXIgcGFyc2VkID0gcHJvamVjdHMoZS5uYW1lLCBlLmRlc2NyaXB0aW9uKTtcclxuXHJcbiAgICBlLnRhc2tBcnIuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICB2YXIgcGFyc2V0YXNrID0gcGFyc2VkLnRhc2tzKHRhc2suY2hlY2ssIHRhc2sudGFza0Rlc2NyaXB0aW9uLCB0YXNrLmRhdGUpO1xyXG4gICAgICBwYXJzZWQudGFza0FwcGVuZChwYXJzZXRhc2spO1xyXG4gICAgfSk7XHJcbiAgICBwcm9qZWN0QXJyLnB1c2gocGFyc2VkKTtcclxuICB9KTtcclxuICBwcm9qZWN0QXJyLmZvckVhY2goKGUpID0+IHtcclxuICAgIHJlbmRlclByb2plY3QoZSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB7IHByb2plY3RBcnIgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2F2ZSgpIHtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RBcnJcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdEFycikpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja1Byb2plY3QobmFtZSwgZGVzY3JpcHRpb24pIHtcclxuICBsZXQgcHJvamVjdEFyckNsb25lID0gWy4uLnByb2plY3RBcnJdO1xyXG4gIGxldCBwcm9qZWN0TmFtZXMgPSBbXTtcclxuICBwcm9qZWN0QXJyQ2xvbmUuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgcHJvamVjdE5hbWVzLnB1c2goZS5uYW1lKTtcclxuICB9KTtcclxuXHJcbiAgaWYgKG5hbWUgPT0gXCJcIiB8fCBkZXNjcmlwdGlvbiA9PSBcIlwiKSB7XHJcbiAgICBhbGVydChcIklucHV0IHJlcXVpcmVkXCIpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0gZWxzZSBpZiAocHJvamVjdE5hbWVzLmluY2x1ZGVzKG5hbWUpKSB7XHJcbiAgICBhbGVydChcIkR1cGxpY2F0ZSBwcm9qZWN0IG5hbWUgaXMgbm90IGFsbG93ZWRcIik7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfSBlbHNlIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja1Rhc2socHJvamVjdCwgbmFtZSwgZGF0ZSkge1xyXG4gIGxldCB0YXNrQXJyQ2xvbmUgPSBbLi4ucHJvamVjdC50YXNrQXJyXTtcclxuICBjb25zb2xlLmxvZyh0YXNrQXJyQ2xvbmUpO1xyXG4gIGxldCB0YXNrTmFtZXMgPSBbXTtcclxuICB0YXNrQXJyQ2xvbmUuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgdGFza05hbWVzLnB1c2goZS50YXNrRGVzY3JpcHRpb24pO1xyXG4gIH0pO1xyXG5cclxuICBpZiAobmFtZSA9PSBcIlwiIHx8IGRhdGUgPT0gXCJcIikge1xyXG4gICAgYWxlcnQoXCJFbXB0eSBpbnB1dCBmaWVsZFwiKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9IGVsc2UgaWYgKHRhc2tOYW1lcy5pbmNsdWRlcyhuYW1lKSkge1xyXG4gICAgYWxlcnQoXCJEdXBsaWNhdGUgdGFzayBuYW1lcyBhcmUgbm90IGFsbG93ZWRcIik7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfSBlbHNlIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwdXNoVG9QckFyKG5ld1ApIHtcclxuICBwcm9qZWN0QXJyLnB1c2gobmV3UCk7XHJcbiAgc2F2ZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9kZWwocHJvamVjdCkge1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvamVjdEFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKHByb2plY3RBcnJbaV0ubmFtZSA9PT0gcHJvamVjdC5uYW1lKSB7XHJcbiAgICAgIHByb2plY3RBcnIuc3BsaWNlKGksIDEpO1xyXG4gICAgICBzYXZlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzYXZlY2hlY2sodGFzaywgY2hlY2spIHtcclxuICB0YXNrLmNoZWNrID0gY2hlY2s7XHJcbiAgc2F2ZSgpO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIHByb2plY3RBcnIsXHJcbiAgbG9hZCxcclxuICBzYXZlLFxyXG4gIGNoZWNrUHJvamVjdCxcclxuICBwdXNoVG9QckFyLFxyXG4gIHByb2RlbCxcclxuICBjaGVja1Rhc2ssXHJcbiAgc2F2ZWNoZWNrLFxyXG59O1xyXG4iLCJpbXBvcnQgeyBzYXZlIH0gZnJvbSBcIi4vbG9naWNcIjtcclxuXHJcbnZhciBwcm9qZWN0cyA9IChuYW1lLCBkZXNjcmlwdGlvbikgPT4ge1xyXG4gIHZhciB0YXNrcyA9IChjaGVjaywgdGFza0Rlc2NyaXB0aW9uLCBkYXRlKSA9PiB7XHJcbiAgICByZXR1cm4geyBjaGVjaywgdGFza0Rlc2NyaXB0aW9uLCBkYXRlIH07XHJcbiAgfTtcclxuXHJcbiAgbGV0IHRhc2tBcnIgPSBbXTtcclxuICB2YXIgdGFza0FwcGVuZCA9IChuZXd0YXNrKSA9PiB7XHJcbiAgICB0YXNrQXJyLnB1c2gobmV3dGFzayk7XHJcbiAgICBzYXZlKCk7XHJcbiAgICBjb25zb2xlLmxvZyh0YXNrQXJyKTtcclxuICB9O1xyXG5cclxuICB2YXIgdGFza1JlbW92ZSA9IChyZW1vdmVkVGFzaykgPT4ge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YXNrQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh0YXNrQXJyW2ldLnRhc2tEZXNjcmlwdGlvbiA9PT0gcmVtb3ZlZFRhc2sudGFza0Rlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgdGFza0Fyci5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgc2F2ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHsgbmFtZSwgZGVzY3JpcHRpb24sIHRhc2tBcnIsIHRhc2tzLCB0YXNrQXBwZW5kLCB0YXNrUmVtb3ZlIH07XHJcbn07XHJcblxyXG5leHBvcnQgeyBwcm9qZWN0cyB9O1xyXG4iLCJpbXBvcnQgXCIuL3N0eWxlcy5zY3NzXCI7XHJcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vb2JqZWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgbG9hZCxcclxuICBjaGVja1Byb2plY3QsXHJcbiAgcHVzaFRvUHJBcixcclxuICBwcm9kZWwsXHJcbiAgY2hlY2tUYXNrLFxyXG4gIHNhdmVjaGVjayxcclxufSBmcm9tIFwiLi9sb2dpY1wiO1xyXG5cclxuY29uc3QgbmV3YnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXdidG5cIik7XHJcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy1mb3JtXCIpO1xyXG5jb25zdCBjb25maXJtZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbmZpcm1cIik7XHJcbmNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsXCIpO1xyXG5jb25zdCBwcm9qZWN0bGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jb250YWluZXJcIik7XHJcbmNvbnN0IG1haW50YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWNvbnRhaW5lclwiKTtcclxuY29uc3QgbWFpbm5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tbmFtZVwiKTtcclxuY29uc3QgbWFpbmRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWRlc2NyaXB0aW9uXCIpO1xyXG5cclxuZm9ybS5vbnN1Ym1pdCA9IChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5kb2N1bWVudC5ib2R5Lm9ubG9hZCA9IGxvYWQoKTtcclxuXHJcbm5ld2J0bi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gIGZvcm0uc3R5bGUuYW5pbWF0aW9uID0gXCJmYWRlSW4gMC41c1wiO1xyXG4gIGZvcm0uc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG59O1xyXG5cclxuY2FuY2VsLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgZm9ybS5zdHlsZS5hbmltYXRpb24gPSBcImZhZGVPdXQgMC41c1wiO1xyXG5cclxuICBjb25zdCBjYW5jZWxEZWxheSA9IHNldFRpbWVvdXQoY2FuY2Vsb3V0LCA0NTApO1xyXG4gIGZ1bmN0aW9uIGNhbmNlbG91dCgpIHtcclxuICAgIGZvcm0uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgfVxyXG59O1xyXG5cclxuLy9jcmVhdGUgbmV3IHByb2plY3RcclxuY29uZmlybWVkLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgbmFtZXEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hbWVcIik7XHJcbiAgY29uc3QgZGVzY3EgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc2NyaXB0aW9uXCIpO1xyXG4gIGxldCBuYW1lID0gbmFtZXEudmFsdWU7XHJcbiAgbGV0IGRlc2NyaXB0aW9uID0gZGVzY3EudmFsdWU7XHJcblxyXG4gIGlmIChjaGVja1Byb2plY3QobmFtZSwgZGVzY3JpcHRpb24pKSB7XHJcbiAgICBuZXdQcm9qZWN0QXJyKG5hbWUsIGRlc2NyaXB0aW9uKTtcclxuICAgIG5hbWVxLnZhbHVlID0gXCJcIjtcclxuICAgIGRlc2NxLnZhbHVlID0gXCJcIjtcclxuICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBuZXdQcm9qZWN0QXJyKG5hbWUsIGRlc2NyaXB0aW9uKSB7XHJcbiAgY29uc3QgbmV3UCA9IHByb2plY3RzKG5hbWUsIGRlc2NyaXB0aW9uKTtcclxuICByZW5kZXJQcm9qZWN0KG5ld1ApO1xyXG4gIHB1c2hUb1ByQXIobmV3UCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclByb2plY3QocHJvamVjdCkge1xyXG4gIGNvbnN0IHBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IHBUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgY29uc3QgcERlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcFRleHQuaW5uZXJIVE1MID0gcHJvamVjdC5uYW1lO1xyXG4gIHBUZXh0Lm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAobWFpbnRhc2suZ2V0QXR0cmlidXRlKFwiY3VycmVudFwiKSA9PSBwcm9qZWN0Lm5hbWUpIHtcclxuICAgICAgLy9kbyBub3RoaW5nXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgY3VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50LXByb2plY3RcIik7XHJcbiAgICAgIGlmIChjdXIpIGN1ci5jbGFzc0xpc3QucmVtb3ZlKFwiY3VycmVudC1wcm9qZWN0XCIpO1xyXG4gICAgICBtYWludGFzay5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICBwVGV4dC5jbGFzc0xpc3QuYWRkKFwiY3VycmVudC1wcm9qZWN0XCIpO1xyXG4gICAgICBtYWludGFzay5zZXRBdHRyaWJ1dGUoXCJjdXJyZW50XCIsIHByb2plY3QubmFtZSk7XHJcbiAgICAgIHJlbmRlclByb2plY3RIZWFkZXIoXHJcbiAgICAgICAgcHJvamVjdC5uYW1lLnRvVXBwZXJDYXNlKCksXHJcbiAgICAgICAgcHJvamVjdC5kZXNjcmlwdGlvbi50b1VwcGVyQ2FzZSgpXHJcbiAgICAgICk7XHJcbiAgICAgIHJlbmRlck5ld1Rhc2socHJvamVjdCk7XHJcbiAgICAgIHByb2plY3QudGFza0Fyci5mb3JFYWNoKCh0YXNrKSA9PiByZW5kZXJUYXNrcyhwcm9qZWN0LCB0YXNrKSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcERlbC5pbm5lckhUTUwgPSBcIlhcIjtcclxuICBwRGVsLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICBpZiAoY29uZmlybShcIkFyZSB5b3Ugc3VyZSBhYm91dCBkZWxldGluZyB0aGlzIHByb2plY3Q/XCIpKSB7XHJcbiAgICAgIHByb2RlbChwcm9qZWN0KTtcclxuICAgICAgcERlbC5wYXJlbnROb2RlLnJlbW92ZSgpO1xyXG4gICAgICBpZiAobWFpbnRhc2suZ2V0QXR0cmlidXRlKFwiY3VycmVudFwiKSA9PSBwcm9qZWN0Lm5hbWUpIHtcclxuICAgICAgICBtYWlubmFtZS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIG1haW5kZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIG1haW50YXNrLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4gIHBUZXh0LmNsYXNzTGlzdC5hZGQoXCJwVGV4dFwiKTtcclxuICBwRGVsLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtYnV0dG9uXCIpO1xyXG4gIHBEaXYuY2xhc3NMaXN0LmFkZChcInBEaXZcIik7XHJcbiAgcERpdi5hcHBlbmRDaGlsZChwVGV4dCk7XHJcbiAgcERpdi5hcHBlbmRDaGlsZChwRGVsKTtcclxuICBwcm9qZWN0bGlzdC5hcHBlbmRDaGlsZChwRGl2KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdEhlYWRlcihuYW1lLCBkZXNjcmlwdGlvbikge1xyXG4gIG1haW5uYW1lLmlubmVySFRNTCA9IG5hbWU7XHJcbiAgbWFpbmRlc2NyaXB0aW9uLmlubmVySFRNTCA9IGRlc2NyaXB0aW9uO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJOZXdUYXNrKHByb2plY3QpIHtcclxuICBjb25zdCBuZXd0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBuZXd0YXNrLmNsYXNzTGlzdC5hZGQoXCJuZXd0YXNrXCIpO1xyXG5cclxuICBjb25zdCBuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBuYW1lTGFiZWwuaW5uZXJUZXh0ID0gXCJUYXNrIE5hbWU6XCI7XHJcbiAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgZGF0ZUxhYmVsLmlubmVyVGV4dCA9IFwiRHVlIERhdGU6XCI7XHJcblxyXG4gIGNvbnN0IHRhc2tOYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiSW5wdXRcIik7XHJcbiAgdGFza05hbWVJbnB1dC5jbGFzc0xpc3QuYWRkKFwidGFzay1uYW1lLWlucHV0XCIpO1xyXG5cclxuICBjb25zdCB0YXNrRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIHRhc2tEYXRlSW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xyXG4gIHRhc2tEYXRlSW5wdXQuY2xhc3NMaXN0LmFkZChcInRhc2stZGF0ZS1pbnB1dFwiKTtcclxuICB0YXNrRGF0ZUlucHV0LnZhbHVlQXNEYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZChcIlRhc2tCdXR0b25cIik7XHJcbiAgYWRkQnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xyXG4gIGFkZEJ1dHRvbi5pbm5lclRleHQgPSBcIkFkZFwiO1xyXG4gIGFkZEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgdmFyIGRhdGVBcnIgPSB0YXNrRGF0ZUlucHV0LnZhbHVlLnNwbGl0KFwiXCIpO1xyXG4gICAgdmFyIGFycmFuZ2VkRGF0ZSA9IFtcclxuICAgICAgLy9kYXRlIHJlYXJyYW5nZW1lbnRcclxuICAgICAgZGF0ZUFycls4XSxcclxuICAgICAgZGF0ZUFycls5XSxcclxuICAgICAgXCItXCIsXHJcbiAgICAgIGRhdGVBcnJbNV0sXHJcbiAgICAgIGRhdGVBcnJbNl0sXHJcbiAgICAgIFwiLVwiLFxyXG4gICAgICBkYXRlQXJyWzBdLFxyXG4gICAgICBkYXRlQXJyWzFdLFxyXG4gICAgICBkYXRlQXJyWzJdLFxyXG4gICAgICBkYXRlQXJyWzNdLFxyXG4gICAgXS5qb2luKFwiXCIpO1xyXG5cclxuICAgIGlmIChjaGVja1Rhc2socHJvamVjdCwgdGFza05hbWVJbnB1dC52YWx1ZSwgdGFza0RhdGVJbnB1dC52YWx1ZSkpIHtcclxuICAgICAgdmFyIG5ld3Rhc2sgPSBwcm9qZWN0LnRhc2tzKGZhbHNlLCB0YXNrTmFtZUlucHV0LnZhbHVlLCBhcnJhbmdlZERhdGUpO1xyXG4gICAgICBwcm9qZWN0LnRhc2tBcHBlbmQobmV3dGFzayk7XHJcbiAgICAgIHJlbmRlclRhc2tzKHByb2plY3QsIG5ld3Rhc2spO1xyXG4gICAgICB0YXNrTmFtZUlucHV0LnZhbHVlID0gXCJcIjtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBuZXd0YXNrLmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XHJcbiAgbmV3dGFzay5hcHBlbmRDaGlsZCh0YXNrTmFtZUlucHV0KTtcclxuICBuZXd0YXNrLmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XHJcbiAgbmV3dGFzay5hcHBlbmRDaGlsZCh0YXNrRGF0ZUlucHV0KTtcclxuICBuZXd0YXNrLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XHJcbiAgbWFpbnRhc2suYXBwZW5kQ2hpbGQobmV3dGFzayk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclRhc2tzKHByb2plY3QsIHRhc2spIHtcclxuICBjb25zdCB0YXNrSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdGFza0luZm8uY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XHJcblxyXG4gIGNvbnN0IHRhc2tDaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICB0YXNrQ2hlY2suY2xhc3NMaXN0LmFkZChcImNoZWNrYm94XCIpO1xyXG4gIHRhc2tDaGVjay50eXBlID0gXCJjaGVja2JveFwiO1xyXG4gIHRhc2tDaGVjay5jaGVja2VkID0gdGFzay5jaGVjaztcclxuICB0YXNrQ2hlY2sub25jaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICBzYXZlY2hlY2sodGFzaywgdGFza0NoZWNrLmNoZWNrZWQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB0YXNrTmFtZS5jbGFzc0xpc3QuYWRkKFwidGFzay1uYW1lXCIpO1xyXG4gIHRhc2tOYW1lLmlubmVyVGV4dCA9IHRhc2sudGFza0Rlc2NyaXB0aW9uO1xyXG5cclxuICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdGFza0RhdGUuY2xhc3NMaXN0LmFkZChcInRhc2stZGF0ZVwiKTtcclxuICB0YXNrRGF0ZS5pbm5lclRleHQgPSB0YXNrLmRhdGU7XHJcblxyXG4gIGNvbnN0IHRhc2tEZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHRhc2tEZWxldGUuY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1idXR0b25cIik7XHJcbiAgdGFza0RlbGV0ZS5pbm5lclRleHQgPSBcIlhcIjtcclxuICB0YXNrRGVsZXRlLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICB0YXNrRGVsZXRlLnBhcmVudE5vZGUucmVtb3ZlKCk7XHJcbiAgICBwcm9qZWN0LnRhc2tSZW1vdmUodGFzayk7XHJcbiAgfTtcclxuXHJcbiAgdGFza0luZm8uYXBwZW5kQ2hpbGQodGFza0NoZWNrKTtcclxuICB0YXNrSW5mby5hcHBlbmRDaGlsZCh0YXNrTmFtZSk7XHJcbiAgdGFza0luZm8uYXBwZW5kQ2hpbGQodGFza0RhdGUpO1xyXG4gIHRhc2tJbmZvLmFwcGVuZENoaWxkKHRhc2tEZWxldGUpO1xyXG4gIG1haW50YXNrLmFwcGVuZENoaWxkKHRhc2tJbmZvKTtcclxufVxyXG5cclxuZXhwb3J0IHsgcmVuZGVyUHJvamVjdCB9O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvdWkuanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=