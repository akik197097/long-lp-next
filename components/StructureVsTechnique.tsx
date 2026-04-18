const rows = [
  { label: "変えるもの",     left: "言葉・見た目・態度",           right: "自己の核・在り方・深み" },
  { label: "女性の受け取り", left: "「うまい人だな」と思われる",   right: "「この人、違う」と感じられる" },
  { label: "年齢効果",       left: "若さ依存→40代で失効",         right: "深みが増す→40代が最強期" },
  { label: "持続性",         left: "場面ごとに対応が必要で消耗",   right: "存在そのものが変わるため継続" },
  { label: "関係の深さ",     left: "表面的な盛り上がりで終わる",   right: "本物の繋がりが自然に生まれる" },
  { label: "変化の速度",     left: "習得は速いが定着しない",       right: "時間はかかるが人格が変わる" },
];

export default function StructureVsTechnique() {
  return (
    <section className="section-py bg-[#0d0d0d]">
      <div className="container-lp">
        <div className="flex items-center gap-4 mb-16">
          <span className="label-en">06 — Structure vs Technique</span>
          <div className="h-px flex-1 bg-gold/20" />
        </div>

        <h2 className="font-noto text-2xl md:text-4xl font-light text-offwhite tracking-widest leading-tight mb-4">
          一度きりで終わる男と、<br />自然に関係が続く男の違い。
        </h2>
        <p className="font-cormorant italic text-muted text-xl tracking-wide mb-16">
          "Technique changes your moves. Structure changes your being."
        </p>

        {/* Table */}
        <div className="border border-gold/15 overflow-hidden">
          <div className="grid grid-cols-[1fr_1fr_1fr] border-b border-gold/15 bg-[#0a0a0a]">
            <div className="px-5 py-4">
              <p className="label-en">観点</p>
            </div>
            <div className="px-5 py-4 border-l border-gold/15">
              <p className="font-cormorant italic text-muted/50 text-xs tracking-widest">テクニック依存の男</p>
            </div>
            <div className="px-5 py-4 border-l border-gold/30 bg-gold/[0.04]">
              <p className="font-cormorant italic text-gold text-xs tracking-widest">在り方が変わった男</p>
            </div>
          </div>
          {rows.map((row, i) => (
            <div key={i} className={`grid grid-cols-[1fr_1fr_1fr] ${i < rows.length - 1 ? "border-b border-gold/[0.08]" : ""}`}>
              <div className="px-5 py-5 flex items-center">
                <p className="font-noto text-muted/50 text-xs tracking-widest">{row.label}</p>
              </div>
              <div className="px-5 py-5 border-l border-gold/[0.08] flex items-center">
                <p className="font-noto text-offwhite/30 text-sm leading-relaxed tracking-wider">{row.left}</p>
              </div>
              <div className="px-5 py-5 border-l border-gold/20 flex items-center bg-gold/[0.02]">
                <p className="font-noto text-offwhite text-sm leading-relaxed tracking-wider">{row.right}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="font-cormorant italic text-muted/60 text-center text-lg tracking-wide mt-12">
          "A man of depth doesn't need to chase. He attracts."
        </p>
      </div>
    </section>
  );
}
