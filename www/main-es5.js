function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
      "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
      "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
      "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
      "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
      "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
      "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
      "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
      "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
      "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
      "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
      "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
      "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
      "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
      "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
      "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
      "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
      "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
      "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
      "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
      "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
      "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
      "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
      "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
      "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
      "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
      "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
      "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
      "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
      "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
      "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
      "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
      "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
      "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\r\n  <ion-menu side=\"start\" menuId=\"first\" contentId=\"main\">\r\n    <ion-content>\r\n      <div class=\"menu-bg\">\r\n        <ion-menu-toggle routerLink=\"/perfil\">\r\n        <div class=\"menu-header-content\" >\r\n          <ion-avatar  >\r\n            <img src=\"assets/imgs/user.png\">\r\n          </ion-avatar>\r\n          <label>\r\n            <h4>{{username}}</h4>\r\n          </label>\r\n        \r\n        </div>\r\n      </ion-menu-toggle>  \r\n        <ion-list lines=\"none\" class=\"menu-items\" color=“transparent”>\r\n          <ion-menu-toggle routerLink=\"/home\">\r\n            <ion-item color=“transparent”>\r\n              <ion-icon name=\"car-outline\"></ion-icon>Menú principal\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n\r\n\r\n          \r\n          \r\n\r\n          <ion-menu-toggle routerLink=\"news\">\r\n            <ion-item color=“transparent”>\r\n              <ion-icon name=\"document-text-outline\"></ion-icon>Noticias\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n\r\n          <ion-menu-toggle routerLink=\"/historial/\">\r\n            <ion-item color=“transparent”>\r\n              <ion-icon name=\"folder-open-outline\"></ion-icon>Historial\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n\r\n\r\n          <ion-menu-toggle routerLink=\"/comentarios-sugerencias\">\r\n            <ion-item color=\"transparent\">\r\n              <ion-icon name=\"mail-open-outline\"></ion-icon>Comentarios y sugerencias\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n\r\n          <ion-menu-toggle>\r\n            <ion-item color=\"transparent\" (click)=\"getPoliticas()\">\r\n              <ion-icon name=\"receipt-outline\"></ion-icon>Terminos y Condiciones\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n          <!--<ion-menu-toggle routerLink=\"/acerca\">\r\n            <ion-item color=“transparent” button (click)=\"presentAlertFin()\">\r\n              <ion-icon name=\"stop-circle-outline\"></ion-icon>Acerca\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n          -->\r\n        </ion-list>\r\n       \r\n\r\n        <div class=\"out-content\">\r\n          <ion-grid >\r\n            <ion-row class=\"rowcenter\">\r\n              <ion-text>Patrocinado por</ion-text>\r\n            </ion-row>\r\n            <ion-row style=\"padding-left: 10%;\">\r\n              <ion-col size=\"3\" expand=\"full\">      <ion-item>         <ion-icon name=\"cloud-done-outline\"></ion-icon>            </ion-item></ion-col>   \r\n              <ion-col size=\"3\" expand=\"full\">      <ion-item>         <ion-icon name=\"cloud-done-outline\"></ion-icon>            </ion-item></ion-col>\r\n              <ion-col size=\"3\" expand=\"full\">      <ion-item>         <ion-icon name=\"cloud-done-outline\"></ion-icon>            </ion-item> </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n          <hr>\r\n          <ion-menu-toggle routerLink=\"/login\">\r\n            <ion-text color=“transparent” (click)=\"on_logout()\">\r\n              <span class=\"text\"> CERRAR SESIÓN</span>\r\n            </ion-text>\r\n          </ion-menu-toggle>\r\n        </div>\r\n      </div>\r\n\r\n    </ion-content>\r\n  </ion-menu>\r\n  <ion-router-outlet id=\"main\"></ion-router-outlet>\r\n</ion-app>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/calificar-driver/calificar-driver.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/calificar-driver/calificar-driver.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCalificarDriverCalificarDriverComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\r\n<ion-header id=\"header-card\">\r\n    <ion-title>FIN DEL SERVICIO</ion-title>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col></ion-col>  \r\n      <ion-col><img class=\"center\" src=\"assets/icon/proceso_exitoso.png\"></ion-col> \r\n      <ion-col></ion-col>  \r\n    </ion-row>\r\n  \r\n    <ion-row><strong>Ha llegado al final de la ruta</strong></ion-row>\r\n    <ion-row><strong>Conductor:</strong>{{shareData.detallesDriver.data.nombreConductor}} {{shareData.detallesDriver.data.apellidoConductor}}</ion-row>\r\n    \r\n    <ion-row><strong id=\"score\">Calificación:</strong><ion-icon name=\"star\" *ngFor=\"let num of [1,2,3,4,5]\"(click)=\"rate(num)\" [ngStyle]=\"{'color':getColor(num)}\"></ion-icon></ion-row>\r\n    <ion-row>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\"><strong>Comentario</strong></ion-label>\r\n        <ion-input placeholder=\"Ingrese un comentario (opcional)\"></ion-input>\r\n      </ion-item>\r\n    </ion-row>\r\n    \r\n\r\n  <ion-button fill=\"clear\" class=\"btn\" expand=\"full\" (click)=\"finalizarServicio()\">Finalizar Servicio</ion-button>\r\n</ion-grid>\r\n</ion-content>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/notification-driver/notification-driver.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/notification-driver/notification-driver.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsNotificationDriverNotificationDriverComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header id=\"header-card\">\r\n  <ion-title>{{title}}</ion-title>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div id=\"body-content\">\r\n    <p><strong>{{body}} </strong></p>\r\n  </div>\r\n\r\n<div id=\"buttons-content\">\r\n  <ion-button expand=\"full\" class=\"btn-si\" (click)=\"btnAceptar()\">Aceptar</ion-button>\r\n</div>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/popover/popover.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/popover/popover.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPopoverPopoverComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class='mid'>\n  <ion-text color=\"secondary\">\n    <h1>Conductor Encontrado!</h1>\n  </ion-text>\n  \n  <ion-row>\n    <ion-text color=\"primary\">\n      <h2>Carlos Desarrollo</h2>\n    </ion-text>\n    <ion-text color=\"primary\">\n      <p>ingenieria.software.desarrollo@gmail.com</p>\n    </ion-text>\n    <ion-icon name=\"star-outline\"></ion-icon>\n    <ion-icon name=\"star-outline\"></ion-icon>\n    <ion-icon name=\"star-outline\"></ion-icon>\n    <ion-icon name=\"star-outline\"></ion-icon>\n    <ion-icon name=\"star-outline\"></ion-icon>\n    \n  </ion-row>\n\n  <div class=\"btns\">\n    <ion-button color=\"primary\" (click)=\"presentToast()\">Aceptar</ion-button>\n    <ion-button color=\"primary\" (click)=\"DismissClick()\">Cancelar</ion-button>\n  </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/show-notif/show-notif.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/show-notif/show-notif.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsShowNotifShowNotifComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <div class='mid'>\n    <ion-grid>\n      <ion-row>\n        <p><strong>{{title}} </strong></p>\n      </ion-row>\n      <ion-row>\n        <p>{{body}}</p>\n      </ion-row>\n    </ion-grid>\n    <div id=\"body-content\">\n      \n      \n    </div>\n\n    <div id=\"buttons-content\">\n  \n    <ion-button class=\"btn-si\" (click)=\"btnOK()\">OK</ion-button>\n    </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/terminos/terminos.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/terminos/terminos.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTerminosTerminosComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar class=\"toolbar-bg\">\n    Terminos y condiciones\n  </ion-toolbar>\n  \n</ion-header>\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-text class=\".ion-text-justify\">\n        {{politicas}}\n      </ion-text>\n    </ion-row>\n    <ion-row>\n      <ion-button (click)='btnSi()'>\n        Acepto\n      </ion-button>\n      <ion-button (click)='btnSi()'>\n        No Acepto\n      </ion-button>\n    </ion-row>\n  </ion-grid>\n  \n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./guards/auth.guard */
    "./src/app/guards/auth.guard.ts");
    /* harmony import */


    var _guards_public_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./guards/public.guard */
    "./src/app/guards/public.guard.ts");

    var routes = [{
      path: 'home',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | home-home-module */
        [__webpack_require__.e("default~firebase-auth~home-home-module~pages-comentarios-sugerencias-comentarios-sugerencias-module~~fc8889aa"), __webpack_require__.e("default~home-home-module~pages-comentarios-sugerencias-comentarios-sugerencias-module~pages-perfil-p~027469d5"), __webpack_require__.e("default~home-home-module~pages-login-login-module"), __webpack_require__.e("common"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null,
        /*! ./home/home.module */
        "./src/app/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      },
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }, {
      path: 'news',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-news-news-module */
        "common").then(__webpack_require__.bind(null,
        /*! ./pages/news/news.module */
        "./src/app/pages/news/news.module.ts")).then(function (m) {
          return m.NewsPageModule;
        });
      },
      canActivate: [_guards_public_guard__WEBPACK_IMPORTED_MODULE_4__["PublicGuard"]]
    }, {
      path: 'viajes',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-viajes-viajes-module */
        "common").then(__webpack_require__.bind(null,
        /*! ./pages/viajes/viajes.module */
        "./src/app/pages/viajes/viajes.module.ts")).then(function (m) {
          return m.ViajesPageModule;
        });
      },
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'acerca',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-acerca-acerca-module */
        "common").then(__webpack_require__.bind(null,
        /*! ./pages/acerca/acerca.module */
        "./src/app/pages/acerca/acerca.module.ts")).then(function (m) {
          return m.AcercaPageModule;
        });
      },
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'login',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-login-login-module */
        "default~home-home-module~pages-login-login-module").then(__webpack_require__.bind(null,
        /*! ./pages/login/login.module */
        "./src/app/pages/login/login.module.ts")).then(function (m) {
          return m.LoginPageModule;
        });
      }
    }, {
      path: 'register',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-register-register-module */
        "common").then(__webpack_require__.bind(null,
        /*! ./pages/register/register.module */
        "./src/app/pages/register/register.module.ts")).then(function (m) {
          return m.RegisterPageModule;
        });
      },
      canActivate: [_guards_public_guard__WEBPACK_IMPORTED_MODULE_4__["PublicGuard"]]
    }, {
      path: 'perfil',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-perfil-perfil-module */
        [__webpack_require__.e("default~firebase-auth~home-home-module~pages-comentarios-sugerencias-comentarios-sugerencias-module~~fc8889aa"), __webpack_require__.e("default~home-home-module~pages-comentarios-sugerencias-comentarios-sugerencias-module~pages-perfil-p~027469d5"), __webpack_require__.e("common")]).then(__webpack_require__.bind(null,
        /*! ./pages/perfil/perfil.module */
        "./src/app/pages/perfil/perfil.module.ts")).then(function (m) {
          return m.PerfilPageModule;
        });
      },
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'servicio',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-servicio-servicio-module */
        "common").then(__webpack_require__.bind(null,
        /*! ./pages/servicio/servicio.module */
        "./src/app/pages/servicio/servicio.module.ts")).then(function (m) {
          return m.ServicioPageModule;
        });
      } //, canActivate: [AuthGuard, PublicGuard]

    }, {
      path: 'resetpss',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-resetpss-resetpss-module */
        "pages-resetpss-resetpss-module").then(__webpack_require__.bind(null,
        /*! ./pages/resetpss/resetpss.module */
        "./src/app/pages/resetpss/resetpss.module.ts")).then(function (m) {
          return m.ResetpssPageModule;
        });
      }
    }, {
      path: 'historial',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-historial-historial-module */
        "pages-historial-historial-module").then(__webpack_require__.bind(null,
        /*! ./pages/historial/historial.module */
        "./src/app/pages/historial/historial.module.ts")).then(function (m) {
          return m.HistorialPageModule;
        });
      }
    }, {
      path: 'historial-detalle/:datos',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-historial-detalle-historial-detalle-module */
        "pages-historial-detalle-historial-detalle-module").then(__webpack_require__.bind(null,
        /*! ./pages/historial-detalle/historial-detalle.module */
        "./src/app/pages/historial-detalle/historial-detalle.module.ts")).then(function (m) {
          return m.HistorialDetallePageModule;
        });
      }
    }, {
      path: 'detalle-servicio',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-detalle-servicio-detalle-servicio-module */
        "pages-detalle-servicio-detalle-servicio-module").then(__webpack_require__.bind(null,
        /*! ./pages/detalle-servicio/detalle-servicio.module */
        "./src/app/pages/detalle-servicio/detalle-servicio.module.ts")).then(function (m) {
          return m.DetalleServicioPageModule;
        });
      }
    }, {
      path: 'comentarios-sugerencias',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-comentarios-sugerencias-comentarios-sugerencias-module */
        [__webpack_require__.e("default~firebase-auth~home-home-module~pages-comentarios-sugerencias-comentarios-sugerencias-module~~fc8889aa"), __webpack_require__.e("default~home-home-module~pages-comentarios-sugerencias-comentarios-sugerencias-module~pages-perfil-p~027469d5"), __webpack_require__.e("pages-comentarios-sugerencias-comentarios-sugerencias-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/comentarios-sugerencias/comentarios-sugerencias.module */
        "./src/app/pages/comentarios-sugerencias/comentarios-sugerencias.module.ts")).then(function (m) {
          return m.ComentariosSugerenciasPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\n  color: white;\n  background-color: transparent;\n}\n\n.menu-bg {\n  height: 100%;\n  background: linear-gradient(#20478c, #2485c9);\n}\n\n.menu-header-content {\n  padding-top: 15%;\n  padding-left: 15%;\n  padding-bottom: 10%;\n  top: 30px;\n  left: 20px;\n  display: flex;\n  color: #272323;\n  align-items: center;\n}\n\n.menu-header-content ion-avatar {\n  width: 70px;\n  height: 70px;\n  margin-right: 15px;\n}\n\n.menu-header-content h2 {\n  font-weight: 3000;\n}\n\n.menu-header-content p {\n  font-size: 12px;\n  letter-spacing: 0.4px;\n  font-weight: 100;\n}\n\n.menu-items {\n  margin: 0px;\n}\n\n.menu-items ion-icon {\n  margin-right: 20px;\n  color: white;\n}\n\n.menu-items ion-item {\n  padding-left: 15px;\n  padding-top: 5%;\n  margin-bottom: 10px;\n}\n\n.rowcenter {\n  padding-left: 25%;\n}\n\n.out-content {\n  bottom: 0;\n  width: 100%;\n  position: fixed;\n  padding-bottom: 5%;\n}\n\n.text {\n  display: flex;\n  padding-top: 5%;\n  justify-content: center;\n}\n\nhr {\n  height: 1px;\n  width: 80%;\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxtZWRpblxcRG9jdW1lbnRzXFxFU1BPTFxcU29mdHdhcmUxXFxERVZcXFZlaGljdWxhci9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsNkJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSw2Q0FBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUVBLG1CQUFBO0FDQUo7O0FEQ0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ1I7O0FEQ0k7RUFDSSxpQkFBQTtBQ0NSOztBRENJO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNDUjs7QURHQTtFQUNJLFdBQUE7QUNBSjs7QURDSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQ0NSOztBRENJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNDUjs7QURHQTtFQUNJLGlCQUFBO0FDQUo7O0FER0E7RUFDSSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREdBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5tZW51LWJnIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMjA0NzhjLCAjMjQ4NWM5KVxyXG59XHJcblxyXG4ubWVudS1oZWFkZXItY29udGVudCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTUlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNSU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAlO1xyXG4gICAgdG9wOiAzMHB4O1xyXG4gICAgbGVmdDogMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBjb2xvcjogcmdiKDM5LCAzNSwgMzUpO1xyXG4gICAgO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGlvbi1hdmF0YXIge1xyXG4gICAgICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICB9XHJcbiAgICBoMiB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDA7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tZW51LWl0ZW1zIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgfVxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNSU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuLnJvd2NlbnRlciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1JTtcclxufVxyXG5cclxuLm91dC1jb250ZW50IHtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUlO1xyXG59XHJcblxyXG4udGV4dCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZy10b3A6IDUlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbmhyIHtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59IiwiKiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5tZW51LWJnIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzIwNDc4YywgIzI0ODVjOSk7XG59XG5cbi5tZW51LWhlYWRlci1jb250ZW50IHtcbiAgcGFkZGluZy10b3A6IDE1JTtcbiAgcGFkZGluZy1sZWZ0OiAxNSU7XG4gIHBhZGRpbmctYm90dG9tOiAxMCU7XG4gIHRvcDogMzBweDtcbiAgbGVmdDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6ICMyNzIzMjM7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWVudS1oZWFkZXItY29udGVudCBpb24tYXZhdGFyIHtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuLm1lbnUtaGVhZGVyLWNvbnRlbnQgaDIge1xuICBmb250LXdlaWdodDogMzAwMDtcbn1cbi5tZW51LWhlYWRlci1jb250ZW50IHAge1xuICBmb250LXNpemU6IDEycHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuLm1lbnUtaXRlbXMge1xuICBtYXJnaW46IDBweDtcbn1cbi5tZW51LWl0ZW1zIGlvbi1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWVudS1pdGVtcyBpb24taXRlbSB7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy10b3A6IDUlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ucm93Y2VudGVyIHtcbiAgcGFkZGluZy1sZWZ0OiAyNSU7XG59XG5cbi5vdXQtY29udGVudCB7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcGFkZGluZy1ib3R0b206IDUlO1xufVxuXG4udGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctdG9wOiA1JTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmhyIHtcbiAgaGVpZ2h0OiAxcHg7XG4gIHdpZHRoOiA4MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _services_fcm_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services/fcm.service */
    "./src/app/services/fcm.service.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(router, platform, splashScreen, statusBar, authService, firestore, alertCtrl, popovercontroller, fcmService, modalCtrl) {
        _classCallCheck(this, AppComponent);

        this.router = router;
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.authService = authService;
        this.firestore = firestore;
        this.alertCtrl = alertCtrl;
        this.popovercontroller = popovercontroller;
        this.fcmService = fcmService;
        this.modalCtrl = modalCtrl;
        this.username = "invitado";
        this.tokensCollection = firestore.collection('tokens');
        this.tokens = this.tokensCollection.valueChanges();
        this.tokens.subscribe(function (value) {
          console.log(value);
        });
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            _this.statusBar.styleDefault();

            _this.splashScreen.hide();

            _this.fcmService.initPush();
            /* Inicializar notificaciones push*/


            _this.router.navigateByUrl("login");
          });
        }
      }, {
        key: "on_logout",
        value: function on_logout() {
          this.authService.logout();
          this.router.navigateByUrl("login");
          localStorage.clear();
        }
      }, {
        key: "getPoliticas",
        value: function getPoliticas() {
          this.authService.getPoliticas();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }, {
        type: _services_fcm_service__WEBPACK_IMPORTED_MODULE_8__["FcmService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/native-geocoder/ngx */
    "./node_modules/@ionic-native/native-geocoder/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _components_popover_popover_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/popover/popover.component */
    "./src/app/components/popover/popover.component.ts");
    /* harmony import */


    var _components_show_notif_show_notif_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/show-notif/show-notif.component */
    "./src/app/components/show-notif/show-notif.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _components_calificar_driver_calificar_driver_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/calificar-driver/calificar-driver.component */
    "./src/app/components/calificar-driver/calificar-driver.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _components_popover_popover_component__WEBPACK_IMPORTED_MODULE_16__["PopoverComponent"], _components_calificar_driver_calificar_driver_component__WEBPACK_IMPORTED_MODULE_19__["CalificarDriverComponent"], _components_show_notif_show_notif_component__WEBPACK_IMPORTED_MODULE_17__["ShowNotifComponent"]],
      entryComponents: [_components_popover_popover_component__WEBPACK_IMPORTED_MODULE_16__["PopoverComponent"], _components_calificar_driver_calificar_driver_component__WEBPACK_IMPORTED_MODULE_19__["CalificarDriverComponent"], _components_show_notif_show_notif_component__WEBPACK_IMPORTED_MODULE_17__["ShowNotifComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot({
        mode: 'ios',
        swipeBackEnabled: false
      }), _angular_fire__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_13__["firebaseConfig"]), _angular_fire_database__WEBPACK_IMPORTED_MODULE_14__["AngularFireDatabaseModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_15__["AngularFireAuthModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"]],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__["Geolocation"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_10__["NativeGeocoder"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/calificar-driver/calificar-driver.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/calificar-driver/calificar-driver.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCalificarDriverCalificarDriverComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".center {\n  width: 100vw;\n  height: 30vw;\n}\n\nion-row {\n  padding-bottom: 13px;\n}\n\nion-icon {\n  font-size: 34px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYWxpZmljYXItZHJpdmVyL0M6XFxVc2Vyc1xcbWVkaW5cXERvY3VtZW50c1xcRVNQT0xcXFNvZnR3YXJlMVxcREVWXFxWZWhpY3VsYXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNhbGlmaWNhci1kcml2ZXJcXGNhbGlmaWNhci1kcml2ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2FsaWZpY2FyLWRyaXZlci9jYWxpZmljYXItZHJpdmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUNDSjs7QURDQTtFQUNJLG9CQUFBO0FDRUo7O0FEQUE7RUFDSSxlQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhbGlmaWNhci1kcml2ZXIvY2FsaWZpY2FyLWRyaXZlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXJ7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDMwdnc7XHJcbn1cclxuaW9uLXJvd3tcclxuICAgIHBhZGRpbmctYm90dG9tOiAxM3B4O1xyXG59XHJcbmlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMzRweDtcclxufSIsIi5jZW50ZXIge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMzB2dztcbn1cblxuaW9uLXJvdyB7XG4gIHBhZGRpbmctYm90dG9tOiAxM3B4O1xufVxuXG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMzRweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/calificar-driver/calificar-driver.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/calificar-driver/calificar-driver.component.ts ***!
    \***************************************************************************/

  /*! exports provided: CalificarDriverComponent */

  /***/
  function srcAppComponentsCalificarDriverCalificarDriverComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalificarDriverComponent", function () {
      return CalificarDriverComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_share_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/share-data.service */
    "./src/app/services/share-data.service.ts");

    var COLORS;

    (function (COLORS) {
      COLORS["GREY"] = "#E0E0E0";
      COLORS["GREEN"] = "#76FF03";
      COLORS["YELLOW"] = "#FFCA28";
      COLORS["RED"] = "#DD2C00";
    })(COLORS || (COLORS = {}));

    var CalificarDriverComponent = /*#__PURE__*/function () {
      function CalificarDriverComponent(router, popover, shareData) {
        _classCallCheck(this, CalificarDriverComponent);

        this.router = router;
        this.popover = popover;
        this.shareData = shareData;
        this.ratingChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(CalificarDriverComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "finalizarServicio",
        value: function finalizarServicio() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    console.log('CARRERA FINALIZADA');

                    if (!(this.rating != null)) {
                      _context.next = 7;
                      break;
                    }

                    _context.next = 4;
                    return this.popover.dismiss();

                  case 4:
                    this.router.navigate(['/home']);
                    _context.next = 8;
                    break;

                  case 7:
                    console.log("Elije rating");

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "rate",
        value: function rate(index) {
          this.rating = index;
          this.ratingChange.emit(this.rating);
          console.log(this.rating);
        }
      }, {
        key: "getColor",
        value: function getColor(index) {
          if (this.isAboveRating(index)) {
            return COLORS.GREY;
          }

          switch (this.rating) {
            case 1:
            case 2:
              return COLORS.RED;

            case 3:
              return COLORS.YELLOW;

            case 4:
            case 5:
              return COLORS.GREEN;

            default:
              return COLORS.GREY;
          }
        }
      }, {
        key: "isAboveRating",
        value: function isAboveRating(index) {
          return index > this.rating;
        }
      }]);

      return CalificarDriverComponent;
    }();

    CalificarDriverComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
      }, {
        type: src_app_services_share_data_service__WEBPACK_IMPORTED_MODULE_4__["ShareDataService"]
      }];
    };

    CalificarDriverComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-calificar-driver',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./calificar-driver.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/calificar-driver/calificar-driver.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./calificar-driver.component.scss */
      "./src/app/components/calificar-driver/calificar-driver.component.scss"))["default"]]
    })], CalificarDriverComponent);
    /***/
  },

  /***/
  "./src/app/components/notification-driver/notification-driver.component.scss":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/notification-driver/notification-driver.component.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsNotificationDriverNotificationDriverComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  text-align: center;\n  width: 100vw;\n  height: 65vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ub3RpZmljYXRpb24tZHJpdmVyL0M6XFxVc2Vyc1xcbWVkaW5cXERvY3VtZW50c1xcRVNQT0xcXFNvZnR3YXJlMVxcREVWXFxWZWhpY3VsYXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG5vdGlmaWNhdGlvbi1kcml2ZXJcXG5vdGlmaWNhdGlvbi1kcml2ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uLWRyaXZlci9ub3RpZmljYXRpb24tZHJpdmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ub3RpZmljYXRpb24tZHJpdmVyL25vdGlmaWNhdGlvbi1kcml2ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogNjV2dztcclxufSIsImlvbi1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogNjV2dztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/notification-driver/notification-driver.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/notification-driver/notification-driver.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: NotificationDriverComponent */

  /***/
  function srcAppComponentsNotificationDriverNotificationDriverComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationDriverComponent", function () {
      return NotificationDriverComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/loading.service */
    "./src/app/services/loading.service.ts");

    var NotificationDriverComponent = /*#__PURE__*/function () {
      function NotificationDriverComponent(router, navParams, popover, loadingservice) {
        _classCallCheck(this, NotificationDriverComponent);

        this.router = router;
        this.navParams = navParams;
        this.popover = popover;
        this.loadingservice = loadingservice;
      }

      _createClass(NotificationDriverComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.title = this.navParams.get("title");
          this.body = this.navParams.get("body");
          this.loadingservice.hideLoader(); //this.apellido = this.navParams.get("apellido");
        }
      }, {
        key: "btnAceptar",
        value: function btnAceptar() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    console.log('Confirm Okay');
                    _context2.next = 3;
                    return this.popover.dismiss();

                  case 3:
                    this.router.navigate(['/detalle-servicio']);
                    /*Cambiar*/

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return NotificationDriverComponent;
    }();

    NotificationDriverComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
      }, {
        type: src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]
      }];
    };

    NotificationDriverComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-notification-driver',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./notification-driver.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/notification-driver/notification-driver.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./notification-driver.component.scss */
      "./src/app/components/notification-driver/notification-driver.component.scss"))["default"]]
    })], NotificationDriverComponent);
    /***/
  },

  /***/
  "./src/app/components/popover/popover.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/components/popover/popover.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPopoverPopoverComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mid {\n  border: black 1px solid;\n  border-radius: 12px;\n  width: 400px;\n  text-align: center;\n  background-color: white;\n}\n\nion-row {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.price {\n  font-size: 18px;\n  color: red;\n}\n\n.btns {\n  text-align: center;\n}\n\n@media screen and (max-width: 1000px) {\n  .mid {\n    border: black 3px solid;\n    border-radius: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3BvdmVyL0M6XFxVc2Vyc1xcbWVkaW5cXERvY3VtZW50c1xcRVNQT0xcXFNvZnR3YXJlMVxcREVWXFxWZWhpY3VsYXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBvcG92ZXJcXHBvcG92ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcG9wb3Zlci9wb3BvdmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FDQ0o7O0FESUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0RKOztBREdBO0VBQ0ksZUFBQTtFQUNBLFVBQUE7QUNBSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSTtJQUNJLHVCQUFBO0lBQ0EsbUJBQUE7RUNFTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wb3BvdmVyL3BvcG92ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWlke1xuICAgIGJvcmRlcjogYmxhY2sgMXB4IHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgd2lkdGg6NDAwcHggO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBcbn1cbmlvbi1yb3cgaW9uLXRleHR7XG59XG5pb24tcm93e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5wcmljZXtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6IHJlZDtcbn1cbi5idG5ze1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCl7XG4gICAgLm1pZHtcbiAgICAgICAgYm9yZGVyOiBibGFjayAzcHggc29saWQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgIFxuICAgIH1cbn0iLCIubWlkIHtcbiAgYm9yZGVyOiBibGFjayAxcHggc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHdpZHRoOiA0MDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucHJpY2Uge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5idG5zIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLm1pZCB7XG4gICAgYm9yZGVyOiBibGFjayAzcHggc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/popover/popover.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/popover/popover.component.ts ***!
    \*********************************************************/

  /*! exports provided: PopoverComponent */

  /***/
  function srcAppComponentsPopoverPopoverComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopoverComponent", function () {
      return PopoverComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var PopoverComponent = /*#__PURE__*/function () {
      function PopoverComponent(navParams, popoverController, toastController) {
        _classCallCheck(this, PopoverComponent);

        this.navParams = navParams;
        this.popoverController = popoverController;
        this.toastController = toastController;
      }

      _createClass(PopoverComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.pedido = this.navParams.get('info');
        }
      }, {
        key: "DismissClick",
        value: function DismissClick() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var toast;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.popoverController.dismiss();

                  case 2:
                    _context3.next = 4;
                    return this.toastController.create({
                      message: 'Has cancelado la carrera!',
                      duration: 2500,
                      position: 'top',
                      color: 'danger'
                    });

                  case 4:
                    toast = _context3.sent;
                    toast.present();

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "presentToast",
        value: function presentToast() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var toast;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.toastController.create({
                      message: 'El conductor estara llegando pronto!',
                      duration: 2500,
                      position: 'top',
                      color: 'success'
                    });

                  case 2:
                    toast = _context4.sent;
                    toast.present();
                    _context4.next = 6;
                    return this.popoverController.dismiss();

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return PopoverComponent;
    }();

    PopoverComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }];
    };

    PopoverComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-popover',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./popover.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/popover/popover.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./popover.component.scss */
      "./src/app/components/popover/popover.component.scss"))["default"]]
    })], PopoverComponent);
    /***/
  },

  /***/
  "./src/app/components/show-notif/show-notif.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/components/show-notif/show-notif.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsShowNotifShowNotifComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mid {\n  width: 100vw;\n  text-align: center;\n  background-color: white;\n}\n\nion-row {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n@media screen and (max-width: 1000px) {\n  .mid {\n    border: black 1px solid;\n    border-radius: 12px;\n  }\n}\n\npopover-content sc-ion-popover-md {\n  top: 193px;\n  left: 2px;\n  transform-origin: left top;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaG93LW5vdGlmL0M6XFxVc2Vyc1xcbWVkaW5cXERvY3VtZW50c1xcRVNQT0xcXFNvZnR3YXJlMVxcREVWXFxWZWhpY3VsYXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNob3ctbm90aWZcXHNob3ctbm90aWYuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2hvdy1ub3RpZi9zaG93LW5vdGlmLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksWUFBQTtFQUVBLGtCQUFBO0VBQ0EsdUJBQUE7QUNESjs7QURJQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDREo7O0FER0E7RUFDSTtJQUNJLHVCQUFBO0lBQ0EsbUJBQUE7RUNBTjtBQUNGOztBRElBO0VBQ0ksVUFBQTtFQUNBLFNBQUE7RUFDQSwwQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaG93LW5vdGlmL3Nob3ctbm90aWYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWlke1xuICAgIC8vYm9yZGVyOiBibGFjayAxcHggc29saWQ7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIC8vd2lkdGg6IDM3MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBcbn1cbmlvbi1yb3d7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KXtcbiAgICAubWlke1xuICAgICAgICBib3JkZXI6IGJsYWNrIDFweCBzb2xpZDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgXG4gICAgfVxufVxuXG5wb3BvdmVyLWNvbnRlbnQgc2MtaW9uLXBvcG92ZXItbWR7XG4gICAgdG9wOiAxOTNweDsgXG4gICAgbGVmdDogMnB4OyBcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcbiAgfSIsIi5taWQge1xuICB3aWR0aDogMTAwdnc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbmlvbi1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5taWQge1xuICAgIGJvcmRlcjogYmxhY2sgMXB4IHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIH1cbn1cbnBvcG92ZXItY29udGVudCBzYy1pb24tcG9wb3Zlci1tZCB7XG4gIHRvcDogMTkzcHg7XG4gIGxlZnQ6IDJweDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/show-notif/show-notif.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/show-notif/show-notif.component.ts ***!
    \***************************************************************/

  /*! exports provided: ShowNotifComponent */

  /***/
  function srcAppComponentsShowNotifShowNotifComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowNotifComponent", function () {
      return ShowNotifComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var ShowNotifComponent = /*#__PURE__*/function () {
      function ShowNotifComponent(popover, navParams, platform, router) {
        _classCallCheck(this, ShowNotifComponent);

        this.popover = popover;
        this.navParams = navParams;
        this.platform = platform;
        this.router = router;
        this.width = this.platform.width;
        this.height = this.platform.height;
        this.title = this.navParams.get("title");
        this.body = this.navParams.get("body");
      }

      _createClass(ShowNotifComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "btnOK",
        value: function btnOK() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.popover.dismiss();

                  case 2:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return ShowNotifComponent;
    }();

    ShowNotifComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    ShowNotifComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-show-notif',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./show-notif.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/show-notif/show-notif.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./show-notif.component.scss */
      "./src/app/components/show-notif/show-notif.component.scss"))["default"]]
    })], ShowNotifComponent);
    /***/
  },

  /***/
  "./src/app/guards/auth.guard.ts":
  /*!**************************************!*\
    !*** ./src/app/guards/auth.guard.ts ***!
    \**************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(authService, router) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (this.authService.token == "") {
            //this.router.navigateByUrl("login");
            return false;
          } else {
            return true;
          }
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/guards/public.guard.ts":
  /*!****************************************!*\
    !*** ./src/app/guards/public.guard.ts ***!
    \****************************************/

  /*! exports provided: PublicGuard */

  /***/
  function srcAppGuardsPublicGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PublicGuard", function () {
      return PublicGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");

    var PublicGuard = /*#__PURE__*/function () {
      function PublicGuard(authService, router) {
        _classCallCheck(this, PublicGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(PublicGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (this.authService.token == null) {
            return true;
          } else {
            return true; //faLSE
          }
        }
      }]);

      return PublicGuard;
    }();

    PublicGuard.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    PublicGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PublicGuard);
    /***/
  },

  /***/
  "./src/app/pages/terminos/terminos.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/pages/terminos/terminos.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTerminosTerminosComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sc-ion-modal {\n  --width: 95%;\n  --height: 95% ;\n}\n\nion-text {\n  text-align: justify;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGVybWlub3MvQzpcXFVzZXJzXFxtZWRpblxcRG9jdW1lbnRzXFxFU1BPTFxcU29mdHdhcmUxXFxERVZcXFZlaGljdWxhci9zcmNcXGFwcFxccGFnZXNcXHRlcm1pbm9zXFx0ZXJtaW5vcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGVybWlub3MvdGVybWlub3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtBQ0NKOztBRENBO0VBQ0ksbUJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rlcm1pbm9zL3Rlcm1pbm9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjLWlvbi1tb2RhbCB7XHJcbiAgICAtLXdpZHRoOiA5NSU7XHJcbiAgICAtLWhlaWdodDogOTUlXHJcbn1cclxuaW9uLXRleHR7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59IiwiLnNjLWlvbi1tb2RhbCB7XG4gIC0td2lkdGg6IDk1JTtcbiAgLS1oZWlnaHQ6IDk1JSA7XG59XG5cbmlvbi10ZXh0IHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/terminos/terminos.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/terminos/terminos.component.ts ***!
    \******************************************************/

  /*! exports provided: TerminosComponent */

  /***/
  function srcAppPagesTerminosTerminosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TerminosComponent", function () {
      return TerminosComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var TerminosComponent = /*#__PURE__*/function () {
      function TerminosComponent(modalctrl) {
        _classCallCheck(this, TerminosComponent);

        this.modalctrl = modalctrl;
      }

      _createClass(TerminosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.politicas = "2) \n\n\n3) \n\n\n4) Cesión de datos del usuario\nEl Cliente o usuario queda informado y consiente expresamente que sus datos personales, facilitados a PIZZA HUT, puedan ser cedidos, exclusivamente para el cumplimiento de las finalidades descritas en el tercer punto, a otras empresas del Grupo y/o Cadena PIZZA HUT dentro del sector de la restauración, así como a otras empresas afines a nuestras actividades y promociones (ocio, viajes, alimentación, telecomunicaciones, cultura y servicios) que colaboren ahora o en el futuro en las actividades o campañas promocionales que desarrolle PIZZA HUT, aceptando por tanto expresamente el cliente o usuario que PIZZA HUT o las referidas sociedades, les remitan información sobre los productos que comercialicen. La aceptación del cliente o usuario para que puedan ser tratados o cedidos sus datos en la forma establecida en este párrafo, tiene siempre carácter revocable, sin efectos retroactivos, conforme a lo que dispone el artículo 9 de la Ley de Comercio Electrónico, Firmas Electrónicas y Mensajes de Datos.\n\n5) Responsabilidad del usuario\nSe prohíbe al Usuario incluir en los campos de texto libre de la página Web datos de carácter personal de terceras personas, así como datos personales relativos a ideología, afiliación sindical, religión, creencias, origen racial, salud y vida sexual. En el caso de que el Usuario incumpla esta obligación, responderá frente a PIZZA HUT y frente a los terceros de los daños y/o perjuicios que se pudiesen ocasionar con motivo del citado incumplimiento.\n\n\nEl acceso a los servicios, productos, contenidos o el registro en cualquiera de los formularios de solicitud de datos personales existentes en nuestra “webhome” se realizará bajo la más completa responsabilidad de los Usuarios. En caso de que se trate de menores de edad o incapaces, se realizará a la entera responsabilidad de sus padres, representantes o tutores legales, debiendo éstos en todo caso, acompañar, supervisar o tomar las precauciones oportunas durante la navegación de aquellos por las páginas web.\n\n\nIgualmente se informa por parte de PIZZA HUT, de la imposibilidad de realizar comprobaciones sobre la veracidad y exactitud de los datos personales proporcionados, por lo que recomienda para los casos de tales actuaciones que supervisen el proceso de registro de sus hijos o tutelados. En su caso, PIZZA HUT., gestionará las solicitudes derivadas del ejercicio, por los padres o tutores, de los derechos de acceso, cancelación, rectificación y oposición de los datos de los menores o incapaces, sin perjuicio de que puede ponerse en contacto con nosotros para realizar las advertencias que considere oportunas, por cualquiera de los medios ya referenciados.\n\n\nAsimismo, el Usuario se obliga a mantener indemne a PIZZA HUT frente a cualquier reclamación que pueda ser interpuesta contra éste por el incumplimiento por el Usuario de las obligaciones recogidas en la presente Política de Privacidad, así como en la legislación vigente en cada momento en materia de protección de datos personales y acepta satisfacer el importe al que, en concepto de sanción, multa, indemnización, daños, perjuicios e intereses pueda ser condenado PIZZA HUT, incluyendo honorarios de abogados, con motivo del citado incumplimiento.\n\n6) Derechos de acceso, rectificación, cancelación y oposición\nDe conformidad con lo establecido en las leyes aplicables, el cliente o usuario queda igualmente informado sobre la posibilidad de ejercer los derechos de acceso, rectificación, cancelación y oposición, en los términos establecidos en la legislación vigente, siendo PIZZA HUT el responsable del fichero automatizado y pudiendo dirigirse por escrito, al Departamento de atención al Cliente de PIZZA HUT o bien mediante correo electrónico a la siguiente dirección: contactoweb@pizzahut.com.ec\n\n7) Seguridad de los datos personales\nPIZZA HUT se compromete al cumplimiento de su obligación de secreto respecto de los datos de carácter personal de los Usuarios y de su deber de guardarlos, y adoptará las medidas de índole técnica y organizativas necesarias que garanticen la seguridad de los datos de carácter personal y eviten su alteración, pérdida, tratamiento o acceso no autorizado, habida cuenta del estado de la tecnología, la naturaleza de los datos almacenados y los riesgos a que están expuestos, ya provengan de la acción humana o del medio físico o natural.\n\n8) Modificaciones de la política de tratamiento de datos personales\nPIZZA HUT se reserva el derecho a modificar, sin necesidad de previo aviso y en cualquier momento, el contenido de todos o algunos de los extremos recogidos en la presente Política de Privacidad con el fin de adecuarlos a la normativa vigente que sea de aplicación en cada momento o bien al funcionamiento o la incorporación de nuevos servicios. En caso de producirse la mencionada modificación, PIZZA HUT se compromete a publicar convenientemente en la página Web la Política de Privacidad modificada o actualizada de forma que esté a disposición de los Usuarios, así como de cualquier otra persona interesada.\n\nLos usuarios consienten que será de aplicación la última Política de Privacidad publicada en la Página web.";
          this.politi = {
            title: "POLÍTICA DE PRIVACIDAD",
            t1: "Responsable de la base de datos",
            p1: "En cumplimiento de la Constitución de la República, lo establecido en la Ley de Comercio Electrónico, Firmas Electrónicas y Mensajes de Datos y demás normas    ecuatorianas aplicables, se informa a los Usuarios de la presente página web, y a su vez éstos consienten expresamente que los datos de carácter personal facilitados a través de la presente página Web https:/www.pizzahut.com.ec (en adelante, la página Web), sean incorporados a la base de datos denominada “USUARIOS WEB”, de responsabilidad de SODETUR S.A. (en adelante PIZZA HUT) con domicilio en Ecuador -excepto en el local de Manta COSTAHUT S.A.-, quien garantiza el pleno cumplimiento de la normativa vigente en materia de protección de datos de carácter personal en cada momento.",
            t2: "Datos que podrán ser recopilados",
            p2: "La vista a esta página Web no supone que el usuario esté obligado a facilitar ninguna información sobre sí mismo. A través de los formularios de la página Web, los usuarios podrán voluntariamente entregar a PIZZA HUT única y exclusivamente aquellos datos necesarios para cumplir con las obligaciones contractuales y demás finalidades descritas en el siguiente punto. Por ejemplo, número de cédula, nombres y apellidos, dirección, edad, número de teléfono, correo electrónico, número de tarjeta de crédito/ débito, información de cuenta de pay-pal, entre otros. Bajo ningún concepto se solicitará al usuario suministrar datos de carácter sensibles.",
            t3: "Finalidad del tratamiento de los datos personales",
            p3: "Efletex informa a los Usuarios y éstos consienten expresamente que los datos personales que voluntariamente suministren a Efletex a través del formulario de registro y formulario de pago ubicado en la página Web sean tratados para cumplir con las obligaciones legales y contractuales asumidas frente a dichos Usuarios, en particular para gestionar el cobro y entrega de su pedido, así como para el envío de comunicaciones comerciales, incluso por medio de correo electrónico o medios electrónicos equivalentes tales como SMS en teléfonos móviles, sobre los productos y/o servicios ofrecidos por la cadena PIZZA HUT, así como por otras empresas afines a nuestras actividades y promociones (ocio, viajes, alimentación, telecomunicaciones, cultura y servicios) que colaboren ahora o en el futuro en las actividades o campañas promocionales que desarrolle PIZZA HUT, y otras empresas afines a nuestras actividades y promociones (ocio, viajes, alimentación, telecomunicaciones, cultura y servicios) que colaboren ahora o en el futuro en las actividades o campañas promocionales que desarrolle PIZZA HUT; así también para adecuar nuestras ofertas comerciales a sus preferencias, a partir del estudio y segmentación de la información personal y comercial que consta en nuestros ficheros como consecuencia de su acceso a la Web , incluso mediante encuestas especialmente dirigidas, tratándose no obstante los mismos en cualquier caso en la forma y con las limitaciones y derechos dentro del marco establecido por la legislación ecuatoriana.\n\nEn el momento de proceder a la recogida de los datos se indicará el carácter voluntario u obligatorio de los datos objeto de recogida. La negativa a proporcionar los datos calificados obligatorios supondrá la no prestación o la imposibilidad de acceder al servicio para los que eran solicitados."
          };
        }
      }, {
        key: "btnSi",
        value: function btnSi() {
          this.modalctrl.dismiss();
          localStorage.setItem("firstTime", "0");
        }
      }]);

      return TerminosComponent;
    }();

    TerminosComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    TerminosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-terminos',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./terminos.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/terminos/terminos.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./terminos.component.scss */
      "./src/app/pages/terminos/terminos.component.scss"))["default"]]
    })], TerminosComponent);
    /***/
  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _pages_terminos_terminos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../pages/terminos/terminos.component */
    "./src/app/pages/terminos/terminos.component.ts");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(http, firestore, modalCtrl) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.firestore = firestore;
        this.modalCtrl = modalCtrl;
        this.historial = [];
      }

      _createClass(AuthService, [{
        key: "login",
        value: function login(credentials) {
          var _this2 = this;

          console.log(credentials);
          console.log(JSON.stringify(credentials));
          return new Promise(function (resolve, reject) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();

            _this2.http.post('https://axela.pythonanywhere.com/api/rest-auth/', credentials, {
              headers: headers
            }).subscribe(function (res) {
              var data = JSON.parse(JSON.stringify(res));
              _this2.id = data.id;
              _this2.token = "token " + data.token;
              _this2.nombre = data.first_name;
              _this2.apellido = data.last_name;
              _this2.correo = data.email;
              _this2.img = "";
              console.log(data);
              resolve("ok");
            }, function (err) {
              console.log(err);
              resolve("bad");
            });
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this3 = this;

          return new Promise(function (resolve, reject) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
            headers = headers.set('content-type', 'application/json').set('Authorization', 'token ' + String(_this3.token));

            _this3.http["delete"]('https://axela.pythonanywhere.com/api/devices/delete/' + String(_this3.id) + '/', {
              headers: headers
            }) //http://127.0.0.1:8000
            .subscribe(function (res) {
              var data = JSON.parse(JSON.stringify(res));
              resolve("ok");
              _this3.nombre = "Invitado";
              _this3.id = "";
              _this3.historial = null; //this.token=""; this.nombre="Invitado"; this.apellido=""; this.correo=""; this.deviceToken="";
            }, function (err) {
              console.log(err);
              resolve("bad");
            });
          });
        }
      }, {
        key: "sendDeviceToken",
        value: function sendDeviceToken() {
          var _this4 = this;

          console.log(this.token);
          console.log(this.deviceToken);
          var req = {
            user: this.id,
            registration_id: this.deviceToken.token,
            type: "android"
          };
          console.log(req);
          return new Promise(function (resolve, reject) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
            headers = headers.set('content-type', 'application/json').set('Authorization', String(_this4.token));

            _this4.http.post('https://axela.pythonanywhere.com/api/devices', req, {
              headers: headers
            }) //http://127.0.0.1:8000
            .subscribe(function (res) {
              var data = JSON.parse(JSON.stringify(res));
              data.forEach(function (element) {
                console.log(element); //Recorrer los elementos del array y extraer la info
              });
              console.log(data);
              resolve("ok");
            }, function (err) {
              console.log(err); //resolve("ok");

              resolve("bad");
            });
          });
        }
      }, {
        key: "registerclient",
        value: function registerclient() {
          var _this5 = this;

          var r = {
            userClient: this.id
          };
          return new Promise(function (resolve, reject) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
            headers = headers.set('content-type', 'application/json'); //.set('Authorization', 'token '+String(this.token));

            _this5.http.post('https://axela.pythonanywhere.com/api/client/', r, {
              headers: headers
            }) //http://127.0.0.1:8000
            .subscribe(function (res) {
              var data = JSON.parse(JSON.stringify(res));
              console.log(data);
              resolve("ok");
            }, function (err) {
              console.log(err);
              resolve("bad");
            });
          });
        }
      }, {
        key: "signUp",
        value: function signUp(credentials) {
          var _this6 = this;

          return new Promise(function (resolve, reject) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
            headers = headers.set('content-type', 'application/json'); //.set('Authorization', 'token '+String(this.token));

            _this6.http.post('https://axela.pythonanywhere.com/api/user/create/', credentials, {
              headers: headers
            }) //http://127.0.0.1:8000
            .subscribe(function (res) {
              var data = JSON.parse(JSON.stringify(res));
              console.log(data);
              resolve("ok");
            }, function (err) {
              console.log(err); //resolve("ok");

              resolve("bad");
            });
          });
        }
      }, {
        key: "sendNotification",
        value: function sendNotification(notificacion) {
          var _this7 = this;

          console.log(notificacion);
          return new Promise(function (resolve, reject) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
            headers = headers.set('Authorization', String(_this7.token));

            _this7.http.post('https://axela.pythonanywhere.com/api/notification/', notificacion, {
              headers: headers
            }) //http://127.0.0.1:8000
            .subscribe(function (res) {
              var data = JSON.parse(JSON.stringify(res));
              console.log(data);
              resolve("ok");
            }, function (err) {
              console.log(err);
              resolve("bad");
            });
          });
        }
      }, {
        key: "getUserInfo",
        value: function getUserInfo(id) {
          var _this8 = this;

          return new Promise(function (resolve, reject) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
            headers = headers.set('content-type', 'application/json').set('Authorization', String(_this8.token));
            console.log(_this8.token);
            console.log(headers);

            _this8.http.get('https://axela.pythonanywhere.com/api/user/' + String(id) + '/', {
              headers: headers
            }) //http://127.0.0.1:8000
            .subscribe(function (res) {
              var data = JSON.parse(JSON.stringify(res));
              console.log(data);
              resolve("ok");
            }, function (err) {
              console.log(err); //resolve("ok");

              resolve("bad");
            });
          });
        }
      }, {
        key: "getTokenGoogle",
        value: function getTokenGoogle(credentials) {
          var _this9 = this;

          return new Promise(function (resolve, reject) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();

            _this9.http.post('https://oauth2.googleapis.com/token', credentials, {
              headers: headers
            }).subscribe(function (res) {
              var data = JSON.parse(JSON.stringify(res));
              _this9.tokenGoogle = data.access_token;
              resolve("ok");
            }, function (err) {
              console.log(err); //resolve("ok");

              resolve("bad");
            });
          });
        }
      }, {
        key: "loginSocial",
        value: function loginSocial(credentials) {
          var _this10 = this;

          console.log(credentials);
          console.log(JSON.stringify(credentials));
          return new Promise(function (resolve, reject) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();

            _this10.http.post('https://axela.pythonanywhere.com/auth/convert-token', credentials, {
              headers: headers
            }) //http://127.0.0.1:8000
            .subscribe(function (res) {
              var data = JSON.parse(JSON.stringify(res));
              _this10.token = "Bearer " + data.access_token;
              if (credentials.userId != "") _this10.loadUserData(credentials.userId, credentials.token);
              console.log(data);
              resolve("ok");
            }, function (err) {
              console.log(err); //resolve("ok");

              resolve("bad");
            });
          });
        }
      }, {
        key: "loadUserData",
        value: function loadUserData(userId, token) {
          var _this11 = this;

          this.http.get("https://graph.facebook.com/" + userId + "?fields=id,name,email&access_token=" + token).subscribe(function (res) {
            console.log(res);
            _this11.nombre = res.name;
            _this11.correo = res.email;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "loginFB",
        value: function loginFB(credentials) {
          var _this12 = this;

          return new Promise(function (resolve, reject) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();

            _this12.http.post('https://axela.pythonanywhere.com/api/login/social/token/', credentials, {
              headers: headers
            }) //http://127.0.0.1:8000
            .subscribe(function (res) {
              var data = JSON.parse(JSON.stringify(res));
              _this12.id = data.id;
              _this12.token = "token " + data.token;
              _this12.nombre = data.first_name;
              _this12.apellido = data.last_name;
              _this12.correo = data.email;
              console.log(data);
              resolve("ok");
            }, function (err) {
              console.log(err);
              resolve("bad");
            });
          });
        }
      }, {
        key: "sendService",
        value: function sendService(notificacion) {
          var _this13 = this;

          console.log(notificacion);
          return new Promise(function (resolve, reject) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
            headers = headers.set('content-type', 'application/json').set('Authorization', String(_this13.token));
            console.log(_this13.token);
            console.log(headers);

            _this13.http.post('https://axela.pythonanywhere.com/api/service/', notificacion, {
              headers: headers
            }) //http://127.0.0.1:8000
            .subscribe(function (res) {
              var data = JSON.parse(JSON.stringify(res));
              console.log(data);
              console.log("pk=" + data.pk);
              resolve("ok");
            }, function (err) {
              console.log(err); //resolve("ok");

              resolve("bad");
            });
          });
        }
      }, {
        key: "getRecordService",
        value: function getRecordService() {
          var _this14 = this;

          return new Promise(function (resolve, reject) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
            headers = headers.set('content-type', 'application/json').set('Authorization', String(_this14.token));
            console.log(_this14.token);
            console.log(headers);

            _this14.http.get('https://axela.pythonanywhere.com/api/recordService/' + String(_this14.id) + '/1/', {
              headers: headers
            }) //http://127.0.0.1:8000
            .subscribe(function (res) {
              var data = JSON.parse(JSON.stringify(res));
              data.forEach(function (element) {
                //console.log(element) //Recorrer los elementos del array y extraer la info
                _this14.historial.push(element);
              });
              resolve("ok");
            }, function (err) {
              console.log(err); //resolve("ok");

              resolve("bad");
            });
          });
        }
      }, {
        key: "getPoliticas",
        value: function getPoliticas() {
          console.log("POLITICAS:");
          this.presentModal();
        }
      }, {
        key: "presentModal",
        value: function presentModal() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var modal;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.modalCtrl.create({
                      component: _pages_terminos_terminos_component__WEBPACK_IMPORTED_MODULE_5__["TerminosComponent"],
                      cssClass: 'TermsModal',
                      componentProps: {},
                      swipeToClose: true
                    });

                  case 2:
                    modal = _context6.sent;
                    _context6.next = 5;
                    return modal.present();

                  case 5:
                    return _context6.abrupt("return", _context6.sent);

                  case 6:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "getHistorial",
        value: function getHistorial() {
          return this.historial;
        }
      }, {
        key: "getNombre",
        value: function getNombre() {
          return this.nombre;
        }
      }, {
        key: "getApellido",
        value: function getApellido() {
          return this.apellido;
        }
      }, {
        key: "getCorreo",
        value: function getCorreo() {
          return this.correo;
        }
      }, {
        key: "getImg",
        value: function getImg() {
          return this.img;
        }
      }, {
        key: "getId",
        value: function getId() {
          return this.id;
        }
      }, {
        key: "postDataAPI",
        value: function postDataAPI(any) {
          this.serviciosCollection.add(any);
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }];
    };

    AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/services/fcm.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/fcm.service.ts ***!
    \*****************************************/

  /*! exports provided: FcmService */

  /***/
  function srcAppServicesFcmServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FcmService", function () {
      return FcmService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var _share_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./share-data.service */
    "./src/app/services/share-data.service.ts");
    /* harmony import */


    var _components_notification_driver_notification_driver_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../components/notification-driver/notification-driver.component */
    "./src/app/components/notification-driver/notification-driver.component.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _components_calificar_driver_calificar_driver_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../components/calificar-driver/calificar-driver.component */
    "./src/app/components/calificar-driver/calificar-driver.component.ts");
    /* harmony import */


    var _loading_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./loading.service */
    "./src/app/services/loading.service.ts"); //Para las push notifications


    var PushNotifications = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"].PushNotifications; //Compartir la data a traves de un service

    var FcmService = /*#__PURE__*/function () {
      function FcmService(router, shareData, popoverController, authService, loadingservice) {
        _classCallCheck(this, FcmService);

        this.router = router;
        this.shareData = shareData;
        this.popoverController = popoverController;
        this.authService = authService;
        this.loadingservice = loadingservice;
      }

      _createClass(FcmService, [{
        key: "initPush",
        value: function initPush() {
          if (_capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Capacitor"].platform !== 'web') {
            this.registerPush();
          }
        }
      }, {
        key: "registerPush",
        value: function registerPush() {
          var _this15 = this;

          /*
          * Solicitar permiso para usar notificaciones push
          * iOS solicitará al usuario y regresará si les concedió permiso o no
          * Android sólo concederá sin preguntar
          */
          PushNotifications.requestPermission().then(function (permission) {
            if (permission.granted) {
              //  Regístrese en Apple / Google para recibir push a través de APNS/FCM
              PushNotifications.register();
            } else {
              // Manejo de errores
              console.error("ERROR> Linea 42 home.page.ts");
            }
          });
          PushNotifications.addListener('registration', function (token) {
            //alert('Push registration success, token: ' + token.value);
            console.log('My token: ' + JSON.stringify(token)); //Enviar post con el token

            _this15.a = token.value.toString();
            _this15.as = {
              token: _this15.a
            };
            _this15.authService.deviceToken = _this15.as; //alert('Push registration success, token: ' + token.value);
            //console.log(token)

            _this15.authService.postDataAPI(_this15.as);
          });
          PushNotifications.addListener('registrationError', function (error) {
            alert('Error on registration: ' + JSON.stringify(error));
          });
          /*En share data se almacena la data para la nueva ventana */

          PushNotifications.addListener('pushNotificationReceived', function (notification) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this15, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var notObjeto;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      if (parseInt(notification.data.tipoNotificacion) == 0) {
                        console.log('ActionPerformed, data: ' + JSON.stringify(notification.notification));
                        notObjeto = {
                          'title': notification.body,
                          'nombre:': notification.data.nombreConductor,
                          'apellido': notification.data.apellidoConductor,
                          'calificacion': notification.data.calificacionConductor,
                          'telefono': notification.data.telefonoConductor,
                          'modelo': notification.data.modeloVehiculo,
                          'placa': notification.data.placaVehiculo,
                          'color': notification.data.colorVehiculo,
                          'inicioCoords': notification.data.inicioCoords,
                          'finCoords': notification.data.finCoords,
                          'idConductor': notification.data.idConductor
                        };
                        localStorage.setItem('idConductor', notification.data.idConductor);
                        this.shareData.nombreNot$.emit(JSON.stringify(notification));
                        console.log(notObjeto);
                        this.shareData.notObj$.emit(notObjeto);
                        this.shareData.notificacion = notification;
                        this.shareData.detallesDriver = notification; //this.presentAlertConfirm(notification);

                        this.loadingservice.hideLoader();
                        this.router.navigate(['/detalle-servicio']); //this.presentPopoverDetalle(notification);
                      } else if (parseInt(notification.data.tipoNotificacion) == 1) {
                        this.presentPopoverCalificacion();
                      }

                    case 1:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          });
          PushNotifications.addListener('pushNotificationActionPerformed', function (notification) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this15, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var notObjeto;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      if (parseInt(notification.notification.data.tipoNotificacion) == 0) {
                        console.log('ActionPerformed, data: ' + JSON.stringify(notification.notification));
                        this.router.navigateByUrl("/acerca");
                        notObjeto = {
                          'title': notification.notification.body,
                          'nombre:': notification.notification.data.nombreConductor,
                          'apellido': notification.notification.data.apellidoConductor,
                          'calificacion': notification.notification.data.calificacionConductor,
                          'telefono': notification.notification.data.telefonoConductor,
                          'vehiculo': notification.notification.data.vehiculoConductor,
                          'modelo': notification.notification.data.modeloVehiculo,
                          'placa': notification.notification.data.placaVehiculo,
                          'color': notification.notification.data.colorVehiculo,
                          'inicioCoords': notification.notification.data.inicioCoords,
                          'finCoords': notification.notification.data.finCoords,
                          'idConductor': notification.notification.data.idConductor
                        };
                        localStorage.setItem('idConductor', notification.notification.data.idConductor);
                        this.shareData.nombreNot$.emit(JSON.stringify(notification.notification));
                        this.shareData.notObj$.emit(notObjeto);
                        this.shareData.notificacion = notification.notification;
                        this.shareData.detallesDriver = notification.notification;
                        this.shareData.idConductor = notification.notification.data.idConductor; //this.presentAlertConfirm(notification);

                        this.loadingservice.hideLoader();
                        this.router.navigate(['/detalle-servicio']); //this.presentPopoverDetalle(notification);
                      } else if (parseInt(notification.notification.data.tipoNotificacion) == 1) {
                        this.presentPopoverCalificacion();
                      }

                    case 1:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          });
        }
      }, {
        key: "presentPopoverDetalle",
        value: function presentPopoverDetalle(notification) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var title, body, apellido, popover;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    title = notification.title;
                    body = notification.body;
                    apellido = notification.data.apellidoConductor; //let idCliente = notification.data.idCliente;

                    _context9.next = 5;
                    return this.popoverController.create({
                      component: _components_notification_driver_notification_driver_component__WEBPACK_IMPORTED_MODULE_5__["NotificationDriverComponent"],
                      cssClass: 'servicioasignado',
                      componentProps: {
                        title: title,
                        body: body,
                        apellido: apellido //idCliente: idCliente

                      },
                      mode: "md",
                      translucent: true,
                      backdropDismiss: false
                    });

                  case 5:
                    popover = _context9.sent;
                    _context9.next = 8;
                    return popover.present();

                  case 8:
                    return _context9.abrupt("return", _context9.sent);

                  case 9:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "presentPopoverCalificacion",
        value: function presentPopoverCalificacion() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var popover;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.popoverController.create({
                      component: _components_calificar_driver_calificar_driver_component__WEBPACK_IMPORTED_MODULE_8__["CalificarDriverComponent"],
                      cssClass: 'servicioasignado',
                      componentProps: {},
                      mode: "md",
                      translucent: true,
                      backdropDismiss: false
                    });

                  case 2:
                    popover = _context10.sent;
                    _context10.next = 5;
                    return popover.present();

                  case 5:
                    return _context10.abrupt("return", _context10.sent);

                  case 6:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }]);

      return FcmService;
    }();

    FcmService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _share_data_service__WEBPACK_IMPORTED_MODULE_4__["ShareDataService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
      }, {
        type: _loading_service__WEBPACK_IMPORTED_MODULE_9__["LoadingService"]
      }];
    };

    FcmService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], FcmService);
    /***/
  },

  /***/
  "./src/app/services/loading.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/loading.service.ts ***!
    \*********************************************/

  /*! exports provided: LoadingService */

  /***/
  function srcAppServicesLoadingServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingService", function () {
      return LoadingService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js"); //Loader


    var LoadingService = /*#__PURE__*/function () {
      function LoadingService(loadingController) {
        _classCallCheck(this, LoadingService);

        this.loadingController = loadingController;
        this.isLoading = false;
      }

      _createClass(LoadingService, [{
        key: "showHideAutoLoader",
        value: function showHideAutoLoader() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            var loading, _yield$loading$onDidD, role, data;

            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return this.loadingController.create({
                      message: 'This Loader Will Auto Hide in 2 Seconds',
                      duration: 2000
                    });

                  case 2:
                    loading = _context11.sent;
                    _context11.next = 5;
                    return loading.present();

                  case 5:
                    _context11.next = 7;
                    return loading.onDidDismiss();

                  case 7:
                    _yield$loading$onDidD = _context11.sent;
                    role = _yield$loading$onDidD.role;
                    data = _yield$loading$onDidD.data;
                    console.log('Loading dismissed! after 2 Seconds', {
                      role: role,
                      data: data
                    });

                  case 11:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        } // Show the loader for infinite time

      }, {
        key: "showLoader",
        value: function showLoader() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            var _this16 = this;

            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    this.isLoading = true;
                    _context12.next = 3;
                    return this.loadingController.create({
                      message: 'Por favor espere...'
                    }).then(function (res) {
                      res.present().then(function () {
                        if (!_this16.isLoading) {
                          res.dismiss();
                        }
                      });
                    });

                  case 3:
                    return _context12.abrupt("return", _context12.sent);

                  case 4:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        } // Hide the loader if already created otherwise return error

      }, {
        key: "hideLoader",
        value: function hideLoader() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
            var _this17 = this;

            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    if (!this.isLoading) {
                      _context13.next = 5;
                      break;
                    }

                    this.isLoading = false;
                    _context13.next = 4;
                    return this.loadingController.getTop().then(function (loaderObj) {
                      if (loaderObj) {
                        _this17.isLoading = false;

                        _this17.loadingController.dismiss().then(function (res) {
                          console.log('Loading dismissed!', res);
                        })["catch"](function (error) {
                          console.error('error', error);
                        });

                        ;
                      }
                    });

                  case 4:
                    return _context13.abrupt("return", _context13.sent);

                  case 5:
                    return _context13.abrupt("return", null);

                  case 6:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
      }]);

      return LoadingService;
    }();

    LoadingService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }];
    };

    LoadingService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LoadingService);
    /***/
  },

  /***/
  "./src/app/services/share-data.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/share-data.service.ts ***!
    \************************************************/

  /*! exports provided: ShareDataService */

  /***/
  function srcAppServicesShareDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShareDataService", function () {
      return ShareDataService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ShareDataService = function ShareDataService() {
      _classCallCheck(this, ShareDataService);

      //notificacion:{}=null;
      this.notificacion = {}; //datos presentar detalleMapa

      this.detallesDriver = {}; //Direcciones en String

      this.inicio = {};
      this.fin = {}; //Es un Observable

      this.nombreNot$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); //Es un observable

      this.notObj$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    };

    ShareDataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ShareDataService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment, firebaseConfig */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "firebaseConfig", function () {
      return firebaseConfig;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    var firebaseConfig = {
      apiKey: "AIzaSyD1yk1QZHkYQWxO-JZ5idDHcfHpkKzf0tg",
      authDomain: "vehicular-287023.firebaseapp.com",
      databaseURL: "https://vehicular-287023.firebaseio.com",
      projectId: "vehicular-287023",
      storageBucket: "vehicular-287023.appspot.com",
      messagingSenderId: "627980958884",
      appId: "1:627980958884:web:cb5f8282b9c070ed98fa31",
      measurementId: "G-VEXRE2PD6G"
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\medin\Documents\ESPOL\Software1\DEV\Vehicular\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map