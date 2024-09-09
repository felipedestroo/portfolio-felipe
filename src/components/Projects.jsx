import { motion } from "framer-motion"
import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
// import project3 from "../assets/projects/project-3.jpg";
import { FiGithub, FiExternalLink } from "react-icons/fi";


function Projects() {
  return (
    <section id="projects">
      <div className="border-b border-neutral-900 pb-4">
          <motion.h2 
              whileInView={{opacity: 1, y: 0}}
              initial={{opacity: 0, y: -100}}
              transition={{duration: 0.5}}
              className="my-20 text-center text-4xl">
              Projetos
          </motion.h2>
          <div className="flex justify-center items-center text-wrap gap-8 lg:w-full m-8">
            <div className="bg-black border border-neutral-800 w-1/2 rounded-md p-6">
              <h3 className="text-2xl mb-2">Ignite Feed</h3>
              <p className="">
                Aplicação desenvolvida para simular um feed de rede social, introduzindo interatividades como comentar, 
                curtir e excluir comentários e proporcionando uma experiência de usuária fluida e agradável.
              </p>
              <div className="flex">
                <img src={project1} alt="Foto do Projeto Ignite Feed" className="border border-neutral-800 rounded-md mt-4 mb-6 w-full"/>
              </div>
              <div className="flex justify-center gap-6">
                <a href="https://ignite-feed-felipedestrooo.vercel.app/" target="_blank" className="flex items-center hover:text-orange-500 rounded-md">
                  <button className="text-2xl">
                    <FiExternalLink />
                  </button>
                </a>
                <a href="https://github.com/felipedestroo/ignite-feed" target="_blank" className="flex items-center hover:text-orange-500 rounded-md">
                  <button className="text-2xl">
                    <FiGithub />
                  </button>
                </a>
              </div>
            </div>
            <div className="bg-black border border-neutral-800 w-1/2 rounded-md p-6">
              <h3 className="text-2xl mb-2">Personal Portfolio</h3>
              <p>
                Site de portfólio pessoal que exibe projetos, habilidades e informações de contato, ideal para 
                destacar competências e facilitar conexões profissionais.
              </p>
              <div className="flex">
                <img src={project2} alt="Foto do Projeto Ignite Feed" className="border border-neutral-800 rounded-md mt-4 mb-6"/>
              </div>
              <div className="flex justify-center gap-6">
                <a href="#" target="_blank" className="flex items-center hover:text-orange-500 rounded-md">
                  <button className="text-2xl">
                    <FiExternalLink />
                  </button>
                </a>
                <a href="#" target="_blank" className="flex items-center hover:text-orange-500 rounded-md">
                  <button className="text-2xl">
                    <FiGithub />
                  </button>
                </a>
              </div>
            </div>    
          </div>
      </div>
    </section>
  )
}

export default Projects