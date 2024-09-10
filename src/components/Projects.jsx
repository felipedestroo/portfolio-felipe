import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import project1 from "../assets/projects/IgniteProject.jpg";
import project2 from "../assets/projects/PortfolioProject.jpg";
import project3 from "../assets/projects/WfProject.jpg";


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
          <div className="grid min-h-[50vh] w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 3xl:py-12">
            <motion.div
              whileInView={{opacity: 1, x: 0}}
              initial={{opacity: 0, x: 100}}
              transition={{duration: 0.5}}
              className="rounded-lg relative mx-auto flex h-full max-w-[30rem] flex-col justify-between border border-neutral-800">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="tracking-tight text-2xl font-semibold 3xl:text-3xl 4xl:text-4xl">Ignite Feed</h3>
                <p className="text-muted-foreground text-base font-medium 3xl:text-lg 4xl:text-xl">
                  Aplicação desenvolvida para simular um feed de rede social, introduzindo interatividades como comentar, 
                  curtir e excluir comentários e proporcionando uma experiência de usuária fluida e agradável.
                </p>
              </div>
              <div className="p-6 pt-0">
                <div className="flex flex-col justify-between gap-4">
                  <img src={project1} alt="Foto do Projeto Ignite Feed" className="border border-neutral-800 rounded-md mt-4 mb-6 w-full"/>
                  <div className="flex justify-center">
                    <a href="https://ignite-feed-felipedestrooo.vercel.app/" target="_blank" className="flex items-center hover:text-orange-500 rounded-md">
                      <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-xl font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-10 w-10">
                        <FiExternalLink />
                      </button>
                    </a>
                    <a href="https://github.com/felipedestroo/ignite-feed" target="_blank" className="flex items-center hover:text-orange-500 rounded-md">
                      <button className="inline-flex items-center justify-center whitespace-nowrap text-xl font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-10 w-10">
                        <FiGithub />
                      </button>
                    </a>
                  </div>
                </div>
              </div> 
            </motion.div>
            <motion.div
              whileInView={{opacity: 1, x: 0}}
              initial={{opacity: 0, x: 100}}
              transition={{duration: 0.5}}
              className="rounded-lg relative mx-auto flex h-full max-w-[30rem] flex-col justify-between border border-neutral-800">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="tracking-tight text-2xl font-semibold 3xl:text-3xl 4xl:text-4xl">Personal Portfolio</h3>
                <p className="text-muted-foreground text-base font-medium 3xl:text-lg 4xl:text-xl">
                  Site de portfólio pessoal que exibe projetos, habilidades e informações de contato, 
                  ideal para destacar competências e facilitar conexões profissionais.
                </p>
              </div>
              <div className="p-6 pt-0">
                <div className="flex flex-col justify-between gap-4">
                  <img src={project2} alt="Foto do Projeto Ignite Feed" className="border border-neutral-800 rounded-md mt-4 mb-6 w-full"/>
                  <div className="flex justify-center">
                    <a href="#" target="_blank" className="flex items-center hover:text-orange-500 rounded-md">
                      <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-xl font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-10 w-10">
                        <FiExternalLink />
                      </button>
                    </a>
                    <a href="https://github.com/felipedestroo/portfolio-felipe" target="_blank" className="flex items-center hover:text-orange-500 rounded-md">
                      <button className="inline-flex items-center justify-center whitespace-nowrap text-xl font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-10 w-10">
                        <FiGithub />
                      </button>
                    </a>
                  </div>
                </div>
              </div> 
            </motion.div>
            <motion.div
              whileInView={{opacity: 1, x: 0}}
              initial={{opacity: 0, x: 100}}
              transition={{duration: 0.5}}
              className="rounded-lg relative mx-auto flex h-full max-w-[30rem] flex-col justify-between border border-neutral-800">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="tracking-tight text-2xl font-semibold 3xl:text-3xl 4xl:text-4xl">Woodie Flowers</h3>
                <p className="text-muted-foreground text-base font-medium 3xl:text-lg 4xl:text-xl">
                  Aplicativo Web que hospeda minijogos como xadrez, quebra-cabeça, jogo da velha e quadro branco, 
                  proporcionando uma plataforma digital interativa para os usuários se divertirem.
                </p>
              </div>
              <div className="p-6 pt-0">
                <div className="flex flex-col justify-between gap-4">
                  <img src={project3} alt="Foto do Projeto Ignite Feed" className="border border-neutral-800 rounded-md mt-4 mb-6 w-full"/>
                  <div className="flex justify-center">
                    <a href="#" target="_blank" className="flex items-center hover:text-orange-500 rounded-md">
                      <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-xl font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-10 w-10">
                        <FiExternalLink />
                      </button>
                    </a>
                    <a href="#" target="_blank" className="flex items-center hover:text-orange-500 rounded-md">
                      <button className="inline-flex items-center justify-center whitespace-nowrap text-xl font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-10 w-10">
                        <FiGithub />
                      </button>
                    </a>
                  </div>
                </div>
              </div> 
            </motion.div>     
          </div>
      </div>
    </section>
  )
}

export default Projects