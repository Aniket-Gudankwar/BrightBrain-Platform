import Navbar from "./components/navbar/Navbar";
import Hero from "./components/home/Hero";
import ServicesSection from "./components/home/ServicesSection";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServicesSection />
      </main>
    </>
  );
}

export default App;