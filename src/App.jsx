import About from './components/About.jsx';
import Clients from './components/Clients.jsx';
import Contact from './components/Contact.jsx';
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import Services from './components/Services.jsx';

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-pit-black text-white">
      <Navbar />
      <Hero />
      <Services />
      <Clients />
      <About />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
