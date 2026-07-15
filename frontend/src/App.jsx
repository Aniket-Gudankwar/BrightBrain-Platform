import Navbar from "./components/navbar/Navbar";
import Hero from "./components/home/Hero";
import ServicesSection from "./components/home/ServicesSection";
import AboutSection from "./components/about/AboutSection";
import ProjectsSection from "./components/projects/ProjectsSection";
import Portfolio from "./components/portfolio/Portfolio";
import ContactSection from "./components/contact/ContactSection";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <ServicesSection />
        <AboutSection />
        <ProjectsSection />
        <Portfolio />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}

export default App;