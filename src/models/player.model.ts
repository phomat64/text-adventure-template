import { Entity } from './entity.model';
import { Item } from './item.model';
import { Weapon } from './weapon.model';
import { ArmorSet } from './armor-set.model';
import { AttributeSet } from './attribute-set.model';
import { EntityStatus } from '../enums/entity-status.enum';

export class Player extends Entity {

    private weapon: Weapon;
    private armorSet: ArmorSet;
    private itemList: Array<Item>;
    private reputation: number;
    private followers: Array<number>;

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
                reputation: number,
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
        super(id, name, description, level, experience, health, newAttributeSet, status);
              this.reputation = reputation;
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
