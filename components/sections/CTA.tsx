'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Calendar, MessageCircle } from 'lucide-react'

export default function CTA() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-gold/10 rounded-full px-4 py-1.5 mb-6">
            <span className="text-sm font-semibold text-gold">ابدأ رحلتك</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-navy mb-6 leading-tight">
            جاهز تضاعف
            <br />
            <span className="text-gold">مبيعات متجرك؟</span>
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-xl mx-auto">
            احجز استشارة مجانية الآن. نحلل متجرك ونقترح عليك خطة عمل واضحة 
            ومناسبة لميزانيتك وأهدافك.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary flex items-center gap-2 text-lg px-10 py-4"
            >
              <Calendar className="w-5 h-5" />
              احجز استشارتك المجانية
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <a
              href="https://wa.me/966500000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-navy font-bold text-lg 
                         hover:text-gold transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              أو تواصل عبر واتساب
            </a>
          </div>

          <p className="text-gray-400 text-sm mt-6">
            الاستشارة مجانية • بدون التزامات • رد خلال 24 ساعة
          </p>
        </motion.div>
      </div>
    </section>
  )
}
