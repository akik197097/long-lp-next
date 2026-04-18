import Image from "next/image";

const events = [
  {
    year: "幼少期〜高校",
    label: "The Beginning",
    text: "型にはまれない少年だった。\n中高一貫の寮生活で読書・音楽・哲学にのめり込み、自分とは何かを問い続けた。初恋の記憶と、女性への純粋な信頼がここで生まれた。",
  },
  {
    year: "大学〜大学院",
    label: "The Pursuit",
    text: "二度の留年、バーテンダー、バンド活動。六本木のクラブで外国人女性と過ごす日々。「どうすれば選ばれるか」ではなく「なぜ選ばれるか」を、無意識に観察し始めていた。",
  },
  {
    year: "留学時代・31歳",
    label: "The Discovery",
    text: "フランス留学のため渡仏。言語も文化も違う環境で、自己を主張することの意味を学んだ。「在り方が変われば、現実が変わる」——この確信はここで生まれた。",
  },
  {
    year: "40代",
    label: "The Wall",
    text: "安定した仕事、資格、実績。それでも何かが満たされなかった。離婚後は経済的余裕も少しあり、キャバクラ、ラウンジ、韓国パブの女性——華やかだが不毛な恋愛を追い求めた。しかしある時気づいた——結果を出している男は、やり方ではなく、在り方が違うと。",
  },
  {
    year: "現在・55歳",
    label: "Now",
    text: "会社員としてダイビング、バンド活動を楽しむ。週1で20代女性とアポを取りながら、自分の人生を楽しんでいる。これはテクニックではなく、在り方のバランスを整えた結果だ。",
  },
];

export default function MyStory() {
  return (
    <section className="section-py container-lp">
      <div className="flex items-center gap-4 mb-16">
        <span className="label-en">05 — My Story</span>
        <div className="h-px flex-1 bg-gold/20" />
      </div>

      <h2 className="font-noto text-3xl md:text-4xl font-light text-offwhite tracking-widest leading-tight mb-4">
        私もかつて、答えを探し続けていた。
      </h2>
      <p className="font-cormorant italic text-muted text-xl tracking-wide mb-6">
        "The journey that brought me here."
      </p>
      <p className="font-noto text-muted/60 text-sm tracking-wider mb-16">— コーチ AKITO</p>

      {/* story1 image */}
      <div className="mb-16 flex flex-col items-center">
        <div className="border border-gold/20 mx-auto" style={{ maxWidth: "200px", width: "100%", overflow: "visible" }}>
          <Image
            src="/story1.jpeg"
            alt="転換点"
            width={200}
            height={300}
            className="block mx-auto"
            style={{ objectFit: "contain", objectPosition: "top center", width: "100%", maxWidth: "200px", height: "auto" }}
          />
        </div>
        <div className="mt-3 text-center">
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
            <p className="font-noto text-offwhite/60 text-sm leading-loose tracking-wider whitespace-pre-line group-hover:text-offwhite/80 transition-colors">
              {ev.text}
            </p>
          </div>
        ))}
      </div>

      {/* story2 image */}
      <div className="mt-16 flex flex-col items-center">
        <div className="border border-gold/20 mx-auto" style={{ maxWidth: "200px", width: "100%", overflow: "visible" }}>
          <Image
            src="/story2.jpeg"
            alt="現在のAKITO"
            width={200}
            height={300}
            className="block mx-auto"
            style={{ objectFit: "contain", objectPosition: "top center", width: "100%", maxWidth: "200px", height: "auto" }}
          />
        </div>
        <div className="mt-3 text-center max-w-xs">
          <p className="label-en mb-2">Now — AKITO</p>
          <p className="font-noto text-offwhite text-sm leading-relaxed tracking-wider">
            構造を知った男は、追いかけるのをやめる。
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="mt-16 border border-gold/30 p-8 md:p-10">
        <p className="label-en mb-4">Mission</p>
        <p className="font-noto text-offwhite text-base md:text-lg leading-loose tracking-widest">
          私が本当に教えるのはノウハウだけではない。<br />
          あなた自身の「男としての在り方」を作り直すプロジェクトだ。
        </p>
      </div>

      {/* twoshot: 実績写真 */}
      <div className="relative w-full h-56 md:h-72 mt-6 overflow-hidden border border-gold/20">
        <Image src="/twoshot.png" alt="実績写真" fill className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/70 to-transparent" />
        <div className="absolute bottom-4 left-6">
          <p className="font-noto text-offwhite/80 text-xs tracking-wider">※モザイク処理済み</p>
        </div>
      </div>

      {/* woman-grid: 実績グリッド */}
      <div className="relative w-full aspect-[2/3] mt-6 border border-gold/20 bg-[#0a0a0a]">
        <Image src="/woman-grid.png" alt="実績一覧" fill className="object-contain" />
        <div className="absolute bottom-4 left-6">
          <p className="font-noto text-offwhite/80 text-xs tracking-wider">※モザイク処理済み</p>
        </div>
      </div>

      {/* woman-grid caption */}
      <p className="font-noto mt-3 text-center italic" style={{ fontSize: "0.85rem", color: "#999999" }}>
        ※プライバシー保護のためモザイク処理をしていますが、実際にお付き合いした女性たちです。出会いからお付き合いまでの経緯は個別セッション時に詳しくお話しします。
      </p>
    </section>
  );
}
