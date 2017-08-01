import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth';
import { Room } from '../models/room.model';
import { Entity } from '../models/entity.model';
import { Item } from '../models/item.model';
import { Event } from '../models/event.model';
import { RoomEvents } from '../models/room-events.model';
import { RoomJson } from '../models/room-json.interface';
import { RoomEngine } from '../engine/room.engine';
import { AttributeSet } from '../models/attribute-set.model';
import { EntityStatus } from '../enums/entity-status.enum';
import { Portal } from '../models/portal.model';
import 'rxjs/Rx';
import firebase from 'firebase';

@Injectable()
export class RoomService {

  private roomsDbRef = firebase.database().ref('rooms');

  constructor(private http: Http,
              private authService: AuthService) {}

  saveRoom(token: string) {
    let triggerScriptMap: {[key: string]: Event} = {};
    triggerScriptMap['red button'] = new Event('killplayer', 'You die now...');

    let actionEventMap: {[key:string]: {[key:string]: Event}} = {};
    actionEventMap['push'] = triggerScriptMap;

    let directionMap: {[key:string]: Portal} = {};
    directionMap['south'] = new Portal(0, 
                                       'Train Station Office', 
                                       'A train station office where you can buy transit tickets. It seems there are many disgruntled people in line. Must be due to that inoperable train nearby.',
                                      true,
                                      false,
                                      false,
                                      true,
                                      true,
                                      false,
                                      false,
                                      false,
                                      true,
                                      [0, 1],
                                      1,
                                      null);
    directionMap['north'] = null;

    // let newEntity = new Entity(0, 'Old Homeless Woman', 'A desperate old woman.', new AttributeSet(10, 10, 8, 2, 3, 1, 1), EntityStatus.ALIVE);
    // let newEntityList = new Array<Entity>();
    // newEntityList.push(newEntity);

    // let newItem = new Item(0, 'blue potion', 'Heals 30 points', 5, 20, 1, true, 'killplayer');
    // let newItemList = new Array<Item>();
    // newItemList.push(newItem);

    let newRoomEvents = new RoomEvents(actionEventMap, new Event('heal', 'healed you'), new Event('poison', 'poisoned you'));

    let newRoom = new Room(
      0,
      'Train Station Office',
      'The hustle and bustle of civilians surround you. This is the busiest station you\'ve been to',
      0,
      [0, 1, 2],
      [0, 1, 2, 3],
      newRoomEvents,
      directionMap,
      50
    );

    let roomList: Array<Room> = new Array<Room>();
    roomList.push(newRoom);

    // roomsDbRef.set(roomList);

    const userId = this.authService.getActiveUser().uid;
    return this.http.put('https://ionic2-recipebook-b52c4.firebaseio.com/' + userId + '/rooms.json?auth=' + token, JSON.stringify(roomList))
      .map((response: Response) => {
        return response.json();
      });
  }

  getRoom(token: string) {
    const userId = this.authService.getActiveUser().uid;
    return this.http.get('https://ionic2-recipebook-b52c4.firebaseio.com/' + userId + '/rooms.json?auth=' + token)
      .map((response: Response) => {
        return response.json();
      });
  }

  test() {
    this.testCreateRoom();
    this.testGetRoom();
  }

  testGetRoom() {
    const userId = this.authService.getActiveUser().uid;
    console.log('userId:', userId);
    let ref = firebase.database().ref('rooms');
    ref.on("value", function(snapshot) {
        let tempSnapShot = snapshot.val();
        console.log(tempSnapShot);

        let firstKey = Object.keys(tempSnapShot)[0]
        let tempRoom = tempSnapShot[firstKey];
        let castedTempRoom = <RoomJson>tempRoom;
        console.log("castedTempRoom:", castedTempRoom);
        console.log('typeof:', typeof castedTempRoom);
        let newRoom = RoomEngine.toRoomObject(castedTempRoom);
        console.log('typeof:', typeof newRoom);
      }, function (error) {
         console.log("Error: " + error.code);
      });
  }

  testCreateRoom() {
    const userId = this.authService.getActiveUser().uid;
    let ref = firebase.database().ref('rooms');
    let triggerScriptMap: {[key: string]: Event} = {};
    triggerScriptMap['red button'] = new Event('killplayer', 'You die now...');

    let actionEventMap: {[key:string]: {[key:string]: Event}} = {};
    actionEventMap['push'] = triggerScriptMap;

    let directionMap: {[key:string]: Portal} = {};
    directionMap['south'] = new Portal(0, 
                                       'Train Station Office', 
                                       'A train station office where you can buy transit tickets. It seems there are many disgruntled people in line. Must be due to that inoperable train nearby.',
                                      true,
                                      false,
                                      false,
                                      true,
                                      true,
                                      false,
                                      false,
                                      false,
                                      true,
                                      [0, 1],
                                      1,
                                      null);
    directionMap['north'] = null;

    let newEntity = new Entity(0, 'Old Homeless Woman', 'A desperate old woman.', new AttributeSet(10, 10, 8, 2, 3, 1, 1), EntityStatus.ALIVE);
    let newEntityList = new Array<Entity>();
    newEntityList.push(newEntity);

    let newItem = new Item(0, 'blue potion', 'Heals 30 points', 5, 20, 1, true, 'killplayer');
    let newItemList = new Array<Item>();
    newItemList.push(newItem);

    let newRoomEvents = new RoomEvents(actionEventMap, new Event('heal', 'healed you'), new Event('poison', 'poisoned you'));

    let newRoom = new Room(
      0,
      'Train Station Office',
      'The hustle and bustle of civilians surround you. This is the busiest station you\'ve been to',
      0,
      [0, 1, 2],
      [0, 1, 2, 3],
      newRoomEvents,
      directionMap,
      50
    );

    let roomList: Array<Room> = new Array<Room>();
    roomList.push(newRoom);

    ref.set(roomList);
  }
}
