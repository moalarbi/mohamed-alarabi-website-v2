import type { Metadata } from 'next'
import { Target, Lightbulb, Shield, TrendingUp, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'من أنا | محمد العربي',
  description:
    'قصة محمد العربي — خبير التجارة الإلكترونية والتسويق الرقمي في السوق السعودي. +5 سنوات من النتائج المثبتة.',
}

const values = [
  {
    icon: Target,
    title: 'التركيز على النتائج',
    description: 'كل استراتيجية نبنيها مرتبطة بأرقام حقيقية وأهداف واضحة. لا وعود فضفاضة.',
  },
  {
    icon: Shield,
    title: 'الشفافية الكاملة',
    description: 'تقارير شاملة، أرقام حقيقية، وتواصل مستمر. تعرف دائماً أين تُصرف كل ريال.',
  },
  {
    icon: Lightbulb,
    title: 'الابتكار المستمر',
    description: 'السوق الرقمي يتغير كل يوم. نحن نتابع كل جديد ونطبق ما يناسب متجرك.',
  },
]

const milestones = [
  { year: '2019', title: 'البداية', desc: 'أول متجر إلكتروني ناجح أديره على منصة سلة' },
  { year: '2020', title: 'التوسع', desc: 'إطلاق خدمات إدارة الإعلانات للمتاجر السعودية' },
  { year: '2021', title: 'التعليم', desc: 'أول كورس لأصحاب المتاجر الإلكترونية — 500+ متدرب' },
  { year: '2022', title: 'النمو', desc: 'تجاوزنا 30 متجر نديرها ونطورها بشكل متزامن' },
  { year: '2023', title: 'التخصص', desc: 'تخصص كامل في السوق السعودي وتحقيق نتائج قياسية' },
  { year: '2024+', title: 'الريادة', desc: 'بناء فريق متخصص لخدمة المزيد من المتاجر السعودية' },
]

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-navy to-navy-light text-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-gold/20 rounded-full px-4 py-1.5 mb-6">
                <span className="text-sm font-semibold text-gold">من أنا</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                محمد العربي
                <br />
                <span className="text-gold text-3xl font-bold">
                  خبير التجارة الإلكترونية في السوق السعودي
                </span>
              </h1>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                بدأت رحلتي في عالم التجارة الإلكترونية من مكاني في الرياض، بشغف حقيقي 
                بفهم السوق السعودي وما يجعل المستهلك السعودي يشتري. اليوم، بعد +5 سنوات 
                من العمل مع عشرات المتاجر، أصبح لدي منهجية مثبتة تحقق نتائج حقيقية.
              </p>
              <Link href="/contact" className="btn-outline-gold">
                احجز استشارة معي
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-square max-w-md mx-auto rounded-3xl bg-white/10 
                             backdrop-blur-sm border border-white/20 flex items-center 
                             justify-center overflow-hidden">
                {/* Placeholder for photo */}
                <div className="text-center text-white opacity-40">
                  <div className="w-40 h-40 rounded-full bg-white/20 mx-auto mb-4 
                                 flex items-center justify-center">
                    <span className="text-8xl font-black">م</span>
                  </div>
                  <p className="text-sm">أضف صورتك الاحترافية</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">القصة الكاملة</h2>
            <div className="gold-line mx-auto" />
          </div>
          <div className="prose-style space-y-6 text-gray-600 text-lg leading-relaxed">
            <p>
              كثيرون يسألونني: لماذا التجارة الإلكترونية تحديداً؟ والجواب بسيط — رأيت بعيني 
              كيف يمكن لمتجر صغير أن يتحول إلى مصدر دخل حقيقي ومستدام، وأردت أن أساعد 
              الآخرين على تحقيق ذلك.
            </p>
            <p>
              بدأت في 2019 بإدارة متجر واحد. أخطأت كثيراً، وتعلمت أكثر. كل ريال أُهدر 
              على إعلانات غير فعالة كان درساً. وكل عميل لم يكمل عملية الشراء كان سؤالاً 
              أجيب عنه بالتجربة والتحليل.
            </p>
            <p>
              اليوم، المنهجية التي طورتها مبنية على بيانات حقيقية من السوق السعودي، 
              وليس نقل نماذج غربية لا تناسب ثقافتنا وسلوك مستهلكنا.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">قيمي في العمل</h2>
            <div className="gold-line mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div key={value.title} className="card p-8 text-center">
                  <div className="w-16 h-16 bg-navy rounded-2xl flex items-center 
                                 justify-center mx-auto mb-5">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">مسيرة الخبرة</h2>
            <div className="gold-line mx-auto" />
          </div>
          <div className="relative">
            <div className="absolute right-6 top-0 bottom-0 w-0.5 bg-gold/30" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={m.year} className="flex gap-8 items-start">
                  <div className="relative shrink-0">
                    <div className="w-12 h-12 rounded-full bg-navy border-4 border-gold/30 
                                   flex items-center justify-center z-10 relative">
                      <span className="text-white text-xs font-bold">{m.year.slice(2)}</span>
                    </div>
                  </div>
                  <div className="card p-5 flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-gold font-bold text-sm">{m.year}</span>
                      <h3 className="font-bold text-navy">{m.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy text-white text-center">
        <div className="container-max max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            نعمل معاً على نجاح متجرك
          </h2>
          <p className="text-white/70 text-lg mb-8">
            احجز استشارة مجانية وأخبرني عن متجرك وأهدافك
          </p>
          <Link href="/contact" className="btn-outline-gold">
            احجز استشارتك الآن
          </Link>
        </div>
      </section>
    </div>
  )
}
