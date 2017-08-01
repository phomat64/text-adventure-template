import { WorldObject } from './world-object.model';

export class Item extends WorldObject {
    
    private value: number;
    private weight: number;
    private quantity: number;
    private quantifiable: boolean;
    private questItem: boolean
    private actionScript: string;

    constructor(id: number, 
                name: string, 
                description: string, 
                value: number,
                weight: number,
                quantity: number,
                quantifiable: boolean,
                questItem: boolean,
                actionScript: string) {
        super(id, name, description);
        this.value = value;
        this.weight = weight;
        this.quantity = quantity;
        this.quantifiable = quantifiable;
        this.questItem = questItem;
        this.actionScript = actionScript;
    }

    public getValue(): number {
        return this.value;
    }

    public setValue(value: number) {
        this.value = value;
    }

    public getWeight(): number {
        return this.weight;
    }

    public setWeight(weight: number) {
        this.weight = weight;
    }

    public getActionScript() {
        return this.actionScript;
    }

    public setActionScript(actionScript: string) {
        this.actionScript = actionScript;
    }

}