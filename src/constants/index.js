import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

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
  },
  {
    title: "Portfolio Website",
    image: project2,
    description:
      "Um site de portfólio pessoal que apresenta projetos, habilidades e informações de contato.",
    technologies: ["React", "Tailwind CSS"],
  },
  {
    title: "Megazord",
    image: project3,
    description:
      "Um aplicativo Web para hospedar vários minijogos (xadrez, quebra-cabeça, jogo da velha, quadro branco) com base em projetos do mundo real, fornecendo uma plataforma digital para que os usuários desfrutem desses jogos.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "HosToday",
    image: project4,
    description:
      "Uma plataforma de hospedagem de domínios com ofertas designadas e função de busca.",
    technologies: ["HTML", "CSS"],
  },
];

export const CONTACT = {
  address: "São Paulo, Brazil ",
  phoneNo: "+55 (11) 94533-5555 ",
  email: "felipedestrodev@gmail.com",
};
