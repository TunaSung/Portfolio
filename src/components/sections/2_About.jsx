import Hero from '../Hero'
import { motion } from 'framer-motion'
import { useMediaQuery } from "react-responsive";

function About(){

    const isWidth768 = useMediaQuery({ minWidth: 768 });

    return(
        <section id='about'>
            <Hero bgc={'#111827'}>
                <div className='container-mid'>
                    <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent
                    max-sm:text-2xl max-sm:mb-8
                    max-md:text-4xl">
                        About Me
                    </h2>
                    <div className='grid grid-cols-2 max-md:grid-cols-1 max-md:gap-12'>
                        <div className='order-1 max-md:order-0'>
                            <motion.div className={`h-80 ${isWidth768 ? 'avatar-position' : 'flex justify-self-center self-center'} aspect-square border rounded-full bg-[url('/畢業照.jpg')] bg-cover bg-no-repeat shadow-[0px_3px_2px_rgba(250,250,250,0.5)]
                            max-sm:h-80
                            max-md:h-120`}
                            animate={{ translateY: ['0%', '8%', '0%'] }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            >
                            
                            </motion.div>
                        </div>

                        <div className={`flex flex-col justify-center ${isWidth768 ? 'items-start' : 'items-center'} gap-8
                            max-sm:gap-8
                            max-md:gap-12`}>
                            <p className='text-lg text-gray-300 leading-relaxed
                            max-sm:text-sm
                            max-md:text-2xl'>
                                I'm a full-stack web developer based in Taiwan. <br />
                                My passion for web development started in 2024 when I began experimenting with HTML and CSS.
                                Since then, I’ve built several full-stack projects. <br /><br />
                                I specialize in React, Node.js, MySQL and modern web technologies, always staying up-to-date with the latest trends and best practices in web development.
                            </p>
                            <div className='space-x-4 max-sm:space-x-5 max-md:space-x-6'>
                                <span className='px-4 py-2 rounded-full border bg-blue-500/20 text-blue-300 border-blue-500/30
                                max-sm:text-base max-sm:px-4 max-sm:py-2
                                max-md:text-2xl max-md:px-6 max-md:py-3'>
                                    React
                                </span>
                                <span className='px-4 py-2 rounded-full border bg-green-500/20 text-green-300 border-green-500/30
                                max-sm:text-base max-sm:px-4 max-sm:py-2
                                max-md:text-2xl max-md:px-6 max-md:py-3'>
                                    Node.js
                                </span>
                                <span className='px-4 py-2 rounded-full border bg-orange-500/20 text-orange-300 border-orange-500/30
                                max-sm:text-base max-sm:px-4 max-sm:py-2
                                max-md:text-2xl max-md:px-6 max-md:py-3'>
                                    MySQL
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Hero>
        </section>
    )
}

export default About