function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./node_modules/@ionic/core/dist/esm/button-active-5da929d4.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/button-active-5da929d4.js ***!
    \*********************************************************************/

  /*! exports provided: c */

  /***/
  function node_modulesIonicCoreDistEsmButtonActive5da929d4Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return createButtonActiveGesture;
    });
    /* harmony import */


    var _index_92848855_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index-92848855.js */
    "./node_modules/@ionic/core/dist/esm/index-92848855.js");
    /* harmony import */


    var _index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index-eea61379.js */
    "./node_modules/@ionic/core/dist/esm/index-eea61379.js");
    /* harmony import */


    var _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./haptic-7b8ba70a.js */
    "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js");

    var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
      var currentTouchedButton;
      var initialTouchedButton;

      var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
        if (typeof document === 'undefined') {
          return;
        }

        var target = document.elementFromPoint(x, y);

        if (!target || !isButton(target)) {
          clearActiveButton();
          return;
        }

        if (target !== currentTouchedButton) {
          clearActiveButton();
          setActiveButton(target, hapticFeedbackFn);
        }
      };

      var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
        currentTouchedButton = button;

        if (!initialTouchedButton) {
          initialTouchedButton = currentTouchedButton;
        }

        var buttonToModify = currentTouchedButton;
        Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
          return buttonToModify.classList.add('ion-activated');
        });
        hapticFeedbackFn();
      };

      var clearActiveButton = function clearActiveButton() {
        var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        if (!currentTouchedButton) {
          return;
        }

        var buttonToModify = currentTouchedButton;
        Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
          return buttonToModify.classList.remove('ion-activated');
        });
        /**
         * Clicking on one button, but releasing on another button
         * does not dispatch a click event in browsers, so we
         * need to do it manually here. Some browsers will
         * dispatch a click if clicking on one button, dragging over
         * another button, and releasing on the original button. In that
         * case, we need to make sure we do not cause a double click there.
         */

        if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
          currentTouchedButton.click();
        }

        currentTouchedButton = undefined;
      };

      return Object(_index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
        el: el,
        gestureName: 'buttonActiveDrag',
        threshold: 0,
        onStart: function onStart(ev) {
          return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["a"]);
        },
        onMove: function onMove(ev) {
          return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["b"]);
        },
        onEnd: function onEnd() {
          clearActiveButton(true);
          Object(_haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
          initialTouchedButton = undefined;
        }
      });
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
    \**************************************************************************/

  /*! exports provided: a, d */

  /***/
  function node_modulesIonicCoreDistEsmFrameworkDelegateD1eb6504Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return attachComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return detachComponent;
    });

    var attachComponent = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
        var el;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!delegate) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

              case 2:
                if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                  _context.next = 4;
                  break;
                }

                throw new Error('framework delegate is missing');

              case 4:
                el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                if (cssClasses) {
                  cssClasses.forEach(function (c) {
                    return el.classList.add(c);
                  });
                }

                if (componentProps) {
                  Object.assign(el, componentProps);
                }

                container.appendChild(el);

                if (!el.componentOnReady) {
                  _context.next = 11;
                  break;
                }

                _context.next = 11;
                return el.componentOnReady();

              case 11:
                return _context.abrupt("return", el);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function attachComponent(_x, _x2, _x3, _x4, _x5) {
        return _ref.apply(this, arguments);
      };
    }();

    var detachComponent = function detachComponent(delegate, element) {
      if (element) {
        if (delegate) {
          var container = element.parentElement;
          return delegate.removeViewFromDom(container, element);
        }

        element.remove();
      }

      return Promise.resolve();
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js ***!
    \**************************************************************/

  /*! exports provided: a, b, c, d, h */

  /***/
  function node_modulesIonicCoreDistEsmHaptic7b8ba70aJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return hapticSelectionStart;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "b", function () {
      return hapticSelectionChanged;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return hapticSelection;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return hapticImpact;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hapticSelectionEnd;
    });

    var HapticEngine = {
      getEngine: function getEngine() {
        var win = window;
        return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
      },
      available: function available() {
        return !!this.getEngine();
      },
      isCordova: function isCordova() {
        return !!window.TapticEngine;
      },
      isCapacitor: function isCapacitor() {
        var win = window;
        return !!win.Capacitor;
      },
      impact: function impact(options) {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.impact({
          style: style
        });
      },
      notification: function notification(options) {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.notification({
          style: style
        });
      },
      selection: function selection() {
        this.impact({
          style: 'light'
        });
      },
      selectionStart: function selectionStart() {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        if (this.isCapacitor()) {
          engine.selectionStart();
        } else {
          engine.gestureSelectionStart();
        }
      },
      selectionChanged: function selectionChanged() {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        if (this.isCapacitor()) {
          engine.selectionChanged();
        } else {
          engine.gestureSelectionChanged();
        }
      },
      selectionEnd: function selectionEnd() {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        if (this.isCapacitor()) {
          engine.selectionEnd();
        } else {
          engine.gestureSelectionEnd();
        }
      }
    };
    /**
     * Trigger a selection changed haptic event. Good for one-time events
     * (not for gestures)
     */

    var hapticSelection = function hapticSelection() {
      HapticEngine.selection();
    };
    /**
     * Tell the haptic engine that a gesture for a selection change is starting.
     */


    var hapticSelectionStart = function hapticSelectionStart() {
      HapticEngine.selectionStart();
    };
    /**
     * Tell the haptic engine that a selection changed during a gesture.
     */


    var hapticSelectionChanged = function hapticSelectionChanged() {
      HapticEngine.selectionChanged();
    };
    /**
     * Tell the haptic engine we are done with a gesture. This needs to be
     * called lest resources are not properly recycled.
     */


    var hapticSelectionEnd = function hapticSelectionEnd() {
      HapticEngine.selectionEnd();
    };
    /**
     * Use this to indicate success/failure/warning to the user.
     * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
     */


    var hapticImpact = function hapticImpact(options) {
      HapticEngine.impact(options);
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
    \***********************************************************************/

  /*! exports provided: S */

  /***/
  function node_modulesIonicCoreDistEsmSpinnerConfigsC78e170eJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S", function () {
      return SPINNERS;
    });

    var spinners = {
      'bubbles': {
        dur: 1000,
        circles: 9,
        fn: function fn(dur, index, total) {
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          var angle = 2 * Math.PI * index / total;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circles': {
        dur: 1000,
        circles: 8,
        fn: function fn(dur, index, total) {
          var step = index / total;
          var animationDelay = "".concat(dur * step - dur, "ms");
          var angle = 2 * Math.PI * step;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: function fn() {
          return {
            r: 20,
            cx: 48,
            cy: 48,
            fill: 'none',
            viewBox: '24 24 48 48',
            transform: 'translate(0,0)',
            style: {}
          };
        }
      },
      'crescent': {
        dur: 750,
        circles: 1,
        fn: function fn() {
          return {
            r: 26,
            style: {}
          };
        }
      },
      'dots': {
        dur: 750,
        circles: 3,
        fn: function fn(_, index) {
          var animationDelay = -(110 * index) + 'ms';
          return {
            r: 6,
            style: {
              'left': "".concat(9 - 9 * index, "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 17,
            y2: 29,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines-small': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 12,
            y2: 20,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      }
    };
    var SPINNERS = spinners;
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm/theme-5641d27f.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/theme-5641d27f.js ***!
    \*************************************************************/

  /*! exports provided: c, g, h, o */

  /***/
  function node_modulesIonicCoreDistEsmTheme5641d27fJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return createColorClasses;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "g", function () {
      return getClassMap;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hostContext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "o", function () {
      return openURL;
    });

    var hostContext = function hostContext(selector, el) {
      return el.closest(selector) !== null;
    };
    /**
     * Create the mode and color classes for the component based on the classes passed in
     */


    var createColorClasses = function createColorClasses(color, cssClassMap) {
      return typeof color === 'string' && color.length > 0 ? Object.assign(_defineProperty({
        'ion-color': true
      }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
    };

    var getClassList = function getClassList(classes) {
      if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array.filter(function (c) {
          return c != null;
        }).map(function (c) {
          return c.trim();
        }).filter(function (c) {
          return c !== '';
        });
      }

      return [];
    };

    var getClassMap = function getClassMap(classes) {
      var map = {};
      getClassList(classes).forEach(function (c) {
        return map[c] = true;
      });
      return map;
    };

    var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

    var openURL = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, ev, direction, animation) {
        var router;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                  _context2.next = 5;
                  break;
                }

                router = document.querySelector('ion-router');

                if (!router) {
                  _context2.next = 5;
                  break;
                }

                if (ev != null) {
                  ev.preventDefault();
                }

                return _context2.abrupt("return", router.push(url, direction, animation));

              case 5:
                return _context2.abrupt("return", false);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function openURL(_x6, _x7, _x8, _x9) {
        return _ref2.apply(this, arguments);
      };
    }();
    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/acerca/acerca.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/acerca/acerca.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAcercaAcercaPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <div>\n    <ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\" menu=\"main-menu\">\n      <ion-fab-button  menu=\"main-menu\">\n        <ion-menu-button menu=\"main-menu\"></ion-menu-button>\n      </ion-fab-button>\n    </ion-fab>\n  </div>\n</ion-header>\n\n<ion-content>\n  \n  <div class=\"text-left\">  \n  <p>Tipo de Pago</p>\n  <p>Elegir Servicio\\n<p>\n  <p>Elegir transporte</p>\n  <p>  Punto de llegada  </p>\n  <p> pto salida</p>\n  <p>Abortar Servicio  </p>\n  </div>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/news/news.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/news/news.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesNewsNewsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n \n</ion-header>\n\n<ion-content padding>\n  <ion-toolbar >\n    <ion-buttons slot=\"start\" >\n      <ion-back-button defaultHref=\"/home\" text=\"\" icon=\"chevron-back-outline\">\n      \n      </ion-back-button>\n    </ion-buttons>\n    <ion-title>Noticias</ion-title>\n  </ion-toolbar>\n \n  \n  \n   <!--<ion-item *ngFor=\"let item of items | async\">\n      {{item | json}}\n    </ion-item>\n    -->\n    <div id=\"Noticias\">\n      <div class=\"Noticia\" *ngFor=\"let noti of Noti\">\n      <div id=\"card\">\n        <ion-card>\n          <img src=\"{{noti.img}}\" height=300px alt=\"No Picture\">\n          <ion-card-header>\n            <ion-card-title>{{noti.Titulo}}</ion-card-title>\n            <ion-card-subtitle> Valido hasta 08/11/2020</ion-card-subtitle>\n           \n          </ion-card-header>\n          <ion-card-content>{{noti.Cuerpo}}</ion-card-content>\n        </ion-card>\n      </div>\n      </div>\n      <div id=\"card\">\n        <ion-card>\n          <img src=\"\" alt=\"No Picture\">\n          <ion-card-header>\n            <ion-card-title>Chequear este link para lo async</ion-card-title>\n            <ion-card-subtitle> Valido hasta 08/11/2020</ion-card-subtitle>\n           \n          </ion-card-header>\n          <ion-card-content>https://ionicframework.com/docs/api/refresher</ion-card-content>\n        </ion-card>\n      </div>\n    </div>\n    \n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/perfil/perfil.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/perfil/perfil.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPerfilPerfilPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar class=\"toolbar-bg\">\r\n    <div class=\"toolbar-content\">\r\n      <ion-button fill=\"clear\" slot=\"start\">\r\n        <ion-menu-button color= \"light\" slot=\"start\"></ion-menu-button>\r\n      </ion-button>\r\n\r\n\r\n        <img class=\"center-img\" src=\"assets/imgs/logf.png\">\r\n    \r\n\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <!--<div>\r\n    <ion-icon name=\"star\" *ngFor=\"let num of [1,2,3,4,5]\"\r\n    (click)=\"rate(num)\" [ngStyle]=\"{'color':getColor(num)}\">\r\n    </ion-icon>\r\n  </div>-->\r\n \r\n  <ion-grid>\r\n    <ion-col>\r\n    \r\n     <ion-row>\r\n      <img src='{{img}}'>\r\n     </ion-row>\r\n        \r\n      \r\n    \r\n\r\n    <ion-row class=\"estrellas\">\r\n      <ion-label class=\"calificacion\">{{calificacionStr}}</ion-label>\r\n      <img class=\"estrella\" src=\"assets/imgs/estrella.png\">\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n\r\n      </ion-col>   \r\n      <ion-col>\r\n        <ion-button (click)=\"uploadImg()\">Subir una foto</ion-button> \r\n      </ion-col>  \r\n      <ion-col>\r\n        \r\n      </ion-col> \r\n    </ion-row>\r\n    \r\n    <ion-row>\r\n      <ion-row><ion-label class=\"titulo\">Nombre:</ion-label></ion-row>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-row><ion-label class=\"respuesta\">{{nombre}}</ion-label></ion-row>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-row><ion-label class=\"titulo\">Apellido:</ion-label></ion-row>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-row><ion-label class=\"respuesta\">{{apellido}}</ion-label></ion-row>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-row><ion-label class=\"titulo\">Fecha de nacimiento:</ion-label></ion-row>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-row><ion-label class=\"respuesta\"></ion-label></ion-row>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-row><ion-label class=\"titulo\">Correo electrónico:</ion-label></ion-row>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-row><ion-label class=\"respuesta\">{{correo}}</ion-label></ion-row>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-row><ion-label class=\"titulo\">Número celular:</ion-label></ion-row>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-row><ion-label class=\"respuesta\"></ion-label></ion-row>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-row><ion-label class=\"titulo\">Fecha de registro:</ion-label></ion-row>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-row><ion-label class=\"respuesta\"></ion-label></ion-row>\r\n    </ion-row>\r\n  </ion-col>\r\n  </ion-grid>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesRegisterRegisterPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n  <ion-img class=\"icon\" src=\"assets/imgs/logf.png\">  </ion-img>\r\n  <div class=\"content-items\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        \r\n          <ion-item >\r\n            <ion-label position=\"floating\"> Nombres</ion-label>\r\n            <ion-input type=\"text\" [(ngModel)]=\"firstname\" name=\"firstname\"></ion-input>\r\n          </ion-item>\r\n        \r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-item >\r\n          <ion-label position=\"floating\"> Apellidos</ion-label>\r\n          <ion-input type=\"text\" [(ngModel)]=\"lastname\" name=\"lastname\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-item >\r\n        <ion-label position=\"floating\"> Nombre de Usuario</ion-label>\r\n        <ion-input type=\"text\" [(ngModel)]=\"username\" name=\"username\"></ion-input>\r\n      </ion-item>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-item >\r\n        <ion-label position=\"floating\"> Correo electrónico</ion-label>\r\n        <ion-input type=\"text\" [(ngModel)]=\"email\" name=\"email\"></ion-input>\r\n      </ion-item>\r\n      <ion-item >\r\n        <ion-label position=\"floating\">Contraseña</ion-label>\r\n        <ion-input [type]=\"showPassword ? 'text':'password'\" [(ngModel)]=\"password\" name=\"password\"></ion-input>\r\n        <ion-icon slot=\"end\" [name]=\"passwordIcon\" (click)=\"iconPassword()\"></ion-icon>\r\n      </ion-item>\r\n    </ion-row>\r\n\r\n\r\n    </ion-grid>\r\n\r\n  \r\n\r\n  <div class=\"ion-text-center ion-margin-top\">\r\n      \r\n    <a class=\"content-link\" routerLink=\"/login\">\r\n      <small >Ya tienes una cuenta? Inicia Sesion</small>`    </a>\r\n  </div>\r\n</div>\r\n\r\n  \r\n  <ion-button expand=\"full\" (click)=\"on_submit_register()\" class=\"boton\">\r\n    REGISTRARSE \r\n  </ion-button>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/servicio/servicio.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/servicio/servicio.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesServicioServicioPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  \n</ion-header>\n\n<ion-content>\n  \n\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/viajes/viajes.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/viajes/viajes.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesViajesViajesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  \n</ion-header>\n\n<ion-content>\n  \n  <ion-toolbar >\n    <ion-buttons slot=\"start\" >\n      <ion-back-button defaultHref=\"/home\" text=\"\" icon=\"chevron-back-outline\">\n      </ion-back-button>\n      </ion-buttons>\n      <ion-title> Mis Viajes</ion-title>\n  </ion-toolbar>\n  <div id=\"Viajes\">\n    <!--<div class=\"Noticia\" *ngFor=\"let noti of Noticias\">\n    <h1>{{noti}}</h1>-->\n    <div id=\"card\">\n      <ion-card>\n        <img src=\"\" alt=\"No Picture\">\n        <ion-card-header>\n          \n          <ion-row>\n            <ion-card-title> 08/11/2020 2:30PM</ion-card-title>\n            <ion-card-title> <ion-text color=\"success\">$4,30</ion-text></ion-card-title>\n          </ion-row>\n          <ion-card-subtitle>08/11/2020 2:30PM</ion-card-subtitle>\n          <ion-card-subtitle>Jordy Medina </ion-card-subtitle>\n          <ion-card-subtitle>MUDANZA </ion-card-subtitle>\n        </ion-card-header>\n        <ion-row>\n          <ion-col>\n            <ion-icon name=\"flag-outline\"></ion-icon>\n            <ion-text>San Marino</ion-text>\n          </ion-col>\n        <ion-col>\n          <ion-icon name=\"flag\"></ion-icon>\n            <ion-text>Alborada Calle 3era </ion-text>\n          </ion-col>\n        </ion-row>\n        \n      </ion-card>\n    </div>\n  </div>\n \n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/acerca/acerca-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/acerca/acerca-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: AcercaPageRoutingModule */

  /***/
  function srcAppPagesAcercaAcercaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AcercaPageRoutingModule", function () {
      return AcercaPageRoutingModule;
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


    var _acerca_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./acerca.page */
    "./src/app/pages/acerca/acerca.page.ts");

    var routes = [{
      path: '',
      component: _acerca_page__WEBPACK_IMPORTED_MODULE_3__["AcercaPage"]
    }];

    var AcercaPageRoutingModule = function AcercaPageRoutingModule() {
      _classCallCheck(this, AcercaPageRoutingModule);
    };

    AcercaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AcercaPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/acerca/acerca.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/acerca/acerca.module.ts ***!
    \***********************************************/

  /*! exports provided: AcercaPageModule */

  /***/
  function srcAppPagesAcercaAcercaModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AcercaPageModule", function () {
      return AcercaPageModule;
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


    var _acerca_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./acerca-routing.module */
    "./src/app/pages/acerca/acerca-routing.module.ts");
    /* harmony import */


    var _acerca_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./acerca.page */
    "./src/app/pages/acerca/acerca.page.ts");

    var AcercaPageModule = function AcercaPageModule() {
      _classCallCheck(this, AcercaPageModule);
    };

    AcercaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _acerca_routing_module__WEBPACK_IMPORTED_MODULE_5__["AcercaPageRoutingModule"]],
      declarations: [_acerca_page__WEBPACK_IMPORTED_MODULE_6__["AcercaPage"]]
    })], AcercaPageModule);
    /***/
  },

  /***/
  "./src/app/pages/acerca/acerca.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/acerca/acerca.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAcercaAcercaPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-fab-button {\n  --background: red;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNlcmNhL0M6XFxVc2Vyc1xcbWVkaW5cXERlc2t0b3BcXERpc3RyaWJ1aWRvcy9zcmNcXGFwcFxccGFnZXNcXGFjZXJjYVxcYWNlcmNhLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWNlcmNhL2FjZXJjYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUVBLFlBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjZXJjYS9hY2VyY2EucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWZhYi1idXR0b257XG4gICAgLS1iYWNrZ3JvdW5kOiByZWQ7XG4gIFxuICAgIGNvbG9yOmJsYWNrO1xuICB9IiwiaW9uLWZhYi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHJlZDtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/acerca/acerca.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/acerca/acerca.page.ts ***!
    \*********************************************/

  /*! exports provided: AcercaPage */

  /***/
  function srcAppPagesAcercaAcercaPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AcercaPage", function () {
      return AcercaPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AcercaPage = /*#__PURE__*/function () {
      function AcercaPage() {
        _classCallCheck(this, AcercaPage);
      }

      _createClass(AcercaPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AcercaPage;
    }();

    AcercaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-acerca',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./acerca.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/acerca/acerca.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./acerca.page.scss */
      "./src/app/pages/acerca/acerca.page.scss"))["default"]]
    })], AcercaPage);
    /***/
  },

  /***/
  "./src/app/pages/news/news-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/news/news-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: NewsPageRoutingModule */

  /***/
  function srcAppPagesNewsNewsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsPageRoutingModule", function () {
      return NewsPageRoutingModule;
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


    var _news_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./news.page */
    "./src/app/pages/news/news.page.ts");

    var routes = [{
      path: '',
      component: _news_page__WEBPACK_IMPORTED_MODULE_3__["NewsPage"]
    }];

    var NewsPageRoutingModule = function NewsPageRoutingModule() {
      _classCallCheck(this, NewsPageRoutingModule);
    };

    NewsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NewsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/news/news.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/news/news.module.ts ***!
    \*******************************************/

  /*! exports provided: NewsPageModule */

  /***/
  function srcAppPagesNewsNewsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsPageModule", function () {
      return NewsPageModule;
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


    var _news_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./news-routing.module */
    "./src/app/pages/news/news-routing.module.ts");
    /* harmony import */


    var _news_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./news.page */
    "./src/app/pages/news/news.page.ts");

    var NewsPageModule = function NewsPageModule() {
      _classCallCheck(this, NewsPageModule);
    };

    NewsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _news_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewsPageRoutingModule"]],
      declarations: [_news_page__WEBPACK_IMPORTED_MODULE_6__["NewsPage"]]
    })], NewsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/news/news.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/news/news.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesNewsNewsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-fab-button {\n  --background: red;\n  color: black;\n}\n\nion-tittle {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbmV3cy9DOlxcVXNlcnNcXG1lZGluXFxEZXNrdG9wXFxEaXN0cmlidWlkb3Mvc3JjXFxhcHBcXHBhZ2VzXFxuZXdzXFxuZXdzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbmV3cy9uZXdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBRUEsWUFBQTtBQ0FKOztBREVFO0VBQ0UsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbmV3cy9uZXdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1mYWItYnV0dG9ue1xuICAgIC0tYmFja2dyb3VuZDogcmVkO1xuICBcbiAgICBjb2xvcjpibGFjaztcbiAgfVxuICBpb24tdGl0dGxle1xuICAgIGNvbG9yOmJsYWNrXG4gIH0iLCJpb24tZmFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogcmVkO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmlvbi10aXR0bGUge1xuICBjb2xvcjogYmxhY2s7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/news/news.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/news/news.page.ts ***!
    \*****************************************/

  /*! exports provided: NewsPage */

  /***/
  function srcAppPagesNewsNewsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsPage", function () {
      return NewsPage;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");

    var NewsPage = /*#__PURE__*/function () {
      function NewsPage(http, firestore) {
        _classCallCheck(this, NewsPage);

        this.http = http;
        this.firestore = firestore;
        this.Noti = Array();
      }

      _createClass(NewsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.Noticias = this.firestore.collection('Noticias').valueChanges();
          this.Noticias.subscribe(function (value) {
            _this.Noti.push(value[0]);

            console.log(value);
          });
        }
      }]);

      return NewsPage;
    }();

    NewsPage.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
      }];
    };

    NewsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-news',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./news.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/news/news.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./news.page.scss */
      "./src/app/pages/news/news.page.scss"))["default"]]
    })], NewsPage);
    /***/
  },

  /***/
  "./src/app/pages/perfil/perfil-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/perfil/perfil-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: PerfilPageRoutingModule */

  /***/
  function srcAppPagesPerfilPerfilRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PerfilPageRoutingModule", function () {
      return PerfilPageRoutingModule;
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


    var _perfil_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./perfil.page */
    "./src/app/pages/perfil/perfil.page.ts");

    var routes = [{
      path: '',
      component: _perfil_page__WEBPACK_IMPORTED_MODULE_3__["PerfilPage"]
    }];

    var PerfilPageRoutingModule = function PerfilPageRoutingModule() {
      _classCallCheck(this, PerfilPageRoutingModule);
    };

    PerfilPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PerfilPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/perfil/perfil.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/perfil/perfil.module.ts ***!
    \***********************************************/

  /*! exports provided: PerfilPageModule */

  /***/
  function srcAppPagesPerfilPerfilModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PerfilPageModule", function () {
      return PerfilPageModule;
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


    var _perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./perfil-routing.module */
    "./src/app/pages/perfil/perfil-routing.module.ts");
    /* harmony import */


    var _perfil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./perfil.page */
    "./src/app/pages/perfil/perfil.page.ts");

    var PerfilPageModule = function PerfilPageModule() {
      _classCallCheck(this, PerfilPageModule);
    };

    PerfilPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__["PerfilPageRoutingModule"]],
      declarations: [_perfil_page__WEBPACK_IMPORTED_MODULE_6__["PerfilPage"]]
    })], PerfilPageModule);
    /***/
  },

  /***/
  "./src/app/pages/perfil/perfil.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/perfil/perfil.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPerfilPerfilPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-fab-button {\n  --background: red;\n  color: black;\n}\n\n.estrella {\n  height: 35px;\n  width: 35px;\n}\n\nion-grid {\n  justify-content: center;\n  align-content: center;\n  flex-direction: column;\n  margin-top: 10%;\n}\n\n.estrellas {\n  justify-content: center;\n  margin-bottom: 10%;\n}\n\n.calificacion {\n  justify-content: center;\n  font-size: 32px;\n}\n\n.titulo {\n  font-size: 16px;\n  margin-left: 25px;\n  color: grey;\n}\n\n.respuesta {\n  font-size: 24px;\n  margin-bottom: 15px;\n  margin-left: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGVyZmlsL0M6XFxVc2Vyc1xcbWVkaW5cXERlc2t0b3BcXERpc3RyaWJ1aWRvcy9zcmNcXGFwcFxccGFnZXNcXHBlcmZpbFxccGVyZmlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcGVyZmlsL3BlcmZpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFFSSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFFQSxlQUFBO0FDREo7O0FESUE7RUFDSSx1QkFBQTtFQUNBLGtCQUFBO0FDREo7O0FESUE7RUFDSSx1QkFBQTtFQUNBLGVBQUE7QUNESjs7QURJQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNESjs7QURJQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wZXJmaWwvcGVyZmlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1mYWItYnV0dG9uIHtcclxuICAgIC0tYmFja2dyb3VuZDogcmVkO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uZXN0cmVsbGEge1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbn1cclxuXHJcbmlvbi1ncmlkIHtcclxuICAgIC8vYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC05MGRlZywjMjA0NzhCICwjMjQ4N0M5KTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC8vY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG59XHJcblxyXG4uZXN0cmVsbGFzIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAlO1xyXG59XHJcblxyXG4uY2FsaWZpY2FjaW9uIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG59XHJcblxyXG4udGl0dWxvIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbn1cclxuXHJcbi5yZXNwdWVzdGEge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG59IiwiaW9uLWZhYi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHJlZDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uZXN0cmVsbGEge1xuICBoZWlnaHQ6IDM1cHg7XG4gIHdpZHRoOiAzNXB4O1xufVxuXG5pb24tZ3JpZCB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi10b3A6IDEwJTtcbn1cblxuLmVzdHJlbGxhcyB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxMCU7XG59XG5cbi5jYWxpZmljYWNpb24ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzMnB4O1xufVxuXG4udGl0dWxvIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tbGVmdDogMjVweDtcbiAgY29sb3I6IGdyZXk7XG59XG5cbi5yZXNwdWVzdGEge1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/perfil/perfil.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/perfil/perfil.page.ts ***!
    \*********************************************/

  /*! exports provided: PerfilPage */

  /***/
  function srcAppPagesPerfilPerfilPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PerfilPage", function () {
      return PerfilPage;
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


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_media_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/media-service.service */
    "./src/app/services/media-service.service.ts");

    var PerfilPage = /*#__PURE__*/function () {
      function PerfilPage(authService, Mediaservice) {
        _classCallCheck(this, PerfilPage);

        this.authService = authService;
        this.Mediaservice = Mediaservice;
        this.calificacion = 0;
        this.img = "https://firebasestorage.googleapis.com/v0/b/vehicular-287023.appspot.com/o/profile%2F24%2Fprofile.jpg?alt=media&token=b7f2e110-bde3-4d30-a509-9ccb27c122ea";
      }

      _createClass(PerfilPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //Obtenidos los datos del usuario luego de loguear
          this.askProfilePic(); //this.img=''//this.Mediaservice.profilephoto;

          this.nombre = this.authService.getNombre();
          this.apellido = this.authService.getApellido();
          this.correo = this.authService.getCorreo();
          this.getRateUser();
        }
      }, {
        key: "uploadImg",
        value: function uploadImg() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.Mediaservice.takePicture();

                  case 2:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "getRateUser",
        value: function getRateUser() {
          var _this2 = this;

          this.authService.getHistorial().forEach(function (element) {
            _this2.calificacion += parseFloat(element.clientScore);
          });
          this.calificacion = this.calificacion / this.authService.getHistorial().length;
          this.calificacionStr = this.calificacion.toFixed(2);
        }
      }, {
        key: "askProfilePic",
        value: function askProfilePic() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.Mediaservice.getProfilePhoto(this.authService.id);

                  case 2:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return PerfilPage;
    }();

    PerfilPage.ctorParameters = function () {
      return [{
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: src_app_services_media_service_service__WEBPACK_IMPORTED_MODULE_3__["MediaServiceService"]
      }];
    };

    PerfilPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-perfil',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./perfil.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/perfil/perfil.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./perfil.page.scss */
      "./src/app/pages/perfil/perfil.page.scss"))["default"]]
    })], PerfilPage);
    /***/
  },

  /***/
  "./src/app/pages/register/register-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/register/register-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: RegisterPageRoutingModule */

  /***/
  function srcAppPagesRegisterRegisterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function () {
      return RegisterPageRoutingModule;
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


    var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./register.page */
    "./src/app/pages/register/register.page.ts");

    var routes = [{
      path: '',
      component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }];

    var RegisterPageRoutingModule = function RegisterPageRoutingModule() {
      _classCallCheck(this, RegisterPageRoutingModule);
    };

    RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RegisterPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/register/register.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/register/register.module.ts ***!
    \***************************************************/

  /*! exports provided: RegisterPageModule */

  /***/
  function srcAppPagesRegisterRegisterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function () {
      return RegisterPageModule;
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


    var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./register-routing.module */
    "./src/app/pages/register/register-routing.module.ts");
    /* harmony import */


    var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./register.page */
    "./src/app/pages/register/register.page.ts");

    var RegisterPageModule = function RegisterPageModule() {
      _classCallCheck(this, RegisterPageModule);
    };

    RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]],
      declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })], RegisterPageModule);
    /***/
  },

  /***/
  "./src/app/pages/register/register.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/register/register.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesRegisterRegisterPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".icon {\n  height: 30%;\n}\n\nion-item {\n  --background: white;\n  width: 95%;\n}\n\nion-icon {\n  padding-top: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvQzpcXFVzZXJzXFxtZWRpblxcRGVza3RvcFxcRGlzdHJpYnVpZG9zL3NyY1xcYXBwXFxwYWdlc1xccmVnaXN0ZXJcXHJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKOztBRENBO0VBQ0ksbUJBQUE7RUFDQSxVQUFBO0FDRUo7O0FEQUE7RUFDSSxlQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbntcclxuICAgIGhlaWdodDogMzAlOztcclxufVxyXG5pb24taXRlbXtcclxuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICB3aWR0aDogOTUlO1xyXG59XHJcbmlvbi1pY29ue1xyXG4gICAgcGFkZGluZy10b3A6IDUlO1xyXG59IiwiLmljb24ge1xuICBoZWlnaHQ6IDMwJTtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICB3aWR0aDogOTUlO1xufVxuXG5pb24taWNvbiB7XG4gIHBhZGRpbmctdG9wOiA1JTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/register/register.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/register/register.page.ts ***!
    \*************************************************/

  /*! exports provided: RegisterPage */

  /***/
  function srcAppPagesRegisterRegisterPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPage", function () {
      return RegisterPage;
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


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");

    var RegisterPage = /*#__PURE__*/function () {
      function RegisterPage(router, toastController, authService) {
        _classCallCheck(this, RegisterPage);

        this.router = router;
        this.toastController = toastController;
        this.authService = authService;
        this.showPassword = false;
        this.passwordIcon = 'eye';
      }

      _createClass(RegisterPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "on_submit_register",
        value: function on_submit_register() {
          var _this3 = this;

          var credentials = {
            username: this.username,
            password: this.password,
            first_name: this.firstname,
            last_name: this.lastname,
            email: this.email
          };
          this.authService.signUp(credentials).then(function (result) {
            console.log(result); //console.log(this.authService.token);

            if (result == "ok") {
              //this.authService.sendDeviceToken();
              _this3.authService.registerclient();

              _this3.router.navigate(['login']);
            } else {
              _this3.presentToastFeedback();
            }
          });
        }
      }, {
        key: "presentToastFeedback",
        value: function presentToastFeedback() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var toast;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.toastController.create({
                      message: 'Datos incorrectos',
                      position: 'top',
                      duration: 2000,
                      color: 'danger'
                    });

                  case 2:
                    toast = _context5.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "presentGreeting",
        value: function presentGreeting() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var toast;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.toastController.create({
                      message: 'Login exitoso!',
                      position: 'top',
                      duration: 2000,
                      color: 'success'
                    });

                  case 2:
                    toast = _context6.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "iconPassword",
        value: function iconPassword() {
          this.showPassword = !this.showPassword;

          if (this.passwordIcon == 'eye') {
            this.passwordIcon = 'eye-off';
          } else {
            this.passwordIcon = 'eye';
          }
        }
      }]);

      return RegisterPage;
    }();

    RegisterPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./register.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./register.page.scss */
      "./src/app/pages/register/register.page.scss"))["default"]]
    })], RegisterPage);
    /***/
  },

  /***/
  "./src/app/pages/servicio/servicio-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/servicio/servicio-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: ServicioPageRoutingModule */

  /***/
  function srcAppPagesServicioServicioRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicioPageRoutingModule", function () {
      return ServicioPageRoutingModule;
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


    var _servicio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./servicio.page */
    "./src/app/pages/servicio/servicio.page.ts");

    var routes = [{
      path: '',
      component: _servicio_page__WEBPACK_IMPORTED_MODULE_3__["ServicioPage"]
    }];

    var ServicioPageRoutingModule = function ServicioPageRoutingModule() {
      _classCallCheck(this, ServicioPageRoutingModule);
    };

    ServicioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ServicioPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/servicio/servicio.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/servicio/servicio.module.ts ***!
    \***************************************************/

  /*! exports provided: ServicioPageModule */

  /***/
  function srcAppPagesServicioServicioModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicioPageModule", function () {
      return ServicioPageModule;
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


    var _servicio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./servicio-routing.module */
    "./src/app/pages/servicio/servicio-routing.module.ts");
    /* harmony import */


    var _servicio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./servicio.page */
    "./src/app/pages/servicio/servicio.page.ts");

    var ServicioPageModule = function ServicioPageModule() {
      _classCallCheck(this, ServicioPageModule);
    };

    ServicioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _servicio_routing_module__WEBPACK_IMPORTED_MODULE_5__["ServicioPageRoutingModule"]],
      declarations: [_servicio_page__WEBPACK_IMPORTED_MODULE_6__["ServicioPage"]]
    })], ServicioPageModule);
    /***/
  },

  /***/
  "./src/app/pages/servicio/servicio.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/servicio/servicio.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesServicioServicioPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".top {\n  text-align: center;\n}\n\n#centerbtn {\n  display: flex;\n  align-items: center;\n}\n\n#center {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\nion-content {\n  width: 100%;\n  height: 100%;\n}\n\nion-fab-button {\n  --background: red;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VydmljaW8vQzpcXFVzZXJzXFxtZWRpblxcRGVza3RvcFxcRGlzdHJpYnVpZG9zL3NyY1xcYXBwXFxwYWdlc1xcc2VydmljaW9cXHNlcnZpY2lvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2VydmljaW8vc2VydmljaW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ0VKOztBRENBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUNFSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FEQ0E7RUFDSSxpQkFBQTtFQUVBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlcnZpY2lvL3NlcnZpY2lvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3B7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI2NlbnRlcmJ0bntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgXG59XG4jY2VudGVye1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBcblxufVxuaW9uLWNvbnRlbnR7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuaW9uLWZhYi1idXR0b257XG4gICAgLS1iYWNrZ3JvdW5kOiByZWQ7XG4gIFxuICAgIGNvbG9yOmJsYWNrO1xuICB9IiwiLnRvcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2NlbnRlcmJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNjZW50ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuaW9uLWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5pb24tZmFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogcmVkO1xuICBjb2xvcjogYmxhY2s7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/servicio/servicio.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/servicio/servicio.page.ts ***!
    \*************************************************/

  /*! exports provided: ServicioPage */

  /***/
  function srcAppPagesServicioServicioPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicioPage", function () {
      return ServicioPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ServicioPage = /*#__PURE__*/function () {
      function ServicioPage() {
        _classCallCheck(this, ServicioPage);
      }

      _createClass(ServicioPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ServicioPage;
    }();

    ServicioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-servicio',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./servicio.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/servicio/servicio.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./servicio.page.scss */
      "./src/app/pages/servicio/servicio.page.scss"))["default"]]
    })], ServicioPage);
    /***/
  },

  /***/
  "./src/app/pages/viajes/viajes-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/viajes/viajes-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: ViajesPageRoutingModule */

  /***/
  function srcAppPagesViajesViajesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViajesPageRoutingModule", function () {
      return ViajesPageRoutingModule;
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


    var _viajes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./viajes.page */
    "./src/app/pages/viajes/viajes.page.ts");

    var routes = [{
      path: '',
      component: _viajes_page__WEBPACK_IMPORTED_MODULE_3__["ViajesPage"]
    }];

    var ViajesPageRoutingModule = function ViajesPageRoutingModule() {
      _classCallCheck(this, ViajesPageRoutingModule);
    };

    ViajesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ViajesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/viajes/viajes.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/viajes/viajes.module.ts ***!
    \***********************************************/

  /*! exports provided: ViajesPageModule */

  /***/
  function srcAppPagesViajesViajesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViajesPageModule", function () {
      return ViajesPageModule;
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


    var _viajes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./viajes-routing.module */
    "./src/app/pages/viajes/viajes-routing.module.ts");
    /* harmony import */


    var _viajes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./viajes.page */
    "./src/app/pages/viajes/viajes.page.ts");

    var ViajesPageModule = function ViajesPageModule() {
      _classCallCheck(this, ViajesPageModule);
    };

    ViajesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _viajes_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViajesPageRoutingModule"]],
      declarations: [_viajes_page__WEBPACK_IMPORTED_MODULE_6__["ViajesPage"]]
    })], ViajesPageModule);
    /***/
  },

  /***/
  "./src/app/pages/viajes/viajes.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/viajes/viajes.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesViajesViajesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-fab-button {\n  --background: red;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmlhamVzL0M6XFxVc2Vyc1xcbWVkaW5cXERlc2t0b3BcXERpc3RyaWJ1aWRvcy9zcmNcXGFwcFxccGFnZXNcXHZpYWplc1xcdmlhamVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdmlhamVzL3ZpYWplcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUVBLFlBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZpYWplcy92aWFqZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWZhYi1idXR0b257XG4gICAgLS1iYWNrZ3JvdW5kOiByZWQ7XG4gIFxuICAgIGNvbG9yOmJsYWNrO1xuICB9XG4iLCJpb24tZmFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogcmVkO1xuICBjb2xvcjogYmxhY2s7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/viajes/viajes.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/viajes/viajes.page.ts ***!
    \*********************************************/

  /*! exports provided: ViajesPage */

  /***/
  function srcAppPagesViajesViajesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViajesPage", function () {
      return ViajesPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ViajesPage = /*#__PURE__*/function () {
      function ViajesPage() {
        _classCallCheck(this, ViajesPage);
      }

      _createClass(ViajesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ViajesPage;
    }();

    ViajesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-viajes',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./viajes.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/viajes/viajes.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./viajes.page.scss */
      "./src/app/pages/viajes/viajes.page.scss"))["default"]]
    })], ViajesPage);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map