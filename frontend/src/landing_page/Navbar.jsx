import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import NavLogo from "../../public/Logos/logo-white.png";

function Navbar() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const scrollToSection = (sectionId) => {
    const drawerCheckbox = document.getElementById("navbar-drawer");
    if (drawerCheckbox && drawerCheckbox.checked) {
      drawerCheckbox.checked = false;
    }

    // Finding the target section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 900);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav
      className="w-full border-b-1 border-b-gray-500"
      style={{ backgroundColor: "#0E0E0E" }}
    >
      <div className="flex justify-between items-center px-4 lg:px-6 py-4 ">
        <Link to="/" className="flex items-center">
          <img src={NavLogo} alt="" />
        </Link>
        {isSmallScreen ? (
          <div className="drawer flex justify-end" id="navbar-drawer" checked>
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div
              className="drawer-content p-3 rounded-sm text-black"
              style={{ backgroundColor: "red" }}
            >
              <label htmlFor="my-drawer" className="drawer-button">
                <RxHamburgerMenu />
              </label>
            </div>
            <div className="drawer-side z-50 w-full">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <div
                className="menu text-base-content min-h-full p-4 w-[80%] flex flex-col justify-center gap-10 items-center"
                style={{ backgroundColor: "#000" }}
              >
                <button>
                  <Link
                    to="/"
                    className="text-white text-sm hover:text-red-500 transition-all duration-300 btn btn-ghost hover:bg-white transition-colors cursor-pointer"
                  >
                    HOME
                  </Link>
                </button>

                <button>
                  {" "}
                  <Link
                    to="/"
                    className="text-white text-sm hover:text-red-500 transition-all duration-300 btn btn-ghost hover:bg-white transition-colors cursor-pointer"
                  >
                    <Link to="/">PREVIOUS EVENTS</Link>
                  </Link>
                </button>
                <button
                  className="text-white text-sm hover:text-red-500 transition-all
              duration-300 btn btn-ghost hover:bg-white transition-colors
              cursor-pointer"
                  onClick={() => scrollToSection("speakers-section")}
                >
                  <Link to="/">SPEAKERS</Link>
                </button>
                <button>
                  <Link
                    to="/team"
                    className="text-white text-sm hover:text-red-500 transition-all duration-300 btn btn-ghost hover:bg-white transition-colors cursor-pointer"
                  >
                    TEAM
                  </Link>
                </button>
                <button
                  className="text-white text-sm hover:text-red-500 transition-all
              duration-300 btn btn-ghost hover:bg-white transition-colors
              cursor-pointer"
                  onClick={() => scrollToSection("about-section")}
                >
                  <Link to="/">ABOUT</Link>
                </button>

                <button>
                  <Link
                    to="/register"
                    className="btn btn-sm bg-[#eb0028] hover:bg-[#d70000] text-white border-none rounded px-4 btn btn-ghost hover:bg-white transition-colors cursor-pointer"
                  >
                    REGISTER
                  </Link>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="md:flex items-center space-x-6">
            <button>
              <Link
                to="/"
                className="text-white text-sm hover:text-red-500 transition-all duration-300 btn btn-ghost hover:bg-white transition-colors cursor-pointer"
              >
                HOME
              </Link>
            </button>

            <button>
              {" "}
              <Link
                to="/"
                className="text-white text-sm hover:text-red-500 transition-all duration-300 btn btn-ghost hover:bg-white transition-colors cursor-pointer"
              >
                PREVIOUS EVENTS
              </Link>
            </button>
            <button
              className="text-white text-sm hover:text-red-500 transition-all
              duration-300 btn btn-ghost hover:bg-white transition-colors
              cursor-pointer"
              onClick={() => scrollToSection("speakers-section")}
            >
              <Link to="/">SPEAKERS</Link>
            </button>
            <button>
              <Link
                to="/team"
                className="text-white text-sm hover:text-red-500 transition-all duration-300 btn btn-ghost hover:bg-white transition-colors cursor-pointer"
              >
                TEAM
              </Link>
            </button>
            <button
              className="text-white text-sm hover:text-red-500 transition-all
              duration-300 btn btn-ghost hover:bg-white transition-colors
              cursor-pointer"
              onClick={() => scrollToSection("about-section")}
            >
              <Link to="/">ABOUT US</Link>
            </button>

            <button>
              <Link
                to="/register"
                className="btn btn-sm bg-[#eb0028] hover:bg-[#d70000] text-white border-none rounded px-4 btn btn-ghost hover:bg-white transition-colors cursor-pointer"
              >
                REGISTER
              </Link>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
