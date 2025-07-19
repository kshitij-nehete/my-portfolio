import { motion } from "framer-motion";

const certifications = [
  {
    title: "Full Stack Web Development",
    platform: "Coursera",
    year: "2023",
  },
  {
    title: "Advanced React",
    platfom: "2023",
    year: "2022",
  },
];

export default function Certifications() {
  if (certifications.length === 0) return null;

  return (
    <section className="px-6 py-16 bg-gray-50 dark:bg-gray-950">
      <motion.h2
        className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Certifications 🏅
      </motion.h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {cert.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {cert.platform}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {cert.year}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
