import { motion } from "framer-motion";

const skills = [
  { name: "HTML", icon: "/tech/html.png" },
  { name: "CSS", icon: "/tech/css.png" },
  { name: "JavaScript", icon: "/tech/javascript.png" },
  { name: "Angular", icon: "/tech/angular.png" },
//   { name: "GitHub Copiolet", icon: "/tech/github-copilot.png" },
  { name: "React", icon: "/tech/react.png" },
  { name: "Python", icon: "/tech/python.png" },
  { name: "MongoDB", icon: "/tech/mongodb.png" },
  { name: "GO", icon: "/tech/golang.png" },
];

export default function Skills() {
  return (
    <section className="px-6 py-16 bg-white dark:bg-gray-900 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font bold mb-8 text-gray-800 dark:text-white">
          Tech Stack
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center gap-2"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 object-contain"
              />
              <span className="text-gray-800 dark:text-wrap text-sm font-medium">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
