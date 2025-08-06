import Hero from '../Hero'
import {motion} from 'framer-motion'

function About(){
    return(
        <section id='about'>
            <Hero bgc={'#111827'}>
                <div className='container-mid'>
                    <h2 class="text-4xl 2xl:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        About Me
                    </h2>
                    <div className='grid grid-cols-2 gap-12'>
                        <div className=''>
                            <p className='text-lg 2xl:text-2xl text-gray-300'>
                                I'm a full-stack web developer based in Taiwan. <br />
                                My passion for web development started in 2024 when I began experimenting with HTML and CSS.
                                Since then, I’ve built several full-stack projects. <br /><br />
                                I specialize in React, Node.js, MySQL and modern web technologies, always staying up-to-date with the latest trends and best practices in web development.
                            </p>
                            <div className='space-x-4 mt-6
                            2xl:space-x-8 2xl:mt-10 '>
                                <span className='px-4 py-2 rounded-full border bg-blue-500/20 text-blue-300 border-blue-500/30
                                2xl:px-8 2xl:py-3 2xl:text-2xl'>
                                    React
                                </span>
                                <span className='px-4 py-2 rounded-full border bg-green-500/20 text-green-300 border-green-500/30
                                2xl:px-8 2xl:py-3 2xl:text-2xl'>
                                    Node.js
                                </span>
                                <span className='px-4 py-2 rounded-full border bg-orange-500/20 text-orange-300 border-orange-500/30
                                2xl:px-8 2xl:py-3 2xl:text-2xl'>
                                    MySQL
                                </span>
                            </div>
                        </div>
                        <div className=''>
                            <motion.div className="h-80 2xl:h-100 absolute -top-[15%] left-1/2 -translate-x-1/2 aspect-square border rounded-full bg-[url('/畢業照.jpg')] bg-cover bg-no-repeat shadow-[0px_3px_2px_rgba(250,250,250,0.5)]"
                            animate={{ translateY: ['0%', '8%', '0%'] }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            >
                            
                            </motion.div>
                        </div>
                    </div>
                </div>
            </Hero>
        </section>
    )
}

export default About