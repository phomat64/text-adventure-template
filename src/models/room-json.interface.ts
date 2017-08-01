import { EntityJson } from './entity-json.interface';
import { ItemJson } from './item-json.interface';
import { RoomEventsJson } from './room-events-json.interface';
import { PortalJson } from './portal-json.model';

export interface RoomJson {
  id: number,
  regionId: number,
  name: string,
  description: string,
  entityList: number[],
  itemList: number[],
  roomEvents: RoomEventsJson,
  directionMap: {[key:string]: PortalJson},
  light: number;
  lawful: boolean;
  backgroundMusic: string;
}
