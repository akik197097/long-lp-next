const LINE_URL = "https://utage-system.com/p/eX5DUD1rEaJW";

export default function FinalCta() {
  return (
    <section className="section-py bg-[#0d0d0d]">
      <div className="container-lp">
        <div className="flex items-center gap-4 mb-16">
          <span className="label-en">13 — Final CTA</span>
          <div className="h-px flex-1 bg-gold/20" />
        </div>

        <div className="border border-gold/25 p-10 md:p-20 relative">
          {/* Corners */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold -translate-x-px -translate-y-px" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gold translate-x-px -translate-y-px" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gold -translate-x-px translate-y-px" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold translate-x-px translate-y-px" />

          <p className="label-en text-center tracking-[0.3em] mb-8">Begin your reconstruction</p>

          <h2 className="font-noto text-2xl md:text-5xl font-light text-offwhite tracking-widest leading-tight text-center mb-8">
            テクニックを捨て、<br /><span className="text-gradient-gold">本物の自分</span>になる。
          </h2>

          <p className="font-noto text-muted/60 text-base leading-loose tracking-wider text-center max-w-lg mx-auto mb-12">
            変わるのに、遅すぎることはない。<br />
            40代だからこそ、今が最も深く変われるタイミングだ。
          </p>

          <div className="flex justify-center">
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-gold hover:bg-gold/90 text-bg font-noto text-base tracking-widest px-12 py-5 transition-colors duration-300 group"
            >
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.346 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
              LINE登録で無料特典を受け取る
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>

          <p className="font-noto text-muted/40 text-xs text-center tracking-widest mt-6">
            ※ 10日間限定・先着20名様 ／ 勧誘・セールス一切なし
          </p>
        </div>
      </div>
    </section>
  );
}
