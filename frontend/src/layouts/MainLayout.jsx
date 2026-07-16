import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import BackToTop from "../components/common/BackToTop";
import ScrollProgress from "../components/common/ScrollProgress";
import FloatingWhatsApp from "../components/common/FloatingWhatsApp";

function MainLayout({ children }) {
  return (
    <>
      <ScrollProgress />
      <BackToTop />
      <Navbar />

      <main>{children}</main>

      <FloatingWhatsApp />
      <Footer />
    </>
  );
}

export default MainLayout;