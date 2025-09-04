import heroPortrait from '../assets/hero-portrait.jpg';
import { Button } from './ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-accent font-inter font-medium text-lg">
                Hello, I'm
              </p>
              <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-primary leading-tight">
                Your Name
              </h1>
              <h2 className="font-inter text-2xl lg:text-3xl text-primary-light font-medium">
                Professional Title
              </h2>
              <p className="text-lg text-muted-foreground font-inter leading-relaxed max-w-lg">
                Passionate professional with expertise in creating innovative solutions. 
                I bring creativity, technical skills, and strategic thinking to every project.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToProjects}
                size="lg"
                className="bg-primary hover:bg-primary-light text-primary-foreground font-inter font-medium"
              >
                View My Work
              </Button>
              <Button 
                onClick={scrollToContact}
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-inter font-medium"
              >
                Get In Touch
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl">
                <img 
                  src={heroPortrait} 
                  alt="Professional portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -z-10 top-4 left-4 w-80 h-80 rounded-full bg-accent/20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;