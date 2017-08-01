import { Item } from './item.model';

export class Weapon extends Item {

    private damage: number;

    constructor(id: number, 
                name: string, 
                description: string, 
                value: number,
                weight: number,
                quantity: number,
                quantifiable: boolean,
                actionScript: string,
                damage: number) {
        super(id, name, description, value, weight, quantity, quantifiable, actionScript);
        this.damage = damage;
    }

    public getDamage(): number {
        return this.damage;
    }

    public setDamage(damage: number) {
        this.damage = damage;
    }

}