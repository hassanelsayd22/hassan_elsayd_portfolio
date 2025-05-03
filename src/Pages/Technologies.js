import React, { useEffect, useRef } from "react";
import { techStackDetails } from "../Details";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Technologies() {
  const mainRef = useRef(null);
  const cardsRef = useRef([]);
  cardsRef.current = [];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Main heading animation - faster
    gsap.from(mainRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    });

    // Cards animation - faster with shorter delay
    cardsRef.current.forEach((card, index) => {
      gsap.from(card, {
        y: 30,
        opacity: 0,
        duration: 0.3,
        delay: index * 0.05,
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=50",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const {
    html,
    css,
    js,
    react,
    redux,
    tailwind,
    bootstrap,
    mui,
    nextjs,
    vscode,
    git,
    github,
    postman,
    figma,
    turborepo,
    rhf,
    reactQuery,
    ts,
    shadcn,
    cursor,
  } = techStackDetails;

  const frontendTechs = [
    { name: "HTML", icon: html },
    { name: "CSS", icon: css },
    { name: "JavaScript", icon: js },
    { name: "TypeScript", icon: ts },
    { name: "React", icon: react },
    { name: "Next.js", icon: nextjs },
    { name: "Redux", icon: redux },
    { name: "Turborepo", icon: turborepo },
    { name: "Hook form", icon: rhf },
    { name: "React Query", icon: reactQuery },
  ];

  const stylingTechs = [
    { name: "Tailwind CSS", icon: tailwind },
    { name: "Shadcn UI", icon: shadcn },
    { name: "Bootstrap", icon: bootstrap },
    { name: "Material UI", icon: mui },
  ];

  const tools = [
    { name: "VS Code", icon: vscode },
    { name: "Cursor Ai", icon: cursor },
    { name: "Git", icon: git },
    { name: "GitHub", icon: github },
    { name: "Figma", icon: figma },
    { name: "Postman", icon: postman },
  ];

  const TechCard = ({ name, icon }) => {
    const cardRef = useRef(null);
    const spotlightRef = useRef(null);

    const handleMouseMove = (e) => {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.to(spotlightRef.current, {
        x: x,
        y: y,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseEnter = () => {
      gsap.to(cardRef.current, {
        scale: 1.05,
        duration: 0.2,
        ease: "power2.out",
      });
      spotlightRef.current.style.opacity = "1";
    };

    const handleMouseLeave = () => {
      gsap.to(cardRef.current, {
        scale: 1,
        duration: 0.2,
        ease: "power2.out",
      });
      spotlightRef.current.style.opacity = "0";
    };

    return (
      <div
        ref={(el) => {
          addToRefs(el);
          cardRef.current = el;
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="group relative flex flex-col items-center p-6 bg-white dark:bg-dark-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
      >
        <div
          ref={spotlightRef}
          className="absolute w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full pointer-events-none opacity-0 transition-opacity duration-300"
          style={{
            transform: "translate(-50%, -50%)",
            filter: "blur(20px)",
          }}
        />
        <div className="w-16 h-16 mb-4 transition-transform duration-300 group-hover:scale-110 relative z-10">
          <img src={icon} alt={name} className="w-full h-full object-contain" />
        </div>
        <span className="text-dark-heading dark:text-light-heading font-medium relative z-10 text-center">
          {name}
        </span>
      </div>
    );
  };

  return (
    <main className="container mx-auto max-width pt-10 pb-20">
      <section className="mb-12" ref={mainRef}>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I've been working with recently
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-xl text-dark-heading dark:text-light-heading md:text-2xl font-semibold mb-6">
          Frontend Technologies
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {frontendTechs.map((tech) => (
            <TechCard key={tech.name} name={tech.name} icon={tech.icon} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl text-dark-heading dark:text-light-heading md:text-2xl font-semibold mb-6">
          Styling & UI Libraries
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {stylingTechs.map((tech) => (
            <TechCard key={tech.name} name={tech.name} icon={tech.icon} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl text-dark-heading dark:text-light-heading md:text-2xl font-semibold mb-6">
          Development Tools
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {tools.map((tool) => (
            <TechCard key={tool.name} name={tool.name} icon={tool.icon} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Technologies;
