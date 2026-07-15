import {
  FaArrowRight,
  FaBrain,
  FaCode,
  FaGraduationCap,
  FaLaptopCode,
  FaMobileAlt,
  FaSearch,
} from "react-icons/fa";

import "./portfolio.css";

const portfolioProjects = [
  {
    id: "01",
    icon: <FaBrain />,
    category: "Artificial Intelligence",
    title: "AI-Based Smart Learning Platform",
    description:
      "An intelligent learning solution designed to provide personalized academic guidance, smart recommendations and data-driven insights.",
    technologies: ["AI", "Machine Learning", "Python"],
    className: "portfolio-card-featured",
  },
  {
    id: "02",
    icon: <FaLaptopCode />,
    category: "Web Development",
    title: "Modern Business Web Platform",
    description:
      "A responsive and scalable digital platform developed with modern technologies, structured interfaces and a user-focused experience.",
    technologies: ["React", "JavaScript", "Responsive UI"],
  },
  {
    id: "03",
    icon: <FaGraduationCap />,
    category: "Academic Project",
    title: "Student Project Management System",
    description:
      "A structured academic platform created to simplify project tracking, documentation, collaboration and student progress management.",
    technologies: ["Java", "MySQL", "Web"],
  },
  {
    id: "04",
    icon: <FaSearch />,
    category: "Research & Data",
    title: "Intelligent Research Analysis",
    description:
      "A research-focused solution for organizing information, analysing structured data and generating meaningful technical insights.",
    technologies: ["Data Analysis", "Research", "Python"],
  },
  {
    id: "05",
    icon: <FaMobileAlt />,
    category: "Mobile Application",
    title: "Smart Service Mobile Application",
    description:
      "A practical mobile application designed with intuitive navigation, useful features and a reliable user experience.",
    technologies: ["Mobile UI", "API", "Database"],
  },
  {
    id: "06",
    icon: <FaCode />,
    category: "Software Development",
    title: "Custom Software Solution",
    description:
      "A scalable software solution built using clean architecture, maintainable development practices and requirement-driven features.",
    technologies: ["Java", "REST API", "MySQL"],
  },
];

function Portfolio() {
  return (
    <section className="portfolio-section" id="portfolio">
      <div className="portfolio-container">

        <div className="portfolio-heading">
          <p className="portfolio-label">
            <span></span>
            SELECTED WORK
          </p>

          <h2>
            Ideas Transformed Into
            <strong> Practical Digital Solutions</strong>
          </h2>

          <p className="portfolio-intro">
            Explore selected academic, research, web, mobile, AI and software
            projects designed with practical thinking, modern technologies and
            reliable development practices.
          </p>
        </div>

        <div className="portfolio-grid">
          {portfolioProjects.map((project) => (
            <article
              className={`portfolio-card ${project.className || ""}`}
              key={project.id}
            >
              <div className="portfolio-card-top">
                <div className="portfolio-icon">
                  {project.icon}
                </div>

                <span className="portfolio-number">
                  {project.id}
                </span>
              </div>

              <p className="portfolio-category">
                {project.category}
              </p>

              <h3>{project.title}</h3>

              <p className="portfolio-description">
                {project.description}
              </p>

              <div className="portfolio-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              <button
                className="portfolio-link"
                type="button"
                aria-label={`View ${project.title}`}
              >
                View Project
                <FaArrowRight />
              </button>
            </article>
          ))}
        </div>

        <div className="portfolio-bottom">
          <p>
            Have an academic, research or technology idea?
          </p>

          <a href="#contact">
            Start Your Project
            <FaArrowRight />
          </a>
        </div>

      </div>
    </section>
  );
}

export default Portfolio;