export interface IItem {
  id?: number;
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  into: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps;
  stats: any;
  requiredChampion?: string
}

// interface Stats {
//   FlatMovementSpeedMod: number;
// }

interface Maps {
  '11': boolean;
  '12': boolean;
  '21': boolean;
  '22': boolean;
}

interface Gold {
  base: number;
  purchasable: boolean;
  total: number;
  sell: number;
}

interface Image {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
}