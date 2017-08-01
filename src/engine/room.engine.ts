import { Room } from '../models/room.model';
import { RoomJson } from '../models/room-json.interface';
import { Entity } from '../models/entity.model';
import { Item } from '../models/item.model';
import { RoomEvents } from '../models/room-events.model';
import { Event } from '../models/event.model';
import { EventJson } from '../models/event-json.interface';
import { AttributeSet } from '../models/attribute-set.model';
import { EntityStatus } from '../enums/entity-status.enum';
import { Portal } from '../models/portal.model';
import { PortalJson } from '../models/portal-json.model';

export class RoomEngine {

  public static toRoomObject(roomJson: RoomJson): Room {

    let entityList: Array<Entity> = new Array<Entity>();
    // for (let entity of roomJson.entityList) {
    //   entityList.push(new Entity(entity.id,
    //                              entity.name,
    //                              entity.description,
    //                              new AttributeSet(
    //                              entity.attributeSet.health,
    //                              entity.attributeSet.maxHealth,
    //                              entity.attributeSet.intelligence,
    //                              entity.attributeSet.strength,
    //                              entity.attributeSet.speed,
    //                              entity.attributeSet.endurance,
    //                              entity.attributeSet.luck),
    //                              EntityStatus.ALIVE));
    // }

    // let itemList: Array<Item> = new Array<Item>();
    // for (let item of roomJson.itemList) {
    //   itemList.push(new Item(item.id,
    //                          item.name,
    //                          item.description,
    //                          item.value,
    //                          item.weight,
    //                          item.quantity,
    //                          item.quantifiable,
    //                          item.actionScript));
    // }

    let actionEventMap: {[key:string]: {[key:string]: Event}} = {};
    let triggerScriptMap: {[key:string]: Event} = {};
    for (let actionKey of Object.keys(roomJson.roomEvents.actionEventMap)) {
      for (let triggerKey of Object.keys(roomJson.roomEvents.actionEventMap[actionKey])) {
        let triggerValueObj: EventJson = roomJson.roomEvents.actionEventMap[actionKey][triggerKey];
        triggerScriptMap[triggerKey] = new Event(triggerValueObj.actionScript, triggerValueObj.message);
      }
      actionEventMap[actionKey] = triggerScriptMap;
    }

    let onEnterEvent: Event = new Event(roomJson.roomEvents.onEnterEvent.actionScript,
                                        roomJson.roomEvents.onEnterEvent.message);
    let onExitEvent: Event = new Event(roomJson.roomEvents.onExitEvent.actionScript,
                                        roomJson.roomEvents.onExitEvent.message);
    let roomEvents = new RoomEvents(actionEventMap, onEnterEvent, onExitEvent);

    let directionMap: {[key:string]: Portal} = {};
    for (let directionKey of Object.keys(roomJson.directionMap)) {
      directionMap[directionKey] = new Portal(roomJson.id,
      roomJson.name,
      roomJson.description,
      roomJson.directionMap[directionKey].open,
      roomJson.directionMap[directionKey].locked,
      roomJson.directionMap[directionKey].broken,
      roomJson.directionMap[directionKey].canOpen,
      roomJson.directionMap[directionKey].canClose,
      roomJson.directionMap[directionKey].canLock,
      roomJson.directionMap[directionKey].canUnlock,
      roomJson.directionMap[directionKey].canBreak,
      roomJson.directionMap[directionKey].canPass,
      roomJson.directionMap[directionKey].requiredKeys,
      roomJson.directionMap[directionKey].destination,
      roomJson.directionMap[directionKey].actionScript);
    }

    return new Room(roomJson.id,
                    roomJson.name,
                    roomJson.description,
                    roomJson.regionId,
                    [0, 1, 2, 3],
                    [0, 1, 2, 3],
                    roomEvents,
                    directionMap,
                    50);
  }

  public static toRoomJson(roomObject: Room): RoomJson {
    return null;
  }

}
