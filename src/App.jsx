import MainPage from "./pages/MainPage"
import ProjectsPage from "./pages/ProjectsPage"
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/projects" element={<ProjectsPage/>}/>
      </Routes>
    </Router>
  )
 
}

export default App