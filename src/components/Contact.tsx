import { Button } from './ui/button';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold mb-6">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-4"></div>
            <p className="text-primary-foreground/80 font-inter text-lg max-w-2xl mx-auto">
              I'm always interested in new opportunities, collaborations, and meaningful conversations. 
              Let's discuss how we can work together.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <h3 className="font-playfair text-2xl font-semibold mb-6">
                Get In Touch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-inter font-medium">Email</p>
                    <p className="text-primary-foreground/80">your.email@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-inter font-medium">Phone</p>
                    <p className="text-primary-foreground/80">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-inter font-medium">Location</p>
                    <p className="text-primary-foreground/80">Your City, Country</p>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="pt-8">
                <h4 className="font-playfair text-xl font-semibold mb-4">
                  Connect Online
                </h4>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-primary-foreground/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-primary-foreground/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-primary-foreground/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-primary-foreground/5 rounded-lg p-8">
              <h3 className="font-playfair text-2xl font-semibold mb-6">
                Send a Message
              </h3>
              
              <form className="space-y-6">
                <div>
                  <label className="block font-inter font-medium mb-2">
                    Name
                  </label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg focus:outline-none focus:border-accent text-primary-foreground placeholder:text-primary-foreground/60"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label className="block font-inter font-medium mb-2">
                    Email
                  </label>
                  <input 
                    type="email"
                    className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg focus:outline-none focus:border-accent text-primary-foreground placeholder:text-primary-foreground/60"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block font-inter font-medium mb-2">
                    Message
                  </label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg focus:outline-none focus:border-accent text-primary-foreground placeholder:text-primary-foreground/60 resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  ></textarea>
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-inter font-medium"
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;