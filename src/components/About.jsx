import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="px-6 py-16 bg-gray-50 dark:bg-gray-950 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
          About Me
        </h2>{" "}
        <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300 text-lg">
          I'm Kshitij, a Developer who enjoys buildingg modern, responsive, and
          user centric web expriences. I love working with JavaScript, React,
          and AI and latest technologies to create magic on the web ✨
        </p>
      </motion.div>
    </section>
  );
}
