import { useEffect } from "react";
import AOS from 'aos'

function ProjectCard({ project }) {

  useEffect(() => {
    AOS.init({ once: false, duration: 800, easing: 'ease-in-out' })
  }, [])

  return (
    <div 
    data-aos='zoom-in-up'
    data-aos-offset='50'
    className="group relative bg-gray-800 rounded-xl overflow-hidden hover:scale-105 transform transition-all duration-300 hover:shadow-2xl">
      <img
        src={project.imageUrl}
        alt={`${project.title} preview`}
        className="w-full aspect-video object-cover opacity-100 md:blur-[2px] md:opacity-80 group-hover:blur-none group-hover:opacity-100  transition-all duration-300"
      />

      <div className="p-6">
        <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-300 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4 leading-relaxed whitespace-pre-line">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-700 rounded-full text-xs md:text-base text-gray-300">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4 text-sm md:text-base">
          <a
            href={`${project.demoUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
          >
            Live Demo →
          </a>
          <a
            href={`${project.githubUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-300 transition-colors cursor-pointer"
          >
            GitHub →
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
