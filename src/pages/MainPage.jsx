import About from "../components/About"
import Contact from "../components/Contact"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Projects from "../components/Preview-Projects"
import Technologies from "../components/Technologies"
import Footer from "../components/Footer"
import '../i18nify'

function MainPage ()  {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-blue-900 selection:text-white">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950"></div>
      </div>
      
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default MainPage