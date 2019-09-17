import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AccordionService {
  private tabHeaderEvent = new BehaviorSubject<any>(null);
  public tabHeaderEventData = this.tabHeaderEvent.asObservable();

  constructor() {}

  setData(data: any) {
    this.tabHeaderEvent.next(data);
  }
}
