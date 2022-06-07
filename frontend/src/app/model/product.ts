export class Product {
  [key: string]: any;
  _id: string = '';
  // name: string = '';
  // description: string = '';
  price?: number = 0;
  active?: boolean = true;
  'Magyar név'?: string | null = '';
  'Latin név'?: string | null = '';
  'Fényigény'?: 'napos' | 'árnyék' | 'félárnyék' | null = 'napos';
  'Tenyészidő'?: '1 nyári' | 'évelő' | null = '1 nyári';
  // 'Talajigény'?: 'savanyú' | 'meszes' | 'normál' = 'savanyú';
  'Talajigény'?: string | null = '';
  'Habitus'?: string | null = '';
  'Teljes magasság'?: string | null = '';
  'Kiszerelés'?: string | null = '';
  'Virágzás ideje'?: string | null = '';
  'Virág színe'?: string | null = '';
  'Egyéb'?: string | null = '';
}
