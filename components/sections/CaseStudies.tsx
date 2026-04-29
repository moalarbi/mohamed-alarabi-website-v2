'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, TrendingUp, ShoppingCart, Users } from 'lucide-react'

const caseStudies = [
  {
    brand: 'متجر الأزياء السعودي',
    category: 'أزياء ومودة',
    platform: 'سلة',
    challenge: 'كان المتجر يعاني من تكلفة اكتساب عالية وسلات متروكة تجاوزت 70%',
    solution: 'إعادة هيكلة حملات سناب شات + تحسين صفحات المنتجات + إعداد إيميل للسلات المتروكة',
    results: [
      { icon: TrendingUp, label: 'زيادة المبيعات', value: '+287%', color: 'text-green-600' },
      { icon: ShoppingCart, label: 'تقليل السلات المتروكة', value: '-45%', color: 'text-blue-600' },
      { icon: Users, label: 'تكلفة الاكتساب', value: '-38%', color: 'text-purple-600' },
    ],
    period: '90 يوم',
    color: 'from-navy/5 to-blue-50',
  },
  {
    brand: 'متجر العناية بالبشرة',
    category: 'تجميل وعناية',
    platform: 'زد',
    challenge: 'منتجات عالية الجودة لكن لا أحد يعرفها. ميزانية إعلانية تُصرف بدون نتائج واضحة.',
    solution: 'استراتيجية محتوى تيك توك + إعادة استهداف Meta + تحسين SEO لمصطلحات التجميل السعودية',
    results: [
      { icon: TrendingUp, label: 'نمو الإيرادات', value: '+312%', color: 'text-green-600' },
      { icon: ShoppingCart, label: 'عائد الإنفاق ROAS', value: '6.5x', color: 'text-gold' },
      { icon: Users, label: 'عملاء جدد شهرياً', value: '+850', color: 'text-purple-600' },
    ],
    period: '4 أشهر',
    color: 'from-gold/5 to-amber-50',
  },
]

export default function CaseStudies() {
  return (
    <section className="section-padding bg-white" id="case-studies">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gold/10 rounded-full px-4 py-1.5 mb-4">
            <span className="text-sm font-semibold text-gold">نتائج حقيقية</span>
          </div>
          <h2 className="section-title mb-4">
            متاجر حققت{' '}
            <span className="text-gold">نتائج استثنائية</span>
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            قبل وبعد — أرقام حقيقية من متاجر سعودية عملنا معها
          </p>
          <div className="gold-line mx-auto mt-6" />
        </div>

        {/* Case Studies */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.brand}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className={`card p-8 bg-gradient-to-br ${cs.color}`}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold text-gold bg-gold/10 
                                     px-3 py-1 rounded-full">
                      {cs.category}
                    </span>
                    <span className="text-xs font-semibold text-navy bg-navy/10 
                                     px-3 py-1 rounded-full">
                      {cs.platform}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-navy">{cs.brand}</h3>
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-400">المدة</p>
                  <p className="font-bold text-navy text-sm">{cs.period}</p>
                </div>
              </div>

              {/* Challenge */}
              <div className="mb-4">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  التحدي
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">{cs.challenge}</p>
              </div>

              {/* Solution */}
              <div className="mb-6">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  الحل
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">{cs.solution}</p>
              </div>

              {/* Results */}
              <div className="border-t border-gray-200 pt-5">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  النتائج
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {cs.results.map((result) => {
                    const Icon = result.icon
                    return (
                      <div key={result.label} className="text-center">
                        <p className={`text-2xl font-black ${result.color} mb-1`}>
                          {result.value}
                        </p>
                        <p className="text-xs text-gray-500 leading-tight">{result.label}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/case-studies" className="btn-primary flex items-center gap-2 inline-flex">
            عرض جميع دراسات الحالة
            <ArrowLeft className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
