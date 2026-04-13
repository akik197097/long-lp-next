import Image from "next/image";

const steps = [
  { num: "01", title: "LINEで友達追加",    en: "Add on LINE",              text: "下のボタンからAKITOのLINEを友達追加してください。24時間以内に個別メッセージをお送りします。" },
  { num: "02", title: "現状ヒアリング",    en: "Diagnostic Conversation",  text: "現在の状況・過去の経験・どこに壁を感じているか——LINEのやり取りを通じて、あなたの5軸の現状を診断します。" },
  { num: "03", title: "個別フィードバック", en: "Personalized Feedback",    text: "診断結果をもとに、あなたが最初に取り組むべき軸と具体的なアクションをお伝えします。完全無料・勧誘なし。" },
];

export default function DiagnosticSession() {
  return (
    <section className="section-py bg-[#0d0d0d]">
      <div className="container-lp">
        <div className="flex items-center gap-4 mb-16">
          <span className="label-en">11 — Diagnostic Session</span>
          <div className="h-px flex-1 bg-gold/20" />
        </div>

        {/* Portrait image */}
        <div className="mb-16 flex flex-col items-center">
          <div style={{ overflow: "visible" }}>
            <Image
              src="/cta.jpeg"
              alt="AKITO"
              width={250}
              height={400}
              style={{
                width: "auto",
                maxWidth: "250px",
                height: "auto",
                objectFit: "contain",
                objectPosition: "top",
                display: "block",
                margin: "0 auto",
              }}
            />
          </div>
          <div className="mt-8 text-center">
            <p className="label-en tracking-[0.3em] mb-4">Free Diagnostic Session</p>
            <h2 className="font-noto text-2xl md:text-4xl font-light text-offwhite tracking-widest mb-3">
              まず、あなたの現在地を知る。
            </h2>
            <p className="font-cormorant italic text-muted text-lg tracking-wide">
              &ldquo;Know where you stand before you move.&rdquo;
            </p>
          </div>
        </div>

        <p className="font-noto text-muted/60 text-center text-sm tracking-wider mb-16">
          無料診断セッション——3つのステップで完結します。
        </p>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-px bg-gold/10">
          {steps.map((s) => (
            <div key={s.num} className="bg-[#0d0d0d] p-8 text-center">
              <p className="font-cormorant italic text-gold text-5xl opacity-30 mb-4">{s.num}</p>
              <p className="label-en mb-2">{s.en}</p>
              <p className="font-noto text-offwhite text-base tracking-widest mb-4">{s.title}</p>
              <div className="h-px w-8 bg-gold/30 mx-auto mb-4" />
              <p className="font-noto text-muted/60 text-sm leading-relaxed tracking-wider">{s.text}</p>
            </div>
          ))}
        </div>

        <p className="font-noto text-muted/40 text-xs text-center tracking-widest mt-10">
          ※ 診断セッションは完全無料です。セールスや勧誘は一切行いません。
        </p>

        {/* 建物 image */}
        <div className="relative w-full h-56 md:h-72 mt-12 overflow-hidden border border-gold/20">
          <Image src="/建物.png" alt="建物" fill className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/50 to-transparent" />
        </div>
      </div>
    </section>
  );
}
