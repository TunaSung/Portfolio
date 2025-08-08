import { motion } from 'framer-motion'

function Home(){
    return(
        <section id='home'>
            <header className="container-mid h-screen flex justify-center items-center bg-[#121435]">
                <div className='text-center w-120'>
                    <motion.div className="text-5xl h-15 mb-6 bg-linear-to-r from-[#3b82f6] to-[#c043ff] bg-clip-text text-transparent font-extrabold
                    max-sm:text-4xl max-sm:h-12 max-md:sm-8
                    max-md:text-[56px] max-md:h-16"
                    animate={{ opacity: [ 0.5, 1, 0.5 ] }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    >
                        Hi, I'm Tuna Sung
                    </motion.div>
                    <p className="text-2xl mb-8 text-gray-300 leading-relaxed
                    max-sm:text-lg max-sm:mb-10
                    max-md:mb-12">
                        A full-stack web developer who transforms creativity into code.
                        Passionate about UI animation, real-time features, and user experience.
                        Let’s build something extraordinary together.
                    </p>
                    <div className='space-x-5 text-[#fff] font-extrabold
                    max-sm:space-x-3'>
                        <button className='hover:scale-110 transition-all duration-200'>
                            <a href="#projects" className='px-8 py-3 text-xl rounded-full bg-linear-to-r from-[#3b82f6] to-[#8b5cf6]
                            max-sm:px-4 max-sm:text-sm
                            max-md:text-2xl'>
                                Veiw My Work
                            </a>
                        </button>
                        <button>
                            <a href="#contact" className='px-8 py-3 text-xl rounded-full border-3 border-[#3b82f6] hover:bg-[#3b82f6] transition-all duration-200
                            max-sm:px-4 max-sm:text-sm
                            max-md:text-2xl'>
                                Get In Touch
                            </a>
                        </button>
                    </div>
                </div>
            </header>
        </section>
    )
}

export default Home