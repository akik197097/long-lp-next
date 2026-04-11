import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "LINEで友達追加",
    subtitle: "Add on LINE",
    text: "下のボタンからAKITOのLINEを友達追加してください。24時間以内に個別メッセージをお送りします。",
  },
  {
    number: "02",
    title: "現状ヒアリング",
    subtitle: "Diagnostic Conversation",
    text: "現在の状況・過去の経験・どこに壁を感じているか——LINEのやり取りを通じて、あなたの5軸の現状を診断します。",
  },
  {
    number: "03",
    title: "個別フィードバック",
    subtitle: "Personalized Feedback",
    text: "診断結果をもとに、あなたが最初に取り組むべき軸と具体的なアクションをお伝えします。完全無料・勧誘なし。",
  },
];

export default function DiagnosticSession() {
  return (
    <section className="section-padding max-w-5xl mx-auto">
      <div className="flex items-center gap-6 mb-16">
        <div className="h-px flex-1 bg-gold/20" />
        <p className="font-cormorant italic text-gold tracking-widest2 text-sm">IX. Diagnostic Session</p>
        <div className="h-px flex-1 bg-gold/20" />
      </div>

      {/* Full-width image banner */}
      <div className="relative w-full h-72 md:h-96 mb-20 overflow-hidden">
        <Image
          src="/cta.jpeg"
          alt="AKITO — 無料診断セッション"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/70 via-transparent to-bg/70" />
        <div className="absolute inset-0 border border-gold/20 pointer-events-none" />
        {/* Overlay text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="font-cormorant italic text-gold text-sm tracking-widest2 mb-4">
            Free Diagnostic Session
          </p>
          <h2 className="font-noto text-2xl md:text-4xl font-light text-offwhite tracking-widest mb-4">
            まず、あなたの現在地を知る。
          </h2>
          <p className="font-cormorant italic text-muted text-lg tracking-wide">
            "Know where you stand before you move."
          </p>
        </div>
      </div>

      <p className="font-noto text-muted text-center text-sm tracking-wider mb-16">
        無料診断セッション——3つのステップで完結します。
      </p>

      {/* Steps */}
      <div className="relative">
        <div className="hidden md:block absolute top-8 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-gold/20" />
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center">
              <div className="relative w-16 h-16 border border-gold/40 flex items-center justify-center mb-6 bg-bg">
                <span className="font-cormorant italic text-gold text-2xl">{step.number}</span>
              </div>
              <p className="font-cormorant italic text-gold text-sm tracking-widest mb-1">{step.subtitle}</p>
              <p className="font-noto text-offwhite text-base tracking-widest mb-4">{step.title}</p>
              <p className="font-noto text-muted text-sm leading-relaxed tracking-wider">{step.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <p className="font-noto text-muted text-xs tracking-widest">
          ※ 診断セッションは完全無料です。セールスや勧誘は一切行いません。
        </p>
      </div>
    </section>
  );
}
