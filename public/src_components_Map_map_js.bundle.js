"use strict";
(self["webpackChunktodos_app_db"] = self["webpackChunktodos_app_db"] || []).push([["src_components_Map_map_js"],{

/***/ "./src/components/Map/map.js":
/*!***********************************!*\
  !*** ./src/components/Map/map.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-leaflet */ "./node_modules/react-leaflet/lib/MapContainer.js");
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-leaflet */ "./node_modules/react-leaflet/lib/TileLayer.js");


var Map = function Map() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_1__.MapContainer, {
    id: "map",
    center: [48.8566, 2.3522],
    zoom: 13
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_2__.TileLayer, {
    attribution: "\xA9 <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors",
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Map);

/***/ })

}]);
//# sourceMappingURL=src_components_Map_map_js.bundle.js.map