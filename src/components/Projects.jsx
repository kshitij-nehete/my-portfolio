import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    image: "/projects/project1.png",
    description:
      "A personal portfolio build with React, Tailwind CSS, and Framer Motion",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/kshitij-nehete/my-portfolio",
    dem0: "https://github.com/kshitij-nehete/my-portfolio",
  },
  {
    title: "Portfolio Website 2",
    image: "/projects/project1.png",
    description:
      "A personal portfolio build with React, Tailwind CSS, and Framer Motion",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/kshitij-nehete/my-portfolio",
    dem0: "https://github.com/kshitij-nehete/my-portfolio",
  },
  {
    title: "Portfolio Website 3",
    image: "/projects/project1.png",
    description:
      "A personal portfolio build with React, Tailwind CSS, and Framer Motion",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/kshitij-nehete/my-portfolio",
    dem0: "https://github.com/kshitij-nehete/my-portfolio",
  },
];

export default function Projects() {
  return (
    <section className="px-6 py-16 bg-gray-50 dark:bg-gray-950">
      <motion.h2
        className="text-3xl font-bold mb-10 text-center text-gray-800 dark:text-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden flex flex-col"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tag, i) => (
                  <span
                    key={i}
                    className="text-sm bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-md text-gray-800 dark:text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  className="text-sm font-medium text-white bg-black dark:bg-white dark:text-black px-4 py-2 rounded-lg hover:opacity-80 transition"
                >
                  🔗 GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  className="text-sm font-medium border border-black dark:border-white text-black dark:text-white px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                  🚀 Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
