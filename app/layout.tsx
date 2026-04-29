import type { Metadata, Viewport } from 'next'
import { Cairo } from 'next/font/google'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1A237E',
}

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-cairo',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'محمد العربي | خبير التجارة الإلكترونية والتسويق الرقمي في السعودية',
    template: '%s | محمد العربي',
  },
  description:
    'نحول متجرك الإلكتروني من مجرد منصة عرض إلى ماكينة مبيعات مستدامة. خبرة متخصصة في السوق السعودي: تصميم متاجر، إدارة إعلانات، SEO، وتحسين التحويل.',
  keywords: [
    'تجارة إلكترونية',
    'تسويق رقمي',
    'سلة',
    'زد',
    'إعلانات سناب',
    'إعلانات تيك توك',
    'SEO السعودية',
    'محمد العربي',
    'استشاري تجارة إلكترونية',
    'الرياض',
  ],
  authors: [{ name: 'محمد العربي' }],
  creator: 'محمد العربي',
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: 'https://mohamed-alarabi.com',
    title: 'محمد العربي | خبير التجارة الإلكترونية',
    description: 'نحول متجرك الإلكتروني إلى ماكينة مبيعات مستدامة',
    siteName: 'محمد العربي',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'محمد العربي | خبير التجارة الإلكترونية',
    description: 'نحول متجرك الإلكتروني إلى ماكينة مبيعات مستدامة',
    creator: '@Mohamed_AlArabi',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'محمد العربي',
              jobTitle: 'خبير التجارة الإلكترونية والتسويق الرقمي',
              url: 'https://mohamed-alarabi.com',
              sameAs: [
                'https://twitter.com/Mohamed_AlArabi',
                'https://instagram.com/Mohamed_AlArabi',
                'https://linkedin.com/in/Mohamed-AlArabi',
              ],
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'الرياض',
                addressCountry: 'SA',
              },
            }),
          }}
        />
      </head>
      <body className={`font-cairo antialiased`}>{children}</body>
    </html>
  )
}
