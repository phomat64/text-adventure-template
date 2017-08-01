import { Event } from './event.model';

export class RoomEvents {

  private actionEventMap: {[key:string]: {[key:string]: Event}};
  private onEnterEvent: Event;
  private onExitEvent: Event;

  constructor(actionEventMap: {[key:string]: {[key:string]: Event}},
              onEnterEvent: Event,
              onExitEvent: Event) {
    this.actionEventMap = actionEventMap;
    this.onEnterEvent = onEnterEvent;
    this.onExitEvent = onExitEvent;
  }

  public getOnEnterEvent(): Event {
      return this.onEnterEvent;
  }

  public setOnEnterEvent(onEnterEvent: Event) {
      this.onEnterEvent = onEnterEvent;
  }

  public getOnExitEvent(): Event {
      return this.onExitEvent;
  }

  public setOnExitEvent(onExitEvent: Event) {
      this.onExitEvent = onExitEvent;
  }

  public getActionEventMap(): {[key:string]: {[key:string]: Event}} {
    return this.actionEventMap;
  }

  public setActionEventMap(actionEventMap: {[key:string]: {[key:string]: Event}}) {
    this.actionEventMap = actionEventMap;
  }

}
