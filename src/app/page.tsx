import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import ProblemSolution from '@/components/ProblemSolution';
import Stats from '@/components/Stats';

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemSolution />
      <Features />
      <Stats />
      <Footer />
    </main>
  );
}
