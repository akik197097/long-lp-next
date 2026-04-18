import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Full-bleed background image */}
      <Image
        src="/hero.jpeg"
        alt="AKITO"
        fill
        className="object-cover object-center"
        priority
      />
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-[#0a0a0a]/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/60 to-transparent" />

      {/* Top label */}
      <div className="absolute top-10 left-0 right-0 flex justify-center">
        <p className="label-en tracking-[0.35em]">Male Value Reconstruction Project</p>
      </div>

      {/* Content */}
      <div className="relative z-10 container-lp pb-20 md:pb-28">
        <div className="max-w-2xl">
          <p className="font-noto text-xl md:text-3xl font-medium text-offwhite tracking-tight mb-4 whitespace-nowrap">
            男の在り方再構築プロジェクト
          </p>
          <h1 className="font-noto text-4xl md:text-6xl font-light text-offwhite leading-tight tracking-widest mb-8">
            テクニックから、在り方へ。<br />
            <span className="text-gradient-gold font-medium">追う男から、追われる男へ。</span>
          </h1>

          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-gold/50" />
            <p className="font-cormorant italic text-muted text-lg tracking-wide">
              From chasing to being chosen.
            </p>
          </div>

          <p className="font-noto text-offwhite/60 text-base leading-loose tracking-wider mb-12 max-w-lg">
            マッチングアプリ攻略から女性の扱い方まで、実践的なスキルを全て習得した上で、さらに上を目指す。男の価値を根本から変えるトータルサポート。
          </p>

          <a
            href="#problem"
            className="inline-flex items-center gap-4 group"
          >
            <span className="font-noto text-bg text-sm tracking-widest bg-gold px-10 py-4 group-hover:bg-gold/90 transition-colors duration-300">
              その理由を知る
            </span>
            <span className="text-gold group-hover:translate-x-1 transition-transform duration-300 font-cormorant italic text-xl">→</span>
          </a>
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 opacity-40">
        <div className="w-px h-10 bg-gold animate-pulse" />
        <p className="label-en text-[10px]">scroll</p>
      </div>
    </section>
  );
}
