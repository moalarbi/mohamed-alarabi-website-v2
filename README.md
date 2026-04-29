# موقع محمد العربي — Personal Brand Website

موقع شخصي احترافي لمحمد العربي، خبير التجارة الإلكترونية والتسويق الرقمي في السوق السعودي.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + RTL Support
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Font:** Cairo (Arabic + Latin)
- **Hosting:** Vercel (recommended)

## Design System

| Token | Value |
|-------|-------|
| Primary (Navy) | `#1A237E` |
| Secondary (Gold) | `#C5A059` |
| Background | `#F5F5F5` |
| Font | Cairo |

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
open http://localhost:3000
```

## Pages Structure

```
app/
├── (main)/
│   ├── page.tsx          → الصفحة الرئيسية
│   ├── about/page.tsx    → من أنا
│   ├── services/page.tsx → الخدمات
│   ├── contact/page.tsx  → تواصل معي
│   └── blog/page.tsx     → المدونة
└── layout.tsx            → Root Layout (SEO + Fonts)
```

## Sections on Home Page

1. **Hero** — عنوان قوي + CTA + أرقام
2. **Trust Bar** — شريط شعارات المتاجر المتحرك
3. **Services** — 4 خدمات رئيسية
4. **Case Studies** — دراسات حالة قبل/بعد
5. **Stats** — أرقام وإحصائيات متحركة
6. **Lead Magnet** — دليل مجاني مقابل الإيميل
7. **Testimonials** — آراء العملاء
8. **CTA** — دعوة لإجراء نهائية

## Customization Checklist

- [ ] استبدل `966500000000` برقم واتساب حقيقي في `WhatsAppButton.tsx` و `contact/page.tsx`
- [ ] أضف صورتك الاحترافية في `components/sections/Hero.tsx`
- [ ] عدّل معلومات التواصل في `components/layout/Footer.tsx`
- [ ] ربط Google Analytics: أضف GA_ID في `app/layout.tsx`
- [ ] ربط Meta Pixel: أضف PIXEL_ID في `app/layout.tsx`
- [ ] عدّل بيانات دراسات الحالة في `components/sections/CaseStudies.tsx`
- [ ] أضف شهادات حقيقية في `components/sections/Testimonials.tsx`
- [ ] اربط نموذج التواصل بـ Formspree أو API خاص

## Deployment to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add custom domain in Vercel dashboard
# Connect: mohamed-alarabi.com
```

## Environment Variables

```env
# .env.local
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=XXXXXXXXXX
NEXT_PUBLIC_WHATSAPP_NUMBER=966500000000
FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxx
```

## Pre-launch Checklist

- [ ] Lighthouse Score > 90 (Performance)
- [ ] Meta Titles & Descriptions for all pages
- [ ] Schema Markup (Person + Service)
- [ ] WhatsApp links working
- [ ] Forms tested on iPhone + Android
- [ ] Google Analytics working
- [ ] robots.txt + sitemap.xml present
- [ ] Arabic text reviewed for grammar
- [ ] All images optimized (next/image)
- [ ] Mobile responsive tested

---

Built with ❤️ for the Saudi e-commerce market | 2026
