import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import Contact from '@/components/Contact';
import BottomSection from '@/components/BottomSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Character from '@/components/Character';

export default function Home() {
  return (
    <div className="relative z-10">
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <Stats />
        <Services />
        <WhyUs />
        <Contact />
        <BottomSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <Character />
    </div>
  );
}
