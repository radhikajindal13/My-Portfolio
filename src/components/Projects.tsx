import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Github, ExternalLink } from "lucide-react";

/* ================= PROJECT DATA ================= */

const projects = [
  {
    title: "DietSync — AI Nutrition Platform",
    description:
      "AI-powered personalized meal planning platform based on health conditions, goals, and dietary preferences.",
    tech: ["React", "Node.js", "MongoDB", "ML", "REST APIs"],
    images: [
      "/projects/dietsync-1.png",
      "/projects/dietsync-2.png",
      "/projects/dietsync-3.png",
    ],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Portfolio Website",
    description:
      "Modern, animated personal portfolio built with a focus on performance, accessibility, and clean UI.",
    tech: ["React", "Tailwind CSS", "Motion", "Vercel"],
    images: [
      "/projects/portfolio-1.png",
      "/projects/portfolio-2.png",
    ],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Full-Stack Web Application",
    description:
      "End-to-end web application with authentication, protected routes, and backend integration.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    images: [
      "/projects/app-1.png",
      "/projects/app-2.png",
    ],
    github: "https://github.com",
    live: "https://example.com",
  },
];

/* ================= COMPONENT ================= */

export function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        {/* ===== Heading ===== */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Selected Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Projects
          </h2>
        </motion.div>

        {/* ===== Projects Column Layout ===== */}
        <div className="flex flex-col gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="grid md:grid-cols-2 gap-10 items-center"
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* ===== Image Slider ===== */}
              <div className="relative overflow-hidden rounded-xl border border-border">
                <div className="flex animate-slide">
                  {[...project.images, project.images[0]].map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={project.title}
                      className="w-full flex-shrink-0 object-cover"
                    />
                  ))}
                </div>
              </div>

              {/* ===== Content ===== */}
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-secondary text-foreground/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium hover:text-primary transition"
                  >
                    <Github className="w-4 h-4" /> Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium hover:text-primary transition"
                  >
                    <ExternalLink className="w-4 h-4" /> Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ===== Slider Animation ===== */}
      <style>{`
        .animate-slide {
          width: 100%;
          animation: slide 12s linear infinite;
        }

        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </section>
  );
}
