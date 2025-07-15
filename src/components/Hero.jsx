import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import devAnimation from "../assets/dev-lottie.json";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 p-6 bg-white dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center md:text-left"
      >
        <Player
          autoplay
          loop
          src={devAnimation}
          style={{ height: "300px", width: "300px" }}
        ></Player>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center md:text-left"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
          Hi, I'm Kshitij 👋
          <br /> Full Stack Developer
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition"
          >
            🗒️ Download Resume
          </a>
          <a
            href="mailto:kshitijnehete@gmail.com"
            className="px-6 py-3 border-2 border-black dark:border-white text-black dark:text-white rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            📩 Email Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}
