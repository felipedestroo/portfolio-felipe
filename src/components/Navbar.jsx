import logo from "../assets/FdLogoWhite.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { RiGlobalLine } from "react-icons/ri";
import { useState } from "react";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLanguageChange = (language) => {
    console.log(`Idioma selecionado: ${language}`);
    setDropdownOpen(false);
  };

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-0 text-3xl">
        <a
          href="https://www.linkedin.com/in/felipedestro/"
          target="_blank"
          className="hover:bg-neutral-800 w-10 h-10 flex justify-center items-center rounded-md transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/felipedestroo"
          target="_blank"
          className="hover:bg-neutral-800 w-10 h-10 flex justify-center items-center rounded-md transition"
        >
          <FaGithub />
        </a>
        <div className="relative">
          <button
            className="hover:bg-neutral-800 w-10 h-10 flex justify-center items-center rounded-md transition"
            onClick={toggleDropdown}
          >
            <RiGlobalLine />
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-26 bg-neutral-900 rounded-md shadow-lg z-10">
              <ul className="py-1 px-1 text-white text-lg 5">
                <li
                  className="px-4 py-2 hover:bg-neutral-800 cursor-default transition rounded-md"
                  onClick={() => handleLanguageChange("Português")}
                >
                  Português
                </li>
                <li
                  className="px-4 py-2 hover:bg-neutral-800 cursor-default transition rounded-md"
                  onClick={() => handleLanguageChange("Inglês")}
                >
                  English
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
