import { WorldObject } from './world-object.model';
import { AttributeSet } from './attribute-set.model';
import { EntityStatus } from '../enums/entity-status.enum';
import { EntityBehavior } from '../enums/entity-behavior.enum';

export class Entity extends WorldObject {

    private level: number;
    private experience: number;
    private health: number;
    private attributeSet: AttributeSet;
    private status: number;
    private location: number;

    constructor(id: number,
                name: string,
                description: string,
                level: number,
                experience: number,
                health: number,
                attributeSet: AttributeSet,
                status: number) {
      super(id, name, description);
      this.level = level;
      this.experience = experience;
      this.health = health;
      this.attributeSet = attributeSet;
      this.status = status;
    }

    public getHealth(): number {
      return this.health;
    }

    public setHealth(health: number) {
        this.health = health;
    }

}
