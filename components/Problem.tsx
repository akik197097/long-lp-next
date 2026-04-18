export default function Problem() {
  return (
    <section id="problem" className="section-py container-lp">
      {/* Label */}
      <div className="flex items-center gap-4 mb-16">
        <span className="label-en">02 — Problem</span>
        <div className="h-px flex-1 bg-gold/20" />
      </div>

      <h2 className="font-noto text-3xl md:text-4xl font-light text-offwhite tracking-widest leading-tight mb-4">
        なぜテクニックだけでは<br />限界があるのか
      </h2>
      <p className="font-cormorant italic text-muted text-xl tracking-wide mb-16">
        "Technique is necessary. But it&apos;s never enough."
      </p>

      <div className="mb-16">
        <p className="font-noto text-offwhite/70 text-base leading-loose tracking-wider">
          会話術を覚えた。マッチングアプリも試した。それでも女性との関係が続かない。
        </p>
        <p className="font-noto text-offwhite/70 text-base leading-loose tracking-wider mt-6">
          テクニックは必要だ。しかし、それだけでは追われる男にはなれない。
        </p>
        <p className="font-noto text-offwhite/70 text-base leading-loose tracking-wider mt-6">
          追う男から追われる男への変身には、テクニックの習得と、その上にある在り方のバランスの両方が必要だ。
        </p>
      </div>
    </section>
  );
}
