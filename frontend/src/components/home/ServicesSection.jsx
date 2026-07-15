import {
  FaArrowRight,
  FaBrain,
  FaCode,
  FaFileAlt,
  FaGraduationCap,
  FaLaptopCode,
  FaMobileAlt,
} from "react-icons/fa";

import "./services-section.css";

const services = [
  {
    icon: <FaGraduationCap />,
    number: "01",
    title: "Academic Projects",
    description:
      "Complete guidance and development support for diploma, undergraduate and postgraduate academic projects.",
    features: ["Project Development", "Documentation", "Technical Guidance"],
  },
  {
    icon: <FaFileAlt />,
    number: "02",
    title: "Research Support",
    description:
      "Structured assistance for research papers, thesis, synopsis, technical documentation and reports.",
    features: ["Research Papers", "Thesis & Synopsis", "Technical Reports"],
  },
  {
    icon: <FaLaptopCode />,
    number: "03",
    title: "Web Development",
    description:
      "Modern, responsive and scalable websites developed for businesses, professionals and institutions.",
    features: ["Responsive Design", "Modern UI/UX", "Scalable Solutions"],
  },
  {
    icon: <FaMobileAlt />,
    number: "04",
    title: "Mobile Applications",
    description:
      "User-focused mobile application solutions designed around academic, professional and business requirements.",
    features: ["Modern Interfaces", "Custom Features", "Reliable Experience"],
  },
  {
    icon: <FaBrain />,
    number: "05",
    title: "AI & ML Solutions",
    description:
      "Intelligent and data-driven solutions using artificial intelligence and machine learning technologies.",
    features: ["Machine Learning", "Data Analysis", "AI Integration"],
  },
  {
    icon: <FaCode />,
    number: "06",
    title: "Software Development",
    description:
      "Custom software solutions developed using clean architecture, reliable technologies and scalable code.",
    features: ["Custom Software", "Clean Architecture", "Technical Support"],
  },
];

function ServicesSection() {
  return (
    <section className="services-section" id="services">
      <div className="services-container">

        <div className="services-heading">
          <div className="section-label">
            <span></span>
            Our Expertise
          </div>

          <h2>
            Solutions Built for
            <span> Academic & Technology Success</span>
          </h2>

          <p>
            From academic guidance and research support to modern web,
            mobile, software and AI solutions, we help transform ideas
            into reliable and practical results.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>

              <div className="service-card-top">
                <div className="service-icon">
                  {service.icon}
                </div>

                <span className="service-number">
                  {service.number}
                </span>
              </div>

              <h3>{service.title}</h3>

              <p className="service-description">
                {service.description}
              </p>

              <ul className="service-features">
                {service.features.map((feature) => (
                  <li key={feature}>
                    <span>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="service-link"
                aria-label={`Learn more about ${service.title}`}
              >
                Explore Service
                <FaArrowRight />
              </a>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ServicesSection;