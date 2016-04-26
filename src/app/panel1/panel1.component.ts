import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/share';

/********************************
 * Class and Interface imports
 *******************************/

import {IEvent} from '../app.event.interface';
import {EventService} from '../app.event.service';

@Component({
    selector: 'panel1',
    templateUrl: './app/panel1/panel1.template.html',
    providers: []
})
export class Panel1Component {
    private panel1Subscription: any;
    private panelEventName: string = 'Panel1';

    public notification: string = '';

    constructor(private eventService: EventService) { };

    ngOnInit() {
        this.panel1Subscription = this.eventService.panel1Observable.subscribe(event => this.eventHandler(event));
    }

    ngOnDestroy() {
        this.panel1Subscription.unsubscribe();
    }

    private eventHandler(event: IEvent) {
        this.notification = this.notification.concat(' [', event.name, '] ');
    }

    public notifyPanel2() {
        let event: IEvent = {
            name: this.panelEventName
        };

        this.eventService.panel2Event(event);
    }

    public notifyPanel3() {
        let event: IEvent = {
            name: this.panelEventName
        };

        this.eventService.panel3Event(event);
    }

    public notifyBoth() {
        this.notifyPanel2();
        this.notifyPanel3();
    }
}

