import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="h-auto bg-[#FEF6EE] px-4 lg:px-16 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <div className="pt-1">
            <img
              src="src/assets/lamp.png"
              alt="img"
              className="h-8 sm:h-12 md:h-16 lg:h-20 xl:h-24 w-auto"
            />
          </div>
          <div>
            <p className="sm:text-xl md:text-base lg:text-lg xl:text-xl text-[#BC3612] font-bold">
              CHINMAYA MISSION VASAI
            </p>
            <p className="text-xs sm:text-xs md:text-xs lg:text-sm xl:text-base font-bold">
              To Give Maximum Happiness To Maximum People
            </p>
            <p className="text-xs sm:text-sm md:text-xs lg:text-sm xl:text-base font-bold">
              For Maximum Time
            </p>
          </div>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden">
          <button
            className="text-[#F47930] focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Button Section for Desktop */}
        <div className="hidden lg:flex flex-wrap items-center space-x-2 lg:space-x-4">
          {["Home", "About Us", "Activities", "Volunteer / Join Us", "Donate", "Contact Us", "Events"].map(
            (item, index) => (
              <button
                key={index}
                className="bg-[#FEEAD6] px-3 py-2 text-xs sm:text-xs md:text-xs lg:text-sm xl:text-lg text-[#F47930] font-bold rounded-3xl"
              >
                {item}
              </button>
            )
          )}
        </div>
      </div>

      {/* Dropdown Menu for Mobile */}
      {isOpen && (
        <div className="lg:hidden bg-[#FEF6EE] px-4 py-4">
          {["Home", "About Us", "Activities", "Volunteer / Join Us", "Donate", "Contact Us", "Events"].map(
            (item, index) => (
              <button
                key={index}
                className="block w-full text-left bg-[#FEEAD6] px-3 py-2 text-sm text-[#F47930] font-bold rounded-3xl mb-2"
              >
                {item}
              </button>
            )
          )}
        </div>
      )}
    </>
  );
};