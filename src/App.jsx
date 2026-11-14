import { Route, Routes } from 'react-router-dom'
import FlyingBat from './components/FlyingBat'
import ScrollManager from './components/ScrollManager'
import SiteFooter from './components/SiteFooter'
import SiteNavbar from './components/SiteNavbar'
import { navItems } from './data/portfolio'
import DesignerPage from './pages/DesignerPage'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import ResearchPage from './pages/ResearchPage'

export default function App() {
  return (
    <>
      <ScrollManager />
      <SiteNavbar items={navItems} />
      <FlyingBat />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/designer" element={<DesignerPage />} />
        <Route path="/pesquisa" element={<ResearchPage />} />
        <Route path="/projetos" element={<ProjectsPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <SiteFooter />
    </>
  )
}
