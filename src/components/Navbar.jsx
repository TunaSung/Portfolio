import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useMediaQuery } from "react-responsive";
import HamburgerMenu from './HamburgerMenu';

function Navbar(){
    const [scrolled, setScrolled] = useState(false)
    const sectionList = ['Home', 'About', 'Skills', 'Projects', 'Contact']

    const isWidth768 = useMediaQuery({ minWidth: 768 });

    useEffect(() => {
        const handleScroll = () => {
        setScrolled(window.scrollY > 80)
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return(
        <motion.nav className={`z-50 fixed top-0 right-0 w-full h-16 transition-all duration-350
            ${scrolled ? 'bg-[#0B1121] shadow-md backdrop-blur-md' : 'bg-transparent'}
            max-sm:h-20 
            max-md:h-25`}
            >
            <div className="container-mid h-full flex justify-between">
                <a href='#home' className="h-full text-2xl flex justify-center items-center font-bold bg-linear-to-r from-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent
                max-sm:text-xl
                max-md:text-4xl"
                >
                    Portfolio
                </a>

                {!isWidth768 ? (
                    <HamburgerMenu sectionList={sectionList} />
                ) : (
                    <ul className="h-full w-90 flex justify-between">
                        {sectionList.map(section => (
                            <li key={section} className="flex items-center">
                                <a href={`#${section.toLowerCase()}`} 
                                className="text-gray-300 hover:text-blue-400 transition-color duration-200"
                                >
                                    {section}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </motion.nav>
    )
}

export default Navbar