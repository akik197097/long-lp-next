"use client";

import { useState } from "react";

const elements = [
  {
    key: "CORE",
    number: "I",
    title: "CORE",
    subtitle: "核——自己の中心軸",
    summary: "ブレない自分の軸を再発見する",
    body: "すべての変化の出発点。他者の評価や状況に揺さぶられない「自己の中心」を見つけ直す。COREがなければ、どれだけテクニックを積んでも砂の上に城を建てるようなものだ。自分が何者で、何を大切にし、どこへ向かっているのか——ここから始まる。",
  },
  {
    key: "PRESENCE",
    number: "II",
    title: "PRESENCE",
    subtitle: "存在感——その場にいるだけで伝わるもの",
    summary: "言葉なしに空気を変える存在になる",
    body: "会話術より先に変えるべきは「存在感」だ。自信とは自己主張ではなく、自己との和解から生まれる静けさだ。声のトーン・姿勢・間の取り方——これらは技術ではなく、内側の状態が外側に滲み出たものだ。PRESENCEを変えると、何も言わなくても空気が変わる。",
  },
  {
    key: "INSIGHT",
    number: "III",
    title: "INSIGHT",
    subtitle: "洞察力——相手の本音を読む力",
    summary: "表面ではなく本質を見る眼を養う",
    body: "女性が「言っていること」と「感じていること」は違う。テクニック思考の男性はその差に気づかず、言葉に反応しようとする。INSIGHTとは、相手の感情・欲求・恐れの構造を読む能力だ。この力が育つと、会話は「うまく話す技術」から「深く理解する行為」へと変わる。",
  },
  {
    key: "DEPTH",
    number: "IV",
    title: "DEPTH",
    subtitle: "深み——人間としての厚み",
    summary: "40代が持つ経験を武器に変換する",
    body: "傷・失敗・後悔——40代以上の男性が持つこれらの経験は、DEPTHという名の資産だ。しかし、多くの男性はそれを隠すか、重みとして抱えている。DEPTHとは、自分の経験を意味として統合する能力だ。過去を整理したとき、それは相手の心に届く「本物の言葉」になる。",
  },
  {
    key: "EVOLUTION",
    number: "V",
    title: "EVOLUTION",
    subtitle: "進化——変わり続ける男の磁力",
    summary: "成長し続ける姿勢が最大の魅力になる",
    body: "最も魅力的な男性とは、完成された男性ではなく、今も進化し続けている男性だ。EVOLUTIONとは結果ではなくプロセスだ。新しいことに挑戦し、失敗を糧にし、昨日より深くなっていく——この姿勢そのものが磁力を生む。モテは、成長の副産物として自然に訪れる。",
  },
];

export default function FiveElements() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding max-w-5xl mx-auto">
      <div className="flex items-center gap-6 mb-16">
        <div className="h-px flex-1 bg-gold/20" />
        <p className="font-cormorant italic text-gold tracking-widest2 text-sm">VI. Five Elements</p>
        <div className="h-px flex-1 bg-gold/20" />
      </div>

      <h2 className="font-noto text-3xl md:text-4xl font-light text-offwhite text-center tracking-widest mb-4">
        男の価値を構成する、五つの柱。
      </h2>
      <p className="font-cormorant italic text-muted text-xl text-center tracking-wide mb-4">
        "Five pillars of male value reconstruction."
      </p>

      {/* Pillar badges */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {elements.map((el) => (
          <span key={el.key} className="font-cormorant italic text-gold border border-gold/30 px-4 py-1 text-sm tracking-widest">
            {el.key}
          </span>
        ))}
      </div>

      <div className="space-y-px bg-gold/10">
        {elements.map((el, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={el.key} className="bg-bg">
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full flex items-center gap-6 p-6 md:p-8 text-left group hover:bg-surface transition-colors duration-300"
                aria-expanded={isOpen}
              >
                <span className="font-cormorant italic text-gold text-3xl w-8 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity">
                  {el.number}
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-3">
                    <span className="font-cormorant italic text-offwhite text-xl tracking-widest">{el.title}</span>
                    <span className="font-noto text-muted text-xs tracking-wider">{el.subtitle}</span>
                  </div>
                  <p className="font-noto text-muted text-sm mt-1 tracking-wider">{el.summary}</p>
                </div>
                <span className={`text-gold/60 text-xl shrink-0 transition-transform duration-500 ${isOpen ? "rotate-180" : ""}`}>
                  ∨
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="px-6 md:px-8 pb-8 pt-2 border-t border-gold/10 ml-14">
                  <p className="font-noto text-muted text-sm md:text-base leading-loose tracking-wider">{el.body}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
