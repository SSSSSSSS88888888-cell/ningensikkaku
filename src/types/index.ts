// 道化シミュレーター 型定義

export interface Effects {
  shame: number;      // 恥
  loneliness: number; // 孤独
  trust: number;      // 信頼
  clown: number;      // 道化度
}

export interface Stats {
  shame: number;      // 0-100
  loneliness: number; // 0-100
  trust: number;      // 0-100
  clown: number;      // 0-100
}

export type ChoiceType = 'honest' | 'clown' | 'escape';

export interface Choice {
  id: string;
  text: string;
  type: ChoiceType;
  effects: Effects;
  result: string;
}

export interface Scene {
  id: string;
  chapter: string;
  narration: string;
  choices: Choice[];
  originalQuote?: string;
}

export interface ChoiceRecord {
  sceneId: string;
  choiceId: string;
  choiceType: ChoiceType;
}

export type GamePhase = 'title' | 'playing' | 'result' | 'ending';

export interface GameState {
  currentScene: number;
  stats: Stats;
  choices: ChoiceRecord[];
  phase: GamePhase;
  lastChoice: Choice | null;
}

export type EndingType =
  | 'perfect_clown'    // 完全道化
  | 'isolation'        // 完全孤立
  | 'collapse'         // 崩壊
  | 'ningen_shikkaku'  // 人間失格
  | 'survival';        // 生存

export interface Ending {
  type: EndingType;
  title: string;
  description: string;
  quote: string;
}

export type GameAction =
  | { type: 'START_GAME' }
  | { type: 'SELECT_CHOICE'; choice: Choice }
  | { type: 'CONTINUE' }
  | { type: 'SHOW_ENDING' }
  | { type: 'RESET' };
