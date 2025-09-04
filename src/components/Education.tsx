const Education = () => {
  const education = [
    {
      degree: "Master's Degree",
      field: "Your Field of Study",
      school: "University Name",
      period: "2016 - 2018",
      description: "Advanced studies focusing on specialized knowledge and research methodologies.",
      achievements: [
        "Graduated Magna Cum Laude",
        "Research published in peer-reviewed journal",
        "Teaching Assistant for 2 semesters"
      ]
    },
    {
      degree: "Bachelor's Degree",
      field: "Your Field of Study",
      school: "University Name",
      period: "2012 - 2016",
      description: "Comprehensive foundation in core principles and practical applications.",
      achievements: [
        "Dean's List for 6 semesters",
        "President of Student Organization",
        "Completed honors program"
      ]
    }
  ];

  const certifications = [
    "Professional Certification Name (2023)",
    "Industry Certification (2022)",
    "Technical Certification (2021)",
    "Specialized Training Certificate (2020)"
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-primary mb-6">
              Education & Certifications
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h3 className="font-playfair text-2xl font-semibold text-primary mb-8">
                Academic Background
              </h3>
              
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="bg-card rounded-lg p-6 shadow-lg">
                    <div className="mb-4">
                      <h4 className="font-playfair text-xl font-semibold text-primary mb-1">
                        {edu.degree}
                      </h4>
                      <p className="font-inter text-lg font-medium text-accent mb-1">
                        {edu.field}
                      </p>
                      <p className="font-inter font-medium text-muted-foreground mb-2">
                        {edu.school}
                      </p>
                      <p className="font-inter text-sm text-muted-foreground">
                        {edu.period}
                      </p>
                    </div>
                    
                    <p className="text-muted-foreground font-inter leading-relaxed mb-4">
                      {edu.description}
                    </p>
                    
                    <div>
                      <h5 className="font-inter font-semibold text-foreground mb-2">
                        Highlights:
                      </h5>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0"></div>
                            <span className="text-muted-foreground font-inter text-sm">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Certifications */}
            <div>
              <h3 className="font-playfair text-2xl font-semibold text-primary mb-8">
                Certifications & Training
              </h3>
              
              <div className="bg-card rounded-lg p-6 shadow-lg">
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-muted/30 rounded-lg">
                      <div className="w-3 h-3 bg-accent rounded-full flex-shrink-0"></div>
                      <span className="font-inter text-foreground">{cert}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-accent-light rounded-lg">
                  <h5 className="font-inter font-semibold text-foreground mb-2">
                    Continuous Learning
                  </h5>
                  <p className="text-muted-foreground font-inter text-sm leading-relaxed">
                    I'm committed to staying current with industry trends and regularly 
                    pursue additional training, workshops, and professional development 
                    opportunities to enhance my skills and knowledge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;