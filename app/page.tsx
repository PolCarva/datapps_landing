import Facets from "@/components/Facets";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col gap-10 md:gap-16">
      <Hero />
      <Facets />
    </main>
  );
}
