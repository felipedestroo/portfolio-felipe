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
            <div className="flex pb-4 space-x-6">
                <div className="w-1/3 h-96 bg-black border rounded-md py-2 px-4">
                    <div className="flex flex-col">
                        <h3 className="text-green-500 font-bold py-2">Ignite Feed</h3>
                        <p>Projeto desenvolvido para simular uma rede social com funções de likes e comentários</p>
                    </div>
                </div>
                <div className="w-1/3 h-96 bg-black border rounded-md py-2 px-4">
                    <div className="flex flex-col">
                        <h3 className="text-orange-500 font-bold py-2">Portfolio</h3>
                        <p>Portfolio pessoal para divulgar meus projetos e conteúdos</p>
                    </div>
                </div>
                <div className="w-1/3 h-96 bg-black border rounded-md py-2 px-4">
                    <div className="flex flex-col">
                        <h3 className="text-blue-500 font-bold py-2">Megazord</h3>
                        <p>Aplicativo Web que hospeda minijogos como xadrez, quebra-cabeça, jogo da velha e jogo da memória.</p>
                    </div>
                    <div className="flex justify-between bottom">
                        <button className="border rounded-md w-auto p-2">
                            Saiba mais
                        </button>
                        <div className="flex">
                            <a href="#" className="flex hover:bg-neutral-800 w-8 h-8 rounded-md text-lg">
                            <button className="items-center justify-center m-auto">
                                <FiExternalLink/>
                            </button>
                        </a>
                        <a href="#" className="flex hover:bg-neutral-800 w-8 h-8 rounded-md text-lg">
                            <button className="items-center justify-center m-auto">
                                <FiGithub/>
                            </button>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects