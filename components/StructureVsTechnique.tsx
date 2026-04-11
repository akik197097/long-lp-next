const rows = [
  { label: "アプローチ",     technique: "「何を言うか」を磨く",              structure: "「どんな人間か」を変える" },
  { label: "女性の反応",     technique: "反応を読んで戦略を変える",            structure: "自分軸があるから反応に左右されない" },
  { label: "年齢との関係",   technique: "若さが武器→40代で通用しなくなる",    structure: "深みが武器→年齢とともに強くなる" },
  { label: "関係の質",       technique: "表面的な盛り上がりが続かない",        structure: "本物の繋がりが自然に生まれる" },
  { label: "効果の持続性",   technique: "場面ごとに対応が必要で消耗する",      structure: "日常の存在感そのものが変わる" },
  { label: "変化のスピード", technique: "ノウハウ習得は速いが定着しない",      structure: "時間はかかるが人格レベルで変わる" },
];

export default function StructureVsTechnique() {
  return (
    <section className="section-padding max-w-5xl mx-auto">
      <div className="flex items-center gap-6 mb-16">
        <div className="h-px flex-1 bg-gold/20" />
        <p className="font-cormorant italic text-gold tracking-widest2 text-sm">V. Structure vs Technique</p>
        <div className="h-px flex-1 bg-gold/20" />
      </div>

      <h2 className="font-noto text-3xl md:text-4xl font-light text-offwhite text-center tracking-widest mb-4">
        テクニック習得と、<br />構造的自己変革の違い。
      </h2>
      <p className="font-cormorant italic text-muted text-xl text-center tracking-wide mb-20">
        "Technique changes your moves. Structure changes your being."
      </p>

      {/* Header */}
      <div className="grid grid-cols-3 gap-px bg-gold/10 mb-px">
        <div className="bg-bg p-4 md:p-6 flex items-center justify-center">
          <p className="font-cormorant italic text-muted text-sm tracking-widest">観点</p>
        </div>
        <div className="bg-surface p-4 md:p-6 text-center">
          <p className="font-cormorant italic text-muted text-sm tracking-widest">Technique</p>
          <p className="font-noto text-muted text-xs mt-1">テクニック習得</p>
        </div>
        <div className="bg-surface p-4 md:p-6 text-center border-t-2 border-gold">
          <p className="font-cormorant italic text-gold text-sm tracking-widest">Structure</p>
          <p className="font-noto text-gold/70 text-xs mt-1">構造的自己変革</p>
        </div>
      </div>

      <div className="grid gap-px bg-gold/10">
        {rows.map((row) => (
          <div key={row.label} className="grid grid-cols-3 gap-px bg-gold/10">
            <div className="bg-bg p-4 md:p-6 flex items-center">
              <p className="font-noto text-muted text-xs md:text-sm tracking-widest">{row.label}</p>
            </div>
            <div className="bg-surface p-4 md:p-6 flex items-center">
              <p className="font-noto text-offwhite/40 text-xs md:text-sm leading-relaxed tracking-wider">{row.technique}</p>
            </div>
            <div className="bg-surface p-4 md:p-6 flex items-center">
              <p className="font-noto text-offwhite text-xs md:text-sm leading-relaxed tracking-wider">{row.structure}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="font-cormorant italic text-muted text-lg text-center mt-12 tracking-wide">
        "A man of depth doesn't need to chase. He attracts."
      </p>
    </section>
  );
}
