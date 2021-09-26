"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Product.js":
/*!***********************************!*\
  !*** ./src/components/Product.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-currency-formatter */ "./node_modules/react-currency-formatter/dist/react-currency-formatter.umd.js");
/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_currency_formatter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _slices_basketSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../slices/basketSlice */ "./src/slices/basketSlice.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\noor-clone\\Amazon-Clone-ReactJS\\src\\components\\Product.js",
    _s = $RefreshSig$();






var MAX_RATING = 5;
var MIN_RITING = 1;

function Product(_ref) {
  _s();

  var _this = this;

  var id = _ref.id,
      title = _ref.title,
      price = _ref.price,
      description = _ref.description,
      category = _ref.category,
      image = _ref.image;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(Math.floor(Math.random() * (MAX_RATING - MIN_RITING + 1)) + MIN_RITING),
      rating = _useState[0];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(Math.random() < 0.5),
      hasPrime = _useState2[0]; // const [hasPrime] = useState("Prime")


  var addItemToBusket = function addItemToBusket() {
    var product = {
      id: id,
      title: title,
      price: price,
      description: description,
      category: category,
      image: image
    }; //Sending the product as an action to the REDUX store..the basket slice

    dispatch((0,_slices_basketSlice__WEBPACK_IMPORTED_MODULE_3__.addToBasket)(product));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: "relative flex flex-col m-5 bg-white p-8 z-30 rounded-lg",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
      className: "absolute top-2 right-2 p-1 rounded text-xs text-gray-600 bg-yellow-400  z-30",
      children: category
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "productImagewrapper rounded-lg mt-3",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
        src: image,
        className: "productImage rounded-lg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h4", {
      className: "font-bold my-2 line-clamp-1",
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "flex",
      children: Array(rating).fill().map(function (_, i) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("svg", {
          className: "w-4 h-4",
          fill: "#FBBF24",
          viewBox: "0 0 20 20",
          xmlns: "http://www.w3.org/2000/svg",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("path", {
            d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 116
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
      className: "text-xs text-gray-500 my-4 line-clamp-3",
      children: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "font-extrabold",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((react_currency_formatter__WEBPACK_IMPORTED_MODULE_1___default()), {
        quantity: price
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, this), hasPrime && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "flex space-x-2 items-center",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
        className: "w-12 h-12",
        src: "https://links.papareact.com/fdw",
        alt: "primeimage"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
        className: "text-sm font-semibold text-gray-500",
        children: "FREE Next-day Delivery"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
      className: "button mt-3",
      onClick: addItemToBusket,
      children: "ADD TO BUSKETS"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 9
  }, this);
}

_s(Product, "86P/+Pj8/WFTX8k1Wl9Fed+u0uw=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch];
});

_c = Product;
/* harmony default export */ __webpack_exports__["default"] = (Product);

var _c;

$RefreshReg$(_c, "Product");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWE1ZWM1N2ZiZDMyNjk1MzFiY2YuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUssVUFBVSxHQUFHLENBQW5CO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLENBQW5COztBQUVBLFNBQVNDLE9BQVQsT0FBcUU7QUFBQTs7QUFBQTs7QUFBQSxNQUFsREMsRUFBa0QsUUFBbERBLEVBQWtEO0FBQUEsTUFBOUNDLEtBQThDLFFBQTlDQSxLQUE4QztBQUFBLE1BQXZDQyxLQUF1QyxRQUF2Q0EsS0FBdUM7QUFBQSxNQUFoQ0MsV0FBZ0MsUUFBaENBLFdBQWdDO0FBQUEsTUFBbkJDLFFBQW1CLFFBQW5CQSxRQUFtQjtBQUFBLE1BQVRDLEtBQVMsUUFBVEEsS0FBUztBQUNqRSxNQUFNQyxRQUFRLEdBQUdYLHdEQUFXLEVBQTVCOztBQUVBLGtCQUFpQkYsK0NBQVEsQ0FDckJjLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsTUFBaUJaLFVBQVUsR0FBR0MsVUFBYixHQUEwQixDQUEzQyxDQUFYLElBQTREQSxVQUR2QyxDQUF6QjtBQUFBLE1BQU9ZLE1BQVA7O0FBR0EsbUJBQW1CakIsK0NBQVEsQ0FBQ2MsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLEdBQWpCLENBQTNCO0FBQUEsTUFBT0UsUUFBUCxpQkFOaUUsQ0FPakU7OztBQUVBLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUMxQixRQUFNQyxPQUFPLEdBQUc7QUFDWmIsTUFBQUEsRUFBRSxFQUFGQSxFQURZO0FBQ1JDLE1BQUFBLEtBQUssRUFBTEEsS0FEUTtBQUNEQyxNQUFBQSxLQUFLLEVBQUxBLEtBREM7QUFDTUMsTUFBQUEsV0FBVyxFQUFYQSxXQUROO0FBQ21CQyxNQUFBQSxRQUFRLEVBQVJBLFFBRG5CO0FBQzZCQyxNQUFBQSxLQUFLLEVBQUxBO0FBRDdCLEtBQWhCLENBRDBCLENBSzFCOztBQUNBQyxJQUFBQSxRQUFRLENBQUNWLGdFQUFXLENBQUNpQixPQUFELENBQVosQ0FBUjtBQUNILEdBUEQ7O0FBVUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUMseURBQWY7QUFBQSw0QkFDSTtBQUFHLGVBQVMsRUFBQyw4RUFBYjtBQUFBLGdCQUE2RlQ7QUFBN0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBSyxlQUFTLEVBQUMscUNBQWY7QUFBQSw2QkFDQTtBQUFLLFdBQUcsRUFBRUMsS0FBVjtBQUFpQixpQkFBUyxFQUFDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFLSTtBQUFJLGVBQVMsRUFBQyw2QkFBZDtBQUFBLGdCQUE2Q0o7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxKLGVBT0k7QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUFBLGdCQUNLYSxLQUFLLENBQUNKLE1BQUQsQ0FBTCxDQUFjSyxJQUFkLEdBQXFCQyxHQUFyQixDQUF5QixVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSw0QkFFdEI7QUFBSyxtQkFBUyxFQUFDLFNBQWY7QUFBeUIsY0FBSSxFQUFDLFNBQTlCO0FBQXdDLGlCQUFPLEVBQUMsV0FBaEQ7QUFBNEQsZUFBSyxFQUFDLDRCQUFsRTtBQUFBLGlDQUErRjtBQUFNLGFBQUMsRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBL0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGc0I7QUFBQSxPQUF6QjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQSixlQWNJO0FBQUcsZUFBUyxFQUFDLHlDQUFiO0FBQUEsZ0JBQXdEZjtBQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZEosZUFlSTtBQUFLLGVBQVMsRUFBQyxnQkFBZjtBQUFBLDZCQUNJLDhEQUFDLGlFQUFEO0FBQVUsZ0JBQVEsRUFBRUQ7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFmSixFQW9CS1MsUUFBUSxpQkFDTDtBQUFLLGVBQVMsRUFBQyw2QkFBZjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQTJCLFdBQUcsRUFBQyxpQ0FBL0I7QUFBaUUsV0FBRyxFQUFDO0FBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQUcsaUJBQVMsRUFBQyxxQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXJCUixlQTJCSTtBQUFRLGVBQVMsRUFBQyxhQUFsQjtBQUFnQyxhQUFPLEVBQUVDLGVBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBM0JKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBK0JIOztHQWxEUWI7VUFDWUo7OztLQURaSTtBQW9EVCwrREFBZUEsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDdXJyZW5jeSBmcm9tICdyZWFjdC1jdXJyZW5jeS1mb3JtYXR0ZXInXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBhZGRUb0Jhc2tldCB9IGZyb20gJy4uL3NsaWNlcy9iYXNrZXRTbGljZSc7XHJcblxyXG5jb25zdCBNQVhfUkFUSU5HID0gNVxyXG5jb25zdCBNSU5fUklUSU5HID0gMVxyXG5cclxuZnVuY3Rpb24gUHJvZHVjdCh7IGlkLCB0aXRsZSwgcHJpY2UsIGRlc2NyaXB0aW9uLCBjYXRlZ29yeSwgaW1hZ2UgfSkge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcblxyXG4gICAgY29uc3QgW3JhdGluZ10gPSB1c2VTdGF0ZShcclxuICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoTUFYX1JBVElORyAtIE1JTl9SSVRJTkcgKyAxKSkgKyBNSU5fUklUSU5HXHJcbiAgICApXHJcbiAgICBjb25zdCBbaGFzUHJpbWVdID0gdXNlU3RhdGUoTWF0aC5yYW5kb20oKSA8IDAuNSlcclxuICAgIC8vIGNvbnN0IFtoYXNQcmltZV0gPSB1c2VTdGF0ZShcIlByaW1lXCIpXHJcblxyXG4gICAgY29uc3QgYWRkSXRlbVRvQnVza2V0ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSB7XHJcbiAgICAgICAgICAgIGlkLCB0aXRsZSwgcHJpY2UsIGRlc2NyaXB0aW9uLCBjYXRlZ29yeSwgaW1hZ2VcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vU2VuZGluZyB0aGUgcHJvZHVjdCBhcyBhbiBhY3Rpb24gdG8gdGhlIFJFRFVYIHN0b3JlLi50aGUgYmFza2V0IHNsaWNlXHJcbiAgICAgICAgZGlzcGF0Y2goYWRkVG9CYXNrZXQocHJvZHVjdCkpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGZsZXgtY29sIG0tNSBiZy13aGl0ZSBwLTggei0zMCByb3VuZGVkLWxnXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0yIHJpZ2h0LTIgcC0xIHJvdW5kZWQgdGV4dC14cyB0ZXh0LWdyYXktNjAwIGJnLXllbGxvdy00MDAgIHotMzBcIj57Y2F0ZWdvcnl9PC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RJbWFnZXdyYXBwZXIgcm91bmRlZC1sZyBtdC0zXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZX0gY2xhc3NOYW1lPVwicHJvZHVjdEltYWdlIHJvdW5kZWQtbGdcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtYm9sZCBteS0yIGxpbmUtY2xhbXAtMVwiPnt0aXRsZX08L2g0PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICB7QXJyYXkocmF0aW5nKS5maWxsKCkubWFwKChfLCBpKSA9PiAoXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwidy00IGgtNFwiIGZpbGw9XCIjRkJCRjI0XCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTkuMDQ5IDIuOTI3Yy4zLS45MjEgMS42MDMtLjkyMSAxLjkwMiAwbDEuMDcgMy4yOTJhMSAxIDAgMDAuOTUuNjloMy40NjJjLjk2OSAwIDEuMzcxIDEuMjQuNTg4IDEuODFsLTIuOCAyLjAzNGExIDEgMCAwMC0uMzY0IDEuMTE4bDEuMDcgMy4yOTJjLjMuOTIxLS43NTUgMS42ODgtMS41NCAxLjExOGwtMi44LTIuMDM0YTEgMSAwIDAwLTEuMTc1IDBsLTIuOCAyLjAzNGMtLjc4NC41Ny0xLjgzOC0uMTk3LTEuNTM5LTEuMTE4bDEuMDctMy4yOTJhMSAxIDAgMDAtLjM2NC0xLjExOEwyLjk4IDguNzJjLS43ODMtLjU3LS4zOC0xLjgxLjU4OC0xLjgxaDMuNDYxYTEgMSAwIDAwLjk1MS0uNjlsMS4wNy0zLjI5MnpcIiAvPjwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNTAwIG15LTQgbGluZS1jbGFtcC0zXCI+e2Rlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWV4dHJhYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgPEN1cnJlbmN5IHF1YW50aXR5PXtwcmljZX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAge2hhc1ByaW1lICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTIgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3LTEyIGgtMTJcIiBzcmM9XCJodHRwczovL2xpbmtzLnBhcGFyZWFjdC5jb20vZmR3XCIgYWx0PVwicHJpbWVpbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtZ3JheS01MDBcIj5GUkVFIE5leHQtZGF5IERlbGl2ZXJ5PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbiBtdC0zXCIgb25DbGljaz17YWRkSXRlbVRvQnVza2V0fT5BREQgVE8gQlVTS0VUUzwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkN1cnJlbmN5IiwidXNlRGlzcGF0Y2giLCJhZGRUb0Jhc2tldCIsIk1BWF9SQVRJTkciLCJNSU5fUklUSU5HIiwiUHJvZHVjdCIsImlkIiwidGl0bGUiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJpbWFnZSIsImRpc3BhdGNoIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicmF0aW5nIiwiaGFzUHJpbWUiLCJhZGRJdGVtVG9CdXNrZXQiLCJwcm9kdWN0IiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImkiXSwic291cmNlUm9vdCI6IiJ9