import { AttributeSetJson } from './attribute-set-json.interface';

export interface EntityJson {
  id: number,
  name: string,
  description: string,
  level: number,
  experience: number,
  health: number;
  attributeSet: AttributeSetJson;
  status: number;
  location: number;
}
