import { useState, useEffect } from "react";
import { Scale, ChevronDown } from "lucide-react";
import logo from "@/assets/gallery/logo.jpg";

// People images (right carousel)
import people1 from "@/assets/gallery/people-1.jpg";
import people2 from "@/assets/gallery/people-2.jpg";
import people3 from "@/assets/gallery/people-3.jpg";
import training1 from "@/assets/gallery/training-1.jpg";
import training2 from "@/assets/gallery/training-2.jpg";
import training3 from "@/assets/gallery/training-3.jpg";
import training4 from "@/assets/gallery/training-4.jpg";
import training5 from "@/assets/gallery/training-5.jpg";

// Course images (left carousel)
import course1 from "@/assets/gallery/course-1.jpg";
import course2 from "@/assets/gallery/course-2.jpg";
import course3 from "@/assets/gallery/course-3.jpg";
import course4 from "@/assets/gallery/course-4.jpg";
import course5 from "@/assets/gallery/course-5.jpg";
import course6 from "@/assets/gallery/course-6.jpg";
import course7 from "@/assets/gallery/course-7.jpg";

const promotionalMessages = [
  "⚖️ لأن التميز القانوني يبدأ بالاختيار الصحيح — خصم 50% على جميع خدماتنا",
  "🔔 لا تفوّت الفرصة! خصم 50% على كل الخدمات القانونية الآن"
];

const peopleImages = [logo, people1, people2, people3, training1, training2, training3, training4, training5];
const courseImages = [logo, course1, course2, course3, course4, course5, course6, course7];

const HeroSection = () => {
  const [currentPeopleImage, setCurrentPeopleImage] = useState(0);
  const [currentCourseImage, setCurrentCourseImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPeopleImage((prev) => (prev + 1) % peopleImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCourseImage((prev) => (prev + 1) % courseImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

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
        {/* Promotional Messages Banner - Continuous Loop */}
        <div className="absolute top-24 left-0 right-0 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap text-gold font-bold text-lg md:text-xl py-3 bg-gold/10 backdrop-blur-sm border-y border-gold/20">
            {[...promotionalMessages, ...promotionalMessages, ...promotionalMessages, ...promotionalMessages].map((msg, i) => (
              <span key={i} className="inline-block px-8">{msg}</span>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center text-center max-w-5xl mx-auto mt-16">
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
              أكاديمية كبار الشخصيات القانونية ⚖️
            </h3>
          </div>

          {/* Image Carousels */}
          <div className="flex flex-col md:flex-row gap-6 mb-10 w-full max-w-4xl animate-fade-in-up animation-delay-100">
            {/* People Images - Right */}
            <div className="flex-1 relative h-64 md:h-80 rounded-xl overflow-hidden border-2 border-gold/30 shadow-gold">
              {peopleImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`فريق الأكاديمية ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-contain bg-navy-dark transition-opacity duration-700 ${
                    index === currentPeopleImage ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/50 to-transparent" />
              <div className="absolute bottom-2 left-2 text-gold text-sm font-tajawal bg-navy-dark/70 px-2 py-1 rounded">
                فريق الأكاديمية
              </div>
            </div>

            {/* Separator */}
            <div className="hidden md:flex items-center">
              <div className="w-px h-full bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
            </div>

            {/* Course Images - Left */}
            <div className="flex-1 relative h-64 md:h-80 rounded-xl overflow-hidden border-2 border-gold/30 shadow-gold">
              {courseImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`كورسات الأكاديمية ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-contain bg-navy-dark transition-opacity duration-700 ${
                    index === currentCourseImage ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/50 to-transparent" />
              <div className="absolute bottom-2 right-2 text-gold text-sm font-tajawal bg-navy-dark/70 px-2 py-1 rounded">
                كورساتنا
              </div>
            </div>
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
