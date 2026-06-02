import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import FloatingActions from '@/components/FloatingActions';
import Footer from '@/components/Footer';

import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Categories from '@/components/sections/Categories';
import Compounding from '@/components/sections/Compounding';
import Testimonials from '@/components/sections/Testimonials';
import Location from '@/components/sections/Location';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Categories />
        <Compounding />
        <Testimonials />
        <Location />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
