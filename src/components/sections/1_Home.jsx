import { motion } from 'framer-motion'

function Home(){
    return(
        <section id='home'>
            <header className="w-full h-screen flex justify-center items-center bg-[#121435]">
                <div className='text-center w-120 2xl:w-240'>
                    <motion.div className="text-5xl 2xl:text-8xl h-15 2xl:h-30 mb-6 bg-linear-to-r from-[#3b82f6] to-[#c043ff] bg-clip-text text-transparent font-extrabold"
                    animate={{ opacity: [ 0.5, 1, 0.5 ] }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    >
                        Hi, I'm Tuna Sung
                    </motion.div>
                    <p className="text-2xl 2xl:text-3xl mb-8 2xl:mb-10 text-gray-300">
                        A full-stack web developer who transforms creativity into code.
                        Passionate about UI animation, real-time features, and user experience.
                        Let’s build something extraordinary together.
                    </p>
                    <div className='space-x-5 2xl:space-x-15 text-[#fff] font-extrabold'>
                        <a href="#projects" className='2xl:text-2xl px-8 py-3 2xl:px-12 2xl:py-6 rounded-full bg-linear-to-r from-[#3b82f6] to-[#8b5cf6] hover:scale-110 transition-all duration-200'>
                            Veiw My Work
                        </a>
                        <a href="#contact" className='2xl:text-2xl px-8 py-3 2xl:px-12 2xl:py-6 rounded-full border-3 border-[#3b82f6] hover:bg-[#3b82f6] transition-all duration-200'>
                            Get In Touch
                        </a>
                    </div>
                </div>
            </header>
        </section>
    )
}

export default Home