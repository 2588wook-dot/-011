export interface Achievement {
  id: string;
  category: string;
  title: string;
  problem: string;
  execution: string;
  result: string;
  imageUrl?: string;
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface Pledge {
  id: string;
  title: string;
  description: string;
}
