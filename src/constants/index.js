import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
// import { FiGithub } from "react-icons/fi";
// import { FiExternalLink } from "react-icons/fi";



export const HERO_CONTENT = `Eu sou um entusiasta da programação, aprendendo a construir aplicações web robustas e responsíveis. Desenvolvendo desde 2022, venho aperfeiçocando minhas habilidades com front-end e suas tecnologias 
como React, Next.js e TypeScript, bem como tecnologias de back-end e banco de dados, como Node.js e MySQL. 
Meu objetivo é aproveitar minha experiência para criar soluções inovadoras que impulsionem o crescimento dos negócios e proporcionem experiências excepcionais ao usuário.`;

export const ABOUT_TEXT = `Olá.`;

export const PROJECTS = [
  {
    title: "Ignite Feed",
    image: project1,
    description:
      "Aplicação desenvolvida para simular um feed de rede social, introduzindo interatividades como comentar, curtir e excluir comentários e proporcionando uma experiência de usuária fluida e agradável",
    technologies: ["HTML", "CSS", "React", "TypeScript"],
    // repository: <FiGithub />,
    // deploy: <FiExternalLink />,
  },
  {
    title: "Portfolio Website",
    image: project2,
    description:
      "Site de portfólio pessoal que exibe projetos, habilidades e informações de contato, ideal para destacar competências e facilitar conexões profissionais.",
    technologies: ["React", "Tailwind CSS"],
    // repository: <FiGithub />,
    // deploy: <FiExternalLink />,
  },
  {
    title: "Megazord",
    image: project3,
    description:
      "Aplicativo Web que hospeda minijogos como xadrez, quebra-cabeça, jogo da velha e quadro branco, proporcionando uma plataforma digital interativa para os usuários se divertirem.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    // repository: <FiGithub />,
    // deploy: <FiExternalLink />,
  },
  {
    title: "HosToday",
    image: project4,
    description:
      "Plataforma de hospedagem de domínios com ofertas personalizadas e função de busca, facilitando a aquisição e gerenciamento de domínios de forma eficiente.",
    technologies: ["HTML", "CSS"],
    // repository: <FiGithub />,
    // deploy: <FiExternalLink />,
  },
];

export const CONTACT = {
  address: "São Paulo, Brazil ",
  phoneNo: "+55 (11) 94533-5555 ",
  email: "felipedestrodev@gmail.com",
};
