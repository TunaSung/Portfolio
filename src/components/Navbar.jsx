import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useMediaQuery } from "react-responsive";
function Navbar(){
    const [scrolled, setScrolled] = useState(false)
    const labels = ['Home', 'About', 'Skills', 'Projects', 'Contact']

    useEffect(() => {
        const handleScroll = () => {
        setScrolled(window.scrollY > 80)
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return(
        <motion.nav className={`z-50 fixed top-0 right-0 w-full h-16 2xl:h-30 transition-all duration-350
            ${scrolled ? 'bg-[#0B1121] shadow-md backdrop-blur-md' : 'bg-transparent'}
        `}>
            <div className="container-mid h-full flex justify-between">
                <a href='#home' className="h-full flex justify-center items-center text-2xl 2xl:text-4xl font-bold bg-linear-to-r from-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent">
                    Portfolio
                </a>
                
                <ul className="h-full w-90 2xl:w-120 flex justify-between">
                    {labels.map(label => (
                        <li key={label} className="flex items-center">
                            <a href={`#${label.toLowerCase()}`} 
                            className="text-gray-300 hover:text-blue-400 2xl:text-2xl transition-color duration-200"
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.nav>
    )
}

export default Navbar