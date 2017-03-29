webpackJsonp([9,12],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_modal_modal_actions__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(fb, store, modalActions, router) {
        this.fb = fb;
        this.store = store;
        this.modalActions = modalActions;
        this.router = router;
        this.submitted = false;
        // using Function
        this.isLoggedIn$ = store.select(function (s) { return s.modal.open; });
        // nested selection
        // this.isLoggedIn$ = store.select<boolean>('modal', 'open');
        // this.loginError$ = store.select<any>(s => s.modal.open);
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(5)]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(5)]],
            rememberMe: [true],
        });
        // this.isLoggedIn$.filter(isLoggedIn => !!isLoggedIn).subscribe(_ => this.store.dispatch(this.modalActions.close('login success')));
    };
    LoginComponent.prototype.dismiss = function (reason) {
        this.store.dispatch(this.modalActions.dismiss(reason));
    };
    LoginComponent.prototype.close = function (reason) {
        this.store.dispatch(this.modalActions.close(reason));
    };
    LoginComponent.prototype.submit = function (form) {
        this.submitted = true;
        if (form.invalid) {
            return;
        }
        // this.store.dispatch(this.authActions.loginUser(form.value));
        localStorage.setItem('id_token', 'ccccc');
        this.store.dispatch(this.modalActions.close('login success'));
        // TODO
        this.router.navigate(['/dashboard']);
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        // this.modalActions.cleanAlerts();
        // console.log('LoginComponent ngOnDestroy')
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(901),
        styles: [__webpack_require__(879)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["e" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["e" /* Store */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__core_modal_modal_actions__["a" /* ModalActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_modal_modal_actions__["a" /* ModalActions */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpinnerService = (function () {
    function SpinnerService() {
        this.startObservable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.endObservable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    Object.defineProperty(SpinnerService.prototype, "start", {
        get: function () {
            return this.startObservable;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpinnerService.prototype, "end", {
        get: function () {
            return this.endObservable;
        },
        enumerable: true,
        configurable: true
    });
    SpinnerService.prototype.onObservable = function (observable) {
        var _this = this;
        this.startObservable.next();
        observable.subscribe(function () { return _this.endObservable.next(); }, function () { return _this.endObservable.next(); });
    };
    return SpinnerService;
}());
SpinnerService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], SpinnerService);

//# sourceMappingURL=spinner.service.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_moment__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_page_scroll__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__swimlane_ngx_datatable__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__swimlane_ngx_charts__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_scrollspy__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_scrollspy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ng2_scrollspy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular_in_memory_web_api__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pipes__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__environments_environment__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





/* Lib */








/* App */



var forSharedModuleDemoEnvOnly = [];
if (__WEBPACK_IMPORTED_MODULE_15__environments_environment__["a" /* environment */].demo) {
    forSharedModuleDemoEnvOnly.push(__WEBPACK_IMPORTED_MODULE_12_angular_in_memory_web_api__["a" /* InMemoryWebApiModule */]);
}
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */]],
        declarations: __WEBPACK_IMPORTED_MODULE_14__components__["a" /* default */].concat(__WEBPACK_IMPORTED_MODULE_13__pipes__["a" /* default */]),
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
            __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["a" /* TranslateModule */],
            __WEBPACK_IMPORTED_MODULE_6_angular2_moment__["MomentModule"],
            __WEBPACK_IMPORTED_MODULE_7_ng2_page_scroll__["a" /* Ng2PageScrollModule */],
            __WEBPACK_IMPORTED_MODULE_11_ng2_scrollspy__["ScrollSpyModule"],
            __WEBPACK_IMPORTED_MODULE_10__swimlane_ngx_charts__["NgxChartsModule"],
            __WEBPACK_IMPORTED_MODULE_9__swimlane_ngx_datatable__["NgxDatatableModule"]
        ].concat(forSharedModuleDemoEnvOnly, __WEBPACK_IMPORTED_MODULE_14__components__["a" /* default */], __WEBPACK_IMPORTED_MODULE_13__pipes__["a" /* default */]),
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_modal_modal_actions__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = (function () {
    function SignupComponent(fb, store, modalActions, router) {
        this.fb = fb;
        this.store = store;
        this.modalActions = modalActions;
        this.router = router;
        this.submitted = false;
        // this.isLoggedIn$ = store.select(s => s.modal.open);
        // this.signUpError$ = store.select(s => s.modal.open);
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.signUpForm = this.fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
        });
        // this.isLoggedIn$.filter(isLoggedIn => !!isLoggedIn).subscribe(_ => this.store.dispatch(this.modalActions.close('login success')));
    };
    SignupComponent.prototype.dismiss = function (reason) {
        this.store.dispatch(this.modalActions.dismiss(reason));
    };
    SignupComponent.prototype.close = function (reason) {
        this.store.dispatch(this.modalActions.close(reason));
    };
    SignupComponent.prototype.submit = function (form) {
        this.submitted = true;
        if (form.invalid) {
            return;
        }
        // this.store.dispatch(this.authActions.signupUser(form.value));
        localStorage.setItem('id_token', 'ccccc');
        this.store.dispatch(this.modalActions.close('Sign Up success'));
    };
    SignupComponent.prototype.ngOnDestroy = function () {
        // this.modalActions.cleanAlerts();
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__(902),
        styles: [__webpack_require__(880)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["e" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["e" /* Store */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__core_modal_modal_actions__["a" /* ModalActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_modal_modal_actions__["a" /* ModalActions */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
], SignupComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_actions__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ModalService = (function () {
    function ModalService(store, modalActions, modal, router) {
        var _this = this;
        this.store = store;
        this.modalActions = modalActions;
        this.modal = modal;
        this.router = router;
        router.events
            .filter(function (event) { return _this._modalRef !== undefined && event instanceof __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* NavigationStart */]; })
            .subscribe(function (e) {
            _this.store.dispatch(_this.modalActions.close('Navigating Away'));
        });
    }
    Object.defineProperty(ModalService.prototype, "modalRef", {
        get: function () {
            return this._modalRef;
        },
        enumerable: true,
        configurable: true
    });
    ModalService.prototype.open = function (options) {
        var _this = this;
        this._modalRef = this.modal.open(options.cmpType, options.modalOptions);
        if (options.props) {
            for (var key in options.props) {
                if (options.props.hasOwnProperty(key)) {
                    this._modalRef.componentInstance[key] = options.props[key];
                }
            }
        }
        this._modalRef.result
            .then(function (result) { return _this.store.dispatch(_this.modalActions.closed(result)); })
            .catch(function (reason) { return _this.store.dispatch(_this.modalActions.dismissed(reason)); })
            .then(function () { return _this._modalRef = undefined; });
        this.store.dispatch(this.modalActions.opened(options.cmpType.name));
    };
    ModalService.prototype.close = function (reason) {
        if (this._modalRef) {
            this._modalRef.close(reason);
        }
    };
    ModalService.prototype.dismiss = function (reason) {
        if (this._modalRef) {
            this._modalRef.dismiss(reason);
        }
    };
    return ModalService;
}());
ModalService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["e" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["e" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__modal_actions__["a" /* ModalActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__modal_actions__["a" /* ModalActions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
], ModalService);

var _a, _b, _c, _d;
//# sourceMappingURL=modal.service.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(_http, _authHttp) {
        this._http = _http;
        this._authHttp = _authHttp;
        this.baseUrl = 'http://localhost:5000/api/auth/';
        this._headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this._jwtHelper = new __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["JwtHelper"]();
        this._headers.append('Content-Type', 'application/json');
    }
    // Auth methods
    //////////////////////
    AuthService.prototype.login = function (credentials) {
        return this._http
            .post(this.getUrl('login'), JSON.stringify(credentials), { headers: this._headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.activate = function (code) {
        return this._http
            .post(this.getUrl('activation'), JSON.stringify(code), { headers: this._headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.sendActivation = function (email) {
        return this._http
            .post(this.getUrl('sendactivation'), JSON.stringify(email), { headers: this._headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.logout = function () {
        var id = 'aaa';
        // this._userService.getCurrentUser()._id;
        this._authHttp.get(this.getUrl('logout/' + id + '/null'))
            .subscribe(function () {
            localStorage.removeItem('id_token');
            localStorage.removeItem('currentUser');
        });
    };
    AuthService.prototype.closeSession = function (sessionId) {
        var userId = 'aaa';
        // this._userService.getCurrentUser()._id;
        return this._authHttp
            .get(this.getUrl('logout/' + userId + '/' + sessionId))
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.forgot = function (email) {
        return this._http
            .post(this.getUrl('forgot'), JSON.stringify(email), { headers: this._headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.resetPassword = function (reset) {
        return this._http
            .post(this.getUrl('reset'), JSON.stringify(reset), { headers: this._headers })
            .map(function (res) { return res.json(); });
    };
    // Helpers methods
    ////////////////////////
    AuthService.prototype.isLoggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])();
    };
    AuthService.prototype.getUrl = function (path) {
        return this.baseUrl + path;
    };
    AuthService.prototype.getTokenData = function () {
        var token = localStorage.getItem('id_token');
        if (!token) {
            return;
        }
        return this._jwtHelper.decodeToken(token);
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["AuthHttp"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["AuthHttp"]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowService; });

var WindowService = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('WindowService');
//# sourceMappingURL=window.service.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalActions; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ModalActions = ModalActions_1 = (function () {
    function ModalActions() {
    }
    ModalActions.prototype.open = function (modalOptions) {
        return {
            type: ModalActions_1.OPEN,
            payload: modalOptions
        };
    };
    ModalActions.prototype.opened = function (cmpName) {
        return {
            type: ModalActions_1.OPENED,
            payload: cmpName
        };
    };
    ModalActions.prototype.close = function (reason) {
        return {
            type: ModalActions_1.CLOSE,
            payload: reason
        };
    };
    ModalActions.prototype.closed = function (reason) {
        return {
            type: ModalActions_1.CLOSED,
            payload: reason
        };
    };
    ModalActions.prototype.dismiss = function (reason) {
        return {
            type: ModalActions_1.DISMISS,
            payload: reason
        };
    };
    ModalActions.prototype.dismissed = function (reason) {
        return {
            type: ModalActions_1.DISMISSED,
            payload: reason
        };
    };
    return ModalActions;
}());
ModalActions.OPEN = '[Modal] Open';
ModalActions.OPENED = '[Modal] Opened';
ModalActions.CLOSE = '[Modal] Close';
ModalActions.CLOSED = '[Modal] Closed';
ModalActions.DISMISS = '[Modal] Dismiss';
ModalActions.DISMISSED = '[Modal] Dismissed';
ModalActions = ModalActions_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], ModalActions);

var ModalActions_1;
//# sourceMappingURL=modal.actions.js.map

/***/ }),

/***/ 492:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./404/404.module": [
		942,
		7
	],
	"./about/about.module": [
		946,
		6
	],
	"./admin/admin.module": [
		943,
		2
	],
	"./blog/blog.module": [
		947,
		5
	],
	"./dashboard/dashboard.module": [
		944,
		0
	],
	"./doctor/doctor.module": [
		945,
		1
	],
	"./home/home.module": [
		948,
		3
	],
	"./landing/landing.module": [
		949,
		4
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 492;


/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(51);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* unused harmony export NewBalance */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VitalSignsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewBalance = (function () {
    function NewBalance(sender, balance, action, lastUpdated) {
        this.sender = sender;
        this.balance = balance;
        this.action = action;
        this.lastUpdated = lastUpdated;
    }
    return NewBalance;
}());

var VitalSignsService = (function () {
    function VitalSignsService(http, _ngZone) {
        var _this = this;
        this.http = http;
        this._ngZone = _ngZone;
        this.newBalance$ = __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].create(function (observer) {
            observer.next(_this.eventToNewBalance({ sender: 'qq', balance: 44, action: 1, lastUpdated: 1485724476 }));
            return function () {
                console.log('newBalance$ Cleanup performed!');
            };
        }).share();
    }
    Object.defineProperty(VitalSignsService.prototype, "account", {
        get: function () { return this._account; },
        set: function (newValue) {
            this._account = newValue;
            localStorage.setItem('account', newValue);
        },
        enumerable: true,
        configurable: true
    });
    VitalSignsService.prototype.eventToNewBalance = function (event) {
        function toAction(action) {
            switch (action) {
                case 0:
                    return 'Steps';
                case 1:
                    return 'Visits';
                case 2:
                    return 'BMI';
            }
        }
        return new NewBalance(event.sender, event.balance, toAction(event.action), new Date(event.lastUpdated * 1000));
    };
    VitalSignsService.prototype.getAllAccounts = function () {
        return [
            { balance: 101, steps: 342, visits: 3, bmi: 23 },
            { balance: 201, steps: 4333, visits: 2, bmi: 21 },
            { balance: 243, steps: 4433, visits: 1, bmi: 22 },
            { balance: 300, steps: 6754, visits: 3, bmi: 30 },
            { balance: 321, steps: 556, visits: 2, bmi: 31 },
        ];
    };
    VitalSignsService.prototype.unlockAccount = function (password) {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].create(function (observer) {
            observer.next(true);
            observer.complete();
        });
    };
    VitalSignsService.prototype.transfer = function (toAddress, fromAddress, amount) {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].create(function (observer) {
            observer.next(true);
            observer.complete();
        });
    };
    VitalSignsService.prototype.getBalance = function (address) {
        if (address === void 0) { address = this.account; }
        return 67;
    };
    VitalSignsService.prototype.getBalanceHistory = function (address) {
        if (address === void 0) { address = this.account; }
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].create(function (observer) {
            observer.next(45);
            observer.complete();
        });
    };
    VitalSignsService.prototype.addSteps = function (steps) {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].create(function (observer) {
            observer.next(65);
            observer.complete();
        });
    };
    VitalSignsService.prototype.addGymVisits = function (visits) {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].create(function (observer) {
            observer.next(75);
            observer.complete();
        });
    };
    VitalSignsService.prototype.setBMI = function (bmi) {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].create(function (observer) {
            observer.next(86);
            observer.complete();
        });
    };
    return VitalSignsService;
}());
VitalSignsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _b || Object])
], VitalSignsService);

var _a, _b;
//# sourceMappingURL=vital-signs.service.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    demo: true,
    TITLE: 'Fitness Zone',
    API_BASE_URL: 'api',
    GRAILS_BASE_URL: 'http://localhost:8080',
    WS_BASE_URL: 'http://localhost:8090',
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccountService = (function () {
    function AccountService(http, _ngZone) {
        this.http = http;
        this._ngZone = _ngZone;
        this._account = 'sumo';
    }
    Object.defineProperty(AccountService.prototype, "account", {
        get: function () {
            return this._account;
        },
        enumerable: true,
        configurable: true
    });
    AccountService.prototype.getAllAccounts = function () {
        return ['sumo', 'demo'];
    };
    AccountService.prototype.unlockAccount = function (account, password) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].create(function (observer) {
            //
        }).do(function () {
            _this._account = account;
            localStorage.setItem('account', account);
        });
    };
    AccountService.prototype.transfer = function (toAddress, fromAddress, amount) {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].create(function (observer) {
        });
    };
    return AccountService;
}());
AccountService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _b || Object])
], AccountService);

var _a, _b;
//# sourceMappingURL=account.service.js.map

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__(927);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketIoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SocketIoService = (function () {
    function SocketIoService() {
        this.url = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].WS_BASE_URL;
        console.log('constructeur');
        this.socket = undefined;
    }
    SocketIoService.prototype.getFences = function () {
        var context = this;
        this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__(this.url);
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            context.socket.on('init', function (data) {
                observer.next(data);
            });
            return function () {
                console.log('callback error inscription');
            };
        });
        console.log(this.socket);
        return observable;
    };
    SocketIoService.prototype.closeSocket = function () {
        this.socket.disconnect();
        this.socket = undefined;
    };
    SocketIoService.prototype.signUp = function (teamName, teamColor) {
        this.teamColor = teamColor;
        var teamColorValue = teamColor.replace('#', '');
        var response = { pseudo: teamName, colorCode: teamColorValue };
        this.socket.emit('new_client', response);
    };
    SocketIoService.prototype.setTeamColorTheme = function () {
        var elements = document.getElementsByClassName('toolbar-background');
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor = this.teamColor;
        }
    };
    SocketIoService.prototype.onFenceEntered = function (fenceId) {
        this.socket.emit('zone_entered', fenceId);
    };
    SocketIoService.prototype.sendGeneralMessage = function (message) {
        this.socket.emit('general_message', message);
    };
    SocketIoService.prototype.getGeneralMessages = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('general_message', function (data) {
                observer.next(data);
            });
            return function () {
                console.log('Erreur récéption message general_message');
                _this.socket.disconnect();
            };
        });
    };
    SocketIoService.prototype.sendPrivateMessage = function (message) {
        this.socket.emit('client_to_masters_message', message);
    };
    SocketIoService.prototype.getPrivateMessages = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('masters_to_client_message', function (data) {
                observer.next(data);
            });
            return function () {
                console.log('Erreur récéption message masters_to_client_message');
                _this.socket.disconnect();
            };
        });
    };
    return SocketIoService;
}());
SocketIoService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], SocketIoService);

//# sourceMappingURL=socket-io.service.js.map

/***/ }),

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: './home/home.module#HomeModule' },
    { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
    { path: 'doctor', loadChildren: './doctor/doctor.module#DoctorModule' },
    // { path: 'admin',      loadChildren: './admin/admin.module#AdminModule', canActivate: [AuthGuard] },
    { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
    { path: '404', loadChildren: './404/404.module#PageNotFoundModule' },
    //
    // 404 should be last
    { path: '**', redirectTo: '404', pathMatch: 'full' },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        // imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
        providers: []
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toasty__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_spinner_service__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_page_scroll__ = __webpack_require__(184);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = (function () {
    function AppComponent(translate, toastyConfig, _router, spinnerService) {
        this._router = _router;
        this.spinnerService = spinnerService;
        // Assign the selected theme name to the `theme` property of the instance of ToastyConfig.
        // Possible values: default, bootstrap, material
        toastyConfig.theme = 'bootstrap';
        this.language = translate.getBrowserLang();
        // translate.addLangs(["en", "fr"]);
        translate.setDefaultLang('en'); // fallback
        var observ = translate.use(this.language.match(/en|es|fr|ru/) ? this.language : 'en');
        // // subscribe to changes
        // store.select('i18n').subscribe((state: IMultilingualState) => {
        //   // update ng2-translate which will cause translations to occur wherever the TranslatePipe is used in the view
        //   this.translate.use(state.lang);
        // });
        this.spinnerService.onObservable(observ);
        __WEBPACK_IMPORTED_MODULE_5_ng2_page_scroll__["b" /* PageScrollConfig */].defaultScrollOffset = 75;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* NavigationStart */]) {
                _this.spinnerService.start.next();
            }
            else {
                _this.spinnerService.end.next();
            }
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(900),
        styles: [__webpack_require__(878)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].Default // Everything else uses OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_toasty__["c" /* ToastyConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_toasty__["c" /* ToastyConfig */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__core_services_spinner_service__["a" /* SpinnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_services_spinner_service__["a" /* SpinnerService */]) === "function" && _d || Object])
], AppComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toasty__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_router_store__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_store_devtools__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_page_scroll__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_scrollspy__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_scrollspy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_scrollspy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing_module__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_reducers__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__core_core_module__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__auth_auth_module__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ngx_translate_core__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ngx_translate_http_loader__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular_in_memory_web_api__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__core_services_in_memory_data_service__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__environments_environment__ = __webpack_require__(51);
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













/* Feature Modules */








// AoT requires an exported function for factories
function HttpLoaderFactory(http) {
    // return new TranslateHttpLoader(http);
    return new __WEBPACK_IMPORTED_MODULE_16__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, 'assets/i18n/', '.json');
}
var forAppModuleDemoEnvOnly = [];
if (__WEBPACK_IMPORTED_MODULE_20__environments_environment__["a" /* environment */].demo) {
    forAppModuleDemoEnvOnly.push(__WEBPACK_IMPORTED_MODULE_18_angular_in_memory_web_api__["a" /* InMemoryWebApiModule */].forRoot(__WEBPACK_IMPORTED_MODULE_19__core_services_in_memory_data_service__["a" /* InMemoryDataService */], {
        passThruUnknownUrl: true,
    }));
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5_ng2_toasty__["a" /* ToastyModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_9_ng2_scrollspy__["ScrollSpyModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8_ng2_page_scroll__["a" /* Ng2PageScrollModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_15__ngx_translate_core__["a" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_15__ngx_translate_core__["b" /* TranslateLoader */],
                    useFactory: HttpLoaderFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_17__angular_http__["Http"]]
                }
            })
        ].concat(forAppModuleDemoEnvOnly, [
            __WEBPACK_IMPORTED_MODULE_14__auth_auth_module__["a" /* AuthModule */],
            __WEBPACK_IMPORTED_MODULE_13__core_core_module__["a" /* CoreModule */],
            __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["a" /* StoreModule */].provideStore(__WEBPACK_IMPORTED_MODULE_12__app_reducers__["a" /* rootReducer */]),
            __WEBPACK_IMPORTED_MODULE_6__ngrx_router_store__["a" /* RouterStoreModule */].connectRouter(),
            __WEBPACK_IMPORTED_MODULE_7__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrumentOnlyWithExtension(),
        ]),
        bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_router_store__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_modal_modal_reducer__ = __webpack_require__(568);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rootReducer; });


var rootReducer = {
    modal: __WEBPACK_IMPORTED_MODULE_1__core_modal_modal_reducer__["a" /* modalReducer */],
    router: __WEBPACK_IMPORTED_MODULE_0__ngrx_router_store__["b" /* routerReducer */]
};
//# sourceMappingURL=app.reducers.js.map

/***/ }),

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup_component__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(19);
/* unused harmony export authHttpServiceFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






function authHttpServiceFactory(http, options) {
    return new __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["AuthHttp"](new __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["AuthConfig"]({
        tokenName: 'token',
        tokenGetter: (function () { return sessionStorage.getItem('token'); }),
        globalHeaders: [{ 'Content-Type': 'application/json' }],
    }), http, options);
}
var AuthModule = (function () {
    function AuthModule() {
    }
    return AuthModule;
}());
AuthModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */]],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_2__signup_signup_component__["a" /* SignupComponent */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_2__signup_signup_component__["a" /* SignupComponent */]],
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["AuthHttp"],
                useFactory: authHttpServiceFactory,
                deps: [__WEBPACK_IMPORTED_MODULE_5__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_5__angular_http__["RequestOptions"]]
            }
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_2__signup_signup_component__["a" /* SignupComponent */]]
    })
], AuthModule);

//# sourceMappingURL=auth.module.js.map

/***/ }),

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__spinner_spinner_component__ = __webpack_require__(563);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Components; });

var Components = [
    __WEBPACK_IMPORTED_MODULE_0__spinner_spinner_component__["a" /* SpinnerComponent */],
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_spinner_service__ = __webpack_require__(129);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpinnerComponent = (function () {
    function SpinnerComponent(Spinner) {
        this.Spinner = Spinner;
        this.isVisible = true;
    }
    SpinnerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.Spinner.start
            .subscribe(function () { return _this.isVisible = true; });
        this.Spinner.end
            .subscribe(function () { return _this.isVisible = false; });
    };
    return SpinnerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('app-spinner'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], SpinnerComponent.prototype, "el", void 0);
SpinnerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-spinner',
        template: __webpack_require__(903),
        styles: [__webpack_require__(881)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_spinner_service__["a" /* SpinnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_spinner_service__["a" /* SpinnerService */]) === "function" && _b || Object])
], SpinnerComponent);

var _a, _b;
//# sourceMappingURL=spinner.component.js.map

/***/ }),

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guards__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_effects__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modal_modal_effects__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modal_modal_service__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modal_modal_actions__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_window_service__ = __webpack_require__(270);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
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











var CoreModule = (function () {
    function CoreModule(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
    return CoreModule;
}());
CoreModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_9__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_5__ngrx_effects__["a" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_6__modal_modal_effects__["a" /* ModalEffects */]),
        ],
        declarations: __WEBPACK_IMPORTED_MODULE_4__components__["a" /* Components */].slice(),
        exports: __WEBPACK_IMPORTED_MODULE_4__components__["a" /* Components */].slice(),
        providers: __WEBPACK_IMPORTED_MODULE_2__services__["a" /* Services */].concat(__WEBPACK_IMPORTED_MODULE_3__guards__["a" /* Guards */], [
            { provide: __WEBPACK_IMPORTED_MODULE_10__services_window_service__["a" /* WindowService */], useValue: window },
            __WEBPACK_IMPORTED_MODULE_8__modal_modal_actions__["a" /* ModalActions */],
            __WEBPACK_IMPORTED_MODULE_7__modal_modal_service__["a" /* ModalService */],
        ])
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"])()),
    __metadata("design:paramtypes", [CoreModule])
], CoreModule);

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_modal_actions__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_login_login_component__ = __webpack_require__(101);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthGuard = (function () {
    function AuthGuard(auth, store, modalActions) {
        this.auth = auth;
        this.store = store;
        this.modalActions = modalActions;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.auth.isLoggedIn()) {
            return true;
        }
        else {
            this.store.dispatch(this.modalActions.open({ cmpType: __WEBPACK_IMPORTED_MODULE_4__auth_login_login_component__["a" /* LoginComponent */] }));
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["e" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["e" /* Store */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__modal_modal_actions__["a" /* ModalActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__modal_modal_actions__["a" /* ModalActions */]) === "function" && _c || Object])
], AuthGuard);

var _a, _b, _c;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_guard__ = __webpack_require__(565);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Guards; });

var Guards = [
    __WEBPACK_IMPORTED_MODULE_0__auth_guard__["a" /* AuthGuard */],
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_actions__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_service__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalEffects; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ModalEffects = (function () {
    function ModalEffects(store, actions$, modalService) {
        var _this = this;
        this.store = store;
        this.actions$ = actions$;
        this.modalService = modalService;
        /**
         * This effect does not yield any actions back to the store. Set
         * `dispatch` to false to hint to @ngrx/effects that it should
         * ignore any elements of this effect stream.
         */
        this.open$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_2__modal_actions__["a" /* ModalActions */].OPEN)
            .do(function (action) { return _this.modalService.open(action.payload); });
        this.close$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_2__modal_actions__["a" /* ModalActions */].CLOSE)
            .do(function (action) { return _this.modalService.close(action.payload); });
        this.dismiss$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_2__modal_actions__["a" /* ModalActions */].DISMISS)
            .do(function (action) { return _this.modalService.dismiss(action.payload); });
    }
    return ModalEffects;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])({ dispatch: false }),
    __metadata("design:type", Object)
], ModalEffects.prototype, "open$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])({ dispatch: false }),
    __metadata("design:type", Object)
], ModalEffects.prototype, "close$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])({ dispatch: false }),
    __metadata("design:type", Object)
], ModalEffects.prototype, "dismiss$", void 0);
ModalEffects = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["e" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["e" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["c" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["c" /* Actions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__modal_service__["a" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__modal_service__["a" /* ModalService */]) === "function" && _c || Object])
], ModalEffects);

var _a, _b, _c;
//# sourceMappingURL=modal.effects.js.map

/***/ }),

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modal_actions__ = __webpack_require__(34);
/* harmony export (immutable) */ __webpack_exports__["a"] = modalReducer;

var initialState = {
    open: false
};
function modalReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__modal_actions__["a" /* ModalActions */].OPENED:
            return Object.assign({}, state, { open: true, cmpName: action.payload });
        case __WEBPACK_IMPORTED_MODULE_0__modal_actions__["a" /* ModalActions */].CLOSED:
            return Object.assign({}, state, { open: false, cmpName: null });
        case __WEBPACK_IMPORTED_MODULE_0__modal_actions__["a" /* ModalActions */].DISMISSED:
            return Object.assign({}, state, { open: false, cmpName: null });
        default:
            return state;
    }
}
//# sourceMappingURL=modal.reducer.js.map

/***/ }),

/***/ 569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InMemoryDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// /api/accounts/1
// /api/symbols/1
// https://github.com/angular/in-memory-web-api/blob/master/examples/hero-data.service.ts
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var accounts = [
            { id: 1, name: 'Windstorm' },
            { id: 2, name: 'Bombasto' },
            { id: 3, name: 'Magneta' },
            { id: 4, name: 'Tornado' },
            { id: 5, name: 'Superman' },
            { id: 6, name: 'Batman' },
            { id: 7, name: 'BatGirl' },
            { id: 8, name: 'Robin' },
            { id: 9, name: 'Flash' },
            { id: 10, name: 'Bombasto' },
            { id: 11, name: 'Magneta' },
            { id: 12, name: 'Tornado' },
            { id: 13, name: 'Windstorm' },
            { id: 14, name: 'Bombasto' },
            { id: 15, name: 'Magneta' },
            { id: 16, name: 'Tornado' },
            { id: 17, name: 'Windstorm' },
            { id: 18, name: 'Bombasto' },
            { id: 19, name: 'Magneta' },
            { id: 20, name: 'Tornado' }
        ];
        var symbols = [
            {
                'id': 1,
                'code': 'MSFT',
                'entity': 'Microsoft'
            },
            {
                'id': 2,
                'code': 'AAPL',
                'entity': 'Apple'
            },
            {
                'id': 3,
                'code': 'GOOG',
                'entity': 'Google'
            }
        ];
        return { accounts: accounts, symbols: symbols };
    };
    // intercept response from the default HTTP method handlers
    InMemoryDataService.prototype.responseInterceptor = function (response, reqInfo) {
        var method = __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"][reqInfo.req.method].toUpperCase();
        var body = JSON.stringify(response.body);
        console.log("responseInterceptor: " + method + " " + reqInfo.req.url + ": \n" + body);
        // I don't need wrapper, striping `data`
        if (response.body) {
            response.body = response.body.data;
        }
        return response;
    };
    return InMemoryDataService;
}());
InMemoryDataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], InMemoryDataService);

//# sourceMappingURL=in-memory-data.service.js.map

/***/ }),

/***/ 570:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__account_service__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vital_signs_service__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__spinner_service__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__socket_io_service__ = __webpack_require__(536);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Services; });





var Services = [
    __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */],
    __WEBPACK_IMPORTED_MODULE_0__account_service__["a" /* AccountService */],
    __WEBPACK_IMPORTED_MODULE_2__vital_signs_service__["a" /* VitalSignsService */],
    __WEBPACK_IMPORTED_MODULE_3__spinner_service__["a" /* SpinnerService */],
    __WEBPACK_IMPORTED_MODULE_4__socket_io_service__["a" /* SocketIoService */],
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 571:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackButtonComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BackButtonComponent = (function () {
    function BackButtonComponent(locationService) {
        this.location = locationService;
    }
    BackButtonComponent.prototype.goBack = function () {
        this.location.back();
    };
    return BackButtonComponent;
}());
BackButtonComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-back-button',
        template: __webpack_require__(904),
        styles: [__webpack_require__(882)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"]) === "function" && _a || Object])
], BackButtonComponent);

var _a;
//# sourceMappingURL=back-button.component.js.map

/***/ }),

/***/ 572:
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
        selector: 'footer[app-footer]',
        template: __webpack_require__(905),
        styles: [__webpack_require__(883)]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_modal_modal_actions__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_login_login_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_signup_signup_component__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__(51);
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
        this.store.dispatch(this.modalActions.open({ cmpType: __WEBPACK_IMPORTED_MODULE_4__auth_login_login_component__["a" /* LoginComponent */] }));
    };
    HeaderComponent.prototype.openSignup = function () {
        this.store.dispatch(this.modalActions.open({ cmpType: __WEBPACK_IMPORTED_MODULE_5__auth_signup_signup_component__["a" /* SignupComponent */] }));
    };
    HeaderComponent.prototype.logOut = function () {
        // this.store.dispatch(this.authActions.logout());
        localStorage.removeItem('id_token');
        this.router.navigate(['/']);
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'header[app-header]',
        template: __webpack_require__(906),
        styles: [__webpack_require__(884)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["e" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["e" /* Store */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__core_modal_modal_actions__["a" /* ModalActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_modal_modal_actions__["a" /* ModalActions */]) === "function" && _c || Object])
], HeaderComponent);

var _a, _b, _c;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_header_component__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__footer_footer_component__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__spinner_spinner_component__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__back_button_back_button_component__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layouts___ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scroll_scroll_spy_viewport_directive__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__smoothie_chart_smoothie_chart_component__ = __webpack_require__(578);







/* harmony default export */ __webpack_exports__["a"] = [
    __WEBPACK_IMPORTED_MODULE_0__header_header_component__["a" /* HeaderComponent */],
    __WEBPACK_IMPORTED_MODULE_1__footer_footer_component__["a" /* FooterComponent */],
    __WEBPACK_IMPORTED_MODULE_2__spinner_spinner_component__["a" /* SpinnerComponent */],
    __WEBPACK_IMPORTED_MODULE_3__back_button_back_button_component__["a" /* BackButtonComponent */],
    __WEBPACK_IMPORTED_MODULE_4__layouts___["a" /* MainLayout */],
    __WEBPACK_IMPORTED_MODULE_5__scroll_scroll_spy_viewport_directive__["a" /* ScrollSpyViewportDirective */],
    __WEBPACK_IMPORTED_MODULE_6__smoothie_chart_smoothie_chart_component__["a" /* SmoothieChartComponent */],
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_main_layout__ = __webpack_require__(576);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__main_main_layout__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 576:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainLayout; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainLayout = (function () {
    function MainLayout() {
    }
    MainLayout.prototype.ngOnInit = function () {
        console.log('MainLayout....');
    };
    return MainLayout;
}());
MainLayout = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-main-layout',
        template: __webpack_require__(907),
        styles: [__webpack_require__(885)]
    }),
    __metadata("design:paramtypes", [])
], MainLayout);

//# sourceMappingURL=main.layout.js.map

/***/ }),

/***/ 577:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_scrollspy__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_scrollspy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_scrollspy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_services_window_service__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollSpyViewportDirective; });
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







var ScrollSpyViewportDirective = (function () {
    function ScrollSpyViewportDirective(scrollSpyService, elementRef, _document, renderer, _window) {
        this.scrollSpyService = scrollSpyService;
        this._document = _document;
        this.renderer = renderer;
        this._window = _window;
        this.onVisibilityChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.defaultOptions = {
            className: undefined,
            debounce: 0,
            cushion: 0,
            fullyInView: false
        };
        this.element = elementRef.nativeElement;
    }
    ScrollSpyViewportDirective.prototype.ngOnInit = function () {
        if (!this.options) {
            this.options = this.defaultOptions;
        }
        else {
            this.options = Object.assign(this.defaultOptions, this.options);
        }
    };
    ScrollSpyViewportDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.sub = this.scrollSpyService.getObservable('window')
            .map(function () { return _this.isElementInViewport(); })
            .distinctUntilChanged()
            .subscribe(function (inView) {
            _this.onVisibilityChange.emit(inView);
            if (_this.options.className) {
                _this.renderer.setElementClass(_this.element, _this.options.className, inView);
            }
        });
    };
    ScrollSpyViewportDirective.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ScrollSpyViewportDirective.prototype.isElementInViewport = function () {
        var rect = this.element.getBoundingClientRect();
        var html = this._document.documentElement;
        if (this.options.cushion !== 0) {
            rect = this.addCushion(rect, this.options.cushion);
        }
        if (this.options.fullyInView === true) {
            return (rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (this._window.innerHeight || html.clientHeight) &&
                rect.right <= (this._window.innerWidth || html.clientWidth));
        }
        else {
            return (rect.bottom >= 0 &&
                rect.right >= 0 &&
                rect.top <= (this._window.innerHeight || html.clientHeight) &&
                rect.left <= (this._window.innerWidth || html.clientWidth));
        }
    };
    /**
     *  If a cushion is specified, the properties are adjusted according to the cushion amount.
     *  If the cushion is positive the rectangle will represent an area that is larger that the actual element.
     *  If the cushion is negative then the rectangle will represent an area that is smaller that the actual element.
     */
    ScrollSpyViewportDirective.prototype.addCushion = function (rect, cushion) {
        return {
            right: rect.right + cushion,
            left: rect.left - cushion,
            top: rect.top - cushion,
            bottom: rect.bottom + cushion,
            get width() { return this.right - this.left; },
            get height() { return this.bottom - this.top; },
        };
    };
    return ScrollSpyViewportDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('scrollSpyViewport'),
    __metadata("design:type", Object)
], ScrollSpyViewportDirective.prototype, "options", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], ScrollSpyViewportDirective.prototype, "onVisibilityChange", void 0);
ScrollSpyViewportDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[scrollSpyViewport]',
    }),
    __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["DOCUMENT"])),
    __param(4, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__core_services_window_service__["a" /* WindowService */])),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_scrollspy__["ScrollSpyService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_scrollspy__["ScrollSpyService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object, Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _d || Object, Object])
], ScrollSpyViewportDirective);

var _a, _b, _c, _d;
//# sourceMappingURL=scroll-spy-viewport.directive.js.map

/***/ }),

/***/ 578:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_smoothie__ = __webpack_require__(926);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_smoothie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_smoothie__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmoothieChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SmoothieChartComponent = SmoothieChartComponent_1 = (function () {
    function SmoothieChartComponent(element, ngZone) {
        this.element = element;
        this.ngZone = ngZone;
    }
    SmoothieChartComponent.prototype.ngOnInit = function () {
        if (!this.presentationOptions) {
            this.presentationOptions = SmoothieChartComponent_1.defaultPresentationOptions;
        }
        else {
            this.presentationOptions = Object.assign(SmoothieChartComponent_1.defaultPresentationOptions, this.presentationOptions);
        }
        if (!this.chartOptions) {
            this.chartOptions = SmoothieChartComponent_1.defaultPresentationOptions;
        }
        else {
            this.chartOptions = Object.assign(SmoothieChartComponent_1.defaultChartOptions, this.chartOptions);
        }
        this.chart = new __WEBPACK_IMPORTED_MODULE_1_smoothie__["SmoothieChart"](this.chartOptions);
        this.sineLine = new __WEBPACK_IMPORTED_MODULE_1_smoothie__["TimeSeries"]();
        this.chart.addTimeSeries(this.sineLine, this.presentationOptions);
        this.chart.streamTo(this.element.nativeElement.getElementsByTagName('canvas')[0]);
    };
    SmoothieChartComponent.prototype.ngOnChanges = function (data) {
        if (this.sineLine && data && data.incomingData) {
            if (data.incomingData.currentValue) {
                this.sineLine.append(new Date().getTime(), data.incomingData.currentValue);
            }
        }
    };
    return SmoothieChartComponent;
}());
SmoothieChartComponent.defaultPresentationOptions = {
    strokeStyle: 'rgb(0, 255, 0)',
    fillStyle: 'rgba(0, 255, 0, 0.4)',
    lineWidth: 3
};
SmoothieChartComponent.defaultChartOptions = {
    minValue: 50.0,
    maxValue: 150.0,
    grid: {
        strokeStyle: 'rgb(125, 0, 0)',
        fillStyle: 'rgb(60, 0, 0)',
        lineWidth: 1,
        millisPerLine: 1000,
        verticalSections: 4
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], SmoothieChartComponent.prototype, "id", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], SmoothieChartComponent.prototype, "width", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], SmoothieChartComponent.prototype, "height", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SmoothieChartComponent.prototype, "incomingData", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_smoothie__["ITimeSeriesPresentationOptions"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_smoothie__["ITimeSeriesPresentationOptions"]) === "function" && _a || Object)
], SmoothieChartComponent.prototype, "presentationOptions", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_smoothie__["IChartOptions"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_smoothie__["IChartOptions"]) === "function" && _b || Object)
], SmoothieChartComponent.prototype, "chartOptions", void 0);
SmoothieChartComponent = SmoothieChartComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-smoothie-chart',
        template: __webpack_require__(908),
        styles: [__webpack_require__(886)]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _d || Object])
], SmoothieChartComponent);

var SmoothieChartComponent_1, _a, _b, _c, _d;
//# sourceMappingURL=smoothie-chart.component.js.map

/***/ }),

/***/ 579:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpinnerComponent = (function () {
    function SpinnerComponent() {
        this.showSpinner = false;
    }
    return SpinnerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SpinnerComponent.prototype, "showSpinner", void 0);
SpinnerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'spinner',
        template: __webpack_require__(909),
        styles: [__webpack_require__(887)]
    })
], SpinnerComponent);

//# sourceMappingURL=spinner.component.js.map

/***/ }),

/***/ 580:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighLightPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HighLightPipe = (function () {
    function HighLightPipe() {
    }
    HighLightPipe.prototype.transform = function (text, _a) {
        var search = _a[0];
        return search ? text.replace(new RegExp(search, 'i'), "<span class=\"highlight\">" + search + "</span>") : text;
    };
    return HighLightPipe;
}());
HighLightPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'highlight' })
], HighLightPipe);

//# sourceMappingURL=highlight.pipe.js.map

/***/ }),

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__highlight_pipe__ = __webpack_require__(580);

/* harmony default export */ __webpack_exports__["a"] = [
    __WEBPACK_IMPORTED_MODULE_0__highlight_pipe__["a" /* HighLightPipe */],
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 878:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 879:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 880:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 881:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, ".spinner {\n  position: fixed;\n  z-index: 999;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0; }\n  .spinner.local-spinner {\n    display: block !important;\n    /* overwriting jQuery inline styling */\n    position: absolute;\n    opacity: 1 !important;\n    /* overwriting jQuery inline styling */ }\n  .spinner .shader {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background-color: #fff;\n    opacity: 1; }\n  .spinner .spinner-wrapper {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translateX(-50%) translateY(-50%);\n            transform: translateX(-50%) translateY(-50%); }\n    .spinner .spinner-wrapper .spinner-icon {\n      margin: 100px auto;\n      width: 40px;\n      height: 60px;\n      text-align: center;\n      font-size: 10px; }\n      .spinner .spinner-wrapper .spinner-icon > div {\n        background-color: #4c9ce0;\n        height: 100%;\n        width: 5px;\n        margin-left: 2px;\n        display: inline-block;\n        -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;\n        animation: sk-stretchdelay 1.2s infinite ease-in-out; }\n      .spinner .spinner-wrapper .spinner-icon .rect2 {\n        -webkit-animation-delay: -1.1s;\n        animation-delay: -1.1s; }\n      .spinner .spinner-wrapper .spinner-icon .rect3 {\n        -webkit-animation-delay: -1.0s;\n        animation-delay: -1.0s; }\n      .spinner .spinner-wrapper .spinner-icon .rect4 {\n        -webkit-animation-delay: -0.9s;\n        animation-delay: -0.9s; }\n      .spinner .spinner-wrapper .spinner-icon .rect5 {\n        -webkit-animation-delay: -0.8s;\n        animation-delay: -0.8s; }\n\n@-webkit-keyframes sk-stretchdelay {\n  0%, 40%, 100% {\n    -webkit-transform: scaleY(0.4); }\n  20% {\n    -webkit-transform: scaleY(1); } }\n\n@keyframes sk-stretchdelay {\n  0%, 40%, 100% {\n    transform: scaleY(0.4);\n    -webkit-transform: scaleY(0.4); }\n  20% {\n    transform: scaleY(1);\n    -webkit-transform: scaleY(1); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 882:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 883:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, ".copyright-text {\n  margin-top: 10px;\n  margin-left: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 884:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "/* Browse Happy prompt\n-------------------------------------------------- */\n.browsehappy {\n  margin: -0.5rem -1rem 0rem;\n  background: #ccc;\n  color: #000;\n  padding: 0.2rem 0; }\n\n/* NavBar\n-------------------------------------------------- */\n.orange-icon img {\n  height: 27px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 885:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 886:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 887:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "#fountainTextG {\n  width: 234px;\n  margin: auto; }\n\n.fountainTextG {\n  color: black;\n  font-family: Arial;\n  font-size: 24px;\n  text-decoration: none;\n  font-weight: normal;\n  font-style: normal;\n  float: left;\n  animation-name: bounce_fountainTextG;\n  -o-animation-name: bounce_fountainTextG;\n  -ms-animation-name: bounce_fountainTextG;\n  -webkit-animation-name: bounce_fountainTextG;\n  -moz-animation-name: bounce_fountainTextG;\n  animation-duration: 2.09s;\n  -o-animation-duration: 2.09s;\n  -ms-animation-duration: 2.09s;\n  -webkit-animation-duration: 2.09s;\n  -moz-animation-duration: 2.09s;\n  animation-iteration-count: infinite;\n  -o-animation-iteration-count: infinite;\n  -ms-animation-iteration-count: infinite;\n  -webkit-animation-iteration-count: infinite;\n  -moz-animation-iteration-count: infinite;\n  animation-direction: normal;\n  -o-animation-direction: normal;\n  -ms-animation-direction: normal;\n  -webkit-animation-direction: normal;\n  -moz-animation-direction: normal;\n  transform: scale(0.5);\n  -o-transform: scale(0.5);\n  -ms-transform: scale(0.5);\n  -webkit-transform: scale(0.5);\n  -moz-transform: scale(0.5); }\n\n#fountainTextG_1 {\n  animation-delay: 0.75s;\n  -o-animation-delay: 0.75s;\n  -ms-animation-delay: 0.75s;\n  -webkit-animation-delay: 0.75s;\n  -moz-animation-delay: 0.75s; }\n\n#fountainTextG_2 {\n  animation-delay: 0.9s;\n  -o-animation-delay: 0.9s;\n  -ms-animation-delay: 0.9s;\n  -webkit-animation-delay: 0.9s;\n  -moz-animation-delay: 0.9s; }\n\n#fountainTextG_3 {\n  animation-delay: 1.05s;\n  -o-animation-delay: 1.05s;\n  -ms-animation-delay: 1.05s;\n  -webkit-animation-delay: 1.05s;\n  -moz-animation-delay: 1.05s; }\n\n#fountainTextG_4 {\n  animation-delay: 1.2s;\n  -o-animation-delay: 1.2s;\n  -ms-animation-delay: 1.2s;\n  -webkit-animation-delay: 1.2s;\n  -moz-animation-delay: 1.2s; }\n\n#fountainTextG_5 {\n  animation-delay: 1.35s;\n  -o-animation-delay: 1.35s;\n  -ms-animation-delay: 1.35s;\n  -webkit-animation-delay: 1.35s;\n  -moz-animation-delay: 1.35s; }\n\n#fountainTextG_6 {\n  animation-delay: 1.5s;\n  -o-animation-delay: 1.5s;\n  -ms-animation-delay: 1.5s;\n  -webkit-animation-delay: 1.5s;\n  -moz-animation-delay: 1.5s; }\n\n#fountainTextG_7 {\n  animation-delay: 1.64s;\n  -o-animation-delay: 1.64s;\n  -ms-animation-delay: 1.64s;\n  -webkit-animation-delay: 1.64s;\n  -moz-animation-delay: 1.64s; }\n\n@keyframes bounce_fountainTextG {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    color: black; }\n  100% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n    color: white; } }\n\n@-webkit-keyframes bounce_fountainTextG {\n  0% {\n    -webkit-transform: scale(1);\n    color: black; }\n  100% {\n    -webkit-transform: scale(0.5);\n    color: white; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 894:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 360,
	"./af.js": 360,
	"./ar": 366,
	"./ar-dz": 361,
	"./ar-dz.js": 361,
	"./ar-ly": 362,
	"./ar-ly.js": 362,
	"./ar-ma": 363,
	"./ar-ma.js": 363,
	"./ar-sa": 364,
	"./ar-sa.js": 364,
	"./ar-tn": 365,
	"./ar-tn.js": 365,
	"./ar.js": 366,
	"./az": 367,
	"./az.js": 367,
	"./be": 368,
	"./be.js": 368,
	"./bg": 369,
	"./bg.js": 369,
	"./bn": 370,
	"./bn.js": 370,
	"./bo": 371,
	"./bo.js": 371,
	"./br": 372,
	"./br.js": 372,
	"./bs": 373,
	"./bs.js": 373,
	"./ca": 374,
	"./ca.js": 374,
	"./cs": 375,
	"./cs.js": 375,
	"./cv": 376,
	"./cv.js": 376,
	"./cy": 377,
	"./cy.js": 377,
	"./da": 378,
	"./da.js": 378,
	"./de": 380,
	"./de-at": 379,
	"./de-at.js": 379,
	"./de.js": 380,
	"./dv": 381,
	"./dv.js": 381,
	"./el": 382,
	"./el.js": 382,
	"./en-au": 383,
	"./en-au.js": 383,
	"./en-ca": 384,
	"./en-ca.js": 384,
	"./en-gb": 385,
	"./en-gb.js": 385,
	"./en-ie": 386,
	"./en-ie.js": 386,
	"./en-nz": 387,
	"./en-nz.js": 387,
	"./eo": 388,
	"./eo.js": 388,
	"./es": 390,
	"./es-do": 389,
	"./es-do.js": 389,
	"./es.js": 390,
	"./et": 391,
	"./et.js": 391,
	"./eu": 392,
	"./eu.js": 392,
	"./fa": 393,
	"./fa.js": 393,
	"./fi": 394,
	"./fi.js": 394,
	"./fo": 395,
	"./fo.js": 395,
	"./fr": 398,
	"./fr-ca": 396,
	"./fr-ca.js": 396,
	"./fr-ch": 397,
	"./fr-ch.js": 397,
	"./fr.js": 398,
	"./fy": 399,
	"./fy.js": 399,
	"./gd": 400,
	"./gd.js": 400,
	"./gl": 401,
	"./gl.js": 401,
	"./he": 402,
	"./he.js": 402,
	"./hi": 403,
	"./hi.js": 403,
	"./hr": 404,
	"./hr.js": 404,
	"./hu": 405,
	"./hu.js": 405,
	"./hy-am": 406,
	"./hy-am.js": 406,
	"./id": 407,
	"./id.js": 407,
	"./is": 408,
	"./is.js": 408,
	"./it": 409,
	"./it.js": 409,
	"./ja": 410,
	"./ja.js": 410,
	"./jv": 411,
	"./jv.js": 411,
	"./ka": 412,
	"./ka.js": 412,
	"./kk": 413,
	"./kk.js": 413,
	"./km": 414,
	"./km.js": 414,
	"./ko": 415,
	"./ko.js": 415,
	"./ky": 416,
	"./ky.js": 416,
	"./lb": 417,
	"./lb.js": 417,
	"./lo": 418,
	"./lo.js": 418,
	"./lt": 419,
	"./lt.js": 419,
	"./lv": 420,
	"./lv.js": 420,
	"./me": 421,
	"./me.js": 421,
	"./mi": 422,
	"./mi.js": 422,
	"./mk": 423,
	"./mk.js": 423,
	"./ml": 424,
	"./ml.js": 424,
	"./mr": 425,
	"./mr.js": 425,
	"./ms": 427,
	"./ms-my": 426,
	"./ms-my.js": 426,
	"./ms.js": 427,
	"./my": 428,
	"./my.js": 428,
	"./nb": 429,
	"./nb.js": 429,
	"./ne": 430,
	"./ne.js": 430,
	"./nl": 432,
	"./nl-be": 431,
	"./nl-be.js": 431,
	"./nl.js": 432,
	"./nn": 433,
	"./nn.js": 433,
	"./pa-in": 434,
	"./pa-in.js": 434,
	"./pl": 435,
	"./pl.js": 435,
	"./pt": 437,
	"./pt-br": 436,
	"./pt-br.js": 436,
	"./pt.js": 437,
	"./ro": 438,
	"./ro.js": 438,
	"./ru": 439,
	"./ru.js": 439,
	"./se": 440,
	"./se.js": 440,
	"./si": 441,
	"./si.js": 441,
	"./sk": 442,
	"./sk.js": 442,
	"./sl": 443,
	"./sl.js": 443,
	"./sq": 444,
	"./sq.js": 444,
	"./sr": 446,
	"./sr-cyrl": 445,
	"./sr-cyrl.js": 445,
	"./sr.js": 446,
	"./ss": 447,
	"./ss.js": 447,
	"./sv": 448,
	"./sv.js": 448,
	"./sw": 449,
	"./sw.js": 449,
	"./ta": 450,
	"./ta.js": 450,
	"./te": 451,
	"./te.js": 451,
	"./tet": 452,
	"./tet.js": 452,
	"./th": 453,
	"./th.js": 453,
	"./tl-ph": 454,
	"./tl-ph.js": 454,
	"./tlh": 455,
	"./tlh.js": 455,
	"./tr": 456,
	"./tr.js": 456,
	"./tzl": 457,
	"./tzl.js": 457,
	"./tzm": 459,
	"./tzm-latn": 458,
	"./tzm-latn.js": 458,
	"./tzm.js": 459,
	"./uk": 460,
	"./uk.js": 460,
	"./uz": 461,
	"./uz.js": 461,
	"./vi": 462,
	"./vi.js": 462,
	"./x-pseudo": 463,
	"./x-pseudo.js": 463,
	"./yo": 464,
	"./yo.js": 464,
	"./zh-cn": 465,
	"./zh-cn.js": 465,
	"./zh-hk": 466,
	"./zh-hk.js": 466,
	"./zh-tw": 467,
	"./zh-tw.js": 467
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 894;


/***/ }),

/***/ 900:
/***/ (function(module, exports) {

module.exports = "<router-outlet scrollSpy></router-outlet>\n\n<ng2-toasty [position]=\"'bottom-right'\"></ng2-toasty>\n\n<ng-template ngbModalContainer></ng-template>\n\n\n"

/***/ }),

/***/ 901:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <button type=\"button\" class=\"close\"  aria-label=\"Close\" (click)=\"dismiss('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n  <h4 class=\"modal-title\">Sign in</h4>\n</div>\n<form novalidate [formGroup]=\"loginForm\"  (submit)=\"submit(loginForm)\">\n  <div class=\"modal-body\">\n\n    <div class=\"form-group\">\n      <label for=\"email\">Email address</label>\n      <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Email\" formControlName=\"email\" ng2focus>\n      <p class=\"text-danger\" *ngIf=\"loginForm.controls.email.errors && submitted\">This field is required</p>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\" formControlName=\"password\">\n      <p class=\"text-danger\" *ngIf=\"loginForm.controls.password.errors && submitted\">This field is required</p>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"rememberMe\">\n        <input type=\"checkbox\" id=\"rememberMe\" formControlName=\"rememberMe\">\n        <span>Remember me</span>\n      </label>\n    </div>\n\n    <!--<div class=\"alert alert-danger\" *ngIf=\"(loginError$ | async)\">-->\n    <!--<strong>Failed to sign in!</strong> Please check your credentials and try again.-->\n    <!--</div>-->\n    <ngb-alert type=\"danger\" *ngIf=\"(loginError$ | async)\" [dismissible]=\"false\">{{loginError$ | async}}</ngb-alert>\n  </div>\n  <div class=\"modal-footer\">\n    <button class=\"btn btn-warning\" type=\"button\" (click)=\"close('Close click')\">Close</button>\n    <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!loginForm.valid\">Sign in</button>\n  </div>\n</form>\n"

/***/ }),

/***/ 902:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"dismiss('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n  <h4 class=\"modal-title\">Sign up</h4>\n</div>\n<form novalidate [formGroup]=\"signUpForm\" (submit)=\"submit(signUpForm)\">\n  <div class=\"modal-body\">\n\n    <div class=\"form-group\">\n      <label for=\"email\">Email address</label>\n      <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Email\" formControlName=\"email\" ng2focus>\n      <p class=\"text-danger\" *ngIf=\"signUpForm.controls.email.errors\">This field is required</p>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\" formControlName=\"password\">\n      <p class=\"text-danger\" *ngIf=\"signUpForm.controls.password.errors\">This field is required</p>\n    </div>\n    <ngb-alert type=\"danger\" *ngIf=\"(signUpError$ | async)\" [dismissible]=\"false\">{{signUpError$ | async}}</ngb-alert>\n  </div>\n  <div class=\"modal-footer\">\n    <button class=\"btn btn-warning\" type=\"button\" (click)=\"close('Close click')\">Close</button>\n    <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!signUpForm.valid\">Sign up</button>\n  </div>\n</form>\n"

/***/ }),

/***/ 903:
/***/ (function(module, exports) {

module.exports = "<div id=\"spinner\" #spinner class=\"spinner\" *ngIf=\"isVisible\">\n  <div class=\"shader\"></div>\n  <div class=\"spinner-wrapper\">\n    <div class=\"spinner-icon\">\n      <div class=\"rect1\"></div><div class=\"rect2\"></div><div class=\"rect3\"></div><div class=\"rect4\"></div><div class=\"rect5\"></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 904:
/***/ (function(module, exports) {

module.exports = "<p>\n  back-button works!\n</p>\n"

/***/ }),

/***/ 905:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-bottom navbar-light bg-faded\">\n  <!--<div class=\"container\">-->\n    <p class=\"text-muted copyright-text\" align=\"right\">©2017 Sumo, Inc.</p>\n  <!--</div>-->\n</nav>\n\n"

/***/ }),

/***/ 906:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-toggleable-md navbar-inverse bg-inverse\">\n  <!--[if lt IE 10]>\n  <p class=\"browsehappy\">You are using an <strong>outdated</strong> browser. Please <a\n    href=\"http://browsehappy.com/\">upgrade your browser</a> to improve your experience.</p>\n  <![endif]-->\n\n  <!-- if main content is using fixed container, enable below container for nav -->\n  <!--<div class=\"container\">-->\n\n    <!-- Brand Logo and toggler-->\n    <button (click)=\"isCollapsed = !isCollapsed\" class=\"navbar-toggler navbar-toggler-right hidden-lg-up\" type=\"button\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <a class=\"navbar-brand\" href=\"#\">\n      <i class=\"fa orange-icon\">\n        <img src=\"assets/img/grails-cupsonly-logo-white.svg\" alt=\"Orange$\" />\n      </i>\n      {{title}}\n    </a>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" [ngbCollapse]=\"isCollapsed\">\n\n      <div class=\"navbar-nav mr-auto\">\n        <a class=\"nav-item nav-link\" routerLinkActive=\"active\" routerLink=\"/home\"  [routerLinkActiveOptions]=\"{ exact: true }\" i18n>Home</a>\n        <a class=\"nav-item nav-link\" routerLinkActive=\"active\" routerLink=\"/dashboard\" i18n>Dashboard</a>\n        <a class=\"nav-item nav-link\" routerLinkActive=\"active\" routerLink=\"/doctor\" i18n>Doctor</a>\n        <a class=\"nav-item nav-link\" routerLinkActive=\"active\" routerLink=\"/admin\" i18n>Admin</a>\n      </div>\n\n      <ng-content></ng-content>\n\n      <div class=\"navbar-nav\">\n        <!--<a class=\"nav-item nav-link\" routerLinkActive=\"active\" routerLink=\"/home/about\" i18n>About</a>-->\n\n        <div ngbDropdown class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle> Sumanth </a>\n          <div class=\"dropdown-menu dropdown-menu-right\" >\n            <a class=\"dropdown-item\" >Profile</a>\n            <a class=\"dropdown-item\" >Settings</a>\n            <a class=\"dropdown-item\" (click)=\"logOut()\">Sign out</a>\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n  <!--</div>-->\n\n</nav>\n"

/***/ }),

/***/ 907:
/***/ (function(module, exports) {

module.exports = "<ng-content select=\"header\"></ng-content>\n<ng-content></ng-content>\n<span #ref><ng-content select=\"[app-footer]\"></ng-content></span>\n<footer *ngIf=\"ref.childNodes.length == 0\" app-header></footer>\n\n\nhttp://stackoverflow.com/questions/38780436/how-to-switch-layouts-in-angular2/38783451#38783451\n"

/***/ }),

/***/ 908:
/***/ (function(module, exports) {

module.exports = "<canvas width=\"{{width}}\" height=\"{{height}}\"></canvas>\n"

/***/ }),

/***/ 909:
/***/ (function(module, exports) {

module.exports = "<div id=\"spinner\" #spinner class=\"spinner\" *ngIf=\"isVisible\">\n  <div class=\"shader\"></div>\n  <div class=\"spinner-wrapper\">\n    <div class=\"spinner-icon\">\n      <div class=\"rect1\"></div><div class=\"rect2\"></div><div class=\"rect3\"></div><div class=\"rect4\"></div><div class=\"rect5\"></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 938:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 939:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(493);


/***/ })

},[939]);
//# sourceMappingURL=main.bundle.js.map