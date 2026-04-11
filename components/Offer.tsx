import Image from "next/image";

const benefits = [
  { num: "01", title: "5軸診断レポート",     en: "Personalized Axis Report", text: "CORE / PRESENCE / INSIGHT / DEPTH / EVOLUTIONの5軸についての個別診断レポートをPDFでお届けします。最優先課題が明確になります。" },
  { num: "02", title: "AKITOの音声講義（60分）", en: "60-min Audio Lecture",  text: "「テクニック思考からの脱却——40代男性が本物の魅力を持つまでのロードマップ」を完全収録。通勤中に聴けます。" },
  { num: "03", title: "構造変革ワークブック", en: "Reconstruction Workbook",  text: "5軸それぞれの自己分析と実践ワークを収録した22ページ。毎日10分の取り組みで、確実に核が変わっていきます。" },
];

export default function Offer() {
  return (
    <section className="section-py container-lp">
      <div className="flex items-center gap-4 mb-16">
        <span className="label-en">10 — Offer</span>
        <div className="h-px flex-1 bg-gold/20" />
      </div>

      {/* Urgency */}
      <div className="border border-gold/30 bg-gold/5 text-center py-3 px-6 mb-16">
        <p className="label-en tracking-[0.3em]">⏳ Limited — 10日間限定・先着20名様</p>
      </div>

      {/* Image + headline */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div className="relative h-56 md:h-72 overflow-hidden">
          <Image src="/offer.jpeg" alt="特典" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent" />
          <div className="absolute inset-0 border border-gold/20" />
          <div className="absolute top-4 right-4 bg-[#0a0a0a]/80 border border-gold/40 px-4 py-2">
            <p className="font-cormorant italic text-gold text-sm tracking-widest">¥ 0</p>
          </div>
        </div>
        <div>
          <h2 className="font-noto text-3xl md:text-4xl font-light text-offwhite tracking-widest leading-tight mb-4">
            LINE登録で、3つの特典を<br />完全無料でお届けする。
          </h2>
          <p className="font-cormorant italic text-muted text-xl tracking-wide mb-6">
            "Three gifts to begin your reconstruction."
          </p>
          <p className="font-noto text-muted/60 text-sm leading-loose tracking-wider">
            変わるための最初の一歩をゼロコストで。診断・音声・ワークブックの3点セットで、あなたの現在地と次の一手が明確になる。
          </p>
        </div>
      </div>

      {/* Benefits */}
      <div className="space-y-0">
        {benefits.map((b, i) => (
          <div key={b.num} className={`flex gap-8 py-8 ${i < benefits.length - 1 ? "border-b border-gold/10" : ""} group`}>
            <span className="font-cormorant italic text-gold text-4xl opacity-30 shrink-0 w-12 group-hover:opacity-60 transition-opacity">{b.num}</span>
            <div>
              <p className="label-en mb-1">{b.en}</p>
              <p className="font-noto text-offwhite text-base tracking-widest mb-3">{b.title}</p>
              <p className="font-noto text-muted/60 text-sm leading-relaxed tracking-wider">{b.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Price */}
      <div className="mt-12 border border-gold/20 bg-[#0d0d0d] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-noto text-muted/60 text-xs tracking-widest mb-1">通常価格</p>
          <p className="font-cormorant italic text-muted/40 text-2xl line-through tracking-wide">¥19,800</p>
        </div>
        <div className="text-center">
          <p className="label-en mb-1">10日間限定・完全無料</p>
          <p className="font-noto text-gold text-5xl font-light tracking-widest">¥ 0</p>
        </div>
        <div className="text-right">
          <p className="font-noto text-muted/50 text-xs tracking-wider">LINE登録するだけで<br />即時受け取れます</p>
        </div>
      </div>
    </section>
  );
}
