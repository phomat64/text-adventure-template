export class WorldObject {
    private id: number;
    private name: string;
    private description: string;

    constructor(id: number,
                name: string,
                description: string) {
        this.id = id;
        this.name = name;
        this.description = description;
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number) {
        this.id = id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string) {
        this.name =  name;
    }

    public getDescription(): string {
        return this.description;
    }

    public setDescription(description: string) {
        this.description = description;
    }

}