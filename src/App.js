import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Technologies from "./Pages/Technologies";
import CVPreview from "./Components/CVPreview";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const spotlightRef = useRef(null);

  useEffect(() => {
    gsap.to(spotlightRef.current, {
      scrollTrigger: {
        trigger: "main",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
      backgroundPosition: "50% 100%",
      ease: "none",
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <Router>
      <div className="relative min-h-screen">
        <div
          ref={spotlightRef}
          className="fixed inset-0 -z-10 opacity-20 dark:opacity-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.8) 0%, transparent 70%)",
            filter: "blur(100px)",
            transition: "background-position 0.3s ease-out",
          }}
        />
        <Header />
        <main className="min-h-screen pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/cv" element={<CVPreview />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
