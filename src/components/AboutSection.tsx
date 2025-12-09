import { useState } from "react";
import { ChevronLeft, ChevronRight, Scale, CheckCircle } from "lucide-react";
import logoImg from "@/assets/gallery/logo-original.jpg";
import training1 from "@/assets/gallery/training-1.jpg";
import training2 from "@/assets/gallery/training-2.jpg";
import training3 from "@/assets/gallery/training-3.jpg";
import training4 from "@/assets/gallery/training-4.jpg";
import training5 from "@/assets/gallery/training-5.jpg";

const images = [logoImg, training1, training2, training3, training4, training5];

const reasons = [
  "نقدم برامج تدريبية شاملة تجمع بين الجوانب النظرية والتطبيقية، مع التركيز على تطوير المهارات العملية اللازمة للنجاح في سوق العمل القانوني",
  "محاكاة واقعية تدريب عملي بنسبة 100% لما يحدث داخل هيئة الاستثمار والمحاكم ومكتب العمل والجهات الحكومية",
  "لكل تخصصات محامي الشركات من العقود والعمل والشركات والتحقيقات الداخلية والحكومية حتى إدارة المخاطر والمسؤولية القانونية",
  "شهادة معتمدة تضيف لقيمتك المهنية VIP-Legal Academy اسم له وزن في عالم التدريب القانوني داخل وخارج مصر (شهادة خبرة - ختم النسر - شهادة محتوى - شهادة البورد الأمريكي - الجامعة البريطانية)",
  "بيئة احترافية تشبه الواقع العملي بحيث تتم الجلسات داخل الأكاديمية في أجواء مكاتب قانونية حقيقية تساعدك لبناء شخصية المحامي المحترف",
  "البرنامج يكثف سنوات من الخبرة العملية في 8 أسابيع ويزيدك بسنوات وقضايا عالمية لبناء مستقبل مهني قوي",
  "البرنامج انطلاقة نحو الحصول على لقب مستشار شركات وذلك طبقاً لنص المادة 60 المحاماة رقم 17 لسنة 1983 وتعديلاته",
  "التدريب يكون على أيادي متخصصين من (مستشارين شركات - دكاترة متخصصين - مدربين دوليين)",
  "برنامج تدريبي مناسب لجميع المحامين وطلاب القانون وطلاب الشريعة والقانون",
  "اكتساب جميع المهارات التي تميز محامي الشركات عن المحامي الحر",
  "الأكاديمية تقدم دعم حقيقي أثناء وبعد التدريب وتوفر استشارات وترشيحات وظائف بصفة مجانية وتوجيه مهني",
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
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
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
              <h3 className="text-2xl md:text-3xl font-bold text-gold mb-4 font-playfair text-center lg:text-right">
                VIP Academy ⚜️
              </h3>
              <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-6 font-bold text-center lg:text-right">
                أكاديمية كبار الشخصيات القانونية ⚖️
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed text-center lg:text-right">
                أكاديمية تدريب قانوني من الطراز الفريد من نوعها على مستوى الشرق الأوسط
              </p>
            </div>

            {/* Reasons Title */}
            <div className="bg-gold/10 border border-gold/30 rounded-xl p-4">
              <h4 className="text-xl md:text-2xl font-bold text-gold text-center font-amiri">
                أكثر من 10 أسباب تخليك تشترك في VIP-Legal Academy
              </h4>
            </div>

            {/* Reasons List */}
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-navy/50 border border-gold/20 hover:border-gold/40 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <span className="text-foreground text-base md:text-lg leading-relaxed">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;