export interface PortalJson {
    open: boolean;
    locked: boolean;
    broken: boolean
    canOpen: boolean;
    canClose: boolean;
    canLock: boolean;
    canUnlock: boolean;
    canBreak: boolean;
    canPass: boolean;
    requiredKeys: number[];
    actionScript: string;
    direction: string;
    start: number;
    destination: number;
}