const firstPains = [
  "女性が喜ぶ誘い方は何なのか",
  "目に止まるプロフィールはどうやって書くのか",
  "デートではどういう風に会話を進めるべきか",
  "LINEをどういう風に返していくべきなのか",
];

const secondPains = [
  "会話は盛り上がるが次に続かない",
  "\u201cいい人\u201dで終わり、恋愛対象にならない",
  "テクニックを使うほど不自然になる",
  "一度は会えても、関係が深まらない",
];

export default function Problem() {
  return (
    <section id="problem" className="section-py container-lp">
      {/* Label */}
      <div className="flex items-center gap-4 mb-16">
        <span className="label-en">02 — Problem</span>
        <div className="h-px flex-1 bg-gold/20" />
      </div>

      <h2 className="font-noto text-3xl md:text-4xl font-light text-offwhite tracking-widest leading-tight mb-4">
        あなたの努力は、<br />間違った方向に向いていた。
      </h2>
      <p className="font-cormorant italic text-muted text-xl tracking-wide mb-16">
        "You&apos;ve been solving the wrong problem."
      </p>

      {/* First half */}
      <div className="mb-16">
        <p className="font-noto text-offwhite/70 text-base leading-relaxed tracking-wider mb-6">
          若いうちは人並みに、<br />ただ何となく付き合うことはできた。
        </p>
        <p className="font-noto text-offwhite/70 text-base leading-relaxed tracking-wider mb-10">
          でも、モテたことなど一度もない。
        </p>
        <p className="font-noto text-offwhite/60 text-sm leading-relaxed tracking-wider mb-8">
          実は、自分では意識していないが、<br />
          本当は以下のことがわからない、もしくは間違った常識に従っている
          男性が9割以上なんです。
        </p>

        <div className="space-y-0 mb-10">
          {firstPains.map((text, i) => (
            <div key={i} className="flex items-start gap-6 py-5 border-b border-gold/10 group hover:border-gold/30 transition-colors">
              <span className="font-cormorant italic text-gold/40 text-2xl shrink-0 group-hover:text-gold/60 transition-colors">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-noto text-offwhite/70 text-base leading-relaxed tracking-wider group-hover:text-offwhite/90 transition-colors">
                {text}
              </p>
            </div>
          ))}
        </div>

        <p className="font-noto text-offwhite/60 text-sm leading-relaxed tracking-wider">
          これは当然です。<br />
          誰も正しいことを教えてくれなかったからです。
        </p>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-gold/10 mb-16" />

      {/* Second half */}
      <div>
        <p className="font-noto text-offwhite/70 text-base leading-relaxed tracking-wider mb-8">
          しかし、テクニックを学んでも<br />こんな壁に当たる男性もいます。
        </p>

        <div className="space-y-0 mb-10">
          {secondPains.map((text, i) => (
            <div key={i} className="flex items-start gap-6 py-5 border-b border-gold/10 group hover:border-gold/30 transition-colors">
              <span className="font-cormorant italic text-gold/40 text-2xl shrink-0 group-hover:text-gold/60 transition-colors">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-noto text-offwhite/70 text-base leading-relaxed tracking-wider group-hover:text-offwhite/90 transition-colors">
                {text}
              </p>
            </div>
          ))}
        </div>

        <p className="font-noto text-offwhite/60 text-sm leading-relaxed tracking-wider">
          テクニックを知らないことも問題。<br />
          でもテクニックだけでは、本当の意味で選ばれ続ける男にはなれない。
        </p>
      </div>
    </section>
  );
}
