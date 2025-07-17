import { motion } from "framer-motion";

const experiences = [
  {
    company: "Infosys",
    role: "Senior System Engineer",
    period: "Oct 2022 - Mar 2026",
    points: [
      "Developed and maintained responsive web apps using React & Tailwind CSS",
      "Collaborated with designers to build sleek and accessible UIs",
      "Improved page load time by 30% via performance optimization",
    ],
  },
];

export default function Experience() {
  return (
    <section className="px-6 py-16 bg-white dark:bg-gray-900">
      <motion.h2
        className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Experience 💼
      </motion.h2>

      <div className="max-w-4xl mx-auto space-y-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              {exp.role} @ {exp.company}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {exp.period}
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              {exp.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
