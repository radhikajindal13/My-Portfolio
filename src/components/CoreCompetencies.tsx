import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Code, Database, Shield, Zap, Layers, Terminal } from "lucide-react";

const competencies = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "End-to-end product development with modern frameworks"
  },
  {
    icon: Layers,
    title: "Backend Architecture",
    description: "Scalable APIs and microservices design"
  },
  {
    icon: Database,
    title: "Scalable Systems",
    description: "Building performant, high-availability systems"
  },
  {
    icon: Shield,
    title: "Authentication & Security",
    description: "Implementing secure, robust authentication flows"
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Making applications faster and more efficient"
  },
  {
    icon: Terminal,
    title: "Problem Solving & DSA",
    description: "Strong algorithmic thinking and data structures"
  }
];

export function CoreCompetencies() {
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
      id="competencies"
      className="py-24 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            What I Do Best
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 tracking-tight">
            Core Competencies
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competencies.map((competency, index) => {
            const Icon = competency.icon;
            return (
              <motion.div
                key={index}
                className="group relative p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:scale-105"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{competency.title}</h3>
                  <p className="text-muted-foreground">{competency.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}