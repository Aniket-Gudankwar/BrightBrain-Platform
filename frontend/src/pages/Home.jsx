import Hero from "../components/home/Hero";
import StatsSection from "../components/home/StatsSection";
import ServicesSection from "../components/home/ServicesSection";
import AboutSection from "../components/about/AboutSection";
import ProjectsSection from "../components/projects/ProjectsSection";
import Portfolio from "../components/portfolio/Portfolio";
import TestimonialsSection from "../components/testimonials/TestimonialsSection";
import PricingSection from "../components/pricing/PricingSection";
import FaqSection from "../components/faq/FaqSection";
import ContactSection from "../components/contact/ContactSection";

function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <AboutSection />
      <ProjectsSection />
      <Portfolio />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}

export default Home;