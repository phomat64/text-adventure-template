import { EventJson } from './event-json.interface';
import { StringMap } from './string-map.interface';

export interface RoomEventsJson {
  actionEventMap: {[key:string]: {[key:string]: EventJson}},
  onEnterEvent: EventJson,
  onExitEvent: EventJson
}
