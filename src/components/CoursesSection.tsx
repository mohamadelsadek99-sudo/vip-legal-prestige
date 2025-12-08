import { useState } from "react";
import { Scale, ChevronLeft, ChevronRight, CreditCard, Smartphone, Building2 } from "lucide-react";

const allCourses = [
  // Page 1
  [
    { title: "قانون الأسرة الشامل", description: "دورة متكاملة في قانون الأحوال الشخصية تشمل الزواج والطلاق والنفقة وحضانة الأطفال", price: "1500 جنيه" },
    { title: "القانون الجنائي المتقدم", description: "دراسة معمقة للجرائم والعقوبات وإجراءات التحقيق والمحاكمة الجنائية", price: "2000 جنيه" },
    { title: "القانون التجاري والشركات", description: "كل ما يخص الشركات التجارية وعقودها والمعاملات التجارية", price: "1800 جنيه" },
  ],
  // Page 2
  [
    { title: "صياغة العقود الاحترافية", description: "تعلم فن صياغة العقود القانونية بمختلف أنواعها بطريقة محترفة", price: "1200 جنيه" },
    { title: "المرافعات والإجراءات", description: "فن المرافعة أمام المحاكم وإجراءات التقاضي العملية", price: "1600 جنيه" },
    { title: "قانون العمل والتأمينات", description: "حقوق العمال وأصحاب العمل والتأمينات الاجتماعية", price: "1400 جنيه" },
  ],
  // Page 3
  [
    { title: "القانون الإداري", description: "دراسة شاملة للقانون الإداري والعقود الإدارية والقضاء الإداري", price: "1700 جنيه" },
    { title: "التحكيم التجاري الدولي", description: "آليات التحكيم في المنازعات التجارية الدولية", price: "2500 جنيه" },
    { title: "الملكية الفكرية", description: "حماية حقوق الملكية الفكرية وبراءات الاختراع والعلامات التجارية", price: "1900 جنيه" },
  ],
  // Page 4
  [
    { title: "القانون الدولي العام", description: "مبادئ القانون الدولي والعلاقات بين الدول والمنظمات الدولية", price: "2200 جنيه" },
    { title: "قانون البيئة", description: "التشريعات البيئية وحماية الموارد الطبيعية", price: "1300 جنيه" },
    { title: "القانون البحري", description: "قانون النقل البحري والتأمين البحري", price: "2100 جنيه" },
  ],
  // Page 5
  [
    { title: "الجرائم الإلكترونية", description: "مواجهة الجرائم المعلوماتية والأمن السيبراني القانوني", price: "1800 جنيه" },
    { title: "قانون الضرائب", description: "النظام الضريبي والتخطيط الضريبي للشركات والأفراد", price: "1600 جنيه" },
    { title: "القانون الدستوري", description: "دراسة الدستور والحقوق والحريات الأساسية", price: "1500 جنيه" },
  ],
  // Page 6
  [
    { title: "التوثيق والشهر العقاري", description: "إجراءات التوثيق وتسجيل العقارات", price: "1400 جنيه" },
    { title: "قانون المنافسة", description: "منع الاحتكار وحماية المنافسة في السوق", price: "1700 جنيه" },
    { title: "الإفلاس والتصفية", description: "إجراءات الإفلاس وإعادة الهيكلة المالية", price: "2000 جنيه" },
  ],
];

const paymentMethods = [
  { icon: CreditCard, name: "فيزا / ماستركارد", description: "الدفع ببطاقات الائتمان" },
  { icon: Smartphone, name: "فودافون كاش / المحافظ الإلكترونية", description: "الدفع عبر المحافظ الإلكترونية" },
  { icon: Building2, name: "تحويل بنكي", description: "التحويل المباشر للحساب البنكي" },
];

const CoursesSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);

  const totalPages = allCourses.length;

  return (
    <section id="courses" className="py-20 bg-navy relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gold font-playfair mb-4">
            دوراتنا التدريبية
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-24 h-px bg-gradient-to-r from-transparent to-gold" />
            <Scale className="text-gold w-6 h-6" />
            <div className="w-24 h-px bg-gradient-to-l from-transparent to-gold" />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            اختر من بين مجموعة متنوعة من الدورات القانونية المتخصصة
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {allCourses[currentPage].map((course, index) => (
            <div
              key={index}
              className="group bg-navy-dark/80 border border-gold/20 rounded-2xl p-6 hover:border-gold/50 transition-all duration-500 hover:scale-105 hover:shadow-gold animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Scale className="w-8 h-8 text-gold" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gold mb-3 font-playfair">
                {course.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {course.description}
              </p>

              {/* Price */}
              <div className="text-2xl font-bold text-gold-light mb-6">
                {course.price}
              </div>

              {/* CTA Button */}
              <button
                onClick={() => setSelectedCourse(selectedCourse === index + currentPage * 3 ? null : index + currentPage * 3)}
                className="w-full py-3 px-6 bg-gold text-navy-dark font-bold rounded-xl hover:bg-gold-light transition-all duration-300"
              >
                اكتشف الآن
              </button>

              {/* Payment Methods (shown when selected) */}
              {selectedCourse === index + currentPage * 3 && (
                <div className="mt-6 pt-6 border-t border-gold/20 animate-fade-in">
                  <h4 className="text-gold font-bold mb-4 text-center">طرق الدفع المتاحة</h4>
                  <div className="space-y-3">
                    {paymentMethods.map((method, idx) => {
                      const Icon = method.icon;
                      return (
                        <div
                          key={idx}
                          className="flex items-center gap-3 p-3 rounded-lg bg-navy/50 border border-gold/10"
                        >
                          <Icon className="w-5 h-5 text-gold" />
                          <div>
                            <div className="text-foreground font-medium text-sm">{method.name}</div>
                            <div className="text-muted-foreground text-xs">{method.description}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)}
            className="w-12 h-12 rounded-full bg-navy-dark border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-navy-dark transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentPage === index
                    ? "bg-gold w-8"
                    : "bg-gold/30 hover:bg-gold/50"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrentPage((prev) => (prev + 1) % totalPages)}
            className="w-12 h-12 rounded-full bg-navy-dark border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-navy-dark transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>

        {/* Page Indicator */}
        <div className="text-center mt-4 text-muted-foreground">
          صفحة {currentPage + 1} من {totalPages}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
