import type { Choice } from '../types';
import './Result.css';

interface ResultProps {
  choice: Choice;
  onContinue: () => void;
}

export function Result({ choice, onContinue }: ResultProps) {
  const getEffectDisplay = (value: number): string => {
    if (value > 0) return `+${value}`;
    if (value < 0) return `${value}`;
    return '±0';
  };

  const getEffectClass = (value: number): string => {
    if (value > 0) return 'positive';
    if (value < 0) return 'negative';
    return 'neutral';
  };

  const effects = [
    { label: '恥', value: choice.effects.shame, color: '#DC2626' },
    { label: '孤独', value: choice.effects.loneliness, color: '#2563EB' },
    { label: '信頼', value: choice.effects.trust, color: '#16A34A' },
    { label: '道化', value: choice.effects.clown, color: '#CA8A04' },
  ].filter((e) => e.value !== 0);

  return (
    <div className="result">
      <div className="result-text">
        {choice.result.split('\n').map((line, index) => (
          <p key={index} className={line.trim() === '' ? 'empty-line' : ''}>
            {line || '\u00A0'}
          </p>
        ))}
      </div>

      {effects.length > 0 && (
        <div className="result-effects">
          {effects.map((effect) => (
            <span
              key={effect.label}
              className={`effect-badge ${getEffectClass(effect.value)}`}
              style={{ borderColor: effect.color }}
            >
              {effect.label} {getEffectDisplay(effect.value)}
            </span>
          ))}
        </div>
      )}

      <button className="continue-button" onClick={onContinue}>
        続ける
      </button>
    </div>
  );
}
