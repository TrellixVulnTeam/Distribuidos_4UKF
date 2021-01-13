(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-detalle-servicio-detalle-servicio-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detalle-servicio/detalle-servicio.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detalle-servicio/detalle-servicio.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar class=\"toolbar-bg\">\r\n    <div class=\"toolbar-content\">\r\n      <ion-button fill=\"clear\" slot=\"start\">\r\n        <ion-menu-button color=\"light\" slot=\"start\"></ion-menu-button>\r\n      </ion-button>\r\n\r\n\r\n      <ion-title class=\"ion-text-center\" text-capitalize>\r\n        Servicio en curso\r\n      </ion-title>\r\n\r\n\r\n      <ion-avatar>\r\n        <img src=\"assets/icon/avatar.png\">\r\n      </ion-avatar>\r\n\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div id=\"mapaViaje\"></div>\r\n  <div id=\"header\">\r\n    <h5>DETALLE DEL SERVICIO</h5>\r\n  </div>\r\n\r\n  <div id=\"content\">\r\n    <ion-row><strong>Nombre: </strong>  {{shareData.detallesDriver.data.nombreConductor}} {{shareData.detallesDriver.data.apellidoConductor}}</ion-row>\r\n    <ion-row><strong>Calificacion: </strong>  {{shareData.detallesDriver.data.calificacionConductor}}</ion-row>\r\n    <ion-row><strong>Celular: </strong>  {{shareData.detallesDriver.data.telefonoConductor}}</ion-row>\r\n    \r\n    <ion-row><strong>Modelo del vehículo: </strong>  {{shareData.detallesDriver.data.modeloVehiculo}}</ion-row>\r\n    <ion-row><strong>Placa del vehículo: </strong>  {{shareData.detallesDriver.data.placaVehiculo}}</ion-row>\r\n    <ion-row><strong>Color del vehículo: </strong>  {{shareData.detallesDriver.data.colorVehiculo}}</ion-row>\r\n  </div>\r\n\r\n  <!-- fab que contiene los botones para chat y llamada -->\r\n  <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\r\n    <ion-fab-button color=\"light\">\r\n      <ion-icon name=\"share\"></ion-icon>\r\n    </ion-fab-button>\r\n    <ion-fab-list side=\"top\">\r\n      <ion-fab-button color=\"primary\" (click)=\"chatWithClient()\">\r\n        <ion-icon name=\"chatbubble-outline\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab-list>\r\n    \r\n    <ion-fab-list side=\"start\">\r\n      <ion-fab-button color=\"light\" (click)=\"callByCellphone()\">\r\n        <ion-icon name=\"call-outline\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab-list>\r\n  </ion-fab>\r\n  \r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/detalle-servicio/detalle-servicio-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/detalle-servicio/detalle-servicio-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: DetalleServicioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleServicioPageRoutingModule", function() { return DetalleServicioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _detalle_servicio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detalle-servicio.page */ "./src/app/pages/detalle-servicio/detalle-servicio.page.ts");




const routes = [
    {
        path: '',
        component: _detalle_servicio_page__WEBPACK_IMPORTED_MODULE_3__["DetalleServicioPage"]
    }
];
let DetalleServicioPageRoutingModule = class DetalleServicioPageRoutingModule {
};
DetalleServicioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetalleServicioPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/detalle-servicio/detalle-servicio.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/detalle-servicio/detalle-servicio.module.ts ***!
  \*******************************************************************/
/*! exports provided: DetalleServicioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleServicioPageModule", function() { return DetalleServicioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _detalle_servicio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detalle-servicio-routing.module */ "./src/app/pages/detalle-servicio/detalle-servicio-routing.module.ts");
/* harmony import */ var _detalle_servicio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detalle-servicio.page */ "./src/app/pages/detalle-servicio/detalle-servicio.page.ts");







let DetalleServicioPageModule = class DetalleServicioPageModule {
};
DetalleServicioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _detalle_servicio_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetalleServicioPageRoutingModule"]
        ],
        declarations: [_detalle_servicio_page__WEBPACK_IMPORTED_MODULE_6__["DetalleServicioPage"]]
    })
], DetalleServicioPageModule);



/***/ }),

/***/ "./src/app/pages/detalle-servicio/detalle-servicio.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/detalle-servicio/detalle-servicio.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content #mapaViaje {\n  width: 100%;\n  height: 50%;\n  opacity: 0;\n  transition: opacity 150ms ease-in;\n}\nion-content #mapaViaje.show-map {\n  opacity: 1;\n}\n#header {\n  text-align: left;\n  background: linear-gradient(-90deg, #20478B, #2487C9);\n  color: white;\n  font-size: 12px;\n  height: 50px;\n  padding-top: 3px;\n  padding-left: 5px;\n  /* h5{\n  height: 100%;    \n  background: linear-gradient(#20478c ,#2485c9);\n  color:white;\n  }*/\n}\n#confirmar {\n  --background: #E5242F;\n  width: 100%;\n}\n#finalizar {\n  --background: #808289;\n  width: 100%;\n}\n.detalles {\n  font-weight: bold;\n}\n#botones {\n  display: grid;\n  width: 100%;\n  grid-template-rows: repeat(2, 50%);\n  justify-content: space-evenly;\n  align-content: center;\n}\n#content {\n  display: grid;\n  width: 90%;\n  height: 40%;\n  padding-left: 5%;\n  font-size: 16px;\n  grid-template-rows: 24px 24px repeat(3, 20px);\n  justify-content: center;\n  align-content: center;\n  grid-row: row gap 10px;\n}\n#chatbubble {\n  --padding-top: 15px;\n}\n#chatbubbleF {\n  padding-left: 15px;\n}\nion-fab-button {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGV0YWxsZS1zZXJ2aWNpby9DOlxcVXNlcnNcXG1lZGluXFxEb2N1bWVudHNcXEVTUE9MXFxTb2Z0d2FyZTFcXERFVlxcVmVoaWN1bGFyL3NyY1xcYXBwXFxwYWdlc1xcZGV0YWxsZS1zZXJ2aWNpb1xcZGV0YWxsZS1zZXJ2aWNpby5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2RldGFsbGUtc2VydmljaW8vZGV0YWxsZS1zZXJ2aWNpby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxpQ0FBQTtBQ0FSO0FEQ1E7RUFDSSxVQUFBO0FDQ1o7QURJQTtFQUNJLGdCQUFBO0VBQ0EscURBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0E7Ozs7SUFBQTtBQ0dKO0FESUE7RUFDSSxxQkFBQTtFQUNBLFdBQUE7QUNESjtBRElBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0FDREo7QURJQTtFQUNJLGlCQUFBO0FDREo7QURJQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0NBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0FDREo7QURJQTtFQUNJLGFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDZDQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUVBLHNCQUFBO0FDRko7QURLQTtFQUNJLG1CQUFBO0FDRko7QURLQTtFQUNJLGtCQUFBO0FDRko7QURLQTtFQUNJLFdBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RldGFsbGUtc2VydmljaW8vZGV0YWxsZS1zZXJ2aWNpby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAjbWFwYVZpYWplIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMTUwbXMgZWFzZS1pbjtcclxuICAgICAgICAmLnNob3ctbWFwIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiNoZWFkZXIge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtOTBkZWcsICMyMDQ3OEIsICMyNDg3QzkpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDNweDtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgLyogaDV7XHJcbiAgICBoZWlnaHQ6IDEwMCU7ICAgIFxyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMyMDQ3OGMgLCMyNDg1YzkpO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICB9Ki9cclxufVxyXG5cclxuI2NvbmZpcm1hciB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNFNTI0MkY7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuI2ZpbmFsaXphciB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM4MDgyODk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmRldGFsbGVzIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4jYm90b25lcyB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCA1MCUpO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbiNjb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA0MCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyNHB4IDI0cHggcmVwZWF0KDMsIDIwcHgpO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAvL2FsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBncmlkLXJvdzogcm93IGdhcCAxMHB4O1xyXG59XHJcblxyXG4jY2hhdGJ1YmJsZSB7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAxNXB4O1xyXG59XHJcblxyXG4jY2hhdGJ1YmJsZUYge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG5pb24tZmFiLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDVweDtcclxufSIsImlvbi1jb250ZW50ICNtYXBhVmlhamUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MCU7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMTUwbXMgZWFzZS1pbjtcbn1cbmlvbi1jb250ZW50ICNtYXBhVmlhamUuc2hvdy1tYXAge1xuICBvcGFjaXR5OiAxO1xufVxuXG4jaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC05MGRlZywgIzIwNDc4QiwgIzI0ODdDOSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICAvKiBoNXtcbiAgaGVpZ2h0OiAxMDAlOyAgICBcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMyMDQ3OGMgLCMyNDg1YzkpO1xuICBjb2xvcjp3aGl0ZTtcbiAgfSovXG59XG5cbiNjb25maXJtYXIge1xuICAtLWJhY2tncm91bmQ6ICNFNTI0MkY7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jZmluYWxpemFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjODA4Mjg5O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmRldGFsbGVzIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiNib3RvbmVzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDUwJSk7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbiNjb250ZW50IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA0MCU7XG4gIHBhZGRpbmctbGVmdDogNSU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyNHB4IDI0cHggcmVwZWF0KDMsIDIwcHgpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBncmlkLXJvdzogcm93IGdhcCAxMHB4O1xufVxuXG4jY2hhdGJ1YmJsZSB7XG4gIC0tcGFkZGluZy10b3A6IDE1cHg7XG59XG5cbiNjaGF0YnViYmxlRiB7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cblxuaW9uLWZhYi1idXR0b24ge1xuICBtYXJnaW46IDVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/detalle-servicio/detalle-servicio.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/detalle-servicio/detalle-servicio.page.ts ***!
  \*****************************************************************/
/*! exports provided: DetalleServicioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleServicioPage", function() { return DetalleServicioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_share_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/share-data.service */ "./src/app/services/share-data.service.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");







let DetalleServicioPage = class DetalleServicioPage {
    constructor(geolocation, alertController, shareData, router, firestore, popoverController) {
        this.geolocation = geolocation;
        this.alertController = alertController;
        this.shareData = shareData;
        this.router = router;
        this.firestore = firestore;
        this.popoverController = popoverController;
        this.mapa = null;
        this.marker = null;
        this.markerD = null;
        //Numero del Cliente, debe llegar en la notificacion
        this.numberClient = "0989878654";
        this.directionsService = new google.maps.DirectionsService();
        this.directionsDisplay = new google.maps.DirectionsRenderer();
        this.nombreNot = "";
        this.notObj = {};
        this.idConductor = localStorage.getItem('idConductor');
        console.log(this.idConductor);
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.loadMap();
        this.watchPosition();
        this.watchDriverPos(this.idConductor);
    }
    loadMap() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // create a new map by passing HTMLElement
            const mapEle = document.getElementById('mapaViaje');
            const indicatorsEle = document.getElementById('indicators');
            // create map
            this.mapa = yield new google.maps.Map(mapEle, {
                zoom: 17,
                zoomControl: false,
                mapTypeControl: false,
                streetViewControl: false,
                fullscreenControl: false
            });
            yield this.directionsDisplay.setMap(this.mapa);
            yield google.maps.event.addListenerOnce(this.mapa, 'idle', () => {
                mapEle.classList.add('show-map');
                this.calculateRoute(this.shareData.notificacion.data.inicioCoords, this.shareData.notificacion.data.finCoords);
            });
        });
    }
    calculateRoute(ini, fin) {
        this.directionsService.route({
            origin: JSON.parse(ini),
            destination: JSON.parse(fin),
            travelMode: google.maps.TravelMode.DRIVING,
        }, (response, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
                this.directionsDisplay.setDirections(response);
            }
            else {
                alert('No se pudo cargar el mapa ' + status);
            }
        });
    }
    watchPosition() {
        this.watch = this.geolocation.watchPosition();
        this.watch.subscribe((data) => {
            if (this.marker != null) {
                this.marker.setMap(null);
                console.log("entro");
            }
            if ("coords" in data) {
                let lat = data.coords.latitude;
                let lng = data.coords.longitude;
                console.log("latitud " + lat);
                console.log("longitud " + lng);
                let latLng = new google.maps.LatLng(lat, lng);
                this.marker = new google.maps.Marker({
                    map: this.mapa,
                    icon: new google.maps.MarkerImage('https://maps.gstatic.com/mapfiles/mobile/mobileimgs2.png', new google.maps.Size(22, 22), new google.maps.Point(0, 18), new google.maps.Point(11, 11)),
                    position: latLng
                });
            }
            else {
                console.log("ERROR WATCH POSITION");
            }
        });
    }
    watchDriverPos(id) {
        this.PositionD = this.firestore.doc(`/posicion/${id}`).valueChanges();
        this.PositionD.subscribe(val => {
            console.log(val.location);
            const myLatLng = {
                lat: JSON.parse(val.location).lat,
                lng: JSON.parse(val.location).lng
            };
            this.markerD = new google.maps.Marker({
                map: this.mapa,
                icon: new google.maps.MarkerImage('assets/icon/pointer_proveed.png', null, null, null, new google.maps.Size(34, 45)),
                position: myLatLng
            });
        });
    }
};
DetalleServicioPage.ctorParameters = () => [
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: src_app_services_share_data_service__WEBPACK_IMPORTED_MODULE_4__["ShareDataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] }
];
DetalleServicioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detalle-servicio',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./detalle-servicio.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detalle-servicio/detalle-servicio.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./detalle-servicio.page.scss */ "./src/app/pages/detalle-servicio/detalle-servicio.page.scss")).default]
    })
], DetalleServicioPage);



/***/ })

}]);
//# sourceMappingURL=pages-detalle-servicio-detalle-servicio-module-es2015.js.map