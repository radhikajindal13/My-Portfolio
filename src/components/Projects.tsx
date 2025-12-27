import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Github, ExternalLink } from "lucide-react";

/* ================= PROJECT DATA ================= */

const projects = [
  {
    title: "DietSync — AI-Driven Meal Planning Platform",
    description:
      "Full-stack AI-powered nutrition platform for personalized meal planning, weekly scheduling, and grocery list generation. Built to support 500+ user profiles with secure authentication and optimized backend performance.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Google OAuth",
      "REST APIs",
    ],
    images: [
      "./projects/dietsync-1.png",
      "./projects/dietsync-2.png",
      "./projects/dietsync-3.png",
    ],
    github: "https://github.com/radhikajindal13/DietSync",
    live: "https://dietsync.vercel.app/",
  },
  {
    title: "QuizIT — Scalable Real-Time Quiz Platform",
    description:
      "MERN-based real-time quiz platform supporting 100+ concurrent users. Features role-based authentication, real-time analytics dashboards, and low-latency result processing.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "REST APIs",
      "Vercel",
      "Render",
    ],
    images: [
      "./projects/quizit-1.png",
      "./projects/quizit-2.png",
      "./projects/quizit-3.png"
    ],
    github: "https://github.com/radhikajindal13/quizit",
    live: "https://quizit-six.vercel.app/",
  },
  {
    title: "FlixHub — Movie Discovery & Recommendation Platform",
    description:
      "Scalable movie discovery platform with real-time search, filtering, and genre-based recommendations. Optimized frontend performance using Redux Toolkit and responsive UI design.",
    tech: [
      "React",
      "Redux Toolkit",
      "TMDB API",
      "Material UI",
    ],
    images: [
      "./projects/flixhub-1.png",
      "./projects/flixhub-2.png"
    ],
    github: "https://github.com/radhikajindal13/flixhub",
    live: "https://flixhub-movies.vercel.app/",
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
  
  
  // const [selectedImage, setSelectedImage] = useState<number[]>(
  //   projects.map(() => 0)
  // );
  // const [slideIndex, setSlideIndex] = useState<number[]>(
  //   projects.map(() => 0)
  // );
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setSlideIndex((prev) =>
  //       prev.map((idx, i) => (idx + 1) % projects[i].images.length)
  //     );
  //   }, 4000); // calm & readable
  
  //   return () => clearInterval(interval);
  // }, []);
  const [currentIndex, setCurrentIndex] = useState<number[]>(
    projects.map(() => 0)
  );
  
  const [isResetting, setIsResetting] = useState<boolean[]>(
    projects.map(() => false)
  );
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev.map((idx, i) => {
          const lastIndex = projects[i].images.length - 1;
  
          // If NOT last image → slide forward
          if (idx < lastIndex) {
            return idx + 1;
          }
  
          // If last image → stay (do nothing here)
          return idx;
        })
      );
    }, 4000); // slide every 4s
  
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    currentIndex.forEach((idx, i) => {
      const lastIndex = projects[i].images.length - 1;
  
      if (idx === lastIndex) {
        const timeout = setTimeout(() => {
          setIsResetting((prev) =>
            prev.map((v, j) => (j === i ? true : v))
          );
          setCurrentIndex((prev) =>
            prev.map((v, j) => (j === i ? 0 : v))
          );
  
          // turn animation back on
          setTimeout(() => {
            setIsResetting((prev) =>
              prev.map((v, j) => (j === i ? false : v))
            );
          }, 50);
        }, 3000); // 👈 stays on last image for 3s
  
        return () => clearTimeout(timeout);
      }
    });
  }, [currentIndex]);
    
  
        
  
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
              <div className="space-y-4">
  {/* MAIN IMAGE */}
  <div className="relative overflow-hidden rounded-xl border border-border">
    <div className="relative w-full aspect-[16/9] bg-black/20">
      <motion.div
        className="flex h-full"
        animate={{
          x: `-${currentIndex[index] * 100}%`,
        }}
        transition={
          isResetting[index]
            ? { duration: 0 }
            : { duration: 0.8, ease: "easeInOut" }
        }
      >
        {project.images.map((img) => (
          <div
            key={img}
            className="w-full flex-shrink-0 flex items-center justify-center"
          >
            <img
              src={img}
              alt={project.title}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  </div>

  {/* THUMBNAILS */}
  <div className="flex gap-3">
    {project.images.map((img, imgIndex) => (
      <button
        key={img}
        onClick={() =>
          setCurrentIndex((prev) =>
            prev.map((v, i) => (i === index ? imgIndex : v))
          )
        }
        className={`h-14 w-20 rounded-lg overflow-hidden border transition
          ${
            currentIndex[index] === imgIndex
              ? "border-primary"
              : "border-border opacity-60 hover:opacity-100"
          }`}
      >
        <img
          src={img}
          alt=""
          className="h-full w-full object-contain"
        />
      </button>
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
      {/* <style>{`
        .animate-slide {
          width: 100%;
          animation: slide 12s linear infinite;
        }

        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      `}</style> */}
    </section>
  );
}