export default function Insight() {
  return (
    <section className="section-py bg-[#0d0d0d]">
      <div className="container-lp">
        <div className="flex items-center gap-4 mb-16">
          <span className="label-en">03 — Insight</span>
          <div className="h-px flex-1 bg-gold/20" />
        </div>

        <h2 className="font-noto text-3xl md:text-4xl font-light text-offwhite tracking-widest leading-tight mb-4">
          努力の方向が、<br /><span className="text-gradient-gold">90度ズレていた。</span>
        </h2>
        <p className="font-cormorant italic text-muted text-xl tracking-wide mb-16">
          "The effort was real. The direction was wrong."
        </p>

        {/* Visual: two columns showing wrong vs right direction */}
        <div className="grid md:grid-cols-2 gap-px bg-gold/10 mb-16">
          <div className="bg-[#0d0d0d] p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-muted/30" />
              <span className="font-cormorant italic text-muted/60 text-xs tracking-widest">多くの男性のアプローチ</span>
            </div>
            {/* Horizontal arrow */}
            <div className="flex items-center gap-3 mb-6">
              <div className="font-noto text-muted/40 text-sm tracking-widest">テクニック</div>
              <div className="flex-1 h-px bg-muted/20 relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[4px] border-b-[4px] border-l-[6px] border-t-transparent border-b-transparent border-l-muted/30" />
              </div>
              <div className="font-noto text-muted/40 text-sm tracking-widest">さらにテクニック</div>
            </div>
            <p className="font-noto text-muted/60 text-sm leading-loose tracking-wider">
              「何を言うか」「どう見せるか」を水平方向に積み上げ続ける。<br />
              しかしどれだけ積み上げても、根本は変わらない。
            </p>
          </div>
          <div className="bg-[#0a0a0a] p-8 md:p-10 border-t-2 border-gold/60">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-gold/40" />
              <span className="label-en">構造的変革のアプローチ</span>
            </div>
            {/* Vertical arrow */}
            <div className="flex flex-col items-start gap-3 mb-6">
              <div className="font-noto text-gold text-sm tracking-widest">構造が変わる</div>
              <div className="w-px h-10 bg-gold/50 ml-6 relative">
                <div className="absolute -top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-b-[6px] border-l-transparent border-r-transparent border-b-gold/60" />
              </div>
              <div className="font-noto text-offwhite/50 text-sm tracking-widest">現在地</div>
            </div>
            <p className="font-noto text-offwhite/70 text-sm leading-loose tracking-wider">
              「どんな人間か」を垂直方向に深化させる。<br />
              構造が変わると、全ての表現が自然に変わる。
            </p>
          </div>
        </div>

        {/* Key insight */}
        <div className="border-l-2 border-gold px-8 py-6">
          <p className="font-noto text-offwhite text-base md:text-lg leading-loose tracking-wider">
            40代以上の男性が持つ本当の武器は「深み」だ。
            その深みを正しく再構築することで、<span className="text-gold">追いかけるのをやめた男性が、自然に選ばれるようになる。</span>
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-px bg-gold/10 mt-16">
          {[
            { num: "90%", text: "の男性が「テクニック」方向に努力している" },
            { num: "10%", text: "が「構造」を変えた結果として選ばれている" },
          ].map((s) => (
            <div key={s.num} className="bg-[#0d0d0d] p-8 text-center">
              <p className="font-cormorant italic text-gradient-gold text-5xl md:text-6xl mb-3">{s.num}</p>
              <p className="font-noto text-muted text-xs leading-relaxed tracking-wider">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
