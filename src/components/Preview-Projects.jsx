import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { RiTailwindCssFill, RiJavascriptFill, RiReactjsFill, RiNextjsFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaCss3Alt } from "react-icons/fa";
import project1 from "../assets/projects/IgniteProject.jpg";
import project2 from "../assets/projects/PortfolioProject.jpg";
import project3 from "../assets/projects/MegazordProject.jpg"
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects">
      <div className="border-b border-neutral-900 pb-4">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="my-20 text-center text-4xl"
        >
          {t("projects.title")}
        </motion.h2>
        <div className="grid min-h-[50vh] w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 3xl:py-12">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-lg relative mx-auto flex h-full max-w-[30rem] flex-col justify-between border border-neutral-800"
          >
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="tracking-tight text-2xl font-semibold 3xl:text-3xl 4xl:text-4xl">
                Ignite Feed
              </h3>
              <p className="text-muted-foreground text-base font-medium 3xl:text-lg 4xl:text-xl">
                {t("projects.descIgnite")}
              </p>
            </div>
            <div className="relative p-6 pt-0">
              <div className="relative">
                <img
                  src={project1}
                  alt="Foto do Projeto Ignite Feed"
                  className="border border-neutral-800 rounded-md mt-4 mb-6 w-full"
                />
                <div className="absolute inset-0 bg-orange-200 opacity-0 hover:opacity-90 transition-opacity duration-500 flex justify-center items-center rounded-md">
                  <div className="flex space-x-4 text-4xl text-orange-500">
                    <RiReactjsFill />
                    <BiLogoTypescript />
                    <FaCss3Alt />
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <a
                  href="https://ignite-feed-felipedestrooo.vercel.app/"
                  target="_blank"
                  className="flex items-center hover:text-orange-500 rounded-md"
                >
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-xl font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-10 w-10">
                    <FiExternalLink />
                  </button>
                </a>
                <a
                  href="https://github.com/felipedestroo/ignite-feed"
                  target="_blank"
                  className="flex items-center hover:text-orange-500 rounded-md"
                >
                  <button className="inline-flex items-center justify-center whitespace-nowrap text-xl font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-10 w-10">
                    <FiGithub />
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-lg relative mx-auto flex h-full max-w-[30rem] flex-col justify-between border border-neutral-800"
          >
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="tracking-tight text-2xl font-semibold 3xl:text-3xl 4xl:text-4xl">
                Personal Portfolio
              </h3>
              <p className="text-muted-foreground text-base font-medium 3xl:text-lg 4xl:text-xl">
                {t("projects.descPortfolio")}
              </p>
            </div>
            <div className="relative p-6 pt-0">
              <div className="relative">
                <img
                  src={project2}
                  alt="Foto do Projeto Personal Portfolio"
                  className="border border-neutral-800 rounded-md mt-4 mb-6 w-full"
                />
                <div className="absolute inset-0 bg-orange-200 opacity-0 hover:opacity-90 transition-opacity duration-500 flex justify-center items-center rounded-md">
                  <div className="flex space-x-4 text-4xl text-orange-500">
                    <RiReactjsFill />
                    <RiJavascriptFill />
                    <RiTailwindCssFill />
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <a
                  href="https://fdestro.vercel.app/"
                  target="_blank"
                  className="flex items-center hover:text-orange-500 rounded-md"
                >
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-xl font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-10 w-10">
                    <FiExternalLink />
                  </button>
                </a>
                <a
                  href="https://github.com/felipedestroo/portfolio-felipe"
                  target="_blank"
                  className="flex items-center hover:text-orange-500 rounded-md"
                >
                  <button className="inline-flex items-center justify-center whitespace-nowrap text-xl font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-10 w-10">
                    <FiGithub />
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-lg relative mx-auto flex h-full max-w-[30rem] flex-col justify-between border border-neutral-800"
          >
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="tracking-tight text-2xl font-semibold 3xl:text-3xl 4xl:text-4xl">
                Woodie Flowers
              </h3>
              <p className="text-muted-foreground text-base font-medium 3xl:text-lg 4xl:text-xl">
                {t("projects.descWf")}
              </p>
            </div>
            <div className="relative p-6 pt-0">
              <div className="relative">
                <img
                  src={project3}
                  alt="Foto do Projeto Woodie Flowers"
                  className="border border-neutral-800 rounded-md mt-4 mb-6 w-full"
                />
                <div className="absolute inset-0 bg-orange-200 opacity-0 hover:opacity-95 transition-opacity duration-500 flex justify-center items-center rounded-md">
                  <div className="flex space-x-4 text-4xl text-orange-500">
                    <RiNextjsFill />
                    <RiReactjsFill />
                    <BiLogoTypescript />
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <a href="https://megazord-five.vercel.app/" target="_blank" className="flex items-center hover:text-orange-500 rounded-md">
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-xl font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-10 w-10">
                    <FiExternalLink />
                  </button>
                </a>
                <a href="https://github.com/giovannivicentin/megazord" target="_blank" className="flex items-center hover:text-orange-500 rounded-md">
                  <button className="inline-flex items-center justify-center whitespace-nowrap text-xl font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-10 w-10">
                    <FiGithub />
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="flex justify-center py-4">
          <Link to="/projects" className="flex justify-center items-center bg-orange-500 rounded-md w-32 h-8 text-center hover:bg-orange-600 transition font-semibold text-sm">{t("projects.button")}</Link>
        </div>
      </div>
    </section>
  );
}

export default Projects;
