import React, { useRef, useEffect } from "react";
import Project from "../Components/Project";
import { projectDetails } from "../Details";
import gsap from "gsap";
function Projects() {
  const titleRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    gsap.from(titleRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: "power2.out",
    });

    gsap.from(projectsRef.current, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "ease-in-out",
    });
  }, []);

  return (
    <main className="container mx-auto max-width pt-10 mb-20">
      <section>
        <h1
          ref={titleRef}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold "
        >
          Projects
        </h1>
        <p className="text-content py-2 lg:max-w-3xl mb-8">
          To view more details about each project, please click on the project.
        </p>
        <div
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {React.Children.toArray(
            projectDetails.map((project) => (
              <Project
                title={project.title}
                image={project.image}
                description={project.description}
                techstack={project.techstack}
                previewLink={project.previewLink}
                githubLink={project.githubLink}
              />
            ))
          )}
        </div>
      </section>
    </main>
  );
}

export default Projects;
