'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ChevronDown, Play, Star } from 'lucide-react'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden 
                 bg-hero-pattern bg-gray-50"
    >
      {/* Background gradient blobs */}
      <div
        className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, #1A237E 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-20 left-0 w-80 h-80 rounded-full opacity-8 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, #C5A059 0%, transparent 70%)',
        }}
      />

      <div className="container-max px-4 md:px-8 lg:px-16 pt-24 md:pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="order-1 lg:order-1"
          >
            {/* Badge */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-6">
              <div className="flex items-center gap-1 bg-white border border-gold/30 
                             rounded-full px-4 py-1.5 shadow-sm">
                <Star className="w-4 h-4 text-gold fill-gold" />
                <span className="text-sm font-semibold text-gray-700">
                  خبير التجارة الإلكترونية في السوق السعودي
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-navy leading-tight mb-6"
            >
              نحوّل متجرك
              <br />
              <span className="text-gold relative">
                إلى ماكينة مبيعات
                <svg
                  className="absolute -bottom-2 right-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 10C50 3 100 1 150 5C200 9 250 7 298 2"
                    stroke="#C5A059"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br />
              <span className="text-navy">مستدامة</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-lg"
            >
              استراتيجيات إعلانية مثبتة، SEO متخصص، وتصميم متاجر يحوّل الزوار إلى مشترين.
              خبرة +5 سنوات في السوق السعودي.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-4 mb-12"
            >
              <Link href="/contact" className="btn-primary flex items-center gap-2">
                ابدأ مشروعك الآن
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <Link
                href="/case-studies"
                className="flex items-center gap-2 text-navy font-semibold 
                           hover:text-gold transition-colors group"
              >
                <div
                  className="w-10 h-10 rounded-full border-2 border-navy group-hover:border-gold 
                              flex items-center justify-center transition-colors"
                >
                  <Play className="w-4 h-4 fill-navy group-hover:fill-gold transition-colors mr-0.5" />
                </div>
                شاهد النتائج
              </Link>
            </motion.div>

            {/* Social Proof Numbers */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-6 md:gap-8"
            >
              {[
                { value: '5+', label: 'سنوات خبرة' },
                { value: '50+', label: 'متجر نجح' },
                { value: '300%', label: 'متوسط نمو المبيعات' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-black text-navy">{stat.value}</p>
                  <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image / Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="order-2 lg:order-2 relative"
          >
            {/* Main Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl 
                           bg-gradient-to-br from-navy to-navy-light aspect-[4/5] max-w-md mx-auto">
              {/* Placeholder for professional photo */}
              <div className="absolute inset-0 flex items-end p-8">
                <div className="w-full">
                  {/* Overlay card */}
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                    <p className="text-white font-bold text-lg">محمد العربي</p>
                    <p className="text-gold text-sm">خبير التجارة الإلكترونية 🇸🇦</p>
                  </div>
                </div>
              </div>

              {/* Decorative grid */}
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
                  backgroundSize: '30px 30px',
                }}
              />

              {/* Center text placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white opacity-30">
                  <div className="w-32 h-32 rounded-full bg-white/20 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-6xl font-black">م</span>
                  </div>
                  <p className="text-sm">أضف صورتك الاحترافية هنا</p>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="hidden md:block absolute top-10 -right-4 md:-right-10 bg-white rounded-2xl p-4 
                         shadow-xl border border-gray-100 w-44"
            >
              <p className="text-2xl font-black text-green-500">+287%</p>
              <p className="text-xs text-gray-500 font-medium">نمو مبيعات أحد المتاجر</p>
              <p className="text-xs text-gray-400 mt-1">خلال 90 يوم فقط ✨</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="hidden md:block absolute bottom-16 -left-4 md:-left-10 bg-white rounded-2xl p-4 
                         shadow-xl border border-gray-100 w-48"
            >
              <div className="flex items-center gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-3 h-3 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-xs text-gray-700 font-semibold">"أفضل استثمار لمتجري"</p>
              <p className="text-xs text-gray-400 mt-1">— صاحب متجر سلة</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <p className="text-xs text-gray-400 font-medium">اكتشف المزيد</p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}
