webpackJsonp([4,12],{

/***/ 1185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
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



var LandingComponent = (function () {
    function LandingComponent(document, renderer, titleService) {
        this.document = document;
        this.renderer = renderer;
        this.titleService = titleService;
    }
    LandingComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Landing Page');
        this.isVideoCollapsed = false;
    };
    LandingComponent.prototype.ngOnDestroy = function () {
    };
    LandingComponent.prototype.changeNav = function (inView) {
        var topNav = this.document.getElementById('topNav');
        this.renderer.setElementClass(topNav, 'affix', !inView);
    };
    return LandingComponent;
}());
LandingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-landing',
        template: __webpack_require__(1284),
        styles: [__webpack_require__(1257)]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DOCUMENT"])),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["Title"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["Title"]) === "function" && _b || Object])
], LandingComponent);

var _a, _b;
//# sourceMappingURL=landing.component.js.map

/***/ }),

/***/ 1229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_login_login_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_signup_signup_component__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_modal_modal_actions__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CarouselComponent = (function () {
    function CarouselComponent(store, modalActions) {
        this.store = store;
        this.modalActions = modalActions;
    }
    CarouselComponent.prototype.ngOnInit = function () {
    };
    CarouselComponent.prototype.openLogin = function () {
        this.store.dispatch(this.modalActions.open({ cmpType: __WEBPACK_IMPORTED_MODULE_2__auth_login_login_component__["a" /* LoginComponent */] }));
    };
    CarouselComponent.prototype.openSignup = function () {
        // this.modal.open(SignupComponent);
        this.store.dispatch(this.modalActions.open({ cmpType: __WEBPACK_IMPORTED_MODULE_3__auth_signup_signup_component__["a" /* SignupComponent */] }));
    };
    return CarouselComponent;
}());
CarouselComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-carousel',
        template: __webpack_require__(1283),
        styles: [__webpack_require__(1256)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["e" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["e" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__core_modal_modal_actions__["a" /* ModalActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__core_modal_modal_actions__["a" /* ModalActions */]) === "function" && _b || Object])
], CarouselComponent);

var _a, _b;
//# sourceMappingURL=carousel.component.js.map

/***/ }),

/***/ 1230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__carousel_carousel_component__ = __webpack_require__(1229);

/* harmony default export */ __webpack_exports__["a"] = [
    __WEBPACK_IMPORTED_MODULE_0__carousel_carousel_component__["a" /* CarouselComponent */],
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__landing_component__ = __webpack_require__(1185);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return landingRoutes; });


var landingRoutes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild([
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__landing_component__["a" /* LandingComponent */] },
]);
//# sourceMappingURL=landing-routing.module.js.map

/***/ }),

/***/ 1256:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "/* CUSTOMIZE THE CAROUSEL\n-------------------------------------------------- */\n/* Carousel base class */\n.carousel {\n  margin-bottom: 4rem; }\n  .carousel img {\n    min-width: 100%;\n    height: 32rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1257:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1283:
/***/ (function(module, exports) {

module.exports = "<ngb-carousel interval=\"5000\" keyboard=\"true\" wrap=\"true\" >\n  <template ngbSlide>\n    <img src=\"http://lorempixel.com/1900/500?r=1\" alt=\"Random first slide\">\n    <div class=\"carousel-caption d-none d-md-block text-left\">\n      <div class=\"container\">\n        <h1>First slide label</h1>\n        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n        <p><a class=\"btn btn-lg btn-primary\" (click)=\"openSignup()\">Sign up today</a></p>\n      </div>\n    </div>\n  </template>\n  <template ngbSlide>\n    <img src=\"http://lorempixel.com/1900/500?r=2\" alt=\"Random second slide\">\n    <div class=\"carousel-caption d-none d-md-block\">\n      <div class=\"container\">\n        <h1>Second slide label</h1>\n        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n        <p><a class=\"btn btn-lg btn-primary\" (click)=\"openSignup()\">Learn more</a></p>\n      </div>\n    </div>\n  </template>\n  <template ngbSlide>\n    <img src=\"http://lorempixel.com/1900/500?r=3\" alt=\"Random third slide\">\n    <div class=\"carousel-caption d-none d-md-block text-right\">\n      <div class=\"container\">\n        <h1>Third slide label</h1>\n        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n        <p><a class=\"btn btn-lg btn-primary\" (click)=\"openLogin()\">Browse gallery</a></p>\n      </div>\n    </div>\n  </template>\n</ngb-carousel>\n"

/***/ }),

/***/ 1284:
/***/ (function(module, exports) {

module.exports = "<header id=\"first\"  (onVisibilityChange)=\"changeNav($event)\" [scrollSpyViewport]=\"{cushion:-78}\">\n  <div class=\"header-content\">\n    <div class=\"inner\">\n      <h1 class=\"cursive wow flipInX\">Connection to better health</h1> <br/>\n      <h5>Continuous care : Collect , Analyze , Alert </h5>\n      <hr class=\"light\">\n      <button type=\"button\"  class=\"btn btn-primary btn-xl\" (click)=\"isVideoCollapsed = !isVideoCollapsed\" >Toggle Video</button> &nbsp; <button pageScroll href=\"#one\" type=\"button\" class=\"btn btn-primary btn-xl\">Get Started</button>\n    </div>\n  </div>\n  <video [ngbCollapse]=\"isVideoCollapsed\" autoplay=\"\" loop=\"\" class=\"fillWidth fadeIn wow collapse\" data-wow-delay=\"0.5s\" poster=\"./assets/img/landing/Traffic-blurred2.jpg\" id=\"video-background\">\n    <source src=\"./assets/videos/Traffic-blurred2.mp4\" type=\"video/mp4\">Your browser does not support the video tag. I suggest you upgrade your browser.\n  </video>\n</header>\n<section class=\"bg-primary\" id=\"one\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-6 offset-lg-3 col-md-8 offset-md-2 text-center\">\n        <h2 class=\"margin-top-0 text-primary\">Built On The Bootstrap Grid</h2>\n        <br>\n        <p class=\"text-faded\">\n          Bootstrap's responsive grid comes in 4 sizes or \"breakpoints\": tiny (xs), small(sm), medium(md) and large(lg). These 4 grid sizes enable you create responsive layouts that behave accordingly on different devices.\n        </p>\n        <button pageScroll href=\"#three\" type=\"button\" class=\"btn btn-secondary btn-xl wow fadeIn\">Learn More</button>\n      </div>\n    </div>\n  </div>\n</section>\n<section id=\"two\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 text-center\">\n        <h2 class=\"margin-top-0 text-primary\">Continuous Care</h2>\n        <hr class=\"light\">\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-4 col-md-4 text-center\">\n        <div class=\"feature\">\n          <i class=\"icon-lg ion-android-laptop wow fadeIn\" data-wow-delay=\".3s\"></i>\n          <!--<i class=\"icon-lg ion-android-laptop fadeIn\" data-wow-delay=\".3s\" [scrollSpyViewport]=\"{className: 'animated'}\"></i>-->\n          <h3>Collect</h3>\n          <p class=\"text-muted\">Your site looks good everywhere</p>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-4 text-center\">\n        <div class=\"feature\">\n          <i class=\"icon-lg ion-social-sass wow fadeInUp\" data-wow-delay=\".2s\"></i>\n          <h3>Monitor</h3>\n          <p class=\"text-muted\">Easy to theme and customize with SASS</p>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-4 text-center\">\n        <div class=\"feature\">\n          <i class=\"icon-lg ion-ios-star-outline wow fadeIn\" data-wow-delay=\".3s\"></i>\n          <h3>Alert</h3>\n          <p class=\"text-muted\">A mature, well-tested, stable codebase</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section id=\"three\" class=\"no-padding\">\n  <div class=\"container-fluid\">\n    <div class=\"row no-gutter\">\n      <div class=\"col-lg-4 col-sm-6\">\n        <a pageScroll href=\"#galleryModal\" class=\"gallery-box\" data-toggle=\"modal\" data-src=\"./assets/img/landing/deer.jpg\">\n          <img src=\"./assets/img/landing2/photo-gallery-01.jpg\" class=\"img-fluid\" alt=\"Image 1\">\n          <div class=\"gallery-box-caption\">\n            <div class=\"gallery-box-content\">\n              <div>\n                <i class=\"icon-lg ion-ios-search\"></i>\n              </div>\n            </div>\n          </div>\n        </a>\n      </div>\n      <div class=\"col-lg-4 col-sm-6\">\n        <a pageScroll href=\"#galleryModal\" class=\"gallery-box\" data-toggle=\"modal\" data-src=\"./assets/img/landing/beach.jpg\">\n          <img src=\"./assets/img/landing2/photo-gallery-02.jpg\" class=\"img-fluid\" alt=\"Image 2\">\n          <div class=\"gallery-box-caption\">\n            <div class=\"gallery-box-content\">\n              <div>\n                <i class=\"icon-lg ion-ios-search\"></i>\n              </div>\n            </div>\n          </div>\n        </a>\n      </div>\n      <div class=\"clearfix hidden-lg\"> </div>\n      <div class=\"col-lg-4 col-sm-6\">\n        <a pageScroll href=\"#galleryModal\" class=\"gallery-box\" data-toggle=\"modal\" data-src=\"./assets/img/landing/lake.jpg\">\n          <img src=\"./assets/img/landing2/photo-gallery-03.jpg\" class=\"img-fluid\" alt=\"Image 3\">\n          <div class=\"gallery-box-caption\">\n            <div class=\"gallery-box-content\">\n              <div>\n                <i class=\"icon-lg ion-ios-search\"></i>\n              </div>\n            </div>\n          </div>\n        </a>\n      </div>\n      <div class=\"col-lg-4 col-sm-6\">\n        <a pageScroll href=\"#galleryModal\" class=\"gallery-box\" data-toggle=\"modal\" data-src=\"./assets/img/landing/bike.jpg\">\n          <img src=\"./assets/img/landing2/photo-gallery-04.jpg\" class=\"img-fluid\" alt=\"Image 4\">\n          <div class=\"gallery-box-caption\">\n            <div class=\"gallery-box-content\">\n              <div>\n                <i class=\"icon-lg ion-ios-search\"></i>\n              </div>\n            </div>\n          </div>\n        </a>\n      </div>\n      <div class=\"clearfix hidden-lg\"> </div>\n      <div class=\"col-lg-4 col-sm-6\">\n        <a pageScroll href=\"#galleryModal\" class=\"gallery-box\" data-toggle=\"modal\" data-src=\"./assets/img/landing/city.jpg\">\n          <img src=\"./assets/img/landing2/photo-gallery-05.jpg\" class=\"img-fluid\" alt=\"Image 5\">\n          <div class=\"gallery-box-caption\">\n            <div class=\"gallery-box-content\">\n              <div>\n                <i class=\"icon-lg ion-ios-search\"></i>\n              </div>\n            </div>\n          </div>\n        </a>\n      </div>\n      <div class=\"col-lg-4 col-sm-6\">\n        <a pageScroll href=\"#galleryModal\" class=\"gallery-box\" data-toggle=\"modal\" data-src=\"./assets/img/landing/colors.jpg\">\n          <img src=\"./assets/img/landing2/photo-gallery-06.jpg\" class=\"img-fluid\" alt=\"Image 6\">\n          <div class=\"gallery-box-caption\">\n            <div class=\"gallery-box-content\">\n              <div>\n                <i class=\"icon-lg ion-ios-search\"></i>\n              </div>\n            </div>\n          </div>\n        </a>\n      </div>\n    </div>\n  </div>\n</section>\n<section id=\"four\">\n  <div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-xs-10 offset-xs-1 col-sm-6 offset-sm-3 col-md-4 offset-md-4\">\n      <h2 class=\"text-center text-primary\">Features</h2>\n      <hr>\n      <div class=\"media wow fadeInRight\">\n        <div class=\"media-body\">\n          <h4>Simple</h4>\n          What could be easier? Get started fast with this landing page starter theme.\n        </div>\n        <i class=\"icon-lg ion-ios-bolt-outline\"></i>\n      </div>\n      <hr class=\"light\">\n      <div class=\"media wow fadeIn\">\n        <i class=\"icon-lg ion-ios-cloud-download-outline mr-3\"></i>\n        <div class=\"media-body\">\n          <h3>Free</h3>\n          <p>Yes, please. Grab it for yourself, and make something awesome with this.</p>\n        </div>\n      </div>\n      <hr class=\"light\">\n      <div class=\"media wow fadeInRight\">\n        <div class=\"media-body\">\n          <h4>Unique</h4>\n          <p>Because you don't want your Bootstrap site, to look like a Bootstrap site.</p>\n        </div>\n        <i class=\"icon-lg ion-ios-snowy\"></i>\n      </div>\n      <hr class=\"light\">\n      <div class=\"media wow fadeIn\">\n        <i class=\"icon-lg ion-ios-heart-outline mr-3\"></i>\n        <div class=\"media-body\">\n          <h4>Popular</h4>\n          <p>There's good reason why Bootstrap is the most used frontend framework in the world.</p>\n        </div>\n      </div>\n      <hr class=\"light\">\n      <div class=\"media wow fadeInRight\">\n        <div class=\"media-body\">\n          <h4>Tested</h4>\n          <p>Bootstrap is matured and well-tested. It's a stable codebase that provides consistency.</p>\n        </div>\n        <i class=\"icon-lg ion-ios-flask-outline ml-3\"></i>\n      </div>\n    </div>\n  </div>\n  </div>\n</section>\n<aside class=\"bg-dark\">\n  <div class=\"container text-center\">\n    <div class=\"call-to-action\">\n      <h2 class=\"text-primary\">Get Started</h2>\n      <button pageScroll href=\"#first\" type=\"button\" class=\"btn btn-secondary btn-lg wow flipInX\">Free Download</button>\n    </div>\n    <br>\n    <hr class=\"light\">\n    <br>\n    <div class=\"row\">\n      <div class=\"col-lg-10 offset-lg-1\">\n          <h6 class=\"wide-space text-center text-uppercase\">Bootstrap is Built on these Standards</h6>\n          <div class=\"row\">\n            <div class=\"col-sm-3 col-6 text-center\">\n              <i class=\"icon-lg ion-social-html5-outline\" title=\"html 5\"></i>\n            </div>\n            <div class=\"col-sm-3 col-6 text-center\">\n              <i class=\"icon-lg ion-social-sass\" title=\"sass\"></i>\n            </div>\n            <div class=\"col-sm-3 col-6 text-center\">\n              <i class=\"icon-lg ion-social-javascript-outline\" title=\"javascript\"></i>\n            </div>\n            <div class=\"col-sm-3 col-6 text-center\">\n              <i class=\"icon-lg ion-social-css3-outline\" title=\"css 3\"></i>\n            </div>\n          </div>\n      </div>\n    </div>\n  </div>\n</aside>\n<section id=\"last\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-8 offset-lg-2 text-center\">\n        <h2 class=\"margin-top-0 wow fadeIn\">Get in Touch</h2>\n        <hr class=\"light\">\n        <p>We love feedback. Fill out the form below and we'll get back to you as soon as possible.</p>\n      </div>\n      <div class=\"col-lg-10 offset-lg-1 text-center\">\n        <form class=\"contact-form row\">\n          <div class=\"col-md-4\">\n            <label></label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Name\">\n          </div>\n          <div class=\"col-md-4\">\n            <label></label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Email\">\n          </div>\n          <div class=\"col-md-4\">\n            <label></label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Phone\">\n          </div>\n          <div class=\"col-md-12\">\n            <label></label>\n            <textarea class=\"form-control\" rows=\"9\" placeholder=\"Your message here..\"></textarea>\n          </div>\n          <div class=\"col-md-4 offset-md-4\">\n            <label></label>\n            <button type=\"button\" data-toggle=\"modal\" data-target=\"#alertModal\" class=\"btn btn-primary btn-block btn-lg\">Send <i class=\"ion-android-arrow-forward\"></i></button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</section>\n\n"

/***/ }),

/***/ 924:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__landing_component__ = __webpack_require__(1185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__landing_routing_module__ = __webpack_require__(1231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components__ = __webpack_require__(1230);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingModule", function() { return LandingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LandingModule = (function () {
    function LandingModule() {
    }
    return LandingModule;
}());
LandingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_3__landing_routing_module__["a" /* landingRoutes */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__landing_component__["a" /* LandingComponent */]
        ].concat(__WEBPACK_IMPORTED_MODULE_4__components__["a" /* default */])
    })
], LandingModule);

//# sourceMappingURL=landing.module.js.map

/***/ })

});
//# sourceMappingURL=4.chunk.js.map