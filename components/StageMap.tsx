"use client";

import { useState } from "react";

const stages = [
  {
    number: "01",
    en: "Stage 1 — Practical Skills",
    ja: "実践スキルの習得",
    body: "マッチングアプリ攻略・ストリートナンパ・会話術・\nノンバーバル・女性の扱い方を完全習得する段階。\nテクニックを体系的に身につける起点。",
    arrow: "まず実践スキルを完全習得する",
    todos: [
      "マッチングアプリのプロフィール・攻略法を最適化する",
      "ストリートナンパの基礎と実践を習得する",
      "会話術・トーク構成を体系的に学ぶ",
      "ノンバーバル（姿勢・視線・声・空気感）を整える",
      "女性の扱い方・リード術を実践で習得する",
    ],
  },
  {
    number: "02",
    en: "Stage 2 — The Five Foundations",
    ja: "5つの在り方の確立",
    body: "実践スキルの上に在り方を重ねる段階。\nマインド・女性心理・会話の深さ・ノンバーバル・\n人生のバランスを整え、追われる男の土台を作る。",
    arrow: "在り方の5軸を整える",
    todos: [
      "強めるべきマインド（CORE）を確立する",
      "女性心理の在り方を深く理解する",
      "深みのある会話（DEPTH）を習慣にする",
      "ノンバーバル（PRESENCE）を継続的に鍛える",
      "常に進化し続ける人生（EVOLUTION）のバランスを整える",
    ],
  },
  {
    number: "03",
    en: "Stage 3 — Structure Complete",
    ja: "男の在り方のバランスの完成",
    body: "テクニックと在り方が統合された状態。\n追われる男として、美女・ハイスペック女子との\n長期的な関係を自然に構築できる。",
    arrow: null,
    todos: [
      "5軸の在り方を定期的に点検・深化させる",
      "美女・ハイスペック女子との関係を自然に継続する",
      "年齢を重ねるほど磁力が増す習慣を維持する",
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

      <h2 className="font-noto text-xl md:text-4xl font-light text-offwhite tracking-tight leading-tight mb-4">
        テクニックから在り方へ。<br />あなたは今、どの段階にいますか？
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
                <p className="font-noto text-sm md:text-base font-light tracking-tight md:tracking-widest mb-4 text-offwhite/80">
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
        <p className="font-noto text-offwhite/80 text-xs md:text-sm leading-relaxed tracking-normal">
          どのステージにいても、このプロジェクトは対応しています。<br />
          基礎のテクニックから、選ばれ続ける在り方まで。<br />
          あなたの現在地から始められます。
        </p>
      </div>
    </section>
  );
}
