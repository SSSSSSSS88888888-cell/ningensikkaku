import './Title.css';

interface TitleProps {
  onStart: () => void;
}

export function Title({ onStart }: TitleProps) {
  return (
    <div className="title-screen">
      {/* 装飾フレーム */}
      <div className="title-frame">
        <div className="frame-corner frame-top-left"></div>
        <div className="frame-corner frame-top-right"></div>
        <div className="frame-corner frame-bottom-left"></div>
        <div className="frame-corner frame-bottom-right"></div>

        <div className="title-content">
          {/* 上部装飾 */}
          <div className="title-ornament">
            <span className="ornament-line"></span>
            <span className="ornament-diamond">◆</span>
            <span className="ornament-line"></span>
          </div>

          <p className="title-label">選択型文學遊戯</p>

          <h1 className="title-main">
            <span className="title-char">人</span>
            <span className="title-char">間</span>
            <span className="title-char">失</span>
            <span className="title-char">格</span>
          </h1>

          <p className="title-sub">NINGEN SHIKKAKU SIMULATOR</p>

          {/* 中央装飾 */}
          <div className="title-divider">
            <span className="divider-wing">━━━</span>
            <span className="divider-center">❖</span>
            <span className="divider-wing">━━━</span>
          </div>

          <div className="title-quote-box">
            <p className="title-quote">「恥の多い生涯を送って来ました。」</p>
            <p className="title-author">― 太宰治『人間失格』より ―</p>
          </div>

          <button className="start-button" onClick={onStart}>
            <span className="button-ornament">〈</span>
            <span className="button-text">始める</span>
            <span className="button-ornament">〉</span>
          </button>

          <div className="title-instruction">
            <p>あなたは葉蔵。</p>
            <p>道化を演じるか、本音を言うか。</p>
            <p className="instruction-emphasis">どちらを選んでも、救われない。</p>
          </div>

          {/* 下部装飾 */}
          <div className="title-ornament bottom">
            <span className="ornament-line"></span>
            <span className="ornament-diamond">◆</span>
            <span className="ornament-line"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
