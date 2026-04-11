import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background grid lines */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Gold corner accents */}
      <div className="absolute top-12 left-12 w-16 h-16 border-t border-l border-gold/40" />
      <div className="absolute top-12 right-12 w-16 h-16 border-t border-r border-gold/40" />
      <div className="absolute bottom-12 left-12 w-16 h-16 border-b border-l border-gold/40" />
      <div className="absolute bottom-12 right-12 w-16 h-16 border-b border-r border-gold/40" />

      <div className="relative z-10 w-full max-w-5xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">

        {/* Left: text */}
        <div className="text-center md:text-left order-2 md:order-1">
          <p className="font-cormorant italic text-gold tracking-widest2 text-sm md:text-base mb-8 opacity-80">
            Male Value Reconstruction Project
          </p>

          <h1 className="font-noto text-3xl md:text-4xl lg:text-5xl font-light leading-snug tracking-widest mb-10 text-offwhite">
            テクニックをいくら学んでも、
            <br />
            <span className="text-gradient-gold font-medium">女性からモテることはなかった。</span>
          </h1>

          <div className="flex items-center gap-4 mb-10 justify-center md:justify-start">
            <div className="h-px w-16 bg-gold/40" />
            <div className="w-1.5 h-1.5 rotate-45 bg-gold/60" />
            <div className="h-px w-16 bg-gold/40" />
          </div>

          <p className="font-cormorant italic text-muted text-lg md:text-xl tracking-wide mb-10">
            The more I chased connection, the more it slipped away.
          </p>

          <p className="font-noto text-muted text-base leading-relaxed tracking-wider max-w-md mb-12 mx-auto md:mx-0">
            正しいと信じてやってきた。
            アプローチも、会話術も、自己投資も。それでも、
            <span className="text-offwhite">何かが根本的にズレていた。</span>
          </p>

          <a
            href="#problem"
            className="inline-flex items-center gap-3 font-cormorant italic text-gold tracking-widest text-lg border border-gold/30 px-10 py-4 hover:bg-gold/5 hover:border-gold/60 transition-all duration-500 group"
          >
            その理由を知る
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </div>

        {/* Right: diamond image */}
        <div className="flex items-center justify-center order-1 md:order-2">
          <div className="relative">
            {/* Outer gold ring */}
            <div className="absolute inset-0 rotate-45 border border-gold/30 scale-110" />
            {/* Diamond frame */}
            <div className="w-56 h-56 md:w-72 md:h-72 rotate-45 overflow-hidden border border-gold/50">
              <div className="w-full h-full -rotate-45 scale-[1.42] relative">
                <Image
                  src="/hero.jpeg"
                  alt="AKITO"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            {/* Gold dot accents */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-2 h-2 bg-gold rotate-45" />
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-2 h-2 bg-gold rotate-45" />
            <div className="absolute top-1/2 -left-3 -translate-y-1/2 w-2 h-2 bg-gold rotate-45" />
            <div className="absolute top-1/2 -right-3 -translate-y-1/2 w-2 h-2 bg-gold rotate-45" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-px h-12 bg-gold/60 animate-pulse" />
        <p className="font-cormorant italic text-gold text-xs tracking-widest">scroll</p>
      </div>
    </section>
  );
}
