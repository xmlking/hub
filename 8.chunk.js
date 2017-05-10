webpackJsonp([8,13],{

/***/ 1208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-page-not-found',
        template: __webpack_require__(1301),
        styles: [__webpack_require__(1273)]
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);

//# sourceMappingURL=404.component.js.map

/***/ }),

/***/ 1227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__404_component__ = __webpack_require__(1208);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pageNotFoundRoutes; });


var pageNotFoundRoutes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild([
    { path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__404_component__["a" /* PageNotFoundComponent */]
    }
]);
//# sourceMappingURL=404-routing.module.js.map

/***/ }),

/***/ 1273:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1301:
/***/ (function(module, exports) {

module.exports = "<header app-header></header>\n<br/><br/>\n<div class=\"container\">\n  <div class=\"jumbotron\">\n    <h1>404 Page Not Found!</h1>\n  </div>\n</div>\n<footer app-footer></footer>\n"

/***/ }),

/***/ 955:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__404_component__ = __webpack_require__(1208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__404_routing_module__ = __webpack_require__(1227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__(198);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundModule", function() { return PageNotFoundModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PageNotFoundModule = (function () {
    function PageNotFoundModule() {
    }
    return PageNotFoundModule;
}());
PageNotFoundModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_2__404_routing_module__["a" /* pageNotFoundRoutes */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_0__404_component__["a" /* PageNotFoundComponent */]]
    })
], PageNotFoundModule);

//# sourceMappingURL=404.module.js.map

/***/ })

});
//# sourceMappingURL=8.chunk.js.map