import Link from 'next/link'
import { Twitter, Instagram, Youtube, Send, Mail, Phone, MapPin } from 'lucide-react'

const quickLinks = [
  { label: 'الرئيسية', href: '/' },
  { label: 'من أنا', href: '/about' },
  { label: 'الخدمات', href: '/services' },
  { label: 'دراسات حالة', href: '/case-studies' },
  { label: 'المدونة', href: '/blog' },
  { label: 'تواصل معي', href: '/contact' },
]

const services = [
  { label: 'تصميم المتاجر الإلكترونية', href: '/services/ecommerce-store' },
  { label: 'إدارة الإعلانات المدفوعة', href: '/services/ads-management' },
  { label: 'تحسين محركات البحث SEO', href: '/services/seo-optimization' },
  { label: 'تحسين معدل التحويل CRO', href: '/services/cro' },
]

const socialLinks = [
  { icon: Twitter, label: 'تويتر', href: 'https://twitter.com/Mohamed_AlArabi', color: 'hover:text-sky-400' },
  { icon: Instagram, label: 'انستاغرام', href: 'https://instagram.com/Mohamed_AlArabi', color: 'hover:text-pink-400' },
  { icon: Youtube, label: 'يوتيوب', href: 'https://youtube.com/@Mohamed_AlArabi', color: 'hover:text-red-400' },
  { icon: Send, label: 'تيليجرام', href: 'https://t.me/Mohamed_AlArabi', color: 'hover:text-blue-400' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-dark text-white">
      {/* Main Footer */}
      <div className="container-max section-padding pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gold rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">م</span>
              </div>
              <div>
                <p className="font-bold text-white text-lg leading-none">محمد العربي</p>
                <p className="text-xs text-gold font-medium">خبير التجارة الإلكترونية</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              نحول متجرك الإلكتروني من مجرد منصة عرض إلى ماكينة مبيعات مستدامة. 
              خبرة متخصصة في السوق السعودي.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, label, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={cn(
                    'w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center',
                    'hover:bg-white/20 transition-all duration-200',
                    color
                  )}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white text-lg mb-5 relative">
              روابط سريعة
              <span className="absolute -bottom-2 right-0 w-8 h-0.5 bg-gold rounded-full" />
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-gold transition-colors duration-200 
                               text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/50 
                                     group-hover:bg-gold transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white text-lg mb-5 relative">
              الخدمات
              <span className="absolute -bottom-2 right-0 w-8 h-0.5 bg-gold rounded-full" />
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-gold transition-colors duration-200 
                               text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/50 
                                     group-hover:bg-gold transition-colors" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-white text-lg mb-5 relative">
              تواصل معي
              <span className="absolute -bottom-2 right-0 w-8 h-0.5 bg-gold rounded-full" />
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hello@mohamed-alarabi.com"
                  className="flex items-center gap-3 text-gray-300 hover:text-gold 
                             transition-colors duration-200 text-sm"
                >
                  <Mail className="w-4 h-4 text-gold shrink-0" />
                  hello@mohamed-alarabi.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/966500000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-gold 
                             transition-colors duration-200 text-sm"
                >
                  <Phone className="w-4 h-4 text-gold shrink-0" />
                  واتساب: احجز استشارة
                </a>
              </li>
              <li>
                <span className="flex items-center gap-3 text-gray-300 text-sm">
                  <MapPin className="w-4 h-4 text-gold shrink-0" />
                  الرياض، المملكة العربية السعودية
                </span>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-sm text-gray-300 mb-3">اشترك في النشرة البريدية</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="بريدك الإلكتروني"
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 
                             text-sm text-white placeholder:text-gray-400 
                             focus:outline-none focus:border-gold transition-colors"
                />
                <button className="px-4 py-2 bg-gold hover:bg-gold-dark rounded-lg 
                                   text-white text-sm font-medium transition-colors shrink-0">
                  اشتراك
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-max px-4 md:px-8 lg:px-16 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-gray-400 text-sm">
              © {currentYear} محمد العربي. جميع الحقوق محفوظة.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-gold text-sm transition-colors"
              >
                سياسة الخصوصية
              </Link>
              <span className="text-gray-600">|</span>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-gold text-sm transition-colors"
              >
                الشروط والأحكام
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Need cn utility inline since this is a server component
function cn(...classes: string[]): string {
  return classes.filter(Boolean).join(' ')
}
