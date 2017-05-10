webpackJsonp([6,13],{

/***/ 1205:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bg-header.663c0a406a7d71e24dd6.jpg";

/***/ }),

/***/ 1217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var BlogComponent = (function () {
    function BlogComponent(document, renderer, titleService) {
        this.document = document;
        this.renderer = renderer;
        this.titleService = titleService;
    }
    BlogComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Blog Page');
    };
    BlogComponent.prototype.changeNav = function (inView) {
        var topNav = this.document.getElementById('topNav');
        this.renderer.setElementClass(topNav, 'affix', !inView);
    };
    return BlogComponent;
}());
BlogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-blog',
        template: __webpack_require__(1322),
        styles: [__webpack_require__(1293)]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DOCUMENT"])),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["Title"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["Title"]) === "function" && _b || Object])
], BlogComponent);

var _a, _b;
//# sourceMappingURL=blog.component.js.map

/***/ }),

/***/ 1262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blog_component__ = __webpack_require__(1217);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return blogRoutes; });


var blogRoutes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild([
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__blog_component__["a" /* BlogComponent */] },
]);
//# sourceMappingURL=blog-routing.module.js.map

/***/ }),

/***/ 1293:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, ".blog-header {\n  text-align: center;\n  background: url(" + __webpack_require__(1205) + ") no-repeat center center scroll;\n  color: #fff;\n  background-size: cover;\n  -o-background-size: cover;\n  padding: 100px 0; }\n  .blog-header .header-content h1 {\n    font-size: 53px;\n    text-transform: uppercase; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1322:
/***/ (function(module, exports) {

module.exports = "<div class=\"blog-header\" (onVisibilityChange)=\"changeNav($event)\" [scrollSpyViewport]=\"{cushion:-78}\">\n  <div class=\"header-content\">\n    <div class=\"container\">\n      <h1>Welcome to Fitness Blog!</h1>\n      <hr>\n      <p>All of the sample layouts are included with your download. Select an example layout below to preview!</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 960:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blog_routing_module__ = __webpack_require__(1262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blog_component__ = __webpack_require__(1217);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogModule", function() { return BlogModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BlogModule = (function () {
    function BlogModule() {
    }
    return BlogModule;
}());
BlogModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_2__blog_routing_module__["a" /* blogRoutes */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__blog_component__["a" /* BlogComponent */]]
    })
], BlogModule);

//# sourceMappingURL=blog.module.js.map

/***/ })

});
//# sourceMappingURL=6.chunk.js.map