const visions = [
  "20代の女性に「この人だけは何か違う」と思われる存在になる",
  "追いかけなくても、自然に「また会いたい」と連絡が来る",
  "恋愛だけでなく、仕事・人間関係・自己肯定感すべてが好転する",
  "年齢を重ねるほど、磁力と存在感が増していく",
  "「男として生きている」という本物の実感を取り戻す",
];

export default function FutureVision() {
  return (
    <section id="future-vision" className="section-py container-lp">
      {/* Label */}
      <div className="flex items-center gap-4 mb-16">
        <span className="label-en">08 — Future Vision</span>
        <div className="h-px flex-1 bg-gold/20" />
      </div>

      <h2 className="font-noto text-2xl md:text-4xl font-light text-offwhite tracking-widest leading-tight mb-4">
        構造が整ったとき、<br />あなたが手に入れる未来。
      </h2>
      <p className="font-cormorant italic text-muted text-xl tracking-wide mb-16">
        &ldquo;The life that awaits you.&rdquo;
      </p>

      {/* Vision list */}
      <div className="space-y-0 mb-16">
        {visions.map((text, i) => (
          <div
            key={i}
            className="flex items-start gap-6 py-6 border-b border-gold/10 group hover:border-gold/30 transition-colors"
          >
            <span className="font-cormorant italic text-gold/40 text-2xl shrink-0 group-hover:text-gold/60 transition-colors">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="font-noto text-offwhite/75 text-base leading-relaxed tracking-wider group-hover:text-offwhite/95 transition-colors">
              {text}
            </p>
          </div>
        ))}
      </div>

      {/* Closing statement */}
      <p className="font-noto text-offwhite/60 text-sm leading-relaxed tracking-wider">
        これはテクニックだけでは、<br />
        絶対に手に入らない世界だ。
      </p>
    </section>
  );
}
