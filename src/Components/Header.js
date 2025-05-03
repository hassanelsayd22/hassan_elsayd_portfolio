import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { socialMediaUrl } from "../Details";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { linkdein, github } = socialMediaUrl;

  const toggleClass = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/30 dark:bg-dark-mode/30 backdrop-blur-xl border-b border-gray-200/10 dark:border-gray-800/10">
      <div className="container mx-auto max-width">
        <div className="flex justify-between items-center py-4 px-4 md:px-6">
          <NavLink
            to="/"
            className="text-4xl text-gradient font-bold hover:scale-110 transition-transform duration-300"
          >
            💻
          </NavLink>
          <button
            onClick={toggleClass}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="stroke-dark-heading dark:stroke-white"
              width="25"
              height="20"
              viewBox="0 0 16 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.4375 1.3125H14.5625M1.4375 11.3125H14.5625H1.4375ZM1.4375 6.3125H14.5625H1.4375Z"
                strokeWidth="1.875"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <nav className="hidden md:flex items-center space-x-8">
            <ul className="flex items-center space-x-8">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block transition-colors duration-300 ${
                      isActive
                        ? "text-gradient font-bold"
                        : "text-dark-heading dark:text-light-heading"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block transition-colors duration-300 ${
                      isActive
                        ? "text-gradient font-bold"
                        : "text-dark-heading dark:text-light-heading"
                    }`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/technologies"
                  className={({ isActive }) =>
                    `block transition-colors duration-300 ${
                      isActive
                        ? "text-gradient font-bold"
                        : "text-dark-heading dark:text-light-heading"
                    }`
                  }
                >
                  Technologies
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    `block transition-colors duration-300 ${
                      isActive
                        ? "text-gradient font-bold"
                        : "text-dark-heading dark:text-light-heading"
                    }`
                  }
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block  transition-colors duration-300 ${
                      isActive
                        ? "text-gradient font-bold"
                        : "text-dark-heading dark:text-light-heading"
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>

            <div className="flex items-center space-x-4 ml-8">
              <NavLink
                to="/cv"
                rel="noreferrer noopener"
                className={({ isActive }) =>
                  `p-2 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors ${
                    isActive ? "bg-gradient" : ""
                  }`
                }
              >
                <svg
                  className="stroke-dark-heading dark:stroke-white"
                  fill="none"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="white"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                  />
                </svg>
              </NavLink>
              <a
                href={linkdein}
                target="_blank"
                rel="noreferrer noopener"
                className="p-2 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors"
              >
                <svg
                  className="stroke-dark-heading dark:stroke-white"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.16667 6.66667H6.66667V15.8333H4.16667V6.66667ZM5.41667 2.5C6.25 2.5 6.66667 2.91667 6.66667 3.75C6.66667 4.58333 6.25 5 5.41667 5C4.58333 5 4.16667 4.58333 4.16667 3.75C4.16667 2.91667 4.58333 2.5 5.41667 2.5ZM8.33333 6.66667H10.8333V7.91667H10.8333C11.25 6.66667 12.5 5.83333 13.75 5.83333C16.25 5.83333 16.6667 7.5 16.6667 9.58333V15.8333H14.1667V10C14.1667 8.75 13.75 8.33333 12.9167 8.33333C11.6667 8.33333 11.25 9.16667 11.25 10V15.8333H8.75V6.66667H8.33333Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <a
                href={github}
                target="_blank"
                rel="noreferrer noopener"
                className="p-2 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors"
              >
                <svg
                  className="stroke-dark-heading dark:stroke-white"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 15.8333C3.33333 17.0833 3.33333 13.75 1.66667 13.3333M13.3333 18.3333V15.1083C13.3646 14.711 13.3109 14.3115 13.1758 13.9365C13.0407 13.5615 12.8274 13.2195 12.55 12.9333C15.1667 12.6417 17.9167 11.65 17.9167 7.1C17.9165 5.93652 17.4689 4.81766 16.6667 3.975C17.0466 2.95409 17.0197 1.8033 16.5917 0.8C16.5917 0.8 15.6083 0.516667 13.3333 1.96667C11.4233 1.34486 9.41 1.34486 7.5 1.96667C5.225 0.516667 4.24167 0.8 4.24167 0.8C3.81361 1.8033 3.78673 2.95409 4.16667 3.975C3.35842 4.82391 2.91045 5.95273 2.91667 7.125C2.91667 11.6417 5.66667 12.6333 8.28333 12.9583C8.00916 13.2417 7.7973 13.5791 7.66203 13.9491C7.52677 14.3191 7.47085 14.7131 7.5 15.1083V18.3333"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden bg-white dark:bg-dark-mode border-t border-gray-200 dark:border-gray-800`}
        >
          <ul className="py-4 px-4 space-y-4">
            <li>
              <NavLink
                to="/"
                onClick={toggleClass}
                className={({ isActive }) =>
                  `block text-dark-heading dark:text-light-heading hover:text-gradient transition-colors duration-300 ${
                    isActive && "text-gradient"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={toggleClass}
                className={({ isActive }) =>
                  `block text-dark-heading dark:text-light-heading hover:text-gradient transition-colors duration-300 ${
                    isActive ? "text-gradient" : ""
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/technologies"
                onClick={toggleClass}
                className="block text-dark-heading dark:text-light-heading hover:text-gradient transition-colors duration-300"
                activeClassName="text-gradient"
              >
                Technologies
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                onClick={toggleClass}
                className="block text-dark-heading dark:text-light-heading hover:text-gradient transition-colors duration-300"
                activeClassName="text-gradient"
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={toggleClass}
                className="block text-dark-heading dark:text-light-heading hover:text-gradient transition-colors duration-300"
                activeClassName="text-gradient"
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cv"
                onClick={toggleClass}
                className="block text-dark-heading dark:text-light-heading hover:text-gradient transition-colors duration-300"
                activeClassName="text-gradient"
              >
                📃
              </NavLink>
            </li>
          </ul>
          <div className="flex justify-center space-x-6 py-4 border-t border-gray-200 dark:border-gray-800">
            <a
              href={linkdein}
              target="_blank"
              rel="noreferrer noopener"
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <svg
                className="dark:fill-light-heading fill-dark-heading hover:scale-110 transition-transform duration-300"
                width="24"
                height="24"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15 0.599976C7.04701 0.599976 0.600006 7.04698 0.600006 15C0.600006 22.953 7.04701 29.4 15 29.4C22.953 29.4 29.4 22.953 29.4 15C29.4 7.04698 22.953 0.599976 15 0.599976ZM11.475 20.9685H8.55901V11.5845H11.475V20.9685ZM9.99901 10.4325C9.07801 10.4325 8.48251 9.77997 8.48251 8.97297C8.48251 8.14948 9.09601 7.51648 10.0365 7.51648C10.977 7.51648 11.553 8.14948 11.571 8.97297C11.571 9.77997 10.977 10.4325 9.99901 10.4325ZM22.125 20.9685H19.209V15.768C19.209 14.5575 18.786 13.7355 17.7315 13.7355C16.926 13.7355 16.4475 14.292 16.236 14.8275C16.158 15.018 16.1385 15.288 16.1385 15.5565V20.967H13.221V14.577C13.221 13.4055 13.1835 12.426 13.1445 11.583H15.678L15.8115 12.8865H15.87C16.254 12.2745 17.1945 11.3715 18.768 11.3715C20.6865 11.3715 22.125 12.657 22.125 15.42V20.9685Z" />
              </svg>
            </a>
            <a
              href={github}
              target="_blank"
              rel="noreferrer noopener"
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <svg
                className="dark:fill-light-heading fill-dark-heading hover:scale-110 transition-transform duration-300"
                width="24"
                height="24"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15 0C6.7125 0 0 6.7125 0 15C0 21.6375 4.29375 27.2437 10.2563 29.2313C11.0063 29.3625 11.2875 28.9125 11.2875 28.5188C11.2875 28.1625 11.2688 26.9813 11.2688 25.725C7.5 26.4188 6.525 24.8062 6.225 23.9625C6.05625 23.5312 5.325 22.2 4.6875 21.8438C4.1625 21.5625 3.4125 20.8687 4.66875 20.85C5.85 20.8313 6.69375 21.9375 6.975 22.3875C8.325 24.6562 10.4812 24.0187 11.3438 23.625C11.475 22.65 11.8688 21.9937 12.3 21.6187C8.9625 21.2437 5.475 19.95 5.475 14.2125C5.475 12.5813 6.05625 11.2313 7.0125 10.1813C6.8625 9.80625 6.3375 8.26875 7.1625 6.20625C7.1625 6.20625 8.41875 5.8125 11.2875 7.74375C12.4875 7.40625 13.7625 7.2375 15.0375 7.2375C16.3125 7.2375 17.5875 7.40625 18.7875 7.74375C21.6562 5.79375 22.9125 6.20625 22.9125 6.20625C23.7375 8.26875 23.2125 9.80625 23.0625 10.1813C24.0188 11.2313 24.6 12.5625 24.6 14.2125C24.6 19.9688 21.0938 21.2437 17.7563 21.6187C18.3 22.0875 18.7688 22.9875 18.7688 24.3937C18.7688 26.4 18.75 28.0125 18.75 28.5188C18.75 28.9125 19.0312 29.3813 19.7812 29.2313C22.759 28.2259 25.3465 26.3121 27.1796 23.7592C29.0127 21.2063 29.9991 18.1429 30 15C30 6.7125 23.2875 0 15 0Z"
                />
              </svg>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
