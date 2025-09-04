const Experience = () => {
  const experiences = [
    {
      title: "Senior Position Title",
      company: "Company Name",
      period: "2022 - Present",
      description: "Led multiple high-impact projects and mentored junior team members. Implemented innovative solutions that improved efficiency by 40% and reduced costs significantly.",
      achievements: [
        "Spearheaded digital transformation initiative",
        "Managed cross-functional team of 8 professionals",
        "Delivered projects 20% ahead of schedule"
      ]
    },
    {
      title: "Mid-Level Position Title",
      company: "Previous Company",
      period: "2020 - 2022",
      description: "Developed and maintained critical systems while collaborating with stakeholders to deliver high-quality solutions that exceeded expectations.",
      achievements: [
        "Improved system performance by 60%",
        "Reduced bug reports by 45% through quality initiatives",
        "Mentored 3 junior developers"
      ]
    },
    {
      title: "Junior Position Title",
      company: "First Company",
      period: "2018 - 2020",
      description: "Started my professional journey contributing to various projects and learning industry best practices while building a strong foundation.",
      achievements: [
        "Completed comprehensive training program",
        "Contributed to 5+ successful project deliveries",
        "Received 'Rising Star' award"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-primary mb-6">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-24 bg-border"></div>
                )}
                
                <div className="flex items-start space-x-6">
                  {/* Timeline dot */}
                  <div className="w-3 h-3 bg-accent rounded-full mt-6 flex-shrink-0 relative z-10"></div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-card rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="font-playfair text-2xl font-semibold text-primary mb-1">
                          {exp.title}
                        </h3>
                        <p className="font-inter text-lg font-medium text-accent">
                          {exp.company}
                        </p>
                      </div>
                      <div className="text-muted-foreground font-inter font-medium mt-2 lg:mt-0">
                        {exp.period}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground font-inter leading-relaxed mb-6">
                      {exp.description}
                    </p>
                    
                    <div>
                      <h4 className="font-inter font-semibold text-foreground mb-3">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0"></div>
                            <span className="text-muted-foreground font-inter">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;