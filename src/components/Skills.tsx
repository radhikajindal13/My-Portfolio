import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const skillsData = {
  "Programming Languages": ["C++", "Java", "Python", "JavaScript", "SQL"],
  "Web Technologies": ["HTML5", "CSS3", "REST APIs", "Responsive Design", "User-Centered Design"],
  "Frameworks & Libraries": ["React.js", "Node.js", "Express.js"],
  "Databases": ["MongoDB", "MySQL"],
  "Developer Tools": ["Git", "GitHub", "VS Code", "Vercel", "Render", "Cloudinary", "Postman"],
  "CS Fundamentals": [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Operating Systems",
    "Computer Networks",
    "DBMS",
    "Software Engineering"
  ]
};

export function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-24 px-6 md:px-12 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Technical Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 tracking-tight">
            Skills & Technologies
          </h2>
        </motion.div>

        <div className="space-y-12">
          {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-foreground/90">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-secondary border border-border text-foreground hover:border-primary hover:bg-primary/10 transition-all cursor-default"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
