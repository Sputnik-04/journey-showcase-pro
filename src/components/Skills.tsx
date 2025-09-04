const Skills = () => {
  const skillCategories = [
    {
      title: "Technical Skills",
      skills: [
        { name: "JavaScript/TypeScript", level: 90 },
        { name: "React & Next.js", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "Python", level: 75 },
        { name: "SQL & Databases", level: 80 },
        { name: "AWS/Cloud Services", level: 70 }
      ]
    },
    {
      title: "Design & Tools",
      skills: [
        { name: "UI/UX Design", level: 85 },
        { name: "Figma/Adobe Creative", level: 80 },
        { name: "Git & Version Control", level: 90 },
        { name: "Docker", level: 75 },
        { name: "Project Management", level: 85 },
        { name: "Agile/Scrum", level: 80 }
      ]
    }
  ];

  const softSkills = [
    "Problem Solving",
    "Team Leadership",
    "Communication",
    "Critical Thinking",
    "Adaptability",
    "Time Management",
    "Mentoring",
    "Strategic Planning"
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-primary mb-6">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-card rounded-lg p-8 shadow-lg">
                <h3 className="font-playfair text-2xl font-semibold text-primary mb-6">
                  {category.title}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-inter font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="font-inter text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-accent to-primary h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Soft Skills */}
          <div className="bg-card rounded-lg p-8 shadow-lg">
            <h3 className="font-playfair text-2xl font-semibold text-primary mb-6 text-center">
              Core Competencies
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {softSkills.map((skill, index) => (
                <div 
                  key={index}
                  className="bg-accent-light text-center py-4 px-3 rounded-lg hover:shadow-md transition-shadow"
                >
                  <span className="font-inter font-medium text-foreground">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;