import { motion } from "framer-motion";

const timeline = [
  {
    year: "2023",
    title: "Started Engineering",
    desc: "B.E. Information Science & Engineering",
  },

  {
    year: "2024",
    title: "Full Stack Development",
    desc: "Built projects using React, Python, MySQL and JavaScript.",
  },

  {
    year: "2025",
    title: "AI & Cyber Security",
    desc: "Developed NeuroShield IDS using Machine Learning.",
  },

  {
    year: "2026",
    title: "DevOps Journey",
    desc: "Learning Linux, Docker, CI/CD, AWS and Kubernetes.",
  },
];

export default function Experience() {
  return (
    <section className="py-40 bg-white">
      <div className="max-w-6xl mx-auto px-8">

        <p className="text-gray-400 text-sm tracking-widest mb-4">
          JOURNEY
        </p>

        <h2 className="text-5xl md:text-7xl font-bold mb-24">
          My Timeline
        </h2>

        <div className="relative border-l-2 border-gray-200 ml-4">

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-16 ml-12 relative"
            >

              <div
                className="
                absolute
                -left-[23px]
                top-1
                w-5
                h-5
                bg-black
                rounded-full
                "
              />

              <span className="text-gray-400">
                {item.year}
              </span>

              <h3 className="text-3xl font-bold mt-2">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-3 max-w-xl">
                {item.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}