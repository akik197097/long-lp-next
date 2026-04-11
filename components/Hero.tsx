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
          <h1 className="font-noto text-4xl md:text-6xl font-light text-offwhite leading-tight tracking-widest mb-8">
            テクニックをいくら学んでも、<br />
            <span className="text-gradient-gold font-medium">女性からモテることはなかった。</span>
          </h1>

          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-gold/50" />
            <p className="font-cormorant italic text-muted text-lg tracking-wide">
              The more I chased connection, the more it slipped away.
            </p>
          </div>

          <p className="font-noto text-offwhite/60 text-base leading-loose tracking-wider mb-12 max-w-lg">
            正しいと信じてやってきた。アプローチも、会話術も、自己投資も。
            それでも、何かが根本的にズレていた。
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
