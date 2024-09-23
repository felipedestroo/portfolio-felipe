import { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {
  GlobeIcon,
} from '@radix-ui/react-icons';
import { IoMdCheckmark } from 'react-icons/io';
import logo from "../assets/FdLogoWhite.png";
import i18n from 'i18next';

const LanguageItem = ({ language, onClick, isSelected }) => {
  return (
    <li
      className={`px-4 py-2 hover:bg-neutral-800 cursor-pointer transition rounded-md ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <div className="flex flex-shrink-0 items-center w-28">
        {language}
        {isSelected && <IoMdCheckmark className="ml-2" />}
      </div>
    </li>
  );
};

LanguageItem.propTypes = {
  language: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

const Navbar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const { t } = useTranslation();

  const handleChangeLanguage = (language) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
  };

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-0 text-3xl">
        <a href="https://www.linkedin.com/in/felipedestro/"
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
          <DropdownMenu.Root>
            <button
              className="hover:bg-neutral-800 w-10 h-10 flex justify-center items-center rounded-md transition"
              aria-label="Customise options"
            >
              <GlobeIcon />
            </button>
            <DropdownMenu.Portal>
              <DropdownMenu.Content className="absolute right-0 mt-2 w-26 bg-neutral-900 rounded-md shadow-lg z-10">
                <ul className="py-1 px-1 text-white text-lg">
                  <LanguageItem
                    language={t('English')}
                    onClick={() => handleChangeLanguage('en')}
                    isSelected={selectedLanguage === 'en'}
                  />
                  <LanguageItem
                    language={t('Português')}
                    onClick={() => handleChangeLanguage('pt')}
                    isSelected={selectedLanguage === 'pt'}
                  />
                </ul>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;