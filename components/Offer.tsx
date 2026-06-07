const benefits = [
  {
    num: "01",
    title: "MBTI性格タイプ別・恋愛アプローチガイド",
    sub: "あなたの性格に合った最適なアプローチ法",
  },
  {
    num: "02",
    title: "40代からの戦略的出会い創出マニュアル",
    sub: "出会いの場所・作り方・選び方",
  },
  {
    num: "03",
    title: "大人の魅力を引き出す会話フレームワーク集",
    sub: "テクニックを自然に使いこなす実践集",
  },
  {
    num: "04",
    title: "恋愛進捗管理システム",
    sub: "自分の成長を可視化する管理ツール",
  },
];

const tokutens = [
  {
    num: "05",
    title: "男の在り方のバランス診断シート（50問）",
    sub: "自分の現在地を正確に測るカルテ",
  },
  {
    num: "06",
    title: "在り方を整える7日間ワーク",
    sub: "「分かる」から「体感」へ",
  },
  {
    num: "07",
    title: "追われる男の習慣リスト",
    sub: "日常から在り方のバランスを作り直す実践録",
  },
];

export default function Offer() {
  return (
    <section className="section-py container-lp">
      <div className="flex items-center gap-4 mb-16">
        <span className="label-en">12 — Offer</span>
        <div className="h-px flex-1 bg-gold/20" />
      </div>

      {/* Banner */}
      <div className="border border-gold/40 bg-gold/[0.06] text-center py-4 px-6 mb-16">
        <p className="font-noto text-gold text-sm tracking-widest">
          10日間限定・参加費 無料<span className="text-gold/50 ml-3 text-xs">（通常9,800円）</span>
        </p>
      </div>

      {/* Headline */}
      <h2 className="font-noto text-3xl md:text-4xl font-light text-offwhite tracking-widest leading-tight mb-16">
        「立っている位置」を変える決断。
      </h2>

      {/* Benefits 01–04 */}
      <div className="space-y-0 mb-16">
        {benefits.map((b, i) => (
          <div
            key={b.num}
            className={`flex items-start gap-8 py-7 ${i < benefits.length - 1 ? "border-b border-gold/10" : ""} group`}
          >
            <span className="font-cormorant italic text-gold text-4xl opacity-30 shrink-0 w-12 leading-none group-hover:opacity-60 transition-opacity">
              {b.num}
            </span>
            <div>
              <p className="font-noto text-offwhite text-base tracking-widest mb-1 group-hover:text-offwhite/90 transition-colors">
                {b.title}
              </p>
              <p className="font-noto text-muted/55 text-sm tracking-wider">
                — {b.sub}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="border-b border-gold/10" />

      {/* Tokuten 05–07 */}
      <div className="space-y-0 mb-12">
        {tokutens.map((t, i) => (
          <div
            key={t.num}
            className={`flex items-start gap-8 py-7 ${i < tokutens.length - 1 ? "border-b border-gold/10" : ""} group`}
          >
            <span className="font-cormorant italic text-gold text-4xl opacity-30 shrink-0 w-12 leading-none group-hover:opacity-60 transition-opacity">
              {t.num}
            </span>
            <div>
              <p className="font-noto text-offwhite text-base tracking-widest mb-1 group-hover:text-offwhite/90 transition-colors">
                {t.title}
              </p>
              <p className="font-noto text-muted/55 text-sm tracking-wider">
                — {t.sub}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Price */}
      <div className="mt-12 border border-gold/20 bg-[#0d0d0d] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-noto text-muted/60 text-xs tracking-widest mb-1">通常価格</p>
          <p className="font-cormorant italic text-muted/40 text-2xl line-through tracking-wide">¥9,800</p>
        </div>
        <div className="text-center">
          <p className="label-en mb-1">10日間限定・参加費無料</p>
          <p className="font-noto text-gold text-5xl font-light tracking-widest">¥ 0</p>
        </div>
        <div className="text-right">
          <p className="font-noto text-muted/50 text-xs tracking-wider">LINE登録するだけで<br />即時受け取れます</p>
        </div>
      </div>
    </section>
  );
}
