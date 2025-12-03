import type { Stats } from '../types';
import './StatusBar.css';

interface StatusBarProps {
  stats: Stats;
}

interface GaugeProps {
  label: string;
  value: number;
  color: string;
}

function Gauge({ label, value, color }: GaugeProps) {
  return (
    <div className="gauge">
      <div className="gauge-label">{label}</div>
      <div className="gauge-bar">
        <div
          className="gauge-fill"
          style={{
            width: `${value}%`,
            backgroundColor: color,
          }}
        />
      </div>
      <div className="gauge-value">{value}</div>
    </div>
  );
}

export function StatusBar({ stats }: StatusBarProps) {
  return (
    <div className="status-bar">
      <Gauge label="恥" value={stats.shame} color="#8b2942" />
      <Gauge label="孤独" value={stats.loneliness} color="#2d4a6b" />
      <Gauge label="信頼" value={stats.trust} color="#3d6b4a" />
      <Gauge label="道化" value={stats.clown} color="#c9a227" />
    </div>
  );
}
