import { motion } from "framer-motion";
import "./statsSection.css";

const stats = [
  {
    number: "500+",
    label: "Projects Completed",
  },
  {
    number: "1000+",
    label: "Happy Students",
  },
  {
    number: "99%",
    label: "Client Satisfaction",
  },
  {
    number: "24/7",
    label: "Support",
  },
];

function StatsSection() {
  return (
    <section className="stats-section">
      <div className="stats-container">

        {stats.map((item, index) => (
          <motion.div
            className="stat-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
          >
            <h2>{item.number}</h2>

            <p>{item.label}</p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default StatsSection;