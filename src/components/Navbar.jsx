import logo from "../assets/FdLogoWhite.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { GiBrazilFlag } from "react-icons/gi";

const Navbar = () => {

  return <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20" src={logo} alt="logo" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-3xl">
        <a href="https://www.linkedin.com/in/felipedestro/" target="_blank" className="hover:text-orange-500 transition"><FaLinkedin /></a>
        <a href="https://github.com/felipedestroo" target="_blank" className="hover:text-orange-500 transition"><FaGithub /></a>
        <GiBrazilFlag />    
    </div>
  </nav>
}

export default Navbar