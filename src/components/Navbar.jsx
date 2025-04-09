import { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { RiGlobalLine } from "react-icons/ri";
import { IoMdCheckmark } from 'react-icons/io';
import logo from "../assets/FdLogoWhite.png";
import i18n from 'i18next';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Link } from 'react-router-dom';

const LanguageItem = ({ language, onClick, isSelected }) => {
  return (
    <DropdownMenu.Item
      className={`px-3 py-2 hover:bg-neutral-800 cursor-default transition rounded-md flex items-center justify-between w-32 text-base font-medium outline-none`}
      onClick={onClick}
    >
      {language}
      {isSelected && <IoMdCheckmark className="ml-2 text-lg" />}
    </DropdownMenu.Item>
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
        <Link to="/">
          <img className="mx-2 w-20" src={logo} alt="logo" />
        </Link>
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

        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button className="hover:bg-neutral-800 w-10 h-10 flex justify-center items-center rounded-md transition">
              <RiGlobalLine />
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Content className="absolute right-0 mt-2 w-32 bg-neutral-900 rounded-md shadow-lg z-10">
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
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
    </nav>
  );
};

export default Navbar;
