import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Benefits from './components/Benefits';
import Services from './components/Services';
import Showcase from './components/Showcase';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Benefits />
        <Services />
        <Showcase />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
