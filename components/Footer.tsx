const LINE_URL = "https://utage-system.com/p/eX5DUD1rEaJW";

export default function Footer() {
  return (
    <footer className="border-t border-gold/15 py-16 px-6">
      <div className="container-lp">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          <div>
            <p className="label-en tracking-[0.3em] mb-2">Male Value Reconstruction Project</p>
            <p className="font-noto text-offwhite text-lg tracking-widest">男の価値再構築プロジェクト</p>
            <p className="font-cormorant italic text-muted/60 text-sm tracking-widest mt-1">by AKITO</p>
          </div>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-gold/30 px-8 py-3 font-noto text-gold text-sm tracking-widest hover:bg-gold/5 transition-colors duration-300"
          >
            LINE: @232awhbc
          </a>
        </div>

        <div className="h-px bg-gold/10 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-noto text-muted/30 text-xs tracking-widest">
            © 2026 男の価値再構築プロジェクト by AKITO.
          </p>
          <div className="flex gap-8">
            <a href="#" className="font-noto text-muted/30 text-xs tracking-wider hover:text-muted/60 transition-colors">プライバシーポリシー</a>
            <a href="#" className="font-noto text-muted/30 text-xs tracking-wider hover:text-muted/60 transition-colors">特定商取引法に基づく表記</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
