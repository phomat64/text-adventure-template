import { Entity } from './entity.model';
import { Item } from './item.model';
import { Weapon } from './weapon.model';
import { ArmorSet } from './armor-set.model';
import { AttributeSet } from './attribute-set.model';
import { EntityStatus } from '../enums/entity-status.enum';
import { EntityBehavior } from '../enums/entity-behavior.enum';

export class NPC extends Entity {

    private behavior: EntityBehavior;
    private weapon: Weapon;
    private armorSet: ArmorSet;
    private itemList: Array<Item>;

    constructor(id: number,
                name: string,
                description: string,
                level: number,
                experience: number,
                health: number,
                maxHealth: number,
                intelligence: number,
                strength: number,
                agility: number,
                endurance: number,
                luck: number,
                status: EntityStatus,     
                behavior: EntityBehavior,     
                weapon: Weapon,
                armorSet: ArmorSet,
                itemList: Array<Item>) {
        let newAttributeSet = new AttributeSet(
          maxHealth,
          intelligence,
          strength,
          agility,
          endurance,
          luck);
        super(id, name, description, level, experience, maxHealth, newAttributeSet, status);
              this.behavior = behavior;
              this.weapon = weapon;
              this.armorSet = armorSet;
              this.itemList = itemList;
    }

    public getWeapon() {
        return this.weapon;
    }

    public setWeapon(weapon: Weapon) {
        this.weapon = weapon;
    }

    public getArmorSet() {
        return this.armorSet;
    }

    public setArmor(armorSet: ArmorSet) {
        this.armorSet = armorSet;
    }

    public getItemList() {
        return this.itemList;
    }

    public setItemList(itemList: Array<Item>) {
        this.itemList = itemList;
    }

}
