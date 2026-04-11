const comparisons = [
  {
    left: { label: "テクニック思考", text: "「何を言うか」「どう見せるか」に集中する" },
    right: { label: "構造的自己変革", text: "「自分がどういう人間か」を根本から変える" },
  },
  {
    left: { label: "テクニック思考", text: "女性の反応に一喜一憂し、正解を探し続ける" },
    right: { label: "構造的自己変革", text: "他者の反応に左右されない軸が自然に生まれる" },
  },
  {
    left: { label: "テクニック思考", text: "一時的に上手くいっても、関係が長続きしない" },
    right: { label: "構造的自己変革", text: "深い関係性が自然に構築・継続される" },
  },
  {
    left: { label: "テクニック思考", text: "年齢を重ねるほど通用しなくなる" },
    right: { label: "構造的自己変革", text: "年齢とともに深みと価値が増していく" },
  },
];

const problems = [
  "ナンパ・マッチングアプリを試したが、会話が続かず消耗している",
  "モテ系YouTubeやノウハウ本を読み漁っても現実が変わらない",
  "若い頃と同じアプローチが40代では全く通用しないと気づいている",
  "「いい人なんだけど」と断られ続けるパターンから抜け出せない",
];

export default function Problem() {
  return (
    <section id="problem" className="section-padding max-w-5xl mx-auto">
      <div className="flex items-center gap-6 mb-16">
        <div className="h-px flex-1 bg-gold/20" />
        <p className="font-cormorant italic text-gold tracking-widest2 text-sm">II. Problem</p>
        <div className="h-px flex-1 bg-gold/20" />
      </div>

      <h2 className="font-noto text-3xl md:text-4xl font-light text-offwhite text-center tracking-widest mb-4">
        テクニックを学ぶほど、<br />本質から遠ざかっていく。
      </h2>
      <p className="font-cormorant italic text-muted text-xl text-center tracking-wide mb-16">
        "The more techniques you learn, the further you drift from your truth."
      </p>

      {/* Pain points */}
      <div className="grid md:grid-cols-2 gap-px bg-gold/10 mb-20">
        {problems.map((text, i) => (
          <div key={i} className="bg-bg p-8 group hover:bg-surface transition-colors duration-500">
            <p className="font-cormorant italic text-gold/50 text-4xl mb-3 group-hover:text-gold/70 transition-colors">
              {String(i + 1).padStart(2, "0")}
            </p>
            <p className="font-noto text-offwhite/80 text-base leading-relaxed tracking-wider">{text}</p>
          </div>
        ))}
      </div>

      {/* 2-column comparison */}
      <h3 className="font-noto text-xl text-offwhite text-center tracking-widest mb-10">
        なぜ、テクニックでは限界があるのか
      </h3>
      <div className="grid gap-px bg-gold/10">
        {comparisons.map((row, i) => (
          <div key={i} className="grid grid-cols-2 gap-px bg-gold/10">
            <div className="bg-surface p-6">
              <p className="font-cormorant italic text-muted text-xs tracking-widest mb-2">{row.left.label}</p>
              <p className="font-noto text-offwhite/50 text-sm leading-relaxed tracking-wider">{row.left.text}</p>
            </div>
            <div className="bg-surface p-6 border-l-2 border-gold/30">
              <p className="font-cormorant italic text-gold text-xs tracking-widest mb-2">{row.right.label}</p>
              <p className="font-noto text-offwhite text-sm leading-relaxed tracking-wider">{row.right.text}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="font-noto text-muted text-center text-base leading-relaxed tracking-wider mt-16 max-w-2xl mx-auto">
        40代以上の男性が女性に選ばれるのは、<span className="text-offwhite">テクニックの巧みさではなく、人間としての深みと構造</span>だ。
      </p>
    </section>
  );
}
