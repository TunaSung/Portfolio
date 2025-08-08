import Hero from "../Hero";

function Projects() {
  const projects = [
    {
      title: "E-Commerce_1 Platform",
      description:
        "Real-time e-commerce platform with chat system and advanced product flow.",
      tech: ["React", "Tailwind", "Node.js", "MySQL", "Socket.io", "Railway"],
      gradient: "from-green-500 to-blue-600",
      demoUrl: 'https://secondproject-production.up.railway.app',
      githubUrl: 'https://github.com/TunaSung/Second_project'
    },
    {
      title: "E-Commerce_2 Platform",
      description:
        "Full-stack online store with user auth, shopping cart, and payment system.",
      tech: ["React", "Tailwind", "Node.js", "MySQL", "ECPay", "Railway"],
      gradient: "from-blue-500 to-purple-600",
      demoUrl: 'https://firstproject-production-700b.up.railway.app',
      githubUrl: 'https://github.com/TunaSung/First_project'
    },
    {
      title: "Rimoo cafe",
      description:
        "Single-page café website with handcrafted HTML/CSS and responsive design.",
      tech: ["HTML", "Responsive Design", "GitHub Pages"],
      gradient: "from-purple-500 to-pink-600",
      demoUrl: 'https://tunasung.github.io/Rimoo-cafe/',
      githubUrl: 'https://github.com/TunaSung/Rimoo-cafe'
    },
    {
      title: "Tubame",
      description:
        "Business landing page built with React, animations, BEM CSS, and full RWD.",
      tech: ["React", "Responsive Design", "Vercel"],
      gradient: "from-orange-500 to-red-600",
      demoUrl: 'https://tubame.vercel.app/',
      githubUrl: 'https://github.com/TunaSung/Tubame'
    },
    {
      title: "Portfolio",
      description:
        "Dark‑themed interactive portfolio with scroll animations, smooth navigation, and responsive layout.",
      tech: ["React", "Tailwind", "Responsive Design", "Vercel"],
      gradient: "from-cyan-500 to-blue-600",
      demoUrl: 'https://portfolio-blue-three-i9wkudfxhn.vercel.app/',
      githubUrl: 'https://github.com/TunaSung/Portfolio'
    },
  ];

  return (
    <section id="projects">
      <Hero bgc={"#111827"}>
        <div className="container-mid">
          <h2 className="text-4xl font-bold text-center h-15 mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent
          max-sm:text-2xl max-sm:mb-4
          max-md:text-4xl">
            Featured Projects
          </h2>
          <div className="grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group relative bg-gray-800 rounded-xl overflow-hidden hover:scale-105 transform transition-all duration-300 hover:shadow-2xl"
              >
                <div className={`h-48 bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-100 transition-opacity`} />

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-300 group-hover:text-blue-400 transition-colors
                  max-md:text-lg">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300
                        max-md:text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href={`${project.demoUrl}`} target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors cursor-pointer">
                      Live Demo →
                    </a>
                    <a href={`${project.githubUrl}`} target="_blank" className="text-gray-400 hover:text-gray-300 transition-colors cursor-pointer">
                      GitHub →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Hero>
    </section>
  );
}

export default Projects;
