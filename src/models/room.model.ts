import { WorldObject } from './world-object.model';
import { Entity } from './entity.model';
import { Item } from './item.model';
import { Event } from './event.model';
import { RoomEvents } from './room-events.model';
import { Portal } from './portal.model';

export class Room extends WorldObject {

    private regionId: number;
    private entityList: Array<number>;
    private itemList: Array<number>;
    private roomEvents: RoomEvents;
    private directionMap: {[key:string]: Portal};
    private light: number;
    private lawful: boolean;
    private backgroundMusic: string;

    constructor(id: number,
                name: string,
                description: string,
                regionId: number,
                entityList: Array<number>,
                itemList: Array<number>,
                roomEvents: RoomEvents,
                directionMap: {[key:string]: Portal},
                light: number) {
        super(id, name, description);
        this.regionId = regionId;
        this.entityList = entityList;
        this.itemList = itemList;
        this.roomEvents = roomEvents;
        this.directionMap = directionMap;
        this.light = light;
    }

    public getEntityList(): Array<number> {
        return this.entityList;
    }

    public setEntityList(entityList: Array<number>) {
        this.entityList = entityList;
    }

    public getItemList(): Array<number> {
        return this.itemList;
    }

    public setItemList(itemList: Array<number>) {
        this.itemList = itemList;
    }

    public getRoomEvents(): RoomEvents {
        return this.roomEvents;
    }

    public setRoomEvents(roomEvents: RoomEvents) {
        this.roomEvents = roomEvents;
    }

    public getDirectionMap(): {[key:string]: Portal} {
        return this.directionMap;
    }

    public setDirectionMap(directionMap: {[key:string]: Portal}) {
        this.directionMap = directionMap;
    }

}
