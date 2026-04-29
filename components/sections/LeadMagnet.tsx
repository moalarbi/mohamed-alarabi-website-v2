'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Download, CheckCircle, Gift } from 'lucide-react'

const benefits = [
  '10 أخطاء تقتل مبيعات متجرك (وكيف تتجنبها)',
  'قائمة فحص جاهزية المتجر للإعلانات',
  'نموذج خطة تسويقية جاهزة لسلة وزد',
  'أسرار تحسين معدل التحويل في السوق السعودي',
]

export default function LeadMagnet() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setIsLoading(true)
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500))
    setIsSubmitted(true)
    setIsLoading(false)
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-navy to-navy-light rounded-3xl overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Content */}
            <div className="p-10 md:p-14">
              <div className="inline-flex items-center gap-2 bg-gold/20 rounded-full 
                             px-4 py-1.5 mb-6">
                <Gift className="w-4 h-4 text-gold" />
                <span className="text-sm font-semibold text-gold">مجاني 100%</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                دليل تحسين المتاجر
                <br />
                <span className="text-gold">الإلكترونية السعودية</span>
              </h2>

              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                أكثر من 20 صفحة من الاستراتيجيات المثبتة لزيادة مبيعاتك.
                حمّله الآن مجاناً.
              </p>

              {/* Benefits */}
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Form */}
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-500/20 border border-green-400/30 rounded-2xl p-6 text-center"
                >
                  <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-3" />
                  <p className="text-white font-bold text-lg mb-1">تم الإرسال! 🎉</p>
                  <p className="text-white/70 text-sm">
                    راجع بريدك الإلكتروني — الدليل في طريقه إليك
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="أدخل بريدك الإلكتروني"
                    required
                    className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3.5 
                               text-white placeholder:text-white/40 
                               focus:outline-none focus:border-gold transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark 
                               text-white px-6 py-3.5 rounded-xl font-bold transition-all 
                               duration-300 hover:shadow-lg hover:shadow-gold/30 shrink-0
                               disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white 
                                      rounded-full animate-spin" />
                    ) : (
                      <>
                        <Download className="w-4 h-4" />
                        احصل عليه الآن
                      </>
                    )}
                  </button>
                </form>
              )}

              {!isSubmitted && (
                <p className="text-white/40 text-xs mt-3">
                  🔒 لن نشارك بريدك مع أحد. يمكنك إلغاء الاشتراك في أي وقت.
                </p>
              )}
            </div>

            {/* Visual */}
            <div className="relative hidden md:flex items-center justify-center p-10 
                           bg-white/5">
              {/* Decorative document mockup */}
              <div className="relative">
                <div className="w-72 bg-white rounded-3xl shadow-2xl p-8">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 bg-navy rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">م</span>
                    </div>
                    <div>
                      <p className="text-navy font-bold text-sm leading-none">محمد العربي</p>
                      <p className="text-gray-400 text-xs">دليل التجارة الإلكترونية</p>
                    </div>
                  </div>
                  <div className="h-3 bg-navy rounded-full mb-3" />
                  <div className="h-2 bg-gray-200 rounded-full mb-2 w-4/5" />
                  <div className="h-2 bg-gray-200 rounded-full mb-6 w-3/5" />
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-center gap-2 mb-3">
                      <div className="w-4 h-4 rounded-full bg-gold/20 shrink-0" />
                      <div className="h-2 bg-gray-100 rounded-full flex-1" />
                    </div>
                  ))}
                  <div className="mt-6 bg-gold rounded-xl py-2.5 text-center">
                    <span className="text-white text-xs font-bold">تحميل مجاني</span>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gold/20 rounded-2xl 
                               rotate-12 blur-sm" />
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/20 rounded-xl 
                               -rotate-12 blur-sm" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
