function SkillCard({ skill, RADIUS, CIRCUMFERENCE, index }) {
  return (
    <div className="text-center group">

      {/* start circle */}
      <div className="relative w-24 h-24 mx-auto mb-4">

        {/* start svg */}
        <svg className="w-24 h-24 transform -rotate-90">
          {/* 圓的底色 */}
          <circle
            cx="48"
            cy="48"
            r={`${RADIUS}`}
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-gray-700"
          />

          {/* 根據%數決定圓周長 */}
          <circle
            cx="48"
            cy="48"
            r={`${RADIUS}`}
            stroke={`url(#gradient-${index})`}
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={`${CIRCUMFERENCE}`}
            strokeDashoffset={`${CIRCUMFERENCE * (1 - skill.level / 100)}`}
            className="transition-all duration-1000 ease-out"
            style={{ animationDelay: `${index * 100}ms` }}
          />

          {/* 定義上面的 #gradient */}
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
        {/* end svg */}

        {/* start level */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm text-gray-300 font-bold">
            {skill.level}%
          </span>
        </div>
        {/* end level */}

      </div>
      {/* end circle */}

      {/* start skill name */}
      <h3 className="font-semibold text-gray-300 group-hover:text-blue-400 transition-colors duration-250">
        {skill.name}
      </h3>
      {/* end skill name */}
    </div>
  );
}

export default SkillCard;
