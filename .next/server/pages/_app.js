/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-themes */ \"next-themes\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/providers/alchemy */ \"wagmi/providers/alchemy\");\n/* harmony import */ var wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi/providers/public */ \"wagmi/providers/public\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_public__WEBPACK_IMPORTED_MODULE_6__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__]);\n_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\nconst { chains , provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.configureChains)([\n    wagmi__WEBPACK_IMPORTED_MODULE_4__.chain.goerli\n], [\n    (0,wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_5__.alchemyProvider)({\n        apiKey: \"dpN6HjhJEDeVTCMZl0D4v-5EVca_DCtu\"\n    }),\n    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_6__.publicProvider)(), \n]);\nconst { connectors  } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.getDefaultWallets)({\n    appName: \"Bruce Wang APP\",\n    chains\n});\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.createClient)({\n    autoConnect: true,\n    connectors,\n    provider\n});\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_4__.WagmiConfig, {\n        client: wagmiClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.RainbowKitProvider, {\n            chains: chains,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_themes__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider, {\n                attribute: \"class\",\n                disableTransitionOnChange: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/brucewang/Downloads/Dev/project/personal project/Bruce-Portfolio-V3/pages/_app.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/brucewang/Downloads/Dev/project/personal project/Bruce-Portfolio-V3/pages/_app.tsx\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/brucewang/Downloads/Dev/project/personal project/Bruce-Portfolio-V3/pages/_app.tsx\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/brucewang/Downloads/Dev/project/personal project/Bruce-Portfolio-V3/pages/_app.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQTRDO0FBR2hCO0FBQ2U7QUFDb0M7QUFDTDtBQUNoQjtBQUNGO0FBRXhELE1BQU0sRUFBRVMsTUFBTSxHQUFFQyxRQUFRLEdBQUUsR0FBR04sc0RBQWUsQ0FDMUM7SUFBQ0QsK0NBQVk7Q0FBQyxFQUNkO0lBQ0VJLHdFQUFlLENBQUM7UUFBRUssTUFBTSxFQUFFQyxrQ0FBa0M7S0FBRSxDQUFDO0lBQy9ETCxzRUFBYyxFQUFFO0NBQ2pCLENBQ0Y7QUFFRCxNQUFNLEVBQUVRLFVBQVUsR0FBRSxHQUFHZix5RUFBaUIsQ0FBQztJQUN2Q2dCLE9BQU8sRUFBRSxnQkFBZ0I7SUFDekJSLE1BQU07Q0FDUCxDQUFDO0FBRUYsTUFBTVMsV0FBVyxHQUFHYixtREFBWSxDQUFDO0lBQy9CYyxXQUFXLEVBQUUsSUFBSTtJQUNqQkgsVUFBVTtJQUNWTixRQUFRO0NBQ1QsQ0FBQztBQUVGLFNBQVNVLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBWSxFQUFFO0lBQ2pELHFCQUNFLDhEQUFDaEIsOENBQVc7UUFBQ2lCLE1BQU0sRUFBRUwsV0FBVztrQkFDOUIsNEVBQUNoQixzRUFBa0I7WUFBQ08sTUFBTSxFQUFFQSxNQUFNO3NCQUNoQyw0RUFBQ1Qsc0RBQWE7Z0JBQUN3QixTQUFTLEVBQUMsT0FBTztnQkFBQ0MseUJBQXlCOzBCQUN4RCw0RUFBQ0osU0FBUztvQkFBRSxHQUFHQyxTQUFTOzs7Ozt3QkFBSTs7Ozs7b0JBQ2Q7Ozs7O2dCQUNHOzs7OztZQUNULENBQ2Q7QUFDSixDQUFDO0FBRUQsaUVBQWVGLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RzLW5leHQtdGFpbHdpbmQtdGVtcGxhdGUvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwibmV4dC10aGVtZXNcIjtcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcblxuaW1wb3J0IFwic3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgXCJAcmFpbmJvdy1tZS9yYWluYm93a2l0L3N0eWxlcy5jc3NcIjtcbmltcG9ydCB7IGdldERlZmF1bHRXYWxsZXRzLCBSYWluYm93S2l0UHJvdmlkZXIgfSBmcm9tIFwiQHJhaW5ib3ctbWUvcmFpbmJvd2tpdFwiO1xuaW1wb3J0IHsgY2hhaW4sIGNvbmZpZ3VyZUNoYWlucywgY3JlYXRlQ2xpZW50LCBXYWdtaUNvbmZpZyB9IGZyb20gXCJ3YWdtaVwiO1xuaW1wb3J0IHsgYWxjaGVteVByb3ZpZGVyIH0gZnJvbSBcIndhZ21pL3Byb3ZpZGVycy9hbGNoZW15XCI7XG5pbXBvcnQgeyBwdWJsaWNQcm92aWRlciB9IGZyb20gXCJ3YWdtaS9wcm92aWRlcnMvcHVibGljXCI7XG5cbmNvbnN0IHsgY2hhaW5zLCBwcm92aWRlciB9ID0gY29uZmlndXJlQ2hhaW5zKFxuICBbY2hhaW4uZ29lcmxpXSxcbiAgW1xuICAgIGFsY2hlbXlQcm92aWRlcih7IGFwaUtleTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQUxDSEVNWV9JRCB9KSxcbiAgICBwdWJsaWNQcm92aWRlcigpLFxuICBdXG4pO1xuXG5jb25zdCB7IGNvbm5lY3RvcnMgfSA9IGdldERlZmF1bHRXYWxsZXRzKHtcbiAgYXBwTmFtZTogXCJCcnVjZSBXYW5nIEFQUFwiLFxuICBjaGFpbnMsXG59KTtcblxuY29uc3Qgd2FnbWlDbGllbnQgPSBjcmVhdGVDbGllbnQoe1xuICBhdXRvQ29ubmVjdDogdHJ1ZSxcbiAgY29ubmVjdG9ycyxcbiAgcHJvdmlkZXIsXG59KTtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxXYWdtaUNvbmZpZyBjbGllbnQ9e3dhZ21pQ2xpZW50fT5cbiAgICAgIDxSYWluYm93S2l0UHJvdmlkZXIgY2hhaW5zPXtjaGFpbnN9PlxuICAgICAgICA8VGhlbWVQcm92aWRlciBhdHRyaWJ1dGU9XCJjbGFzc1wiIGRpc2FibGVUcmFuc2l0aW9uT25DaGFuZ2U+XG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgICA8L1JhaW5ib3dLaXRQcm92aWRlcj5cbiAgICA8L1dhZ21pQ29uZmlnPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJUaGVtZVByb3ZpZGVyIiwiZ2V0RGVmYXVsdFdhbGxldHMiLCJSYWluYm93S2l0UHJvdmlkZXIiLCJjaGFpbiIsImNvbmZpZ3VyZUNoYWlucyIsImNyZWF0ZUNsaWVudCIsIldhZ21pQ29uZmlnIiwiYWxjaGVteVByb3ZpZGVyIiwicHVibGljUHJvdmlkZXIiLCJjaGFpbnMiLCJwcm92aWRlciIsImdvZXJsaSIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BTENIRU1ZX0lEIiwiY29ubmVjdG9ycyIsImFwcE5hbWUiLCJ3YWdtaUNsaWVudCIsImF1dG9Db25uZWN0IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjbGllbnQiLCJhdHRyaWJ1dGUiLCJkaXNhYmxlVHJhbnNpdGlvbk9uQ2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next-themes":
/*!******************************!*\
  !*** external "next-themes" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-themes");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi");

/***/ }),

/***/ "wagmi/providers/alchemy":
/*!******************************************!*\
  !*** external "wagmi/providers/alchemy" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/providers/alchemy");

/***/ }),

/***/ "wagmi/providers/public":
/*!*****************************************!*\
  !*** external "wagmi/providers/public" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/providers/public");

/***/ }),

/***/ "@rainbow-me/rainbowkit":
/*!*****************************************!*\
  !*** external "@rainbow-me/rainbowkit" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@rainbow-me/rainbowkit");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();