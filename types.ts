export enum WineType {
  SPARKLING = 'Sparkling',
  WHITE = 'White',
  RED = 'Red',
  ROSE = 'Rosé'
}

export interface WineStats {
  alcohol: string;
  temperature: string;
  grape: string;
  region: string;
  acidity?: string;
  sugar?: string;
}

export interface WineProduct {
  id: string;
  name: string;
  brand: 'Cavit' | 'Lunetta' | 'I Mastri Vernacoli';
  type: WineType;
  shortDescription: string;
  fullDescription: string;
  tastingNotes: {
    color: string;
    nose: string;
    taste: string;
  };
  stats: WineStats;
  pairings: string;
  image: string; // URL placeholder
  scales?: {
    sweetness?: number; // 0 (Sweet) to 100 (Dry)
    body?: number; // 0 (Light) to 100 (Full)
  }
}