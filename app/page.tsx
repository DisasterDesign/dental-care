import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
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
        <About />
        <Services />
        <WhyUs />
        <Testimonials />
        <FAQ />
        <Contact />
        <BottomSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <Character />
    </div>
  );
}
