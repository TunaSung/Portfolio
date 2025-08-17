import Hero from "../layouts/Hero";
import SkillCard from "../features/SkillCard";

function Skills() {
  // skills data
  const skills = [
    {
      name: "React",
      level: 80,
      color: ["#4FD1C5", "#2C7A7B"],
      subSkills: ["Hooks", "React Router", "Context API", "Component Design"],
    },
    {
      name: "Tailwind Css",
      level: 80,
      color: ["#63B3ED", "#3182CE"],
      subSkills: ["Utility Classes", "Responsive Design", "Custom Theme"],
    },
    {
      name: "Node.js",
      level: 75,
      color: ["#68D391", "#38A169"],
      subSkills: ["Express.js", "Middleware", "CORS"],
    },
    {
      name: "JavaScript",
      level: 75,
      color: ["#FBBF24", "#D69E2E"],
      subSkills: ["ES6+", "DOM", "Async/Await", "Event Handling"],
    },
    {
      name: "MySQL",
      level: 80,
      color: ["#0EA5E9", "#0F766E"],
      subSkills: ["Sequelize ORM"],
    },
    {
      name: "UI/UX Design",
      level: 80,
      color: ["#D8B4FE", "#A78BFA"],
      subSkills: [
        "Wireframing",
        "Framer Motion",
        "Ant Design",
        "Accessibility",
      ],
    },
    {
      name: "DevOps",
      level: 75,
      color: ["#F97316", "#EA580C"],
      subSkills: ["Docker", "Railway", "GitHub Actions", "Vercel"],
    },
    {
      name: "Responsive Design",
      level: 90,
      color: ["#F472B6", "#EC4899"],
      subSkills: ["Flexbox", "Grid", "Media Queries", "Mobile First"],
    },
    {
      name: "R Language",
      level: 90,
      color: ["#3B82F6", "#1E40AF"],
      subSkills: ["ggplot2", "dplyr", "Data Cleaning", "Statistical Modeling"],
    },
  ];

  // 圓周長
  const RADIUS = 40;
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

  return (
    <section id="skills">
      <Hero bgc={"#18212F"}>
        <div className="container-mid">
          {/* start title */}
          <h2 className="text-2xl md:text-4xl font-bold h-15 text-center mb-4 md:mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          {/* end title */}

          {/* start skills */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {skills.map((skill, index) => (
              <SkillCard
                key={skill.name}
                skill={skill}
                RADIUS={RADIUS}
                CIRCUMFERENCE={CIRCUMFERENCE}
                index={index}
              />
            ))}
          </div>
          {/* end skills */}
          
        </div>
      </Hero>
    </section>
  );
}

export default Skills;
