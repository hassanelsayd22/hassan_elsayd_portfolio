import gsap from "gsap";
import React, { useState, useEffect, useRef } from "react";

function CVPreview() {
  const [isValidLink, setIsValidLink] = useState(null);
  const h11 = useRef();
  const containerRef = useRef();

  const pdfUrl =
    "https://cdn.jsdelivr.net/gh/hassanelsayd22/cv/Hassan_Elsayd_Frontend_Developer_Reactjs_Nextjs.pdf";

  useEffect(() => {
    const checkPDFLink = async () => {
      try {
        const response = await fetch(pdfUrl, { method: "HEAD" });
        if (response.ok) {
          setIsValidLink(true);
        } else {
          setIsValidLink(false);
        }
      } catch (error) {
        setIsValidLink(false);
      }
    };

    checkPDFLink();
  }, [pdfUrl]);

  useEffect(() => {
    gsap.from(h11.current, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: "power2.out",
    });

    gsap.from(containerRef.current, {
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
          ref={h11}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold mb-8"
        >
          Resume
        </h1>

        <div
          ref={containerRef}
          className="bg-white dark:bg-dark-card rounded-xl overflow-hidden shadow-lg"
        >
          <div className="bg-gradient p-6 text-white">
            <h1 className="text-3xl font-bold">Hassan Elsayd</h1>
            <p className="mt-2">React / Next.js Frontend Developer</p>
          </div>
          <div className="p-6">
            <div className="flex justify-center mb-4">
              <div className="shadow-inner w-full">
                {isValidLink === null ? (
                  <div>Loading...</div>
                ) : !isValidLink ? (
                  <div className="text-center p-4 text-red-500">
                    Failed to load PDF. The link may be broken or unavailable.
                  </div>
                ) : (
                  <iframe
                    title="Hassan_Elsayd_Frontend_Developer_Reactjs_Nextjs.pdf"
                    src={pdfUrl}
                    className="w-full h-[600px]"
                    style={{ border: "none" }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default CVPreview;
