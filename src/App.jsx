import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Services from "./components/Services.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Skills from "./components/Skills.jsx";
import Stats from "./components/Stats.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-light-bg transition-colors duration-300 dark:bg-base-950">
      <Navbar />
      <main>
        <Hero />
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
