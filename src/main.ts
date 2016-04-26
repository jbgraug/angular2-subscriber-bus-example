/// <reference path="../node_modules/angular2/typings/browser.d.ts" />

/********************************
 * main
 * Package and class imports
 *******************************/

import {bootstrap} from 'angular2/platform/browser';
import {HashLocationStrategy, LocationStrategy} from 'angular2/router';
import {provide} from 'angular2/core';

/********************************
 * Component imports and bootstrap
 *******************************/
import {AppComponent} from './app/app.component';
import {EventService} from './app/app.event.service';

bootstrap(AppComponent, [EventService, provide(LocationStrategy, { useClass: HashLocationStrategy })])
	.catch(err => console.error(err)); 