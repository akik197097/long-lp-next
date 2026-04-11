export default function Insight() {
  return (
    <section className="section-padding max-w-5xl mx-auto">
      <div className="flex items-center gap-6 mb-16">
        <div className="h-px flex-1 bg-gold/20" />
        <p className="font-cormorant italic text-gold tracking-widest2 text-sm">III. Insight</p>
        <div className="h-px flex-1 bg-gold/20" />
      </div>

      <h2 className="font-noto text-3xl md:text-4xl font-light text-offwhite text-center tracking-widest mb-4">
        努力の方向が、<br /><span className="text-gradient-gold">90度ズレていた。</span>
      </h2>
      <p className="font-cormorant italic text-muted text-xl text-center tracking-wide mb-20">
        "The effort was real. The direction was wrong."
      </p>

      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* SVG Diagram */}
        <div className="flex items-center justify-center">
          <svg viewBox="0 0 320 320" className="w-full max-w-xs" aria-hidden="true">
            {/* Grid background */}
            <defs>
              <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#C9A84C" strokeWidth="0.3" opacity="0.2"/>
              </pattern>
            </defs>
            <rect width="320" height="320" fill="url(#grid)" />

            {/* Axes */}
            <line x1="160" y1="20" x2="160" y2="300" stroke="#C9A84C" strokeWidth="0.8" opacity="0.3"/>
            <line x1="20" y1="160" x2="300" y2="160" stroke="#C9A84C" strokeWidth="0.8" opacity="0.3"/>

            {/* Horizontal arrow — テクニック（薄い・×） */}
            <line x1="160" y1="160" x2="280" y2="160" stroke="#9A9080" strokeWidth="2" strokeDasharray="6 4" opacity="0.5"/>
            <polygon points="288,160 278,155 278,165" fill="#9A9080" opacity="0.5"/>
            <text x="200" y="178" fill="#9A9080" fontSize="10" fontFamily="serif" fontStyle="italic" opacity="0.7">テクニック習得</text>
            {/* × mark */}
            <line x1="272" y1="148" x2="284" y2="140" stroke="#9A9080" strokeWidth="1.5" opacity="0.6"/>
            <line x1="284" y1="148" x2="272" y2="140" stroke="#9A9080" strokeWidth="1.5" opacity="0.6"/>

            {/* Vertical arrow — 構造変革（ゴールド・✓） */}
            <line x1="160" y1="160" x2="160" y2="50" stroke="#C9A84C" strokeWidth="2.5"/>
            <polygon points="160,38 154,52 166,52" fill="#C9A84C"/>
            <text x="168" y="90" fill="#C9A84C" fontSize="10" fontFamily="serif" fontStyle="italic">構造的自己変革</text>
            {/* ✓ mark */}
            <polyline points="152,44 157,50 168,36" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round"/>

            {/* Origin dot */}
            <rect x="154" y="154" width="12" height="12" fill="#C9A84C" transform="rotate(45 160 160)"/>

            {/* Labels */}
            <text x="24" y="175" fill="#9A9080" fontSize="9" fontFamily="serif" fontStyle="italic" opacity="0.6">現在地</text>
            <text x="26" y="56" fill="#C9A84C" fontSize="9" fontFamily="serif" fontStyle="italic">目的地</text>
          </svg>
        </div>

        {/* Text */}
        <div className="space-y-6">
          <p className="font-noto text-muted text-base leading-loose tracking-wider">
            多くの男性は「女性にモテるためのテクニック」を水平方向に積み上げ続ける。しかし、本当に必要な変化は
            <span className="text-offwhite">垂直方向の深化</span>だ。
          </p>
          <p className="font-noto text-muted text-base leading-loose tracking-wider">
            会話術・外見・お金——これらは表面的な要因に過ぎない。女性が本能的に感じ取るのは、その男性が
            <span className="text-offwhite">自分の人生を生きているかどうか</span>だ。
          </p>
          <div className="border-l-2 border-gold/50 pl-6">
            <p className="font-noto text-offwhite/90 text-base leading-relaxed tracking-wider">
              40代以上が持つ本当の武器は「深み」だ。その深みを正しく再構築する——それがこのプロジェクトのすべてだ。
            </p>
          </div>

          {/* Mini stats */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            {[
              { num: "90%", text: "の男性がテクニック方向に努力している" },
              { num: "10%", text: "が構造を変えた結果として選ばれている" },
            ].map((s) => (
              <div key={s.num} className="border border-gold/15 p-4 text-center">
                <p className="font-cormorant italic text-gradient-gold text-3xl mb-1">{s.num}</p>
                <p className="font-noto text-muted text-xs leading-relaxed tracking-wider">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
