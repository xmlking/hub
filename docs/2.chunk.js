webpackJsonp([2,12],{

/***/ 1191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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


var HomeComponent = (function () {
    function HomeComponent(document, renderer) {
        this.document = document;
        this.renderer = renderer;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.renderer.setElementClass(this.document.documentElement, 'landing-html-class', true);
        this.renderer.setElementClass(this.document.body, 'landing-body-class', true);
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.renderer.setElementClass(this.document.documentElement, 'landing-html-class', false);
        this.renderer.setElementClass(this.document.body, 'landing-body-class', false);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(1290),
        styles: [__webpack_require__(1263)]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DOCUMENT"])),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 1233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home-footer',
        template: __webpack_require__(1288),
        styles: [__webpack_require__(1261)]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 1234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_modal_modal_actions__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_login_login_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_signup_signup_component__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HeaderComponent = (function () {
    function HeaderComponent(router, store, modalActions) {
        this.router = router;
        this.store = store;
        this.modalActions = modalActions;
        this.title = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].TITLE;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.isCollapsed = true;
    };
    HeaderComponent.prototype.openLogin = function () {
        this.collapseNav();
        this.store.dispatch(this.modalActions.open({ cmpType: __WEBPACK_IMPORTED_MODULE_4__auth_login_login_component__["a" /* LoginComponent */] }));
    };
    HeaderComponent.prototype.openSignup = function () {
        this.collapseNav();
        this.store.dispatch(this.modalActions.open({ cmpType: __WEBPACK_IMPORTED_MODULE_5__auth_signup_signup_component__["a" /* SignupComponent */] }));
    };
    /* TODO : always close responsive nav after click : make it nice*/
    HeaderComponent.prototype.collapseNav = function () {
        this.isCollapsed = true;
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home-header',
        template: __webpack_require__(1289),
        styles: [__webpack_require__(1262)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["e" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["e" /* Store */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__core_modal_modal_actions__["a" /* ModalActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_modal_modal_actions__["a" /* ModalActions */]) === "function" && _c || Object])
], HeaderComponent);

var _a, _b, _c;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 1235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_header_component__ = __webpack_require__(1234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__footer_footer_component__ = __webpack_require__(1233);


/* harmony default export */ __webpack_exports__["a"] = [
    __WEBPACK_IMPORTED_MODULE_0__header_header_component__["a" /* HeaderComponent */],
    __WEBPACK_IMPORTED_MODULE_1__footer_footer_component__["a" /* FooterComponent */],
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_component__ = __webpack_require__(1191);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return homeRoutes; });


var homeRoutes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild([
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_1__home_component__["a" /* HomeComponent */], children: [
            {
                path: '',
                loadChildren: './landing/landing.module#LandingModule'
            },
            { path: 'blog',
                loadChildren: './blog/blog.module#BlogModule'
            },
            { path: 'about',
                loadChildren: './about/about.module#AboutModule'
            },
        ],
    }
]);
//# sourceMappingURL=home-routing.module.js.map

/***/ }),

/***/ 1261:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "footer {\n  padding: 25px;\n  padding-bottom: 35px;\n  background-color: #2d2d2d; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1262:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "/* Browse Happy prompt\n-------------------------------------------------- */\n.browsehappy {\n  margin: -0.5rem -1rem 0rem;\n  background: #ccc;\n  color: #000;\n  padding: 0.2rem 0; }\n\n/* NavBar\n-------------------------------------------------- */\n.navbar {\n  border-color: rgba(35, 35, 35, 0.05);\n  font-family: 'Questrial','Helvetica Neue',Arial,sans-serif;\n  background-color: #222;\n  -webkit-transition: all .4s;\n  transition: all .4s; }\n  .navbar .navbar-brand {\n    font-family: 'Questrial','Helvetica Neue',Arial,sans-serif;\n    color: #9c27b0;\n    padding: 15px;\n    -webkit-transition: padding .2s ease-in;\n    transition: padding .2s ease-in; }\n    .navbar .navbar-brand:hover, .navbar .navbar-brand:focus {\n      color: #8b27b0; }\n  .navbar .navbar-nav > a {\n    text-transform: uppercase;\n    font-size: 13px;\n    font-weight: 700;\n    color: #eee; }\n    .navbar .navbar-nav > a:focus {\n      text-transform: uppercase;\n      font-size: 13px;\n      font-weight: 700;\n      color: #eee; }\n    .navbar .navbar-nav > a:hover, .navbar .navbar-nav > a:focus:hover {\n      color: #9c27b0; }\n  .navbar .navbar-nav .nav-link.active {\n    color: #9c27b0 !important;\n    background-color: transparent; }\n    .navbar .navbar-nav .nav-link.active:focus {\n      color: #9c27b0 !important;\n      background-color: transparent; }\n\n/* responsive nav */\n@media (min-width: 768px) {\n  .navbar {\n    border-color: transparent;\n    background-color: transparent;\n    min-height: 60px; }\n    .navbar .navbar-brand {\n      color: rgba(255, 255, 255, 0.7);\n      padding: 19px; }\n      .navbar .navbar-brand:hover, .navbar .navbar-brand:focus {\n        color: #f4f4f4; }\n    .navbar .navbar-nav > a {\n      color: rgba(255, 255, 255, 0.8);\n      padding: 20px;\n      letter-spacing: 1.1px;\n      text-shadow: 1px 1px 1px rgba(60, 60, 60, 0.7); }\n      .navbar .navbar-nav > a:focus {\n        color: rgba(255, 255, 255, 0.8);\n        padding: 20px;\n        letter-spacing: 1.1px;\n        text-shadow: 1px 1px 1px rgba(60, 60, 60, 0.7); }\n      .navbar .navbar-nav > a:hover, .navbar .navbar-nav > a:focus:hover {\n        color: #fefefe; }\n    .navbar.affix {\n      border-color: rgba(34, 34, 34, 0.05);\n      background-color: #222; }\n      .navbar.affix .navbar-brand {\n        font-size: 15px;\n        color: #9c27b0;\n        padding: 20px;\n        letter-spacing: 1px; }\n        .navbar.affix .navbar-brand:hover, .navbar.affix .navbar-brand:focus {\n          color: #8b27b0; }\n      .navbar.affix .navbar-nav > a {\n        color: #ddd;\n        text-shadow: 1px 1px 1px rgba(30, 30, 30, 0.7); }\n        .navbar.affix .navbar-nav > a:focus {\n          color: #ddd;\n          text-shadow: 1px 1px 1px rgba(30, 30, 30, 0.7); }\n        .navbar.affix .navbar-nav > a:hover, .navbar.affix .navbar-nav > a:focus:hover {\n          color: #9c27b0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1263:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, ":host /deep/ {\n  /* header\n  -------------------------------------------------- */\n  /* video-background\n  -------------------------------------------------- */\n  /* form-control\n  -------------------------------------------------- */\n  /* feature\n  -------------------------------------------------- */\n  /* gallery-box\n  -------------------------------------------------- */\n  /* no-gutter\n  -------------------------------------------------- */\n  /* btn\n  -------------------------------------------------- */ }\n  :host /deep/ hr {\n    max-width: 120px;\n    border-width: 3px;\n    opacity: 0.08;\n    margin-top: 25px;\n    margin-bottom: 25px; }\n    :host /deep/ hr.light {\n      border-color: #fff;\n      opacity: 0.10; }\n    :host /deep/ hr.primary {\n      border-color: #007FFF; }\n  :host /deep/ a {\n    color: #9c27b0;\n    -webkit-transition: all .35s;\n    transition: all .35s; }\n    :host /deep/ a:hover, :host /deep/ a:focus {\n      color: #9c27c1;\n      outline: 0; }\n  :host /deep/ h1, :host /deep/ h2, :host /deep/ h3, :host /deep/ h4, :host /deep/ h5, :host /deep/ h6 {\n    font-family: 'Questrial', 'Helvetica Neue', Arial, sans-serif; }\n  :host /deep/ p {\n    font-size: 17px;\n    line-height: 1.7;\n    margin-bottom: 20px; }\n  :host /deep/ .wide-space {\n    letter-spacing: 1.6px; }\n  :host /deep/ .icon-lg {\n    font-size: 50px;\n    line-height: 18px; }\n  :host /deep/ .bg-primary {\n    background-color: #333 !important; }\n  :host /deep/ .bg-dark {\n    color: #eee;\n    background-color: #222; }\n  :host /deep/ .cursive {\n    font-family: 'Dancing Script', cursive;\n    text-transform: none; }\n  :host /deep/ .text-faded {\n    color: rgba(245, 245, 245, 0.7); }\n  :host /deep/ .text-dark {\n    color: #111; }\n  :host /deep/ .text-primary {\n    color: #9c27b0 !important; }\n  :host /deep/ .modal-content {\n    background-color: #1d1d1d; }\n  :host /deep/ section {\n    padding: 70px 0; }\n  :host /deep/ aside {\n    padding: 50px 0; }\n  :host /deep/ .no-padding {\n    padding: 0; }\n  :host /deep/ header {\n    position: relative;\n    min-height: auto;\n    text-align: center;\n    color: #fff;\n    width: 100%;\n    background-color: #c9c9c9;\n    background-image: url(" + __webpack_require__(1293) + ");\n    background-position: center;\n    background-size: cover;\n    -o-background-size: cover; }\n    :host /deep/ header .header-content {\n      position: relative;\n      width: 100%;\n      padding: 100px 15px;\n      text-align: center;\n      z-index: 2; }\n      :host /deep/ header .header-content .inner h1 {\n        margin-top: 0;\n        margin-bottom: 0; }\n      :host /deep/ header .header-content .inner p {\n        margin-bottom: 50px;\n        font-size: 16px;\n        font-weight: 300;\n        color: rgba(255, 255, 255, 0.7); }\n  @media (min-width: 768px) {\n    :host /deep/ .icon-lg {\n      font-size: 80px; }\n    :host /deep/ header {\n      min-height: 100%; }\n      :host /deep/ header .header-content {\n        position: absolute;\n        top: 50%;\n        padding: 0 50px;\n        -webkit-transform: translateY(-50%);\n                transform: translateY(-50%); }\n        :host /deep/ header .header-content .inner {\n          margin-right: auto;\n          margin-left: auto;\n          max-width: 1000px; }\n          :host /deep/ header .header-content .inner h1 {\n            font-size: 53px; }\n          :host /deep/ header .header-content .inner p {\n            margin-right: auto;\n            margin-left: auto;\n            max-width: 80%;\n            font-size: 18px; }\n    :host /deep/ section {\n      min-height: 600px; } }\n  :host /deep/ #video-background {\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    min-width: 100%;\n    min-height: 100%;\n    width: auto;\n    height: auto;\n    z-index: 1; }\n    :host /deep/ #video-background .collapsing {\n      display: none; }\n  :host /deep/ .form-control {\n    color: #eee;\n    background-color: #36333d; }\n    :host /deep/ .form-control:focus {\n      color: #222;\n      background-color: #ccc; }\n  :host /deep/ textarea {\n    resize: none; }\n  :host /deep/ .margin-top-0 {\n    margin-top: 0; }\n  :host /deep/ .feature {\n    margin: 50px auto 0;\n    max-width: 400px; }\n    :host /deep/ .feature p {\n      margin-bottom: 0; }\n  @media (min-width: 992px) {\n    :host /deep/ .feature {\n      margin: 20px auto 0; } }\n  :host /deep/ .call-to-action h2 {\n    margin: 0 auto 20px; }\n  :host /deep/ .gallery-box {\n    display: block;\n    position: relative;\n    margin: 0 auto;\n    max-width: 650px;\n    overflow: hidden; }\n    :host /deep/ .gallery-box .gallery-box-caption {\n      display: block;\n      position: absolute;\n      bottom: 0;\n      width: 100%;\n      height: 100%;\n      text-align: center;\n      color: #fff;\n      opacity: 0;\n      background: rgba(44, 44, 44, 0.8);\n      -webkit-transition: all .35s;\n      transition: all .35s; }\n      :host /deep/ .gallery-box .gallery-box-caption .gallery-box-content {\n        position: absolute;\n        top: 50%;\n        width: 100%;\n        text-align: center;\n        -webkit-transform: translateY(-50%);\n                transform: translateY(-50%); }\n    :host /deep/ .gallery-box:hover .gallery-box-caption {\n      opacity: 1; }\n    :host /deep/ .gallery-box:hover img {\n      -webkit-transform: scale(1.1);\n      transform: scale(1.1); }\n    :host /deep/ .gallery-box img {\n      -webkit-transition: all 300ms ease-in-out;\n      transition: all 300ms ease-in-out; }\n  :host /deep/ .no-gutter > [class*=col-] {\n    padding-right: 0;\n    padding-left: 0; }\n  :host /deep/ .btn {\n    border: 0;\n    border-radius: 290px;\n    font-family: 'Helvetica Neue', Arial, sans-serif; }\n    :host /deep/ .btn.btn-primary {\n      background-color: transparent;\n      border: 1px solid #f0f0f0;\n      -webkit-transition: all .35s;\n      transition: all .35s; }\n      :host /deep/ .btn.btn-primary:hover {\n        opacity: 0.7; }\n  :host /deep/ .btn-xl {\n    padding: 15px 30px;\n    font-size: 20px; }\n  :host /deep/ ::-moz-selection, :host /deep/ ::-moz-selection {\n    text-shadow: none;\n    color: #fff;\n    background: #222; }\n  :host /deep/ ::-moz-selection, :host /deep/ ::selection {\n    text-shadow: none;\n    color: #fff;\n    background: #222; }\n  :host /deep/ img::-moz-selection, :host /deep/ img::-moz-selection {\n    color: #fff;\n    background: 0 0; }\n  :host /deep/ img::selection, :host /deep/ img::-moz-selection {\n    color: #fff;\n    background: 0 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1288:
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-6 col-sm-3 column\">\n        <h4>Information</h4>\n        <ul class=\"list-unstyled\">\n          <li><a pageScroll href=\"#one\">Products</a></li>\n          <li><a pageScroll href=\"#one\">Services</a></li>\n          <li><a pageScroll href=\"#one\">Benefits</a></li>\n          <li><a pageScroll href=\"#one\">Developers</a></li>\n        </ul>\n      </div>\n      <div class=\"col-6 col-sm-3 column\">\n        <h4>About</h4>\n        <ul class=\"list-unstyled\">\n          <li><a pageScroll href=\"#one\">Contact Us</a></li>\n          <li><a pageScroll href=\"#one\">Delivery Information</a></li>\n          <li><a pageScroll href=\"#one\">Privacy Policy</a></li>\n          <li><a pageScroll href=\"#one\">Terms &amp; Conditions</a></li>\n        </ul>\n      </div>\n      <div class=\"col-12 col-sm-3 column\">\n        <h4>Stay Posted</h4>\n        <form>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" title=\"No spam, we promise!\" placeholder=\"Tell us your email\">\n          </div>\n          <div class=\"form-group\">\n            <button class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#alertModal\" type=\"button\">Subscribe for updates</button>\n          </div>\n        </form>\n      </div>\n      <div class=\"col-12 col-sm-3 text-right\">\n        <h4>Follow</h4>\n        <ul class=\"list-inline\">\n          <li class=\"list-inline-item\"><a rel=\"nofollow\" href=\"\" title=\"Twitter\"><i class=\"icon-lg ion-social-twitter-outline\"></i></a>&nbsp;</li>\n          <li class=\"list-inline-item\"><a rel=\"nofollow\" href=\"\" title=\"Facebook\"><i class=\"icon-lg ion-social-facebook-outline\"></i></a>&nbsp;</li>\n          <li class=\"list-inline-item\"><a rel=\"nofollow\" href=\"\" title=\"Dribble\"><i class=\"icon-lg ion-social-dribbble-outline\"></i></a></li>\n        </ul>\n      </div>\n    </div>\n    <br/>\n    <span class=\"float-right text-muted small\"><a href=\"https://twitter.com/xmlking\">Made by Sumo</a> ©2015-2017 Company</span>\n  </div>\n</footer>\n"

/***/ }),

/***/ 1289:
/***/ (function(module, exports) {

module.exports = "<nav id=\"topNav\" class=\"navbar fixed-top navbar-toggleable-md navbar-inverse\">\n  <!--[if lt IE 10]>\n  <p class=\"browsehappy\">You are using an <strong>outdated</strong> browser. Please <a\n    href=\"http://browsehappy.com/\">upgrade your browser</a> to improve your experience.</p>\n  <![endif]-->\n    <button (click)=\"isCollapsed = !isCollapsed\" class=\"navbar-toggler navbar-toggler-right hidden-lg-up\" type=\"button\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <a pageScroll class=\"navbar-brand\" routerLink=\"/home\" fragment=\"first\" href=\"#first\"><i class=\"ion-ios-analytics-outline\"></i> {{title}}</a>\n\n    <div class=\"collapse navbar-collapse\" [ngbCollapse]=\"isCollapsed\">\n\n      <div class=\"navbar-nav mr-auto\">\n        <!-- FIXME: https://github.com/angular/angular/issues/13205 -->\n        <!-- <a pageScroll class=\"nav-item nav-link\"  routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\" routerLink=\"/home\" fragment=\"one\" href=\"#one\">Intro</a>-->\n        <a pageScroll class=\"nav-item nav-link\" routerLink=\"/home\" fragment=\"one\" href=\"#one\" (click)=\"collapseNav()\">Intro</a>\n        <a pageScroll class=\"nav-item nav-link\" routerLink=\"/home\" fragment=\"two\" href=\"#two\" (click)=\"collapseNav()\">Highlights</a>\n        <a pageScroll class=\"nav-item nav-link\" routerLink=\"/home\" fragment=\"three\" href=\"#three\" (click)=\"collapseNav()\">Gallery</a>\n        <a pageScroll class=\"nav-item nav-link\" routerLink=\"/home\" fragment=\"four\" href=\"#four\" (click)=\"collapseNav()\">Features</a>\n        <a pageScroll class=\"nav-item nav-link\" routerLink=\"/home\" fragment=\"last\" href=\"#last\" (click)=\"collapseNav()\">Contact</a>\n      </div>\n\n      <div class=\"navbar-nav\">\n        <a class=\"nav-item nav-link\" (click)=\"openLogin()\">Sign in</a>\n        <a class=\"nav-item nav-link\" (click)=\"openSignup()\">Sign up</a>\n      </div>\n\n      <div class=\"navbar-nav\">\n        <a class=\"nav-item nav-link\" routerLinkActive=\"active\" routerLink=\"/home/blog\" (click)=\"collapseNav()\">Blog</a>\n        <a class=\"nav-item nav-link\" routerLinkActive=\"active\" routerLink=\"/home/about\" (click)=\"collapseNav()\">{{'ABOUT' | translate}}</a>\n      </div>\n\n    </div>\n</nav>\n\n\n"

/***/ }),

/***/ 1290:
/***/ (function(module, exports) {

module.exports = "<app-home-header></app-home-header>\n<router-outlet></router-outlet>\n<app-home-footer></app-home-footer>\n"

/***/ }),

/***/ 1293:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3.817451bf73804c275d4f.jpg";

/***/ }),

/***/ 932:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__(1191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components__ = __webpack_require__(1235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_routing_module__ = __webpack_require__(1236);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_4__home_routing_module__["a" /* homeRoutes */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */]
        ].concat(__WEBPACK_IMPORTED_MODULE_3__components__["a" /* default */]),
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ })

});
//# sourceMappingURL=2.chunk.js.map