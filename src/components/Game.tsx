import { useGameState } from '../hooks/useGameState';
import { SCENES } from '../data/scenes';
import { Title } from './Title';
import { Scene } from './Scene';
import { StatusBar } from './StatusBar';
import { Result } from './Result';
import { Ending } from './Ending';
import './Game.css';

export function Game() {
  const {
    state,
    currentScene,
    startGame,
    selectChoice,
    continueGame,
    resetGame,
  } = useGameState();

  // タイトル画面
  if (state.phase === 'title') {
    return <Title onStart={startGame} />;
  }

  // エンディング画面
  if (state.phase === 'ending') {
    return <Ending stats={state.stats} onRestart={resetGame} />;
  }

  // 結果表示画面
  if (state.phase === 'result' && state.lastChoice) {
    return (
      <div className="game-container">
        <Result choice={state.lastChoice} onContinue={continueGame} />
        <StatusBar stats={state.stats} />
      </div>
    );
  }

  // ゲーム画面（場面表示）
  if (state.phase === 'playing' && currentScene) {
    return (
      <div className="game-container">
        <Scene
          scene={currentScene}
          sceneNumber={state.currentScene + 1}
          totalScenes={SCENES.length}
          onChoiceSelect={selectChoice}
        />
        <StatusBar stats={state.stats} />
      </div>
    );
  }

  // フォールバック
  return null;
}
