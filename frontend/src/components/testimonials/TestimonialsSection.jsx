import {
  FaQuoteLeft,
  FaStar,
} from "react-icons/fa";

import "./testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Aniket Gudankwar",
    role: "Founder • BrightBrain",
    review:
      "BrightBrain transformed our academic project into a professional solution. The development quality, documentation and support exceeded our expectations.",
    initials: "AG",
    delay: "0",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Research Scholar",
    review:
      "The research guidance and documentation were extremely well structured. Everything was delivered on time with excellent communication.",
    initials: "PS",
    delay: "150",
  },
  {
    id: 3,
    name: "Rahul Patil",
    role: "Startup Founder",
    review:
      "Our complete web solution was delivered with modern UI, clean code and scalable architecture. Highly recommended.",
    initials: "RP",
    delay: "300",
  },
];

function TestimonialsSection() {
  return (
    <section
      className="testimonials-section"
      id="testimonials"
    >
      <div className="testimonials-container">

        <div
          className="testimonials-header"
          data-aos="fade-up"
        >
          <span className="section-tag">
            CLIENT TESTIMONIALS
          </span>

          <h2>
            Trusted By
            <span> Students & Businesses</span>
          </h2>

          <p>
            We believe quality work builds long-term relationships.
            Here's what our clients say about BrightBrain.
          </p>
        </div>

        <div className="testimonials-grid">

          {testimonials.map((item) => (
            <div
              key={item.id}
              className="testimonial-card"
              data-aos="fade-up"
              data-aos-delay={item.delay}
            >

              <div className="quote-icon">
                <FaQuoteLeft />
              </div>

              <div className="rating">

                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} />
                ))}

              </div>

              <p className="review">
                "{item.review}"
              </p>

              <div className="client">

                <div className="avatar">
                  {item.initials}
                </div>

                <div>

                  <h4>{item.name}</h4>

                  <span>{item.role}</span>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default TestimonialsSection;