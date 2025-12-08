import { Scale, ChevronDown } from "lucide-react";
import logo from "@/assets/gallery/logo.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Logo Pattern */}
      <div className="absolute inset-0 bg-navy-dark">
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url(${logo})`,
            backgroundRepeat: 'repeat',
            backgroundSize: '120px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark via-transparent to-navy-dark" />
      </div>

      {/* Animated Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse animation-delay-200" />
      
      {/* Gold Lines Decoration */}
      <div className="absolute left-0 top-1/4 w-32 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="absolute right-0 bottom-1/4 w-32 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Logo */}
          <div className="relative mb-8 animate-scale-in">
            <div className="absolute inset-0 bg-gold/20 rounded-full blur-2xl scale-150" />
            <img 
              src={logo} 
              alt="VIP Legal Academy Logo" 
              className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-4 border-gold shadow-gold relative z-10"
            />
          </div>

          {/* Academy Name */}
          <div className="space-y-4 mb-8 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-playfair tracking-wider">
              <span className="text-gold-light">V</span>
              <span className="text-gold">I</span>
              <span className="text-gold-light">P</span>
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gold font-playfair">
              Legal Academy
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold" />
              <Scale className="text-gold w-8 h-8" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold" />
            </div>
            <h3 className="text-2xl md:text-3xl text-foreground font-tajawal font-bold">
              الأكاديمية القانونية
            </h3>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-10 animate-fade-in-up animation-delay-200 font-tajawal">
            نقدم لك أفضل البرامج التدريبية والاستشارات القانونية المتخصصة، 
            لبناء مستقبلك المهني في عالم القانون مع نخبة من الخبراء والمتخصصين
          </p>

          {/* CTA Button */}
          <a
            href="#courses"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gold text-navy-dark font-bold text-lg rounded-full hover:bg-gold-light transition-all duration-300 hover:scale-105 shadow-gold animate-fade-in-up animation-delay-300"
          >
            اكتشف دوراتنا
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gold/50" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
