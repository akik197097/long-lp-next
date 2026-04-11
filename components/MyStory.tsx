import Image from "next/image";

const events = [
  { year: "20代", label: "The Hunger",        text: "合コン・ナンパ・ノウハウ本——手当たり次第に試した。一時的な成功はあっても、本物の繋がりはいつも空虚だった。" },
  { year: "20代後半", label: "The Plateau",   text: "テクニックを磨くほど、自分が薄くなる感覚があった。女性の前で「役を演じている自分」しかいなかった。" },
  { year: "30代", label: "The Breaking Point", text: "8年間の結婚が終わった。妻の最後の言葉——「あなたは本当の自分を見せてくれなかった」。その夜、すべてを疑い始めた。" },
  { year: "再構築期", label: "The Reconstruction", text: "心理学・哲学・身体論——ジャンルを超えて学び直した。「モテ」は結果であり、変えるべきは技術ではなく構造だと気づいた。" },
  { year: "現在", label: "Now",               text: "40代以上の男性を対象に、構造的自己変革のコーチングを提供する。自分と同じ壁にいる男性に、その突破口を伝えることが使命だ。" },
];

export default function MyStory() {
  return (
    <section className="section-py container-lp">
      <div className="flex items-center gap-4 mb-16">
        <span className="label-en">04 — My Story</span>
        <div className="h-px flex-1 bg-gold/20" />
      </div>

      <h2 className="font-noto text-3xl md:text-4xl font-light text-offwhite tracking-widest leading-tight mb-4">
        私も20年間、同じ壁の前にいた。
      </h2>
      <p className="font-cormorant italic text-muted text-xl tracking-wide mb-6">
        "Twenty years of searching. One moment of clarity."
      </p>
      <p className="font-noto text-muted/60 text-sm tracking-wider mb-16">— コーチ AKITO</p>

      {/* story1 image */}
      <div className="relative w-full h-56 md:h-72 mb-16 overflow-hidden">
        <Image src="/story1.jpeg" alt="転換点" fill className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />
        <div className="absolute inset-0 border border-gold/20" />
        <div className="absolute bottom-5 left-6">
          <p className="label-en mb-1">The Breaking Point</p>
          <p className="font-noto text-offwhite text-sm tracking-widest">30代・離婚——すべてを疑い始めた夜</p>
        </div>
      </div>

      {/* Timeline */}
      <div className="space-y-0">
        {events.map((ev, i) => (
          <div key={ev.year} className="flex gap-8 py-8 border-b border-gold/10 group">
            {/* Left */}
            <div className="w-24 shrink-0 pt-1">
              <p className="font-cormorant italic text-gold text-xs tracking-widest mb-1">{ev.label}</p>
              <p className="font-noto text-offwhite/60 text-xs tracking-widest">{ev.year}</p>
            </div>
            {/* Dot + line */}
            <div className="flex flex-col items-center shrink-0">
              <div className="w-2 h-2 border border-gold/50 rotate-45 mt-1 group-hover:bg-gold/30 transition-colors" />
              {i < events.length - 1 && <div className="w-px flex-1 bg-gold/10 mt-2" />}
            </div>
            {/* Content */}
            <p className="font-noto text-offwhite/60 text-sm leading-loose tracking-wider group-hover:text-offwhite/80 transition-colors">
              {ev.text}
            </p>
          </div>
        ))}
      </div>

      {/* story2 image */}
      <div className="relative w-full h-72 md:h-96 mt-16 overflow-hidden">
        <Image src="/story2.jpeg" alt="現在のAKITO" fill className="object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/60 to-transparent" />
        <div className="absolute inset-0 border border-gold/20" />
        <div className="absolute bottom-8 left-6 max-w-xs">
          <p className="label-en mb-2">Now — AKITO</p>
          <p className="font-noto text-offwhite text-sm leading-relaxed tracking-wider">
            構造を知った男は、追いかけるのをやめる。
          </p>
        </div>
      </div>

      {/* twoshot: 実績写真 */}
      <div className="relative w-full h-56 md:h-72 mt-6 overflow-hidden border border-gold/20">
        <Image src="/twoshot.png" alt="実績写真" fill className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/70 to-transparent" />
        <div className="absolute bottom-4 left-6">
          <p className="label-en mb-1">Result</p>
          <p className="font-noto text-offwhite/80 text-xs tracking-wider">構造が変わると、関係性が変わる。（※モザイク処理済み）</p>
        </div>
      </div>

      {/* woman-grid: 実績グリッド */}
      <div className="relative w-full h-48 md:h-64 mt-6 overflow-hidden border border-gold/20">
        <Image src="/woman-grid.png" alt="実績一覧" fill className="object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 to-transparent" />
        <div className="absolute bottom-4 left-6">
          <p className="label-en mb-1">Testimonials</p>
          <p className="font-noto text-offwhite/70 text-xs tracking-wider">実際にプログラムを受けた方々（※モザイク処理済み）</p>
        </div>
      </div>
    </section>
  );
}
