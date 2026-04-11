const LINE_URL = "https://line.me/ti/p/@232awhbc";

export default function Footer() {
  return (
    <footer className="border-t border-gold/15 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Brand */}
        <div className="text-center mb-12">
          <p className="font-cormorant italic text-gold text-sm tracking-widest2 mb-2">
            Male Value Reconstruction Project
          </p>
          <p className="font-noto text-offwhite text-lg tracking-widest">男の価値再構築プロジェクト</p>
          <p className="font-cormorant italic text-muted text-sm tracking-widest mt-2">by AKITO</p>
        </div>

        <div className="h-px bg-gold/15 mb-12" />

        {/* Info grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 text-center md:text-left">
          <div>
            <p className="font-cormorant italic text-gold text-xs tracking-widest mb-3">Contact</p>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-noto text-muted text-sm tracking-wider hover:text-offwhite transition-colors"
            >
              LINE: @232awhbc
            </a>
          </div>
          <div>
            <p className="font-cormorant italic text-gold text-xs tracking-widest mb-3">Target</p>
            <p className="font-noto text-muted text-sm tracking-wider">40代以上の男性</p>
          </div>
          <div>
            <p className="font-cormorant italic text-gold text-xs tracking-widest mb-3">Concept</p>
            <p className="font-noto text-muted text-sm tracking-wider">テクニックではなく構造的自己変革</p>
          </div>
        </div>

        <div className="h-px bg-gold/10 mb-8" />

        {/* Legal */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">
          <p className="font-noto text-muted/40 text-xs tracking-widest">
            © 2026 男の価値再構築プロジェクト by AKITO. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-noto text-muted/40 text-xs tracking-wider hover:text-muted transition-colors">
              プライバシーポリシー
            </a>
            <a href="#" className="font-noto text-muted/40 text-xs tracking-wider hover:text-muted transition-colors">
              特定商取引法に基づく表記
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
