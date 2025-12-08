import { Scale, Users, FileText, Building2, Gavel, Shield, Briefcase, FileCheck } from "lucide-react";

const services = [
  { icon: Users, title: "قانون الأسرة", description: "استشارات متكاملة في قضايا الأحوال الشخصية والزواج والطلاق وحضانة الأطفال" },
  { icon: Gavel, title: "القضايا الجنائية", description: "الدفاع في القضايا الجنائية والجنح والمخالفات أمام جميع درجات التقاضي" },
  { icon: Building2, title: "القضايا التجارية", description: "تمثيل الشركات والأفراد في المنازعات التجارية والعقود" },
  { icon: FileText, title: "صياغة العقود", description: "إعداد ومراجعة العقود التجارية والإدارية بأعلى معايير الدقة القانونية" },
  { icon: Shield, title: "الاستشارات القانونية", description: "استشارات قانونية شاملة للأفراد والشركات في مختلف المجالات" },
  { icon: Briefcase, title: "القضايا العمالية", description: "حل النزاعات العمالية وحماية حقوق العمال وأصحاب العمل" },
  { icon: Scale, title: "التحكيم والوساطة", description: "تسوية المنازعات بطرق ودية من خلال التحكيم والوساطة" },
  { icon: FileCheck, title: "التوثيق والتسجيل", description: "خدمات التوثيق والشهر العقاري وتسجيل العقارات" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-navy-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gold font-playfair mb-4">
            خدماتنا القانونية
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-24 h-px bg-gradient-to-r from-transparent to-gold" />
            <Scale className="text-gold w-6 h-6" />
            <div className="w-24 h-px bg-gradient-to-l from-transparent to-gold" />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            نقدم مجموعة شاملة من الخدمات القانونية لتلبية جميع احتياجاتكم
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-navy/50 border border-gold/20 rounded-2xl hover:border-gold/50 transition-all duration-500 hover:scale-105 hover:shadow-gold animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <Icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-gold mb-3 font-playfair">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
