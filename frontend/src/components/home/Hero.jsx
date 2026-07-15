import "./hero.css";

function Hero() {

  const scrollToSection = (sectionId) => {

    const section =
      document.getElementById(sectionId);

    if (section) {

      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

    }

  };


  return (

    <section
      className="hero"
      id="home"
    >

      <div
        className="hero-left"
        data-aos="fade-right"
      >

        <p className="hero-tag">
          Welcome to BrightBrain
        </p>


        <h1 data-aos="fade-up">

          Academic & <br />

          Project Solutions

        </h1>


        <p
          className="hero-description"
          data-aos="fade-up"
          data-aos-delay="150"
        >

          Complete Academic Support for

          CSE, IT, AI, ML and Data Science Students.

        </p>


        <div
          className="hero-buttons"
          data-aos="fade-up"
          data-aos-delay="300"
        >

          <button
            className="btn-primary"
            type="button"
            onClick={() =>
              scrollToSection("services")
            }
          >

            Explore Services

          </button>


          <button
            className="btn-secondary"
            type="button"
            onClick={() =>
              scrollToSection("contact")
            }
          >

            Contact Us

          </button>

        </div>

      </div>


      <div
        className="hero-right"
        data-aos="fade-left"
      >

        <img
          src="/src/assets/hero-tech-workspace.png"
          alt="Academic, research and technology solutions"
        />

      </div>

    </section>

  );

}

export default Hero;