import Image from "next/image";

const beforeAfter = [
  { before: "女性の反応に一喜一憂して消耗する",             after: "自分の在り方に集中し、揺るがない安定感がある" },
  { before: "「モテるために」何かを演じ続ける",             after: "素の自分でいるだけで、自然と惹かれる人が現れる" },
  { before: "年齢を言い訳にするか、若さを演じようとする",   after: "40代の深みと経験を、最大の武器として使いこなす" },
  { before: "恋愛がコントロールできない「運」に見える",     after: "自分の価値が高まるほど、関係の質が変わると実感する" },
];

export default function Philosophy() {
  return (
    <section className="section-py bg-[#0d0d0d]">
      <div className="container-lp">
        <div className="flex items-center gap-4 mb-16">
          <span className="label-en">09 — Philosophy</span>
          <div className="h-px flex-1 bg-gold/20" />
        </div>

        {/* Quote + image */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1 flex justify-center">
            <div className="border border-gold/20 mx-auto" style={{ maxWidth: "200px", width: "100%", overflow: "visible" }}>
              <Image
                src="/philosophy.jpeg"
                alt="Philosophy"
                width={200}
                height={300}
                className="block mx-auto"
                style={{ objectFit: "contain", objectPosition: "top center", width: "100%", maxWidth: "200px", height: "auto" }}
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="font-cormorant text-gold/15 text-8xl leading-none mb-2">"</div>
            <blockquote className="font-cormorant italic text-gold text-2xl md:text-3xl tracking-wide leading-relaxed mb-8">
              Attraction is not the goal.<br />It is the natural result<br />of becoming.
            </blockquote>
            <p className="font-noto text-offwhite/60 text-base leading-loose tracking-wider">
              モテは目標ではなく、<span className="text-offwhite">なるべき自分になった結果</span>として訪れる。
              テクニックを追い続けた男性が最終的に辿り着くのは、「自分が何者か」という問いだ。
            </p>
          </div>
        </div>

        {/* matchapp + line-shot: 実績スクリーンショット */}
        <div className="grid md:grid-cols-2 gap-4 mb-16">
          <div className="relative aspect-[2/3] border border-gold/20 bg-[#0d0d0d]">
            <Image src="/matchapp.png" alt="マッチングアプリ実績" fill className="object-contain" />
            <div className="absolute bottom-4 left-4">
              <p className="font-noto text-offwhite/70 text-xs tracking-wider">※モザイク処理済み</p>
            </div>
          </div>
          <div className="relative aspect-[2/3] border border-gold/20 bg-[#0d0d0d]">
            <Image src="/line-shot.png" alt="LINEでのやり取り実績" fill className="object-contain" />
            <div className="absolute bottom-4 left-4">
              <p className="font-noto text-offwhite/70 text-xs tracking-wider">※モザイク処理済み</p>
            </div>
          </div>
        </div>

        {/* Visual BEFORE / AFTER cards */}
        <div className="space-y-4 mb-16">
          {/* BEFORE */}
          <div className="border border-gold/20 bg-[#0a0a0a] p-6">
            <p className="font-cormorant italic text-muted/50 text-xs tracking-widest mb-4">Before</p>
            <svg
              viewBox="0 0 320 90"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full max-w-xs mx-auto block"
            >
              {/* Dashed circle: 自分 */}
              <circle cx="80" cy="45" r="30" fill="#0a0a0a" stroke="#C9A84C" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="5 3" />
              <text x="80" y="45" textAnchor="middle" dominantBaseline="middle" fill="#f5f0e8" fontSize="12" fontFamily="sans-serif" letterSpacing="2" fillOpacity="0.7">自分</text>

              {/* Arrow */}
              <line x1="114" y1="45" x2="204" y2="45" stroke="#C9A84C" strokeWidth="1.2" strokeOpacity="0.5" />
              <polygon points="200,39 216,45 200,51" fill="#C9A84C" fillOpacity="0.5" />

              {/* Solid circle: 女性 */}
              <circle cx="240" cy="45" r="30" fill="#0a0a0a" stroke="#f5f0e8" strokeWidth="1" strokeOpacity="0.4" />
              <text x="240" y="45" textAnchor="middle" dominantBaseline="middle" fill="#f5f0e8" fontSize="12" fontFamily="sans-serif" letterSpacing="2" fillOpacity="0.7">女性</text>
            </svg>
            <p className="font-noto text-center text-offwhite/40 text-xs tracking-wider mt-4">女性だけを追い求める</p>
          </div>

          {/* AFTER */}
          <div className="border border-gold/40 border-t-2 bg-[#0a0a0a] p-6">
            <p className="font-cormorant italic text-gold text-xs tracking-widest mb-4">After</p>
            <svg
              viewBox="0 0 320 200"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full max-w-xs mx-auto block"
            >
              {/* Lines: center → nodes */}
              <line x1="160" y1="100" x2="160" y2="52" stroke="#C9A84C" strokeWidth="1" strokeOpacity="0.4" />
              <line x1="160" y1="100" x2="213" y2="100" stroke="#C9A84C" strokeWidth="1" strokeOpacity="0.4" />
              <line x1="160" y1="100" x2="160" y2="148" stroke="#C9A84C" strokeWidth="1" strokeOpacity="0.4" />
              <line x1="160" y1="100" x2="107" y2="100" stroke="#C9A84C" strokeWidth="1" strokeOpacity="0.4" />

              {/* Center: 自分 */}
              <circle cx="160" cy="100" r="36" fill="#0a0a0a" stroke="#C9A84C" strokeWidth="1.5" />
              <text x="160" y="100" textAnchor="middle" dominantBaseline="middle" fill="#f5f0e8" fontSize="13" fontFamily="sans-serif" letterSpacing="2">自分</text>

              {/* 友人 — top */}
              <circle cx="160" cy="30" r="20" fill="#0a0a0a" stroke="#C9A84C" strokeWidth="1" strokeOpacity="0.6" />
              <text x="160" y="30" textAnchor="middle" dominantBaseline="middle" fill="#C9A84C" fontSize="10" fontFamily="sans-serif" letterSpacing="1">友人</text>

              {/* 家族 — right */}
              <circle cx="236" cy="100" r="20" fill="#0a0a0a" stroke="#C9A84C" strokeWidth="1" strokeOpacity="0.6" />
              <text x="236" y="100" textAnchor="middle" dominantBaseline="middle" fill="#C9A84C" fontSize="10" fontFamily="sans-serif" letterSpacing="1">家族</text>

              {/* 異性 — bottom */}
              <circle cx="160" cy="170" r="20" fill="#0a0a0a" stroke="#C9A84C" strokeWidth="1" strokeOpacity="0.6" />
              <text x="160" y="170" textAnchor="middle" dominantBaseline="middle" fill="#C9A84C" fontSize="10" fontFamily="sans-serif" letterSpacing="1">異性</text>

              {/* 仕事 — left */}
              <circle cx="84" cy="100" r="20" fill="#0a0a0a" stroke="#C9A84C" strokeWidth="1" strokeOpacity="0.6" />
              <text x="84" y="100" textAnchor="middle" dominantBaseline="middle" fill="#C9A84C" fontSize="10" fontFamily="sans-serif" letterSpacing="1">仕事</text>
            </svg>
            <p className="font-noto text-center text-offwhite/70 text-xs tracking-wider mt-4">自分を中心に全てが循環する</p>
          </div>
        </div>

        {/* Before / After */}
        <p className="label-en text-center tracking-widest mb-8">Before → After</p>
        <div className="border border-gold/15 overflow-hidden">
          <div className="grid grid-cols-2 border-b border-gold/15">
            <div className="px-6 py-3 text-center">
              <p className="font-cormorant italic text-muted/50 text-xs tracking-widest">Before</p>
            </div>
            <div className="px-6 py-3 text-center border-l border-gold/15 bg-gold/[0.04]">
              <p className="font-cormorant italic text-gold text-xs tracking-widest">After</p>
            </div>
          </div>
          {beforeAfter.map((item, i) => (
            <div key={i} className={`grid grid-cols-2 ${i < beforeAfter.length - 1 ? "border-b border-gold/[0.08]" : ""}`}>
              <div className="px-6 py-5 flex items-center">
                <p className="font-noto text-offwhite/30 text-sm leading-relaxed tracking-wider">{item.before}</p>
              </div>
              <div className="px-6 py-5 border-l border-gold/15 flex items-center bg-gold/[0.02]">
                <p className="font-noto text-offwhite text-sm leading-relaxed tracking-wider">{item.after}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
