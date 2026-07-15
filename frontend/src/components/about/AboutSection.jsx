import {
  FaArrowRight,
  FaCheckCircle,
  FaLightbulb,
  FaRocket,
  FaUsers,
} from "react-icons/fa";

import "./about-section.css";

const highlights = [
  "Academic Project Development",
  "Research & Documentation Support",
  "Web, Software & Mobile Solutions",
  "AI, ML & Data-Driven Projects",
];

const statistics = [
  {
    value: "7+",
    label: "Core Services",
  },
  {
    value: "360°",
    label: "Project Support",
  },
  {
    value: "100%",
    label: "Client-Focused",
  },
];

function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        <div className="about-visual">

          <div className="about-main-card">

            <div className="about-card-icon">
              <FaLightbulb />
            </div>

            <p className="about-card-label">
              Ideas to Impact
            </p>

            <h3>
              Building Practical Solutions for Academic & Digital Growth
            </h3>

            <p>
              We combine academic understanding, modern technology and
              structured development to transform ideas into meaningful
              solutions.
            </p>

            <div className="about-technology-tags">
              <span>Academic</span>
              <span>Research</span>
              <span>Software</span>
              <span>AI</span>
            </div>

          </div>

          <div className="about-floating-card about-floating-card-top">
            <div>
              <FaUsers />
            </div>

            <span>
              Client-Focused
              <small>Collaborative approach</small>
            </span>
          </div>

          <div className="about-floating-card about-floating-card-bottom">
            <div>
              <FaRocket />
            </div>

            <span>
              Future-Ready
              <small>Modern technologies</small>
            </span>
          </div>

          <div className="about-decoration about-decoration-one"></div>
          <div className="about-decoration about-decoration-two"></div>

        </div>

        <div className="about-content">

          <div className="about-section-label">
            <span></span>
            About BrightBrain
          </div>

          <h2>
            Where Academic Knowledge Meets
            <span> Modern Technology</span>
          </h2>

          <p className="about-introduction">
            BrightBrain is a growing academic and technology solutions
            platform focused on helping students, researchers,
            professionals and businesses turn ideas into practical,
            reliable and scalable outcomes.
          </p>

          <p className="about-description">
            From academic projects and research documentation to web
            development, software solutions and artificial intelligence,
            our approach combines technical knowledge, clear communication
            and structured execution.
          </p>

          <div className="about-highlights">
            {highlights.map((highlight) => (
              <div className="about-highlight" key={highlight}>
                <FaCheckCircle />
                <span>{highlight}</span>
              </div>
            ))}
          </div>

          <div className="about-statistics">
            {statistics.map((statistic) => (
              <div className="about-stat" key={statistic.label}>
                <strong>{statistic.value}</strong>
                <span>{statistic.label}</span>
              </div>
            ))}
          </div>

          <a href="#contact" className="about-button">
            Discover Our Approach
            <FaArrowRight />
          </a>

        </div>

      </div>
    </section>
  );
}

export default AboutSection;