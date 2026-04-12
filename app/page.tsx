import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import StageMap from "@/components/StageMap";
import Insight from "@/components/Insight";
import MyStory from "@/components/MyStory";
import StructureVsTechnique from "@/components/StructureVsTechnique";
import FiveElements from "@/components/FiveElements";
import FutureVision from "@/components/FutureVision";
import Philosophy from "@/components/Philosophy";
import SelfCheck from "@/components/SelfCheck";
import DiagnosticSession from "@/components/DiagnosticSession";
import Offer from "@/components/Offer";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
import FloatingCta from "@/components/FloatingCta";

export default function Home() {
  return (
    <main className="bg-bg min-h-screen">
      <FloatingCta />
      {/* ① HERO */}
      <Hero />

      <SectionDivider />

      {/* ② PROBLEM */}
      <Problem />

      <SectionDivider />

      {/* ③ STAGE MAP */}
      <StageMap />

      <SectionDivider />

      {/* ④ INSIGHT */}
      <Insight />

      <SectionDivider />

      {/* ⑤ MY STORY */}
      <MyStory />

      <SectionDivider />

      {/* ⑤ STRUCTURE VS TECHNIQUE */}
      <StructureVsTechnique />

      <SectionDivider />

      {/* ⑥ FIVE ELEMENTS */}
      <FiveElements />

      <SectionDivider />

      {/* ⑧ FUTURE VISION */}
      <FutureVision />

      <SectionDivider />

      {/* ⑨ PHILOSOPHY */}
      <Philosophy />

      <SectionDivider />

      {/* ⑩ SELF CHECK */}
      <SelfCheck />

      <SectionDivider />

      {/* ⑪ DIAGNOSTIC SESSION */}
      <DiagnosticSession />

      <SectionDivider />

      {/* ⑫ OFFER */}
      <Offer />

      <SectionDivider />

      {/* ⑬ FINAL CTA */}
      <FinalCta />

      {/* ⑫ FOOTER */}
      <Footer />
    </main>
  );
}
