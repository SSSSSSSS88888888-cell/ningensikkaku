import { useReducer, useCallback } from 'react';
import type { GameState, GameAction, Choice, Stats } from '../types';
import { SCENES } from '../data/scenes';

const initialStats: Stats = {
  shame: 10,
  loneliness: 10,
  trust: 50,
  clown: 10,
};

const initialState: GameState = {
  currentScene: 0,
  stats: initialStats,
  choices: [],
  phase: 'title',
  lastChoice: null,
};

const clamp = (value: number, min: number, max: number): number => {
  return Math.max(min, Math.min(max, value));
};

const applyEffects = (stats: Stats, effects: Choice['effects']): Stats => {
  return {
    shame: clamp(stats.shame + effects.shame, 0, 100),
    loneliness: clamp(stats.loneliness + effects.loneliness, 0, 100),
    trust: clamp(stats.trust + effects.trust, 0, 100),
    clown: clamp(stats.clown + effects.clown, 0, 100),
  };
};

function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'START_GAME':
      return {
        ...initialState,
        phase: 'playing',
      };

    case 'SELECT_CHOICE': {
      const currentScene = SCENES[state.currentScene];
      const newStats = applyEffects(state.stats, action.choice.effects);
      const newChoices = [
        ...state.choices,
        {
          sceneId: currentScene.id,
          choiceId: action.choice.id,
          choiceType: action.choice.type,
        },
      ];

      return {
        ...state,
        stats: newStats,
        choices: newChoices,
        phase: 'result',
        lastChoice: action.choice,
      };
    }

    case 'CONTINUE': {
      const nextScene = state.currentScene + 1;

      // 全場面終了
      if (nextScene >= SCENES.length) {
        return {
          ...state,
          phase: 'ending',
        };
      }

      return {
        ...state,
        currentScene: nextScene,
        phase: 'playing',
        lastChoice: null,
      };
    }

    case 'SHOW_ENDING':
      return {
        ...state,
        phase: 'ending',
      };

    case 'RESET':
      return initialState;

    default:
      return state;
  }
}

export function useGameState() {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  const startGame = useCallback(() => {
    dispatch({ type: 'START_GAME' });
  }, []);

  const selectChoice = useCallback((choice: Choice) => {
    dispatch({ type: 'SELECT_CHOICE', choice });
  }, []);

  const continueGame = useCallback(() => {
    dispatch({ type: 'CONTINUE' });
  }, []);

  const resetGame = useCallback(() => {
    dispatch({ type: 'RESET' });
  }, []);

  const currentScene = SCENES[state.currentScene] || null;

  return {
    state,
    currentScene,
    startGame,
    selectChoice,
    continueGame,
    resetGame,
  };
}
