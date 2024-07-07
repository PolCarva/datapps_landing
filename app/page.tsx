import Facets from "@/components/Facets";
import Features from "@/components/Features";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col gap-10 md:gap-16">
      <Hero />
      <div className="bg-gradient-to-t from-90% from-white-secondary to-white">
        <Facets />
        <Features />
      </div>
    </main>
  );
}
