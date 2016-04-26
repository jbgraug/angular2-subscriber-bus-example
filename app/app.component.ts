import {Component} from 'angular2/core';

/********************************
 * Component imports
 *******************************/
 
import {Panel1Component} from './panel1/panel1.component';
import {Panel2Component} from './panel2/panel2.component';
import {Panel3Component} from './panel3/panel3.component';

@Component({
    selector: 'app',
    templateUrl: './app/app.template.html',
    directives: [Panel1Component, Panel2Component, Panel3Component]
})
export class AppComponent {
    constructor() { };
}