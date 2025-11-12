
export enum Sentiment {
  POSITIVE = 'POSITIVE',
  NEGATIVE = 'NEGATIVE',
  NEUTRAL = 'NEUTRAL'
}

export interface Message {
  id: number;
  author: string;
  country: string;
  countryCode: string; // For emoji flag
  avatar: string;
  message: string;
  timestamp: string;
  sentiment: Sentiment;
}
