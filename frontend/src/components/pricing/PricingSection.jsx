import {
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

import "./pricing.css";

const pricingPlans = [
  {
    id: 1,
    title: "Basic",
    price: "₹2,999+",
    description:
      "Perfect for students and mini academic projects.",
    features: [
      "Academic Project",
      "Source Code",
      "Documentation",
      "Basic Support",
      "7 Days Delivery",
    ],
    featured: false,
    delay: "0",
  },
  {
    id: 2,
    title: "Professional",
    price: "₹7,999+",
    description:
      "Ideal for research work and complete project delivery.",
    features: [
      "Everything in Basic",
      "Research Paper",
      "Presentation (PPT)",
      "Deployment",
      "Premium Support",
      "Unlimited Revisions",
    ],
    featured: true,
    delay: "150",
  },
  {
    id: 3,
    title: "Enterprise",
    price: "Custom",
    description:
      "Complete business solutions for startups and companies.",
    features: [
      "Website Development",
      "Mobile App",
      "AI Solutions",
      "Dedicated Team",
      "Maintenance",
      "Priority Support",
    ],
    featured: false,
    delay: "300",
  },
];

function PricingSection() {
  return (
    <section
      className="pricing-section"
      id="pricing"
    >
      <div className="pricing-container">

        <div
          className="pricing-header"
          data-aos="fade-up"
        >
          <span className="pricing-tag">
            OUR PRICING
          </span>

          <h2>
            Affordable Plans
            <span> For Every Need</span>
          </h2>

          <p>
            Transparent pricing designed for students,
            researchers, startups and businesses.
          </p>
        </div>

        <div className="pricing-grid">

          {pricingPlans.map((plan) => (

            <div
              key={plan.id}
              className={`pricing-card ${
                plan.featured ? "featured" : ""
              }`}
              data-aos="fade-up"
              data-aos-delay={plan.delay}
            >

              {plan.featured && (
                <div className="popular-badge">
                  MOST POPULAR
                </div>
              )}

              <h3>{plan.title}</h3>

              <h1>{plan.price}</h1>

              <p className="pricing-description">
                {plan.description}
              </p>

              <div className="pricing-features">

                {plan.features.map((feature) => (

                  <div
                    className="feature"
                    key={feature}
                  >
                    <FaCheckCircle />

                    <span>{feature}</span>

                  </div>

                ))}

              </div>

              <button
                className="pricing-btn"
              >
                Get Started

                <FaArrowRight />

              </button>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default PricingSection;