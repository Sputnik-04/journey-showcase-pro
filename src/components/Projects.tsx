import { Button } from './ui/button';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with modern UI, payment processing, and admin dashboard. Built with React, Node.js, and PostgreSQL.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=600",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Project Management Tool",
      description: "Collaborative project management application with real-time updates, task tracking, and team communication features.",
      technologies: ["TypeScript", "Next.js", "MongoDB", "Socket.io", "Tailwind"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&h=600",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Analytics Dashboard",
      description: "Data visualization dashboard for business intelligence with interactive charts, filters, and reporting capabilities.",
      technologies: ["React", "D3.js", "Python", "FastAPI", "Docker"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=600",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Mobile App Backend",
      description: "Scalable REST API backend for a mobile application serving 10K+ users with authentication, real-time features, and cloud storage.",
      technologies: ["Node.js", "Express", "MongoDB", "Redis", "AWS"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&h=600",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-primary mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-4"></div>
            <p className="text-muted-foreground font-inter text-lg max-w-2xl mx-auto">
              A showcase of my recent work demonstrating technical skills, creative problem-solving, and attention to detail.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button 
                      size="sm"
                      className="bg-primary-foreground text-primary hover:bg-accent hover:text-accent-foreground"
                    >
                      Live Demo
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                    >
                      View Code
                    </Button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-semibold text-primary mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground font-inter leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-accent-light text-foreground font-inter text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-inter font-medium"
            >
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;