import type { Scene, Ending, EndingType } from '../types';

export const SCENES: Scene[] = [
  // 場面1: 父の土産
  {
    id: 'father_gift',
    chapter: '第一の手記',
    narration: `父が東京から帰ってきた。
土産に何が欲しいか、と聞かれた。

自分は何も欲しくなかった。
欲しいものなど、何も思いつかなかった。

しかし、何も答えないわけにはいかない。`,
    choices: [
      {
        id: 'honest',
        text: '「何も欲しくありません」',
        type: 'honest',
        effects: { shame: 5, loneliness: 10, trust: -10, clown: 0 },
        result: `父は黙った。
自分は、父の期待を裏切ったのだと思った。
何も欲しくないなどと言う子供は、異常なのだ。

父の失望した顔を見て、自分は自分が恐ろしくなった。`,
      },
      {
        id: 'clown',
        text: '「獅子舞が欲しいです」',
        type: 'clown',
        effects: { shame: 2, loneliness: 5, trust: 5, clown: 10 },
        result: `父は笑った。
家族も笑った。

自分は、その夜、獅子舞など少しも欲しくないのに
なぜあんなことを言ったのかと、恥ずかしくて眠れなかった。`,
      },
    ],
    originalQuote: '恥の多い生涯を送って来ました。',
  },

  // 場面2: 女中の夜
  {
    id: 'servants_night',
    chapter: '第一の手記',
    narration: `夜、女中と下男に、いたずらをされた。

自分は何が起きているのかわからなかった。
ただ、これは誰にも言ってはいけないことだと、
本能的に感じていた。

翌朝、女中が何事もなかったように笑っていた。`,
    choices: [
      {
        id: 'honest',
        text: '誰かに話す',
        type: 'honest',
        effects: { shame: 15, loneliness: 15, trust: -15, clown: 0 },
        result: `話そうとしたが、言葉にならなかった。
何を、どう説明すればいいのか。
自分が汚れたような気がして、吐き気がした。

結局、誰にも言えなかった。`,
      },
      {
        id: 'clown',
        text: '何事もなかったように振る舞う',
        type: 'clown',
        effects: { shame: 10, loneliness: 10, trust: 0, clown: 8 },
        result: `自分は笑った。
女中も笑った。

この時、自分は学んだ。
世の中には、言ってはいけないことがある。
秘密を抱えて生きるということを、自分は覚えた。`,
      },
    ],
    originalQuote: '自分には、人間の生活というものが、見当つかないのです。',
  },

  // 場面3: 学校での道化
  {
    id: 'school_clown',
    chapter: '第一の手記',
    narration: `学校で、自分は道化を演じ始めた。

わざと間抜けな失敗をする。
わざと転ぶ。
わざと馬鹿なことを言う。

みんなが笑う。自分は人気者になった。`,
    choices: [
      {
        id: 'honest',
        text: '道化をやめて、普通にしてみる',
        type: 'honest',
        effects: { shame: 8, loneliness: 12, trust: -8, clown: -5 },
        result: `誰も自分を見なくなった。
話しかけてくる者もいなくなった。

道化でない自分には、何の価値もないのだ。
自分は、孤独だった。`,
      },
      {
        id: 'clown',
        text: 'もっと面白く演じる',
        type: 'clown',
        effects: { shame: 5, loneliness: 5, trust: 10, clown: 12 },
        result: `体育の時間、跳び箱で見事に失敗してみせた。
クラス中が爆笑した。

自分は笑われることで、ようやく人間の中に
居場所を見つけることができた。`,
      },
    ],
    originalQuote: '自分の幸福の観念と、世のすべての人たちの幸福の観念とが、まるで食いちがっているような不安、',
  },

  // 場面4: 竹一との出会い
  {
    id: 'takeichi',
    chapter: '第一の手記',
    narration: `竹一という同級生がいた。
彼は不思議な目で自分を見ていた。

ある日、竹一は自分に言った。
「お前は、わざとやっているだろう」

背筋が凍った。`,
    choices: [
      {
        id: 'honest',
        text: '「……わかるのか」',
        type: 'honest',
        effects: { shame: 15, loneliness: 5, trust: 5, clown: -5 },
        result: `竹一は笑った。
「わかるさ。お前は、俺と似ている」

初めてだった。
自分を見抜いた人間に出会ったのは。
恐ろしいような、救われたような気持ちだった。`,
      },
      {
        id: 'clown',
        text: '「何のことだい？」ととぼける',
        type: 'clown',
        effects: { shame: 8, loneliness: 8, trust: 0, clown: 8 },
        result: `竹一は黙って自分を見ていた。
その目が、すべてを見透かしているようだった。

「……化け物」

竹一は小さくつぶやいた。`,
      },
    ],
    originalQuote: 'ワザ。ワザ。お前は、わざとやっているだろう。',
  },

  // 場面5: 上京
  {
    id: 'tokyo',
    chapter: '第二の手記',
    narration: `高等学校に進学し、東京に出た。

故郷を離れ、誰も自分を知らない場所で、
新しい自分になれると思った。

しかし、東京でも自分は道化を演じ続けた。`,
    choices: [
      {
        id: 'honest',
        text: '新しい環境で本当の自分を出してみる',
        type: 'honest',
        effects: { shame: 10, loneliness: 15, trust: -10, clown: -3 },
        result: `誰も、自分に興味を持たなかった。
本当の自分など、誰も見たくないのだ。

東京の人々は冷たかった。
自分は、ますます孤独になった。`,
      },
      {
        id: 'clown',
        text: '道化として、新しい仲間を作る',
        type: 'clown',
        effects: { shame: 5, loneliness: 3, trust: 8, clown: 10 },
        result: `すぐに友人ができた。
おどけて見せれば、みんな笑った。

しかし、この友人たちは
本当の自分を知らない。
知ったら、離れていくだろう。`,
      },
    ],
    originalQuote: '東京はおそろしい所だ、と自分は思いました。',
  },

  // 場面6: 堀木との交友
  {
    id: 'horiki',
    chapter: '第二の手記',
    narration: `堀木という男と知り合った。
彼は自分に、酒と女と、そして「世の中のずるさ」を教えた。

堀木は言った。
「お前は馬鹿正直だな。もっとうまくやれ」`,
    choices: [
      {
        id: 'honest',
        text: '「君の生き方は間違っている」と言う',
        type: 'honest',
        effects: { shame: 5, loneliness: 15, trust: -15, clown: 0 },
        result: `堀木は笑った。
「お前に何がわかる」

それきり、堀木は自分に冷たくなった。
また一人、友を失った。`,
      },
      {
        id: 'clown',
        text: '堀木に合わせて遊ぶ',
        type: 'clown',
        effects: { shame: 8, loneliness: 0, trust: 5, clown: 8 },
        result: `堀木と一緒に、夜の街に繰り出した。
酒を飲み、女を買い、金を使った。

楽しかった。いや、楽しいふりをした。
自分は、堀木に操られている自覚があった。`,
      },
      {
        id: 'escape',
        text: '適当に距離を置く',
        type: 'escape',
        effects: { shame: 3, loneliness: 8, trust: -5, clown: 3 },
        result: `堀木とは、つかず離れずの関係を保った。
しかし、堀木は自分を離さなかった。

「お前といると、面白いからな」

自分は、堀木の玩具だった。`,
      },
    ],
    originalQuote: '世間とは、いったい何だろう。',
  },

  // 場面7: 酒への逃避
  {
    id: 'alcohol',
    chapter: '第二の手記',
    narration: `気づくと、自分は酒なしではいられなくなっていた。

酒を飲むと、何もかもがぼやけた。
恥も、孤独も、恐怖も、すべてが遠くなった。

しかし、翌朝、すべてが戻ってきた。`,
    choices: [
      {
        id: 'honest',
        text: '酒を断つ',
        type: 'honest',
        effects: { shame: 0, loneliness: 10, trust: 5, clown: -5 },
        result: `酒を断った日々は、地獄だった。
すべてが鮮明に見えた。
自分の惨めさが、はっきりとわかった。

しかし、三日も持たなかった。`,
      },
      {
        id: 'escape',
        text: 'もっと深く酔う',
        type: 'escape',
        effects: { shame: 10, loneliness: 5, trust: -10, clown: 5 },
        result: `酒に溺れた。
何日も何日も、酔い続けた。

気づくと、学校には行かなくなっていた。
金もなくなっていた。
しかし、それでも飲み続けた。`,
      },
    ],
    originalQuote: '酒に溺れました。',
  },

  // 場面8: ツネ子との出会い
  {
    id: 'tsuneko',
    chapter: '第二の手記',
    narration: `カフェで、ツネ子という女と出会った。

彼女は悲しそうな目をしていた。
自分と同じ目だ、と思った。

ツネ子は言った。
「あなたも、死にたいと思ったことがあるでしょう」`,
    choices: [
      {
        id: 'honest',
        text: '「……ある」',
        type: 'honest',
        effects: { shame: 5, loneliness: -5, trust: 5, clown: -3 },
        result: `ツネ子は微笑んだ。
「私も」

初めて、誰かと本当に繋がれた気がした。
しかしそれは、死という暗闇の中での繋がりだった。`,
      },
      {
        id: 'clown',
        text: '「そんな暗いこと言わないで」と笑う',
        type: 'clown',
        effects: { shame: 8, loneliness: 5, trust: 0, clown: 8 },
        result: `ツネ子は黙った。
その目が、自分を見透かしていた。

「……嘘つき」

彼女は静かに言った。`,
      },
    ],
    originalQuote: '死のうと思っていた。ことしの正月、よそから着物を一反もらった。',
  },

  // 場面9: 心中
  {
    id: 'shinju',
    chapter: '第二の手記',
    narration: `ツネ子と心中することになった。

鎌倉の海。
冬の夜。
自分たちは手を繋いで海に入った。

冷たかった。`,
    choices: [
      {
        id: 'honest',
        text: '死を受け入れる',
        type: 'honest',
        effects: { shame: 0, loneliness: 0, trust: 0, clown: 0 },
        result: `海は暗く、冷たかった。
ツネ子の手を握りしめた。

意識が遠のいていく中、
自分は不思議と安らかだった。

……しかし、自分だけが助かった。`,
      },
      {
        id: 'escape',
        text: '最後の瞬間、恐怖に襲われる',
        type: 'escape',
        effects: { shame: 15, loneliness: 15, trust: -5, clown: 0 },
        result: `海に入った瞬間、恐怖が襲った。
死にたくない。

しかし、ツネ子の手は離せなかった。
気づくと、自分だけが浜に打ち上げられていた。

ツネ子は、死んだ。`,
      },
    ],
    originalQuote: '自分は、その女と一緒に、海に飛び込みました。女は死に、自分だけ助かりました。',
  },

  // 場面10: ヨシ子との結婚
  {
    id: 'yoshiko',
    chapter: '第三の手記',
    narration: `ヨシ子という女と結婚した。

彼女は純粋だった。
まるで天使のように、何も知らない無垢な人だった。

自分は、彼女の純粋さに救われる気がした。`,
    choices: [
      {
        id: 'honest',
        text: '過去をすべて話す',
        type: 'honest',
        effects: { shame: 10, loneliness: 5, trust: 10, clown: -5 },
        result: `すべてを話した。
心中のこと。酒のこと。女たちのこと。

ヨシ子は泣いた。
しかし、彼女は自分を抱きしめた。
「大丈夫。私が一緒にいるから」`,
      },
      {
        id: 'clown',
        text: '良い夫を演じる',
        type: 'clown',
        effects: { shame: 5, loneliness: 8, trust: 5, clown: 10 },
        result: `自分は良い夫を演じた。
ヨシ子の前では酒を控え、
優しく振る舞った。

しかし、自分は知っていた。
これも道化だと。いつかバレると。`,
      },
    ],
    originalQuote: '無垢の信頼心は、罪なりや？',
  },

  // 場面11: ヨシ子の事件
  {
    id: 'yoshiko_incident',
    chapter: '第三の手記',
    narration: `ある夜、帰宅すると、
ヨシ子が商人に犯されていた。

自分は、何もできなかった。
ただ、見ていた。

ヨシ子の、信頼しきった目が、自分を見ていた。`,
    choices: [
      {
        id: 'honest',
        text: '怒りをぶつける',
        type: 'honest',
        effects: { shame: 10, loneliness: 10, trust: -15, clown: 0 },
        result: `自分は叫んだ。暴れた。
しかし、男は笑って去っていった。

ヨシ子は何も言わなかった。
ただ、あの純粋な目が、
何かを失ったように見えた。`,
      },
      {
        id: 'escape',
        text: '何もなかったことにする',
        type: 'escape',
        effects: { shame: 20, loneliness: 15, trust: -10, clown: 5 },
        result: `自分は、何も見なかったことにした。
ヨシ子も、何も言わなかった。

しかし、すべてが変わってしまった。
ヨシ子の目から、光が消えた。
自分の中の何かも、死んだ。`,
      },
    ],
    originalQuote: '人間は、決して人間に服従しない。奴隷でさえ、その卑屈な服従の形式に於いて、奴隷らしい反逆をしている。',
  },

  // 場面12: 薬物依存
  {
    id: 'drugs',
    chapter: '第三の手記',
    narration: `酒だけでは、もう逃げられなくなった。

医者からもらった薬を飲み始めた。
モルヒネ。

すべてが、どうでもよくなった。`,
    choices: [
      {
        id: 'honest',
        text: '助けを求める',
        type: 'honest',
        effects: { shame: 15, loneliness: 5, trust: 5, clown: -5 },
        result: `助けを求めた。
しかし、誰も助けてくれなかった。

「自業自得だ」
「意志が弱いからだ」

自分は、一人だった。`,
      },
      {
        id: 'escape',
        text: 'もっと深く沈む',
        type: 'escape',
        effects: { shame: 10, loneliness: 15, trust: -15, clown: 5 },
        result: `薬の量が増えた。
現実と夢の境目がわからなくなった。

自分は、もう人間ではなかった。
ただの、薬を求める獣だった。`,
      },
    ],
    originalQuote: '人間、失格。もはや、自分は、完全に、人間でなくなりました。',
  },

  // 場面13: 精神病院
  {
    id: 'asylum',
    chapter: '第三の手記',
    narration: `気づくと、精神病院にいた。

白い壁。鉄格子。
自分は、ここに閉じ込められた。

「治療」と呼ばれるものを受けた。`,
    choices: [
      {
        id: 'honest',
        text: '治療に従う',
        type: 'honest',
        effects: { shame: 5, loneliness: 10, trust: 5, clown: -5 },
        result: `医者の言うことを聞いた。
薬を飲み、規則正しく生活した。

少しずつ、頭が冴えてきた。
しかし、冴えてくるほど、
自分の惨めさがわかった。`,
      },
      {
        id: 'escape',
        text: '抵抗する',
        type: 'escape',
        effects: { shame: 10, loneliness: 15, trust: -10, clown: 5 },
        result: `暴れた。叫んだ。
しかし、すぐに取り押さえられた。

注射を打たれ、意識が遠のいた。
自分には、もう何の力も残っていなかった。`,
      },
    ],
    originalQuote: '自分は、狂人ではない。しかし、人間でもない。',
  },

  // 場面14: 故郷へ
  {
    id: 'homecoming',
    chapter: '第三の手記',
    narration: `病院を出て、故郷の田舎に戻された。

そこには、老いた父も、兄弟も、もういなかった。
ただ、老婆が一人、自分の世話をしていた。

自分は、もう二十七歳になっていた。`,
    choices: [
      {
        id: 'honest',
        text: '静かに余生を送る',
        type: 'honest',
        effects: { shame: 5, loneliness: 10, trust: 0, clown: 0 },
        result: `何もない日々が続いた。
老婆と二人、静かに暮らした。

自分は、もう何も望まなかった。
ただ、生きていた。それだけだった。`,
      },
      {
        id: 'escape',
        text: 'すべてを忘れようとする',
        type: 'escape',
        effects: { shame: 8, loneliness: 12, trust: -5, clown: 3 },
        result: `過去を思い出すまいとした。
しかし、夜になると、すべてが蘇った。

ツネ子の顔。ヨシ子の目。
堀木の笑い。父の失望。

自分は、逃げられなかった。`,
      },
    ],
    originalQuote: '今年、自分は、二十七になります。白髪がめっきりふえたので、たいていの人から、四十以上に見られます。',
  },
];

export const ENDINGS: Record<EndingType, Ending> = {
  perfect_clown: {
    type: 'perfect_clown',
    title: '完全道化',
    description: '誰もあなたの本当の顔を知らない。あなたは完璧に演じきった。しかし、鏡の中の自分は、もう誰だかわからない。',
    quote: '自分には、人間の生活というものが、見当つかないのです。',
  },
  isolation: {
    type: 'isolation',
    title: '完全孤立',
    description: '誰にも理解されなかった。本音を言えば言うほど、人は離れていった。あなたは一人だ。最初から、最後まで。',
    quote: '人間に対して、いつも恐怖に震いおののいていました。',
  },
  collapse: {
    type: 'collapse',
    title: '崩壊',
    description: '恥が、あなたを押し潰した。自分が自分でいられなくなった。何もかもが、崩れ去った。',
    quote: '恥の多い生涯を送って来ました。',
  },
  ningen_shikkaku: {
    type: 'ningen_shikkaku',
    title: '人間失格',
    description: '道化を演じても、本音を言っても、逃げても。どれを選んでも、救われなかった。それが人間失格の意味だった。',
    quote: 'ただ、一さいは過ぎて行きます。',
  },
  survival: {
    type: 'survival',
    title: '生存',
    description: 'それでも、あなたは生きている。完璧ではない。救われてもいない。しかし、まだ、息をしている。',
    quote: '神様みたいないい子でした。',
  },
};

export const getEnding = (stats: {
  shame: number;
  loneliness: number;
  trust: number;
  clown: number;
}): Ending => {
  const { shame, loneliness, trust, clown } = stats;

  // 全ゲージが高い場合: 人間失格
  if (shame >= 60 && loneliness >= 60 && clown >= 60) {
    return ENDINGS.ningen_shikkaku;
  }

  // 道化度が最も高い場合: 完全道化
  if (clown >= 80 && clown > loneliness && clown > shame) {
    return ENDINGS.perfect_clown;
  }

  // 孤独が最も高い場合: 完全孤立
  if (loneliness >= 80 && loneliness > clown && loneliness > shame) {
    return ENDINGS.isolation;
  }

  // 恥が最も高い場合: 崩壊
  if (shame >= 80 && shame > clown && shame > loneliness) {
    return ENDINGS.collapse;
  }

  // バランスが取れている、または信頼が残っている場合: 生存
  // trust は将来の拡張のために保持
  void trust;
  return ENDINGS.survival;
};
