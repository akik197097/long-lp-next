"use client";

import { useState } from "react";

const LINE_URL = "https://utage-system.com/p/eX5DUD1rEaJW";

const axes = [
  { num: "01", key: "CORE",      ja: "自己軸",      q: "他者の評価に関わらず「自分はこういう人間だ」という感覚を持っているか？",       low: "常に他者の反応で自分を判断してしまう",       high: "何があっても揺るがない自分の中心がある" },
  { num: "02", key: "PRESENCE",  ja: "存在感",      q: "何も言わなくても、その場の空気が変わるような存在感を持っているか？",           low: "話さないと存在感がなく、空気になっている",   high: "黙っていても「この人は違う」と感じさせる" },
  { num: "03", key: "INSIGHT",   ja: "洞察力",      q: "相手が言葉にしない感情・本音を、自然に読み取ることができているか？",           low: "言葉の表面だけを受け取り、誤解が多い",       high: "相手の本音を先に察し、深い対話ができる" },
  { num: "04", key: "DEPTH",     ja: "人間的深み",  q: "自分の失敗・挫折を、相手に届く「言葉」として語ることができるか？",             low: "経験があっても、それを語ると重くなる",       high: "過去が自分の深みと言葉に厚みをもたらしている" },
  { num: "05", key: "EVOLUTION", ja: "成長継続性",  q: "今この瞬間も、昨日より深く・広くなろうとしている感覚があるか？",               low: "成長は止まり、現状維持で精一杯だ",           high: "日々の変化を楽しみ、進化が習慣になっている" },
];

function getResult(total: number) {
  if (total <= 8)  return { level: "D — 再構築の余地が大きい",    color: "text-muted",     msg: "テクニック思考が深く根付いている状態です。今すぐ在り方を軸としたアプローチを始めることで、最も大きな変化が期待できます。" };
  if (total <= 13) return { level: "C — 気づき始めている段階",    color: "text-offwhite",  msg: "問題に気づきながらも、方法が定まっていない状態です。5軸の在り方を理解することで、変化の方向が明確になります。" };
  if (total <= 18) return { level: "B — 在り方の片鱗を掴んでいる",  color: "text-gold/80",   msg: "一部の軸は育っていますが、全体のバランスが取れていません。弱い軸を特定し、集中的に取り組む段階です。" };
  return             { level: "A — 在り方変革の実践者",             color: "text-gradient-gold", msg: "すでに在り方を軸とした思考が育っています。さらに深化させることで、存在そのものが磁力を持つ段階へ進めます。" };
}

export default function SelfCheck() {
  const [scores, setScores] = useState<(number | null)[]>(Array(5).fill(null));
  const answered = scores.filter(Boolean).length;
  const total = scores.reduce<number>((a, s) => a + (s ?? 0), 0);
  const allDone = answered === 5;
  const result = allDone ? getResult(total) : null;

  return (
    <section className="section-py container-lp">
      <div className="flex items-center gap-4 mb-16">
        <span className="label-en">10 — Self Check</span>
        <div className="h-px flex-1 bg-gold/20" />
      </div>

      <h2 className="font-noto text-3xl md:text-4xl font-light text-offwhite tracking-widest leading-tight mb-4">
        あなたの5軸を、今すぐ診断する。
      </h2>
      <p className="font-cormorant italic text-muted text-xl tracking-wide mb-4">
        "Where are you now on each axis?"
      </p>
      <p className="font-noto text-muted/50 text-sm tracking-wider mb-16">
        各質問に対して、1（低い）〜5（高い）で自己評価してください。
      </p>

      <div className="space-y-0">
        {axes.map((ax, i) => (
          <div key={ax.key} className={`py-8 border-b border-gold/10 ${scores[i] ? "border-gold/20" : ""}`}>
            <div className="flex items-start gap-6 mb-5">
              <span className="font-cormorant italic text-gold text-3xl opacity-40 shrink-0 w-10">{ax.num}</span>
              <div>
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-cormorant italic text-offwhite text-xl tracking-widest">{ax.key}</span>
                  <span className="font-noto text-muted/50 text-xs tracking-widest">{ax.ja}</span>
                </div>
                <p className="font-noto text-offwhite/70 text-sm leading-relaxed tracking-wider">{ax.q}</p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3 ml-16">
              <span className="font-noto text-muted/40 text-xs w-8">低い</span>
              <div className="flex gap-2 flex-1">
                {[1,2,3,4,5].map(n => (
                  <button
                    key={n}
                    onClick={() => { const s = [...scores]; s[i] = n; setScores(s); }}
                    className={`flex-1 py-2.5 text-sm font-cormorant italic tracking-widest border transition-all duration-200 ${scores[i] === n ? "border-gold bg-gold/15 text-gold" : "border-gold/15 text-muted/50 hover:border-gold/40 hover:text-offwhite"}`}
                  >{n}</button>
                ))}
              </div>
              <span className="font-noto text-muted/40 text-xs w-8 text-right">高い</span>
            </div>

            {scores[i] && (
              <div className="grid grid-cols-2 gap-3 mt-4 ml-16">
                <div className="p-3 border-l-2 border-muted/20 bg-[#0d0d0d]">
                  <p className="label-en mb-1 opacity-50">低い状態</p>
                  <p className="font-noto text-muted/50 text-xs leading-relaxed tracking-wider">{ax.low}</p>
                </div>
                <div className="p-3 border-l-2 border-gold/40 bg-[#0d0d0d]">
                  <p className="label-en mb-1">高い状態</p>
                  <p className="font-noto text-offwhite/70 text-xs leading-relaxed tracking-wider">{ax.high}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="mt-6 mb-2 flex justify-between">
        <p className="font-noto text-muted/50 text-xs tracking-widest">{answered} / 5 回答済み</p>
        {allDone && <p className="font-cormorant italic text-gold text-sm">合計: {total} / 25</p>}
      </div>
      <div className="h-px bg-gold/10 relative">
        <div className="absolute inset-y-0 left-0 bg-gold transition-all duration-500" style={{ width: `${(answered / 5) * 100}%` }} />
      </div>

      {/* Result */}
      {allDone && result && (
        <div className="mt-12 border border-gold/25 p-8 md:p-12">
          <p className="label-en text-center mb-4">診断結果</p>
          <h3 className={`font-noto text-xl md:text-2xl text-center tracking-widest mb-6 ${result.color}`}>{result.level}</h3>
          <div className="h-px bg-gold/15 mb-6" />
          <p className="font-noto text-offwhite/60 text-sm leading-loose tracking-wider text-center max-w-lg mx-auto mb-10">{result.msg}</p>
          <div className="text-center">
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gold hover:bg-gold/90 text-bg font-noto text-sm tracking-widest px-10 py-4 transition-colors duration-300">
              男の在り方再構築診断セッションに無料で申し込む →
            </a>
          </div>
        </div>
      )}
      {!allDone && <p className="font-noto text-muted/30 text-xs text-center tracking-widest mt-6">5軸すべてに回答すると診断結果が表示されます</p>}
    </section>
  );
}
