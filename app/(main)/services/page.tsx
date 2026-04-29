import type { Metadata } from 'next'
import Link from 'next/link'
import { ShoppingBag, Megaphone, Search, TrendingUp, CheckCircle, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'الخدمات | محمد العربي',
  description:
    'خدمات متكاملة لنمو متجرك الإلكتروني في السعودية: تصميم متاجر، إعلانات، SEO، وتحسين التحويل.',
}

const services = [
  {
    id: 'ecommerce-store',
    icon: ShoppingBag,
    title: 'تصميم المتاجر الإلكترونية',
    description:
      'نصمم متجرك على سلة أو زد بأسلوب يجذب عملاءك ويحوّلهم إلى مشترين. كل عنصر في المتجر مدروس لتحسين التحويل وزيادة المبيعات.',
    tasks: [
      'تصميم واجهة المستخدم UI/UX الاحترافية',
      'إعداد صفحات المنتجات المُحسَّنة للتحويل',
      'تهيئة نظام الدفع وخيارات الشحن',
      'تحسين سرعة التحميل والأداء التقني',
      'تفعيل نظام التقييمات والمراجعات',
      'إعداد صفحة الهبوط للعروض والمواسم',
    ],
    cta: 'اطلب خدمة تصميم المتجر',
    href: '/contact?service=ecommerce-store',
    color: 'bg-navy',
  },
  {
    id: 'ads-management',
    icon: Megaphone,
    title: 'إدارة الإعلانات المدفوعة',
    description:
      'حملات إعلانية على سناب وتيك توك وميتا تستهدف عملاءك المثاليين بالرسالة الصحيحة في الوقت الصحيح. نحسّنها باستمرار لتحقيق أقصى ROAS.',
    tasks: [
      'استراتيجية إعلانية شاملة متكاملة',
      'إنشاء الإعلانات والكريتيف الجذاب',
      'استهداف دقيق للجمهور المثالي',
      'تتبع وتحليل الأداء يومياً',
      'تحسين مستمر بناءً على البيانات',
      'تقارير شهرية تفصيلية شفافة',
    ],
    cta: 'اطلب خدمة إدارة الإعلانات',
    href: '/contact?service=ads-management',
    color: 'bg-gold',
  },
  {
    id: 'seo-optimization',
    icon: Search,
    title: 'تحسين محركات البحث SEO',
    description:
      'ظهور مستدام في الصفحة الأولى لكلمات بحثية عالية النية في السوق السعودي. عملاء يصلون إليك مجاناً ومستمرون.',
    tasks: [
      'بحث الكلمات المفتاحية المتخصص في السوق السعودي',
      'تحسين صفحات المنتجات والفئات',
      'كتابة محتوى SEO متخصص في التجارة الإلكترونية',
      'بناء الروابط الخلفية عالية الجودة',
      'SEO التقني والأداء الفني للموقع',
      'تقارير ترتيب شهرية ومقارنة بالمنافسين',
    ],
    cta: 'اطلب خدمة SEO',
    href: '/contact?service=seo',
    color: 'bg-emerald-600',
  },
  {
    id: 'cro',
    icon: TrendingUp,
    title: 'تحسين معدل التحويل CRO',
    description:
      'كل زيارة تصل إلى متجرك هي فرصة. نحلل رحلة عميلك الكاملة ونزيل كل عائق يمنعه من الشراء.',
    tasks: [
      'تحليل سلوك الزوار بـ Heatmaps وتسجيلات الجلسات',
      'تحسين صفحة المنتج وسلة التسوق',
      'تقليل نسبة السلات المتروكة',
      'اختبارات A/B للعناوين والصور والأزرار',
      'تحسين تجربة الشراء على الجوال',
      'إعداد نظام استرداد السلات المتروكة',
    ],
    cta: 'اطلب خدمة تحسين التحويل',
    href: '/contact?service=cro',
    color: 'bg-violet-600',
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-max text-center max-w-3xl">
          <h1 className="section-title text-3xl md:text-5xl mb-4">
            حلول متكاملة لنمو{' '}
            <span className="text-gold">متجرك الإلكتروني</span>
          </h1>
          <p className="section-subtitle text-xl">
            كل خدمة مصممة خصيصًا للسوق السعودي. نتائج حقيقية وأرقام قابلة للقياس.
          </p>
          <div className="gold-line mx-auto mt-6" />
        </div>
      </section>

      {/* Services Sections */}
      <div className="bg-white">
        {services.map((service, i) => {
          const Icon = service.icon
          const isEven = i % 2 === 0
          return (
            <section
              key={service.id}
              id={service.id}
              className={`section-padding ${isEven ? 'bg-white' : 'bg-gray-50'} 
                         border-b border-gray-100`}
            >
              <div className="container-max">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center
                              ${isEven ? '' : 'lg:flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <div
                      className={`w-16 h-16 ${service.color} rounded-2xl 
                                  flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-navy mb-4">{service.title}</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                      {service.description}
                    </p>
                    <Link
                      href={service.href}
                      className="btn-primary flex items-center gap-2 inline-flex mb-8"
                    >
                      {service.cta}
                      <ArrowLeft className="w-5 h-5" />
                    </Link>
                  </div>

                  {/* Tasks List */}
                  <div className={`card p-8 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <h3 className="font-bold text-navy text-lg mb-6 flex items-center gap-2">
                      <span className="w-2 h-6 bg-gold rounded-full" />
                      ماذا يشمل؟
                    </h3>
                    <ul className="space-y-4">
                      {service.tasks.map((task) => (
                        <li key={task} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                          <span className="text-gray-700">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          )
        })}
      </div>

      {/* CTA */}
      <section className="section-padding bg-navy text-white text-center">
        <div className="container-max max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            مش عارف تبدأ من وين؟
          </h2>
          <p className="text-white/70 text-lg mb-8">
            احجز استشارة مجانية — نحلل متجرك ونقترح الخدمة المناسبة
          </p>
          <Link href="/contact" className="btn-outline-gold">
            احجز استشارتك المجانية
          </Link>
        </div>
      </section>
    </div>
  )
}
