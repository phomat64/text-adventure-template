import { ArmorSetJson } from './armor-set-json.interface';

export interface ArmorSetJson {
    head: ArmorSetJson;
    torso: ArmorSetJson;
    hands: ArmorSetJson;
    legs: ArmorSetJson;
    feet: ArmorSetJson;
}