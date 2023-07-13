"use strict";
(self["webpackChunktodos_app_db"] = self["webpackChunktodos_app_db"] || []).push([["src_components_Map_MapComp_js"],{

/***/ "./src/components/Map/MapComp.js":
/*!***************************************!*\
  !*** ./src/components/Map/MapComp.js ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var https_cdn_esm_sh_react_leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! https://cdn.esm.sh/react-leaflet */ "https://cdn.esm.sh/react-leaflet");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([https_cdn_esm_sh_react_leaflet__WEBPACK_IMPORTED_MODULE_0__]);
https_cdn_esm_sh_react_leaflet__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

var position = [51.505, -0.09];
var Map = function Map() {
  return /*#__PURE__*/React.createElement(https_cdn_esm_sh_react_leaflet__WEBPACK_IMPORTED_MODULE_0__.MapContainer, {
    center: [51.505, -0.09],
    zoom: 13,
    scrollWheelZoom: false
  }, /*#__PURE__*/React.createElement(https_cdn_esm_sh_react_leaflet__WEBPACK_IMPORTED_MODULE_0__.TileLayer, {
    attribution: "\xA9 <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors",
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  }), /*#__PURE__*/React.createElement(Marker, {
    position: [51.505, -0.09]
  }, /*#__PURE__*/React.createElement(Popup, null, "A pretty CSS3 popup. ", /*#__PURE__*/React.createElement("br", null), " Easily customizable.")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Map);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

}]);
//# sourceMappingURL=src_components_Map_MapComp_js.bundle.js.map