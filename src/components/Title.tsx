import './Title.css';

interface TitleProps {
  onStart: () => void;
}

export function Title({ onStart }: TitleProps) {
  return (
    <div className="title-screen">
      <div className="title-content">
        <h1 className="title-main">道化シミュレーター</h1>
        <p className="title-sub">DOUKE SIMULATOR</p>
        <p className="title-quote">「恥の多い生涯を送って来ました。」</p>
        <p className="title-author">― 太宰治『人間失格』より</p>

        <button className="start-button" onClick={onStart}>
          始める
        </button>

        <div className="title-instruction">
          <p>あなたは葉蔵。</p>
          <p>道化を演じるか、本音を言うか。</p>
          <p>どちらを選んでも、救われない。</p>
        </div>
      </div>
    </div>
  );
}
