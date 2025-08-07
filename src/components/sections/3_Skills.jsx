import Hero from "../Hero";
import { useMediaQuery } from "react-responsive";

function Skills() {
  const skills = [
  {
    name: 'React',
    level: 85,
    color: ['#4FD1C5', '#2C7A7B'],
    subSkills: ['Hooks', 'React Router', 'Context API', 'Component Design']
  },
  {
    name: 'Tailwind Css',
    level: 85,
    color: ['#63B3ED', '#3182CE'],
    subSkills: ['Utility Classes', 'Responsive Design', 'Custom Theme']
  },
  {
    name: 'Node.js',
    level: 83,
    color: ['#68D391', '#38A169'], 
    subSkills: ['Express.js', 'Middleware', 'CORS']
  },
  {
    name: 'JavaScript',
    level: 80,
    color: ['#FBBF24', '#D69E2E'],
    subSkills: ['ES6+', 'DOM', 'Async/Await', 'Event Handling']
  },
  {
    name: 'MySQL',
    level: 80,
    color: ['#0EA5E9', '#0F766E'],
    subSkills: ['Sequelize ORM']
  },
  {
    name: 'UI/UX Design',
    level: 80,
    color: ['#D8B4FE', '#A78BFA'], 
    subSkills: ['Wireframing', 'Framer Motion', 'Ant Design', 'Accessibility']
  },
  {
    name: 'DevOps',
    level: 70,
    color: ['#F97316', '#EA580C'], 
    subSkills: ['Docker', 'Railway', 'GitHub Actions', 'Vercel']
  },
  {
    name: 'Responsive Design',
    level: 90,
    color: ['#F472B6', '#EC4899'], 
    subSkills: ['Flexbox', 'Grid', 'Media Queries', 'Mobile First']
  },
  {
    name: 'R Language',
    level: 90,
    color: ['#3B82F6', '#1E40AF'],
    subSkills: ['ggplot2', 'dplyr', 'Data Cleaning', 'Statistical Modeling']
  }
]


  return (
    <section id="skills">
      <Hero bgc={"#18212F"}>
        <div className="container-mid">
          <h2 className="text-4xl font-bold h-15 text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent
          max-sm:text-2xl max-sm:mb-4">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-4 gap-8 max-sm:grid-cols-2">
            {skills.map((skill, index) => (
              <div key={skill.name} className="text-center group">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <svg className="w-24 h-24 transform -rotate-90">
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      className="text-gray-700"
                    />
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke={`url(#gradient-${index})`}
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray={`${2 * Math.PI * 40}`}
                      strokeDashoffset={`${
                        2 * Math.PI * 40 * (1 - skill.level / 100)
                      }`}
                      className="transition-all duration-1000 ease-out"
                      style={{ animationDelay: `${index * 100}ms` }}
                    />
                    <defs>
                      <linearGradient
                        id={`gradient-${index}`}
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor={`${skill.color[0]}`} />
                        <stop offset="100%" stopColor={`${skill.color[1]}`} />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm text-gray-300 font-bold">
                      {skill.level}%
                    </span>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-300 group-hover:text-blue-400 transition-colors duration-250">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </Hero>
    </section>
  );
}

export default Skills;
