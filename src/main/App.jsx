import { About } from '../components/about/About';
import { Footer } from '../components/footer/Footer';
import { Gallery } from '../components/gallery/Gallery';
import { Hero } from '../components/hero/Hero';
import { Products } from '../components/products/Products';
import { Testimonals } from '../components/testimonials/Testimonials';
import './App.scss';

function App() {
  return (
    <main id='App'>
      <Hero />
      <About />
      <Products />
      <Testimonals />
      <Gallery />
      <Footer />
    </main>
  );
}

export default App;
