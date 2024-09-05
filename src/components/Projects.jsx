import { motion } from "framer-motion"
// import project1 from "../assets/projects/project-1.jpg";
// import project2 from "../assets/projects/project-2.jpg";
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
            <div className="flex justify-center w-auto m-8">
              <div className="bg-black border border-neutral-800 w-96 h-96 rounded-md">
                <div className="p-8">
                  <h3 className="text-2xl mb-2">Ignite Feed</h3>
                  <p>Aplicação desenvolvida para simular um feed de rede social, introduzindo interatividades</p>
                </div>
                <div className="flex justify-center">
                  <a href="#" className="flex items-center hover:bg-neutral-800 rounded-md">
                    <button className="text-2xl">
                      <FiExternalLink />
                    </button>
                  </a>
                  <a href="#" className="flex items-center hover:bg-neutral-800 rounded-md">
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