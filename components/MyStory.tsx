import Image from "next/image";

const timeline = [
  {
    period: "20代前半",
    label: "The Hunger",
    text: "合コン・ナンパ・ノウハウ本——手当たり次第に試した。一時的な成功もあったが、本物の繋がりはいつも空虚だった。",
  },
  {
    period: "20代後半",
    label: "The Plateau",
    text: "テクニックを磨けば磨くほど、自分が薄くなっていくような感覚があった。女性の前で「役を演じている自分」しかいなかった。",
  },
  {
    period: "30代・離婚",
    label: "The Breaking Point",
    text: "8年間の結婚生活が終わった。妻の最後の言葉は「あなたは本当の自分を見せてくれなかった」だった。その夜、すべてを疑い始めた。",
  },
  {
    period: "再構築期",
    label: "The Reconstruction",
    text: "心理学・哲学・身体知。ジャンルを超えて学び直した。気づいたのは「モテ」は結果であり、変えるべきは技術ではなく構造だということだった。",
  },
  {
    period: "現在・AKITO",
    label: "Now",
    text: "40代以上の男性を対象に、構造的自己変革のコーチングを提供している。自分と同じ壁にいる男性に、その突破口を伝えることが今の使命だ。",
  },
];

export default function MyStory() {
  return (
    <section className="section-padding max-w-5xl mx-auto">
      <div className="flex items-center gap-6 mb-16">
        <div className="h-px flex-1 bg-gold/20" />
        <p className="font-cormorant italic text-gold tracking-widest2 text-sm">IV. My Story</p>
        <div className="h-px flex-1 bg-gold/20" />
      </div>

      <h2 className="font-noto text-3xl md:text-4xl font-light text-offwhite text-center tracking-widest mb-4">
        私も20年間、同じ壁の前にいた。
      </h2>
      <p className="font-cormorant italic text-muted text-xl text-center tracking-wide mb-6">
        "Twenty years of searching. One moment of clarity."
      </p>
      <p className="font-noto text-muted text-center text-sm tracking-wider mb-16">— コーチ AKITO</p>

      {/* story1: 転換点イメージ */}
      <div className="relative w-full h-64 md:h-80 mb-16 overflow-hidden">
        <Image
          src="/story1.jpeg"
          alt="転換点——テラス席"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
        <div className="absolute bottom-6 left-6 md:left-10">
          <p className="font-cormorant italic text-gold text-xs tracking-widest mb-1">The Breaking Point</p>
          <p className="font-noto text-offwhite text-sm tracking-widest">30代・離婚——すべてを疑い始めた夜</p>
        </div>
        {/* Gold border */}
        <div className="absolute inset-0 border border-gold/20 pointer-events-none" />
      </div>

      {/* Vertical timeline */}
      <div className="relative">
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gold/20 -translate-x-1/2" />
        <div className="space-y-16">
          {timeline.map((item, idx) => (
            <div key={item.period} className={`relative flex gap-8 md:gap-0 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
              <div className="absolute left-6 md:left-1/2 top-1 w-3 h-3 border border-gold/60 rotate-45 bg-bg -translate-x-1/2 z-10" />
              <div className={`pl-14 md:pl-0 md:w-1/2 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                <p className="font-cormorant italic text-gold text-xs tracking-widest mb-1">{item.label}</p>
                <p className="font-noto text-offwhite font-medium tracking-widest mb-3">{item.period}</p>
                <p className="font-noto text-muted text-sm leading-relaxed tracking-wider">{item.text}</p>
              </div>
              <div className="hidden md:block md:w-1/2" />
            </div>
          ))}
        </div>
      </div>

      {/* story2: 現在の自分 */}
      <div className="relative w-full h-72 md:h-96 mt-20 overflow-hidden">
        <Image
          src="/story2.jpeg"
          alt="現在のAKITO"
          fill
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/60 via-transparent to-transparent" />
        <div className="absolute bottom-8 left-6 md:left-10 max-w-sm">
          <p className="font-cormorant italic text-gold text-xs tracking-widest mb-2">Now</p>
          <p className="font-noto text-offwhite text-base tracking-widest mb-3">コーチ AKITO</p>
          <p className="font-noto text-muted text-sm leading-relaxed tracking-wider">
            構造を知った男は、追いかけるのをやめる。
          </p>
        </div>
        <div className="absolute inset-0 border border-gold/20 pointer-events-none" />
      </div>
    </section>
  );
}
