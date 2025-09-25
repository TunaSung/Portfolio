import { motion } from 'framer-motion'
import { useEffect } from 'react'
import AOS from 'aos'

function Home(){
    useEffect(() => {
        AOS.init({ duration: 1500, easing: 'ease-in-out'})
    }, [])
    return(
        <section data-aos='fade-up' id='home'>
            <header className="container-mid h-screen flex justify-center items-center bg-[#121435]">
                <div className='text-center w-full max-w-[480px]'>

                    {/* start name */}
                    <motion.div className="text-4xl md:text-[56px] lg:text-5xl font-extrabold h-12 md:h-16 lg:h-15 mb-6 bg-gradient-to-r from-[#3b82f6] to-[#c043ff] bg-clip-text text-transparent"
                    animate={{ opacity: [ 0.5, 1, 0.5 ] }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    >
                        Hi, I'm Tuna Sung
                    </motion.div>
                    {/* end name */}

                    {/* start description */}
                    <p className="text-lg md:text-2xl mb-10 md:mb-12 lg:mb-8 text-gray-300 leading-relaxed">
                        A full stack web developer who transforms creativity into code.
                        Passionate about UI animation, real-time features, and user experience.
                        Let’s build something extraordinary together.
                    </p>
                    {/* end description */}

                    {/* start btns */}
                    <div className='space-x-3 md:space-x-5 text-[#fff] font-extrabold'>
                        <button onClick={() => location.href="#projects"} className='px-4 md:px-8 py-3 text-sm md:text-xl lg:text-xl rounded-full bg-linear-to-r from-[#3b82f6] to-[#8b5cf6] hover:scale-110 transition-all duration-200'>
                            View My Work
                        </button>
                        <button onClick={() => location.href="#contact"} className='px-4 md:px-8 py-3 text-sm md:text-xl lg:text-xl rounded-full border-3 border-[#3b82f6] hover:bg-[#3b82f6] transition-all duration-200'>
                            Get In Touch
                        </button>
                    </div>
                    {/* end btns */}

                </div>
            </header>
        </section>
    )
}

export default Home