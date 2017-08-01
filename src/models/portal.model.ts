import { WorldObject } from './world-object.model';

export class Portal extends WorldObject {

    private open: boolean;
    private locked: boolean;
    private broken: boolean
    private canOpen: boolean;
    private canClose: boolean;
    private canLock: boolean;
    private canUnlock: boolean;
    private canBreak: boolean;
    private canPass: boolean;
    private requiredKeys: number[];
    private actionScript: string;
    private direction: string;
    private start: number;
    private destination: number;

    constructor(id: number,
                name: string,
                description: string,
                open: boolean,
                locked: boolean,
                broken: boolean,
                canOpen: boolean,
                canClose: boolean,
                canLock: boolean,
                canUnlock: boolean,
                canBreak: boolean,
                canPass: boolean,
                requiredKeys: number[],
                destination: number,
                actionScript: string) {
        super(id, name, description);
        this.open = open;
        this.locked = locked;
        this.broken = broken;
        this.canOpen = canOpen;
        this.canClose = canClose;
        this.canLock = canLock;
        this.canUnlock = canUnlock;
        this.canBreak = canBreak;
        this.canPass = canPass;
        this.requiredKeys = requiredKeys;
        this.destination = destination;
        this.actionScript = actionScript;
    }

}
