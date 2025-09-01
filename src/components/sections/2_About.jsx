import { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from 'aos'

import Hero from "../layouts/Hero";
import graduateImg from "/src/assets/graduate.webp";

function About() {

  useEffect(() => {
    AOS.init({ once: false, duration: 1500, easing: 'ease-in-out' })
  }, [])

  // tech data
  const techTag = [
    { name: "React", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
    { name: "Node.js", color: "bg-green-500/20 text-green-300 border-green-500/30" },
    { name: "MySQL", color: "bg-orange-500/20 text-orange-300 border-orange-500/30" },
  ];

  return (
    <section id="about">
      <Hero bgc={"#111827"}>
        <div className="container-mid">

          {/* start title */}
          <h2
          data-aos='fade-up'
          data-aos-offset='50'
          className="text-4xl md:text-[56px] lg:text-4xl text-center font-extrabold h-12 md:h-16 mb-6 bg-gradient-to-r from-[#3b82f6] to-[#c043ff] bg-clip-text text-transparent">
            About Me
          </h2>
          {/* end title */}

          {/* start main */}
          <main className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-8">
            {/* start avatar */}
            <div 
            data-aos='flip-right'
            data-aos-offset='200'
            className="order-1 md:order-2 flex justify-center items-center">
              <motion.img
                src={graduateImg}
                className="h-80 md:h-90 lg:h-80 aspect-square border rounded-full object-cover object-top shadow-[0px_3px_2px_rgba(250,250,250,0.5)]"
                alt="My portrait"
                loading="lazy"
                decoding="async"
                animate={{ translateY: ["0%", "8%", "0%"] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
            {/* end avatar */}

            {/* start content */}
            <div
            data-aos='fade-right'
            data-aos-offset='150'
            className="order-2 md:order-1 flex flex-col items-center md:items-start justify-center gap-6 md:gap-4">

              {/* start description */}
              <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed text-center md:text-left">
                I'm a front-end web developer based in Taiwan. <br />
                My passion for web development started in 2024 when I began
                experimenting with HTML and CSS. Since then, I’ve built several
                full-stack projects. <br />
                <br />I specialize in React, Node.js, MySQL and modern web
                technologies, always staying up-to-date with the latest trends
                and best practices in web development.
              </p>
              {/* end description */}

              {/* start tech tag */}
              <div className="flex flex-wrap gap-5 justify-center md:gap-6 lg:gap-4">
                {techTag.map((skill) => (
                  <span
                    key={skill.name}
                    className={`px-4 py-2 md:px-6 md:py-3 text-sm md:text-xl rounded-full border ${skill.color}`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
              {/* end tech tag */}
              
            </div>
            {/* end content */}

          </main>
          {/* end start */}

        </div>
      </Hero>
    </section>
  );
}

export default About;
