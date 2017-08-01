import { RegionJson } from './region-json.interface';

export interface RegionJson {
    id: number;
    name: string;
    description: string;
    lawful: boolean;
    roomIds: number[];
}