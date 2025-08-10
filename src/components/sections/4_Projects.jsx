import Hero from "../layouts/Hero";
import ProjectCard from "../features/ProjectCard";

// Images
import secondProjectImg from '/src/assets/secondProject.webp';
import firstProjectImg from '/src/assets/firstProject.webp';
import rimooImg from '/src/assets/rimoo.webp';
import tubameImg from '/src/assets/tubame.webp';
import portfolioImg from '/src/assets/portfolio.webp';

function Projects() {

  // projects data
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Real-time e-commerce platform with chat system and advanced product flow.",
      tech: ["React", "Tailwind", "Node.js", "MySQL", "ECPay", "Socket.io", "Desktop", "Railway"],
      imageUrl: secondProjectImg,
      demoUrl: 'https://secondproject-production.up.railway.app',
      githubUrl: 'https://github.com/TunaSung/Second_project'
    },
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack online store with user auth, shopping cart, and payment system.",
      tech: ["React", "Tailwind", "Node.js", "MySQL", "ECPay", "Desktop", "Railway"],
      imageUrl: firstProjectImg,
      demoUrl: 'https://firstproject-production-700b.up.railway.app',
      githubUrl: 'https://github.com/TunaSung/First_project'
    },
    {
      title: "Rimoo cafe",
      description:
        "Single-page café website with handcrafted HTML/CSS and responsive design.",
      tech: ["HTML", "CSS", "Responsive Design", "GitHub Pages"],
      imageUrl: rimooImg,
      demoUrl: 'https://tunasung.github.io/Rimoo-cafe/',
      githubUrl: 'https://github.com/TunaSung/Rimoo-cafe'
    },
    {
      title: "Tubame",
      description:
        "Business landing page built with React, animations, BEM CSS, and full RWD.",
      tech: ["React", "BEM CSS", "Responsive Design", "Vercel"],
      imageUrl: tubameImg,
      demoUrl: 'https://tubame.vercel.app/',
      githubUrl: 'https://github.com/TunaSung/Tubame'
    },
    {
      title: "Portfolio",
      description:
        "Dark‑themed interactive portfolio with scroll animations, smooth navigation, and responsive layout.",
      tech: ["React", "Tailwind", "Responsive Design", "Vercel"],
      imageUrl: portfolioImg,
      demoUrl: 'https://portfolio-blue-three-i9wkudfxhn.vercel.app/',
      githubUrl: 'https://github.com/TunaSung/Portfolio'
    },
  ];

  return (
    <section id="projects">
      <Hero bgc={"#111827"}>
        <div className="container-mid">

          {/* start title */}
          <h2 className="text-2xl md:text-4xl font-bold text-center h-15 mb-4 md:mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          {/* end title */}

          {/* start project card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard project={project} key={`${project.title}-${index}`} />
            ))}
          </div>
          {/* end project card */}
          
        </div>
      </Hero>
    </section>
  );
}

export default Projects;
