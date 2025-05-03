import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import emailjs from "@emailjs/browser";
import { contactDetails, socialMediaUrl } from "../Details";

function Contact() {
  const { email, phone } = contactDetails;
  const { linkdein, github } = socialMediaUrl;
  const contactRef = useRef(null);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    gsap.from(contactRef.current.children, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        {
          publicKey
        }
      );

      if (result.status === 200) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      if (error.message.includes("insufficient authentication scopes")) {
        setSubmitStatus("error");
        console.error(
          "Gmail API Error: Please check your Gmail API permissions in EmailJS dashboard"
        );
      } else {
        setSubmitStatus("error");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="container mx-auto max-width section">
      <div ref={contactRef} className="space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-2xl md:text-3xl lg:text-6xl text-dark-heading dark:text-light-heading font-semibold md:font-bold">
            Let's Connect
          </h1>
          <p className="text-content text-lg md:text-xl max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas or
            opportunities to be part of your visions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-semibold text-dark-heading dark:text-light-heading">
                Get in Touch
              </h2>
              <div className="space-y-4">
                <a
                  href={`mailto:${email}`}
                  className="flex items-center space-x-4 p-4 rounded-xl bg-white dark:bg-dark-card shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-content">Email</p>
                    <p className="text-gradient font-medium">{email}</p>
                  </div>
                </a>

                <a
                  href={`tel:${phone}`}
                  className="flex items-center space-x-4 p-4 rounded-xl bg-white dark:bg-dark-card shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 17.72V20a2 2 0 01-2 2h-1C9.716 22 3 15.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-content">Phone</p>
                    <p className="text-gradient font-medium">{phone}</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-semibold text-dark-heading dark:text-light-heading">
                Follow Me
              </h2>
              <div className="flex space-x-4">
                <a
                  href={linkdein}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="p-4 rounded-xl bg-white dark:bg-dark-card shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <svg
                    className="w-6 h-6 text-dark-heading dark:text-light-heading"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="p-4 rounded-xl bg-white dark:bg-dark-card shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <svg
                    className="w-6 h-6 text-dark-heading dark:text-light-heading"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-dark-heading dark:text-light-heading">
              Send a Message
            </h2>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-content mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-card focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-content mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-card focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-content mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-card focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="Your message"
                ></textarea>
              </div>
              {submitStatus === "success" && (
                <div className="p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-lg">
                  There was an error sending your message. Please try again
                  later.
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 bg-gradient text-white font-medium rounded-lg transition-opacity ${
                  isSubmitting
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:opacity-90"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
