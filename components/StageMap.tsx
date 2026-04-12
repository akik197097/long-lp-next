"use client";

import { useState } from "react";

const stages = [
  {
    number: "01",
    en: "Stage 1 — No Foundation",
    ja: "基礎がない",
    body: "テクニックすら知らない段階。\nアプローチも、会話も、LINEも\n何が正解か分からない。",
    arrow: "まず基礎のテクニックを身につける",
    todos: [
      "女性が喜ぶ誘い方を学ぶ",
      "マッチングアプリのプロフィールを最適化する",
      "デートでの会話の流れを身につける",
      "LINEの正しい返し方を習得する",
    ],
  },
  {
    number: "02",
    en: "Stage 2 — Techniques, but Limited",
    ja: "テクニックはある、でも限界がある",
    body: "学んだテクニックで会えるようにはなった。\nでも関係が続かない。深まらない。\n\u201cいい人\u201dで終わってしまう。",
    arrow: "構造を整える必要がある",
    todos: [
      "テクニックに頼らない在り方を整える",
      "5つの要素（CORE / PRESENCE / INSIGHT / DEPTH / EVOLUTION）を理解する",
      "関係を深める構造を身につける",
    ],
  },
  {
    number: "03",
    en: "Stage 3 — Structure Complete",
    ja: "構造が整い、選ばれ続ける",
    body: "テクニックを持った上で、男としての構造が整っている状態。\n追わなくても、自然に関係が続く。\n年齢を重ねるほど磁力が増していく。",
    arrow: null,
    todos: [
      "現在の自分の構造を定期的に見直す",
      "年齢を重ねるほど進化し続ける習慣をつくる",
    ],
  },
];

export default function StageMap() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="stage-map" className="section-py container-lp">
      {/* Label */}
      <div className="flex items-center gap-4 mb-16">
        <span className="label-en">03 — Stage Map</span>
        <div className="h-px flex-1 bg-gold/20" />
      </div>

      <h2 className="font-noto text-3xl md:text-4xl font-light text-offwhite tracking-widest leading-tight mb-4">
        あなたは今、<br />どの段階にいますか？
      </h2>
      <p className="font-cormorant italic text-muted text-xl tracking-wide mb-16">
        &ldquo;Where are you right now?&rdquo;
      </p>

      {/* Stages */}
      <div className="space-y-6 mb-12">
        {stages.map((stage, i) => (
          <div key={stage.number} className="border border-gold/20">
            {/* Header — clickable */}
            <button
              onClick={() => toggle(i)}
              className="w-full text-left p-6 md:p-8 flex items-start gap-6 group"
            >
              {/* Number */}
              <span className="font-cormorant italic text-4xl shrink-0 leading-none text-gold/50 group-hover:text-gold/70 transition-colors">
                {stage.number}
              </span>

              <div className="flex-1 min-w-0">
                <p className="font-cormorant italic text-sm tracking-widest mb-1 text-gold/60">
                  {stage.en}
                </p>
                <p className="font-noto text-base font-light tracking-widest mb-4 text-offwhite/80">
                  {stage.ja}
                </p>
                <p className="font-noto text-sm leading-relaxed tracking-wider whitespace-pre-line text-offwhite/55">
                  {stage.body}
                </p>

                {stage.arrow && (
                  <div className="flex items-center gap-3 mt-5 pt-5 border-t border-gold/10">
                    <span className="font-cormorant italic text-gold/50 text-base">→</span>
                    <p className="font-noto text-gold/60 text-xs tracking-widest">{stage.arrow}</p>
                  </div>
                )}
              </div>

              {/* Toggle icon */}
              <span className="font-cormorant italic text-gold/40 text-xl shrink-0 mt-1 group-hover:text-gold/60 transition-colors">
                {openIndex === i ? "−" : "+"}
              </span>
            </button>

            {/* Accordion body */}
            {openIndex === i && (
              <div className="px-6 md:px-8 pb-6 md:pb-8 border-t border-gold/10 pt-5">
                <p className="font-noto text-xs tracking-widest text-gold/50 mb-4">やるべきこと</p>
                <ul className="space-y-3">
                  {stage.todos.map((todo, j) => (
                    <li key={j} className="flex items-start gap-4">
                      <span className="font-cormorant italic text-gold/40 text-base shrink-0 leading-relaxed">
                        {String(j + 1).padStart(2, "0")}
                      </span>
                      <p className="font-noto text-offwhite/70 text-sm leading-relaxed tracking-wider">
                        {todo}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Gold-bordered message block */}
      <div className="border border-gold/40 p-6 md:p-8">
        <p className="font-noto text-offwhite/80 text-sm leading-relaxed tracking-wider">
          どのステージにいても、このプロジェクトは対応しています。<br />
          基礎のテクニックから、選ばれ続ける構造まで。<br />
          あなたの現在地から始められます。
        </p>
      </div>
    </section>
  );
}
