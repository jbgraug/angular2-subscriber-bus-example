import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/share';

/********************************
 * Class and Interface imports
 *******************************/

import {IEvent} from '../app.event.interface';
import {EventService} from '../app.event.service';

@Component({
    selector: 'panel3',
    templateUrl: './app/panel3/panel3.template.html',
    providers: []
})
export class Panel3Component {
    private panel3Subscription: any;
    private panelEventName: string = 'Panel3';

    public notification: string = '';

    constructor(private eventService: EventService) { };

    ngOnInit() {
        this.panel3Subscription = this.eventService.panel3Observerable.subscribe(event => this.eventHandler(event));
    }

    ngOnDestroy() {
        this.panel3Subscription.unsubscribe();
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

    public notifyPanel2() {
        let event: IEvent = {
            name: this.panelEventName
        };

        this.eventService.panel2Event(event);
    }

    public notifyBoth() {
        this.notifyPanel1();
        this.notifyPanel2();
    }
}