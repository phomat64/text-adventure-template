import { WorldObject } from './world-object.model';

export class Region extends WorldObject {

  private roomIds: Array<number>;
  private lawful: boolean;

  constructor(id: number,
              name: string,
              description: string,
              lawful: boolean,
              roomIds: Array<number>) {
                super(id, name, description);
                this.roomIds = roomIds;
              };

}
