import { motion } from "framer-motion";
import profilePic from "../assets/FelipeDestroProfile.png";
import { useTranslation } from "react-i18next";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  const { t, i18n } = useTranslation();

  const portugueseResume = 'Felipe-Destro-Resume-Pt.pdf';
  const englishResume = 'Felipe-Destro-Resume.pdf';

  const currentLang = i18n.language;

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap justify-between">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Felipe Destro
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Front-End Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {t("hero.text")}
            </motion.p>
            <div className="flex flex-row">
              <motion.a
                variants={container(1.5)}
                initial="hidden"
                animate="visible"
                href={currentLang === "pt" ? portugueseResume : englishResume}
                target="_blank"
                className="mr-3 w-32 justify-center flex bg-orange-600 border-2 border-transparent text-white rounded-md p-2 hover:bg-transparent hover:font-bold hover:text-orange-400 hover:duration-100 hover:border-orange-600 hover:border-2"
              >
                {t("hero.button1")}
              </motion.a>
              <motion.a
                variants={container(1.5)}
                initial="hidden"
                animate="visible"
                href="#projects"
                className="flex w-32 justify-center bg-white border-2 text-neutral-900 rounded-md p-2 hover:bg-transparent hover:font-bold hover:text-white hover:duration-100 hover:border-white hover:border-2"
              >
                {t("hero.button2")}
              </motion.a>
            </div>
          </div>
        </div>
        <div className="w-min lg:w-1/3 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="rounded-md w-auto h-auto lg:border-2 lg:rounded-full"
              src={profilePic}
              alt="Felipe Destro's Profile Picture"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
