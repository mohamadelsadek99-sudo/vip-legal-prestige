import { useState } from "react";
import { Scale, Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open WhatsApp with the message
    const message = `مرحباً، أنا ${formData.name}
البريد الإلكتروني: ${formData.email}
رقم الهاتف: ${formData.phone}

${formData.message}`;
    
    window.open(`https://wa.me/201201821140?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-navy relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gold font-playfair mb-4">
            تواصل معنا
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-24 h-px bg-gradient-to-r from-transparent to-gold" />
            <Scale className="text-gold w-6 h-6" />
            <div className="w-24 h-px bg-gradient-to-l from-transparent to-gold" />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            نحن هنا للإجابة على جميع استفساراتكم
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-navy-dark/80 border border-gold/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gold mb-6 font-playfair">
              أرسل لنا رسالة
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-foreground mb-2 font-medium">الاسم الكامل</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-navy border border-gold/20 rounded-xl text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none transition-colors"
                  placeholder="أدخل اسمك الكامل"
                  required
                />
              </div>
              <div>
                <label className="block text-foreground mb-2 font-medium">البريد الإلكتروني</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-navy border border-gold/20 rounded-xl text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none transition-colors"
                  placeholder="أدخل بريدك الإلكتروني"
                  required
                />
              </div>
              <div>
                <label className="block text-foreground mb-2 font-medium">رقم الهاتف</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-navy border border-gold/20 rounded-xl text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none transition-colors"
                  placeholder="أدخل رقم هاتفك"
                  required
                />
              </div>
              <div>
                <label className="block text-foreground mb-2 font-medium">رسالتك</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-navy border border-gold/20 rounded-xl text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none transition-colors resize-none"
                  placeholder="اكتب رسالتك هنا..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-gold text-navy-dark font-bold rounded-xl hover:bg-gold-light transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                إرسال الرسالة
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Info Cards */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-5 bg-navy-dark/80 border border-gold/20 rounded-xl hover:border-gold/50 transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-gold font-bold mb-1">اتصل بنا</h4>
                  <a href="tel:+201201821140" className="text-foreground hover:text-gold transition-colors" dir="ltr">
                    +20 120 182 1140
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 bg-navy-dark/80 border border-gold/20 rounded-xl hover:border-gold/50 transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-gold font-bold mb-1">البريد الإلكتروني</h4>
                  <a href="mailto:vip2Academy@gmail.com" className="text-foreground hover:text-gold transition-colors">
                    vip2Academy@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 bg-navy-dark/80 border border-gold/20 rounded-xl hover:border-gold/50 transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-gold font-bold mb-1">العنوان</h4>
                  <p className="text-foreground">الإسكندرية - القاهرة، مصر</p>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="rounded-2xl overflow-hidden border border-gold/20 h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.2456!2d29.9187!3d31.2001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c49126710fd3%3A0xb4e0cda629ee6bb9!2sAlexandria%2C%20Egypt!5e0!3m2!1sen!2seg!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="VIP Legal Academy Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
