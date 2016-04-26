webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../node_modules/angular2/typings/browser.d.ts" />
	"use strict";
	/********************************
	 * main
	 * Package and class imports
	 *******************************/
	var browser_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(228);
	var core_1 = __webpack_require__(23);
	/********************************
	 * Component imports and bootstrap
	 *******************************/
	var app_component_1 = __webpack_require__(258);
	var app_event_service_1 = __webpack_require__(264);
	browser_1.bootstrap(app_component_1.AppComponent, [app_event_service_1.EventService, core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })])
	    .catch(function (err) { return console.error(err); });


/***/ },

/***/ 228:
/***/ function(module, exports, __webpack_require__) {

	'use strict';/**
	 * @module
	 * @description
	 * Maps application URLs into application states, to support deep-linking and navigation.
	 */
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var router_1 = __webpack_require__(229);
	exports.Router = router_1.Router;
	var router_outlet_1 = __webpack_require__(248);
	exports.RouterOutlet = router_outlet_1.RouterOutlet;
	var router_link_1 = __webpack_require__(250);
	exports.RouterLink = router_link_1.RouterLink;
	var instruction_1 = __webpack_require__(234);
	exports.RouteParams = instruction_1.RouteParams;
	exports.RouteData = instruction_1.RouteData;
	var platform_location_1 = __webpack_require__(251);
	exports.PlatformLocation = platform_location_1.PlatformLocation;
	var route_registry_1 = __webpack_require__(230);
	exports.RouteRegistry = route_registry_1.RouteRegistry;
	exports.ROUTER_PRIMARY_COMPONENT = route_registry_1.ROUTER_PRIMARY_COMPONENT;
	var location_strategy_1 = __webpack_require__(245);
	exports.LocationStrategy = location_strategy_1.LocationStrategy;
	exports.APP_BASE_HREF = location_strategy_1.APP_BASE_HREF;
	var hash_location_strategy_1 = __webpack_require__(252);
	exports.HashLocationStrategy = hash_location_strategy_1.HashLocationStrategy;
	var path_location_strategy_1 = __webpack_require__(253);
	exports.PathLocationStrategy = path_location_strategy_1.PathLocationStrategy;
	var location_1 = __webpack_require__(244);
	exports.Location = location_1.Location;
	__export(__webpack_require__(243));
	__export(__webpack_require__(254));
	var lifecycle_annotations_1 = __webpack_require__(249);
	exports.CanActivate = lifecycle_annotations_1.CanActivate;
	var instruction_2 = __webpack_require__(234);
	exports.Instruction = instruction_2.Instruction;
	exports.ComponentInstruction = instruction_2.ComponentInstruction;
	var core_1 = __webpack_require__(23);
	exports.OpaqueToken = core_1.OpaqueToken;
	var router_providers_common_1 = __webpack_require__(255);
	exports.ROUTER_PROVIDERS_COMMON = router_providers_common_1.ROUTER_PROVIDERS_COMMON;
	var router_providers_1 = __webpack_require__(256);
	exports.ROUTER_PROVIDERS = router_providers_1.ROUTER_PROVIDERS;
	exports.ROUTER_BINDINGS = router_providers_1.ROUTER_BINDINGS;
	var router_outlet_2 = __webpack_require__(248);
	var router_link_2 = __webpack_require__(250);
	var lang_1 = __webpack_require__(3);
	/**
	 * A list of directives. To use the router directives like {@link RouterOutlet} and
	 * {@link RouterLink}, add this to your `directives` array in the {@link View} decorator of your
	 * component.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/iRUP8B5OUbxCWQ3AcIDm))
	 *
	 * ```
	 * import {Component} from 'angular2/core';
	 * import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from 'angular2/router';
	 *
	 * @Component({directives: [ROUTER_DIRECTIVES]})
	 * @RouteConfig([
	 *  {...},
	 * ])
	 * class AppCmp {
	 *    // ...
	 * }
	 *
	 * bootstrap(AppCmp, [ROUTER_PROVIDERS]);
	 * ```
	 */
	exports.ROUTER_DIRECTIVES = lang_1.CONST_EXPR([router_outlet_2.RouterOutlet, router_link_2.RouterLink]);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYW5ndWxhcjIvcm91dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7Ozs7QUFFSCx1QkFBcUIscUJBQXFCLENBQUM7QUFBbkMsaUNBQW1DO0FBQzNDLDhCQUEyQix1Q0FBdUMsQ0FBQztBQUEzRCxvREFBMkQ7QUFDbkUsNEJBQXlCLHFDQUFxQyxDQUFDO0FBQXZELDhDQUF1RDtBQUMvRCw0QkFBcUMsMEJBQTBCLENBQUM7QUFBeEQsZ0RBQVc7QUFBRSw0Q0FBMkM7QUFDaEUsa0NBQStCLHlDQUF5QyxDQUFDO0FBQWpFLGdFQUFpRTtBQUN6RSwrQkFBc0QsNkJBQTZCLENBQUM7QUFBNUUsdURBQWE7QUFBRSw2RUFBNkQ7QUFDcEYsa0NBQThDLHlDQUF5QyxDQUFDO0FBQWhGLGdFQUFnQjtBQUFFLDBEQUE4RDtBQUN4Rix1Q0FBbUMsOENBQThDLENBQUM7QUFBMUUsNkVBQTBFO0FBQ2xGLHVDQUFtQyw4Q0FBOEMsQ0FBQztBQUExRSw2RUFBMEU7QUFDbEYseUJBQXVCLGdDQUFnQyxDQUFDO0FBQWhELHVDQUFnRDtBQUN4RCxpQkFBYyxrREFBa0QsQ0FBQyxFQUFBO0FBQ2pFLGlCQUFjLCtCQUErQixDQUFDLEVBQUE7QUFFOUMsc0NBQTBCLDhDQUE4QyxDQUFDO0FBQWpFLDBEQUFpRTtBQUN6RSw0QkFBZ0QsMEJBQTBCLENBQUM7QUFBbkUsZ0RBQVc7QUFBRSxrRUFBc0Q7QUFDM0UscUJBQTBCLGVBQWUsQ0FBQztBQUFsQyx5Q0FBa0M7QUFDMUMsd0NBQXNDLDZDQUE2QyxDQUFDO0FBQTVFLG9GQUE0RTtBQUNwRixpQ0FBZ0Qsc0NBQXNDLENBQUM7QUFBL0UsK0RBQWdCO0FBQUUsNkRBQTZEO0FBRXZGLDhCQUEyQix1Q0FBdUMsQ0FBQyxDQUFBO0FBQ25FLDRCQUF5QixxQ0FBcUMsQ0FBQyxDQUFBO0FBQy9ELHFCQUF5QixtQkFBbUIsQ0FBQyxDQUFBO0FBRTdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FxQkc7QUFDVSx5QkFBaUIsR0FBVSxpQkFBVSxDQUFDLENBQUMsNEJBQVksRUFBRSx3QkFBVSxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQG1vZHVsZVxuICogQGRlc2NyaXB0aW9uXG4gKiBNYXBzIGFwcGxpY2F0aW9uIFVSTHMgaW50byBhcHBsaWNhdGlvbiBzdGF0ZXMsIHRvIHN1cHBvcnQgZGVlcC1saW5raW5nIGFuZCBuYXZpZ2F0aW9uLlxuICovXG5cbmV4cG9ydCB7Um91dGVyfSBmcm9tICcuL3NyYy9yb3V0ZXIvcm91dGVyJztcbmV4cG9ydCB7Um91dGVyT3V0bGV0fSBmcm9tICcuL3NyYy9yb3V0ZXIvZGlyZWN0aXZlcy9yb3V0ZXJfb3V0bGV0JztcbmV4cG9ydCB7Um91dGVyTGlua30gZnJvbSAnLi9zcmMvcm91dGVyL2RpcmVjdGl2ZXMvcm91dGVyX2xpbmsnO1xuZXhwb3J0IHtSb3V0ZVBhcmFtcywgUm91dGVEYXRhfSBmcm9tICcuL3NyYy9yb3V0ZXIvaW5zdHJ1Y3Rpb24nO1xuZXhwb3J0IHtQbGF0Zm9ybUxvY2F0aW9ufSBmcm9tICcuL3NyYy9yb3V0ZXIvbG9jYXRpb24vcGxhdGZvcm1fbG9jYXRpb24nO1xuZXhwb3J0IHtSb3V0ZVJlZ2lzdHJ5LCBST1VURVJfUFJJTUFSWV9DT01QT05FTlR9IGZyb20gJy4vc3JjL3JvdXRlci9yb3V0ZV9yZWdpc3RyeSc7XG5leHBvcnQge0xvY2F0aW9uU3RyYXRlZ3ksIEFQUF9CQVNFX0hSRUZ9IGZyb20gJy4vc3JjL3JvdXRlci9sb2NhdGlvbi9sb2NhdGlvbl9zdHJhdGVneSc7XG5leHBvcnQge0hhc2hMb2NhdGlvblN0cmF0ZWd5fSBmcm9tICcuL3NyYy9yb3V0ZXIvbG9jYXRpb24vaGFzaF9sb2NhdGlvbl9zdHJhdGVneSc7XG5leHBvcnQge1BhdGhMb2NhdGlvblN0cmF0ZWd5fSBmcm9tICcuL3NyYy9yb3V0ZXIvbG9jYXRpb24vcGF0aF9sb2NhdGlvbl9zdHJhdGVneSc7XG5leHBvcnQge0xvY2F0aW9ufSBmcm9tICcuL3NyYy9yb3V0ZXIvbG9jYXRpb24vbG9jYXRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvcm91dGVyL3JvdXRlX2NvbmZpZy9yb3V0ZV9jb25maWdfZGVjb3JhdG9yJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL3JvdXRlci9yb3V0ZV9kZWZpbml0aW9uJztcbmV4cG9ydCB7T25BY3RpdmF0ZSwgT25EZWFjdGl2YXRlLCBPblJldXNlLCBDYW5EZWFjdGl2YXRlLCBDYW5SZXVzZX0gZnJvbSAnLi9zcmMvcm91dGVyL2ludGVyZmFjZXMnO1xuZXhwb3J0IHtDYW5BY3RpdmF0ZX0gZnJvbSAnLi9zcmMvcm91dGVyL2xpZmVjeWNsZS9saWZlY3ljbGVfYW5ub3RhdGlvbnMnO1xuZXhwb3J0IHtJbnN0cnVjdGlvbiwgQ29tcG9uZW50SW5zdHJ1Y3Rpb259IGZyb20gJy4vc3JjL3JvdXRlci9pbnN0cnVjdGlvbic7XG5leHBvcnQge09wYXF1ZVRva2VufSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmV4cG9ydCB7Uk9VVEVSX1BST1ZJREVSU19DT01NT059IGZyb20gJ2FuZ3VsYXIyL3NyYy9yb3V0ZXIvcm91dGVyX3Byb3ZpZGVyc19jb21tb24nO1xuZXhwb3J0IHtST1VURVJfUFJPVklERVJTLCBST1VURVJfQklORElOR1N9IGZyb20gJ2FuZ3VsYXIyL3NyYy9yb3V0ZXIvcm91dGVyX3Byb3ZpZGVycyc7XG5cbmltcG9ydCB7Um91dGVyT3V0bGV0fSBmcm9tICcuL3NyYy9yb3V0ZXIvZGlyZWN0aXZlcy9yb3V0ZXJfb3V0bGV0JztcbmltcG9ydCB7Um91dGVyTGlua30gZnJvbSAnLi9zcmMvcm91dGVyL2RpcmVjdGl2ZXMvcm91dGVyX2xpbmsnO1xuaW1wb3J0IHtDT05TVF9FWFBSfSBmcm9tICcuL3NyYy9mYWNhZGUvbGFuZyc7XG5cbi8qKlxuICogQSBsaXN0IG9mIGRpcmVjdGl2ZXMuIFRvIHVzZSB0aGUgcm91dGVyIGRpcmVjdGl2ZXMgbGlrZSB7QGxpbmsgUm91dGVyT3V0bGV0fSBhbmRcbiAqIHtAbGluayBSb3V0ZXJMaW5rfSwgYWRkIHRoaXMgdG8geW91ciBgZGlyZWN0aXZlc2AgYXJyYXkgaW4gdGhlIHtAbGluayBWaWV3fSBkZWNvcmF0b3Igb2YgeW91clxuICogY29tcG9uZW50LlxuICpcbiAqICMjIyBFeGFtcGxlIChbbGl2ZSBkZW1vXShodHRwOi8vcGxua3IuY28vZWRpdC9pUlVQOEI1T1VieENXUTNBY0lEbSkpXG4gKlxuICogYGBgXG4gKiBpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG4gKiBpbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTLCBST1VURVJfUFJPVklERVJTLCBSb3V0ZUNvbmZpZ30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbiAqXG4gKiBAQ29tcG9uZW50KHtkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdfSlcbiAqIEBSb3V0ZUNvbmZpZyhbXG4gKiAgey4uLn0sXG4gKiBdKVxuICogY2xhc3MgQXBwQ21wIHtcbiAqICAgIC8vIC4uLlxuICogfVxuICpcbiAqIGJvb3RzdHJhcChBcHBDbXAsIFtST1VURVJfUFJPVklERVJTXSk7XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNvbnN0IFJPVVRFUl9ESVJFQ1RJVkVTOiBhbnlbXSA9IENPTlNUX0VYUFIoW1JvdXRlck91dGxldCwgUm91dGVyTGlua10pO1xuIl19

/***/ },

/***/ 229:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
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
	var async_1 = __webpack_require__(50);
	var collection_1 = __webpack_require__(11);
	var lang_1 = __webpack_require__(3);
	var exceptions_1 = __webpack_require__(13);
	var core_1 = __webpack_require__(23);
	var route_registry_1 = __webpack_require__(230);
	var location_1 = __webpack_require__(244);
	var route_lifecycle_reflector_1 = __webpack_require__(246);
	var _resolveToTrue = async_1.PromiseWrapper.resolve(true);
	var _resolveToFalse = async_1.PromiseWrapper.resolve(false);
	/**
	 * The `Router` is responsible for mapping URLs to components.
	 *
	 * You can see the state of the router by inspecting the read-only field `router.navigating`.
	 * This may be useful for showing a spinner, for instance.
	 *
	 * ## Concepts
	 *
	 * Routers and component instances have a 1:1 correspondence.
	 *
	 * The router holds reference to a number of {@link RouterOutlet}.
	 * An outlet is a placeholder that the router dynamically fills in depending on the current URL.
	 *
	 * When the router navigates from a URL, it must first recognize it and serialize it into an
	 * `Instruction`.
	 * The router uses the `RouteRegistry` to get an `Instruction`.
	 */
	var Router = (function () {
	    function Router(registry, parent, hostComponent, root) {
	        this.registry = registry;
	        this.parent = parent;
	        this.hostComponent = hostComponent;
	        this.root = root;
	        this.navigating = false;
	        /**
	         * The current `Instruction` for the router
	         */
	        this.currentInstruction = null;
	        this._currentNavigation = _resolveToTrue;
	        this._outlet = null;
	        this._auxRouters = new collection_1.Map();
	        this._subject = new async_1.EventEmitter();
	    }
	    /**
	     * Constructs a child router. You probably don't need to use this unless you're writing a reusable
	     * component.
	     */
	    Router.prototype.childRouter = function (hostComponent) {
	        return this._childRouter = new ChildRouter(this, hostComponent);
	    };
	    /**
	     * Constructs a child router. You probably don't need to use this unless you're writing a reusable
	     * component.
	     */
	    Router.prototype.auxRouter = function (hostComponent) { return new ChildRouter(this, hostComponent); };
	    /**
	     * Register an outlet to be notified of primary route changes.
	     *
	     * You probably don't need to use this unless you're writing a reusable component.
	     */
	    Router.prototype.registerPrimaryOutlet = function (outlet) {
	        if (lang_1.isPresent(outlet.name)) {
	            throw new exceptions_1.BaseException("registerPrimaryOutlet expects to be called with an unnamed outlet.");
	        }
	        if (lang_1.isPresent(this._outlet)) {
	            throw new exceptions_1.BaseException("Primary outlet is already registered.");
	        }
	        this._outlet = outlet;
	        if (lang_1.isPresent(this.currentInstruction)) {
	            return this.commit(this.currentInstruction, false);
	        }
	        return _resolveToTrue;
	    };
	    /**
	     * Unregister an outlet (because it was destroyed, etc).
	     *
	     * You probably don't need to use this unless you're writing a custom outlet implementation.
	     */
	    Router.prototype.unregisterPrimaryOutlet = function (outlet) {
	        if (lang_1.isPresent(outlet.name)) {
	            throw new exceptions_1.BaseException("registerPrimaryOutlet expects to be called with an unnamed outlet.");
	        }
	        this._outlet = null;
	    };
	    /**
	     * Register an outlet to notified of auxiliary route changes.
	     *
	     * You probably don't need to use this unless you're writing a reusable component.
	     */
	    Router.prototype.registerAuxOutlet = function (outlet) {
	        var outletName = outlet.name;
	        if (lang_1.isBlank(outletName)) {
	            throw new exceptions_1.BaseException("registerAuxOutlet expects to be called with an outlet with a name.");
	        }
	        var router = this.auxRouter(this.hostComponent);
	        this._auxRouters.set(outletName, router);
	        router._outlet = outlet;
	        var auxInstruction;
	        if (lang_1.isPresent(this.currentInstruction) &&
	            lang_1.isPresent(auxInstruction = this.currentInstruction.auxInstruction[outletName])) {
	            return router.commit(auxInstruction);
	        }
	        return _resolveToTrue;
	    };
	    /**
	     * Given an instruction, returns `true` if the instruction is currently active,
	     * otherwise `false`.
	     */
	    Router.prototype.isRouteActive = function (instruction) {
	        var router = this;
	        while (lang_1.isPresent(router.parent) && lang_1.isPresent(instruction.child)) {
	            router = router.parent;
	            instruction = instruction.child;
	        }
	        return lang_1.isPresent(this.currentInstruction) &&
	            this.currentInstruction.component == instruction.component;
	    };
	    /**
	     * Dynamically update the routing configuration and trigger a navigation.
	     *
	     * ### Usage
	     *
	     * ```
	     * router.config([
	     *   { 'path': '/', 'component': IndexComp },
	     *   { 'path': '/user/:id', 'component': UserComp },
	     * ]);
	     * ```
	     */
	    Router.prototype.config = function (definitions) {
	        var _this = this;
	        definitions.forEach(function (routeDefinition) { _this.registry.config(_this.hostComponent, routeDefinition); });
	        return this.renavigate();
	    };
	    /**
	     * Navigate based on the provided Route Link DSL. It's preferred to navigate with this method
	     * over `navigateByUrl`.
	     *
	     * ### Usage
	     *
	     * This method takes an array representing the Route Link DSL:
	     * ```
	     * ['./MyCmp', {param: 3}]
	     * ```
	     * See the {@link RouterLink} directive for more.
	     */
	    Router.prototype.navigate = function (linkParams) {
	        var instruction = this.generate(linkParams);
	        return this.navigateByInstruction(instruction, false);
	    };
	    /**
	     * Navigate to a URL. Returns a promise that resolves when navigation is complete.
	     * It's preferred to navigate with `navigate` instead of this method, since URLs are more brittle.
	     *
	     * If the given URL begins with a `/`, router will navigate absolutely.
	     * If the given URL does not begin with `/`, the router will navigate relative to this component.
	     */
	    Router.prototype.navigateByUrl = function (url, _skipLocationChange) {
	        var _this = this;
	        if (_skipLocationChange === void 0) { _skipLocationChange = false; }
	        return this._currentNavigation = this._currentNavigation.then(function (_) {
	            _this.lastNavigationAttempt = url;
	            _this._startNavigating();
	            return _this._afterPromiseFinishNavigating(_this.recognize(url).then(function (instruction) {
	                if (lang_1.isBlank(instruction)) {
	                    return false;
	                }
	                return _this._navigate(instruction, _skipLocationChange);
	            }));
	        });
	    };
	    /**
	     * Navigate via the provided instruction. Returns a promise that resolves when navigation is
	     * complete.
	     */
	    Router.prototype.navigateByInstruction = function (instruction, _skipLocationChange) {
	        var _this = this;
	        if (_skipLocationChange === void 0) { _skipLocationChange = false; }
	        if (lang_1.isBlank(instruction)) {
	            return _resolveToFalse;
	        }
	        return this._currentNavigation = this._currentNavigation.then(function (_) {
	            _this._startNavigating();
	            return _this._afterPromiseFinishNavigating(_this._navigate(instruction, _skipLocationChange));
	        });
	    };
	    /** @internal */
	    Router.prototype._settleInstruction = function (instruction) {
	        var _this = this;
	        return instruction.resolveComponent().then(function (_) {
	            var unsettledInstructions = [];
	            if (lang_1.isPresent(instruction.component)) {
	                instruction.component.reuse = false;
	            }
	            if (lang_1.isPresent(instruction.child)) {
	                unsettledInstructions.push(_this._settleInstruction(instruction.child));
	            }
	            collection_1.StringMapWrapper.forEach(instruction.auxInstruction, function (instruction, _) {
	                unsettledInstructions.push(_this._settleInstruction(instruction));
	            });
	            return async_1.PromiseWrapper.all(unsettledInstructions);
	        });
	    };
	    /** @internal */
	    Router.prototype._navigate = function (instruction, _skipLocationChange) {
	        var _this = this;
	        return this._settleInstruction(instruction)
	            .then(function (_) { return _this._routerCanReuse(instruction); })
	            .then(function (_) { return _this._canActivate(instruction); })
	            .then(function (result) {
	            if (!result) {
	                return false;
	            }
	            return _this._routerCanDeactivate(instruction)
	                .then(function (result) {
	                if (result) {
	                    return _this.commit(instruction, _skipLocationChange)
	                        .then(function (_) {
	                        _this._emitNavigationFinish(instruction.toRootUrl());
	                        return true;
	                    });
	                }
	            });
	        });
	    };
	    Router.prototype._emitNavigationFinish = function (url) { async_1.ObservableWrapper.callEmit(this._subject, url); };
	    Router.prototype._emitNavigationFail = function (url) { async_1.ObservableWrapper.callError(this._subject, url); };
	    Router.prototype._afterPromiseFinishNavigating = function (promise) {
	        var _this = this;
	        return async_1.PromiseWrapper.catchError(promise.then(function (_) { return _this._finishNavigating(); }), function (err) {
	            _this._finishNavigating();
	            throw err;
	        });
	    };
	    /*
	     * Recursively set reuse flags
	     */
	    /** @internal */
	    Router.prototype._routerCanReuse = function (instruction) {
	        var _this = this;
	        if (lang_1.isBlank(this._outlet)) {
	            return _resolveToFalse;
	        }
	        if (lang_1.isBlank(instruction.component)) {
	            return _resolveToTrue;
	        }
	        return this._outlet.routerCanReuse(instruction.component)
	            .then(function (result) {
	            instruction.component.reuse = result;
	            if (result && lang_1.isPresent(_this._childRouter) && lang_1.isPresent(instruction.child)) {
	                return _this._childRouter._routerCanReuse(instruction.child);
	            }
	        });
	    };
	    Router.prototype._canActivate = function (nextInstruction) {
	        return canActivateOne(nextInstruction, this.currentInstruction);
	    };
	    Router.prototype._routerCanDeactivate = function (instruction) {
	        var _this = this;
	        if (lang_1.isBlank(this._outlet)) {
	            return _resolveToTrue;
	        }
	        var next;
	        var childInstruction = null;
	        var reuse = false;
	        var componentInstruction = null;
	        if (lang_1.isPresent(instruction)) {
	            childInstruction = instruction.child;
	            componentInstruction = instruction.component;
	            reuse = lang_1.isBlank(instruction.component) || instruction.component.reuse;
	        }
	        if (reuse) {
	            next = _resolveToTrue;
	        }
	        else {
	            next = this._outlet.routerCanDeactivate(componentInstruction);
	        }
	        // TODO: aux route lifecycle hooks
	        return next.then(function (result) {
	            if (result == false) {
	                return false;
	            }
	            if (lang_1.isPresent(_this._childRouter)) {
	                return _this._childRouter._routerCanDeactivate(childInstruction);
	            }
	            return true;
	        });
	    };
	    /**
	     * Updates this router and all descendant routers according to the given instruction
	     */
	    Router.prototype.commit = function (instruction, _skipLocationChange) {
	        var _this = this;
	        if (_skipLocationChange === void 0) { _skipLocationChange = false; }
	        this.currentInstruction = instruction;
	        var next = _resolveToTrue;
	        if (lang_1.isPresent(this._outlet) && lang_1.isPresent(instruction.component)) {
	            var componentInstruction = instruction.component;
	            if (componentInstruction.reuse) {
	                next = this._outlet.reuse(componentInstruction);
	            }
	            else {
	                next =
	                    this.deactivate(instruction).then(function (_) { return _this._outlet.activate(componentInstruction); });
	            }
	            if (lang_1.isPresent(instruction.child)) {
	                next = next.then(function (_) {
	                    if (lang_1.isPresent(_this._childRouter)) {
	                        return _this._childRouter.commit(instruction.child);
	                    }
	                });
	            }
	        }
	        var promises = [];
	        this._auxRouters.forEach(function (router, name) {
	            if (lang_1.isPresent(instruction.auxInstruction[name])) {
	                promises.push(router.commit(instruction.auxInstruction[name]));
	            }
	        });
	        return next.then(function (_) { return async_1.PromiseWrapper.all(promises); });
	    };
	    /** @internal */
	    Router.prototype._startNavigating = function () { this.navigating = true; };
	    /** @internal */
	    Router.prototype._finishNavigating = function () { this.navigating = false; };
	    /**
	     * Subscribe to URL updates from the router
	     */
	    Router.prototype.subscribe = function (onNext, onError) {
	        return async_1.ObservableWrapper.subscribe(this._subject, onNext, onError);
	    };
	    /**
	     * Removes the contents of this router's outlet and all descendant outlets
	     */
	    Router.prototype.deactivate = function (instruction) {
	        var _this = this;
	        var childInstruction = null;
	        var componentInstruction = null;
	        if (lang_1.isPresent(instruction)) {
	            childInstruction = instruction.child;
	            componentInstruction = instruction.component;
	        }
	        var next = _resolveToTrue;
	        if (lang_1.isPresent(this._childRouter)) {
	            next = this._childRouter.deactivate(childInstruction);
	        }
	        if (lang_1.isPresent(this._outlet)) {
	            next = next.then(function (_) { return _this._outlet.deactivate(componentInstruction); });
	        }
	        // TODO: handle aux routes
	        return next;
	    };
	    /**
	     * Given a URL, returns an instruction representing the component graph
	     */
	    Router.prototype.recognize = function (url) {
	        var ancestorComponents = this._getAncestorInstructions();
	        return this.registry.recognize(url, ancestorComponents);
	    };
	    Router.prototype._getAncestorInstructions = function () {
	        var ancestorInstructions = [this.currentInstruction];
	        var ancestorRouter = this;
	        while (lang_1.isPresent(ancestorRouter = ancestorRouter.parent)) {
	            ancestorInstructions.unshift(ancestorRouter.currentInstruction);
	        }
	        return ancestorInstructions;
	    };
	    /**
	     * Navigates to either the last URL successfully navigated to, or the last URL requested if the
	     * router has yet to successfully navigate.
	     */
	    Router.prototype.renavigate = function () {
	        if (lang_1.isBlank(this.lastNavigationAttempt)) {
	            return this._currentNavigation;
	        }
	        return this.navigateByUrl(this.lastNavigationAttempt);
	    };
	    /**
	     * Generate an `Instruction` based on the provided Route Link DSL.
	     */
	    Router.prototype.generate = function (linkParams) {
	        var ancestorInstructions = this._getAncestorInstructions();
	        return this.registry.generate(linkParams, ancestorInstructions);
	    };
	    Router = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [route_registry_1.RouteRegistry, Router, Object, Router])
	    ], Router);
	    return Router;
	})();
	exports.Router = Router;
	var RootRouter = (function (_super) {
	    __extends(RootRouter, _super);
	    function RootRouter(registry, location, primaryComponent) {
	        var _this = this;
	        _super.call(this, registry, null, primaryComponent);
	        this.root = this;
	        this._location = location;
	        this._locationSub = this._location.subscribe(function (change) {
	            // we call recognize ourselves
	            _this.recognize(change['url'])
	                .then(function (instruction) {
	                if (lang_1.isPresent(instruction)) {
	                    _this.navigateByInstruction(instruction, lang_1.isPresent(change['pop']))
	                        .then(function (_) {
	                        // this is a popstate event; no need to change the URL
	                        if (lang_1.isPresent(change['pop']) && change['type'] != 'hashchange') {
	                            return;
	                        }
	                        var emitPath = instruction.toUrlPath();
	                        var emitQuery = instruction.toUrlQuery();
	                        if (emitPath.length > 0 && emitPath[0] != '/') {
	                            emitPath = '/' + emitPath;
	                        }
	                        // Because we've opted to use All hashchange events occur outside Angular.
	                        // However, apps that are migrating might have hash links that operate outside
	                        // angular to which routing must respond.
	                        // To support these cases where we respond to hashchanges and redirect as a
	                        // result, we need to replace the top item on the stack.
	                        if (change['type'] == 'hashchange') {
	                            if (instruction.toRootUrl() != _this._location.path()) {
	                                _this._location.replaceState(emitPath, emitQuery);
	                            }
	                        }
	                        else {
	                            _this._location.go(emitPath, emitQuery);
	                        }
	                    });
	                }
	                else {
	                    _this._emitNavigationFail(change['url']);
	                }
	            });
	        });
	        this.registry.configFromComponent(primaryComponent);
	        this.navigateByUrl(location.path());
	    }
	    RootRouter.prototype.commit = function (instruction, _skipLocationChange) {
	        var _this = this;
	        if (_skipLocationChange === void 0) { _skipLocationChange = false; }
	        var emitPath = instruction.toUrlPath();
	        var emitQuery = instruction.toUrlQuery();
	        if (emitPath.length > 0 && emitPath[0] != '/') {
	            emitPath = '/' + emitPath;
	        }
	        var promise = _super.prototype.commit.call(this, instruction);
	        if (!_skipLocationChange) {
	            promise = promise.then(function (_) { _this._location.go(emitPath, emitQuery); });
	        }
	        return promise;
	    };
	    RootRouter.prototype.dispose = function () {
	        if (lang_1.isPresent(this._locationSub)) {
	            async_1.ObservableWrapper.dispose(this._locationSub);
	            this._locationSub = null;
	        }
	    };
	    RootRouter = __decorate([
	        core_1.Injectable(),
	        __param(2, core_1.Inject(route_registry_1.ROUTER_PRIMARY_COMPONENT)), 
	        __metadata('design:paramtypes', [route_registry_1.RouteRegistry, location_1.Location, lang_1.Type])
	    ], RootRouter);
	    return RootRouter;
	})(Router);
	exports.RootRouter = RootRouter;
	var ChildRouter = (function (_super) {
	    __extends(ChildRouter, _super);
	    function ChildRouter(parent, hostComponent) {
	        _super.call(this, parent.registry, parent, hostComponent, parent.root);
	        this.parent = parent;
	    }
	    ChildRouter.prototype.navigateByUrl = function (url, _skipLocationChange) {
	        if (_skipLocationChange === void 0) { _skipLocationChange = false; }
	        // Delegate navigation to the root router
	        return this.parent.navigateByUrl(url, _skipLocationChange);
	    };
	    ChildRouter.prototype.navigateByInstruction = function (instruction, _skipLocationChange) {
	        if (_skipLocationChange === void 0) { _skipLocationChange = false; }
	        // Delegate navigation to the root router
	        return this.parent.navigateByInstruction(instruction, _skipLocationChange);
	    };
	    return ChildRouter;
	})(Router);
	function canActivateOne(nextInstruction, prevInstruction) {
	    var next = _resolveToTrue;
	    if (lang_1.isBlank(nextInstruction.component)) {
	        return next;
	    }
	    if (lang_1.isPresent(nextInstruction.child)) {
	        next = canActivateOne(nextInstruction.child, lang_1.isPresent(prevInstruction) ? prevInstruction.child : null);
	    }
	    return next.then(function (result) {
	        if (result == false) {
	            return false;
	        }
	        if (nextInstruction.component.reuse) {
	            return true;
	        }
	        var hook = route_lifecycle_reflector_1.getCanActivateHook(nextInstruction.component.componentType);
	        if (lang_1.isPresent(hook)) {
	            return hook(nextInstruction.component, lang_1.isPresent(prevInstruction) ? prevInstruction.component : null);
	        }
	        return true;
	    });
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYW5ndWxhcjIvc3JjL3JvdXRlci9yb3V0ZXIudHMiXSwibmFtZXMiOlsiUm91dGVyIiwiUm91dGVyLmNvbnN0cnVjdG9yIiwiUm91dGVyLmNoaWxkUm91dGVyIiwiUm91dGVyLmF1eFJvdXRlciIsIlJvdXRlci5yZWdpc3RlclByaW1hcnlPdXRsZXQiLCJSb3V0ZXIudW5yZWdpc3RlclByaW1hcnlPdXRsZXQiLCJSb3V0ZXIucmVnaXN0ZXJBdXhPdXRsZXQiLCJSb3V0ZXIuaXNSb3V0ZUFjdGl2ZSIsIlJvdXRlci5jb25maWciLCJSb3V0ZXIubmF2aWdhdGUiLCJSb3V0ZXIubmF2aWdhdGVCeVVybCIsIlJvdXRlci5uYXZpZ2F0ZUJ5SW5zdHJ1Y3Rpb24iLCJSb3V0ZXIuX3NldHRsZUluc3RydWN0aW9uIiwiUm91dGVyLl9uYXZpZ2F0ZSIsIlJvdXRlci5fZW1pdE5hdmlnYXRpb25GaW5pc2giLCJSb3V0ZXIuX2VtaXROYXZpZ2F0aW9uRmFpbCIsIlJvdXRlci5fYWZ0ZXJQcm9taXNlRmluaXNoTmF2aWdhdGluZyIsIlJvdXRlci5fcm91dGVyQ2FuUmV1c2UiLCJSb3V0ZXIuX2NhbkFjdGl2YXRlIiwiUm91dGVyLl9yb3V0ZXJDYW5EZWFjdGl2YXRlIiwiUm91dGVyLmNvbW1pdCIsIlJvdXRlci5fc3RhcnROYXZpZ2F0aW5nIiwiUm91dGVyLl9maW5pc2hOYXZpZ2F0aW5nIiwiUm91dGVyLnN1YnNjcmliZSIsIlJvdXRlci5kZWFjdGl2YXRlIiwiUm91dGVyLnJlY29nbml6ZSIsIlJvdXRlci5fZ2V0QW5jZXN0b3JJbnN0cnVjdGlvbnMiLCJSb3V0ZXIucmVuYXZpZ2F0ZSIsIlJvdXRlci5nZW5lcmF0ZSIsIlJvb3RSb3V0ZXIiLCJSb290Um91dGVyLmNvbnN0cnVjdG9yIiwiUm9vdFJvdXRlci5jb21taXQiLCJSb290Um91dGVyLmRpc3Bvc2UiLCJDaGlsZFJvdXRlciIsIkNoaWxkUm91dGVyLmNvbnN0cnVjdG9yIiwiQ2hpbGRSb3V0ZXIubmF2aWdhdGVCeVVybCIsIkNoaWxkUm91dGVyLm5hdmlnYXRlQnlJbnN0cnVjdGlvbiIsImNhbkFjdGl2YXRlT25lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNCQUE4RCwyQkFBMkIsQ0FBQyxDQUFBO0FBQzFGLDJCQUE2RCxnQ0FBZ0MsQ0FBQyxDQUFBO0FBQzlGLHFCQUEwRCwwQkFBMEIsQ0FBQyxDQUFBO0FBQ3JGLDJCQUE4QyxnQ0FBZ0MsQ0FBQyxDQUFBO0FBQy9FLHFCQUFpQyxlQUFlLENBQUMsQ0FBQTtBQUVqRCwrQkFBc0Qsa0JBQWtCLENBQUMsQ0FBQTtBQU16RSx5QkFBdUIscUJBQXFCLENBQUMsQ0FBQTtBQUM3QywwQ0FBaUMsdUNBQXVDLENBQUMsQ0FBQTtBQUd6RSxJQUFJLGNBQWMsR0FBRyxzQkFBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNsRCxJQUFJLGVBQWUsR0FBRyxzQkFBYyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUVwRDs7Ozs7Ozs7Ozs7Ozs7OztHQWdCRztBQUNIO0lBa0JFQSxnQkFBbUJBLFFBQXVCQSxFQUFTQSxNQUFjQSxFQUFTQSxhQUFrQkEsRUFDekVBLElBQWFBO1FBRGJDLGFBQVFBLEdBQVJBLFFBQVFBLENBQWVBO1FBQVNBLFdBQU1BLEdBQU5BLE1BQU1BLENBQVFBO1FBQVNBLGtCQUFhQSxHQUFiQSxhQUFhQSxDQUFLQTtRQUN6RUEsU0FBSUEsR0FBSkEsSUFBSUEsQ0FBU0E7UUFqQmhDQSxlQUFVQSxHQUFZQSxLQUFLQSxDQUFDQTtRQUU1QkE7O1dBRUdBO1FBQ0lBLHVCQUFrQkEsR0FBZ0JBLElBQUlBLENBQUNBO1FBRXRDQSx1QkFBa0JBLEdBQWlCQSxjQUFjQSxDQUFDQTtRQUNsREEsWUFBT0EsR0FBaUJBLElBQUlBLENBQUNBO1FBRTdCQSxnQkFBV0EsR0FBR0EsSUFBSUEsZ0JBQUdBLEVBQWtCQSxDQUFDQTtRQUd4Q0EsYUFBUUEsR0FBc0JB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QSxVQUFDQSxNQUFlQTtRQUN4Q0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsSUFBSUEsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDcEJBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBO1FBQ2ZBLENBQUNBO1FBQ0RBLEVBQUVBLENBQUNBLENBQUNBLGVBQWVBLENBQUNBLFNBQVNBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBO1lBQ3BDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQTtRQUNkQSxDQUFDQTtRQUNEQSxJQUFJQSxJQUFJQSxHQUFHQSw4Q0FBa0JBLENBQUNBLGVBQWVBLENBQUNBLFNBQVNBLENBQUNBLGFBQWFBLENBQUNBLENBQUNBO1FBQ3ZFQSxFQUFFQSxDQUFDQSxDQUFDQSxnQkFBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDcEJBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLFNBQVNBLEVBQ3pCQSxnQkFBU0EsQ0FBQ0EsZUFBZUEsQ0FBQ0EsR0FBR0EsZUFBZUEsQ0FBQ0EsU0FBU0EsR0FBR0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDN0VBLENBQUNBO1FBQ0RBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBO0lBQ2RBLENBQUNBLENBQUNBLENBQUNBO0FBQ0xBLENBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQcm9taXNlV3JhcHBlciwgRXZlbnRFbWl0dGVyLCBPYnNlcnZhYmxlV3JhcHBlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9hc3luYyc7XG5pbXBvcnQge01hcCwgU3RyaW5nTWFwV3JhcHBlciwgTWFwV3JhcHBlciwgTGlzdFdyYXBwZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvY29sbGVjdGlvbic7XG5pbXBvcnQge2lzQmxhbmssIGlzU3RyaW5nLCBpc1ByZXNlbnQsIFR5cGUsIGlzQXJyYXl9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge0Jhc2VFeGNlcHRpb24sIFdyYXBwZWRFeGNlcHRpb259IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvZXhjZXB0aW9ucyc7XG5pbXBvcnQge0luamVjdCwgSW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbmltcG9ydCB7Um91dGVSZWdpc3RyeSwgUk9VVEVSX1BSSU1BUllfQ09NUE9ORU5UfSBmcm9tICcuL3JvdXRlX3JlZ2lzdHJ5JztcbmltcG9ydCB7XG4gIENvbXBvbmVudEluc3RydWN0aW9uLFxuICBJbnN0cnVjdGlvbixcbn0gZnJvbSAnLi9pbnN0cnVjdGlvbic7XG5pbXBvcnQge1JvdXRlck91dGxldH0gZnJvbSAnLi9kaXJlY3RpdmVzL3JvdXRlcl9vdXRsZXQnO1xuaW1wb3J0IHtMb2NhdGlvbn0gZnJvbSAnLi9sb2NhdGlvbi9sb2NhdGlvbic7XG5pbXBvcnQge2dldENhbkFjdGl2YXRlSG9va30gZnJvbSAnLi9saWZlY3ljbGUvcm91dGVfbGlmZWN5Y2xlX3JlZmxlY3Rvcic7XG5pbXBvcnQge1JvdXRlRGVmaW5pdGlvbn0gZnJvbSAnLi9yb3V0ZV9jb25maWcvcm91dGVfY29uZmlnX2ltcGwnO1xuXG5sZXQgX3Jlc29sdmVUb1RydWUgPSBQcm9taXNlV3JhcHBlci5yZXNvbHZlKHRydWUpO1xubGV0IF9yZXNvbHZlVG9GYWxzZSA9IFByb21pc2VXcmFwcGVyLnJlc29sdmUoZmFsc2UpO1xuXG4vKipcbiAqIFRoZSBgUm91dGVyYCBpcyByZXNwb25zaWJsZSBmb3IgbWFwcGluZyBVUkxzIHRvIGNvbXBvbmVudHMuXG4gKlxuICogWW91IGNhbiBzZWUgdGhlIHN0YXRlIG9mIHRoZSByb3V0ZXIgYnkgaW5zcGVjdGluZyB0aGUgcmVhZC1vbmx5IGZpZWxkIGByb3V0ZXIubmF2aWdhdGluZ2AuXG4gKiBUaGlzIG1heSBiZSB1c2VmdWwgZm9yIHNob3dpbmcgYSBzcGlubmVyLCBmb3IgaW5zdGFuY2UuXG4gKlxuICogIyMgQ29uY2VwdHNcbiAqXG4gKiBSb3V0ZXJzIGFuZCBjb21wb25lbnQgaW5zdGFuY2VzIGhhdmUgYSAxOjEgY29ycmVzcG9uZGVuY2UuXG4gKlxuICogVGhlIHJvdXRlciBob2xkcyByZWZlcmVuY2UgdG8gYSBudW1iZXIgb2Yge0BsaW5rIFJvdXRlck91dGxldH0uXG4gKiBBbiBvdXRsZXQgaXMgYSBwbGFjZWhvbGRlciB0aGF0IHRoZSByb3V0ZXIgZHluYW1pY2FsbHkgZmlsbHMgaW4gZGVwZW5kaW5nIG9uIHRoZSBjdXJyZW50IFVSTC5cbiAqXG4gKiBXaGVuIHRoZSByb3V0ZXIgbmF2aWdhdGVzIGZyb20gYSBVUkwsIGl0IG11c3QgZmlyc3QgcmVjb2duaXplIGl0IGFuZCBzZXJpYWxpemUgaXQgaW50byBhblxuICogYEluc3RydWN0aW9uYC5cbiAqIFRoZSByb3V0ZXIgdXNlcyB0aGUgYFJvdXRlUmVnaXN0cnlgIHRvIGdldCBhbiBgSW5zdHJ1Y3Rpb25gLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUm91dGVyIHtcbiAgbmF2aWdhdGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICBsYXN0TmF2aWdhdGlvbkF0dGVtcHQ6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50IGBJbnN0cnVjdGlvbmAgZm9yIHRoZSByb3V0ZXJcbiAgICovXG4gIHB1YmxpYyBjdXJyZW50SW5zdHJ1Y3Rpb246IEluc3RydWN0aW9uID0gbnVsbDtcblxuICBwcml2YXRlIF9jdXJyZW50TmF2aWdhdGlvbjogUHJvbWlzZTxhbnk+ID0gX3Jlc29sdmVUb1RydWU7XG4gIHByaXZhdGUgX291dGxldDogUm91dGVyT3V0bGV0ID0gbnVsbDtcblxuICBwcml2YXRlIF9hdXhSb3V0ZXJzID0gbmV3IE1hcDxzdHJpbmcsIFJvdXRlcj4oKTtcbiAgcHJpdmF0ZSBfY2hpbGRSb3V0ZXI6IFJvdXRlcjtcblxuICBwcml2YXRlIF9zdWJqZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZWdpc3RyeTogUm91dGVSZWdpc3RyeSwgcHVibGljIHBhcmVudDogUm91dGVyLCBwdWJsaWMgaG9zdENvbXBvbmVudDogYW55LFxuICAgICAgICAgICAgICBwdWJsaWMgcm9vdD86IFJvdXRlcikge31cblxuICAvKipcbiAgICogQ29uc3RydWN0cyBhIGNoaWxkIHJvdXRlci4gWW91IHByb2JhYmx5IGRvbid0IG5lZWQgdG8gdXNlIHRoaXMgdW5sZXNzIHlvdSdyZSB3cml0aW5nIGEgcmV1c2FibGVcbiAgICogY29tcG9uZW50LlxuICAgKi9cbiAgY2hpbGRSb3V0ZXIoaG9zdENvbXBvbmVudDogYW55KTogUm91dGVyIHtcbiAgICByZXR1cm4gdGhpcy5fY2hpbGRSb3V0ZXIgPSBuZXcgQ2hpbGRSb3V0ZXIodGhpcywgaG9zdENvbXBvbmVudCk7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RzIGEgY2hpbGQgcm91dGVyLiBZb3UgcHJvYmFibHkgZG9uJ3QgbmVlZCB0byB1c2UgdGhpcyB1bmxlc3MgeW91J3JlIHdyaXRpbmcgYSByZXVzYWJsZVxuICAgKiBjb21wb25lbnQuXG4gICAqL1xuICBhdXhSb3V0ZXIoaG9zdENvbXBvbmVudDogYW55KTogUm91dGVyIHsgcmV0dXJuIG5ldyBDaGlsZFJvdXRlcih0aGlzLCBob3N0Q29tcG9uZW50KTsgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBhbiBvdXRsZXQgdG8gYmUgbm90aWZpZWQgb2YgcHJpbWFyeSByb3V0ZSBjaGFuZ2VzLlxuICAgKlxuICAgKiBZb3UgcHJvYmFibHkgZG9uJ3QgbmVlZCB0byB1c2UgdGhpcyB1bmxlc3MgeW91J3JlIHdyaXRpbmcgYSByZXVzYWJsZSBjb21wb25lbnQuXG4gICAqL1xuICByZWdpc3RlclByaW1hcnlPdXRsZXQob3V0bGV0OiBSb3V0ZXJPdXRsZXQpOiBQcm9taXNlPGFueT4ge1xuICAgIGlmIChpc1ByZXNlbnQob3V0bGV0Lm5hbWUpKSB7XG4gICAgICB0aHJvdyBuZXcgQmFzZUV4Y2VwdGlvbihgcmVnaXN0ZXJQcmltYXJ5T3V0bGV0IGV4cGVjdHMgdG8gYmUgY2FsbGVkIHdpdGggYW4gdW5uYW1lZCBvdXRsZXQuYCk7XG4gICAgfVxuXG4gICAgaWYgKGlzUHJlc2VudCh0aGlzLl9vdXRsZXQpKSB7XG4gICAgICB0aHJvdyBuZXcgQmFzZUV4Y2VwdGlvbihgUHJpbWFyeSBvdXRsZXQgaXMgYWxyZWFkeSByZWdpc3RlcmVkLmApO1xuICAgIH1cblxuICAgIHRoaXMuX291dGxldCA9IG91dGxldDtcbiAgICBpZiAoaXNQcmVzZW50KHRoaXMuY3VycmVudEluc3RydWN0aW9uKSkge1xuICAgICAgcmV0dXJuIHRoaXMuY29tbWl0KHRoaXMuY3VycmVudEluc3RydWN0aW9uLCBmYWxzZSk7XG4gICAgfVxuICAgIHJldHVybiBfcmVzb2x2ZVRvVHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbnJlZ2lzdGVyIGFuIG91dGxldCAoYmVjYXVzZSBpdCB3YXMgZGVzdHJveWVkLCBldGMpLlxuICAgKlxuICAgKiBZb3UgcHJvYmFibHkgZG9uJ3QgbmVlZCB0byB1c2UgdGhpcyB1bmxlc3MgeW91J3JlIHdyaXRpbmcgYSBjdXN0b20gb3V0bGV0IGltcGxlbWVudGF0aW9uLlxuICAgKi9cbiAgdW5yZWdpc3RlclByaW1hcnlPdXRsZXQob3V0bGV0OiBSb3V0ZXJPdXRsZXQpOiB2b2lkIHtcbiAgICBpZiAoaXNQcmVzZW50KG91dGxldC5uYW1lKSkge1xuICAgICAgdGhyb3cgbmV3IEJhc2VFeGNlcHRpb24oYHJlZ2lzdGVyUHJpbWFyeU91dGxldCBleHBlY3RzIHRvIGJlIGNhbGxlZCB3aXRoIGFuIHVubmFtZWQgb3V0bGV0LmApO1xuICAgIH1cbiAgICB0aGlzLl9vdXRsZXQgPSBudWxsO1xuICB9XG5cblxuICAvKipcbiAgICogUmVnaXN0ZXIgYW4gb3V0bGV0IHRvIG5vdGlmaWVkIG9mIGF1eGlsaWFyeSByb3V0ZSBjaGFuZ2VzLlxuICAgKlxuICAgKiBZb3UgcHJvYmFibHkgZG9uJ3QgbmVlZCB0byB1c2UgdGhpcyB1bmxlc3MgeW91J3JlIHdyaXRpbmcgYSByZXVzYWJsZSBjb21wb25lbnQuXG4gICAqL1xuICByZWdpc3RlckF1eE91dGxldChvdXRsZXQ6IFJvdXRlck91dGxldCk6IFByb21pc2U8YW55PiB7XG4gICAgdmFyIG91dGxldE5hbWUgPSBvdXRsZXQubmFtZTtcbiAgICBpZiAoaXNCbGFuayhvdXRsZXROYW1lKSkge1xuICAgICAgdGhyb3cgbmV3IEJhc2VFeGNlcHRpb24oYHJlZ2lzdGVyQXV4T3V0bGV0IGV4cGVjdHMgdG8gYmUgY2FsbGVkIHdpdGggYW4gb3V0bGV0IHdpdGggYSBuYW1lLmApO1xuICAgIH1cblxuICAgIHZhciByb3V0ZXIgPSB0aGlzLmF1eFJvdXRlcih0aGlzLmhvc3RDb21wb25lbnQpO1xuXG4gICAgdGhpcy5fYXV4Um91dGVycy5zZXQob3V0bGV0TmFtZSwgcm91dGVyKTtcbiAgICByb3V0ZXIuX291dGxldCA9IG91dGxldDtcblxuICAgIHZhciBhdXhJbnN0cnVjdGlvbjtcbiAgICBpZiAoaXNQcmVzZW50KHRoaXMuY3VycmVudEluc3RydWN0aW9uKSAmJlxuICAgICAgICBpc1ByZXNlbnQoYXV4SW5zdHJ1Y3Rpb24gPSB0aGlzLmN1cnJlbnRJbnN0cnVjdGlvbi5hdXhJbnN0cnVjdGlvbltvdXRsZXROYW1lXSkpIHtcbiAgICAgIHJldHVybiByb3V0ZXIuY29tbWl0KGF1eEluc3RydWN0aW9uKTtcbiAgICB9XG4gICAgcmV0dXJuIF9yZXNvbHZlVG9UcnVlO1xuICB9XG5cblxuICAvKipcbiAgICogR2l2ZW4gYW4gaW5zdHJ1Y3Rpb24sIHJldHVybnMgYHRydWVgIGlmIHRoZSBpbnN0cnVjdGlvbiBpcyBjdXJyZW50bHkgYWN0aXZlLFxuICAgKiBvdGhlcndpc2UgYGZhbHNlYC5cbiAgICovXG4gIGlzUm91dGVBY3RpdmUoaW5zdHJ1Y3Rpb246IEluc3RydWN0aW9uKTogYm9vbGVhbiB7XG4gICAgdmFyIHJvdXRlcjogUm91dGVyID0gdGhpcztcbiAgICB3aGlsZSAoaXNQcmVzZW50KHJvdXRlci5wYXJlbnQpICYmIGlzUHJlc2VudChpbnN0cnVjdGlvbi5jaGlsZCkpIHtcbiAgICAgIHJvdXRlciA9IHJvdXRlci5wYXJlbnQ7XG4gICAgICBpbnN0cnVjdGlvbiA9IGluc3RydWN0aW9uLmNoaWxkO1xuICAgIH1cbiAgICByZXR1cm4gaXNQcmVzZW50KHRoaXMuY3VycmVudEluc3RydWN0aW9uKSAmJlxuICAgICAgICAgICB0aGlzLmN1cnJlbnRJbnN0cnVjdGlvbi5jb21wb25lbnQgPT0gaW5zdHJ1Y3Rpb24uY29tcG9uZW50O1xuICB9XG5cblxuICAvKipcbiAgICogRHluYW1pY2FsbHkgdXBkYXRlIHRoZSByb3V0aW5nIGNvbmZpZ3VyYXRpb24gYW5kIHRyaWdnZXIgYSBuYXZpZ2F0aW9uLlxuICAgKlxuICAgKiAjIyMgVXNhZ2VcbiAgICpcbiAgICogYGBgXG4gICAqIHJvdXRlci5jb25maWcoW1xuICAgKiAgIHsgJ3BhdGgnOiAnLycsICdjb21wb25lbnQnOiBJbmRleENvbXAgfSxcbiAgICogICB7ICdwYXRoJzogJy91c2VyLzppZCcsICdjb21wb25lbnQnOiBVc2VyQ29tcCB9LFxuICAgKiBdKTtcbiAgICogYGBgXG4gICAqL1xuICBjb25maWcoZGVmaW5pdGlvbnM6IFJvdXRlRGVmaW5pdGlvbltdKTogUHJvbWlzZTxhbnk+IHtcbiAgICBkZWZpbml0aW9ucy5mb3JFYWNoKFxuICAgICAgICAocm91dGVEZWZpbml0aW9uKSA9PiB7IHRoaXMucmVnaXN0cnkuY29uZmlnKHRoaXMuaG9zdENvbXBvbmVudCwgcm91dGVEZWZpbml0aW9uKTsgfSk7XG4gICAgcmV0dXJuIHRoaXMucmVuYXZpZ2F0ZSgpO1xuICB9XG5cblxuICAvKipcbiAgICogTmF2aWdhdGUgYmFzZWQgb24gdGhlIHByb3ZpZGVkIFJvdXRlIExpbmsgRFNMLiBJdCdzIHByZWZlcnJlZCB0byBuYXZpZ2F0ZSB3aXRoIHRoaXMgbWV0aG9kXG4gICAqIG92ZXIgYG5hdmlnYXRlQnlVcmxgLlxuICAgKlxuICAgKiAjIyMgVXNhZ2VcbiAgICpcbiAgICogVGhpcyBtZXRob2QgdGFrZXMgYW4gYXJyYXkgcmVwcmVzZW50aW5nIHRoZSBSb3V0ZSBMaW5rIERTTDpcbiAgICogYGBgXG4gICAqIFsnLi9NeUNtcCcsIHtwYXJhbTogM31dXG4gICAqIGBgYFxuICAgKiBTZWUgdGhlIHtAbGluayBSb3V0ZXJMaW5rfSBkaXJlY3RpdmUgZm9yIG1vcmUuXG4gICAqL1xuICBuYXZpZ2F0ZShsaW5rUGFyYW1zOiBhbnlbXSk6IFByb21pc2U8YW55PiB7XG4gICAgdmFyIGluc3RydWN0aW9uID0gdGhpcy5nZW5lcmF0ZShsaW5rUGFyYW1zKTtcbiAgICByZXR1cm4gdGhpcy5uYXZpZ2F0ZUJ5SW5zdHJ1Y3Rpb24oaW5zdHJ1Y3Rpb24sIGZhbHNlKTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIE5hdmlnYXRlIHRvIGEgVVJMLiBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gbmF2aWdhdGlvbiBpcyBjb21wbGV0ZS5cbiAgICogSXQncyBwcmVmZXJyZWQgdG8gbmF2aWdhdGUgd2l0aCBgbmF2aWdhdGVgIGluc3RlYWQgb2YgdGhpcyBtZXRob2QsIHNpbmNlIFVSTHMgYXJlIG1vcmUgYnJpdHRsZS5cbiAgICpcbiAgICogSWYgdGhlIGdpdmVuIFVSTCBiZWdpbnMgd2l0aCBhIGAvYCwgcm91dGVyIHdpbGwgbmF2aWdhdGUgYWJzb2x1dGVseS5cbiAgICogSWYgdGhlIGdpdmVuIFVSTCBkb2VzIG5vdCBiZWdpbiB3aXRoIGAvYCwgdGhlIHJvdXRlciB3aWxsIG5hdmlnYXRlIHJlbGF0aXZlIHRvIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgbmF2aWdhdGVCeVVybCh1cmw6IHN0cmluZywgX3NraXBMb2NhdGlvbkNoYW5nZTogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudE5hdmlnYXRpb24gPSB0aGlzLl9jdXJyZW50TmF2aWdhdGlvbi50aGVuKChfKSA9PiB7XG4gICAgICB0aGlzLmxhc3ROYXZpZ2F0aW9uQXR0ZW1wdCA9IHVybDtcbiAgICAgIHRoaXMuX3N0YXJ0TmF2aWdhdGluZygpO1xuICAgICAgcmV0dXJuIHRoaXMuX2FmdGVyUHJvbWlzZUZpbmlzaE5hdmlnYXRpbmcodGhpcy5yZWNvZ25pemUodXJsKS50aGVuKChpbnN0cnVjdGlvbikgPT4ge1xuICAgICAgICBpZiAoaXNCbGFuayhpbnN0cnVjdGlvbikpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX25hdmlnYXRlKGluc3RydWN0aW9uLCBfc2tpcExvY2F0aW9uQ2hhbmdlKTtcbiAgICAgIH0pKTtcbiAgICB9KTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIE5hdmlnYXRlIHZpYSB0aGUgcHJvdmlkZWQgaW5zdHJ1Y3Rpb24uIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBuYXZpZ2F0aW9uIGlzXG4gICAqIGNvbXBsZXRlLlxuICAgKi9cbiAgbmF2aWdhdGVCeUluc3RydWN0aW9uKGluc3RydWN0aW9uOiBJbnN0cnVjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIF9za2lwTG9jYXRpb25DaGFuZ2U6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8YW55PiB7XG4gICAgaWYgKGlzQmxhbmsoaW5zdHJ1Y3Rpb24pKSB7XG4gICAgICByZXR1cm4gX3Jlc29sdmVUb0ZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fY3VycmVudE5hdmlnYXRpb24gPSB0aGlzLl9jdXJyZW50TmF2aWdhdGlvbi50aGVuKChfKSA9PiB7XG4gICAgICB0aGlzLl9zdGFydE5hdmlnYXRpbmcoKTtcbiAgICAgIHJldHVybiB0aGlzLl9hZnRlclByb21pc2VGaW5pc2hOYXZpZ2F0aW5nKHRoaXMuX25hdmlnYXRlKGluc3RydWN0aW9uLCBfc2tpcExvY2F0aW9uQ2hhbmdlKSk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9zZXR0bGVJbnN0cnVjdGlvbihpbnN0cnVjdGlvbjogSW5zdHJ1Y3Rpb24pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBpbnN0cnVjdGlvbi5yZXNvbHZlQ29tcG9uZW50KCkudGhlbigoXykgPT4ge1xuICAgICAgdmFyIHVuc2V0dGxlZEluc3RydWN0aW9uczogQXJyYXk8UHJvbWlzZTxhbnk+PiA9IFtdO1xuXG4gICAgICBpZiAoaXNQcmVzZW50KGluc3RydWN0aW9uLmNvbXBvbmVudCkpIHtcbiAgICAgICAgaW5zdHJ1Y3Rpb24uY29tcG9uZW50LnJldXNlID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc1ByZXNlbnQoaW5zdHJ1Y3Rpb24uY2hpbGQpKSB7XG4gICAgICAgIHVuc2V0dGxlZEluc3RydWN0aW9ucy5wdXNoKHRoaXMuX3NldHRsZUluc3RydWN0aW9uKGluc3RydWN0aW9uLmNoaWxkKSk7XG4gICAgICB9XG5cbiAgICAgIFN0cmluZ01hcFdyYXBwZXIuZm9yRWFjaChpbnN0cnVjdGlvbi5hdXhJbnN0cnVjdGlvbiwgKGluc3RydWN0aW9uOiBJbnN0cnVjdGlvbiwgXykgPT4ge1xuICAgICAgICB1bnNldHRsZWRJbnN0cnVjdGlvbnMucHVzaCh0aGlzLl9zZXR0bGVJbnN0cnVjdGlvbihpbnN0cnVjdGlvbikpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gUHJvbWlzZVdyYXBwZXIuYWxsKHVuc2V0dGxlZEluc3RydWN0aW9ucyk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9uYXZpZ2F0ZShpbnN0cnVjdGlvbjogSW5zdHJ1Y3Rpb24sIF9za2lwTG9jYXRpb25DaGFuZ2U6IGJvb2xlYW4pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl9zZXR0bGVJbnN0cnVjdGlvbihpbnN0cnVjdGlvbilcbiAgICAgICAgLnRoZW4oKF8pID0+IHRoaXMuX3JvdXRlckNhblJldXNlKGluc3RydWN0aW9uKSlcbiAgICAgICAgLnRoZW4oKF8pID0+IHRoaXMuX2NhbkFjdGl2YXRlKGluc3RydWN0aW9uKSlcbiAgICAgICAgLnRoZW4oKHJlc3VsdDogYm9vbGVhbikgPT4ge1xuICAgICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aGlzLl9yb3V0ZXJDYW5EZWFjdGl2YXRlKGluc3RydWN0aW9uKVxuICAgICAgICAgICAgICAudGhlbigocmVzdWx0OiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tbWl0KGluc3RydWN0aW9uLCBfc2tpcExvY2F0aW9uQ2hhbmdlKVxuICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChfKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9lbWl0TmF2aWdhdGlvbkZpbmlzaChpbnN0cnVjdGlvbi50b1Jvb3RVcmwoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2VtaXROYXZpZ2F0aW9uRmluaXNoKHVybCk6IHZvaWQgeyBPYnNlcnZhYmxlV3JhcHBlci5jYWxsRW1pdCh0aGlzLl9zdWJqZWN0LCB1cmwpOyB9XG4gIF9lbWl0TmF2aWdhdGlvbkZhaWwodXJsKTogdm9pZCB7IE9ic2VydmFibGVXcmFwcGVyLmNhbGxFcnJvcih0aGlzLl9zdWJqZWN0LCB1cmwpOyB9XG5cbiAgcHJpdmF0ZSBfYWZ0ZXJQcm9taXNlRmluaXNoTmF2aWdhdGluZyhwcm9taXNlOiBQcm9taXNlPGFueT4pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBQcm9taXNlV3JhcHBlci5jYXRjaEVycm9yKHByb21pc2UudGhlbigoXykgPT4gdGhpcy5fZmluaXNoTmF2aWdhdGluZygpKSwgKGVycikgPT4ge1xuICAgICAgdGhpcy5fZmluaXNoTmF2aWdhdGluZygpO1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xuICB9XG5cbiAgLypcbiAgICogUmVjdXJzaXZlbHkgc2V0IHJldXNlIGZsYWdzXG4gICAqL1xuICAvKiogQGludGVybmFsICovXG4gIF9yb3V0ZXJDYW5SZXVzZShpbnN0cnVjdGlvbjogSW5zdHJ1Y3Rpb24pOiBQcm9taXNlPGFueT4ge1xuICAgIGlmIChpc0JsYW5rKHRoaXMuX291dGxldCkpIHtcbiAgICAgIHJldHVybiBfcmVzb2x2ZVRvRmFsc2U7XG4gICAgfVxuICAgIGlmIChpc0JsYW5rKGluc3RydWN0aW9uLmNvbXBvbmVudCkpIHtcbiAgICAgIHJldHVybiBfcmVzb2x2ZVRvVHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX291dGxldC5yb3V0ZXJDYW5SZXVzZShpbnN0cnVjdGlvbi5jb21wb25lbnQpXG4gICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICBpbnN0cnVjdGlvbi5jb21wb25lbnQucmV1c2UgPSByZXN1bHQ7XG4gICAgICAgICAgaWYgKHJlc3VsdCAmJiBpc1ByZXNlbnQodGhpcy5fY2hpbGRSb3V0ZXIpICYmIGlzUHJlc2VudChpbnN0cnVjdGlvbi5jaGlsZCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jaGlsZFJvdXRlci5fcm91dGVyQ2FuUmV1c2UoaW5zdHJ1Y3Rpb24uY2hpbGQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9jYW5BY3RpdmF0ZShuZXh0SW5zdHJ1Y3Rpb246IEluc3RydWN0aW9uKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIGNhbkFjdGl2YXRlT25lKG5leHRJbnN0cnVjdGlvbiwgdGhpcy5jdXJyZW50SW5zdHJ1Y3Rpb24pO1xuICB9XG5cbiAgcHJpdmF0ZSBfcm91dGVyQ2FuRGVhY3RpdmF0ZShpbnN0cnVjdGlvbjogSW5zdHJ1Y3Rpb24pOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoaXNCbGFuayh0aGlzLl9vdXRsZXQpKSB7XG4gICAgICByZXR1cm4gX3Jlc29sdmVUb1RydWU7XG4gICAgfVxuICAgIHZhciBuZXh0OiBQcm9taXNlPGJvb2xlYW4+O1xuICAgIHZhciBjaGlsZEluc3RydWN0aW9uOiBJbnN0cnVjdGlvbiA9IG51bGw7XG4gICAgdmFyIHJldXNlOiBib29sZWFuID0gZmFsc2U7XG4gICAgdmFyIGNvbXBvbmVudEluc3RydWN0aW9uOiBDb21wb25lbnRJbnN0cnVjdGlvbiA9IG51bGw7XG4gICAgaWYgKGlzUHJlc2VudChpbnN0cnVjdGlvbikpIHtcbiAgICAgIGNoaWxkSW5zdHJ1Y3Rpb24gPSBpbnN0cnVjdGlvbi5jaGlsZDtcbiAgICAgIGNvbXBvbmVudEluc3RydWN0aW9uID0gaW5zdHJ1Y3Rpb24uY29tcG9uZW50O1xuICAgICAgcmV1c2UgPSBpc0JsYW5rKGluc3RydWN0aW9uLmNvbXBvbmVudCkgfHwgaW5zdHJ1Y3Rpb24uY29tcG9uZW50LnJldXNlO1xuICAgIH1cbiAgICBpZiAocmV1c2UpIHtcbiAgICAgIG5leHQgPSBfcmVzb2x2ZVRvVHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV4dCA9IHRoaXMuX291dGxldC5yb3V0ZXJDYW5EZWFjdGl2YXRlKGNvbXBvbmVudEluc3RydWN0aW9uKTtcbiAgICB9XG4gICAgLy8gVE9ETzogYXV4IHJvdXRlIGxpZmVjeWNsZSBob29rc1xuICAgIHJldHVybiBuZXh0LnRoZW48Ym9vbGVhbj4oKHJlc3VsdCk6IGJvb2xlYW4gfCBQcm9taXNlPGJvb2xlYW4+ID0+IHtcbiAgICAgIGlmIChyZXN1bHQgPT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGlzUHJlc2VudCh0aGlzLl9jaGlsZFJvdXRlcikpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoaWxkUm91dGVyLl9yb3V0ZXJDYW5EZWFjdGl2YXRlKGNoaWxkSW5zdHJ1Y3Rpb24pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGlzIHJvdXRlciBhbmQgYWxsIGRlc2NlbmRhbnQgcm91dGVycyBhY2NvcmRpbmcgdG8gdGhlIGdpdmVuIGluc3RydWN0aW9uXG4gICAqL1xuICBjb21taXQoaW5zdHJ1Y3Rpb246IEluc3RydWN0aW9uLCBfc2tpcExvY2F0aW9uQ2hhbmdlOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPGFueT4ge1xuICAgIHRoaXMuY3VycmVudEluc3RydWN0aW9uID0gaW5zdHJ1Y3Rpb247XG5cbiAgICB2YXIgbmV4dDogUHJvbWlzZTxhbnk+ID0gX3Jlc29sdmVUb1RydWU7XG4gICAgaWYgKGlzUHJlc2VudCh0aGlzLl9vdXRsZXQpICYmIGlzUHJlc2VudChpbnN0cnVjdGlvbi5jb21wb25lbnQpKSB7XG4gICAgICB2YXIgY29tcG9uZW50SW5zdHJ1Y3Rpb24gPSBpbnN0cnVjdGlvbi5jb21wb25lbnQ7XG4gICAgICBpZiAoY29tcG9uZW50SW5zdHJ1Y3Rpb24ucmV1c2UpIHtcbiAgICAgICAgbmV4dCA9IHRoaXMuX291dGxldC5yZXVzZShjb21wb25lbnRJbnN0cnVjdGlvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXh0ID1cbiAgICAgICAgICAgIHRoaXMuZGVhY3RpdmF0ZShpbnN0cnVjdGlvbikudGhlbigoXykgPT4gdGhpcy5fb3V0bGV0LmFjdGl2YXRlKGNvbXBvbmVudEluc3RydWN0aW9uKSk7XG4gICAgICB9XG4gICAgICBpZiAoaXNQcmVzZW50KGluc3RydWN0aW9uLmNoaWxkKSkge1xuICAgICAgICBuZXh0ID0gbmV4dC50aGVuKChfKSA9PiB7XG4gICAgICAgICAgaWYgKGlzUHJlc2VudCh0aGlzLl9jaGlsZFJvdXRlcikpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jaGlsZFJvdXRlci5jb21taXQoaW5zdHJ1Y3Rpb24uY2hpbGQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByb21pc2VzOiBQcm9taXNlPGFueT5bXSA9IFtdO1xuICAgIHRoaXMuX2F1eFJvdXRlcnMuZm9yRWFjaCgocm91dGVyLCBuYW1lKSA9PiB7XG4gICAgICBpZiAoaXNQcmVzZW50KGluc3RydWN0aW9uLmF1eEluc3RydWN0aW9uW25hbWVdKSkge1xuICAgICAgICBwcm9taXNlcy5wdXNoKHJvdXRlci5jb21taXQoaW5zdHJ1Y3Rpb24uYXV4SW5zdHJ1Y3Rpb25bbmFtZV0pKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBuZXh0LnRoZW4oKF8pID0+IFByb21pc2VXcmFwcGVyLmFsbChwcm9taXNlcykpO1xuICB9XG5cblxuICAvKiogQGludGVybmFsICovXG4gIF9zdGFydE5hdmlnYXRpbmcoKTogdm9pZCB7IHRoaXMubmF2aWdhdGluZyA9IHRydWU7IH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9maW5pc2hOYXZpZ2F0aW5nKCk6IHZvaWQgeyB0aGlzLm5hdmlnYXRpbmcgPSBmYWxzZTsgfVxuXG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZSB0byBVUkwgdXBkYXRlcyBmcm9tIHRoZSByb3V0ZXJcbiAgICovXG4gIHN1YnNjcmliZShvbk5leHQ6ICh2YWx1ZTogYW55KSA9PiB2b2lkLCBvbkVycm9yPzogKHZhbHVlOiBhbnkpID0+IHZvaWQpOiBPYmplY3Qge1xuICAgIHJldHVybiBPYnNlcnZhYmxlV3JhcHBlci5zdWJzY3JpYmUodGhpcy5fc3ViamVjdCwgb25OZXh0LCBvbkVycm9yKTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIGNvbnRlbnRzIG9mIHRoaXMgcm91dGVyJ3Mgb3V0bGV0IGFuZCBhbGwgZGVzY2VuZGFudCBvdXRsZXRzXG4gICAqL1xuICBkZWFjdGl2YXRlKGluc3RydWN0aW9uOiBJbnN0cnVjdGlvbik6IFByb21pc2U8YW55PiB7XG4gICAgdmFyIGNoaWxkSW5zdHJ1Y3Rpb246IEluc3RydWN0aW9uID0gbnVsbDtcbiAgICB2YXIgY29tcG9uZW50SW5zdHJ1Y3Rpb246IENvbXBvbmVudEluc3RydWN0aW9uID0gbnVsbDtcbiAgICBpZiAoaXNQcmVzZW50KGluc3RydWN0aW9uKSkge1xuICAgICAgY2hpbGRJbnN0cnVjdGlvbiA9IGluc3RydWN0aW9uLmNoaWxkO1xuICAgICAgY29tcG9uZW50SW5zdHJ1Y3Rpb24gPSBpbnN0cnVjdGlvbi5jb21wb25lbnQ7XG4gICAgfVxuICAgIHZhciBuZXh0OiBQcm9taXNlPGFueT4gPSBfcmVzb2x2ZVRvVHJ1ZTtcbiAgICBpZiAoaXNQcmVzZW50KHRoaXMuX2NoaWxkUm91dGVyKSkge1xuICAgICAgbmV4dCA9IHRoaXMuX2NoaWxkUm91dGVyLmRlYWN0aXZhdGUoY2hpbGRJbnN0cnVjdGlvbik7XG4gICAgfVxuICAgIGlmIChpc1ByZXNlbnQodGhpcy5fb3V0bGV0KSkge1xuICAgICAgbmV4dCA9IG5leHQudGhlbigoXykgPT4gdGhpcy5fb3V0bGV0LmRlYWN0aXZhdGUoY29tcG9uZW50SW5zdHJ1Y3Rpb24pKTtcbiAgICB9XG5cbiAgICAvLyBUT0RPOiBoYW5kbGUgYXV4IHJvdXRlc1xuXG4gICAgcmV0dXJuIG5leHQ7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBHaXZlbiBhIFVSTCwgcmV0dXJucyBhbiBpbnN0cnVjdGlvbiByZXByZXNlbnRpbmcgdGhlIGNvbXBvbmVudCBncmFwaFxuICAgKi9cbiAgcmVjb2duaXplKHVybDogc3RyaW5nKTogUHJvbWlzZTxJbnN0cnVjdGlvbj4ge1xuICAgIHZhciBhbmNlc3RvckNvbXBvbmVudHMgPSB0aGlzLl9nZXRBbmNlc3Rvckluc3RydWN0aW9ucygpO1xuICAgIHJldHVybiB0aGlzLnJlZ2lzdHJ5LnJlY29nbml6ZSh1cmwsIGFuY2VzdG9yQ29tcG9uZW50cyk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRBbmNlc3Rvckluc3RydWN0aW9ucygpOiBJbnN0cnVjdGlvbltdIHtcbiAgICB2YXIgYW5jZXN0b3JJbnN0cnVjdGlvbnM6IEluc3RydWN0aW9uW10gPSBbdGhpcy5jdXJyZW50SW5zdHJ1Y3Rpb25dO1xuICAgIHZhciBhbmNlc3RvclJvdXRlcjogUm91dGVyID0gdGhpcztcbiAgICB3aGlsZSAoaXNQcmVzZW50KGFuY2VzdG9yUm91dGVyID0gYW5jZXN0b3JSb3V0ZXIucGFyZW50KSkge1xuICAgICAgYW5jZXN0b3JJbnN0cnVjdGlvbnMudW5zaGlmdChhbmNlc3RvclJvdXRlci5jdXJyZW50SW5zdHJ1Y3Rpb24pO1xuICAgIH1cbiAgICByZXR1cm4gYW5jZXN0b3JJbnN0cnVjdGlvbnM7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBOYXZpZ2F0ZXMgdG8gZWl0aGVyIHRoZSBsYXN0IFVSTCBzdWNjZXNzZnVsbHkgbmF2aWdhdGVkIHRvLCBvciB0aGUgbGFzdCBVUkwgcmVxdWVzdGVkIGlmIHRoZVxuICAgKiByb3V0ZXIgaGFzIHlldCB0byBzdWNjZXNzZnVsbHkgbmF2aWdhdGUuXG4gICAqL1xuICByZW5hdmlnYXRlKCk6IFByb21pc2U8YW55PiB7XG4gICAgaWYgKGlzQmxhbmsodGhpcy5sYXN0TmF2aWdhdGlvbkF0dGVtcHQpKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY3VycmVudE5hdmlnYXRpb247XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm5hdmlnYXRlQnlVcmwodGhpcy5sYXN0TmF2aWdhdGlvbkF0dGVtcHQpO1xuICB9XG5cblxuICAvKipcbiAgICogR2VuZXJhdGUgYW4gYEluc3RydWN0aW9uYCBiYXNlZCBvbiB0aGUgcHJvdmlkZWQgUm91dGUgTGluayBEU0wuXG4gICAqL1xuICBnZW5lcmF0ZShsaW5rUGFyYW1zOiBhbnlbXSk6IEluc3RydWN0aW9uIHtcbiAgICB2YXIgYW5jZXN0b3JJbnN0cnVjdGlvbnMgPSB0aGlzLl9nZXRBbmNlc3Rvckluc3RydWN0aW9ucygpO1xuICAgIHJldHVybiB0aGlzLnJlZ2lzdHJ5LmdlbmVyYXRlKGxpbmtQYXJhbXMsIGFuY2VzdG9ySW5zdHJ1Y3Rpb25zKTtcbiAgfVxufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUm9vdFJvdXRlciBleHRlbmRzIFJvdXRlciB7XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2xvY2F0aW9uOiBMb2NhdGlvbjtcbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfbG9jYXRpb25TdWI6IE9iamVjdDtcblxuICBjb25zdHJ1Y3RvcihyZWdpc3RyeTogUm91dGVSZWdpc3RyeSwgbG9jYXRpb246IExvY2F0aW9uLFxuICAgICAgICAgICAgICBASW5qZWN0KFJPVVRFUl9QUklNQVJZX0NPTVBPTkVOVCkgcHJpbWFyeUNvbXBvbmVudDogVHlwZSkge1xuICAgIHN1cGVyKHJlZ2lzdHJ5LCBudWxsLCBwcmltYXJ5Q29tcG9uZW50KTtcbiAgICB0aGlzLnJvb3QgPSB0aGlzO1xuICAgIHRoaXMuX2xvY2F0aW9uID0gbG9jYXRpb247XG4gICAgdGhpcy5fbG9jYXRpb25TdWIgPSB0aGlzLl9sb2NhdGlvbi5zdWJzY3JpYmUoKGNoYW5nZSkgPT4ge1xuICAgICAgLy8gd2UgY2FsbCByZWNvZ25pemUgb3Vyc2VsdmVzXG4gICAgICB0aGlzLnJlY29nbml6ZShjaGFuZ2VbJ3VybCddKVxuICAgICAgICAgIC50aGVuKChpbnN0cnVjdGlvbikgPT4ge1xuICAgICAgICAgICAgaWYgKGlzUHJlc2VudChpbnN0cnVjdGlvbikpIHtcbiAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZUJ5SW5zdHJ1Y3Rpb24oaW5zdHJ1Y3Rpb24sIGlzUHJlc2VudChjaGFuZ2VbJ3BvcCddKSlcbiAgICAgICAgICAgICAgICAgIC50aGVuKChfKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgaXMgYSBwb3BzdGF0ZSBldmVudDsgbm8gbmVlZCB0byBjaGFuZ2UgdGhlIFVSTFxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNQcmVzZW50KGNoYW5nZVsncG9wJ10pICYmIGNoYW5nZVsndHlwZSddICE9ICdoYXNoY2hhbmdlJykge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgZW1pdFBhdGggPSBpbnN0cnVjdGlvbi50b1VybFBhdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVtaXRRdWVyeSA9IGluc3RydWN0aW9uLnRvVXJsUXVlcnkoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVtaXRQYXRoLmxlbmd0aCA+IDAgJiYgZW1pdFBhdGhbMF0gIT0gJy8nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgZW1pdFBhdGggPSAnLycgKyBlbWl0UGF0aDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIEJlY2F1c2Ugd2UndmUgb3B0ZWQgdG8gdXNlIEFsbCBoYXNoY2hhbmdlIGV2ZW50cyBvY2N1ciBvdXRzaWRlIEFuZ3VsYXIuXG4gICAgICAgICAgICAgICAgICAgIC8vIEhvd2V2ZXIsIGFwcHMgdGhhdCBhcmUgbWlncmF0aW5nIG1pZ2h0IGhhdmUgaGFzaCBsaW5rcyB0aGF0IG9wZXJhdGUgb3V0c2lkZVxuICAgICAgICAgICAgICAgICAgICAvLyBhbmd1bGFyIHRvIHdoaWNoIHJvdXRpbmcgbXVzdCByZXNwb25kLlxuICAgICAgICAgICAgICAgICAgICAvLyBUbyBzdXBwb3J0IHRoZXNlIGNhc2VzIHdoZXJlIHdlIHJlc3BvbmQgdG8gaGFzaGNoYW5nZXMgYW5kIHJlZGlyZWN0IGFzIGFcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVzdWx0LCB3ZSBuZWVkIHRvIHJlcGxhY2UgdGhlIHRvcCBpdGVtIG9uIHRoZSBzdGFjay5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoYW5nZVsndHlwZSddID09ICdoYXNoY2hhbmdlJykge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnN0cnVjdGlvbi50b1Jvb3RVcmwoKSAhPSB0aGlzLl9sb2NhdGlvbi5wYXRoKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvY2F0aW9uLnJlcGxhY2VTdGF0ZShlbWl0UGF0aCwgZW1pdFF1ZXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9jYXRpb24uZ28oZW1pdFBhdGgsIGVtaXRRdWVyeSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5fZW1pdE5hdmlnYXRpb25GYWlsKGNoYW5nZVsndXJsJ10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZWdpc3RyeS5jb25maWdGcm9tQ29tcG9uZW50KHByaW1hcnlDb21wb25lbnQpO1xuICAgIHRoaXMubmF2aWdhdGVCeVVybChsb2NhdGlvbi5wYXRoKCkpO1xuICB9XG5cbiAgY29tbWl0KGluc3RydWN0aW9uOiBJbnN0cnVjdGlvbiwgX3NraXBMb2NhdGlvbkNoYW5nZTogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTxhbnk+IHtcbiAgICB2YXIgZW1pdFBhdGggPSBpbnN0cnVjdGlvbi50b1VybFBhdGgoKTtcbiAgICB2YXIgZW1pdFF1ZXJ5ID0gaW5zdHJ1Y3Rpb24udG9VcmxRdWVyeSgpO1xuICAgIGlmIChlbWl0UGF0aC5sZW5ndGggPiAwICYmIGVtaXRQYXRoWzBdICE9ICcvJykge1xuICAgICAgZW1pdFBhdGggPSAnLycgKyBlbWl0UGF0aDtcbiAgICB9XG4gICAgdmFyIHByb21pc2UgPSBzdXBlci5jb21taXQoaW5zdHJ1Y3Rpb24pO1xuICAgIGlmICghX3NraXBMb2NhdGlvbkNoYW5nZSkge1xuICAgICAgcHJvbWlzZSA9IHByb21pc2UudGhlbigoXykgPT4geyB0aGlzLl9sb2NhdGlvbi5nbyhlbWl0UGF0aCwgZW1pdFF1ZXJ5KTsgfSk7XG4gICAgfVxuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG5cbiAgZGlzcG9zZSgpOiB2b2lkIHtcbiAgICBpZiAoaXNQcmVzZW50KHRoaXMuX2xvY2F0aW9uU3ViKSkge1xuICAgICAgT2JzZXJ2YWJsZVdyYXBwZXIuZGlzcG9zZSh0aGlzLl9sb2NhdGlvblN1Yik7XG4gICAgICB0aGlzLl9sb2NhdGlvblN1YiA9IG51bGw7XG4gICAgfVxuICB9XG59XG5cbmNsYXNzIENoaWxkUm91dGVyIGV4dGVuZHMgUm91dGVyIHtcbiAgY29uc3RydWN0b3IocGFyZW50OiBSb3V0ZXIsIGhvc3RDb21wb25lbnQpIHtcbiAgICBzdXBlcihwYXJlbnQucmVnaXN0cnksIHBhcmVudCwgaG9zdENvbXBvbmVudCwgcGFyZW50LnJvb3QpO1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICB9XG5cblxuICBuYXZpZ2F0ZUJ5VXJsKHVybDogc3RyaW5nLCBfc2tpcExvY2F0aW9uQ2hhbmdlOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPGFueT4ge1xuICAgIC8vIERlbGVnYXRlIG5hdmlnYXRpb24gdG8gdGhlIHJvb3Qgcm91dGVyXG4gICAgcmV0dXJuIHRoaXMucGFyZW50Lm5hdmlnYXRlQnlVcmwodXJsLCBfc2tpcExvY2F0aW9uQ2hhbmdlKTtcbiAgfVxuXG4gIG5hdmlnYXRlQnlJbnN0cnVjdGlvbihpbnN0cnVjdGlvbjogSW5zdHJ1Y3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBfc2tpcExvY2F0aW9uQ2hhbmdlOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPGFueT4ge1xuICAgIC8vIERlbGVnYXRlIG5hdmlnYXRpb24gdG8gdGhlIHJvb3Qgcm91dGVyXG4gICAgcmV0dXJuIHRoaXMucGFyZW50Lm5hdmlnYXRlQnlJbnN0cnVjdGlvbihpbnN0cnVjdGlvbiwgX3NraXBMb2NhdGlvbkNoYW5nZSk7XG4gIH1cbn1cblxuXG5mdW5jdGlvbiBjYW5BY3RpdmF0ZU9uZShuZXh0SW5zdHJ1Y3Rpb246IEluc3RydWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldkluc3RydWN0aW9uOiBJbnN0cnVjdGlvbik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICB2YXIgbmV4dCA9IF9yZXNvbHZlVG9UcnVlO1xuICBpZiAoaXNCbGFuayhuZXh0SW5zdHJ1Y3Rpb24uY29tcG9uZW50KSkge1xuICAgIHJldHVybiBuZXh0O1xuICB9XG4gIGlmIChpc1ByZXNlbnQobmV4dEluc3RydWN0aW9uLmNoaWxkKSkge1xuICAgIG5leHQgPSBjYW5BY3RpdmF0ZU9uZShuZXh0SW5zdHJ1Y3Rpb24uY2hpbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzUHJlc2VudChwcmV2SW5zdHJ1Y3Rpb24pID8gcHJldkluc3RydWN0aW9uLmNoaWxkIDogbnVsbCk7XG4gIH1cbiAgcmV0dXJuIG5leHQudGhlbjxib29sZWFuPigocmVzdWx0OiBib29sZWFuKTogYm9vbGVhbiA9PiB7XG4gICAgaWYgKHJlc3VsdCA9PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAobmV4dEluc3RydWN0aW9uLmNvbXBvbmVudC5yZXVzZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHZhciBob29rID0gZ2V0Q2FuQWN0aXZhdGVIb29rKG5leHRJbnN0cnVjdGlvbi5jb21wb25lbnQuY29tcG9uZW50VHlwZSk7XG4gICAgaWYgKGlzUHJlc2VudChob29rKSkge1xuICAgICAgcmV0dXJuIGhvb2sobmV4dEluc3RydWN0aW9uLmNvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgIGlzUHJlc2VudChwcmV2SW5zdHJ1Y3Rpb24pID8gcHJldkluc3RydWN0aW9uLmNvbXBvbmVudCA6IG51bGwpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSk7XG59XG4iXX0=

/***/ },

/***/ 230:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
	var collection_1 = __webpack_require__(11);
	var async_1 = __webpack_require__(50);
	var lang_1 = __webpack_require__(3);
	var exceptions_1 = __webpack_require__(13);
	var reflection_1 = __webpack_require__(16);
	var core_1 = __webpack_require__(23);
	var route_config_impl_1 = __webpack_require__(231);
	var rules_1 = __webpack_require__(232);
	var rule_set_1 = __webpack_require__(235);
	var instruction_1 = __webpack_require__(234);
	var route_config_normalizer_1 = __webpack_require__(242);
	var url_parser_1 = __webpack_require__(233);
	var _resolveToNull = async_1.PromiseWrapper.resolve(null);
	// A LinkItemArray is an array, which describes a set of routes
	// The items in the array are found in groups:
	// - the first item is the name of the route
	// - the next items are:
	//   - an object containing parameters
	//   - or an array describing an aux route
	// export type LinkRouteItem = string | Object;
	// export type LinkItem = LinkRouteItem | Array<LinkRouteItem>;
	// export type LinkItemArray = Array<LinkItem>;
	/**
	 * Token used to bind the component with the top-level {@link RouteConfig}s for the
	 * application.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/iRUP8B5OUbxCWQ3AcIDm))
	 *
	 * ```
	 * import {Component} from 'angular2/core';
	 * import {
	 *   ROUTER_DIRECTIVES,
	 *   ROUTER_PROVIDERS,
	 *   RouteConfig
	 * } from 'angular2/router';
	 *
	 * @Component({directives: [ROUTER_DIRECTIVES]})
	 * @RouteConfig([
	 *  {...},
	 * ])
	 * class AppCmp {
	 *   // ...
	 * }
	 *
	 * bootstrap(AppCmp, [ROUTER_PROVIDERS]);
	 * ```
	 */
	exports.ROUTER_PRIMARY_COMPONENT = lang_1.CONST_EXPR(new core_1.OpaqueToken('RouterPrimaryComponent'));
	/**
	 * The RouteRegistry holds route configurations for each component in an Angular app.
	 * It is responsible for creating Instructions from URLs, and generating URLs based on route and
	 * parameters.
	 */
	var RouteRegistry = (function () {
	    function RouteRegistry(_rootComponent) {
	        this._rootComponent = _rootComponent;
	        this._rules = new collection_1.Map();
	    }
	    /**
	     * Given a component and a configuration object, add the route to this registry
	     */
	    RouteRegistry.prototype.config = function (parentComponent, config) {
	        config = route_config_normalizer_1.normalizeRouteConfig(config, this);
	        // this is here because Dart type guard reasons
	        if (config instanceof route_config_impl_1.Route) {
	            route_config_normalizer_1.assertComponentExists(config.component, config.path);
	        }
	        else if (config instanceof route_config_impl_1.AuxRoute) {
	            route_config_normalizer_1.assertComponentExists(config.component, config.path);
	        }
	        var rules = this._rules.get(parentComponent);
	        if (lang_1.isBlank(rules)) {
	            rules = new rule_set_1.RuleSet();
	            this._rules.set(parentComponent, rules);
	        }
	        var terminal = rules.config(config);
	        if (config instanceof route_config_impl_1.Route) {
	            if (terminal) {
	                assertTerminalComponent(config.component, config.path);
	            }
	            else {
	                this.configFromComponent(config.component);
	            }
	        }
	    };
	    /**
	     * Reads the annotations of a component and configures the registry based on them
	     */
	    RouteRegistry.prototype.configFromComponent = function (component) {
	        var _this = this;
	        if (!lang_1.isType(component)) {
	            return;
	        }
	        // Don't read the annotations from a type more than once –
	        // this prevents an infinite loop if a component routes recursively.
	        if (this._rules.has(component)) {
	            return;
	        }
	        var annotations = reflection_1.reflector.annotations(component);
	        if (lang_1.isPresent(annotations)) {
	            for (var i = 0; i < annotations.length; i++) {
	                var annotation = annotations[i];
	                if (annotation instanceof route_config_impl_1.RouteConfig) {
	                    var routeCfgs = annotation.configs;
	                    routeCfgs.forEach(function (config) { return _this.config(component, config); });
	                }
	            }
	        }
	    };
	    /**
	     * Given a URL and a parent component, return the most specific instruction for navigating
	     * the application into the state specified by the url
	     */
	    RouteRegistry.prototype.recognize = function (url, ancestorInstructions) {
	        var parsedUrl = url_parser_1.parser.parse(url);
	        return this._recognize(parsedUrl, []);
	    };
	    /**
	     * Recognizes all parent-child routes, but creates unresolved auxiliary routes
	     */
	    RouteRegistry.prototype._recognize = function (parsedUrl, ancestorInstructions, _aux) {
	        var _this = this;
	        if (_aux === void 0) { _aux = false; }
	        var parentInstruction = collection_1.ListWrapper.last(ancestorInstructions);
	        var parentComponent = lang_1.isPresent(parentInstruction) ? parentInstruction.component.componentType :
	            this._rootComponent;
	        var rules = this._rules.get(parentComponent);
	        if (lang_1.isBlank(rules)) {
	            return _resolveToNull;
	        }
	        // Matches some beginning part of the given URL
	        var possibleMatches = _aux ? rules.recognizeAuxiliary(parsedUrl) : rules.recognize(parsedUrl);
	        var matchPromises = possibleMatches.map(function (candidate) { return candidate.then(function (candidate) {
	            if (candidate instanceof rules_1.PathMatch) {
	                var auxParentInstructions = ancestorInstructions.length > 0 ? [collection_1.ListWrapper.last(ancestorInstructions)] : [];
	                var auxInstructions = _this._auxRoutesToUnresolved(candidate.remainingAux, auxParentInstructions);
	                var instruction = new instruction_1.ResolvedInstruction(candidate.instruction, null, auxInstructions);
	                if (lang_1.isBlank(candidate.instruction) || candidate.instruction.terminal) {
	                    return instruction;
	                }
	                var newAncestorInstructions = ancestorInstructions.concat([instruction]);
	                return _this._recognize(candidate.remaining, newAncestorInstructions)
	                    .then(function (childInstruction) {
	                    if (lang_1.isBlank(childInstruction)) {
	                        return null;
	                    }
	                    // redirect instructions are already absolute
	                    if (childInstruction instanceof instruction_1.RedirectInstruction) {
	                        return childInstruction;
	                    }
	                    instruction.child = childInstruction;
	                    return instruction;
	                });
	            }
	            if (candidate instanceof rules_1.RedirectMatch) {
	                var instruction = _this.generate(candidate.redirectTo, ancestorInstructions.concat([null]));
	                return new instruction_1.RedirectInstruction(instruction.component, instruction.child, instruction.auxInstruction, candidate.specificity);
	            }
	        }); });
	        if ((lang_1.isBlank(parsedUrl) || parsedUrl.path == '') && possibleMatches.length == 0) {
	            return async_1.PromiseWrapper.resolve(this.generateDefault(parentComponent));
	        }
	        return async_1.PromiseWrapper.all(matchPromises).then(mostSpecific);
	    };
	    RouteRegistry.prototype._auxRoutesToUnresolved = function (auxRoutes, parentInstructions) {
	        var _this = this;
	        var unresolvedAuxInstructions = {};
	        auxRoutes.forEach(function (auxUrl) {
	            unresolvedAuxInstructions[auxUrl.path] = new instruction_1.UnresolvedInstruction(function () { return _this._recognize(auxUrl, parentInstructions, true); });
	        });
	        return unresolvedAuxInstructions;
	    };
	    /**
	     * Given a normalized list with component names and params like: `['user', {id: 3 }]`
	     * generates a url with a leading slash relative to the provided `parentComponent`.
	     *
	     * If the optional param `_aux` is `true`, then we generate starting at an auxiliary
	     * route boundary.
	     */
	    RouteRegistry.prototype.generate = function (linkParams, ancestorInstructions, _aux) {
	        if (_aux === void 0) { _aux = false; }
	        var params = splitAndFlattenLinkParams(linkParams);
	        var prevInstruction;
	        // The first segment should be either '.' (generate from parent) or '' (generate from root).
	        // When we normalize above, we strip all the slashes, './' becomes '.' and '/' becomes ''.
	        if (collection_1.ListWrapper.first(params) == '') {
	            params.shift();
	            prevInstruction = collection_1.ListWrapper.first(ancestorInstructions);
	            ancestorInstructions = [];
	        }
	        else {
	            prevInstruction = ancestorInstructions.length > 0 ? ancestorInstructions.pop() : null;
	            if (collection_1.ListWrapper.first(params) == '.') {
	                params.shift();
	            }
	            else if (collection_1.ListWrapper.first(params) == '..') {
	                while (collection_1.ListWrapper.first(params) == '..') {
	                    if (ancestorInstructions.length <= 0) {
	                        throw new exceptions_1.BaseException("Link \"" + collection_1.ListWrapper.toJSON(linkParams) + "\" has too many \"../\" segments.");
	                    }
	                    prevInstruction = ancestorInstructions.pop();
	                    params = collection_1.ListWrapper.slice(params, 1);
	                }
	            }
	            else {
	                // we must only peak at the link param, and not consume it
	                var routeName = collection_1.ListWrapper.first(params);
	                var parentComponentType = this._rootComponent;
	                var grandparentComponentType = null;
	                if (ancestorInstructions.length > 1) {
	                    var parentComponentInstruction = ancestorInstructions[ancestorInstructions.length - 1];
	                    var grandComponentInstruction = ancestorInstructions[ancestorInstructions.length - 2];
	                    parentComponentType = parentComponentInstruction.component.componentType;
	                    grandparentComponentType = grandComponentInstruction.component.componentType;
	                }
	                else if (ancestorInstructions.length == 1) {
	                    parentComponentType = ancestorInstructions[0].component.componentType;
	                    grandparentComponentType = this._rootComponent;
	                }
	                // For a link with no leading `./`, `/`, or `../`, we look for a sibling and child.
	                // If both exist, we throw. Otherwise, we prefer whichever exists.
	                var childRouteExists = this.hasRoute(routeName, parentComponentType);
	                var parentRouteExists = lang_1.isPresent(grandparentComponentType) &&
	                    this.hasRoute(routeName, grandparentComponentType);
	                if (parentRouteExists && childRouteExists) {
	                    var msg = "Link \"" + collection_1.ListWrapper.toJSON(linkParams) + "\" is ambiguous, use \"./\" or \"../\" to disambiguate.";
	                    throw new exceptions_1.BaseException(msg);
	                }
	                if (parentRouteExists) {
	                    prevInstruction = ancestorInstructions.pop();
	                }
	            }
	        }
	        if (params[params.length - 1] == '') {
	            params.pop();
	        }
	        if (params.length > 0 && params[0] == '') {
	            params.shift();
	        }
	        if (params.length < 1) {
	            var msg = "Link \"" + collection_1.ListWrapper.toJSON(linkParams) + "\" must include a route name.";
	            throw new exceptions_1.BaseException(msg);
	        }
	        var generatedInstruction = this._generate(params, ancestorInstructions, prevInstruction, _aux, linkParams);
	        // we don't clone the first (root) element
	        for (var i = ancestorInstructions.length - 1; i >= 0; i--) {
	            var ancestorInstruction = ancestorInstructions[i];
	            if (lang_1.isBlank(ancestorInstruction)) {
	                break;
	            }
	            generatedInstruction = ancestorInstruction.replaceChild(generatedInstruction);
	        }
	        return generatedInstruction;
	    };
	    /*
	     * Internal helper that does not make any assertions about the beginning of the link DSL.
	     * `ancestorInstructions` are parents that will be cloned.
	     * `prevInstruction` is the existing instruction that would be replaced, but which might have
	     * aux routes that need to be cloned.
	     */
	    RouteRegistry.prototype._generate = function (linkParams, ancestorInstructions, prevInstruction, _aux, _originalLink) {
	        var _this = this;
	        if (_aux === void 0) { _aux = false; }
	        var parentComponentType = this._rootComponent;
	        var componentInstruction = null;
	        var auxInstructions = {};
	        var parentInstruction = collection_1.ListWrapper.last(ancestorInstructions);
	        if (lang_1.isPresent(parentInstruction) && lang_1.isPresent(parentInstruction.component)) {
	            parentComponentType = parentInstruction.component.componentType;
	        }
	        if (linkParams.length == 0) {
	            var defaultInstruction = this.generateDefault(parentComponentType);
	            if (lang_1.isBlank(defaultInstruction)) {
	                throw new exceptions_1.BaseException("Link \"" + collection_1.ListWrapper.toJSON(_originalLink) + "\" does not resolve to a terminal instruction.");
	            }
	            return defaultInstruction;
	        }
	        // for non-aux routes, we want to reuse the predecessor's existing primary and aux routes
	        // and only override routes for which the given link DSL provides
	        if (lang_1.isPresent(prevInstruction) && !_aux) {
	            auxInstructions = collection_1.StringMapWrapper.merge(prevInstruction.auxInstruction, auxInstructions);
	            componentInstruction = prevInstruction.component;
	        }
	        var rules = this._rules.get(parentComponentType);
	        if (lang_1.isBlank(rules)) {
	            throw new exceptions_1.BaseException("Component \"" + lang_1.getTypeNameForDebugging(parentComponentType) + "\" has no route config.");
	        }
	        var linkParamIndex = 0;
	        var routeParams = {};
	        // first, recognize the primary route if one is provided
	        if (linkParamIndex < linkParams.length && lang_1.isString(linkParams[linkParamIndex])) {
	            var routeName = linkParams[linkParamIndex];
	            if (routeName == '' || routeName == '.' || routeName == '..') {
	                throw new exceptions_1.BaseException("\"" + routeName + "/\" is only allowed at the beginning of a link DSL.");
	            }
	            linkParamIndex += 1;
	            if (linkParamIndex < linkParams.length) {
	                var linkParam = linkParams[linkParamIndex];
	                if (lang_1.isStringMap(linkParam) && !lang_1.isArray(linkParam)) {
	                    routeParams = linkParam;
	                    linkParamIndex += 1;
	                }
	            }
	            var routeRecognizer = (_aux ? rules.auxRulesByName : rules.rulesByName).get(routeName);
	            if (lang_1.isBlank(routeRecognizer)) {
	                throw new exceptions_1.BaseException("Component \"" + lang_1.getTypeNameForDebugging(parentComponentType) + "\" has no route named \"" + routeName + "\".");
	            }
	            // Create an "unresolved instruction" for async routes
	            // we'll figure out the rest of the route when we resolve the instruction and
	            // perform a navigation
	            if (lang_1.isBlank(routeRecognizer.handler.componentType)) {
	                var generatedUrl = routeRecognizer.generateComponentPathValues(routeParams);
	                return new instruction_1.UnresolvedInstruction(function () {
	                    return routeRecognizer.handler.resolveComponentType().then(function (_) {
	                        return _this._generate(linkParams, ancestorInstructions, prevInstruction, _aux, _originalLink);
	                    });
	                }, generatedUrl.urlPath, url_parser_1.convertUrlParamsToArray(generatedUrl.urlParams));
	            }
	            componentInstruction = _aux ? rules.generateAuxiliary(routeName, routeParams) :
	                rules.generate(routeName, routeParams);
	        }
	        // Next, recognize auxiliary instructions.
	        // If we have an ancestor instruction, we preserve whatever aux routes are active from it.
	        while (linkParamIndex < linkParams.length && lang_1.isArray(linkParams[linkParamIndex])) {
	            var auxParentInstruction = [parentInstruction];
	            var auxInstruction = this._generate(linkParams[linkParamIndex], auxParentInstruction, null, true, _originalLink);
	            // TODO: this will not work for aux routes with parameters or multiple segments
	            auxInstructions[auxInstruction.component.urlPath] = auxInstruction;
	            linkParamIndex += 1;
	        }
	        var instruction = new instruction_1.ResolvedInstruction(componentInstruction, null, auxInstructions);
	        // If the component is sync, we can generate resolved child route instructions
	        // If not, we'll resolve the instructions at navigation time
	        if (lang_1.isPresent(componentInstruction) && lang_1.isPresent(componentInstruction.componentType)) {
	            var childInstruction = null;
	            if (componentInstruction.terminal) {
	                if (linkParamIndex >= linkParams.length) {
	                }
	            }
	            else {
	                var childAncestorComponents = ancestorInstructions.concat([instruction]);
	                var remainingLinkParams = linkParams.slice(linkParamIndex);
	                childInstruction = this._generate(remainingLinkParams, childAncestorComponents, null, false, _originalLink);
	            }
	            instruction.child = childInstruction;
	        }
	        return instruction;
	    };
	    RouteRegistry.prototype.hasRoute = function (name, parentComponent) {
	        var rules = this._rules.get(parentComponent);
	        if (lang_1.isBlank(rules)) {
	            return false;
	        }
	        return rules.hasRoute(name);
	    };
	    RouteRegistry.prototype.generateDefault = function (componentCursor) {
	        var _this = this;
	        if (lang_1.isBlank(componentCursor)) {
	            return null;
	        }
	        var rules = this._rules.get(componentCursor);
	        if (lang_1.isBlank(rules) || lang_1.isBlank(rules.defaultRule)) {
	            return null;
	        }
	        var defaultChild = null;
	        if (lang_1.isPresent(rules.defaultRule.handler.componentType)) {
	            var componentInstruction = rules.defaultRule.generate({});
	            if (!rules.defaultRule.terminal) {
	                defaultChild = this.generateDefault(rules.defaultRule.handler.componentType);
	            }
	            return new instruction_1.DefaultInstruction(componentInstruction, defaultChild);
	        }
	        return new instruction_1.UnresolvedInstruction(function () {
	            return rules.defaultRule.handler.resolveComponentType().then(function (_) { return _this.generateDefault(componentCursor); });
	        });
	    };
	    RouteRegistry = __decorate([
	        core_1.Injectable(),
	        __param(0, core_1.Inject(exports.ROUTER_PRIMARY_COMPONENT)), 
	        __metadata('design:paramtypes', [lang_1.Type])
	    ], RouteRegistry);
	    return RouteRegistry;
	})();
	exports.RouteRegistry = RouteRegistry;
	/*
	 * Given: ['/a/b', {c: 2}]
	 * Returns: ['', 'a', 'b', {c: 2}]
	 */
	function splitAndFlattenLinkParams(linkParams) {
	    var accumulation = [];
	    linkParams.forEach(function (item) {
	        if (lang_1.isString(item)) {
	            var strItem = item;
	            accumulation = accumulation.concat(strItem.split('/'));
	        }
	        else {
	            accumulation.push(item);
	        }
	    });
	    return accumulation;
	}
	/*
	 * Given a list of instructions, returns the most specific instruction
	 */
	function mostSpecific(instructions) {
	    instructions = instructions.filter(function (instruction) { return lang_1.isPresent(instruction); });
	    if (instructions.length == 0) {
	        return null;
	    }
	    if (instructions.length == 1) {
	        return instructions[0];
	    }
	    var first = instructions[0];
	    var rest = instructions.slice(1);
	    return rest.reduce(function (instruction, contender) {
	        if (compareSpecificityStrings(contender.specificity, instruction.specificity) == -1) {
	            return contender;
	        }
	        return instruction;
	    }, first);
	}
	/*
	 * Expects strings to be in the form of "[0-2]+"
	 * Returns -1 if string A should be sorted above string B, 1 if it should be sorted after,
	 * or 0 if they are the same.
	 */
	function compareSpecificityStrings(a, b) {
	    var l = lang_1.Math.min(a.length, b.length);
	    for (var i = 0; i < l; i += 1) {
	        var ai = lang_1.StringWrapper.charCodeAt(a, i);
	        var bi = lang_1.StringWrapper.charCodeAt(b, i);
	        var difference = bi - ai;
	        if (difference != 0) {
	            return difference;
	        }
	    }
	    return a.length - b.length;
	}
	function assertTerminalComponent(component, path) {
	    if (!lang_1.isType(component)) {
	        return;
	    }
	    var annotations = reflection_1.reflector.annotations(component);
	    if (lang_1.isPresent(annotations)) {
	        for (var i = 0; i < annotations.length; i++) {
	            var annotation = annotations[i];
	            if (annotation instanceof route_config_impl_1.RouteConfig) {
	                throw new exceptions_1.BaseException("Child routes are not allowed for \"" + path + "\". Use \"...\" on the parent's route path.");
	            }
	        }
	    }
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVfcmVnaXN0cnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbmd1bGFyMi9zcmMvcm91dGVyL3JvdXRlX3JlZ2lzdHJ5LnRzIl0sIm5hbWVzIjpbIlJvdXRlUmVnaXN0cnkiLCJSb3V0ZVJlZ2lzdHJ5LmNvbnN0cnVjdG9yIiwiUm91dGVSZWdpc3RyeS5jb25maWciLCJSb3V0ZVJlZ2lzdHJ5LmNvbmZpZ0Zyb21Db21wb25lbnQiLCJSb3V0ZVJlZ2lzdHJ5LnJlY29nbml6ZSIsIlJvdXRlUmVnaXN0cnkuX3JlY29nbml6ZSIsIlJvdXRlUmVnaXN0cnkuX2F1eFJvdXRlc1RvVW5yZXNvbHZlZCIsIlJvdXRlUmVnaXN0cnkuZ2VuZXJhdGUiLCJSb3V0ZVJlZ2lzdHJ5Ll9nZW5lcmF0ZSIsIlJvdXRlUmVnaXN0cnkuaGFzUm91dGUiLCJSb3V0ZVJlZ2lzdHJ5LmdlbmVyYXRlRGVmYXVsdCIsInNwbGl0QW5kRmxhdHRlbkxpbmtQYXJhbXMiLCJtb3N0U3BlY2lmaWMiLCJjb21wYXJlU3BlY2lmaWNpdHlTdHJpbmdzIiwiYXNzZXJ0VGVybWluYWxDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDJCQUE2RCxnQ0FBZ0MsQ0FBQyxDQUFBO0FBQzlGLHNCQUE2QiwyQkFBMkIsQ0FBQyxDQUFBO0FBQ3pELHFCQVlPLDBCQUEwQixDQUFDLENBQUE7QUFDbEMsMkJBQThDLGdDQUFnQyxDQUFDLENBQUE7QUFDL0UsMkJBQXdCLHlDQUF5QyxDQUFDLENBQUE7QUFDbEUscUJBQThDLGVBQWUsQ0FBQyxDQUFBO0FBRTlELGtDQU9PLGtDQUFrQyxDQUFDLENBQUE7QUFDMUMsc0JBQW1ELGVBQWUsQ0FBQyxDQUFBO0FBQ25FLHlCQUFzQixrQkFBa0IsQ0FBQyxDQUFBO0FBQ3pDLDRCQU1PLGVBQWUsQ0FBQyxDQUFBO0FBRXZCLHdDQUEwRCx3Q0FBd0MsQ0FBQyxDQUFBO0FBQ25HLDJCQUFzRSxjQUFjLENBQUMsQ0FBQTtBQUdyRixJQUFJLGNBQWMsR0FBRyxzQkFBYyxDQUFDLE9BQU8sQ0FBYyxJQUFJLENBQUMsQ0FBQztBQUUvRCwrREFBK0Q7QUFDL0QsOENBQThDO0FBQzlDLDRDQUE0QztBQUM1Qyx3QkFBd0I7QUFDeEIsc0NBQXNDO0FBQ3RDLDBDQUEwQztBQUMxQywrQ0FBK0M7QUFDL0MsK0RBQStEO0FBQy9ELCtDQUErQztBQUUvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBQ1UsZ0NBQXdCLEdBQ2pDLGlCQUFVLENBQUMsSUFBSSxrQkFBVyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQztBQUcxRDs7OztHQUlHO0FBQ0g7SUFJRUEsdUJBQXNEQSxjQUFvQkE7UUFBcEJDLG1CQUFjQSxHQUFkQSxjQUFjQSxDQUFNQTtRQUZsRUEsV0FBTUEsR0FBR0EsSUFBSUEsZ0JBQUdBLEVBQWdCQSxDQUFDQTtJQUVvQ0EsQ0FBQ0E7SUFFOUVEOztPQUVHQTtJQUNIQSw4QkFBTUEsR0FBTkEsVUFBT0EsZUFBb0JBLEVBQUVBLE1BQXVCQTtRQUNsREUsTUFBTUEsR0FBR0EsOENBQW9CQSxDQUFDQSxNQUFNQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUU1Q0EsK0NBQStDQTtRQUMvQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsWUFBWUEseUJBQUtBLENBQUNBLENBQUNBLENBQUNBO1lBQzVCQSwrQ0FBcUJBLENBQUNBLE1BQU1BLENBQUNBLFNBQVNBLEVBQUVBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1FBQ3ZEQSxDQUFDQTtRQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxNQUFNQSxZQUFZQSw0QkFBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDdENBLCtDQUFxQkEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsU0FBU0EsRUFBRUEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDdkRBLENBQUNBO1FBRURBLElBQUlBLEtBQUtBLEdBQUdBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLGVBQWVBLENBQUNBLENBQUNBO1FBRTdDQSxFQUFFQSxDQUFDQSxDQUFDQSxjQUFPQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNuQkEsS0FBS0EsR0FBR0EsSUFBSUEsa0JBQU9BLEVBQUVBLENBQUNBO1lBQ3RCQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxlQUFlQSxFQUFFQSxLQUFLQSxDQUFDQSxDQUFDQTtRQUMxQ0EsQ0FBQ0E7UUFFREEsSUFBSUEsUUFBUUEsR0FBR0EsS0FBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7UUFFcENBLEVBQUVBLENBQUNBLENBQUNBLE1BQU1BLFlBQVlBLHlCQUFLQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUM1QkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2JBLHVCQUF1QkEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsU0FBU0EsRUFBRUEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDekRBLENBQUNBO1lBQUNBLElBQUlBLENBQUNBLENBQUNBO2dCQUNOQSxJQUFJQSxDQUFDQSxtQkFBbUJBLENBQUNBLE1BQU1BLENBQUNBLFNBQVNBLENBQUNBLENBQUNBO1lBQzdDQSxDQUFDQTtRQUNIQSxDQUFDQTtJQUNIQSxDQUFDQTtJQUVERjs7T0FFR0E7SUFDSEEsMkNBQW1CQSxHQUFuQkEsVUFBb0JBLFNBQWNBO1FBQWxDRyxpQkFxQkNBO1FBcEJDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxhQUFNQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN2QkEsTUFBTUEsQ0FBQ0E7UUFDVEEsQ0FBQ0E7UUFFREEsMERBQTBEQTtRQUMxREEsb0VBQW9FQTtRQUNwRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDL0JBLE1BQU1BLENBQUNBO1FBQ1RBLENBQUNBO1FBQ0RBLElBQUlBLFdBQVdBLEdBQUdBLHNCQUFTQSxDQUFDQSxXQUFXQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQTtRQUNuREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsZ0JBQVNBLENBQUNBLFdBQVdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQzNCQSxHQUFHQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxXQUFXQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQSxFQUFFQSxFQUFFQSxDQUFDQTtnQkFDNUNBLElBQUlBLFVBQVVBLEdBQUdBLFdBQVdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUVoQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsVUFBVUEsWUFBWUEsK0JBQVdBLENBQUNBLENBQUNBLENBQUNBO29CQUN0Q0EsSUFBSUEsU0FBU0EsR0FBc0JBLFVBQVVBLENBQUNBLE9BQU9BLENBQUNBO29CQUN0REEsU0FBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsVUFBQUEsTUFBTUEsSUFBSUEsT0FBQUEsS0FBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsU0FBU0EsRUFBRUEsTUFBTUEsQ0FBQ0EsRUFBOUJBLENBQThCQSxDQUFDQSxDQUFDQTtnQkFDOURBLENBQUNBO1lBQ0hBLENBQUNBO1FBQ0hBLENBQUNBO0lBQ0hBLENBQUNBO0lBR0RIOzs7T0FHR0E7SUFDSEEsaUNBQVNBLEdBQVRBLFVBQVVBLEdBQVdBLEVBQUVBLG9CQUFtQ0E7UUFDeERJLElBQUlBLFNBQVNBLEdBQUdBLG1CQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUNsQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsU0FBU0EsRUFBRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7SUFDeENBLENBQUNBO0lBR0RKOztPQUVHQTtJQUNLQSxrQ0FBVUEsR0FBbEJBLFVBQW1CQSxTQUFjQSxFQUFFQSxvQkFBbUNBLEVBQ25EQSxJQUFZQTtRQUQvQkssaUJBNERDQTtRQTNEa0JBLG9CQUFZQSxHQUFaQSxZQUFZQTtRQUM3QkEsSUFBSUEsaUJBQWlCQSxHQUFHQSx3QkFBV0EsQ0FBQ0EsSUFBSUEsQ0FBQ0Esb0JBQW9CQSxDQUFDQSxDQUFDQTtRQUMvREEsSUFBSUEsZUFBZUEsR0FBR0EsZ0JBQVNBLENBQUNBLGlCQUFpQkEsQ0FBQ0EsR0FBR0EsaUJBQWlCQSxDQUFDQSxTQUFTQSxDQUFDQSxhQUFhQTtZQUN6Q0EsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0E7UUFFekVBLElBQUlBLEtBQUtBLEdBQUdBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLGVBQWVBLENBQUNBLENBQUNBO1FBQzdDQSxFQUFFQSxDQUFDQSxDQUFDQSxjQUFPQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNuQkEsTUFBTUEsQ0FBQ0EsY0FBY0EsQ0FBQ0E7UUFDeEJBLENBQUNBO1FBRURBLCtDQUErQ0E7UUFDL0NBLElBQUlBLGVBQWVBLEdBQ2ZBLElBQUlBLEdBQUdBLEtBQUtBLENBQUNBLGtCQUFrQkEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsR0FBR0EsS0FBS0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0E7UUFFNUVBLElBQUlBLGFBQWFBLEdBQTJCQSxlQUFlQSxDQUFDQSxHQUFHQSxDQUMzREEsVUFBQ0EsU0FBOEJBLElBQUtBLE9BQUFBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLFVBQUNBLFNBQXFCQTtZQUV2RUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsU0FBU0EsWUFBWUEsaUJBQVNBLENBQUNBLENBQUNBLENBQUNBO2dCQUNuQ0EsSUFBSUEscUJBQXFCQSxHQUNyQkEsb0JBQW9CQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxHQUFHQSxDQUFDQSx3QkFBV0EsQ0FBQ0EsSUFBSUEsQ0FBQ0Esb0JBQW9CQSxDQUFDQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQTtnQkFDcEZBLElBQUlBLGVBQWVBLEdBQ2ZBLEtBQUlBLENBQUNBLHNCQUFzQkEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsWUFBWUEsRUFBRUEscUJBQXFCQSxDQUFDQSxDQUFDQTtnQkFFL0VBLElBQUlBLFdBQVdBLEdBQUdBLElBQUlBLGlDQUFtQkEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsV0FBV0EsRUFBRUEsSUFBSUEsRUFBRUEsZUFBZUEsQ0FBQ0EsQ0FBQ0E7Z0JBRXhGQSxFQUFFQSxDQUFDQSxDQUFDQSxjQUFPQSxDQUFDQSxTQUFTQSxDQUFDQSxXQUFXQSxDQUFDQSxJQUFJQSxTQUFTQSxDQUFDQSxXQUFXQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDckVBLE1BQU1BLENBQUNBLFdBQVdBLENBQUNBO2dCQUNyQkEsQ0FBQ0E7Z0JBRURBLElBQUlBLHVCQUF1QkEsR0FBa0JBLG9CQUFvQkEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBRXhGQSxNQUFNQSxDQUFDQSxLQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxTQUFTQSxDQUFDQSxTQUFTQSxFQUFFQSx1QkFBdUJBLENBQUNBO3FCQUMvREEsSUFBSUEsQ0FBQ0EsVUFBQ0EsZ0JBQWdCQTtvQkFDckJBLEVBQUVBLENBQUNBLENBQUNBLGNBQU9BLENBQUNBLGdCQUFnQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQzlCQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQTtvQkFDZEEsQ0FBQ0E7b0JBRURBLDZDQUE2Q0E7b0JBQzdDQSxFQUFFQSxDQUFDQSxDQUFDQSxnQkFBZ0JBLFlBQVlBLGlDQUFtQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ3BEQSxNQUFNQSxDQUFDQSxnQkFBZ0JBLENBQUNBO29CQUMxQkEsQ0FBQ0E7b0JBQ0RBLFdBQVdBLENBQUNBLEtBQUtBLEdBQUdBLGdCQUFnQkEsQ0FBQ0E7b0JBQ3JDQSxNQUFNQSxDQUFDQSxXQUFXQSxDQUFDQTtnQkFDckJBLENBQUNBLENBQUNBLENBQUNBO1lBQ1RBLENBQUNBO1lBRURBLEVBQUVBLENBQUNBLENBQUNBLFNBQVNBLFlBQVlBLHFCQUFhQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDdkNBLElBQUlBLFdBQVdBLEdBQ1hBLEtBQUlBLENBQUNBLFFBQVFBLENBQUNBLFNBQVNBLENBQUNBLFVBQVVBLEVBQUVBLG9CQUFvQkEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzdFQSxNQUFNQSxDQUFDQSxJQUFJQSxpQ0FBbUJBLENBQUNBLFdBQVdBLENBQUNBLFNBQVNBLEVBQUVBLFdBQVdBLENBQUNBLEtBQUtBLEVBQ3hDQSxXQUFXQSxDQUFDQSxjQUFjQSxFQUFFQSxTQUFTQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFDQTtZQUNwRkEsQ0FBQ0E7UUFDSEEsQ0FBQ0EsQ0FBQ0EsRUFyQ2tDQSxDQXFDbENBLENBQUNBLENBQUNBO1FBRVJBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLGNBQU9BLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLFNBQVNBLENBQUNBLElBQUlBLElBQUlBLEVBQUVBLENBQUNBLElBQUlBLGVBQWVBLENBQUNBLE1BQU1BLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ2hGQSxNQUFNQSxDQUFDQSxzQkFBY0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDdkVBLENBQUNBO1FBRURBLE1BQU1BLENBQUNBLHNCQUFjQSxDQUFDQSxHQUFHQSxDQUFjQSxhQUFhQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxDQUFDQTtJQUMzRUEsQ0FBQ0E7SUFFT0wsOENBQXNCQSxHQUE5QkEsVUFBK0JBLFNBQWdCQSxFQUNoQkEsa0JBQWlDQTtRQURoRU0saUJBVUNBO1FBUkNBLElBQUlBLHlCQUF5QkEsR0FBaUNBLEVBQUVBLENBQUNBO1FBRWpFQSxTQUFTQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFDQSxNQUFXQTtZQUM1QkEseUJBQXlCQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxJQUFJQSxtQ0FBcUJBLENBQzlEQSxjQUFRQSxNQUFNQSxDQUFDQSxLQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxNQUFNQSxFQUFFQSxrQkFBa0JBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1FBQzNFQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUVIQSxNQUFNQSxDQUFDQSx5QkFBeUJBLENBQUNBO0lBQ25DQSxDQUFDQTtJQUdETjs7Ozs7O09BTUdBO0lBQ0hBLGdDQUFRQSxHQUFSQSxVQUFTQSxVQUFpQkEsRUFBRUEsb0JBQW1DQSxFQUFFQSxJQUFZQTtRQUFaTyxvQkFBWUEsR0FBWkEsWUFBWUE7UUFDM0VBLElBQUlBLE1BQU1BLEdBQUdBLHlCQUF5QkEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0E7UUFDbkRBLElBQUlBLGVBQWVBLENBQUNBO1FBRXBCQSw0RkFBNEZBO1FBQzVGQSwwRkFBMEZBO1FBQzFGQSxFQUFFQSxDQUFDQSxDQUFDQSx3QkFBV0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDcENBLE1BQU1BLENBQUNBLEtBQUtBLEVBQUVBLENBQUNBO1lBQ2ZBLGVBQWVBLEdBQUdBLHdCQUFXQSxDQUFDQSxLQUFLQSxDQUFDQSxvQkFBb0JBLENBQUNBLENBQUNBO1lBQzFEQSxvQkFBb0JBLEdBQUdBLEVBQUVBLENBQUNBO1FBQzVCQSxDQUFDQTtRQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUNOQSxlQUFlQSxHQUFHQSxvQkFBb0JBLENBQUNBLE1BQU1BLEdBQUdBLENBQUNBLEdBQUdBLG9CQUFvQkEsQ0FBQ0EsR0FBR0EsRUFBRUEsR0FBR0EsSUFBSUEsQ0FBQ0E7WUFFdEZBLEVBQUVBLENBQUNBLENBQUNBLHdCQUFXQSxDQUFDQSxLQUFLQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDckNBLE1BQU1BLENBQUNBLEtBQUtBLEVBQUVBLENBQUNBO1lBQ2pCQSxDQUFDQTtZQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSx3QkFBV0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzdDQSxPQUFPQSx3QkFBV0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsSUFBSUEsRUFBRUEsQ0FBQ0E7b0JBQ3pDQSxFQUFFQSxDQUFDQSxDQUFDQSxvQkFBb0JBLENBQUNBLE1BQU1BLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO3dCQUNyQ0EsTUFBTUEsSUFBSUEsMEJBQWFBLENBQ25CQSxZQUFTQSx3QkFBV0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsVUFBVUEsQ0FBQ0Esc0NBQWdDQSxDQUFDQSxDQUFDQTtvQkFDL0VBLENBQUNBO29CQUNEQSxlQUFlQSxHQUFHQSxvQkFBb0JBLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBO29CQUM3Q0EsTUFBTUEsR0FBR0Esd0JBQVdBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO2dCQUN4Q0EsQ0FBQ0E7WUFHSEEsQ0FBQ0E7WUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ05BLDBEQUEwREE7Z0JBQzFEQSxJQUFJQSxTQUFTQSxHQUFHQSx3QkFBV0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7Z0JBQzFDQSxJQUFJQSxtQkFBbUJBLEdBQUdBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBO2dCQUM5Q0EsSUFBSUEsd0JBQXdCQSxHQUFHQSxJQUFJQSxDQUFDQTtnQkFFcENBLEVBQUVBLENBQUNBLENBQUNBLG9CQUFvQkEsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQ3BDQSxJQUFJQSwwQkFBMEJBLEdBQUdBLG9CQUFvQkEsQ0FBQ0Esb0JBQW9CQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDdkZBLElBQUlBLHlCQUF5QkEsR0FBR0Esb0JBQW9CQSxDQUFDQSxvQkFBb0JBLENBQUNBLE1BQU1BLEdBQUdBLENBQUNBLENBQUNBLENBQUNBO29CQUV0RkEsbUJBQW1CQSxHQUFHQSwwQkFBMEJBLENBQUNBLFNBQVNBLENBQUNBLGFBQWFBLENBQUNBO29CQUN6RUEsd0JBQXdCQSxHQUFHQSx5QkFBeUJBLENBQUNBLFNBQVNBLENBQUNBLGFBQWFBLENBQUNBO2dCQUMvRUEsQ0FBQ0E7Z0JBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLG9CQUFvQkEsQ0FBQ0EsTUFBTUEsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQzVDQSxtQkFBbUJBLEdBQUdBLG9CQUFvQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsYUFBYUEsQ0FBQ0E7b0JBQ3RFQSx3QkFBd0JBLEdBQUdBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBO2dCQUNqREEsQ0FBQ0E7Z0JBRURBLG1GQUFtRkE7Z0JBQ25GQSxrRUFBa0VBO2dCQUNsRUEsSUFBSUEsZ0JBQWdCQSxHQUFHQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxTQUFTQSxFQUFFQSxtQkFBbUJBLENBQUNBLENBQUNBO2dCQUNyRUEsSUFBSUEsaUJBQWlCQSxHQUFHQSxnQkFBU0EsQ0FBQ0Esd0JBQXdCQSxDQUFDQTtvQkFDbkNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLFNBQVNBLEVBQUVBLHdCQUF3QkEsQ0FBQ0EsQ0FBQ0E7Z0JBRTNFQSxFQUFFQSxDQUFDQSxDQUFDQSxpQkFBaUJBLElBQUlBLGdCQUFnQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQzFDQSxJQUFJQSxHQUFHQSxHQUNIQSxZQUFTQSx3QkFBV0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsNERBQW9EQSxDQUFDQTtvQkFDaEdBLE1BQU1BLElBQUlBLDBCQUFhQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtnQkFDL0JBLENBQUNBO2dCQUVEQSxFQUFFQSxDQUFDQSxDQUFDQSxpQkFBaUJBLENBQUNBLENBQUNBLENBQUNBO29CQUN0QkEsZUFBZUEsR0FBR0Esb0JBQW9CQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQTtnQkFDL0NBLENBQUNBO1lBQ0hBLENBQUNBO1FBQ0hBLENBQUNBO1FBRURBLEVBQUVBLENBQUNBLENBQUNBLE1BQU1BLENBQUNBLE1BQU1BLENBQUNBLE1BQU1BLEdBQUdBLENBQUNBLENBQUNBLElBQUlBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO1lBQ3BDQSxNQUFNQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQTtRQUNmQSxDQUFDQTtRQUVEQSxFQUFFQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxJQUFJQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN6Q0EsTUFBTUEsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0E7UUFDakJBLENBQUNBO1FBRURBLEVBQUVBLENBQUNBLENBQUNBLE1BQU1BLENBQUNBLE1BQU1BLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ3RCQSxJQUFJQSxHQUFHQSxHQUFHQSxZQUFTQSx3QkFBV0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsVUFBVUEsQ0FBQ0Esa0NBQThCQSxDQUFDQTtZQUNoRkEsTUFBTUEsSUFBSUEsMEJBQWFBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1FBQy9CQSxDQUFDQTtRQUVEQSxJQUFJQSxvQkFBb0JBLEdBQ3BCQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxFQUFFQSxvQkFBb0JBLEVBQUVBLGVBQWVBLEVBQUVBLElBQUlBLEVBQUVBLFVBQVVBLENBQUNBLENBQUNBO1FBRXBGQSwwQ0FBMENBO1FBQzFDQSxHQUFHQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxHQUFHQSxvQkFBb0JBLENBQUNBLE1BQU1BLEdBQUdBLENBQUNBLEVBQUVBLENBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLEVBQUVBLENBQUNBO1lBQzFEQSxJQUFJQSxtQkFBbUJBLEdBQUdBLG9CQUFvQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDbERBLEVBQUVBLENBQUNBLENBQUNBLGNBQU9BLENBQUNBLG1CQUFtQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2pDQSxLQUFLQSxDQUFDQTtZQUNSQSxDQUFDQTtZQUNEQSxvQkFBb0JBLEdBQUdBLG1CQUFtQkEsQ0FBQ0EsWUFBWUEsQ0FBQ0Esb0JBQW9CQSxDQUFDQSxDQUFDQTtRQUNoRkEsQ0FBQ0E7UUFFREEsTUFBTUEsQ0FBQ0Esb0JBQW9CQSxDQUFDQTtJQUM5QkEsQ0FBQ0E7SUFHRFA7Ozs7O09BS0dBO0lBQ0tBLGlDQUFTQSxHQUFqQkEsVUFBa0JBLFVBQWlCQSxFQUFFQSxvQkFBbUNBLEVBQ3REQSxlQUE0QkEsRUFBRUEsSUFBWUEsRUFBRUEsYUFBb0JBO1FBRGxGUSxpQkEwR0NBO1FBekcrQ0Esb0JBQVlBLEdBQVpBLFlBQVlBO1FBQzFEQSxJQUFJQSxtQkFBbUJBLEdBQUdBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBO1FBQzlDQSxJQUFJQSxvQkFBb0JBLEdBQUdBLElBQUlBLENBQUNBO1FBQ2hDQSxJQUFJQSxlQUFlQSxHQUFpQ0EsRUFBRUEsQ0FBQ0E7UUFFdkRBLElBQUlBLGlCQUFpQkEsR0FBZ0JBLHdCQUFXQSxDQUFDQSxJQUFJQSxDQUFDQSxvQkFBb0JBLENBQUNBLENBQUNBO1FBQzVFQSxFQUFFQSxDQUFDQSxDQUFDQSxnQkFBU0EsQ0FBQ0EsaUJBQWlCQSxDQUFDQSxJQUFJQSxnQkFBU0EsQ0FBQ0EsaUJBQWlCQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUMzRUEsbUJBQW1CQSxHQUFHQSxpQkFBaUJBLENBQUNBLFNBQVNBLENBQUNBLGFBQWFBLENBQUNBO1FBQ2xFQSxDQUFDQTtRQUVEQSxFQUFFQSxDQUFDQSxDQUFDQSxVQUFVQSxDQUFDQSxNQUFNQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUMzQkEsSUFBSUEsa0JBQWtCQSxHQUFHQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxtQkFBbUJBLENBQUNBLENBQUNBO1lBQ25FQSxFQUFFQSxDQUFDQSxDQUFDQSxjQUFPQSxDQUFDQSxrQkFBa0JBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUNoQ0EsTUFBTUEsSUFBSUEsMEJBQWFBLENBQ25CQSxZQUFTQSx3QkFBV0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsbURBQStDQSxDQUFDQSxDQUFDQTtZQUNqR0EsQ0FBQ0E7WUFDREEsTUFBTUEsQ0FBQ0Esa0JBQWtCQSxDQUFDQTtRQUM1QkEsQ0FBQ0E7UUFFREEseUZBQXlGQTtRQUN6RkEsaUVBQWlFQTtRQUNqRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsZ0JBQVNBLENBQUNBLGVBQWVBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO1lBQ3hDQSxlQUFlQSxHQUFHQSw2QkFBZ0JBLENBQUNBLEtBQUtBLENBQUNBLGVBQWVBLENBQUNBLGNBQWNBLEVBQUVBLGVBQWVBLENBQUNBLENBQUNBO1lBQzFGQSxvQkFBb0JBLEdBQUdBLGVBQWVBLENBQUNBLFNBQVNBLENBQUNBO1FBQ25EQSxDQUFDQTtRQUVEQSxJQUFJQSxLQUFLQSxHQUFHQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxtQkFBbUJBLENBQUNBLENBQUNBO1FBQ2pEQSxFQUFFQSxDQUFDQSxDQUFDQSxjQUFPQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNuQkEsTUFBTUEsSUFBSUEsMEJBQWFBLENBQ25CQSxpQkFBY0EsOEJBQXVCQSxDQUFDQSxtQkFBbUJBLENBQUNBLDRCQUF3QkEsQ0FBQ0EsQ0FBQ0E7UUFDMUZBLENBQUNBO1FBRURBLElBQUlBLGNBQWNBLEdBQUdBLENBQUNBLENBQUNBO1FBQ3ZCQSxJQUFJQSxXQUFXQSxHQUF5QkEsRUFBRUEsQ0FBQ0E7UUFFM0NBLHdEQUF3REE7UUFDeERBLEVBQUVBLENBQUNBLENBQUNBLGNBQWNBLEdBQUdBLFVBQVVBLENBQUNBLE1BQU1BLElBQUlBLGVBQVFBLENBQUNBLFVBQVVBLENBQUNBLGNBQWNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQy9FQSxJQUFJQSxTQUFTQSxHQUFHQSxVQUFVQSxDQUFDQSxjQUFjQSxDQUFDQSxDQUFDQTtZQUMzQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsU0FBU0EsSUFBSUEsRUFBRUEsSUFBSUEsU0FBU0EsSUFBSUEsR0FBR0EsSUFBSUEsU0FBU0EsSUFBSUEsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzdEQSxNQUFNQSxJQUFJQSwwQkFBYUEsQ0FBQ0EsT0FBSUEsU0FBU0Esd0RBQW9EQSxDQUFDQSxDQUFDQTtZQUM3RkEsQ0FBQ0E7WUFDREEsY0FBY0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDcEJBLEVBQUVBLENBQUNBLENBQUNBLGNBQWNBLEdBQUdBLFVBQVVBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBO2dCQUN2Q0EsSUFBSUEsU0FBU0EsR0FBR0EsVUFBVUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzNDQSxFQUFFQSxDQUFDQSxDQUFDQSxrQkFBV0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsY0FBT0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQ2xEQSxXQUFXQSxHQUFHQSxTQUFTQSxDQUFDQTtvQkFDeEJBLGNBQWNBLElBQUlBLENBQUNBLENBQUNBO2dCQUN0QkEsQ0FBQ0E7WUFDSEEsQ0FBQ0E7WUFDREEsSUFBSUEsZUFBZUEsR0FBR0EsQ0FBQ0EsSUFBSUEsR0FBR0EsS0FBS0EsQ0FBQ0EsY0FBY0EsR0FBR0EsS0FBS0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0E7WUFFdkZBLEVBQUVBLENBQUNBLENBQUNBLGNBQU9BLENBQUNBLGVBQWVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUM3QkEsTUFBTUEsSUFBSUEsMEJBQWFBLENBQ25CQSxpQkFBY0EsOEJBQXVCQSxDQUFDQSxtQkFBbUJBLENBQUNBLGdDQUF5QkEsU0FBU0EsUUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDeEdBLENBQUNBO1lBRURBLHNEQUFzREE7WUFDdERBLDZFQUE2RUE7WUFDN0VBLHVCQUF1QkE7WUFDdkJBLEVBQUVBLENBQUNBLENBQUNBLGNBQU9BLENBQUNBLGVBQWVBLENBQUNBLE9BQU9BLENBQUNBLGFBQWFBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUNuREEsSUFBSUEsWUFBWUEsR0FBaUJBLGVBQWVBLENBQUNBLDJCQUEyQkEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzFGQSxNQUFNQSxDQUFDQSxJQUFJQSxtQ0FBcUJBLENBQUNBO29CQUMvQkEsTUFBTUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsT0FBT0EsQ0FBQ0Esb0JBQW9CQSxFQUFFQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFDQSxDQUFDQTt3QkFDM0RBLE1BQU1BLENBQUNBLEtBQUlBLENBQUNBLFNBQVNBLENBQUNBLFVBQVVBLEVBQUVBLG9CQUFvQkEsRUFBRUEsZUFBZUEsRUFBRUEsSUFBSUEsRUFDdkRBLGFBQWFBLENBQUNBLENBQUNBO29CQUN2Q0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ0xBLENBQUNBLEVBQUVBLFlBQVlBLENBQUNBLE9BQU9BLEVBQUVBLG9DQUF1QkEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDNUVBLENBQUNBO1lBRURBLG9CQUFvQkEsR0FBR0EsSUFBSUEsR0FBR0EsS0FBS0EsQ0FBQ0EsaUJBQWlCQSxDQUFDQSxTQUFTQSxFQUFFQSxXQUFXQSxDQUFDQTtnQkFDL0NBLEtBQUtBLENBQUNBLFFBQVFBLENBQUNBLFNBQVNBLEVBQUVBLFdBQVdBLENBQUNBLENBQUNBO1FBQ3ZFQSxDQUFDQTtRQUVEQSwwQ0FBMENBO1FBQzFDQSwwRkFBMEZBO1FBQzFGQSxPQUFPQSxjQUFjQSxHQUFHQSxVQUFVQSxDQUFDQSxNQUFNQSxJQUFJQSxjQUFPQSxDQUFDQSxVQUFVQSxDQUFDQSxjQUFjQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQTtZQUNqRkEsSUFBSUEsb0JBQW9CQSxHQUFrQkEsQ0FBQ0EsaUJBQWlCQSxDQUFDQSxDQUFDQTtZQUM5REEsSUFBSUEsY0FBY0EsR0FBR0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsRUFBRUEsb0JBQW9CQSxFQUFFQSxJQUFJQSxFQUN0REEsSUFBSUEsRUFBRUEsYUFBYUEsQ0FBQ0EsQ0FBQ0E7WUFFekRBLCtFQUErRUE7WUFDL0VBLGVBQWVBLENBQUNBLGNBQWNBLENBQUNBLFNBQVNBLENBQUNBLE9BQU9BLENBQUNBLEdBQUdBLGNBQWNBLENBQUNBO1lBQ25FQSxjQUFjQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUN0QkEsQ0FBQ0E7UUFFREEsSUFBSUEsV0FBV0EsR0FBR0EsSUFBSUEsaUNBQW1CQSxDQUFDQSxvQkFBb0JBLEVBQUVBLElBQUlBLEVBQUVBLGVBQWVBLENBQUNBLENBQUNBO1FBRXZGQSw4RUFBOEVBO1FBQzlFQSw0REFBNERBO1FBQzVEQSxFQUFFQSxDQUFDQSxDQUFDQSxnQkFBU0EsQ0FBQ0Esb0JBQW9CQSxDQUFDQSxJQUFJQSxnQkFBU0EsQ0FBQ0Esb0JBQW9CQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNyRkEsSUFBSUEsZ0JBQWdCQSxHQUFnQkEsSUFBSUEsQ0FBQ0E7WUFDekNBLEVBQUVBLENBQUNBLENBQUNBLG9CQUFvQkEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2xDQSxFQUFFQSxDQUFDQSxDQUFDQSxjQUFjQSxJQUFJQSxVQUFVQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFFMUNBLENBQUNBO1lBQ0hBLENBQUNBO1lBQUNBLElBQUlBLENBQUNBLENBQUNBO2dCQUNOQSxJQUFJQSx1QkFBdUJBLEdBQWtCQSxvQkFBb0JBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLFdBQVdBLENBQUNBLENBQUNBLENBQUNBO2dCQUN4RkEsSUFBSUEsbUJBQW1CQSxHQUFHQSxVQUFVQSxDQUFDQSxLQUFLQSxDQUFDQSxjQUFjQSxDQUFDQSxDQUFDQTtnQkFDM0RBLGdCQUFnQkEsR0FBR0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsbUJBQW1CQSxFQUFFQSx1QkFBdUJBLEVBQUVBLElBQUlBLEVBQUVBLEtBQUtBLEVBQ3pEQSxhQUFhQSxDQUFDQSxDQUFDQTtZQUNuREEsQ0FBQ0E7WUFDREEsV0FBV0EsQ0FBQ0EsS0FBS0EsR0FBR0EsZ0JBQWdCQSxDQUFDQTtRQUN2Q0EsQ0FBQ0E7UUFFREEsTUFBTUEsQ0FBQ0EsV0FBV0EsQ0FBQ0E7SUFDckJBLENBQUNBO0lBRU1SLGdDQUFRQSxHQUFmQSxVQUFnQkEsSUFBWUEsRUFBRUEsZUFBb0JBO1FBQ2hEUyxJQUFJQSxLQUFLQSxHQUFHQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxlQUFlQSxDQUFDQSxDQUFDQTtRQUM3Q0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsY0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDbkJBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBO1FBQ2ZBLENBQUNBO1FBQ0RBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO0lBQzlCQSxDQUFDQTtJQUVNVCx1Q0FBZUEsR0FBdEJBLFVBQXVCQSxlQUFxQkE7UUFBNUNVLGlCQXVCQ0E7UUF0QkNBLEVBQUVBLENBQUNBLENBQUNBLGNBQU9BLENBQUNBLGVBQWVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQzdCQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQTtRQUNkQSxDQUFDQTtRQUVEQSxJQUFJQSxLQUFLQSxHQUFHQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxlQUFlQSxDQUFDQSxDQUFDQTtRQUM3Q0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsY0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsY0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDakRBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBO1FBQ2RBLENBQUNBO1FBRURBLElBQUlBLFlBQVlBLEdBQUdBLElBQUlBLENBQUNBO1FBQ3hCQSxFQUFFQSxDQUFDQSxDQUFDQSxnQkFBU0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsYUFBYUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDdkRBLElBQUlBLG9CQUFvQkEsR0FBR0EsS0FBS0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7WUFDMURBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLFdBQVdBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBO2dCQUNoQ0EsWUFBWUEsR0FBR0EsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsYUFBYUEsQ0FBQ0EsQ0FBQ0E7WUFDL0VBLENBQUNBO1lBQ0RBLE1BQU1BLENBQUNBLElBQUlBLGdDQUFrQkEsQ0FBQ0Esb0JBQW9CQSxFQUFFQSxZQUFZQSxDQUFDQSxDQUFDQTtRQUNwRUEsQ0FBQ0E7UUFFREEsTUFBTUEsQ0FBQ0EsSUFBSUEsbUNBQXFCQSxDQUFDQTtZQUMvQkEsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsT0FBT0EsQ0FBQ0Esb0JBQW9CQSxFQUFFQSxDQUFDQSxJQUFJQSxDQUN4REEsVUFBQ0EsQ0FBQ0EsSUFBS0EsT0FBQUEsS0FBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsRUFBckNBLENBQXFDQSxDQUFDQSxDQUFDQTtRQUNwREEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDTEEsQ0FBQ0E7SUExWUhWO1FBQUNBLGlCQUFVQSxFQUFFQTtRQUlDQSxXQUFDQSxhQUFNQSxDQUFDQSxnQ0FBd0JBLENBQUNBLENBQUFBOztzQkF1WTlDQTtJQUFEQSxvQkFBQ0E7QUFBREEsQ0FBQ0EsQUEzWUQsSUEyWUM7QUExWVkscUJBQWEsZ0JBMFl6QixDQUFBO0FBRUQ7OztHQUdHO0FBQ0gsbUNBQW1DLFVBQWlCO0lBQ2xEVyxJQUFJQSxZQUFZQSxHQUFHQSxFQUFFQSxDQUFDQTtJQUN0QkEsVUFBVUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsVUFBU0EsSUFBU0E7UUFDbkMsRUFBRSxDQUFDLENBQUMsZUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQixJQUFJLE9BQU8sR0FBbUIsSUFBSSxDQUFDO1lBQ25DLFlBQVksR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN6RCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLENBQUM7SUFDSCxDQUFDLENBQUNBLENBQUNBO0lBQ0hBLE1BQU1BLENBQUNBLFlBQVlBLENBQUNBO0FBQ3RCQSxDQUFDQTtBQUdEOztHQUVHO0FBQ0gsc0JBQXNCLFlBQTJCO0lBQy9DQyxZQUFZQSxHQUFHQSxZQUFZQSxDQUFDQSxNQUFNQSxDQUFDQSxVQUFDQSxXQUFXQSxJQUFLQSxPQUFBQSxnQkFBU0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsRUFBdEJBLENBQXNCQSxDQUFDQSxDQUFDQTtJQUM1RUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsTUFBTUEsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDN0JBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBO0lBQ2RBLENBQUNBO0lBQ0RBLEVBQUVBLENBQUNBLENBQUNBLFlBQVlBLENBQUNBLE1BQU1BLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1FBQzdCQSxNQUFNQSxDQUFDQSxZQUFZQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUN6QkEsQ0FBQ0E7SUFDREEsSUFBSUEsS0FBS0EsR0FBR0EsWUFBWUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDNUJBLElBQUlBLElBQUlBLEdBQUdBLFlBQVlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO0lBQ2pDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxVQUFDQSxXQUF3QkEsRUFBRUEsU0FBc0JBO1FBQ2xFQSxFQUFFQSxDQUFDQSxDQUFDQSx5QkFBeUJBLENBQUNBLFNBQVNBLENBQUNBLFdBQVdBLEVBQUVBLFdBQVdBLENBQUNBLFdBQVdBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ3BGQSxNQUFNQSxDQUFDQSxTQUFTQSxDQUFDQTtRQUNuQkEsQ0FBQ0E7UUFDREEsTUFBTUEsQ0FBQ0EsV0FBV0EsQ0FBQ0E7SUFDckJBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLENBQUNBO0FBQ1pBLENBQUNBO0FBRUQ7Ozs7R0FJRztBQUNILG1DQUFtQyxDQUFTLEVBQUUsQ0FBUztJQUNyREMsSUFBSUEsQ0FBQ0EsR0FBR0EsV0FBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7SUFDckNBLEdBQUdBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLENBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBO1FBQzlCQSxJQUFJQSxFQUFFQSxHQUFHQSxvQkFBYUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDeENBLElBQUlBLEVBQUVBLEdBQUdBLG9CQUFhQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUN4Q0EsSUFBSUEsVUFBVUEsR0FBR0EsRUFBRUEsR0FBR0EsRUFBRUEsQ0FBQ0E7UUFDekJBLEVBQUVBLENBQUNBLENBQUNBLFVBQVVBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ3BCQSxNQUFNQSxDQUFDQSxVQUFVQSxDQUFDQTtRQUNwQkEsQ0FBQ0E7SUFDSEEsQ0FBQ0E7SUFDREEsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0E7QUFDN0JBLENBQUNBO0FBRUQsaUNBQWlDLFNBQVMsRUFBRSxJQUFJO0lBQzlDQyxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxhQUFNQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUN2QkEsTUFBTUEsQ0FBQ0E7SUFDVEEsQ0FBQ0E7SUFFREEsSUFBSUEsV0FBV0EsR0FBR0Esc0JBQVNBLENBQUNBLFdBQVdBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBO0lBQ25EQSxFQUFFQSxDQUFDQSxDQUFDQSxnQkFBU0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDM0JBLEdBQUdBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLENBQUNBLEdBQUdBLFdBQVdBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBLEVBQUVBLEVBQUVBLENBQUNBO1lBQzVDQSxJQUFJQSxVQUFVQSxHQUFHQSxXQUFXQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUVoQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsVUFBVUEsWUFBWUEsK0JBQVdBLENBQUNBLENBQUNBLENBQUNBO2dCQUN0Q0EsTUFBTUEsSUFBSUEsMEJBQWFBLENBQ25CQSx3Q0FBcUNBLElBQUlBLGdEQUEwQ0EsQ0FBQ0EsQ0FBQ0E7WUFDM0ZBLENBQUNBO1FBQ0hBLENBQUNBO0lBQ0hBLENBQUNBO0FBQ0hBLENBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtMaXN0V3JhcHBlciwgTWFwLCBNYXBXcmFwcGVyLCBTdHJpbmdNYXBXcmFwcGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2NvbGxlY3Rpb24nO1xuaW1wb3J0IHtQcm9taXNlV3JhcHBlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9hc3luYyc7XG5pbXBvcnQge1xuICBpc1ByZXNlbnQsXG4gIGlzQXJyYXksXG4gIGlzQmxhbmssXG4gIGlzVHlwZSxcbiAgaXNTdHJpbmcsXG4gIGlzU3RyaW5nTWFwLFxuICBUeXBlLFxuICBTdHJpbmdXcmFwcGVyLFxuICBNYXRoLFxuICBnZXRUeXBlTmFtZUZvckRlYnVnZ2luZyxcbiAgQ09OU1RfRVhQUlxufSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtCYXNlRXhjZXB0aW9uLCBXcmFwcGVkRXhjZXB0aW9ufSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2V4Y2VwdGlvbnMnO1xuaW1wb3J0IHtyZWZsZWN0b3J9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL3JlZmxlY3Rpb24vcmVmbGVjdGlvbic7XG5pbXBvcnQge0luamVjdGFibGUsIEluamVjdCwgT3BhcXVlVG9rZW59IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBSb3V0ZUNvbmZpZyxcbiAgQXN5bmNSb3V0ZSxcbiAgUm91dGUsXG4gIEF1eFJvdXRlLFxuICBSZWRpcmVjdCxcbiAgUm91dGVEZWZpbml0aW9uXG59IGZyb20gJy4vcm91dGVfY29uZmlnL3JvdXRlX2NvbmZpZ19pbXBsJztcbmltcG9ydCB7UGF0aE1hdGNoLCBSZWRpcmVjdE1hdGNoLCBSb3V0ZU1hdGNofSBmcm9tICcuL3J1bGVzL3J1bGVzJztcbmltcG9ydCB7UnVsZVNldH0gZnJvbSAnLi9ydWxlcy9ydWxlX3NldCc7XG5pbXBvcnQge1xuICBJbnN0cnVjdGlvbixcbiAgUmVzb2x2ZWRJbnN0cnVjdGlvbixcbiAgUmVkaXJlY3RJbnN0cnVjdGlvbixcbiAgVW5yZXNvbHZlZEluc3RydWN0aW9uLFxuICBEZWZhdWx0SW5zdHJ1Y3Rpb25cbn0gZnJvbSAnLi9pbnN0cnVjdGlvbic7XG5cbmltcG9ydCB7bm9ybWFsaXplUm91dGVDb25maWcsIGFzc2VydENvbXBvbmVudEV4aXN0c30gZnJvbSAnLi9yb3V0ZV9jb25maWcvcm91dGVfY29uZmlnX25vcm1hbGl6ZXInO1xuaW1wb3J0IHtwYXJzZXIsIFVybCwgY29udmVydFVybFBhcmFtc1RvQXJyYXksIHBhdGhTZWdtZW50c1RvVXJsfSBmcm9tICcuL3VybF9wYXJzZXInO1xuaW1wb3J0IHtHZW5lcmF0ZWRVcmx9IGZyb20gJy4vcnVsZXMvcm91dGVfcGF0aHMvcm91dGVfcGF0aCc7XG5cbnZhciBfcmVzb2x2ZVRvTnVsbCA9IFByb21pc2VXcmFwcGVyLnJlc29sdmU8SW5zdHJ1Y3Rpb24+KG51bGwpO1xuXG4vLyBBIExpbmtJdGVtQXJyYXkgaXMgYW4gYXJyYXksIHdoaWNoIGRlc2NyaWJlcyBhIHNldCBvZiByb3V0ZXNcbi8vIFRoZSBpdGVtcyBpbiB0aGUgYXJyYXkgYXJlIGZvdW5kIGluIGdyb3Vwczpcbi8vIC0gdGhlIGZpcnN0IGl0ZW0gaXMgdGhlIG5hbWUgb2YgdGhlIHJvdXRlXG4vLyAtIHRoZSBuZXh0IGl0ZW1zIGFyZTpcbi8vICAgLSBhbiBvYmplY3QgY29udGFpbmluZyBwYXJhbWV0ZXJzXG4vLyAgIC0gb3IgYW4gYXJyYXkgZGVzY3JpYmluZyBhbiBhdXggcm91dGVcbi8vIGV4cG9ydCB0eXBlIExpbmtSb3V0ZUl0ZW0gPSBzdHJpbmcgfCBPYmplY3Q7XG4vLyBleHBvcnQgdHlwZSBMaW5rSXRlbSA9IExpbmtSb3V0ZUl0ZW0gfCBBcnJheTxMaW5rUm91dGVJdGVtPjtcbi8vIGV4cG9ydCB0eXBlIExpbmtJdGVtQXJyYXkgPSBBcnJheTxMaW5rSXRlbT47XG5cbi8qKlxuICogVG9rZW4gdXNlZCB0byBiaW5kIHRoZSBjb21wb25lbnQgd2l0aCB0aGUgdG9wLWxldmVsIHtAbGluayBSb3V0ZUNvbmZpZ31zIGZvciB0aGVcbiAqIGFwcGxpY2F0aW9uLlxuICpcbiAqICMjIyBFeGFtcGxlIChbbGl2ZSBkZW1vXShodHRwOi8vcGxua3IuY28vZWRpdC9pUlVQOEI1T1VieENXUTNBY0lEbSkpXG4gKlxuICogYGBgXG4gKiBpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG4gKiBpbXBvcnQge1xuICogICBST1VURVJfRElSRUNUSVZFUyxcbiAqICAgUk9VVEVSX1BST1ZJREVSUyxcbiAqICAgUm91dGVDb25maWdcbiAqIH0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbiAqXG4gKiBAQ29tcG9uZW50KHtkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdfSlcbiAqIEBSb3V0ZUNvbmZpZyhbXG4gKiAgey4uLn0sXG4gKiBdKVxuICogY2xhc3MgQXBwQ21wIHtcbiAqICAgLy8gLi4uXG4gKiB9XG4gKlxuICogYm9vdHN0cmFwKEFwcENtcCwgW1JPVVRFUl9QUk9WSURFUlNdKTtcbiAqIGBgYFxuICovXG5leHBvcnQgY29uc3QgUk9VVEVSX1BSSU1BUllfQ09NUE9ORU5UOiBPcGFxdWVUb2tlbiA9XG4gICAgQ09OU1RfRVhQUihuZXcgT3BhcXVlVG9rZW4oJ1JvdXRlclByaW1hcnlDb21wb25lbnQnKSk7XG5cblxuLyoqXG4gKiBUaGUgUm91dGVSZWdpc3RyeSBob2xkcyByb3V0ZSBjb25maWd1cmF0aW9ucyBmb3IgZWFjaCBjb21wb25lbnQgaW4gYW4gQW5ndWxhciBhcHAuXG4gKiBJdCBpcyByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgSW5zdHJ1Y3Rpb25zIGZyb20gVVJMcywgYW5kIGdlbmVyYXRpbmcgVVJMcyBiYXNlZCBvbiByb3V0ZSBhbmRcbiAqIHBhcmFtZXRlcnMuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSb3V0ZVJlZ2lzdHJ5IHtcbiAgcHJpdmF0ZSBfcnVsZXMgPSBuZXcgTWFwPGFueSwgUnVsZVNldD4oKTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KFJPVVRFUl9QUklNQVJZX0NPTVBPTkVOVCkgcHJpdmF0ZSBfcm9vdENvbXBvbmVudDogVHlwZSkge31cblxuICAvKipcbiAgICogR2l2ZW4gYSBjb21wb25lbnQgYW5kIGEgY29uZmlndXJhdGlvbiBvYmplY3QsIGFkZCB0aGUgcm91dGUgdG8gdGhpcyByZWdpc3RyeVxuICAgKi9cbiAgY29uZmlnKHBhcmVudENvbXBvbmVudDogYW55LCBjb25maWc6IFJvdXRlRGVmaW5pdGlvbik6IHZvaWQge1xuICAgIGNvbmZpZyA9IG5vcm1hbGl6ZVJvdXRlQ29uZmlnKGNvbmZpZywgdGhpcyk7XG5cbiAgICAvLyB0aGlzIGlzIGhlcmUgYmVjYXVzZSBEYXJ0IHR5cGUgZ3VhcmQgcmVhc29uc1xuICAgIGlmIChjb25maWcgaW5zdGFuY2VvZiBSb3V0ZSkge1xuICAgICAgYXNzZXJ0Q29tcG9uZW50RXhpc3RzKGNvbmZpZy5jb21wb25lbnQsIGNvbmZpZy5wYXRoKTtcbiAgICB9IGVsc2UgaWYgKGNvbmZpZyBpbnN0YW5jZW9mIEF1eFJvdXRlKSB7XG4gICAgICBhc3NlcnRDb21wb25lbnRFeGlzdHMoY29uZmlnLmNvbXBvbmVudCwgY29uZmlnLnBhdGgpO1xuICAgIH1cblxuICAgIHZhciBydWxlcyA9IHRoaXMuX3J1bGVzLmdldChwYXJlbnRDb21wb25lbnQpO1xuXG4gICAgaWYgKGlzQmxhbmsocnVsZXMpKSB7XG4gICAgICBydWxlcyA9IG5ldyBSdWxlU2V0KCk7XG4gICAgICB0aGlzLl9ydWxlcy5zZXQocGFyZW50Q29tcG9uZW50LCBydWxlcyk7XG4gICAgfVxuXG4gICAgdmFyIHRlcm1pbmFsID0gcnVsZXMuY29uZmlnKGNvbmZpZyk7XG5cbiAgICBpZiAoY29uZmlnIGluc3RhbmNlb2YgUm91dGUpIHtcbiAgICAgIGlmICh0ZXJtaW5hbCkge1xuICAgICAgICBhc3NlcnRUZXJtaW5hbENvbXBvbmVudChjb25maWcuY29tcG9uZW50LCBjb25maWcucGF0aCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbmZpZ0Zyb21Db21wb25lbnQoY29uZmlnLmNvbXBvbmVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlYWRzIHRoZSBhbm5vdGF0aW9ucyBvZiBhIGNvbXBvbmVudCBhbmQgY29uZmlndXJlcyB0aGUgcmVnaXN0cnkgYmFzZWQgb24gdGhlbVxuICAgKi9cbiAgY29uZmlnRnJvbUNvbXBvbmVudChjb21wb25lbnQ6IGFueSk6IHZvaWQge1xuICAgIGlmICghaXNUeXBlKGNvbXBvbmVudCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBEb24ndCByZWFkIHRoZSBhbm5vdGF0aW9ucyBmcm9tIGEgdHlwZSBtb3JlIHRoYW4gb25jZSDigJNcbiAgICAvLyB0aGlzIHByZXZlbnRzIGFuIGluZmluaXRlIGxvb3AgaWYgYSBjb21wb25lbnQgcm91dGVzIHJlY3Vyc2l2ZWx5LlxuICAgIGlmICh0aGlzLl9ydWxlcy5oYXMoY29tcG9uZW50KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgYW5ub3RhdGlvbnMgPSByZWZsZWN0b3IuYW5ub3RhdGlvbnMoY29tcG9uZW50KTtcbiAgICBpZiAoaXNQcmVzZW50KGFubm90YXRpb25zKSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbm5vdGF0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgYW5ub3RhdGlvbiA9IGFubm90YXRpb25zW2ldO1xuXG4gICAgICAgIGlmIChhbm5vdGF0aW9uIGluc3RhbmNlb2YgUm91dGVDb25maWcpIHtcbiAgICAgICAgICBsZXQgcm91dGVDZmdzOiBSb3V0ZURlZmluaXRpb25bXSA9IGFubm90YXRpb24uY29uZmlncztcbiAgICAgICAgICByb3V0ZUNmZ3MuZm9yRWFjaChjb25maWcgPT4gdGhpcy5jb25maWcoY29tcG9uZW50LCBjb25maWcpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiAgLyoqXG4gICAqIEdpdmVuIGEgVVJMIGFuZCBhIHBhcmVudCBjb21wb25lbnQsIHJldHVybiB0aGUgbW9zdCBzcGVjaWZpYyBpbnN0cnVjdGlvbiBmb3IgbmF2aWdhdGluZ1xuICAgKiB0aGUgYXBwbGljYXRpb24gaW50byB0aGUgc3RhdGUgc3BlY2lmaWVkIGJ5IHRoZSB1cmxcbiAgICovXG4gIHJlY29nbml6ZSh1cmw6IHN0cmluZywgYW5jZXN0b3JJbnN0cnVjdGlvbnM6IEluc3RydWN0aW9uW10pOiBQcm9taXNlPEluc3RydWN0aW9uPiB7XG4gICAgdmFyIHBhcnNlZFVybCA9IHBhcnNlci5wYXJzZSh1cmwpO1xuICAgIHJldHVybiB0aGlzLl9yZWNvZ25pemUocGFyc2VkVXJsLCBbXSk7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBSZWNvZ25pemVzIGFsbCBwYXJlbnQtY2hpbGQgcm91dGVzLCBidXQgY3JlYXRlcyB1bnJlc29sdmVkIGF1eGlsaWFyeSByb3V0ZXNcbiAgICovXG4gIHByaXZhdGUgX3JlY29nbml6ZShwYXJzZWRVcmw6IFVybCwgYW5jZXN0b3JJbnN0cnVjdGlvbnM6IEluc3RydWN0aW9uW10sXG4gICAgICAgICAgICAgICAgICAgICBfYXV4ID0gZmFsc2UpOiBQcm9taXNlPEluc3RydWN0aW9uPiB7XG4gICAgdmFyIHBhcmVudEluc3RydWN0aW9uID0gTGlzdFdyYXBwZXIubGFzdChhbmNlc3Rvckluc3RydWN0aW9ucyk7XG4gICAgdmFyIHBhcmVudENvbXBvbmVudCA9IGlzUHJlc2VudChwYXJlbnRJbnN0cnVjdGlvbikgPyBwYXJlbnRJbnN0cnVjdGlvbi5jb21wb25lbnQuY29tcG9uZW50VHlwZSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9yb290Q29tcG9uZW50O1xuXG4gICAgdmFyIHJ1bGVzID0gdGhpcy5fcnVsZXMuZ2V0KHBhcmVudENvbXBvbmVudCk7XG4gICAgaWYgKGlzQmxhbmsocnVsZXMpKSB7XG4gICAgICByZXR1cm4gX3Jlc29sdmVUb051bGw7XG4gICAgfVxuXG4gICAgLy8gTWF0Y2hlcyBzb21lIGJlZ2lubmluZyBwYXJ0IG9mIHRoZSBnaXZlbiBVUkxcbiAgICB2YXIgcG9zc2libGVNYXRjaGVzOiBQcm9taXNlPFJvdXRlTWF0Y2g+W10gPVxuICAgICAgICBfYXV4ID8gcnVsZXMucmVjb2duaXplQXV4aWxpYXJ5KHBhcnNlZFVybCkgOiBydWxlcy5yZWNvZ25pemUocGFyc2VkVXJsKTtcblxuICAgIHZhciBtYXRjaFByb21pc2VzOiBQcm9taXNlPEluc3RydWN0aW9uPltdID0gcG9zc2libGVNYXRjaGVzLm1hcChcbiAgICAgICAgKGNhbmRpZGF0ZTogUHJvbWlzZTxSb3V0ZU1hdGNoPikgPT4gY2FuZGlkYXRlLnRoZW4oKGNhbmRpZGF0ZTogUm91dGVNYXRjaCkgPT4ge1xuXG4gICAgICAgICAgaWYgKGNhbmRpZGF0ZSBpbnN0YW5jZW9mIFBhdGhNYXRjaCkge1xuICAgICAgICAgICAgdmFyIGF1eFBhcmVudEluc3RydWN0aW9uczogSW5zdHJ1Y3Rpb25bXSA9XG4gICAgICAgICAgICAgICAgYW5jZXN0b3JJbnN0cnVjdGlvbnMubGVuZ3RoID4gMCA/IFtMaXN0V3JhcHBlci5sYXN0KGFuY2VzdG9ySW5zdHJ1Y3Rpb25zKV0gOiBbXTtcbiAgICAgICAgICAgIHZhciBhdXhJbnN0cnVjdGlvbnMgPVxuICAgICAgICAgICAgICAgIHRoaXMuX2F1eFJvdXRlc1RvVW5yZXNvbHZlZChjYW5kaWRhdGUucmVtYWluaW5nQXV4LCBhdXhQYXJlbnRJbnN0cnVjdGlvbnMpO1xuXG4gICAgICAgICAgICB2YXIgaW5zdHJ1Y3Rpb24gPSBuZXcgUmVzb2x2ZWRJbnN0cnVjdGlvbihjYW5kaWRhdGUuaW5zdHJ1Y3Rpb24sIG51bGwsIGF1eEluc3RydWN0aW9ucyk7XG5cbiAgICAgICAgICAgIGlmIChpc0JsYW5rKGNhbmRpZGF0ZS5pbnN0cnVjdGlvbikgfHwgY2FuZGlkYXRlLmluc3RydWN0aW9uLnRlcm1pbmFsKSB7XG4gICAgICAgICAgICAgIHJldHVybiBpbnN0cnVjdGlvbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIG5ld0FuY2VzdG9ySW5zdHJ1Y3Rpb25zOiBJbnN0cnVjdGlvbltdID0gYW5jZXN0b3JJbnN0cnVjdGlvbnMuY29uY2F0KFtpbnN0cnVjdGlvbl0pO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVjb2duaXplKGNhbmRpZGF0ZS5yZW1haW5pbmcsIG5ld0FuY2VzdG9ySW5zdHJ1Y3Rpb25zKVxuICAgICAgICAgICAgICAgIC50aGVuKChjaGlsZEluc3RydWN0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAoaXNCbGFuayhjaGlsZEluc3RydWN0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgLy8gcmVkaXJlY3QgaW5zdHJ1Y3Rpb25zIGFyZSBhbHJlYWR5IGFic29sdXRlXG4gICAgICAgICAgICAgICAgICBpZiAoY2hpbGRJbnN0cnVjdGlvbiBpbnN0YW5jZW9mIFJlZGlyZWN0SW5zdHJ1Y3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkSW5zdHJ1Y3Rpb247XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbi5jaGlsZCA9IGNoaWxkSW5zdHJ1Y3Rpb247XG4gICAgICAgICAgICAgICAgICByZXR1cm4gaW5zdHJ1Y3Rpb247XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGNhbmRpZGF0ZSBpbnN0YW5jZW9mIFJlZGlyZWN0TWF0Y2gpIHtcbiAgICAgICAgICAgIHZhciBpbnN0cnVjdGlvbiA9XG4gICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZShjYW5kaWRhdGUucmVkaXJlY3RUbywgYW5jZXN0b3JJbnN0cnVjdGlvbnMuY29uY2F0KFtudWxsXSkpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWRpcmVjdEluc3RydWN0aW9uKGluc3RydWN0aW9uLmNvbXBvbmVudCwgaW5zdHJ1Y3Rpb24uY2hpbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb24uYXV4SW5zdHJ1Y3Rpb24sIGNhbmRpZGF0ZS5zcGVjaWZpY2l0eSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KSk7XG5cbiAgICBpZiAoKGlzQmxhbmsocGFyc2VkVXJsKSB8fCBwYXJzZWRVcmwucGF0aCA9PSAnJykgJiYgcG9zc2libGVNYXRjaGVzLmxlbmd0aCA9PSAwKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZVdyYXBwZXIucmVzb2x2ZSh0aGlzLmdlbmVyYXRlRGVmYXVsdChwYXJlbnRDb21wb25lbnQpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZVdyYXBwZXIuYWxsPEluc3RydWN0aW9uPihtYXRjaFByb21pc2VzKS50aGVuKG1vc3RTcGVjaWZpYyk7XG4gIH1cblxuICBwcml2YXRlIF9hdXhSb3V0ZXNUb1VucmVzb2x2ZWQoYXV4Um91dGVzOiBVcmxbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudEluc3RydWN0aW9uczogSW5zdHJ1Y3Rpb25bXSk6IHtba2V5OiBzdHJpbmddOiBJbnN0cnVjdGlvbn0ge1xuICAgIHZhciB1bnJlc29sdmVkQXV4SW5zdHJ1Y3Rpb25zOiB7W2tleTogc3RyaW5nXTogSW5zdHJ1Y3Rpb259ID0ge307XG5cbiAgICBhdXhSb3V0ZXMuZm9yRWFjaCgoYXV4VXJsOiBVcmwpID0+IHtcbiAgICAgIHVucmVzb2x2ZWRBdXhJbnN0cnVjdGlvbnNbYXV4VXJsLnBhdGhdID0gbmV3IFVucmVzb2x2ZWRJbnN0cnVjdGlvbihcbiAgICAgICAgICAoKSA9PiB7IHJldHVybiB0aGlzLl9yZWNvZ25pemUoYXV4VXJsLCBwYXJlbnRJbnN0cnVjdGlvbnMsIHRydWUpOyB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiB1bnJlc29sdmVkQXV4SW5zdHJ1Y3Rpb25zO1xuICB9XG5cblxuICAvKipcbiAgICogR2l2ZW4gYSBub3JtYWxpemVkIGxpc3Qgd2l0aCBjb21wb25lbnQgbmFtZXMgYW5kIHBhcmFtcyBsaWtlOiBgWyd1c2VyJywge2lkOiAzIH1dYFxuICAgKiBnZW5lcmF0ZXMgYSB1cmwgd2l0aCBhIGxlYWRpbmcgc2xhc2ggcmVsYXRpdmUgdG8gdGhlIHByb3ZpZGVkIGBwYXJlbnRDb21wb25lbnRgLlxuICAgKlxuICAgKiBJZiB0aGUgb3B0aW9uYWwgcGFyYW0gYF9hdXhgIGlzIGB0cnVlYCwgdGhlbiB3ZSBnZW5lcmF0ZSBzdGFydGluZyBhdCBhbiBhdXhpbGlhcnlcbiAgICogcm91dGUgYm91bmRhcnkuXG4gICAqL1xuICBnZW5lcmF0ZShsaW5rUGFyYW1zOiBhbnlbXSwgYW5jZXN0b3JJbnN0cnVjdGlvbnM6IEluc3RydWN0aW9uW10sIF9hdXggPSBmYWxzZSk6IEluc3RydWN0aW9uIHtcbiAgICB2YXIgcGFyYW1zID0gc3BsaXRBbmRGbGF0dGVuTGlua1BhcmFtcyhsaW5rUGFyYW1zKTtcbiAgICB2YXIgcHJldkluc3RydWN0aW9uO1xuXG4gICAgLy8gVGhlIGZpcnN0IHNlZ21lbnQgc2hvdWxkIGJlIGVpdGhlciAnLicgKGdlbmVyYXRlIGZyb20gcGFyZW50KSBvciAnJyAoZ2VuZXJhdGUgZnJvbSByb290KS5cbiAgICAvLyBXaGVuIHdlIG5vcm1hbGl6ZSBhYm92ZSwgd2Ugc3RyaXAgYWxsIHRoZSBzbGFzaGVzLCAnLi8nIGJlY29tZXMgJy4nIGFuZCAnLycgYmVjb21lcyAnJy5cbiAgICBpZiAoTGlzdFdyYXBwZXIuZmlyc3QocGFyYW1zKSA9PSAnJykge1xuICAgICAgcGFyYW1zLnNoaWZ0KCk7XG4gICAgICBwcmV2SW5zdHJ1Y3Rpb24gPSBMaXN0V3JhcHBlci5maXJzdChhbmNlc3Rvckluc3RydWN0aW9ucyk7XG4gICAgICBhbmNlc3Rvckluc3RydWN0aW9ucyA9IFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcmV2SW5zdHJ1Y3Rpb24gPSBhbmNlc3Rvckluc3RydWN0aW9ucy5sZW5ndGggPiAwID8gYW5jZXN0b3JJbnN0cnVjdGlvbnMucG9wKCkgOiBudWxsO1xuXG4gICAgICBpZiAoTGlzdFdyYXBwZXIuZmlyc3QocGFyYW1zKSA9PSAnLicpIHtcbiAgICAgICAgcGFyYW1zLnNoaWZ0KCk7XG4gICAgICB9IGVsc2UgaWYgKExpc3RXcmFwcGVyLmZpcnN0KHBhcmFtcykgPT0gJy4uJykge1xuICAgICAgICB3aGlsZSAoTGlzdFdyYXBwZXIuZmlyc3QocGFyYW1zKSA9PSAnLi4nKSB7XG4gICAgICAgICAgaWYgKGFuY2VzdG9ySW5zdHJ1Y3Rpb25zLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgQmFzZUV4Y2VwdGlvbihcbiAgICAgICAgICAgICAgICBgTGluayBcIiR7TGlzdFdyYXBwZXIudG9KU09OKGxpbmtQYXJhbXMpfVwiIGhhcyB0b28gbWFueSBcIi4uL1wiIHNlZ21lbnRzLmApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwcmV2SW5zdHJ1Y3Rpb24gPSBhbmNlc3Rvckluc3RydWN0aW9ucy5wb3AoKTtcbiAgICAgICAgICBwYXJhbXMgPSBMaXN0V3JhcHBlci5zbGljZShwYXJhbXMsIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gd2UncmUgb24gdG8gaW1wbGljaXQgY2hpbGQvc2libGluZyByb3V0ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gd2UgbXVzdCBvbmx5IHBlYWsgYXQgdGhlIGxpbmsgcGFyYW0sIGFuZCBub3QgY29uc3VtZSBpdFxuICAgICAgICBsZXQgcm91dGVOYW1lID0gTGlzdFdyYXBwZXIuZmlyc3QocGFyYW1zKTtcbiAgICAgICAgbGV0IHBhcmVudENvbXBvbmVudFR5cGUgPSB0aGlzLl9yb290Q29tcG9uZW50O1xuICAgICAgICBsZXQgZ3JhbmRwYXJlbnRDb21wb25lbnRUeXBlID0gbnVsbDtcblxuICAgICAgICBpZiAoYW5jZXN0b3JJbnN0cnVjdGlvbnMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIGxldCBwYXJlbnRDb21wb25lbnRJbnN0cnVjdGlvbiA9IGFuY2VzdG9ySW5zdHJ1Y3Rpb25zW2FuY2VzdG9ySW5zdHJ1Y3Rpb25zLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGxldCBncmFuZENvbXBvbmVudEluc3RydWN0aW9uID0gYW5jZXN0b3JJbnN0cnVjdGlvbnNbYW5jZXN0b3JJbnN0cnVjdGlvbnMubGVuZ3RoIC0gMl07XG5cbiAgICAgICAgICBwYXJlbnRDb21wb25lbnRUeXBlID0gcGFyZW50Q29tcG9uZW50SW5zdHJ1Y3Rpb24uY29tcG9uZW50LmNvbXBvbmVudFR5cGU7XG4gICAgICAgICAgZ3JhbmRwYXJlbnRDb21wb25lbnRUeXBlID0gZ3JhbmRDb21wb25lbnRJbnN0cnVjdGlvbi5jb21wb25lbnQuY29tcG9uZW50VHlwZTtcbiAgICAgICAgfSBlbHNlIGlmIChhbmNlc3Rvckluc3RydWN0aW9ucy5sZW5ndGggPT0gMSkge1xuICAgICAgICAgIHBhcmVudENvbXBvbmVudFR5cGUgPSBhbmNlc3Rvckluc3RydWN0aW9uc1swXS5jb21wb25lbnQuY29tcG9uZW50VHlwZTtcbiAgICAgICAgICBncmFuZHBhcmVudENvbXBvbmVudFR5cGUgPSB0aGlzLl9yb290Q29tcG9uZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRm9yIGEgbGluayB3aXRoIG5vIGxlYWRpbmcgYC4vYCwgYC9gLCBvciBgLi4vYCwgd2UgbG9vayBmb3IgYSBzaWJsaW5nIGFuZCBjaGlsZC5cbiAgICAgICAgLy8gSWYgYm90aCBleGlzdCwgd2UgdGhyb3cuIE90aGVyd2lzZSwgd2UgcHJlZmVyIHdoaWNoZXZlciBleGlzdHMuXG4gICAgICAgIHZhciBjaGlsZFJvdXRlRXhpc3RzID0gdGhpcy5oYXNSb3V0ZShyb3V0ZU5hbWUsIHBhcmVudENvbXBvbmVudFR5cGUpO1xuICAgICAgICB2YXIgcGFyZW50Um91dGVFeGlzdHMgPSBpc1ByZXNlbnQoZ3JhbmRwYXJlbnRDb21wb25lbnRUeXBlKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhc1JvdXRlKHJvdXRlTmFtZSwgZ3JhbmRwYXJlbnRDb21wb25lbnRUeXBlKTtcblxuICAgICAgICBpZiAocGFyZW50Um91dGVFeGlzdHMgJiYgY2hpbGRSb3V0ZUV4aXN0cykge1xuICAgICAgICAgIGxldCBtc2cgPVxuICAgICAgICAgICAgICBgTGluayBcIiR7TGlzdFdyYXBwZXIudG9KU09OKGxpbmtQYXJhbXMpfVwiIGlzIGFtYmlndW91cywgdXNlIFwiLi9cIiBvciBcIi4uL1wiIHRvIGRpc2FtYmlndWF0ZS5gO1xuICAgICAgICAgIHRocm93IG5ldyBCYXNlRXhjZXB0aW9uKG1zZyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyZW50Um91dGVFeGlzdHMpIHtcbiAgICAgICAgICBwcmV2SW5zdHJ1Y3Rpb24gPSBhbmNlc3Rvckluc3RydWN0aW9ucy5wb3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwYXJhbXNbcGFyYW1zLmxlbmd0aCAtIDFdID09ICcnKSB7XG4gICAgICBwYXJhbXMucG9wKCk7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy5sZW5ndGggPiAwICYmIHBhcmFtc1swXSA9PSAnJykge1xuICAgICAgcGFyYW1zLnNoaWZ0KCk7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy5sZW5ndGggPCAxKSB7XG4gICAgICBsZXQgbXNnID0gYExpbmsgXCIke0xpc3RXcmFwcGVyLnRvSlNPTihsaW5rUGFyYW1zKX1cIiBtdXN0IGluY2x1ZGUgYSByb3V0ZSBuYW1lLmA7XG4gICAgICB0aHJvdyBuZXcgQmFzZUV4Y2VwdGlvbihtc2cpO1xuICAgIH1cblxuICAgIHZhciBnZW5lcmF0ZWRJbnN0cnVjdGlvbiA9XG4gICAgICAgIHRoaXMuX2dlbmVyYXRlKHBhcmFtcywgYW5jZXN0b3JJbnN0cnVjdGlvbnMsIHByZXZJbnN0cnVjdGlvbiwgX2F1eCwgbGlua1BhcmFtcyk7XG5cbiAgICAvLyB3ZSBkb24ndCBjbG9uZSB0aGUgZmlyc3QgKHJvb3QpIGVsZW1lbnRcbiAgICBmb3IgKHZhciBpID0gYW5jZXN0b3JJbnN0cnVjdGlvbnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCBhbmNlc3Rvckluc3RydWN0aW9uID0gYW5jZXN0b3JJbnN0cnVjdGlvbnNbaV07XG4gICAgICBpZiAoaXNCbGFuayhhbmNlc3Rvckluc3RydWN0aW9uKSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGdlbmVyYXRlZEluc3RydWN0aW9uID0gYW5jZXN0b3JJbnN0cnVjdGlvbi5yZXBsYWNlQ2hpbGQoZ2VuZXJhdGVkSW5zdHJ1Y3Rpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBnZW5lcmF0ZWRJbnN0cnVjdGlvbjtcbiAgfVxuXG5cbiAgLypcbiAgICogSW50ZXJuYWwgaGVscGVyIHRoYXQgZG9lcyBub3QgbWFrZSBhbnkgYXNzZXJ0aW9ucyBhYm91dCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBsaW5rIERTTC5cbiAgICogYGFuY2VzdG9ySW5zdHJ1Y3Rpb25zYCBhcmUgcGFyZW50cyB0aGF0IHdpbGwgYmUgY2xvbmVkLlxuICAgKiBgcHJldkluc3RydWN0aW9uYCBpcyB0aGUgZXhpc3RpbmcgaW5zdHJ1Y3Rpb24gdGhhdCB3b3VsZCBiZSByZXBsYWNlZCwgYnV0IHdoaWNoIG1pZ2h0IGhhdmVcbiAgICogYXV4IHJvdXRlcyB0aGF0IG5lZWQgdG8gYmUgY2xvbmVkLlxuICAgKi9cbiAgcHJpdmF0ZSBfZ2VuZXJhdGUobGlua1BhcmFtczogYW55W10sIGFuY2VzdG9ySW5zdHJ1Y3Rpb25zOiBJbnN0cnVjdGlvbltdLFxuICAgICAgICAgICAgICAgICAgICBwcmV2SW5zdHJ1Y3Rpb246IEluc3RydWN0aW9uLCBfYXV4ID0gZmFsc2UsIF9vcmlnaW5hbExpbms6IGFueVtdKTogSW5zdHJ1Y3Rpb24ge1xuICAgIGxldCBwYXJlbnRDb21wb25lbnRUeXBlID0gdGhpcy5fcm9vdENvbXBvbmVudDtcbiAgICBsZXQgY29tcG9uZW50SW5zdHJ1Y3Rpb24gPSBudWxsO1xuICAgIGxldCBhdXhJbnN0cnVjdGlvbnM6IHtba2V5OiBzdHJpbmddOiBJbnN0cnVjdGlvbn0gPSB7fTtcblxuICAgIGxldCBwYXJlbnRJbnN0cnVjdGlvbjogSW5zdHJ1Y3Rpb24gPSBMaXN0V3JhcHBlci5sYXN0KGFuY2VzdG9ySW5zdHJ1Y3Rpb25zKTtcbiAgICBpZiAoaXNQcmVzZW50KHBhcmVudEluc3RydWN0aW9uKSAmJiBpc1ByZXNlbnQocGFyZW50SW5zdHJ1Y3Rpb24uY29tcG9uZW50KSkge1xuICAgICAgcGFyZW50Q29tcG9uZW50VHlwZSA9IHBhcmVudEluc3RydWN0aW9uLmNvbXBvbmVudC5jb21wb25lbnRUeXBlO1xuICAgIH1cblxuICAgIGlmIChsaW5rUGFyYW1zLmxlbmd0aCA9PSAwKSB7XG4gICAgICBsZXQgZGVmYXVsdEluc3RydWN0aW9uID0gdGhpcy5nZW5lcmF0ZURlZmF1bHQocGFyZW50Q29tcG9uZW50VHlwZSk7XG4gICAgICBpZiAoaXNCbGFuayhkZWZhdWx0SW5zdHJ1Y3Rpb24pKSB7XG4gICAgICAgIHRocm93IG5ldyBCYXNlRXhjZXB0aW9uKFxuICAgICAgICAgICAgYExpbmsgXCIke0xpc3RXcmFwcGVyLnRvSlNPTihfb3JpZ2luYWxMaW5rKX1cIiBkb2VzIG5vdCByZXNvbHZlIHRvIGEgdGVybWluYWwgaW5zdHJ1Y3Rpb24uYCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGVmYXVsdEluc3RydWN0aW9uO1xuICAgIH1cblxuICAgIC8vIGZvciBub24tYXV4IHJvdXRlcywgd2Ugd2FudCB0byByZXVzZSB0aGUgcHJlZGVjZXNzb3IncyBleGlzdGluZyBwcmltYXJ5IGFuZCBhdXggcm91dGVzXG4gICAgLy8gYW5kIG9ubHkgb3ZlcnJpZGUgcm91dGVzIGZvciB3aGljaCB0aGUgZ2l2ZW4gbGluayBEU0wgcHJvdmlkZXNcbiAgICBpZiAoaXNQcmVzZW50KHByZXZJbnN0cnVjdGlvbikgJiYgIV9hdXgpIHtcbiAgICAgIGF1eEluc3RydWN0aW9ucyA9IFN0cmluZ01hcFdyYXBwZXIubWVyZ2UocHJldkluc3RydWN0aW9uLmF1eEluc3RydWN0aW9uLCBhdXhJbnN0cnVjdGlvbnMpO1xuICAgICAgY29tcG9uZW50SW5zdHJ1Y3Rpb24gPSBwcmV2SW5zdHJ1Y3Rpb24uY29tcG9uZW50O1xuICAgIH1cblxuICAgIHZhciBydWxlcyA9IHRoaXMuX3J1bGVzLmdldChwYXJlbnRDb21wb25lbnRUeXBlKTtcbiAgICBpZiAoaXNCbGFuayhydWxlcykpIHtcbiAgICAgIHRocm93IG5ldyBCYXNlRXhjZXB0aW9uKFxuICAgICAgICAgIGBDb21wb25lbnQgXCIke2dldFR5cGVOYW1lRm9yRGVidWdnaW5nKHBhcmVudENvbXBvbmVudFR5cGUpfVwiIGhhcyBubyByb3V0ZSBjb25maWcuYCk7XG4gICAgfVxuXG4gICAgbGV0IGxpbmtQYXJhbUluZGV4ID0gMDtcbiAgICBsZXQgcm91dGVQYXJhbXM6IHtba2V5OiBzdHJpbmddOiBhbnl9ID0ge307XG5cbiAgICAvLyBmaXJzdCwgcmVjb2duaXplIHRoZSBwcmltYXJ5IHJvdXRlIGlmIG9uZSBpcyBwcm92aWRlZFxuICAgIGlmIChsaW5rUGFyYW1JbmRleCA8IGxpbmtQYXJhbXMubGVuZ3RoICYmIGlzU3RyaW5nKGxpbmtQYXJhbXNbbGlua1BhcmFtSW5kZXhdKSkge1xuICAgICAgbGV0IHJvdXRlTmFtZSA9IGxpbmtQYXJhbXNbbGlua1BhcmFtSW5kZXhdO1xuICAgICAgaWYgKHJvdXRlTmFtZSA9PSAnJyB8fCByb3V0ZU5hbWUgPT0gJy4nIHx8IHJvdXRlTmFtZSA9PSAnLi4nKSB7XG4gICAgICAgIHRocm93IG5ldyBCYXNlRXhjZXB0aW9uKGBcIiR7cm91dGVOYW1lfS9cIiBpcyBvbmx5IGFsbG93ZWQgYXQgdGhlIGJlZ2lubmluZyBvZiBhIGxpbmsgRFNMLmApO1xuICAgICAgfVxuICAgICAgbGlua1BhcmFtSW5kZXggKz0gMTtcbiAgICAgIGlmIChsaW5rUGFyYW1JbmRleCA8IGxpbmtQYXJhbXMubGVuZ3RoKSB7XG4gICAgICAgIGxldCBsaW5rUGFyYW0gPSBsaW5rUGFyYW1zW2xpbmtQYXJhbUluZGV4XTtcbiAgICAgICAgaWYgKGlzU3RyaW5nTWFwKGxpbmtQYXJhbSkgJiYgIWlzQXJyYXkobGlua1BhcmFtKSkge1xuICAgICAgICAgIHJvdXRlUGFyYW1zID0gbGlua1BhcmFtO1xuICAgICAgICAgIGxpbmtQYXJhbUluZGV4ICs9IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciByb3V0ZVJlY29nbml6ZXIgPSAoX2F1eCA/IHJ1bGVzLmF1eFJ1bGVzQnlOYW1lIDogcnVsZXMucnVsZXNCeU5hbWUpLmdldChyb3V0ZU5hbWUpO1xuXG4gICAgICBpZiAoaXNCbGFuayhyb3V0ZVJlY29nbml6ZXIpKSB7XG4gICAgICAgIHRocm93IG5ldyBCYXNlRXhjZXB0aW9uKFxuICAgICAgICAgICAgYENvbXBvbmVudCBcIiR7Z2V0VHlwZU5hbWVGb3JEZWJ1Z2dpbmcocGFyZW50Q29tcG9uZW50VHlwZSl9XCIgaGFzIG5vIHJvdXRlIG5hbWVkIFwiJHtyb3V0ZU5hbWV9XCIuYCk7XG4gICAgICB9XG5cbiAgICAgIC8vIENyZWF0ZSBhbiBcInVucmVzb2x2ZWQgaW5zdHJ1Y3Rpb25cIiBmb3IgYXN5bmMgcm91dGVzXG4gICAgICAvLyB3ZSdsbCBmaWd1cmUgb3V0IHRoZSByZXN0IG9mIHRoZSByb3V0ZSB3aGVuIHdlIHJlc29sdmUgdGhlIGluc3RydWN0aW9uIGFuZFxuICAgICAgLy8gcGVyZm9ybSBhIG5hdmlnYXRpb25cbiAgICAgIGlmIChpc0JsYW5rKHJvdXRlUmVjb2duaXplci5oYW5kbGVyLmNvbXBvbmVudFR5cGUpKSB7XG4gICAgICAgIHZhciBnZW5lcmF0ZWRVcmw6IEdlbmVyYXRlZFVybCA9IHJvdXRlUmVjb2duaXplci5nZW5lcmF0ZUNvbXBvbmVudFBhdGhWYWx1ZXMocm91dGVQYXJhbXMpO1xuICAgICAgICByZXR1cm4gbmV3IFVucmVzb2x2ZWRJbnN0cnVjdGlvbigoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHJvdXRlUmVjb2duaXplci5oYW5kbGVyLnJlc29sdmVDb21wb25lbnRUeXBlKCkudGhlbigoXykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dlbmVyYXRlKGxpbmtQYXJhbXMsIGFuY2VzdG9ySW5zdHJ1Y3Rpb25zLCBwcmV2SW5zdHJ1Y3Rpb24sIF9hdXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX29yaWdpbmFsTGluayk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sIGdlbmVyYXRlZFVybC51cmxQYXRoLCBjb252ZXJ0VXJsUGFyYW1zVG9BcnJheShnZW5lcmF0ZWRVcmwudXJsUGFyYW1zKSk7XG4gICAgICB9XG5cbiAgICAgIGNvbXBvbmVudEluc3RydWN0aW9uID0gX2F1eCA/IHJ1bGVzLmdlbmVyYXRlQXV4aWxpYXJ5KHJvdXRlTmFtZSwgcm91dGVQYXJhbXMpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzLmdlbmVyYXRlKHJvdXRlTmFtZSwgcm91dGVQYXJhbXMpO1xuICAgIH1cblxuICAgIC8vIE5leHQsIHJlY29nbml6ZSBhdXhpbGlhcnkgaW5zdHJ1Y3Rpb25zLlxuICAgIC8vIElmIHdlIGhhdmUgYW4gYW5jZXN0b3IgaW5zdHJ1Y3Rpb24sIHdlIHByZXNlcnZlIHdoYXRldmVyIGF1eCByb3V0ZXMgYXJlIGFjdGl2ZSBmcm9tIGl0LlxuICAgIHdoaWxlIChsaW5rUGFyYW1JbmRleCA8IGxpbmtQYXJhbXMubGVuZ3RoICYmIGlzQXJyYXkobGlua1BhcmFtc1tsaW5rUGFyYW1JbmRleF0pKSB7XG4gICAgICBsZXQgYXV4UGFyZW50SW5zdHJ1Y3Rpb246IEluc3RydWN0aW9uW10gPSBbcGFyZW50SW5zdHJ1Y3Rpb25dO1xuICAgICAgbGV0IGF1eEluc3RydWN0aW9uID0gdGhpcy5fZ2VuZXJhdGUobGlua1BhcmFtc1tsaW5rUGFyYW1JbmRleF0sIGF1eFBhcmVudEluc3RydWN0aW9uLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSwgX29yaWdpbmFsTGluayk7XG5cbiAgICAgIC8vIFRPRE86IHRoaXMgd2lsbCBub3Qgd29yayBmb3IgYXV4IHJvdXRlcyB3aXRoIHBhcmFtZXRlcnMgb3IgbXVsdGlwbGUgc2VnbWVudHNcbiAgICAgIGF1eEluc3RydWN0aW9uc1thdXhJbnN0cnVjdGlvbi5jb21wb25lbnQudXJsUGF0aF0gPSBhdXhJbnN0cnVjdGlvbjtcbiAgICAgIGxpbmtQYXJhbUluZGV4ICs9IDE7XG4gICAgfVxuXG4gICAgdmFyIGluc3RydWN0aW9uID0gbmV3IFJlc29sdmVkSW5zdHJ1Y3Rpb24oY29tcG9uZW50SW5zdHJ1Y3Rpb24sIG51bGwsIGF1eEluc3RydWN0aW9ucyk7XG5cbiAgICAvLyBJZiB0aGUgY29tcG9uZW50IGlzIHN5bmMsIHdlIGNhbiBnZW5lcmF0ZSByZXNvbHZlZCBjaGlsZCByb3V0ZSBpbnN0cnVjdGlvbnNcbiAgICAvLyBJZiBub3QsIHdlJ2xsIHJlc29sdmUgdGhlIGluc3RydWN0aW9ucyBhdCBuYXZpZ2F0aW9uIHRpbWVcbiAgICBpZiAoaXNQcmVzZW50KGNvbXBvbmVudEluc3RydWN0aW9uKSAmJiBpc1ByZXNlbnQoY29tcG9uZW50SW5zdHJ1Y3Rpb24uY29tcG9uZW50VHlwZSkpIHtcbiAgICAgIGxldCBjaGlsZEluc3RydWN0aW9uOiBJbnN0cnVjdGlvbiA9IG51bGw7XG4gICAgICBpZiAoY29tcG9uZW50SW5zdHJ1Y3Rpb24udGVybWluYWwpIHtcbiAgICAgICAgaWYgKGxpbmtQYXJhbUluZGV4ID49IGxpbmtQYXJhbXMubGVuZ3RoKSB7XG4gICAgICAgICAgLy8gVE9ETzogdGhyb3cgdGhhdCB0aGVyZSBhcmUgZXh0cmEgbGluayBwYXJhbXMgYmV5b25kIHRoZSB0ZXJtaW5hbCBjb21wb25lbnRcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGNoaWxkQW5jZXN0b3JDb21wb25lbnRzOiBJbnN0cnVjdGlvbltdID0gYW5jZXN0b3JJbnN0cnVjdGlvbnMuY29uY2F0KFtpbnN0cnVjdGlvbl0pO1xuICAgICAgICBsZXQgcmVtYWluaW5nTGlua1BhcmFtcyA9IGxpbmtQYXJhbXMuc2xpY2UobGlua1BhcmFtSW5kZXgpO1xuICAgICAgICBjaGlsZEluc3RydWN0aW9uID0gdGhpcy5fZ2VuZXJhdGUocmVtYWluaW5nTGlua1BhcmFtcywgY2hpbGRBbmNlc3RvckNvbXBvbmVudHMsIG51bGwsIGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX29yaWdpbmFsTGluayk7XG4gICAgICB9XG4gICAgICBpbnN0cnVjdGlvbi5jaGlsZCA9IGNoaWxkSW5zdHJ1Y3Rpb247XG4gICAgfVxuXG4gICAgcmV0dXJuIGluc3RydWN0aW9uO1xuICB9XG5cbiAgcHVibGljIGhhc1JvdXRlKG5hbWU6IHN0cmluZywgcGFyZW50Q29tcG9uZW50OiBhbnkpOiBib29sZWFuIHtcbiAgICB2YXIgcnVsZXMgPSB0aGlzLl9ydWxlcy5nZXQocGFyZW50Q29tcG9uZW50KTtcbiAgICBpZiAoaXNCbGFuayhydWxlcykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHJ1bGVzLmhhc1JvdXRlKG5hbWUpO1xuICB9XG5cbiAgcHVibGljIGdlbmVyYXRlRGVmYXVsdChjb21wb25lbnRDdXJzb3I6IFR5cGUpOiBJbnN0cnVjdGlvbiB7XG4gICAgaWYgKGlzQmxhbmsoY29tcG9uZW50Q3Vyc29yKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIHJ1bGVzID0gdGhpcy5fcnVsZXMuZ2V0KGNvbXBvbmVudEN1cnNvcik7XG4gICAgaWYgKGlzQmxhbmsocnVsZXMpIHx8IGlzQmxhbmsocnVsZXMuZGVmYXVsdFJ1bGUpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgZGVmYXVsdENoaWxkID0gbnVsbDtcbiAgICBpZiAoaXNQcmVzZW50KHJ1bGVzLmRlZmF1bHRSdWxlLmhhbmRsZXIuY29tcG9uZW50VHlwZSkpIHtcbiAgICAgIHZhciBjb21wb25lbnRJbnN0cnVjdGlvbiA9IHJ1bGVzLmRlZmF1bHRSdWxlLmdlbmVyYXRlKHt9KTtcbiAgICAgIGlmICghcnVsZXMuZGVmYXVsdFJ1bGUudGVybWluYWwpIHtcbiAgICAgICAgZGVmYXVsdENoaWxkID0gdGhpcy5nZW5lcmF0ZURlZmF1bHQocnVsZXMuZGVmYXVsdFJ1bGUuaGFuZGxlci5jb21wb25lbnRUeXBlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgRGVmYXVsdEluc3RydWN0aW9uKGNvbXBvbmVudEluc3RydWN0aW9uLCBkZWZhdWx0Q2hpbGQpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgVW5yZXNvbHZlZEluc3RydWN0aW9uKCgpID0+IHtcbiAgICAgIHJldHVybiBydWxlcy5kZWZhdWx0UnVsZS5oYW5kbGVyLnJlc29sdmVDb21wb25lbnRUeXBlKCkudGhlbihcbiAgICAgICAgICAoXykgPT4gdGhpcy5nZW5lcmF0ZURlZmF1bHQoY29tcG9uZW50Q3Vyc29yKSk7XG4gICAgfSk7XG4gIH1cbn1cblxuLypcbiAqIEdpdmVuOiBbJy9hL2InLCB7YzogMn1dXG4gKiBSZXR1cm5zOiBbJycsICdhJywgJ2InLCB7YzogMn1dXG4gKi9cbmZ1bmN0aW9uIHNwbGl0QW5kRmxhdHRlbkxpbmtQYXJhbXMobGlua1BhcmFtczogYW55W10pIHtcbiAgdmFyIGFjY3VtdWxhdGlvbiA9IFtdO1xuICBsaW5rUGFyYW1zLmZvckVhY2goZnVuY3Rpb24oaXRlbTogYW55KSB7XG4gICAgaWYgKGlzU3RyaW5nKGl0ZW0pKSB7XG4gICAgICB2YXIgc3RySXRlbTogc3RyaW5nID0gPHN0cmluZz5pdGVtO1xuICAgICAgYWNjdW11bGF0aW9uID0gYWNjdW11bGF0aW9uLmNvbmNhdChzdHJJdGVtLnNwbGl0KCcvJykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhY2N1bXVsYXRpb24ucHVzaChpdGVtKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gYWNjdW11bGF0aW9uO1xufVxuXG5cbi8qXG4gKiBHaXZlbiBhIGxpc3Qgb2YgaW5zdHJ1Y3Rpb25zLCByZXR1cm5zIHRoZSBtb3N0IHNwZWNpZmljIGluc3RydWN0aW9uXG4gKi9cbmZ1bmN0aW9uIG1vc3RTcGVjaWZpYyhpbnN0cnVjdGlvbnM6IEluc3RydWN0aW9uW10pOiBJbnN0cnVjdGlvbiB7XG4gIGluc3RydWN0aW9ucyA9IGluc3RydWN0aW9ucy5maWx0ZXIoKGluc3RydWN0aW9uKSA9PiBpc1ByZXNlbnQoaW5zdHJ1Y3Rpb24pKTtcbiAgaWYgKGluc3RydWN0aW9ucy5sZW5ndGggPT0gMCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmIChpbnN0cnVjdGlvbnMubGVuZ3RoID09IDEpIHtcbiAgICByZXR1cm4gaW5zdHJ1Y3Rpb25zWzBdO1xuICB9XG4gIHZhciBmaXJzdCA9IGluc3RydWN0aW9uc1swXTtcbiAgdmFyIHJlc3QgPSBpbnN0cnVjdGlvbnMuc2xpY2UoMSk7XG4gIHJldHVybiByZXN0LnJlZHVjZSgoaW5zdHJ1Y3Rpb246IEluc3RydWN0aW9uLCBjb250ZW5kZXI6IEluc3RydWN0aW9uKSA9PiB7XG4gICAgaWYgKGNvbXBhcmVTcGVjaWZpY2l0eVN0cmluZ3MoY29udGVuZGVyLnNwZWNpZmljaXR5LCBpbnN0cnVjdGlvbi5zcGVjaWZpY2l0eSkgPT0gLTEpIHtcbiAgICAgIHJldHVybiBjb250ZW5kZXI7XG4gICAgfVxuICAgIHJldHVybiBpbnN0cnVjdGlvbjtcbiAgfSwgZmlyc3QpO1xufVxuXG4vKlxuICogRXhwZWN0cyBzdHJpbmdzIHRvIGJlIGluIHRoZSBmb3JtIG9mIFwiWzAtMl0rXCJcbiAqIFJldHVybnMgLTEgaWYgc3RyaW5nIEEgc2hvdWxkIGJlIHNvcnRlZCBhYm92ZSBzdHJpbmcgQiwgMSBpZiBpdCBzaG91bGQgYmUgc29ydGVkIGFmdGVyLFxuICogb3IgMCBpZiB0aGV5IGFyZSB0aGUgc2FtZS5cbiAqL1xuZnVuY3Rpb24gY29tcGFyZVNwZWNpZmljaXR5U3RyaW5ncyhhOiBzdHJpbmcsIGI6IHN0cmluZyk6IG51bWJlciB7XG4gIHZhciBsID0gTWF0aC5taW4oYS5sZW5ndGgsIGIubGVuZ3RoKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsOyBpICs9IDEpIHtcbiAgICB2YXIgYWkgPSBTdHJpbmdXcmFwcGVyLmNoYXJDb2RlQXQoYSwgaSk7XG4gICAgdmFyIGJpID0gU3RyaW5nV3JhcHBlci5jaGFyQ29kZUF0KGIsIGkpO1xuICAgIHZhciBkaWZmZXJlbmNlID0gYmkgLSBhaTtcbiAgICBpZiAoZGlmZmVyZW5jZSAhPSAwKSB7XG4gICAgICByZXR1cm4gZGlmZmVyZW5jZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGEubGVuZ3RoIC0gYi5sZW5ndGg7XG59XG5cbmZ1bmN0aW9uIGFzc2VydFRlcm1pbmFsQ29tcG9uZW50KGNvbXBvbmVudCwgcGF0aCkge1xuICBpZiAoIWlzVHlwZShjb21wb25lbnQpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGFubm90YXRpb25zID0gcmVmbGVjdG9yLmFubm90YXRpb25zKGNvbXBvbmVudCk7XG4gIGlmIChpc1ByZXNlbnQoYW5ub3RhdGlvbnMpKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbm5vdGF0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGFubm90YXRpb24gPSBhbm5vdGF0aW9uc1tpXTtcblxuICAgICAgaWYgKGFubm90YXRpb24gaW5zdGFuY2VvZiBSb3V0ZUNvbmZpZykge1xuICAgICAgICB0aHJvdyBuZXcgQmFzZUV4Y2VwdGlvbihcbiAgICAgICAgICAgIGBDaGlsZCByb3V0ZXMgYXJlIG5vdCBhbGxvd2VkIGZvciBcIiR7cGF0aH1cIi4gVXNlIFwiLi4uXCIgb24gdGhlIHBhcmVudCdzIHJvdXRlIHBhdGguYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=

/***/ },

/***/ 231:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var lang_1 = __webpack_require__(3);
	var __make_dart_analyzer_happy = null;
	/**
	 * The `RouteConfig` decorator defines routes for a given component.
	 *
	 * It takes an array of {@link RouteDefinition}s.
	 */
	var RouteConfig = (function () {
	    function RouteConfig(configs) {
	        this.configs = configs;
	    }
	    RouteConfig = __decorate([
	        lang_1.CONST(), 
	        __metadata('design:paramtypes', [Array])
	    ], RouteConfig);
	    return RouteConfig;
	})();
	exports.RouteConfig = RouteConfig;
	var AbstractRoute = (function () {
	    function AbstractRoute(_a) {
	        var name = _a.name, useAsDefault = _a.useAsDefault, path = _a.path, regex = _a.regex, serializer = _a.serializer, data = _a.data;
	        this.name = name;
	        this.useAsDefault = useAsDefault;
	        this.path = path;
	        this.regex = regex;
	        this.serializer = serializer;
	        this.data = data;
	    }
	    AbstractRoute = __decorate([
	        lang_1.CONST(), 
	        __metadata('design:paramtypes', [Object])
	    ], AbstractRoute);
	    return AbstractRoute;
	})();
	exports.AbstractRoute = AbstractRoute;
	/**
	 * `Route` is a type of {@link RouteDefinition} used to route a path to a component.
	 *
	 * It has the following properties:
	 * - `path` is a string that uses the route matcher DSL.
	 * - `component` a component type.
	 * - `name` is an optional `CamelCase` string representing the name of the route.
	 * - `data` is an optional property of any type representing arbitrary route metadata for the given
	 * route. It is injectable via {@link RouteData}.
	 * - `useAsDefault` is a boolean value. If `true`, the child route will be navigated to if no child
	 * route is specified during the navigation.
	 *
	 * ### Example
	 * ```
	 * import {RouteConfig, Route} from 'angular2/router';
	 *
	 * @RouteConfig([
	 *   new Route({path: '/home', component: HomeCmp, name: 'HomeCmp' })
	 * ])
	 * class MyApp {}
	 * ```
	 */
	var Route = (function (_super) {
	    __extends(Route, _super);
	    function Route(_a) {
	        var name = _a.name, useAsDefault = _a.useAsDefault, path = _a.path, regex = _a.regex, serializer = _a.serializer, data = _a.data, component = _a.component;
	        _super.call(this, {
	            name: name,
	            useAsDefault: useAsDefault,
	            path: path,
	            regex: regex,
	            serializer: serializer,
	            data: data
	        });
	        this.aux = null;
	        this.component = component;
	    }
	    Route = __decorate([
	        lang_1.CONST(), 
	        __metadata('design:paramtypes', [Object])
	    ], Route);
	    return Route;
	})(AbstractRoute);
	exports.Route = Route;
	/**
	 * `AuxRoute` is a type of {@link RouteDefinition} used to define an auxiliary route.
	 *
	 * It takes an object with the following properties:
	 * - `path` is a string that uses the route matcher DSL.
	 * - `component` a component type.
	 * - `name` is an optional `CamelCase` string representing the name of the route.
	 * - `data` is an optional property of any type representing arbitrary route metadata for the given
	 * route. It is injectable via {@link RouteData}.
	 *
	 * ### Example
	 * ```
	 * import {RouteConfig, AuxRoute} from 'angular2/router';
	 *
	 * @RouteConfig([
	 *   new AuxRoute({path: '/home', component: HomeCmp})
	 * ])
	 * class MyApp {}
	 * ```
	 */
	var AuxRoute = (function (_super) {
	    __extends(AuxRoute, _super);
	    function AuxRoute(_a) {
	        var name = _a.name, useAsDefault = _a.useAsDefault, path = _a.path, regex = _a.regex, serializer = _a.serializer, data = _a.data, component = _a.component;
	        _super.call(this, {
	            name: name,
	            useAsDefault: useAsDefault,
	            path: path,
	            regex: regex,
	            serializer: serializer,
	            data: data
	        });
	        this.component = component;
	    }
	    AuxRoute = __decorate([
	        lang_1.CONST(), 
	        __metadata('design:paramtypes', [Object])
	    ], AuxRoute);
	    return AuxRoute;
	})(AbstractRoute);
	exports.AuxRoute = AuxRoute;
	/**
	 * `AsyncRoute` is a type of {@link RouteDefinition} used to route a path to an asynchronously
	 * loaded component.
	 *
	 * It has the following properties:
	 * - `path` is a string that uses the route matcher DSL.
	 * - `loader` is a function that returns a promise that resolves to a component.
	 * - `name` is an optional `CamelCase` string representing the name of the route.
	 * - `data` is an optional property of any type representing arbitrary route metadata for the given
	 * route. It is injectable via {@link RouteData}.
	 * - `useAsDefault` is a boolean value. If `true`, the child route will be navigated to if no child
	 * route is specified during the navigation.
	 *
	 * ### Example
	 * ```
	 * import {RouteConfig, AsyncRoute} from 'angular2/router';
	 *
	 * @RouteConfig([
	 *   new AsyncRoute({path: '/home', loader: () => Promise.resolve(MyLoadedCmp), name:
	 * 'MyLoadedCmp'})
	 * ])
	 * class MyApp {}
	 * ```
	 */
	var AsyncRoute = (function (_super) {
	    __extends(AsyncRoute, _super);
	    function AsyncRoute(_a) {
	        var name = _a.name, useAsDefault = _a.useAsDefault, path = _a.path, regex = _a.regex, serializer = _a.serializer, data = _a.data, loader = _a.loader;
	        _super.call(this, {
	            name: name,
	            useAsDefault: useAsDefault,
	            path: path,
	            regex: regex,
	            serializer: serializer,
	            data: data
	        });
	        this.aux = null;
	        this.loader = loader;
	    }
	    AsyncRoute = __decorate([
	        lang_1.CONST(), 
	        __metadata('design:paramtypes', [Object])
	    ], AsyncRoute);
	    return AsyncRoute;
	})(AbstractRoute);
	exports.AsyncRoute = AsyncRoute;
	/**
	 * `Redirect` is a type of {@link RouteDefinition} used to route a path to a canonical route.
	 *
	 * It has the following properties:
	 * - `path` is a string that uses the route matcher DSL.
	 * - `redirectTo` is an array representing the link DSL.
	 *
	 * Note that redirects **do not** affect how links are generated. For that, see the `useAsDefault`
	 * option.
	 *
	 * ### Example
	 * ```
	 * import {RouteConfig, Route, Redirect} from 'angular2/router';
	 *
	 * @RouteConfig([
	 *   new Redirect({path: '/', redirectTo: ['/Home'] }),
	 *   new Route({path: '/home', component: HomeCmp, name: 'Home'})
	 * ])
	 * class MyApp {}
	 * ```
	 */
	var Redirect = (function (_super) {
	    __extends(Redirect, _super);
	    function Redirect(_a) {
	        var name = _a.name, useAsDefault = _a.useAsDefault, path = _a.path, regex = _a.regex, serializer = _a.serializer, data = _a.data, redirectTo = _a.redirectTo;
	        _super.call(this, {
	            name: name,
	            useAsDefault: useAsDefault,
	            path: path,
	            regex: regex,
	            serializer: serializer,
	            data: data
	        });
	        this.redirectTo = redirectTo;
	    }
	    Redirect = __decorate([
	        lang_1.CONST(), 
	        __metadata('design:paramtypes', [Object])
	    ], Redirect);
	    return Redirect;
	})(AbstractRoute);
	exports.Redirect = Redirect;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVfY29uZmlnX2ltcGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbmd1bGFyMi9zcmMvcm91dGVyL3JvdXRlX2NvbmZpZy9yb3V0ZV9jb25maWdfaW1wbC50cyJdLCJuYW1lcyI6WyJSb3V0ZUNvbmZpZyIsIlJvdXRlQ29uZmlnLmNvbnN0cnVjdG9yIiwiQWJzdHJhY3RSb3V0ZSIsIkFic3RyYWN0Um91dGUuY29uc3RydWN0b3IiLCJSb3V0ZSIsIlJvdXRlLmNvbnN0cnVjdG9yIiwiQXV4Um91dGUiLCJBdXhSb3V0ZS5jb25zdHJ1Y3RvciIsIkFzeW5jUm91dGUiLCJBc3luY1JvdXRlLmNvbnN0cnVjdG9yIiwiUmVkaXJlY3QiLCJSZWRpcmVjdC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQkFBcUMsMEJBQTBCLENBQUMsQ0FBQTtBQU1oRSxJQUFJLDBCQUEwQixHQUFpQixJQUFJLENBQUM7QUFFcEQ7Ozs7R0FJRztBQUNIO0lBRUVBLHFCQUFtQkEsT0FBMEJBO1FBQTFCQyxZQUFPQSxHQUFQQSxPQUFPQSxDQUFtQkE7SUFBR0EsQ0FBQ0E7SUFGbkREO1FBQUNBLFlBQUtBLEVBQUVBOztvQkFHUEE7SUFBREEsa0JBQUNBO0FBQURBLENBQUNBLEFBSEQsSUFHQztBQUZZLG1CQUFXLGNBRXZCLENBQUE7QUFFRDtJQVNFRSx1QkFBWUEsRUFBb0VBO1lBQW5FQyxJQUFJQSxZQUFFQSxZQUFZQSxvQkFBRUEsSUFBSUEsWUFBRUEsS0FBS0EsYUFBRUEsVUFBVUEsa0JBQUVBLElBQUlBO1FBQzVEQSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQTtRQUNqQkEsSUFBSUEsQ0FBQ0EsWUFBWUEsR0FBR0EsWUFBWUEsQ0FBQ0E7UUFDakNBLElBQUlBLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBO1FBQ2pCQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxLQUFLQSxDQUFDQTtRQUNuQkEsSUFB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SUFBSUEsWUFBRUEsWUFBWUEsb0JBQUVBLElBQUlBLFlBQUVBLEtBQUtBLGFBQUVBLFVBQVVBLGtCQUFFQSxJQUFJQSxZQUFFQSxVQUFVQTtRQUN4RUEsa0JBQU1BO1lBQ0pBLElBQUlBLEVBQUVBLElBQUlBO1lBQ1ZBLFlBQVlBLEVBQUVBLFlBQVlBO1lBQzFCQSxJQUFJQSxFQUFFQSxJQUFJQTtZQUNWQSxLQUFLQSxFQUFFQSxLQUFLQTtZQUNaQSxVQUFVQSxFQUFFQSxVQUFVQTtZQUN0QkEsSUFBSUEsRUFBRUEsSUFBSUE7U0FDWEEsQ0FBQ0EsQ0FBQ0E7UUFDSEEsSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsVUFBVUEsQ0FBQ0E7SUFDL0JBLENBQUNBO0lBZEhEO1FBQUNBLFlBQUtBLEVBQUVBOztpQkFlUEE7SUFBREEsZUFBQ0E7QUFBREEsQ0FBQ0EsQUFmRCxFQUM4QixhQUFhLEVBYzFDO0FBZFksZ0JBQVEsV0FjcEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q09OU1QsIFR5cGUsIGlzUHJlc2VudH0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbmltcG9ydCB7Um91dGVEZWZpbml0aW9ufSBmcm9tICcuLi9yb3V0ZV9kZWZpbml0aW9uJztcbmltcG9ydCB7UmVnZXhTZXJpYWxpemVyfSBmcm9tICcuLi9ydWxlcy9yb3V0ZV9wYXRocy9yZWdleF9yb3V0ZV9wYXRoJztcblxuZXhwb3J0IHtSb3V0ZURlZmluaXRpb259IGZyb20gJy4uL3JvdXRlX2RlZmluaXRpb24nO1xuXG52YXIgX19tYWtlX2RhcnRfYW5hbHl6ZXJfaGFwcHk6IFByb21pc2U8YW55PiA9IG51bGw7XG5cbi8qKlxuICogVGhlIGBSb3V0ZUNvbmZpZ2AgZGVjb3JhdG9yIGRlZmluZXMgcm91dGVzIGZvciBhIGdpdmVuIGNvbXBvbmVudC5cbiAqXG4gKiBJdCB0YWtlcyBhbiBhcnJheSBvZiB7QGxpbmsgUm91dGVEZWZpbml0aW9ufXMuXG4gKi9cbkBDT05TVCgpXG5leHBvcnQgY2xhc3MgUm91dGVDb25maWcge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgY29uZmlnczogUm91dGVEZWZpbml0aW9uW10pIHt9XG59XG5cbkBDT05TVCgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RSb3V0ZSBpbXBsZW1lbnRzIFJvdXRlRGVmaW5pdGlvbiB7XG4gIG5hbWU6IHN0cmluZztcbiAgdXNlQXNEZWZhdWx0OiBib29sZWFuO1xuICBwYXRoOiBzdHJpbmc7XG4gIHJlZ2V4OiBzdHJpbmc7XG4gIHNlcmlhbGl6ZXI6IFJlZ2V4U2VyaWFsaXplcjtcbiAgZGF0YToge1trZXk6IHN0cmluZ106IGFueX07XG5cbiAgY29uc3RydWN0b3Ioe25hbWUsIHVzZUFzRGVmYXVsdCwgcGF0aCwgcmVnZXgsIHNlcmlhbGl6ZXIsIGRhdGF9OiBSb3V0ZURlZmluaXRpb24pIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudXNlQXNEZWZhdWx0ID0gdXNlQXNEZWZhdWx0O1xuICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgdGhpcy5yZWdleCA9IHJlZ2V4O1xuICAgIHRoaXMuc2VyaWFsaXplciA9IHNlcmlhbGl6ZXI7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgfVxufVxuXG4vKipcbiAqIGBSb3V0ZWAgaXMgYSB0eXBlIG9mIHtAbGluayBSb3V0ZURlZmluaXRpb259IHVzZWQgdG8gcm91dGUgYSBwYXRoIHRvIGEgY29tcG9uZW50LlxuICpcbiAqIEl0IGhhcyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gKiAtIGBwYXRoYCBpcyBhIHN0cmluZyB0aGF0IHVzZXMgdGhlIHJvdXRlIG1hdGNoZXIgRFNMLlxuICogLSBgY29tcG9uZW50YCBhIGNvbXBvbmVudCB0eXBlLlxuICogLSBgbmFtZWAgaXMgYW4gb3B0aW9uYWwgYENhbWVsQ2FzZWAgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgbmFtZSBvZiB0aGUgcm91dGUuXG4gKiAtIGBkYXRhYCBpcyBhbiBvcHRpb25hbCBwcm9wZXJ0eSBvZiBhbnkgdHlwZSByZXByZXNlbnRpbmcgYXJiaXRyYXJ5IHJvdXRlIG1ldGFkYXRhIGZvciB0aGUgZ2l2ZW5cbiAqIHJvdXRlLiBJdCBpcyBpbmplY3RhYmxlIHZpYSB7QGxpbmsgUm91dGVEYXRhfS5cbiAqIC0gYHVzZUFzRGVmYXVsdGAgaXMgYSBib29sZWFuIHZhbHVlLiBJZiBgdHJ1ZWAsIHRoZSBjaGlsZCByb3V0ZSB3aWxsIGJlIG5hdmlnYXRlZCB0byBpZiBubyBjaGlsZFxuICogcm91dGUgaXMgc3BlY2lmaWVkIGR1cmluZyB0aGUgbmF2aWdhdGlvbi5cbiAqXG4gKiAjIyMgRXhhbXBsZVxuICogYGBgXG4gKiBpbXBvcnQge1JvdXRlQ29uZmlnLCBSb3V0ZX0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbiAqXG4gKiBAUm91dGVDb25maWcoW1xuICogICBuZXcgUm91dGUoe3BhdGg6ICcvaG9tZScsIGNvbXBvbmVudDogSG9tZUNtcCwgbmFtZTogJ0hvbWVDbXAnIH0pXG4gKiBdKVxuICogY2xhc3MgTXlBcHAge31cbiAqIGBgYFxuICovXG5AQ09OU1QoKVxuZXhwb3J0IGNsYXNzIFJvdXRlIGV4dGVuZHMgQWJzdHJhY3RSb3V0ZSB7XG4gIGNvbXBvbmVudDogYW55O1xuICBhdXg6IHN0cmluZyA9IG51bGw7XG5cbiAgY29uc3RydWN0b3Ioe25hbWUsIHVzZUFzRGVmYXVsdCwgcGF0aCwgcmVnZXgsIHNlcmlhbGl6ZXIsIGRhdGEsIGNvbXBvbmVudH06IFJvdXRlRGVmaW5pdGlvbikge1xuICAgIHN1cGVyKHtcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICB1c2VBc0RlZmF1bHQ6IHVzZUFzRGVmYXVsdCxcbiAgICAgIHBhdGg6IHBhdGgsXG4gICAgICByZWdleDogcmVnZXgsXG4gICAgICBzZXJpYWxpemVyOiBzZXJpYWxpemVyLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pO1xuICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICB9XG59XG5cbi8qKlxuICogYEF1eFJvdXRlYCBpcyBhIHR5cGUgb2Yge0BsaW5rIFJvdXRlRGVmaW5pdGlvbn0gdXNlZCB0byBkZWZpbmUgYW4gYXV4aWxpYXJ5IHJvdXRlLlxuICpcbiAqIEl0IHRha2VzIGFuIG9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAqIC0gYHBhdGhgIGlzIGEgc3RyaW5nIHRoYXQgdXNlcyB0aGUgcm91dGUgbWF0Y2hlciBEU0wuXG4gKiAtIGBjb21wb25lbnRgIGEgY29tcG9uZW50IHR5cGUuXG4gKiAtIGBuYW1lYCBpcyBhbiBvcHRpb25hbCBgQ2FtZWxDYXNlYCBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBuYW1lIG9mIHRoZSByb3V0ZS5cbiAqIC0gYGRhdGFgIGlzIGFuIG9wdGlvbmFsIHByb3BlcnR5IG9mIGFueSB0eXBlIHJlcHJlc2VudGluZyBhcmJpdHJhcnkgcm91dGUgbWV0YWRhdGEgZm9yIHRoZSBnaXZlblxuICogcm91dGUuIEl0IGlzIGluamVjdGFibGUgdmlhIHtAbGluayBSb3V0ZURhdGF9LlxuICpcbiAqICMjIyBFeGFtcGxlXG4gKiBgYGBcbiAqIGltcG9ydCB7Um91dGVDb25maWcsIEF1eFJvdXRlfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuICpcbiAqIEBSb3V0ZUNvbmZpZyhbXG4gKiAgIG5ldyBBdXhSb3V0ZSh7cGF0aDogJy9ob21lJywgY29tcG9uZW50OiBIb21lQ21wfSlcbiAqIF0pXG4gKiBjbGFzcyBNeUFwcCB7fVxuICogYGBgXG4gKi9cbkBDT05TVCgpXG5leHBvcnQgY2xhc3MgQXV4Um91dGUgZXh0ZW5kcyBBYnN0cmFjdFJvdXRlIHtcbiAgY29tcG9uZW50OiBhbnk7XG5cbiAgY29uc3RydWN0b3Ioe25hbWUsIHVzZUFzRGVmYXVsdCwgcGF0aCwgcmVnZXgsIHNlcmlhbGl6ZXIsIGRhdGEsIGNvbXBvbmVudH06IFJvdXRlRGVmaW5pdGlvbikge1xuICAgIHN1cGVyKHtcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICB1c2VBc0RlZmF1bHQ6IHVzZUFzRGVmYXVsdCxcbiAgICAgIHBhdGg6IHBhdGgsXG4gICAgICByZWdleDogcmVnZXgsXG4gICAgICBzZXJpYWxpemVyOiBzZXJpYWxpemVyLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pO1xuICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICB9XG59XG5cbi8qKlxuICogYEFzeW5jUm91dGVgIGlzIGEgdHlwZSBvZiB7QGxpbmsgUm91dGVEZWZpbml0aW9ufSB1c2VkIHRvIHJvdXRlIGEgcGF0aCB0byBhbiBhc3luY2hyb25vdXNseVxuICogbG9hZGVkIGNvbXBvbmVudC5cbiAqXG4gKiBJdCBoYXMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICogLSBgcGF0aGAgaXMgYSBzdHJpbmcgdGhhdCB1c2VzIHRoZSByb3V0ZSBtYXRjaGVyIERTTC5cbiAqIC0gYGxvYWRlcmAgaXMgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gYSBjb21wb25lbnQuXG4gKiAtIGBuYW1lYCBpcyBhbiBvcHRpb25hbCBgQ2FtZWxDYXNlYCBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBuYW1lIG9mIHRoZSByb3V0ZS5cbiAqIC0gYGRhdGFgIGlzIGFuIG9wdGlvbmFsIHByb3BlcnR5IG9mIGFueSB0eXBlIHJlcHJlc2VudGluZyBhcmJpdHJhcnkgcm91dGUgbWV0YWRhdGEgZm9yIHRoZSBnaXZlblxuICogcm91dGUuIEl0IGlzIGluamVjdGFibGUgdmlhIHtAbGluayBSb3V0ZURhdGF9LlxuICogLSBgdXNlQXNEZWZhdWx0YCBpcyBhIGJvb2xlYW4gdmFsdWUuIElmIGB0cnVlYCwgdGhlIGNoaWxkIHJvdXRlIHdpbGwgYmUgbmF2aWdhdGVkIHRvIGlmIG5vIGNoaWxkXG4gKiByb3V0ZSBpcyBzcGVjaWZpZWQgZHVyaW5nIHRoZSBuYXZpZ2F0aW9uLlxuICpcbiAqICMjIyBFeGFtcGxlXG4gKiBgYGBcbiAqIGltcG9ydCB7Um91dGVDb25maWcsIEFzeW5jUm91dGV9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG4gKlxuICogQFJvdXRlQ29uZmlnKFtcbiAqICAgbmV3IEFzeW5jUm91dGUoe3BhdGg6ICcvaG9tZScsIGxvYWRlcjogKCkgPT4gUHJvbWlzZS5yZXNvbHZlKE15TG9hZGVkQ21wKSwgbmFtZTpcbiAqICdNeUxvYWRlZENtcCd9KVxuICogXSlcbiAqIGNsYXNzIE15QXBwIHt9XG4gKiBgYGBcbiAqL1xuQENPTlNUKClcbmV4cG9ydCBjbGFzcyBBc3luY1JvdXRlIGV4dGVuZHMgQWJzdHJhY3RSb3V0ZSB7XG4gIGxvYWRlcjogKCkgPT4gUHJvbWlzZTxUeXBlPjtcbiAgYXV4OiBzdHJpbmcgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHtuYW1lLCB1c2VBc0RlZmF1bHQsIHBhdGgsIHJlZ2V4LCBzZXJpYWxpemVyLCBkYXRhLCBsb2FkZXJ9OiBSb3V0ZURlZmluaXRpb24pIHtcbiAgICBzdXBlcih7XG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgdXNlQXNEZWZhdWx0OiB1c2VBc0RlZmF1bHQsXG4gICAgICBwYXRoOiBwYXRoLFxuICAgICAgcmVnZXg6IHJlZ2V4LFxuICAgICAgc2VyaWFsaXplcjogc2VyaWFsaXplcixcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KTtcbiAgICB0aGlzLmxvYWRlciA9IGxvYWRlcjtcbiAgfVxufVxuXG4vKipcbiAqIGBSZWRpcmVjdGAgaXMgYSB0eXBlIG9mIHtAbGluayBSb3V0ZURlZmluaXRpb259IHVzZWQgdG8gcm91dGUgYSBwYXRoIHRvIGEgY2Fub25pY2FsIHJvdXRlLlxuICpcbiAqIEl0IGhhcyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gKiAtIGBwYXRoYCBpcyBhIHN0cmluZyB0aGF0IHVzZXMgdGhlIHJvdXRlIG1hdGNoZXIgRFNMLlxuICogLSBgcmVkaXJlY3RUb2AgaXMgYW4gYXJyYXkgcmVwcmVzZW50aW5nIHRoZSBsaW5rIERTTC5cbiAqXG4gKiBOb3RlIHRoYXQgcmVkaXJlY3RzICoqZG8gbm90KiogYWZmZWN0IGhvdyBsaW5rcyBhcmUgZ2VuZXJhdGVkLiBGb3IgdGhhdCwgc2VlIHRoZSBgdXNlQXNEZWZhdWx0YFxuICogb3B0aW9uLlxuICpcbiAqICMjIyBFeGFtcGxlXG4gKiBgYGBcbiAqIGltcG9ydCB7Um91dGVDb25maWcsIFJvdXRlLCBSZWRpcmVjdH0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbiAqXG4gKiBAUm91dGVDb25maWcoW1xuICogICBuZXcgUmVkaXJlY3Qoe3BhdGg6ICcvJywgcmVkaXJlY3RUbzogWycvSG9tZSddIH0pLFxuICogICBuZXcgUm91dGUoe3BhdGg6ICcvaG9tZScsIGNvbXBvbmVudDogSG9tZUNtcCwgbmFtZTogJ0hvbWUnfSlcbiAqIF0pXG4gKiBjbGFzcyBNeUFwcCB7fVxuICogYGBgXG4gKi9cbkBDT05TVCgpXG5leHBvcnQgY2xhc3MgUmVkaXJlY3QgZXh0ZW5kcyBBYnN0cmFjdFJvdXRlIHtcbiAgcmVkaXJlY3RUbzogYW55W107XG5cbiAgY29uc3RydWN0b3Ioe25hbWUsIHVzZUFzRGVmYXVsdCwgcGF0aCwgcmVnZXgsIHNlcmlhbGl6ZXIsIGRhdGEsIHJlZGlyZWN0VG99OiBSb3V0ZURlZmluaXRpb24pIHtcbiAgICBzdXBlcih7XG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgdXNlQXNEZWZhdWx0OiB1c2VBc0RlZmF1bHQsXG4gICAgICBwYXRoOiBwYXRoLFxuICAgICAgcmVnZXg6IHJlZ2V4LFxuICAgICAgc2VyaWFsaXplcjogc2VyaWFsaXplcixcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KTtcbiAgICB0aGlzLnJlZGlyZWN0VG8gPSByZWRpcmVjdFRvO1xuICB9XG59XG4iXX0=

/***/ },

/***/ 232:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var lang_1 = __webpack_require__(3);
	var exceptions_1 = __webpack_require__(13);
	var promise_1 = __webpack_require__(51);
	var collection_1 = __webpack_require__(11);
	var url_parser_1 = __webpack_require__(233);
	var instruction_1 = __webpack_require__(234);
	// RouteMatch objects hold information about a match between a rule and a URL
	var RouteMatch = (function () {
	    function RouteMatch() {
	    }
	    return RouteMatch;
	})();
	exports.RouteMatch = RouteMatch;
	var PathMatch = (function (_super) {
	    __extends(PathMatch, _super);
	    function PathMatch(instruction, remaining, remainingAux) {
	        _super.call(this);
	        this.instruction = instruction;
	        this.remaining = remaining;
	        this.remainingAux = remainingAux;
	    }
	    return PathMatch;
	})(RouteMatch);
	exports.PathMatch = PathMatch;
	var RedirectMatch = (function (_super) {
	    __extends(RedirectMatch, _super);
	    function RedirectMatch(redirectTo, specificity) {
	        _super.call(this);
	        this.redirectTo = redirectTo;
	        this.specificity = specificity;
	    }
	    return RedirectMatch;
	})(RouteMatch);
	exports.RedirectMatch = RedirectMatch;
	var RedirectRule = (function () {
	    function RedirectRule(_pathRecognizer, redirectTo) {
	        this._pathRecognizer = _pathRecognizer;
	        this.redirectTo = redirectTo;
	        this.hash = this._pathRecognizer.hash;
	    }
	    Object.defineProperty(RedirectRule.prototype, "path", {
	        get: function () { return this._pathRecognizer.toString(); },
	        set: function (val) { throw new exceptions_1.BaseException('you cannot set the path of a RedirectRule directly'); },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Returns `null` or a `ParsedUrl` representing the new path to match
	     */
	    RedirectRule.prototype.recognize = function (beginningSegment) {
	        var match = null;
	        if (lang_1.isPresent(this._pathRecognizer.matchUrl(beginningSegment))) {
	            match = new RedirectMatch(this.redirectTo, this._pathRecognizer.specificity);
	        }
	        return promise_1.PromiseWrapper.resolve(match);
	    };
	    RedirectRule.prototype.generate = function (params) {
	        throw new exceptions_1.BaseException("Tried to generate a redirect.");
	    };
	    return RedirectRule;
	})();
	exports.RedirectRule = RedirectRule;
	// represents something like '/foo/:bar'
	var RouteRule = (function () {
	    // TODO: cache component instruction instances by params and by ParsedUrl instance
	    function RouteRule(_routePath, handler) {
	        this._routePath = _routePath;
	        this.handler = handler;
	        this._cache = new collection_1.Map();
	        this.specificity = this._routePath.specificity;
	        this.hash = this._routePath.hash;
	        this.terminal = this._routePath.terminal;
	    }
	    Object.defineProperty(RouteRule.prototype, "path", {
	        get: function () { return this._routePath.toString(); },
	        set: function (val) { throw new exceptions_1.BaseException('you cannot set the path of a RouteRule directly'); },
	        enumerable: true,
	        configurable: true
	    });
	    RouteRule.prototype.recognize = function (beginningSegment) {
	        var _this = this;
	        var res = this._routePath.matchUrl(beginningSegment);
	        if (lang_1.isBlank(res)) {
	            return null;
	        }
	        return this.handler.resolveComponentType().then(function (_) {
	            var componentInstruction = _this._getInstruction(res.urlPath, res.urlParams, res.allParams);
	            return new PathMatch(componentInstruction, res.rest, res.auxiliary);
	        });
	    };
	    RouteRule.prototype.generate = function (params) {
	        var generated = this._routePath.generateUrl(params);
	        var urlPath = generated.urlPath;
	        var urlParams = generated.urlParams;
	        return this._getInstruction(urlPath, url_parser_1.convertUrlParamsToArray(urlParams), params);
	    };
	    RouteRule.prototype.generateComponentPathValues = function (params) {
	        return this._routePath.generateUrl(params);
	    };
	    RouteRule.prototype._getInstruction = function (urlPath, urlParams, params) {
	        if (lang_1.isBlank(this.handler.componentType)) {
	            throw new exceptions_1.BaseException("Tried to get instruction before the type was loaded.");
	        }
	        var hashKey = urlPath + '?' + urlParams.join('&');
	        if (this._cache.has(hashKey)) {
	            return this._cache.get(hashKey);
	        }
	        var instruction = new instruction_1.ComponentInstruction(urlPath, urlParams, this.handler.data, this.handler.componentType, this.terminal, this.specificity, params);
	        this._cache.set(hashKey, instruction);
	        return instruction;
	    };
	    return RouteRule;
	})();
	exports.RouteRule = RouteRule;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVsZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbmd1bGFyMi9zcmMvcm91dGVyL3J1bGVzL3J1bGVzLnRzIl0sIm5hbWVzIjpbIlJvdXRlTWF0Y2giLCJSb3V0ZU1hdGNoLmNvbnN0cnVjdG9yIiwiUGF0aE1hdGNoIiwiUGF0aE1hdGNoLmNvbnN0cnVjdG9yIiwiUmVkaXJlY3RNYXRjaCIsIlJlZGlyZWN0TWF0Y2guY29uc3RydWN0b3IiLCJSZWRpcmVjdFJ1bGUiLCJSZWRpcmVjdFJ1bGUuY29uc3RydWN0b3IiLCJSZWRpcmVjdFJ1bGUucGF0aCIsIlJlZGlyZWN0UnVsZS5yZWNvZ25pemUiLCJSZWRpcmVjdFJ1bGUuZ2VuZXJhdGUiLCJSb3V0ZVJ1bGUiLCJSb3V0ZVJ1bGUuY29uc3RydWN0b3IiLCJSb3V0ZVJ1bGUucGF0aCIsIlJvdXRlUnVsZS5yZWNvZ25pemUiLCJSb3V0ZVJ1bGUuZ2VuZXJhdGUiLCJSb3V0ZVJ1bGUuZ2VuZXJhdGVDb21wb25lbnRQYXRoVmFsdWVzIiwiUm91dGVSdWxlLl9nZXRJbnN0cnVjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxQkFBaUMsMEJBQTBCLENBQUMsQ0FBQTtBQUM1RCwyQkFBNEIsZ0NBQWdDLENBQUMsQ0FBQTtBQUM3RCx3QkFBNkIsNkJBQTZCLENBQUMsQ0FBQTtBQUMzRCwyQkFBa0IsZ0NBQWdDLENBQUMsQ0FBQTtBQUduRCwyQkFBMkMsZUFBZSxDQUFDLENBQUE7QUFDM0QsNEJBQW1DLGdCQUFnQixDQUFDLENBQUE7QUFLcEQsNkVBQTZFO0FBQzdFO0lBQUFBO0lBQWtDQyxDQUFDQTtJQUFERCxpQkFBQ0E7QUFBREEsQ0FBQ0EsQUFBbkMsSUFBbUM7QUFBYixrQkFBVSxhQUFHLENBQUE7QUFFbkM7SUFBK0JFLDZCQUFVQTtJQUN2Q0EsbUJBQW1CQSxXQUFpQ0EsRUFBU0EsU0FBY0EsRUFDeERBLFlBQW1CQTtRQUNwQ0MsaUJBQU9BLENBQUNBO1FBRlNBLGdCQUFXQSxHQUFYQSxXQUFX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LElBQUlBLENBQUNBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLE9BQU9BLEVBQUVBLFdBQVdBLENBQUNBLENBQUNBO1FBRXRDQSxNQUFNQSxDQUFDQSxXQUFXQSxDQUFDQTtJQUNyQkEsQ0FBQ0E7SUFDSE4sZ0JBQUNBO0FBQURBLENBQUNBLEFBekRELElBeURDO0FBekRZLGlCQUFTLFlBeURyQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpc1ByZXNlbnQsIGlzQmxhbmt9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge0Jhc2VFeGNlcHRpb259IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvZXhjZXB0aW9ucyc7XG5pbXBvcnQge1Byb21pc2VXcmFwcGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL3Byb21pc2UnO1xuaW1wb3J0IHtNYXB9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvY29sbGVjdGlvbic7XG5cbmltcG9ydCB7Um91dGVIYW5kbGVyfSBmcm9tICcuL3JvdXRlX2hhbmRsZXJzL3JvdXRlX2hhbmRsZXInO1xuaW1wb3J0IHtVcmwsIGNvbnZlcnRVcmxQYXJhbXNUb0FycmF5fSBmcm9tICcuLi91cmxfcGFyc2VyJztcbmltcG9ydCB7Q29tcG9uZW50SW5zdHJ1Y3Rpb259IGZyb20gJy4uL2luc3RydWN0aW9uJztcbmltcG9ydCB7Um91dGVQYXRofSBmcm9tICcuL3JvdXRlX3BhdGhzL3JvdXRlX3BhdGgnO1xuaW1wb3J0IHtHZW5lcmF0ZWRVcmx9IGZyb20gJy4vcm91dGVfcGF0aHMvcm91dGVfcGF0aCc7XG5cblxuLy8gUm91dGVNYXRjaCBvYmplY3RzIGhvbGQgaW5mb3JtYXRpb24gYWJvdXQgYSBtYXRjaCBiZXR3ZWVuIGEgcnVsZSBhbmQgYSBVUkxcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBSb3V0ZU1hdGNoIHt9XG5cbmV4cG9ydCBjbGFzcyBQYXRoTWF0Y2ggZXh0ZW5kcyBSb3V0ZU1hdGNoIHtcbiAgY29uc3RydWN0b3IocHVibGljIGluc3RydWN0aW9uOiBDb21wb25lbnRJbnN0cnVjdGlvbiwgcHVibGljIHJlbWFpbmluZzogVXJsLFxuICAgICAgICAgICAgICBwdWJsaWMgcmVtYWluaW5nQXV4OiBVcmxbXSkge1xuICAgIHN1cGVyKCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlZGlyZWN0TWF0Y2ggZXh0ZW5kcyBSb3V0ZU1hdGNoIHtcbiAgY29uc3RydWN0b3IocHVibGljIHJlZGlyZWN0VG86IGFueVtdLCBwdWJsaWMgc3BlY2lmaWNpdHkpIHsgc3VwZXIoKTsgfVxufVxuXG4vLyBSdWxlcyBhcmUgcmVzcG9uc2libGUgZm9yIHJlY29nbml6aW5nIFVSTCBzZWdtZW50cyBhbmQgZ2VuZXJhdGluZyBpbnN0cnVjdGlvbnNcbmV4cG9ydCBpbnRlcmZhY2UgQWJzdHJhY3RSdWxlIHtcbiAgaGFzaDogc3RyaW5nO1xuICBwYXRoOiBzdHJpbmc7XG4gIHJlY29nbml6ZShiZWdpbm5pbmdTZWdtZW50OiBVcmwpOiBQcm9taXNlPFJvdXRlTWF0Y2g+O1xuICBnZW5lcmF0ZShwYXJhbXM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogQ29tcG9uZW50SW5zdHJ1Y3Rpb247XG59XG5cbmV4cG9ydCBjbGFzcyBSZWRpcmVjdFJ1bGUgaW1wbGVtZW50cyBBYnN0cmFjdFJ1bGUge1xuICBwdWJsaWMgaGFzaDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3BhdGhSZWNvZ25pemVyOiBSb3V0ZVBhdGgsIHB1YmxpYyByZWRpcmVjdFRvOiBhbnlbXSkge1xuICAgIHRoaXMuaGFzaCA9IHRoaXMuX3BhdGhSZWNvZ25pemVyLmhhc2g7XG4gIH1cblxuICBnZXQgcGF0aCgpIHsgcmV0dXJuIHRoaXMuX3BhdGhSZWNvZ25pemVyLnRvU3RyaW5nKCk7IH1cbiAgc2V0IHBhdGgodmFsKSB7IHRocm93IG5ldyBCYXNlRXhjZXB0aW9uKCd5b3UgY2Fubm90IHNldCB0aGUgcGF0aCBvZiBhIFJlZGlyZWN0UnVsZSBkaXJlY3RseScpOyB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYG51bGxgIG9yIGEgYFBhcnNlZFVybGAgcmVwcmVzZW50aW5nIHRoZSBuZXcgcGF0aCB0byBtYXRjaFxuICAgKi9cbiAgcmVjb2duaXplKGJlZ2lubmluZ1NlZ21lbnQ6IFVybCk6IFByb21pc2U8Um91dGVNYXRjaD4ge1xuICAgIHZhciBtYXRjaCA9IG51bGw7XG4gICAgaWYgKGlzUHJlc2VudCh0aGlzLl9wYXRoUmVjb2duaXplci5tYXRjaFVybChiZWdpbm5pbmdTZWdtZW50KSkpIHtcbiAgICAgIG1hdGNoID0gbmV3IFJlZGlyZWN0TWF0Y2godGhpcy5yZWRpcmVjdFRvLCB0aGlzLl9wYXRoUmVjb2duaXplci5zcGVjaWZpY2l0eSk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlV3JhcHBlci5yZXNvbHZlKG1hdGNoKTtcbiAgfVxuXG4gIGdlbmVyYXRlKHBhcmFtczoge1trZXk6IHN0cmluZ106IGFueX0pOiBDb21wb25lbnRJbnN0cnVjdGlvbiB7XG4gICAgdGhyb3cgbmV3IEJhc2VFeGNlcHRpb24oYFRyaWVkIHRvIGdlbmVyYXRlIGEgcmVkaXJlY3QuYCk7XG4gIH1cbn1cblxuXG4vLyByZXByZXNlbnRzIHNvbWV0aGluZyBsaWtlICcvZm9vLzpiYXInXG5leHBvcnQgY2xhc3MgUm91dGVSdWxlIGltcGxlbWVudHMgQWJzdHJhY3RSdWxlIHtcbiAgc3BlY2lmaWNpdHk6IHN0cmluZztcbiAgdGVybWluYWw6IGJvb2xlYW47XG4gIGhhc2g6IHN0cmluZztcblxuICBwcml2YXRlIF9jYWNoZTogTWFwPHN0cmluZywgQ29tcG9uZW50SW5zdHJ1Y3Rpb24+ID0gbmV3IE1hcDxzdHJpbmcsIENvbXBvbmVudEluc3RydWN0aW9uPigpO1xuXG4gIC8vIFRPRE86IGNhY2hlIGNvbXBvbmVudCBpbnN0cnVjdGlvbiBpbnN0YW5jZXMgYnkgcGFyYW1zIGFuZCBieSBQYXJzZWRVcmwgaW5zdGFuY2VcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZVBhdGg6IFJvdXRlUGF0aCwgcHVibGljIGhhbmRsZXI6IFJvdXRlSGFuZGxlcikge1xuICAgIHRoaXMuc3BlY2lmaWNpdHkgPSB0aGlzLl9yb3V0ZVBhdGguc3BlY2lmaWNpdHk7XG4gICAgdGhpcy5oYXNoID0gdGhpcy5fcm91dGVQYXRoLmhhc2g7XG4gICAgdGhpcy50ZXJtaW5hbCA9IHRoaXMuX3JvdXRlUGF0aC50ZXJtaW5hbDtcbiAgfVxuXG4gIGdldCBwYXRoKCkgeyByZXR1cm4gdGhpcy5fcm91dGVQYXRoLnRvU3RyaW5nKCk7IH1cbiAgc2V0IHBhdGgodmFsKSB7IHRocm93IG5ldyBCYXNlRXhjZXB0aW9uKCd5b3UgY2Fubm90IHNldCB0aGUgcGF0aCBvZiBhIFJvdXRlUnVsZSBkaXJlY3RseScpOyB9XG5cbiAgcmVjb2duaXplKGJlZ2lubmluZ1NlZ21lbnQ6IFVybCk6IFByb21pc2U8Um91dGVNYXRjaD4ge1xuICAgIHZhciByZXMgPSB0aGlzLl9yb3V0ZVBhdGgubWF0Y2hVcmwoYmVnaW5uaW5nU2VnbWVudCk7XG4gICAgaWYgKGlzQmxhbmsocmVzKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlci5yZXNvbHZlQ29tcG9uZW50VHlwZSgpLnRoZW4oKF8pID0+IHtcbiAgICAgIHZhciBjb21wb25lbnRJbnN0cnVjdGlvbiA9IHRoaXMuX2dldEluc3RydWN0aW9uKHJlcy51cmxQYXRoLCByZXMudXJsUGFyYW1zLCByZXMuYWxsUGFyYW1zKTtcbiAgICAgIHJldHVybiBuZXcgUGF0aE1hdGNoKGNvbXBvbmVudEluc3RydWN0aW9uLCByZXMucmVzdCwgcmVzLmF1eGlsaWFyeSk7XG4gICAgfSk7XG4gIH1cblxuICBnZW5lcmF0ZShwYXJhbXM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogQ29tcG9uZW50SW5zdHJ1Y3Rpb24ge1xuICAgIHZhciBnZW5lcmF0ZWQgPSB0aGlzLl9yb3V0ZVBhdGguZ2VuZXJhdGVVcmwocGFyYW1zKTtcbiAgICB2YXIgdXJsUGF0aCA9IGdlbmVyYXRlZC51cmxQYXRoO1xuICAgIHZhciB1cmxQYXJhbXMgPSBnZW5lcmF0ZWQudXJsUGFyYW1zO1xuICAgIHJldHVybiB0aGlzLl9nZXRJbnN0cnVjdGlvbih1cmxQYXRoLCBjb252ZXJ0VXJsUGFyYW1zVG9BcnJheSh1cmxQYXJhbXMpLCBwYXJhbXMpO1xuICB9XG5cbiAgZ2VuZXJhdGVDb21wb25lbnRQYXRoVmFsdWVzKHBhcmFtczoge1trZXk6IHN0cmluZ106IGFueX0pOiBHZW5lcmF0ZWRVcmwge1xuICAgIHJldHVybiB0aGlzLl9yb3V0ZVBhdGguZ2VuZXJhdGVVcmwocGFyYW1zKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldEluc3RydWN0aW9uKHVybFBhdGg6IHN0cmluZywgdXJsUGFyYW1zOiBzdHJpbmdbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7W2tleTogc3RyaW5nXTogYW55fSk6IENvbXBvbmVudEluc3RydWN0aW9uIHtcbiAgICBpZiAoaXNCbGFuayh0aGlzLmhhbmRsZXIuY29tcG9uZW50VHlwZSkpIHtcbiAgICAgIHRocm93IG5ldyBCYXNlRXhjZXB0aW9uKGBUcmllZCB0byBnZXQgaW5zdHJ1Y3Rpb24gYmVmb3JlIHRoZSB0eXBlIHdhcyBsb2FkZWQuYCk7XG4gICAgfVxuICAgIHZhciBoYXNoS2V5ID0gdXJsUGF0aCArICc/JyArIHVybFBhcmFtcy5qb2luKCcmJyk7XG4gICAgaWYgKHRoaXMuX2NhY2hlLmhhcyhoYXNoS2V5KSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlLmdldChoYXNoS2V5KTtcbiAgICB9XG4gICAgdmFyIGluc3RydWN0aW9uID1cbiAgICAgICAgbmV3IENvbXBvbmVudEluc3RydWN0aW9uKHVybFBhdGgsIHVybFBhcmFtcywgdGhpcy5oYW5kbGVyLmRhdGEsIHRoaXMuaGFuZGxlci5jb21wb25lbnRUeXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXJtaW5hbCwgdGhpcy5zcGVjaWZpY2l0eSwgcGFyYW1zKTtcbiAgICB0aGlzLl9jYWNoZS5zZXQoaGFzaEtleSwgaW5zdHJ1Y3Rpb24pO1xuXG4gICAgcmV0dXJuIGluc3RydWN0aW9uO1xuICB9XG59XG4iXX0=

/***/ },

/***/ 233:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var collection_1 = __webpack_require__(11);
	var lang_1 = __webpack_require__(3);
	var exceptions_1 = __webpack_require__(13);
	function convertUrlParamsToArray(urlParams) {
	    var paramsArray = [];
	    if (lang_1.isBlank(urlParams)) {
	        return [];
	    }
	    collection_1.StringMapWrapper.forEach(urlParams, function (value, key) { paramsArray.push((value === true) ? key : key + '=' + value); });
	    return paramsArray;
	}
	exports.convertUrlParamsToArray = convertUrlParamsToArray;
	// Convert an object of url parameters into a string that can be used in an URL
	function serializeParams(urlParams, joiner) {
	    if (joiner === void 0) { joiner = '&'; }
	    return convertUrlParamsToArray(urlParams).join(joiner);
	}
	exports.serializeParams = serializeParams;
	/**
	 * This class represents a parsed URL
	 */
	var Url = (function () {
	    function Url(path, child, auxiliary, params) {
	        if (child === void 0) { child = null; }
	        if (auxiliary === void 0) { auxiliary = lang_1.CONST_EXPR([]); }
	        if (params === void 0) { params = lang_1.CONST_EXPR({}); }
	        this.path = path;
	        this.child = child;
	        this.auxiliary = auxiliary;
	        this.params = params;
	    }
	    Url.prototype.toString = function () {
	        return this.path + this._matrixParamsToString() + this._auxToString() + this._childString();
	    };
	    Url.prototype.segmentToString = function () { return this.path + this._matrixParamsToString(); };
	    /** @internal */
	    Url.prototype._auxToString = function () {
	        return this.auxiliary.length > 0 ?
	            ('(' + this.auxiliary.map(function (sibling) { return sibling.toString(); }).join('//') + ')') :
	            '';
	    };
	    Url.prototype._matrixParamsToString = function () {
	        var paramString = serializeParams(this.params, ';');
	        if (paramString.length > 0) {
	            return ';' + paramString;
	        }
	        return '';
	    };
	    /** @internal */
	    Url.prototype._childString = function () { return lang_1.isPresent(this.child) ? ('/' + this.child.toString()) : ''; };
	    return Url;
	})();
	exports.Url = Url;
	var RootUrl = (function (_super) {
	    __extends(RootUrl, _super);
	    function RootUrl(path, child, auxiliary, params) {
	        if (child === void 0) { child = null; }
	        if (auxiliary === void 0) { auxiliary = lang_1.CONST_EXPR([]); }
	        if (params === void 0) { params = null; }
	        _super.call(this, path, child, auxiliary, params);
	    }
	    RootUrl.prototype.toString = function () {
	        return this.path + this._auxToString() + this._childString() + this._queryParamsToString();
	    };
	    RootUrl.prototype.segmentToString = function () { return this.path + this._queryParamsToString(); };
	    RootUrl.prototype._queryParamsToString = function () {
	        if (lang_1.isBlank(this.params)) {
	            return '';
	        }
	        return '?' + serializeParams(this.params);
	    };
	    return RootUrl;
	})(Url);
	exports.RootUrl = RootUrl;
	function pathSegmentsToUrl(pathSegments) {
	    var url = new Url(pathSegments[pathSegments.length - 1]);
	    for (var i = pathSegments.length - 2; i >= 0; i -= 1) {
	        url = new Url(pathSegments[i], url);
	    }
	    return url;
	}
	exports.pathSegmentsToUrl = pathSegmentsToUrl;
	var SEGMENT_RE = lang_1.RegExpWrapper.create('^[^\\/\\(\\)\\?;=&#]+');
	function matchUrlSegment(str) {
	    var match = lang_1.RegExpWrapper.firstMatch(SEGMENT_RE, str);
	    return lang_1.isPresent(match) ? match[0] : '';
	}
	var QUERY_PARAM_VALUE_RE = lang_1.RegExpWrapper.create('^[^\\(\\)\\?;&#]+');
	function matchUrlQueryParamValue(str) {
	    var match = lang_1.RegExpWrapper.firstMatch(QUERY_PARAM_VALUE_RE, str);
	    return lang_1.isPresent(match) ? match[0] : '';
	}
	var UrlParser = (function () {
	    function UrlParser() {
	    }
	    UrlParser.prototype.peekStartsWith = function (str) { return this._remaining.startsWith(str); };
	    UrlParser.prototype.capture = function (str) {
	        if (!this._remaining.startsWith(str)) {
	            throw new exceptions_1.BaseException("Expected \"" + str + "\".");
	        }
	        this._remaining = this._remaining.substring(str.length);
	    };
	    UrlParser.prototype.parse = function (url) {
	        this._remaining = url;
	        if (url == '' || url == '/') {
	            return new Url('');
	        }
	        return this.parseRoot();
	    };
	    // segment + (aux segments) + (query params)
	    UrlParser.prototype.parseRoot = function () {
	        if (this.peekStartsWith('/')) {
	            this.capture('/');
	        }
	        var path = matchUrlSegment(this._remaining);
	        this.capture(path);
	        var aux = [];
	        if (this.peekStartsWith('(')) {
	            aux = this.parseAuxiliaryRoutes();
	        }
	        if (this.peekStartsWith(';')) {
	            // TODO: should these params just be dropped?
	            this.parseMatrixParams();
	        }
	        var child = null;
	        if (this.peekStartsWith('/') && !this.peekStartsWith('//')) {
	            this.capture('/');
	            child = this.parseSegment();
	        }
	        var queryParams = null;
	        if (this.peekStartsWith('?')) {
	            queryParams = this.parseQueryParams();
	        }
	        return new RootUrl(path, child, aux, queryParams);
	    };
	    // segment + (matrix params) + (aux segments)
	    UrlParser.prototype.parseSegment = function () {
	        if (this._remaining.length == 0) {
	            return null;
	        }
	        if (this.peekStartsWith('/')) {
	            this.capture('/');
	        }
	        var path = matchUrlSegment(this._remaining);
	        this.capture(path);
	        var matrixParams = null;
	        if (this.peekStartsWith(';')) {
	            matrixParams = this.parseMatrixParams();
	        }
	        var aux = [];
	        if (this.peekStartsWith('(')) {
	            aux = this.parseAuxiliaryRoutes();
	        }
	        var child = null;
	        if (this.peekStartsWith('/') && !this.peekStartsWith('//')) {
	            this.capture('/');
	            child = this.parseSegment();
	        }
	        return new Url(path, child, aux, matrixParams);
	    };
	    UrlParser.prototype.parseQueryParams = function () {
	        var params = {};
	        this.capture('?');
	        this.parseQueryParam(params);
	        while (this._remaining.length > 0 && this.peekStartsWith('&')) {
	            this.capture('&');
	            this.parseQueryParam(params);
	        }
	        return params;
	    };
	    UrlParser.prototype.parseMatrixParams = function () {
	        var params = {};
	        while (this._remaining.length > 0 && this.peekStartsWith(';')) {
	            this.capture(';');
	            this.parseParam(params);
	        }
	        return params;
	    };
	    UrlParser.prototype.parseParam = function (params) {
	        var key = matchUrlSegment(this._remaining);
	        if (lang_1.isBlank(key)) {
	            return;
	        }
	        this.capture(key);
	        var value = true;
	        if (this.peekStartsWith('=')) {
	            this.capture('=');
	            var valueMatch = matchUrlSegment(this._remaining);
	            if (lang_1.isPresent(valueMatch)) {
	                value = valueMatch;
	                this.capture(value);
	            }
	        }
	        params[key] = value;
	    };
	    UrlParser.prototype.parseQueryParam = function (params) {
	        var key = matchUrlSegment(this._remaining);
	        if (lang_1.isBlank(key)) {
	            return;
	        }
	        this.capture(key);
	        var value = true;
	        if (this.peekStartsWith('=')) {
	            this.capture('=');
	            var valueMatch = matchUrlQueryParamValue(this._remaining);
	            if (lang_1.isPresent(valueMatch)) {
	                value = valueMatch;
	                this.capture(value);
	            }
	        }
	        params[key] = value;
	    };
	    UrlParser.prototype.parseAuxiliaryRoutes = function () {
	        var routes = [];
	        this.capture('(');
	        while (!this.peekStartsWith(')') && this._remaining.length > 0) {
	            routes.push(this.parseSegment());
	            if (this.peekStartsWith('//')) {
	                this.capture('//');
	            }
	        }
	        this.capture(')');
	        return routes;
	    };
	    return UrlParser;
	})();
	exports.UrlParser = UrlParser;
	exports.parser = new UrlParser();
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsX3BhcnNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL3NyYy9yb3V0ZXIvdXJsX3BhcnNlci50cyJdLCJuYW1lcyI6WyJjb252ZXJ0VXJsUGFyYW1zVG9BcnJheSIsInNlcmlhbGl6ZVBhcmFtcyIsIlVybCIsIlVybC5jb25zdHJ1Y3RvciIsIlVybC50b1N0cmluZyIsIlVybC5zZWdtZW50VG9TdHJpbmciLCJVcmwuX2F1eFRvU3RyaW5nIiwiVXJsLl9tYXRyaXhQYXJhbXNUb1N0cmluZyIsIlVybC5fY2hpbGRTdHJpbmciLCJSb290VXJsIiwiUm9vdFVybC5jb25zdHJ1Y3RvciIsIlJvb3RVcmwudG9TdHJpbmciLCJSb290VXJsLnNlZ21lbnRUb1N0cmluZyIsIlJvb3RVcmwuX3F1ZXJ5UGFyYW1zVG9TdHJpbmciLCJwYXRoU2VnbWVudHNUb1VybCIsIm1hdGNoVXJsU2VnbWVudCIsIm1hdGNoVXJsUXVlcnlQYXJhbVZhbHVlIiwiVXJsUGFyc2VyIiwiVXJsUGFyc2VyLmNvbnN0cnVjdG9yIiwiVXJsUGFyc2VyLnBlZWtTdGFydHNXaXRoIiwiVXJsUGFyc2VyLmNhcHR1cmUiLCJVcmxQYXJzZXIucGFyc2UiLCJVcmxQYXJzZXIucGFyc2VSb290IiwiVXJsUGFyc2VyLnBhcnNlU2VnbWVudCIsIlVybFBhcnNlci5wYXJzZVF1ZXJ5UGFyYW1zIiwiVXJsUGFyc2VyLnBhcnNlTWF0cml4UGFyYW1zIiwiVXJsUGFyc2VyLnBhcnNlUGFyYW0iLCJVcmxQYXJzZXIucGFyc2VRdWVyeVBhcmFtIiwiVXJsUGFyc2VyLnBhcnNlQXV4aWxpYXJ5Um91dGVzIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDJCQUErQixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQ2hFLHFCQUE0RCwwQkFBMEIsQ0FBQyxDQUFBO0FBQ3ZGLDJCQUE4QyxnQ0FBZ0MsQ0FBQyxDQUFBO0FBRS9FLGlDQUF3QyxTQUErQjtJQUNyRUEsSUFBSUEsV0FBV0EsR0FBR0EsRUFBRUEsQ0FBQ0E7SUFDckJBLEVBQUVBLENBQUNBLENBQUNBLGNBQU9BLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1FBQ3ZCQSxNQUFNQSxDQUFDQSxFQUFFQSxDQUFDQTtJQUNaQSxDQUFDQTtJQUNEQSw2QkFBZ0JBLENBQUNBLE9BQU9BLENBQ3BCQSxTQUFTQSxFQUFFQSxVQUFDQSxLQUFLQSxFQUFFQSxHQUFHQSxJQUFPQSxXQUFXQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxLQUFLQSxLQUFLQSxJQUFJQSxDQUFDQSxHQUFHQSxHQUFHQSxHQUFHQSxHQUFHQSxHQUFHQSxHQUFHQSxHQUFHQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNsR0EsTUFBTUEsQ0FBQ0EsV0FBV0EsQ0FBQ0E7QUFDckJBLENBQUNBO0FBUmUsK0JBQXVCLDBCQVF0QyxDQUFBO0FBRUQsK0VBQStFO0FBQy9FLHlCQUFnQyxTQUErQixFQUFFLE1BQVk7SUFBWkMsc0JBQVlBLEdBQVpBLFlBQVlBO0lBQzNFQSxNQUFNQSxDQUFDQSx1QkFBdUJBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO0FBQ3pEQSxDQUFDQTtBQUZlLHVCQUFlLGtCQUU5QixDQUFBO0FBRUQ7O0dBRUc7QUFDSDtJQUNFQyxhQUFtQkEsSUFBWUEsRUFBU0EsS0FBaUJBLEVBQ3RDQSxTQUFpQ0EsRUFDakNBLE1BQTZDQTtRQUYvQkMscUJBQXdCQSxHQUF4QkEsWUFBd0JBO1FBQzdDQSx5QkFBd0NBLEdBQXhDQSxZQUEwQkEsaUJBQVVBLENBQUNBLEVBQUVBLENBQUNBO1FBQ3hDQSxzQkFBb0RBLEdBQXBEQSxTQUFzQ0EsaUJBQVVBLENBQUNBLEVBQUVBLENBQUNBO1FBRjdDQSxTQUFJQSxHQUFKQSxJQUFJQSxDQUFRQTtRQUFTQSxVQUFLQSxHQUFMQSxLQUFLQSxDQUFZQTtRQUN0Q0EsY0FBU0EsR0FBVEEsU0FBU0EsQ0FBd0JBO1FBQ2pDQSxXQUFNQSxHQUFOQSxNQUFNQSxDQUF1Q0E7SUFBR0EsQ0FBQ0E7SUFFcEVELHNCQUFRQSxHQUFSQTtRQUNFRSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQSxxQkFBcUJBLEVBQUVBLEdBQUdBLElBQUlBLENBQUNBLFlBQVlBLEVBQUVBLEdBQUdBLElBQUlBLENBQUNBLFlBQVlBLEVBQUVBLENBQUNBO0lBQzlGQSxDQUFDQTtJQUVERiw2QkFBZUEsR0FBZkEsY0FBNEJHLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBLHFCQUFxQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFFOUVILGdCQUFnQkE7SUFDaEJBLDBCQUFZQSxHQUFaQTtRQUNFSSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQTtZQUNyQkEsQ0FBQ0EsR0FBR0EsR0FBR0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsVUFBQUEsT0FBT0EsSUFBSUEsT0FBQUEsT0FBT0EsQ0FBQ0EsUUFBUUEsRUFBRUEsRUFBbEJBLENBQWtCQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxHQUFHQSxDQUFDQTtZQUMxRUEsRUFBRUEsQ0FBQ0E7SUFDaEJBLENBQUNBO0lBRU9KLG1DQUFxQkEsR0FBN0JBO1FBQ0VLLElBQUlBLFdBQVdBLEdBQUdBLGVBQWVBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBO1FBQ3BEQSxFQUFFQSxDQUFDQSxDQUFDQSxXQUFXQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUMzQkEsTUFBTUEsQ0FBQ0EsR0FBR0EsR0FBR0EsV0FBV0EsQ0FBQ0E7UUFDM0JBLENBQUNBO1FBQ0RBLE1BQU1BLENBQUNBLEVBQUVBLENBQUNBO0lBQ1pBLENBQUNBO0lBRURMLGdCQUFnQkE7SUFDaEJBLDBCQUFZQSxHQUFaQSxjQUF5Qk0sTUFBTUEsQ0FBQ0EsZ0JBQVNBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEdBQUdBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLFFBQVFBLEVBQUVBLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO0lBQy9GTixVQUFDQTtBQUFEQSxDQUFDQSxBQTVCRCxJQTRCQztBQTVCWSxXQUFHLE1BNEJmLENBQUE7QUFFRDtJQUE2Qk8sMkJBQUdBO0lBQzlCQSxpQkFBWUEsSUFBWUEsRUFBRUEsS0FBaUJBLEVBQUVBLFNBQWlDQSxFQUNsRUEsTUFBbUNBO1FBRHJCQyxxQkFBaUJBLEdBQWpCQSxZQUFpQkE7UUFBRUEseUJBQWlDQSxHQUFqQ0EsWUFBbUJBLGlCQUFVQSxDQUFDQSxFQUFFQSxDQUFDQTtRQUNsRUEsc0JBQW1DQSxHQUFuQ0EsYUFBbUNBO1FBQzdDQSxrQkFBTUEsSUFBSUEsRUFBRUEsS0FBS0EsRUFBRUEsU0FBU0EsRUFBRUEsTUFBTUEsQ0FBQ0EsQ0FBQ0E7SUFDeENBLENBQUNBO0lBRURELDBCQUFRQSxHQUFSQTtRQUNFRSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxHQUFHQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxHQUFHQSxJQUFJQSxDQUFDQSxvQkFBb0JBLEVBQUVBLENBQUNBO0lBQzdGQSxDQUFDQTtJQUVERixpQ0FBZUEsR0FBZkEsY0FBNEJHLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBLG9CQUFvQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFFckVILHNDQUFvQkEsR0FBNUJBO1FBQ0VJLEVBQUVBLENBQUNBLENBQUNBLGNBQU9BLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ3pCQSxNQUFNQSxDQUFDQSxFQUFFQSxDQUFDQTtRQUNaQSxDQUFDQTtRQUVEQSxNQUFNQSxDQUFDQSxHQUFHQSxHQUFHQSxlQUFlQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtJQUM1Q0EsQ0FBQ0E7SUFDSEosY0FBQ0E7QUFBREEsQ0FBQ0EsQUFuQkQsRUFBNkIsR0FBRyxFQW1CL0I7QUFuQlksZUFBTyxVQW1CbkIsQ0FBQTtBQUVELDJCQUFrQyxZQUFzQjtJQUN0REssSUFBSUEsR0FBR0EsR0FBR0EsSUFBSUEsR0FBR0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDekRBLEdBQUdBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEdBQUdBLFlBQVlBLENBQUNBLE1BQU1BLEdBQUdBLENBQUNBLEVBQUVBLENBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBO1FBQ3JEQSxHQUFHQSxHQUFHQSxJQUFJQSxHQUFHQSxDQUFDQSxZQUFZQSxDQUFDQSxDQUFDQSxDQUFDQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQTtJQUN0Q0EsQ0FBQ0E7SUFDREEsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0E7QUFDYkEsQ0FBQ0E7QUFOZSx5QkFBaUIsb0JBTWhDLENBQUE7QUFFRCxJQUFJLFVBQVUsR0FBRyxvQkFBYSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0FBQy9ELHlCQUF5QixHQUFXO0lBQ2xDQyxJQUFJQSxLQUFLQSxHQUFHQSxvQkFBYUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsVUFBVUEsRUFBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7SUFDdERBLE1BQU1BLENBQUNBLGdCQUFTQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQTtBQUMxQ0EsQ0FBQ0E7QUFDRCxJQUFJLG9CQUFvQixHQUFHLG9CQUFhLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDckUsaUNBQWlDLEdBQVc7SUFDMUNDLElBQUlBLEtBQUtBLEdBQUdBLG9CQUFhQSxDQUFDQSxVQUFVQSxDQUFDQSxvQkFBb0JBLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBO0lBQ2hFQSxNQUFNQSxDQUFDQSxnQkFBU0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0E7QUFDMUNBLENBQUNBO0FBRUQ7SUFBQUM7SUFtSkFDLENBQUNBO0lBaEpDRCxrQ0FBY0EsR0FBZEEsVUFBZUEsR0FBV0EsSUFBYUUsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFFaEZGLDJCQUFPQSxHQUFQQSxVQUFRQSxHQUFXQTtRQUNqQkcsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDckNBLE1BQU1BLElBQUlBLDBCQUFhQSxDQUFDQSxnQkFBYUEsR0FBR0EsUUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDaERBLENBQUNBO1FBQ0RBLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLFNBQVNBLENBQUNBLEdBQUdBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO0lBQzFEQSxDQUFDQTtJQUVESCx5QkFBS0EsR0FBTEEsVUFBTUEsR0FBV0E7UUFDZkksSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsR0FBR0EsQ0FBQ0E7UUFDdEJBLEVBQUVBLENBQUNBLENBQUNBLEdBQUdBLElBQUlBLEVBQUVBLElBQUlBLEdBQUdBLElBQUlBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBO1lBQzVCQSxNQUFNQSxDQUFDQSxJQUFJQSxHQUFHQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTtRQUNyQkEsQ0FBQ0E7UUFDREEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsRUFBRUEsQ0FBQ0E7SUFDMUJBLENBQUNBO0lBRURKLDRDQUE0Q0E7SUFDNUNBLDZCQUFTQSxHQUFUQTtRQUNFSyxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUM3QkEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDcEJBLENBQUNBO1FBQ0RBLElBQUlBLElBQUlBLEdBQUdBLGVBQWVBLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBO1FBQzVDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUVuQkEsSUFBSUEsR0FBR0EsR0FBVUEsRUFBRUEsQ0FBQ0E7UUFDcEJBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQzdCQSxHQUFHQSxHQUFHQSxJQUFJQSxDQUFDQSxvQkFBb0JBLEVBQUVBLENBQUNBO1FBQ3BDQSxDQUFDQTtRQUNEQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUM3QkEsNkNBQTZDQTtZQUM3Q0EsSUFBSUEsQ0FBQ0EsaUJBQWlCQSxFQUFFQSxDQUFDQTtRQUMzQkEsQ0FBQ0E7UUFDREEsSUFBSUEsS0FBS0EsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFDakJBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQzNEQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUNsQkEsS0FBS0EsR0FBR0EsSUFBSUEsQ0FBQ0EsWUFBWUEsRUFBRUEsQ0FBQ0E7UUFDOUJBLENBQUNBO1FBQ0RBLElBQUlBLFdBQVdBLEdBQXlCQSxJQUFJQSxDQUFDQTtRQUM3Q0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDN0JBLFdBQVdBLEdBQUdBLElBQUlBLENBQUNBLGdCQUFnQkEsRUFBRUEsQ0FBQ0E7UUFDeENBLENBQUNBO1FBQ0RBLE1BQU1BLENBQUNBLElBQUlBLE9BQU9BLENBQUNBLElBQUlBLEVBQUVBLEtBQUtBLEVBQUVBLEdBQUdBLEVBQUVBLFdBQVdBLENBQUNBLENBQUNBO0lBQ3BEQSxDQUFDQTtJQUVETCw2Q0FBNkNBO0lBQzdDQSxnQ0FBWUEsR0FBWkE7UUFDRU0sRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsTUFBTUEsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDaENBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBO1FBQ2RBLENBQUNBO1FBQ0RBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQzdCQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUNwQkEsQ0FBQ0E7UUFDREEsSUFBSUEsSUFBSUEsR0FBR0EsZUFBZUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0E7UUFDNUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1FBRW5CQSxJQUFJQSxZQUFZQSxHQUF5QkEsSUFBSUEsQ0FBQ0E7UUFDOUNBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQzdCQSxZQUFZQSxHQUFHQSxJQUFJQSxDQUFDQSxpQkFBaUJBLEVBQUVBLENBQUNBO1FBQzFDQSxDQUFDQTtRQUNEQSxJQUFJQSxHQUFHQSxHQUFVQSxFQUFFQSxDQUFDQTtRQUNwQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDN0JBLEdBQUdBLEdBQUdBLElBQUlBLENBQUNBLG9CQUFvQkEsRUFBRUEsQ0FBQ0E7UUFDcENBLENBQUNBO1FBQ0RBLElBQUlBLEtBQUtBLEdBQVFBLElBQUlBLENBQUNBO1FBQ3RCQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUMzREEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7WUFDbEJBLEtBQUtBLEdBQUdBLElBQUlBLENBQUNBLFlBQVlBLEVBQUVBLENBQUNBO1FBQzlCQSxDQUFDQTtRQUNEQSxNQUFNQSxDQUFDQSxJQUFJQSxHQUFHQSxDQUFDQSxJQUFJQSxFQUFFQSxLQUFLQSxFQUFFQSxHQUFHQSxFQUFFQSxZQUFZQSxDQUFDQSxDQUFDQTtJQUNqREEsQ0FBQ0E7SUFFRE4sb0NBQWdCQSxHQUFoQkE7UUFDRU8sSUFBSUEsTUFBTUEsR0FBeUJBLEVBQUVBLENBQUNBO1FBQ3RDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUNsQkEsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7UUFDN0JBLE9BQU9BLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLE1BQU1BLEdBQUdBLENBQUNBLElBQUlBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLENBQUNBO1lBQzlEQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUNsQkEsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7UUFDL0JBLENBQUNBO1FBQ0RBLE1BQU1BLENBQUNBLE1BQU1BLENBQUNBO0lBQ2hCQSxDQUFDQTtJQUVEUCxxQ0FBaUJBLEdBQWpCQTtRQUNFUSxJQUFJQSxNQUFNQSxHQUF5QkEsRUFBRUEsQ0FBQ0E7UUFDdENBLE9BQU9BLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLE1BQU1BLEdBQUdBLENBQUNBLElBQUlBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLENBQUNBO1lBQzlEQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUNsQkEsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7UUFDMUJBLENBQUNBO1FBQ0RBLE1BQU1BLENBQUNBLE1BQU1BLENBQUNBO0lBQ2hCQSxDQUFDQTtJQUVEUiw4QkFBVUEsR0FBVkEsVUFBV0EsTUFBNEJBO1FBQ3JDUyxJQUFJQSxHQUFHQSxHQUFHQSxlQUFlQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQTtRQUMzQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsY0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDakJBLE1BQU1BLENBQUNBO1FBQ1RBLENBQUNBO1FBQ0RBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1FBQ2xCQSxJQUFJQSxLQUFLQSxHQUFRQSxJQUFJQSxDQUFDQTtRQUN0QkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDN0JBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1lBQ2xCQSxJQUFJQSxVQUFVQSxHQUFHQSxlQUFlQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQTtZQUNsREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsZ0JBQVNBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUMxQkEsS0FBS0EsR0FBR0EsVUFBVUEsQ0FBQ0E7Z0JBQ25CQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtZQUN0QkEsQ0FBQ0E7UUFDSEEsQ0FBQ0E7UUFFREEsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsS0FBS0EsQ0FBQ0E7SUFDdEJBLENBQUNBO0lBRURULG1DQUFlQSxHQUFmQSxVQUFnQkEsTUFBNEJBO1FBQzFDVSxJQUFJQSxHQUFHQSxHQUFHQSxlQUFlQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQTtRQUMzQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsY0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDakJBLE1BQU1BLENBQUNBO1FBQ1RBLENBQUNBO1FBQ0RBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1FBQ2xCQSxJQUFJQSxLQUFLQSxHQUFRQSxJQUFJQSxDQUFDQTtRQUN0QkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDN0JBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1lBQ2xCQSxJQUFJQSxVQUFVQSxHQUFHQSx1QkFBdUJBLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBO1lBQzFEQSxFQUFFQSxDQUFDQSxDQUFDQSxnQkFBU0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzFCQSxLQUFLQSxHQUFHQSxVQUFVQSxDQUFDQTtnQkFDbkJBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO1lBQ3RCQSxDQUFDQTtRQUNIQSxDQUFDQTtRQUVEQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxLQUFLQSxDQUFDQTtJQUN0QkEsQ0FBQ0E7SUFFRFYsd0NBQW9CQSxHQUFwQkE7UUFDRVcsSUFBSUEsTUFBTUEsR0FBVUEsRUFBRUEsQ0FBQ0E7UUFDdkJBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1FBRWxCQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxFQUFFQSxDQUFDQTtZQUMvREEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7WUFDakNBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUM5QkEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDckJBLENBQUNBO1FBQ0hBLENBQUNBO1FBQ0RBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1FBRWxCQSxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQTtJQUNoQkEsQ0FBQ0E7SUFDSFgsZ0JBQUNBO0FBQURBLENBQUNBLEFBbkpELElBbUpDO0FBbkpZLGlCQUFTLFlBbUpyQixDQUFBO0FBRVUsY0FBTSxHQUFHLElBQUksU0FBUyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1N0cmluZ01hcFdyYXBwZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvY29sbGVjdGlvbic7XG5pbXBvcnQge2lzUHJlc2VudCwgaXNCbGFuaywgUmVnRXhwV3JhcHBlciwgQ09OU1RfRVhQUn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbmltcG9ydCB7QmFzZUV4Y2VwdGlvbiwgV3JhcHBlZEV4Y2VwdGlvbn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9leGNlcHRpb25zJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRVcmxQYXJhbXNUb0FycmF5KHVybFBhcmFtczoge1trZXk6IHN0cmluZ106IGFueX0pOiBzdHJpbmdbXSB7XG4gIHZhciBwYXJhbXNBcnJheSA9IFtdO1xuICBpZiAoaXNCbGFuayh1cmxQYXJhbXMpKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIFN0cmluZ01hcFdyYXBwZXIuZm9yRWFjaChcbiAgICAgIHVybFBhcmFtcywgKHZhbHVlLCBrZXkpID0+IHsgcGFyYW1zQXJyYXkucHVzaCgodmFsdWUgPT09IHRydWUpID8ga2V5IDoga2V5ICsgJz0nICsgdmFsdWUpOyB9KTtcbiAgcmV0dXJuIHBhcmFtc0FycmF5O1xufVxuXG4vLyBDb252ZXJ0IGFuIG9iamVjdCBvZiB1cmwgcGFyYW1ldGVycyBpbnRvIGEgc3RyaW5nIHRoYXQgY2FuIGJlIHVzZWQgaW4gYW4gVVJMXG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXplUGFyYW1zKHVybFBhcmFtczoge1trZXk6IHN0cmluZ106IGFueX0sIGpvaW5lciA9ICcmJyk6IHN0cmluZyB7XG4gIHJldHVybiBjb252ZXJ0VXJsUGFyYW1zVG9BcnJheSh1cmxQYXJhbXMpLmpvaW4oam9pbmVyKTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgYSBwYXJzZWQgVVJMXG4gKi9cbmV4cG9ydCBjbGFzcyBVcmwge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF0aDogc3RyaW5nLCBwdWJsaWMgY2hpbGQ6IFVybCA9IG51bGwsXG4gICAgICAgICAgICAgIHB1YmxpYyBhdXhpbGlhcnk6IFVybFtdID0gQ09OU1RfRVhQUihbXSksXG4gICAgICAgICAgICAgIHB1YmxpYyBwYXJhbXM6IHtba2V5OiBzdHJpbmddOiBhbnl9ID0gQ09OU1RfRVhQUih7fSkpIHt9XG5cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5wYXRoICsgdGhpcy5fbWF0cml4UGFyYW1zVG9TdHJpbmcoKSArIHRoaXMuX2F1eFRvU3RyaW5nKCkgKyB0aGlzLl9jaGlsZFN0cmluZygpO1xuICB9XG5cbiAgc2VnbWVudFRvU3RyaW5nKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLnBhdGggKyB0aGlzLl9tYXRyaXhQYXJhbXNUb1N0cmluZygpOyB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfYXV4VG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5hdXhpbGlhcnkubGVuZ3RoID4gMCA/XG4gICAgICAgICAgICAgICAoJygnICsgdGhpcy5hdXhpbGlhcnkubWFwKHNpYmxpbmcgPT4gc2libGluZy50b1N0cmluZygpKS5qb2luKCcvLycpICsgJyknKSA6XG4gICAgICAgICAgICAgICAnJztcbiAgfVxuXG4gIHByaXZhdGUgX21hdHJpeFBhcmFtc1RvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgdmFyIHBhcmFtU3RyaW5nID0gc2VyaWFsaXplUGFyYW1zKHRoaXMucGFyYW1zLCAnOycpO1xuICAgIGlmIChwYXJhbVN0cmluZy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gJzsnICsgcGFyYW1TdHJpbmc7XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2NoaWxkU3RyaW5nKCk6IHN0cmluZyB7IHJldHVybiBpc1ByZXNlbnQodGhpcy5jaGlsZCkgPyAoJy8nICsgdGhpcy5jaGlsZC50b1N0cmluZygpKSA6ICcnOyB9XG59XG5cbmV4cG9ydCBjbGFzcyBSb290VXJsIGV4dGVuZHMgVXJsIHtcbiAgY29uc3RydWN0b3IocGF0aDogc3RyaW5nLCBjaGlsZDogVXJsID0gbnVsbCwgYXV4aWxpYXJ5OiBVcmxbXSA9IENPTlNUX0VYUFIoW10pLFxuICAgICAgICAgICAgICBwYXJhbXM6IHtba2V5OiBzdHJpbmddOiBhbnl9ID0gbnVsbCkge1xuICAgIHN1cGVyKHBhdGgsIGNoaWxkLCBhdXhpbGlhcnksIHBhcmFtcyk7XG4gIH1cblxuICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnBhdGggKyB0aGlzLl9hdXhUb1N0cmluZygpICsgdGhpcy5fY2hpbGRTdHJpbmcoKSArIHRoaXMuX3F1ZXJ5UGFyYW1zVG9TdHJpbmcoKTtcbiAgfVxuXG4gIHNlZ21lbnRUb1N0cmluZygpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5wYXRoICsgdGhpcy5fcXVlcnlQYXJhbXNUb1N0cmluZygpOyB9XG5cbiAgcHJpdmF0ZSBfcXVlcnlQYXJhbXNUb1N0cmluZygpOiBzdHJpbmcge1xuICAgIGlmIChpc0JsYW5rKHRoaXMucGFyYW1zKSkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIHJldHVybiAnPycgKyBzZXJpYWxpemVQYXJhbXModGhpcy5wYXJhbXMpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRoU2VnbWVudHNUb1VybChwYXRoU2VnbWVudHM6IHN0cmluZ1tdKTogVXJsIHtcbiAgdmFyIHVybCA9IG5ldyBVcmwocGF0aFNlZ21lbnRzW3BhdGhTZWdtZW50cy5sZW5ndGggLSAxXSk7XG4gIGZvciAodmFyIGkgPSBwYXRoU2VnbWVudHMubGVuZ3RoIC0gMjsgaSA+PSAwOyBpIC09IDEpIHtcbiAgICB1cmwgPSBuZXcgVXJsKHBhdGhTZWdtZW50c1tpXSwgdXJsKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufVxuXG52YXIgU0VHTUVOVF9SRSA9IFJlZ0V4cFdyYXBwZXIuY3JlYXRlKCdeW15cXFxcL1xcXFwoXFxcXClcXFxcPzs9JiNdKycpO1xuZnVuY3Rpb24gbWF0Y2hVcmxTZWdtZW50KHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgdmFyIG1hdGNoID0gUmVnRXhwV3JhcHBlci5maXJzdE1hdGNoKFNFR01FTlRfUkUsIHN0cik7XG4gIHJldHVybiBpc1ByZXNlbnQobWF0Y2gpID8gbWF0Y2hbMF0gOiAnJztcbn1cbnZhciBRVUVSWV9QQVJBTV9WQUxVRV9SRSA9IFJlZ0V4cFdyYXBwZXIuY3JlYXRlKCdeW15cXFxcKFxcXFwpXFxcXD87JiNdKycpO1xuZnVuY3Rpb24gbWF0Y2hVcmxRdWVyeVBhcmFtVmFsdWUoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICB2YXIgbWF0Y2ggPSBSZWdFeHBXcmFwcGVyLmZpcnN0TWF0Y2goUVVFUllfUEFSQU1fVkFMVUVfUkUsIHN0cik7XG4gIHJldHVybiBpc1ByZXNlbnQobWF0Y2gpID8gbWF0Y2hbMF0gOiAnJztcbn1cblxuZXhwb3J0IGNsYXNzIFVybFBhcnNlciB7XG4gIHByaXZhdGUgX3JlbWFpbmluZzogc3RyaW5nO1xuXG4gIHBlZWtTdGFydHNXaXRoKHN0cjogc3RyaW5nKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9yZW1haW5pbmcuc3RhcnRzV2l0aChzdHIpOyB9XG5cbiAgY2FwdHVyZShzdHI6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fcmVtYWluaW5nLnN0YXJ0c1dpdGgoc3RyKSkge1xuICAgICAgdGhyb3cgbmV3IEJhc2VFeGNlcHRpb24oYEV4cGVjdGVkIFwiJHtzdHJ9XCIuYCk7XG4gICAgfVxuICAgIHRoaXMuX3JlbWFpbmluZyA9IHRoaXMuX3JlbWFpbmluZy5zdWJzdHJpbmcoc3RyLmxlbmd0aCk7XG4gIH1cblxuICBwYXJzZSh1cmw6IHN0cmluZyk6IFVybCB7XG4gICAgdGhpcy5fcmVtYWluaW5nID0gdXJsO1xuICAgIGlmICh1cmwgPT0gJycgfHwgdXJsID09ICcvJykge1xuICAgICAgcmV0dXJuIG5ldyBVcmwoJycpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wYXJzZVJvb3QoKTtcbiAgfVxuXG4gIC8vIHNlZ21lbnQgKyAoYXV4IHNlZ21lbnRzKSArIChxdWVyeSBwYXJhbXMpXG4gIHBhcnNlUm9vdCgpOiBSb290VXJsIHtcbiAgICBpZiAodGhpcy5wZWVrU3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICB0aGlzLmNhcHR1cmUoJy8nKTtcbiAgICB9XG4gICAgdmFyIHBhdGggPSBtYXRjaFVybFNlZ21lbnQodGhpcy5fcmVtYWluaW5nKTtcbiAgICB0aGlzLmNhcHR1cmUocGF0aCk7XG5cbiAgICB2YXIgYXV4OiBVcmxbXSA9IFtdO1xuICAgIGlmICh0aGlzLnBlZWtTdGFydHNXaXRoKCcoJykpIHtcbiAgICAgIGF1eCA9IHRoaXMucGFyc2VBdXhpbGlhcnlSb3V0ZXMoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucGVla1N0YXJ0c1dpdGgoJzsnKSkge1xuICAgICAgLy8gVE9ETzogc2hvdWxkIHRoZXNlIHBhcmFtcyBqdXN0IGJlIGRyb3BwZWQ/XG4gICAgICB0aGlzLnBhcnNlTWF0cml4UGFyYW1zKCk7XG4gICAgfVxuICAgIHZhciBjaGlsZCA9IG51bGw7XG4gICAgaWYgKHRoaXMucGVla1N0YXJ0c1dpdGgoJy8nKSAmJiAhdGhpcy5wZWVrU3RhcnRzV2l0aCgnLy8nKSkge1xuICAgICAgdGhpcy5jYXB0dXJlKCcvJyk7XG4gICAgICBjaGlsZCA9IHRoaXMucGFyc2VTZWdtZW50KCk7XG4gICAgfVxuICAgIHZhciBxdWVyeVBhcmFtczoge1trZXk6IHN0cmluZ106IGFueX0gPSBudWxsO1xuICAgIGlmICh0aGlzLnBlZWtTdGFydHNXaXRoKCc/JykpIHtcbiAgICAgIHF1ZXJ5UGFyYW1zID0gdGhpcy5wYXJzZVF1ZXJ5UGFyYW1zKCk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgUm9vdFVybChwYXRoLCBjaGlsZCwgYXV4LCBxdWVyeVBhcmFtcyk7XG4gIH1cblxuICAvLyBzZWdtZW50ICsgKG1hdHJpeCBwYXJhbXMpICsgKGF1eCBzZWdtZW50cylcbiAgcGFyc2VTZWdtZW50KCk6IFVybCB7XG4gICAgaWYgKHRoaXMuX3JlbWFpbmluZy5sZW5ndGggPT0gMCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmICh0aGlzLnBlZWtTdGFydHNXaXRoKCcvJykpIHtcbiAgICAgIHRoaXMuY2FwdHVyZSgnLycpO1xuICAgIH1cbiAgICB2YXIgcGF0aCA9IG1hdGNoVXJsU2VnbWVudCh0aGlzLl9yZW1haW5pbmcpO1xuICAgIHRoaXMuY2FwdHVyZShwYXRoKTtcblxuICAgIHZhciBtYXRyaXhQYXJhbXM6IHtba2V5OiBzdHJpbmddOiBhbnl9ID0gbnVsbDtcbiAgICBpZiAodGhpcy5wZWVrU3RhcnRzV2l0aCgnOycpKSB7XG4gICAgICBtYXRyaXhQYXJhbXMgPSB0aGlzLnBhcnNlTWF0cml4UGFyYW1zKCk7XG4gICAgfVxuICAgIHZhciBhdXg6IFVybFtdID0gW107XG4gICAgaWYgKHRoaXMucGVla1N0YXJ0c1dpdGgoJygnKSkge1xuICAgICAgYXV4ID0gdGhpcy5wYXJzZUF1eGlsaWFyeVJvdXRlcygpO1xuICAgIH1cbiAgICB2YXIgY2hpbGQ6IFVybCA9IG51bGw7XG4gICAgaWYgKHRoaXMucGVla1N0YXJ0c1dpdGgoJy8nKSAmJiAhdGhpcy5wZWVrU3RhcnRzV2l0aCgnLy8nKSkge1xuICAgICAgdGhpcy5jYXB0dXJlKCcvJyk7XG4gICAgICBjaGlsZCA9IHRoaXMucGFyc2VTZWdtZW50KCk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgVXJsKHBhdGgsIGNoaWxkLCBhdXgsIG1hdHJpeFBhcmFtcyk7XG4gIH1cblxuICBwYXJzZVF1ZXJ5UGFyYW1zKCk6IHtba2V5OiBzdHJpbmddOiBhbnl9IHtcbiAgICB2YXIgcGFyYW1zOiB7W2tleTogc3RyaW5nXTogYW55fSA9IHt9O1xuICAgIHRoaXMuY2FwdHVyZSgnPycpO1xuICAgIHRoaXMucGFyc2VRdWVyeVBhcmFtKHBhcmFtcyk7XG4gICAgd2hpbGUgKHRoaXMuX3JlbWFpbmluZy5sZW5ndGggPiAwICYmIHRoaXMucGVla1N0YXJ0c1dpdGgoJyYnKSkge1xuICAgICAgdGhpcy5jYXB0dXJlKCcmJyk7XG4gICAgICB0aGlzLnBhcnNlUXVlcnlQYXJhbShwYXJhbXMpO1xuICAgIH1cbiAgICByZXR1cm4gcGFyYW1zO1xuICB9XG5cbiAgcGFyc2VNYXRyaXhQYXJhbXMoKToge1trZXk6IHN0cmluZ106IGFueX0ge1xuICAgIHZhciBwYXJhbXM6IHtba2V5OiBzdHJpbmddOiBhbnl9ID0ge307XG4gICAgd2hpbGUgKHRoaXMuX3JlbWFpbmluZy5sZW5ndGggPiAwICYmIHRoaXMucGVla1N0YXJ0c1dpdGgoJzsnKSkge1xuICAgICAgdGhpcy5jYXB0dXJlKCc7Jyk7XG4gICAgICB0aGlzLnBhcnNlUGFyYW0ocGFyYW1zKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcmFtcztcbiAgfVxuXG4gIHBhcnNlUGFyYW0ocGFyYW1zOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHZvaWQge1xuICAgIHZhciBrZXkgPSBtYXRjaFVybFNlZ21lbnQodGhpcy5fcmVtYWluaW5nKTtcbiAgICBpZiAoaXNCbGFuayhrZXkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY2FwdHVyZShrZXkpO1xuICAgIHZhciB2YWx1ZTogYW55ID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5wZWVrU3RhcnRzV2l0aCgnPScpKSB7XG4gICAgICB0aGlzLmNhcHR1cmUoJz0nKTtcbiAgICAgIHZhciB2YWx1ZU1hdGNoID0gbWF0Y2hVcmxTZWdtZW50KHRoaXMuX3JlbWFpbmluZyk7XG4gICAgICBpZiAoaXNQcmVzZW50KHZhbHVlTWF0Y2gpKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWVNYXRjaDtcbiAgICAgICAgdGhpcy5jYXB0dXJlKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwYXJhbXNba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcGFyc2VRdWVyeVBhcmFtKHBhcmFtczoge1trZXk6IHN0cmluZ106IGFueX0pOiB2b2lkIHtcbiAgICB2YXIga2V5ID0gbWF0Y2hVcmxTZWdtZW50KHRoaXMuX3JlbWFpbmluZyk7XG4gICAgaWYgKGlzQmxhbmsoa2V5KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmNhcHR1cmUoa2V5KTtcbiAgICB2YXIgdmFsdWU6IGFueSA9IHRydWU7XG4gICAgaWYgKHRoaXMucGVla1N0YXJ0c1dpdGgoJz0nKSkge1xuICAgICAgdGhpcy5jYXB0dXJlKCc9Jyk7XG4gICAgICB2YXIgdmFsdWVNYXRjaCA9IG1hdGNoVXJsUXVlcnlQYXJhbVZhbHVlKHRoaXMuX3JlbWFpbmluZyk7XG4gICAgICBpZiAoaXNQcmVzZW50KHZhbHVlTWF0Y2gpKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWVNYXRjaDtcbiAgICAgICAgdGhpcy5jYXB0dXJlKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwYXJhbXNba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcGFyc2VBdXhpbGlhcnlSb3V0ZXMoKTogVXJsW10ge1xuICAgIHZhciByb3V0ZXM6IFVybFtdID0gW107XG4gICAgdGhpcy5jYXB0dXJlKCcoJyk7XG5cbiAgICB3aGlsZSAoIXRoaXMucGVla1N0YXJ0c1dpdGgoJyknKSAmJiB0aGlzLl9yZW1haW5pbmcubGVuZ3RoID4gMCkge1xuICAgICAgcm91dGVzLnB1c2godGhpcy5wYXJzZVNlZ21lbnQoKSk7XG4gICAgICBpZiAodGhpcy5wZWVrU3RhcnRzV2l0aCgnLy8nKSkge1xuICAgICAgICB0aGlzLmNhcHR1cmUoJy8vJyk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuY2FwdHVyZSgnKScpO1xuXG4gICAgcmV0dXJuIHJvdXRlcztcbiAgfVxufVxuXG5leHBvcnQgdmFyIHBhcnNlciA9IG5ldyBVcmxQYXJzZXIoKTtcbiJdfQ==

/***/ },

/***/ 234:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var collection_1 = __webpack_require__(11);
	var lang_1 = __webpack_require__(3);
	var async_1 = __webpack_require__(50);
	/**
	 * `RouteParams` is an immutable map of parameters for the given route
	 * based on the url matcher and optional parameters for that route.
	 *
	 * You can inject `RouteParams` into the constructor of a component to use it.
	 *
	 * ### Example
	 *
	 * ```
	 * import {Component} from 'angular2/core';
	 * import {bootstrap} from 'angular2/platform/browser';
	 * import {Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, RouteParams} from
	 * 'angular2/router';
	 *
	 * @Component({directives: [ROUTER_DIRECTIVES]})
	 * @RouteConfig([
	 *  {path: '/user/:id', component: UserCmp, name: 'UserCmp'},
	 * ])
	 * class AppCmp {}
	 *
	 * @Component({ template: 'user: {{id}}' })
	 * class UserCmp {
	 *   id: string;
	 *   constructor(params: RouteParams) {
	 *     this.id = params.get('id');
	 *   }
	 * }
	 *
	 * bootstrap(AppCmp, ROUTER_PROVIDERS);
	 * ```
	 */
	var RouteParams = (function () {
	    function RouteParams(params) {
	        this.params = params;
	    }
	    RouteParams.prototype.get = function (param) { return lang_1.normalizeBlank(collection_1.StringMapWrapper.get(this.params, param)); };
	    return RouteParams;
	})();
	exports.RouteParams = RouteParams;
	/**
	 * `RouteData` is an immutable map of additional data you can configure in your {@link Route}.
	 *
	 * You can inject `RouteData` into the constructor of a component to use it.
	 *
	 * ### Example
	 *
	 * ```
	 * import {Component} from 'angular2/core';
	 * import {bootstrap} from 'angular2/platform/browser';
	 * import {Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, RouteData} from
	 * 'angular2/router';
	 *
	 * @Component({directives: [ROUTER_DIRECTIVES]})
	 * @RouteConfig([
	 *  {path: '/user/:id', component: UserCmp, name: 'UserCmp', data: {isAdmin: true}},
	 * ])
	 * class AppCmp {}
	 *
	 * @Component({
	 *   ...,
	 *   template: 'user: {{isAdmin}}'
	 * })
	 * class UserCmp {
	 *   string: isAdmin;
	 *   constructor(data: RouteData) {
	 *     this.isAdmin = data.get('isAdmin');
	 *   }
	 * }
	 *
	 * bootstrap(AppCmp, ROUTER_PROVIDERS);
	 * ```
	 */
	var RouteData = (function () {
	    function RouteData(data) {
	        if (data === void 0) { data = lang_1.CONST_EXPR({}); }
	        this.data = data;
	    }
	    RouteData.prototype.get = function (key) { return lang_1.normalizeBlank(collection_1.StringMapWrapper.get(this.data, key)); };
	    return RouteData;
	})();
	exports.RouteData = RouteData;
	exports.BLANK_ROUTE_DATA = new RouteData();
	/**
	 * `Instruction` is a tree of {@link ComponentInstruction}s with all the information needed
	 * to transition each component in the app to a given route, including all auxiliary routes.
	 *
	 * `Instruction`s can be created using {@link Router#generate}, and can be used to
	 * perform route changes with {@link Router#navigateByInstruction}.
	 *
	 * ### Example
	 *
	 * ```
	 * import {Component} from 'angular2/core';
	 * import {bootstrap} from 'angular2/platform/browser';
	 * import {Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from 'angular2/router';
	 *
	 * @Component({directives: [ROUTER_DIRECTIVES]})
	 * @RouteConfig([
	 *  {...},
	 * ])
	 * class AppCmp {
	 *   constructor(router: Router) {
	 *     var instruction = router.generate(['/MyRoute']);
	 *     router.navigateByInstruction(instruction);
	 *   }
	 * }
	 *
	 * bootstrap(AppCmp, ROUTER_PROVIDERS);
	 * ```
	 */
	var Instruction = (function () {
	    function Instruction(component, child, auxInstruction) {
	        this.component = component;
	        this.child = child;
	        this.auxInstruction = auxInstruction;
	    }
	    Object.defineProperty(Instruction.prototype, "urlPath", {
	        get: function () { return lang_1.isPresent(this.component) ? this.component.urlPath : ''; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Instruction.prototype, "urlParams", {
	        get: function () { return lang_1.isPresent(this.component) ? this.component.urlParams : []; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Instruction.prototype, "specificity", {
	        get: function () {
	            var total = '';
	            if (lang_1.isPresent(this.component)) {
	                total += this.component.specificity;
	            }
	            if (lang_1.isPresent(this.child)) {
	                total += this.child.specificity;
	            }
	            return total;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * converts the instruction into a URL string
	     */
	    Instruction.prototype.toRootUrl = function () { return this.toUrlPath() + this.toUrlQuery(); };
	    /** @internal */
	    Instruction.prototype._toNonRootUrl = function () {
	        return this._stringifyPathMatrixAuxPrefixed() +
	            (lang_1.isPresent(this.child) ? this.child._toNonRootUrl() : '');
	    };
	    Instruction.prototype.toUrlQuery = function () { return this.urlParams.length > 0 ? ('?' + this.urlParams.join('&')) : ''; };
	    /**
	     * Returns a new instruction that shares the state of the existing instruction, but with
	     * the given child {@link Instruction} replacing the existing child.
	     */
	    Instruction.prototype.replaceChild = function (child) {
	        return new ResolvedInstruction(this.component, child, this.auxInstruction);
	    };
	    /**
	     * If the final URL for the instruction is ``
	     */
	    Instruction.prototype.toUrlPath = function () {
	        return this.urlPath + this._stringifyAux() +
	            (lang_1.isPresent(this.child) ? this.child._toNonRootUrl() : '');
	    };
	    // default instructions override these
	    Instruction.prototype.toLinkUrl = function () {
	        return this.urlPath + this._stringifyAux() +
	            (lang_1.isPresent(this.child) ? this.child._toLinkUrl() : '') + this.toUrlQuery();
	    };
	    // this is the non-root version (called recursively)
	    /** @internal */
	    Instruction.prototype._toLinkUrl = function () {
	        return this._stringifyPathMatrixAuxPrefixed() +
	            (lang_1.isPresent(this.child) ? this.child._toLinkUrl() : '');
	    };
	    /** @internal */
	    Instruction.prototype._stringifyPathMatrixAuxPrefixed = function () {
	        var primary = this._stringifyPathMatrixAux();
	        if (primary.length > 0) {
	            primary = '/' + primary;
	        }
	        return primary;
	    };
	    /** @internal */
	    Instruction.prototype._stringifyMatrixParams = function () {
	        return this.urlParams.length > 0 ? (';' + this.urlParams.join(';')) : '';
	    };
	    /** @internal */
	    Instruction.prototype._stringifyPathMatrixAux = function () {
	        if (lang_1.isBlank(this.component)) {
	            return '';
	        }
	        return this.urlPath + this._stringifyMatrixParams() + this._stringifyAux();
	    };
	    /** @internal */
	    Instruction.prototype._stringifyAux = function () {
	        var routes = [];
	        collection_1.StringMapWrapper.forEach(this.auxInstruction, function (auxInstruction, _) {
	            routes.push(auxInstruction._stringifyPathMatrixAux());
	        });
	        if (routes.length > 0) {
	            return '(' + routes.join('//') + ')';
	        }
	        return '';
	    };
	    return Instruction;
	})();
	exports.Instruction = Instruction;
	/**
	 * a resolved instruction has an outlet instruction for itself, but maybe not for...
	 */
	var ResolvedInstruction = (function (_super) {
	    __extends(ResolvedInstruction, _super);
	    function ResolvedInstruction(component, child, auxInstruction) {
	        _super.call(this, component, child, auxInstruction);
	    }
	    ResolvedInstruction.prototype.resolveComponent = function () {
	        return async_1.PromiseWrapper.resolve(this.component);
	    };
	    return ResolvedInstruction;
	})(Instruction);
	exports.ResolvedInstruction = ResolvedInstruction;
	/**
	 * Represents a resolved default route
	 */
	var DefaultInstruction = (function (_super) {
	    __extends(DefaultInstruction, _super);
	    function DefaultInstruction(component, child) {
	        _super.call(this, component, child, {});
	    }
	    DefaultInstruction.prototype.toLinkUrl = function () { return ''; };
	    /** @internal */
	    DefaultInstruction.prototype._toLinkUrl = function () { return ''; };
	    return DefaultInstruction;
	})(ResolvedInstruction);
	exports.DefaultInstruction = DefaultInstruction;
	/**
	 * Represents a component that may need to do some redirection or lazy loading at a later time.
	 */
	var UnresolvedInstruction = (function (_super) {
	    __extends(UnresolvedInstruction, _super);
	    function UnresolvedInstruction(_resolver, _urlPath, _urlParams) {
	        if (_urlPath === void 0) { _urlPath = ''; }
	        if (_urlParams === void 0) { _urlParams = lang_1.CONST_EXPR([]); }
	        _super.call(this, null, null, {});
	        this._resolver = _resolver;
	        this._urlPath = _urlPath;
	        this._urlParams = _urlParams;
	    }
	    Object.defineProperty(UnresolvedInstruction.prototype, "urlPath", {
	        get: function () {
	            if (lang_1.isPresent(this.component)) {
	                return this.component.urlPath;
	            }
	            if (lang_1.isPresent(this._urlPath)) {
	                return this._urlPath;
	            }
	            return '';
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(UnresolvedInstruction.prototype, "urlParams", {
	        get: function () {
	            if (lang_1.isPresent(this.component)) {
	                return this.component.urlParams;
	            }
	            if (lang_1.isPresent(this._urlParams)) {
	                return this._urlParams;
	            }
	            return [];
	        },
	        enumerable: true,
	        configurable: true
	    });
	    UnresolvedInstruction.prototype.resolveComponent = function () {
	        var _this = this;
	        if (lang_1.isPresent(this.component)) {
	            return async_1.PromiseWrapper.resolve(this.component);
	        }
	        return this._resolver().then(function (instruction) {
	            _this.child = lang_1.isPresent(instruction) ? instruction.child : null;
	            return _this.component = lang_1.isPresent(instruction) ? instruction.component : null;
	        });
	    };
	    return UnresolvedInstruction;
	})(Instruction);
	exports.UnresolvedInstruction = UnresolvedInstruction;
	var RedirectInstruction = (function (_super) {
	    __extends(RedirectInstruction, _super);
	    function RedirectInstruction(component, child, auxInstruction, _specificity) {
	        _super.call(this, component, child, auxInstruction);
	        this._specificity = _specificity;
	    }
	    Object.defineProperty(RedirectInstruction.prototype, "specificity", {
	        get: function () { return this._specificity; },
	        enumerable: true,
	        configurable: true
	    });
	    return RedirectInstruction;
	})(ResolvedInstruction);
	exports.RedirectInstruction = RedirectInstruction;
	/**
	 * A `ComponentInstruction` represents the route state for a single component.
	 *
	 * `ComponentInstructions` is a public API. Instances of `ComponentInstruction` are passed
	 * to route lifecycle hooks, like {@link CanActivate}.
	 *
	 * `ComponentInstruction`s are [hash consed](https://en.wikipedia.org/wiki/Hash_consing). You should
	 * never construct one yourself with "new." Instead, rely on {@link Router/RouteRecognizer} to
	 * construct `ComponentInstruction`s.
	 *
	 * You should not modify this object. It should be treated as immutable.
	 */
	var ComponentInstruction = (function () {
	    /**
	     * @internal
	     */
	    function ComponentInstruction(urlPath, urlParams, data, componentType, terminal, specificity, params) {
	        if (params === void 0) { params = null; }
	        this.urlPath = urlPath;
	        this.urlParams = urlParams;
	        this.componentType = componentType;
	        this.terminal = terminal;
	        this.specificity = specificity;
	        this.params = params;
	        this.reuse = false;
	        this.routeData = lang_1.isPresent(data) ? data : exports.BLANK_ROUTE_DATA;
	    }
	    return ComponentInstruction;
	})();
	exports.ComponentInstruction = ComponentInstruction;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdHJ1Y3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbmd1bGFyMi9zcmMvcm91dGVyL2luc3RydWN0aW9uLnRzIl0sIm5hbWVzIjpbIlJvdXRlUGFyYW1zIiwiUm91dGVQYXJhbXMuY29uc3RydWN0b3IiLCJSb3V0ZVBhcmFtcy5nZXQiLCJSb3V0ZURhdGEiLCJSb3V0ZURhdGEuY29uc3RydWN0b3IiLCJSb3V0ZURhdGEuZ2V0IiwiSW5zdHJ1Y3Rpb24iLCJJbnN0cnVjdGlvbi5jb25zdHJ1Y3RvciIsIkluc3RydWN0aW9uLnVybFBhdGgiLCJJbnN0cnVjdGlvbi51cmxQYXJhbXMiLCJJbnN0cnVjdGlvbi5zcGVjaWZpY2l0eSIsIkluc3RydWN0aW9uLnRvUm9vdFVybCIsIkluc3RydWN0aW9uLl90b05vblJvb3RVcmwiLCJJbnN0cnVjdGlvbi50b1VybFF1ZXJ5IiwiSW5zdHJ1Y3Rpb24ucmVwbGFjZUNoaWxkIiwiSW5zdHJ1Y3Rpb24udG9VcmxQYXRoIiwiSW5zdHJ1Y3Rpb24udG9MaW5rVXJsIiwiSW5zdHJ1Y3Rpb24uX3RvTGlua1VybCIsIkluc3RydWN0aW9uLl9zdHJpbmdpZnlQYXRoTWF0cml4QXV4UHJlZml4ZWQiLCJJbnN0cnVjdGlvbi5fc3RyaW5naWZ5TWF0cml4UGFyYW1zIiwiSW5zdHJ1Y3Rpb24uX3N0cmluZ2lmeVBhdGhNYXRyaXhBdXgiLCJJbnN0cnVjdGlvbi5fc3RyaW5naWZ5QXV4IiwiUmVzb2x2ZWRJbnN0cnVjdGlvbiIsIlJlc29sdmVkSW5zdHJ1Y3Rpb24uY29uc3RydWN0b3IiLCJSZXNvbHZlZEluc3RydWN0aW9uLnJlc29sdmVDb21wb25lbnQiLCJEZWZhdWx0SW5zdHJ1Y3Rpb24iLCJEZWZhdWx0SW5zdHJ1Y3Rpb24uY29uc3RydWN0b3IiLCJEZWZhdWx0SW5zdHJ1Y3Rpb24udG9MaW5rVXJsIiwiRGVmYXVsdEluc3RydWN0aW9uLl90b0xpbmtVcmwiLCJVbnJlc29sdmVkSW5zdHJ1Y3Rpb24iLCJVbnJlc29sdmVkSW5zdHJ1Y3Rpb24uY29uc3RydWN0b3IiLCJVbnJlc29sdmVkSW5zdHJ1Y3Rpb24udXJsUGF0aCIsIlVucmVzb2x2ZWRJbnN0cnVjdGlvbi51cmxQYXJhbXMiLCJVbnJlc29sdmVkSW5zdHJ1Y3Rpb24ucmVzb2x2ZUNvbXBvbmVudCIsIlJlZGlyZWN0SW5zdHJ1Y3Rpb24iLCJSZWRpcmVjdEluc3RydWN0aW9uLmNvbnN0cnVjdG9yIiwiUmVkaXJlY3RJbnN0cnVjdGlvbi5zcGVjaWZpY2l0eSIsIkNvbXBvbmVudEluc3RydWN0aW9uIiwiQ29tcG9uZW50SW5zdHJ1Y3Rpb24uY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsMkJBQTZELGdDQUFnQyxDQUFDLENBQUE7QUFDOUYscUJBQW1FLDBCQUEwQixDQUFDLENBQUE7QUFDOUYsc0JBQTZCLDJCQUEyQixDQUFDLENBQUE7QUFHekQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQThCRztBQUNIO0lBQ0VBLHFCQUFtQkEsTUFBK0JBO1FBQS9CQyxXQUFNQSxHQUFOQSxNQUFNQSxDQUF5QkE7SUFBR0EsQ0FBQ0E7SUFFdERELHlCQUFHQSxHQUFIQSxVQUFJQSxLQUFhQSxJQUFZRSxNQUFNQSxDQUFDQSxxQkFBY0EsQ0FBQ0EsNkJBQWdCQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxFQUFFQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNqR0Ysa0JBQUNBO0FBQURBLENBQUNBLEFBSkQsSUFJQztBQUpZLG1CQUFXLGNBSXZCLENBQUE7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQ0c7QUFDSDtJQUNFRyxtQkFBbUJBLElBQTJDQTtRQUFsREMsb0JBQWtEQSxHQUFsREEsT0FBb0NBLGlCQUFVQSxDQUFDQSxFQUFFQSxDQUFDQTtRQUEzQ0EsU0FBSUEsR0FBSkEsSUFBSUEsQ0FBdUNBO0lBQUdBLENBQUNBO0lBRWxFRCx1QkFBR0EsR0FBSEEsVUFB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QSw0Q0FBV0E7YUFBZkEsY0FBNEJFLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLENBQUNBLENBQUNBOzs7T0FBQUY7SUFDekRBLDBCQUFDQTtBQUFEQSxDQUFDQSxBQVBELEVBQXlDLG1CQUFtQixFQU8zRDtBQVBZLDJCQUFtQixzQkFPL0IsQ0FBQTtBQUdEOzs7Ozs7Ozs7OztHQVdHO0FBQ0g7SUFJRUc7O09BRUdBO0lBQ0hBLDhCQUFtQkEsT0FBZUEsRUFBU0EsU0FBbUJBLEVBQUVBLElBQWVBLEVBQzVEQSxhQUFhQSxFQUFTQSxRQUFpQkEsRUFBU0EsV0FBbUJBLEVBQ25FQSxNQUFzQ0E7UUFBN0NDLHNCQUE2Q0EsR0FBN0NBLGFBQTZDQTtRQUZ0Q0EsWUFBT0EsR0FBUEEsT0FBT0EsQ0FBUUE7UUFBU0EsY0FBU0EsR0FBVEEsU0FBU0EsQ0FBVUE7UUFDM0NBLGtCQUFhQSxHQUFiQSxhQUFhQSxDQUFBQTtRQUFTQSxhQUFRQSxHQUFSQSxRQUFRQSxDQUFTQTtRQUFTQSxnQkFBV0EsR0FBWEEsV0FBV0EsQ0FBUUE7UUFDbkVBLFdBQU1BLEdBQU5BLE1BQU1BLENBQWdDQTtRQVJ6REEsVUFBS0EsR0FBWUEsS0FBS0EsQ0FBQ0E7UUFTckJBLElBQUlBLENBQUNBLFNBQVNBLEdBQUdBLGdCQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxJQUFJQSxHQUFHQSx3QkFBZ0JBLENBQUNBO0lBQzdEQSxDQUFDQTtJQUNIRCwyQkFBQ0E7QUFBREEsQ0FBQ0EsQUFaRCxJQVlDO0FBWlksNEJBQW9CLHVCQVloQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNYXAsIE1hcFdyYXBwZXIsIFN0cmluZ01hcFdyYXBwZXIsIExpc3RXcmFwcGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2NvbGxlY3Rpb24nO1xuaW1wb3J0IHtpc1ByZXNlbnQsIGlzQmxhbmssIG5vcm1hbGl6ZUJsYW5rLCBUeXBlLCBDT05TVF9FWFBSfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtQcm9taXNlV3JhcHBlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9hc3luYyc7XG5cblxuLyoqXG4gKiBgUm91dGVQYXJhbXNgIGlzIGFuIGltbXV0YWJsZSBtYXAgb2YgcGFyYW1ldGVycyBmb3IgdGhlIGdpdmVuIHJvdXRlXG4gKiBiYXNlZCBvbiB0aGUgdXJsIG1hdGNoZXIgYW5kIG9wdGlvbmFsIHBhcmFtZXRlcnMgZm9yIHRoYXQgcm91dGUuXG4gKlxuICogWW91IGNhbiBpbmplY3QgYFJvdXRlUGFyYW1zYCBpbnRvIHRoZSBjb25zdHJ1Y3RvciBvZiBhIGNvbXBvbmVudCB0byB1c2UgaXQuXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbiAqIGltcG9ydCB7Ym9vdHN0cmFwfSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyJztcbiAqIGltcG9ydCB7Um91dGVyLCBST1VURVJfRElSRUNUSVZFUywgUk9VVEVSX1BST1ZJREVSUywgUm91dGVDb25maWcsIFJvdXRlUGFyYW1zfSBmcm9tXG4gKiAnYW5ndWxhcjIvcm91dGVyJztcbiAqXG4gKiBAQ29tcG9uZW50KHtkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdfSlcbiAqIEBSb3V0ZUNvbmZpZyhbXG4gKiAge3BhdGg6ICcvdXNlci86aWQnLCBjb21wb25lbnQ6IFVzZXJDbXAsIG5hbWU6ICdVc2VyQ21wJ30sXG4gKiBdKVxuICogY2xhc3MgQXBwQ21wIHt9XG4gKlxuICogQENvbXBvbmVudCh7IHRlbXBsYXRlOiAndXNlcjoge3tpZH19JyB9KVxuICogY2xhc3MgVXNlckNtcCB7XG4gKiAgIGlkOiBzdHJpbmc7XG4gKiAgIGNvbnN0cnVjdG9yKHBhcmFtczogUm91dGVQYXJhbXMpIHtcbiAqICAgICB0aGlzLmlkID0gcGFyYW1zLmdldCgnaWQnKTtcbiAqICAgfVxuICogfVxuICpcbiAqIGJvb3RzdHJhcChBcHBDbXAsIFJPVVRFUl9QUk9WSURFUlMpO1xuICogYGBgXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3V0ZVBhcmFtcyB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXJhbXM6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9KSB7fVxuXG4gIGdldChwYXJhbTogc3RyaW5nKTogc3RyaW5nIHsgcmV0dXJuIG5vcm1hbGl6ZUJsYW5rKFN0cmluZ01hcFdyYXBwZXIuZ2V0KHRoaXMucGFyYW1zLCBwYXJhbSkpOyB9XG59XG5cbi8qKlxuICogYFJvdXRlRGF0YWAgaXMgYW4gaW1tdXRhYmxlIG1hcCBvZiBhZGRpdGlvbmFsIGRhdGEgeW91IGNhbiBjb25maWd1cmUgaW4geW91ciB7QGxpbmsgUm91dGV9LlxuICpcbiAqIFlvdSBjYW4gaW5qZWN0IGBSb3V0ZURhdGFgIGludG8gdGhlIGNvbnN0cnVjdG9yIG9mIGEgY29tcG9uZW50IHRvIHVzZSBpdC5cbiAqXG4gKiAjIyMgRXhhbXBsZVxuICpcbiAqIGBgYFxuICogaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuICogaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xuICogaW1wb3J0IHtSb3V0ZXIsIFJPVVRFUl9ESVJFQ1RJVkVTLCBST1VURVJfUFJPVklERVJTLCBSb3V0ZUNvbmZpZywgUm91dGVEYXRhfSBmcm9tXG4gKiAnYW5ndWxhcjIvcm91dGVyJztcbiAqXG4gKiBAQ29tcG9uZW50KHtkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdfSlcbiAqIEBSb3V0ZUNvbmZpZyhbXG4gKiAge3BhdGg6ICcvdXNlci86aWQnLCBjb21wb25lbnQ6IFVzZXJDbXAsIG5hbWU6ICdVc2VyQ21wJywgZGF0YToge2lzQWRtaW46IHRydWV9fSxcbiAqIF0pXG4gKiBjbGFzcyBBcHBDbXAge31cbiAqXG4gKiBAQ29tcG9uZW50KHtcbiAqICAgLi4uLFxuICogICB0ZW1wbGF0ZTogJ3VzZXI6IHt7aXNBZG1pbn19J1xuICogfSlcbiAqIGNsYXNzIFVzZXJDbXAge1xuICogICBzdHJpbmc6IGlzQWRtaW47XG4gKiAgIGNvbnN0cnVjdG9yKGRhdGE6IFJvdXRlRGF0YSkge1xuICogICAgIHRoaXMuaXNBZG1pbiA9IGRhdGEuZ2V0KCdpc0FkbWluJyk7XG4gKiAgIH1cbiAqIH1cbiAqXG4gKiBib290c3RyYXAoQXBwQ21wLCBST1VURVJfUFJPVklERVJTKTtcbiAqIGBgYFxuICovXG5leHBvcnQgY2xhc3MgUm91dGVEYXRhIHtcbiAgY29uc3RydWN0b3IocHVibGljIGRhdGE6IHtba2V5OiBzdHJpbmddOiBhbnl9ID0gQ09OU1RfRVhQUih7fSkpIHt9XG5cbiAgZ2V0KGtleTogc3RyaW5nKTogYW55IHsgcmV0dXJuIG5vcm1hbGl6ZUJsYW5rKFN0cmluZ01hcFdyYXBwZXIuZ2V0KHRoaXMuZGF0YSwga2V5KSk7IH1cbn1cblxuZXhwb3J0IHZhciBCTEFOS19ST1VURV9EQVRBID0gbmV3IFJvdXRlRGF0YSgpO1xuXG4vKipcbiAqIGBJbnN0cnVjdGlvbmAgaXMgYSB0cmVlIG9mIHtAbGluayBDb21wb25lbnRJbnN0cnVjdGlvbn1zIHdpdGggYWxsIHRoZSBpbmZvcm1hdGlvbiBuZWVkZWRcbiAqIHRvIHRyYW5zaXRpb24gZWFjaCBjb21wb25lbnQgaW4gdGhlIGFwcCB0byBhIGdpdmVuIHJvdXRlLCBpbmNsdWRpbmcgYWxsIGF1eGlsaWFyeSByb3V0ZXMuXG4gKlxuICogYEluc3RydWN0aW9uYHMgY2FuIGJlIGNyZWF0ZWQgdXNpbmcge0BsaW5rIFJvdXRlciNnZW5lcmF0ZX0sIGFuZCBjYW4gYmUgdXNlZCB0b1xuICogcGVyZm9ybSByb3V0ZSBjaGFuZ2VzIHdpdGgge0BsaW5rIFJvdXRlciNuYXZpZ2F0ZUJ5SW5zdHJ1Y3Rpb259LlxuICpcbiAqICMjIyBFeGFtcGxlXG4gKlxuICogYGBgXG4gKiBpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG4gKiBpbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3Nlcic7XG4gKiBpbXBvcnQge1JvdXRlciwgUk9VVEVSX0RJUkVDVElWRVMsIFJPVVRFUl9QUk9WSURFUlMsIFJvdXRlQ29uZmlnfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuICpcbiAqIEBDb21wb25lbnQoe2RpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU119KVxuICogQFJvdXRlQ29uZmlnKFtcbiAqICB7Li4ufSxcbiAqIF0pXG4gKiBjbGFzcyBBcHBDbXAge1xuICogICBjb25zdHJ1Y3Rvcihyb3V0ZXI6IFJvdXRlcikge1xuICogICAgIHZhciBpbnN0cnVjdGlvbiA9IHJvdXRlci5nZW5lcmF0ZShbJy9NeVJvdXRlJ10pO1xuICogICAgIHJvdXRlci5uYXZpZ2F0ZUJ5SW5zdHJ1Y3Rpb24oaW5zdHJ1Y3Rpb24pO1xuICogICB9XG4gKiB9XG4gKlxuICogYm9vdHN0cmFwKEFwcENtcCwgUk9VVEVSX1BST1ZJREVSUyk7XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEluc3RydWN0aW9uIHtcbiAgY29uc3RydWN0b3IocHVibGljIGNvbXBvbmVudDogQ29tcG9uZW50SW5zdHJ1Y3Rpb24sIHB1YmxpYyBjaGlsZDogSW5zdHJ1Y3Rpb24sXG4gICAgICAgICAgICAgIHB1YmxpYyBhdXhJbnN0cnVjdGlvbjoge1trZXk6IHN0cmluZ106IEluc3RydWN0aW9ufSkge31cblxuICBnZXQgdXJsUGF0aCgpOiBzdHJpbmcgeyByZXR1cm4gaXNQcmVzZW50KHRoaXMuY29tcG9uZW50KSA/IHRoaXMuY29tcG9uZW50LnVybFBhdGggOiAnJzsgfVxuXG4gIGdldCB1cmxQYXJhbXMoKTogc3RyaW5nW10geyByZXR1cm4gaXNQcmVzZW50KHRoaXMuY29tcG9uZW50KSA/IHRoaXMuY29tcG9uZW50LnVybFBhcmFtcyA6IFtdOyB9XG5cbiAgZ2V0IHNwZWNpZmljaXR5KCk6IHN0cmluZyB7XG4gICAgdmFyIHRvdGFsID0gJyc7XG4gICAgaWYgKGlzUHJlc2VudCh0aGlzLmNvbXBvbmVudCkpIHtcbiAgICAgIHRvdGFsICs9IHRoaXMuY29tcG9uZW50LnNwZWNpZmljaXR5O1xuICAgIH1cbiAgICBpZiAoaXNQcmVzZW50KHRoaXMuY2hpbGQpKSB7XG4gICAgICB0b3RhbCArPSB0aGlzLmNoaWxkLnNwZWNpZmljaXR5O1xuICAgIH1cbiAgICByZXR1cm4gdG90YWw7XG4gIH1cblxuICBhYnN0cmFjdCByZXNvbHZlQ29tcG9uZW50KCk6IFByb21pc2U8Q29tcG9uZW50SW5zdHJ1Y3Rpb24+O1xuXG4gIC8qKlxuICAgKiBjb252ZXJ0cyB0aGUgaW5zdHJ1Y3Rpb24gaW50byBhIFVSTCBzdHJpbmdcbiAgICovXG4gIHRvUm9vdFVybCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy50b1VybFBhdGgoKSArIHRoaXMudG9VcmxRdWVyeSgpOyB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfdG9Ob25Sb290VXJsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3N0cmluZ2lmeVBhdGhNYXRyaXhBdXhQcmVmaXhlZCgpICtcbiAgICAgICAgICAgKGlzUHJlc2VudCh0aGlzLmNoaWxkKSA/IHRoaXMuY2hpbGQuX3RvTm9uUm9vdFVybCgpIDogJycpO1xuICB9XG5cbiAgdG9VcmxRdWVyeSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy51cmxQYXJhbXMubGVuZ3RoID4gMCA/ICgnPycgKyB0aGlzLnVybFBhcmFtcy5qb2luKCcmJykpIDogJyc7IH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIG5ldyBpbnN0cnVjdGlvbiB0aGF0IHNoYXJlcyB0aGUgc3RhdGUgb2YgdGhlIGV4aXN0aW5nIGluc3RydWN0aW9uLCBidXQgd2l0aFxuICAgKiB0aGUgZ2l2ZW4gY2hpbGQge0BsaW5rIEluc3RydWN0aW9ufSByZXBsYWNpbmcgdGhlIGV4aXN0aW5nIGNoaWxkLlxuICAgKi9cbiAgcmVwbGFjZUNoaWxkKGNoaWxkOiBJbnN0cnVjdGlvbik6IEluc3RydWN0aW9uIHtcbiAgICByZXR1cm4gbmV3IFJlc29sdmVkSW5zdHJ1Y3Rpb24odGhpcy5jb21wb25lbnQsIGNoaWxkLCB0aGlzLmF1eEluc3RydWN0aW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJZiB0aGUgZmluYWwgVVJMIGZvciB0aGUgaW5zdHJ1Y3Rpb24gaXMgYGBcbiAgICovXG4gIHRvVXJsUGF0aCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnVybFBhdGggKyB0aGlzLl9zdHJpbmdpZnlBdXgoKSArXG4gICAgICAgICAgIChpc1ByZXNlbnQodGhpcy5jaGlsZCkgPyB0aGlzLmNoaWxkLl90b05vblJvb3RVcmwoKSA6ICcnKTtcbiAgfVxuXG4gIC8vIGRlZmF1bHQgaW5zdHJ1Y3Rpb25zIG92ZXJyaWRlIHRoZXNlXG4gIHRvTGlua1VybCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnVybFBhdGggKyB0aGlzLl9zdHJpbmdpZnlBdXgoKSArXG4gICAgICAgICAgIChpc1ByZXNlbnQodGhpcy5jaGlsZCkgPyB0aGlzLmNoaWxkLl90b0xpbmtVcmwoKSA6ICcnKSArIHRoaXMudG9VcmxRdWVyeSgpO1xuICB9XG5cbiAgLy8gdGhpcyBpcyB0aGUgbm9uLXJvb3QgdmVyc2lvbiAoY2FsbGVkIHJlY3Vyc2l2ZWx5KVxuICAvKiogQGludGVybmFsICovXG4gIF90b0xpbmtVcmwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc3RyaW5naWZ5UGF0aE1hdHJpeEF1eFByZWZpeGVkKCkgK1xuICAgICAgICAgICAoaXNQcmVzZW50KHRoaXMuY2hpbGQpID8gdGhpcy5jaGlsZC5fdG9MaW5rVXJsKCkgOiAnJyk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9zdHJpbmdpZnlQYXRoTWF0cml4QXV4UHJlZml4ZWQoKTogc3RyaW5nIHtcbiAgICB2YXIgcHJpbWFyeSA9IHRoaXMuX3N0cmluZ2lmeVBhdGhNYXRyaXhBdXgoKTtcbiAgICBpZiAocHJpbWFyeS5sZW5ndGggPiAwKSB7XG4gICAgICBwcmltYXJ5ID0gJy8nICsgcHJpbWFyeTtcbiAgICB9XG4gICAgcmV0dXJuIHByaW1hcnk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9zdHJpbmdpZnlNYXRyaXhQYXJhbXMoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy51cmxQYXJhbXMubGVuZ3RoID4gMCA/ICgnOycgKyB0aGlzLnVybFBhcmFtcy5qb2luKCc7JykpIDogJyc7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9zdHJpbmdpZnlQYXRoTWF0cml4QXV4KCk6IHN0cmluZyB7XG4gICAgaWYgKGlzQmxhbmsodGhpcy5jb21wb25lbnQpKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnVybFBhdGggKyB0aGlzLl9zdHJpbmdpZnlNYXRyaXhQYXJhbXMoKSArIHRoaXMuX3N0cmluZ2lmeUF1eCgpO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfc3RyaW5naWZ5QXV4KCk6IHN0cmluZyB7XG4gICAgdmFyIHJvdXRlcyA9IFtdO1xuICAgIFN0cmluZ01hcFdyYXBwZXIuZm9yRWFjaCh0aGlzLmF1eEluc3RydWN0aW9uLCAoYXV4SW5zdHJ1Y3Rpb246IEluc3RydWN0aW9uLCBfOiBzdHJpbmcpID0+IHtcbiAgICAgIHJvdXRlcy5wdXNoKGF1eEluc3RydWN0aW9uLl9zdHJpbmdpZnlQYXRoTWF0cml4QXV4KCkpO1xuICAgIH0pO1xuICAgIGlmIChyb3V0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuICcoJyArIHJvdXRlcy5qb2luKCcvLycpICsgJyknO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cblxuXG4vKipcbiAqIGEgcmVzb2x2ZWQgaW5zdHJ1Y3Rpb24gaGFzIGFuIG91dGxldCBpbnN0cnVjdGlvbiBmb3IgaXRzZWxmLCBidXQgbWF5YmUgbm90IGZvci4uLlxuICovXG5leHBvcnQgY2xhc3MgUmVzb2x2ZWRJbnN0cnVjdGlvbiBleHRlbmRzIEluc3RydWN0aW9uIHtcbiAgY29uc3RydWN0b3IoY29tcG9uZW50OiBDb21wb25lbnRJbnN0cnVjdGlvbiwgY2hpbGQ6IEluc3RydWN0aW9uLFxuICAgICAgICAgICAgICBhdXhJbnN0cnVjdGlvbjoge1trZXk6IHN0cmluZ106IEluc3RydWN0aW9ufSkge1xuICAgIHN1cGVyKGNvbXBvbmVudCwgY2hpbGQsIGF1eEluc3RydWN0aW9uKTtcbiAgfVxuXG4gIHJlc29sdmVDb21wb25lbnQoKTogUHJvbWlzZTxDb21wb25lbnRJbnN0cnVjdGlvbj4ge1xuICAgIHJldHVybiBQcm9taXNlV3JhcHBlci5yZXNvbHZlKHRoaXMuY29tcG9uZW50KTtcbiAgfVxufVxuXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIHJlc29sdmVkIGRlZmF1bHQgcm91dGVcbiAqL1xuZXhwb3J0IGNsYXNzIERlZmF1bHRJbnN0cnVjdGlvbiBleHRlbmRzIFJlc29sdmVkSW5zdHJ1Y3Rpb24ge1xuICBjb25zdHJ1Y3Rvcihjb21wb25lbnQ6IENvbXBvbmVudEluc3RydWN0aW9uLCBjaGlsZDogRGVmYXVsdEluc3RydWN0aW9uKSB7XG4gICAgc3VwZXIoY29tcG9uZW50LCBjaGlsZCwge30pO1xuICB9XG5cbiAgdG9MaW5rVXJsKCk6IHN0cmluZyB7IHJldHVybiAnJzsgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX3RvTGlua1VybCgpOiBzdHJpbmcgeyByZXR1cm4gJyc7IH1cbn1cblxuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBjb21wb25lbnQgdGhhdCBtYXkgbmVlZCB0byBkbyBzb21lIHJlZGlyZWN0aW9uIG9yIGxhenkgbG9hZGluZyBhdCBhIGxhdGVyIHRpbWUuXG4gKi9cbmV4cG9ydCBjbGFzcyBVbnJlc29sdmVkSW5zdHJ1Y3Rpb24gZXh0ZW5kcyBJbnN0cnVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3Jlc29sdmVyOiAoKSA9PiBQcm9taXNlPEluc3RydWN0aW9uPiwgcHJpdmF0ZSBfdXJsUGF0aDogc3RyaW5nID0gJycsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3VybFBhcmFtczogc3RyaW5nW10gPSBDT05TVF9FWFBSKFtdKSkge1xuICAgIHN1cGVyKG51bGwsIG51bGwsIHt9KTtcbiAgfVxuXG4gIGdldCB1cmxQYXRoKCk6IHN0cmluZyB7XG4gICAgaWYgKGlzUHJlc2VudCh0aGlzLmNvbXBvbmVudCkpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudC51cmxQYXRoO1xuICAgIH1cbiAgICBpZiAoaXNQcmVzZW50KHRoaXMuX3VybFBhdGgpKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdXJsUGF0aDtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgZ2V0IHVybFBhcmFtcygpOiBzdHJpbmdbXSB7XG4gICAgaWYgKGlzUHJlc2VudCh0aGlzLmNvbXBvbmVudCkpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudC51cmxQYXJhbXM7XG4gICAgfVxuICAgIGlmIChpc1ByZXNlbnQodGhpcy5fdXJsUGFyYW1zKSkge1xuICAgICAgcmV0dXJuIHRoaXMuX3VybFBhcmFtcztcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgcmVzb2x2ZUNvbXBvbmVudCgpOiBQcm9taXNlPENvbXBvbmVudEluc3RydWN0aW9uPiB7XG4gICAgaWYgKGlzUHJlc2VudCh0aGlzLmNvbXBvbmVudCkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlV3JhcHBlci5yZXNvbHZlKHRoaXMuY29tcG9uZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3Jlc29sdmVyKCkudGhlbigoaW5zdHJ1Y3Rpb246IEluc3RydWN0aW9uKSA9PiB7XG4gICAgICB0aGlzLmNoaWxkID0gaXNQcmVzZW50KGluc3RydWN0aW9uKSA/IGluc3RydWN0aW9uLmNoaWxkIDogbnVsbDtcbiAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudCA9IGlzUHJlc2VudChpbnN0cnVjdGlvbikgPyBpbnN0cnVjdGlvbi5jb21wb25lbnQgOiBudWxsO1xuICAgIH0pO1xuICB9XG59XG5cblxuZXhwb3J0IGNsYXNzIFJlZGlyZWN0SW5zdHJ1Y3Rpb24gZXh0ZW5kcyBSZXNvbHZlZEluc3RydWN0aW9uIHtcbiAgY29uc3RydWN0b3IoY29tcG9uZW50OiBDb21wb25lbnRJbnN0cnVjdGlvbiwgY2hpbGQ6IEluc3RydWN0aW9uLFxuICAgICAgICAgICAgICBhdXhJbnN0cnVjdGlvbjoge1trZXk6IHN0cmluZ106IEluc3RydWN0aW9ufSwgcHJpdmF0ZSBfc3BlY2lmaWNpdHk6IHN0cmluZykge1xuICAgIHN1cGVyKGNvbXBvbmVudCwgY2hpbGQsIGF1eEluc3RydWN0aW9uKTtcbiAgfVxuXG4gIGdldCBzcGVjaWZpY2l0eSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fc3BlY2lmaWNpdHk7IH1cbn1cblxuXG4vKipcbiAqIEEgYENvbXBvbmVudEluc3RydWN0aW9uYCByZXByZXNlbnRzIHRoZSByb3V0ZSBzdGF0ZSBmb3IgYSBzaW5nbGUgY29tcG9uZW50LlxuICpcbiAqIGBDb21wb25lbnRJbnN0cnVjdGlvbnNgIGlzIGEgcHVibGljIEFQSS4gSW5zdGFuY2VzIG9mIGBDb21wb25lbnRJbnN0cnVjdGlvbmAgYXJlIHBhc3NlZFxuICogdG8gcm91dGUgbGlmZWN5Y2xlIGhvb2tzLCBsaWtlIHtAbGluayBDYW5BY3RpdmF0ZX0uXG4gKlxuICogYENvbXBvbmVudEluc3RydWN0aW9uYHMgYXJlIFtoYXNoIGNvbnNlZF0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSGFzaF9jb25zaW5nKS4gWW91IHNob3VsZFxuICogbmV2ZXIgY29uc3RydWN0IG9uZSB5b3Vyc2VsZiB3aXRoIFwibmV3LlwiIEluc3RlYWQsIHJlbHkgb24ge0BsaW5rIFJvdXRlci9Sb3V0ZVJlY29nbml6ZXJ9IHRvXG4gKiBjb25zdHJ1Y3QgYENvbXBvbmVudEluc3RydWN0aW9uYHMuXG4gKlxuICogWW91IHNob3VsZCBub3QgbW9kaWZ5IHRoaXMgb2JqZWN0LiBJdCBzaG91bGQgYmUgdHJlYXRlZCBhcyBpbW11dGFibGUuXG4gKi9cbmV4cG9ydCBjbGFzcyBDb21wb25lbnRJbnN0cnVjdGlvbiB7XG4gIHJldXNlOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyByb3V0ZURhdGE6IFJvdXRlRGF0YTtcblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdXJsUGF0aDogc3RyaW5nLCBwdWJsaWMgdXJsUGFyYW1zOiBzdHJpbmdbXSwgZGF0YTogUm91dGVEYXRhLFxuICAgICAgICAgICAgICBwdWJsaWMgY29tcG9uZW50VHlwZSwgcHVibGljIHRlcm1pbmFsOiBib29sZWFuLCBwdWJsaWMgc3BlY2lmaWNpdHk6IHN0cmluZyxcbiAgICAgICAgICAgICAgcHVibGljIHBhcmFtczoge1trZXk6IHN0cmluZ106IHN0cmluZ30gPSBudWxsKSB7XG4gICAgdGhpcy5yb3V0ZURhdGEgPSBpc1ByZXNlbnQoZGF0YSkgPyBkYXRhIDogQkxBTktfUk9VVEVfREFUQTtcbiAgfVxufVxuIl19

/***/ },

/***/ 235:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var lang_1 = __webpack_require__(3);
	var exceptions_1 = __webpack_require__(13);
	var collection_1 = __webpack_require__(11);
	var async_1 = __webpack_require__(50);
	var rules_1 = __webpack_require__(232);
	var route_config_impl_1 = __webpack_require__(231);
	var async_route_handler_1 = __webpack_require__(236);
	var sync_route_handler_1 = __webpack_require__(237);
	var param_route_path_1 = __webpack_require__(238);
	var regex_route_path_1 = __webpack_require__(241);
	/**
	 * A `RuleSet` is responsible for recognizing routes for a particular component.
	 * It is consumed by `RouteRegistry`, which knows how to recognize an entire hierarchy of
	 * components.
	 */
	var RuleSet = (function () {
	    function RuleSet() {
	        this.rulesByName = new collection_1.Map();
	        // map from name to rule
	        this.auxRulesByName = new collection_1.Map();
	        // map from starting path to rule
	        this.auxRulesByPath = new collection_1.Map();
	        // TODO: optimize this into a trie
	        this.rules = [];
	        // the rule to use automatically when recognizing or generating from this rule set
	        this.defaultRule = null;
	    }
	    /**
	     * Configure additional rules in this rule set from a route definition
	     * @returns {boolean} true if the config is terminal
	     */
	    RuleSet.prototype.config = function (config) {
	        var handler;
	        if (lang_1.isPresent(config.name) && config.name[0].toUpperCase() != config.name[0]) {
	            var suggestedName = config.name[0].toUpperCase() + config.name.substring(1);
	            throw new exceptions_1.BaseException("Route \"" + config.path + "\" with name \"" + config.name + "\" does not begin with an uppercase letter. Route names should be CamelCase like \"" + suggestedName + "\".");
	        }
	        if (config instanceof route_config_impl_1.AuxRoute) {
	            handler = new sync_route_handler_1.SyncRouteHandler(config.component, config.data);
	            var routePath_1 = this._getRoutePath(config);
	            var auxRule = new rules_1.RouteRule(routePath_1, handler);
	            this.auxRulesByPath.set(routePath_1.toString(), auxRule);
	            if (lang_1.isPresent(config.name)) {
	                this.auxRulesByName.set(config.name, auxRule);
	            }
	            return auxRule.terminal;
	        }
	        var useAsDefault = false;
	        if (config instanceof route_config_impl_1.Redirect) {
	            var routePath_2 = this._getRoutePath(config);
	            var redirector = new rules_1.RedirectRule(routePath_2, config.redirectTo);
	            this._assertNoHashCollision(redirector.hash, config.path);
	            this.rules.push(redirector);
	            return true;
	        }
	        if (config instanceof route_config_impl_1.Route) {
	            handler = new sync_route_handler_1.SyncRouteHandler(config.component, config.data);
	            useAsDefault = lang_1.isPresent(config.useAsDefault) && config.useAsDefault;
	        }
	        else if (config instanceof route_config_impl_1.AsyncRoute) {
	            handler = new async_route_handler_1.AsyncRouteHandler(config.loader, config.data);
	            useAsDefault = lang_1.isPresent(config.useAsDefault) && config.useAsDefault;
	        }
	        var routePath = this._getRoutePath(config);
	        var newRule = new rules_1.RouteRule(routePath, handler);
	        this._assertNoHashCollision(newRule.hash, config.path);
	        if (useAsDefault) {
	            if (lang_1.isPresent(this.defaultRule)) {
	                throw new exceptions_1.BaseException("Only one route can be default");
	            }
	            this.defaultRule = newRule;
	        }
	        this.rules.push(newRule);
	        if (lang_1.isPresent(config.name)) {
	            this.rulesByName.set(config.name, newRule);
	        }
	        return newRule.terminal;
	    };
	    /**
	     * Given a URL, returns a list of `RouteMatch`es, which are partial recognitions for some route.
	     */
	    RuleSet.prototype.recognize = function (urlParse) {
	        var solutions = [];
	        this.rules.forEach(function (routeRecognizer) {
	            var pathMatch = routeRecognizer.recognize(urlParse);
	            if (lang_1.isPresent(pathMatch)) {
	                solutions.push(pathMatch);
	            }
	        });
	        // handle cases where we are routing just to an aux route
	        if (solutions.length == 0 && lang_1.isPresent(urlParse) && urlParse.auxiliary.length > 0) {
	            return [async_1.PromiseWrapper.resolve(new rules_1.PathMatch(null, null, urlParse.auxiliary))];
	        }
	        return solutions;
	    };
	    RuleSet.prototype.recognizeAuxiliary = function (urlParse) {
	        var routeRecognizer = this.auxRulesByPath.get(urlParse.path);
	        if (lang_1.isPresent(routeRecognizer)) {
	            return [routeRecognizer.recognize(urlParse)];
	        }
	        return [async_1.PromiseWrapper.resolve(null)];
	    };
	    RuleSet.prototype.hasRoute = function (name) { return this.rulesByName.has(name); };
	    RuleSet.prototype.componentLoaded = function (name) {
	        return this.hasRoute(name) && lang_1.isPresent(this.rulesByName.get(name).handler.componentType);
	    };
	    RuleSet.prototype.loadComponent = function (name) {
	        return this.rulesByName.get(name).handler.resolveComponentType();
	    };
	    RuleSet.prototype.generate = function (name, params) {
	        var rule = this.rulesByName.get(name);
	        if (lang_1.isBlank(rule)) {
	            return null;
	        }
	        return rule.generate(params);
	    };
	    RuleSet.prototype.generateAuxiliary = function (name, params) {
	        var rule = this.auxRulesByName.get(name);
	        if (lang_1.isBlank(rule)) {
	            return null;
	        }
	        return rule.generate(params);
	    };
	    RuleSet.prototype._assertNoHashCollision = function (hash, path) {
	        this.rules.forEach(function (rule) {
	            if (hash == rule.hash) {
	                throw new exceptions_1.BaseException("Configuration '" + path + "' conflicts with existing route '" + rule.path + "'");
	            }
	        });
	    };
	    RuleSet.prototype._getRoutePath = function (config) {
	        if (lang_1.isPresent(config.regex)) {
	            if (lang_1.isFunction(config.serializer)) {
	                return new regex_route_path_1.RegexRoutePath(config.regex, config.serializer);
	            }
	            else {
	                throw new exceptions_1.BaseException("Route provides a regex property, '" + config.regex + "', but no serializer property");
	            }
	        }
	        if (lang_1.isPresent(config.path)) {
	            // Auxiliary routes do not have a slash at the start
	            var path = (config instanceof route_config_impl_1.AuxRoute && config.path.startsWith('/')) ?
	                config.path.substring(1) :
	                config.path;
	            return new param_route_path_1.ParamRoutePath(path);
	        }
	        throw new exceptions_1.BaseException('Route must provide either a path or regex property');
	    };
	    return RuleSet;
	})();
	exports.RuleSet = RuleSet;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVsZV9zZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbmd1bGFyMi9zcmMvcm91dGVyL3J1bGVzL3J1bGVfc2V0LnRzIl0sIm5hbWVzIjpbIlJ1bGVTZXQiLCJSdWxlU2V0LmNvbnN0cnVjdG9yIiwiUnVsZVNldC5jb25maWciLCJSdWxlU2V0LnJlY29nbml6ZSIsIlJ1bGVTZXQucmVjb2duaXplQXV4aWxpYXJ5IiwiUnVsZVNldC5oYXNSb3V0ZSIsIlJ1bGVTZXQuY29tcG9uZW50TG9hZGVkIiwiUnVsZVNldC5sb2FkQ29tcG9uZW50IiwiUnVsZVNldC5nZW5lcmF0ZSIsIlJ1bGVTZXQuZ2VuZXJhdGVBdXhpbGlhcnkiLCJSdWxlU2V0Ll9hc3NlcnROb0hhc2hDb2xsaXNpb24iLCJSdWxlU2V0Ll9nZXRSb3V0ZVBhdGgiXSwibWFwcGluZ3MiOiJBQUFBLHFCQUE2QywwQkFBMEIsQ0FBQyxDQUFBO0FBQ3hFLDJCQUE4QyxnQ0FBZ0MsQ0FBQyxDQUFBO0FBQy9FLDJCQUE2RCxnQ0FBZ0MsQ0FBQyxDQUFBO0FBQzlGLHNCQUE2QiwyQkFBMkIsQ0FBQyxDQUFBO0FBRXpELHNCQUEyRSxTQUFTLENBQUMsQ0FBQTtBQUNyRixrQ0FNTyxtQ0FBbUMsQ0FBQyxDQUFBO0FBRTNDLG9DQUFnQyxzQ0FBc0MsQ0FBQyxDQUFBO0FBQ3ZFLG1DQUErQixxQ0FBcUMsQ0FBQyxDQUFBO0FBR3JFLGlDQUE2QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQzlELGlDQUE2QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBTTlEOzs7O0dBSUc7QUFDSDtJQUFBQTtRQUNFQyxnQkFBV0EsR0FBR0EsSUFBSUEsZ0JBQUdBLEVBQXFCQSxDQUFDQTtRQUUzQ0Esd0JBQXdCQTtRQUN4QkEsbUJBQWNBLEdBQUdBLElBQUlBLGdCQUFHQSxFQUFxQkEsQ0FBQ0E7UUFFOUNBLGlDQUFpQ0E7UUFDakNBLG1CQUFjQSxHQUFHQSxJQUFJQSxnQkFBR0EsRUFBcUJBLENBQUNBO1FBRTlDQSxrQ0FBa0NBO1FB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Q0E7QUFBREEsQ0FBQ0EsQUFoS0QsSUFnS0M7QUFoS1ksZUFBTyxVQWdLbkIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aXNCbGFuaywgaXNQcmVzZW50LCBpc0Z1bmN0aW9ufSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtCYXNlRXhjZXB0aW9uLCBXcmFwcGVkRXhjZXB0aW9ufSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2V4Y2VwdGlvbnMnO1xuaW1wb3J0IHtNYXAsIE1hcFdyYXBwZXIsIExpc3RXcmFwcGVyLCBTdHJpbmdNYXBXcmFwcGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2NvbGxlY3Rpb24nO1xuaW1wb3J0IHtQcm9taXNlV3JhcHBlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9hc3luYyc7XG5cbmltcG9ydCB7QWJzdHJhY3RSdWxlLCBSb3V0ZVJ1bGUsIFJlZGlyZWN0UnVsZSwgUm91dGVNYXRjaCwgUGF0aE1hdGNofSBmcm9tICcuL3J1bGVzJztcbmltcG9ydCB7XG4gIFJvdXRlLFxuICBBc3luY1JvdXRlLFxuICBBdXhSb3V0ZSxcbiAgUmVkaXJlY3QsXG4gIFJvdXRlRGVmaW5pdGlvblxufSBmcm9tICcuLi9yb3V0ZV9jb25maWcvcm91dGVfY29uZmlnX2ltcGwnO1xuXG5pbXBvcnQge0FzeW5jUm91dGVIYW5kbGVyfSBmcm9tICcuL3JvdXRlX2hhbmRsZXJzL2FzeW5jX3JvdXRlX2hhbmRsZXInO1xuaW1wb3J0IHtTeW5jUm91dGVIYW5kbGVyfSBmcm9tICcuL3JvdXRlX2hhbmRsZXJzL3N5bmNfcm91dGVfaGFuZGxlcic7XG5cbmltcG9ydCB7Um91dGVQYXRofSBmcm9tICcuL3JvdXRlX3BhdGhzL3JvdXRlX3BhdGgnO1xuaW1wb3J0IHtQYXJhbVJvdXRlUGF0aH0gZnJvbSAnLi9yb3V0ZV9wYXRocy9wYXJhbV9yb3V0ZV9wYXRoJztcbmltcG9ydCB7UmVnZXhSb3V0ZVBhdGh9IGZyb20gJy4vcm91dGVfcGF0aHMvcmVnZXhfcm91dGVfcGF0aCc7XG5cbmltcG9ydCB7VXJsfSBmcm9tICcuLi91cmxfcGFyc2VyJztcbmltcG9ydCB7Q29tcG9uZW50SW5zdHJ1Y3Rpb259IGZyb20gJy4uL2luc3RydWN0aW9uJztcblxuXG4vKipcbiAqIEEgYFJ1bGVTZXRgIGlzIHJlc3BvbnNpYmxlIGZvciByZWNvZ25pemluZyByb3V0ZXMgZm9yIGEgcGFydGljdWxhciBjb21wb25lbnQuXG4gKiBJdCBpcyBjb25zdW1lZCBieSBgUm91dGVSZWdpc3RyeWAsIHdoaWNoIGtub3dzIGhvdyB0byByZWNvZ25pemUgYW4gZW50aXJlIGhpZXJhcmNoeSBvZlxuICogY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGNsYXNzIFJ1bGVTZXQge1xuICBydWxlc0J5TmFtZSA9IG5ldyBNYXA8c3RyaW5nLCBSb3V0ZVJ1bGU+KCk7XG5cbiAgLy8gbWFwIGZyb20gbmFtZSB0byBydWxlXG4gIGF1eFJ1bGVzQnlOYW1lID0gbmV3IE1hcDxzdHJpbmcsIFJvdXRlUnVsZT4oKTtcblxuICAvLyBtYXAgZnJvbSBzdGFydGluZyBwYXRoIHRvIHJ1bGVcbiAgYXV4UnVsZXNCeVBhdGggPSBuZXcgTWFwPHN0cmluZywgUm91dGVSdWxlPigpO1xuXG4gIC8vIFRPRE86IG9wdGltaXplIHRoaXMgaW50byBhIHRyaWVcbiAgcnVsZXM6IEFic3RyYWN0UnVsZVtdID0gW107XG5cbiAgLy8gdGhlIHJ1bGUgdG8gdXNlIGF1dG9tYXRpY2FsbHkgd2hlbiByZWNvZ25pemluZyBvciBnZW5lcmF0aW5nIGZyb20gdGhpcyBydWxlIHNldFxuICBkZWZhdWx0UnVsZTogUm91dGVSdWxlID0gbnVsbDtcblxuICAvKipcbiAgICogQ29uZmlndXJlIGFkZGl0aW9uYWwgcnVsZXMgaW4gdGhpcyBydWxlIHNldCBmcm9tIGEgcm91dGUgZGVmaW5pdGlvblxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgY29uZmlnIGlzIHRlcm1pbmFsXG4gICAqL1xuICBjb25maWcoY29uZmlnOiBSb3V0ZURlZmluaXRpb24pOiBib29sZWFuIHtcbiAgICBsZXQgaGFuZGxlcjtcblxuICAgIGlmIChpc1ByZXNlbnQoY29uZmlnLm5hbWUpICYmIGNvbmZpZy5uYW1lWzBdLnRvVXBwZXJDYXNlKCkgIT0gY29uZmlnLm5hbWVbMF0pIHtcbiAgICAgIGxldCBzdWdnZXN0ZWROYW1lID0gY29uZmlnLm5hbWVbMF0udG9VcHBlckNhc2UoKSArIGNvbmZpZy5uYW1lLnN1YnN0cmluZygxKTtcbiAgICAgIHRocm93IG5ldyBCYXNlRXhjZXB0aW9uKFxuICAgICAgICAgIGBSb3V0ZSBcIiR7Y29uZmlnLnBhdGh9XCIgd2l0aCBuYW1lIFwiJHtjb25maWcubmFtZX1cIiBkb2VzIG5vdCBiZWdpbiB3aXRoIGFuIHVwcGVyY2FzZSBsZXR0ZXIuIFJvdXRlIG5hbWVzIHNob3VsZCBiZSBDYW1lbENhc2UgbGlrZSBcIiR7c3VnZ2VzdGVkTmFtZX1cIi5gKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnIGluc3RhbmNlb2YgQXV4Um91dGUpIHtcbiAgICAgIGhhbmRsZXIgPSBuZXcgU3luY1JvdXRlSGFuZGxlcihjb25maWcuY29tcG9uZW50LCBjb25maWcuZGF0YSk7XG4gICAgICBsZXQgcm91dGVQYXRoID0gdGhpcy5fZ2V0Um91dGVQYXRoKGNvbmZpZyk7XG4gICAgICBsZXQgYXV4UnVsZSA9IG5ldyBSb3V0ZVJ1bGUocm91dGVQYXRoLCBoYW5kbGVyKTtcbiAgICAgIHRoaXMuYXV4UnVsZXNCeVBhdGguc2V0KHJvdXRlUGF0aC50b1N0cmluZygpLCBhdXhSdWxlKTtcbiAgICAgIGlmIChpc1ByZXNlbnQoY29uZmlnLm5hbWUpKSB7XG4gICAgICAgIHRoaXMuYXV4UnVsZXNCeU5hbWUuc2V0KGNvbmZpZy5uYW1lLCBhdXhSdWxlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhdXhSdWxlLnRlcm1pbmFsO1xuICAgIH1cblxuICAgIGxldCB1c2VBc0RlZmF1bHQgPSBmYWxzZTtcblxuICAgIGlmIChjb25maWcgaW5zdGFuY2VvZiBSZWRpcmVjdCkge1xuICAgICAgbGV0IHJvdXRlUGF0aCA9IHRoaXMuX2dldFJvdXRlUGF0aChjb25maWcpO1xuICAgICAgbGV0IHJlZGlyZWN0b3IgPSBuZXcgUmVkaXJlY3RSdWxlKHJvdXRlUGF0aCwgY29uZmlnLnJlZGlyZWN0VG8pO1xuICAgICAgdGhpcy5fYXNzZXJ0Tm9IYXNoQ29sbGlzaW9uKHJlZGlyZWN0b3IuaGFzaCwgY29uZmlnLnBhdGgpO1xuICAgICAgdGhpcy5ydWxlcy5wdXNoKHJlZGlyZWN0b3IpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZyBpbnN0YW5jZW9mIFJvdXRlKSB7XG4gICAgICBoYW5kbGVyID0gbmV3IFN5bmNSb3V0ZUhhbmRsZXIoY29uZmlnLmNvbXBvbmVudCwgY29uZmlnLmRhdGEpO1xuICAgICAgdXNlQXNEZWZhdWx0ID0gaXNQcmVzZW50KGNvbmZpZy51c2VBc0RlZmF1bHQpICYmIGNvbmZpZy51c2VBc0RlZmF1bHQ7XG4gICAgfSBlbHNlIGlmIChjb25maWcgaW5zdGFuY2VvZiBBc3luY1JvdXRlKSB7XG4gICAgICBoYW5kbGVyID0gbmV3IEFzeW5jUm91dGVIYW5kbGVyKGNvbmZpZy5sb2FkZXIsIGNvbmZpZy5kYXRhKTtcbiAgICAgIHVzZUFzRGVmYXVsdCA9IGlzUHJlc2VudChjb25maWcudXNlQXNEZWZhdWx0KSAmJiBjb25maWcudXNlQXNEZWZhdWx0O1xuICAgIH1cbiAgICBsZXQgcm91dGVQYXRoID0gdGhpcy5fZ2V0Um91dGVQYXRoKGNvbmZpZyk7XG4gICAgbGV0IG5ld1J1bGUgPSBuZXcgUm91dGVSdWxlKHJvdXRlUGF0aCwgaGFuZGxlcik7XG5cbiAgICB0aGlzLl9hc3NlcnROb0hhc2hDb2xsaXNpb24obmV3UnVsZS5oYXNoLCBjb25maWcucGF0aCk7XG5cbiAgICBpZiAodXNlQXNEZWZhdWx0KSB7XG4gICAgICBpZiAoaXNQcmVzZW50KHRoaXMuZGVmYXVsdFJ1bGUpKSB7XG4gICAgICAgIHRocm93IG5ldyBCYXNlRXhjZXB0aW9uKGBPbmx5IG9uZSByb3V0ZSBjYW4gYmUgZGVmYXVsdGApO1xuICAgICAgfVxuICAgICAgdGhpcy5kZWZhdWx0UnVsZSA9IG5ld1J1bGU7XG4gICAgfVxuXG4gICAgdGhpcy5ydWxlcy5wdXNoKG5ld1J1bGUpO1xuICAgIGlmIChpc1ByZXNlbnQoY29uZmlnLm5hbWUpKSB7XG4gICAgICB0aGlzLnJ1bGVzQnlOYW1lLnNldChjb25maWcubmFtZSwgbmV3UnVsZSk7XG4gICAgfVxuICAgIHJldHVybiBuZXdSdWxlLnRlcm1pbmFsO1xuICB9XG5cblxuICAvKipcbiAgICogR2l2ZW4gYSBVUkwsIHJldHVybnMgYSBsaXN0IG9mIGBSb3V0ZU1hdGNoYGVzLCB3aGljaCBhcmUgcGFydGlhbCByZWNvZ25pdGlvbnMgZm9yIHNvbWUgcm91dGUuXG4gICAqL1xuICByZWNvZ25pemUodXJsUGFyc2U6IFVybCk6IFByb21pc2U8Um91dGVNYXRjaD5bXSB7XG4gICAgdmFyIHNvbHV0aW9ucyA9IFtdO1xuXG4gICAgdGhpcy5ydWxlcy5mb3JFYWNoKChyb3V0ZVJlY29nbml6ZXI6IEFic3RyYWN0UnVsZSkgPT4ge1xuICAgICAgdmFyIHBhdGhNYXRjaCA9IHJvdXRlUmVjb2duaXplci5yZWNvZ25pemUodXJsUGFyc2UpO1xuXG4gICAgICBpZiAoaXNQcmVzZW50KHBhdGhNYXRjaCkpIHtcbiAgICAgICAgc29sdXRpb25zLnB1c2gocGF0aE1hdGNoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGhhbmRsZSBjYXNlcyB3aGVyZSB3ZSBhcmUgcm91dGluZyBqdXN0IHRvIGFuIGF1eCByb3V0ZVxuICAgIGlmIChzb2x1dGlvbnMubGVuZ3RoID09IDAgJiYgaXNQcmVzZW50KHVybFBhcnNlKSAmJiB1cmxQYXJzZS5hdXhpbGlhcnkubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIFtQcm9taXNlV3JhcHBlci5yZXNvbHZlKG5ldyBQYXRoTWF0Y2gobnVsbCwgbnVsbCwgdXJsUGFyc2UuYXV4aWxpYXJ5KSldO1xuICAgIH1cblxuICAgIHJldHVybiBzb2x1dGlvbnM7XG4gIH1cblxuICByZWNvZ25pemVBdXhpbGlhcnkodXJsUGFyc2U6IFVybCk6IFByb21pc2U8Um91dGVNYXRjaD5bXSB7XG4gICAgdmFyIHJvdXRlUmVjb2duaXplcjogUm91dGVSdWxlID0gdGhpcy5hdXhSdWxlc0J5UGF0aC5nZXQodXJsUGFyc2UucGF0aCk7XG4gICAgaWYgKGlzUHJlc2VudChyb3V0ZVJlY29nbml6ZXIpKSB7XG4gICAgICByZXR1cm4gW3JvdXRlUmVjb2duaXplci5yZWNvZ25pemUodXJsUGFyc2UpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gW1Byb21pc2VXcmFwcGVyLnJlc29sdmUobnVsbCldO1xuICB9XG5cbiAgaGFzUm91dGUobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLnJ1bGVzQnlOYW1lLmhhcyhuYW1lKTsgfVxuXG4gIGNvbXBvbmVudExvYWRlZChuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5oYXNSb3V0ZShuYW1lKSAmJiBpc1ByZXNlbnQodGhpcy5ydWxlc0J5TmFtZS5nZXQobmFtZSkuaGFuZGxlci5jb21wb25lbnRUeXBlKTtcbiAgfVxuXG4gIGxvYWRDb21wb25lbnQobmFtZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5ydWxlc0J5TmFtZS5nZXQobmFtZSkuaGFuZGxlci5yZXNvbHZlQ29tcG9uZW50VHlwZSgpO1xuICB9XG5cbiAgZ2VuZXJhdGUobmFtZTogc3RyaW5nLCBwYXJhbXM6IGFueSk6IENvbXBvbmVudEluc3RydWN0aW9uIHtcbiAgICB2YXIgcnVsZTogUm91dGVSdWxlID0gdGhpcy5ydWxlc0J5TmFtZS5nZXQobmFtZSk7XG4gICAgaWYgKGlzQmxhbmsocnVsZSkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gcnVsZS5nZW5lcmF0ZShwYXJhbXMpO1xuICB9XG5cbiAgZ2VuZXJhdGVBdXhpbGlhcnkobmFtZTogc3RyaW5nLCBwYXJhbXM6IGFueSk6IENvbXBvbmVudEluc3RydWN0aW9uIHtcbiAgICB2YXIgcnVsZTogUm91dGVSdWxlID0gdGhpcy5hdXhSdWxlc0J5TmFtZS5nZXQobmFtZSk7XG4gICAgaWYgKGlzQmxhbmsocnVsZSkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gcnVsZS5nZW5lcmF0ZShwYXJhbXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBfYXNzZXJ0Tm9IYXNoQ29sbGlzaW9uKGhhc2g6IHN0cmluZywgcGF0aCkge1xuICAgIHRoaXMucnVsZXMuZm9yRWFjaCgocnVsZSkgPT4ge1xuICAgICAgaWYgKGhhc2ggPT0gcnVsZS5oYXNoKSB7XG4gICAgICAgIHRocm93IG5ldyBCYXNlRXhjZXB0aW9uKFxuICAgICAgICAgICAgYENvbmZpZ3VyYXRpb24gJyR7cGF0aH0nIGNvbmZsaWN0cyB3aXRoIGV4aXN0aW5nIHJvdXRlICcke3J1bGUucGF0aH0nYCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRSb3V0ZVBhdGgoY29uZmlnOiBSb3V0ZURlZmluaXRpb24pOiBSb3V0ZVBhdGgge1xuICAgIGlmIChpc1ByZXNlbnQoY29uZmlnLnJlZ2V4KSkge1xuICAgICAgaWYgKGlzRnVuY3Rpb24oY29uZmlnLnNlcmlhbGl6ZXIpKSB7XG4gICAgICAgIHJldHVybiBuZXcgUmVnZXhSb3V0ZVBhdGgoY29uZmlnLnJlZ2V4LCBjb25maWcuc2VyaWFsaXplcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgQmFzZUV4Y2VwdGlvbihcbiAgICAgICAgICAgIGBSb3V0ZSBwcm92aWRlcyBhIHJlZ2V4IHByb3BlcnR5LCAnJHtjb25maWcucmVnZXh9JywgYnV0IG5vIHNlcmlhbGl6ZXIgcHJvcGVydHlgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlzUHJlc2VudChjb25maWcucGF0aCkpIHtcbiAgICAgIC8vIEF1eGlsaWFyeSByb3V0ZXMgZG8gbm90IGhhdmUgYSBzbGFzaCBhdCB0aGUgc3RhcnRcbiAgICAgIGxldCBwYXRoID0gKGNvbmZpZyBpbnN0YW5jZW9mIEF1eFJvdXRlICYmIGNvbmZpZy5wYXRoLnN0YXJ0c1dpdGgoJy8nKSkgP1xuICAgICAgICAgICAgICAgICAgICAgY29uZmlnLnBhdGguc3Vic3RyaW5nKDEpIDpcbiAgICAgICAgICAgICAgICAgICAgIGNvbmZpZy5wYXRoO1xuICAgICAgcmV0dXJuIG5ldyBQYXJhbVJvdXRlUGF0aChwYXRoKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEJhc2VFeGNlcHRpb24oJ1JvdXRlIG11c3QgcHJvdmlkZSBlaXRoZXIgYSBwYXRoIG9yIHJlZ2V4IHByb3BlcnR5Jyk7XG4gIH1cbn1cbiJdfQ==

/***/ },

/***/ 236:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var lang_1 = __webpack_require__(3);
	var instruction_1 = __webpack_require__(234);
	var AsyncRouteHandler = (function () {
	    function AsyncRouteHandler(_loader, data) {
	        if (data === void 0) { data = null; }
	        this._loader = _loader;
	        /** @internal */
	        this._resolvedComponent = null;
	        this.data = lang_1.isPresent(data) ? new instruction_1.RouteData(data) : instruction_1.BLANK_ROUTE_DATA;
	    }
	    AsyncRouteHandler.prototype.resolveComponentType = function () {
	        var _this = this;
	        if (lang_1.isPresent(this._resolvedComponent)) {
	            return this._resolvedComponent;
	        }
	        return this._resolvedComponent = this._loader().then(function (componentType) {
	            _this.componentType = componentType;
	            return componentType;
	        });
	    };
	    return AsyncRouteHandler;
	})();
	exports.AsyncRouteHandler = AsyncRouteHandler;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXN5bmNfcm91dGVfaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL3NyYy9yb3V0ZXIvcnVsZXMvcm91dGVfaGFuZGxlcnMvYXN5bmNfcm91dGVfaGFuZGxlci50cyJdLCJuYW1lcyI6WyJBc3luY1JvdXRlSGFuZGxlciIsIkFzeW5jUm91dGVIYW5kbGVyLmNvbnN0cnVjdG9yIiwiQXN5bmNSb3V0ZUhhbmRsZXIucmVzb2x2ZUNvbXBvbmVudFR5cGUiXSwibWFwcGluZ3MiOiJBQUFBLHFCQUE4QiwwQkFBMEIsQ0FBQyxDQUFBO0FBR3pELDRCQUEwQyxtQkFBbUIsQ0FBQyxDQUFBO0FBRzlEO0lBTUVBLDJCQUFvQkEsT0FBNEJBLEVBQUVBLElBQWlDQTtRQUFqQ0Msb0JBQWlDQSxHQUFqQ0EsV0FBaUNBO1FBQS9EQSxZQUFPQSxHQUFQQSxPQUFPQSxDQUFxQkE7UUFMaERBLGdCQUFnQkE7UUFDaEJBLHVCQUFrQkEsR0FBa0JBLElBQUlBLENBQUNBO1FBS3ZDQSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxnQkFBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsSUFBSUEsdUJBQVNBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLDhCQUFnQkEsQ0FBQ0E7SUFDdkVBLENBQUNBO0lBRURELGdEQUFvQkEsR0FBcEJBO1FBQUFFLGlCQVNDQTtRQVJDQSxFQUFFQSxDQUFDQSxDQUFDQSxnQkFBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN2Q0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0Esa0JBQWtCQSxDQUFDQTtRQUNqQ0EsQ0FBQ0E7UUFFREEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0Esa0JBQWtCQSxHQUFHQSxJQUFJQSxDQUFDQSxPQUFPQSxFQUFFQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFDQSxhQUFhQTtZQUNqRUEsS0FBSUEsQ0FBQ0EsYUFBYUEsR0FBR0EsYUFBYUEsQ0FBQ0E7WUFDbkNBLE1BQU1BLENBQUNBLGFBQWFBLENBQUNBO1FBQ3ZCQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNMQSxDQUFDQTtJQUNIRix3QkFBQ0E7QUFBREEsQ0FBQ0EsQUFwQkQsSUFvQkM7QUFwQlkseUJBQWlCLG9CQW9CN0IsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aXNQcmVzZW50LCBUeXBlfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuXG5pbXBvcnQge1JvdXRlSGFuZGxlcn0gZnJvbSAnLi9yb3V0ZV9oYW5kbGVyJztcbmltcG9ydCB7Um91dGVEYXRhLCBCTEFOS19ST1VURV9EQVRBfSBmcm9tICcuLi8uLi9pbnN0cnVjdGlvbic7XG5cblxuZXhwb3J0IGNsYXNzIEFzeW5jUm91dGVIYW5kbGVyIGltcGxlbWVudHMgUm91dGVIYW5kbGVyIHtcbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfcmVzb2x2ZWRDb21wb25lbnQ6IFByb21pc2U8VHlwZT4gPSBudWxsO1xuICBjb21wb25lbnRUeXBlOiBUeXBlO1xuICBwdWJsaWMgZGF0YTogUm91dGVEYXRhO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2xvYWRlcjogKCkgPT4gUHJvbWlzZTxUeXBlPiwgZGF0YToge1trZXk6IHN0cmluZ106IGFueX0gPSBudWxsKSB7XG4gICAgdGhpcy5kYXRhID0gaXNQcmVzZW50KGRhdGEpID8gbmV3IFJvdXRlRGF0YShkYXRhKSA6IEJMQU5LX1JPVVRFX0RBVEE7XG4gIH1cblxuICByZXNvbHZlQ29tcG9uZW50VHlwZSgpOiBQcm9taXNlPFR5cGU+IHtcbiAgICBpZiAoaXNQcmVzZW50KHRoaXMuX3Jlc29sdmVkQ29tcG9uZW50KSkge1xuICAgICAgcmV0dXJuIHRoaXMuX3Jlc29sdmVkQ29tcG9uZW50O1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9yZXNvbHZlZENvbXBvbmVudCA9IHRoaXMuX2xvYWRlcigpLnRoZW4oKGNvbXBvbmVudFR5cGUpID0+IHtcbiAgICAgIHRoaXMuY29tcG9uZW50VHlwZSA9IGNvbXBvbmVudFR5cGU7XG4gICAgICByZXR1cm4gY29tcG9uZW50VHlwZTtcbiAgICB9KTtcbiAgfVxufVxuIl19

/***/ },

/***/ 237:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var async_1 = __webpack_require__(50);
	var lang_1 = __webpack_require__(3);
	var instruction_1 = __webpack_require__(234);
	var SyncRouteHandler = (function () {
	    function SyncRouteHandler(componentType, data) {
	        this.componentType = componentType;
	        /** @internal */
	        this._resolvedComponent = null;
	        this._resolvedComponent = async_1.PromiseWrapper.resolve(componentType);
	        this.data = lang_1.isPresent(data) ? new instruction_1.RouteData(data) : instruction_1.BLANK_ROUTE_DATA;
	    }
	    SyncRouteHandler.prototype.resolveComponentType = function () { return this._resolvedComponent; };
	    return SyncRouteHandler;
	})();
	exports.SyncRouteHandler = SyncRouteHandler;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3luY19yb3V0ZV9oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYW5ndWxhcjIvc3JjL3JvdXRlci9ydWxlcy9yb3V0ZV9oYW5kbGVycy9zeW5jX3JvdXRlX2hhbmRsZXIudHMiXSwibmFtZXMiOlsiU3luY1JvdXRlSGFuZGxlciIsIlN5bmNSb3V0ZUhhbmRsZXIuY29uc3RydWN0b3IiLCJTeW5jUm91dGVIYW5kbGVyLnJlc29sdmVDb21wb25lbnRUeXBlIl0sIm1hcHBpbmdzIjoiQUFBQSxzQkFBNkIsMkJBQTJCLENBQUMsQ0FBQTtBQUN6RCxxQkFBOEIsMEJBQTBCLENBQUMsQ0FBQTtBQUd6RCw0QkFBMEMsbUJBQW1CLENBQUMsQ0FBQTtBQUc5RDtJQU1FQSwwQkFBbUJBLGFBQW1CQSxFQUFFQSxJQUEyQkE7UUFBaERDLGtCQUFhQSxHQUFiQSxhQUFhQSxDQUFNQTtRQUh0Q0EsZ0JBQWdCQTtRQUNoQkEsdUJBQWtCQSxHQUFpQkEsSUFBSUEsQ0FBQ0E7UUFHdENBLElBQUlBLENBQUNBLGtCQUFrQkEsR0FBR0Esc0JBQWNBLENBQUNBLE9BQU9BLENBQUNBLGFBQWFBLENBQUNBLENBQUNBO1FBQ2hFQSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxnQkFBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsSUFBSUEsdUJBQVNBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLDhCQUFnQkEsQ0FBQ0E7SUFDdkVBLENBQUNBO0lBRURELCtDQUFvQkEsR0FBcEJBLGNBQXVDRSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxrQkFBa0JBLENBQUNBLENBQUNBLENBQUNBO0lBQzFFRix1QkFBQ0E7QUFBREEsQ0FBQ0EsQUFaRCxJQVlDO0FBWlksd0JBQWdCLG1CQVk1QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQcm9taXNlV3JhcHBlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9hc3luYyc7XG5pbXBvcnQge2lzUHJlc2VudCwgVHlwZX0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcblxuaW1wb3J0IHtSb3V0ZUhhbmRsZXJ9IGZyb20gJy4vcm91dGVfaGFuZGxlcic7XG5pbXBvcnQge1JvdXRlRGF0YSwgQkxBTktfUk9VVEVfREFUQX0gZnJvbSAnLi4vLi4vaW5zdHJ1Y3Rpb24nO1xuXG5cbmV4cG9ydCBjbGFzcyBTeW5jUm91dGVIYW5kbGVyIGltcGxlbWVudHMgUm91dGVIYW5kbGVyIHtcbiAgcHVibGljIGRhdGE6IFJvdXRlRGF0YTtcblxuICAvKiogQGludGVybmFsICovXG4gIF9yZXNvbHZlZENvbXBvbmVudDogUHJvbWlzZTxhbnk+ID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgY29tcG9uZW50VHlwZTogVHlwZSwgZGF0YT86IHtba2V5OiBzdHJpbmddOiBhbnl9KSB7XG4gICAgdGhpcy5fcmVzb2x2ZWRDb21wb25lbnQgPSBQcm9taXNlV3JhcHBlci5yZXNvbHZlKGNvbXBvbmVudFR5cGUpO1xuICAgIHRoaXMuZGF0YSA9IGlzUHJlc2VudChkYXRhKSA/IG5ldyBSb3V0ZURhdGEoZGF0YSkgOiBCTEFOS19ST1VURV9EQVRBO1xuICB9XG5cbiAgcmVzb2x2ZUNvbXBvbmVudFR5cGUoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIHRoaXMuX3Jlc29sdmVkQ29tcG9uZW50OyB9XG59XG4iXX0=

/***/ },

/***/ 238:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var lang_1 = __webpack_require__(3);
	var exceptions_1 = __webpack_require__(13);
	var collection_1 = __webpack_require__(11);
	var utils_1 = __webpack_require__(239);
	var url_parser_1 = __webpack_require__(233);
	var route_path_1 = __webpack_require__(240);
	/**
	 * Identified by a `...` URL segment. This indicates that the
	 * Route will continue to be matched by child `Router`s.
	 */
	var ContinuationPathSegment = (function () {
	    function ContinuationPathSegment() {
	        this.name = '';
	        this.specificity = '';
	        this.hash = '...';
	    }
	    ContinuationPathSegment.prototype.generate = function (params) { return ''; };
	    ContinuationPathSegment.prototype.match = function (path) { return true; };
	    return ContinuationPathSegment;
	})();
	/**
	 * Identified by a string not starting with a `:` or `*`.
	 * Only matches the URL segments that equal the segment path
	 */
	var StaticPathSegment = (function () {
	    function StaticPathSegment(path) {
	        this.path = path;
	        this.name = '';
	        this.specificity = '2';
	        this.hash = path;
	    }
	    StaticPathSegment.prototype.match = function (path) { return path == this.path; };
	    StaticPathSegment.prototype.generate = function (params) { return this.path; };
	    return StaticPathSegment;
	})();
	/**
	 * Identified by a string starting with `:`. Indicates a segment
	 * that can contain a value that will be extracted and provided to
	 * a matching `Instruction`.
	 */
	var DynamicPathSegment = (function () {
	    function DynamicPathSegment(name) {
	        this.name = name;
	        this.specificity = '1';
	        this.hash = ':';
	    }
	    DynamicPathSegment.prototype.match = function (path) { return path.length > 0; };
	    DynamicPathSegment.prototype.generate = function (params) {
	        if (!collection_1.StringMapWrapper.contains(params.map, this.name)) {
	            throw new exceptions_1.BaseException("Route generator for '" + this.name + "' was not included in parameters passed.");
	        }
	        return encodeDynamicSegment(utils_1.normalizeString(params.get(this.name)));
	    };
	    DynamicPathSegment.paramMatcher = /^:([^\/]+)$/g;
	    return DynamicPathSegment;
	})();
	/**
	 * Identified by a string starting with `*` Indicates that all the following
	 * segments match this route and that the value of these segments should
	 * be provided to a matching `Instruction`.
	 */
	var StarPathSegment = (function () {
	    function StarPathSegment(name) {
	        this.name = name;
	        this.specificity = '0';
	        this.hash = '*';
	    }
	    StarPathSegment.prototype.match = function (path) { return true; };
	    StarPathSegment.prototype.generate = function (params) { return utils_1.normalizeString(params.get(this.name)); };
	    StarPathSegment.wildcardMatcher = /^\*([^\/]+)$/g;
	    return StarPathSegment;
	})();
	/**
	 * Parses a URL string using a given matcher DSL, and generates URLs from param maps
	 */
	var ParamRoutePath = (function () {
	    /**
	     * Takes a string representing the matcher DSL
	     */
	    function ParamRoutePath(routePath) {
	        this.routePath = routePath;
	        this.terminal = true;
	        this._assertValidPath(routePath);
	        this._parsePathString(routePath);
	        this.specificity = this._calculateSpecificity();
	        this.hash = this._calculateHash();
	        var lastSegment = this._segments[this._segments.length - 1];
	        this.terminal = !(lastSegment instanceof ContinuationPathSegment);
	    }
	    ParamRoutePath.prototype.matchUrl = function (url) {
	        var nextUrlSegment = url;
	        var currentUrlSegment;
	        var positionalParams = {};
	        var captured = [];
	        for (var i = 0; i < this._segments.length; i += 1) {
	            var pathSegment = this._segments[i];
	            currentUrlSegment = nextUrlSegment;
	            if (pathSegment instanceof ContinuationPathSegment) {
	                break;
	            }
	            if (lang_1.isPresent(currentUrlSegment)) {
	                // the star segment consumes all of the remaining URL, including matrix params
	                if (pathSegment instanceof StarPathSegment) {
	                    positionalParams[pathSegment.name] = currentUrlSegment.toString();
	                    captured.push(currentUrlSegment.toString());
	                    nextUrlSegment = null;
	                    break;
	                }
	                captured.push(currentUrlSegment.path);
	                if (pathSegment instanceof DynamicPathSegment) {
	                    positionalParams[pathSegment.name] = decodeDynamicSegment(currentUrlSegment.path);
	                }
	                else if (!pathSegment.match(currentUrlSegment.path)) {
	                    return null;
	                }
	                nextUrlSegment = currentUrlSegment.child;
	            }
	            else if (!pathSegment.match('')) {
	                return null;
	            }
	        }
	        if (this.terminal && lang_1.isPresent(nextUrlSegment)) {
	            return null;
	        }
	        var urlPath = captured.join('/');
	        var auxiliary = [];
	        var urlParams = [];
	        var allParams = positionalParams;
	        if (lang_1.isPresent(currentUrlSegment)) {
	            // If this is the root component, read query params. Otherwise, read matrix params.
	            var paramsSegment = url instanceof url_parser_1.RootUrl ? url : currentUrlSegment;
	            if (lang_1.isPresent(paramsSegment.params)) {
	                allParams = collection_1.StringMapWrapper.merge(paramsSegment.params, positionalParams);
	                urlParams = url_parser_1.convertUrlParamsToArray(paramsSegment.params);
	            }
	            else {
	                allParams = positionalParams;
	            }
	            auxiliary = currentUrlSegment.auxiliary;
	        }
	        return new route_path_1.MatchedUrl(urlPath, urlParams, allParams, auxiliary, nextUrlSegment);
	    };
	    ParamRoutePath.prototype.generateUrl = function (params) {
	        var paramTokens = new utils_1.TouchMap(params);
	        var path = [];
	        for (var i = 0; i < this._segments.length; i++) {
	            var segment = this._segments[i];
	            if (!(segment instanceof ContinuationPathSegment)) {
	                path.push(segment.generate(paramTokens));
	            }
	        }
	        var urlPath = path.join('/');
	        var nonPositionalParams = paramTokens.getUnused();
	        var urlParams = nonPositionalParams;
	        return new route_path_1.GeneratedUrl(urlPath, urlParams);
	    };
	    ParamRoutePath.prototype.toString = function () { return this.routePath; };
	    ParamRoutePath.prototype._parsePathString = function (routePath) {
	        // normalize route as not starting with a "/". Recognition will
	        // also normalize.
	        if (routePath.startsWith("/")) {
	            routePath = routePath.substring(1);
	        }
	        var segmentStrings = routePath.split('/');
	        this._segments = [];
	        var limit = segmentStrings.length - 1;
	        for (var i = 0; i <= limit; i++) {
	            var segment = segmentStrings[i], match;
	            if (lang_1.isPresent(match = lang_1.RegExpWrapper.firstMatch(DynamicPathSegment.paramMatcher, segment))) {
	                this._segments.push(new DynamicPathSegment(match[1]));
	            }
	            else if (lang_1.isPresent(match = lang_1.RegExpWrapper.firstMatch(StarPathSegment.wildcardMatcher, segment))) {
	                this._segments.push(new StarPathSegment(match[1]));
	            }
	            else if (segment == '...') {
	                if (i < limit) {
	                    throw new exceptions_1.BaseException("Unexpected \"...\" before the end of the path for \"" + routePath + "\".");
	                }
	                this._segments.push(new ContinuationPathSegment());
	            }
	            else {
	                this._segments.push(new StaticPathSegment(segment));
	            }
	        }
	    };
	    ParamRoutePath.prototype._calculateSpecificity = function () {
	        // The "specificity" of a path is used to determine which route is used when multiple routes
	        // match
	        // a URL. Static segments (like "/foo") are the most specific, followed by dynamic segments
	        // (like
	        // "/:id"). Star segments add no specificity. Segments at the start of the path are more
	        // specific
	        // than proceeding ones.
	        //
	        // The code below uses place values to combine the different types of segments into a single
	        // string that we can sort later. Each static segment is marked as a specificity of "2," each
	        // dynamic segment is worth "1" specificity, and stars are worth "0" specificity.
	        var i, length = this._segments.length, specificity;
	        if (length == 0) {
	            // a single slash (or "empty segment" is as specific as a static segment
	            specificity += '2';
	        }
	        else {
	            specificity = '';
	            for (i = 0; i < length; i++) {
	                specificity += this._segments[i].specificity;
	            }
	        }
	        return specificity;
	    };
	    ParamRoutePath.prototype._calculateHash = function () {
	        // this function is used to determine whether a route config path like `/foo/:id` collides with
	        // `/foo/:name`
	        var i, length = this._segments.length;
	        var hashParts = [];
	        for (i = 0; i < length; i++) {
	            hashParts.push(this._segments[i].hash);
	        }
	        return hashParts.join('/');
	    };
	    ParamRoutePath.prototype._assertValidPath = function (path) {
	        if (lang_1.StringWrapper.contains(path, '#')) {
	            throw new exceptions_1.BaseException("Path \"" + path + "\" should not include \"#\". Use \"HashLocationStrategy\" instead.");
	        }
	        var illegalCharacter = lang_1.RegExpWrapper.firstMatch(ParamRoutePath.RESERVED_CHARS, path);
	        if (lang_1.isPresent(illegalCharacter)) {
	            throw new exceptions_1.BaseException("Path \"" + path + "\" contains \"" + illegalCharacter[0] + "\" which is not allowed in a route config.");
	        }
	    };
	    ParamRoutePath.RESERVED_CHARS = lang_1.RegExpWrapper.create('//|\\(|\\)|;|\\?|=');
	    return ParamRoutePath;
	})();
	exports.ParamRoutePath = ParamRoutePath;
	var REGEXP_PERCENT = /%/g;
	var REGEXP_SLASH = /\//g;
	var REGEXP_OPEN_PARENT = /\(/g;
	var REGEXP_CLOSE_PARENT = /\)/g;
	var REGEXP_SEMICOLON = /;/g;
	function encodeDynamicSegment(value) {
	    if (lang_1.isBlank(value)) {
	        return null;
	    }
	    value = lang_1.StringWrapper.replaceAll(value, REGEXP_PERCENT, '%25');
	    value = lang_1.StringWrapper.replaceAll(value, REGEXP_SLASH, '%2F');
	    value = lang_1.StringWrapper.replaceAll(value, REGEXP_OPEN_PARENT, '%28');
	    value = lang_1.StringWrapper.replaceAll(value, REGEXP_CLOSE_PARENT, '%29');
	    value = lang_1.StringWrapper.replaceAll(value, REGEXP_SEMICOLON, '%3B');
	    return value;
	}
	var REGEXP_ENC_SEMICOLON = /%3B/ig;
	var REGEXP_ENC_CLOSE_PARENT = /%29/ig;
	var REGEXP_ENC_OPEN_PARENT = /%28/ig;
	var REGEXP_ENC_SLASH = /%2F/ig;
	var REGEXP_ENC_PERCENT = /%25/ig;
	function decodeDynamicSegment(value) {
	    if (lang_1.isBlank(value)) {
	        return null;
	    }
	    value = lang_1.StringWrapper.replaceAll(value, REGEXP_ENC_SEMICOLON, ';');
	    value = lang_1.StringWrapper.replaceAll(value, REGEXP_ENC_CLOSE_PARENT, ')');
	    value = lang_1.StringWrapper.replaceAll(value, REGEXP_ENC_OPEN_PARENT, '(');
	    value = lang_1.StringWrapper.replaceAll(value, REGEXP_ENC_SLASH, '/');
	    value = lang_1.StringWrapper.replaceAll(value, REGEXP_ENC_PERCENT, '%');
	    return value;
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW1fcm91dGVfcGF0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL3NyYy9yb3V0ZXIvcnVsZXMvcm91dGVfcGF0aHMvcGFyYW1fcm91dGVfcGF0aC50cyJdLCJuYW1lcyI6WyJDb250aW51YXRpb25QYXRoU2VnbWVudCIsIkNvbnRpbnVhdGlvblBhdGhTZWdtZW50LmNvbnN0cnVjdG9yIiwiQ29udGludWF0aW9uUGF0aFNlZ21lbnQuZ2VuZXJhdGUiLCJDb250aW51YXRpb25QYXRoU2VnbWVudC5tYXRjaCIsIlN0YXRpY1BhdGhTZWdtZW50IiwiU3RhdGljUGF0aFNlZ21lbnQuY29uc3RydWN0b3IiLCJTdGF0aWNQYXRoU2VnbWVudC5tYXRjaCIsIlN0YXRpY1BhdGhTZWdtZW50LmdlbmVyYXRlIiwiRHluYW1pY1BhdGhTZWdtZW50IiwiRHluYW1pY1BhdGhTZWdtZW50LmNvbnN0cnVjdG9yIiwiRHluYW1pY1BhdGhTZWdtZW50Lm1hdGNoIiwiRHluYW1pY1BhdGhTZWdtZW50LmdlbmVyYXRlIiwiU3RhclBhdGhTZWdtZW50IiwiU3RhclBhdGhTZWdtZW50LmNvbnN0cnVjdG9yIiwiU3RhclBhdGhTZWdtZW50Lm1hdGNoIiwiU3RhclBhdGhTZWdtZW50LmdlbmVyYXRlIiwiUGFyYW1Sb3V0ZVBhdGgiLCJQYXJhbVJvdXRlUGF0aC5jb25zdHJ1Y3RvciIsIlBhcmFtUm91dGVQYXRoLm1hdGNoVXJsIiwiUGFyYW1Sb3V0ZVBhdGguZ2VuZXJhdGVVcmwiLCJQYXJhbVJvdXRlUGF0aC50b1N0cmluZyIsIlBhcmFtUm91dGVQYXRoLl9wYXJzZVBhdGhTdHJpbmciLCJQYXJhbVJvdXRlUGF0aC5fY2FsY3VsYXRlU3BlY2lmaWNpdHkiLCJQYXJhbVJvdXRlUGF0aC5fY2FsY3VsYXRlSGFzaCIsIlBhcmFtUm91dGVQYXRoLl9hc3NlcnRWYWxpZFBhdGgiLCJlbmNvZGVEeW5hbWljU2VnbWVudCIsImRlY29kZUR5bmFtaWNTZWdtZW50Il0s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QUFJLHNCQUFzQixHQUFHLE9BQU8sQ0FBQztBQUNyQyxJQUFJLGdCQUFnQixHQUFHLE9BQU8sQ0FBQztBQUMvQixJQUFJLGtCQUFrQixHQUFHLE9BQU8sQ0FBQztBQUVqQyw4QkFBOEIsS0FBYTtJQUN6Q0MsRUFBRUEsQ0FBQ0EsQ0FBQ0EsY0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDbkJBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBO0lBQ2RBLENBQUNBO0lBRURBLEtBQUtBLEdBQUdBLG9CQUFhQSxDQUFDQSxVQUFVQSxDQUFDQSxLQUFLQSxFQUFFQSxvQkFBb0JBLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBO0lBQ25FQSxLQUFLQSxHQUFHQSxvQkFBYUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsS0FBS0EsRUFBRUEsdUJBQXVCQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQTtJQUN0RUEsS0FBS0EsR0FBR0Esb0JBQWFBLENBQUNBLFVBQVVBLENBQUNBLEtBQUtBLEVBQUVBLHNCQUFzQkEsRUFBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7SUFDckVBLEtBQUtBLEdBQUdBLG9CQUFhQSxDQUFDQSxVQUFVQSxDQUFDQSxLQUFLQSxFQUFFQSxnQkFBZ0JBLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBO0lBQy9EQSxLQUFLQSxHQUFHQSxvQkFBYUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsS0FBS0EsRUFBRUEsa0JBQWtCQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQTtJQUVqRUEsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7QUFDZkEsQ0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JlZ0V4cFdyYXBwZXIsIFN0cmluZ1dyYXBwZXIsIGlzUHJlc2VudCwgaXNCbGFua30gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbmltcG9ydCB7QmFzZUV4Y2VwdGlvbn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9leGNlcHRpb25zJztcbmltcG9ydCB7U3RyaW5nTWFwV3JhcHBlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9jb2xsZWN0aW9uJztcblxuaW1wb3J0IHtUb3VjaE1hcCwgbm9ybWFsaXplU3RyaW5nfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQge1VybCwgUm9vdFVybCwgY29udmVydFVybFBhcmFtc1RvQXJyYXl9IGZyb20gJy4uLy4uL3VybF9wYXJzZXInO1xuaW1wb3J0IHtSb3V0ZVBhdGgsIEdlbmVyYXRlZFVybCwgTWF0Y2hlZFVybH0gZnJvbSAnLi9yb3V0ZV9wYXRoJztcblxuXG5cbi8qKlxuICogYFBhcmFtUm91dGVQYXRoYHMgYXJlIG1hZGUgdXAgb2YgYFBhdGhTZWdtZW50YHMsIGVhY2ggb2Ygd2hpY2ggY2FuXG4gKiBtYXRjaCBhIHNlZ21lbnQgb2YgYSBVUkwuIERpZmZlcmVudCBraW5kIG9mIGBQYXRoU2VnbWVudGBzIG1hdGNoXG4gKiBVUkwgc2VnbWVudHMgaW4gZGlmZmVyZW50IHdheXMuLi5cbiAqL1xuaW50ZXJmYWNlIFBhdGhTZWdtZW50IHtcbiAgbmFtZTogc3RyaW5nO1xuICBnZW5lcmF0ZShwYXJhbXM6IFRvdWNoTWFwKTogc3RyaW5nO1xuICBtYXRjaChwYXRoOiBzdHJpbmcpOiBib29sZWFuO1xuICBzcGVjaWZpY2l0eTogc3RyaW5nO1xuICBoYXNoOiBzdHJpbmc7XG59XG5cbi8qKlxuICogSWRlbnRpZmllZCBieSBhIGAuLi5gIFVSTCBzZWdtZW50LiBUaGlzIGluZGljYXRlcyB0aGF0IHRoZVxuICogUm91dGUgd2lsbCBjb250aW51ZSB0byBiZSBtYXRjaGVkIGJ5IGNoaWxkIGBSb3V0ZXJgcy5cbiAqL1xuY2xhc3MgQ29udGludWF0aW9uUGF0aFNlZ21lbnQgaW1wbGVtZW50cyBQYXRoU2VnbWVudCB7XG4gIG5hbWU6IHN0cmluZyA9ICcnO1xuICBzcGVjaWZpY2l0eSA9ICcnO1xuICBoYXNoID0gJy4uLic7XG4gIGdlbmVyYXRlKHBhcmFtczogVG91Y2hNYXApOiBzdHJpbmcgeyByZXR1cm4gJyc7IH1cbiAgbWF0Y2gocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7IHJldHVybiB0cnVlOyB9XG59XG5cbi8qKlxuICogSWRlbnRpZmllZCBieSBhIHN0cmluZyBub3Qgc3RhcnRpbmcgd2l0aCBhIGA6YCBvciBgKmAuXG4gKiBPbmx5IG1hdGNoZXMgdGhlIFVSTCBzZWdtZW50cyB0aGF0IGVxdWFsIHRoZSBzZWdtZW50IHBhdGhcbiAqL1xuY2xhc3MgU3RhdGljUGF0aFNlZ21lbnQgaW1wbGVtZW50cyBQYXRoU2VnbWVudCB7XG4gIG5hbWU6IHN0cmluZyA9ICcnO1xuICBzcGVjaWZpY2l0eSA9ICcyJztcbiAgaGFzaDogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF0aDogc3RyaW5nKSB7IHRoaXMuaGFzaCA9IHBhdGg7IH1cbiAgbWF0Y2gocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7IHJldHVybiBwYXRoID09IHRoaXMucGF0aDsgfVxuICBnZW5lcmF0ZShwYXJhbXM6IFRvdWNoTWFwKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMucGF0aDsgfVxufVxuXG4vKipcbiAqIElkZW50aWZpZWQgYnkgYSBzdHJpbmcgc3RhcnRpbmcgd2l0aCBgOmAuIEluZGljYXRlcyBhIHNlZ21lbnRcbiAqIHRoYXQgY2FuIGNvbnRhaW4gYSB2YWx1ZSB0aGF0IHdpbGwgYmUgZXh0cmFjdGVkIGFuZCBwcm92aWRlZCB0b1xuICogYSBtYXRjaGluZyBgSW5zdHJ1Y3Rpb25gLlxuICovXG5jbGFzcyBEeW5hbWljUGF0aFNlZ21lbnQgaW1wbGVtZW50cyBQYXRoU2VnbWVudCB7XG4gIHN0YXRpYyBwYXJhbU1hdGNoZXIgPSAvXjooW15cXC9dKykkL2c7XG4gIHNwZWNpZmljaXR5ID0gJzEnO1xuICBoYXNoID0gJzonO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nKSB7fVxuICBtYXRjaChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHsgcmV0dXJuIHBhdGgubGVuZ3RoID4gMDsgfVxuICBnZW5lcmF0ZShwYXJhbXM6IFRvdWNoTWFwKTogc3RyaW5nIHtcbiAgICBpZiAoIVN0cmluZ01hcFdyYXBwZXIuY29udGFpbnMocGFyYW1zLm1hcCwgdGhpcy5uYW1lKSkge1xuICAgICAgdGhyb3cgbmV3IEJhc2VFeGNlcHRpb24oXG4gICAgICAgICAgYFJvdXRlIGdlbmVyYXRvciBmb3IgJyR7dGhpcy5uYW1lfScgd2FzIG5vdCBpbmNsdWRlZCBpbiBwYXJhbWV0ZXJzIHBhc3NlZC5gKTtcbiAgICB9XG4gICAgcmV0dXJuIGVuY29kZUR5bmFtaWNTZWdtZW50KG5vcm1hbGl6ZVN0cmluZyhwYXJhbXMuZ2V0KHRoaXMubmFtZSkpKTtcbiAgfVxufVxuXG4vKipcbiAqIElkZW50aWZpZWQgYnkgYSBzdHJpbmcgc3RhcnRpbmcgd2l0aCBgKmAgSW5kaWNhdGVzIHRoYXQgYWxsIHRoZSBmb2xsb3dpbmdcbiAqIHNlZ21lbnRzIG1hdGNoIHRoaXMgcm91dGUgYW5kIHRoYXQgdGhlIHZhbHVlIG9mIHRoZXNlIHNlZ21lbnRzIHNob3VsZFxuICogYmUgcHJvdmlkZWQgdG8gYSBtYXRjaGluZyBgSW5zdHJ1Y3Rpb25gLlxuICovXG5jbGFzcyBTdGFyUGF0aFNlZ21lbnQgaW1wbGVtZW50cyBQYXRoU2VnbWVudCB7XG4gIHN0YXRpYyB3aWxkY2FyZE1hdGNoZXIgPSAvXlxcKihbXlxcL10rKSQvZztcbiAgc3BlY2lmaWNpdHkgPSAnMCc7XG4gIGhhc2ggPSAnKic7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcpIHt9XG4gIG1hdGNoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4geyByZXR1cm4gdHJ1ZTsgfVxuICBnZW5lcmF0ZShwYXJhbXM6IFRvdWNoTWFwKTogc3RyaW5nIHsgcmV0dXJuIG5vcm1hbGl6ZVN0cmluZyhwYXJhbXMuZ2V0KHRoaXMubmFtZSkpOyB9XG59XG5cbi8qKlxuICogUGFyc2VzIGEgVVJMIHN0cmluZyB1c2luZyBhIGdpdmVuIG1hdGNoZXIgRFNMLCBhbmQgZ2VuZXJhdGVzIFVSTHMgZnJvbSBwYXJhbSBtYXBzXG4gKi9cbmV4cG9ydCBjbGFzcyBQYXJhbVJvdXRlUGF0aCBpbXBsZW1lbnRzIFJvdXRlUGF0aCB7XG4gIHNwZWNpZmljaXR5OiBzdHJpbmc7XG4gIHRlcm1pbmFsOiBib29sZWFuID0gdHJ1ZTtcbiAgaGFzaDogc3RyaW5nO1xuXG4gIHByaXZhdGUgX3NlZ21lbnRzOiBQYXRoU2VnbWVudFtdO1xuXG4gIC8qKlxuICAgKiBUYWtlcyBhIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIG1hdGNoZXIgRFNMXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcm91dGVQYXRoOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hc3NlcnRWYWxpZFBhdGgocm91dGVQYXRoKTtcblxuICAgIHRoaXMuX3BhcnNlUGF0aFN0cmluZyhyb3V0ZVBhdGgpO1xuICAgIHRoaXMuc3BlY2lmaWNpdHkgPSB0aGlzLl9jYWxjdWxhdGVTcGVjaWZpY2l0eSgpO1xuICAgIHRoaXMuaGFzaCA9IHRoaXMuX2NhbGN1bGF0ZUhhc2goKTtcblxuICAgIHZhciBsYXN0U2VnbWVudCA9IHRoaXMuX3NlZ21lbnRzW3RoaXMuX3NlZ21lbnRzLmxlbmd0aCAtIDFdO1xuICAgIHRoaXMudGVybWluYWwgPSAhKGxhc3RTZWdtZW50IGluc3RhbmNlb2YgQ29udGludWF0aW9uUGF0aFNlZ21lbnQpO1xuICB9XG5cbiAgbWF0Y2hVcmwodXJsOiBVcmwpOiBNYXRjaGVkVXJsIHtcbiAgICB2YXIgbmV4dFVybFNlZ21lbnQgPSB1cmw7XG4gICAgdmFyIGN1cnJlbnRVcmxTZWdtZW50OiBVcmw7XG4gICAgdmFyIHBvc2l0aW9uYWxQYXJhbXMgPSB7fTtcbiAgICB2YXIgY2FwdHVyZWQ6IHN0cmluZ1tdID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX3NlZ21lbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICB2YXIgcGF0aFNlZ21lbnQgPSB0aGlzLl9zZWdtZW50c1tpXTtcblxuICAgICAgY3VycmVudFVybFNlZ21lbnQgPSBuZXh0VXJsU2VnbWVudDtcbiAgICAgIGlmIChwYXRoU2VnbWVudCBpbnN0YW5jZW9mIENvbnRpbnVhdGlvblBhdGhTZWdtZW50KSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNQcmVzZW50KGN1cnJlbnRVcmxTZWdtZW50KSkge1xuICAgICAgICAvLyB0aGUgc3RhciBzZWdtZW50IGNvbnN1bWVzIGFsbCBvZiB0aGUgcmVtYWluaW5nIFVSTCwgaW5jbHVkaW5nIG1hdHJpeCBwYXJhbXNcbiAgICAgICAgaWYgKHBhdGhTZWdtZW50IGluc3RhbmNlb2YgU3RhclBhdGhTZWdtZW50KSB7XG4gICAgICAgICAgcG9zaXRpb25hbFBhcmFtc1twYXRoU2VnbWVudC5uYW1lXSA9IGN1cnJlbnRVcmxTZWdtZW50LnRvU3RyaW5nKCk7XG4gICAgICAgICAgY2FwdHVyZWQucHVzaChjdXJyZW50VXJsU2VnbWVudC50b1N0cmluZygpKTtcbiAgICAgICAgICBuZXh0VXJsU2VnbWVudCA9IG51bGw7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXB0dXJlZC5wdXNoKGN1cnJlbnRVcmxTZWdtZW50LnBhdGgpO1xuXG4gICAgICAgIGlmIChwYXRoU2VnbWVudCBpbnN0YW5jZW9mIER5bmFtaWNQYXRoU2VnbWVudCkge1xuICAgICAgICAgIHBvc2l0aW9uYWxQYXJhbXNbcGF0aFNlZ21lbnQubmFtZV0gPSBkZWNvZGVEeW5hbWljU2VnbWVudChjdXJyZW50VXJsU2VnbWVudC5wYXRoKTtcbiAgICAgICAgfSBlbHNlIGlmICghcGF0aFNlZ21lbnQubWF0Y2goY3VycmVudFVybFNlZ21lbnQucGF0aCkpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIG5leHRVcmxTZWdtZW50ID0gY3VycmVudFVybFNlZ21lbnQuY2hpbGQ7XG4gICAgICB9IGVsc2UgaWYgKCFwYXRoU2VnbWVudC5tYXRjaCgnJykpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudGVybWluYWwgJiYgaXNQcmVzZW50KG5leHRVcmxTZWdtZW50KSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIHVybFBhdGggPSBjYXB0dXJlZC5qb2luKCcvJyk7XG5cbiAgICB2YXIgYXV4aWxpYXJ5ID0gW107XG4gICAgdmFyIHVybFBhcmFtcyA9IFtdO1xuICAgIHZhciBhbGxQYXJhbXMgPSBwb3NpdGlvbmFsUGFyYW1zO1xuICAgIGlmIChpc1ByZXNlbnQoY3VycmVudFVybFNlZ21lbnQpKSB7XG4gICAgICAvLyBJZiB0aGlzIGlzIHRoZSByb290IGNvbXBvbmVudCwgcmVhZCBxdWVyeSBwYXJhbXMuIE90aGVyd2lzZSwgcmVhZCBtYXRyaXggcGFyYW1zLlxuICAgICAgdmFyIHBhcmFtc1NlZ21lbnQgPSB1cmwgaW5zdGFuY2VvZiBSb290VXJsID8gdXJsIDogY3VycmVudFVybFNlZ21lbnQ7XG5cbiAgICAgIGlmIChpc1ByZXNlbnQocGFyYW1zU2VnbWVudC5wYXJhbXMpKSB7XG4gICAgICAgIGFsbFBhcmFtcyA9IFN0cmluZ01hcFdyYXBwZXIubWVyZ2UocGFyYW1zU2VnbWVudC5wYXJhbXMsIHBvc2l0aW9uYWxQYXJhbXMpO1xuICAgICAgICB1cmxQYXJhbXMgPSBjb252ZXJ0VXJsUGFyYW1zVG9BcnJheShwYXJhbXNTZWdtZW50LnBhcmFtcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGxQYXJhbXMgPSBwb3NpdGlvbmFsUGFyYW1zO1xuICAgICAgfVxuICAgICAgYXV4aWxpYXJ5ID0gY3VycmVudFVybFNlZ21lbnQuYXV4aWxpYXJ5O1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgTWF0Y2hlZFVybCh1cmxQYXRoLCB1cmxQYXJhbXMsIGFsbFBhcmFtcywgYXV4aWxpYXJ5LCBuZXh0VXJsU2VnbWVudCk7XG4gIH1cblxuXG4gIGdlbmVyYXRlVXJsKHBhcmFtczoge1trZXk6IHN0cmluZ106IGFueX0pOiBHZW5lcmF0ZWRVcmwge1xuICAgIHZhciBwYXJhbVRva2VucyA9IG5ldyBUb3VjaE1hcChwYXJhbXMpO1xuXG4gICAgdmFyIHBhdGggPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fc2VnbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBzZWdtZW50ID0gdGhpcy5fc2VnbWVudHNbaV07XG4gICAgICBpZiAoIShzZWdtZW50IGluc3RhbmNlb2YgQ29udGludWF0aW9uUGF0aFNlZ21lbnQpKSB7XG4gICAgICAgIHBhdGgucHVzaChzZWdtZW50LmdlbmVyYXRlKHBhcmFtVG9rZW5zKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciB1cmxQYXRoID0gcGF0aC5qb2luKCcvJyk7XG5cbiAgICB2YXIgbm9uUG9zaXRpb25hbFBhcmFtcyA9IHBhcmFtVG9rZW5zLmdldFVudXNlZCgpO1xuICAgIHZhciB1cmxQYXJhbXMgPSBub25Qb3NpdGlvbmFsUGFyYW1zO1xuXG4gICAgcmV0dXJuIG5ldyBHZW5lcmF0ZWRVcmwodXJsUGF0aCwgdXJsUGFyYW1zKTtcbiAgfVxuXG5cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMucm91dGVQYXRoOyB9XG5cbiAgcHJpdmF0ZSBfcGFyc2VQYXRoU3RyaW5nKHJvdXRlUGF0aDogc3RyaW5nKSB7XG4gICAgLy8gbm9ybWFsaXplIHJvdXRlIGFzIG5vdCBzdGFydGluZyB3aXRoIGEgXCIvXCIuIFJlY29nbml0aW9uIHdpbGxcbiAgICAvLyBhbHNvIG5vcm1hbGl6ZS5cbiAgICBpZiAocm91dGVQYXRoLnN0YXJ0c1dpdGgoXCIvXCIpKSB7XG4gICAgICByb3V0ZVBhdGggPSByb3V0ZVBhdGguc3Vic3RyaW5nKDEpO1xuICAgIH1cblxuICAgIHZhciBzZWdtZW50U3RyaW5ncyA9IHJvdXRlUGF0aC5zcGxpdCgnLycpO1xuICAgIHRoaXMuX3NlZ21lbnRzID0gW107XG5cbiAgICB2YXIgbGltaXQgPSBzZWdtZW50U3RyaW5ncy5sZW5ndGggLSAxO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IGxpbWl0OyBpKyspIHtcbiAgICAgIHZhciBzZWdtZW50ID0gc2VnbWVudFN0cmluZ3NbaV0sIG1hdGNoO1xuXG4gICAgICBpZiAoaXNQcmVzZW50KG1hdGNoID0gUmVnRXhwV3JhcHBlci5maXJzdE1hdGNoKER5bmFtaWNQYXRoU2VnbWVudC5wYXJhbU1hdGNoZXIsIHNlZ21lbnQpKSkge1xuICAgICAgICB0aGlzLl9zZWdtZW50cy5wdXNoKG5ldyBEeW5hbWljUGF0aFNlZ21lbnQobWF0Y2hbMV0pKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNQcmVzZW50KFxuICAgICAgICAgICAgICAgICAgICAgbWF0Y2ggPSBSZWdFeHBXcmFwcGVyLmZpcnN0TWF0Y2goU3RhclBhdGhTZWdtZW50LndpbGRjYXJkTWF0Y2hlciwgc2VnbWVudCkpKSB7XG4gICAgICAgIHRoaXMuX3NlZ21lbnRzLnB1c2gobmV3IFN0YXJQYXRoU2VnbWVudChtYXRjaFsxXSkpO1xuICAgICAgfSBlbHNlIGlmIChzZWdtZW50ID09ICcuLi4nKSB7XG4gICAgICAgIGlmIChpIDwgbGltaXQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgQmFzZUV4Y2VwdGlvbihcbiAgICAgICAgICAgICAgYFVuZXhwZWN0ZWQgXCIuLi5cIiBiZWZvcmUgdGhlIGVuZCBvZiB0aGUgcGF0aCBmb3IgXCIke3JvdXRlUGF0aH1cIi5gKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zZWdtZW50cy5wdXNoKG5ldyBDb250aW51YXRpb25QYXRoU2VnbWVudCgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3NlZ21lbnRzLnB1c2gobmV3IFN0YXRpY1BhdGhTZWdtZW50KHNlZ21lbnQpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jYWxjdWxhdGVTcGVjaWZpY2l0eSgpOiBzdHJpbmcge1xuICAgIC8vIFRoZSBcInNwZWNpZmljaXR5XCIgb2YgYSBwYXRoIGlzIHVzZWQgdG8gZGV0ZXJtaW5lIHdoaWNoIHJvdXRlIGlzIHVzZWQgd2hlbiBtdWx0aXBsZSByb3V0ZXNcbiAgICAvLyBtYXRjaFxuICAgIC8vIGEgVVJMLiBTdGF0aWMgc2VnbWVudHMgKGxpa2UgXCIvZm9vXCIpIGFyZSB0aGUgbW9zdCBzcGVjaWZpYywgZm9sbG93ZWQgYnkgZHluYW1pYyBzZWdtZW50c1xuICAgIC8vIChsaWtlXG4gICAgLy8gXCIvOmlkXCIpLiBTdGFyIHNlZ21lbnRzIGFkZCBubyBzcGVjaWZpY2l0eS4gU2VnbWVudHMgYXQgdGhlIHN0YXJ0IG9mIHRoZSBwYXRoIGFyZSBtb3JlXG4gICAgLy8gc3BlY2lmaWNcbiAgICAvLyB0aGFuIHByb2NlZWRpbmcgb25lcy5cbiAgICAvL1xuICAgIC8vIFRoZSBjb2RlIGJlbG93IHVzZXMgcGxhY2UgdmFsdWVzIHRvIGNvbWJpbmUgdGhlIGRpZmZlcmVudCB0eXBlcyBvZiBzZWdtZW50cyBpbnRvIGEgc2luZ2xlXG4gICAgLy8gc3RyaW5nIHRoYXQgd2UgY2FuIHNvcnQgbGF0ZXIuIEVhY2ggc3RhdGljIHNlZ21lbnQgaXMgbWFya2VkIGFzIGEgc3BlY2lmaWNpdHkgb2YgXCIyLFwiIGVhY2hcbiAgICAvLyBkeW5hbWljIHNlZ21lbnQgaXMgd29ydGggXCIxXCIgc3BlY2lmaWNpdHksIGFuZCBzdGFycyBhcmUgd29ydGggXCIwXCIgc3BlY2lmaWNpdHkuXG4gICAgdmFyIGksIGxlbmd0aCA9IHRoaXMuX3NlZ21lbnRzLmxlbmd0aCwgc3BlY2lmaWNpdHk7XG4gICAgaWYgKGxlbmd0aCA9PSAwKSB7XG4gICAgICAvLyBhIHNpbmdsZSBzbGFzaCAob3IgXCJlbXB0eSBzZWdtZW50XCIgaXMgYXMgc3BlY2lmaWMgYXMgYSBzdGF0aWMgc2VnbWVudFxuICAgICAgc3BlY2lmaWNpdHkgKz0gJzInO1xuICAgIH0gZWxzZSB7XG4gICAgICBzcGVjaWZpY2l0eSA9ICcnO1xuICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHNwZWNpZmljaXR5ICs9IHRoaXMuX3NlZ21lbnRzW2ldLnNwZWNpZmljaXR5O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3BlY2lmaWNpdHk7XG4gIH1cblxuICBwcml2YXRlIF9jYWxjdWxhdGVIYXNoKCk6IHN0cmluZyB7XG4gICAgLy8gdGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGRldGVybWluZSB3aGV0aGVyIGEgcm91dGUgY29uZmlnIHBhdGggbGlrZSBgL2Zvby86aWRgIGNvbGxpZGVzIHdpdGhcbiAgICAvLyBgL2Zvby86bmFtZWBcbiAgICB2YXIgaSwgbGVuZ3RoID0gdGhpcy5fc2VnbWVudHMubGVuZ3RoO1xuICAgIHZhciBoYXNoUGFydHMgPSBbXTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGhhc2hQYXJ0cy5wdXNoKHRoaXMuX3NlZ21lbnRzW2ldLmhhc2gpO1xuICAgIH1cbiAgICByZXR1cm4gaGFzaFBhcnRzLmpvaW4oJy8nKTtcbiAgfVxuXG4gIHByaXZhdGUgX2Fzc2VydFZhbGlkUGF0aChwYXRoOiBzdHJpbmcpIHtcbiAgICBpZiAoU3RyaW5nV3JhcHBlci5jb250YWlucyhwYXRoLCAnIycpKSB7XG4gICAgICB0aHJvdyBuZXcgQmFzZUV4Y2VwdGlvbihcbiAgICAgICAgICBgUGF0aCBcIiR7cGF0aH1cIiBzaG91bGQgbm90IGluY2x1ZGUgXCIjXCIuIFVzZSBcIkhhc2hMb2NhdGlvblN0cmF0ZWd5XCIgaW5zdGVhZC5gKTtcbiAgICB9XG4gICAgdmFyIGlsbGVnYWxDaGFyYWN0ZXIgPSBSZWdFeHBXcmFwcGVyLmZpcnN0TWF0Y2goUGFyYW1Sb3V0ZVBhdGguUkVTRVJWRURfQ0hBUlMsIHBhdGgpO1xuICAgIGlmIChpc1ByZXNlbnQoaWxsZWdhbENoYXJhY3RlcikpIHtcbiAgICAgIHRocm93IG5ldyBCYXNlRXhjZXB0aW9uKFxuICAgICAgICAgIGBQYXRoIFwiJHtwYXRofVwiIGNvbnRhaW5zIFwiJHtpbGxlZ2FsQ2hhcmFjdGVyWzBdfVwiIHdoaWNoIGlzIG5vdCBhbGxvd2VkIGluIGEgcm91dGUgY29uZmlnLmApO1xuICAgIH1cbiAgfVxuICBzdGF0aWMgUkVTRVJWRURfQ0hBUlMgPSBSZWdFeHBXcmFwcGVyLmNyZWF0ZSgnLy98XFxcXCh8XFxcXCl8O3xcXFxcP3w9Jyk7XG59XG5cbmxldCBSRUdFWFBfUEVSQ0VOVCA9IC8lL2c7XG5sZXQgUkVHRVhQX1NMQVNIID0gL1xcLy9nO1xubGV0IFJFR0VYUF9PUEVOX1BBUkVOVCA9IC9cXCgvZztcbmxldCBSRUdFWFBfQ0xPU0VfUEFSRU5UID0gL1xcKS9nO1xubGV0IFJFR0VYUF9TRU1JQ09MT04gPSAvOy9nO1xuXG5mdW5jdGlvbiBlbmNvZGVEeW5hbWljU2VnbWVudCh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKGlzQmxhbmsodmFsdWUpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YWx1ZSA9IFN0cmluZ1dyYXBwZXIucmVwbGFjZUFsbCh2YWx1ZSwgUkVHRVhQX1BFUkNFTlQsICclMjUnKTtcbiAgdmFsdWUgPSBTdHJpbmdXcmFwcGVyLnJlcGxhY2VBbGwodmFsdWUsIFJFR0VYUF9TTEFTSCwgJyUyRicpO1xuICB2YWx1ZSA9IFN0cmluZ1dyYXBwZXIucmVwbGFjZUFsbCh2YWx1ZSwgUkVHRVhQX09QRU5fUEFSRU5ULCAnJTI4Jyk7XG4gIHZhbHVlID0gU3RyaW5nV3JhcHBlci5yZXBsYWNlQWxsKHZhbHVlLCBSRUdFWFBfQ0xPU0VfUEFSRU5ULCAnJTI5Jyk7XG4gIHZhbHVlID0gU3RyaW5nV3JhcHBlci5yZXBsYWNlQWxsKHZhbHVlLCBSRUdFWFBfU0VNSUNPTE9OLCAnJTNCJyk7XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5sZXQgUkVHRVhQX0VOQ19TRU1JQ09MT04gPSAvJTNCL2lnO1xubGV0IFJFR0VYUF9FTkNfQ0xPU0VfUEFSRU5UID0gLyUyOS9pZztcbmxldCBSRUdFWFBfRU5DX09QRU5fUEFSRU5UID0gLyUyOC9pZztcbmxldCBSRUdFWFBfRU5DX1NMQVNIID0gLyUyRi9pZztcbmxldCBSRUdFWFBfRU5DX1BFUkNFTlQgPSAvJTI1L2lnO1xuXG5mdW5jdGlvbiBkZWNvZGVEeW5hbWljU2VnbWVudCh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKGlzQmxhbmsodmFsdWUpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YWx1ZSA9IFN0cmluZ1dyYXBwZXIucmVwbGFjZUFsbCh2YWx1ZSwgUkVHRVhQX0VOQ19TRU1JQ09MT04sICc7Jyk7XG4gIHZhbHVlID0gU3RyaW5nV3JhcHBlci5yZXBsYWNlQWxsKHZhbHVlLCBSRUdFWFBfRU5DX0NMT1NFX1BBUkVOVCwgJyknKTtcbiAgdmFsdWUgPSBTdHJpbmdXcmFwcGVyLnJlcGxhY2VBbGwodmFsdWUsIFJFR0VYUF9FTkNfT1BFTl9QQVJFTlQsICcoJyk7XG4gIHZhbHVlID0gU3RyaW5nV3JhcHBlci5yZXBsYWNlQWxsKHZhbHVlLCBSRUdFWFBfRU5DX1NMQVNILCAnLycpO1xuICB2YWx1ZSA9IFN0cmluZ1dyYXBwZXIucmVwbGFjZUFsbCh2YWx1ZSwgUkVHRVhQX0VOQ19QRVJDRU5ULCAnJScpO1xuXG4gIHJldHVybiB2YWx1ZTtcbn1cbiJdfQ==

/***/ },

/***/ 239:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var lang_1 = __webpack_require__(3);
	var collection_1 = __webpack_require__(11);
	var TouchMap = (function () {
	    function TouchMap(map) {
	        var _this = this;
	        this.map = {};
	        this.keys = {};
	        if (lang_1.isPresent(map)) {
	            collection_1.StringMapWrapper.forEach(map, function (value, key) {
	                _this.map[key] = lang_1.isPresent(value) ? value.toString() : null;
	                _this.keys[key] = true;
	            });
	        }
	    }
	    TouchMap.prototype.get = function (key) {
	        collection_1.StringMapWrapper.delete(this.keys, key);
	        return this.map[key];
	    };
	    TouchMap.prototype.getUnused = function () {
	        var _this = this;
	        var unused = {};
	        var keys = collection_1.StringMapWrapper.keys(this.keys);
	        keys.forEach(function (key) { return unused[key] = collection_1.StringMapWrapper.get(_this.map, key); });
	        return unused;
	    };
	    return TouchMap;
	})();
	exports.TouchMap = TouchMap;
	function normalizeString(obj) {
	    if (lang_1.isBlank(obj)) {
	        return null;
	    }
	    else {
	        return obj.toString();
	    }
	}
	exports.normalizeString = normalizeString;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbmd1bGFyMi9zcmMvcm91dGVyL3V0aWxzLnRzIl0sIm5hbWVzIjpbIlRvdWNoTWFwIiwiVG91Y2hNYXAuY29uc3RydWN0b3IiLCJUb3VjaE1hcC5nZXQiLCJUb3VjaE1hcC5nZXRVbnVzZWQiLCJub3JtYWxpemVTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBLHFCQUFpQywwQkFBMEIsQ0FBQyxDQUFBO0FBQzVELDJCQUErQixnQ0FBZ0MsQ0FBQyxDQUFBO0FBRWhFO0lBSUVBLGtCQUFZQSxHQUF5QkE7UUFKdkNDLGlCQXdCQ0E7UUF2QkNBLFFBQUdBLEdBQTRCQSxFQUFFQSxDQUFDQTtRQUNsQ0EsU0FBSUEsR0FBNkJBLEVBQUVBLENBQUNBO1FBR2xDQSxFQUFFQSxDQUFDQSxDQUFDQSxnQkFBU0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDbkJBLDZCQUFnQkEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsRUFBRUEsVUFBQ0EsS0FBS0EsRUFBRUEsR0FBR0E7Z0JBQ3ZDQSxLQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxnQkFBU0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsS0FBS0EsQ0FBQ0EsUUFBUUEsRUFBRUEsR0FBR0EsSUFBSUEsQ0FBQ0E7Z0JBQzNEQSxLQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQTtZQUN4QkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDTEEsQ0FBQ0E7SUFDSEEsQ0FBQ0E7SUFFREQsc0JBQUdBLEdBQUhBLFVBQUlBLEdBQVdBO1FBQ2JFLDZCQUFnQkEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsRUFBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDeENBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO0lBQ3ZCQSxDQUFDQTtJQUVERiw0QkFBU0EsR0FBVEE7UUFBQUcsaUJBS0NBO1FBSkNBLElBQUlBLE1BQU1BLEdBQXlCQSxFQUFFQSxDQUFDQTtRQUN0Q0EsSUFBSUEsSUFBSUEsR0FBR0EsNkJBQWdCQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUM1Q0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsVUFBQUEsR0FBR0EsSUFBSUEsT0FBQUEsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsNkJBQWdCQSxDQUFDQSxHQUFHQSxDQUFDQSxLQUFJQSxDQUFDQSxHQUFHQSxFQUFFQSxHQUFHQSxDQUFDQSxFQUFqREEsQ0FBaURBLENBQUNBLENBQUNBO1FBQ3ZFQSxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQTtJQUNoQkEsQ0FBQ0E7SUFDSEgsZUFBQ0E7QUFBREEsQ0FBQ0EsQUF4QkQsSUF3QkM7QUF4QlksZ0JBQVEsV0F3QnBCLENBQUE7QUFHRCx5QkFBZ0MsR0FBUTtJQUN0Q0ksRUFBRUEsQ0FBQ0EsQ0FBQ0EsY0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDakJBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBO0lBQ2RBLENBQUNBO0lBQUNBLElBQUlBLENBQUNBLENBQUNBO1FBQ05BLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLFFBQVFBLEVBQUVBLENBQUNBO0lBQ3hCQSxDQUFDQTtBQUNIQSxDQUFDQTtBQU5lLHVCQUFlLGtCQU05QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpc1ByZXNlbnQsIGlzQmxhbmt9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge1N0cmluZ01hcFdyYXBwZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvY29sbGVjdGlvbic7XG5cbmV4cG9ydCBjbGFzcyBUb3VjaE1hcCB7XG4gIG1hcDoge1trZXk6IHN0cmluZ106IHN0cmluZ30gPSB7fTtcbiAga2V5czoge1trZXk6IHN0cmluZ106IGJvb2xlYW59ID0ge307XG5cbiAgY29uc3RydWN0b3IobWFwOiB7W2tleTogc3RyaW5nXTogYW55fSkge1xuICAgIGlmIChpc1ByZXNlbnQobWFwKSkge1xuICAgICAgU3RyaW5nTWFwV3JhcHBlci5mb3JFYWNoKG1hcCwgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgdGhpcy5tYXBba2V5XSA9IGlzUHJlc2VudCh2YWx1ZSkgPyB2YWx1ZS50b1N0cmluZygpIDogbnVsbDtcbiAgICAgICAgdGhpcy5rZXlzW2tleV0gPSB0cnVlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0KGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBTdHJpbmdNYXBXcmFwcGVyLmRlbGV0ZSh0aGlzLmtleXMsIGtleSk7XG4gICAgcmV0dXJuIHRoaXMubWFwW2tleV07XG4gIH1cblxuICBnZXRVbnVzZWQoKToge1trZXk6IHN0cmluZ106IGFueX0ge1xuICAgIHZhciB1bnVzZWQ6IHtba2V5OiBzdHJpbmddOiBhbnl9ID0ge307XG4gICAgdmFyIGtleXMgPSBTdHJpbmdNYXBXcmFwcGVyLmtleXModGhpcy5rZXlzKTtcbiAgICBrZXlzLmZvckVhY2goa2V5ID0+IHVudXNlZFtrZXldID0gU3RyaW5nTWFwV3JhcHBlci5nZXQodGhpcy5tYXAsIGtleSkpO1xuICAgIHJldHVybiB1bnVzZWQ7XG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplU3RyaW5nKG9iajogYW55KTogc3RyaW5nIHtcbiAgaWYgKGlzQmxhbmsob2JqKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBvYmoudG9TdHJpbmcoKTtcbiAgfVxufVxuIl19

/***/ },

/***/ 240:
/***/ function(module, exports) {

	'use strict';var MatchedUrl = (function () {
	    function MatchedUrl(urlPath, urlParams, allParams, auxiliary, rest) {
	        this.urlPath = urlPath;
	        this.urlParams = urlParams;
	        this.allParams = allParams;
	        this.auxiliary = auxiliary;
	        this.rest = rest;
	    }
	    return MatchedUrl;
	})();
	exports.MatchedUrl = MatchedUrl;
	var GeneratedUrl = (function () {
	    function GeneratedUrl(urlPath, urlParams) {
	        this.urlPath = urlPath;
	        this.urlParams = urlParams;
	    }
	    return GeneratedUrl;
	})();
	exports.GeneratedUrl = GeneratedUrl;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVfcGF0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL3NyYy9yb3V0ZXIvcnVsZXMvcm91dGVfcGF0aHMvcm91dGVfcGF0aC50cyJdLCJuYW1lcyI6WyJNYXRjaGVkVXJsIiwiTWF0Y2hlZFVybC5jb25zdHJ1Y3RvciIsIkdlbmVyYXRlZFVybCIsIkdlbmVyYXRlZFVybC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6IkFBRUE7SUFDRUEsb0JBQW1CQSxPQUFlQSxFQUFTQSxTQUFtQkEsRUFDM0NBLFNBQStCQSxFQUFTQSxTQUFnQkEsRUFBU0EsSUFBU0E7UUFEMUVDLFlBQU9BLEdBQVBBLE9BQU9BLENBQVFBO1FBQVNBLGNBQVNBLEdBQVRBLFNBQVNBLENBQVVBO1FBQzNDQSxjQUFTQSxHQUFUQSxTQUFTQSxDQUFzQkE7UUFBU0EsY0FBU0EsR0FBVEEsU0FBU0EsQ0FBT0E7UUFBU0EsU0FBSUEsR0FBSkEsSUFBSUEsQ0FBS0E7SUFBR0EsQ0FBQ0E7SUFDbkdELGlCQUFDQTtBQUFEQSxDQUFDQSxBQUhELElBR0M7QUFIWSxrQkFBVSxhQUd0QixDQUFBO0FBR0Q7SUFDRUUsc0JBQW1CQSxPQUFlQSxFQUFTQSxTQUErQkE7UUFBdkRDLFlBQU9BLEdBQVBBLE9BQU9BLENBQVFBO1FBQVNBLGNBQVNBLEdBQVRBLFNBQVNBLENBQXNCQTtJQUFHQSxDQUFDQTtJQUNoRkQsbUJBQUNBO0FBQURBLENBQUNBLEFBRkQsSUFFQztBQUZZLG9CQUFZLGVBRXhCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1VybH0gZnJvbSAnLi4vLi4vdXJsX3BhcnNlcic7XG5cbmV4cG9ydCBjbGFzcyBNYXRjaGVkVXJsIHtcbiAgY29uc3RydWN0b3IocHVibGljIHVybFBhdGg6IHN0cmluZywgcHVibGljIHVybFBhcmFtczogc3RyaW5nW10sXG4gICAgICAgICAgICAgIHB1YmxpYyBhbGxQYXJhbXM6IHtba2V5OiBzdHJpbmddOiBhbnl9LCBwdWJsaWMgYXV4aWxpYXJ5OiBVcmxbXSwgcHVibGljIHJlc3Q6IFVybCkge31cbn1cblxuXG5leHBvcnQgY2xhc3MgR2VuZXJhdGVkVXJsIHtcbiAgY29uc3RydWN0b3IocHVibGljIHVybFBhdGg6IHN0cmluZywgcHVibGljIHVybFBhcmFtczoge1trZXk6IHN0cmluZ106IGFueX0pIHt9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVQYXRoIHtcbiAgc3BlY2lmaWNpdHk6IHN0cmluZztcbiAgdGVybWluYWw6IGJvb2xlYW47XG4gIGhhc2g6IHN0cmluZztcbiAgbWF0Y2hVcmwodXJsOiBVcmwpOiBNYXRjaGVkVXJsO1xuICBnZW5lcmF0ZVVybChwYXJhbXM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogR2VuZXJhdGVkVXJsO1xuICB0b1N0cmluZygpOiBzdHJpbmc7XG59XG4iXX0=

/***/ },

/***/ 241:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var lang_1 = __webpack_require__(3);
	var route_path_1 = __webpack_require__(240);
	var RegexRoutePath = (function () {
	    function RegexRoutePath(_reString, _serializer) {
	        this._reString = _reString;
	        this._serializer = _serializer;
	        this.terminal = true;
	        this.specificity = '2';
	        this.hash = this._reString;
	        this._regex = lang_1.RegExpWrapper.create(this._reString);
	    }
	    RegexRoutePath.prototype.matchUrl = function (url) {
	        var urlPath = url.toString();
	        var params = {};
	        var matcher = lang_1.RegExpWrapper.matcher(this._regex, urlPath);
	        var match = lang_1.RegExpMatcherWrapper.next(matcher);
	        if (lang_1.isBlank(match)) {
	            return null;
	        }
	        for (var i = 0; i < match.length; i += 1) {
	            params[i.toString()] = match[i];
	        }
	        return new route_path_1.MatchedUrl(urlPath, [], params, [], null);
	    };
	    RegexRoutePath.prototype.generateUrl = function (params) { return this._serializer(params); };
	    RegexRoutePath.prototype.toString = function () { return this._reString; };
	    return RegexRoutePath;
	})();
	exports.RegexRoutePath = RegexRoutePath;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnZXhfcm91dGVfcGF0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL3NyYy9yb3V0ZXIvcnVsZXMvcm91dGVfcGF0aHMvcmVnZXhfcm91dGVfcGF0aC50cyJdLCJuYW1lcyI6WyJSZWdleFJvdXRlUGF0aCIsIlJlZ2V4Um91dGVQYXRoLmNvbnN0cnVjdG9yIiwiUmVnZXhSb3V0ZVBhdGgubWF0Y2hVcmwiLCJSZWdleFJvdXRlUGF0aC5nZW5lcmF0ZVVybCIsIlJlZ2V4Um91dGVQYXRoLnRvU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQSxxQkFBMkQsMEJBQTBCLENBQUMsQ0FBQTtBQUV0RiwyQkFBa0QsY0FBYyxDQUFDLENBQUE7QUFLakU7SUFPRUEsd0JBQW9CQSxTQUFpQkEsRUFBVUEsV0FBNEJBO1FBQXZEQyxjQUFTQSxHQUFUQSxTQUFTQSxDQUFRQTtRQUFVQSxnQkFBV0EsR0FBWEEsV0FBV0EsQ0FBaUJBO1FBTHBFQSxhQUFRQSxHQUFZQSxJQUFJQSxDQUFDQTtRQUN6QkEsZ0JBQVdBLEdBQVdBLEdBQUdBLENBQUNBO1FBSy9CQSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQTtRQUMzQkEsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0Esb0JBQWFBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBO0lBQ3JEQSxDQUFDQTtJQUVERCxpQ0FBUUEsR0FBUkEsVUFBU0EsR0FBUUE7UUFDZkUsSUFBSUEsT0FBT0EsR0FBR0EsR0FBR0EsQ0FBQ0EsUUFBUUEsRUFBRUEsQ0FBQ0E7UUFDN0JBLElBQUlBLE1BQU1BLEdBQTRCQSxFQUFFQSxDQUFDQTtRQUN6Q0EsSUFBSUEsT0FBT0EsR0FBR0Esb0JBQWFBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLEVBQUVBLE9BQU9BLENBQUNBLENBQUNBO1FBQzFEQSxJQUFJQSxLQUFLQSxHQUFHQSwyQkFBb0JBLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO1FBRS9DQSxFQUFFQSxDQUFDQSxDQUFDQSxjQUFPQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNuQkEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7UUFDZEEsQ0FBQ0E7UUFFREEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBR0EsS0FBS0EsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0E7WUFDekNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBLFFBQVFBLEVBQUVBLENBQUNBLEdBQUdBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1FBQ2xDQSxDQUFDQTtRQUVEQSxNQUFNQSxDQUFDQSxJQUFJQSx1QkFBVUEsQ0FBQ0EsT0FBT0EsRUFBRUEsRUFBRUEsRUFBRUEsTUFBTUEsRUFBRUEsRUFBRUEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7SUFDdkRBLENBQUNBO0lBRURGLG9DQUFXQSxHQUFYQSxVQUFZQSxNQUE0QkEsSUFBa0JHLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBLENBQUNBO0lBRTVGSCxpQ0FBUUEsR0FBUkEsY0FBYUksTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDdkNKLHFCQUFDQTtBQUFEQSxDQUFDQSxBQWhDRCxJQWdDQztBQWhDWSxzQkFBYyxpQkFnQzFCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JlZ0V4cFdyYXBwZXIsIFJlZ0V4cE1hdGNoZXJXcmFwcGVyLCBpc0JsYW5rfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtVcmwsIFJvb3RVcmx9IGZyb20gJy4uLy4uL3VybF9wYXJzZXInO1xuaW1wb3J0IHtSb3V0ZVBhdGgsIEdlbmVyYXRlZFVybCwgTWF0Y2hlZFVybH0gZnJvbSAnLi9yb3V0ZV9wYXRoJztcblxuXG5leHBvcnQgaW50ZXJmYWNlIFJlZ2V4U2VyaWFsaXplciB7IChwYXJhbXM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogR2VuZXJhdGVkVXJsOyB9XG5cbmV4cG9ydCBjbGFzcyBSZWdleFJvdXRlUGF0aCBpbXBsZW1lbnRzIFJvdXRlUGF0aCB7XG4gIHB1YmxpYyBoYXNoOiBzdHJpbmc7XG4gIHB1YmxpYyB0ZXJtaW5hbDogYm9vbGVhbiA9IHRydWU7XG4gIHB1YmxpYyBzcGVjaWZpY2l0eTogc3RyaW5nID0gJzInO1xuXG4gIHByaXZhdGUgX3JlZ2V4OiBSZWdFeHA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVTdHJpbmc6IHN0cmluZywgcHJpdmF0ZSBfc2VyaWFsaXplcjogUmVnZXhTZXJpYWxpemVyKSB7XG4gICAgdGhpcy5oYXNoID0gdGhpcy5fcmVTdHJpbmc7XG4gICAgdGhpcy5fcmVnZXggPSBSZWdFeHBXcmFwcGVyLmNyZWF0ZSh0aGlzLl9yZVN0cmluZyk7XG4gIH1cblxuICBtYXRjaFVybCh1cmw6IFVybCk6IE1hdGNoZWRVcmwge1xuICAgIHZhciB1cmxQYXRoID0gdXJsLnRvU3RyaW5nKCk7XG4gICAgdmFyIHBhcmFtczoge1trZXk6IHN0cmluZ106IHN0cmluZ30gPSB7fTtcbiAgICB2YXIgbWF0Y2hlciA9IFJlZ0V4cFdyYXBwZXIubWF0Y2hlcih0aGlzLl9yZWdleCwgdXJsUGF0aCk7XG4gICAgdmFyIG1hdGNoID0gUmVnRXhwTWF0Y2hlcldyYXBwZXIubmV4dChtYXRjaGVyKTtcblxuICAgIGlmIChpc0JsYW5rKG1hdGNoKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRjaC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgcGFyYW1zW2kudG9TdHJpbmcoKV0gPSBtYXRjaFtpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IE1hdGNoZWRVcmwodXJsUGF0aCwgW10sIHBhcmFtcywgW10sIG51bGwpO1xuICB9XG5cbiAgZ2VuZXJhdGVVcmwocGFyYW1zOiB7W2tleTogc3RyaW5nXTogYW55fSk6IEdlbmVyYXRlZFVybCB7IHJldHVybiB0aGlzLl9zZXJpYWxpemVyKHBhcmFtcyk7IH1cblxuICB0b1N0cmluZygpIHsgcmV0dXJuIHRoaXMuX3JlU3RyaW5nOyB9XG59Il19

/***/ },

/***/ 242:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var route_config_decorator_1 = __webpack_require__(243);
	var lang_1 = __webpack_require__(3);
	var exceptions_1 = __webpack_require__(13);
	/**
	 * Given a JS Object that represents a route config, returns a corresponding Route, AsyncRoute,
	 * AuxRoute or Redirect object.
	 *
	 * Also wraps an AsyncRoute's loader function to add the loaded component's route config to the
	 * `RouteRegistry`.
	 */
	function normalizeRouteConfig(config, registry) {
	    if (config instanceof route_config_decorator_1.AsyncRoute) {
	        var wrappedLoader = wrapLoaderToReconfigureRegistry(config.loader, registry);
	        return new route_config_decorator_1.AsyncRoute({
	            path: config.path,
	            loader: wrappedLoader,
	            name: config.name,
	            data: config.data,
	            useAsDefault: config.useAsDefault
	        });
	    }
	    if (config instanceof route_config_decorator_1.Route || config instanceof route_config_decorator_1.Redirect || config instanceof route_config_decorator_1.AuxRoute) {
	        return config;
	    }
	    if ((+!!config.component) + (+!!config.redirectTo) + (+!!config.loader) != 1) {
	        throw new exceptions_1.BaseException("Route config should contain exactly one \"component\", \"loader\", or \"redirectTo\" property.");
	    }
	    if (config.as && config.name) {
	        throw new exceptions_1.BaseException("Route config should contain exactly one \"as\" or \"name\" property.");
	    }
	    if (config.as) {
	        config.name = config.as;
	    }
	    if (config.loader) {
	        var wrappedLoader = wrapLoaderToReconfigureRegistry(config.loader, registry);
	        return new route_config_decorator_1.AsyncRoute({
	            path: config.path,
	            loader: wrappedLoader,
	            name: config.name,
	            data: config.data,
	            useAsDefault: config.useAsDefault
	        });
	    }
	    if (config.aux) {
	        return new route_config_decorator_1.AuxRoute({ path: config.aux, component: config.component, name: config.name });
	    }
	    if (config.component) {
	        if (typeof config.component == 'object') {
	            var componentDefinitionObject = config.component;
	            if (componentDefinitionObject.type == 'constructor') {
	                return new route_config_decorator_1.Route({
	                    path: config.path,
	                    component: componentDefinitionObject.constructor,
	                    name: config.name,
	                    data: config.data,
	                    useAsDefault: config.useAsDefault
	                });
	            }
	            else if (componentDefinitionObject.type == 'loader') {
	                return new route_config_decorator_1.AsyncRoute({
	                    path: config.path,
	                    loader: componentDefinitionObject.loader,
	                    name: config.name,
	                    data: config.data,
	                    useAsDefault: config.useAsDefault
	                });
	            }
	            else {
	                throw new exceptions_1.BaseException("Invalid component type \"" + componentDefinitionObject.type + "\". Valid types are \"constructor\" and \"loader\".");
	            }
	        }
	        return new route_config_decorator_1.Route(config);
	    }
	    if (config.redirectTo) {
	        return new route_config_decorator_1.Redirect({ path: config.path, redirectTo: config.redirectTo });
	    }
	    return config;
	}
	exports.normalizeRouteConfig = normalizeRouteConfig;
	function wrapLoaderToReconfigureRegistry(loader, registry) {
	    return function () {
	        return loader().then(function (componentType) {
	            registry.configFromComponent(componentType);
	            return componentType;
	        });
	    };
	}
	function assertComponentExists(component, path) {
	    if (!lang_1.isType(component)) {
	        throw new exceptions_1.BaseException("Component for route \"" + path + "\" is not defined, or is not a class.");
	    }
	}
	exports.assertComponentExists = assertComponentExists;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVfY29uZmlnX25vcm1hbGl6ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbmd1bGFyMi9zcmMvcm91dGVyL3JvdXRlX2NvbmZpZy9yb3V0ZV9jb25maWdfbm9ybWFsaXplci50cyJdLCJuYW1lcyI6WyJub3JtYWxpemVSb3V0ZUNvbmZpZyIsIndyYXBMb2FkZXJUb1JlY29uZmlndXJlUmVnaXN0cnkiLCJhc3NlcnRDb21wb25lbnRFeGlzdHMiXSwibWFwcGluZ3MiOiJBQUFBLHVDQUFxRSwwQkFBMEIsQ0FBQyxDQUFBO0FBRWhHLHFCQUEyQiwwQkFBMEIsQ0FBQyxDQUFBO0FBQ3RELDJCQUE4QyxnQ0FBZ0MsQ0FBQyxDQUFBO0FBSS9FOzs7Ozs7R0FNRztBQUNILDhCQUFxQyxNQUF1QixFQUN2QixRQUF1QjtJQUMxREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsWUFBWUEsbUNBQVVBLENBQUNBLENBQUNBLENBQUNBO1FBQ2pDQSxJQUFJQSxhQUFhQSxHQUFHQSwrQkFBK0JBLENBQUNBLE1BQU1BLENBQUNBLE1BQU1BLEVBQUVBLFFBQVFBLENBQUNBLENBQUNBO1FBQzdFQSxNQUFNQSxDQUFDQSxJQUFJQSxtQ0FBVUEsQ0FBQ0E7WUFDcEJBLElBQUlBLEVBQUVBLE1BQU1BLENBQUNBLElBQUlBO1lBQ2pCQSxNQUFNQSxFQUFFQSxhQUFhQTtZQUNyQkEsSUFBSUEsRUFBRUEsTUFBTUEsQ0FBQ0EsSUFBSUE7WUFDakJBLElBQUlBLEVBQUVBLE1BQU1BLENBQUNBLElBQUlBO1lBQ2pCQSxZQUFZQSxFQUFFQSxNQUFNQSxDQUFDQSxZQUFZQTtTQUNsQ0EsQ0FBQ0EsQ0FBQ0E7SUFDTEEsQ0FBQ0E7SUFDREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsWUFBWUEsOEJBQUtBLElBQUlBLE1BQU1BLFlBQVlBLGlDQUFRQSxJQUFJQSxNQUFNQSxZQUFZQSxpQ0FBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDeEZBLE1BQU1BLENBQWtCQSxNQUFNQSxDQUFDQTtJQUNqQ0EsQ0FBQ0E7SUFFREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDN0VBLE1BQU1BLElBQUlBLDBCQUFhQSxDQUNuQkEsZ0dBQTBGQSxDQUFDQSxDQUFDQTtJQUNsR0EsQ0FBQ0E7SUFDREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsRUFBRUEsSUFBSUEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDN0JBLE1BQU1BLElBQUlBLDBCQUFhQSxDQUFDQSxzRUFBa0VBLENBQUNBLENBQUNBO0lBQzlGQSxDQUFDQTtJQUNEQSxFQUFFQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNkQSxNQUFNQSxDQUFDQSxJQUFJQSxHQUFHQSxNQUFNQSxDQUFDQSxFQUFFQSxDQUFDQTtJQUMxQkEsQ0FBQ0E7SUFDREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDbEJBLElBQUlBLGFBQWFBLEdBQUdBLCtCQUErQkEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsTUFBTUEsRUFBRUEsUUFBUUEsQ0FBQ0EsQ0FBQ0E7UUFDN0VBLE1BQU1BLENBQUNBLElBQUlBLG1DQUFVQSxDQUFDQTtZQUNwQkEsSUFBSUEsRUFBRUEsTUFBTUEsQ0FBQ0EsSUFBSUE7WUFDakJBLE1BQU1BLEVBQUVBLGFBQWFBO1lBQ3JCQSxJQUFJQSxFQUFFQSxNQUFNQSxDQUFDQSxJQUFJQTtZQUNqQkEsSUFBSUEsRUFBRUEsTUFBTUEsQ0FBQ0EsSUFBSUE7WUFDakJBLFlBQVlBLEVB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QUFNQSxDQUFDQSxhQUFhQSxDQUFDQTtRQUN2QkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDTEEsQ0FBQ0EsQ0FBQ0E7QUFDSkEsQ0FBQ0E7QUFFRCwrQkFBc0MsU0FBZSxFQUFFLElBQVk7SUFDakVDLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLGFBQU1BLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1FBQ3ZCQSxNQUFNQSxJQUFJQSwwQkFBYUEsQ0FBQ0EsMkJBQXdCQSxJQUFJQSwwQ0FBc0NBLENBQUNBLENBQUNBO0lBQzlGQSxDQUFDQTtBQUNIQSxDQUFDQTtBQUplLDZCQUFxQix3QkFJcEMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXN5bmNSb3V0ZSwgQXV4Um91dGUsIFJvdXRlLCBSZWRpcmVjdCwgUm91dGVEZWZpbml0aW9ufSBmcm9tICcuL3JvdXRlX2NvbmZpZ19kZWNvcmF0b3InO1xuaW1wb3J0IHtDb21wb25lbnREZWZpbml0aW9ufSBmcm9tICcuLi9yb3V0ZV9kZWZpbml0aW9uJztcbmltcG9ydCB7aXNUeXBlLCBUeXBlfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtCYXNlRXhjZXB0aW9uLCBXcmFwcGVkRXhjZXB0aW9ufSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2V4Y2VwdGlvbnMnO1xuaW1wb3J0IHtSb3V0ZVJlZ2lzdHJ5fSBmcm9tICcuLi9yb3V0ZV9yZWdpc3RyeSc7XG5cblxuLyoqXG4gKiBHaXZlbiBhIEpTIE9iamVjdCB0aGF0IHJlcHJlc2VudHMgYSByb3V0ZSBjb25maWcsIHJldHVybnMgYSBjb3JyZXNwb25kaW5nIFJvdXRlLCBBc3luY1JvdXRlLFxuICogQXV4Um91dGUgb3IgUmVkaXJlY3Qgb2JqZWN0LlxuICpcbiAqIEFsc28gd3JhcHMgYW4gQXN5bmNSb3V0ZSdzIGxvYWRlciBmdW5jdGlvbiB0byBhZGQgdGhlIGxvYWRlZCBjb21wb25lbnQncyByb3V0ZSBjb25maWcgdG8gdGhlXG4gKiBgUm91dGVSZWdpc3RyeWAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVSb3V0ZUNvbmZpZyhjb25maWc6IFJvdXRlRGVmaW5pdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RyeTogUm91dGVSZWdpc3RyeSk6IFJvdXRlRGVmaW5pdGlvbiB7XG4gIGlmIChjb25maWcgaW5zdGFuY2VvZiBBc3luY1JvdXRlKSB7XG4gICAgdmFyIHdyYXBwZWRMb2FkZXIgPSB3cmFwTG9hZGVyVG9SZWNvbmZpZ3VyZVJlZ2lzdHJ5KGNvbmZpZy5sb2FkZXIsIHJlZ2lzdHJ5KTtcbiAgICByZXR1cm4gbmV3IEFzeW5jUm91dGUoe1xuICAgICAgcGF0aDogY29uZmlnLnBhdGgsXG4gICAgICBsb2FkZXI6IHdyYXBwZWRMb2FkZXIsXG4gICAgICBuYW1lOiBjb25maWcubmFtZSxcbiAgICAgIGRhdGE6IGNvbmZpZy5kYXRhLFxuICAgICAgdXNlQXNEZWZhdWx0OiBjb25maWcudXNlQXNEZWZhdWx0XG4gICAgfSk7XG4gIH1cbiAgaWYgKGNvbmZpZyBpbnN0YW5jZW9mIFJvdXRlIHx8IGNvbmZpZyBpbnN0YW5jZW9mIFJlZGlyZWN0IHx8IGNvbmZpZyBpbnN0YW5jZW9mIEF1eFJvdXRlKSB7XG4gICAgcmV0dXJuIDxSb3V0ZURlZmluaXRpb24+Y29uZmlnO1xuICB9XG5cbiAgaWYgKCgrISFjb25maWcuY29tcG9uZW50KSArICgrISFjb25maWcucmVkaXJlY3RUbykgKyAoKyEhY29uZmlnLmxvYWRlcikgIT0gMSkge1xuICAgIHRocm93IG5ldyBCYXNlRXhjZXB0aW9uKFxuICAgICAgICBgUm91dGUgY29uZmlnIHNob3VsZCBjb250YWluIGV4YWN0bHkgb25lIFwiY29tcG9uZW50XCIsIFwibG9hZGVyXCIsIG9yIFwicmVkaXJlY3RUb1wiIHByb3BlcnR5LmApO1xuICB9XG4gIGlmIChjb25maWcuYXMgJiYgY29uZmlnLm5hbWUpIHtcbiAgICB0aHJvdyBuZXcgQmFzZUV4Y2VwdGlvbihgUm91dGUgY29uZmlnIHNob3VsZCBjb250YWluIGV4YWN0bHkgb25lIFwiYXNcIiBvciBcIm5hbWVcIiBwcm9wZXJ0eS5gKTtcbiAgfVxuICBpZiAoY29uZmlnLmFzKSB7XG4gICAgY29uZmlnLm5hbWUgPSBjb25maWcuYXM7XG4gIH1cbiAgaWYgKGNvbmZpZy5sb2FkZXIpIHtcbiAgICB2YXIgd3JhcHBlZExvYWRlciA9IHdyYXBMb2FkZXJUb1JlY29uZmlndXJlUmVnaXN0cnkoY29uZmlnLmxvYWRlciwgcmVnaXN0cnkpO1xuICAgIHJldHVybiBuZXcgQXN5bmNSb3V0ZSh7XG4gICAgICBwYXRoOiBjb25maWcucGF0aCxcbiAgICAgIGxvYWRlcjogd3JhcHBlZExvYWRlcixcbiAgICAgIG5hbWU6IGNvbmZpZy5uYW1lLFxuICAgICAgZGF0YTogY29uZmlnLmRhdGEsXG4gICAgICB1c2VBc0RlZmF1bHQ6IGNvbmZpZy51c2VBc0RlZmF1bHRcbiAgICB9KTtcbiAgfVxuICBpZiAoY29uZmlnLmF1eCkge1xuICAgIHJldHVybiBuZXcgQXV4Um91dGUoe3BhdGg6IGNvbmZpZy5hdXgsIGNvbXBvbmVudDo8VHlwZT5jb25maWcuY29tcG9uZW50LCBuYW1lOiBjb25maWcubmFtZX0pO1xuICB9XG4gIGlmIChjb25maWcuY29tcG9uZW50KSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcuY29tcG9uZW50ID09ICdvYmplY3QnKSB7XG4gICAgICBsZXQgY29tcG9uZW50RGVmaW5pdGlvbk9iamVjdCA9IDxDb21wb25lbnREZWZpbml0aW9uPmNvbmZpZy5jb21wb25lbnQ7XG4gICAgICBpZiAoY29tcG9uZW50RGVmaW5pdGlvbk9iamVjdC50eXBlID09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSb3V0ZSh7XG4gICAgICAgICAgcGF0aDogY29uZmlnLnBhdGgsXG4gICAgICAgICAgY29tcG9uZW50OjxUeXBlPmNvbXBvbmVudERlZmluaXRpb25PYmplY3QuY29uc3RydWN0b3IsXG4gICAgICAgICAgbmFtZTogY29uZmlnLm5hbWUsXG4gICAgICAgICAgZGF0YTogY29uZmlnLmRhdGEsXG4gICAgICAgICAgdXNlQXNEZWZhdWx0OiBjb25maWcudXNlQXNEZWZhdWx0XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChjb21wb25lbnREZWZpbml0aW9uT2JqZWN0LnR5cGUgPT0gJ2xvYWRlcicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBc3luY1JvdXRlKHtcbiAgICAgICAgICBwYXRoOiBjb25maWcucGF0aCxcbiAgICAgICAgICBsb2FkZXI6IGNvbXBvbmVudERlZmluaXRpb25PYmplY3QubG9hZGVyLFxuICAgICAgICAgIG5hbWU6IGNvbmZpZy5uYW1lLFxuICAgICAgICAgIGRhdGE6IGNvbmZpZy5kYXRhLFxuICAgICAgICAgIHVzZUFzRGVmYXVsdDogY29uZmlnLnVzZUFzRGVmYXVsdFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBCYXNlRXhjZXB0aW9uKFxuICAgICAgICAgICAgYEludmFsaWQgY29tcG9uZW50IHR5cGUgXCIke2NvbXBvbmVudERlZmluaXRpb25PYmplY3QudHlwZX1cIi4gVmFsaWQgdHlwZXMgYXJlIFwiY29uc3RydWN0b3JcIiBhbmQgXCJsb2FkZXJcIi5gKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSb3V0ZSg8e1xuICAgICAgcGF0aDogc3RyaW5nO1xuICAgICAgY29tcG9uZW50OiBUeXBlO1xuICAgICAgbmFtZT86IHN0cmluZztcbiAgICAgIGRhdGE/OiB7W2tleTogc3RyaW5nXTogYW55fTtcbiAgICAgIHVzZUFzRGVmYXVsdD86IGJvb2xlYW47XG4gICAgfT5jb25maWcpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5yZWRpcmVjdFRvKSB7XG4gICAgcmV0dXJuIG5ldyBSZWRpcmVjdCh7cGF0aDogY29uZmlnLnBhdGgsIHJlZGlyZWN0VG86IGNvbmZpZy5yZWRpcmVjdFRvfSk7XG4gIH1cblxuICByZXR1cm4gY29uZmlnO1xufVxuXG5cbmZ1bmN0aW9uIHdyYXBMb2FkZXJUb1JlY29uZmlndXJlUmVnaXN0cnkobG9hZGVyOiBGdW5jdGlvbiwgcmVnaXN0cnk6IFJvdXRlUmVnaXN0cnkpOiAoKSA9PlxuICAgIFByb21pc2U8VHlwZT4ge1xuICByZXR1cm4gKCkgPT4ge1xuICAgIHJldHVybiBsb2FkZXIoKS50aGVuKChjb21wb25lbnRUeXBlKSA9PiB7XG4gICAgICByZWdpc3RyeS5jb25maWdGcm9tQ29tcG9uZW50KGNvbXBvbmVudFR5cGUpO1xuICAgICAgcmV0dXJuIGNvbXBvbmVudFR5cGU7XG4gICAgfSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRDb21wb25lbnRFeGlzdHMoY29tcG9uZW50OiBUeXBlLCBwYXRoOiBzdHJpbmcpOiB2b2lkIHtcbiAgaWYgKCFpc1R5cGUoY29tcG9uZW50KSkge1xuICAgIHRocm93IG5ldyBCYXNlRXhjZXB0aW9uKGBDb21wb25lbnQgZm9yIHJvdXRlIFwiJHtwYXRofVwiIGlzIG5vdCBkZWZpbmVkLCBvciBpcyBub3QgYSBjbGFzcy5gKTtcbiAgfVxufVxuIl19

/***/ },

/***/ 243:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var route_config_impl_1 = __webpack_require__(231);
	var decorators_1 = __webpack_require__(8);
	var route_config_impl_2 = __webpack_require__(231);
	exports.Route = route_config_impl_2.Route;
	exports.Redirect = route_config_impl_2.Redirect;
	exports.AuxRoute = route_config_impl_2.AuxRoute;
	exports.AsyncRoute = route_config_impl_2.AsyncRoute;
	// Copied from RouteConfig in route_config_impl.
	/**
	 * The `RouteConfig` decorator defines routes for a given component.
	 *
	 * It takes an array of {@link RouteDefinition}s.
	 */
	exports.RouteConfig = decorators_1.makeDecorator(route_config_impl_1.RouteConfig);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVfY29uZmlnX2RlY29yYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL3NyYy9yb3V0ZXIvcm91dGVfY29uZmlnL3JvdXRlX2NvbmZpZ19kZWNvcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0NBQW9FLHFCQUFxQixDQUFDLENBQUE7QUFDMUYsMkJBQTRCLG1DQUFtQyxDQUFDLENBQUE7QUFFaEUsa0NBQXFFLHFCQUFxQixDQUFDO0FBQW5GLDBDQUFLO0FBQUUsZ0RBQVE7QUFBRSxnREFBUTtBQUFFLG9EQUF3RDtBQUUzRixnREFBZ0Q7QUFDaEQ7Ozs7R0FJRztBQUNRLG1CQUFXLEdBQ2xCLDBCQUFhLENBQUMsK0JBQXFCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Um91dGVDb25maWcgYXMgUm91dGVDb25maWdBbm5vdGF0aW9uLCBSb3V0ZURlZmluaXRpb259IGZyb20gJy4vcm91dGVfY29uZmlnX2ltcGwnO1xuaW1wb3J0IHttYWtlRGVjb3JhdG9yfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS91dGlsL2RlY29yYXRvcnMnO1xuXG5leHBvcnQge1JvdXRlLCBSZWRpcmVjdCwgQXV4Um91dGUsIEFzeW5jUm91dGUsIFJvdXRlRGVmaW5pdGlvbn0gZnJvbSAnLi9yb3V0ZV9jb25maWdfaW1wbCc7XG5cbi8vIENvcGllZCBmcm9tIFJvdXRlQ29uZmlnIGluIHJvdXRlX2NvbmZpZ19pbXBsLlxuLyoqXG4gKiBUaGUgYFJvdXRlQ29uZmlnYCBkZWNvcmF0b3IgZGVmaW5lcyByb3V0ZXMgZm9yIGEgZ2l2ZW4gY29tcG9uZW50LlxuICpcbiAqIEl0IHRha2VzIGFuIGFycmF5IG9mIHtAbGluayBSb3V0ZURlZmluaXRpb259cy5cbiAqL1xuZXhwb3J0IHZhciBSb3V0ZUNvbmZpZzogKGNvbmZpZ3M6IFJvdXRlRGVmaW5pdGlvbltdKSA9PiBDbGFzc0RlY29yYXRvciA9XG4gICAgbWFrZURlY29yYXRvcihSb3V0ZUNvbmZpZ0Fubm90YXRpb24pO1xuIl19

/***/ },

/***/ 244:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var location_strategy_1 = __webpack_require__(245);
	var async_1 = __webpack_require__(50);
	var core_1 = __webpack_require__(23);
	/**
	 * `Location` is a service that applications can use to interact with a browser's URL.
	 * Depending on which {@link LocationStrategy} is used, `Location` will either persist
	 * to the URL's path or the URL's hash segment.
	 *
	 * Note: it's better to use {@link Router#navigate} service to trigger route changes. Use
	 * `Location` only if you need to interact with or create normalized URLs outside of
	 * routing.
	 *
	 * `Location` is responsible for normalizing the URL against the application's base href.
	 * A normalized URL is absolute from the URL host, includes the application's base href, and has no
	 * trailing slash:
	 * - `/my/app/user/123` is normalized
	 * - `my/app/user/123` **is not** normalized
	 * - `/my/app/user/123/` **is not** normalized
	 *
	 * ### Example
	 *
	 * ```
	 * import {Component} from 'angular2/core';
	 * import {
	 *   ROUTER_DIRECTIVES,
	 *   ROUTER_PROVIDERS,
	 *   RouteConfig,
	 *   Location
	 * } from 'angular2/router';
	 *
	 * @Component({directives: [ROUTER_DIRECTIVES]})
	 * @RouteConfig([
	 *  {...},
	 * ])
	 * class AppCmp {
	 *   constructor(location: Location) {
	 *     location.go('/foo');
	 *   }
	 * }
	 *
	 * bootstrap(AppCmp, [ROUTER_PROVIDERS]);
	 * ```
	 */
	var Location = (function () {
	    function Location(platformStrategy) {
	        var _this = this;
	        this.platformStrategy = platformStrategy;
	        /** @internal */
	        this._subject = new async_1.EventEmitter();
	        var browserBaseHref = this.platformStrategy.getBaseHref();
	        this._baseHref = stripTrailingSlash(stripIndexHtml(browserBaseHref));
	        this.platformStrategy.onPopState(function (ev) {
	            async_1.ObservableWrapper.callEmit(_this._subject, { 'url': _this.path(), 'pop': true, 'type': ev.type });
	        });
	    }
	    /**
	     * Returns the normalized URL path.
	     */
	    Location.prototype.path = function () { return this.normalize(this.platformStrategy.path()); };
	    /**
	     * Given a string representing a URL, returns the normalized URL path without leading or
	     * trailing slashes
	     */
	    Location.prototype.normalize = function (url) {
	        return stripTrailingSlash(_stripBaseHref(this._baseHref, stripIndexHtml(url)));
	    };
	    /**
	     * Given a string representing a URL, returns the platform-specific external URL path.
	     * If the given URL doesn't begin with a leading slash (`'/'`), this method adds one
	     * before normalizing. This method will also add a hash if `HashLocationStrategy` is
	     * used, or the `APP_BASE_HREF` if the `PathLocationStrategy` is in use.
	     */
	    Location.prototype.prepareExternalUrl = function (url) {
	        if (url.length > 0 && !url.startsWith('/')) {
	            url = '/' + url;
	        }
	        return this.platformStrategy.prepareExternalUrl(url);
	    };
	    // TODO: rename this method to pushState
	    /**
	     * Changes the browsers URL to the normalized version of the given URL, and pushes a
	     * new item onto the platform's history.
	     */
	    Location.prototype.go = function (path, query) {
	        if (query === void 0) { query = ''; }
	        this.platformStrategy.pushState(null, '', path, query);
	    };
	    /**
	     * Changes the browsers URL to the normalized version of the given URL, and replaces
	     * the top item on the platform's history stack.
	     */
	    Location.prototype.replaceState = function (path, query) {
	        if (query === void 0) { query = ''; }
	        this.platformStrategy.replaceState(null, '', path, query);
	    };
	    /**
	     * Navigates forward in the platform's history.
	     */
	    Location.prototype.forward = function () { this.platformStrategy.forward(); };
	    /**
	     * Navigates back in the platform's history.
	     */
	    Location.prototype.back = function () { this.platformStrategy.back(); };
	    /**
	     * Subscribe to the platform's `popState` events.
	     */
	    Location.prototype.subscribe = function (onNext, onThrow, onReturn) {
	        if (onThrow === void 0) { onThrow = null; }
	        if (onReturn === void 0) { onReturn = null; }
	        return async_1.ObservableWrapper.subscribe(this._subject, onNext, onThrow, onReturn);
	    };
	    Location = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [location_strategy_1.LocationStrategy])
	    ], Location);
	    return Location;
	})();
	exports.Location = Location;
	function _stripBaseHref(baseHref, url) {
	    if (baseHref.length > 0 && url.startsWith(baseHref)) {
	        return url.substring(baseHref.length);
	    }
	    return url;
	}
	function stripIndexHtml(url) {
	    if (/\/index.html$/g.test(url)) {
	        // '/index.html'.length == 11
	        return url.substring(0, url.length - 11);
	    }
	    return url;
	}
	function stripTrailingSlash(url) {
	    if (/\/$/g.test(url)) {
	        url = url.substring(0, url.length - 1);
	    }
	    return url;
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbmd1bGFyMi9zcmMvcm91dGVyL2xvY2F0aW9uL2xvY2F0aW9uLnRzIl0sIm5hbWVzIjpbIkxvY2F0aW9uIiwiTG9jYXRpb24uY29uc3RydWN0b3IiLCJMb2NhdGlvbi5wYXRoIiwiTG9jYXRpb24ubm9ybWFsaXplIiwiTG9jYXRpb24ucHJlcGFyZUV4dGVybmFsVXJsIiwiTG9jYXRpb24uZ28iLCJMb2NhdGlvbi5yZXBsYWNlU3RhdGUiLCJMb2NhdGlvbi5mb3J3YXJkIiwiTG9jYXRpb24uYmFjayIsIkxvY2F0aW9uLnN1YnNjcmliZSIsIl9zdHJpcEJhc2VIcmVmIiwic3RyaXBJbmRleEh0bWwiLCJzdHJpcFRyYWlsaW5nU2xhc2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGtDQUErQixxQkFBcUIsQ0FBQyxDQUFBO0FBQ3JELHNCQUE4QywyQkFBMkIsQ0FBQyxDQUFBO0FBQzFFLHFCQUFpQyxlQUFlLENBQUMsQ0FBQTtBQUVqRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBdUNHO0FBQ0g7SUFPRUEsa0JBQW1CQSxnQkFBa0NBO1FBUHZEQyxpQkEyRUNBO1FBcEVvQkEscUJBQWdCQSxHQUFoQkEsZ0JBQWdCQSxDQUFrQkE7UUFMckRBLGdCQUFnQkE7UUFDaEJBLGFBQVFBLEdBQXNCQSxJQUFJQSxvQkFBWUEsRUFBRUEsQ0FBQ0E7UUFLL0NBLElBQUlBLGVBQWVBLEdBQUdBLElBQUlBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsV0FBV0EsRUFBRUEsQ0FBQ0E7UUFDMURBLElBQUlBLENBQUNBLFNBQVNBLEdBQUdBLGtCQUFrQkEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDckVBLElBQUlBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsVUFBQ0EsRUFBRUE7WUFDbENBLHlCQUFpQkEsQ0FBQ0EsUUFBUUEsQ0FB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Q0FBQ0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsSUFBSUEsR0FBR0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDcERBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLFNBQVNBLENBQUNBLFFBQVFBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO0lBQ3hDQSxDQUFDQTtJQUNEQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQTtBQUNiQSxDQUFDQTtBQUVELHdCQUF3QixHQUFXO0lBQ2pDQyxFQUFFQSxDQUFDQSxDQUFDQSxnQkFBZ0JBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1FBQy9CQSw2QkFBNkJBO1FBQzdCQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQSxFQUFFQSxHQUFHQSxDQUFDQSxNQUFNQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQTtJQUMzQ0EsQ0FBQ0E7SUFDREEsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0E7QUFDYkEsQ0FBQ0E7QUFFRCw0QkFBNEIsR0FBVztJQUNyQ0MsRUFBRUEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDckJBLEdBQUdBLEdBQUdBLEdBQUdBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLEVBQUVBLEdBQUdBLENBQUNBLE1BQU1BLEdBQUdBLENBQUNBLENBQUNBLENBQUNBO0lBQ3pDQSxDQUFDQTtJQUNEQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQTtBQUNiQSxDQUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TG9jYXRpb25TdHJhdGVneX0gZnJvbSAnLi9sb2NhdGlvbl9zdHJhdGVneSc7XG5pbXBvcnQge0V2ZW50RW1pdHRlciwgT2JzZXJ2YWJsZVdyYXBwZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvYXN5bmMnO1xuaW1wb3J0IHtJbmplY3RhYmxlLCBJbmplY3R9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG4vKipcbiAqIGBMb2NhdGlvbmAgaXMgYSBzZXJ2aWNlIHRoYXQgYXBwbGljYXRpb25zIGNhbiB1c2UgdG8gaW50ZXJhY3Qgd2l0aCBhIGJyb3dzZXIncyBVUkwuXG4gKiBEZXBlbmRpbmcgb24gd2hpY2gge0BsaW5rIExvY2F0aW9uU3RyYXRlZ3l9IGlzIHVzZWQsIGBMb2NhdGlvbmAgd2lsbCBlaXRoZXIgcGVyc2lzdFxuICogdG8gdGhlIFVSTCdzIHBhdGggb3IgdGhlIFVSTCdzIGhhc2ggc2VnbWVudC5cbiAqXG4gKiBOb3RlOiBpdCdzIGJldHRlciB0byB1c2Uge0BsaW5rIFJvdXRlciNuYXZpZ2F0ZX0gc2VydmljZSB0byB0cmlnZ2VyIHJvdXRlIGNoYW5nZXMuIFVzZVxuICogYExvY2F0aW9uYCBvbmx5IGlmIHlvdSBuZWVkIHRvIGludGVyYWN0IHdpdGggb3IgY3JlYXRlIG5vcm1hbGl6ZWQgVVJMcyBvdXRzaWRlIG9mXG4gKiByb3V0aW5nLlxuICpcbiAqIGBMb2NhdGlvbmAgaXMgcmVzcG9uc2libGUgZm9yIG5vcm1hbGl6aW5nIHRoZSBVUkwgYWdhaW5zdCB0aGUgYXBwbGljYXRpb24ncyBiYXNlIGhyZWYuXG4gKiBBIG5vcm1hbGl6ZWQgVVJMIGlzIGFic29sdXRlIGZyb20gdGhlIFVSTCBob3N0LCBpbmNsdWRlcyB0aGUgYXBwbGljYXRpb24ncyBiYXNlIGhyZWYsIGFuZCBoYXMgbm9cbiAqIHRyYWlsaW5nIHNsYXNoOlxuICogLSBgL215L2FwcC91c2VyLzEyM2AgaXMgbm9ybWFsaXplZFxuICogLSBgbXkvYXBwL3VzZXIvMTIzYCAqKmlzIG5vdCoqIG5vcm1hbGl6ZWRcbiAqIC0gYC9teS9hcHAvdXNlci8xMjMvYCAqKmlzIG5vdCoqIG5vcm1hbGl6ZWRcbiAqXG4gKiAjIyMgRXhhbXBsZVxuICpcbiAqIGBgYFxuICogaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuICogaW1wb3J0IHtcbiAqICAgUk9VVEVSX0RJUkVDVElWRVMsXG4gKiAgIFJPVVRFUl9QUk9WSURFUlMsXG4gKiAgIFJvdXRlQ29uZmlnLFxuICogICBMb2NhdGlvblxuICogfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuICpcbiAqIEBDb21wb25lbnQoe2RpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU119KVxuICogQFJvdXRlQ29uZmlnKFtcbiAqICB7Li4ufSxcbiAqIF0pXG4gKiBjbGFzcyBBcHBDbXAge1xuICogICBjb25zdHJ1Y3Rvcihsb2NhdGlvbjogTG9jYXRpb24pIHtcbiAqICAgICBsb2NhdGlvbi5nbygnL2ZvbycpO1xuICogICB9XG4gKiB9XG4gKlxuICogYm9vdHN0cmFwKEFwcENtcCwgW1JPVVRFUl9QUk9WSURFUlNdKTtcbiAqIGBgYFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYXRpb24ge1xuICAvKiogQGludGVybmFsICovXG4gIF9zdWJqZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfYmFzZUhyZWY6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGxhdGZvcm1TdHJhdGVneTogTG9jYXRpb25TdHJhdGVneSkge1xuICAgIHZhciBicm93c2VyQmFzZUhyZWYgPSB0aGlzLnBsYXRmb3JtU3RyYXRlZ3kuZ2V0QmFzZUhyZWYoKTtcbiAgICB0aGlzLl9iYXNlSHJlZiA9IHN0cmlwVHJhaWxpbmdTbGFzaChzdHJpcEluZGV4SHRtbChicm93c2VyQmFzZUhyZWYpKTtcbiAgICB0aGlzLnBsYXRmb3JtU3RyYXRlZ3kub25Qb3BTdGF0ZSgoZXYpID0+IHtcbiAgICAgIE9ic2VydmFibGVXcmFwcGVyLmNhbGxFbWl0KHRoaXMuX3N1YmplY3QsIHsndXJsJzogdGhpcy5wYXRoKCksICdwb3AnOiB0cnVlLCAndHlwZSc6IGV2LnR5cGV9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBub3JtYWxpemVkIFVSTCBwYXRoLlxuICAgKi9cbiAgcGF0aCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5ub3JtYWxpemUodGhpcy5wbGF0Zm9ybVN0cmF0ZWd5LnBhdGgoKSk7IH1cblxuICAvKipcbiAgICogR2l2ZW4gYSBzdHJpbmcgcmVwcmVzZW50aW5nIGEgVVJMLCByZXR1cm5zIHRoZSBub3JtYWxpemVkIFVSTCBwYXRoIHdpdGhvdXQgbGVhZGluZyBvclxuICAgKiB0cmFpbGluZyBzbGFzaGVzXG4gICAqL1xuICBub3JtYWxpemUodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBzdHJpcFRyYWlsaW5nU2xhc2goX3N0cmlwQmFzZUhyZWYodGhpcy5fYmFzZUhyZWYsIHN0cmlwSW5kZXhIdG1sKHVybCkpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBhIHN0cmluZyByZXByZXNlbnRpbmcgYSBVUkwsIHJldHVybnMgdGhlIHBsYXRmb3JtLXNwZWNpZmljIGV4dGVybmFsIFVSTCBwYXRoLlxuICAgKiBJZiB0aGUgZ2l2ZW4gVVJMIGRvZXNuJ3QgYmVnaW4gd2l0aCBhIGxlYWRpbmcgc2xhc2ggKGAnLydgKSwgdGhpcyBtZXRob2QgYWRkcyBvbmVcbiAgICogYmVmb3JlIG5vcm1hbGl6aW5nLiBUaGlzIG1ldGhvZCB3aWxsIGFsc28gYWRkIGEgaGFzaCBpZiBgSGFzaExvY2F0aW9uU3RyYXRlZ3lgIGlzXG4gICAqIHVzZWQsIG9yIHRoZSBgQVBQX0JBU0VfSFJFRmAgaWYgdGhlIGBQYXRoTG9jYXRpb25TdHJhdGVneWAgaXMgaW4gdXNlLlxuICAgKi9cbiAgcHJlcGFyZUV4dGVybmFsVXJsKHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAodXJsLmxlbmd0aCA+IDAgJiYgIXVybC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgIHVybCA9ICcvJyArIHVybDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucGxhdGZvcm1TdHJhdGVneS5wcmVwYXJlRXh0ZXJuYWxVcmwodXJsKTtcbiAgfVxuXG4gIC8vIFRPRE86IHJlbmFtZSB0aGlzIG1ldGhvZCB0byBwdXNoU3RhdGVcbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIGJyb3dzZXJzIFVSTCB0byB0aGUgbm9ybWFsaXplZCB2ZXJzaW9uIG9mIHRoZSBnaXZlbiBVUkwsIGFuZCBwdXNoZXMgYVxuICAgKiBuZXcgaXRlbSBvbnRvIHRoZSBwbGF0Zm9ybSdzIGhpc3RvcnkuXG4gICAqL1xuICBnbyhwYXRoOiBzdHJpbmcsIHF1ZXJ5OiBzdHJpbmcgPSAnJyk6IHZvaWQge1xuICAgIHRoaXMucGxhdGZvcm1TdHJhdGVneS5wdXNoU3RhdGUobnVsbCwgJycsIHBhdGgsIHF1ZXJ5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBicm93c2VycyBVUkwgdG8gdGhlIG5vcm1hbGl6ZWQgdmVyc2lvbiBvZiB0aGUgZ2l2ZW4gVVJMLCBhbmQgcmVwbGFjZXNcbiAgICogdGhlIHRvcCBpdGVtIG9uIHRoZSBwbGF0Zm9ybSdzIGhpc3Rvcnkgc3RhY2suXG4gICAqL1xuICByZXBsYWNlU3RhdGUocGF0aDogc3RyaW5nLCBxdWVyeTogc3RyaW5nID0gJycpOiB2b2lkIHtcbiAgICB0aGlzLnBsYXRmb3JtU3RyYXRlZ3kucmVwbGFjZVN0YXRlKG51bGwsICcnLCBwYXRoLCBxdWVyeSk7XG4gIH1cblxuICAvKipcbiAgICogTmF2aWdhdGVzIGZvcndhcmQgaW4gdGhlIHBsYXRmb3JtJ3MgaGlzdG9yeS5cbiAgICovXG4gIGZvcndhcmQoKTogdm9pZCB7IHRoaXMucGxhdGZvcm1TdHJhdGVneS5mb3J3YXJkKCk7IH1cblxuICAvKipcbiAgICogTmF2aWdhdGVzIGJhY2sgaW4gdGhlIHBsYXRmb3JtJ3MgaGlzdG9yeS5cbiAgICovXG4gIGJhY2soKTogdm9pZCB7IHRoaXMucGxhdGZvcm1TdHJhdGVneS5iYWNrKCk7IH1cblxuICAvKipcbiAgICogU3Vic2NyaWJlIHRvIHRoZSBwbGF0Zm9ybSdzIGBwb3BTdGF0ZWAgZXZlbnRzLlxuICAgKi9cbiAgc3Vic2NyaWJlKG9uTmV4dDogKHZhbHVlOiBhbnkpID0+IHZvaWQsIG9uVGhyb3c6IChleGNlcHRpb246IGFueSkgPT4gdm9pZCA9IG51bGwsXG4gICAgICAgICAgICBvblJldHVybjogKCkgPT4gdm9pZCA9IG51bGwpOiBPYmplY3Qge1xuICAgIHJldHVybiBPYnNlcnZhYmxlV3JhcHBlci5zdWJzY3JpYmUodGhpcy5fc3ViamVjdCwgb25OZXh0LCBvblRocm93LCBvblJldHVybik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX3N0cmlwQmFzZUhyZWYoYmFzZUhyZWY6IHN0cmluZywgdXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoYmFzZUhyZWYubGVuZ3RoID4gMCAmJiB1cmwuc3RhcnRzV2l0aChiYXNlSHJlZikpIHtcbiAgICByZXR1cm4gdXJsLnN1YnN0cmluZyhiYXNlSHJlZi5sZW5ndGgpO1xuICB9XG4gIHJldHVybiB1cmw7XG59XG5cbmZ1bmN0aW9uIHN0cmlwSW5kZXhIdG1sKHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKC9cXC9pbmRleC5odG1sJC9nLnRlc3QodXJsKSkge1xuICAgIC8vICcvaW5kZXguaHRtbCcubGVuZ3RoID09IDExXG4gICAgcmV0dXJuIHVybC5zdWJzdHJpbmcoMCwgdXJsLmxlbmd0aCAtIDExKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufVxuXG5mdW5jdGlvbiBzdHJpcFRyYWlsaW5nU2xhc2godXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoL1xcLyQvZy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc3Vic3RyaW5nKDAsIHVybC5sZW5ndGggLSAxKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufVxuIl19

/***/ },

/***/ 245:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var lang_1 = __webpack_require__(3);
	var core_1 = __webpack_require__(23);
	/**
	 * `LocationStrategy` is responsible for representing and reading route state
	 * from the browser's URL. Angular provides two strategies:
	 * {@link HashLocationStrategy} and {@link PathLocationStrategy} (default).
	 *
	 * This is used under the hood of the {@link Location} service.
	 *
	 * Applications should use the {@link Router} or {@link Location} services to
	 * interact with application route state.
	 *
	 * For instance, {@link HashLocationStrategy} produces URLs like
	 * `http://example.com#/foo`, and {@link PathLocationStrategy} produces
	 * `http://example.com/foo` as an equivalent URL.
	 *
	 * See these two classes for more.
	 */
	var LocationStrategy = (function () {
	    function LocationStrategy() {
	    }
	    return LocationStrategy;
	})();
	exports.LocationStrategy = LocationStrategy;
	/**
	 * The `APP_BASE_HREF` token represents the base href to be used with the
	 * {@link PathLocationStrategy}.
	 *
	 * If you're using {@link PathLocationStrategy}, you must provide a provider to a string
	 * representing the URL prefix that should be preserved when generating and recognizing
	 * URLs.
	 *
	 * ### Example
	 *
	 * ```
	 * import {Component} from 'angular2/core';
	 * import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from 'angular2/router';
	 *
	 * @Component({directives: [ROUTER_DIRECTIVES]})
	 * @RouteConfig([
	 *  {...},
	 * ])
	 * class AppCmp {
	 *   // ...
	 * }
	 *
	 * bootstrap(AppCmp, [
	 *   ROUTER_PROVIDERS,
	 *   provide(APP_BASE_HREF, {useValue: '/my/app'})
	 * ]);
	 * ```
	 */
	exports.APP_BASE_HREF = lang_1.CONST_EXPR(new core_1.OpaqueToken('appBaseHref'));
	function normalizeQueryParams(params) {
	    return (params.length > 0 && params.substring(0, 1) != '?') ? ('?' + params) : params;
	}
	exports.normalizeQueryParams = normalizeQueryParams;
	function joinWithSlash(start, end) {
	    if (start.length == 0) {
	        return end;
	    }
	    if (end.length == 0) {
	        return start;
	    }
	    var slashes = 0;
	    if (start.endsWith('/')) {
	        slashes++;
	    }
	    if (end.startsWith('/')) {
	        slashes++;
	    }
	    if (slashes == 2) {
	        return start + end.substring(1);
	    }
	    if (slashes == 1) {
	        return start + end;
	    }
	    return start + '/' + end;
	}
	exports.joinWithSlash = joinWithSlash;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb25fc3RyYXRlZ3kuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbmd1bGFyMi9zcmMvcm91dGVyL2xvY2F0aW9uL2xvY2F0aW9uX3N0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbIkxvY2F0aW9uU3RyYXRlZ3kiLCJMb2NhdGlvblN0cmF0ZWd5LmNvbnN0cnVjdG9yIiwibm9ybWFsaXplUXVlcnlQYXJhbXMiLCJqb2luV2l0aFNsYXNoIl0sIm1hcHBpbmdzIjoiQUFBQSxxQkFBeUIsMEJBQTBCLENBQUMsQ0FBQTtBQUNwRCxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFHMUM7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBQ0g7SUFBQUE7SUFTQUMsQ0FBQ0E7SUFBREQsdUJBQUNBO0FBQURBLENBQUNBLEFBVEQsSUFTQztBQVRxQix3QkFBZ0IsbUJBU3JDLENBQUE7QUFHRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMkJHO0FBQ1UscUJBQWEsR0FBZ0IsaUJBQVUsQ0FBQyxJQUFJLGtCQUFXLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztBQUVyRiw4QkFBcUMsTUFBYztJQUNqREUsTUFBTUEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsSUFBSUEsTUFBTUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsR0FBR0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsR0FBR0EsTUFBTUEsQ0FBQ0EsR0FBR0EsTUFBTUEsQ0FBQ0E7QUFDeEZBLENBQUNBO0FBRmUsNEJBQW9CLHVCQUVuQyxDQUFBO0FBRUQsdUJBQThCLEtBQWEsRUFBRSxHQUFXO0lBQ3REQyxFQUFFQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxNQUFNQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUN0QkEsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0E7SUFDYkEsQ0FBQ0E7SUFDREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsTUFBTUEsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDcEJBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBO0lBQ2ZBLENBQUNBO0lBQ0RBLElBQUlBLE9BQU9BLEdBQUdBLENBQUNBLENBQUNBO0lBQ2hCQSxFQUFFQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxRQUFRQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUN4QkEsT0FBT0EsRUFBRUEsQ0FBQ0E7SUFDWkEsQ0FBQ0E7SUFDREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDeEJBLE9BQU9BLEVBQUVBLENBQUNBO0lBQ1pBLENBQUNBO0lBQ0RBLEVBQUVBLENBQUNBLENBQUNBLE9BQU9BLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1FBQ2pCQSxNQUFNQSxDQUFDQSxLQUFLQSxHQUFHQSxHQUFHQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNsQ0EsQ0FBQ0E7SUFDREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsT0FBT0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDakJBLE1BQU1BLENBQUNBLEtBQUtBLEdBQUdBLEdBQUdBLENBQUNBO0lBQ3JCQSxDQUFDQTtJQUNEQSxNQUFNQSxDQUFDQSxLQUFLQSxHQUFHQSxHQUFHQSxHQUFHQSxHQUFHQSxDQUFDQTtBQUMzQkEsQ0FBQ0E7QUFyQmUscUJBQWEsZ0JBcUI1QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDT05TVF9FWFBSfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtPcGFxdWVUb2tlbn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1VybENoYW5nZUxpc3RlbmVyfSBmcm9tICcuL3BsYXRmb3JtX2xvY2F0aW9uJztcblxuLyoqXG4gKiBgTG9jYXRpb25TdHJhdGVneWAgaXMgcmVzcG9uc2libGUgZm9yIHJlcHJlc2VudGluZyBhbmQgcmVhZGluZyByb3V0ZSBzdGF0ZVxuICogZnJvbSB0aGUgYnJvd3NlcidzIFVSTC4gQW5ndWxhciBwcm92aWRlcyB0d28gc3RyYXRlZ2llczpcbiAqIHtAbGluayBIYXNoTG9jYXRpb25TdHJhdGVneX0gYW5kIHtAbGluayBQYXRoTG9jYXRpb25TdHJhdGVneX0gKGRlZmF1bHQpLlxuICpcbiAqIFRoaXMgaXMgdXNlZCB1bmRlciB0aGUgaG9vZCBvZiB0aGUge0BsaW5rIExvY2F0aW9ufSBzZXJ2aWNlLlxuICpcbiAqIEFwcGxpY2F0aW9ucyBzaG91bGQgdXNlIHRoZSB7QGxpbmsgUm91dGVyfSBvciB7QGxpbmsgTG9jYXRpb259IHNlcnZpY2VzIHRvXG4gKiBpbnRlcmFjdCB3aXRoIGFwcGxpY2F0aW9uIHJvdXRlIHN0YXRlLlxuICpcbiAqIEZvciBpbnN0YW5jZSwge0BsaW5rIEhhc2hMb2NhdGlvblN0cmF0ZWd5fSBwcm9kdWNlcyBVUkxzIGxpa2VcbiAqIGBodHRwOi8vZXhhbXBsZS5jb20jL2Zvb2AsIGFuZCB7QGxpbmsgUGF0aExvY2F0aW9uU3RyYXRlZ3l9IHByb2R1Y2VzXG4gKiBgaHR0cDovL2V4YW1wbGUuY29tL2Zvb2AgYXMgYW4gZXF1aXZhbGVudCBVUkwuXG4gKlxuICogU2VlIHRoZXNlIHR3byBjbGFzc2VzIGZvciBtb3JlLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTG9jYXRpb25TdHJhdGVneSB7XG4gIGFic3RyYWN0IHBhdGgoKTogc3RyaW5nO1xuICBhYnN0cmFjdCBwcmVwYXJlRXh0ZXJuYWxVcmwoaW50ZXJuYWw6IHN0cmluZyk6IHN0cmluZztcbiAgYWJzdHJhY3QgcHVzaFN0YXRlKHN0YXRlOiBhbnksIHRpdGxlOiBzdHJpbmcsIHVybDogc3RyaW5nLCBxdWVyeVBhcmFtczogc3RyaW5nKTogdm9pZDtcbiAgYWJzdHJhY3QgcmVwbGFjZVN0YXRlKHN0YXRlOiBhbnksIHRpdGxlOiBzdHJpbmcsIHVybDogc3RyaW5nLCBxdWVyeVBhcmFtczogc3RyaW5nKTogdm9pZDtcbiAgYWJzdHJhY3QgZm9yd2FyZCgpOiB2b2lkO1xuICBhYnN0cmFjdCBiYWNrKCk6IHZvaWQ7XG4gIGFic3RyYWN0IG9uUG9wU3RhdGUoZm46IFVybENoYW5nZUxpc3RlbmVyKTogdm9pZDtcbiAgYWJzdHJhY3QgZ2V0QmFzZUhyZWYoKTogc3RyaW5nO1xufVxuXG5cbi8qKlxuICogVGhlIGBBUFBfQkFTRV9IUkVGYCB0b2tlbiByZXByZXNlbnRzIHRoZSBiYXNlIGhyZWYgdG8gYmUgdXNlZCB3aXRoIHRoZVxuICoge0BsaW5rIFBhdGhMb2NhdGlvblN0cmF0ZWd5fS5cbiAqXG4gKiBJZiB5b3UncmUgdXNpbmcge0BsaW5rIFBhdGhMb2NhdGlvblN0cmF0ZWd5fSwgeW91IG11c3QgcHJvdmlkZSBhIHByb3ZpZGVyIHRvIGEgc3RyaW5nXG4gKiByZXByZXNlbnRpbmcgdGhlIFVSTCBwcmVmaXggdGhhdCBzaG91bGQgYmUgcHJlc2VydmVkIHdoZW4gZ2VuZXJhdGluZyBhbmQgcmVjb2duaXppbmdcbiAqIFVSTHMuXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbiAqIGltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsIFJPVVRFUl9QUk9WSURFUlMsIFJvdXRlQ29uZmlnfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuICpcbiAqIEBDb21wb25lbnQoe2RpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU119KVxuICogQFJvdXRlQ29uZmlnKFtcbiAqICB7Li4ufSxcbiAqIF0pXG4gKiBjbGFzcyBBcHBDbXAge1xuICogICAvLyAuLi5cbiAqIH1cbiAqXG4gKiBib290c3RyYXAoQXBwQ21wLCBbXG4gKiAgIFJPVVRFUl9QUk9WSURFUlMsXG4gKiAgIHByb3ZpZGUoQVBQX0JBU0VfSFJFRiwge3VzZVZhbHVlOiAnL215L2FwcCd9KVxuICogXSk7XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNvbnN0IEFQUF9CQVNFX0hSRUY6IE9wYXF1ZVRva2VuID0gQ09OU1RfRVhQUihuZXcgT3BhcXVlVG9rZW4oJ2FwcEJhc2VIcmVmJykpO1xuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplUXVlcnlQYXJhbXMocGFyYW1zOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gKHBhcmFtcy5sZW5ndGggPiAwICYmIHBhcmFtcy5zdWJzdHJpbmcoMCwgMSkgIT0gJz8nKSA/ICgnPycgKyBwYXJhbXMpIDogcGFyYW1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gam9pbldpdGhTbGFzaChzdGFydDogc3RyaW5nLCBlbmQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChzdGFydC5sZW5ndGggPT0gMCkge1xuICAgIHJldHVybiBlbmQ7XG4gIH1cbiAgaWYgKGVuZC5sZW5ndGggPT0gMCkge1xuICAgIHJldHVybiBzdGFydDtcbiAgfVxuICB2YXIgc2xhc2hlcyA9IDA7XG4gIGlmIChzdGFydC5lbmRzV2l0aCgnLycpKSB7XG4gICAgc2xhc2hlcysrO1xuICB9XG4gIGlmIChlbmQuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgc2xhc2hlcysrO1xuICB9XG4gIGlmIChzbGFzaGVzID09IDIpIHtcbiAgICByZXR1cm4gc3RhcnQgKyBlbmQuc3Vic3RyaW5nKDEpO1xuICB9XG4gIGlmIChzbGFzaGVzID09IDEpIHtcbiAgICByZXR1cm4gc3RhcnQgKyBlbmQ7XG4gIH1cbiAgcmV0dXJuIHN0YXJ0ICsgJy8nICsgZW5kO1xufVxuIl19

/***/ },

/***/ 246:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var lang_1 = __webpack_require__(3);
	var lifecycle_annotations_impl_1 = __webpack_require__(247);
	var reflection_1 = __webpack_require__(16);
	function hasLifecycleHook(e, type) {
	    if (!(type instanceof lang_1.Type))
	        return false;
	    return e.name in type.prototype;
	}
	exports.hasLifecycleHook = hasLifecycleHook;
	function getCanActivateHook(type) {
	    var annotations = reflection_1.reflector.annotations(type);
	    for (var i = 0; i < annotations.length; i += 1) {
	        var annotation = annotations[i];
	        if (annotation instanceof lifecycle_annotations_impl_1.CanActivate) {
	            return annotation.fn;
	        }
	    }
	    return null;
	}
	exports.getCanActivateHook = getCanActivateHook;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVfbGlmZWN5Y2xlX3JlZmxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL3NyYy9yb3V0ZXIvbGlmZWN5Y2xlL3JvdXRlX2xpZmVjeWNsZV9yZWZsZWN0b3IudHMiXSwibmFtZXMiOlsiaGFzTGlmZWN5Y2xlSG9vayIsImdldENhbkFjdGl2YXRlSG9vayJdLCJtYXBwaW5ncyI6IkFBQUEscUJBQThCLDBCQUEwQixDQUFDLENBQUE7QUFDekQsMkNBQThDLDhCQUE4QixDQUFDLENBQUE7QUFDN0UsMkJBQXdCLHlDQUF5QyxDQUFDLENBQUE7QUFFbEUsMEJBQWlDLENBQXFCLEVBQUUsSUFBSTtJQUMxREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsWUFBWUEsV0FBSUEsQ0FBQ0EsQ0FBQ0E7UUFBQ0EsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7SUFDMUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBLElBQUlBLElBQVNBLElBQUtBLENBQUNBLFNBQVNBLENBQUNBO0FBQ3hDQSxDQUFDQTtBQUhlLHdCQUFnQixtQkFHL0IsQ0FBQTtBQUVELDRCQUFtQyxJQUFJO0lBQ3JDQyxJQUFJQSxXQUFXQSxHQUFHQSxzQkFBU0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7SUFDOUNBLEdBQUdBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLENBQUNBLEdBQUdBLFdBQVdBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBO1FBQy9DQSxJQUFJQSxVQUFVQSxHQUFHQSxXQUFXQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNoQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsVUFBVUEsWUFBWUEsd0NBQVdBLENBQUNBLENBQUNBLENBQUNBO1lBQ3RDQSxNQUFNQSxDQUFDQSxVQUFVQSxDQUFDQSxFQUFFQSxDQUFDQTtRQUN2QkEsQ0FBQ0E7SUFDSEEsQ0FBQ0E7SUFFREEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7QUFDZEEsQ0FBQ0E7QUFWZSwwQkFBa0IscUJBVWpDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1R5cGUsIGlzUHJlc2VudH0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbmltcG9ydCB7Um91dGVMaWZlY3ljbGVIb29rLCBDYW5BY3RpdmF0ZX0gZnJvbSAnLi9saWZlY3ljbGVfYW5ub3RhdGlvbnNfaW1wbCc7XG5pbXBvcnQge3JlZmxlY3Rvcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvcmVmbGVjdGlvbi9yZWZsZWN0aW9uJztcblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0xpZmVjeWNsZUhvb2soZTogUm91dGVMaWZlY3ljbGVIb29rLCB0eXBlKTogYm9vbGVhbiB7XG4gIGlmICghKHR5cGUgaW5zdGFuY2VvZiBUeXBlKSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gZS5uYW1lIGluKDxhbnk+dHlwZSkucHJvdG90eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2FuQWN0aXZhdGVIb29rKHR5cGUpOiBGdW5jdGlvbiB7XG4gIHZhciBhbm5vdGF0aW9ucyA9IHJlZmxlY3Rvci5hbm5vdGF0aW9ucyh0eXBlKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbm5vdGF0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGxldCBhbm5vdGF0aW9uID0gYW5ub3RhdGlvbnNbaV07XG4gICAgaWYgKGFubm90YXRpb24gaW5zdGFuY2VvZiBDYW5BY3RpdmF0ZSkge1xuICAgICAgcmV0dXJuIGFubm90YXRpb24uZm47XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG4iXX0=

/***/ },

/***/ 247:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var lang_1 = __webpack_require__(3);
	var RouteLifecycleHook = (function () {
	    function RouteLifecycleHook(name) {
	        this.name = name;
	    }
	    RouteLifecycleHook = __decorate([
	        lang_1.CONST(), 
	        __metadata('design:paramtypes', [String])
	    ], RouteLifecycleHook);
	    return RouteLifecycleHook;
	})();
	exports.RouteLifecycleHook = RouteLifecycleHook;
	var CanActivate = (function () {
	    function CanActivate(fn) {
	        this.fn = fn;
	    }
	    CanActivate = __decorate([
	        lang_1.CONST(), 
	        __metadata('design:paramtypes', [Function])
	    ], CanActivate);
	    return CanActivate;
	})();
	exports.CanActivate = CanActivate;
	exports.routerCanReuse = lang_1.CONST_EXPR(new RouteLifecycleHook("routerCanReuse"));
	exports.routerCanDeactivate = lang_1.CONST_EXPR(new RouteLifecycleHook("routerCanDeactivate"));
	exports.routerOnActivate = lang_1.CONST_EXPR(new RouteLifecycleHook("routerOnActivate"));
	exports.routerOnReuse = lang_1.CONST_EXPR(new RouteLifecycleHook("routerOnReuse"));
	exports.routerOnDeactivate = lang_1.CONST_EXPR(new RouteLifecycleHook("routerOnDeactivate"));
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlmZWN5Y2xlX2Fubm90YXRpb25zX2ltcGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbmd1bGFyMi9zcmMvcm91dGVyL2xpZmVjeWNsZS9saWZlY3ljbGVfYW5ub3RhdGlvbnNfaW1wbC50cyJdLCJuYW1lcyI6WyJSb3V0ZUxpZmVjeWNsZUhvb2siLCJSb3V0ZUxpZmVjeWNsZUhvb2suY29uc3RydWN0b3IiLCJDYW5BY3RpdmF0ZSIsIkNhbkFjdGl2YXRlLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBZ0MsMEJBQTBCLENBQUMsQ0FBQTtBQUUzRDtJQUVFQSw0QkFBbUJBLElBQVlBO1FBQVpDLFNBQUlBLEdBQUpBLElBQUlBLENBQVFBO0lBQUdBLENBQUNBO0lBRnJDRDtRQUFDQSxZQUFLQSxFQUFFQTs7MkJBR1BBO0lBQURBLHlCQUFDQTtBQUFEQSxDQUFDQSxBQUhELElBR0M7QUFGWSwwQkFBa0IscUJBRTlCLENBQUE7QUFFRDtJQUVFRSxxQkFBbUJBLEVBQVlBO1FBQVpDLE9BQUVBLEdBQUZBLEVBQUVBLENBQVVBO0lBQUdBLENBQUNBO0lBRnJDRDtRQUFDQSxZQUFLQSxFQUFFQTs7b0JBR1BBO0lBQURBLGtCQUFDQTtBQUFEQSxDQUFDQSxBQUhELElBR0M7QUFGWSxtQkFBVyxjQUV2QixDQUFBO0FBRVksc0JBQWMsR0FDdkIsaUJBQVUsQ0FBQyxJQUFJLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztBQUM1QywyQkFBbUIsR0FDNUIsaUJBQVUsQ0FBQyxJQUFJLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztBQUNqRCx3QkFBZ0IsR0FDekIsaUJBQVUsQ0FBQyxJQUFJLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztBQUM5QyxxQkFBYSxHQUN0QixpQkFBVSxDQUFDLElBQUksa0JBQWtCLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztBQUMzQywwQkFBa0IsR0FDM0IsaUJBQVUsQ0FBQyxJQUFJLGtCQUFrQixDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q09OU1QsIENPTlNUX0VYUFJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5cbkBDT05TVCgpXG5leHBvcnQgY2xhc3MgUm91dGVMaWZlY3ljbGVIb29rIHtcbiAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZykge31cbn1cblxuQENPTlNUKClcbmV4cG9ydCBjbGFzcyBDYW5BY3RpdmF0ZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBmbjogRnVuY3Rpb24pIHt9XG59XG5cbmV4cG9ydCBjb25zdCByb3V0ZXJDYW5SZXVzZTogUm91dGVMaWZlY3ljbGVIb29rID1cbiAgICBDT05TVF9FWFBSKG5ldyBSb3V0ZUxpZmVjeWNsZUhvb2soXCJyb3V0ZXJDYW5SZXVzZVwiKSk7XG5leHBvcnQgY29uc3Qgcm91dGVyQ2FuRGVhY3RpdmF0ZTogUm91dGVMaWZlY3ljbGVIb29rID1cbiAgICBDT05TVF9FWFBSKG5ldyBSb3V0ZUxpZmVjeWNsZUhvb2soXCJyb3V0ZXJDYW5EZWFjdGl2YXRlXCIpKTtcbmV4cG9ydCBjb25zdCByb3V0ZXJPbkFjdGl2YXRlOiBSb3V0ZUxpZmVjeWNsZUhvb2sgPVxuICAgIENPTlNUX0VYUFIobmV3IFJvdXRlTGlmZWN5Y2xlSG9vayhcInJvdXRlck9uQWN0aXZhdGVcIikpO1xuZXhwb3J0IGNvbnN0IHJvdXRlck9uUmV1c2U6IFJvdXRlTGlmZWN5Y2xlSG9vayA9XG4gICAgQ09OU1RfRVhQUihuZXcgUm91dGVMaWZlY3ljbGVIb29rKFwicm91dGVyT25SZXVzZVwiKSk7XG5leHBvcnQgY29uc3Qgcm91dGVyT25EZWFjdGl2YXRlOiBSb3V0ZUxpZmVjeWNsZUhvb2sgPVxuICAgIENPTlNUX0VYUFIobmV3IFJvdXRlTGlmZWN5Y2xlSG9vayhcInJvdXRlck9uRGVhY3RpdmF0ZVwiKSk7XG4iXX0=

/***/ },

/***/ 248:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
	var async_1 = __webpack_require__(50);
	var collection_1 = __webpack_require__(11);
	var lang_1 = __webpack_require__(3);
	var core_1 = __webpack_require__(23);
	var routerMod = __webpack_require__(229);
	var instruction_1 = __webpack_require__(234);
	var hookMod = __webpack_require__(249);
	var route_lifecycle_reflector_1 = __webpack_require__(246);
	var _resolveToTrue = async_1.PromiseWrapper.resolve(true);
	/**
	 * A router outlet is a placeholder that Angular dynamically fills based on the application's route.
	 *
	 * ## Use
	 *
	 * ```
	 * <router-outlet></router-outlet>
	 * ```
	 */
	var RouterOutlet = (function () {
	    function RouterOutlet(_elementRef, _loader, _parentRouter, nameAttr) {
	        this._elementRef = _elementRef;
	        this._loader = _loader;
	        this._parentRouter = _parentRouter;
	        this.name = null;
	        this._componentRef = null;
	        this._currentInstruction = null;
	        if (lang_1.isPresent(nameAttr)) {
	            this.name = nameAttr;
	            this._parentRouter.registerAuxOutlet(this);
	        }
	        else {
	            this._parentRouter.registerPrimaryOutlet(this);
	        }
	    }
	    /**
	     * Called by the Router to instantiate a new component during the commit phase of a navigation.
	     * This method in turn is responsible for calling the `routerOnActivate` hook of its child.
	     */
	    RouterOutlet.prototype.activate = function (nextInstruction) {
	        var _this = this;
	        var previousInstruction = this._currentInstruction;
	        this._currentInstruction = nextInstruction;
	        var componentType = nextInstruction.componentType;
	        var childRouter = this._parentRouter.childRouter(componentType);
	        var providers = core_1.Injector.resolve([
	            core_1.provide(instruction_1.RouteData, { useValue: nextInstruction.routeData }),
	            core_1.provide(instruction_1.RouteParams, { useValue: new instruction_1.RouteParams(nextInstruction.params) }),
	            core_1.provide(routerMod.Router, { useValue: childRouter })
	        ]);
	        this._componentRef =
	            this._loader.loadNextToLocation(componentType, this._elementRef, providers);
	        return this._componentRef.then(function (componentRef) {
	            if (route_lifecycle_reflector_1.hasLifecycleHook(hookMod.routerOnActivate, componentType)) {
	                return _this._componentRef.then(function (ref) {
	                    return ref.instance.routerOnActivate(nextInstruction, previousInstruction);
	                });
	            }
	            else {
	                return componentRef;
	            }
	        });
	    };
	    /**
	     * Called by the {@link Router} during the commit phase of a navigation when an outlet
	     * reuses a component between different routes.
	     * This method in turn is responsible for calling the `routerOnReuse` hook of its child.
	     */
	    RouterOutlet.prototype.reuse = function (nextInstruction) {
	        var previousInstruction = this._currentInstruction;
	        this._currentInstruction = nextInstruction;
	        // it's possible the component is removed before it can be reactivated (if nested withing
	        // another dynamically loaded component, for instance). In that case, we simply activate
	        // a new one.
	        if (lang_1.isBlank(this._componentRef)) {
	            return this.activate(nextInstruction);
	        }
	        else {
	            return async_1.PromiseWrapper.resolve(route_lifecycle_reflector_1.hasLifecycleHook(hookMod.routerOnReuse, this._currentInstruction.componentType) ?
	                this._componentRef.then(function (ref) {
	                    return ref.instance.routerOnReuse(nextInstruction, previousInstruction);
	                }) :
	                true);
	        }
	    };
	    /**
	     * Called by the {@link Router} when an outlet disposes of a component's contents.
	     * This method in turn is responsible for calling the `routerOnDeactivate` hook of its child.
	     */
	    RouterOutlet.prototype.deactivate = function (nextInstruction) {
	        var _this = this;
	        var next = _resolveToTrue;
	        if (lang_1.isPresent(this._componentRef) && lang_1.isPresent(this._currentInstruction) &&
	            route_lifecycle_reflector_1.hasLifecycleHook(hookMod.routerOnDeactivate, this._currentInstruction.componentType)) {
	            next = this._componentRef.then(function (ref) {
	                return ref.instance
	                    .routerOnDeactivate(nextInstruction, _this._currentInstruction);
	            });
	        }
	        return next.then(function (_) {
	            if (lang_1.isPresent(_this._componentRef)) {
	                var onDispose = _this._componentRef.then(function (ref) { return ref.dispose(); });
	                _this._componentRef = null;
	                return onDispose;
	            }
	        });
	    };
	    /**
	     * Called by the {@link Router} during recognition phase of a navigation.
	     *
	     * If this resolves to `false`, the given navigation is cancelled.
	     *
	     * This method delegates to the child component's `routerCanDeactivate` hook if it exists,
	     * and otherwise resolves to true.
	     */
	    RouterOutlet.prototype.routerCanDeactivate = function (nextInstruction) {
	        var _this = this;
	        if (lang_1.isBlank(this._currentInstruction)) {
	            return _resolveToTrue;
	        }
	        if (route_lifecycle_reflector_1.hasLifecycleHook(hookMod.routerCanDeactivate, this._currentInstruction.componentType)) {
	            return this._componentRef.then(function (ref) {
	                return ref.instance
	                    .routerCanDeactivate(nextInstruction, _this._currentInstruction);
	            });
	        }
	        else {
	            return _resolveToTrue;
	        }
	    };
	    /**
	     * Called by the {@link Router} during recognition phase of a navigation.
	     *
	     * If the new child component has a different Type than the existing child component,
	     * this will resolve to `false`. You can't reuse an old component when the new component
	     * is of a different Type.
	     *
	     * Otherwise, this method delegates to the child component's `routerCanReuse` hook if it exists,
	     * or resolves to true if the hook is not present.
	     */
	    RouterOutlet.prototype.routerCanReuse = function (nextInstruction) {
	        var _this = this;
	        var result;
	        if (lang_1.isBlank(this._currentInstruction) ||
	            this._currentInstruction.componentType != nextInstruction.componentType) {
	            result = false;
	        }
	        else if (route_lifecycle_reflector_1.hasLifecycleHook(hookMod.routerCanReuse, this._currentInstruction.componentType)) {
	            result = this._componentRef.then(function (ref) {
	                return ref.instance.routerCanReuse(nextInstruction, _this._currentInstruction);
	            });
	        }
	        else {
	            result = nextInstruction == this._currentInstruction ||
	                (lang_1.isPresent(nextInstruction.params) && lang_1.isPresent(this._currentInstruction.params) &&
	                    collection_1.StringMapWrapper.equals(nextInstruction.params, this._currentInstruction.params));
	        }
	        return async_1.PromiseWrapper.resolve(result);
	    };
	    RouterOutlet.prototype.ngOnDestroy = function () { this._parentRouter.unregisterPrimaryOutlet(this); };
	    RouterOutlet = __decorate([
	        core_1.Directive({ selector: 'router-outlet' }),
	        __param(3, core_1.Attribute('name')), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.DynamicComponentLoader, routerMod.Router, String])
	    ], RouterOutlet);
	    return RouterOutlet;
	})();
	exports.RouterOutlet = RouterOutlet;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyX291dGxldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL3NyYy9yb3V0ZXIvZGlyZWN0aXZlcy9yb3V0ZXJfb3V0bGV0LnRzIl0sIm5hbWVzIjpbIlJvdXRlck91dGxldCIsIlJvdXRlck91dGxldC5jb25zdHJ1Y3RvciIsIlJvdXRlck91dGxldC5hY3RpdmF0ZSIsIlJvdXRlck91dGxldC5yZXVzZSIsIlJvdXRlck91dGxldC5kZWFjdGl2YXRlIiwiUm91dGVyT3V0bGV0LnJvdXRlckNhbkRlYWN0aXZhdGUiLCJSb3V0ZXJPdXRsZXQucm91dGVyQ2FuUmV1c2UiLCJSb3V0ZXJPdXRsZXQubmdPbkRlc3Ryb3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHNCQUE2QiwyQkFBMkIsQ0FBQyxDQUFBO0FBQ3pELDJCQUErQixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQ2hFLHFCQUFpQywwQkFBMEIsQ0FBQyxDQUFBO0FBRTVELHFCQVVPLGVBQWUsQ0FBQyxDQUFBO0FBRXZCLElBQVksU0FBUyxXQUFNLFdBQVcsQ0FBQyxDQUFBO0FBQ3ZDLDRCQUEyRCxnQkFBZ0IsQ0FBQyxDQUFBO0FBQzVFLElBQVksT0FBTyxXQUFNLG9DQUFvQyxDQUFDLENBQUE7QUFDOUQsMENBQStCLHdDQUF3QyxDQUFDLENBQUE7QUFHeEUsSUFBSSxjQUFjLEdBQUcsc0JBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFbEQ7Ozs7Ozs7O0dBUUc7QUFDSDtJQU1FQSxzQkFBb0JBLFdBQXVCQSxFQUFVQSxPQUErQkEsRUFDaEVBLGFBQStCQSxFQUFxQkEsUUFBZ0JBO1FBRHBFQyxnQkFBV0EsR0FBWEEsV0FBV0EsQ0FBWUE7UUFBVUEsWUFBT0EsR0FBUEEsT0FBT0EsQ0FBd0JBO1FBQ2hFQSxrQkFBYUEsR0FBYkEsYUFBYUEsQ0FBa0JBO1FBTG5EQSxTQUFJQSxHQUFXQSxJQUFJQSxDQUFDQTtRQUNaQSxrQkFBYUEsR0FBMEJBLElBQUlB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ZUFBZUEsQ0FBQ0EsTUFBTUEsRUFBRUEsSUFBSUEsQ0FBQ0EsbUJBQW1CQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUM5RkEsQ0FBQ0E7UUFDREEsTUFBTUEsQ0FBbUJBLHNCQUFjQSxDQUFDQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtJQUMxREEsQ0FBQ0E7SUFFRE4sa0NBQVdBLEdBQVhBLGNBQXNCTyxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSx1QkFBdUJBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO0lBNUkzRVA7UUFBQ0EsZ0JBQVNBLENBQUNBLEVBQUNBLFFBQVFBLEVBQUVBLGVBQWVBLEVBQUNBLENBQUNBO1FBT2dCQSxXQUFDQSxnQkFBU0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQUE7O3FCQXNJeEVBO0lBQURBLG1CQUFDQTtBQUFEQSxDQUFDQSxBQTdJRCxJQTZJQztBQTVJWSxvQkFBWSxlQTRJeEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UHJvbWlzZVdyYXBwZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvYXN5bmMnO1xuaW1wb3J0IHtTdHJpbmdNYXBXcmFwcGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2NvbGxlY3Rpb24nO1xuaW1wb3J0IHtpc0JsYW5rLCBpc1ByZXNlbnR9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5cbmltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgQXR0cmlidXRlLFxuICBEeW5hbWljQ29tcG9uZW50TG9hZGVyLFxuICBDb21wb25lbnRSZWYsXG4gIEVsZW1lbnRSZWYsXG4gIEluamVjdG9yLFxuICBwcm92aWRlLFxuICBEZXBlbmRlbmN5LFxuICBPbkRlc3Ryb3lcbn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbmltcG9ydCAqIGFzIHJvdXRlck1vZCBmcm9tICcuLi9yb3V0ZXInO1xuaW1wb3J0IHtDb21wb25lbnRJbnN0cnVjdGlvbiwgUm91dGVQYXJhbXMsIFJvdXRlRGF0YX0gZnJvbSAnLi4vaW5zdHJ1Y3Rpb24nO1xuaW1wb3J0ICogYXMgaG9va01vZCBmcm9tICcuLi9saWZlY3ljbGUvbGlmZWN5Y2xlX2Fubm90YXRpb25zJztcbmltcG9ydCB7aGFzTGlmZWN5Y2xlSG9va30gZnJvbSAnLi4vbGlmZWN5Y2xlL3JvdXRlX2xpZmVjeWNsZV9yZWZsZWN0b3InO1xuaW1wb3J0IHtPbkFjdGl2YXRlLCBDYW5SZXVzZSwgT25SZXVzZSwgT25EZWFjdGl2YXRlLCBDYW5EZWFjdGl2YXRlfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcblxubGV0IF9yZXNvbHZlVG9UcnVlID0gUHJvbWlzZVdyYXBwZXIucmVzb2x2ZSh0cnVlKTtcblxuLyoqXG4gKiBBIHJvdXRlciBvdXRsZXQgaXMgYSBwbGFjZWhvbGRlciB0aGF0IEFuZ3VsYXIgZHluYW1pY2FsbHkgZmlsbHMgYmFzZWQgb24gdGhlIGFwcGxpY2F0aW9uJ3Mgcm91dGUuXG4gKlxuICogIyMgVXNlXG4gKlxuICogYGBgXG4gKiA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gKiBgYGBcbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdyb3V0ZXItb3V0bGV0J30pXG5leHBvcnQgY2xhc3MgUm91dGVyT3V0bGV0IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgbmFtZTogc3RyaW5nID0gbnVsbDtcbiAgcHJpdmF0ZSBfY29tcG9uZW50UmVmOiBQcm9taXNlPENvbXBvbmVudFJlZj4gPSBudWxsO1xuICBwcml2YXRlIF9jdXJyZW50SW5zdHJ1Y3Rpb246IENvbXBvbmVudEluc3RydWN0aW9uID0gbnVsbDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIF9sb2FkZXI6IER5bmFtaWNDb21wb25lbnRMb2FkZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3BhcmVudFJvdXRlcjogcm91dGVyTW9kLlJvdXRlciwgQEF0dHJpYnV0ZSgnbmFtZScpIG5hbWVBdHRyOiBzdHJpbmcpIHtcbiAgICBpZiAoaXNQcmVzZW50KG5hbWVBdHRyKSkge1xuICAgICAgdGhpcy5uYW1lID0gbmFtZUF0dHI7XG4gICAgICB0aGlzLl9wYXJlbnRSb3V0ZXIucmVnaXN0ZXJBdXhPdXRsZXQodGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3BhcmVudFJvdXRlci5yZWdpc3RlclByaW1hcnlPdXRsZXQodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBieSB0aGUgUm91dGVyIHRvIGluc3RhbnRpYXRlIGEgbmV3IGNvbXBvbmVudCBkdXJpbmcgdGhlIGNvbW1pdCBwaGFzZSBvZiBhIG5hdmlnYXRpb24uXG4gICAqIFRoaXMgbWV0aG9kIGluIHR1cm4gaXMgcmVzcG9uc2libGUgZm9yIGNhbGxpbmcgdGhlIGByb3V0ZXJPbkFjdGl2YXRlYCBob29rIG9mIGl0cyBjaGlsZC5cbiAgICovXG4gIGFjdGl2YXRlKG5leHRJbnN0cnVjdGlvbjogQ29tcG9uZW50SW5zdHJ1Y3Rpb24pOiBQcm9taXNlPGFueT4ge1xuICAgIHZhciBwcmV2aW91c0luc3RydWN0aW9uID0gdGhpcy5fY3VycmVudEluc3RydWN0aW9uO1xuICAgIHRoaXMuX2N1cnJlbnRJbnN0cnVjdGlvbiA9IG5leHRJbnN0cnVjdGlvbjtcbiAgICB2YXIgY29tcG9uZW50VHlwZSA9IG5leHRJbnN0cnVjdGlvbi5jb21wb25lbnRUeXBlO1xuICAgIHZhciBjaGlsZFJvdXRlciA9IHRoaXMuX3BhcmVudFJvdXRlci5jaGlsZFJvdXRlcihjb21wb25lbnRUeXBlKTtcblxuICAgIHZhciBwcm92aWRlcnMgPSBJbmplY3Rvci5yZXNvbHZlKFtcbiAgICAgIHByb3ZpZGUoUm91dGVEYXRhLCB7dXNlVmFsdWU6IG5leHRJbnN0cnVjdGlvbi5yb3V0ZURhdGF9KSxcbiAgICAgIHByb3ZpZGUoUm91dGVQYXJhbXMsIHt1c2VWYWx1ZTogbmV3IFJvdXRlUGFyYW1zKG5leHRJbnN0cnVjdGlvbi5wYXJhbXMpfSksXG4gICAgICBwcm92aWRlKHJvdXRlck1vZC5Sb3V0ZXIsIHt1c2VWYWx1ZTogY2hpbGRSb3V0ZXJ9KVxuICAgIF0pO1xuICAgIHRoaXMuX2NvbXBvbmVudFJlZiA9XG4gICAgICAgIHRoaXMuX2xvYWRlci5sb2FkTmV4dFRvTG9jYXRpb24oY29tcG9uZW50VHlwZSwgdGhpcy5fZWxlbWVudFJlZiwgcHJvdmlkZXJzKTtcbiAgICByZXR1cm4gdGhpcy5fY29tcG9uZW50UmVmLnRoZW4oKGNvbXBvbmVudFJlZikgPT4ge1xuICAgICAgaWYgKGhhc0xpZmVjeWNsZUhvb2soaG9va01vZC5yb3V0ZXJPbkFjdGl2YXRlLCBjb21wb25lbnRUeXBlKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29tcG9uZW50UmVmLnRoZW4oXG4gICAgICAgICAgICAocmVmOiBDb21wb25lbnRSZWYpID0+XG4gICAgICAgICAgICAgICAgKDxPbkFjdGl2YXRlPnJlZi5pbnN0YW5jZSkucm91dGVyT25BY3RpdmF0ZShuZXh0SW5zdHJ1Y3Rpb24sIHByZXZpb3VzSW5zdHJ1Y3Rpb24pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRSZWY7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIGJ5IHRoZSB7QGxpbmsgUm91dGVyfSBkdXJpbmcgdGhlIGNvbW1pdCBwaGFzZSBvZiBhIG5hdmlnYXRpb24gd2hlbiBhbiBvdXRsZXRcbiAgICogcmV1c2VzIGEgY29tcG9uZW50IGJldHdlZW4gZGlmZmVyZW50IHJvdXRlcy5cbiAgICogVGhpcyBtZXRob2QgaW4gdHVybiBpcyByZXNwb25zaWJsZSBmb3IgY2FsbGluZyB0aGUgYHJvdXRlck9uUmV1c2VgIGhvb2sgb2YgaXRzIGNoaWxkLlxuICAgKi9cbiAgcmV1c2UobmV4dEluc3RydWN0aW9uOiBDb21wb25lbnRJbnN0cnVjdGlvbik6IFByb21pc2U8YW55PiB7XG4gICAgdmFyIHByZXZpb3VzSW5zdHJ1Y3Rpb24gPSB0aGlzLl9jdXJyZW50SW5zdHJ1Y3Rpb247XG4gICAgdGhpcy5fY3VycmVudEluc3RydWN0aW9uID0gbmV4dEluc3RydWN0aW9uO1xuXG4gICAgLy8gaXQncyBwb3NzaWJsZSB0aGUgY29tcG9uZW50IGlzIHJlbW92ZWQgYmVmb3JlIGl0IGNhbiBiZSByZWFjdGl2YXRlZCAoaWYgbmVzdGVkIHdpdGhpbmdcbiAgICAvLyBhbm90aGVyIGR5bmFtaWNhbGx5IGxvYWRlZCBjb21wb25lbnQsIGZvciBpbnN0YW5jZSkuIEluIHRoYXQgY2FzZSwgd2Ugc2ltcGx5IGFjdGl2YXRlXG4gICAgLy8gYSBuZXcgb25lLlxuICAgIGlmIChpc0JsYW5rKHRoaXMuX2NvbXBvbmVudFJlZikpIHtcbiAgICAgIHJldHVybiB0aGlzLmFjdGl2YXRlKG5leHRJbnN0cnVjdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBQcm9taXNlV3JhcHBlci5yZXNvbHZlKFxuICAgICAgICAgIGhhc0xpZmVjeWNsZUhvb2soaG9va01vZC5yb3V0ZXJPblJldXNlLCB0aGlzLl9jdXJyZW50SW5zdHJ1Y3Rpb24uY29tcG9uZW50VHlwZSkgP1xuICAgICAgICAgICAgICB0aGlzLl9jb21wb25lbnRSZWYudGhlbihcbiAgICAgICAgICAgICAgICAgIChyZWY6IENvbXBvbmVudFJlZikgPT5cbiAgICAgICAgICAgICAgICAgICAgICAoPE9uUmV1c2U+cmVmLmluc3RhbmNlKS5yb3V0ZXJPblJldXNlKG5leHRJbnN0cnVjdGlvbiwgcHJldmlvdXNJbnN0cnVjdGlvbikpIDpcbiAgICAgICAgICAgICAgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBieSB0aGUge0BsaW5rIFJvdXRlcn0gd2hlbiBhbiBvdXRsZXQgZGlzcG9zZXMgb2YgYSBjb21wb25lbnQncyBjb250ZW50cy5cbiAgICogVGhpcyBtZXRob2QgaW4gdHVybiBpcyByZXNwb25zaWJsZSBmb3IgY2FsbGluZyB0aGUgYHJvdXRlck9uRGVhY3RpdmF0ZWAgaG9vayBvZiBpdHMgY2hpbGQuXG4gICAqL1xuICBkZWFjdGl2YXRlKG5leHRJbnN0cnVjdGlvbjogQ29tcG9uZW50SW5zdHJ1Y3Rpb24pOiBQcm9taXNlPGFueT4ge1xuICAgIHZhciBuZXh0ID0gX3Jlc29sdmVUb1RydWU7XG4gICAgaWYgKGlzUHJlc2VudCh0aGlzLl9jb21wb25lbnRSZWYpICYmIGlzUHJlc2VudCh0aGlzLl9jdXJyZW50SW5zdHJ1Y3Rpb24pICYmXG4gICAgICAgIGhhc0xpZmVjeWNsZUhvb2soaG9va01vZC5yb3V0ZXJPbkRlYWN0aXZhdGUsIHRoaXMuX2N1cnJlbnRJbnN0cnVjdGlvbi5jb21wb25lbnRUeXBlKSkge1xuICAgICAgbmV4dCA9IHRoaXMuX2NvbXBvbmVudFJlZi50aGVuKFxuICAgICAgICAgIChyZWY6IENvbXBvbmVudFJlZikgPT5cbiAgICAgICAgICAgICAgKDxPbkRlYWN0aXZhdGU+cmVmLmluc3RhbmNlKVxuICAgICAgICAgICAgICAgICAgLnJvdXRlck9uRGVhY3RpdmF0ZShuZXh0SW5zdHJ1Y3Rpb24sIHRoaXMuX2N1cnJlbnRJbnN0cnVjdGlvbikpO1xuICAgIH1cbiAgICByZXR1cm4gbmV4dC50aGVuKChfKSA9PiB7XG4gICAgICBpZiAoaXNQcmVzZW50KHRoaXMuX2NvbXBvbmVudFJlZikpIHtcbiAgICAgICAgdmFyIG9uRGlzcG9zZSA9IHRoaXMuX2NvbXBvbmVudFJlZi50aGVuKChyZWY6IENvbXBvbmVudFJlZikgPT4gcmVmLmRpc3Bvc2UoKSk7XG4gICAgICAgIHRoaXMuX2NvbXBvbmVudFJlZiA9IG51bGw7XG4gICAgICAgIHJldHVybiBvbkRpc3Bvc2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIGJ5IHRoZSB7QGxpbmsgUm91dGVyfSBkdXJpbmcgcmVjb2duaXRpb24gcGhhc2Ugb2YgYSBuYXZpZ2F0aW9uLlxuICAgKlxuICAgKiBJZiB0aGlzIHJlc29sdmVzIHRvIGBmYWxzZWAsIHRoZSBnaXZlbiBuYXZpZ2F0aW9uIGlzIGNhbmNlbGxlZC5cbiAgICpcbiAgICogVGhpcyBtZXRob2QgZGVsZWdhdGVzIHRvIHRoZSBjaGlsZCBjb21wb25lbnQncyBgcm91dGVyQ2FuRGVhY3RpdmF0ZWAgaG9vayBpZiBpdCBleGlzdHMsXG4gICAqIGFuZCBvdGhlcndpc2UgcmVzb2x2ZXMgdG8gdHJ1ZS5cbiAgICovXG4gIHJvdXRlckNhbkRlYWN0aXZhdGUobmV4dEluc3RydWN0aW9uOiBDb21wb25lbnRJbnN0cnVjdGlvbik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmIChpc0JsYW5rKHRoaXMuX2N1cnJlbnRJbnN0cnVjdGlvbikpIHtcbiAgICAgIHJldHVybiBfcmVzb2x2ZVRvVHJ1ZTtcbiAgICB9XG4gICAgaWYgKGhhc0xpZmVjeWNsZUhvb2soaG9va01vZC5yb3V0ZXJDYW5EZWFjdGl2YXRlLCB0aGlzLl9jdXJyZW50SW5zdHJ1Y3Rpb24uY29tcG9uZW50VHlwZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jb21wb25lbnRSZWYudGhlbihcbiAgICAgICAgICAocmVmOiBDb21wb25lbnRSZWYpID0+XG4gICAgICAgICAgICAgICg8Q2FuRGVhY3RpdmF0ZT5yZWYuaW5zdGFuY2UpXG4gICAgICAgICAgICAgICAgICAucm91dGVyQ2FuRGVhY3RpdmF0ZShuZXh0SW5zdHJ1Y3Rpb24sIHRoaXMuX2N1cnJlbnRJbnN0cnVjdGlvbikpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gX3Jlc29sdmVUb1RydWU7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBieSB0aGUge0BsaW5rIFJvdXRlcn0gZHVyaW5nIHJlY29nbml0aW9uIHBoYXNlIG9mIGEgbmF2aWdhdGlvbi5cbiAgICpcbiAgICogSWYgdGhlIG5ldyBjaGlsZCBjb21wb25lbnQgaGFzIGEgZGlmZmVyZW50IFR5cGUgdGhhbiB0aGUgZXhpc3RpbmcgY2hpbGQgY29tcG9uZW50LFxuICAgKiB0aGlzIHdpbGwgcmVzb2x2ZSB0byBgZmFsc2VgLiBZb3UgY2FuJ3QgcmV1c2UgYW4gb2xkIGNvbXBvbmVudCB3aGVuIHRoZSBuZXcgY29tcG9uZW50XG4gICAqIGlzIG9mIGEgZGlmZmVyZW50IFR5cGUuXG4gICAqXG4gICAqIE90aGVyd2lzZSwgdGhpcyBtZXRob2QgZGVsZWdhdGVzIHRvIHRoZSBjaGlsZCBjb21wb25lbnQncyBgcm91dGVyQ2FuUmV1c2VgIGhvb2sgaWYgaXQgZXhpc3RzLFxuICAgKiBvciByZXNvbHZlcyB0byB0cnVlIGlmIHRoZSBob29rIGlzIG5vdCBwcmVzZW50LlxuICAgKi9cbiAgcm91dGVyQ2FuUmV1c2UobmV4dEluc3RydWN0aW9uOiBDb21wb25lbnRJbnN0cnVjdGlvbik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHZhciByZXN1bHQ7XG5cbiAgICBpZiAoaXNCbGFuayh0aGlzLl9jdXJyZW50SW5zdHJ1Y3Rpb24pIHx8XG4gICAgICAgIHRoaXMuX2N1cnJlbnRJbnN0cnVjdGlvbi5jb21wb25lbnRUeXBlICE9IG5leHRJbnN0cnVjdGlvbi5jb21wb25lbnRUeXBlKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGhhc0xpZmVjeWNsZUhvb2soaG9va01vZC5yb3V0ZXJDYW5SZXVzZSwgdGhpcy5fY3VycmVudEluc3RydWN0aW9uLmNvbXBvbmVudFR5cGUpKSB7XG4gICAgICByZXN1bHQgPSB0aGlzLl9jb21wb25lbnRSZWYudGhlbihcbiAgICAgICAgICAocmVmOiBDb21wb25lbnRSZWYpID0+XG4gICAgICAgICAgICAgICg8Q2FuUmV1c2U+cmVmLmluc3RhbmNlKS5yb3V0ZXJDYW5SZXVzZShuZXh0SW5zdHJ1Y3Rpb24sIHRoaXMuX2N1cnJlbnRJbnN0cnVjdGlvbikpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSBuZXh0SW5zdHJ1Y3Rpb24gPT0gdGhpcy5fY3VycmVudEluc3RydWN0aW9uIHx8XG4gICAgICAgICAgICAgICAoaXNQcmVzZW50KG5leHRJbnN0cnVjdGlvbi5wYXJhbXMpICYmIGlzUHJlc2VudCh0aGlzLl9jdXJyZW50SW5zdHJ1Y3Rpb24ucGFyYW1zKSAmJlxuICAgICAgICAgICAgICAgIFN0cmluZ01hcFdyYXBwZXIuZXF1YWxzKG5leHRJbnN0cnVjdGlvbi5wYXJhbXMsIHRoaXMuX2N1cnJlbnRJbnN0cnVjdGlvbi5wYXJhbXMpKTtcbiAgICB9XG4gICAgcmV0dXJuIDxQcm9taXNlPGJvb2xlYW4+PlByb21pc2VXcmFwcGVyLnJlc29sdmUocmVzdWx0KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQgeyB0aGlzLl9wYXJlbnRSb3V0ZXIudW5yZWdpc3RlclByaW1hcnlPdXRsZXQodGhpcyk7IH1cbn1cbiJdfQ==

/***/ },

/***/ 249:
/***/ function(module, exports, __webpack_require__) {

	'use strict';/**
	 * This indirection is needed to free up Component, etc symbols in the public API
	 * to be used by the decorator versions of these annotations.
	 */
	var decorators_1 = __webpack_require__(8);
	var lifecycle_annotations_impl_1 = __webpack_require__(247);
	var lifecycle_annotations_impl_2 = __webpack_require__(247);
	exports.routerCanReuse = lifecycle_annotations_impl_2.routerCanReuse;
	exports.routerCanDeactivate = lifecycle_annotations_impl_2.routerCanDeactivate;
	exports.routerOnActivate = lifecycle_annotations_impl_2.routerOnActivate;
	exports.routerOnReuse = lifecycle_annotations_impl_2.routerOnReuse;
	exports.routerOnDeactivate = lifecycle_annotations_impl_2.routerOnDeactivate;
	/**
	 * Defines route lifecycle hook `CanActivate`, which is called by the router to determine
	 * if a component can be instantiated as part of a navigation.
	 *
	 * <aside class="is-right">
	 * Note that unlike other lifecycle hooks, this one uses an annotation rather than an interface.
	 * This is because the `CanActivate` function is called before the component is instantiated.
	 * </aside>
	 *
	 * The `CanActivate` hook is called with two {@link ComponentInstruction}s as parameters, the first
	 * representing the current route being navigated to, and the second parameter representing the
	 * previous route or `null`.
	 *
	 * ```typescript
	 * @CanActivate((next, prev) => boolean | Promise<boolean>)
	 * ```
	 *
	 * If `CanActivate` returns or resolves to `false`, the navigation is cancelled.
	 * If `CanActivate` throws or rejects, the navigation is also cancelled.
	 * If `CanActivate` returns or resolves to `true`, navigation continues, the component is
	 * instantiated, and the {@link OnActivate} hook of that component is called if implemented.
	 *
	 * ### Example
	 *
	 * {@example router/ts/can_activate/can_activate_example.ts region='canActivate' }
	 */
	exports.CanActivate = decorators_1.makeDecorator(lifecycle_annotations_impl_1.CanActivate);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlmZWN5Y2xlX2Fubm90YXRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYW5ndWxhcjIvc3JjL3JvdXRlci9saWZlY3ljbGUvbGlmZWN5Y2xlX2Fubm90YXRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7R0FHRztBQUVILDJCQUE0QixtQ0FBbUMsQ0FBQyxDQUFBO0FBQ2hFLDJDQUFtRCw4QkFBOEIsQ0FBQyxDQUFBO0FBR2xGLDJDQU1PLDhCQUE4QixDQUFDO0FBTHBDLHFFQUFjO0FBQ2QsK0VBQW1CO0FBQ25CLHlFQUFnQjtBQUNoQixtRUFBYTtBQUNiLDZFQUNvQztBQUV0Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXlCRztBQUNRLG1CQUFXLEdBRWxCLDBCQUFhLENBQUMsd0NBQXFCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBpbmRpcmVjdGlvbiBpcyBuZWVkZWQgdG8gZnJlZSB1cCBDb21wb25lbnQsIGV0YyBzeW1ib2xzIGluIHRoZSBwdWJsaWMgQVBJXG4gKiB0byBiZSB1c2VkIGJ5IHRoZSBkZWNvcmF0b3IgdmVyc2lvbnMgb2YgdGhlc2UgYW5ub3RhdGlvbnMuXG4gKi9cblxuaW1wb3J0IHttYWtlRGVjb3JhdG9yfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS91dGlsL2RlY29yYXRvcnMnO1xuaW1wb3J0IHtDYW5BY3RpdmF0ZSBhcyBDYW5BY3RpdmF0ZUFubm90YXRpb259IGZyb20gJy4vbGlmZWN5Y2xlX2Fubm90YXRpb25zX2ltcGwnO1xuaW1wb3J0IHtDb21wb25lbnRJbnN0cnVjdGlvbn0gZnJvbSAnLi4vaW5zdHJ1Y3Rpb24nO1xuXG5leHBvcnQge1xuICByb3V0ZXJDYW5SZXVzZSxcbiAgcm91dGVyQ2FuRGVhY3RpdmF0ZSxcbiAgcm91dGVyT25BY3RpdmF0ZSxcbiAgcm91dGVyT25SZXVzZSxcbiAgcm91dGVyT25EZWFjdGl2YXRlXG59IGZyb20gJy4vbGlmZWN5Y2xlX2Fubm90YXRpb25zX2ltcGwnO1xuXG4vKipcbiAqIERlZmluZXMgcm91dGUgbGlmZWN5Y2xlIGhvb2sgYENhbkFjdGl2YXRlYCwgd2hpY2ggaXMgY2FsbGVkIGJ5IHRoZSByb3V0ZXIgdG8gZGV0ZXJtaW5lXG4gKiBpZiBhIGNvbXBvbmVudCBjYW4gYmUgaW5zdGFudGlhdGVkIGFzIHBhcnQgb2YgYSBuYXZpZ2F0aW9uLlxuICpcbiAqIDxhc2lkZSBjbGFzcz1cImlzLXJpZ2h0XCI+XG4gKiBOb3RlIHRoYXQgdW5saWtlIG90aGVyIGxpZmVjeWNsZSBob29rcywgdGhpcyBvbmUgdXNlcyBhbiBhbm5vdGF0aW9uIHJhdGhlciB0aGFuIGFuIGludGVyZmFjZS5cbiAqIFRoaXMgaXMgYmVjYXVzZSB0aGUgYENhbkFjdGl2YXRlYCBmdW5jdGlvbiBpcyBjYWxsZWQgYmVmb3JlIHRoZSBjb21wb25lbnQgaXMgaW5zdGFudGlhdGVkLlxuICogPC9hc2lkZT5cbiAqXG4gKiBUaGUgYENhbkFjdGl2YXRlYCBob29rIGlzIGNhbGxlZCB3aXRoIHR3byB7QGxpbmsgQ29tcG9uZW50SW5zdHJ1Y3Rpb259cyBhcyBwYXJhbWV0ZXJzLCB0aGUgZmlyc3RcbiAqIHJlcHJlc2VudGluZyB0aGUgY3VycmVudCByb3V0ZSBiZWluZyBuYXZpZ2F0ZWQgdG8sIGFuZCB0aGUgc2Vjb25kIHBhcmFtZXRlciByZXByZXNlbnRpbmcgdGhlXG4gKiBwcmV2aW91cyByb3V0ZSBvciBgbnVsbGAuXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogQENhbkFjdGl2YXRlKChuZXh0LCBwcmV2KSA9PiBib29sZWFuIHwgUHJvbWlzZTxib29sZWFuPilcbiAqIGBgYFxuICpcbiAqIElmIGBDYW5BY3RpdmF0ZWAgcmV0dXJucyBvciByZXNvbHZlcyB0byBgZmFsc2VgLCB0aGUgbmF2aWdhdGlvbiBpcyBjYW5jZWxsZWQuXG4gKiBJZiBgQ2FuQWN0aXZhdGVgIHRocm93cyBvciByZWplY3RzLCB0aGUgbmF2aWdhdGlvbiBpcyBhbHNvIGNhbmNlbGxlZC5cbiAqIElmIGBDYW5BY3RpdmF0ZWAgcmV0dXJucyBvciByZXNvbHZlcyB0byBgdHJ1ZWAsIG5hdmlnYXRpb24gY29udGludWVzLCB0aGUgY29tcG9uZW50IGlzXG4gKiBpbnN0YW50aWF0ZWQsIGFuZCB0aGUge0BsaW5rIE9uQWN0aXZhdGV9IGhvb2sgb2YgdGhhdCBjb21wb25lbnQgaXMgY2FsbGVkIGlmIGltcGxlbWVudGVkLlxuICpcbiAqICMjIyBFeGFtcGxlXG4gKlxuICoge0BleGFtcGxlIHJvdXRlci90cy9jYW5fYWN0aXZhdGUvY2FuX2FjdGl2YXRlX2V4YW1wbGUudHMgcmVnaW9uPSdjYW5BY3RpdmF0ZScgfVxuICovXG5leHBvcnQgdmFyIENhbkFjdGl2YXRlOiAoaG9vazogKG5leHQ6IENvbXBvbmVudEluc3RydWN0aW9uLCBwcmV2OiBDb21wb25lbnRJbnN0cnVjdGlvbikgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvbWlzZTxib29sZWFuPnwgYm9vbGVhbikgPT4gQ2xhc3NEZWNvcmF0b3IgPVxuICAgIG1ha2VEZWNvcmF0b3IoQ2FuQWN0aXZhdGVBbm5vdGF0aW9uKTtcbiJdfQ==

/***/ },

/***/ 250:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(23);
	var lang_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(229);
	var location_1 = __webpack_require__(244);
	/**
	 * The RouterLink directive lets you link to specific parts of your app.
	 *
	 * Consider the following route configuration:

	 * ```
	 * @RouteConfig([
	 *   { path: '/user', component: UserCmp, as: 'User' }
	 * ]);
	 * class MyComp {}
	 * ```
	 *
	 * When linking to this `User` route, you can write:
	 *
	 * ```
	 * <a [routerLink]="['./User']">link to user component</a>
	 * ```
	 *
	 * RouterLink expects the value to be an array of route names, followed by the params
	 * for that level of routing. For instance `['/Team', {teamId: 1}, 'User', {userId: 2}]`
	 * means that we want to generate a link for the `Team` route with params `{teamId: 1}`,
	 * and with a child route `User` with params `{userId: 2}`.
	 *
	 * The first route name should be prepended with `/`, `./`, or `../`.
	 * If the route begins with `/`, the router will look up the route from the root of the app.
	 * If the route begins with `./`, the router will instead look in the current component's
	 * children for the route. And if the route begins with `../`, the router will look at the
	 * current component's parent.
	 */
	var RouterLink = (function () {
	    function RouterLink(_router, _location) {
	        var _this = this;
	        this._router = _router;
	        this._location = _location;
	        // we need to update the link whenever a route changes to account for aux routes
	        this._router.subscribe(function (_) { return _this._updateLink(); });
	    }
	    // because auxiliary links take existing primary and auxiliary routes into account,
	    // we need to update the link whenever params or other routes change.
	    RouterLink.prototype._updateLink = function () {
	        this._navigationInstruction = this._router.generate(this._routeParams);
	        var navigationHref = this._navigationInstruction.toLinkUrl();
	        this.visibleHref = this._location.prepareExternalUrl(navigationHref);
	    };
	    Object.defineProperty(RouterLink.prototype, "isRouteActive", {
	        get: function () { return this._router.isRouteActive(this._navigationInstruction); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(RouterLink.prototype, "routeParams", {
	        set: function (changes) {
	            this._routeParams = changes;
	            this._updateLink();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    RouterLink.prototype.onClick = function () {
	        // If no target, or if target is _self, prevent default browser behavior
	        if (!lang_1.isString(this.target) || this.target == '_self') {
	            this._router.navigateByInstruction(this._navigationInstruction);
	            return false;
	        }
	        return true;
	    };
	    RouterLink = __decorate([
	        core_1.Directive({
	            selector: '[routerLink]',
	            inputs: ['routeParams: routerLink', 'target: target'],
	            host: {
	                '(click)': 'onClick()',
	                '[attr.href]': 'visibleHref',
	                '[class.router-link-active]': 'isRouteActive'
	            }
	        }), 
	        __metadata('design:paramtypes', [router_1.Router, location_1.Location])
	    ], RouterLink);
	    return RouterLink;
	})();
	exports.RouterLink = RouterLink;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyX2xpbmsuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbmd1bGFyMi9zcmMvcm91dGVyL2RpcmVjdGl2ZXMvcm91dGVyX2xpbmsudHMiXSwibmFtZXMiOlsiUm91dGVyTGluayIsIlJvdXRlckxpbmsuY29uc3RydWN0b3IiLCJSb3V0ZXJMaW5rLl91cGRhdGVMaW5rIiwiUm91dGVyTGluay5pc1JvdXRlQWN0aXZlIiwiUm91dGVyTGluay5yb3V0ZVBhcmFtcyIsIlJvdXRlckxpbmsub25DbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLHFCQUF1QiwwQkFBMEIsQ0FBQyxDQUFBO0FBRWxELHVCQUFxQixXQUFXLENBQUMsQ0FBQTtBQUNqQyx5QkFBdUIsc0JBQXNCLENBQUMsQ0FBQTtBQUc5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTRCRztBQUNIO0lBbUJFQSxvQkFBb0JBLE9BQWVBLEVBQVVBLFNBQW1CQTtRQW5CbEVDLGlCQStDQ0E7UUE1QnFCQSxZQUFPQSxHQUFQQSxPQUFPQSxDQUFRQTtRQUFVQSxjQUFTQSxHQUFUQSxTQUFTQSxDQUFVQTtRQUM5REEsZ0ZBQWdGQTtRQUNoRkEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsVUFBQ0EsQ0FBQ0EsSUFBS0EsT0FBQUEsS0FBSUEsQ0FBQ0EsV0FBV0EsRUFBRUEsRUFBbEJBLENBQWtCQSxDQUFDQSxDQUFDQTtJQUNwREEsQ0FBQ0E7SUFFREQsbUZBQW1GQTtJQUNuRkEscUVBQXFFQTtJQUM3REEsZ0NBQVdBLEdBQW5CQTtRQUNFRSxJQUFJQSxDQUFDQSxzQkFBc0JBLEdBQUdBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLENBQUNBO1FBQ3ZFQSxJQUFJQSxjQUFjQSxHQUFHQSxJQUFJQSxDQUFDQSxzQkFBc0JBLENBQUNBLFNBQVNBLEVBQUVBLENBQUNBO1FBQzdEQSxJQUFJQSxDQUFDQSxXQUFXQSxHQUFHQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxrQkFBa0JBLENBQUNBLGNBQWNBLENBQUNBLENBQUNBO0lBQ3ZFQSxDQUFDQTtJQUVERixzQkFBSUEscUNBQWFBO2FBQWpCQSxjQUErQkcsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsYUFBYUEsQ0FBQ0EsSUFBSUEsQ0FBQ0Esc0JBQXNCQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTs7O09BQUFIO0lBRWhHQSxzQkFBSUEsbUNBQVdBO2FBQWZBLFVBQWdCQSxPQUFjQTtZQUM1QkksSUFBSUEsQ0FBQ0EsWUFBWUEsR0FBR0EsT0FBT0EsQ0FBQ0E7WUFDNUJBLElBQUlBLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBO1FBQ3JCQSxDQUFDQTs7O09BQUFKO0lBRURBLDRCQUFPQSxHQUFQQTtRQUNFSyx3RUFBd0VBO1FBQ3hFQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxlQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxJQUFJQSxDQUFDQSxNQUFNQSxJQUFJQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNyREEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EscUJBQXFCQSxDQUFDQSxJQUFJQSxDQUFDQSxzQkFBc0JBLENBQUNBLENBQUNBO1lBQ2hFQSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQTtRQUNmQSxDQUFDQTtRQUNEQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQTtJQUNkQSxDQUFDQTtJQTlDSEw7UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1RBLFFBQVFBLEVBQUVBLGNBQWNBO1lBQ3hCQSxNQUFNQSxFQUFFQSxDQUFDQSx5QkFBeUJBLEVBQUVBLGdCQUFnQkEsQ0FBQ0E7WUFDckRBLElBQUlBLEVBQUVBO2dCQUNKQSxTQUFTQSxFQUFFQSxXQUFXQTtnQkFDdEJBLGFBQWFBLEVBQUVBLGFBQWFBO2dCQUM1QkEsNEJBQTRCQSxFQUFFQSxlQUFlQTthQUM5Q0E7U0FDRkEsQ0FBQ0E7O21CQXVDREE7SUFBREEsaUJBQUNBO0FBQURBLENBQUNBLEFBL0NELElBK0NDO0FBdENZLGtCQUFVLGFBc0N0QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtpc1N0cmluZ30gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcblxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJy4uL3JvdXRlcic7XG5pbXBvcnQge0xvY2F0aW9ufSBmcm9tICcuLi9sb2NhdGlvbi9sb2NhdGlvbic7XG5pbXBvcnQge0luc3RydWN0aW9ufSBmcm9tICcuLi9pbnN0cnVjdGlvbic7XG5cbi8qKlxuICogVGhlIFJvdXRlckxpbmsgZGlyZWN0aXZlIGxldHMgeW91IGxpbmsgdG8gc3BlY2lmaWMgcGFydHMgb2YgeW91ciBhcHAuXG4gKlxuICogQ29uc2lkZXIgdGhlIGZvbGxvd2luZyByb3V0ZSBjb25maWd1cmF0aW9uOlxuXG4gKiBgYGBcbiAqIEBSb3V0ZUNvbmZpZyhbXG4gKiAgIHsgcGF0aDogJy91c2VyJywgY29tcG9uZW50OiBVc2VyQ21wLCBhczogJ1VzZXInIH1cbiAqIF0pO1xuICogY2xhc3MgTXlDb21wIHt9XG4gKiBgYGBcbiAqXG4gKiBXaGVuIGxpbmtpbmcgdG8gdGhpcyBgVXNlcmAgcm91dGUsIHlvdSBjYW4gd3JpdGU6XG4gKlxuICogYGBgXG4gKiA8YSBbcm91dGVyTGlua109XCJbJy4vVXNlciddXCI+bGluayB0byB1c2VyIGNvbXBvbmVudDwvYT5cbiAqIGBgYFxuICpcbiAqIFJvdXRlckxpbmsgZXhwZWN0cyB0aGUgdmFsdWUgdG8gYmUgYW4gYXJyYXkgb2Ygcm91dGUgbmFtZXMsIGZvbGxvd2VkIGJ5IHRoZSBwYXJhbXNcbiAqIGZvciB0aGF0IGxldmVsIG9mIHJvdXRpbmcuIEZvciBpbnN0YW5jZSBgWycvVGVhbScsIHt0ZWFtSWQ6IDF9LCAnVXNlcicsIHt1c2VySWQ6IDJ9XWBcbiAqIG1lYW5zIHRoYXQgd2Ugd2FudCB0byBnZW5lcmF0ZSBhIGxpbmsgZm9yIHRoZSBgVGVhbWAgcm91dGUgd2l0aCBwYXJhbXMgYHt0ZWFtSWQ6IDF9YCxcbiAqIGFuZCB3aXRoIGEgY2hpbGQgcm91dGUgYFVzZXJgIHdpdGggcGFyYW1zIGB7dXNlcklkOiAyfWAuXG4gKlxuICogVGhlIGZpcnN0IHJvdXRlIG5hbWUgc2hvdWxkIGJlIHByZXBlbmRlZCB3aXRoIGAvYCwgYC4vYCwgb3IgYC4uL2AuXG4gKiBJZiB0aGUgcm91dGUgYmVnaW5zIHdpdGggYC9gLCB0aGUgcm91dGVyIHdpbGwgbG9vayB1cCB0aGUgcm91dGUgZnJvbSB0aGUgcm9vdCBvZiB0aGUgYXBwLlxuICogSWYgdGhlIHJvdXRlIGJlZ2lucyB3aXRoIGAuL2AsIHRoZSByb3V0ZXIgd2lsbCBpbnN0ZWFkIGxvb2sgaW4gdGhlIGN1cnJlbnQgY29tcG9uZW50J3NcbiAqIGNoaWxkcmVuIGZvciB0aGUgcm91dGUuIEFuZCBpZiB0aGUgcm91dGUgYmVnaW5zIHdpdGggYC4uL2AsIHRoZSByb3V0ZXIgd2lsbCBsb29rIGF0IHRoZVxuICogY3VycmVudCBjb21wb25lbnQncyBwYXJlbnQuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tyb3V0ZXJMaW5rXScsXG4gIGlucHV0czogWydyb3V0ZVBhcmFtczogcm91dGVyTGluaycsICd0YXJnZXQ6IHRhcmdldCddLFxuICBob3N0OiB7XG4gICAgJyhjbGljayknOiAnb25DbGljaygpJyxcbiAgICAnW2F0dHIuaHJlZl0nOiAndmlzaWJsZUhyZWYnLFxuICAgICdbY2xhc3Mucm91dGVyLWxpbmstYWN0aXZlXSc6ICdpc1JvdXRlQWN0aXZlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIFJvdXRlckxpbmsge1xuICBwcml2YXRlIF9yb3V0ZVBhcmFtczogYW55W107XG5cbiAgLy8gdGhlIHVybCBkaXNwbGF5ZWQgb24gdGhlIGFuY2hvciBlbGVtZW50LlxuICB2aXNpYmxlSHJlZjogc3RyaW5nO1xuICB0YXJnZXQ6IHN0cmluZztcblxuICAvLyB0aGUgaW5zdHJ1Y3Rpb24gcGFzc2VkIHRvIHRoZSByb3V0ZXIgdG8gbmF2aWdhdGVcbiAgcHJpdmF0ZSBfbmF2aWdhdGlvbkluc3RydWN0aW9uOiBJbnN0cnVjdGlvbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfbG9jYXRpb246IExvY2F0aW9uKSB7XG4gICAgLy8gd2UgbmVlZCB0byB1cGRhdGUgdGhlIGxpbmsgd2hlbmV2ZXIgYSByb3V0ZSBjaGFuZ2VzIHRvIGFjY291bnQgZm9yIGF1eCByb3V0ZXNcbiAgICB0aGlzLl9yb3V0ZXIuc3Vic2NyaWJlKChfKSA9PiB0aGlzLl91cGRhdGVMaW5rKCkpO1xuICB9XG5cbiAgLy8gYmVjYXVzZSBhdXhpbGlhcnkgbGlua3MgdGFrZSBleGlzdGluZyBwcmltYXJ5IGFuZCBhdXhpbGlhcnkgcm91dGVzIGludG8gYWNjb3VudCxcbiAgLy8gd2UgbmVlZCB0byB1cGRhdGUgdGhlIGxpbmsgd2hlbmV2ZXIgcGFyYW1zIG9yIG90aGVyIHJvdXRlcyBjaGFuZ2UuXG4gIHByaXZhdGUgX3VwZGF0ZUxpbmsoKTogdm9pZCB7XG4gICAgdGhpcy5fbmF2aWdhdGlvbkluc3RydWN0aW9uID0gdGhpcy5fcm91dGVyLmdlbmVyYXRlKHRoaXMuX3JvdXRlUGFyYW1zKTtcbiAgICB2YXIgbmF2aWdhdGlvbkhyZWYgPSB0aGlzLl9uYXZpZ2F0aW9uSW5zdHJ1Y3Rpb24udG9MaW5rVXJsKCk7XG4gICAgdGhpcy52aXNpYmxlSHJlZiA9IHRoaXMuX2xvY2F0aW9uLnByZXBhcmVFeHRlcm5hbFVybChuYXZpZ2F0aW9uSHJlZik7XG4gIH1cblxuICBnZXQgaXNSb3V0ZUFjdGl2ZSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX3JvdXRlci5pc1JvdXRlQWN0aXZlKHRoaXMuX25hdmlnYXRpb25JbnN0cnVjdGlvbik7IH1cblxuICBzZXQgcm91dGVQYXJhbXMoY2hhbmdlczogYW55W10pIHtcbiAgICB0aGlzLl9yb3V0ZVBhcmFtcyA9IGNoYW5nZXM7XG4gICAgdGhpcy5fdXBkYXRlTGluaygpO1xuICB9XG5cbiAgb25DbGljaygpOiBib29sZWFuIHtcbiAgICAvLyBJZiBubyB0YXJnZXQsIG9yIGlmIHRhcmdldCBpcyBfc2VsZiwgcHJldmVudCBkZWZhdWx0IGJyb3dzZXIgYmVoYXZpb3JcbiAgICBpZiAoIWlzU3RyaW5nKHRoaXMudGFyZ2V0KSB8fCB0aGlzLnRhcmdldCA9PSAnX3NlbGYnKSB7XG4gICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeUluc3RydWN0aW9uKHRoaXMuX25hdmlnYXRpb25JbnN0cnVjdGlvbik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iXX0=

/***/ },

/***/ 251:
/***/ function(module, exports) {

	'use strict';/**
	 * This class should not be used directly by an application developer. Instead, use
	 * {@link Location}.
	 *
	 * `PlatformLocation` encapsulates all calls to DOM apis, which allows the Router to be platform
	 * agnostic.
	 * This means that we can have different implementation of `PlatformLocation` for the different
	 * platforms
	 * that angular supports. For example, the default `PlatformLocation` is {@link
	 * BrowserPlatformLocation},
	 * however when you run your app in a WebWorker you use {@link WebWorkerPlatformLocation}.
	 *
	 * The `PlatformLocation` class is used directly by all implementations of {@link LocationStrategy}
	 * when
	 * they need to interact with the DOM apis like pushState, popState, etc...
	 *
	 * {@link LocationStrategy} in turn is used by the {@link Location} service which is used directly
	 * by
	 * the {@link Router} in order to navigate between routes. Since all interactions between {@link
	 * Router} /
	 * {@link Location} / {@link LocationStrategy} and DOM apis flow through the `PlatformLocation`
	 * class
	 * they are all platform independent.
	 */
	var PlatformLocation = (function () {
	    function PlatformLocation() {
	    }
	    Object.defineProperty(PlatformLocation.prototype, "pathname", {
	        /* abstract */ get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(PlatformLocation.prototype, "search", {
	        /* abstract */ get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(PlatformLocation.prototype, "hash", {
	        /* abstract */ get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    return PlatformLocation;
	})();
	exports.PlatformLocation = PlatformLocation;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm1fbG9jYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbmd1bGFyMi9zcmMvcm91dGVyL2xvY2F0aW9uL3BsYXRmb3JtX2xvY2F0aW9uLnRzIl0sIm5hbWVzIjpbIlBsYXRmb3JtTG9jYXRpb24iLCJQbGF0Zm9ybUxvY2F0aW9uLmNvbnN0cnVjdG9yIiwiUGxhdGZvcm1Mb2NhdGlvbi5wYXRobmFtZSIsIlBsYXRmb3JtTG9jYXRpb24uc2VhcmNoIiwiUGxhdGZvcm1Mb2NhdGlvbi5oYXNoIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F1Qkc7QUFDSDtJQUFBQTtJQWdCQUMsQ0FBQ0E7SUFYZ0JELHNCQUFJQSxzQ0FBUUE7UUFBM0JBLGNBQWNBLE1BQUNBLGNBQXlCRSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTs7O09BQUFGO0lBQ3ZDQSxzQkFBSUEsb0NBQU1BO1FBQXpCQSxjQUFjQSxNQUFDQSxjQUF1QkcsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7OztPQUFBSDtJQUNyQ0Esc0JBQUlBLGtDQUFJQTtRQUF2QkEsY0FBY0EsTUFBQ0EsY0FBcUJJLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBOzs7T0FBQUo7SUFTcERBLHVCQUFDQTtBQUFEQSxDQUFDQSxBQWhCRCxJQWdCQztBQWhCcUIsd0JBQWdCLG1CQWdCckMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBjbGFzcyBzaG91bGQgbm90IGJlIHVzZWQgZGlyZWN0bHkgYnkgYW4gYXBwbGljYXRpb24gZGV2ZWxvcGVyLiBJbnN0ZWFkLCB1c2VcbiAqIHtAbGluayBMb2NhdGlvbn0uXG4gKlxuICogYFBsYXRmb3JtTG9jYXRpb25gIGVuY2Fwc3VsYXRlcyBhbGwgY2FsbHMgdG8gRE9NIGFwaXMsIHdoaWNoIGFsbG93cyB0aGUgUm91dGVyIHRvIGJlIHBsYXRmb3JtXG4gKiBhZ25vc3RpYy5cbiAqIFRoaXMgbWVhbnMgdGhhdCB3ZSBjYW4gaGF2ZSBkaWZmZXJlbnQgaW1wbGVtZW50YXRpb24gb2YgYFBsYXRmb3JtTG9jYXRpb25gIGZvciB0aGUgZGlmZmVyZW50XG4gKiBwbGF0Zm9ybXNcbiAqIHRoYXQgYW5ndWxhciBzdXBwb3J0cy4gRm9yIGV4YW1wbGUsIHRoZSBkZWZhdWx0IGBQbGF0Zm9ybUxvY2F0aW9uYCBpcyB7QGxpbmtcbiAqIEJyb3dzZXJQbGF0Zm9ybUxvY2F0aW9ufSxcbiAqIGhvd2V2ZXIgd2hlbiB5b3UgcnVuIHlvdXIgYXBwIGluIGEgV2ViV29ya2VyIHlvdSB1c2Uge0BsaW5rIFdlYldvcmtlclBsYXRmb3JtTG9jYXRpb259LlxuICpcbiAqIFRoZSBgUGxhdGZvcm1Mb2NhdGlvbmAgY2xhc3MgaXMgdXNlZCBkaXJlY3RseSBieSBhbGwgaW1wbGVtZW50YXRpb25zIG9mIHtAbGluayBMb2NhdGlvblN0cmF0ZWd5fVxuICogd2hlblxuICogdGhleSBuZWVkIHRvIGludGVyYWN0IHdpdGggdGhlIERPTSBhcGlzIGxpa2UgcHVzaFN0YXRlLCBwb3BTdGF0ZSwgZXRjLi4uXG4gKlxuICoge0BsaW5rIExvY2F0aW9uU3RyYXRlZ3l9IGluIHR1cm4gaXMgdXNlZCBieSB0aGUge0BsaW5rIExvY2F0aW9ufSBzZXJ2aWNlIHdoaWNoIGlzIHVzZWQgZGlyZWN0bHlcbiAqIGJ5XG4gKiB0aGUge0BsaW5rIFJvdXRlcn0gaW4gb3JkZXIgdG8gbmF2aWdhdGUgYmV0d2VlbiByb3V0ZXMuIFNpbmNlIGFsbCBpbnRlcmFjdGlvbnMgYmV0d2VlbiB7QGxpbmtcbiAqIFJvdXRlcn0gL1xuICoge0BsaW5rIExvY2F0aW9ufSAvIHtAbGluayBMb2NhdGlvblN0cmF0ZWd5fSBhbmQgRE9NIGFwaXMgZmxvdyB0aHJvdWdoIHRoZSBgUGxhdGZvcm1Mb2NhdGlvbmBcbiAqIGNsYXNzXG4gKiB0aGV5IGFyZSBhbGwgcGxhdGZvcm0gaW5kZXBlbmRlbnQuXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQbGF0Zm9ybUxvY2F0aW9uIHtcbiAgYWJzdHJhY3QgZ2V0QmFzZUhyZWZGcm9tRE9NKCk6IHN0cmluZztcbiAgYWJzdHJhY3Qgb25Qb3BTdGF0ZShmbjogVXJsQ2hhbmdlTGlzdGVuZXIpOiB2b2lkO1xuICBhYnN0cmFjdCBvbkhhc2hDaGFuZ2UoZm46IFVybENoYW5nZUxpc3RlbmVyKTogdm9pZDtcblxuICAvKiBhYnN0cmFjdCAqLyBnZXQgcGF0aG5hbWUoKTogc3RyaW5nIHsgcmV0dXJuIG51bGw7IH1cbiAgLyogYWJzdHJhY3QgKi8gZ2V0IHNlYXJjaCgpOiBzdHJpbmcgeyByZXR1cm4gbnVsbDsgfVxuICAvKiBhYnN0cmFjdCAqLyBnZXQgaGFzaCgpOiBzdHJpbmcgeyByZXR1cm4gbnVsbDsgfVxuXG4gIGFic3RyYWN0IHJlcGxhY2VTdGF0ZShzdGF0ZTogYW55LCB0aXRsZTogc3RyaW5nLCB1cmw6IHN0cmluZyk6IHZvaWQ7XG5cbiAgYWJzdHJhY3QgcHVzaFN0YXRlKHN0YXRlOiBhbnksIHRpdGxlOiBzdHJpbmcsIHVybDogc3RyaW5nKTogdm9pZDtcblxuICBhYnN0cmFjdCBmb3J3YXJkKCk6IHZvaWQ7XG5cbiAgYWJzdHJhY3QgYmFjaygpOiB2b2lkO1xufVxuXG4vKipcbiAqIEEgc2VyaWFsaXphYmxlIHZlcnNpb24gb2YgdGhlIGV2ZW50IGZyb20gb25Qb3BTdGF0ZSBvciBvbkhhc2hDaGFuZ2VcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBVcmxDaGFuZ2VFdmVudCB7IHR5cGU6IHN0cmluZzsgfVxuXG5leHBvcnQgaW50ZXJmYWNlIFVybENoYW5nZUxpc3RlbmVyIHsgKGU6IFVybENoYW5nZUV2ZW50KTogYW55OyB9XG4iXX0=

/***/ },

/***/ 252:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
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
	var core_1 = __webpack_require__(23);
	var location_strategy_1 = __webpack_require__(245);
	var lang_1 = __webpack_require__(3);
	var platform_location_1 = __webpack_require__(251);
	/**
	 * `HashLocationStrategy` is a {@link LocationStrategy} used to configure the
	 * {@link Location} service to represent its state in the
	 * [hash fragment](https://en.wikipedia.org/wiki/Uniform_Resource_Locator#Syntax)
	 * of the browser's URL.
	 *
	 * For instance, if you call `location.go('/foo')`, the browser's URL will become
	 * `example.com#/foo`.
	 *
	 * ### Example
	 *
	 * ```
	 * import {Component, provide} from 'angular2/core';
	 * import {
	 *   ROUTER_DIRECTIVES,
	 *   ROUTER_PROVIDERS,
	 *   RouteConfig,
	 *   Location,
	 *   LocationStrategy,
	 *   HashLocationStrategy
	 * } from 'angular2/router';
	 *
	 * @Component({directives: [ROUTER_DIRECTIVES]})
	 * @RouteConfig([
	 *  {...},
	 * ])
	 * class AppCmp {
	 *   constructor(location: Location) {
	 *     location.go('/foo');
	 *   }
	 * }
	 *
	 * bootstrap(AppCmp, [
	 *   ROUTER_PROVIDERS,
	 *   provide(LocationStrategy, {useClass: HashLocationStrategy})
	 * ]);
	 * ```
	 */
	var HashLocationStrategy = (function (_super) {
	    __extends(HashLocationStrategy, _super);
	    function HashLocationStrategy(_platformLocation, _baseHref) {
	        _super.call(this);
	        this._platformLocation = _platformLocation;
	        this._baseHref = '';
	        if (lang_1.isPresent(_baseHref)) {
	            this._baseHref = _baseHref;
	        }
	    }
	    HashLocationStrategy.prototype.onPopState = function (fn) {
	        this._platformLocation.onPopState(fn);
	        this._platformLocation.onHashChange(fn);
	    };
	    HashLocationStrategy.prototype.getBaseHref = function () { return this._baseHref; };
	    HashLocationStrategy.prototype.path = function () {
	        // the hash value is always prefixed with a `#`
	        // and if it is empty then it will stay empty
	        var path = this._platformLocation.hash;
	        if (!lang_1.isPresent(path))
	            path = '#';
	        // Dart will complain if a call to substring is
	        // executed with a position value that extends the
	        // length of string.
	        return (path.length > 0 ? path.substring(1) : path);
	    };
	    HashLocationStrategy.prototype.prepareExternalUrl = function (internal) {
	        var url = location_strategy_1.joinWithSlash(this._baseHref, internal);
	        return url.length > 0 ? ('#' + url) : url;
	    };
	    HashLocationStrategy.prototype.pushState = function (state, title, path, queryParams) {
	        var url = this.prepareExternalUrl(path + location_strategy_1.normalizeQueryParams(queryParams));
	        if (url.length == 0) {
	            url = this._platformLocation.pathname;
	        }
	        this._platformLocation.pushState(state, title, url);
	    };
	    HashLocationStrategy.prototype.replaceState = function (state, title, path, queryParams) {
	        var url = this.prepareExternalUrl(path + location_strategy_1.normalizeQueryParams(queryParams));
	        if (url.length == 0) {
	            url = this._platformLocation.pathname;
	        }
	        this._platformLocation.replaceState(state, title, url);
	    };
	    HashLocationStrategy.prototype.forward = function () { this._platformLocation.forward(); };
	    HashLocationStrategy.prototype.back = function () { this._platformLocation.back(); };
	    HashLocationStrategy = __decorate([
	        core_1.Injectable(),
	        __param(1, core_1.Optional()),
	        __param(1, core_1.Inject(location_strategy_1.APP_BASE_HREF)), 
	        __metadata('design:paramtypes', [platform_location_1.PlatformLocation, String])
	    ], HashLocationStrategy);
	    return HashLocationStrategy;
	})(location_strategy_1.LocationStrategy);
	exports.HashLocationStrategy = HashLocationStrategy;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFzaF9sb2NhdGlvbl9zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL3NyYy9yb3V0ZXIvbG9jYXRpb24vaGFzaF9sb2NhdGlvbl9zdHJhdGVneS50cyJdLCJuYW1lcyI6WyJIYXNoTG9jYXRpb25TdHJhdGVneSIsIkhhc2hMb2NhdGlvblN0cmF0ZWd5LmNvbnN0cnVjdG9yIiwiSGFzaExvY2F0aW9uU3RyYXRlZ3kub25Qb3BTdGF0ZSIsIkhhc2hMb2NhdGlvblN0cmF0ZWd5LmdldEJhc2VIcmVmIiwiSGFzaExvY2F0aW9uU3RyYXRlZ3kucGF0aCIsIkhhc2hMb2NhdGlvblN0cmF0ZWd5LnByZXBhcmVFeHRlcm5hbFVybCIsIkhhc2hMb2NhdGlvblN0cmF0ZWd5LnB1c2hTdGF0ZSIsIkhhc2hMb2NhdGlvblN0cmF0ZWd5LnJlcGxhY2VTdGF0ZSIsIkhhc2hMb2NhdGlvblN0cmF0ZWd5LmZvcndhcmQiLCJIYXNoTG9jYXRpb25TdHJhdGVneS5iYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFCQUEyQyxlQUFlLENBQUMsQ0FBQTtBQUMzRCxrQ0FLTyxxQkFBcUIsQ0FBQyxDQUFBO0FBRTdCLHFCQUF3QiwwQkFBMEIsQ0FBQyxDQUFBO0FBQ25ELGtDQUErQixxQkFBcUIsQ0FBQyxDQUFBO0FBRXJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBcUNHO0FBQ0g7SUFDMENBLHdDQUFnQkE7SUFFeERBLDhCQUFvQkEsaUJBQW1DQSxFQUNSQSxTQUFrQkE7UUFDL0RDLGlCQUFPQSxDQUFDQTtRQUZVQSxzQkFBaUJBLEdBQWpCQSxpQkFBaUJBLENBQWtCQTtRQUQvQ0EsY0FBU0EsR0FBV0EsRUFBRUEsQ0FBQ0E7UUFJN0JBLEVBQUVBLENBQUNBLENBQUNBLGdCQUFTQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN6QkEsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FB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Q0E7SUFFckRSLG1DQUFJQSxHQUFKQSxjQUFlUyxJQUFJQSxDQUFDQSxpQkFBaUJBLENBQUNBLElBQUlBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO0lBckRqRFQ7UUFBQ0EsaUJBQVVBLEVBQUVBO1FBSUNBLFdBQUNBLGVBQVFBLEVBQUVBLENBQUFBO1FBQUNBLFdBQUNBLGFBQU1BLENBQUNBLGlDQUFhQSxDQUFDQSxDQUFBQTs7NkJBa0QvQ0E7SUFBREEsMkJBQUNBO0FBQURBLENBQUNBLEFBdERELEVBQzBDLG9DQUFnQixFQXFEekQ7QUFyRFksNEJBQW9CLHVCQXFEaEMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZSwgSW5qZWN0LCBPcHRpb25hbH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1xuICBMb2NhdGlvblN0cmF0ZWd5LFxuICBqb2luV2l0aFNsYXNoLFxuICBBUFBfQkFTRV9IUkVGLFxuICBub3JtYWxpemVRdWVyeVBhcmFtc1xufSBmcm9tICcuL2xvY2F0aW9uX3N0cmF0ZWd5JztcbmltcG9ydCB7VXJsQ2hhbmdlTGlzdGVuZXJ9IGZyb20gJy4vcGxhdGZvcm1fbG9jYXRpb24nO1xuaW1wb3J0IHtpc1ByZXNlbnR9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge1BsYXRmb3JtTG9jYXRpb259IGZyb20gJy4vcGxhdGZvcm1fbG9jYXRpb24nO1xuXG4vKipcbiAqIGBIYXNoTG9jYXRpb25TdHJhdGVneWAgaXMgYSB7QGxpbmsgTG9jYXRpb25TdHJhdGVneX0gdXNlZCB0byBjb25maWd1cmUgdGhlXG4gKiB7QGxpbmsgTG9jYXRpb259IHNlcnZpY2UgdG8gcmVwcmVzZW50IGl0cyBzdGF0ZSBpbiB0aGVcbiAqIFtoYXNoIGZyYWdtZW50XShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Vbmlmb3JtX1Jlc291cmNlX0xvY2F0b3IjU3ludGF4KVxuICogb2YgdGhlIGJyb3dzZXIncyBVUkwuXG4gKlxuICogRm9yIGluc3RhbmNlLCBpZiB5b3UgY2FsbCBgbG9jYXRpb24uZ28oJy9mb28nKWAsIHRoZSBicm93c2VyJ3MgVVJMIHdpbGwgYmVjb21lXG4gKiBgZXhhbXBsZS5jb20jL2Zvb2AuXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7Q29tcG9uZW50LCBwcm92aWRlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbiAqIGltcG9ydCB7XG4gKiAgIFJPVVRFUl9ESVJFQ1RJVkVTLFxuICogICBST1VURVJfUFJPVklERVJTLFxuICogICBSb3V0ZUNvbmZpZyxcbiAqICAgTG9jYXRpb24sXG4gKiAgIExvY2F0aW9uU3RyYXRlZ3ksXG4gKiAgIEhhc2hMb2NhdGlvblN0cmF0ZWd5XG4gKiB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG4gKlxuICogQENvbXBvbmVudCh7ZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXX0pXG4gKiBAUm91dGVDb25maWcoW1xuICogIHsuLi59LFxuICogXSlcbiAqIGNsYXNzIEFwcENtcCB7XG4gKiAgIGNvbnN0cnVjdG9yKGxvY2F0aW9uOiBMb2NhdGlvbikge1xuICogICAgIGxvY2F0aW9uLmdvKCcvZm9vJyk7XG4gKiAgIH1cbiAqIH1cbiAqXG4gKiBib290c3RyYXAoQXBwQ21wLCBbXG4gKiAgIFJPVVRFUl9QUk9WSURFUlMsXG4gKiAgIHByb3ZpZGUoTG9jYXRpb25TdHJhdGVneSwge3VzZUNsYXNzOiBIYXNoTG9jYXRpb25TdHJhdGVneX0pXG4gKiBdKTtcbiAqIGBgYFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSGFzaExvY2F0aW9uU3RyYXRlZ3kgZXh0ZW5kcyBMb2NhdGlvblN0cmF0ZWd5IHtcbiAgcHJpdmF0ZSBfYmFzZUhyZWY6IHN0cmluZyA9ICcnO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wbGF0Zm9ybUxvY2F0aW9uOiBQbGF0Zm9ybUxvY2F0aW9uLFxuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBASW5qZWN0KEFQUF9CQVNFX0hSRUYpIF9iYXNlSHJlZj86IHN0cmluZykge1xuICAgIHN1cGVyKCk7XG4gICAgaWYgKGlzUHJlc2VudChfYmFzZUhyZWYpKSB7XG4gICAgICB0aGlzLl9iYXNlSHJlZiA9IF9iYXNlSHJlZjtcbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlKGZuOiBVcmxDaGFuZ2VMaXN0ZW5lcik6IHZvaWQge1xuICAgIHRoaXMuX3BsYXRmb3JtTG9jYXRpb24ub25Qb3BTdGF0ZShmbik7XG4gICAgdGhpcy5fcGxhdGZvcm1Mb2NhdGlvbi5vbkhhc2hDaGFuZ2UoZm4pO1xuICB9XG5cbiAgZ2V0QmFzZUhyZWYoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX2Jhc2VIcmVmOyB9XG5cbiAgcGF0aCgpOiBzdHJpbmcge1xuICAgIC8vIHRoZSBoYXNoIHZhbHVlIGlzIGFsd2F5cyBwcmVmaXhlZCB3aXRoIGEgYCNgXG4gICAgLy8gYW5kIGlmIGl0IGlzIGVtcHR5IHRoZW4gaXQgd2lsbCBzdGF5IGVtcHR5XG4gICAgdmFyIHBhdGggPSB0aGlzLl9wbGF0Zm9ybUxvY2F0aW9uLmhhc2g7XG4gICAgaWYgKCFpc1ByZXNlbnQocGF0aCkpIHBhdGggPSAnIyc7XG5cbiAgICAvLyBEYXJ0IHdpbGwgY29tcGxhaW4gaWYgYSBjYWxsIHRvIHN1YnN0cmluZyBpc1xuICAgIC8vIGV4ZWN1dGVkIHdpdGggYSBwb3NpdGlvbiB2YWx1ZSB0aGF0IGV4dGVuZHMgdGhlXG4gICAgLy8gbGVuZ3RoIG9mIHN0cmluZy5cbiAgICByZXR1cm4gKHBhdGgubGVuZ3RoID4gMCA/IHBhdGguc3Vic3RyaW5nKDEpIDogcGF0aCk7XG4gIH1cblxuICBwcmVwYXJlRXh0ZXJuYWxVcmwoaW50ZXJuYWw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgdmFyIHVybCA9IGpvaW5XaXRoU2xhc2godGhpcy5fYmFzZUhyZWYsIGludGVybmFsKTtcbiAgICByZXR1cm4gdXJsLmxlbmd0aCA+IDAgPyAoJyMnICsgdXJsKSA6IHVybDtcbiAgfVxuXG4gIHB1c2hTdGF0ZShzdGF0ZTogYW55LCB0aXRsZTogc3RyaW5nLCBwYXRoOiBzdHJpbmcsIHF1ZXJ5UGFyYW1zOiBzdHJpbmcpIHtcbiAgICB2YXIgdXJsID0gdGhpcy5wcmVwYXJlRXh0ZXJuYWxVcmwocGF0aCArIG5vcm1hbGl6ZVF1ZXJ5UGFyYW1zKHF1ZXJ5UGFyYW1zKSk7XG4gICAgaWYgKHVybC5sZW5ndGggPT0gMCkge1xuICAgICAgdXJsID0gdGhpcy5fcGxhdGZvcm1Mb2NhdGlvbi5wYXRobmFtZTtcbiAgICB9XG4gICAgdGhpcy5fcGxhdGZvcm1Mb2NhdGlvbi5wdXNoU3RhdGUoc3RhdGUsIHRpdGxlLCB1cmwpO1xuICB9XG5cbiAgcmVwbGFjZVN0YXRlKHN0YXRlOiBhbnksIHRpdGxlOiBzdHJpbmcsIHBhdGg6IHN0cmluZywgcXVlcnlQYXJhbXM6IHN0cmluZykge1xuICAgIHZhciB1cmwgPSB0aGlzLnByZXBhcmVFeHRlcm5hbFVybChwYXRoICsgbm9ybWFsaXplUXVlcnlQYXJhbXMocXVlcnlQYXJhbXMpKTtcbiAgICBpZiAodXJsLmxlbmd0aCA9PSAwKSB7XG4gICAgICB1cmwgPSB0aGlzLl9wbGF0Zm9ybUxvY2F0aW9uLnBhdGhuYW1lO1xuICAgIH1cbiAgICB0aGlzLl9wbGF0Zm9ybUxvY2F0aW9uLnJlcGxhY2VTdGF0ZShzdGF0ZSwgdGl0bGUsIHVybCk7XG4gIH1cblxuICBmb3J3YXJkKCk6IHZvaWQgeyB0aGlzLl9wbGF0Zm9ybUxvY2F0aW9uLmZvcndhcmQoKTsgfVxuXG4gIGJhY2soKTogdm9pZCB7IHRoaXMuX3BsYXRmb3JtTG9jYXRpb24uYmFjaygpOyB9XG59XG4iXX0=

/***/ },

/***/ 253:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
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
	var core_1 = __webpack_require__(23);
	var lang_1 = __webpack_require__(3);
	var exceptions_1 = __webpack_require__(13);
	var location_strategy_1 = __webpack_require__(245);
	var platform_location_1 = __webpack_require__(251);
	/**
	 * `PathLocationStrategy` is a {@link LocationStrategy} used to configure the
	 * {@link Location} service to represent its state in the
	 * [path](https://en.wikipedia.org/wiki/Uniform_Resource_Locator#Syntax) of the
	 * browser's URL.
	 *
	 * `PathLocationStrategy` is the default binding for {@link LocationStrategy}
	 * provided in {@link ROUTER_PROVIDERS}.
	 *
	 * If you're using `PathLocationStrategy`, you must provide a provider for
	 * {@link APP_BASE_HREF} to a string representing the URL prefix that should
	 * be preserved when generating and recognizing URLs.
	 *
	 * For instance, if you provide an `APP_BASE_HREF` of `'/my/app'` and call
	 * `location.go('/foo')`, the browser's URL will become
	 * `example.com/my/app/foo`.
	 *
	 * ### Example
	 *
	 * ```
	 * import {Component, provide} from 'angular2/core';
	 * import {
	 *   APP_BASE_HREF
	 *   ROUTER_DIRECTIVES,
	 *   ROUTER_PROVIDERS,
	 *   RouteConfig,
	 *   Location
	 * } from 'angular2/router';
	 *
	 * @Component({directives: [ROUTER_DIRECTIVES]})
	 * @RouteConfig([
	 *  {...},
	 * ])
	 * class AppCmp {
	 *   constructor(location: Location) {
	 *     location.go('/foo');
	 *   }
	 * }
	 *
	 * bootstrap(AppCmp, [
	 *   ROUTER_PROVIDERS, // includes binding to PathLocationStrategy
	 *   provide(APP_BASE_HREF, {useValue: '/my/app'})
	 * ]);
	 * ```
	 */
	var PathLocationStrategy = (function (_super) {
	    __extends(PathLocationStrategy, _super);
	    function PathLocationStrategy(_platformLocation, href) {
	        _super.call(this);
	        this._platformLocation = _platformLocation;
	        if (lang_1.isBlank(href)) {
	            href = this._platformLocation.getBaseHrefFromDOM();
	        }
	        if (lang_1.isBlank(href)) {
	            throw new exceptions_1.BaseException("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");
	        }
	        this._baseHref = href;
	    }
	    PathLocationStrategy.prototype.onPopState = function (fn) {
	        this._platformLocation.onPopState(fn);
	        this._platformLocation.onHashChange(fn);
	    };
	    PathLocationStrategy.prototype.getBaseHref = function () { return this._baseHref; };
	    PathLocationStrategy.prototype.prepareExternalUrl = function (internal) { return location_strategy_1.joinWithSlash(this._baseHref, internal); };
	    PathLocationStrategy.prototype.path = function () {
	        return this._platformLocation.pathname + location_strategy_1.normalizeQueryParams(this._platformLocation.search);
	    };
	    PathLocationStrategy.prototype.pushState = function (state, title, url, queryParams) {
	        var externalUrl = this.prepareExternalUrl(url + location_strategy_1.normalizeQueryParams(queryParams));
	        this._platformLocation.pushState(state, title, externalUrl);
	    };
	    PathLocationStrategy.prototype.replaceState = function (state, title, url, queryParams) {
	        var externalUrl = this.prepareExternalUrl(url + location_strategy_1.normalizeQueryParams(queryParams));
	        this._platformLocation.replaceState(state, title, externalUrl);
	    };
	    PathLocationStrategy.prototype.forward = function () { this._platformLocation.forward(); };
	    PathLocationStrategy.prototype.back = function () { this._platformLocation.back(); };
	    PathLocationStrategy = __decorate([
	        core_1.Injectable(),
	        __param(1, core_1.Optional()),
	        __param(1, core_1.Inject(location_strategy_1.APP_BASE_HREF)), 
	        __metadata('design:paramtypes', [platform_location_1.PlatformLocation, String])
	    ], PathLocationStrategy);
	    return PathLocationStrategy;
	})(location_strategy_1.LocationStrategy);
	exports.PathLocationStrategy = PathLocationStrategy;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0aF9sb2NhdGlvbl9zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL3NyYy9yb3V0ZXIvbG9jYXRpb24vcGF0aF9sb2NhdGlvbl9zdHJhdGVneS50cyJdLCJuYW1lcyI6WyJQYXRoTG9jYXRpb25TdHJhdGVneSIsIlBhdGhMb2NhdGlvblN0cmF0ZWd5LmNvbnN0cnVjdG9yIiwiUGF0aExvY2F0aW9uU3RyYXRlZ3kub25Qb3BTdGF0ZSIsIlBhdGhMb2NhdGlvblN0cmF0ZWd5LmdldEJhc2VIcmVmIiwiUGF0aExvY2F0aW9uU3RyYXRlZ3kucHJlcGFyZUV4dGVybmFsVXJsIiwiUGF0aExvY2F0aW9uU3RyYXRlZ3kucGF0aCIsIlBhdGhMb2NhdGlvblN0cmF0ZWd5LnB1c2hTdGF0ZSIsIlBhdGhMb2NhdGlvblN0cmF0ZWd5LnJlcGxhY2VTdGF0ZSIsIlBhdGhMb2NhdGlvblN0cmF0ZWd5LmZvcndhcmQiLCJQYXRoTG9jYXRpb25TdHJhdGVneS5iYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFCQUEyQyxlQUFlLENBQUMsQ0FBQTtBQUMzRCxxQkFBc0IsMEJBQTBCLENBQUMsQ0FBQTtBQUNqRCwyQkFBNEIsZ0NBQWdDLENBQUMsQ0FBQTtBQUM3RCxrQ0FLTyxxQkFBcUIsQ0FBQyxDQUFBO0FBQzdCLGtDQUFrRCxxQkFBcUIsQ0FBQyxDQUFBO0FBRXhFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTRDRztBQUNIO0lBQzBDQSx3Q0FBZ0JBO0lBR3hEQSw4QkFBb0JBLGlCQUFtQ0EsRUFDUkEsSUFBYUE7UUFDMURDLGlCQUFPQSxDQUFDQTtRQUZVQSxzQkFBaUJBLEdBQWpCQSxpQkFBaUJBLENBQWtCQTtRQUlyREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsY0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDbEJBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBLGlCQUFpQkEsQ0FBQ0Esa0JBQWtCQSxFQUFFQSxDQUFDQTtRQUNyREEsQ0FBQ0E7UUFFREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsY0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDbEJBLE1BQU1BLElBQUlBLDBCQUFhQSxDQUNuQkEsNkdBQTZHQSxDQUFDQSxDQUFDQTtRQUNySEEsQ0FBQ0E7UUFFREEsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsSUFBSUEsQ0FBQ0E7SUFDeEJBLENBQUNBO0lBRURELHlDQUFVQSxHQUFWQSxVQUFXQSxFQUFxQkE7UUFDOUJFLElBQUlBLENBQUNBLGlCQUFpQkEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7UUFDdENBLElBQUlBLENBQUNBLGlCQUFpQkEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7SUFDMUNBLENBQUNBO0lBRURGLDBDQUFXQSxHQUFYQSxjQUF3QkcsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFFaERILGlEQUFrQkEsR0FBbEJBLFVBQW1CQSxRQUFnQkEsSUFBWUksTUFBTUEsQ0FBQ0EsaUNBQWFBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLEVBQUVBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO0lBRWhHSixtQ0FBSUEsR0FBSkE7UUFDRUssTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsaUJBQWlCQSxDQUFDQSxRQUFRQSxHQUFHQSx3Q0FBb0JBLENBQUNBLElBQUlBLENBQUNBLGlCQUFpQkEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7SUFDL0ZBLENBQUNBO0lBRURMLHdDQUFTQSxHQUFUQSxVQUFVQSxLQUFVQSxFQUFFQSxLQUFhQSxFQUFFQSxHQUFXQSxFQUFFQSxXQUFtQkE7UUFDbkVNLElBQUlBLFdBQVdBLEdBQUdBLElBQUlBLENBQUNBLGtCQUFrQkEsQ0FBQ0EsR0FBR0EsR0FBR0Esd0NBQW9CQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNuRkEsSUFBSUEsQ0FBQ0EsaUJBQWlCQSxDQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxLQUFLQSxFQUFFQSxXQUFXQSxDQUFDQSxDQUFDQTtJQUM5REEsQ0FBQ0E7SUFFRE4sMkNBQVlBLEdBQVpBLFVBQWFBLEtBQVVBLEVBQUVBLEtBQWFBLEVBQUVBLEdBQVdBLEVBQUVBLFdBQW1CQTtRQUN0RU8sSUFBSUEsV0FBV0EsR0FBR0EsSUFBSUEsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxHQUFHQSxHQUFHQSx3Q0FBb0JBLENBQUNBLFdBQVdBLENBQUNBLENBQUNBLENBQUNBO1FBQ25GQSxJQUFJQSxDQUFDQSxpQkFBaUJBLENBQUNBLFlBQVlBLENBQUNBLEtBQUtBLEVBQUVBLEtBQUtBLEVBQUVBLFdBQVdBLENBQUNBLENBQUNBO0lBQ2pFQSxDQUFDQTtJQUVEUCxzQ0FBT0EsR0FBUEEsY0FBa0JRLElBQUlBLENBQUNBLGlCQUFpQkEsQ0FBQ0EsT0FBT0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFFckRSLG1DQUFJQSxHQUFKQSxjQUFlUyxJQUFJQSxDQUFDQSxpQkFBaUJBLENBQUNBLElBQUlBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO0lBN0NqRFQ7UUFBQ0EsaUJBQVVBLEVBQUVBO1FBS0NBLFdBQUNBLGVBQVFBLEVBQUVBLENBQUFBO1FBQUNBLFdBQUNBLGFBQU1BLENBQUNBLGlDQUFhQSxDQUFDQSxDQUFBQTs7NkJBeUMvQ0E7SUFBREEsMkJBQUNBO0FBQURBLENBQUNBLEFBOUNELEVBQzBDLG9DQUFnQixFQTZDekQ7QUE3Q1ksNEJBQW9CLHVCQTZDaEMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZSwgSW5qZWN0LCBPcHRpb25hbH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge2lzQmxhbmt9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge0Jhc2VFeGNlcHRpb259IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvZXhjZXB0aW9ucyc7XG5pbXBvcnQge1xuICBMb2NhdGlvblN0cmF0ZWd5LFxuICBBUFBfQkFTRV9IUkVGLFxuICBub3JtYWxpemVRdWVyeVBhcmFtcyxcbiAgam9pbldpdGhTbGFzaFxufSBmcm9tICcuL2xvY2F0aW9uX3N0cmF0ZWd5JztcbmltcG9ydCB7UGxhdGZvcm1Mb2NhdGlvbiwgVXJsQ2hhbmdlTGlzdGVuZXJ9IGZyb20gJy4vcGxhdGZvcm1fbG9jYXRpb24nO1xuXG4vKipcbiAqIGBQYXRoTG9jYXRpb25TdHJhdGVneWAgaXMgYSB7QGxpbmsgTG9jYXRpb25TdHJhdGVneX0gdXNlZCB0byBjb25maWd1cmUgdGhlXG4gKiB7QGxpbmsgTG9jYXRpb259IHNlcnZpY2UgdG8gcmVwcmVzZW50IGl0cyBzdGF0ZSBpbiB0aGVcbiAqIFtwYXRoXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Vbmlmb3JtX1Jlc291cmNlX0xvY2F0b3IjU3ludGF4KSBvZiB0aGVcbiAqIGJyb3dzZXIncyBVUkwuXG4gKlxuICogYFBhdGhMb2NhdGlvblN0cmF0ZWd5YCBpcyB0aGUgZGVmYXVsdCBiaW5kaW5nIGZvciB7QGxpbmsgTG9jYXRpb25TdHJhdGVneX1cbiAqIHByb3ZpZGVkIGluIHtAbGluayBST1VURVJfUFJPVklERVJTfS5cbiAqXG4gKiBJZiB5b3UncmUgdXNpbmcgYFBhdGhMb2NhdGlvblN0cmF0ZWd5YCwgeW91IG11c3QgcHJvdmlkZSBhIHByb3ZpZGVyIGZvclxuICoge0BsaW5rIEFQUF9CQVNFX0hSRUZ9IHRvIGEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgVVJMIHByZWZpeCB0aGF0IHNob3VsZFxuICogYmUgcHJlc2VydmVkIHdoZW4gZ2VuZXJhdGluZyBhbmQgcmVjb2duaXppbmcgVVJMcy5cbiAqXG4gKiBGb3IgaW5zdGFuY2UsIGlmIHlvdSBwcm92aWRlIGFuIGBBUFBfQkFTRV9IUkVGYCBvZiBgJy9teS9hcHAnYCBhbmQgY2FsbFxuICogYGxvY2F0aW9uLmdvKCcvZm9vJylgLCB0aGUgYnJvd3NlcidzIFVSTCB3aWxsIGJlY29tZVxuICogYGV4YW1wbGUuY29tL215L2FwcC9mb29gLlxuICpcbiAqICMjIyBFeGFtcGxlXG4gKlxuICogYGBgXG4gKiBpbXBvcnQge0NvbXBvbmVudCwgcHJvdmlkZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG4gKiBpbXBvcnQge1xuICogICBBUFBfQkFTRV9IUkVGXG4gKiAgIFJPVVRFUl9ESVJFQ1RJVkVTLFxuICogICBST1VURVJfUFJPVklERVJTLFxuICogICBSb3V0ZUNvbmZpZyxcbiAqICAgTG9jYXRpb25cbiAqIH0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbiAqXG4gKiBAQ29tcG9uZW50KHtkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdfSlcbiAqIEBSb3V0ZUNvbmZpZyhbXG4gKiAgey4uLn0sXG4gKiBdKVxuICogY2xhc3MgQXBwQ21wIHtcbiAqICAgY29uc3RydWN0b3IobG9jYXRpb246IExvY2F0aW9uKSB7XG4gKiAgICAgbG9jYXRpb24uZ28oJy9mb28nKTtcbiAqICAgfVxuICogfVxuICpcbiAqIGJvb3RzdHJhcChBcHBDbXAsIFtcbiAqICAgUk9VVEVSX1BST1ZJREVSUywgLy8gaW5jbHVkZXMgYmluZGluZyB0byBQYXRoTG9jYXRpb25TdHJhdGVneVxuICogICBwcm92aWRlKEFQUF9CQVNFX0hSRUYsIHt1c2VWYWx1ZTogJy9teS9hcHAnfSlcbiAqIF0pO1xuICogYGBgXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQYXRoTG9jYXRpb25TdHJhdGVneSBleHRlbmRzIExvY2F0aW9uU3RyYXRlZ3kge1xuICBwcml2YXRlIF9iYXNlSHJlZjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3BsYXRmb3JtTG9jYXRpb246IFBsYXRmb3JtTG9jYXRpb24sXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoQVBQX0JBU0VfSFJFRikgaHJlZj86IHN0cmluZykge1xuICAgIHN1cGVyKCk7XG5cbiAgICBpZiAoaXNCbGFuayhocmVmKSkge1xuICAgICAgaHJlZiA9IHRoaXMuX3BsYXRmb3JtTG9jYXRpb24uZ2V0QmFzZUhyZWZGcm9tRE9NKCk7XG4gICAgfVxuXG4gICAgaWYgKGlzQmxhbmsoaHJlZikpIHtcbiAgICAgIHRocm93IG5ldyBCYXNlRXhjZXB0aW9uKFxuICAgICAgICAgIGBObyBiYXNlIGhyZWYgc2V0LiBQbGVhc2UgcHJvdmlkZSBhIHZhbHVlIGZvciB0aGUgQVBQX0JBU0VfSFJFRiB0b2tlbiBvciBhZGQgYSBiYXNlIGVsZW1lbnQgdG8gdGhlIGRvY3VtZW50LmApO1xuICAgIH1cblxuICAgIHRoaXMuX2Jhc2VIcmVmID0gaHJlZjtcbiAgfVxuXG4gIG9uUG9wU3RhdGUoZm46IFVybENoYW5nZUxpc3RlbmVyKTogdm9pZCB7XG4gICAgdGhpcy5fcGxhdGZvcm1Mb2NhdGlvbi5vblBvcFN0YXRlKGZuKTtcbiAgICB0aGlzLl9wbGF0Zm9ybUxvY2F0aW9uLm9uSGFzaENoYW5nZShmbik7XG4gIH1cblxuICBnZXRCYXNlSHJlZigpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fYmFzZUhyZWY7IH1cblxuICBwcmVwYXJlRXh0ZXJuYWxVcmwoaW50ZXJuYWw6IHN0cmluZyk6IHN0cmluZyB7IHJldHVybiBqb2luV2l0aFNsYXNoKHRoaXMuX2Jhc2VIcmVmLCBpbnRlcm5hbCk7IH1cblxuICBwYXRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3BsYXRmb3JtTG9jYXRpb24ucGF0aG5hbWUgKyBub3JtYWxpemVRdWVyeVBhcmFtcyh0aGlzLl9wbGF0Zm9ybUxvY2F0aW9uLnNlYXJjaCk7XG4gIH1cblxuICBwdXNoU3RhdGUoc3RhdGU6IGFueSwgdGl0bGU6IHN0cmluZywgdXJsOiBzdHJpbmcsIHF1ZXJ5UGFyYW1zOiBzdHJpbmcpIHtcbiAgICB2YXIgZXh0ZXJuYWxVcmwgPSB0aGlzLnByZXBhcmVFeHRlcm5hbFVybCh1cmwgKyBub3JtYWxpemVRdWVyeVBhcmFtcyhxdWVyeVBhcmFtcykpO1xuICAgIHRoaXMuX3BsYXRmb3JtTG9jYXRpb24ucHVzaFN0YXRlKHN0YXRlLCB0aXRsZSwgZXh0ZXJuYWxVcmwpO1xuICB9XG5cbiAgcmVwbGFjZVN0YXRlKHN0YXRlOiBhbnksIHRpdGxlOiBzdHJpbmcsIHVybDogc3RyaW5nLCBxdWVyeVBhcmFtczogc3RyaW5nKSB7XG4gICAgdmFyIGV4dGVybmFsVXJsID0gdGhpcy5wcmVwYXJlRXh0ZXJuYWxVcmwodXJsICsgbm9ybWFsaXplUXVlcnlQYXJhbXMocXVlcnlQYXJhbXMpKTtcbiAgICB0aGlzLl9wbGF0Zm9ybUxvY2F0aW9uLnJlcGxhY2VTdGF0ZShzdGF0ZSwgdGl0bGUsIGV4dGVybmFsVXJsKTtcbiAgfVxuXG4gIGZvcndhcmQoKTogdm9pZCB7IHRoaXMuX3BsYXRmb3JtTG9jYXRpb24uZm9yd2FyZCgpOyB9XG5cbiAgYmFjaygpOiB2b2lkIHsgdGhpcy5fcGxhdGZvcm1Mb2NhdGlvbi5iYWNrKCk7IH1cbn1cbiJdfQ==

/***/ },

/***/ 254:
/***/ function(module, exports) {

	'use strict';//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVfZGVmaW5pdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL3NyYy9yb3V0ZXIvcm91dGVfZGVmaW5pdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDT05TVCwgVHlwZX0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbmltcG9ydCB7UmVnZXhTZXJpYWxpemVyfSBmcm9tICcuL3J1bGVzL3JvdXRlX3BhdGhzL3JlZ2V4X3JvdXRlX3BhdGgnO1xuXG4vKipcbiAqIGBSb3V0ZURlZmluaXRpb25gIGRlZmluZXMgYSByb3V0ZSB3aXRoaW4gYSB7QGxpbmsgUm91dGVDb25maWd9IGRlY29yYXRvci5cbiAqXG4gKiBTdXBwb3J0ZWQga2V5czpcbiAqIC0gYHBhdGhgIG9yIGBhdXhgIChyZXF1aXJlcyBleGFjdGx5IG9uZSBvZiB0aGVzZSlcbiAqIC0gYGNvbXBvbmVudGAsIGBsb2FkZXJgLCAgYHJlZGlyZWN0VG9gIChyZXF1aXJlcyBleGFjdGx5IG9uZSBvZiB0aGVzZSlcbiAqIC0gYG5hbWVgIG9yIGBhc2AgKG9wdGlvbmFsKSAocmVxdWlyZXMgZXhhY3RseSBvbmUgb2YgdGhlc2UpXG4gKiAtIGBkYXRhYCAob3B0aW9uYWwpXG4gKlxuICogU2VlIGFsc28ge0BsaW5rIFJvdXRlfSwge0BsaW5rIEFzeW5jUm91dGV9LCB7QGxpbmsgQXV4Um91dGV9LCBhbmQge0BsaW5rIFJlZGlyZWN0fS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3V0ZURlZmluaXRpb24ge1xuICBwYXRoPzogc3RyaW5nO1xuICBhdXg/OiBzdHJpbmc7XG4gIHJlZ2V4Pzogc3RyaW5nO1xuICBzZXJpYWxpemVyPzogUmVnZXhTZXJpYWxpemVyO1xuICBjb21wb25lbnQ/OiBUeXBlIHwgQ29tcG9uZW50RGVmaW5pdGlvbjtcbiAgbG9hZGVyPzogKCkgPT4gUHJvbWlzZTxUeXBlPjtcbiAgcmVkaXJlY3RUbz86IGFueVtdO1xuICBhcz86IHN0cmluZztcbiAgbmFtZT86IHN0cmluZztcbiAgZGF0YT86IGFueTtcbiAgdXNlQXNEZWZhdWx0PzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIGVpdGhlciBhIGNvbXBvbmVudCB0eXBlIChgdHlwZWAgaXMgYGNvbXBvbmVudGApIG9yIGEgbG9hZGVyIGZ1bmN0aW9uXG4gKiAoYHR5cGVgIGlzIGBsb2FkZXJgKS5cbiAqXG4gKiBTZWUgYWxzbyB7QGxpbmsgUm91dGVEZWZpbml0aW9ufS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDb21wb25lbnREZWZpbml0aW9uIHtcbiAgdHlwZTogc3RyaW5nO1xuICBsb2FkZXI/OiAoKSA9PiBQcm9taXNlPFR5cGU+O1xuICBjb21wb25lbnQ/OiBUeXBlO1xufVxuIl19

/***/ },

/***/ 255:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var location_strategy_1 = __webpack_require__(245);
	var path_location_strategy_1 = __webpack_require__(253);
	var router_1 = __webpack_require__(229);
	var route_registry_1 = __webpack_require__(230);
	var location_1 = __webpack_require__(244);
	var lang_1 = __webpack_require__(3);
	var core_1 = __webpack_require__(23);
	var exceptions_1 = __webpack_require__(13);
	/**
	 * The Platform agnostic ROUTER PROVIDERS
	 */
	exports.ROUTER_PROVIDERS_COMMON = lang_1.CONST_EXPR([
	    route_registry_1.RouteRegistry,
	    lang_1.CONST_EXPR(new core_1.Provider(location_strategy_1.LocationStrategy, { useClass: path_location_strategy_1.PathLocationStrategy })),
	    location_1.Location,
	    lang_1.CONST_EXPR(new core_1.Provider(router_1.Router, {
	        useFactory: routerFactory,
	        deps: lang_1.CONST_EXPR([route_registry_1.RouteRegistry, location_1.Location, route_registry_1.ROUTER_PRIMARY_COMPONENT, core_1.ApplicationRef])
	    })),
	    lang_1.CONST_EXPR(new core_1.Provider(route_registry_1.ROUTER_PRIMARY_COMPONENT, { useFactory: routerPrimaryComponentFactory, deps: lang_1.CONST_EXPR([core_1.ApplicationRef]) }))
	]);
	function routerFactory(registry, location, primaryComponent, appRef) {
	    var rootRouter = new router_1.RootRouter(registry, location, primaryComponent);
	    appRef.registerDisposeListener(function () { return rootRouter.dispose(); });
	    return rootRouter;
	}
	function routerPrimaryComponentFactory(app) {
	    if (app.componentTypes.length == 0) {
	        throw new exceptions_1.BaseException("Bootstrap at least one component before injecting Router.");
	    }
	    return app.componentTypes[0];
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyX3Byb3ZpZGVyc19jb21tb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbmd1bGFyMi9zcmMvcm91dGVyL3JvdXRlcl9wcm92aWRlcnNfY29tbW9uLnRzIl0sIm5hbWVzIjpbInJvdXRlckZhY3RvcnkiLCJyb3V0ZXJQcmltYXJ5Q29tcG9uZW50RmFjdG9yeSJdLCJtYXBwaW5ncyI6IkFBQUEsa0NBQStCLGdEQUFnRCxDQUFDLENBQUE7QUFDaEYsdUNBQW1DLHFEQUFxRCxDQUFDLENBQUE7QUFDekYsdUJBQWlDLDRCQUE0QixDQUFDLENBQUE7QUFDOUQsK0JBQXNELG9DQUFvQyxDQUFDLENBQUE7QUFDM0YseUJBQXVCLHVDQUF1QyxDQUFDLENBQUE7QUFDL0QscUJBQStCLDBCQUEwQixDQUFDLENBQUE7QUFDMUQscUJBQW9ELGVBQWUsQ0FBQyxDQUFBO0FBQ3BFLDJCQUE0QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBRTdEOztHQUVHO0FBQ1UsK0JBQXVCLEdBQVUsaUJBQVUsQ0FBQztJQUN2RCw4QkFBYTtJQUNiLGlCQUFVLENBQUMsSUFBSSxlQUFRLENBQUMsb0NBQWdCLEVBQUUsRUFBQyxRQUFRLEVBQUUsNkNBQW9CLEVBQUMsQ0FBQyxDQUFDO0lBQzVFLG1CQUFRO0lBQ1IsaUJBQVUsQ0FBQyxJQUFJLGVBQVEsQ0FDbkIsZUFBTSxFQUNOO1FBQ0UsVUFBVSxFQUFFLGFBQWE7UUFDekIsSUFBSSxFQUFFLGlCQUFVLENBQUMsQ0FBQyw4QkFBYSxFQUFFLG1CQUFRLEVBQUUseUNBQXdCLEVBQUUscUJBQWMsQ0FBQyxDQUFDO0tBQ3RGLENBQUMsQ0FBQztJQUNQLGlCQUFVLENBQUMsSUFBSSxlQUFRLENBQ25CLHlDQUF3QixFQUN4QixFQUFDLFVBQVUsRUFBRSw2QkFBNkIsRUFBRSxJQUFJLEVBQUUsaUJBQVUsQ0FBQyxDQUFDLHFCQUFjLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztDQUN0RixDQUFDLENBQUM7QUFFSCx1QkFBdUIsUUFBdUIsRUFBRSxRQUFrQixFQUFFLGdCQUFzQixFQUNuRSxNQUFzQjtJQUMzQ0EsSUFBSUEsVUFBVUEsR0FBR0EsSUFBSUEsbUJBQVVBLENBQUNBLFFBQVFBLEVBQUVBLFFBQVFBLEVBQUVBLGdCQUFnQkEsQ0FBQ0EsQ0FBQ0E7SUFDdEVBLE1BQU1BLENBQUNBLHVCQUF1QkEsQ0FBQ0EsY0FBTUEsT0FBQUEsVUFBVUEsQ0FBQ0EsT0FBT0EsRUFBRUEsRUFBcEJBLENBQW9CQSxDQUFDQSxDQUFDQTtJQUMzREEsTUFBTUEsQ0FBQ0EsVUFBVUEsQ0FBQ0E7QUFDcEJBLENBQUNBO0FBRUQsdUNBQXVDLEdBQW1CO0lBQ3hEQyxFQUFFQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxjQUFjQSxDQUFDQSxNQUFNQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNuQ0EsTUFBTUEsSUFBSUEsMEJBQWFBLENBQUNBLDJEQUEyREEsQ0FBQ0EsQ0FBQ0E7SUFDdkZBLENBQUNBO0lBQ0RBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLGNBQWNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO0FBQy9CQSxDQUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TG9jYXRpb25TdHJhdGVneX0gZnJvbSAnYW5ndWxhcjIvc3JjL3JvdXRlci9sb2NhdGlvbi9sb2NhdGlvbl9zdHJhdGVneSc7XG5pbXBvcnQge1BhdGhMb2NhdGlvblN0cmF0ZWd5fSBmcm9tICdhbmd1bGFyMi9zcmMvcm91dGVyL2xvY2F0aW9uL3BhdGhfbG9jYXRpb25fc3RyYXRlZ3knO1xuaW1wb3J0IHtSb3V0ZXIsIFJvb3RSb3V0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9yb3V0ZXIvcm91dGVyJztcbmltcG9ydCB7Um91dGVSZWdpc3RyeSwgUk9VVEVSX1BSSU1BUllfQ09NUE9ORU5UfSBmcm9tICdhbmd1bGFyMi9zcmMvcm91dGVyL3JvdXRlX3JlZ2lzdHJ5JztcbmltcG9ydCB7TG9jYXRpb259IGZyb20gJ2FuZ3VsYXIyL3NyYy9yb3V0ZXIvbG9jYXRpb24vbG9jYXRpb24nO1xuaW1wb3J0IHtDT05TVF9FWFBSLCBUeXBlfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtBcHBsaWNhdGlvblJlZiwgT3BhcXVlVG9rZW4sIFByb3ZpZGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7QmFzZUV4Y2VwdGlvbn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9leGNlcHRpb25zJztcblxuLyoqXG4gKiBUaGUgUGxhdGZvcm0gYWdub3N0aWMgUk9VVEVSIFBST1ZJREVSU1xuICovXG5leHBvcnQgY29uc3QgUk9VVEVSX1BST1ZJREVSU19DT01NT046IGFueVtdID0gQ09OU1RfRVhQUihbXG4gIFJvdXRlUmVnaXN0cnksXG4gIENPTlNUX0VYUFIobmV3IFByb3ZpZGVyKExvY2F0aW9uU3RyYXRlZ3ksIHt1c2VDbGFzczogUGF0aExvY2F0aW9uU3RyYXRlZ3l9KSksXG4gIExvY2F0aW9uLFxuICBDT05TVF9FWFBSKG5ldyBQcm92aWRlcihcbiAgICAgIFJvdXRlcixcbiAgICAgIHtcbiAgICAgICAgdXNlRmFjdG9yeTogcm91dGVyRmFjdG9yeSxcbiAgICAgICAgZGVwczogQ09OU1RfRVhQUihbUm91dGVSZWdpc3RyeSwgTG9jYXRpb24sIFJPVVRFUl9QUklNQVJZX0NPTVBPTkVOVCwgQXBwbGljYXRpb25SZWZdKVxuICAgICAgfSkpLFxuICBDT05TVF9FWFBSKG5ldyBQcm92aWRlcihcbiAgICAgIFJPVVRFUl9QUklNQVJZX0NPTVBPTkVOVCxcbiAgICAgIHt1c2VGYWN0b3J5OiByb3V0ZXJQcmltYXJ5Q29tcG9uZW50RmFjdG9yeSwgZGVwczogQ09OU1RfRVhQUihbQXBwbGljYXRpb25SZWZdKX0pKVxuXSk7XG5cbmZ1bmN0aW9uIHJvdXRlckZhY3RvcnkocmVnaXN0cnk6IFJvdXRlUmVnaXN0cnksIGxvY2F0aW9uOiBMb2NhdGlvbiwgcHJpbWFyeUNvbXBvbmVudDogVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgYXBwUmVmOiBBcHBsaWNhdGlvblJlZik6IFJvb3RSb3V0ZXIge1xuICB2YXIgcm9vdFJvdXRlciA9IG5ldyBSb290Um91dGVyKHJlZ2lzdHJ5LCBsb2NhdGlvbiwgcHJpbWFyeUNvbXBvbmVudCk7XG4gIGFwcFJlZi5yZWdpc3RlckRpc3Bvc2VMaXN0ZW5lcigoKSA9PiByb290Um91dGVyLmRpc3Bvc2UoKSk7XG4gIHJldHVybiByb290Um91dGVyO1xufVxuXG5mdW5jdGlvbiByb3V0ZXJQcmltYXJ5Q29tcG9uZW50RmFjdG9yeShhcHA6IEFwcGxpY2F0aW9uUmVmKTogVHlwZSB7XG4gIGlmIChhcHAuY29tcG9uZW50VHlwZXMubGVuZ3RoID09IDApIHtcbiAgICB0aHJvdyBuZXcgQmFzZUV4Y2VwdGlvbihcIkJvb3RzdHJhcCBhdCBsZWFzdCBvbmUgY29tcG9uZW50IGJlZm9yZSBpbmplY3RpbmcgUm91dGVyLlwiKTtcbiAgfVxuICByZXR1cm4gYXBwLmNvbXBvbmVudFR5cGVzWzBdO1xufVxuIl19

/***/ },

/***/ 256:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var router_providers_common_1 = __webpack_require__(255);
	var core_1 = __webpack_require__(23);
	var lang_1 = __webpack_require__(3);
	var browser_platform_location_1 = __webpack_require__(257);
	var platform_location_1 = __webpack_require__(251);
	/**
	 * A list of {@link Provider}s. To use the router, you must add this to your application.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/iRUP8B5OUbxCWQ3AcIDm))
	 *
	 * ```
	 * import {Component} from 'angular2/core';
	 * import {
	 *   ROUTER_DIRECTIVES,
	 *   ROUTER_PROVIDERS,
	 *   RouteConfig
	 * } from 'angular2/router';
	 *
	 * @Component({directives: [ROUTER_DIRECTIVES]})
	 * @RouteConfig([
	 *  {...},
	 * ])
	 * class AppCmp {
	 *   // ...
	 * }
	 *
	 * bootstrap(AppCmp, [ROUTER_PROVIDERS]);
	 * ```
	 */
	exports.ROUTER_PROVIDERS = lang_1.CONST_EXPR([
	    router_providers_common_1.ROUTER_PROVIDERS_COMMON,
	    lang_1.CONST_EXPR(new core_1.Provider(platform_location_1.PlatformLocation, { useClass: browser_platform_location_1.BrowserPlatformLocation })),
	]);
	/**
	 * Use {@link ROUTER_PROVIDERS} instead.
	 *
	 * @deprecated
	 */
	exports.ROUTER_BINDINGS = exports.ROUTER_PROVIDERS;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyX3Byb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL3NyYy9yb3V0ZXIvcm91dGVyX3Byb3ZpZGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3Q0FBc0MsMkJBQTJCLENBQUMsQ0FBQTtBQUNsRSxxQkFBdUIsZUFBZSxDQUFDLENBQUE7QUFDdkMscUJBQXlCLDBCQUEwQixDQUFDLENBQUE7QUFDcEQsMENBQXNDLHNDQUFzQyxDQUFDLENBQUE7QUFDN0Usa0NBQStCLDhCQUE4QixDQUFDLENBQUE7QUFFOUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBdUJHO0FBQ1Usd0JBQWdCLEdBQVUsaUJBQVUsQ0FBQztJQUNoRCxpREFBdUI7SUFDdkIsaUJBQVUsQ0FBQyxJQUFJLGVBQVEsQ0FBQyxvQ0FBZ0IsRUFBRSxFQUFDLFFBQVEsRUFBRSxtREFBdUIsRUFBQyxDQUFDLENBQUM7Q0FDaEYsQ0FBQyxDQUFDO0FBRUg7Ozs7R0FJRztBQUNVLHVCQUFlLEdBQUcsd0JBQWdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JPVVRFUl9QUk9WSURFUlNfQ09NTU9OfSBmcm9tICcuL3JvdXRlcl9wcm92aWRlcnNfY29tbW9uJztcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtDT05TVF9FWFBSfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtCcm93c2VyUGxhdGZvcm1Mb2NhdGlvbn0gZnJvbSAnLi9sb2NhdGlvbi9icm93c2VyX3BsYXRmb3JtX2xvY2F0aW9uJztcbmltcG9ydCB7UGxhdGZvcm1Mb2NhdGlvbn0gZnJvbSAnLi9sb2NhdGlvbi9wbGF0Zm9ybV9sb2NhdGlvbic7XG5cbi8qKlxuICogQSBsaXN0IG9mIHtAbGluayBQcm92aWRlcn1zLiBUbyB1c2UgdGhlIHJvdXRlciwgeW91IG11c3QgYWRkIHRoaXMgdG8geW91ciBhcHBsaWNhdGlvbi5cbiAqXG4gKiAjIyMgRXhhbXBsZSAoW2xpdmUgZGVtb10oaHR0cDovL3BsbmtyLmNvL2VkaXQvaVJVUDhCNU9VYnhDV1EzQWNJRG0pKVxuICpcbiAqIGBgYFxuICogaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuICogaW1wb3J0IHtcbiAqICAgUk9VVEVSX0RJUkVDVElWRVMsXG4gKiAgIFJPVVRFUl9QUk9WSURFUlMsXG4gKiAgIFJvdXRlQ29uZmlnXG4gKiB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG4gKlxuICogQENvbXBvbmVudCh7ZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXX0pXG4gKiBAUm91dGVDb25maWcoW1xuICogIHsuLi59LFxuICogXSlcbiAqIGNsYXNzIEFwcENtcCB7XG4gKiAgIC8vIC4uLlxuICogfVxuICpcbiAqIGJvb3RzdHJhcChBcHBDbXAsIFtST1VURVJfUFJPVklERVJTXSk7XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNvbnN0IFJPVVRFUl9QUk9WSURFUlM6IGFueVtdID0gQ09OU1RfRVhQUihbXG4gIFJPVVRFUl9QUk9WSURFUlNfQ09NTU9OLFxuICBDT05TVF9FWFBSKG5ldyBQcm92aWRlcihQbGF0Zm9ybUxvY2F0aW9uLCB7dXNlQ2xhc3M6IEJyb3dzZXJQbGF0Zm9ybUxvY2F0aW9ufSkpLFxuXSk7XG5cbi8qKlxuICogVXNlIHtAbGluayBST1VURVJfUFJPVklERVJTfSBpbnN0ZWFkLlxuICpcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBST1VURVJfQklORElOR1MgPSBST1VURVJfUFJPVklERVJTO1xuIl19

/***/ },

/***/ 257:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(23);
	var platform_location_1 = __webpack_require__(251);
	var dom_adapter_1 = __webpack_require__(166);
	/**
	 * `PlatformLocation` encapsulates all of the direct calls to platform APIs.
	 * This class should not be used directly by an application developer. Instead, use
	 * {@link Location}.
	 */
	var BrowserPlatformLocation = (function (_super) {
	    __extends(BrowserPlatformLocation, _super);
	    function BrowserPlatformLocation() {
	        _super.call(this);
	        this._init();
	    }
	    // This is moved to its own method so that `MockPlatformLocationStrategy` can overwrite it
	    /** @internal */
	    BrowserPlatformLocation.prototype._init = function () {
	        this._location = dom_adapter_1.DOM.getLocation();
	        this._history = dom_adapter_1.DOM.getHistory();
	    };
	    Object.defineProperty(BrowserPlatformLocation.prototype, "location", {
	        /** @internal */
	        get: function () { return this._location; },
	        enumerable: true,
	        configurable: true
	    });
	    BrowserPlatformLocation.prototype.getBaseHrefFromDOM = function () { return dom_adapter_1.DOM.getBaseHref(); };
	    BrowserPlatformLocation.prototype.onPopState = function (fn) {
	        dom_adapter_1.DOM.getGlobalEventTarget('window').addEventListener('popstate', fn, false);
	    };
	    BrowserPlatformLocation.prototype.onHashChange = function (fn) {
	        dom_adapter_1.DOM.getGlobalEventTarget('window').addEventListener('hashchange', fn, false);
	    };
	    Object.defineProperty(BrowserPlatformLocation.prototype, "pathname", {
	        get: function () { return this._location.pathname; },
	        set: function (newPath) { this._location.pathname = newPath; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BrowserPlatformLocation.prototype, "search", {
	        get: function () { return this._location.search; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BrowserPlatformLocation.prototype, "hash", {
	        get: function () { return this._location.hash; },
	        enumerable: true,
	        configurable: true
	    });
	    BrowserPlatformLocation.prototype.pushState = function (state, title, url) {
	        this._history.pushState(state, title, url);
	    };
	    BrowserPlatformLocation.prototype.replaceState = function (state, title, url) {
	        this._history.replaceState(state, title, url);
	    };
	    BrowserPlatformLocation.prototype.forward = function () { this._history.forward(); };
	    BrowserPlatformLocation.prototype.back = function () { this._history.back(); };
	    BrowserPlatformLocation = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], BrowserPlatformLocation);
	    return BrowserPlatformLocation;
	})(platform_location_1.PlatformLocation);
	exports.BrowserPlatformLocation = BrowserPlatformLocation;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlcl9wbGF0Zm9ybV9sb2NhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL3NyYy9yb3V0ZXIvbG9jYXRpb24vYnJvd3Nlcl9wbGF0Zm9ybV9sb2NhdGlvbi50cyJdLCJuYW1lcyI6WyJCcm93c2VyUGxhdGZvcm1Mb2NhdGlvbiIsIkJyb3dzZXJQbGF0Zm9ybUxvY2F0aW9uLmNvbnN0cnVjdG9yIiwiQnJvd3NlclBsYXRmb3JtTG9jYXRpb24uX2luaXQiLCJCcm93c2VyUGxhdGZvcm1Mb2NhdGlvbi5sb2NhdGlvbiIsIkJyb3dzZXJQbGF0Zm9ybUxvY2F0aW9uLmdldEJhc2VIcmVmRnJvbURPTSIsIkJyb3dzZXJQbGF0Zm9ybUxvY2F0aW9uLm9uUG9wU3RhdGUiLCJCcm93c2VyUGxhdGZvcm1Mb2NhdGlvbi5vbkhhc2hDaGFuZ2UiLCJCcm93c2VyUGxhdGZvcm1Mb2NhdGlvbi5wYXRobmFtZSIsIkJyb3dzZXJQbGF0Zm9ybUxvY2F0aW9uLnNlYXJjaCIsIkJyb3dzZXJQbGF0Zm9ybUxvY2F0aW9uLmhhc2giLCJCcm93c2VyUGxhdGZvcm1Mb2NhdGlvbi5wdXNoU3RhdGUiLCJCcm93c2VyUGxhdGZvcm1Mb2NhdGlvbi5yZXBsYWNlU3RhdGUiLCJCcm93c2VyUGxhdGZvcm1Mb2NhdGlvbi5mb3J3YXJkIiwiQnJvd3NlclBsYXRmb3JtTG9jYXRpb24uYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFHekMsa0NBQStCLHFCQUFxQixDQUFDLENBQUE7QUFDckQsNEJBQWtCLHVDQUF1QyxDQUFDLENBQUE7QUFFMUQ7Ozs7R0FJRztBQUNIO0lBQzZDQSwyQ0FBZ0JBO0lBSTNEQTtRQUNFQyxpQkFBT0EsQ0FBQ0E7UUFDUkEsSUFBSUEsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0E7SUFDZkEsQ0FBQ0E7SUFFREQsMEZBQTBGQTtJQUMxRkEsZ0JBQWdCQTtJQUNoQkEsdUNBQUtBLEdBQUxBO1FBQ0VFLElBQUlBLENBQUNBLFNBQVNBLEdBQUdBLGlCQUFHQSxDQUFDQSxXQUFXQSxFQUFFQSxDQUFDQTtRQUNuQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsaUJBQUdBLENBQUNBLFVBQVVBLEVBQUVBLENBQUNBO0lBQ25DQSxDQUFDQTtJQUdERixzQkFBSUEsNkNBQVFBO1FBRFpBLGdCQUFnQkE7YUFDaEJBLGNBQTJCRyxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFDQTs7O09BQUFIO0lBRW5EQSxvREFBa0JBLEdBQWxCQSxjQUErQkksTUFBTUEsQ0FBQ0EsaUJBQUdBLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO0lBRTFESiw0Q0FBVUEsR0FBVkEsVUFBV0EsRUFBcUJBO1FBQzlCSyxpQkFBR0EsQ0FBQ0Esb0JBQW9CQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxnQkFBZ0JBLENBQUNBLFVBQVVBLEVBQUVBLEVBQUVBLEVBQUVBLEtBQUtBLENBQUNBLENBQUNBO0lBQzdFQSxDQUFDQTtJQUVETCw4Q0FBWUEsR0FBWkEsVUFBYUEsRUFBcUJBO1FBQ2hDTSxpQkFBR0EsQ0FBQ0Esb0JBQW9CQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxnQkFBZ0JBLENBQUNBLFlBQVlBLEVBQUVBLEVBQUVBLEVBQUVBLEtBQUtBLENBQUNBLENBQUNBO0lBQy9FQSxDQUFDQTtJQUVETixzQkFBSUEsNkNBQVFBO2FBQVpBLGNBQXlCTyxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQTthQUcxRFAsVUFBYUEsT0FBZUEsSUFBSU8sSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsUUFBUUEsR0FBR0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7OztPQUhWUDtJQUMxREEsc0JBQUlBLDJDQUFNQTthQUFWQSxjQUF1QlEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7OztPQUFBUjtJQUN0REEsc0JBQUlBLHlDQUFJQTthQUFSQSxjQUFxQlMsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7OztPQUFBVDtJQUdsREEsMkNBQVNBLEdBQVRBLFVBQVVBLEtBQVVBLEVBQUVBLEtBQWFBLEVBQUVBLEdBQVdBO1FBQzlDVSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxLQUFLQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQTtJQUM3Q0EsQ0FBQ0E7SUFFRFYsOENBQVlBLEdBQVpBLFVBQWFBLEtBQVVBLEVBQUVBLEtBQWFBLEVBQUVBLEdBQVdBO1FBQ2pEVyxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxZQUFZQSxDQUFDQSxLQUFLQSxFQUFFQSxLQUFLQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQTtJQUNoREEsQ0FBQ0E7SUFFRFgseUNBQU9BLEdBQVBBLGNBQWtCWSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxPQUFPQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUU1Q1osc0NBQUlBLEdBQUpBLGNBQWVhLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO0lBN0N4Q2I7UUFBQ0EsaUJBQVVBLEVBQUVBOztnQ0E4Q1pBO0lBQURBLDhCQUFDQTtBQUFEQSxDQUFDQSxBQTlDRCxFQUM2QyxvQ0FBZ0IsRUE2QzVEO0FBN0NZLCtCQUF1QiwwQkE2Q25DLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtIaXN0b3J5LCBMb2NhdGlvbn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9icm93c2VyJztcbmltcG9ydCB7VXJsQ2hhbmdlTGlzdGVuZXJ9IGZyb20gJy4vcGxhdGZvcm1fbG9jYXRpb24nO1xuaW1wb3J0IHtQbGF0Zm9ybUxvY2F0aW9ufSBmcm9tICcuL3BsYXRmb3JtX2xvY2F0aW9uJztcbmltcG9ydCB7RE9NfSBmcm9tICdhbmd1bGFyMi9zcmMvcGxhdGZvcm0vZG9tL2RvbV9hZGFwdGVyJztcblxuLyoqXG4gKiBgUGxhdGZvcm1Mb2NhdGlvbmAgZW5jYXBzdWxhdGVzIGFsbCBvZiB0aGUgZGlyZWN0IGNhbGxzIHRvIHBsYXRmb3JtIEFQSXMuXG4gKiBUaGlzIGNsYXNzIHNob3VsZCBub3QgYmUgdXNlZCBkaXJlY3RseSBieSBhbiBhcHBsaWNhdGlvbiBkZXZlbG9wZXIuIEluc3RlYWQsIHVzZVxuICoge0BsaW5rIExvY2F0aW9ufS5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJyb3dzZXJQbGF0Zm9ybUxvY2F0aW9uIGV4dGVuZHMgUGxhdGZvcm1Mb2NhdGlvbiB7XG4gIHByaXZhdGUgX2xvY2F0aW9uOiBMb2NhdGlvbjtcbiAgcHJpdmF0ZSBfaGlzdG9yeTogSGlzdG9yeTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX2luaXQoKTtcbiAgfVxuXG4gIC8vIFRoaXMgaXMgbW92ZWQgdG8gaXRzIG93biBtZXRob2Qgc28gdGhhdCBgTW9ja1BsYXRmb3JtTG9jYXRpb25TdHJhdGVneWAgY2FuIG92ZXJ3cml0ZSBpdFxuICAvKiogQGludGVybmFsICovXG4gIF9pbml0KCkge1xuICAgIHRoaXMuX2xvY2F0aW9uID0gRE9NLmdldExvY2F0aW9uKCk7XG4gICAgdGhpcy5faGlzdG9yeSA9IERPTS5nZXRIaXN0b3J5KCk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIGdldCBsb2NhdGlvbigpOiBMb2NhdGlvbiB7IHJldHVybiB0aGlzLl9sb2NhdGlvbjsgfVxuXG4gIGdldEJhc2VIcmVmRnJvbURPTSgpOiBzdHJpbmcgeyByZXR1cm4gRE9NLmdldEJhc2VIcmVmKCk7IH1cblxuICBvblBvcFN0YXRlKGZuOiBVcmxDaGFuZ2VMaXN0ZW5lcik6IHZvaWQge1xuICAgIERPTS5nZXRHbG9iYWxFdmVudFRhcmdldCgnd2luZG93JykuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCBmbiwgZmFsc2UpO1xuICB9XG5cbiAgb25IYXNoQ2hhbmdlKGZuOiBVcmxDaGFuZ2VMaXN0ZW5lcik6IHZvaWQge1xuICAgIERPTS5nZXRHbG9iYWxFdmVudFRhcmdldCgnd2luZG93JykuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIGZuLCBmYWxzZSk7XG4gIH1cblxuICBnZXQgcGF0aG5hbWUoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX2xvY2F0aW9uLnBhdGhuYW1lOyB9XG4gIGdldCBzZWFyY2goKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX2xvY2F0aW9uLnNlYXJjaDsgfVxuICBnZXQgaGFzaCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fbG9jYXRpb24uaGFzaDsgfVxuICBzZXQgcGF0aG5hbWUobmV3UGF0aDogc3RyaW5nKSB7IHRoaXMuX2xvY2F0aW9uLnBhdGhuYW1lID0gbmV3UGF0aDsgfVxuXG4gIHB1c2hTdGF0ZShzdGF0ZTogYW55LCB0aXRsZTogc3RyaW5nLCB1cmw6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuX2hpc3RvcnkucHVzaFN0YXRlKHN0YXRlLCB0aXRsZSwgdXJsKTtcbiAgfVxuXG4gIHJlcGxhY2VTdGF0ZShzdGF0ZTogYW55LCB0aXRsZTogc3RyaW5nLCB1cmw6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuX2hpc3RvcnkucmVwbGFjZVN0YXRlKHN0YXRlLCB0aXRsZSwgdXJsKTtcbiAgfVxuXG4gIGZvcndhcmQoKTogdm9pZCB7IHRoaXMuX2hpc3RvcnkuZm9yd2FyZCgpOyB9XG5cbiAgYmFjaygpOiB2b2lkIHsgdGhpcy5faGlzdG9yeS5iYWNrKCk7IH1cbn1cbiJdfQ==

/***/ },

/***/ 258:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(23);
	/********************************
	 * Component imports
	 *******************************/
	var panel1_component_1 = __webpack_require__(259);
	var panel2_component_1 = __webpack_require__(265);
	var panel3_component_1 = __webpack_require__(266);
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    ;
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: 'app',
	            templateUrl: './app/app.template.html',
	            directives: [panel1_component_1.Panel1Component, panel2_component_1.Panel2Component, panel3_component_1.Panel3Component]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;


/***/ },

/***/ 259:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(23);
	__webpack_require__(260);
	var app_event_service_1 = __webpack_require__(264);
	var Panel1Component = (function () {
	    function Panel1Component(eventService) {
	        this.eventService = eventService;
	        this.panelEventName = 'Panel1';
	        this.notification = '';
	    }
	    ;
	    Panel1Component.prototype.ngOnInit = function () {
	        var _this = this;
	        this.panel1Subscription = this.eventService.panel1Observable.subscribe(function (event) { return _this.eventHandler(event); });
	    };
	    Panel1Component.prototype.ngOnDestroy = function () {
	        this.panel1Subscription.unsubscribe();
	    };
	    Panel1Component.prototype.eventHandler = function (event) {
	        this.notification = this.notification.concat(' [', event.name, '] ');
	    };
	    Panel1Component.prototype.notifyPanel2 = function () {
	        var event = {
	            name: this.panelEventName
	        };
	        this.eventService.panel2Event(event);
	    };
	    Panel1Component.prototype.notifyPanel3 = function () {
	        var event = {
	            name: this.panelEventName
	        };
	        this.eventService.panel3Event(event);
	    };
	    Panel1Component.prototype.notifyBoth = function () {
	        this.notifyPanel2();
	        this.notifyPanel3();
	    };
	    Panel1Component = __decorate([
	        core_1.Component({
	            selector: 'panel1',
	            templateUrl: './app/panel1/panel1.template.html',
	            providers: []
	        }), 
	        __metadata('design:paramtypes', [app_event_service_1.EventService])
	    ], Panel1Component);
	    return Panel1Component;
	}());
	exports.Panel1Component = Panel1Component;


/***/ },

/***/ 260:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(53);
	var share_1 = __webpack_require__(261);
	Observable_1.Observable.prototype.share = share_1.share;
	//# sourceMappingURL=share.js.map

/***/ },

/***/ 261:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var multicast_1 = __webpack_require__(262);
	var Subject_1 = __webpack_require__(52);
	function shareSubjectFactory() {
	    return new Subject_1.Subject();
	}
	/**
	 * Returns a new Observable that multicasts (shares) the original Observable. As long as there is at least one
	 * Subscriber this Observable will be subscribed and emitting data. When all subscribers have unsubscribed it will
	 * unsubscribe from the source Observable. Because the Observable is multicasting it makes the stream `hot`.
	 * This is an alias for .publish().refCount().
	 *
	 * <img src="./img/share.png" width="100%">
	 *
	 * @returns {Observable<T>} an Observable that upon connection causes the source Observable to emit items to its Observers
	 */
	function share() {
	    return multicast_1.multicast.call(this, shareSubjectFactory).refCount();
	}
	exports.share = share;
	;
	//# sourceMappingURL=share.js.map

/***/ },

/***/ 262:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ConnectableObservable_1 = __webpack_require__(263);
	/**
	 * Returns an Observable that emits the results of invoking a specified selector on items
	 * emitted by a ConnectableObservable that shares a single subscription to the underlying stream.
	 *
	 * <img src="./img/multicast.png" width="100%">
	 *
	 * @param {Function} selector - a function that can use the multicasted source stream
	 * as many times as needed, without causing multiple subscriptions to the source stream.
	 * Subscribers to the given source will receive all notifications of the source from the
	 * time of the subscription forward.
	 * @returns {Observable} an Observable that emits the results of invoking the selector
	 * on the items emitted by a `ConnectableObservable` that shares a single subscription to
	 * the underlying stream.
	 */
	function multicast(subjectOrSubjectFactory) {
	    var subjectFactory;
	    if (typeof subjectOrSubjectFactory === 'function') {
	        subjectFactory = subjectOrSubjectFactory;
	    }
	    else {
	        subjectFactory = function subjectFactory() {
	            return subjectOrSubjectFactory;
	        };
	    }
	    return new ConnectableObservable_1.ConnectableObservable(this, subjectFactory);
	}
	exports.multicast = multicast;
	//# sourceMappingURL=multicast.js.map

/***/ },

/***/ 263:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(53);
	var Subscriber_1 = __webpack_require__(58);
	var Subscription_1 = __webpack_require__(60);
	var ConnectableObservable = (function (_super) {
	    __extends(ConnectableObservable, _super);
	    function ConnectableObservable(source, subjectFactory) {
	        _super.call(this);
	        this.source = source;
	        this.subjectFactory = subjectFactory;
	    }
	    ConnectableObservable.prototype._subscribe = function (subscriber) {
	        return this.getSubject().subscribe(subscriber);
	    };
	    ConnectableObservable.prototype.getSubject = function () {
	        var subject = this.subject;
	        if (subject && !subject.isUnsubscribed) {
	            return subject;
	        }
	        return (this.subject = this.subjectFactory());
	    };
	    ConnectableObservable.prototype.connect = function () {
	        var source = this.source;
	        var subscription = this.subscription;
	        if (subscription && !subscription.isUnsubscribed) {
	            return subscription;
	        }
	        subscription = source.subscribe(this.getSubject());
	        subscription.add(new ConnectableSubscription(this));
	        return (this.subscription = subscription);
	    };
	    ConnectableObservable.prototype.refCount = function () {
	        return new RefCountObservable(this);
	    };
	    /**
	     * This method is opened for `ConnectableSubscription`.
	     * Not to call from others.
	     */
	    ConnectableObservable.prototype._closeSubscription = function () {
	        this.subject = null;
	        this.subscription = null;
	    };
	    return ConnectableObservable;
	}(Observable_1.Observable));
	exports.ConnectableObservable = ConnectableObservable;
	var ConnectableSubscription = (function (_super) {
	    __extends(ConnectableSubscription, _super);
	    function ConnectableSubscription(connectable) {
	        _super.call(this);
	        this.connectable = connectable;
	    }
	    ConnectableSubscription.prototype._unsubscribe = function () {
	        var connectable = this.connectable;
	        connectable._closeSubscription();
	        this.connectable = null;
	    };
	    return ConnectableSubscription;
	}(Subscription_1.Subscription));
	var RefCountObservable = (function (_super) {
	    __extends(RefCountObservable, _super);
	    function RefCountObservable(connectable, refCount) {
	        if (refCount === void 0) { refCount = 0; }
	        _super.call(this);
	        this.connectable = connectable;
	        this.refCount = refCount;
	    }
	    RefCountObservable.prototype._subscribe = function (subscriber) {
	        var connectable = this.connectable;
	        var refCountSubscriber = new RefCountSubscriber(subscriber, this);
	        var subscription = connectable.subscribe(refCountSubscriber);
	        if (!subscription.isUnsubscribed && ++this.refCount === 1) {
	            refCountSubscriber.connection = this.connection = connectable.connect();
	        }
	        return subscription;
	    };
	    return RefCountObservable;
	}(Observable_1.Observable));
	var RefCountSubscriber = (function (_super) {
	    __extends(RefCountSubscriber, _super);
	    function RefCountSubscriber(destination, refCountObservable) {
	        _super.call(this, null);
	        this.destination = destination;
	        this.refCountObservable = refCountObservable;
	        this.connection = refCountObservable.connection;
	        destination.add(this);
	    }
	    RefCountSubscriber.prototype._next = function (value) {
	        this.destination.next(value);
	    };
	    RefCountSubscriber.prototype._error = function (err) {
	        this._resetConnectable();
	        this.destination.error(err);
	    };
	    RefCountSubscriber.prototype._complete = function () {
	        this._resetConnectable();
	        this.destination.complete();
	    };
	    RefCountSubscriber.prototype._resetConnectable = function () {
	        var observable = this.refCountObservable;
	        var obsConnection = observable.connection;
	        var subConnection = this.connection;
	        if (subConnection && subConnection === obsConnection) {
	            observable.refCount = 0;
	            obsConnection.unsubscribe();
	            observable.connection = null;
	            this.unsubscribe();
	        }
	    };
	    RefCountSubscriber.prototype._unsubscribe = function () {
	        var observable = this.refCountObservable;
	        if (observable.refCount === 0) {
	            return;
	        }
	        if (--observable.refCount === 0) {
	            var obsConnection = observable.connection;
	            var subConnection = this.connection;
	            if (subConnection && subConnection === obsConnection) {
	                obsConnection.unsubscribe();
	                observable.connection = null;
	            }
	        }
	    };
	    return RefCountSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=ConnectableObservable.js.map

/***/ },

/***/ 264:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(53);
	__webpack_require__(260);
	/********************************
	 * Class declaration
	 *******************************/
	var EventService = (function () {
	    function EventService() {
	        var _this = this;
	        this.panel1Observable = new Observable_1.Observable(function (observer) { return _this.panel1Observer = observer; }).share();
	        this.panel2Observable = new Observable_1.Observable(function (observer) { return _this.panel2Observer = observer; }).share();
	        this.panel3Observerable = new Observable_1.Observable(function (observer) { return _this.panel3Observer = observer; }).share();
	    }
	    EventService.prototype.panel1Event = function (change) {
	        this.panel1Observer.next(change);
	    };
	    EventService.prototype.panel2Event = function (change) {
	        this.panel2Observer.next(change);
	    };
	    EventService.prototype.panel3Event = function (change) {
	        this.panel3Observer.next(change);
	    };
	    return EventService;
	}());
	exports.EventService = EventService;


/***/ },

/***/ 265:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(23);
	__webpack_require__(260);
	var app_event_service_1 = __webpack_require__(264);
	var Panel2Component = (function () {
	    function Panel2Component(eventService) {
	        this.eventService = eventService;
	        this.panelEventName = 'Panel2';
	        this.notification = '';
	    }
	    ;
	    Panel2Component.prototype.ngOnInit = function () {
	        var _this = this;
	        this.panel2Subscription = this.eventService.panel2Observable.subscribe(function (event) { return _this.eventHandler(event); });
	    };
	    Panel2Component.prototype.ngOnDestroy = function () {
	        this.panel2Subscription.unsubscribe();
	    };
	    Panel2Component.prototype.eventHandler = function (event) {
	        this.notification = this.notification.concat(' [', event.name, '] ');
	    };
	    Panel2Component.prototype.notifyPanel1 = function () {
	        var event = {
	            name: this.panelEventName
	        };
	        this.eventService.panel1Event(event);
	    };
	    Panel2Component.prototype.notifyPanel3 = function () {
	        var event = {
	            name: this.panelEventName
	        };
	        this.eventService.panel3Event(event);
	    };
	    Panel2Component.prototype.notifyBoth = function () {
	        this.notifyPanel1();
	        this.notifyPanel3();
	    };
	    Panel2Component = __decorate([
	        core_1.Component({
	            selector: 'panel2',
	            templateUrl: './app/panel2/panel2.template.html',
	            providers: []
	        }), 
	        __metadata('design:paramtypes', [app_event_service_1.EventService])
	    ], Panel2Component);
	    return Panel2Component;
	}());
	exports.Panel2Component = Panel2Component;


/***/ },

/***/ 266:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(23);
	__webpack_require__(260);
	var app_event_service_1 = __webpack_require__(264);
	var Panel3Component = (function () {
	    function Panel3Component(eventService) {
	        this.eventService = eventService;
	        this.panelEventName = 'Panel3';
	        this.notification = '';
	    }
	    ;
	    Panel3Component.prototype.ngOnInit = function () {
	        var _this = this;
	        this.panel3Subscription = this.eventService.panel3Observerable.subscribe(function (event) { return _this.eventHandler(event); });
	    };
	    Panel3Component.prototype.ngOnDestroy = function () {
	        this.panel3Subscription.unsubscribe();
	    };
	    Panel3Component.prototype.eventHandler = function (event) {
	        this.notification = this.notification.concat(' [', event.name, '] ');
	    };
	    Panel3Component.prototype.notifyPanel1 = function () {
	        var event = {
	            name: this.panelEventName
	        };
	        this.eventService.panel1Event(event);
	    };
	    Panel3Component.prototype.notifyPanel2 = function () {
	        var event = {
	            name: this.panelEventName
	        };
	        this.eventService.panel2Event(event);
	    };
	    Panel3Component.prototype.notifyBoth = function () {
	        this.notifyPanel1();
	        this.notifyPanel2();
	    };
	    Panel3Component = __decorate([
	        core_1.Component({
	            selector: 'panel3',
	            templateUrl: './app/panel3/panel3.template.html',
	            providers: []
	        }), 
	        __metadata('design:paramtypes', [app_event_service_1.EventService])
	    ], Panel3Component);
	    return Panel3Component;
	}());
	exports.Panel3Component = Panel3Component;


/***/ }

});