import Navbar from "../components/Navbar"
import MainProjects from "../components/Main-Projects"
import Footer from  "../components/Footer"
import '../i18nify'

function ProjectsPage () {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-blue-900 selection:text-white">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950"></div>
      </div>
      
      <div className="container mx-auto px-8">
        <Navbar />
        <MainProjects />
        <Footer />
      </div>
    </div>
  )
}

export default ProjectsPage