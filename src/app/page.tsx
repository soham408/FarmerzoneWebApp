import HeroSection from '@/components/ui/HeroSection';
import AnimatedTooltipPreview from '@/components/Tooltip';
import Footer from '@/components/ui/Footer';

export default function Home() {
  return (
    <main className="min-h-screen antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <AnimatedTooltipPreview />
      <Footer />
    </main>
  );
}