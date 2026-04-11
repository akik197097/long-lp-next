import Image from "next/image";

const beforeAfter = [
  {
    before: "女性の反応に一喜一憂して消耗する",
    after: "自分の在り方に集中し、揺るがない安定感がある",
  },
  {
    before: "「モテるために」何かを演じ続ける",
    after: "素の自分でいるだけで、自然と惹かれる人が現れる",
  },
  {
    before: "年齢を言い訳にするか、若さを演じようとする",
    after: "40代の深みと経験を、最大の武器として使いこなす",
  },
  {
    before: "恋愛がコントロールできない「運」に見える",
    after: "自分の価値が高まるほど、関係の質が変わると実感する",
  },
];

export default function Philosophy() {
  return (
    <section className="section-padding max-w-5xl mx-auto">
      <div className="flex items-center gap-6 mb-16">
        <div className="h-px flex-1 bg-gold/20" />
        <p className="font-cormorant italic text-gold tracking-widest2 text-sm">VII. Philosophy</p>
        <div className="h-px flex-1 bg-gold/20" />
      </div>

      {/* Image + quote: 2-column */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        {/* Image */}
        <div className="relative h-80 md:h-[480px] overflow-hidden">
          <Image
            src="/philosophy.jpeg"
            alt="Philosophy"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-bg/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent" />
          <div className="absolute inset-0 border border-gold/20 pointer-events-none" />
        </div>

        {/* Quote */}
        <div>
          <div className="relative mb-10">
            <div className="text-gold/20 font-cormorant text-8xl leading-none mb-2">"</div>
            <blockquote className="font-cormorant italic text-gold text-2xl md:text-3xl tracking-wide leading-relaxed">
              Attraction is not the goal.<br />It is the natural result of becoming.
            </blockquote>
          </div>
          <p className="font-noto text-muted text-base tracking-wider leading-relaxed">
            モテは目標ではなく、<span className="text-offwhite">なるべき自分になった結果</span>として訪れる。
          </p>
          <div className="h-px bg-gold/20 my-8" />
          <p className="font-noto text-muted text-sm leading-loose tracking-wider">
            テクニックを追い続けた男性が最終的に辿り着くのは、「自分が何者か」という問いだ。
            その問いに正面から向き合い、構造から変わった男性だけが、本物の関係性を手にする。
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mb-16">
        <div className="h-px w-16 bg-gold/30" />
        <div className="w-1.5 h-1.5 rotate-45 bg-gold/50" />
        <div className="h-px w-16 bg-gold/30" />
      </div>

      {/* BEFORE → AFTER */}
      <h3 className="font-noto text-xl text-offwhite text-center tracking-widest mb-10">
        Before → After
      </h3>
      <div className="grid gap-px bg-gold/10">
        {beforeAfter.map((item, i) => (
          <div key={i} className="grid grid-cols-2 gap-px bg-gold/10">
            <div className="bg-surface p-6 flex items-start gap-3">
              <span className="text-muted/40 text-xs font-cormorant italic mt-1 shrink-0">Before</span>
              <p className="font-noto text-offwhite/40 text-sm leading-relaxed tracking-wider">{item.before}</p>
            </div>
            <div className="bg-surface p-6 flex items-start gap-3 border-l border-gold/20">
              <span className="text-gold text-xs font-cormorant italic mt-1 shrink-0">After</span>
              <p className="font-noto text-offwhite text-sm leading-relaxed tracking-wider">{item.after}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
