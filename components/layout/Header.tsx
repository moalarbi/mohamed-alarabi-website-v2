'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'الرئيسية', href: '/' },
  {
    label: 'الخدمات',
    href: '/services',
    children: [
      { label: 'تصميم المتاجر', href: '/services/ecommerce-store' },
      { label: 'إدارة الإعلانات', href: '/services/ads-management' },
      { label: 'تحسين SEO', href: '/services/seo-optimization' },
      { label: 'تحسين التحويل CRO', href: '/services/cro' },
    ],
  },
  { label: 'دراسات حالة', href: '/case-studies' },
  { label: 'المدونة', href: '/blog' },
  { label: 'من أنا', href: '/about' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 right-0 left-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      )}
    >
      <div className="container-max px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Right side (RTL) */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-navy rounded-xl flex items-center justify-center 
                           group-hover:bg-gold transition-colors duration-300">
              <span className="text-white font-bold text-lg">م</span>
            </div>
            <div>
              <p className="font-bold text-navy text-lg leading-none">محمد العربي</p>
              <p className="text-xs text-gold font-medium">خبير التجارة الإلكترونية</p>
            </div>
          </Link>

          {/* Desktop Nav - Center */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    'flex items-center gap-1 px-4 py-2 rounded-lg text-gray-700 font-medium',
                    'hover:text-navy hover:bg-navy/5 transition-all duration-200',
                    scrolled ? 'text-gray-700' : 'text-gray-800'
                  )}
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown className="w-4 h-4 opacity-60" />
                  )}
                </Link>

                {/* Dropdown */}
                {link.children && activeDropdown === link.label && (
                  <div className="absolute top-full right-0 mt-1 w-52 bg-white rounded-xl 
                                  shadow-xl border border-gray-100 py-2 z-50">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-gray-700 hover:text-navy 
                                   hover:bg-navy/5 transition-colors duration-200 text-sm font-medium"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button - Left side (RTL) */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="btn-primary text-base px-6 py-2.5"
            >
              احجز استشارتك
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-navy/5 transition-colors"
            aria-label="القائمة"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-navy" />
            ) : (
              <Menu className="w-6 h-6 text-navy" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="container-max px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-lg text-gray-700 font-semibold
                             hover:text-navy hover:bg-navy/5 transition-colors"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="mr-4 border-r-2 border-gold/30 pr-4 mb-2">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-600 
                                   hover:text-navy transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-2 border-t border-gray-100">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="btn-primary block text-center"
              >
                احجز استشارتك
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
