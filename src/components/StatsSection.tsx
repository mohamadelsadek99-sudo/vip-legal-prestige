import { useEffect, useState, useRef } from "react";
import { Users, BookOpen, Award, GraduationCap } from "lucide-react";

const stats = [
  { icon: Users, value: 500, suffix: "+", label: "متدرب" },
  { icon: GraduationCap, value: 15, suffix: "+", label: "محاضر متخصص" },
  { icon: BookOpen, value: 25, suffix: "+", label: "دورة تدريبية" },
  { icon: Award, value: 50, suffix: "+", label: "تدريب معتمد" },
];

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        const duration = 2000;
        const steps = 60;
        const increment = stat.value / steps;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            current = stat.value;
            clearInterval(timer);
          }
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = Math.floor(current);
            return newCounts;
          });
        }, duration / steps);
      });
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-16 bg-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/10 via-transparent to-gold/10" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`flex flex-col items-center text-center p-6 rounded-2xl bg-navy-dark/50 border border-gold/20 hover:border-gold/40 transition-all duration-500 hover:scale-105 hover:shadow-gold ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-gold" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-gold font-playfair mb-2">
                  {counts[index]}{stat.suffix}
                </div>
                <div className="text-foreground font-tajawal font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
