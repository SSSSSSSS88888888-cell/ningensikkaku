// キャラクター定義

export interface Character {
  id: string;
  name: string;
  nameReading?: string;
  description: string;
  images: {
    default: string;
    [expression: string]: string; // 表情差分
  };
}

export const CHARACTERS: Record<string, Character> = {
  yozo: {
    id: 'yozo',
    name: '葉蔵',
    nameReading: 'ようぞう',
    description: '主人公。道化を演じ続ける青年。',
    images: {
      default: '/characters/yozo/default.png',
      smile: '/characters/yozo/smile.png',
      sad: '/characters/yozo/sad.png',
      fear: '/characters/yozo/fear.png',
      clown: '/characters/yozo/clown.png',
    },
  },
  father: {
    id: 'father',
    name: '父',
    description: '葉蔵の父。厳格で威圧的な存在。',
    images: {
      default: '/characters/father/default.png',
      angry: '/characters/father/angry.png',
      disappointed: '/characters/father/disappointed.png',
    },
  },
  takeichi: {
    id: 'takeichi',
    name: '竹一',
    nameReading: 'たけいち',
    description: '葉蔵の同級生。葉蔵の道化を見抜く。',
    images: {
      default: '/characters/takeichi/default.png',
      knowing: '/characters/takeichi/knowing.png',
    },
  },
  horiki: {
    id: 'horiki',
    name: '堀木',
    nameReading: 'ほりき',
    description: '葉蔵の悪友。酒と女を教える。',
    images: {
      default: '/characters/horiki/default.png',
      laugh: '/characters/horiki/laugh.png',
      scheming: '/characters/horiki/scheming.png',
    },
  },
  tsuneko: {
    id: 'tsuneko',
    name: 'ツネ子',
    description: 'カフェの女給。葉蔵と心中を図る。',
    images: {
      default: '/characters/tsuneko/default.png',
      sad: '/characters/tsuneko/sad.png',
      gentle: '/characters/tsuneko/gentle.png',
    },
  },
  yoshiko: {
    id: 'yoshiko',
    name: 'ヨシ子',
    description: '葉蔵の妻。純粋で無垢な女性。',
    images: {
      default: '/characters/yoshiko/default.png',
      happy: '/characters/yoshiko/happy.png',
      crying: '/characters/yoshiko/crying.png',
      broken: '/characters/yoshiko/broken.png',
    },
  },
  madam: {
    id: 'madam',
    name: 'マダム',
    description: 'バーのマダム。葉蔵を世話する。',
    images: {
      default: '/characters/madam/default.png',
    },
  },
};

// 場面ごとのキャラクター配置
export interface SceneCharacter {
  characterId: string;
  expression?: string;
  position: 'left' | 'center' | 'right';
  opacity?: number;
}

export const SCENE_CHARACTERS: Record<string, SceneCharacter[]> = {
  father_gift: [
    { characterId: 'father', expression: 'default', position: 'right' },
  ],
  servants_night: [],
  school_clown: [
    { characterId: 'yozo', expression: 'clown', position: 'center' },
  ],
  takeichi: [
    { characterId: 'takeichi', expression: 'knowing', position: 'right' },
  ],
  tokyo: [],
  horiki: [
    { characterId: 'horiki', expression: 'laugh', position: 'right' },
  ],
  alcohol: [
    { characterId: 'yozo', expression: 'sad', position: 'center' },
  ],
  tsuneko: [
    { characterId: 'tsuneko', expression: 'sad', position: 'right' },
  ],
  shinju: [
    { characterId: 'tsuneko', expression: 'gentle', position: 'right' },
  ],
  yoshiko: [
    { characterId: 'yoshiko', expression: 'happy', position: 'right' },
  ],
  yoshiko_incident: [
    { characterId: 'yoshiko', expression: 'broken', position: 'right', opacity: 0.7 },
  ],
  drugs: [
    { characterId: 'yozo', expression: 'fear', position: 'center' },
  ],
  asylum: [],
  homecoming: [],
};

export const getCharacter = (id: string): Character | undefined => {
  return CHARACTERS[id];
};

export const getSceneCharacters = (sceneId: string): SceneCharacter[] => {
  return SCENE_CHARACTERS[sceneId] || [];
};
