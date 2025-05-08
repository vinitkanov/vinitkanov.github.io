import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import './index.css'

function App() {
  const [section, setSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY
      const sections = ['home', 'about', 'projects']
      for (let sec of sections) {
        const el = document.getElementById(sec)
        if (el && currentScroll >= el.offsetTop - 200) {
          setSection(sec)
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="bg-[#130020] text-[#f3d6f7] font-baloo scroll-smooth">
      <Header activeSection={section} />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </main>
  )
}

export default App