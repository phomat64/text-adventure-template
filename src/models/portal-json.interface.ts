export interface PortalJson {
  id: number;
  name: string;
  description: string;
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
  destination: number;
  actionScript: string;
}
