import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'المدونة | محمد العربي',
  description:
    'مقالات متخصصة في التجارة الإلكترونية والتسويق الرقمي للسوق السعودي. نصائح عملية ومثبتة.',
}

const posts = [
  {
    slug: 'best-payment-gateways-saudi-2026',
    category: 'التجارة الإلكترونية',
    title: 'أفضل بوابات الدفع في السعودية 2026 — مقارنة شاملة',
    excerpt:
      'اخترت بوابة الدفع الخطأ؟ هذا قد يكلفك 30% من مبيعاتك. مقارنة تفصيلية بين مدى وتابي وتمارا وSTC Pay مع توصياتي لكل نوع متجر.',
    readTime: '8 دقائق',
    date: '15 يناير 2026',
    tags: ['دفع إلكتروني', 'سلة', 'زد'],
  },
  {
    slug: 'reduce-abandoned-cart-saudi',
    category: 'تحسين التحويل',
    title: 'كيف تقلل سلات المتروكة في متجرك السعودي؟',
    excerpt:
      '70% من عملاءك يضيفون للسلة ولا يشترون. هذه الاستراتيجيات الـ 7 ستسترد 20-30% منهم خلال أسبوع واحد فقط.',
    readTime: '6 دقائق',
    date: '8 يناير 2026',
    tags: ['CRO', 'سلة', 'تسويق'],
  },
  {
    slug: 'snapchat-ads-saudi-ecommerce',
    title: 'دليل إعلانات سناب شات للمتاجر السعودية 2026',
    category: 'إعلانات مدفوعة',
    excerpt:
      'سناب شات هو أقوى قناة إعلانية للمتاجر السعودية — إذا عرفت كيف تستخدمه صح. هذا الدليل يشرح كل شيء من البداية.',
    readTime: '10 دقائق',
    date: '1 يناير 2026',
    tags: ['سناب شات', 'إعلانات', 'ROAS'],
  },
  {
    slug: 'seo-salla-store',
    title: 'تحسين SEO متجر سلة — دليل 2026',
    category: 'SEO',
    excerpt:
      'متجرك على سلة وما يظهر في نتائج البحث؟ هذا الدليل يوضح الخطوات العملية لتصدر نتائج جوجل في السوق السعودي.',
    readTime: '12 دقيقة',
    date: '20 ديسمبر 2025',
    tags: ['SEO', 'سلة', 'جوجل'],
  },
  {
    slug: 'tiktok-ads-saudi-products',
    title: 'كيف تبيع عبر تيك توك للسوق السعودي؟',
    category: 'إعلانات مدفوعة',
    excerpt:
      'تيك توك لم يعد مجرد ترفيه — صار منصة مبيعات حقيقية. أسرار الإعلانات التي تعمل في السوق السعودي.',
    readTime: '7 دقائق',
    date: '12 ديسمبر 2025',
    tags: ['تيك توك', 'فيديو', 'مبيعات'],
  },
  {
    slug: 'ramadan-ecommerce-strategy',
    title: 'استراتيجية التجارة الإلكترونية في رمضان — دليل شامل',
    category: 'استراتيجية',
    excerpt:
      'رمضان هو أكبر موسم تسوق في السعودية. كيف تستعد متجرك ليحقق أرقاماً قياسية؟ خطة عمل مفصّلة.',
    readTime: '9 دقائق',
    date: '5 ديسمبر 2025',
    tags: ['رمضان', 'موسمية', 'تخطيط'],
  },
]

const categories = ['الكل', 'التجارة الإلكترونية', 'إعلانات مدفوعة', 'SEO', 'تحسين التحويل', 'استراتيجية']

export default function BlogPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-max text-center max-w-3xl">
          <h1 className="section-title mb-4">
            مقالات متخصصة في{' '}
            <span className="text-gold">التجارة الإلكترونية السعودية</span>
          </h1>
          <p className="section-subtitle">
            نصائح عملية وتكتيكات مثبتة لنمو متجرك الإلكتروني في السوق السعودي
          </p>
          <div className="gold-line mx-auto mt-6" />
        </div>
      </section>

      {/* Blog Content */}
      <section className="section-padding bg-white">
        <div className="container-max">
          {/* Categories Filter */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all
                           ${cat === 'الكل' 
                             ? 'bg-navy text-white shadow-md' 
                             : 'bg-gray-100 text-gray-600 hover:bg-navy/5 hover:text-navy'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <article className="card overflow-hidden h-full flex flex-col">
                  {/* Thumbnail placeholder */}
                  <div
                    className="h-48 bg-gradient-to-br from-navy to-navy-light relative overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, 
                        hsl(${i * 40 + 220}, 60%, 25%) 0%, 
                        hsl(${i * 40 + 240}, 50%, 35%) 100%)`,
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                      <span className="text-6xl font-black text-white">
                        {post.category.charAt(0)}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-gold text-white text-xs font-bold 
                                       px-3 py-1.5 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <h2 className="text-lg font-bold text-navy mb-3 leading-snug 
                                   group-hover:text-gold transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span key={tag} className="text-xs text-navy/60 bg-navy/5 
                                                   px-2 py-1 rounded-lg font-medium">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-xs text-gray-400 
                                   pt-4 border-t border-gray-100">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime} قراءة
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnet */}
      <section className="section-padding bg-gray-50">
        <div className="container-max text-center max-w-2xl">
          <h2 className="text-2xl font-bold text-navy mb-4">
            لا تفوّت أي مقال جديد
          </h2>
          <p className="text-gray-500 mb-6">
            اشترك في النشرة البريدية واحصل على أحدث المقالات والاستراتيجيات مباشرة لبريدك
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="بريدك الإلكتروني"
              className="flex-1 border border-gray-200 rounded-xl px-4 py-3 
                         focus:outline-none focus:border-navy transition-colors"
            />
            <button className="btn-primary shrink-0 px-6 py-3">اشتراك</button>
          </div>
        </div>
      </section>
    </div>
  )
}
