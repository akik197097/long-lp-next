"use client";

import { useState } from "react";

const LINE_URL = "https://line.me/ti/p/@232awhbc";

const axes = [
  {
    axis: "CORE",
    label: "自己軸",
    question: "他者の評価に関わらず「自分はこういう人間だ」という感覚を持っているか？",
    low: "常に他者の反応で自分を判断してしまう",
    high: "何があっても揺るがない自分の中心がある",
  },
  {
    axis: "PRESENCE",
    label: "存在感",
    question: "何も言わなくても、その場の空気が変わるような存在感を持っているか？",
    low: "話さないと存在感がなく、空気になっている",
    high: "黙っていても「この人は違う」と感じさせる",
  },
  {
    axis: "INSIGHT",
    label: "洞察力",
    question: "相手が言葉にしない感情・本音を、自然に読み取ることができているか？",
    low: "言葉の表面だけを受け取り、誤解が多い",
    high: "相手の本音を先に察し、深い対話ができる",
  },
  {
    axis: "DEPTH",
    label: "人間的深み",
    question: "自分の失敗・挫折を、相手に届く「言葉」として語ることができるか？",
    low: "経験があっても、それを語ると重くなる",
    high: "過去が自分の深みと言葉に厚みをもたらしている",
  },
  {
    axis: "EVOLUTION",
    label: "成長継続性",
    question: "今この瞬間も、昨日より深く・広くなろうとしている感覚があるか？",
    low: "成長は止まり、現状維持で精一杯だ",
    high: "日々の変化を楽しみ、進化が習慣になっている",
  },
];

function getResult(total: number) {
  if (total <= 8)
    return {
      level: "D — 再構築の余地が大きい",
      color: "text-muted",
      message:
        "テクニック思考が深く根付いている状態です。今すぐ構造的なアプローチを始めることで、最も大きな変化が期待できます。",
    };
  if (total <= 13)
    return {
      level: "C — 気づき始めている段階",
      color: "text-offwhite",
      message:
        "問題に気づきながらも、方法が定まっていない状態です。5軸の構造を理解することで、変化の方向が明確になります。",
    };
  if (total <= 18)
    return {
      level: "B — 構造の片鱗を掴んでいる",
      color: "text-gold/80",
      message:
        "一部の軸は育っていますが、全体のバランスが取れていません。弱い軸を特定し、集中的に取り組む段階です。",
    };
  return {
    level: "A — 構造変革の実践者",
    color: "text-gradient-gold",
    message:
      "すでに構造的な思考が育っています。さらに深化させることで、あなたの存在そのものが磁力を持つ段階へ進めます。",
  };
}

export default function SelfCheck() {
  const [scores, setScores] = useState<(number | null)[]>(Array(5).fill(null));
  const answered = scores.filter((s) => s !== null).length;
  const total = scores.reduce<number>((acc, s) => acc + (s ?? 0), 0);
  const allAnswered = answered === 5;
  const result = allAnswered ? getResult(total) : null;

  return (
    <section className="section-padding max-w-5xl mx-auto">
      <div className="flex items-center gap-6 mb-16">
        <div className="h-px flex-1 bg-gold/20" />
        <p className="font-cormorant italic text-gold tracking-widest2 text-sm">VIII. Self Check</p>
        <div className="h-px flex-1 bg-gold/20" />
      </div>

      <h2 className="font-noto text-3xl md:text-4xl font-light text-offwhite text-center tracking-widest mb-4">
        あなたの5軸を、今すぐ診断する。
      </h2>
      <p className="font-cormorant italic text-muted text-xl text-center tracking-wide mb-4">
        "Where are you now on each axis?"
      </p>
      <p className="font-noto text-muted text-center text-sm tracking-wider mb-20">
        各質問に対して、1（低い）〜5（高い）で自己評価してください。
      </p>

      <div className="space-y-8">
        {axes.map((item, i) => (
          <div
            key={item.axis}
            className={`border p-6 md:p-8 transition-colors duration-300 ${
              scores[i] !== null ? "border-gold/30 bg-surface" : "border-gold/15"
            }`}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="shrink-0 w-10 h-10 border border-gold/40 flex items-center justify-center rotate-45">
                <span className="font-cormorant italic text-gold text-sm -rotate-45">{i + 1}</span>
              </div>
              <div>
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="font-cormorant italic text-gold text-lg tracking-widest">{item.axis}</span>
                  <span className="font-noto text-muted text-xs tracking-widest">{item.label}</span>
                </div>
                <p className="font-noto text-offwhite text-sm md:text-base leading-relaxed tracking-wider">
                  {item.question}
                </p>
              </div>
            </div>

            {/* 1–5 rating */}
            <div className="ml-14">
              <div className="flex items-center gap-2 mb-3">
                <span className="font-noto text-muted/60 text-xs tracking-widest w-16">低い</span>
                <div className="flex gap-2 flex-1">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      onClick={() => {
                        const next = [...scores];
                        next[i] = n;
                        setScores(next);
                      }}
                      className={`flex-1 py-2 border text-sm font-cormorant italic tracking-widest transition-all duration-200 ${
                        scores[i] === n
                          ? "border-gold bg-gold/15 text-gold"
                          : "border-gold/20 text-muted hover:border-gold/50 hover:text-offwhite"
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
                <span className="font-noto text-muted/60 text-xs tracking-widest w-16 text-right">高い</span>
              </div>

              {/* Low / High labels */}
              {scores[i] !== null && (
                <div className="grid grid-cols-2 gap-3 mt-3">
                  <div className="bg-bg p-3 border-l-2 border-muted/20">
                    <p className="font-cormorant italic text-muted text-xs tracking-widest mb-1">低い状態</p>
                    <p className="font-noto text-muted/70 text-xs leading-relaxed tracking-wider">{item.low}</p>
                  </div>
                  <div className="bg-bg p-3 border-l-2 border-gold/40">
                    <p className="font-cormorant italic text-gold text-xs tracking-widest mb-1">高い状態</p>
                    <p className="font-noto text-offwhite/80 text-xs leading-relaxed tracking-wider">{item.high}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Progress */}
      <div className="mt-8 mb-2 flex justify-between items-center">
        <p className="font-noto text-muted text-xs tracking-widest">{answered} / 5 回答済み</p>
        {allAnswered && (
          <p className="font-cormorant italic text-gold text-sm tracking-widest">合計: {total} / 25</p>
        )}
      </div>
      <div className="h-px bg-gold/10 mb-2">
        <div
          className="h-px bg-gold transition-all duration-500"
          style={{ width: `${(answered / 5) * 100}%` }}
        />
      </div>

      {/* Result */}
      {allAnswered && result && (
        <div className="mt-12 border border-gold/30 bg-surface p-8 md:p-12">
          <p className="font-cormorant italic text-gold text-xs tracking-widest2 text-center mb-4">
            診断結果
          </p>
          <h3 className={`font-noto text-xl md:text-2xl text-center tracking-widest mb-6 ${result.color}`}>
            {result.level}
          </h3>
          <div className="h-px bg-gold/20 mb-6" />
          <p className="font-noto text-muted text-base leading-relaxed tracking-wider text-center max-w-xl mx-auto mb-10">
            {result.message}
          </p>
          <div className="text-center">
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gold hover:bg-gold/90 text-bg font-noto text-sm tracking-widest px-10 py-4 transition-all duration-300 group"
            >
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.346 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
              詳細診断をLINEで受け取る（無料）
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>
        </div>
      )}

      {!allAnswered && (
        <p className="font-noto text-muted/50 text-xs text-center tracking-widest mt-8">
          5軸すべてに回答すると診断結果が表示されます
        </p>
      )}
    </section>
  );
}
