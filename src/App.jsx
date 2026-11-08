import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import ServiceOffers from "./components/ServiceOffers.jsx";
import Services from "./components/Services.jsx";
import WebsiteShowcase from "./components/WebsiteShowcase.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Skills from "./components/Skills.jsx";
import Stats from "./components/Stats.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-light-bg transition-colors duration-300 dark:bg-base-950">
      <a href="#main-content" className="sr-only fixed left-4 top-4 z-[200] rounded-lg bg-light-surface p-3 text-light-text focus:not-sr-only">Skip to content</a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Portfolio featured />
        <ServiceOffers />
        <WebsiteShowcase />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Skills />
        <Stats />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
