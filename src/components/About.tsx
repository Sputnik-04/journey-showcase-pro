const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-primary mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="font-playfair text-2xl font-semibold text-primary mb-4">
                My Story
              </h3>
              <p className="text-muted-foreground font-inter leading-relaxed">
                I am a dedicated professional with a passion for excellence and innovation. 
                My journey began with a curiosity about how things work and evolved into 
                a career focused on creating meaningful solutions that make a difference.
              </p>
              <p className="text-muted-foreground font-inter leading-relaxed">
                Throughout my career, I've had the privilege of working on diverse projects 
                that have challenged me to grow both technically and professionally. I believe 
                in continuous learning and staying current with industry trends and best practices.
              </p>
              <p className="text-muted-foreground font-inter leading-relaxed">
                When I'm not working, I enjoy exploring new technologies, contributing to 
                open-source projects, and mentoring others in their professional development.
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="font-playfair text-2xl font-semibold text-primary mb-4">
                What Drives Me
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-muted-foreground font-inter">
                    <span className="font-semibold text-foreground">Innovation:</span> Always looking for creative solutions to complex problems
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-muted-foreground font-inter">
                    <span className="font-semibold text-foreground">Collaboration:</span> Building meaningful relationships and working effectively in teams
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-muted-foreground font-inter">
                    <span className="font-semibold text-foreground">Growth:</span> Continuous learning and helping others achieve their potential
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-muted-foreground font-inter">
                    <span className="font-semibold text-foreground">Impact:</span> Creating work that makes a positive difference in the world
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

export default About;