const pains = [
  "アプローチしても、いつも「友達として」で終わる",
  "マッチングアプリで会えても、2回目に繋がらない",
  "モテ系ノウハウを試すほど、自分が嘘くさくなる",
  "若い頃と同じやり方が、40代では全く通用しない",
];

const comparison = [
  { label: "女性への接し方", left: "反応を読んで戦略を変える", right: "在り方から自然に滲み出る" },
  { label: "会話の質",       left: "テクニックで「うまく話す」",  right: "深さで「本物として伝わる」" },
  { label: "年齢との関係",   left: "若さが武器→40代で通用しない", right: "深みが武器→年齢で強くなる" },
  { label: "関係の続き方",   left: "盛り上がっても長続きしない",  right: "自然と深い関係が生まれる" },
  { label: "変化の方向",     left: "「何を言うか」を磨く",        right: "「どんな人間か」を変える" },
];

export default function Problem() {
  return (
    <section id="problem" className="section-py container-lp">
      {/* Label */}
      <div className="flex items-center gap-4 mb-16">
        <span className="label-en">02 — Problem</span>
        <div className="h-px flex-1 bg-gold/20" />
      </div>

      <h2 className="font-noto text-3xl md:text-4xl font-light text-offwhite tracking-widest leading-tight mb-4">
        テクニックを学ぶほど、<br />本質から遠ざかっていく。
      </h2>
      <p className="font-cormorant italic text-muted text-xl tracking-wide mb-16">
        "The more techniques you learn, the further you drift."
      </p>

      {/* Pain points */}
      <div className="space-y-0 mb-20">
        {pains.map((text, i) => (
          <div key={i} className="flex items-start gap-6 py-5 border-b border-gold/10 group hover:border-gold/30 transition-colors">
            <span className="font-cormorant italic text-gold/40 text-2xl shrink-0 group-hover:text-gold/60 transition-colors">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="font-noto text-offwhite/70 text-base leading-relaxed tracking-wider group-hover:text-offwhite/90 transition-colors">
              {text}
            </p>
          </div>
        ))}
      </div>

      {/* Comparison table */}
      <p className="label-en mb-6 text-center tracking-widest">なぜテクニックでは限界があるのか</p>
      <div className="border border-gold/15">
        {/* Header */}
        <div className="grid grid-cols-[120px_1fr_1fr] md:grid-cols-[160px_1fr_1fr] border-b border-gold/15">
          <div className="p-4" />
          <div className="p-4 border-l border-gold/15 text-center">
            <p className="font-cormorant italic text-muted/60 text-sm tracking-widest">テクニック依存</p>
          </div>
          <div className="p-4 border-l border-gold/15 text-center">
            <p className="font-cormorant italic text-gold text-sm tracking-widest">構造的自己変革</p>
          </div>
        </div>
        {comparison.map((row, i) => (
          <div key={i} className={`grid grid-cols-[120px_1fr_1fr] md:grid-cols-[160px_1fr_1fr] ${i < comparison.length - 1 ? "border-b border-gold/10" : ""}`}>
            <div className="p-4 flex items-center">
              <p className="font-noto text-muted/60 text-xs tracking-widest">{row.label}</p>
            </div>
            <div className="p-4 border-l border-gold/10 flex items-center">
              <p className="font-noto text-offwhite/35 text-sm leading-relaxed tracking-wider">{row.left}</p>
            </div>
            <div className="p-4 border-l border-gold/20 flex items-center bg-gold/[0.03]">
              <p className="font-noto text-offwhite text-sm leading-relaxed tracking-wider">{row.right}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
