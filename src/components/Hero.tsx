import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";

const phrases = [
  "Full-Stack Developer",
  "Problem Solver",
  "AI & ML Enthusiast"
];

export function Hero() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayedText.length < currentPhrase.length) {
            setDisplayedText(currentPhrase.slice(0, displayedText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayedText.length > 0) {
            setDisplayedText(displayedText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentPhraseIndex]);

  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* MAIN LAYOUT */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 items-center px-4">

        
        {/* LEFT — TEXT (UNCHANGED) */}
        <motion.div
          className="text-center lg:text-left mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="mb-8 space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="text-2xl md:text-3xl font-semibold text-white min-h-[2.5rem] mt-6">

              {displayedText}
              <span className="animate-pulse">|</span>
            </div>

            <div
              className="
                text-5xl md:text-7xl lg:text-8xl
                font-bold tracking-tight
                bg-gradient-to-r from-primary via-accent to-primary
                bg-clip-text text-transparent
              "
            >
              I'm
            </div>

            <h1
  className="
    text-5xl md:text-7xl lg:text-8xl
    font-bold tracking-tight
    text-white
    whitespace-nowrap
  "
>
  Radhika Jindal
</h1>

          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            I engineer scalable, performant systems that solve real problems.
            Building solutions that make a meaningful impact.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-background bg-primary rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
            >
              <span className="relative z-10">Let's Work Together</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-foreground bg-secondary border border-border rounded-lg hover:bg-secondary/80 hover:scale-105 transition-all"
            >
              View My Work
            </a>
          </motion.div>

          <motion.div
            className="flex items-center justify-center lg:justify-start gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <div className="flex gap-4">
              <a
                href="https://github.com/radhikajindal13"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
              </a>

              <a
                href="https://www.linkedin.com/in/radhika-jindal-1b5a7a258/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
              </a>

              <a href="mailto:radhikajindal1329@gmail.com" aria-label="Email">
                <Mail className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            </div>

          </motion.div>
        </motion.div>

        <motion.div
          className="hidden lg:flex flex-col items-center gap-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {/* Profile Image */}
          <img
            src="/img.png"
            alt="Radhika Jindal"
            className="
              w-[320px] h-[320px]
              object-cover
              rounded-full
              border border-border
              shadow-2xl
            "
          />

          {/* Resume Button */}
          <a
            href="/Radhika_Jindal_Resume.pdf"
            download
            className="
              inline-flex items-center justify-center
              px-6 py-3
              text-sm font-semibold
              text-background
              bg-primary
              rounded-lg
              hover:scale-105
              transition-all
              hover:shadow-lg hover:shadow-primary/30
            "
          >
            Download Resume
          </a>
        </motion.div>

      </div>
    </section>
  );
}