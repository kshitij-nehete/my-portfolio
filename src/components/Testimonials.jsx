import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Jane Doe",
    title: "Product Manager, TechNova",
    quote:
      "Kshitij is a fantastic developer — creative, detail-oriented, and always delivers on time!",
  },
  {
    name: "John Smith",
    title: "Freelance Client",
    quote:
      "Working with Kshitij was a breeze. He turned my vision into a professional web app!",
  },
];

export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section className="px-6 py-16 bg-white dark:bg-gray-900">
      <motion.h2
        className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Testimonials 💬
      </motion.h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-800 dark:text-gray-300 mb-4 italic">
              “{testimonial.quote}”
            </p>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
              — {testimonial.name}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {testimonial.title}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
