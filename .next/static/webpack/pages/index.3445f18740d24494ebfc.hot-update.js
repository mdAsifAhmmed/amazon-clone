"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; },
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ "./src/components/Header.js");
/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Banner */ "./src/components/Banner.js");
/* harmony import */ var _components_ProductFeed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ProductFeed */ "./src/components/ProductFeed.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\noor-clone\\Amazon-Clone-ReactJS\\src\\pages\\index.js";





var __N_SSP = true;
function Home(_ref) {
  var products = _ref.products;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: "bg-gray-200 body",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("title", {
        children: "Amazon Clone || Md Asif Ahmed"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("link", {
        href: "https://iconape.com/wp-content/files/mk/33892/svg/amazon-icon-1.svg",
        rel: "icon",
        type: "image/icon"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("main", {
      className: "max-w-screen-2xl mx-auto",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_Banner__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_ProductFeed__WEBPACK_IMPORTED_MODULE_3__.default, {
        product: products
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
} // https://course-api.com/react-store-products
// https://fakestoreapi.com/products/
// Get : https://fakestoreapi.com/products/

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzQ0NWYxODc0MGQyNDQ5NGViZmMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFZSxTQUFTSSxJQUFULE9BQTBCO0FBQUEsTUFBWEMsUUFBVyxRQUFYQSxRQUFXO0FBQ3ZDLHNCQUNFO0FBQUssYUFBUyxFQUFDLGtCQUFmO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxZQUFJLEVBQUMscUVBQVg7QUFBaUYsV0FBRyxFQUFDLE1BQXJGO0FBQTRGLFlBQUksRUFBQztBQUFqRztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFPRSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEYsZUFTRTtBQUFNLGVBQVMsRUFBQywwQkFBaEI7QUFBQSw4QkFFRSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFLRSw4REFBQyw0REFBRDtBQUFhLGVBQU8sRUFBR0E7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBcUJELEVBRUQ7QUFDQTtBQWFBOztLQXRDd0JEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInXHJcbmltcG9ydCBCYW5uZXIgZnJvbSAnLi4vY29tcG9uZW50cy9CYW5uZXInXHJcbmltcG9ydCBQcm9kdWN0RmVlZCBmcm9tICcuLi9jb21wb25lbnRzL1Byb2R1Y3RGZWVkJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7cHJvZHVjdHN9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS0yMDAgYm9keVwiPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+QW1hem9uIENsb25lIHx8IE1kIEFzaWYgQWhtZWQ8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ljb25hcGUuY29tL3dwLWNvbnRlbnQvZmlsZXMvbWsvMzM4OTIvc3ZnL2FtYXpvbi1pY29uLTEuc3ZnXCIgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9pY29uXCI+PC9saW5rPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICB7LyogSGVhZGVyICovfVxyXG4gICAgICA8SGVhZGVyLz5cclxuXHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm1heC13LXNjcmVlbi0yeGwgbXgtYXV0b1wiPlxyXG4gICAgICAgIHsvKiBCYW5uZXIgKi99XHJcbiAgICAgICAgPEJhbm5lci8+XHJcblxyXG4gICAgICAgIHsvKiBQcm9kdWN0IEZlZWQgKi99XHJcbiAgICAgICAgPFByb2R1Y3RGZWVkIHByb2R1Y3Q9IHtwcm9kdWN0c30vPlxyXG4gICAgICA8L21haW4+XHJcbiBcclxuXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG4vLyBodHRwczovL2NvdXJzZS1hcGkuY29tL3JlYWN0LXN0b3JlLXByb2R1Y3RzXHJcbi8vIGh0dHBzOi8vZmFrZXN0b3JlYXBpLmNvbS9wcm9kdWN0cy9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KXtcclxuICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9mYWtlc3RvcmVhcGkuY29tL3Byb2R1Y3RzL1wiKVxyXG4gIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gIC8vIC50aGVuKGRhdGE9PmNvbnNvbGUubG9nKGRhdGEpKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6e1xyXG4gICAgICBwcm9kdWN0cyxcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEdldCA6IGh0dHBzOi8vZmFrZXN0b3JlYXBpLmNvbS9wcm9kdWN0cy8iXSwibmFtZXMiOlsiSGVhZCIsIkhlYWRlciIsIkJhbm5lciIsIlByb2R1Y3RGZWVkIiwiSG9tZSIsInByb2R1Y3RzIl0sInNvdXJjZVJvb3QiOiIifQ==