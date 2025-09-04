const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-light text-primary-foreground py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="font-playfair text-xl font-semibold">Your Name</p>
            <p className="font-inter text-primary-foreground/80 text-sm">
              Professional Portfolio
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="font-inter text-primary-foreground/80 text-sm">
              © {currentYear} Your Name. All rights reserved.
            </p>
            <p className="font-inter text-primary-foreground/60 text-xs mt-1">
              Built with passion and attention to detail
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;