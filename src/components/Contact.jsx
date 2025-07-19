import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section className="px-6 py-16 bg-gray-50 dark:bg-gray-950 text-center">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
        Let’s Connect 📬
      </h2>

      <div className="space-y-4">
        <a
          href="mailto:kshitij@example.com"
          className="inline-block text-lg font-medium px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
        >
          📧 Email Me
        </a>

        <div className="flex justify-center gap-6 mt-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-6 w-6 text-gray-800 dark:text-white hover:text-blue-500" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-6 w-6 text-gray-800 dark:text-white hover:text-blue-500" />
          </a>
        </div>
      </div>
    </section>
  );
}
