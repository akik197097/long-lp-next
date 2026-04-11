"use client";

import { useState } from "react";

const elements = [
  {
    num: "01", key: "CORE", ja: "核——自己の中心軸",
    summary: "ブレない軸を再発見する",
    body: "すべての変化の出発点。他者の評価や状況に揺さぶられない「自己の中心」を見つけ直す。COREがなければ、どれだけテクニックを積んでも砂の上に城を建てるようなものだ。自分が何者で、何を大切にし、どこへ向かっているのか——ここから始まる。",
  },
  {
    num: "02", key: "PRESENCE", ja: "存在感——その場にいるだけで伝わるもの",
    summary: "言葉なしに空気を変える存在になる",
    body: "会話術より先に変えるべきは「存在感」だ。自信とは自己主張ではなく、自己との和解から生まれる静けさだ。声のトーン・姿勢・間の取り方——これらは技術ではなく、内側の状態が外側に滲み出たものだ。PRESENCEを変えると、何も言わなくても空気が変わる。",
  },
  {
    num: "03", key: "INSIGHT", ja: "洞察力——相手の本音を読む力",
    summary: "表面ではなく本質を見る眼を養う",
    body: "女性が「言っていること」と「感じていること」は違う。テクニック思考の男性はその差に気づかず、言葉に反応しようとする。INSIGHTとは、相手の感情・欲求・恐れの構造を読む能力だ。この力が育つと、会話は「うまく話す技術」から「深く理解する行為」へと変わる。",
  },
  {
    num: "04", key: "DEPTH", ja: "深み——人間としての厚み",
    summary: "40代の経験を武器に変換する",
    body: "傷・失敗・後悔——40代以上の男性が持つこれらの経験は、DEPTHという名の資産だ。しかし多くの男性はそれを隠すか、重みとして抱えている。DEPTHとは、自分の経験を意味として統合する能力だ。過去を整理したとき、それは相手の心に届く「本物の言葉」になる。",
  },
  {
    num: "05", key: "EVOLUTION", ja: "進化——変わり続ける男の磁力",
    summary: "成長し続ける姿勢が最大の魅力になる",
    body: "最も魅力的な男性とは、完成された男性ではなく、今も進化し続けている男性だ。EVOLUTIONとは結果ではなくプロセスだ。新しいことに挑戦し、失敗を糧にし、昨日より深くなっていく——この姿勢そのものが磁力を生む。モテは、成長の副産物として自然に訪れる。",
  },
];

export default function FiveElements() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section-py container-lp">
      <div className="flex items-center gap-4 mb-16">
        <span className="label-en">06 — Five Elements</span>
        <div className="h-px flex-1 bg-gold/20" />
      </div>

      <h2 className="font-noto text-3xl md:text-4xl font-light text-offwhite tracking-widest leading-tight mb-4">
        男の価値を構成する、<br />五つの柱。
      </h2>
      <p className="font-cormorant italic text-muted text-xl tracking-wide mb-16">
        "Five pillars of male value reconstruction."
      </p>

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
                {/* Big decorative number */}
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

              {/* Body */}
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="pb-8 pl-20 pr-8 border-t border-gold/[0.08] pt-6">
                  <p className="font-noto text-offwhite/60 text-sm leading-loose tracking-wider">{el.body}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
