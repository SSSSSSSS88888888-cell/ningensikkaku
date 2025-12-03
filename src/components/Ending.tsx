import type { Stats } from '../types';
import { getEnding } from '../data/scenes';
import './Ending.css';

interface EndingProps {
  stats: Stats;
  onRestart: () => void;
}

export function Ending({ stats, onRestart }: EndingProps) {
  const ending = getEnding(stats);

  return (
    <div className="ending">
      <div className="ending-content">
        <div className="ending-label">― 結末 ―</div>
        <h1 className="ending-title">{ending.title}</h1>

        <div className="ending-description">
          <p>{ending.description}</p>
        </div>

        <div className="ending-quote">
          <p>「{ending.quote}」</p>
        </div>

        <div className="ending-stats">
          <div className="stat-item">
            <span className="stat-label">恥</span>
            <span className="stat-value" style={{ color: '#DC2626' }}>{stats.shame}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">孤独</span>
            <span className="stat-value" style={{ color: '#2563EB' }}>{stats.loneliness}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">信頼</span>
            <span className="stat-value" style={{ color: '#16A34A' }}>{stats.trust}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">道化</span>
            <span className="stat-value" style={{ color: '#CA8A04' }}>{stats.clown}</span>
          </div>
        </div>

        <button className="restart-button" onClick={onRestart}>
          最初から
        </button>

        <div className="ending-credit">
          <p>原作：太宰治『人間失格』</p>
        </div>
      </div>
    </div>
  );
}
