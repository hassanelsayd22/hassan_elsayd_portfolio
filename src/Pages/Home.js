import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";
import { Link } from "react-router-dom";

function Home() {
  const { name, tagline, img } = personalDetails;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const atcions = useRef();
  const myimageref = useRef();
  const containerRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(containerRef.current, {
      opacity: 0,
      duration: 1,
      ease: "Power3.easeOut",
    })
      .from(
        h11.current,
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "Power3.easeOut",
        },
        "-=0.5"
      )
      .from(
        h12.current,
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "Power3.easeOut",
        },
        "-=0.6"
      )
      .from(
        h13.current,
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "Power3.easeOut",
        },
        "-=0.6"
      )
      .from(
        atcions.current,
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "Power3.easeOut",
        },
        "-=0.6"
      )

      .from(
        myimageref.current,
        {
          scale: 0.8,
          opacity: 0,
          duration: 1,
          ease: "Power3.easeOut",
        },
        "-=1.2"
      );
  }, []);

  return (
    <main className="min-h-[calc(100vh-200px)] flex items-center justify-center">
      <div ref={containerRef} className="container mx-auto max-width section">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1
                ref={h11}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-content"
              >
                Hello, I'm
              </h1>
              <h1
                ref={h12}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient"
              >
                {name}
              </h1>
              <h2
                ref={h13}
                className="text-2xl md:text-3xl lg:text-4xl font-semibold text-content"
              >
                {tagline}
              </h2>
            </div>
            <div className="flex space-x-4" ref={atcions}>
              <Link
                to="/contact"
                className="px-6 py-3 bg-gradient rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
              >
                Get in Touch
              </Link>
              <Link
                to="/projects"
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-content font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                View Projects
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <img
              ref={myimageref}
              className="relative w-full max-w-md mx-auto rounded-full shadow-2xl animate-float"
              src={img}
              alt={name}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
