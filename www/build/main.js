webpackJsonp([0],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_rest_service_rest_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, restService, storage, toastCtrl) {
        this.navCtrl = navCtrl;
        this.restService = restService;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
    }
    LoginPage.prototype.loginApp = function () {
        var _this = this;
        if (this.email == null || this.password == null) {
            this.showToast("Rellene los campos");
        }
        else {
            this.restService.post("user/login", { email: this.email, password: this.password, type: 'NORMAL' })
                .then(function (data) {
                _this.data = data;
                if (_this.data.response.email != null) {
                    _this.storage.set('isLogged', true);
                    _this.storage.set('email', _this.data.response.email);
                    _this.storage.set('photo', _this.data.response.photo);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                }
                else {
                    _this.showToast(_this.data.response.message);
                }
            });
        }
    };
    LoginPage.prototype.showToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            showCloseButton: true,
            closeButtonText: "Cerrar"
        });
        toast.present();
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/home/drkpkg/Proyectos/Web/encontrame/encontrame_app/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>Login</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n        <ion-item>\n            <ion-label floating>Email</ion-label>\n            <ion-input type="text" [(ngModel)]="email" ></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating>Contraseña</ion-label>\n            <ion-input type="password" [(ngModel)]="password" ></ion-input>\n        </ion-item>\n    </ion-list>\n\n    <div padding>\n        <button ion-button block (click)="loginApp()">Iniciar sesion</button>\n    </div>\n</ion-content>'/*ion-inline-end:"/home/drkpkg/Proyectos/Web/encontrame/encontrame_app/src/pages/login/login.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_0__providers_rest_service_rest_service__["a" /* RestServiceProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_0__providers_rest_service_rest_service__["a" /* RestServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ToastController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RestServiceProvider = (function () {
    function RestServiceProvider(http) {
        this.http = http;
    }
    RestServiceProvider.prototype.parsedUrl = function (url, params) {
        return 'http://localhost:3000/api/v1/' + url + '?token=LHIuovDZqiz7d8pwYaoHGGkzTBHdQReH' + params;
    };
    RestServiceProvider.prototype.get = function (url, params) {
        var _this = this;
        if (params === void 0) { params = ''; }
        console.log("Procesando " + this.parsedUrl(url, params));
        if (this.data && params == '') {
            return Promise.resolve(this.data);
        }
        return new Promise(function (resolve) {
            _this.http.get(_this.parsedUrl(url, params))
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            });
        });
    };
    RestServiceProvider.prototype.post = function (url, params) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return new Promise(function (resolve) {
            _this.http.post(_this.parsedUrl(url, ''), params, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            });
        });
    };
    RestServiceProvider.prototype.put = function (url, params) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return new Promise(function (resolve) {
            _this.http.put(_this.parsedUrl(url, ''), params, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data;
            });
        });
    };
    RestServiceProvider.prototype.delete = function (url, params) {
        var _this = this;
        var parsedUrl = 'http://localhost:3000/api/v1/' + url + '?token=LHIuovDZqiz7d8pwYaoHGGkzTBHdQReH';
        return new Promise(function (resolve) {
            _this.http.delete(parsedUrl, params)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data;
            });
        });
    };
    return RestServiceProvider;
}());
RestServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], RestServiceProvider);

//# sourceMappingURL=rest-service.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__publication_publication__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_service_rest_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__publication_new_publication_new__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, restService) {
        this.navCtrl = navCtrl;
        this.restService = restService;
        this.publications = [];
        this.loadPublications();
    }
    HomePage.prototype.loadPublications = function () {
        var _this = this;
        this.restService.get('publications', '&from=1&to=10')
            .then(function (data) {
            _this.publications = data.data;
        });
    };
    HomePage.prototype.publicationInfo = function (publication) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__publication_publication__["a" /* publicationInfoPage */], {
            data: publication
        });
    };
    HomePage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.restService.get('publications', '&from=' + (this.publications.length + 1) + '&to=' + (this.publications.length + 11))
            .then(function (data) {
            for (var i = 0; i < data.data.length; i++) {
                _this.publications.push(data.data[i]);
            }
            infiniteScroll.complete();
        });
    };
    HomePage.prototype.newPublication = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__publication_new_publication_new__["a" /* publicationNewPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/drkpkg/Proyectos/Web/encontrame/encontrame_app/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Encontrame</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-list>\n        <ion-item *ngFor="let publication of publications">\n            <ion-card (click)=\'publicationInfo(publication)\'>\n                <img src={{publication.photo}}/>\n                <ion-card-header>\n                    {{publication.name}} - {{publication.age}}\n                </ion-card-header>\n                <ion-card-content>\n                    <!--button ion-button outline full (click)=\'publicationInfo(publication.id)\'>Mas informacion</button-->\n                </ion-card-content>\n            </ion-card>\n        </ion-item>\n    </ion-list>\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n\n    <ion-fab bottom right (click)="newPublication()">\n        <button ion-fab>\n            <ion-icon name="add"></ion-icon>\n        </button>\n    </ion-fab>\n</ion-content>'/*ion-inline-end:"/home/drkpkg/Proyectos/Web/encontrame/encontrame_app/src/pages/home/home.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__providers_rest_service_rest_service__["a" /* RestServiceProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_service_rest_service__["a" /* RestServiceProvider */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/drkpkg/Proyectos/Web/encontrame/encontrame_app/src/pages/tabs/tabs.html"*/'<ion-tabs>\n    <ion-tab [root]="tab1Root" tabTitle="Dashboard" tabIcon="home"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="Configuración" tabIcon="cog"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="Acerca de" tabIcon="information-circle"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/home/drkpkg/Proyectos/Web/encontrame/encontrame_app/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/home/drkpkg/Proyectos/Web/encontrame/encontrame_app/src/pages/about/about.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Acerca de\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    Encontrame 0.1 - @drkpkg\n</ion-content>'/*ion-inline-end:"/home/drkpkg/Proyectos/Web/encontrame/encontrame_app/src/pages/about/about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactPage = (function () {
    function ContactPage(navCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.storage.get('email').then(function (value) {
            _this.email = value;
        });
    }
    ContactPage.prototype.Logout = function () {
        this.storage.clear();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"/home/drkpkg/Proyectos/Web/encontrame/encontrame_app/src/pages/contact/contact.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Contact\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <ion-item>\n            {{email}}\n        </ion-item>\n\n    </ion-list>\n    <ion-item>\n        <button ion-button color="danger" full (click)="Logout()">Cerrar sesion</button>\n    </ion-item>\n</ion-content>'/*ion-inline-end:"/home/drkpkg/Proyectos/Web/encontrame/encontrame_app/src/pages/contact/contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return publicationInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var publicationInfoPage = (function () {
    function publicationInfoPage(modalCtrl, navParams) {
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.publication = this.navParams.get('data');
    }
    return publicationInfoPage;
}());
publicationInfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-publication',template:/*ion-inline-start:"/home/drkpkg/Proyectos/Web/encontrame/encontrame_app/src/pages/publication/publication.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Encontrame</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <img src={{publication.photo}}/>\n    <p><strong>Nombre:</strong> {{publication.name}}</p>\n    <p>{{publication.sex}} - {{publication.age}} años</p>\n    <p></p>\n\n</ion-content>'/*ion-inline-end:"/home/drkpkg/Proyectos/Web/encontrame/encontrame_app/src/pages/publication/publication.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], publicationInfoPage);

//# sourceMappingURL=publication.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return publicationNewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_service_rest_service__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var publicationNewPage = (function () {
    function publicationNewPage(modalCtrl, navParams, restService) {
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.restService = restService;
    }
    publicationNewPage.prototype.guardarPublicacion = function () {
        var params = {
            photo: this.photo,
            person_name: this.person_name,
            date_of_disappearance: this.date_of_disappearance,
            age: this.age,
            approximate_age: this.approximate_age,
            height: this.height,
            weight: this.weight,
            structure: this.structure,
            nickname: this.nickname,
            clothing: this.clothing,
            contact_email: this.contact_email,
            contact_phone: this.contact_phone,
            sex: this.sex
        };
        this.restService.post("publications/create", { 'publication': params })
            .then(function (data) {
            console.log(data.data.message);
        });
    };
    return publicationNewPage;
}());
publicationNewPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-new-publication',template:/*ion-inline-start:"/home/drkpkg/Proyectos/Web/encontrame/encontrame_app/src/pages/publication_new/publication_new.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Encontrame</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    contact_phone sex\n\n    <h2>Registro de persona</h2>\n    <ion-item>\n        <ion-input type="file" [(ngModel)]="photo"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label floating>Nombre completo</ion-label>\n        <ion-input type="text" [(ngModel)]="person_name"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label floating>Apodo</ion-label>\n        <ion-input type="text" [(ngModel)]="nickname"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label floating>Edad</ion-label>\n        <ion-input type="text" [(ngModel)]="age"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label>Edad aproximada</ion-label>\n        <ion-checkbox [(ngModel)]="approximate_age">Edad aproximada</ion-checkbox>\n    </ion-item>\n    <ion-item>\n        <ion-label stacked>Fecha de extravio</ion-label>\n        <ion-input type="date" [(ngModel)]="date_of_disappearance"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label floating>Altura</ion-label>\n        <ion-input type="number" [(ngModel)]="height"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label floating>Peso</ion-label>\n        <ion-input type="text" [(ngModel)]="weight"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label>Contextura</ion-label>\n        <ion-select [(ngModel)]="structure" multiple="false">\n            <ion-option value="delgado">Delgado</ion-option>\n            <ion-option value="normal">Normal</ion-option>\n            <ion-option value="obeso">Obeso</ion-option>\n        </ion-select>\n    </ion-item>\n    <ion-item>\n        <ion-label>Rasgos y ropa</ion-label>\n        <ion-input type="text" [(ngModel)]="clothing"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label>Correo electronico</ion-label>\n        <ion-input type="email" [(ngModel)]="contact_email"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label>Telefono</ion-label>\n        <ion-input type="text" [(ngModel)]="contact_phone"></ion-input>\n    </ion-item>\n\n    <button ion-button full (click)="guardarPublicacion()">Guardar</button>\n\n</ion-content>'/*ion-inline-end:"/home/drkpkg/Proyectos/Web/encontrame/encontrame_app/src/pages/publication_new/publication_new.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_rest_service_rest_service__["a" /* RestServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_rest_service_rest_service__["a" /* RestServiceProvider */]) === "function" && _c || Object])
], publicationNewPage);

var _a, _b, _c;
//# sourceMappingURL=publication_new.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_publication_publication__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_rest_service_rest_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_publication_new_publication_new__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_publication_publication__["a" /* publicationInfoPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_publication_new_publication_new__["a" /* publicationNewPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_publication_publication__["a" /* publicationInfoPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_publication_new_publication_new__["a" /* publicationNewPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_13__providers_rest_service_rest_service__["a" /* RestServiceProvider */],
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, storage) {
        var _this = this;
        this.storage = storage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        this.showRoot = false;
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
        storage.get('isLogged').then(function (logged) {
            if (logged) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
            }
            _this.showRoot = true;
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/drkpkg/Proyectos/Web/encontrame/encontrame_app/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>'/*ion-inline-end:"/home/drkpkg/Proyectos/Web/encontrame/encontrame_app/src/app/app.html"*/,
        template: "<ion-nav *ngIf=\"showRoot\" [root]=\"rootPage\"></ion-nav>"
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map