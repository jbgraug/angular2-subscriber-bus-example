import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/share';

/********************************
 * Class and Interface imports
 *******************************/

import {IEvent} from './app.event.interface';

/********************************
 * Class declaration
 *******************************/
export class EventService {
    private panel1Observer: any;
    private panel2Observer: any;
    private panel3Observer: any;

    public panel1Observable: Observable<IEvent>;
    public panel2Observable: Observable<IEvent>;
    public panel3Observerable: Observable<IEvent>;

    constructor() {
        this.panel1Observable = new Observable(observer => this.panel1Observer = observer).share();
        this.panel2Observable = new Observable(observer => this.panel2Observer = observer).share();
        this.panel3Observerable = new Observable(observer => this.panel3Observer = observer).share();
    }

    public panel1Event(change: IEvent) {
        this.panel1Observer.next(change);
    }

    public panel2Event(change: IEvent) {
        this.panel2Observer.next(change);
    }

    public panel3Event(change: IEvent) {
        this.panel3Observer.next(change);
    }
}