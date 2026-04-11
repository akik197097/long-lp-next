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
          <span className="label-en">07 — Philosophy</span>
          <div className="h-px flex-1 bg-gold/20" />
        </div>

        {/* Quote + image */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-72 md:h-96 overflow-hidden order-2 md:order-1">
            <Image src="/philosophy.jpeg" alt="Philosophy" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0d0d0d]/40" />
            <div className="absolute inset-0 border border-gold/20" />
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

        {/* Twoshot: 実績写真 */}
        <div className="relative w-full h-56 md:h-72 mb-16 overflow-hidden border border-gold/20">
          <Image src="/twoshot.png" alt="実績写真" fill className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d]/40 to-transparent" />
          <div className="absolute bottom-5 left-6">
            <p className="label-en mb-1">Result</p>
            <p className="font-noto text-offwhite/80 text-xs tracking-wider">構造が変わると、関係性が変わる。（※モザイク処理済み）</p>
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
