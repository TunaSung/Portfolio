import { useEffect, useState, useRef } from 'react'
import './App.css'
import { motion, useScroll, useTransform  } from 'framer-motion'
import LoadingScreen from './components/loadingScreen'
import Navbar from './components/Navbar'
import Home from './components/sections/1_Home'
import About from './components/sections/2_About'
import Skills from './components/sections/3_Skills'
import Projects from './components/sections/4_Projects'
import Contact from './components/sections/5_Contact'
import Footer from './components/Footer'

function App() {

  const [isFirstRender, setIsFirstRender] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFirstRender(false);
    }, 5000); 

    return () => clearTimeout(timer);
  }, []);

  const { scrollY } = useScroll()
  const bgAnimate = useTransform(scrollY, [0, 300], [0, 1])

  return (
    <div className='bg-[#121435]'>
      {isFirstRender ? (
          <LoadingScreen />
      ) : (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        >
          <Navbar bgAnimate={bgAnimate} />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </motion.div>
      )}
    </div>
  )
}

export default App
