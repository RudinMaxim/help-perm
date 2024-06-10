import { Context } from 'telegraf';

interface Application {
  name: string;
  description: string;
  date: string;
  location?: string;
  device: 'mobile' | 'desktop';
}

export interface SessionData {
  application: string;
}

export interface IBotContext extends Context {
  session: SessionData;
}
