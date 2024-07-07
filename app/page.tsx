import Advantages from "@/components/Advantages";
import CTASection from "@/components/CTASection";
import Facets from "@/components/Facets";
import Features from "@/components/Features";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col gap-10 md:gap-16">
      <Hero />
      <div className="bg-transition-white-secondary py-16">
        <Facets />
        <Features />
      </div>
      <Advantages/>
      <CTASection />
    </main>
  );
}
