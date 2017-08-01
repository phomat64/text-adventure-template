import { Item } from './item.model';
import { ArmorType } from '../enums/armor-type.enum';

export class Armor extends Item {

    private armorType: ArmorType;
    private defense: number;

    constructor(id: number,
                name: string,
                description: string,
                value: number,
                weight: number,
                quantity: number,
                quantifiable: boolean,
                actionScript: string,
                defense: number,
                armorType: ArmorType) {
        super(id, name, description, value, weight, quantity, quantifiable, actionScript);
        this.defense = defense;
        this.armorType = armorType;
    }

    public getDefense(): number {
        return this.defense;
    }

    public setDefense(defense: number) {
        this.defense = defense;
    }

}
