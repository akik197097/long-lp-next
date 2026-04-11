import Image from "next/image";

const benefits = [
  {
    number: "特典 01",
    title: "5軸診断レポート",
    subtitle: "Personalized Axis Report",
    text: "CORE / PRESENCE / INSIGHT / DEPTH / EVOLUTIONの5軸についての個別診断レポートをPDFでお届けします。あなたの最優先課題が明確になります。",
  },
  {
    number: "特典 02",
    title: "AKITOの音声講義（60分）",
    subtitle: "60-min Audio Lecture",
    text: "「テクニック思考からの脱却——40代男性が本物の魅力を持つまでのロードマップ」を完全収録。通勤・移動中に聴けます。",
  },
  {
    number: "特典 03",
    title: "構造変革ワークブック",
    subtitle: "Reconstruction Workbook",
    text: "5軸それぞれの自己分析と実践ワークを収録した22ページのワークブック。毎日10分の取り組みで、確実に核が変わっていきます。",
  },
];

export default function Offer() {
  return (
    <section className="section-padding max-w-5xl mx-auto">
      <div className="flex items-center gap-6 mb-16">
        <div className="h-px flex-1 bg-gold/20" />
        <p className="font-cormorant italic text-gold tracking-widest2 text-sm">X. Offer</p>
        <div className="h-px flex-1 bg-gold/20" />
      </div>

      {/* Urgency banner */}
      <div className="border border-gold/40 bg-gold/5 text-center py-4 px-6 mb-16">
        <p className="font-cormorant italic text-gold tracking-widest text-sm">
          ⏳ Limited — 10日間限定・先着20名様
        </p>
      </div>

      {/* Image + headline: 2-column */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div className="relative h-64 md:h-80 overflow-hidden">
          <Image
            src="/offer.jpeg"
            alt="無料特典"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent" />
          <div className="absolute inset-0 border border-gold/20 pointer-events-none" />
          {/* Gold badge overlay */}
          <div className="absolute top-4 right-4 border border-gold bg-bg/80 px-4 py-2">
            <p className="font-cormorant italic text-gold text-xs tracking-widest">¥ 0</p>
          </div>
        </div>
        <div>
          <h2 className="font-noto text-3xl md:text-4xl font-light text-offwhite tracking-widest mb-4">
            LINE登録で、3つの特典を<br />完全無料でお届けする。
          </h2>
          <p className="font-cormorant italic text-muted text-xl tracking-wide mb-6">
            "Three gifts to begin your reconstruction."
          </p>
          <p className="font-noto text-muted text-sm leading-loose tracking-wider">
            変わるための最初の一歩をゼロコストで。
            診断・音声・ワークブックの3点セットで、あなたの現在地と次の一手が明確になる。
          </p>
        </div>
      </div>

      {/* Benefits grid */}
      <div className="grid md:grid-cols-3 gap-px bg-gold/10">
        {benefits.map((item) => (
          <div key={item.number} className="bg-surface p-8 md:p-10">
            <p className="font-cormorant italic text-gold text-xs tracking-widest2 mb-4">{item.number}</p>
            <p className="font-cormorant italic text-muted text-xs tracking-widest mb-2">{item.subtitle}</p>
            <h3 className="font-noto text-offwhite text-base tracking-widest mb-4 leading-relaxed">{item.title}</h3>
            <div className="h-px w-8 bg-gold/40 mb-4" />
            <p className="font-noto text-muted text-sm leading-relaxed tracking-wider">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 border border-gold/20 bg-surface p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-noto text-offwhite text-sm tracking-widest mb-1">通常価格</p>
            <p className="font-cormorant italic text-muted text-2xl line-through tracking-wide">¥19,800</p>
          </div>
          <div className="text-center">
            <p className="font-cormorant italic text-gold text-xs tracking-widest mb-1">10日間限定・完全無料</p>
            <p className="font-noto text-gold text-4xl md:text-5xl font-light tracking-widest">¥ 0</p>
          </div>
          <div className="text-right">
            <p className="font-noto text-muted text-xs tracking-wider">LINE登録するだけで<br />即時受け取れます</p>
          </div>
        </div>
      </div>
    </section>
  );
}
