"use client";

import { useState } from "react";
import Image from "next/image";

const intro = [
  "多くの男性は「何をすれば魅力的になれるか」を探し続けています。外見を整える、会話を学ぶ、成功する、女性に慣れる。これらはすべて間違いではありません。しかし、現実には同じことをしても結果が大きく分かれます。なぜ一部の男性だけが選ばれ続け、追われ、関係を維持し、人生全体に充実を感じられるのでしょうか。",
  "その違いは「能力」や「努力量」ではありません。違いは構造です。人は行動によって結果を作るのではなく、状態によって行動が生まれ、行動が結果を生むという順序で動いています。つまり、行動を変えても状態が変わらなければ、結果は元に戻ります。多くの男性が一時的にうまくいっても長続きしない理由はここにあります。",
  "男の魅力とは「テクニック」ではなく、存在の総合状態です。女性が感じ取っているのは言葉でも見た目でもなく、その背後にある安定、余裕、方向性、深さ、そして生き方そのものです。これらは個別に鍛えるものではなく、相互に影響し合う構造として存在しています。",
  "これらは能力の評価ではなく、エネルギーがどこに流れているかを示す座標です。重要なのは「どこを伸ばすか」ではなく、「どこから崩れているか」を理解することです。女性関係の問題の多くは恋愛技術ではなく、この構造の歪みから生まれます。追ってしまう、執着する、不安になる、関係が浅い、続かない。これらはすべて構造の反映です。構造が整うと、行動は自然に変わり、結果は後からついてきます。",
  "この再定義は、何かを足すためではなく、不要なものを外し、本来の位置に戻るための視点です。",
];

const elements = [
  {
    num: "01",
    key: "CORE",
    ja: "在り方・エネルギー",
    summary: "すべての変化の起点となる内部状態",
    img: "/lion.png",
    body: "在り方は、すべての行動の起点となる内部状態だ。行動を変えても状態が変わらなければ、結果は元に戻る。COREとは、このエネルギーの向き——安定、余裕、方向性の根源となる部分だ。外からは見えないが、すべての表現はここから始まる。どんなテクニックも、COREが整っていなければ砂の上に積み上げるようなものだ。",
  },
  {
    num: "02",
    key: "PRESENCE",
    ja: "存在感・身体・声",
    summary: "内側の状態が身体を通じて外に現れるもの",
    body: "PRESENCEは内側の状態が外に現れたものです。姿勢、呼吸、声、視線、動き、空気感。これらは意識よりも身体に現れます。女性は言葉よりも非言語を強く受け取ります。言葉が正しくても存在が不安定なら違和感が生まれます。\n\nPRESENCEが弱いと、身体は硬く、声は弱く、呼吸は浅くなります。自信はあっても伝わらず、印象が薄くなります。逆にPRESENCEが整うと、言葉は少なくても存在が伝わります。余裕、落ち着き、静かな強さが自然に出ます。PRESENCEは外見の問題ではなく「通り」の問題です。内側のエネルギーが身体を通って外に出るかどうか。\n\n女性はPRESENCEに本能的に反応します。余裕のある男、静かな男、安定した男に安心と魅力を感じます。PRESENCEは作るものではなく、整えるものです。",
  },
  {
    num: "03",
    key: "INSIGHT",
    ja: "洞察・理解",
    summary: "現象の裏にある構造を見る力",
    body: "INSIGHTは「見える力」です。現象の裏にある構造を理解する力。女性の感情、距離、反応、本音と建前。これらを個人的に受け取らず、構造として理解できるかどうか。\n\nINSIGHTが弱いと、男性は女性の反応に振り回されます。返信速度＝好意、距離＝拒絶と解釈し、不安と追いが生まれます。INSIGHTが強いと、反応をそのまま受け取らず、距離、タイミング、状態として見ます。追うべき時と引くべき時が自然に分かります。\n\nINSIGHTは知識ではなく観察から育ちます。女性を分析するのではなく、自分の反応を観察することが重要です。感情が動いた瞬間に構造が見えます。INSIGHTが上がると、無駄な行動が減り、関係は自然に整います。",
  },
  {
    num: "04",
    key: "DEPTH",
    ja: "関係の深さ",
    summary: "接触ではなく、本物のつながりを生む力",
    body: "DEPTHは接触ではなく「つながり」です。多くの男性は出会いは増えますが、関係は深まりません。表面的な会話、軽さ、役割の演技。これでは関係は続きません。\n\nDEPTHが低いと、関係は浅く、消えやすく、意味が残りません。DEPTHがあると、沈黙が怖くなくなり、感情を扱い、価値観を共有し、関係は自然に深まります。深さとは重さではなく、本音に触れられるかです。\n\nDEPTHは勇気を必要とします。踏み込む、見せる、受け取る。これが関係を変えます。女性は「楽しい男」よりも「深く関われる男」に残ります。",
  },
  {
    num: "05",
    key: "EVOLUTION",
    ja: "人生の進化",
    summary: "動き続ける男が持つ固有の磁力",
    body: "EVOLUTIONは時間軸です。男性の魅力は「動いているかどうか」に強く影響されます。停滞は魅力を止め、進化は存在を強くします。\n\nEVOLUTIONが低いと、世界が狭くなり、刺激が減り、恋愛に依存します。EVOLUTIONが高いと、女性はその動きに惹かれます。学び、挑戦、変化、新しい世界。これらは外的魅力ではなく、内的エネルギーを生みます。\n\n女性は「完成した男」ではなく「進化している男」に惹かれます。EVOLUTIONは努力ではなく、好奇心と選択から生まれます。",
  },
];

export default function FiveElements() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section-py container-lp">
      <div className="flex items-center gap-4 mb-16">
        <span className="label-en">07 — Five Elements</span>
        <div className="h-px flex-1 bg-gold/20" />
      </div>

      <h2 className="font-noto text-3xl md:text-4xl font-light text-offwhite tracking-widest leading-tight mb-4">
        男の価値構造の再定義
      </h2>
      <p className="font-cormorant italic text-muted text-xl tracking-wide mb-16">
        "Redefining the structure of male value."
      </p>

      {/* Intro paragraphs */}
      <div className="space-y-6 mb-16 border-l border-gold/20 pl-6">
        {intro.map((p, i) => (
          <p key={i} className="font-noto text-offwhite/60 text-sm leading-loose tracking-wider">
            {p}
          </p>
        ))}
      </div>

      {/* Element list */}
      <div className="grid grid-cols-5 gap-2 mb-16">
        {elements.map((el) => (
          <div key={el.key} className="text-center border border-gold/15 py-4 px-2">
            <p className="font-cormorant italic text-gold text-base tracking-widest mb-1">{el.key}</p>
            <p className="font-noto text-offwhite/40 text-[10px] tracking-wider leading-tight">{el.ja}</p>
          </div>
        ))}
      </div>

      {/* Pentagon diagram */}
      <div className="mb-16 border border-gold/20 bg-[#0a0a0a] py-8 px-4">
        <svg
          viewBox="0 0 340 270"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full max-w-sm mx-auto block"
        >
          {/* Pentagon outline */}
          <polygon
            points="170,45 265,114 229,226 111,226 75,114"
            fill="none"
            stroke="#C9A84C"
            strokeWidth="1"
            strokeOpacity="0.25"
          />
          {/* Lines: center → vertices */}
          <line x1="170" y1="145" x2="170" y2="45" stroke="#C9A84C" strokeWidth="0.8" strokeOpacity="0.25" />
          <line x1="170" y1="145" x2="265" y2="114" stroke="#C9A84C" strokeWidth="0.8" strokeOpacity="0.25" />
          <line x1="170" y1="145" x2="229" y2="226" stroke="#C9A84C" strokeWidth="0.8" strokeOpacity="0.25" />
          <line x1="170" y1="145" x2="111" y2="226" stroke="#C9A84C" strokeWidth="0.8" strokeOpacity="0.25" />
          <line x1="170" y1="145" x2="75" y2="114" stroke="#C9A84C" strokeWidth="0.8" strokeOpacity="0.25" />
          {/* Center dot */}
          <circle cx="170" cy="145" r="3" fill="#C9A84C" fillOpacity="0.5" />

          {/* CORE — top */}
          <circle cx="170" cy="45" r="28" fill="#0a0a0a" stroke="#C9A84C" strokeWidth="1.5" />
          <text x="170" y="45" textAnchor="middle" dominantBaseline="middle" fill="#C9A84C" fontSize="10" fontFamily="sans-serif" letterSpacing="1">CORE</text>

          {/* PRESENCE — upper right */}
          <circle cx="265" cy="114" r="28" fill="#0a0a0a" stroke="#C9A84C" strokeWidth="1" strokeOpacity="0.6" />
          <text x="265" y="114" textAnchor="middle" dominantBaseline="middle" fill="#C9A84C" fontSize="8" fontFamily="sans-serif" letterSpacing="0.5">PRESENCE</text>

          {/* INSIGHT — lower right */}
          <circle cx="229" cy="226" r="28" fill="#0a0a0a" stroke="#C9A84C" strokeWidth="1" strokeOpacity="0.6" />
          <text x="229" y="226" textAnchor="middle" dominantBaseline="middle" fill="#C9A84C" fontSize="9" fontFamily="sans-serif" letterSpacing="1">INSIGHT</text>

          {/* DEPTH — lower left */}
          <circle cx="111" cy="226" r="28" fill="#0a0a0a" stroke="#C9A84C" strokeWidth="1" strokeOpacity="0.6" />
          <text x="111" y="226" textAnchor="middle" dominantBaseline="middle" fill="#C9A84C" fontSize="10" fontFamily="sans-serif" letterSpacing="1">DEPTH</text>

          {/* EVOLUTION — upper left */}
          <circle cx="75" cy="114" r="28" fill="#0a0a0a" stroke="#C9A84C" strokeWidth="1" strokeOpacity="0.6" />
          <text x="75" y="114" textAnchor="middle" dominantBaseline="middle" fill="#C9A84C" fontSize="8" fontFamily="sans-serif" letterSpacing="0.5">EVOLUTION</text>
        </svg>
      </div>

      {/* Accordion */}
      <div className="space-y-0">
        {elements.map((el, i) => {
          const isOpen = open === i;
          return (
            <div key={el.key} className="border-b border-gold/15">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center gap-6 py-6 text-left group"
                aria-expanded={isOpen}
              >
                <span className="font-cormorant italic text-gold text-4xl md:text-5xl w-14 shrink-0 opacity-40 group-hover:opacity-70 transition-opacity">
                  {el.num}
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-3 mb-1">
                    <span className="font-cormorant italic text-offwhite text-2xl tracking-widest">{el.key}</span>
                    <span className="font-noto text-muted/60 text-xs tracking-widest">{el.ja}</span>
                  </div>
                  <p className="font-noto text-muted/60 text-sm tracking-wider">{el.summary}</p>
                </div>
                <div className={`shrink-0 w-6 h-6 border border-gold/30 flex items-center justify-center transition-transform duration-400 ${isOpen ? "rotate-45" : ""}`}>
                  <span className="text-gold/60 text-xs leading-none">{isOpen ? "×" : "+"}</span>
                </div>
              </button>

              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="pb-8 pl-20 pr-8 border-t border-gold/[0.08] pt-6">
                  {"img" in el && el.img && (
                    <div className="relative w-full h-48 mb-6 overflow-hidden border border-gold/15">
                      <Image src={el.img as string} alt={el.key} fill className="object-cover object-center" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/40 to-transparent" />
                    </div>
                  )}
                  <p className="font-noto text-offwhite/60 text-sm leading-loose tracking-wider whitespace-pre-line">
                    {el.body}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
