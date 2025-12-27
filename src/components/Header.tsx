import { useState, useEffect } from "react";
import { motion } from "motion/react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 py-4">
        <div className="flex items-center justify-between">
          {/* <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="
              text-2xl md:text-3xl lg:text-4xl
              font-extrabold tracking-tight
              text-primary
              transition-all
            "
          >
            RJ
          </motion.a> */}
          <div className="relative w-15 h-15 flex items-center justify-center bg-gray-900 rounded-2xl border-2 border-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.35)]">
  <span className="font-bold text-3xl text-transparent bg-gradient-to-br from-emerald-400 to-teal-400 bg-clip-text">
    RJ
  </span>
</div>




          <div className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#competencies"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Competencies
            </a>
            <a
              href="#skills"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="px-5 py-2 text-sm font-semibold text-background bg-primary rounded-lg hover:scale-105 transition-all"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
