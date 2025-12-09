import { useState } from "react";
import { ChevronLeft, ChevronRight, Scale, Target, Award, Users } from "lucide-react";
import logoImg from "@/assets/gallery/logo-original.jpg";
import training1 from "@/assets/gallery/training-1.jpg";
import training2 from "@/assets/gallery/training-2.jpg";
import training3 from "@/assets/gallery/training-3.jpg";
import training4 from "@/assets/gallery/training-4.jpg";
import training5 from "@/assets/gallery/training-5.jpg";

const images = [logoImg, training1, training2, training3, training4, training5];

const features = [
  { icon: Scale, title: "خبرة قانونية", description: "أكثر من 10 سنوات في المجال القانوني" },
  { icon: Target, title: "تدريب متخصص", description: "برامج مصممة لتلبية احتياجات السوق" },
  { icon: Award, title: "شهادات معتمدة", description: "شهادات معترف بها محلياً ودولياً" },
  { icon: Users, title: "مجتمع قانوني", description: "شبكة واسعة من المحامين والقانونيين" },
];

const AboutSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="about" className="py-20 bg-navy-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gold font-playfair mb-4">
            نبذة عن الأكاديمية
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-24 h-px bg-gradient-to-r from-transparent to-gold" />
            <Scale className="text-gold w-6 h-6" />
            <div className="w-24 h-px bg-gradient-to-l from-transparent to-gold" />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            تعرف على أكاديمية VIP Legal Academy الرائدة في التدريب القانوني
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Slider */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-4 border-gold/30 shadow-gold">
              <img
                src={images[currentImage]}
                alt="VIP Legal Academy"
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 to-transparent" />

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-navy-dark/80 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-navy-dark transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-navy-dark/80 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-navy-dark transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            </div>

            {/* Image Indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentImage === index
                      ? "bg-gold w-8"
                      : "bg-gold/30 hover:bg-gold/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gold mb-4 font-playfair">
                VIP Legal Academy
              </h3>
              <p className="text-foreground leading-relaxed text-lg mb-4">
                أكاديمية VIP Legal Academy هي مؤسسة تعليمية رائدة متخصصة في التدريب القانوني والاستشارات القانونية. 
                تأسست على يد نخبة من الخبراء والمتخصصين في مختلف فروع القانون.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                نقدم برامج تدريبية شاملة تجمع بين الجوانب النظرية والتطبيقية، 
                مع التركيز على تطوير المهارات العملية اللازمة للنجاح في سوق العمل القانوني.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-navy/50 border border-gold/20 hover:border-gold/40 transition-all duration-300 group"
                  >
                    <Icon className="w-8 h-8 text-gold mb-3 group-hover:scale-110 transition-transform" />
                    <h4 className="text-gold font-bold mb-1">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
