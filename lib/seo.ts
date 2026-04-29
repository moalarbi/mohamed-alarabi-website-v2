import type { Metadata } from 'next'

const siteConfig = {
  name: 'محمد العربي',
  title: 'محمد العربي | خبير التجارة الإلكترونية في السعودية',
  description:
    'نحول متجرك الإلكتروني من مجرد منصة عرض إلى ماكينة مبيعات مستدامة. خبرة متخصصة في السوق السعودي.',
  url: 'https://mohamed-alarabi.com',
  locale: 'ar_SA',
  twitter: '@Mohamed_AlArabi',
}

export function generatePageMetadata({
  title,
  description,
  path = '',
}: {
  title?: string
  description?: string
  path?: string
}): Metadata {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : siteConfig.title

  const fullDescription = description || siteConfig.description
  const url = `${siteConfig.url}${path}`

  return {
    title: fullTitle,
    description: fullDescription,
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      creator: siteConfig.twitter,
    },
    alternates: {
      canonical: url,
    },
  }
}
