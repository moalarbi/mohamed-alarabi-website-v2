'use client'

import type { Metadata } from 'next'
import { useState } from 'react'
import { MessageCircle, Mail, MapPin, Clock, CheckCircle, Send } from 'lucide-react'

const contactInfo = [
  {
    icon: MessageCircle,
    label: 'واتساب',
    value: 'احجز موعد الاستشارة',
    href: 'https://wa.me/966500000000',
    color: 'text-green-500',
  },
  {
    icon: Mail,
    label: 'البريد الإلكتروني',
    value: 'hello@mohamed-alarabi.com',
    href: 'mailto:hello@mohamed-alarabi.com',
    color: 'text-blue-500',
  },
  {
    icon: MapPin,
    label: 'الموقع',
    value: 'الرياض، المملكة العربية السعودية',
    href: '#',
    color: 'text-gold',
  },
  {
    icon: Clock,
    label: 'وقت الرد',
    value: 'خلال 24 ساعة',
    href: '#',
    color: 'text-purple-500',
  },
]

const services = [
  'تصميم متجر إلكتروني',
  'إدارة الإعلانات المدفوعة',
  'تحسين محركات البحث SEO',
  'تحسين معدل التحويل CRO',
  'استشارة شاملة لمتجري',
  'خدمة أخرى',
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    store: '',
    service: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise((r) => setTimeout(r, 2000))
    setIsSubmitted(true)
    setIsLoading(false)
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-max text-center max-w-3xl">
          <h1 className="section-title mb-4">
            احجز <span className="text-gold">استشارتك المجانية</span>
          </h1>
          <p className="section-subtitle">
            أخبرني عن متجرك وأهدافك، وسأقترح عليك خطة عمل واضحة وقابلة للتنفيذ.
            الاستشارة مجانية وبدون أي التزام.
          </p>
          <div className="gold-line mx-auto mt-6" />
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-navy mb-6">معلومات التواصل</h2>
              <div className="space-y-5 mb-10">
                {contactInfo.map((info) => {
                  const Icon = info.icon
                  return (
                    <a
                      key={info.label}
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-4 card hover:border-gold/30 
                                 transition-colors group"
                    >
                      <div
                        className="w-12 h-12 rounded-xl bg-gray-50 flex items-center 
                                   justify-center shrink-0 group-hover:bg-gold/5 transition-colors"
                      >
                        <Icon className={`w-5 h-5 ${info.color}`} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-medium">{info.label}</p>
                        <p className="text-navy font-semibold text-sm">{info.value}</p>
                      </div>
                    </a>
                  )
                })}
              </div>

              {/* WhatsApp Quick Access */}
              <a
                href="https://wa.me/966500000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-full bg-green-500 hover:bg-green-600 
                           text-white p-4 rounded-2xl font-bold transition-colors"
              >
                <MessageCircle className="w-6 h-6 fill-white" />
                <span>تواصل مباشرة عبر واتساب</span>
              </a>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card p-8 md:p-10">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center 
                                   justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-navy mb-3">
                      تم الإرسال بنجاح! 🎉
                    </h3>
                    <p className="text-gray-600 mb-6">
                      شكراً لك! سأتواصل معك خلال 24 ساعة لتحديد موعد الاستشارة.
                    </p>
                    <a
                      href="https://wa.me/966500000000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center gap-2"
                    >
                      <MessageCircle className="w-5 h-5" />
                      أو تواصل الآن عبر واتساب
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="text-xl font-bold text-navy mb-6">نموذج الاستشارة</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          الاسم الكامل *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="محمد أحمد"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 
                                     focus:outline-none focus:border-navy transition-colors
                                     placeholder:text-gray-300"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          رقم الواتساب *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="05xxxxxxxx"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 
                                     focus:outline-none focus:border-navy transition-colors
                                     placeholder:text-gray-300"
                          dir="ltr"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        البريد الإلكتروني
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 
                                   focus:outline-none focus:border-navy transition-colors
                                   placeholder:text-gray-300"
                        dir="ltr"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        رابط متجرك (إن وجد)
                      </label>
                      <input
                        type="url"
                        name="store"
                        value={formData.store}
                        onChange={handleChange}
                        placeholder="https://store.sa"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 
                                   focus:outline-none focus:border-navy transition-colors
                                   placeholder:text-gray-300"
                        dir="ltr"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        الخدمة المطلوبة *
                      </label>
                      <select
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 
                                   focus:outline-none focus:border-navy transition-colors
                                   text-gray-700 bg-white"
                      >
                        <option value="">اختر الخدمة...</option>
                        {services.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        أخبرني عن متجرك وتحدياتك
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="مثلاً: متجري في مجال العباءات على سلة، مبيعاتي متوقفة منذ 3 أشهر، أريد تحسين الإعلانات..."
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 
                                   focus:outline-none focus:border-navy transition-colors resize-none
                                   placeholder:text-gray-300"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full btn-primary flex items-center justify-center gap-2 
                                 text-lg disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white 
                                        rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          إرسال طلب الاستشارة
                        </>
                      )}
                    </button>

                    <p className="text-gray-400 text-xs text-center">
                      🔒 معلوماتك محفوظة وآمنة. لن نشاركها مع أي طرف ثالث.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
