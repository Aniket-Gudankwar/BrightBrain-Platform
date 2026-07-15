import {
  FaArrowRight,
  FaBrain,
  FaCloud,
  FaDatabase,
  FaExternalLinkAlt,
  FaJava,
  FaMobileAlt,
  FaShieldAlt,
} from "react-icons/fa";

import "./projects-section.css";

const projects = [
  {
    number: "01",
    category: "Artificial Intelligence",
    title: "AI-Based Personalized Learning Platform",
    description:
      "An intelligent learning platform designed to deliver personalized study recommendations, adaptive content and performance insights.",
    technologies: ["Python", "Machine Learning", "Data Analytics"],
    icon: <FaBrain />,
    featured: true,
  },

  {
    number: "02",
    category: "Machine Learning",
    title: "Sentiment Analysis System",
    description:
      "A machine learning solution that analyzes textual data and identifies positive, negative and neutral user sentiments.",
    technologies: ["Python", "NLP", "Machine Learning"],
    icon: <FaDatabase />,
  },

  {
    number: "03",
    category: "Web Application",
    title: "Secure Mailing System",
    description:
      "A secure communication platform developed with authentication, protected messaging and reliable data management.",
    technologies: ["Java", "JSP", "MySQL"],
    icon: <FaShieldAlt />,
  },

  {
    number: "04",
    category: "Mobile Application",
    title: "VEDAS Mobile Application",
    description:
      "A user-focused mobile solution designed with structured information access, intuitive navigation and practical features.",
    technologies: ["Android", "Mobile UI", "Database"],
    icon: <FaMobileAlt />,
  },

  {
    number: "05",
    category: "Cloud Technology",
    title: "Secure File Storage on Cloud",
    description:
      "A cloud-based platform focused on secure file management, controlled access and reliable digital storage.",
    technologies: ["Cloud", "Security", "Database"],
    icon: <FaCloud />,
  },

  {
    number: "06",
    category: "Java Application",
    title: "Criminal Network Search Engine",
    description:
      "A structured search system designed to organize criminal-network information and retrieve connected records efficiently.",
    technologies: ["Java", "Search System", "Database"],
    icon: <FaJava />,
  },
];

function ProjectsSection() {
  return (
    <section className="projects-section" id="projects">

      <div className="projects-container">

        <div className="projects-heading">

          <div className="projects-heading-content">

            <div className="projects-section-label">
              <span></span>
              Selected Projects
            </div>

            <h2>
              Ideas Transformed into
              <span> Practical Solutions</span>
            </h2>

          </div>

          <div className="projects-heading-description">

            <p>
              Explore selected academic and technology projects developed
              using modern tools, structured methodologies and practical
              problem-solving approaches.
            </p>

            <a href="#portfolio">
              Explore Full Portfolio
              <FaArrowRight />
            </a>

          </div>

        </div>


        <div className="projects-grid">

          {projects.map((project) => (

            <article
              className={`project-card ${
                project.featured
                  ? "project-card-featured"
                  : ""
              }`}
              key={project.title}
            >

              <div className="project-card-top">

                <div className="project-icon">
                  {project.icon}
                </div>

                <span className="project-number">
                  {project.number}
                </span>

              </div>


              <div className="project-category">
                {project.category}
              </div>


              <h3>
                {project.title}
              </h3>


              <p className="project-description">
                {project.description}
              </p>


              <div className="project-technologies">

                {project.technologies.map(
                  (technology) => (

                    <span key={technology}>
                      {technology}
                    </span>

                  )
                )}

              </div>


              <a
                href="#contact"
                className="project-link"
              >

                View Project

                <FaExternalLinkAlt />

              </a>

            </article>

          ))}

        </div>


        <div className="projects-footer">

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

export default ProjectsSection;