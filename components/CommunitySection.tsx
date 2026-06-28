const activities = [
  "路上での実践講習会",
  "デートで使えるお洒落なレストランでの食事会",
  "ショットバー・クラブでのオフ会",
  "ホテルラウンジでのカフェ会",
  "勉強会・合宿（在り方・各種知識）",
  "旅行会",
  "ボイストレーニング練習会",
];

export default function CommunitySection() {
  return (
    <section className="section-py container-lp">
      <div className="flex items-center gap-4 mb-16">
        <span className="label-en">Community</span>
        <div className="h-px flex-1 bg-gold/20" />
      </div>

      <h2 className="font-noto text-2xl md:text-4xl font-light text-gold tracking-widest leading-tight mb-6">
        この講座で起きること
      </h2>

      <p className="font-noto text-offwhite/65 text-base leading-loose tracking-wider mb-14">
        ノウハウを教えるだけの講座ではありません。<br />
        男として、人間として、一緒に成長していく場です。
      </p>

      <div className="space-y-0 mb-14">
        {activities.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-6 py-5 border-b border-gold/10"
          >
            <span className="font-cormorant italic text-gold/40 text-lg shrink-0">・</span>
            <p className="font-noto text-offwhite/80 text-base tracking-wider">
              {item}
            </p>
          </div>
        ))}
      </div>

      <p className="font-noto text-offwhite/60 text-sm leading-loose tracking-wider mb-8">
        こうした場が、自然に生まれていきます。<br />
        楽しく切磋琢磨しながら、男として、人間として成長していく。
      </p>

      <p className="font-noto text-gold text-lg md:text-xl leading-relaxed tracking-widest">
        「居場所」と「つながり」のあるコミュニティがあります。
      </p>
    </section>
  );
}
