import "./hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <p className="hero-tag">
          Welcome to BrightBrain
        </p>

        <h1>
          Academic & <br />
          Project Solutions
        </h1>

        <p className="hero-description">
          Complete Academic Support for
          CSE, IT, AI, ML and Data Science Students.
        </p>

        <div className="hero-buttons">

          <button className="btn-primary">
            Explore Services
          </button>

          <button className="btn-secondary">
            Contact Us
          </button>

        </div>

      </div>

      <div className="hero-right">

        <img
          src="/src/assets/hero-tech-workspace.png"
          alt="Academic, research and technology solutions"
        />

      </div>

    </section>
  );
}

export default Hero;