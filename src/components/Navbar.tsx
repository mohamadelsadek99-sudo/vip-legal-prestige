import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/gallery/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "الرئيسية" },
    { href: "#about", label: "من نحن" },
    { href: "#courses", label: "الدورات" },
    { href: "#services", label: "خدماتنا" },
    { href: "#company-services", label: "استشارات الشركات" },
    { href: "#achievements", label: "إنجازاتنا" },
    { href: "#contact", label: "تواصل معنا" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-dark/95 backdrop-blur-md border-b border-gold/20">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-4">
            <img src={logo} alt="VIP Legal Academy" className="h-16 w-16 rounded-full object-cover border-2 border-gold shadow-lg" />
            <div className="hidden sm:block">
              <h1 className="text-gold font-bold text-3xl font-playfair tracking-wide">
                <span className="text-gold-light">V</span>I<span className="text-gold-light">P</span>
              </h1>
              <p className="text-gold/80 text-base font-medium">Legal Academy</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-gold transition-colors duration-300 font-medium text-sm relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gold hover:text-gold-light transition-colors p-2"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gold/20 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-foreground hover:text-gold transition-colors duration-300 font-medium py-2 px-4 hover:bg-gold/5 rounded-lg"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
