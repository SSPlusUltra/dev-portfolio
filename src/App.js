import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import './App.scss'
import ReactGA from "react-ga"


const TRACKING_ID = "G-T1WLY00WYX";
ReactGA.initialize(TRACKING_ID)
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/skills" element={<Skills />} />
        </Route>
      </Routes> 
    </>
  )
}

export default App
