'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ShoppingBag, Megaphone, Search, TrendingUp, ArrowLeft } from 'lucide-react'

const services = [
  {
    icon: ShoppingBag,
    title: 'تصميم المتاجر الإلكترونية',
    description:
      'متاجر سلة وزد احترافية مُحسَّنة للتحويل. تصميم يجذب العميل ويدفعه للشراء.',
    features: ['تصميم UI/UX احترافي', 'تحسين سرعة التحميل', 'تجربة مستخدم سلسة'],
    href: '/services/ecommerce-store',
    color: 'from-blue-50 to-navy/5',
    iconBg: 'bg-navy',
  },
  {
    icon: Megaphone,
    title: 'إدارة الإعلانات المدفوعة',
    description:
      'حملات سناب وتيك توك ومتا تحقق أقصى عائد على الإنفاق الإعلاني ROAS في السوق السعودي.',
    features: ['سناب شات وتيك توك', 'ميتا (فيسبوك وانستاغرام)', 'تحليل وتحسين مستمر'],
    href: '/services/ads-management',
    color: 'from-gold/5 to-amber-50',
    iconBg: 'bg-gold',
  },
  {
    icon: Search,
    title: 'تحسين محركات البحث SEO',
    description:
      'ظهر في الصفحة الأولى لكلمات بحثية تجلب عملاء جاهزين للشراء في السوق السعودي.',
    features: ['بحث الكلمات المفتاحية', 'تحسين صفحات المنتجات', 'بناء الروابط الخلفية'],
    href: '/services/seo-optimization',
    color: 'from-green-50 to-emerald-50',
    iconBg: 'bg-emerald-600',
  },
  {
    icon: TrendingUp,
    title: 'تحسين معدل التحويل CRO',
    description:
      'حوّل المزيد من زوارك إلى مشترين بتحسين كل نقطة في رحلة العميل داخل متجرك.',
    features: ['تحليل سلوك الزوار', 'اختبارات A/B', 'تحسين صفحات الهبوط'],
    href: '/services/cro',
    color: 'from-purple-50 to-violet-50',
    iconBg: 'bg-violet-600',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Services() {
  return (
    <section className="section-padding bg-gray-50" id="services">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-navy/5 rounded-full px-4 py-1.5 mb-4">
            <span className="text-sm font-semibold text-navy">ما نقدمه لك</span>
          </div>
          <h2 className="section-title mb-4">
            حلول متكاملة لنمو{' '}
            <span className="text-gold">متجرك الإلكتروني</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            كل خدمة مصممة خصيصًا للسوق السعودي، بأساليب مثبتة تحقق نتائج حقيقية قابلة للقياس
          </p>
          <div className="gold-line mx-auto mt-6" />
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className={`card p-8 bg-gradient-to-br ${service.color} group cursor-pointer`}
              >
                <div className="flex items-start gap-5">
                  <div
                    className={`${service.iconBg} w-14 h-14 rounded-2xl flex items-center 
                                justify-center shrink-0 shadow-lg 
                                group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-navy mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-5">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 text-navy font-semibold 
                                 text-sm hover:text-gold transition-colors group/link"
                    >
                      اكتشف المزيد
                      <ArrowLeft className="w-4 h-4 group-hover/link:-translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link href="/services" className="btn-secondary">
            عرض جميع الخدمات
          </Link>
        </div>
      </div>
    </section>
  )
}
