import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/share';

/********************************
 * Class and Interface imports
 *******************************/

import {IEvent} from '../app.event.interface';
import {EventService} from '../app.event.service';

@Component({
    selector: 'panel2',
    templateUrl: './app/panel2/panel2.template.html',
    providers: []
})
export class Panel2Component {
    private panel2Subscription: any;
    private panelEventName: string = 'Panel2';

    public notification: string = '';

    constructor(private eventService: EventService) { };

    ngOnInit() {
        this.panel2Subscription = this.eventService.panel2Observable.subscribe(event => this.eventHandler(event));
    }

    ngOnDestroy() {
        this.panel2Subscription.unsubscribe();
    }

    private eventHandler(event: IEvent) {
        this.notification = this.notification.concat(' [', event.name, '] ');
    }

    public notifyPanel1() {
        let event: IEvent = {
            name: this.panelEventName
        };

        this.eventService.panel1Event(event);
    }

    public notifyPanel3() {
        let event: IEvent = {
            name: this.panelEventName
        };

        this.eventService.panel3Event(event);
    }

    public notifyBoth() {
        this.notifyPanel1();
        this.notifyPanel3();
    }
}