import { FaWhatsapp } from "react-icons/fa";
import "./floatingWhatsapp.css";

const phoneNumber = "919011247245";

const message = encodeURIComponent(
  "Hello BrightBrain, I would like to know more about your services."
);

function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}

export default FloatingWhatsApp;