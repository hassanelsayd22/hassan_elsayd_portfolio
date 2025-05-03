import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Work from "../Components/Work";
import { personalDetails, workDetails, eduDetails } from "../Details";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const educationRef = useRef(null);

  useEffect(() => {
    gsap.from(".about-content", {
      scrollTrigger: {
        trigger: ".about-content",
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".work-item", {
      scrollTrigger: {
        trigger: ".work-section",
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    });

    gsap.from(".education-item", {
      scrollTrigger: {
        trigger: ".education-section",
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main className="container mx-auto max-width pt-10 pb-20">
      <section ref={aboutRef} className="mb-16">
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold mb-6">
          About Me
        </h1>
        <div className="about-content">
          <p className="text-content py-8 lg:max-w-3xl leading-relaxed">
            {personalDetails.about}
          </p>
        </div>
      </section>

      <section ref={workRef} className="work-section mb-16">
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold mb-6">
          Work Experience
        </h1>
        <div className="space-y-8">
          {React.Children.toArray(
            workDetails.map(
              ({ Position, Company, Location, Type, Duration }) => (
                <div className="work-item">
                  <Work
                    position={Position}
                    company={Company}
                    location={Location}
                    type={Type}
                    duration={Duration}
                  />
                </div>
              )
            )
          )}
        </div>
      </section>

      <section ref={educationRef} className="education-section">
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold mb-6">
          Education
        </h1>
        <div className="space-y-8">
          {React.Children.toArray(
            eduDetails.map(
              ({ Position, Company, Location, Type, Duration }) => (
                <div className="education-item">
                  <Work
                    position={Position}
                    company={Company}
                    location={Location}
                    type={Type}
                    duration={Duration}
                  />
                </div>
              )
            )
          )}
        </div>
      </section>
    </main>
  );
}

export default About;
