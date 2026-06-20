"use client";

import { useRef, useState } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function PJVideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const sent = useRef({ start: false, p25: false, p50: false, p75: false, done: false });

  function sendGA(name: string) {
    window.gtag?.("event", name, { video_title: "PJmovie" });
  }

  function handleOverlayClick() {
    videoRef.current?.play();
  }

  function handlePlay() {
    if (!started) setStarted(true);
    if (!sent.current.start) {
      sent.current.start = true;
      sendGA("video_start");
    }
  }

  function handleTimeUpdate() {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    const p = v.currentTime / v.duration;
    if (!sent.current.p25 && p >= 0.25) { sent.current.p25 = true; sendGA("video_progress_25"); }
    if (!sent.current.p50 && p >= 0.50) { sent.current.p50 = true; sendGA("video_progress_50"); }
    if (!sent.current.p75 && p >= 0.75) { sent.current.p75 = true; sendGA("video_progress_75"); }
  }

  function handleEnded() {
    if (!sent.current.done) {
      sent.current.done = true;
      sendGA("video_complete");
    }
  }

  return (
    <div className="container-lp py-12 md:py-16">
      <div className="relative w-full bg-black" style={{ aspectRatio: "16/9" }}>
        <video
          ref={videoRef}
          src="/PJmovie.mp4"
          poster="/moviethumbnail.png"
          controls={started}
          playsInline
          className="w-full h-full"
          onPlay={handlePlay}
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleEnded}
        />
        {!started && (
          <button
            onClick={handleOverlayClick}
            className="absolute inset-0 flex items-center justify-center group"
            aria-label="動画を再生"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-black/60 border-2 border-gold/80 flex items-center justify-center group-hover:bg-black/80 transition-colors duration-300">
              <svg
                className="w-9 h-9 text-gold ml-1.5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
        )}
      </div>
    </div>
  );
}
