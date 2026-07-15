import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

import "./footer.css";

const currentYear = new Date().getFullYear();

const whatsappLink =
  "https://wa.me/919011247245?text=" +
  encodeURIComponent(
    "Hello BrightBrain, I would like to know more about your services."
  );

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-main">
          {/* Brand */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              Bright<span>Brain</span>
            </a>

            <p>
              Academic, research and technology solutions designed to
              transform ideas into practical, reliable and scalable outcomes.
            </p>

            <div className="footer-connect">
              <a
                href="https://www.linkedin.com/in/aniket-gudankwar-asg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://github.com/Aniket-Gudankwar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.instagram.com/inkbleedssilence"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h3>Quick Links</h3>

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h3>Our Services</h3>

            <a href="#services">Academic Projects</a>
            <a href="#services">Research Support</a>
            <a href="#services">Web Development</a>
            <a href="#services">Mobile Applications</a>
            <a href="#services">AI & ML Solutions</a>
            <a href="#services">Software Development</a>
          </div>

          {/* Contact */}
          <div className="footer-column footer-contact">
            <h3>Get in Touch</h3>

            <a href="mailto:brightbrainsolutions.in@gmail.com">
              <FaEnvelope />
              <span>brightbrainsolutions.in@gmail.com</span>
            </a>

            <a href="tel:+919011247245">
              <FaPhoneAlt />
              <span>+91 90112 47245</span>
            </a>

            <div>
              <FaMapMarkerAlt />
              <span>Maharashtra, India</span>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
              <span>Start a Conversation</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} BrightBrain. All rights reserved.</p>

          <p>Academic • Research • Technology</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;