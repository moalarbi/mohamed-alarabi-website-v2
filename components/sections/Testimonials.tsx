'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'عبدالله الشهري',
    role: 'صاحب متجر أزياء',
    platform: 'سلة',
    rating: 5,
    text: 'شغل محمد غيّر تجارتي بالكامل. مبيعاتي زادت أكثر من 3 أضعاف في أول 3 أشهر. الأهم إنه ما يبيع وهم — يقدم نتائج حقيقية وأرقام واضحة.',
    result: '+285% مبيعات',
  },
  {
    name: 'نورة الزهراني',
    role: 'صاحبة متجر عناية',
    platform: 'زد',
    rating: 5,
    text: 'كنت أصرف على الإعلانات بدون نتيجة. بعد محمد، صارت كل ريال تُصرف يرجع 6 ريالات. ما توقعت التحسن يكون بهذه السرعة!',
    result: 'ROAS 6.2x',
  },
  {
    name: 'محمد الحربي',
    role: 'مدير متجر إلكتروني',
    platform: 'شوبيفاي',
    rating: 5,
    text: 'SEO متجرنا كان صفراً. الآن نظهر في الصفحة الأولى لأهم الكلمات المفتاحية في مجالنا. العملاء يجوننا بدون ما ندفع على إعلانات.',
    result: '+420% زيارات عضوية',
  },
  {
    name: 'سارة القحطاني',
    role: 'رائدة أعمال',
    platform: 'سلة',
    rating: 5,
    text: 'أفضل استثمار عملته لمتجري. محمد ما بس خبير — هو يفهم السوق السعودي ومزاج العميل السعودي بشكل مختلف كلياً.',
    result: '+190% تحويلات',
  },
  {
    name: 'فيصل العمري',
    role: 'صاحب متجر إلكترونيات',
    platform: 'زد',
    rating: 5,
    text: 'وضوح في الخطة، شفافية في النتائج، واحترافية في التنفيذ. هذا اختصار تجربتي مع محمد العربي.',
    result: '+340% إيرادات',
  },
  {
    name: 'منى الدوسري',
    role: 'متجر عبايات',
    platform: 'سلة',
    rating: 5,
    text: 'موسم الرياض كان فرصتنا الكبيرة، ومحمد ساعدنا نستغلها بالكامل. أرقام ما توقعتها أبداً!',
    result: '+510% مبيعات الموسم',
  },
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-gray-50" id="testimonials">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-navy/5 rounded-full px-4 py-1.5 mb-4">
            <span className="text-sm font-semibold text-navy">آراء العملاء</span>
          </div>
          <h2 className="section-title mb-4">
            ماذا يقول{' '}
            <span className="text-gold">أصحاب المتاجر</span>
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            تجارب حقيقية من أصحاب متاجر سعودية حققوا نتائج استثنائية
          </p>
          <div className="gold-line mx-auto mt-6" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="card p-6 bg-white relative"
            >
              {/* Quote icon */}
              <div className="absolute top-4 left-4 opacity-10">
                <Quote className="w-10 h-10 text-navy" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Result Badge */}
              <div className="inline-flex items-center gap-1.5 bg-green-50 border border-green-200 
                             rounded-full px-3 py-1 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <span className="text-xs font-bold text-green-700">{t.result}</span>
              </div>

              {/* Text */}
              <p className="text-gray-700 text-sm leading-relaxed mb-5">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-sm">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-navy text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">
                    {t.role} · {t.platform}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
