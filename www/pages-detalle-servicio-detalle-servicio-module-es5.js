function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-detalle-servicio-detalle-servicio-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detalle-servicio/detalle-servicio.page.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detalle-servicio/detalle-servicio.page.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDetalleServicioDetalleServicioPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar class=\"toolbar-bg\">\r\n    <div class=\"toolbar-content\">\r\n      <ion-button fill=\"clear\" slot=\"start\">\r\n        <ion-menu-button color=\"light\" slot=\"start\"></ion-menu-button>\r\n      </ion-button>\r\n\r\n\r\n      <ion-title class=\"ion-text-center\" text-capitalize>\r\n        Servicio en curso\r\n      </ion-title>\r\n\r\n\r\n      <ion-avatar>\r\n        <img src=\"assets/icon/avatar.png\">\r\n      </ion-avatar>\r\n\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div id=\"mapaViaje\"></div>\r\n  <div id=\"header\">\r\n    <h5>DETALLE DEL SERVICIO</h5>\r\n  </div>\r\n\r\n  <div id=\"content\">\r\n    <ion-row><strong>Nombre: </strong>  {{shareData.detallesDriver.data.nombreConductor}} {{shareData.detallesDriver.data.apellidoConductor}}</ion-row>\r\n    <ion-row><strong>Calificacion: </strong>  {{shareData.detallesDriver.data.calificacionConductor}}</ion-row>\r\n    <ion-row><strong>Celular: </strong>  {{shareData.detallesDriver.data.telefonoConductor}}</ion-row>\r\n    \r\n    <ion-row><strong>Modelo del vehículo: </strong>  {{shareData.detallesDriver.data.modeloVehiculo}}</ion-row>\r\n    <ion-row><strong>Placa del vehículo: </strong>  {{shareData.detallesDriver.data.placaVehiculo}}</ion-row>\r\n    <ion-row><strong>Color del vehículo: </strong>  {{shareData.detallesDriver.data.colorVehiculo}}</ion-row>\r\n  </div>\r\n\r\n  <!-- fab que contiene los botones para chat y llamada -->\r\n  <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\r\n    <ion-fab-button color=\"light\">\r\n      <ion-icon name=\"share\"></ion-icon>\r\n    </ion-fab-button>\r\n    <ion-fab-list side=\"top\">\r\n      <ion-fab-button color=\"primary\" (click)=\"chatWithClient()\">\r\n        <ion-icon name=\"chatbubble-outline\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab-list>\r\n    \r\n    <ion-fab-list side=\"start\">\r\n      <ion-fab-button color=\"light\" (click)=\"callByCellphone()\">\r\n        <ion-icon name=\"call-outline\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab-list>\r\n  </ion-fab>\r\n  \r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/detalle-servicio/detalle-servicio-routing.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/detalle-servicio/detalle-servicio-routing.module.ts ***!
    \***************************************************************************/

  /*! exports provided: DetalleServicioPageRoutingModule */

  /***/
  function srcAppPagesDetalleServicioDetalleServicioRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetalleServicioPageRoutingModule", function () {
      return DetalleServicioPageRoutingModule;
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


    var _detalle_servicio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./detalle-servicio.page */
    "./src/app/pages/detalle-servicio/detalle-servicio.page.ts");

    var routes = [{
      path: '',
      component: _detalle_servicio_page__WEBPACK_IMPORTED_MODULE_3__["DetalleServicioPage"]
    }];

    var DetalleServicioPageRoutingModule = function DetalleServicioPageRoutingModule() {
      _classCallCheck(this, DetalleServicioPageRoutingModule);
    };

    DetalleServicioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DetalleServicioPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/detalle-servicio/detalle-servicio.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/detalle-servicio/detalle-servicio.module.ts ***!
    \*******************************************************************/

  /*! exports provided: DetalleServicioPageModule */

  /***/
  function srcAppPagesDetalleServicioDetalleServicioModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetalleServicioPageModule", function () {
      return DetalleServicioPageModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _detalle_servicio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./detalle-servicio-routing.module */
    "./src/app/pages/detalle-servicio/detalle-servicio-routing.module.ts");
    /* harmony import */


    var _detalle_servicio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./detalle-servicio.page */
    "./src/app/pages/detalle-servicio/detalle-servicio.page.ts");

    var DetalleServicioPageModule = function DetalleServicioPageModule() {
      _classCallCheck(this, DetalleServicioPageModule);
    };

    DetalleServicioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _detalle_servicio_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetalleServicioPageRoutingModule"]],
      declarations: [_detalle_servicio_page__WEBPACK_IMPORTED_MODULE_6__["DetalleServicioPage"]]
    })], DetalleServicioPageModule);
    /***/
  },

  /***/
  "./src/app/pages/detalle-servicio/detalle-servicio.page.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/detalle-servicio/detalle-servicio.page.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDetalleServicioDetalleServicioPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content #mapaViaje {\n  width: 100%;\n  height: 50%;\n  opacity: 0;\n  transition: opacity 150ms ease-in;\n}\nion-content #mapaViaje.show-map {\n  opacity: 1;\n}\n#header {\n  text-align: left;\n  background: linear-gradient(-90deg, #20478B, #2487C9);\n  color: white;\n  font-size: 12px;\n  height: 50px;\n  padding-top: 3px;\n  padding-left: 5px;\n  /* h5{\n  height: 100%;    \n  background: linear-gradient(#20478c ,#2485c9);\n  color:white;\n  }*/\n}\n#confirmar {\n  --background: #E5242F;\n  width: 100%;\n}\n#finalizar {\n  --background: #808289;\n  width: 100%;\n}\n.detalles {\n  font-weight: bold;\n}\n#botones {\n  display: grid;\n  width: 100%;\n  grid-template-rows: repeat(2, 50%);\n  justify-content: space-evenly;\n  align-content: center;\n}\n#content {\n  display: grid;\n  width: 90%;\n  height: 40%;\n  padding-left: 5%;\n  font-size: 16px;\n  grid-template-rows: 24px 24px repeat(3, 20px);\n  justify-content: center;\n  align-content: center;\n  grid-row: row gap 10px;\n}\n#chatbubble {\n  --padding-top: 15px;\n}\n#chatbubbleF {\n  padding-left: 15px;\n}\nion-fab-button {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGV0YWxsZS1zZXJ2aWNpby9DOlxcVXNlcnNcXG1lZGluXFxEZXNrdG9wXFxEaXN0cmlidWlkb3Mvc3JjXFxhcHBcXHBhZ2VzXFxkZXRhbGxlLXNlcnZpY2lvXFxkZXRhbGxlLXNlcnZpY2lvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZGV0YWxsZS1zZXJ2aWNpby9kZXRhbGxlLXNlcnZpY2lvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGlDQUFBO0FDQVI7QURDUTtFQUNJLFVBQUE7QUNDWjtBRElBO0VBQ0ksZ0JBQUE7RUFDQSxxREFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQTs7OztJQUFBO0FDR0o7QURJQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtBQ0RKO0FESUE7RUFDSSxxQkFBQTtFQUNBLFdBQUE7QUNESjtBRElBO0VBQ0ksaUJBQUE7QUNESjtBRElBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxrQ0FBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7QUNESjtBRElBO0VBQ0ksYUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsNkNBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBRUEsc0JBQUE7QUNGSjtBREtBO0VBQ0ksbUJBQUE7QUNGSjtBREtBO0VBQ0ksa0JBQUE7QUNGSjtBREtBO0VBQ0ksV0FBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGV0YWxsZS1zZXJ2aWNpby9kZXRhbGxlLXNlcnZpY2lvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgICNtYXBhVmlhamUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNTAlO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTBtcyBlYXNlLWluO1xyXG4gICAgICAgICYuc2hvdy1tYXAge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuI2hlYWRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC05MGRlZywgIzIwNDc4QiwgIzI0ODdDOSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAvKiBoNXtcclxuICAgIGhlaWdodDogMTAwJTsgICAgXHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzIwNDc4YyAsIzI0ODVjOSk7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIH0qL1xyXG59XHJcblxyXG4jY29uZmlybWFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogI0U1MjQyRjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4jZmluYWxpemFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzgwODI4OTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZGV0YWxsZXMge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbiNib3RvbmVzIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDUwJSk7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuI2NvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDQwJTtcclxuICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDI0cHggMjRweCByZXBlYXQoMywgMjBweCk7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC8vYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdyaWQtcm93OiByb3cgZ2FwIDEwcHg7XHJcbn1cclxuXHJcbiNjaGF0YnViYmxlIHtcclxuICAgIC0tcGFkZGluZy10b3A6IDE1cHg7XHJcbn1cclxuXHJcbiNjaGF0YnViYmxlRiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbmlvbi1mYWItYnV0dG9uIHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG59IiwiaW9uLWNvbnRlbnQgI21hcGFWaWFqZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwJTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTBtcyBlYXNlLWluO1xufVxuaW9uLWNvbnRlbnQgI21hcGFWaWFqZS5zaG93LW1hcCB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbiNoZWFkZXIge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCAjMjA0NzhCLCAjMjQ4N0M5KTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEycHg7XG4gIGhlaWdodDogNTBweDtcbiAgcGFkZGluZy10b3A6IDNweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIC8qIGg1e1xuICBoZWlnaHQ6IDEwMCU7ICAgIFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzIwNDc4YyAsIzI0ODVjOSk7XG4gIGNvbG9yOndoaXRlO1xuICB9Ki9cbn1cblxuI2NvbmZpcm1hciB7XG4gIC0tYmFja2dyb3VuZDogI0U1MjQyRjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiNmaW5hbGl6YXIge1xuICAtLWJhY2tncm91bmQ6ICM4MDgyODk7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZGV0YWxsZXMge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI2JvdG9uZXMge1xuICBkaXNwbGF5OiBncmlkO1xuICB3aWR0aDogMTAwJTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgNTAlKTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI2NvbnRlbnQge1xuICBkaXNwbGF5OiBncmlkO1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDQwJTtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDI0cHggMjRweCByZXBlYXQoMywgMjBweCk7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGdyaWQtcm93OiByb3cgZ2FwIDEwcHg7XG59XG5cbiNjaGF0YnViYmxlIHtcbiAgLS1wYWRkaW5nLXRvcDogMTVweDtcbn1cblxuI2NoYXRidWJibGVGIHtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuXG5pb24tZmFiLWJ1dHRvbiB7XG4gIG1hcmdpbjogNXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/detalle-servicio/detalle-servicio.page.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/detalle-servicio/detalle-servicio.page.ts ***!
    \*****************************************************************/

  /*! exports provided: DetalleServicioPage */

  /***/
  function srcAppPagesDetalleServicioDetalleServicioPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetalleServicioPage", function () {
      return DetalleServicioPage;
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
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");

    var DetalleServicioPage = /*#__PURE__*/function () {
      function DetalleServicioPage(geolocation, alertController, shareData, router, firestore, popoverController) {
        _classCallCheck(this, DetalleServicioPage);

        this.geolocation = geolocation;
        this.alertController = alertController;
        this.shareData = shareData;
        this.router = router;
        this.firestore = firestore;
        this.popoverController = popoverController;
        this.mapa = null;
        this.marker = null;
        this.markerD = null; //Numero del Cliente, debe llegar en la notificacion

        this.numberClient = "0989878654";
        this.directionsService = new google.maps.DirectionsService();
        this.directionsDisplay = new google.maps.DirectionsRenderer();
        this.nombreNot = "";
        this.notObj = {};
        this.idConductor = localStorage.getItem('idConductor');
        console.log(this.idConductor);
      }

      _createClass(DetalleServicioPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.loadMap();
          this.watchPosition();
          this.watchDriverPos(this.idConductor);
        }
      }, {
        key: "loadMap",
        value: function loadMap() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var mapEle, indicatorsEle;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    // create a new map by passing HTMLElement
                    mapEle = document.getElementById('mapaViaje');
                    indicatorsEle = document.getElementById('indicators'); // create map

                    _context.next = 4;
                    return new google.maps.Map(mapEle, {
                      zoom: 17,
                      zoomControl: false,
                      mapTypeControl: false,
                      streetViewControl: false,
                      fullscreenControl: false
                    });

                  case 4:
                    this.mapa = _context.sent;
                    _context.next = 7;
                    return this.directionsDisplay.setMap(this.mapa);

                  case 7:
                    _context.next = 9;
                    return google.maps.event.addListenerOnce(this.mapa, 'idle', function () {
                      mapEle.classList.add('show-map');

                      _this.calculateRoute(_this.shareData.notificacion.data.inicioCoords, _this.shareData.notificacion.data.finCoords);
                    });

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "calculateRoute",
        value: function calculateRoute(ini, fin) {
          var _this2 = this;

          this.directionsService.route({
            origin: JSON.parse(ini),
            destination: JSON.parse(fin),
            travelMode: google.maps.TravelMode.DRIVING
          }, function (response, status) {
            if (status === google.maps.DirectionsStatus.OK) {
              _this2.directionsDisplay.setDirections(response);
            } else {
              alert('No se pudo cargar el mapa ' + status);
            }
          });
        }
      }, {
        key: "watchPosition",
        value: function watchPosition() {
          var _this3 = this;

          this.watch = this.geolocation.watchPosition();
          this.watch.subscribe(function (data) {
            if (_this3.marker != null) {
              _this3.marker.setMap(null);

              console.log("entro");
            }

            if ("coords" in data) {
              var lat = data.coords.latitude;
              var lng = data.coords.longitude;
              console.log("latitud " + lat);
              console.log("longitud " + lng);
              var latLng = new google.maps.LatLng(lat, lng);
              _this3.marker = new google.maps.Marker({
                map: _this3.mapa,
                icon: new google.maps.MarkerImage('https://maps.gstatic.com/mapfiles/mobile/mobileimgs2.png', new google.maps.Size(22, 22), new google.maps.Point(0, 18), new google.maps.Point(11, 11)),
                position: latLng
              });
            } else {
              console.log("ERROR WATCH POSITION");
            }
          });
        }
      }, {
        key: "watchDriverPos",
        value: function watchDriverPos(id) {
          var _this4 = this;

          this.PositionD = this.firestore.doc("/posicion/".concat(id)).valueChanges();
          this.PositionD.subscribe(function (val) {
            console.log(val.location);
            var myLatLng = {
              lat: JSON.parse(val.location).lat,
              lng: JSON.parse(val.location).lng
            };
            _this4.markerD = new google.maps.Marker({
              map: _this4.mapa,
              icon: new google.maps.MarkerImage('assets/icon/pointer_proveed.png', null, null, null, new google.maps.Size(34, 45)),
              position: myLatLng
            });
          });
        }
      }]);

      return DetalleServicioPage;
    }();

    DetalleServicioPage.ctorParameters = function () {
      return [{
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: src_app_services_share_data_service__WEBPACK_IMPORTED_MODULE_4__["ShareDataService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
      }];
    };

    DetalleServicioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-detalle-servicio',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./detalle-servicio.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detalle-servicio/detalle-servicio.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./detalle-servicio.page.scss */
      "./src/app/pages/detalle-servicio/detalle-servicio.page.scss"))["default"]]
    })], DetalleServicioPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-detalle-servicio-detalle-servicio-module-es5.js.map