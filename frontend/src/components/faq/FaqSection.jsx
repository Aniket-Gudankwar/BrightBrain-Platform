import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

import "./faq.css";

const faqData = [
  {
    question: "How long does it take to complete a project?",
    answer:
      "Most academic and software projects are completed within 5–15 working days depending on complexity.",
  },
  {
    question: "Do you provide complete source code?",
    answer:
      "Yes. Every project includes clean, well-structured source code with proper documentation.",
  },
  {
    question: "Can you help with research papers and documentation?",
    answer:
      "Absolutely. We provide synopsis, documentation, IEEE papers, PPTs and complete research assistance.",
  },
  {
    question: "Do you offer website deployment?",
    answer:
      "Yes. We deploy websites on modern cloud platforms like Vercel, Netlify and other hosting providers.",
  },
  {
    question: "How can I contact BrightBrain?",
    answer:
      "You can reach us through WhatsApp, Email or the Contact section available on this website.",
  },
];

function FaqSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">

        <div
          className="faq-header"
          data-aos="fade-up"
        >
          <span>FREQUENTLY ASKED QUESTIONS</span>

          <h2>
            Everything You Need
            <strong> To Know</strong>
          </h2>

          <p>
            Find answers to the most common questions about
            our academic, research and software development
            services.
          </p>
        </div>

        <div className="faq-list">

          {faqData.map((item, index) => (

            <div
              className={`faq-item ${
                active === index ? "active" : ""
              }`}
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >

              <button
                className="faq-question"
                onClick={() =>
                  setActive(
                    active === index ? -1 : index
                  )
                }
              >

                <span>{item.question}</span>

                <FaChevronDown />

              </button>

              <div className="faq-answer">

                <p>{item.answer}</p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default FaqSection;