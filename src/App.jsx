/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import AOS from 'aos'
import Navigation from './components/Navigation'
import Loader from './components/Loader'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Terms from './components/Terms'
import Privacy from './components/Privacy'
import Skills from './components/Skills'
import Gallery from './components/Gallery'
function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
    
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={
          <main>
            <About />
            <Education />
            <Experience />
            <Projects />
            <Skills />
            <Gallery />
            <Contact />
          </main>
        } />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App