import type { Scene as SceneType, Choice } from '../types';
import './Scene.css';

interface SceneProps {
  scene: SceneType;
  sceneNumber: number;
  totalScenes: number;
  onChoiceSelect: (choice: Choice) => void;
}

export function Scene({ scene, sceneNumber, totalScenes, onChoiceSelect }: SceneProps) {
  return (
    <div className="scene">
      <div className="scene-header">
        <span className="scene-chapter">【{scene.chapter}】</span>
        <span className="scene-progress">{sceneNumber} / {totalScenes}</span>
      </div>

      <div className="scene-narration">
        {scene.narration.split('\n').map((line, index) => (
          <p key={index} className={line.trim() === '' ? 'empty-line' : ''}>
            {line || '\u00A0'}
          </p>
        ))}
      </div>

      {scene.originalQuote && (
        <div className="scene-quote">
          <p>「{scene.originalQuote}」</p>
        </div>
      )}

      <div className="scene-choices">
        {scene.choices.map((choice) => (
          <button
            key={choice.id}
            className={`choice-button choice-${choice.type}`}
            onClick={() => onChoiceSelect(choice)}
          >
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  );
}
