(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~home-home-module~pages-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <ion-img class=\"icon\" src=\"assets/imgs/logf.png\"></ion-img>\r\n  <div class=\"content-items\">\r\n    <ion-item>\r\n      <ion-label position=\"floating\"> Correo electrónico</ion-label>\r\n      <ion-input\r\n        type=\"text\"\r\n        [(ngModel)]=\"correo_electronico\"\r\n        name=\"correo_electronico\"\r\n      ></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Contraseña</ion-label>\r\n      <ion-input\r\n        [type]=\"showPassword ? 'text':'password'\"\r\n        [(ngModel)]=\"contrasenia\"\r\n        name=\"contrasenia\"\r\n      ></ion-input>\r\n      <ion-icon\r\n        slot=\"end\"\r\n        [name]=\"passwordIcon\"\r\n        (click)=\"iconPassword()\"\r\n      ></ion-icon>\r\n    </ion-item>\r\n    \r\n    <div class=\"ion-text-center ion-margin-top\">\r\n      <a class=\"content-link\" routerLink=\"/resetpss\">\r\n        <small>¿Olvidó su contraseña? Recuperar Contraseña</small>\r\n      </a>\r\n    </div>\r\n    <div class=\"ion-text-center ion-margin-top\">\r\n      <a class=\"content-link\" routerLink=\"/register\">\r\n        <small>¿No tienes una cuenta? Registrate</small>\r\n      </a>\r\n    </div>\r\n    <ion-button expand=\"full\" (click)=\"on_submit_loginF()\" >\r\n      INICIAR EN FIREBASE\r\n    </ion-button>\r\n  </div>\r\n  \r\n  <ion-grid>\r\n<ion-row>\r\n    <ion-button (click)=\"loginFacebook()\">\r\n      <ion-icon name=\"logo-facebook\"></ion-icon>\r\n    </ion-button>\r\n    \r\n  \r\n    <ion-button (click)=\"loginGoogle()\">\r\n      <ion-icon name=\"logo-google\"></ion-icon>\r\n    </ion-button>\r\n  \r\n</ion-row>\r\n</ion-grid>\r\n  \r\n  <ion-button expand=\"full\" (click)=\"on_submit_login()\" class=\"boton\">\r\n    INICIAR SESIÓN\r\n  </ion-button>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/login/login-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: white;\n}\n\n.icon {\n  display: block;\n  margin-top: 20%;\n  margin-left: auto;\n  margin-right: auto;\n  width: 70%;\n}\n\nion-item {\n  --background: white;\n  border-radius: 12px;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.boton {\n  --background: #e6242f;\n  width: 100%;\n  height: 8%;\n  bottom: 0;\n  left: 0;\n  display: block;\n  position: absolute;\n}\n\nion-icon {\n  padding-top: 5%;\n}\n\nion-row {\n  position: fixed;\n  left: 30%;\n  bottom: 15%;\n}\n\nion-row ion-icon {\n  font-size: 35px;\n}\n\n.content-items {\n  width: 100%;\n  position: fixed;\n  align-items: center;\n  justify-content: center;\n  margin-top: 25%;\n}\n\n.content-items ion-item {\n  --highlight-color-valid: #e6242f;\n}\n\n.content-link {\n  text-align: center;\n  color: #e6242f;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXFVzZXJzXFxtZWRpblxcRGVza3RvcFxcRGlzdHJpYnVpZG9zL3NyY1xcYXBwXFxwYWdlc1xcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FER0E7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURHQTtFQUNJLGVBQUE7QUNBSjs7QURHQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ0FKOztBRENJO0VBQ0ksZUFBQTtBQ0NSOztBREdBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ0FKOztBRENJO0VBQ0ksZ0NBQUE7QUNDUjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDIwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDcwJTtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIDtcclxufVxyXG5cclxuLmJvdG9uIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2U2MjQyZjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4JTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuaW9uLWljb24ge1xyXG4gICAgcGFkZGluZy10b3A6IDUlO1xyXG59XHJcblxyXG5pb24tcm93IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDMwJTtcclxuICAgIGJvdHRvbTogMTUlO1xyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIH1cclxufVxyXG5cclxuLmNvbnRlbnQtaXRlbXMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyNSU7XHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgICAgLS1oaWdobGlnaHQtY29sb3ItdmFsaWQ6ICNlNjI0MmY7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb250ZW50LWxpbmsge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNlNjI0MmY7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5pY29uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDIwJTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDcwJTtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uYm90b24ge1xuICAtLWJhY2tncm91bmQ6ICNlNjI0MmY7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDglO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbmlvbi1pY29uIHtcbiAgcGFkZGluZy10b3A6IDUlO1xufVxuXG5pb24tcm93IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAzMCU7XG4gIGJvdHRvbTogMTUlO1xufVxuaW9uLXJvdyBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbn1cblxuLmNvbnRlbnQtaXRlbXMge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjUlO1xufVxuLmNvbnRlbnQtaXRlbXMgaW9uLWl0ZW0ge1xuICAtLWhpZ2hsaWdodC1jb2xvci12YWxpZDogI2U2MjQyZjtcbn1cblxuLmNvbnRlbnQtbGluayB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNlNjI0MmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_fbauth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/fbauth.service */ "./src/app/services/fbauth.service.ts");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/app.component */ "./src/app/app.component.ts");







let LoginPage = class LoginPage {
    constructor(router, toastController, authService, fbauthservice, appcom) {
        this.router = router;
        this.toastController = toastController;
        this.authService = authService;
        this.fbauthservice = fbauthservice;
        this.appcom = appcom;
        this.showPassword = false;
        this.passwordIcon = "eye";
    }
    ngOnInit() {
        //localStorage.clear();
        //this.fbauthservice.login('medinajordy@hotmail.com','12345678');
        if (localStorage.length > 0) {
            this.loguinAutomatico();
        }
    }
    loginGoogle() {
    }
    loginFacebook() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        });
    }
    on_submit_loginF() {
        this.fbauthservice
            .login(this.correo_electronico, this.contrasenia)
            .then(
        //Respuesta positiva
        (res) => {
            this.router.navigate(["home"]);
            this.correo_electronico = "";
            this.contrasenia = "";
        })
            .catch((err) => {
            //Verificar si es un Network Error
            this.presentToastFeedback();
        });
    }
    on_submit_login() {
        let credentials = {
            username: this.correo_electronico,
            password: this.contrasenia
        };
        localStorage.setItem("correo", credentials.username);
        localStorage.setItem("password", credentials.password);
        localStorage.setItem("firstTime", "1");
        //var a= performance.now();
        this.authService.login(credentials).then((result) => {
            //var b= performance.now()
            // console.log(b-a)
            console.log(result);
            console.log(this.authService.token);
            if (result == "ok") {
                if (this.authService.deviceToken != null) {
                    this.authService.sendDeviceToken();
                    this.authService.sendDeviceTokenToFB();
                }
                this.appcom.username = this.authService.nombre;
                this.router.navigate(['home']);
            }
            else {
                this.presentToastFeedback();
            }
        });
    }
    loguinAutomatico() {
        let credentials = {
            username: localStorage.getItem("correo"),
            password: localStorage.getItem("password")
        };
        this.authService.login(credentials).then((result) => {
            console.log(result);
            console.log(this.authService.token);
            if (result == "ok") {
                if (this.authService.deviceToken != null) {
                    this.authService.sendDeviceToken();
                    //this.authService.sendDeviceTokenToFB()
                }
                this.appcom.username = this.authService.nombre;
                this.router.navigate(['home']);
            }
            else {
                this.presentToastFeedback();
            }
        });
    }
    presentToastFeedback() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: "Usuario o  contraseña incorrectos",
                position: "top",
                duration: 2000,
                color: "danger",
            });
            toast.present();
        });
    }
    presentGreeting() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Login exitoso!',
                position: 'top',
                duration: 2000,
                color: 'success'
            });
            toast.present();
        });
    }
    iconPassword() {
        this.showPassword = !this.showPassword;
        if (this.passwordIcon == 'eye') {
            this.passwordIcon = 'eye-off';
        }
        else {
            this.passwordIcon = 'eye';
        }
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: src_app_services_fbauth_service__WEBPACK_IMPORTED_MODULE_5__["FBAuthService"] },
    { type: src_app_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-login",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")).default]
    })
], LoginPage);



/***/ }),

/***/ "./src/app/services/fbauth.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/fbauth.service.ts ***!
  \********************************************/
/*! exports provided: FBAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FBAuthService", function() { return FBAuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let FBAuthService = class FBAuthService {
    constructor(AFauth, router, toastController) {
        this.AFauth = AFauth;
        this.router = router;
        this.toastController = toastController;
    }
    login(correo_electronico, contrasenia) {
        return new Promise((resolve, reject) => {
            var a = performance.now();
            this.AFauth.signInWithEmailAndPassword(correo_electronico, contrasenia)
                .then(res => {
                var b = performance.now();
                console.log(b - a);
                console.timeEnd();
                console.log(res);
                resolve(res);
            }).catch(err => {
                console.error('ERROR> En la auth. Linea 16 in auth.service.ts' + err);
                reject(err);
            });
        });
    }
    /**
     * Logout de respuesta asincrona que en caso de ser exitosa
     * redirecciona a la pantalla de login, sino lanza un error.
     * @returns una promesa
     */
    logout() {
        return this.AFauth.signOut()
            .then(() => {
            this.router.navigate(['/login']);
            console.log('Redirigir');
        }).catch(err => {
            console.error('ERROR> En la auth. Linea 42 in auth.service.ts' + err);
        });
    }
    /**
     * Usa el obj AFauth para enviar un correo de recuperacion de contraseña al proveedor que lo solicita.
     * Nota: Se puede personalizar el mensaje enviado desde firebase/console/authentication
     * Pdt: Para probar se recomienda usar un email temporal, debidamente registrado como usuario.
     * @param correo_recuperacion (del proveedor) destino donde se enviara el mensaje
     */
    reset_password(correo_recuperacion) {
        if (correo_recuperacion == "") {
            this.presentToastFeedback('Debe ingresar un correo electronico.');
            //alert("Debe ingresar un correo electronico.")
        }
        else {
            this.AFauth.sendPasswordResetEmail(correo_recuperacion)
                .then((res) => {
                console.log("Email se envio");
                this.presentToastFeedback('Listo!, Revisa en tu correo');
                this.router.navigate(['login']);
            }).catch((err) => {
                this.presentToastFeedback("ERROR en reset password " + err);
                console.error("ERROR en reset password  " + err);
            });
        }
    }
    presentToastFeedback(text) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: text,
                duration: 2000,
                position: 'top',
            });
            toast.present();
        });
    }
};
FBAuthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
];
FBAuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FBAuthService);



/***/ })

}]);
//# sourceMappingURL=default~home-home-module~pages-login-login-module-es2015.js.map