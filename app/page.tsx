import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Character from '@/components/Character';

export default function Home() {
  return (
    <div className="relative z-10">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <Character />
    </div>
  );
}
