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
      <Gauge label="恥" value={stats.shame} color="#DC2626" />
      <Gauge label="孤独" value={stats.loneliness} color="#2563EB" />
      <Gauge label="信頼" value={stats.trust} color="#16A34A" />
      <Gauge label="道化" value={stats.clown} color="#CA8A04" />
    </div>
  );
}
