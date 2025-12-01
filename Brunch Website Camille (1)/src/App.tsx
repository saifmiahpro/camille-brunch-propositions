import { LoadingAnimation } from './components/LoadingAnimation';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { Menu } from './components/Menu';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <>
      <LoadingAnimation />
      
      <div className="min-h-screen bg-white" id="home">
        <Header />
        
        <main>
          <Hero />
          <Story />
          <Menu />
          <Gallery />
          <Testimonials />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </>
  );
}
