import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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
      id="about"
      className="py-24 px-6 md:px-12 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <motion.div
        className="max-w-4xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-4">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            About Me
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
          Building the Future,{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            One Line at a Time
          </span>
        </h2>

        <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
          <p>
            I don't just build web apps — I engineer <span className="text-primary font-semibold">scalable, performant systems</span> that solve real problems. With a strong foundation in both <span className="text-foreground font-medium">backend architecture and frontend development</span>, I create full-stack solutions that are as elegant as they are functional.
          </p>

          <p>
            My approach combines <span className="text-foreground font-medium">strong computer science fundamentals</span> with practical, real-world application. From designing robust APIs to crafting intuitive user interfaces, I focus on building products that make a tangible impact.
          </p>

          <p>
            Educated at <span className="text-accent font-semibold">NIT Kurukshetra</span>, I bring a deep understanding of algorithms, data structures, and system design to every project. Whether it's optimizing database queries, implementing secure authentication, or architecting scalable microservices, I thrive on solving complex technical challenges.
          </p>

          <p className="text-foreground font-medium">
            Let's build something extraordinary together.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
