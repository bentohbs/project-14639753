import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Certification from './components/Certification';
import Services from './components/Services';
import Categories from './components/Categories';
import Onboarding from './components/Onboarding';
import CtaFooter from './components/CtaFooter';

export default function Home() {
  return (
    <div className="bg-background-50 text-foreground-950 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Certification />
        <Services />
        <Categories />
        <Onboarding />
      </main>
      <CtaFooter />
    </div>
  );
}